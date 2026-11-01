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

export const SUPPORTED_TARGET_MAJORS: AeMajorVersion[] = [26, 25, 24, 23];

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

  if (version > 26) {
    const estYear = 2000 + version;

    return `Adobe After Effects ${version}.X (${estYear})`;
  }

  return `Adobe After Effects ${version}.X`;
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

export const downgradeAep = (
  sourceBytes: Uint8Array,
  targetMajor: AeMajorVersion,
  isMac = false
): Uint8Array => {
  const signature = AE_VERSION_SIGNATURES[targetMajor];

  if (!signature) {
    throw new Error(`Сигнатура для выбранной версии ${targetMajor} не найдена`);
  }

  const modifiedBytes = new Uint8Array(sourceBytes.length);

  modifiedBytes.set(sourceBytes);
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
  isMac = false
): Uint8Array => {
  const unzipped = unzipSync(aegraphicBytes);

  const aepEntry = Object.entries(unzipped).find(([key]) =>
    key.toLowerCase().endsWith(".aep")
  );

  if (!aepEntry || !aepEntry[1]) {
    throw new Error("Внутри контейнера aegraphic не найден бинарный проект .aep");
  }

  const [aepEntryKey, aepBytes] = aepEntry;

  const downgradedAep = downgradeAep(aepBytes, targetMajor, isMac);

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
  isMac = false
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

  const downgradedAepBytes = downgradeAep(aepBytes, targetMajor, isMac);

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
  isMac = false
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

  return xmlContent
    .replaceAll(svapRegex, (_match, p1, _p2, p3) => `${p1}${svapHex}${p3}`)
    .replaceAll(headRegex, (_match, p1, _p2, p3, p4) => `${p1}${headPrefix}${p3}${p4}`);
};
