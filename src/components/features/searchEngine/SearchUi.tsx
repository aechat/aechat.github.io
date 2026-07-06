import debounce from "lodash/debounce";

import React, {memo, useCallback, useEffect, useMemo, useRef, useState} from "react";

import {
  BackspaceOutlined,
  CloseRounded,
  HistoryRounded,
  LightbulbOutlined,
  Search,
} from "@mui/icons-material";

import {message, Modal} from "antd";

import {RemoveScroll} from "react-remove-scroll";

import {useLongPress} from "../../../hooks/useLongPress";

import {useRipple} from "../../../hooks/useRipple";

import {isMobileDevice} from "../../../utilities/browserDetection";

import {copyText} from "../../../utilities/copyUtilities";

import {withSelectionHaptic} from "../../../utilities/haptics";

import {applyInteractiveScaleVariables} from "../../../utilities/interactiveScaleUtilities";

import {formatNestedQuotes} from "../../../utilities/stringUtilities";

import modalStyles from "../../modals/Modal.module.scss";

import {getMatchingTagsByQuery} from "./searchContentUtilities";

import searchStyles from "./SearchEngine.module.scss";

import {highlightMatchedTokens, renderHighlightedText} from "./searchHighlightUtilities";

import {compileSearchQuery} from "./searchQueryCore";

import {SearchResultCard} from "./SearchResultCard";

import {type SearchResult, type SearchSection, useSearch} from "./SearchState";

import {
  applySearchResultScaleVariables,
  getRippleButtonTarget,
  getSearchResultColumns,
  hasTableInContent,
} from "./searchUiUtilities";

interface SearchButtonProperties {
  className?: string;
  style?: React.CSSProperties;
  wide?: boolean;
}

export const SearchButton: React.FC<SearchButtonProperties> = ({
  className = "",
  style = {},
  wide = false,
}) => {
  const {isPageLoaded, openModal} = useSearch();

  const ripple = useRipple<HTMLButtonElement>();

  return (
    <button
      className={`${searchStyles["search-button"]} ${className}`.trim()}
      style={{
        filter: isPageLoaded ? "saturate(100%)" : "saturate(0%)",
        opacity: isPageLoaded ? 1 : 0.5,
        ...style,
      }}
      onClick={() => {
        if (isPageLoaded) {
          openModal();
        } else {
          message.warning(
            "Прежде чем воспользоваться поиском по странице - дождитесь полной загрузки страницы"
          );
        }
      }}
      onMouseDown={ripple.onMouseDown}
    >
      {wide ? (
        <>
          <Search />
          <span>
            Навигация по странице <mark>Ctrl + F</mark>
          </span>
        </>
      ) : (
        <>
          <Search />
          <span>Поиск</span>
        </>
      )}
    </button>
  );
};

type SearchCategoriesProperties = {
  onLinkClick: (id: string, matchText?: string) => void;
  sections: SearchSection[];
};

