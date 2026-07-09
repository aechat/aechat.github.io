export interface SuggestionCandidateSource {
  tag?: string;
  title: string;
}

export interface SuggestionSectionSource {
  title: string;
}

const getBigrams = (string_: string): string[] => {
  const bigrams: string[] = [];

  for (let index = 0; index < string_.length - 1; index += 1) {
    bigrams.push(string_.slice(index, index + 2));
  }

  return bigrams;
};

const sorensenDice = (string1: string, string2: string): number => {
  const b1 = getBigrams(string1);

  const b2 = getBigrams(string2);

  if (b1.length === 0 && b2.length === 0) {
    return 1;
  }

  if (b1.length === 0 || b2.length === 0) {
    return 0;
  }

  const set2 = new Set(b2);

  let intersection = 0;

  for (const bigram of b1) {
    if (set2.has(bigram)) {
      intersection += 1;
    }
  }

  return (2 * intersection) / (b1.length + b2.length);
};

const getWordMatchScore = (qWords: string[], candWords: string[]): number => {
  let wordMatches = 0;

  for (const qw of qWords) {
    if (candWords.includes(qw)) {
      wordMatches += 1;
      continue;
    }

    const hasPrefix = candWords.some((cw) => cw.startsWith(qw));

    if (hasPrefix) {
      wordMatches += 0.7;
      continue;
    }

    let maxWordDice = 0;

    for (const cw of candWords) {
      const d = sorensenDice(qw, cw);

      if (d > maxWordDice) {
        maxWordDice = d;
      }
    }

    if (maxWordDice > 0.5) {
      wordMatches += maxWordDice * 0.5;
    }
  }

  return wordMatches / qWords.length;
};

const calculateSimilarity = (query: string, candidate: string): number => {
  const qNorm = query.toLowerCase().replaceAll(/\s+/g, " ").trim();

  const candNorm = candidate.toLowerCase().replaceAll(/\s+/g, " ").trim();

  if (!qNorm || !candNorm) {
    return 0;
  }

  if (qNorm === candNorm) {
    return 1;
  }

  let substringScore = 0;

  if (candNorm.includes(qNorm)) {
    substringScore = 0.5 + (qNorm.length / candNorm.length) * 0.4;
  } else if (qNorm.includes(candNorm)) {
    substringScore = 0.3 + (candNorm.length / qNorm.length) * 0.4;
  }

  const qWords = qNorm.split(/[^a-zа-я0-9]+/i).filter(Boolean);

  const candWords = candNorm.split(/[^a-zа-я0-9]+/i).filter(Boolean);

  const wordScore = qWords.length > 0 ? getWordMatchScore(qWords, candWords) : 0;

  const overallDice = sorensenDice(qNorm, candNorm);

  return Math.max(substringScore, wordScore * 0.7 + overallDice * 0.3, overallDice);
};

const processDetailCandidate = (
  detail: SuggestionCandidateSource,
  rawCandidates: Set<string>
): void => {
  if (detail.title) {
    const cleanTitle = detail.title.replaceAll(/^\d+(?:\.\d+)*\.?\s+/g, "");

    if (cleanTitle) {
      rawCandidates.add(cleanTitle.toLowerCase());
    }
  }

  if (detail.tag) {
    const tags = detail.tag
      .split(/[,+]/)
      .map((t) => t.trim())
      .filter(Boolean);

    for (const tag of tags) {
      rawCandidates.add(tag.toLowerCase());
    }
  }
};

const collectRawCandidates = (
  details: SuggestionCandidateSource[],
  sections?: SuggestionSectionSource[]
): Set<string> => {
  const rawCandidates = new Set<string>();

  if (sections) {
    for (const section of sections) {
      if (section.title) {
        rawCandidates.add(section.title.toLowerCase());
      }
    }
  }

  for (const detail of details) {
    processDetailCandidate(detail, rawCandidates);
  }

  return rawCandidates;
};

const isCandidateTooSimilar = (candidate: string, existingList: string[]): boolean => {
  const candNorm = candidate.toLowerCase();

  for (const existing of existingList) {
    const existNorm = existing.toLowerCase();

    const diceSim = sorensenDice(candNorm, existNorm);

    if (diceSim > 0.45) {
      return true;
    }

    if (candNorm.includes(existNorm) && candNorm.length - existNorm.length < 5) {
      return true;
    }

    if (existNorm.includes(candNorm) && existNorm.length - candNorm.length < 5) {
      return true;
    }
  }

  return false;
};

const filterTooSimilar = (
  scoredCandidates: Array<{candidate: string; score: number}>
): string[] => {
  const selectedSuggestions: string[] = [];

  for (const item of scoredCandidates) {
    if (selectedSuggestions.length >= 8) {
      break;
    }

    if (!isCandidateTooSimilar(item.candidate, selectedSuggestions)) {
      selectedSuggestions.push(item.candidate);
    }
  }

  return selectedSuggestions;
};

export const getSuggestions = (
  query: string,
  details: SuggestionCandidateSource[],
  sections?: SuggestionSectionSource[]
): string[] => {
  const qTrimmed = query.trim();

  if (!qTrimmed) {
    return [];
  }

  const rawCandidates = collectRawCandidates(details, sections);

  const uniqueCandidates = [...rawCandidates].filter((c) => {
    const norm = c.trim().toLowerCase();

    const wordsCount = norm.split(/\s+/).length;

    return (
      norm.length >= 2 &&
      norm.length <= 30 &&
      wordsCount <= 4 &&
      norm !== qTrimmed.toLowerCase()
    );
  });

  const scoredCandidates = uniqueCandidates
    .map((candidate) => ({
      candidate,
      score: calculateSimilarity(qTrimmed, candidate),
    }))
    .filter((item) => item.score >= 0.25)
    .toSorted((a, b) => b.score - a.score);

  return filterTooSimilar(scoredCandidates);
};
