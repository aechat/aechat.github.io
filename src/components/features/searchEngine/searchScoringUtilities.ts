const SEARCH_SCORING_WEIGHTS = {
  contentMatchCount: 5,
  contentOnlyPenalty: 10,
  contentPhraseMatch: 45,
  entityMatchCount: 7,
  foldedTitleFallback: 90,
  phraseTag: 180,
  phraseTitle: 260,
  tagAndTitleMatch: 100,
  tagOrTitleMatch: 50,
  titleAndTagMatchCountStep: 10,
} as const;

const SEARCH_FIELD_WEIGHTS = {
  content: 2,
  entity: 3,
  tag: 3,
  title: 5,
} as const;

const SEARCH_PROXIMITY_WEIGHTS = {
  content: 0.55,
  entity: 0.75,
  tag: 0.85,
  title: 1.1,
} as const;

const SEARCH_LEADING_WEIGHTS = {
  content: 0.35,
  entity: 0.75,
  tag: 1,
  title: 1.25,
} as const;

const SEARCH_ORDER_WEIGHTS = {
  content: 0.25,
  entity: 0.7,
  tag: 0.95,
  title: 1.2,
} as const;

export const SEARCH_RESCORE_CONFIG = {
  activationThreshold: 1800,
  candidateLimit: 900,
} as const;

export type QueryWithFeatures<TWordFeatures> = {
  words: Array<{features: TWordFeatures}>;
};

export type SearchScoringDependencies<TWordFeatures> = {
  getTokenPositionsForWord: (
    normalizedTokens: string[],
    foldedTokens: string[],
    wordFeatures: TWordFeatures
  ) => number[];
  normalizeLatinPhonetics: (text: string) => string;
  toNormalizedWords: (text: string) => string[];
};

export type WordMatchType = "exact" | "prefix" | "folded" | "consonant" | "stem";

export type TypeCounts = Record<WordMatchType, number>;

export type FieldMatchInfoLike = {
  highestPriority?: number;
  longestMatchedWordLength: number;
  totalMatched: number;
  typeCounts: TypeCounts;
};

export type ShortQueryAdjustmentInput = {
  contentTypeCounts: TypeCounts;
  contentTotalMatched: number;
  entityTotalMatched: number;
  hasTagPhraseMatch: boolean;
  hasTitlePhraseMatch: boolean;
  normalizedQueryLength: number;
  tagTotalMatched: number;
  titleTotalMatched: number;
};

export type PhraseAndShortQueryAdjustmentInput = {
  contentTypeCounts: TypeCounts;
  contentTotalMatched: number;
  entityTotalMatched: number;
  normalizedContent: string;
  normalizedQuery: string;
  normalizedTag: string;
  normalizedTitle: string;
  tagLengthDampingFactor: number;
  tagTotalMatched: number;
  titleTotalMatched: number;
  titleTypeCounts: TypeCounts;
};

export type CompiledQueryLike<TWordFeatures> = QueryWithFeatures<TWordFeatures> & {
  normalizedQuery: string;
};

const PROXIMITY_MAX_BONUS = 56;

const PROXIMITY_DECAY_PER_TOKEN = 5;

const ORDER_STEP_BONUS = 12;

const ORDER_FULL_SEQUENCE_BONUS = 28;

const ORDER_MAX_START_BONUS = 22;

const ORDER_MAX_SPAN_BONUS = 20;

const LEADING_MAX_BONUS = 24;

const LEADING_DECAY_PER_TOKEN = 3;

const SHORT_QUERY_MAX_LENGTH = 3;

const SHORT_QUERY_CONTENT_ONLY_BASE_PENALTY = 16;

const SHORT_QUERY_WEAK_MATCH_PENALTY_STEP = 5;

const SHORT_QUERY_MAX_WEAK_MATCH_PENALTY = 26;

const SHORT_QUERY_STRONG_MATCH_BONUS_STEP = 4;

const SHORT_QUERY_MAX_STRONG_MATCH_BONUS = 12;

