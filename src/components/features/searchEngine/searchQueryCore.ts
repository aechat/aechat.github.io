import {
  extractSearchWords,
  isKeyCombinationSearch,
  normalizeKeyCombination,
  normalizeText,
  normalizeWord,
} from "./searchContentUtilities";

import {
  getConsonantSignature,
  getWordFeatures,
  getWordStem,
  isTokenMatchingWordFeatures,
  MIN_CONSONANT_SIGNATURE_LENGTH,
  MIN_PREFIX_LENGTH,
  MIN_STEM_LENGTH,
  normalizeLatinPhonetics,
  WORD_MATCH_PRIORITY,
  type WordFeatures,
} from "./searchPhoneticUtilities";

import {
  computeSearchScore,
  SEARCH_RESCORE_CONFIG,
  type SearchScoringDependencies,
  selectCandidatesForRescore,
} from "./searchScoringUtilities";

export type TextSearchIndex = {
  consonantPrefixSet: Set<string>;
  consonantSet: Set<string>;
  foldedPrefixSet: Set<string>;
  foldedStemSet: Set<string>;
  foldedText: string;
  foldedWordSet: Set<string>;
  normalizedPrefixSet: Set<string>;
  normalizedText: string;
  normalizedWordSet: Set<string>;
  stemSet: Set<string>;
};

type WordMatchType = "exact" | "prefix" | "folded" | "consonant" | "stem";

type CompiledSearchWord = {
  features: WordFeatures;
  normalizedWord: string;
};

export type CompiledSearchQuery = {
  isKeyCombination: boolean;
  normalizedQuery: string;
  originalText: string;
  searchWords: string[];
  words: CompiledSearchWord[];
};

export type FieldMatchInfo = {
  highestPriority: number;
  longestMatchedWordLength: number;
  matchedWords: string[];
  totalMatched: number;
  typeCounts: Record<WordMatchType, number>;
};

export type SearchWorkerDetail = {
  fieldIndexes: TextSearchIndex[];
  id: string;
  lineSearchIndexes: TextSearchIndex[];
  normalizedContent: string;
  normalizedEntityText: string;
  normalizedKeyFields: string[];
  normalizedTag: string;
  normalizedTitle: string;
  searchIndexes: {
    content: TextSearchIndex;
    entity: TextSearchIndex;
    tag: TextSearchIndex;
    tagScoring: TextSearchIndex;
    title: TextSearchIndex;
  };
  sourceOrder: number;
  tagTokenCount: number;
};

export type WorkerRankedResult = {
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  idMatchPriority: number;
  isSingleParagraphMatch: boolean;
  score: number;
  sourceOrder: number;
};

const createEmptyTypeCounts = (): Record<WordMatchType, number> => ({
  consonant: 0,
  exact: 0,
  folded: 0,
  prefix: 0,
  stem: 0,
});

const buildWordPrefixSet = (words: string[]): Set<string> => {
  const prefixSet = new Set<string>();

  for (const word of words) {
    for (let index = MIN_PREFIX_LENGTH; index < word.length; index += 1) {
      prefixSet.add(word.slice(0, index));
    }
  }

  return prefixSet;
};

export const buildSearchIndex = (text: string): TextSearchIndex => {
  const normalizedText = normalizeText(text);

  const foldedText = normalizeLatinPhonetics(normalizedText);

  const words = normalizedText.split(" ").filter(Boolean);

  const foldedWords = foldedText.split(" ").filter(Boolean);

  const normalizedWordSet = new Set(words);

  const foldedWordSet = new Set(foldedWords);

  const normalizedPrefixSet = buildWordPrefixSet(words);

  const foldedPrefixSet = buildWordPrefixSet(foldedWords);

  const stemSet = new Set(
    words
      .map((word) => getWordStem(word))
      .filter((stem) => stem.length >= MIN_STEM_LENGTH)
  );

  const foldedStemSet = new Set(
    foldedWords
      .map((word) => getWordStem(word))
      .filter((stem) => stem.length >= MIN_STEM_LENGTH)
  );

  const consonantSignatures = [
    ...new Set(
      [...words, ...foldedWords]
        .map((word) => getConsonantSignature(word))
        .filter((signature) => signature.length >= MIN_CONSONANT_SIGNATURE_LENGTH)
    ),
  ];

  const consonantSet = new Set(consonantSignatures);

  const consonantPrefixSet = new Set<string>();

  for (const signature of consonantSignatures) {
    for (
      let index = MIN_CONSONANT_SIGNATURE_LENGTH;
      index < signature.length;
      index += 1
    ) {
      consonantPrefixSet.add(signature.slice(0, index));
    }
  }

  return {
    consonantPrefixSet,
    consonantSet,
    foldedPrefixSet,
    foldedStemSet,
    foldedText,
    foldedWordSet,
    normalizedPrefixSet,
    normalizedText,
    normalizedWordSet,
    stemSet,
  };
};