export const SearchCategories: React.FC<SearchCategoriesProperties> = ({
  onLinkClick,
  sections,
}) => {
  const handleCopy = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const target = event.target as HTMLElement;

    const button = target.closest("button");

    if (button) {
      const id = button.dataset.id;

      const title = button.dataset.title;

      if (id && title) {
        (async () => {
          const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${id}`;

          const success = await copyText(anchorUrl);

          if (success) {
            message.success(
              `Ссылка на категорию «${formatNestedQuotes(title)}» скопирована`
            );
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        })();

        return true;
      }
    }

    return false;
  }, []);

  const longPressProperties = useLongPress(handleCopy, 500, {
    getRippleTarget: getRippleButtonTarget,
  });

  const ripple = useRipple<HTMLButtonElement>();

  return (
    <div
      className={searchStyles["search-category"]}
      {...longPressProperties}
    >
      {sections.map((section) => (
        <button
          key={section.id}
          data-id={section.id}
          data-title={section.title}
          onClick={() => onLinkClick(section.id)}
          onMouseDown={ripple.onMouseDown}
        >
          {section.icon}
          {section.title}
        </button>
      ))}
    </div>
  );
};

type SearchModalProperties = {
  children: React.ReactNode;
  closeModal: () => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  isFadeVisible: boolean;
  isScrollableContent: boolean;
  isOpen: boolean;
  onChangeQuery: (value: string) => void;
  onClearQuery: () => void;
  onCloseMouseDown: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  onInputClearMouseDown: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  query: string;
  resultWord: string;
  resultsContainerRef: React.Ref<HTMLDivElement | null>;
  resultsCount: number;
  contentTransitionPhase?: "idle" | "exit" | "enter";
};

interface SearchModalContentProperties extends Omit<
  SearchModalProperties,
  "closeModal" | "isOpen"
> {
  closeModal: () => void;
  isOpen: boolean;
}

const SearchModalContent: React.FC<SearchModalContentProperties> = ({
  children,
  closeModal,
  contentTransitionPhase,
  inputRef,
  isFadeVisible,
  isOpen,
  isScrollableContent,
  onChangeQuery,
  onClearQuery,
  onCloseMouseDown,
  onInputClearMouseDown,
  query,
  resultsContainerRef,
  resultsCount,
  resultWord,
}) => {
  const [localQuery, setLocalQuery] = useState(query);

  const lastSentQueryReference = useRef(query);

  useEffect(() => {
    const isFocused =
      inputRef.current !== null && document.activeElement === inputRef.current;

    if (query === "" || !isFocused || query !== lastSentQueryReference.current) {
      setLocalQuery(query);
      lastSentQueryReference.current = query;
    }
  }, [query, inputRef]);

  const debouncedOnChangeQuery = useMemo(
    () =>
      debounce(
        (value: string) => {
          lastSentQueryReference.current = value;
          onChangeQuery(value);
        },
        isMobileDevice() ? 400 : 200
      ),
    [onChangeQuery]
  );

  useEffect(() => {
    return () => {
      debouncedOnChangeQuery.cancel();
    };
  }, [debouncedOnChangeQuery]);

  const handleInputChange = (event_: React.ChangeEvent<HTMLInputElement>) => {
    const value = event_.target.value;

    setLocalQuery(value);
    debouncedOnChangeQuery(value);
  };

  const handleClear = () => {
    debouncedOnChangeQuery.cancel();
    setLocalQuery("");
    lastSentQueryReference.current = "";
    onClearQuery();
  };

  const KEYBOARD_OPEN_THRESHOLD_PX = 120;

  const keyboardBaselineViewportHeightReference = useRef(0);

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  const updateKeyboardState = useCallback(() => {
    const viewport = globalThis.visualViewport;

    if (!viewport) {
      setIsKeyboardOpen(false);

      return;
    }

    const currentViewportHeight = viewport.height;

    if (
      keyboardBaselineViewportHeightReference.current === 0 ||
      currentViewportHeight > keyboardBaselineViewportHeightReference.current
    ) {
      keyboardBaselineViewportHeightReference.current = currentViewportHeight;
    }

    const currentActiveElement = document.activeElement;

    const isSearchInputFocused =
      inputRef.current !== null && currentActiveElement === inputRef.current;

    const keyboardHeightDelta =
      keyboardBaselineViewportHeightReference.current - currentViewportHeight;

    setIsKeyboardOpen(
      isSearchInputFocused && keyboardHeightDelta > KEYBOARD_OPEN_THRESHOLD_PX
    );
  }, [inputRef]);

  const handleDocumentFocusIn = useCallback(
    (event_: FocusEvent) => {
      if (inputRef.current !== null && event_.target === inputRef.current) {
        setIsKeyboardOpen(true);
      }

      updateKeyboardState();
    },
    [inputRef, updateKeyboardState]
  );

  const handleDocumentFocusOut = useCallback(() => {
    updateKeyboardState();
  }, [updateKeyboardState]);

  const debouncedUpdateKeyboardState = useMemo(
    () => debounce(updateKeyboardState, 100),
    [updateKeyboardState]
  );

  useEffect(() => {
    return () => {
      debouncedUpdateKeyboardState.cancel();
    };
  }, [debouncedUpdateKeyboardState]);

  useEffect(() => {
    if (!isOpen) {
      keyboardBaselineViewportHeightReference.current = 0;
      setIsKeyboardOpen(false);

      return;
    }

    updateKeyboardState();

    const viewport = globalThis.visualViewport;

    if (!viewport) {
      return;
    }

    viewport.addEventListener("resize", debouncedUpdateKeyboardState);
    document.addEventListener("focusin", handleDocumentFocusIn);
    document.addEventListener("focusout", handleDocumentFocusOut);

    return () => {
      viewport.removeEventListener("resize", debouncedUpdateKeyboardState);
      document.removeEventListener("focusin", handleDocumentFocusIn);
      document.removeEventListener("focusout", handleDocumentFocusOut);
    };
  }, [
    handleDocumentFocusIn,
    handleDocumentFocusOut,
    isOpen,
    updateKeyboardState,
    debouncedUpdateKeyboardState,
  ]);

  let contentTransitionClass = "";

  switch (contentTransitionPhase) {
    case "exit": {
      contentTransitionClass = searchStyles["content-transition-exit"];

      break;
    }

    case "enter": {
      contentTransitionClass = searchStyles["content-transition-enter"];

      break;
    }

    case "idle": {
      contentTransitionClass = searchStyles["content-transition-idle"];

      break;
    }
    // No default
  }

  const scrollShellClassName = [
    searchStyles["search-results-shell"],
    isKeyboardOpen ? searchStyles["search-results-keyboard-open"] : "",
    isScrollableContent && isFadeVisible ? searchStyles["show-fade"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={searchStyles["modal"]}>
      <div className={modalStyles["modal-header"]}>
        <input
          ref={inputRef}
          className={searchStyles["search-input"]}
          placeholder="Введите что-нибудь для поиска..."
          type="search"
          value={localQuery}
          onChange={handleInputChange}
        />
        {resultsCount > 0 && (
          <span className={`${searchStyles["search-counter"]} ${contentTransitionClass}`}>
            <span className={searchStyles["search-counter-value"]}>{resultsCount}</span>{" "}
            {resultWord}
          </span>
        )}
        {localQuery.trim() !== "" && (
          <button
            className={modalStyles["modal-header-button"]}
            onClick={handleClear}
            onMouseDown={onInputClearMouseDown}
          >
            <BackspaceOutlined fontSize="small" />
          </button>
        )}
        <button
          className={modalStyles["modal-header-button"]}
          onClick={closeModal}
          onMouseDown={onCloseMouseDown}
        >
          <CloseRounded />
        </button>
      </div>
      <div className={scrollShellClassName}>
        <div
          ref={resultsContainerRef}
          className={`${searchStyles["search-results-scroll"]} ${contentTransitionClass}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export const SearchModal: React.FC<SearchModalProperties> = (properties) => {
  return (
    <RemoveScroll enabled={properties.isOpen}>
      <Modal
        closeIcon={false}
        footer={<></>}
        open={properties.isOpen}
        width={1000}
        onCancel={properties.closeModal}
      >
        <SearchModalContent {...properties} />
      </Modal>
    </RemoveScroll>
  );
};

const getSearchQuery = (query: string) => {
  const path = globalThis.location.pathname;

  let context = "";

  if (path.includes("aefaq")) {
    context = "after effects";
  } else if (path.includes("prfaq")) {
    context = "premiere pro";
  } else if (path.includes("psfaq")) {
    context = "photoshop";
  } else if (path.includes("aeexpr")) {
    context = "after effects expression";
  }

  return `${query} ${context}`;
};

type ExternalSearchProperties = {
  query: string;
  disableAnimation?: boolean;
  totalResultsCount?: number;
  resultsLength?: number;
  setResultsLimit?: React.Dispatch<React.SetStateAction<number>>;
};

export const ExternalSearch: React.FC<ExternalSearchProperties> = ({
  disableAnimation = false,
  query,
  resultsLength,
  setResultsLimit,
  totalResultsCount,
}) => {
  const ripple = useRipple<HTMLElement>();

  const showAllRipple = useRipple<HTMLButtonElement>();

  const isMobile = isMobileDevice();

  const shouldDisableAnimation = isMobile || disableAnimation;

  const showAllButton = totalResultsCount !== undefined &&
    resultsLength !== undefined &&
    totalResultsCount > resultsLength &&
    setResultsLimit && (
      <button
        onClick={() => setResultsLimit(Number.MAX_SAFE_INTEGER)}
        onMouseDown={showAllRipple.onMouseDown}
      >
        Показать все результаты
      </button>
    );

  return (
    <div
      className={`${searchStyles["search-external-container"]} ${shouldDisableAnimation ? searchStyles["is-mobile"] : ""}`}
    >
      <div className={searchStyles["search-external-links"]}>
        {showAllButton}
        <a
          data-no-intercept
          href={`https://yandex.com/search/?text=${encodeURIComponent(getSearchQuery(query))}`}
          rel="noopener noreferrer"
          target="_blank"
          onMouseDown={ripple.onMouseDown}
        >
          Найти в Яндексе
        </a>
        <a
          data-no-intercept
          href={`https://www.perplexity.ai/search?q=${encodeURIComponent(getSearchQuery(query))}`}
          rel="noopener noreferrer"
          target="_blank"
          onMouseDown={ripple.onMouseDown}
        >
          Спросить у Perplexity<sup>1</sup>
        </a>
      </div>
      <p className={searchStyles["search-no-results-tip"]}>
        <sup>1</sup> Perplexity и другие чат-боты с использованием нейросетевых моделей
        могут выдавать недостоверную информацию
      </p>
    </div>
  );
};

type NoResultsProperties = {
  onSelectSuggestion?: (suggestion: string) => void;
  query: string;
  suggestions?: string[];
};

export const NoResults: React.FC<NoResultsProperties> = ({
  onSelectSuggestion,
  query,
  suggestions = [],
}) => {
  const [showLeftFade, setShowLeftFade] = useState(false);

  const [showRightFade, setShowRightFade] = useState(false);

  const [visibleSuggestions, setVisibleSuggestions] = useState<string[]>(suggestions);

  const [animationPhase, setAnimationPhase] = useState<"enter" | "exit" | "idle">("idle");

  const containerReference = useRef<HTMLDivElement | null>(null);

  const checkScrollLimits = useCallback(() => {
    const target = containerReference.current;

    if (!target) {
      return;
    }

    const scrollLeft = target.scrollLeft;

    const clientWidth = target.clientWidth;

    const scrollWidth = target.scrollWidth;

    setShowLeftFade(scrollLeft > 0);

    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

    const isScrollable = scrollWidth > clientWidth;

    setShowRightFade(isScrollable && !isAtEnd);
  }, []);

  useEffect(() => {
    checkScrollLimits();

    const handleResize = () => checkScrollLimits();

    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, [visibleSuggestions, checkScrollLimits]);

  useEffect(() => {
    if (suggestions.length > 0) {
      if (visibleSuggestions.length === 0) {
        setVisibleSuggestions(suggestions);
        setAnimationPhase("enter");
      } else if (suggestions.join(",") !== visibleSuggestions.join(",")) {
        setAnimationPhase("exit");

        const timeout = globalThis.setTimeout(() => {
          setVisibleSuggestions(suggestions);
          setAnimationPhase("enter");
        }, 200);

        return () => globalThis.clearTimeout(timeout);
      }
    } else if (visibleSuggestions.length > 0) {
      setAnimationPhase("exit");

      const timeout = globalThis.setTimeout(() => {
        setVisibleSuggestions([]);
        setAnimationPhase("idle");
      }, 200);

      return () => globalThis.clearTimeout(timeout);
    }
  }, [suggestions]);

  useEffect(() => {
    if (animationPhase === "enter") {
      const timeout = globalThis.setTimeout(() => {
        setAnimationPhase("idle");
      }, 200);

      return () => globalThis.clearTimeout(timeout);
    }
  }, [animationPhase]);

  const ripple = useRipple<HTMLButtonElement>();

  const handleScroll = () => {
    checkScrollLimits();
  };

  const searchQuery = getSearchQuery(query);

  const yandexUrl = `https://yandex.com/search/?text=${encodeURIComponent(searchQuery)}`;

  const perplexityUrl = `https://www.perplexity.ai/search?q=${encodeURIComponent(searchQuery)}`;

  return (
    <div>
      <div className={searchStyles["search-no-results"]}>
        <p className={searchStyles["search-no-results-title"]}>
          По вашему запросу на этой странице{" "}
          <span className={searchStyles["search-no-results-highlight"]}>ничего</span> не
          нашлось
        </p>
        <p className={searchStyles["search-no-results-message"]}>
          Попробуйте перефразировать свой запрос или выполните поиск в{" "}
          <a
            data-no-intercept
            href={yandexUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Яндексе
          </a>{" "}
          или{" "}
          <a
            data-no-intercept
            href={perplexityUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Perplexity
          </a>
          <sup>1</sup>
        </p>
      </div>
      <div className={searchStyles["search-suggestions"]}>
        {visibleSuggestions.length > 0 && (
          <div
            key={visibleSuggestions.join(",")}
            className={`${searchStyles["search-suggestions-content"]} ${
              animationPhase === "exit" ? searchStyles["exit"] : ""
            }`}
          >
            <span className={searchStyles["search-suggestions-title"]}>
              <LightbulbOutlined
                className={searchStyles["search-suggestions-title-icon"]}
              />
            </span>
            <div
              ref={containerReference}
              className={`${searchStyles["search-suggestions-items"]} ${
                showLeftFade ? searchStyles["show-left-fade"] : ""
              } ${showRightFade ? searchStyles["show-right-fade"] : ""}`}
              onScroll={handleScroll}
            >
              {visibleSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => onSelectSuggestion?.(suggestion)}
                  onMouseDown={ripple.onMouseDown}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <p className={searchStyles["search-no-results-tip"]}>
        <sup>1</sup> Perplexity и другие чат-боты с использованием нейросетевых моделей
        могут выдавать недостоверную информацию
      </p>
    </div>
  );
};

type SearchResultsProperties = {
  onLinkClick: (id: string) => void;
  query: string;
  resultRefs: React.RefObject<(HTMLButtonElement | null)[]>;
  results: SearchResult[];
  selectedResultIndex: number;
  setResultsLimit?: React.Dispatch<React.SetStateAction<number>>;
  setSelectedResultIndex: React.Dispatch<React.SetStateAction<number>>;
  totalResultsCount?: number;
};

const SearchResultsComponent: React.FC<SearchResultsProperties> = ({
  onLinkClick,
  query,
  resultRefs,
  results,
  selectedResultIndex,
  setResultsLimit,
  setSelectedResultIndex,
  totalResultsCount,
}) => {
  const MASONRY_COLUMN_MIN_WIDTH = 400;

  const MASONRY_COLUMN_GAP = 10;

  const HIGHLIGHT_BUFFER_VIEWPORTS = 2;

  const HIGHLIGHT_DELAY_MS = 220;

  const MASONRY_SINGLE_COLUMN_BREAKPOINT =
    MASONRY_COLUMN_MIN_WIDTH * 2 + MASONRY_COLUMN_GAP;

  const RESULT_CONTENT_MAX_HEIGHT = 400;

  const isMobile = isMobileDevice();

  const [displayedResults, setDisplayedResults] = useState<SearchResult[]>(results);

  const [displayedQuery, setDisplayedQuery] = useState<string>(query);

  const [displayedTotalResultsCount, setDisplayedTotalResultsCount] = useState(
    totalResultsCount || 0
  );

  const [transitionPhase, setTransitionPhase] = useState<"idle" | "exit" | "enter">(
    "idle"
  );

  const [previousQuery, setPreviousQuery] = useState(query);

  const [previousResults, setPreviousResults] = useState(results);

  const isResultsChanged =
    results.length !== previousResults.length ||
    results.some((result, index) => result.id !== previousResults[index]?.id);

  if (query !== previousQuery || isResultsChanged) {
    setPreviousQuery(query);
    setPreviousResults(results);

    if (previousResults.length === 0) {
      setDisplayedResults(results);
      setDisplayedQuery(query);
      setDisplayedTotalResultsCount(totalResultsCount || 0);
      setTransitionPhase("enter");
    } else {
      setTransitionPhase("exit");
    }
  }

  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>();

  const [overflowingResultIds, setOverflowingResultIds] = useState<Set<string>>(
    new Set()
  );

  const resultContentReferences = useRef<Record<string, HTMLDivElement | null>>({});

  const masonryContainerReference = useRef<HTMLDivElement>(null);

  const [isSingleColumnLayout, setIsSingleColumnLayout] = useState(false);

  const compiledQuery = useMemo(
    () => compileSearchQuery(displayedQuery),
    [displayedQuery]
  );

  const [isHighlightReady, setIsHighlightReady] = useState(false);

  const [highlightEligibleIds, setHighlightEligibleIds] = useState<Set<string>>(
    new Set()
  );

  const highlightedContentCacheReference = useRef<Map<string, string>>(new Map());

  const [, setHighlightCacheVersion] = useState(0);

  useEffect(() => {
    if (transitionPhase !== "exit") {
      return;
    }

    const timeout = globalThis.setTimeout(() => {
      setDisplayedResults(previousResults);
      setDisplayedQuery(previousQuery);
      setDisplayedTotalResultsCount(totalResultsCount || 0);
      setTransitionPhase("enter");
    }, 350);

    return () => globalThis.clearTimeout(timeout);
  }, [transitionPhase, previousQuery, previousResults, totalResultsCount]);

  useEffect(() => {
    if (transitionPhase !== "enter") {
      return;
    }

    const timeout = globalThis.setTimeout(() => {
      setTransitionPhase("idle");
    }, 350);

    return () => globalThis.clearTimeout(timeout);
  }, [transitionPhase]);

  useEffect(() => {
    setIsHighlightReady(false);

    const timeout = globalThis.setTimeout(() => {
      setIsHighlightReady(true);
    }, HIGHLIGHT_DELAY_MS);

    return () => globalThis.clearTimeout(timeout);
  }, [HIGHLIGHT_DELAY_MS, displayedQuery]);

  useEffect(() => {
    highlightedContentCacheReference.current.clear();
  }, [displayedQuery]);

  const updateHighlightEligibility = useCallback(() => {
    if (!isHighlightReady) {
      setHighlightEligibleIds(new Set());

      return;
    }

    const viewportHeight = globalThis.innerHeight || 0;

    const viewportBuffer = viewportHeight * HIGHLIGHT_BUFFER_VIEWPORTS;

    const nextEligibleIds = new Set<string>();

    for (const [index, result] of displayedResults.entries()) {
      const element = resultRefs.current?.[index];

      if (!element) {
        continue;
      }

      const rect = element.getBoundingClientRect();

      const isInBufferedViewport =
        rect.bottom >= -viewportBuffer && rect.top <= viewportHeight + viewportBuffer;

      if (isInBufferedViewport) {
        nextEligibleIds.add(result.id);
      }
    }

    if (
      selectedResultIndex >= 0 &&
      selectedResultIndex < displayedResults.length &&
      displayedResults[selectedResultIndex]
    ) {
      nextEligibleIds.add(displayedResults[selectedResultIndex].id);
    }

    setHighlightEligibleIds(nextEligibleIds);
  }, [
    HIGHLIGHT_BUFFER_VIEWPORTS,
    isHighlightReady,
    resultRefs,
    displayedResults,
    selectedResultIndex,
  ]);

  useEffect(() => {
    const rafId = globalThis.requestAnimationFrame(updateHighlightEligibility);

    const scrollContainer = document.querySelector(
      `.${searchStyles["search-results-scroll"]}`
    ) as HTMLElement | null;

    scrollContainer?.addEventListener("scroll", updateHighlightEligibility, {
      passive: true,
    });

    globalThis.addEventListener("resize", updateHighlightEligibility);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      scrollContainer?.removeEventListener("scroll", updateHighlightEligibility);
      globalThis.removeEventListener("resize", updateHighlightEligibility);
    };
  }, [displayedResults, updateHighlightEligibility]);

  useEffect(() => {
    updateHighlightEligibility();
  }, [selectedResultIndex, updateHighlightEligibility]);

  useEffect(() => {
    const updateLayout = () => {
      const containerWidth =
        masonryContainerReference.current?.clientWidth ?? globalThis.innerWidth;

      setIsSingleColumnLayout(containerWidth < MASONRY_SINGLE_COLUMN_BREAKPOINT);
    };

    updateLayout();

    const observer = new ResizeObserver(() => {
      updateLayout();
    });

    if (masonryContainerReference.current) {
      observer.observe(masonryContainerReference.current);
    }

    globalThis.addEventListener("resize", updateLayout);

    return () => {
      observer.disconnect();
      globalThis.removeEventListener("resize", updateLayout);
    };
  }, [MASONRY_SINGLE_COLUMN_BREAKPOINT]);

  const handleCopy = useCallback((event: React.MouseEvent | React.TouchEvent) => {
    const target = event.target as HTMLElement;

    const button = target.closest("button");

    if (button) {
      const id = button.dataset.id;

      const anchor = button.dataset.anchor;

      if (id) {
        (async () => {
          const anchorToCopy = anchor || id;

          const anchorUrl = `${globalThis.location.origin}${globalThis.location.pathname}#${anchorToCopy}`;

          const success = await copyText(anchorUrl);

          if (success) {
            message.success(`Ссылка на статью ${id} скопирована`);
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        })();

        return true;
      }
    }

    return false;
  }, []);

  const longPressProperties = useLongPress(handleCopy, 500, {
    getRippleTarget: getRippleButtonTarget,
  });

  const handleResultClick = withSelectionHaptic(
    (event_: React.MouseEvent<HTMLButtonElement>, id: string) => {
      event_.preventDefault();
      onLinkClick(id);
    }
  );

  const resultEntries = useMemo(
    () => displayedResults.map((result, index) => ({index, result})),
    [displayedResults]
  );

  const masonryColumns = useMemo(
    () => getSearchResultColumns(resultEntries, isSingleColumnLayout),
    [isSingleColumnLayout, resultEntries]
  );

  const resultById = useMemo(
    () => new Map(displayedResults.map((result) => [result.id, result])),
    [displayedResults]
  );

  const checkResultOverflow = useCallback(() => {
    const overflowedIds = new Set<string>();

    for (const {id} of displayedResults) {
      const contentElement = resultContentReferences.current[id];

      if (!contentElement) {
        continue;
      }

      if (contentElement.scrollHeight > RESULT_CONTENT_MAX_HEIGHT) {
        overflowedIds.add(id);
      }
    }

    setOverflowingResultIds(overflowedIds);
  }, [displayedResults]);

  useEffect(() => {
    const rafId = globalThis.requestAnimationFrame(checkResultOverflow);

    const handleResize = () => {
      checkResultOverflow();
    };

    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      globalThis.removeEventListener("resize", handleResize);
    };
  }, [checkResultOverflow, isSingleColumnLayout]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const updateResultScales = () => {
      for (const resultElement of resultRefs.current ?? []) {
        if (!resultElement) {
          continue;
        }

        applySearchResultScaleVariables(resultElement);
      }
    };

    const rafId = globalThis.requestAnimationFrame(updateResultScales);

    const observer =
      "ResizeObserver" in globalThis
        ? new ResizeObserver(() => {
            updateResultScales();
          })
        : undefined;

    for (const resultElement of resultRefs.current ?? []) {
      if (!resultElement) {
        continue;
      }

      observer?.observe(resultElement);
    }

    globalThis.addEventListener("resize", updateResultScales);

    return () => {
      globalThis.cancelAnimationFrame(rafId);
      observer?.disconnect();
      globalThis.removeEventListener("resize", updateResultScales);
    };
  }, [isMobile, isSingleColumnLayout, resultRefs, displayedResults]);

  useEffect(() => {
    if (
      !isHighlightReady ||
      !displayedQuery.trim() ||
      compiledQuery.words.length === 0 ||
      compiledQuery.isKeyCombination
    ) {
      return;
    }

    const idsToPrecompute = [
      ...new Set(
        displayedResults
          .map((result) => result.id)
          .filter((id) => highlightEligibleIds.has(id))
      ),
    ].filter(
      (id) => !highlightedContentCacheReference.current.has(`${id}::${displayedQuery}`)
    );

    if (idsToPrecompute.length === 0) {
      return;
    }

    let isCancelled = false;

    let timeoutId: ReturnType<typeof globalThis.setTimeout> | undefined;

    let currentIndex = 0;

    const processChunk = () => {
      if (isCancelled) {
        return;
      }

      const startedAt = performance.now();

      let didUpdateCache = false;

      while (currentIndex < idsToPrecompute.length && performance.now() - startedAt < 8) {
        const resultId = idsToPrecompute[currentIndex];

        currentIndex += 1;

        const resultItem = resultById.get(resultId);

        if (!resultItem) {
          continue;
        }

        const cacheKey = `${resultId}::${displayedQuery}`;

        if (highlightedContentCacheReference.current.has(cacheKey)) {
          continue;
        }

        highlightedContentCacheReference.current.set(
          cacheKey,
          highlightMatchedTokens(resultItem.content, compiledQuery)
        );

        didUpdateCache = true;
      }

      if (didUpdateCache) {
        setHighlightCacheVersion((previous) => previous + 1);
      }

      if (currentIndex < idsToPrecompute.length) {
        timeoutId = globalThis.setTimeout(processChunk, 0);
      }
    };

    timeoutId = globalThis.setTimeout(processChunk, 0);

    return () => {
      isCancelled = true;

      if (timeoutId !== undefined) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, [
    compiledQuery,
    highlightEligibleIds,
    isHighlightReady,
    displayedQuery,
    resultById,
    displayedResults,
  ]);

  const renderResult = ({index, result}: {index: number; result: SearchResult}) => {
    const {anchor, content, id, tag, title} = result;

    const tagsToDisplay = getMatchingTagsByQuery(tag, compiledQuery);

    const displayTitle = title.replace(/^[+-]+/, "").trim();

    const isCurrentSelectedResult =
      selectedResultIndex >= 0 &&
      selectedResultIndex < displayedResults.length &&
      displayedResults[selectedResultIndex]?.id === id;

    const shouldHighlight =
      isCurrentSelectedResult || (isHighlightReady && highlightEligibleIds.has(id));

    const highlightedTitle = shouldHighlight
      ? renderHighlightedText(displayTitle, compiledQuery)
      : displayTitle;

    const highlightedTags = shouldHighlight
      ? tagsToDisplay.map((tag_) => renderHighlightedText(tag_, compiledQuery))
      : tagsToDisplay;

    const cacheKey = `${id}::${displayedQuery}`;

    const cachedHighlightedContent =
      highlightedContentCacheReference.current.get(cacheKey);

    let highlightedContent = content;

    if (shouldHighlight && displayedQuery.trim() !== "") {
      if (cachedHighlightedContent !== undefined) {
        highlightedContent = cachedHighlightedContent;
      } else if (isCurrentSelectedResult) {
        const renderedContent = highlightMatchedTokens(content, compiledQuery);

        highlightedContentCacheReference.current.set(cacheKey, renderedContent);
        highlightedContent = renderedContent;
      }
    }

    const isContentUnclamped = hasTableInContent(content);

    const isSelected = index === selectedResultIndex;

    const isHovered = hoveredIndex === index;

    return (
      <SearchResultCard
        anchor={anchor}
        cardIndex={index}
        content={highlightedContent}
        highlightedTags={highlightedTags}
        highlightedTitle={highlightedTitle}
        id={id}
        isContentOverflowing={!isContentUnclamped && overflowingResultIds.has(id)}
        isContentUnclamped={isContentUnclamped}
        isHovered={isHovered}
        isMobile={isMobile}
        isSelected={isSelected}
        setContentRef={(element) => {
          resultContentReferences.current[id] = element;
        }}
        setResultRef={(element) => {
          if (resultRefs.current) {
            resultRefs.current[index] = element;
          }
        }}
        tagsToDisplay={tagsToDisplay}
        onClick={(event_) => {
          setSelectedResultIndex(index);
          handleResultClick(event_, anchor || id);
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(undefined)}
      />
    );
  };

  let transitionClass = "";

  switch (transitionPhase) {
    case "exit": {
      transitionClass = searchStyles["transition-exit"];

      break;
    }

    case "enter": {
      transitionClass = searchStyles["transition-enter"];

      break;
    }

    case "idle": {
      transitionClass = searchStyles["transition-idle"];

      break;
    }
    // No default
  }

  return (
    <div
      ref={masonryContainerReference}
      className={transitionClass}
      {...longPressProperties}
    >
      <div
        className={`${searchStyles["search-results-layout"]} ${
          isSingleColumnLayout
            ? searchStyles["search-results-layout-single"]
            : searchStyles["search-results-layout-masonry"]
        }`}
      >
        {masonryColumns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={searchStyles["search-results-column"]}
          >
            {column.map((entry) => (
              <React.Fragment key={`${entry.result.id}-${displayedQuery}`}>
                {renderResult(entry)}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
      <ExternalSearch
        query={displayedQuery}
        resultsLength={displayedResults.length}
        setResultsLimit={setResultsLimit}
        totalResultsCount={displayedTotalResultsCount}
      />
    </div>
  );
};

export const SearchResults = memo(SearchResultsComponent);

type RecentQueriesProperties = {
  history: string[];
  onClear: () => void;
  onSelect: (query: string) => void;
};

export const RecentQueries: React.FC<RecentQueriesProperties> = ({
  history,
  onClear,
  onSelect,
}) => {
  const [showLeftFade, setShowLeftFade] = useState(false);

  const [showRightFade, setShowRightFade] = useState(false);

  const containerReference = useRef<HTMLDivElement | null>(null);

  const checkScrollLimits = useCallback(() => {
    const target = containerReference.current;

    if (!target) {
      return;
    }

    const scrollLeft = target.scrollLeft;

    const clientWidth = target.clientWidth;

    const scrollWidth = target.scrollWidth;

    setShowLeftFade(scrollLeft > 0);

    const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 1;

    const isScrollable = scrollWidth > clientWidth;

    setShowRightFade(isScrollable && !isAtEnd);
  }, []);

  useEffect(() => {
    checkScrollLimits();

    const handleResize = () => checkScrollLimits();

    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, [history, checkScrollLimits]);

  useEffect(() => {
    const container = containerReference.current;

    if (!container || isMobileDevice()) {
      return;
    }

    const updateScales = () => {
      const buttons = container.querySelectorAll("button");

      for (const button of buttons) {
        applyInteractiveScaleVariables(button);
      }
    };

    updateScales();

    const observer =
      "ResizeObserver" in globalThis
        ? new ResizeObserver(() => {
            updateScales();
          })
        : undefined;

    const buttons = container.querySelectorAll("button");

    for (const button of buttons) {
      observer?.observe(button);
    }

    globalThis.addEventListener("resize", updateScales);

    return () => {
      observer?.disconnect();
      globalThis.removeEventListener("resize", updateScales);
    };
  }, [history]);

  const ripple = useRipple<HTMLButtonElement>();

  if (history.length === 0) {
    return <></>;
  }

  const handleScroll = () => {
    checkScrollLimits();
  };

  return (
    <div className={searchStyles["search-recent"]}>
      <span className={searchStyles["search-recent-title"]}>
        <HistoryRounded className={searchStyles["search-recent-title-icon"]} />
      </span>
      <div
        ref={containerReference}
        className={`${searchStyles["search-recent-items"]} ${
          showLeftFade ? searchStyles["show-left-fade"] : ""
        } ${showRightFade ? searchStyles["show-right-fade"] : ""}`}
        onScroll={handleScroll}
      >
        {history.map((historyQuery) => (
          <button
            key={historyQuery}
            type="button"
            onClick={() => onSelect(historyQuery)}
            onMouseDown={ripple.onMouseDown}
          >
            {historyQuery}
          </button>
        ))}
      </div>
      <button
        className={searchStyles["search-recent-clear"]}
        type="button"
        onClick={onClear}
      >
        <span>Очистить</span>
      </button>
    </div>
  );
};
