import {unzipSync, zipSync} from "fflate";

export type AeMajorVersion = 14 | 15 | 16 | 17 | 18 | 22 | 23 | 24 | 25 | 26;

export interface VersionSignature {
  displayVersion: string;
  headByte1: number;
  headByte3: number;
  major: AeMajorVersion;
  softwareVersionBytes: [number, number, number, number];
  yearLabel: string;
}

export interface ParsedAepInfo {
  build?: number;
  detectedMajor: number;
  detectedMinor?: number;
  displayVersion: string;
  errorMessage?: string;
  patch?: number;
  platform?: "Windows" | "macOS";
  yearLabel: string;
}

export const RIFX_SIGNATURE = [0x52, 0x49, 0x46, 0x58];

export const EGG_SIGNATURE = [0x45, 0x67, 0x67, 0x21];

export const VERSION_BYTE_OFFSET = 33;

export const SUB_VERSION_BYTE_OFFSET = 35;

export const SOFTWARE_VERSION_HEAD_OFFSET = 36;

export const SOFTWARE_VERSION_SVAP_OFFSET = 20;

export const SUPPORTED_TARGET_MAJORS: AeMajorVersion[] = [
  26, 25, 24, 23, 22, 18, 17, 16, 15,
];

export const AE_VERSION_SIGNATURES: Record<AeMajorVersion, VersionSignature> = {
  14: {
    displayVersion: "14.X",
    headByte1: 0x58,
    headByte3: 0x09,
    major: 14,
    softwareVersionBytes: [0x07, 0x71, 0x04, 0xbd],
    yearLabel: "CC 2017",
  },
  15: {
    displayVersion: "15.X",
    headByte1: 0x5c,
    headByte3: 0x0e,
    major: 15,
    softwareVersionBytes: [0x07, 0x78, 0x84, 0x9c],
    yearLabel: "CC 2018",
  },
  16: {
    displayVersion: "16.X",
    headByte1: 0x5d,
    headByte3: 0x05,
    major: 16,
    softwareVersionBytes: [0x0b, 0x40, 0x84, 0xbd],
    yearLabel: "CC 2019",
  },
  17: {
    displayVersion: "17.X",
    headByte1: 0x5d,
    headByte3: 0x14,
    major: 17,
    softwareVersionBytes: [0x0b, 0x0a, 0x86, 0x25],
    yearLabel: "2020",
  },
  18: {
    displayVersion: "18.X",
    headByte1: 0x5d,
    headByte3: 0x14,
    major: 18,
    softwareVersionBytes: [0x0b, 0x0a, 0x86, 0x25],
    yearLabel: "2021",
  },
  22: {
    displayVersion: "22.X",
    headByte1: 0x5d,
    headByte3: 0x1d,
    major: 22,
    softwareVersionBytes: [0x0b, 0x70, 0x04, 0x64],
    yearLabel: "2022",
  },
  23: {
    displayVersion: "23.X",
    headByte1: 0x5e,
    headByte3: 0x01,
    major: 23,
    softwareVersionBytes: [0x0b, 0x78, 0x04, 0x31],
    yearLabel: "2023",
  },
  24: {
    displayVersion: "24.X",
    headByte1: 0x5f,
    headByte3: 0x01,
    major: 24,
    softwareVersionBytes: [0x0f, 0x00, 0x84, 0x3b],
    yearLabel: "2024",
  },
  25: {
    displayVersion: "25.X",
    headByte1: 0x60,
    headByte3: 0x01,
    major: 25,
    softwareVersionBytes: [0x0f, 0x08, 0x06, 0x2f],
    yearLabel: "2025",
  },
  26: {
    displayVersion: "26.X",
    headByte1: 0x61,
    headByte3: 0x07,
    major: 26,
    softwareVersionBytes: [0x0f, 0x91, 0x84, 0x45],
    yearLabel: "2026",
  },
};

export const decodeSvap = (
  bytes: Uint8Array,
  offset: number
): {major: number; minor: number; patch: number; build: number; osCode: number} => {
  const value =
    ((bytes[offset] << 24) |
      (bytes[offset + 1] << 16) |
      (bytes[offset + 2] << 8) |
      bytes[offset + 3]) >>>
    0;

  const majorA = (value >>> 26) & 0x1f;

  const majorB = (value >>> 19) & 0x07;

  const major = (majorA << 3) | majorB;

  const osCode = (value >>> 22) & 0x0f;

  const minor = (value >>> 15) & 0x0f;

  const patch = (value >>> 11) & 0x0f;

  const build = value & 0xff;

  return {build, major, minor, osCode, patch};
};

export const getVersionLabel = (version: number): string => {
  const known = AE_VERSION_SIGNATURES[version as AeMajorVersion];

  if (known) {
    return `Adobe After Effects ${known.displayVersion} (${known.yearLabel})`;
  }

  return version > 26
    ? `Adobe After Effects ${version}.X (${2000 + version})`
    : `Adobe After Effects ${version}.X`;
};