const WORD_MATCH_SCORE: Record<WordMatchType, number> = {
  consonant: 10,
  exact: 24,
  folded: 16,
  prefix: 14,
  stem: 7,
};

const getTokenPositionsByQuery = <TWordFeatures>(
  text: string,
  query: QueryWithFeatures<TWordFeatures>,
  dependencies: SearchScoringDependencies<TWordFeatures>
): number[][] | undefined => {
  const normalizedWords = dependencies.toNormalizedWords(text);

  if (normalizedWords.length === 0) {
    return;
  }

  const foldedWords = dependencies
    .normalizeLatinPhonetics(normalizedWords.join(" "))
    .split(" ")
    .filter(Boolean);

  return query.words.map(({features}) =>
    dependencies.getTokenPositionsForWord(normalizedWords, foldedWords, features)
  );
};

const getSmallestTokenRange = (tokenPositions: number[][]): number | undefined => {
  if (
    tokenPositions.length === 0 ||
    tokenPositions.some((positions) => positions.length === 0)
  ) {
    return undefined;
  }

  const pointers = Array.from({length: tokenPositions.length}, () => 0);

  let bestRange = Infinity;

  while (true) {
    const currentValues = tokenPositions.map(
      (positions, index) => positions[pointers[index]]
    );

    const minValue = Math.min(...currentValues);

    const maxValue = Math.max(...currentValues);

    bestRange = Math.min(bestRange, maxValue - minValue);

    const minIndex = currentValues.indexOf(minValue);

    pointers[minIndex] += 1;

    if (pointers[minIndex] >= tokenPositions[minIndex].length) {
      break;
    }
  }

  return Number.isFinite(bestRange) ? bestRange : undefined;
};

const pickSequentialPositions = (tokenPositions: number[][]): number[] => {
  const sequence: number[] = [];

  let previousPosition = -1;

  for (const positions of tokenPositions) {
    const nextPosition = positions.find((position) => position > previousPosition);

    if (nextPosition === undefined) {
      break;
    }

    sequence.push(nextPosition);
    previousPosition = nextPosition;
  }

  return sequence;
};

const getProximityBonusFromPositions = (
  tokenPositions: number[][] | undefined,
  weight: number
): number => {
  if (!tokenPositions || tokenPositions.length < 2) {
    return 0;
  }

  const smallestRange = getSmallestTokenRange(tokenPositions);

  if (smallestRange === undefined) {
    return 0;
  }

  const rawBonus = Math.max(
    0,
    PROXIMITY_MAX_BONUS - smallestRange * PROXIMITY_DECAY_PER_TOKEN
  );

  return Math.round(rawBonus * weight);
};

export const getProximityBonus = <TWordFeatures>(
  text: string,
  query: QueryWithFeatures<TWordFeatures>,
  weight: number,
  dependencies: SearchScoringDependencies<TWordFeatures>
): number => {
  if (query.words.length < 2) {
    return 0;
  }

  const tokenPositions = getTokenPositionsByQuery(text, query, dependencies);

  return getProximityBonusFromPositions(tokenPositions, weight);
};

const getQueryOrderBonusFromPositions = (
  tokenPositions: number[][] | undefined,
  queryWordsCount: number,
  weight: number
): number => {
  if (
    !tokenPositions ||
    queryWordsCount < 2 ||
    tokenPositions.some((positions) => positions.length === 0)
  ) {
    return 0;
  }

  const sequence = pickSequentialPositions(tokenPositions);

  if (sequence.length < 2) {
    return 0;
  }

  const start = sequence[0];

  const end = sequence.at(-1) ?? start;

  const span = end - start;

  let rawBonus = sequence.length * ORDER_STEP_BONUS;

  if (sequence.length === queryWordsCount) {
    rawBonus += ORDER_FULL_SEQUENCE_BONUS;
  }

  rawBonus += Math.max(0, ORDER_MAX_START_BONUS - start * 2);
  rawBonus += Math.max(0, ORDER_MAX_SPAN_BONUS - span * 2);

  return Math.round(rawBonus * weight);
};

