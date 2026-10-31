import {stemmer as englishStemmer} from "@orama/stemmers/english";

import {stemmer as russianStemmer} from "@orama/stemmers/russian";

import {normalizeWord} from "./searchContentUtilities";

export type WordFeatures = {
  consonantSignatures: string[];
  foldedVariants: string[];
  stemVariants: string[];
  variants: string[];
};

export const MIN_STEM_LENGTH = 3;

export const MIN_CONSONANT_SIGNATURE_LENGTH = 3;

export const MIN_PREFIX_LENGTH = 2;

export const WORD_MATCH_PRIORITY = {
  consonant: 2,
  exact: 4,
  folded: 3,
  prefix: 3,
  stem: 1,
} as const;

const MAX_WORD_FEATURES_CACHE_SIZE = 5000;

const EMPTY_WORD_FEATURES: WordFeatures = {
  consonantSignatures: [],
  foldedVariants: [],
  stemVariants: [],
  variants: [],
};

const WORD_FEATURES_CACHE = new Map<string, WordFeatures>();

const LATIN_VOWELS_REGEX = /[aeiouyw]/g;

const CYRILLIC_VOWELS_REGEX = /[аеёиоуыэюяй]/g;

const REPEATED_CHARACTERS_REGEX = /(.)\1+/g;

export const getConsonantSignature = (word: string): string => {
  return normalizeWord(word)
    .replaceAll(LATIN_VOWELS_REGEX, "")
    .replaceAll(CYRILLIC_VOWELS_REGEX, "")
    .replaceAll(REPEATED_CHARACTERS_REGEX, "$1");
};

const CYR_TO_LAT: Record<string, string> = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "yo",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ъ: "",
  ы: "y",
  ь: "",
  э: "e",
  ю: "yu",
  я: "ya",
};

const LAT_TO_CYR_ALIASES: Record<string, string> = {
  eh: "э",
  ia: "я",
  ja: "я",
  jh: "ж",
  jo: "ё",
  ju: "ю",
  oo: "у",
  ou: "у",
  sch: "щ",
};

const LAT_TO_CYR_BASE: Record<string, string> = {
  ...Object.fromEntries(
    Object.entries(CYR_TO_LAT)
      .filter(([, value]) => value.length > 0)
      .map(([key, value]) => [value, key])
  ),
  c: "к",
  h: "х",
  j: "й",
  q: "к",
  w: "в",
  x: "х",
  ...LAT_TO_CYR_ALIASES,
};

const CYR_TO_LAT_MULTI = Object.entries(CYR_TO_LAT).filter(
  ([, value]) => value.length > 1
);

const CYR_TO_LAT_SINGLE = Object.fromEntries(
  Object.entries(CYR_TO_LAT).filter(([, value]) => value.length <= 1)
);

const LAT_TO_CYR_MULTI = Object.entries(LAT_TO_CYR_BASE)
  .filter(([key]) => key.length > 1)
  .toSorted((a, b) => b[0].length - a[0].length);

const LAT_TO_CYR_SINGLE = Object.fromEntries(
  Object.entries(LAT_TO_CYR_BASE).filter(([key]) => key.length === 1)
);

const translitCyrToLat = (text: string): string => {
  let output = text.toLowerCase();

  for (const [from, to] of CYR_TO_LAT_MULTI) {
    output = output.split(from).join(to);
  }

  return [...output].map((char) => CYR_TO_LAT_SINGLE[char] ?? char).join("");
};

const translitLatToCyr = (text: string): string => {
  let output = text.toLowerCase();

  for (const [from, to] of LAT_TO_CYR_MULTI) {
    output = output.split(from).join(to);
  }

  return [...output].map((char) => LAT_TO_CYR_SINGLE[char] ?? char).join("");
};

type VariantRule = (word: string, output: Set<string>) => void;

const createBidirectionalReplaceRule = (from: string, to: string): VariantRule => {
  return (word, output) => {
    if (word.includes(from)) {
      output.add(word.split(from).join(to));
    }

    if (word.includes(to)) {
      output.add(word.split(to).join(from));
    }
  };
};