const hasExactVariantMatch = (
  variants: string[],
  text: string,
  wordSet: Set<string>
): boolean => variants.some((variant) => text.includes(variant) || wordSet.has(variant));

const hasPrefixVariantMatch = (variants: string[], prefixSet: Set<string>): boolean => {
  return variants.some(
    (variant) => variant.length >= MIN_PREFIX_LENGTH && prefixSet.has(variant)
  );
};

const hasConsonantSignatureMatch = (
  signatures: string[],
  consonantSet: Set<string>,
  consonantPrefixSet: Set<string>
): boolean => {
  return signatures.some(
    (signature) => consonantSet.has(signature) || consonantPrefixSet.has(signature)
  );
};

const hasStemMatch = (
  stems: string[],
  stemSet: Set<string>,
  foldedStemSet: Set<string>
) => {
  return stems.some((stem) => stemSet.has(stem) || foldedStemSet.has(stem));
};

const getWordMatchType = (
  wordFeatures: WordFeatures,
  index: TextSearchIndex
): WordMatchType | undefined => {
  if (
    hasExactVariantMatch(
      wordFeatures.variants,
      index.normalizedText,
      index.normalizedWordSet
    )
  ) {
    return "exact";
  }

  if (hasPrefixVariantMatch(wordFeatures.variants, index.normalizedPrefixSet)) {
    return "prefix";
  }

  if (
    hasExactVariantMatch(
      wordFeatures.foldedVariants,
      index.foldedText,
      index.foldedWordSet
    )
  ) {
    return "folded";
  }

  if (hasPrefixVariantMatch(wordFeatures.foldedVariants, index.foldedPrefixSet)) {
    return "prefix";
  }

  if (
    hasConsonantSignatureMatch(
      wordFeatures.consonantSignatures,
      index.consonantSet,
      index.consonantPrefixSet
    )
  ) {
    return "consonant";
  }

  if (hasStemMatch(wordFeatures.stemVariants, index.stemSet, index.foldedStemSet)) {
    return "stem";
  }

  return undefined;
};

const hasWordMatch = (searchWord: string, index: TextSearchIndex): boolean => {
  const normalizedWord = normalizeWord(searchWord);

  if (!normalizedWord) {
    return false;
  }

  return Boolean(getWordMatchType(getWordFeatures(normalizedWord), index));
};

export const hasAllQueryWordsMatch = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): boolean => {
  for (const {normalizedWord} of compiledQuery.words) {
    if (!hasWordMatch(normalizedWord, textSearchIndex)) {
      return false;
    }
  }

  return true;
};

const hasAnyQueryWordMatch = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): boolean => {
  for (const {normalizedWord} of compiledQuery.words) {
    if (hasWordMatch(normalizedWord, textSearchIndex)) {
      return true;
    }
  }

  return false;
};

export const getFieldMatchInfo = (
  textSearchIndex: TextSearchIndex,
  compiledQuery: CompiledSearchQuery
): FieldMatchInfo => {
  const typeCounts = createEmptyTypeCounts();

  const matchedWords: string[] = [];

  let highestPriority = 0;

  let longestMatchedWordLength = 0;

  for (const {features, normalizedWord} of compiledQuery.words) {
    const matchType = getWordMatchType(features, textSearchIndex);

    if (!matchType) {
      continue;
    }

    matchedWords.push(normalizedWord);
    typeCounts[matchType] += 1;
    highestPriority = Math.max(highestPriority, WORD_MATCH_PRIORITY[matchType]);
    longestMatchedWordLength = Math.max(longestMatchedWordLength, normalizedWord.length);
  }

  return {
    highestPriority,
    longestMatchedWordLength,
    matchedWords,
    totalMatched: matchedWords.length,
    typeCounts,
  };
};

export const compileSearchQuery = (text: string): CompiledSearchQuery => {
  const searchWords = extractSearchWords(text);

  return {
    isKeyCombination: isKeyCombinationSearch(text),
    normalizedQuery: normalizeText(text),
    originalText: text,
    searchWords,
    words: searchWords.map((normalizedWord) => ({
      features: getWordFeatures(normalizedWord),
      normalizedWord,
    })),
  };
};

export const hasCompiledQueryMatchInIndexes = (
  fieldIndexes: TextSearchIndex[],
  compiledQuery: CompiledSearchQuery,
  mode: "all" | "any" = "all"
): boolean => {
  if (fieldIndexes.length === 0) {
    return false;
  }

  if (mode === "any") {
    return fieldIndexes.some((fieldIndex) =>
      hasAnyQueryWordMatch(fieldIndex, compiledQuery)
    );
  }

  for (const {features} of compiledQuery.words) {
    const hasWordMatchInAnyField = fieldIndexes.some((fieldIndex) =>
      Boolean(getWordMatchType(features, fieldIndex))
    );

    if (!hasWordMatchInAnyField) {
      return false;
    }
  }

  return true;
};

