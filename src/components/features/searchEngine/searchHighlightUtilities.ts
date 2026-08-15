import React, {type ReactNode} from "react";

import {normalizeWord} from "./searchContentUtilities";

import {
  hasTokenConsonantMatch,
  hasTokenStemMatch,
  MIN_PREFIX_LENGTH,
  normalizeLatinPhonetics,
  WORD_MATCH_PRIORITY,
  type WordFeatures,
} from "./searchPhoneticUtilities";

import type {CompiledSearchQuery} from "./searchQueryCore";

type WordMatchType = keyof typeof WORD_MATCH_PRIORITY;

type TextHighlightRange = {
  end: number;
  matchType: WordMatchType;
  start: number;
};

type TokenHighlightMatch = {
  length: number;
  matchType: WordMatchType;
  startOffset: number;
};

type TokenHighlightAccumulator = {
  bestLength: number;
  bestMatch: TokenHighlightMatch | undefined;
  bestPriority: number;
  bestStartOffset: number;
};

const HIGHLIGHT_TOKEN_REGEX = /[a-zа-яё0-9]+/gi;

const getLongestPrefixVariantLength = (token: string, variants: string[]): number => {
  let longestLength = 0;

  for (const variant of variants) {
    if (variant.length < MIN_PREFIX_LENGTH) {
      continue;
    }

    if (!token.startsWith(variant)) {
      continue;
    }

    longestLength = Math.max(longestLength, variant.length);
  }

  return longestLength;
};

const applyTokenHighlightCandidate = (
  accumulator: TokenHighlightAccumulator,
  matchType: WordMatchType,
  length: number,
  startOffset = 0
): void => {
  if (length <= 0) {
    return;
  }

  const priority = WORD_MATCH_PRIORITY[matchType];

  if (
    priority > accumulator.bestPriority ||
    (priority === accumulator.bestPriority &&
      (length > accumulator.bestLength ||
        (length === accumulator.bestLength && startOffset < accumulator.bestStartOffset)))
  ) {
    accumulator.bestMatch = {length, matchType, startOffset};
    accumulator.bestPriority = priority;
    accumulator.bestLength = length;
    accumulator.bestStartOffset = startOffset;
  }
};

const getLongestIncludedVariantMatch = (
  token: string,
  variants: string[]
): {length: number; startOffset: number} | undefined => {
  let bestLength = 0;

  let bestStartOffset = Number.POSITIVE_INFINITY;

  for (const variant of variants) {
    if (!variant) {
      continue;
    }

    const startOffset = token.indexOf(variant);

    if (startOffset === -1) {
      continue;
    }

    const length = variant.length;

    if (length > bestLength || (length === bestLength && startOffset < bestStartOffset)) {
      bestLength = length;
      bestStartOffset = startOffset;
    }
  }

  if (bestLength <= 0 || !Number.isFinite(bestStartOffset)) {
    return undefined;
  }

  return {length: bestLength, startOffset: bestStartOffset};
};