const addPhoneticVariants: VariantRule = (word, output) => {
  output.add(
    word
      .replaceAll(/\b([a-z]*?)a([b-df-hj-np-tv-z])e\b/g, "$1ei$2")
      .replaceAll(/\b([a-z]*?)i([b-df-hj-np-tv-z])e\b/g, "$1ai$2")
      .replaceAll(/\b([a-z]*?)o([b-df-hj-np-tv-z])e\b/g, "$1ou$2")
      .replaceAll(/\b([a-z]*?)u([b-df-hj-np-tv-z])e\b/g, "$1yu$2")
      .replaceAll("ck", "k")
      .replaceAll("ph", "f")
      .replaceAll("qu", "kw")
      .replaceAll("tion", "shn")
      .replaceAll("sion", "shn")
      .replaceAll("x", "ks")
      .replaceAll("x", "gz")
      .replaceAll("x", "kh")
      .replaceAll("ye", "ie")
      .replaceAll("ya", "ia")
      .replaceAll("yo", "io")
      .replaceAll("yu", "iu")
      .replaceAll("zh", "j")
      .replaceAll("j", "g")
      .replaceAll("kv", "qu")
      .replaceAll("kw", "qu")
      .replaceAll("c", "k")
  );
};

const addPluralVariants: VariantRule = (word, output) => {
  if (word.endsWith("s") && word.length > 3) {
    output.add(word.slice(0, -1));
  }

  if (word.endsWith("es") && word.length > 4) {
    output.add(word.slice(0, -2));
  }

  if (word.endsWith("ing") && word.length > 5) {
    output.add(word.slice(0, -3));
  }

  if (word.endsWith("ed") && word.length > 4) {
    output.add(word.slice(0, -2));
  }

  if (word.endsWith("ы") && word.length > 3) {
    output.add(word.slice(0, -1));
  }

  if (word.endsWith("и") && word.length > 3) {
    output.add(word.slice(0, -1));
  }

  if (word.endsWith("а") && word.length > 3) {
    output.add(word.slice(0, -1));
  }
};

const VARIANT_RULES: VariantRule[] = [
  ...(
    [
      ["ae", "e"],
      ["ai", "ei"],
      ["au", "o"],
      ["c", "k"],
      ["ch", "sh"],
      ["ck", "k"],
      ["ei", "i"],
      ["f", "ph"],
      ["j", "g"],
      ["k", "c"],
      ["kw", "ku"],
      ["qu", "ku"],
      ["qu", "kw"],
      ["kv", "ku"],
      ["kv", "kw"],
      ["sion", "shn"],
      ["tion", "shn"],
      ["x", "gz"],
      ["x", "kh"],
      ["x", "ks"],
      ["ya", "ia"],
      ["ye", "ie"],
      ["yo", "io"],
      ["yu", "iu"],
      ["zh", "j"],
    ] as const
  ).map(([from, to]) => createBidirectionalReplaceRule(from, to)),
  addPhoneticVariants,
  addPluralVariants,
];

const applyVariantRule = (variants: Set<string>, rule: VariantRule): void => {
  const variantsSnapshot = [...variants];

  for (const variant of variantsSnapshot) {
    rule(variant, variants);
  }
};

const getAutomaticWordVariants = (word: string): string[] => {
  const normalizedWord = normalizeWord(word);

  if (!normalizedWord) {
    return [];
  }

  const variants = new Set<string>([
    normalizedWord,
    translitCyrToLat(normalizedWord),
    translitLatToCyr(normalizedWord),
  ]);

  for (const rule of VARIANT_RULES) {
    applyVariantRule(variants, rule);
  }

  return [...variants].filter(Boolean);
};

export const getWordStem = (word: string): string => {
  const normalized = normalizeWord(word);

  if (!normalized) {
    return "";
  }

  return /[а-я]/i.test(normalized) || normalized.includes("ё")
    ? russianStemmer(normalized)
    : englishStemmer(normalized);
};

const buildWordFeatures = (word: string): WordFeatures => {
  const normalizedWord = normalizeWord(word);

  if (!normalizedWord) {
    return EMPTY_WORD_FEATURES;
  }

  const variants = getAutomaticWordVariants(normalizedWord);

  const foldedVariants = [
    ...new Set(
      variants.map((variant) => normalizeLatinPhonetics(variant)).filter(Boolean)
    ),
  ];

  const consonantSignatures = [
    ...new Set(
      variants
        .map((variant) => getConsonantSignature(variant))
        .filter((signature) => signature.length >= MIN_CONSONANT_SIGNATURE_LENGTH)
    ),
  ];

  const stemVariants = [
    ...new Set(
      variants
        .map((variant) => getWordStem(variant))
        .filter((stem) => stem.length >= MIN_STEM_LENGTH)
    ),
  ];

  return {
    consonantSignatures,
    foldedVariants,
    stemVariants,
    variants,
  };
};