export const hasCompiledQueryMatchInFields = (
  fields: string[],
  compiledQuery: CompiledSearchQuery,
  mode: "all" | "any" = "all"
): boolean => {
  const fieldIndexes = fields
    .map((field) => field.trim())
    .filter(Boolean)
    .map((field) => buildSearchIndex(field));

  return hasCompiledQueryMatchInIndexes(fieldIndexes, compiledQuery, mode);
};

export const TAG_SCORING_TOKEN_CAP = 48;

const TAG_SCORING_DAMPING_START = 16;

const TAG_SCORING_MAX_REDUCTION = 0.45;

const getTagLengthDampingFactor = (tagTokenCount: number): number => {
  if (tagTokenCount <= TAG_SCORING_DAMPING_START) {
    return 1;
  }

  const maxOverflow = Math.max(1, TAG_SCORING_TOKEN_CAP - TAG_SCORING_DAMPING_START);

  const overflow = Math.min(tagTokenCount - TAG_SCORING_DAMPING_START, maxOverflow);

  const dampingRatio = Math.log1p(overflow) / Math.log1p(maxOverflow);

  return 1 - dampingRatio * TAG_SCORING_MAX_REDUCTION;
};

export const getTokenPositionsForWord = (
  normalizedTokens: string[],
  foldedTokens: string[],
  wordFeatures: WordFeatures
): number[] => {
  const positions: number[] = [];

  for (const [tokenIndex, token] of normalizedTokens.entries()) {
    const foldedToken = foldedTokens[tokenIndex] || normalizeLatinPhonetics(token);

    if (isTokenMatchingWordFeatures(token, foldedToken, wordFeatures)) {
      positions.push(tokenIndex);
    }
  }

  return positions;
};

const toNormalizedWords = (text: string): string[] =>
  normalizeText(text).split(" ").filter(Boolean);

export const searchScoringDependencies: SearchScoringDependencies<WordFeatures> = {
  getTokenPositionsForWord,
  normalizeLatinPhonetics,
  toNormalizedWords,
};

const computeScore = (
  compiledQuery: CompiledSearchQuery,
  normalizedTitle: string,
  normalizedTag: string,
  normalizedContent: string,
  normalizedEntityText: string,
  titleMatchInfo: FieldMatchInfo,
  tagMatchInfo: FieldMatchInfo,
  tagScoringMatchInfo: FieldMatchInfo,
  contentMatchInfo: FieldMatchInfo,
  entityMatchInfo: FieldMatchInfo,
  tagTokenCount: number
): number => {
  const tagLengthDampingFactor = getTagLengthDampingFactor(tagTokenCount);

  return computeSearchScore({
    compiledQuery,
    contentMatchInfo,
    dependencies: searchScoringDependencies,
    entityMatchInfo,
    normalizedContent,
    normalizedEntityText,
    normalizedTag,
    normalizedTitle,
    tagLengthDampingFactor,
    tagMatchInfo,
    tagScoringMatchInfo,
    titleMatchInfo,
  });
};

const INDEX_QUERY_REGEX = /^\d+(?:[.-]\d+)*$/;