const applyWordTokenHighlight = (
  accumulator: TokenHighlightAccumulator,
  normalizedToken: string,
  foldedToken: string,
  features: WordFeatures,
  normalizedWord: string
): void => {
  const queryLength = Math.min(normalizedWord.length, normalizedToken.length);

  if (normalizedWord) {
    const directStartOffset = normalizedToken.indexOf(normalizedWord);

    if (directStartOffset !== -1) {
      applyTokenHighlightCandidate(
        accumulator,
        "exact",
        Math.min(normalizedWord.length, normalizedToken.length - directStartOffset),
        directStartOffset
      );
    }
  }

  const exactVariantMatch = getLongestIncludedVariantMatch(
    normalizedToken,
    features.variants
  );

  if (exactVariantMatch) {
    const highlightLength = Math.min(
      exactVariantMatch.length,
      normalizedToken.length - exactVariantMatch.startOffset
    );

    applyTokenHighlightCandidate(
      accumulator,
      "exact",
      highlightLength,
      exactVariantMatch.startOffset
    );
  }

  const prefixVariantLength = getLongestPrefixVariantLength(
    normalizedToken,
    features.variants
  );

  if (prefixVariantLength > 0) {
    applyTokenHighlightCandidate(
      accumulator,
      "prefix",
      Math.min(prefixVariantLength, normalizedToken.length)
    );
  }

  const foldedVariantMatch = getLongestIncludedVariantMatch(
    foldedToken,
    features.foldedVariants
  );

  if (foldedVariantMatch) {
    const highlightLength = Math.min(
      foldedVariantMatch.length,
      normalizedToken.length - foldedVariantMatch.startOffset
    );

    applyTokenHighlightCandidate(
      accumulator,
      "folded",
      highlightLength,
      foldedVariantMatch.startOffset
    );
  }

  const prefixFoldedLength = getLongestPrefixVariantLength(
    foldedToken,
    features.foldedVariants
  );

  if (prefixFoldedLength > 0) {
    applyTokenHighlightCandidate(
      accumulator,
      "prefix",
      Math.min(prefixFoldedLength, normalizedToken.length)
    );
  }

  if (hasTokenConsonantMatch(normalizedToken, features.consonantSignatures)) {
    applyTokenHighlightCandidate(accumulator, "consonant", queryLength);
  }

  if (hasTokenStemMatch(normalizedToken, features.stemVariants)) {
    applyTokenHighlightCandidate(accumulator, "stem", queryLength);
  }
};

const getTokenHighlightMatch = (
  normalizedToken: string,
  foldedToken: string,
  compiledQuery: CompiledSearchQuery
): TokenHighlightMatch | undefined => {
  const accumulator: TokenHighlightAccumulator = {
    bestLength: -1,
    bestMatch: undefined,
    bestPriority: -1,
    bestStartOffset: Number.POSITIVE_INFINITY,
  };

  for (const {features, normalizedWord} of compiledQuery.words) {
    applyWordTokenHighlight(
      accumulator,
      normalizedToken,
      foldedToken,
      features,
      normalizedWord
    );

    if (
      accumulator.bestPriority === WORD_MATCH_PRIORITY.exact &&
      accumulator.bestLength >= normalizedToken.length &&
      accumulator.bestStartOffset === 0
    ) {
      break;
    }
  }

  return accumulator.bestMatch;
};

const getTextHighlightRanges = (
  text: string,
  compiledQuery: CompiledSearchQuery
): TextHighlightRange[] => {
  if (
    !text.trim() ||
    compiledQuery.words.length === 0 ||
    compiledQuery.isKeyCombination
  ) {
    return [];
  }

  const ranges: TextHighlightRange[] = [];

  const tokenMatchCache = new Map<string, TokenHighlightMatch | undefined>();

  for (const tokenResult of text.matchAll(HIGHLIGHT_TOKEN_REGEX)) {
    const matchedToken = tokenResult[0];

    const tokenIndex = tokenResult.index ?? -1;

    if (!matchedToken || tokenIndex < 0) {
      continue;
    }

    const normalizedToken = normalizeWord(matchedToken);

    if (!normalizedToken) {
      continue;
    }

    const foldedToken = normalizeLatinPhonetics(normalizedToken);

    const cacheKey = `${normalizedToken}|${foldedToken}`;

    if (!tokenMatchCache.has(cacheKey)) {
      tokenMatchCache.set(
        cacheKey,
        getTokenHighlightMatch(normalizedToken, foldedToken, compiledQuery)
      );
    }

    const highlightMatch = tokenMatchCache.get(cacheKey);

    if (!highlightMatch || highlightMatch.length <= 0) {
      continue;
    }

    const highlightStart = tokenIndex + highlightMatch.startOffset;

    const highlightLength = Math.min(
      highlightMatch.length,
      Math.max(0, matchedToken.length - highlightMatch.startOffset)
    );

    if (highlightLength <= 0) {
      continue;
    }

    ranges.push({
      end: highlightStart + highlightLength,
      matchType: highlightMatch.matchType,
      start: highlightStart,
    });
  }

  return ranges;
};