const resolveMajorFromHead = (
  decodedMajor: number,
  headByte1: number,
  headByte3: number
): number => {
  if (headByte1 === 0x58) {
    return 14;
  }

  if (headByte1 === 0x5c) {
    return 15;
  }

  if (headByte1 === 0x5d) {
    if (headByte3 === 0x05) {
      return 16;
    }

    return headByte3 >= 0x1d ? 22 : 17;
  }

  if (headByte1 === 0x5e) {
    return 23;
  }

  if (headByte1 === 0x5f) {
    return 24;
  }

  if (headByte1 === 0x60) {
    return 25;
  }

  if (headByte1 === 0x61) {
    return 26;
  }

  if (decodedMajor >= 14 && decodedMajor <= 26) {
    return decodedMajor;
  }

  return headByte1 > 0x61 && headByte1 < 0x80 ? headByte1 - 0x61 + 26 : 0;
};

export const parseAepHeader = (bytes: Uint8Array): ParsedAepInfo => {
  if (bytes.length < 52) {
    return {
      detectedMajor: 0,
      displayVersion: "",
      errorMessage: "Размер файла слишком мал для корректного проекта After Effects",
      yearLabel: "",
    };
  }

  const isRifx = RIFX_SIGNATURE.every((expected, index) => bytes[index] === expected);

  if (!isRifx) {
    return {
      detectedMajor: 0,
      displayVersion: "",
      errorMessage:
        "Некорректная сигнатура RIFX — файл не является бинарным проектом .aep",
      yearLabel: "",
    };
  }

  const isEgg = EGG_SIGNATURE.every((expected, index) => bytes[8 + index] === expected);

  if (!isEgg) {
    return {
      detectedMajor: 0,
      displayVersion: "",
      errorMessage: "Маркер Egg! не найден в заголовке проекта",
      yearLabel: "",
    };
  }

  const decoded = decodeSvap(bytes, SOFTWARE_VERSION_SVAP_OFFSET);

  const platform = decoded.osCode === 13 || decoded.osCode === 14 ? "macOS" : "Windows";

  const headByte1 = bytes[VERSION_BYTE_OFFSET];

  const headByte3 = bytes[SUB_VERSION_BYTE_OFFSET];

  const major = resolveMajorFromHead(decoded.major, headByte1, headByte3);

  const known = AE_VERSION_SIGNATURES[major as AeMajorVersion];

  const exactDisplayVersion =
    decoded.minor === undefined
      ? (known?.displayVersion ?? `${major}.X`)
      : `${major}.${decoded.minor}.${decoded.patch ?? 0}`;

  if (known) {
    return {
      build: decoded.build,
      detectedMajor: major,
      detectedMinor: decoded.minor,
      displayVersion: exactDisplayVersion,
      patch: decoded.patch,
      platform,
      yearLabel: known.yearLabel,
    };
  }

  if (major > 26) {
    const estYear = 2000 + major;

    return {
      build: decoded.build,
      detectedMajor: major,
      detectedMinor: decoded.minor,
      displayVersion: exactDisplayVersion,
      patch: decoded.patch,
      platform,
      yearLabel: String(estYear),
    };
  }

  return {
    detectedMajor: 0,
    displayVersion: "",
    errorMessage: `Неподдерживаемая или поврежденная версия проекта: байт схемы 0x${headByte1.toString(16)}`,
    yearLabel: "",
  };
};

export const isAepxFormat = (content: string | Uint8Array): boolean => {
  if (typeof content === "string") {
    return (
      content.includes("<AfterEffectsProject") || content.trimStart().startsWith("<?xml")
    );
  }

  if (content.length >= 5) {
    const headerString = String.fromCodePoint(
      ...content.slice(0, Math.min(content.length, 120))
    );

    return (
      headerString.includes("<AfterEffectsProject") ||
      headerString.trimStart().startsWith("<?xml")
    );
  }

  return false;
};