const normalizeIndexReference = (value: string): string => {
  return value.trim().replace(/^#/, "").replaceAll(",", ".");
};

const isNumericIndexQuery = (value: string): boolean => {
  const normalizedValue = normalizeIndexReference(value);

  return INDEX_QUERY_REGEX.test(normalizedValue);
};

const getIdMatchPriority = (id: string, queryText: string): number => {
  if (!isNumericIndexQuery(queryText)) {
    return 0;
  }

  const normalizedId = normalizeIndexReference(id);

  const normalizedQuery = normalizeIndexReference(queryText);

  if (!normalizedId || !normalizedQuery) {
    return 0;
  }

  if (normalizedId === normalizedQuery) {
    return 3;
  }

  if (
    normalizedId.startsWith(`${normalizedQuery}.`) ||
    normalizedId.startsWith(`${normalizedQuery}-`)
  ) {
    return 2;
  }

  if (normalizedId.includes(normalizedQuery)) {
    return 1;
  }

  return 0;
};

const filterByKeyCombination = (
  {normalizedKeyFields}: Pick<SearchWorkerDetail, "normalizedKeyFields">,
  originalText: string
): boolean => {
  const searchPattern = normalizeKeyCombination(originalText);

  return normalizedKeyFields.some((field) => field.includes(searchPattern));
};

const filterByWords = (
  {fieldIndexes, id}: Pick<SearchWorkerDetail, "fieldIndexes" | "id">,
  compiledQuery: CompiledSearchQuery
): boolean => {
  if (getIdMatchPriority(id, compiledQuery.originalText) > 0) {
    return true;
  }

  return hasCompiledQueryMatchInIndexes(fieldIndexes, compiledQuery);
};

const filterDetail = (
  detail: SearchWorkerDetail,
  compiledQuery: CompiledSearchQuery
): boolean => {
  if (compiledQuery.isKeyCombination) {
    return filterByKeyCombination(detail, compiledQuery.originalText);
  }

  return filterByWords(detail, compiledQuery);
};

const rankDetail = (
  detail: SearchWorkerDetail,
  compiledQuery: CompiledSearchQuery
): WorkerRankedResult => {
  const titleMatchInfo = getFieldMatchInfo(detail.searchIndexes.title, compiledQuery);

  const tagMatchInfo = getFieldMatchInfo(detail.searchIndexes.tag, compiledQuery);

  const tagScoringMatchInfo = getFieldMatchInfo(
    detail.searchIndexes.tagScoring,
    compiledQuery
  );

  const contentMatchInfo = getFieldMatchInfo(detail.searchIndexes.content, compiledQuery);

  const entityMatchInfo = getFieldMatchInfo(detail.searchIndexes.entity, compiledQuery);

  const isSingleParagraphMatch = detail.lineSearchIndexes.some((lineSearchIndex) =>
    hasAllQueryWordsMatch(lineSearchIndex, compiledQuery)
  );

  return {
    hasTagMatch: tagMatchInfo.matchedWords.length > 0,
    hasTitleMatch: titleMatchInfo.matchedWords.length > 0,
    id: detail.id,
    idMatchPriority: getIdMatchPriority(detail.id, compiledQuery.originalText),
    isSingleParagraphMatch,
    score: computeScore(
      compiledQuery,
      detail.normalizedTitle,
      detail.normalizedTag,
      detail.normalizedContent,
      detail.normalizedEntityText,
      titleMatchInfo,
      tagMatchInfo,
      tagScoringMatchInfo,
      contentMatchInfo,
      entityMatchInfo,
      detail.tagTokenCount
    ),
    sourceOrder: detail.sourceOrder,
  };
};

const getPreliminaryRankScore = (
  detail: SearchWorkerDetail,
  compiledQuery: CompiledSearchQuery
): number => {
  const titleMatchInfo = getFieldMatchInfo(detail.searchIndexes.title, compiledQuery);

  const tagMatchInfo = getFieldMatchInfo(detail.searchIndexes.tag, compiledQuery);

  const contentMatchInfo = getFieldMatchInfo(detail.searchIndexes.content, compiledQuery);

  const entityMatchInfo = getFieldMatchInfo(detail.searchIndexes.entity, compiledQuery);

  let score = 0;

  score += titleMatchInfo.totalMatched * 14;
  score += tagMatchInfo.totalMatched * 10;
  score += entityMatchInfo.totalMatched * 6;
  score += contentMatchInfo.totalMatched * 3;
  score += titleMatchInfo.longestMatchedWordLength * 2;
  score += tagMatchInfo.longestMatchedWordLength;

  if (
    compiledQuery.normalizedQuery.length > 1 &&
    detail.normalizedTitle.includes(compiledQuery.normalizedQuery)
  ) {
    score += 40;
  }

  if (
    compiledQuery.normalizedQuery.length > 1 &&
    detail.normalizedTag.includes(compiledQuery.normalizedQuery)
  ) {
    score += 24;
  }

  return score;
};

export const searchDetails = (
  detailsData: SearchWorkerDetail[],
  query: string
): WorkerRankedResult[] => {
  if (!query.trim()) {
    return [];
  }

  const compiledQuery = compileSearchQuery(query);

  const filtered = detailsData.filter((detail) => filterDetail(detail, compiledQuery));

  const candidatesForRescore =
    filtered.length >= SEARCH_RESCORE_CONFIG.activationThreshold
      ? selectCandidatesForRescore({
          candidateLimit: SEARCH_RESCORE_CONFIG.candidateLimit,
          getIdMatchPriority: (detail) =>
            getIdMatchPriority(detail.id, compiledQuery.originalText),
          getPreliminaryScore: (detail) => getPreliminaryRankScore(detail, compiledQuery),
          items: filtered,
        })
      : filtered;

  const ranked = candidatesForRescore
    .map((detail) => rankDetail(detail, compiledQuery))
    .toSorted((a, b) => {
      if (b.idMatchPriority !== a.idMatchPriority) {
        return b.idMatchPriority - a.idMatchPriority;
      }

      if (b.score !== a.score) {
        return b.score - a.score;
      }

      return a.sourceOrder - b.sourceOrder;
    });

  return ranked;
};
