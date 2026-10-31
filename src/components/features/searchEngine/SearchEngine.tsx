import React, {useCallback, useEffect, useRef, useState} from "react";

import {useRipple} from "../../../hooks/useRipple";

import {getResultWord} from "./searchContentUtilities";

import searchStyles from "./SearchEngine.module.scss";

import {
  type SearchResult,
  type SearchSection,
  useSearch,
  useSearchLinkNavigation,
  useSearchLogic,
  useSearchModalBehavior,
  useSearchViewState,
} from "./SearchState";

import {
  NoResults,
  RecentQueries,
  SearchCategories,
  SearchModal,
  SearchResults,
} from "./SearchUi";

export type {SearchResult, SearchSection} from "./SearchState";

export {extractMatchingLine, getResultWord} from "./searchContentUtilities";

export {type SearchContextType, SearchProvider, useSearch} from "./SearchState";

type SearchContentType = "categories" | "results" | "no-results";

export const SearchInPage: React.FC<{sections: SearchSection[]}> = ({sections}) => {
  const {
    addQueryToHistory,
    clearQueryHistory,
    closeModal,
    isModalOpen,
    isPageLoaded,
    queryHistory,
  } = useSearch();

  const [query, setQuery] = useState("");

  const resultReferences = useRef<(HTMLButtonElement | null)[]>([]);

  const ripple = useRipple<HTMLButtonElement>();

  const {
    results,
    resultsLimit,
    resultsQuery,
    selectedResultIndex,
    setResultsLimit,
    setSelectedResultIndex,
    suggestions,
    totalResultsCount,
  } = useSearchLogic(query, isPageLoaded, sections);

  const [displayedContentType, setDisplayedContentType] =
    useState<SearchContentType>("categories");

  const [contentTransitionPhase, setContentTransitionPhase] = useState<
    "idle" | "exit" | "enter"
  >("idle");

  const [previousTargetContentType, setPreviousTargetContentType] =
    useState<SearchContentType>("categories");

  const [displayedResults, setDisplayedResults] = useState<SearchResult[]>(results);

  const [displayedResultsQuery, setDisplayedResultsQuery] = useState(resultsQuery);

  const [displayedResultsCount, setDisplayedResultsCount] = useState(totalResultsCount);

  const {handleQueryChange, isSearching, resetSearchState} = useSearchViewState(
    isPageLoaded,
    results.length,
    setQuery
  );

  const navigateToLink = useSearchLinkNavigation(closeModal);

  const handleLinkClick = useCallback(
    (anchorValue: string) => {
      if (results.length > 0) {
        addQueryToHistory(query);
      }

      navigateToLink(anchorValue);
    },
    [addQueryToHistory, navigateToLink, query, results]
  );

  const {inputReference, isFadeVisible, resultsContainerReference} =
    useSearchModalBehavior({
      handleLinkClick,
      isModalOpen,
      resultLinkClassName: searchStyles["search-link"],
      resultReferences,
      results: displayedResults,
      resultsLimit,
      selectedResultIndex,
      setSelectedResultIndex,
    });

  useEffect(() => {
    if (!query.trim()) {
      return;
    }

    const timeout = setTimeout(() => {
      if (resultsQuery === query && results.length > 0) {
        addQueryToHistory(query);
      }
    }, 5000);

    return () => clearTimeout(timeout);
  }, [query, addQueryToHistory, results, resultsQuery]);

  const handleRecentQuerySelect = useCallback(
    (historyQuery: string) => {
      handleQueryChange(historyQuery);
      inputReference.current?.focus({preventScroll: true});
    },
    [handleQueryChange, inputReference]
  );

  const handleSuggestionSelect = useCallback(
    (suggestion: string) => {
      addQueryToHistory(suggestion);
      setContentTransitionPhase("exit");
      handleQueryChange(suggestion);
      inputReference.current?.focus({preventScroll: true});
    },
    [addQueryToHistory, handleQueryChange, inputReference, setContentTransitionPhase]
  );

  const getTargetContentType = (): SearchContentType => {
    if (!isSearching) {
      return "categories";
    }

    if (results.length > 0) {
      return "results";
    }

    return resultsQuery === query && results.length === 0 && query.trim() !== ""
      ? "no-results"
      : previousTargetContentType;
  };

  const targetContentType = getTargetContentType();

  useEffect(() => {
    if (targetContentType === previousTargetContentType) {
      return;
    }

    setPreviousTargetContentType(targetContentType);
    setContentTransitionPhase("exit");
  }, [targetContentType, previousTargetContentType]);

  useEffect(() => {
    if (contentTransitionPhase === "exit" || displayedContentType !== targetContentType) {
      return;
    }

    setDisplayedResults(results);
    setDisplayedResultsQuery(resultsQuery);
    setDisplayedResultsCount(totalResultsCount);
  }, [
    results,
    resultsQuery,
    totalResultsCount,
    contentTransitionPhase,
    displayedContentType,
    targetContentType,
  ]);

  useEffect(() => {
    if (contentTransitionPhase !== "exit") {
      return;
    }

    if (previousTargetContentType === "no-results" && resultsQuery !== query) {
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedContentType(previousTargetContentType);
      setContentTransitionPhase("enter");
    }, 350);

    return () => clearTimeout(timeout);
  }, [contentTransitionPhase, previousTargetContentType, resultsQuery, query]);

  useEffect(() => {
    if (contentTransitionPhase !== "enter") {
      return;
    }

    const timeout = setTimeout(() => {
      setContentTransitionPhase("idle");
    }, 300);

    return () => clearTimeout(timeout);
  }, [contentTransitionPhase]);

  const getModalContent = () => {
    if (displayedContentType === "results") {
      return {
        content: (
          <SearchResults
            query={displayedResultsQuery}
            resultRefs={resultReferences}
            results={displayedResults}
            selectedResultIndex={selectedResultIndex}
            setResultsLimit={setResultsLimit}
            setSelectedResultIndex={setSelectedResultIndex}
            totalResultsCount={displayedResultsCount}
            onLinkClick={handleLinkClick}
          />
        ),
        isScrollableContent: true,
      };
    }

    if (displayedContentType === "no-results") {
      return {
        content: (
          <NoResults
            query={query}
            suggestions={suggestions}
            onSelectSuggestion={handleSuggestionSelect}
          />
        ),
        isScrollableContent: true,
      };
    }

    return {
      content: (
        <>
          <RecentQueries
            history={queryHistory}
            onClear={clearQueryHistory}
            onSelect={handleRecentQuerySelect}
          />
          <SearchCategories
            sections={sections}
            onLinkClick={handleLinkClick}
          />
        </>
      ),
      isScrollableContent: false,
    };
  };

  const {content, isScrollableContent} = getModalContent();

  return (
    <SearchModal
      closeModal={closeModal}
      contentTransitionPhase={contentTransitionPhase}
      inputRef={inputReference}
      isFadeVisible={isFadeVisible}
      isOpen={isModalOpen}
      isScrollableContent={isScrollableContent}
      query={query}
      resultsContainerRef={resultsContainerReference}
      resultsCount={displayedResultsCount}
      resultWord={getResultWord(displayedResultsCount)}
      onChangeQuery={handleQueryChange}
      onClearQuery={resetSearchState}
      onCloseMouseDown={ripple.onMouseDown}
      onInputClearMouseDown={ripple.onMouseDown}
    >
      {content}
    </SearchModal>
  );
};

export {SearchButton} from "./SearchUi";
