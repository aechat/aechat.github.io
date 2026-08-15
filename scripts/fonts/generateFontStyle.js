#!/usr/bin/env node
import {existsSync, readdirSync, writeFileSync} from "node:fs";

import {basename, extname, relative, resolve, sep} from "node:path";

const VARIABLE_FONT_PATTERN = /VariableFont.*\.ttf$/iu;

const FONT_EXTENSION = ".ttf";

const STATIC_FOLDER_NAME = "static";

const DEFAULT_FONTS_ROOT = "src/fonts";

const DEFAULT_OUTPUT = "src/styles/base/_fonts.scss";

const FAMILY_NAME_ALIASES = new Map([
  ["JetBrainsMono", "JetBrains Mono"],
  ["RedHatDisplay", "Red Hat Display"],
]);

const WEIGHT_TOKENS = [
  {token: "extralight", weight: 200},
  {token: "semibold", weight: 600},
  {token: "extrabold", weight: 800},
  {token: "regular", weight: 400},
  {token: "medium", weight: 500},
  {token: "light", weight: 300},
  {token: "black", weight: 900},
  {token: "bold", weight: 700},
  {token: "thin", weight: 100},
];

const STYLE_ORDER = {
  italic: 1,
  normal: 0,
};

const printUsage = () => {
  console.log(
    `
Создаёт src/styles/base/_fonts.scss из файлов в src/fonts.
Использование:
  node scripts/fonts/generateFontStyle.js [опции]
Опции:
  --fonts-root src/fonts                  Корневая директория семейств шрифтов
  --output src/styles/base/_fonts.scss    Целевой SCSS-файл
  --dry-run                               Вывести результат без записи файла
  --help                                  Показать справку
`.trim()
  );
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
    fontsRoot: DEFAULT_FONTS_ROOT,
    output: DEFAULT_OUTPUT,
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

    const fontsRootOption = readOptionValue(argv, index, "--fonts-root");

    if (fontsRootOption) {
      options.fontsRoot = fontsRootOption.value;

      if (fontsRootOption.consumedNext) {
        index += 1;
      }

      continue;
    }

    const outputOption = readOptionValue(argv, index, "--output");

    if (outputOption) {
      options.output = outputOption.value;

      if (outputOption.consumedNext) {
        index += 1;
      }

      continue;
    }

    throw new Error(`Неизвестный аргумент: ${arg}`);
  }

  return options;
};

const toRelativePath = (projectRoot, absolutePath) => {
  const relativePath = relative(projectRoot, absolutePath);

  if (relativePath.startsWith("..")) {
    throw new Error(`Путь должен находиться внутри корня проекта: ${absolutePath}`);
  }

  return relativePath.split(sep).join("/");
};

const toPublicFontUrl = (projectRoot, absolutePath) =>
  `/${toRelativePath(projectRoot, absolutePath)}`;

const toCssFamilyName = (familyName) => {
  const alias = FAMILY_NAME_ALIASES.get(familyName);

  if (alias) {
    return alias;
  }

  return familyName
    .replace(/([a-z0-9])([A-Z])/gu, "$1 $2")
    .replace(/[-_]+/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
};

const formatCssFamilyName = (familyName) =>
  /^[A-Za-z0-9_-]+$/u.test(familyName)
    ? familyName
    : `"${familyName.replace(/"/gu, '\\"')}"`;

const inferWeight = (filePath) => {
  const fileNameStem = basename(filePath, FONT_EXTENSION);

  const normalizedStem = fileNameStem.toLowerCase();

  const fileStem = normalizedStem.replace(/[^a-z0-9]/gu, "");

  const numericWeightMatch = fileStem.match(/wght(\d{2,4})/u);

  if (numericWeightMatch) {
    const numericWeight = Number(numericWeightMatch[1]);

    if (Number.isInteger(numericWeight) && numericWeight > 0) {
      return numericWeight;
    }
  }

  const trailingNumericMatch = fileStem.match(/(\d{2,4})(?!.*\d)(?=(?:italic)?$)/u);

  if (trailingNumericMatch) {
    const numericWeight = Number(trailingNumericMatch[1]);

    if (Number.isInteger(numericWeight) && numericWeight > 0) {
      return numericWeight;
    }
  }

  for (const tokenDefinition of WEIGHT_TOKENS) {
    if (fileStem.includes(tokenDefinition.token)) {
      return tokenDefinition.weight;
    }
  }

  if (fileStem.includes("italic")) {
    return 400;
  }

  return null;
};

const inferStyle = (filePath) =>
  basename(filePath, FONT_EXTENSION).toLowerCase().includes("italic")
    ? "italic"
    : "normal";

const walkFiles = (rootDirectory) => {
  const queue = [rootDirectory];

  const files = [];

  while (queue.length > 0) {
    const currentDirectory = queue.pop();

    const entries = readdirSync(currentDirectory, {withFileTypes: true});

    for (const entry of entries) {
      const fullPath = resolve(currentDirectory, entry.name);

      if (entry.isDirectory()) {
        queue.push(fullPath);
        continue;
      }

      if (entry.isFile() && extname(entry.name).toLowerCase() === FONT_EXTENSION) {
        files.push(fullPath);
      }
    }
  }

  return files.sort();
};

const collectFamilies = (fontsRoot) => {
  const entries = readdirSync(fontsRoot, {withFileTypes: true});

  const families = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const directoryPath = resolve(fontsRoot, entry.name);

    const files = walkFiles(directoryPath);

    if (files.length === 0) {
      continue;
    }

    const variableFonts = [];

    const staticFonts = [];

    for (const filePath of files) {
      const normalizedPath = filePath.split(sep).join("/");

      if (normalizedPath.includes(`/${STATIC_FOLDER_NAME}/`)) {
        const weight = inferWeight(filePath);

        if (!weight) {
          console.warn(
            `[предупреждение] Не удалось определить насыщенность ${filePath}. Пропуск.`
          );

          continue;
        }

        staticFonts.push({
          path: filePath,
          style: inferStyle(filePath),
          weight,
        });

        continue;
      }

      if (VARIABLE_FONT_PATTERN.test(basename(filePath))) {
        variableFonts.push({
          path: filePath,
          style: inferStyle(filePath),
        });
      }
    }

    if (variableFonts.length === 0 && staticFonts.length === 0) {
      continue;
    }

    const deduplicatedStaticFonts = [];

    const seenStaticFaces = new Set();

    for (const staticFont of [...staticFonts].sort((left, right) =>
      left.path.localeCompare(right.path, "en", {sensitivity: "base"})
    )) {
      const key = `${staticFont.style}:${staticFont.weight}`;

      if (seenStaticFaces.has(key)) {
        continue;
      }

      seenStaticFaces.add(key);
      deduplicatedStaticFonts.push(staticFont);
    }

    families.push({
      cssFamilyName: toCssFamilyName(entry.name),
      staticFonts: deduplicatedStaticFonts,
      variableFonts,
    });
  }

  return families.sort((left, right) =>
    left.cssFamilyName.localeCompare(right.cssFamilyName, "en", {sensitivity: "base"})
  );
};