const collectHighlightableTextNodes = (root: Element): Text[] => {
  const textNodes: Text[] = [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if (!(node instanceof Text)) {
        return NodeFilter.FILTER_REJECT;
      }

      if (!node.textContent?.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      if (node.parentElement?.closest('[data-search-hit="true"]')) {
        return NodeFilter.FILTER_REJECT;
      }

      if (node.parentElement?.closest("script, style")) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  while (walker.nextNode()) {
    const node = walker.currentNode;

    if (node instanceof Text) {
      textNodes.push(node);
    }
  }

  return textNodes;
};

const highlightSingleTextNode = (
  textNode: Text,
  compiledQuery: CompiledSearchQuery
): void => {
  const originalText = textNode.textContent || "";

  const ranges = getTextHighlightRanges(originalText, compiledQuery);

  if (ranges.length === 0) {
    return;
  }

  const fragment = document.createDocumentFragment();

  let cursor = 0;

  for (const {end, matchType, start} of ranges) {
    if (start > cursor) {
      fragment.append(document.createTextNode(originalText.slice(cursor, start)));
    }

    const highlightElement = document.createElement("span");

    highlightElement.dataset.searchHit = "true";
    highlightElement.dataset.searchMatchType = matchType;
    highlightElement.textContent = originalText.slice(start, end);
    fragment.append(highlightElement);
    cursor = end;
  }

  if (cursor < originalText.length) {
    fragment.append(document.createTextNode(originalText.slice(cursor)));
  }

  textNode.replaceWith(fragment);
};

export const highlightMatchedTokens = (
  html: string,
  compiledQuery: CompiledSearchQuery
): string => {
  if (
    !html.trim() ||
    compiledQuery.words.length === 0 ||
    compiledQuery.isKeyCombination
  ) {
    return html;
  }

  const root = document.createElement("div");

  root.innerHTML = html;

  const textNodes = collectHighlightableTextNodes(root);

  for (const textNode of textNodes) {
    highlightSingleTextNode(textNode, compiledQuery);
  }

  return root.innerHTML;
};

export const renderHighlightedText = (
  text: string,
  compiledQuery: CompiledSearchQuery
): ReactNode[] => {
  const normalizedText = text.replaceAll("\u00A0", " ");

  const ranges = getTextHighlightRanges(normalizedText, compiledQuery);

  if (ranges.length === 0) {
    return [normalizedText];
  }

  const nodes: ReactNode[] = [];

  let cursor = 0;

  for (const [index, range] of ranges.entries()) {
    if (range.start > cursor) {
      nodes.push(normalizedText.slice(cursor, range.start));
    }

    nodes.push(
      React.createElement(
        "span",
        {
          "data-search-hit": "true",
          "data-search-match-type": range.matchType,
          "key": `${range.start}-${range.end}-${index}`,
        },
        normalizedText.slice(range.start, range.end)
      )
    );

    cursor = range.end;
  }

  if (cursor < normalizedText.length) {
    nodes.push(normalizedText.slice(cursor));
  }

  return nodes;
};

export const extractMatchingLine = (content: string, query: string): string => {
  if (!content || !query.trim()) {
    return content;
  }

  const searchWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = content;

  const findFirstListMatch = (ulElement: HTMLUListElement): string | undefined => {
    const firstMatch = [...ulElement.querySelectorAll("li")].find((li) => {
      const liText = li.textContent?.toLowerCase() || "";

      return searchWords.every((word) => liText.includes(word));
    });

    if (firstMatch) {
      const newUl = document.createElement("ul");

      newUl.append(firstMatch.cloneNode(true));

      return newUl.outerHTML;
    }

    return undefined;
  };

  const ulElements = [...temporaryDiv.querySelectorAll("ul")];

  for (const ul of ulElements) {
    const matchedList = findFirstListMatch(ul);

    if (matchedList) {
      return matchedList;
    }
  }

  const allElements = [...temporaryDiv.querySelectorAll("*")];

  for (const element of allElements) {
    const elementHtml = element.innerHTML.toLowerCase();

    if (searchWords.every((word) => elementHtml.includes(word))) {
      return element.outerHTML;
    }
  }

  const firstElement = temporaryDiv.firstElementChild;

  return firstElement?.outerHTML || content;
};

export {isTokenMatchingWordFeatures} from "./searchPhoneticUtilities";
