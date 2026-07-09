import {useCallback, useEffect, useMemo, useRef, useState} from "react";

import additionStyles from "../../content/Addition.module.scss";

import {isElementHiddenByFilter} from "../../detailsSummary/anchorUtilities";

import {
  applyAdditionSnippetStyles,
  buildAdditionsHtml,
  buildListContentHtml,
  buildParagraphsHtml,
  buildTableGroupsHtml,
  collectDividerTexts,
  collectFlexibleLinksTexts,
  collectLinkHrefs,
  extractEntityTextFromContent,
  formatSearchSnippetResult,
  getAdditionContainerSelector,
  getTopLevelAdditionContainer,
  mapRankedResultsToSearchResults as mapRankedResultsToSearchResultsRuntime,
  normalizeKeyCombination,
  normalizeText,
  wrapSnippetWithAdditionContainer,
  wrapSnippetWithClosestAddition,
} from "./searchContentUtilities";

import {
  extractMatchingLine,
  isTokenMatchingWordFeatures,
} from "./searchHighlightUtilities";

import {normalizeLatinPhonetics, type WordFeatures} from "./searchPhoneticUtilities";

import {
  buildSearchIndex,
  type CompiledSearchQuery,
  getFieldMatchInfo,
  hasCompiledQueryMatchInIndexes,
  searchDetails,
  type SearchWorkerDetail,
  type TextSearchIndex,
  type WorkerRankedResult,
} from "./searchQueryCore";

import {
  getFieldMatchTypeScore,
  getProximityBonus,
  type SearchScoringDependencies,
} from "./searchScoringUtilities";

import {getSuggestions} from "./searchSuggestionsUtilities";

import type {SearchResult, SearchSection} from "./SearchState";

const EMPTY_SUGGESTIONS: string[] = [];

const decodeHtmlEntities = (text: string): string => {
  const textArea = document.createElement("textarea");

  textArea.innerHTML = text;

  return textArea.value;
};

const stripHtml = (html: string): string => {
  const temporary = document.createElement("div");

  temporary.innerHTML = html;

  return temporary.textContent || "";
};

const extractKeyCombinationText = (element: Element): string => {
  const keyElements = element.querySelectorAll("mark.key");

  if (keyElements.length > 0) {
    return [...keyElements]
      .map((element_) => element_.textContent?.toLowerCase() || "")
      .join(" ");
  }

  return element.textContent?.toLowerCase() || "";
};

const hasMatch = (text: string, compiledQuery: CompiledSearchQuery): boolean => {
  if (compiledQuery.isKeyCombination) {
    const normalizedText = normalizeKeyCombination(text);

    const normalizedSearch = normalizeKeyCombination(compiledQuery.originalText);

    return normalizedText.includes(normalizedSearch);
  }

  return hasCompiledQueryMatchInIndexes([buildSearchIndex(text)], compiledQuery);
};

const MAX_COMPACT_SNIPPET_TEXT_LENGTH = 780;

const ADDITION_CONTAINER_SELECTOR = getAdditionContainerSelector(additionStyles);

const TAG_SCORING_TOKEN_CAP = 48;

const toNormalizedWords = (text: string): string[] =>
  normalizeText(text).split(" ").filter(Boolean);

const getTagScoringText = (normalizedTag: string): string => {
  const tagWords = normalizedTag.split(" ").filter(Boolean);

  return tagWords.slice(0, TAG_SCORING_TOKEN_CAP).join(" ");
};