export const getQueryOrderBonus = <TWordFeatures>(
  text: string,
  query: QueryWithFeatures<TWordFeatures>,
  weight: number,
  dependencies: SearchScoringDependencies<TWordFeatures>
): number => {
  if (query.words.length < 2) {
    return 0;
  }

  const tokenPositions = getTokenPositionsByQuery(text, query, dependencies);

  return getQueryOrderBonusFromPositions(tokenPositions, query.words.length, weight);
};

const getLeadingWordBonusFromPositions = (
  tokenPositions: number[][] | undefined,
  weight: number
): number => {
  if (!tokenPositions || tokenPositions.length === 0 || tokenPositions[0].length === 0) {
    return 0;
  }

  const firstPosition = tokenPositions[0][0];

  const rawBonus = Math.max(
    0,
    LEADING_MAX_BONUS - firstPosition * LEADING_DECAY_PER_TOKEN
  );

  return Math.round(rawBonus * weight);
};

export const getLeadingWordBonus = <TWordFeatures>(
  text: string,
  query: QueryWithFeatures<TWordFeatures>,
  weight: number,
  dependencies: SearchScoringDependencies<TWordFeatures>
): number => {
  if (query.words.length === 0) {
    return 0;
  }

  const tokenPositions = getTokenPositionsByQuery(text, query, dependencies);

  return getLeadingWordBonusFromPositions(tokenPositions, weight);
};

export const getFieldMatchTypeScore = (
  fieldMatchInfo: FieldMatchInfoLike,
  fieldWeight: number
): number => {
  let score = (fieldMatchInfo.highestPriority ?? 0) * fieldWeight * 3;

  for (const [matchType, count] of Object.entries(fieldMatchInfo.typeCounts) as Array<
    [WordMatchType, number]
  >) {
    score += count * WORD_MATCH_SCORE[matchType] * fieldWeight;
  }

  return score;
};

export const getShortQueryAdjustment = ({
  contentTotalMatched,
  contentTypeCounts,
  entityTotalMatched,
  hasTagPhraseMatch,
  hasTitlePhraseMatch,
  normalizedQueryLength,
  tagTotalMatched,
  titleTotalMatched,
}: ShortQueryAdjustmentInput): number => {
  if (normalizedQueryLength === 0 || normalizedQueryLength > SHORT_QUERY_MAX_LENGTH) {
    return 0;
  }

  const isOnlyContentSignal =
    contentTotalMatched > 0 &&
    titleTotalMatched === 0 &&
    tagTotalMatched === 0 &&
    entityTotalMatched === 0;

  if (!isOnlyContentSignal) {
    return 0;
  }

  const weakContentMatches =
    contentTypeCounts.folded + contentTypeCounts.consonant + contentTypeCounts.stem;

  const strongContentMatches = contentTypeCounts.exact + contentTypeCounts.prefix;

  let adjustment = -SHORT_QUERY_CONTENT_ONLY_BASE_PENALTY;

  if (!hasTitlePhraseMatch && !hasTagPhraseMatch && weakContentMatches > 0) {
    adjustment -= Math.min(
      SHORT_QUERY_MAX_WEAK_MATCH_PENALTY,
      weakContentMatches * SHORT_QUERY_WEAK_MATCH_PENALTY_STEP
    );
  }

  if (strongContentMatches > 0) {
    adjustment += Math.min(
      SHORT_QUERY_MAX_STRONG_MATCH_BONUS,
      strongContentMatches * SHORT_QUERY_STRONG_MATCH_BONUS_STEP
    );
  }

  return adjustment;
};