export const getWordFeatures = (word: string): WordFeatures => {
  const normalizedWord = normalizeWord(word);

  if (!normalizedWord) {
    return EMPTY_WORD_FEATURES;
  }

  const cachedFeatures = WORD_FEATURES_CACHE.get(normalizedWord);

  if (cachedFeatures) {
    return cachedFeatures;
  }

  const features = buildWordFeatures(normalizedWord);

  WORD_FEATURES_CACHE.set(normalizedWord, features);

  if (WORD_FEATURES_CACHE.size > MAX_WORD_FEATURES_CACHE_SIZE) {
    const oldestKey = WORD_FEATURES_CACHE.keys().next().value;

    if (typeof oldestKey === "string") {
      WORD_FEATURES_CACHE.delete(oldestKey);
    }
  }

  return features;
};

export const normalizeLatinPhonetics = (text: string): string => {
  return text
    .toLowerCase()
    .replaceAll(/\b([a-z]*?)a([b-df-hj-np-tv-z])e\b/g, "$1ei$2")
    .replaceAll(/\b([a-z]*?)i([b-df-hj-np-tv-z])e\b/g, "$1ai$2")
    .replaceAll(/\b([a-z]*?)o([b-df-hj-np-tv-z])e\b/g, "$1ou$2")
    .replaceAll(/\b([a-z]*?)u([b-df-hj-np-tv-z])e\b/g, "$1yu$2")
    .replaceAll("ph", "f")
    .replaceAll("qu", "kw")
    .replaceAll("x", "ks")
    .replaceAll("x", "gz")
    .replaceAll("x", "kh")
    .replaceAll("ye", "ie")
    .replaceAll("ya", "ia")
    .replaceAll("yo", "io")
    .replaceAll("yu", "iu")
    .replaceAll("zh", "j")
    .replaceAll("j", "g")
    .replaceAll("q", "k")
    .replaceAll("w", "v")
    .replaceAll("c", "k")
    .replaceAll("ck", "k")
    .replaceAll("sion", "shn")
    .replaceAll("tion", "shn")
    .replaceAll("kv", "kw")
    .replaceAll("kv", "ku")
    .replaceAll("au", "o")
    .replaceAll("ae", "e")
    .replaceAll("ei", "i")
    .replaceAll("ai", "ei")
    .replaceAll("oo", "u")
    .replaceAll("ou", "u")
    .replaceAll("sch", "shch");
};

export const hasTokenVariantMatch = (token: string, variants: string[]): boolean => {
  return variants.some(
    (variant) =>
      token === variant ||
      (variant.length >= MIN_PREFIX_LENGTH && token.startsWith(variant))
  );
};

export const hasTokenStemMatch = (token: string, stemVariants: string[]): boolean => {
  const tokenStem = getWordStem(token);

  return tokenStem.length >= MIN_STEM_LENGTH && stemVariants.includes(tokenStem);
};

export const hasTokenConsonantMatch = (
  token: string,
  consonantSignatures: string[]
): boolean => {
  const tokenConsonantSignature = getConsonantSignature(token);

  return (
    tokenConsonantSignature.length >= MIN_CONSONANT_SIGNATURE_LENGTH &&
    consonantSignatures.some(
      (signature) =>
        tokenConsonantSignature === signature ||
        tokenConsonantSignature.startsWith(signature) ||
        signature.startsWith(tokenConsonantSignature)
    )
  );
};

export const isTokenMatchingWordFeatures = (
  token: string,
  foldedToken: string,
  wordFeatures: WordFeatures
): boolean => {
  return (
    hasTokenVariantMatch(token, wordFeatures.variants) ||
    hasTokenVariantMatch(foldedToken, wordFeatures.foldedVariants) ||
    hasTokenStemMatch(token, wordFeatures.stemVariants) ||
    hasTokenConsonantMatch(token, wordFeatures.consonantSignatures)
  );
};