const getTokenPositionsForWord = (
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

const searchScoringDependencies: SearchScoringDependencies<WordFeatures> = {
  getTokenPositionsForWord,
  normalizeLatinPhonetics,
  toNormalizedWords,
};

const getCompactSnippetScore = (
  html: string,
  compiledQuery: CompiledSearchQuery
): number => {
  const plainText = stripHtml(html);

  if (!plainText.trim()) {
    return Number.NEGATIVE_INFINITY;
  }

  const matchInfo = getFieldMatchInfo(buildSearchIndex(plainText), compiledQuery);

  if (!matchInfo.totalMatched) {
    return Number.NEGATIVE_INFINITY;
  }

  let score = getFieldMatchTypeScore(matchInfo, 1);

  score += matchInfo.totalMatched * 8;
  score += getProximityBonus(plainText, compiledQuery, 0.4, searchScoringDependencies);

  if (plainText.length > MAX_COMPACT_SNIPPET_TEXT_LENGTH) {
    score -= Math.min(
      40,
      Math.round((plainText.length - MAX_COMPACT_SNIPPET_TEXT_LENGTH) / 40)
    );
  }

  return score;
};

const getSummaryTitle = (summary: Element): string => {
  const titleElement = summary.querySelector("h2, h3");

  const summaryId = summary.getAttribute("id")?.trim() ?? "";

  const baseTitle = titleElement?.textContent?.trim()
    ? titleElement.textContent.trim()
    : (summary.textContent || "").replaceAll(/\s+/g, " ").trim();

  if (!summaryId || !baseTitle) {
    return baseTitle;
  }

  const normalizedBaseTitle = baseTitle.replaceAll(/\s+/g, " ").trim();

  const expectedPrefix = `${summaryId}.`;

  if (normalizedBaseTitle.startsWith(expectedPrefix)) {
    return normalizedBaseTitle;
  }

  return `${summaryId}. ${normalizedBaseTitle}`;
};

const isPlaceholderOnlyDetail = (detail: Element): boolean => {
  const placeholder = detail.querySelector(".article-placeholder");

  if (!placeholder) {
    return false;
  }

  const detailClone = detail.cloneNode(true) as Element;

  for (const element of detailClone.querySelectorAll(
    "summary, .article-placeholder, .ant-divider, .ant-divider-inner-text, [class*='media-figure']"
  )) {
    element.remove();
  }

  const remainingText = (detailClone.textContent || "").replaceAll(/\s+/g, " ").trim();

  return remainingText.length === 0;
};

type BaseSearchResult = Omit<
  SearchResult,
  "isSingleParagraphMatch" | "hasTitleMatch" | "hasTagMatch"
> & {
  contentText: string;
  entityText: string;
  fieldIndexes: TextSearchIndex[];
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

type SearchWorkerResponse = {
  query: string;
  requestId: number;
  results: WorkerRankedResult[];
  type: "results";
};

const processSingleDetail = (
  detail: HTMLDetailsElement,
  sourceOrder: number,
  dependencies: {
    decodeHtmlEntities: (text: string) => string;
    normalizeKeyCombination: (text: string) => string;
    normalizeText: (text: string) => string;
    stripHtml: (html: string) => string;
    getTopLevelAdditionContainer: typeof getTopLevelAdditionContainer;
    additionContainerSelector: string;
  }
): BaseSearchResult | undefined => {
  if (isPlaceholderOnlyDetail(detail)) {
    return;
  }

  const summary = detail.querySelector(":scope > summary");

  if (!summary) {
    return;
  }

  const id = summary.getAttribute("id");

  if (!id) {
    return;
  }

  const parentDetails = detail.parentElement?.closest("details");

  let title = getSummaryTitle(summary);

  if (parentDetails) {
    const parentSummary = parentDetails.querySelector(":scope > summary");

    if (parentSummary) {
      const parentTitle = getSummaryTitle(parentSummary);

      title = `${parentTitle} → ${title}`;
    }
  }

  const detailClone = detail.cloneNode(true) as HTMLElement;

  const nestedDetails = detailClone.querySelectorAll("details");

  for (const nested of nestedDetails) {
    nested.remove();
  }

  const tag = detail.dataset.tags?.trim() ?? "";

  const anchor = detail.dataset.anchor;

  const dividerTexts = collectDividerTexts(detailClone);

  const flexibleLinksTexts = collectFlexibleLinksTexts(detailClone);

  const additionsContent = buildAdditionsHtml(
    detailClone,
    dependencies.additionContainerSelector
  );

  const linkHrefs = collectLinkHrefs(detailClone);

  const content = buildParagraphsHtml(detailClone);

  const tableContent = buildTableGroupsHtml(detailClone, [], {
    decodeHtmlEntities: dependencies.decodeHtmlEntities,
    normalizeKeyCombination: dependencies.normalizeKeyCombination,
  });

  const listContent = buildListContentHtml(detailClone, [], {
    additionContainerSelector: dependencies.additionContainerSelector,
    getTopLevelAdditionContainer: dependencies.getTopLevelAdditionContainer,
    normalizeText: dependencies.normalizeText,
    stripHtml: dependencies.stripHtml,
  });

  const text = [
    content,
    additionsContent,
    tableContent,
    listContent,
    ...dividerTexts,
    ...flexibleLinksTexts,
  ].join("\n");

  const trimmedText = text.trim();

  if (!title && !trimmedText) {
    return;
  }

  const contentText = dependencies.stripHtml(trimmedText);

  const entityText = [extractEntityTextFromContent(trimmedText), ...linkHrefs]
    .join(" ")
    .trim();

  const normalizedTitle = dependencies.normalizeText(title);

  const normalizedTag = dependencies.normalizeText(tag);

  const normalizedContent = dependencies.normalizeText(contentText);

  const normalizedEntityText = dependencies.normalizeText(entityText);

  const searchIndexes = {
    content: buildSearchIndex(normalizedContent),
    entity: buildSearchIndex(normalizedEntityText),
    tag: buildSearchIndex(normalizedTag),
    tagScoring: buildSearchIndex(getTagScoringText(normalizedTag)),
    title: buildSearchIndex(normalizedTitle),
  };

  const lineSearchIndexes = trimmedText
    .split("\n")
    .map((line) => dependencies.stripHtml(line))
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => buildSearchIndex(line));

  return {
    anchor,
    content: trimmedText,
    contentText,
    entityText,
    fieldIndexes: [
      searchIndexes.title,
      searchIndexes.tag,
      searchIndexes.entity,
      searchIndexes.content,
    ],
    id,
    lineSearchIndexes,
    normalizedContent,
    normalizedEntityText,
    normalizedKeyFields: [title, tag, entityText, contentText].map((field) =>
      dependencies.normalizeKeyCombination(field)
    ),
    normalizedTag,
    normalizedTitle,
    searchIndexes,
    sourceOrder,
    tag,
    tagTokenCount: normalizedTag.split(" ").filter(Boolean).length,
    title,
  };
};

const isResultHidden = (sourceOrder: number): boolean => {
  const details = document.querySelectorAll<HTMLDetailsElement>("details");

  const element = details[sourceOrder];

  if (!element) return false;

  return isElementHiddenByFilter(element);
};

export const useSearchLogic = (
  query: string,
  isPageLoaded: boolean,
  sections?: SearchSection[]
) => {
  const isLoaded = isPageLoaded;

  const [results, setResults] = useState<SearchResult[]>([]);

  const [totalResultsCount, setTotalResultsCount] = useState(0);

  const [selectedResultIndex, setSelectedResultIndex] = useState(0);

  const [resultsQuery, setResultsQuery] = useState("");

  const [resultsLimit, setResultsLimit] = useState(24);

  const resultsLimitReference = useRef(24);

  resultsLimitReference.current = resultsLimit;

  const allRankedResultsReference = useRef<WorkerRankedResult[]>([]);

  const cachedDetailsData = useMemo(() => {
    if (!isPageLoaded) {
      return [];
    }

    const cachedDetails = [...document.querySelectorAll<HTMLDetailsElement>("details")];

    const data: BaseSearchResult[] = [];

    const dependencies = {
      additionContainerSelector: ADDITION_CONTAINER_SELECTOR,
      decodeHtmlEntities,
      getTopLevelAdditionContainer,
      normalizeKeyCombination,
      normalizeText,
      stripHtml,
    };

    for (const [sourceOrder, detail] of cachedDetails.entries()) {
      const processed = processSingleDetail(detail, sourceOrder, dependencies);

      if (processed) {
        data.push(processed);
      }
    }

    return data;
  }, [isPageLoaded]);

  const cachedDetailsByKey = useMemo(
    () =>
      new Map(
        cachedDetailsData.map((detail) => [`${detail.id}::${detail.sourceOrder}`, detail])
      ),
    [cachedDetailsData]
  );

  const workerDetailsData = useMemo<SearchWorkerDetail[]>(
    () =>
      cachedDetailsData.map(
        ({
          fieldIndexes,
          id,
          lineSearchIndexes,
          normalizedContent,
          normalizedEntityText,
          normalizedKeyFields,
          normalizedTag,
          normalizedTitle,
          searchIndexes,
          sourceOrder,
          tagTokenCount,
        }) => ({
          fieldIndexes,
          id,
          lineSearchIndexes,
          normalizedContent,
          normalizedEntityText,
          normalizedKeyFields,
          normalizedTag,
          normalizedTitle,
          searchIndexes,
          sourceOrder,
          tagTokenCount,
        })
      ),
    [cachedDetailsData]
  );

  const searchWorkerReference = useRef<Worker | undefined>(undefined);

  const workerRequestIdReference = useRef(0);

  const mapRankedResultsToSearchResults = useCallback(
    (queryText: string, rankedResults: WorkerRankedResult[]): SearchResult[] => {
      return mapRankedResultsToSearchResultsRuntime(queryText, rankedResults, {
        cachedDetailsByKey,
        formatContent: (content, compiledQuery) =>
          formatSearchSnippetResult(content, compiledQuery, {
            additionContainerSelector: ADDITION_CONTAINER_SELECTOR,
            applyAdditionSnippetStyles,
            extractKeyCombinationText,
            extractMatchingLine,
            getCompactSnippetScore,
            hasMatch,
            stripHtml,
            wrapSnippetWithAdditionContainer,
            wrapSnippetWithClosestAddition,
          }),
      });
    },
    [cachedDetailsByKey]
  );

  const mapRankedResultsToSearchResultsReference = useRef(
    mapRankedResultsToSearchResults
  );

  mapRankedResultsToSearchResultsReference.current = mapRankedResultsToSearchResults;

  const runSearchOnMainThread = useCallback(
    (text: string) => {
      const rankedResults = searchDetails(workerDetailsData, text);

      const filteredResults = rankedResults.filter(
        (item) => !isResultHidden(item.sourceOrder)
      );

      allRankedResultsReference.current = filteredResults;
      setTotalResultsCount(filteredResults.length);

      setResults(
        mapRankedResultsToSearchResultsReference.current(
          text,
          filteredResults.slice(0, resultsLimitReference.current)
        )
      );

      setResultsQuery(text);
    },
    [workerDetailsData]
  );

  useEffect(() => {
    if (
      !isPageLoaded ||
      workerDetailsData.length === 0 ||
      typeof Worker === "undefined"
    ) {
      searchWorkerReference.current?.terminate();
      searchWorkerReference.current = undefined;

      return;
    }

    const worker = new Worker(new URL("searchWorker.ts", import.meta.url), {
      type: "module",
    });

    searchWorkerReference.current = worker;
    worker.postMessage({details: workerDetailsData, type: "init"});

    const handleWorkerMessage = (event: MessageEvent<SearchWorkerResponse>) => {
      const message_ = event.data;

      if (message_.type !== "results") {
        return;
      }

      if (message_.requestId !== workerRequestIdReference.current) {
        return;
      }

      const filteredResults = message_.results.filter(
        (item) => !isResultHidden(item.sourceOrder)
      );

      allRankedResultsReference.current = filteredResults;
      setTotalResultsCount(filteredResults.length);

      setResults(
        mapRankedResultsToSearchResultsReference.current(
          message_.query,
          filteredResults.slice(0, resultsLimitReference.current)
        )
      );

      setResultsQuery(message_.query);
    };

    worker.addEventListener("message", handleWorkerMessage);

    return () => {
      worker.removeEventListener("message", handleWorkerMessage);
      worker.terminate();

      if (searchWorkerReference.current === worker) {
        searchWorkerReference.current = undefined;
      }
    };
  }, [isPageLoaded, workerDetailsData]);

  const handleSearch = useCallback(
    (text: string) => {
      if (text.trim()) {
        workerRequestIdReference.current += 1;

        const requestId = workerRequestIdReference.current;

        if (searchWorkerReference.current) {
          searchWorkerReference.current.postMessage({
            query: text,
            requestId,
            type: "search",
          });
        } else {
          runSearchOnMainThread(text);
        }
      } else {
        workerRequestIdReference.current += 1;
        setResults([]);
        setTotalResultsCount(0);
        setResultsQuery("");
      }
    },
    [runSearchOnMainThread]
  );

  useEffect(() => {
    if (isLoaded) {
      if (query.trim()) {
        handleSearch(query);
      } else {
        workerRequestIdReference.current += 1;
        setResults([]);
        setTotalResultsCount(0);
        setResultsQuery("");
      }
    } else {
      workerRequestIdReference.current += 1;
      setResults([]);
      setTotalResultsCount(0);
      setResultsQuery("");
    }
  }, [query, handleSearch, isPageLoaded]);

  useEffect(() => {
    setSelectedResultIndex(results.length > 0 ? 0 : -1);
  }, [results]);

  useEffect(() => {
    setResultsLimit(24);
  }, [query]);

  useEffect(() => {
    if (resultsQuery) {
      setResults(
        mapRankedResultsToSearchResultsReference.current(
          resultsQuery,
          allRankedResultsReference.current.slice(0, resultsLimit)
        )
      );
    }
  }, [resultsLimit, resultsQuery]);

  const sectionsHash = sections?.map((s) => s.title).join(",") ?? "";

  const sectionTitles = useMemo(() => {
    return sections?.map((s) => ({title: s.title})) ?? [];
  }, [sectionsHash]);

  const suggestions = useMemo(() => {
    if (!isLoaded || results.length > 0 || !query.trim() || resultsQuery !== query) {
      return EMPTY_SUGGESTIONS;
    }

    return getSuggestions(query, cachedDetailsData, sectionTitles);
  }, [isLoaded, results.length, query, resultsQuery, cachedDetailsData, sectionTitles]);

  return {
    debouncedQuery: query,
    results,
    resultsLimit,
    resultsQuery,
    selectedResultIndex,
    setResultsLimit,
    setSelectedResultIndex,
    suggestions,
    totalResultsCount,
  };
};