export const getPhraseAndShortQueryAdjustment = ({
  contentTotalMatched,
  contentTypeCounts,
  entityTotalMatched,
  normalizedContent,
  normalizedQuery,
  normalizedTag,
  normalizedTitle,
  tagLengthDampingFactor,
  tagTotalMatched,
  titleTotalMatched,
  titleTypeCounts,
}: PhraseAndShortQueryAdjustmentInput): number => {
  let adjustment = 0;

  let hasTitlePhraseMatch = false;

  let hasTagPhraseMatch = false;

  if (normalizedQuery.length > 1) {
    hasTitlePhraseMatch = normalizedTitle.includes(normalizedQuery);
    hasTagPhraseMatch = normalizedTag.includes(normalizedQuery);

    if (hasTitlePhraseMatch) {
      adjustment += 260;
    }

    if (hasTagPhraseMatch) {
      adjustment += Math.round(180 * tagLengthDampingFactor);
    }

    if (
      !hasTitlePhraseMatch &&
      (titleTypeCounts.folded > 0 ||
        titleTypeCounts.stem > 0 ||
        titleTypeCounts.consonant > 0 ||
        titleTypeCounts.prefix > 0)
    ) {
      adjustment += 90;
    }

    if (normalizedContent.includes(normalizedQuery)) {
      adjustment += 45;
    }
  }

  adjustment += getShortQueryAdjustment({
    contentTotalMatched,
    contentTypeCounts,
    entityTotalMatched,
    hasTagPhraseMatch,
    hasTitlePhraseMatch,
    normalizedQueryLength: normalizedQuery.length,
    tagTotalMatched,
    titleTotalMatched,
  });

  return adjustment;
};