const sortFaces = (left, right) => {
  if (left.weight !== right.weight) {
    return left.weight - right.weight;
  }

  if (STYLE_ORDER[left.style] !== STYLE_ORDER[right.style]) {
    return STYLE_ORDER[left.style] - STYLE_ORDER[right.style];
  }

  return left.path.localeCompare(right.path, "en", {sensitivity: "base"});
};

const sortVariableFaces = (left, right) => {
  if (STYLE_ORDER[left.style] !== STYLE_ORDER[right.style]) {
    return STYLE_ORDER[left.style] - STYLE_ORDER[right.style];
  }

  return left.path.localeCompare(right.path, "en", {sensitivity: "base"});
};

const getWeightRange = (staticFonts, style) => {
  const styleWeights = staticFonts
    .filter((fontFace) => fontFace.style === style)
    .map((fontFace) => fontFace.weight);

  const weights =
    styleWeights.length > 0
      ? styleWeights
      : staticFonts.map((fontFace) => fontFace.weight);

  if (weights.length === 0) {
    return "100 900";
  }

  const minWeight = Math.min(...weights);

  const maxWeight = Math.max(...weights);

  return minWeight === maxWeight ? String(minWeight) : `${minWeight} ${maxWeight}`;
};

const renderFontFace = ({familyName, style, src, weight, variable}) => {
  const lines = [
    "@font-face {",
    `  font-family: ${familyName};`,
    `  font-weight: ${weight};`,
    `  font-style: ${style};`,
  ];

  if (variable) {
    lines.push("  font-display: swap;");
  }

  if (variable) {
    lines.push(
      `  src: url("${src}") format("truetype-variations"),`,
      `    url("${src}") format("truetype");`,
      "}"
    );

    return lines.join("\n");
  }

  lines.push(`  src: url("${src}") format("truetype");`, "}");

  return lines.join("\n");
};

const indentBlock = (block) =>
  block
    .split("\n")
    .map((line) => `  ${line}`)
    .join("\n");

const buildScss = (projectRoot, families) => {
  const variableBlocks = [];

  const staticBlocks = [];

  for (const family of families) {
    const formattedFamily = formatCssFamilyName(family.cssFamilyName);

    const sortedVariableFonts = [...family.variableFonts].sort(sortVariableFaces);

    const sortedStaticFonts = [...family.staticFonts].sort(sortFaces);

    for (const variableFont of sortedVariableFonts) {
      variableBlocks.push(
        renderFontFace({
          familyName: formattedFamily,
          src: toPublicFontUrl(projectRoot, variableFont.path),
          style: variableFont.style,
          variable: true,
          weight: getWeightRange(family.staticFonts, variableFont.style),
        })
      );
    }

    for (const staticFont of sortedStaticFonts) {
      staticBlocks.push(
        renderFontFace({
          familyName: formattedFamily,
          src: toPublicFontUrl(projectRoot, staticFont.path),
          style: staticFont.style,
          variable: false,
          weight: String(staticFont.weight),
        })
      );
    }
  }

  const sections = [];

  if (variableBlocks.length > 0) {
    sections.push(
      [
        "@supports (font-variation-settings: normal) {",
        variableBlocks.map((block) => indentBlock(block)).join("\n\n"),
        "}",
      ].join("\n")
    );
  }

  if (staticBlocks.length > 0) {
    sections.push(
      [
        "@supports not (font-variation-settings: normal) {",
        staticBlocks.map((block) => indentBlock(block)).join("\n\n"),
        "}",
      ].join("\n")
    );
  }

  return `${sections.join("\n\n")}\n`;
};

const main = () => {
  const options = parseArgs(process.argv.slice(2));

  const projectRoot = process.cwd();

  const fontsRoot = resolve(projectRoot, options.fontsRoot);

  const outputPath = resolve(projectRoot, options.output);

  if (!existsSync(fontsRoot)) {
    throw new Error(`Корневая директория шрифтов не существует: ${fontsRoot}`);
  }

  const families = collectFamilies(fontsRoot);

  const generatedScss = buildScss(projectRoot, families);

  if (options.dryRun) {
    console.log(generatedScss);

    return;
  }

  writeFileSync(outputPath, generatedScss, "utf8");

  console.log(
    `Создан ${toRelativePath(projectRoot, outputPath)} из ${families.length} семейств шрифтов.`
  );
};

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
