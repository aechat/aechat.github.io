#!/usr/bin/env node
import {existsSync, mkdirSync, readdirSync, readFileSync} from "node:fs";

import {basename, dirname, extname, relative, resolve, sep} from "node:path";

import {spawn} from "node:child_process";

const FONTTOOLS_PACKAGE = "@web-alchemy/fonttools";

const FONTTOOLS_RUNNERS = [
  ["-y", "-p", FONTTOOLS_PACKAGE, "varLib.instancer"],
  ["-y", "-p", FONTTOOLS_PACKAGE, "fonttools", "varLib.instancer"],
  ["-y", FONTTOOLS_PACKAGE, "varLib.instancer"],
];

const NPM_EXEC_RUNNER = [
  "exec",
  "-y",
  "--package",
  FONTTOOLS_PACKAGE,
  "--",
  "varLib.instancer",
];

const COMMAND_CANDIDATES =
  process.platform === "win32"
    ? {
        npm: ["npm.cmd"],
        npx: ["npx.cmd"],
      }
    : {
        npm: ["npm"],
        npx: ["npx"],
      };

const SCAN_EXTENSIONS = new Set([".scss", ".ts", ".tsx"]);

let resolvedBackendRunner = null;

const printUsage = () => {
  console.log(
    `
Создаёт статические TTF-файлы из вариативных шрифтов.
Использование:
  node scripts/fonts/generateStaticFonts.js [опции]
Опции:
  --weights 100,375,425   Насыщенности через запятую
  --fonts-root src/fonts  Корневая директория семейств шрифтов
  --scan-root src         Директория для автоопределения насыщенностей
  --family Inter,Onest    Ограничить генерацию указанными семействами
  --overwrite             Перезаписывать существующие файлы
  --dry-run               Показать план без запуска fonttools
  --local-cache           Использовать локальный .npm-cache для npm/npx
  --help                  Показать справку
`.trim()
  );
};

const parseNumberList = (value, argName) => {
  const parsed = [
    ...new Set(
      value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => Number(item))
        .filter((item) => Number.isInteger(item) && item > 0)
    ),
  ].sort((a, b) => a - b);

  if (parsed.length === 0) {
    throw new Error(`${argName} должен содержать хотя бы одно положительное целое число`);
  }

  return parsed;
};

const parseStringList = (value) => {
  const parsed = [
    ...new Set(
      value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    ),
  ];

  return parsed.length === 0 ? null : parsed;
};

const readOptionValue = (argv, index, flagName) => {
  const arg = argv[index];

  if (arg === flagName) {
    const nextArg = argv[index + 1];

    if (!nextArg) {
      throw new Error(`Для ${flagName} нужно указать значение`);
    }

    return {consumedNext: true, value: nextArg};
  }

  if (arg.startsWith(`${flagName}=`)) {
    return {consumedNext: false, value: arg.slice(flagName.length + 1)};
  }

  return null;
};

const parseArgs = (argv) => {
  const options = {
    dryRun: false,
    overwrite: false,
    localCache: false,
    fontsRoot: "src/fonts",
    scanRoot: "src",
    families: null,
    weights: null,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help" || arg === "-h") {
      printUsage();
      process.exit(0);
    }

    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }

    if (arg === "--overwrite") {
      options.overwrite = true;
      continue;
    }

    if (arg === "--local-cache") {
      options.localCache = true;
      continue;
    }

    const weightsOption = readOptionValue(argv, index, "--weights");

    if (weightsOption) {
      options.weights = parseNumberList(weightsOption.value, "--weights");

      if (weightsOption.consumedNext) {
        index += 1;
      }

      continue;
    }

    const fontsRootOption = readOptionValue(argv, index, "--fonts-root");

    if (fontsRootOption) {
      options.fontsRoot = fontsRootOption.value;

      if (fontsRootOption.consumedNext) {
        index += 1;
      }

      continue;
    }

    const scanRootOption = readOptionValue(argv, index, "--scan-root");

    if (scanRootOption) {
      options.scanRoot = scanRootOption.value;

      if (scanRootOption.consumedNext) {
        index += 1;
      }

      continue;
    }

    const familyOption = readOptionValue(argv, index, "--family");

    if (familyOption) {
      options.families = parseStringList(familyOption.value);

      if (familyOption.consumedNext) {
        index += 1;
      }

      continue;
    }

    throw new Error(`Неизвестный аргумент: ${arg}`);
  }

  return options;
};