export const computeSearchScore = <TWordFeatures>({
  compiledQuery,
  contentMatchInfo,
  dependencies,
  entityMatchInfo,
  normalizedContent,
  normalizedEntityText,
  normalizedTag,
  normalizedTitle,
  tagLengthDampingFactor,
  tagMatchInfo,
  tagScoringMatchInfo,
  titleMatchInfo,
}: {
  compiledQuery: CompiledQueryLike<TWordFeatures>;
  contentMatchInfo: FieldMatchInfoLike;
  dependencies: SearchScoringDependencies<TWordFeatures>;
  entityMatchInfo: FieldMatchInfoLike;
  normalizedContent: string;
  normalizedEntityText: string;
  normalizedTag: string;
  normalizedTitle: string;
  tagLengthDampingFactor: number;
  tagMatchInfo: FieldMatchInfoLike;
  tagScoringMatchInfo: FieldMatchInfoLike;
  titleMatchInfo: FieldMatchInfoLike;
}): number => {
  let score = 0;

  if (titleMatchInfo.totalMatched && tagMatchInfo.totalMatched) {
    score += SEARCH_SCORING_WEIGHTS.tagAndTitleMatch;
  } else if (titleMatchInfo.totalMatched || tagMatchInfo.totalMatched) {
    score += SEARCH_SCORING_WEIGHTS.tagOrTitleMatch;
  }

  score += Math.max(
    titleMatchInfo.longestMatchedWordLength,
    tagMatchInfo.longestMatchedWordLength,
    0
  );

  score +=
    SEARCH_SCORING_WEIGHTS.titleAndTagMatchCountStep *
    (titleMatchInfo.totalMatched + tagMatchInfo.totalMatched - 1);

  score += SEARCH_SCORING_WEIGHTS.contentMatchCount * contentMatchInfo.totalMatched;
  score += SEARCH_SCORING_WEIGHTS.entityMatchCount * entityMatchInfo.totalMatched;
  score += getFieldMatchTypeScore(titleMatchInfo, SEARCH_FIELD_WEIGHTS.title);

  score += Math.round(
    getFieldMatchTypeScore(tagScoringMatchInfo, SEARCH_FIELD_WEIGHTS.tag) *
      tagLengthDampingFactor
  );

  score += getFieldMatchTypeScore(entityMatchInfo, SEARCH_FIELD_WEIGHTS.entity);
  score += getFieldMatchTypeScore(contentMatchInfo, SEARCH_FIELD_WEIGHTS.content);

  score += getPhraseAndShortQueryAdjustment({
    contentTotalMatched: contentMatchInfo.totalMatched,
    contentTypeCounts: contentMatchInfo.typeCounts,
    entityTotalMatched: entityMatchInfo.totalMatched,
    normalizedContent,
    normalizedQuery: compiledQuery.normalizedQuery,
    normalizedTag,
    normalizedTitle,
    tagLengthDampingFactor,
    tagTotalMatched: tagMatchInfo.totalMatched,
    titleTotalMatched: titleMatchInfo.totalMatched,
    titleTypeCounts: titleMatchInfo.typeCounts,
  });

  const titlePositions =
    titleMatchInfo.totalMatched > 0
      ? getTokenPositionsByQuery(normalizedTitle, compiledQuery, dependencies)
      : undefined;

  const tagPositions =
    tagMatchInfo.totalMatched > 0
      ? getTokenPositionsByQuery(normalizedTag, compiledQuery, dependencies)
      : undefined;

  const entityPositions =
    entityMatchInfo.totalMatched > 0
      ? getTokenPositionsByQuery(normalizedEntityText, compiledQuery, dependencies)
      : undefined;

  const contentPositions =
    contentMatchInfo.totalMatched > 0
      ? getTokenPositionsByQuery(normalizedContent, compiledQuery, dependencies)
      : undefined;

  const queryWordsCount = compiledQuery.words.length;

  score += getProximityBonusFromPositions(titlePositions, SEARCH_PROXIMITY_WEIGHTS.title);

  score += Math.round(
    getProximityBonusFromPositions(tagPositions, SEARCH_PROXIMITY_WEIGHTS.tag) *
      tagLengthDampingFactor
  );

  score += getProximityBonusFromPositions(
    entityPositions,
    SEARCH_PROXIMITY_WEIGHTS.entity
  );

  score += getProximityBonusFromPositions(
    contentPositions,
    SEARCH_PROXIMITY_WEIGHTS.content
  );

  score += getLeadingWordBonusFromPositions(titlePositions, SEARCH_LEADING_WEIGHTS.title);

  score += Math.round(
    getLeadingWordBonusFromPositions(tagPositions, SEARCH_LEADING_WEIGHTS.tag) *
      tagLengthDampingFactor
  );

  score += getLeadingWordBonusFromPositions(
    entityPositions,
    SEARCH_LEADING_WEIGHTS.entity
  );

  score += getLeadingWordBonusFromPositions(
    contentPositions,
    SEARCH_LEADING_WEIGHTS.content
  );

  score += getQueryOrderBonusFromPositions(
    titlePositions,
    queryWordsCount,
    SEARCH_ORDER_WEIGHTS.title
  );

  score += Math.round(
    getQueryOrderBonusFromPositions(
      tagPositions,
      queryWordsCount,
      SEARCH_ORDER_WEIGHTS.tag
    ) * tagLengthDampingFactor
  );

  score += getQueryOrderBonusFromPositions(
    entityPositions,
    queryWordsCount,
    SEARCH_ORDER_WEIGHTS.entity
  );

  score += getQueryOrderBonusFromPositions(
    contentPositions,
    queryWordsCount,
    SEARCH_ORDER_WEIGHTS.content
  );

  if (
    !titleMatchInfo.totalMatched &&
    !tagMatchInfo.totalMatched &&
    !entityMatchInfo.totalMatched &&
    contentMatchInfo.totalMatched
  ) {
    score -= SEARCH_SCORING_WEIGHTS.contentOnlyPenalty;
  }

  return score;
};

export const selectCandidatesForRescore = <TItem>({
  candidateLimit,
  getIdMatchPriority,
  getPreliminaryScore,
  items,
}: {
  candidateLimit: number;
  getIdMatchPriority: (item: TItem) => number;
  getPreliminaryScore: (item: TItem) => number;
  items: TItem[];
}): TItem[] => {
  if (items.length <= candidateLimit) {
    return items;
  }

  return items
    .map((item, sourceOrder) => ({
      idMatchPriority: getIdMatchPriority(item),
      item,
      preliminaryScore: getPreliminaryScore(item),
      sourceOrder,
    }))
    .toSorted((a, b) => {
      if (b.idMatchPriority !== a.idMatchPriority) {
        return b.idMatchPriority - a.idMatchPriority;
      }

      return b.preliminaryScore === a.preliminaryScore
        ? a.sourceOrder - b.sourceOrder
        : b.preliminaryScore - a.preliminaryScore;
    })
    .slice(0, candidateLimit)
    .map((entry) => entry.item);
};