export const parseAepxHeader = (xmlString: string): ParsedAepInfo => {
  if (!xmlString.includes("<AfterEffectsProject")) {
    return {
      detectedMajor: 0,
      displayVersion: "",
      errorMessage: "Файл не является корректным XML-проектом After Effects .aepx",
      yearLabel: "",
    };
  }

  const svapMatch = /<svap\b[^>]*\bbdata=["']([0-9a-f]{8})["']/i.exec(xmlString);

  const headMatch = /<head\b[^>]*\bbdata=["']([0-9a-f]{8,})["']/i.exec(xmlString);

  if (!svapMatch && !headMatch) {
    return {
      detectedMajor: 0,
      displayVersion: "",
      errorMessage: "В XML-проекте не найдены заголовки версий <svap> или <head>",
      yearLabel: "",
    };
  }

  let decodedMajor = 0;

  let minor: number | undefined;

  let patch: number | undefined;

  let build: number | undefined;

  let platform: "Windows" | "macOS" | undefined;

  if (svapMatch) {
    const hex = svapMatch[1];

    const svapBytes = new Uint8Array(4);

    for (let index = 0; index < 4; index += 1) {
      svapBytes[index] = Number.parseInt(hex.slice(index * 2, index * 2 + 2), 16);
    }

    const decoded = decodeSvap(svapBytes, 0);

    decodedMajor = decoded.major;
    minor = decoded.minor;
    patch = decoded.patch;
    build = decoded.build;
    platform = decoded.osCode === 13 || decoded.osCode === 14 ? "macOS" : "Windows";
  }

  let headByte1 = 0;

  let headByte3 = 0;

  if (headMatch) {
    const headHex = headMatch[1];

    if (headHex.length >= 8) {
      headByte1 = Number.parseInt(headHex.slice(2, 4), 16);
      headByte3 = Number.parseInt(headHex.slice(6, 8), 16);
    }
  }

  const major = resolveMajorFromHead(decodedMajor, headByte1, headByte3);

  const known = AE_VERSION_SIGNATURES[major as AeMajorVersion];

  const exactDisplayVersion =
    minor === undefined
      ? (known?.displayVersion ?? `${major}.X`)
      : `${major}.${minor}.${patch ?? 0}`;

  if (known) {
    return {
      build,
      detectedMajor: major,
      detectedMinor: minor,
      displayVersion: exactDisplayVersion,
      patch,
      platform,
      yearLabel: known.yearLabel,
    };
  }

  if (major > 26) {
    const estYear = 2000 + major;

    return {
      build,
      detectedMajor: major,
      detectedMinor: minor,
      displayVersion: exactDisplayVersion,
      patch,
      platform,
      yearLabel: String(estYear),
    };
  }

  return {
    detectedMajor: 0,
    displayVersion: "",
    errorMessage: `Неподдерживаемая версия XML-проекта: схема 0x${headByte1.toString(16)}`,
    yearLabel: "",
  };
};

export const getPlatformAdjustedSvapBytes = (
  rawBytes: [number, number, number, number],
  isMac: boolean
): [number, number, number, number] => {
  const value =
    ((rawBytes[0] << 24) | (rawBytes[1] << 16) | (rawBytes[2] << 8) | rawBytes[3]) >>> 0;

  const targetOsCode = isMac ? 13 : 12;

  const adjustedValue = ((value & ~0x03_c0_00_00) | ((targetOsCode & 0x0f) << 22)) >>> 0;

  return [
    (adjustedValue >>> 24) & 0xff,
    (adjustedValue >>> 16) & 0xff,
    (adjustedValue >>> 8) & 0xff,
    adjustedValue & 0xff,
  ];
};

const CHUNK_TAG_UTF8 = String.fromCodePoint(0x55, 0x74, 0x66, 0x38);

const OCIO_CHUNK_TAGS = new Set([
  "pcms",
  "PwCs",
  "pdvc",
  "CSGe",
  "Mcsp",
  "ocsp",
  "hdrm",
  "acid",
  "ocid",
]);

interface RifxAdaptOptions {
  shouldDowngradeColor: boolean;
  shouldDowngradeLdta: boolean;
  shouldDowngradePrda: boolean;
  shouldStripExEn: boolean;
  shouldStripOcio: boolean;
  shouldTranspileExpressions: boolean;
}

interface ChunkResult {
  nextOffset: number;
  pieces: Uint8Array[];
  shouldSkipNextUtf8: boolean;
}

interface ListChunkResult {
  nextOffset: number;
  pieces: Uint8Array[];
}

const isAsciiPrintable = (bytes: Uint8Array, offset: number): boolean => {
  for (let index = 0; index < 4; index += 1) {
    const byte = bytes[offset + index];

    if (byte < 32 || byte > 126) {
      return false;
    }
  }

  return true;
};

const readFourCc = (bytes: Uint8Array, offset: number): string => {
  return String.fromCodePoint(
    bytes[offset],
    bytes[offset + 1],
    bytes[offset + 2],
    bytes[offset + 3]
  );
};

const readUint32Be = (bytes: Uint8Array, offset: number): number => {
  return (
    ((bytes[offset] << 24) |
      (bytes[offset + 1] << 16) |
      (bytes[offset + 2] << 8) |
      bytes[offset + 3]) >>>
    0
  );
};

const createChunkHeader = (tagBytes: Uint8Array, length: number): Uint8Array => {
  const header = new Uint8Array(8);

  header.set(tagBytes, 0);
  header[4] = (length >>> 24) & 0xff;
  header[5] = (length >>> 16) & 0xff;
  header[6] = (length >>> 8) & 0xff;
  header[7] = length & 0xff;

  return header;
};

const createListHeader = (
  tagBytes: Uint8Array,
  contentLength: number,
  subtypeBytes: Uint8Array
): Uint8Array => {
  const header = new Uint8Array(12);

  header.set(tagBytes, 0);
  header[4] = (contentLength >>> 24) & 0xff;
  header[5] = (contentLength >>> 16) & 0xff;
  header[6] = (contentLength >>> 8) & 0xff;
  header[7] = contentLength & 0xff;
  header.set(subtypeBytes, 8);

  return header;
};

const escapeTemplateText = (text: string): string => {
  return text.replaceAll('"', String.raw`\"`).replaceAll(/\r?\n/g, String.raw`\n`);
};

const formatTemplateChunk = (text: string): string => {
  return `"${escapeTemplateText(text)}"`;
};

const convertTemplateContent = (inner: string): string => {
  if (!inner.includes("${")) {
    return formatTemplateChunk(inner);
  }

  const [head, ...rest] = inner.split("${");

  const parts: string[] = [];

  if (head) {
    parts.push(formatTemplateChunk(head));
  }

  for (const segment of rest) {
    const closeIndex = segment.indexOf("}");

    if (closeIndex === -1) {
      parts.push(formatTemplateChunk(`\${${segment}`));
      continue;
    }

    const expression = segment.slice(0, closeIndex).trim();

    const trailingText = segment.slice(closeIndex + 1);

    parts.push(`(${expression})`);

    if (trailingText) {
      parts.push(formatTemplateChunk(trailingText));
    }
  }

  if (parts.length > 0 && !parts[0].startsWith('"')) {
    parts.unshift('""');
  }

  return parts.join(" + ");
};

const findTemplateLiteralEnd = (code: string, startIndex: number): number => {
  let scan = startIndex;

  let isEscaped = false;

  while (scan < code.length) {
    if (isEscaped) {
      isEscaped = false;
      scan += 1;
    } else if (code[scan] === "\\") {
      isEscaped = true;
      scan += 1;
    } else if (code[scan] === "`") {
      return scan;
    } else {
      scan += 1;
    }
  }

  return -1;
};

const transpileTemplateLiterals = (code: string): string => {
  if (!code.includes("`")) {
    return code;
  }

  const result: string[] = [];

  let cursor = 0;

  while (cursor < code.length) {
    if (code[cursor] === "`") {
      const scan = findTemplateLiteralEnd(code, cursor + 1);

      if (scan !== -1) {
        const inner = code.slice(cursor + 1, scan);

        result.push(convertTemplateContent(inner));
        cursor = scan + 1;
        continue;
      }
    }

    result.push(code[cursor]);
    cursor += 1;
  }

  return result.join("");
};

const transpileArrowLine = (line: string): string => {
  if (!line.includes("=>")) {
    return line;
  }

  const arrowIndex = line.indexOf("=>");

  const beforeArrow = line.slice(0, arrowIndex).trimEnd();

  const afterArrow = line.slice(arrowIndex + 2).trimStart();

  const parameterStart = beforeArrow.lastIndexOf("(");

  let parameters: string;

  let prefix: string;

  if (parameterStart !== -1 && beforeArrow.endsWith(")")) {
    parameters = beforeArrow.slice(parameterStart + 1, -1).trim();
    prefix = beforeArrow.slice(0, parameterStart);
  } else {
    const lastSpace = beforeArrow.lastIndexOf(" ");

    const lastTokenStart = lastSpace === -1 ? 0 : lastSpace + 1;

    parameters = beforeArrow.slice(lastTokenStart).trim();
    prefix = beforeArrow.slice(0, lastTokenStart);
  }

  if (afterArrow.startsWith("{")) {
    return `${prefix}function(${parameters}) ${afterArrow}`;
  }

  const trimmedBody = afterArrow.replace(/;$/, "");

  return `${prefix}function(${parameters}) { return ${trimmedBody}; };`;
};

const transpileArrowFunctions = (code: string): string => {
  return code.includes("=>")
    ? code
        .split("\n")
        .map((line) => transpileArrowLine(line))
        .join("\n")
    : code;
};

const replaceIncludes = (code: string): string => {
  if (!code.includes(".includes(")) {
    return code;
  }

  const parts = code.split(".includes(");

  const result: string[] = [parts[0]];

  for (let index = 1; index < parts.length; index += 1) {
    const part = parts[index];

    const closeParen = part.indexOf(")");

    if (closeParen === -1) {
      result.push(".includes(", part);
      continue;
    }

    const argument = part.slice(0, closeParen);

    const rest = part.slice(closeParen + 1);

    result.push(`.indexOf(${argument}) !== -1`, rest);
  }

  return result.join("");
};

const replaceMathTrunc = (code: string): string => {
  if (!code.includes("Math.trunc(")) {
    return code;
  }

  const parts = code.split("Math.trunc(");

  const result: string[] = [parts[0]];

  for (let index = 1; index < parts.length; index += 1) {
    const part = parts[index];

    const closeParen = part.indexOf(")");

    if (closeParen === -1) {
      result.push("Math.trunc(", part);
      continue;
    }

    const argument = part.slice(0, closeParen);

    const rest = part.slice(closeParen + 1);

    result.push(
      `((${argument}) < 0 ? Math.ceil(${argument}) : Math.floor(${argument}))`,
      rest
    );
  }

  return result.join("");
};

const replaceExponentiation = (code: string): string => {
  if (!code.includes("**")) {
    return code;
  }

  return code
    .split("\n")
    .map((line) => {
      if (!line.includes("**")) {
        return line;
      }

      const segments = line.split("**");

      let accumulated = segments[0].trim();

      for (let index = 1; index < segments.length; index += 1) {
        accumulated = `Math.pow(${accumulated}, ${segments[index].trim()})`;
      }

      return accumulated;
    })
    .join("\n");
};

const replaceNullishCoalescing = (code: string): string => {
  if (!code.includes("??")) {
    return code;
  }

  return code
    .split("\n")
    .map((line) => {
      if (!line.includes("??")) {
        return line;
      }

      const segments = line.split("??");

      let accumulated = segments[0].trim();

      for (let index = 1; index < segments.length; index += 1) {
        const right = segments[index].trim();

        accumulated = `(${accumulated} !== undefined && ${accumulated} !== null ? ${accumulated} : ${right})`;
      }

      return accumulated;
    })
    .join("\n");
};

export const transpileJsToExtendScript = (sourceCode: string): string => {
  if (!sourceCode) {
    return sourceCode;
  }

  let code = sourceCode;

  code = code.replaceAll(/\bconst\s+/g, "var ").replaceAll(/\blet\s+/g, "var ");
  code = transpileTemplateLiterals(code);
  code = transpileArrowFunctions(code);
  code = replaceIncludes(code);
  code = replaceMathTrunc(code);
  code = replaceExponentiation(code);
  code = code.replaceAll(/\.sourceText\.style\b[^,;)\s]*/g, ".sourceText");
  code = replaceNullishCoalescing(code);
  code = code.replaceAll("?.", ".");

  return code;
};

const createTranspiledUtf8Chunk = (
  source: Uint8Array,
  offset: number,
  length: number
): Uint8Array[] => {
  const rawText = new TextDecoder().decode(
    source.subarray(offset + 8, offset + 8 + length)
  );

  const transpiled = transpileJsToExtendScript(rawText);

  const encoded = new TextEncoder().encode(transpiled);

  const chunkHeader = createChunkHeader(
    source.subarray(offset, offset + 4),
    encoded.length
  );

  const pieces: Uint8Array[] = [chunkHeader, encoded];

  if (encoded.length % 2 !== 0) {
    pieces.push(new Uint8Array(1));
  }

  return pieces;
};

const createAdaptedChunk = (
  source: Uint8Array,
  offset: number,
  targetLength: number
): Uint8Array[] => {
  const chunkHeader = createChunkHeader(
    source.subarray(offset, offset + 4),
    targetLength
  );

  const pieces: Uint8Array[] = [chunkHeader];

  if (targetLength > 0) {
    pieces.push(source.subarray(offset + 8, offset + 8 + targetLength));
  }

  if (targetLength % 2 !== 0) {
    pieces.push(new Uint8Array(1));
  }

  return pieces;
};

const adaptLeafChunk = (
  source: Uint8Array,
  offset: number,
  length: number,
  tag: string,
  parentSubtype: string | undefined,
  shouldSkipNextUtf8: boolean,
  options: RifxAdaptOptions
): ChunkResult => {
  const {
    shouldDowngradeLdta,
    shouldDowngradePrda,
    shouldStripOcio,
    shouldTranspileExpressions,
  } = options;

  const pad = length % 2 === 0 ? 0 : 1;

  const nextOffset = offset + 8 + length + pad;

  if (shouldStripOcio && OCIO_CHUNK_TAGS.has(tag)) {
    const isMarkerChunk = ["pcms", "PwCs", "pdvc"].includes(tag);

    return {
      nextOffset,
      pieces: [],
      shouldSkipNextUtf8: isMarkerChunk,
    };
  }

  if (tag === CHUNK_TAG_UTF8) {
    if (shouldSkipNextUtf8) {
      return {
        nextOffset,
        pieces: [],
        shouldSkipNextUtf8: false,
      };
    }

    if (shouldTranspileExpressions && parentSubtype === "tdbs" && length > 0) {
      return {
        nextOffset,
        pieces: createTranspiledUtf8Chunk(source, offset, length),
        shouldSkipNextUtf8: false,
      };
    }
  }

  let targetLength = length;

  if (tag === "ldta") {
    if (shouldDowngradeLdta && length === 164) {
      targetLength = 160;
    }
  } else if (tag === "prda" && shouldDowngradePrda && length === 52) {
    targetLength = 12;
  }

  return {
    nextOffset,
    pieces: createAdaptedChunk(source, offset, targetLength),
    shouldSkipNextUtf8: false,
  };
};

const adaptListChunk = (
  source: Uint8Array,
  offset: number,
  length: number,
  options: RifxAdaptOptions
): ListChunkResult => {
  const {shouldDowngradeColor, shouldStripExEn} = options;

  const pad = length % 2 === 0 ? 0 : 1;

  const nextOffset = offset + 8 + length + pad;

  const subtype = readFourCc(source, offset + 8);

  if (shouldStripExEn && subtype === "ExEn") {
    return {nextOffset, pieces: []};
  }

  if (shouldDowngradeColor && subtype === "CPPl") {
    const emptyCppl = new Uint8Array(12);

    emptyCppl.set(source.subarray(offset, offset + 4), 0);
    emptyCppl[7] = 4;
    emptyCppl.set(source.subarray(offset + 8, offset + 12), 8);

    return {nextOffset, pieces: [emptyCppl]};
  }

  const childPieces = processRifxLevel(
    source,
    offset + 12,
    offset + 8 + length,
    subtype,
    options
  );

  let childLength = 0;

  for (const piece of childPieces) {
    childLength += piece.length;
  }

  const contentLength = 4 + childLength;

  const listHeader = createListHeader(
    source.subarray(offset, offset + 4),
    contentLength,
    source.subarray(offset + 8, offset + 12)
  );

  const pieces: Uint8Array[] = [listHeader, ...childPieces];

  if (contentLength % 2 !== 0) {
    pieces.push(new Uint8Array(1));
  }

  return {nextOffset, pieces};
};

const processRifxLevel = (
  source: Uint8Array,
  start: number,
  end: number,
  parentSubtype: string | undefined,
  options: RifxAdaptOptions
): Uint8Array[] => {
  let offset = start;

  const pieces: Uint8Array[] = [];

  let shouldSkipNextUtf8 = false;

  while (offset + 8 <= end) {
    if (!isAsciiPrintable(source, offset)) {
      if (end > offset) {
        pieces.push(source.subarray(offset, end));
      }

      break;
    }

    const length = readUint32Be(source, offset + 4);

    if (length > 0x20_00_00_00 || offset + 8 + length > end + 1) {
      if (end > offset) {
        pieces.push(source.subarray(offset, end));
      }

      break;
    }

    const tag = readFourCc(source, offset);

    if (tag === "LIST") {
      shouldSkipNextUtf8 = false;

      const listResult = adaptListChunk(source, offset, length, options);

      offset = listResult.nextOffset;
      pieces.push(...listResult.pieces);
    } else {
      const leafResult = adaptLeafChunk(
        source,
        offset,
        length,
        tag,
        parentSubtype,
        shouldSkipNextUtf8,
        options
      );

      offset = leafResult.nextOffset;
      shouldSkipNextUtf8 = leafResult.shouldSkipNextUtf8;
      pieces.push(...leafResult.pieces);
    }
  }

  return pieces;
};

export const adaptRifxTree = (
  source: Uint8Array,
  targetMajor: AeMajorVersion,
  shouldConvertExpressions = false
): Uint8Array => {
  const isExtendScriptMandatory = targetMajor <= 15;

  const shouldConvert = isExtendScriptMandatory || shouldConvertExpressions;

  if (source.length < 12 || (!shouldConvert && targetMajor >= 23)) {
    return source;
  }

  const origRifxLength = readUint32Be(source, 4);

  const rifxEnd = Math.min(8 + origRifxLength, source.length);

  const trailingLength = source.length - rifxEnd;

  const options: RifxAdaptOptions = {
    shouldDowngradeColor: targetMajor <= 15,
    shouldDowngradeLdta: targetMajor <= 22,
    shouldDowngradePrda: targetMajor <= 22,
    shouldStripExEn: shouldConvert || targetMajor <= 15,
    shouldStripOcio: targetMajor <= 22,
    shouldTranspileExpressions: shouldConvert,
  };

  const bodyPieces = processRifxLevel(source, 12, rifxEnd, undefined, options);

  let totalBodyLength = 0;

  for (const bodyPiece of bodyPieces) {
    totalBodyLength += bodyPiece.length;
  }

  const newRifxLength = 4 + totalBodyLength;

  const result = new Uint8Array(12 + totalBodyLength + trailingLength);

  result.set(source.subarray(0, 4), 0);
  result[4] = (newRifxLength >>> 24) & 0xff;
  result[5] = (newRifxLength >>> 16) & 0xff;
  result[6] = (newRifxLength >>> 8) & 0xff;
  result[7] = newRifxLength & 0xff;
  result.set(source.subarray(8, 12), 8);

  let pos = 12;

  for (const bodyPiece of bodyPieces) {
    result.set(bodyPiece, pos);
    pos += bodyPiece.length;
  }

  if (trailingLength > 0) {
    result.set(source.subarray(rifxEnd), pos);
  }

  return result;
};

export const downgradeAep = (
  sourceBytes: Uint8Array,
  targetMajor: AeMajorVersion,
  isMac = false,
  shouldConvertExpressions = false
): Uint8Array => {
  const signature = AE_VERSION_SIGNATURES[targetMajor];

  if (!signature) {
    throw new Error(`Сигнатура для выбранной версии ${targetMajor} не найдена`);
  }

  const shouldConvert = shouldConvertExpressions || targetMajor <= 15;

  const baseBytes =
    shouldConvert || targetMajor <= 22
      ? adaptRifxTree(sourceBytes, targetMajor, shouldConvert)
      : sourceBytes;

  const modifiedBytes = new Uint8Array(baseBytes.length);

  modifiedBytes.set(baseBytes);
  modifiedBytes[VERSION_BYTE_OFFSET] = signature.headByte1;
  modifiedBytes[SUB_VERSION_BYTE_OFFSET] = signature.headByte3;

  const [b0, b1, b2, b3] = getPlatformAdjustedSvapBytes(
    signature.softwareVersionBytes,
    isMac
  );

  modifiedBytes[SOFTWARE_VERSION_HEAD_OFFSET] = b0;
  modifiedBytes[SOFTWARE_VERSION_HEAD_OFFSET + 1] = b1;
  modifiedBytes[SOFTWARE_VERSION_HEAD_OFFSET + 2] = b2;
  modifiedBytes[SOFTWARE_VERSION_HEAD_OFFSET + 3] = b3;

  if (modifiedBytes.length >= SOFTWARE_VERSION_SVAP_OFFSET + 4) {
    modifiedBytes[SOFTWARE_VERSION_SVAP_OFFSET] = b0;
    modifiedBytes[SOFTWARE_VERSION_SVAP_OFFSET + 1] = b1;
    modifiedBytes[SOFTWARE_VERSION_SVAP_OFFSET + 2] = b2;
    modifiedBytes[SOFTWARE_VERSION_SVAP_OFFSET + 3] = b3;
  }

  return modifiedBytes;
};

export const isMogrtFormat = (fileName: string, bytes?: Uint8Array): boolean => {
  const lower = fileName.toLowerCase();

  return (
    lower.endsWith(".mogrt") ||
    Boolean(
      bytes &&
      bytes.length >= 4 &&
      bytes[0] === 0x50 &&
      bytes[1] === 0x4b &&
      bytes[2] === 0x03 &&
      bytes[3] === 0x04
    )
  );
};

export const isAegraphicFormat = (fileName: string, bytes?: Uint8Array): boolean => {
  const lower = fileName.toLowerCase();

  return (
    lower.endsWith(".aegraphic") ||
    Boolean(
      bytes &&
      bytes.length >= 4 &&
      bytes[0] === 0x50 &&
      bytes[1] === 0x4b &&
      bytes[2] === 0x03 &&
      bytes[3] === 0x04
    )
  );
};

export const parseAegraphicHeader = (aegraphicBytes: Uint8Array): ParsedAepInfo => {
  try {
    const unzipped = unzipSync(aegraphicBytes);

    const aepEntry = Object.entries(unzipped).find(([key]) =>
      key.toLowerCase().endsWith(".aep")
    );

    if (!aepEntry || !aepEntry[1]) {
      return {
        detectedMajor: 0,
        displayVersion: "",
        errorMessage: "Внутри файла aegraphic не найден бинарный проект .aep",
        yearLabel: "",
      };
    }

    return parseAepHeader(aepEntry[1]);
  } catch (error) {
    console.error("Ошибка при распаковке aegraphic:", error);

    return {
      detectedMajor: 0,
      displayVersion: "",
      errorMessage: "Не удалось распаковать контейнер aegraphic (файл поврежден)",
      yearLabel: "",
    };
  }
};

export const downgradeAegraphic = (
  aegraphicBytes: Uint8Array,
  targetMajor: AeMajorVersion,
  isMac = false,
  shouldConvertExpressions = false
): Uint8Array => {
  const unzipped = unzipSync(aegraphicBytes);

  const aepEntry = Object.entries(unzipped).find(([key]) =>
    key.toLowerCase().endsWith(".aep")
  );

  if (!aepEntry || !aepEntry[1]) {
    throw new Error("Внутри контейнера aegraphic не найден бинарный проект .aep");
  }

  const [aepEntryKey, aepBytes] = aepEntry;

  const downgradedAep = downgradeAep(
    aepBytes,
    targetMajor,
    isMac,
    shouldConvertExpressions
  );

  const updatedAepBytes = new Uint8Array(downgradedAep.length);

  updatedAepBytes.set(downgradedAep);

  unzipped[aepEntryKey] = updatedAepBytes;

  return zipSync(unzipped);
};

export const parseMogrtHeader = (mogrtBytes: Uint8Array): ParsedAepInfo => {
  try {
    const unzippedMogrt = unzipSync(mogrtBytes);

    const aegraphicBytes = unzippedMogrt["project.aegraphic"];

    if (!aegraphicBytes) {
      return {
        detectedMajor: 0,
        displayVersion: "",
        errorMessage:
          "Внутри файла .mogrt не найден контейнер проекта (project.aegraphic)",
        yearLabel: "",
      };
    }

    const unzippedAegraphic = unzipSync(aegraphicBytes);

    const aepEntry = Object.entries(unzippedAegraphic).find(([key]) =>
      key.toLowerCase().endsWith(".aep")
    );

    if (!aepEntry || !aepEntry[1]) {
      return {
        detectedMajor: 0,
        displayVersion: "",
        errorMessage:
          "Внутри project.aegraphic не найден оригинальный бинарный проект .aep",
        yearLabel: "",
      };
    }

    return parseAepHeader(aepEntry[1]);
  } catch (error) {
    console.error("Ошибка при чтении контейнера .mogrt:", error);

    return {
      detectedMajor: 0,
      displayVersion: "",
      errorMessage:
        "Не удалось распаковать архив .mogrt (файл поврежден или имеет нестандартный формат)",
      yearLabel: "",
    };
  }
};

export const downgradeMogrt = (
  mogrtBytes: Uint8Array,
  targetMajor: AeMajorVersion,
  isMac = false,
  shouldConvertExpressions = false
): Uint8Array => {
  const unzippedMogrt = unzipSync(mogrtBytes);

  const aegraphicBytes = unzippedMogrt["project.aegraphic"];

  if (!aegraphicBytes) {
    throw new Error(
      "Внутри файла .mogrt не найден контейнер проекта (project.aegraphic)"
    );
  }

  const unzippedAegraphic = unzipSync(aegraphicBytes);

  const aepEntry = Object.entries(unzippedAegraphic).find(([key]) =>
    key.toLowerCase().endsWith(".aep")
  );

  if (!aepEntry || !aepEntry[1]) {
    throw new Error(
      "Внутри project.aegraphic не найден оригинальный бинарный проект .aep"
    );
  }

  const [aepEntryKey, aepBytes] = aepEntry;

  const downgradedAepBytes = downgradeAep(
    aepBytes,
    targetMajor,
    isMac,
    shouldConvertExpressions
  );

  const updatedAepBytes = new Uint8Array(downgradedAepBytes.length);

  updatedAepBytes.set(downgradedAepBytes);

  unzippedAegraphic[aepEntryKey] = updatedAepBytes;

  const repackagedAegraphic = zipSync(unzippedAegraphic);

  unzippedMogrt["project.aegraphic"] = repackagedAegraphic;

  return zipSync(unzippedMogrt);
};

export const downgradeAepx = (
  xmlContent: string,
  targetMajor: AeMajorVersion,
  isMac = false,
  shouldConvertExpressions = false
): string => {
  const signature = AE_VERSION_SIGNATURES[targetMajor];

  if (!signature) {
    throw new Error(`Сигнатура для выбранной версии ${targetMajor} не найдена`);
  }

  const svapBytes = getPlatformAdjustedSvapBytes(signature.softwareVersionBytes, isMac);

  const svapHex = svapBytes
    .map((byteValue) => byteValue.toString(16).padStart(2, "0"))
    .join("");

  const headByte1Hex = signature.headByte1.toString(16).padStart(2, "0");

  const headByte3Hex = signature.headByte3.toString(16).padStart(2, "0");

  const headPrefix = `00${headByte1Hex}00${headByte3Hex}${svapHex}`;

  const svapRegex = /(<svap\b[^>]*\bbdata=["'])([0-9a-f]{8})(["'])/i;

  const headRegex = /(<head\b[^>]*\bbdata=["'])([0-9a-f]{16})([0-9a-f]*)(["'])/i;

  let result = xmlContent
    .replaceAll(svapRegex, (_match, p1, _p2, p3) => `${p1}${svapHex}${p3}`)
    .replaceAll(headRegex, (_match, p1, _p2, p3, p4) => `${p1}${headPrefix}${p3}${p4}`);

  const shouldConvert = shouldConvertExpressions || targetMajor <= 15;

  if (shouldConvert) {
    result = result.replaceAll(
      /(<string\b[^>]*>)([\s\S]*?)(<\/string>)/g,
      (_match, p1, p2, p3) => `${p1}${transpileJsToExtendScript(p2)}${p3}`
    );
  }

  return result;
};