const collectUsedWeights = (scanRoot) => {
  const queue = [scanRoot];

  const weights = new Set();

  const cssWeightPattern = /font-weight\s*:\s*(\d{2,3})(?!\d)(?!\s+\d{2,3}\b)/giu;

  const jsWeightPattern = /fontWeight\s*:\s*["']?(\d{2,3})["']?/giu;

  while (queue.length > 0) {
    const currentDirectory = queue.pop();

    const entries = readdirSync(currentDirectory, {withFileTypes: true});

    for (const entry of entries) {
      const fullPath = resolve(currentDirectory, entry.name);

      if (entry.isDirectory()) {
        queue.push(fullPath);
        continue;
      }

      if (!entry.isFile() || !SCAN_EXTENSIONS.has(extname(entry.name))) {
        continue;
      }

      const content = readFileSync(fullPath, "utf8");

      let match = cssWeightPattern.exec(content);

      while (match) {
        weights.add(Number(match[1]));
        match = cssWeightPattern.exec(content);
      }

      match = jsWeightPattern.exec(content);

      while (match) {
        weights.add(Number(match[1]));
        match = jsWeightPattern.exec(content);
      }
    }
  }

  return [...weights].sort((left, right) => left - right);
};

const walkVariableFonts = (rootDirectory) => {
  const queue = [rootDirectory];

  const variableFonts = [];

  while (queue.length > 0) {
    const currentDirectory = queue.pop();

    const entries = readdirSync(currentDirectory, {withFileTypes: true});

    for (const entry of entries) {
      const fullPath = resolve(currentDirectory, entry.name);

      if (entry.isDirectory()) {
        if (entry.name === "static" || entry.name === "ttf") {
          continue;
        }

        queue.push(fullPath);
        continue;
      }

      if (entry.isFile() && /VariableFont.*\.ttf$/iu.test(entry.name)) {
        variableFonts.push(fullPath);
      }
    }
  }

  return variableFonts.sort();
};

const toRelativePath = (projectRoot, absolutePath) => {
  const relativePath = relative(projectRoot, absolutePath);

  if (relativePath.startsWith("..")) {
    throw new Error(`Путь должен находиться внутри корня проекта: ${absolutePath}`);
  }

  return relativePath.split(sep).join("/");
};

const runCommand = (command, args, {projectRoot, localCache}) =>
  new Promise((resolvePromise, rejectPromise) => {
    const environment = {...process.env};

    const needsShell =
      process.platform === "win32" &&
      (command.endsWith(".cmd") ||
        command.endsWith(".bat") ||
        command === "npm" ||
        command === "npx");

    if (localCache) {
      const cachePath = resolve(projectRoot, ".npm-cache");

      mkdirSync(cachePath, {recursive: true});
      environment.npm_config_cache = cachePath;
    }

    const child = spawn(command, args, {
      cwd: projectRoot,
      env: environment,
      shell: needsShell,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stdout = "";

    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });

    child.on("error", (error) => {
      rejectPromise(error);
    });

    child.on("close", (exitCode) => {
      if (exitCode === 0) {
        resolvePromise({stdout, stderr});

        return;
      }

      const details = (stderr || stdout || "").trim();

      rejectPromise(
        new Error(
          `Команда завершилась с ошибкой (${exitCode}): ${command} ${args.join(" ")}${
            details ? `\n${details}` : ""
          }`
        )
      );
    });
  });

const getNpxRunners = () => {
  const runners = [];

  for (const command of COMMAND_CANDIDATES.npx) {
    for (const runner of FONTTOOLS_RUNNERS) {
      runners.push({
        argsPrefix: runner,
        command,
        label: `${command} ${runner.join(" ")}`,
        type: "npx",
      });
    }
  }

  for (const command of COMMAND_CANDIDATES.npm) {
    runners.push({
      argsPrefix: NPM_EXEC_RUNNER,
      command,
      label: `${command} ${NPM_EXEC_RUNNER.join(" ")}`,
      type: "npx",
    });
  }

  return runners;
};

const getPythonRunners = (projectRoot) => {
  const executableCandidates =
    process.platform === "win32"
      ? [resolve(projectRoot, ".venv-font", "Scripts", "python.exe"), "py", "python"]
      : [resolve(projectRoot, ".venv-font", "bin", "python"), "python3", "python"];

  const uniqueExecutables = [...new Set(executableCandidates)].filter(
    (candidate) => !candidate.includes(sep) || existsSync(candidate)
  );

  return uniqueExecutables.map((command) => ({
    argsPrefix: ["-m", "fontTools.varLib.instancer"],
    command,
    label: `${command} -m fontTools.varLib.instancer`,
    type: "python",
  }));
};

const getAllRunners = (projectRoot) => [
  ...getPythonRunners(projectRoot),
  ...getNpxRunners(),
];

const instantiateFont = async ({
  projectRoot,
  localCache,
  inputPath,
  outputPath,
  weight,
}) => {
  const relativeInput = toRelativePath(projectRoot, inputPath);

  const relativeOutput = toRelativePath(projectRoot, outputPath);

  const tailArgs = [relativeInput, `wght=${weight}`, "--static", "-o", relativeOutput];

  const allCandidates = getAllRunners(projectRoot);

  const candidates = resolvedBackendRunner
    ? [
        resolvedBackendRunner,
        ...allCandidates.filter(
          (candidate) =>
            candidate.command !== resolvedBackendRunner.command ||
            candidate.label !== resolvedBackendRunner.label
        ),
      ]
    : allCandidates;

  const errors = [];

  for (const candidate of candidates) {
    try {
      await runCommand(candidate.command, [...candidate.argsPrefix, ...tailArgs], {
        localCache,
        projectRoot,
      });

      resolvedBackendRunner = candidate;

      return;
    } catch (error) {
      errors.push(`[${candidate.label}] ${error.message}`);
    }
  }

  throw new Error(
    [
      "Не удалось создать статический шрифт доступными раннерами (python/npx).",
      ...errors.map((error, index) => `${index + 1}. ${error}`),
      process.platform === "win32"
        ? "Подсказка: установите python fonttools в .venv-font: .\\.venv-font\\Scripts\\python.exe -m pip install fonttools"
        : "Подсказка: установите python fonttools: python3 -m pip install fonttools",
    ].join("\n")
  );
};

const getOutputFileName = (familyName, isItalic, weight) =>
  `${familyName}-${weight}${isItalic ? "-Italic" : ""}.ttf`;

const main = async () => {
  const options = parseArgs(process.argv.slice(2));

  const projectRoot = process.cwd();

  const fontsRoot = resolve(projectRoot, options.fontsRoot);

  const scanRoot = resolve(projectRoot, options.scanRoot);

  if (!existsSync(fontsRoot)) {
    throw new Error(`Корневая директория шрифтов не существует: ${fontsRoot}`);
  }

  if (!options.weights && !existsSync(scanRoot)) {
    throw new Error(`Директория сканирования не существует: ${scanRoot}`);
  }

  const weights = options.weights ?? collectUsedWeights(scanRoot);

  if (weights.length === 0) {
    throw new Error(
      "Не найдены числовые насыщенности шрифтов. Передайте --weights вручную."
    );
  }

  const familyFilter = options.families ? new Set(options.families) : null;

  const variableFonts = walkVariableFonts(fontsRoot).filter((fontPath) => {
    if (!familyFilter) {
      return true;
    }

    const familyName = basename(dirname(fontPath));

    return familyFilter.has(familyName);
  });

  if (variableFonts.length === 0) {
    console.log("Вариативные шрифты по выбранным фильтрам не найдены.");

    return;
  }

  console.log(
    `Насыщенности: ${weights.join(", ")}${
      options.weights ? "" : ` (авто из ${toRelativePath(projectRoot, scanRoot)})`
    }`
  );

  console.log(`Корень шрифтов: ${toRelativePath(projectRoot, fontsRoot)}`);

  if (familyFilter) {
    console.log(`Семейства: ${[...familyFilter].join(", ")}`);
  }

  if (options.dryRun) {
    console.log("Режим: пробный запуск");
  }

  let createdCount = 0;

  let skippedCount = 0;

  let failedCount = 0;

  let plannedCount = 0;

  for (const inputPath of variableFonts) {
    const familyDirectory = dirname(inputPath);

    const familyName = basename(familyDirectory);

    const isItalic = /italic/iu.test(basename(inputPath));

    const outputDirectory = resolve(familyDirectory, "static");

    mkdirSync(outputDirectory, {recursive: true});

    for (const weight of weights) {
      const outputPath = resolve(
        outputDirectory,
        getOutputFileName(familyName, isItalic, weight)
      );

      if (!options.overwrite && existsSync(outputPath)) {
        skippedCount += 1;
        continue;
      }

      const relativeInput = toRelativePath(projectRoot, inputPath);

      const relativeOutput = toRelativePath(projectRoot, outputPath);

      if (options.dryRun) {
        plannedCount += 1;
        console.log(`[план] ${relativeInput} -> ${relativeOutput} (wght=${weight})`);
        continue;
      }

      try {
        await instantiateFont({
          projectRoot,
          localCache: options.localCache,
          inputPath,
          outputPath,
          weight,
        });

        createdCount += 1;
        console.log(`[готово] ${relativeOutput}`);
      } catch (error) {
        failedCount += 1;
        console.error(`[ошибка] ${relativeOutput}`);
        console.error(error.message);
      }
    }
  }

  console.log(
    `Готово. Создано=${createdCount}, пропущено=${skippedCount}, запланировано=${plannedCount}, ошибок=${failedCount}`
  );

  if (failedCount > 0) {
    process.exitCode = 1;
  }
};

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
