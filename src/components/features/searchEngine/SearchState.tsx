import React, {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {message} from "antd";

import {useLocation} from "react-router-dom";

import {useCloseAllModals} from "../../../hooks/useCloseAllModals";

import {resolveDetailsByAnchor} from "../../../utilities/anchorResolvers";

import {isMobileDevice} from "../../../utilities/browserDetection";

import {scrollToElement} from "../../../utilities/scrollToAnchor";

export interface SearchContextType {
  addQueryToHistory: (query: string) => void;
  clearQueryHistory: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
  isPageLoaded: boolean;
  openModal: () => void;
  queryHistory: string[];
}

export interface SearchResult {
  anchor?: string;
  content: string;
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  isSingleParagraphMatch: boolean;
  tag?: string;
  title: string;
}

export type SearchSection = {
  id: string;
  title: string;
  icon?: ReactNode;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

const SEARCH_HISTORY_LIMIT = 24;

const normalizeHistoryQuery = (value: string) =>
  value.replaceAll(/\s+/g, " ").trim().toLowerCase();

export const SearchProvider: React.FC<{
  children: React.ReactNode;
  isPageLoaded: boolean;
}> = ({children, isPageLoaded}) => {
  const {pathname} = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [queryHistory, setQueryHistory] = useState<string[]>([]);

  const pageKey = useMemo(() => {
    const segment = pathname.split("/").findLast(Boolean) || "default";

    return `searchEngineHistory_${segment}`;
  }, [pathname]);

  const openModal = useCallback(() => {
    if (isPageLoaded) {
      setIsModalOpen(true);
    }
  }, [isPageLoaded]);

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  useCloseAllModals(closeModal);

  const saveHistoryToStorage = useCallback(
    (history: string[]) => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(pageKey, JSON.stringify(history));
      }
    },
    [pageKey]
  );

  useEffect(() => {
    if (typeof localStorage === "undefined") {
      return;
    }

    const rawHistory = localStorage.getItem(pageKey);

    if (!rawHistory) {
      setQueryHistory([]);

      return;
    }

    try {
      const parsedHistory: unknown = JSON.parse(rawHistory);

      if (!Array.isArray(parsedHistory)) {
        setQueryHistory([]);

        return;
      }

      const sanitizedHistory = parsedHistory
        .filter((entry): entry is string => typeof entry === "string")
        .map((entry) => normalizeHistoryQuery(entry))
        .filter(Boolean)
        .slice(0, SEARCH_HISTORY_LIMIT);

      setQueryHistory(sanitizedHistory);
    } catch {
      localStorage.removeItem(pageKey);
      setQueryHistory([]);
    }
  }, [pageKey]);

  const addQueryToHistory = useCallback(
    (rawQuery: string) => {
      const normalizedQuery = normalizeHistoryQuery(rawQuery);

      if (!normalizedQuery) {
        return;
      }

      setQueryHistory((previousHistory) => {
        const hasMoreSpecific = previousHistory.some((entry) =>
          entry.startsWith(normalizedQuery + " ")
        );

        if (hasMoreSpecific) {
          return previousHistory;
        }

        const filteredHistory = previousHistory.filter(
          (entry) => entry !== normalizedQuery && !normalizedQuery.startsWith(entry + " ")
        );

        const nextHistory = [normalizedQuery, ...filteredHistory].slice(
          0,
          SEARCH_HISTORY_LIMIT
        );

        saveHistoryToStorage(nextHistory);

        return nextHistory;
      });
    },
    [saveHistoryToStorage]
  );

  const clearQueryHistory = useCallback(() => {
    setQueryHistory([]);

    if (typeof localStorage !== "undefined") {
      localStorage.removeItem(pageKey);
    }
  }, [pageKey]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!(
        (event.ctrlKey && event.key === "f") ||
        (event.ctrlKey && event.key === "а")
      )) {
        return;
      }

      event.preventDefault();

      if (isPageLoaded) {
        openModal();
      } else {
        message.warning(
          "Прежде чем воспользоваться поиском по странице - дождитесь полной загрузки страницы"
        );
      }
    };

    addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, [isPageLoaded]);

  const value = useMemo(
    () => ({
      addQueryToHistory,
      clearQueryHistory,
      closeModal,
      isModalOpen,
      isPageLoaded,
      openModal,
      queryHistory,
    }),
    [
      addQueryToHistory,
      clearQueryHistory,
      closeModal,
      isModalOpen,
      isPageLoaded,
      openModal,
      queryHistory,
    ]
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must use with SearchProvider.");
  }

  return context;
};

type PositionedResult = {
  element: HTMLButtonElement;
  index: number;
  rect: DOMRect;
};

const getPositionedResultsRuntime = (
  resultReferences: Array<HTMLButtonElement | null>
): PositionedResult[] => {
  return resultReferences
    .map((element, index) => ({
      element,
      index,
      rect: element?.getBoundingClientRect(),
    }))
    .filter(
      (item): item is PositionedResult => Boolean(item.element) && Boolean(item.rect)
    );
};

const getResultCenter = (item: {rect: DOMRect}): {centerX: number; centerY: number} => ({
  centerX: item.rect.left + item.rect.width / 2,
  centerY: item.rect.top + item.rect.height / 2,
});

const resolveCurrentResult = (
  positionedResults: PositionedResult[],
  currentIndex: number
): {currentResult: PositionedResult; isExactMatch: boolean} | undefined => {
  if (positionedResults.length === 0) {
    return undefined;
  }

  const match = positionedResults.find((item) => item.index === currentIndex);

  return match
    ? {currentResult: match, isExactMatch: true}
    : {currentResult: positionedResults[0], isExactMatch: false};
};

const getColumnCenters = (
  positionedResults: Array<{index: number; rect: DOMRect}>,
  columnTolerance: number
): number[] => {
  const centers: number[] = [];

  for (const item of positionedResults) {
    const {centerX} = getResultCenter(item);

    const matchingCenterIndex = centers.findIndex(
      (value) => Math.abs(value - centerX) <= columnTolerance
    );

    if (matchingCenterIndex === -1) {
      centers.push(centerX);
    } else {
      centers[matchingCenterIndex] = (centers[matchingCenterIndex] + centerX) / 2;
    }
  }

  return centers;
};

const getVisualNeighborIndexRuntime = ({
  columnTolerance,
  currentIndex,
  direction,
  positionedResults,
  resultsLength,
}: {
  columnTolerance: number;
  currentIndex: number;
  direction: "down" | "up";
  positionedResults: PositionedResult[];
  resultsLength: number;
}): number => {
  const resolved = resolveCurrentResult(positionedResults, currentIndex);

  if (!resolved) {
    return currentIndex;
  }

  if (!resolved.isExactMatch) {
    return resolved.currentResult.index;
  }

  const {centerX: currentCenterX, centerY: currentCenterY} = getResultCenter(
    resolved.currentResult
  );

  const columnCenters = getColumnCenters(positionedResults, columnTolerance);

  if (columnCenters.length <= 1) {
    return direction === "down"
      ? Math.min(currentIndex + 1, resultsLength - 1)
      : Math.max(currentIndex - 1, 0);
  }

  const currentColumnCenter =
    columnCenters
      .toSorted((a, b) => Math.abs(a - currentCenterX) - Math.abs(b - currentCenterX))
      .at(0) ?? currentCenterX;

  const directionalCandidates = positionedResults
    .map((candidate) => ({
      ...getResultCenter(candidate),
      index: candidate.index,
    }))
    .filter((candidate) => candidate.index !== currentIndex)
    .filter(
      (candidate) => Math.abs(candidate.centerX - currentColumnCenter) <= columnTolerance
    )
    .filter((candidate) =>
      direction === "down"
        ? candidate.centerY > currentCenterY + 2
        : candidate.centerY < currentCenterY - 2
    );

  const bestCandidate = directionalCandidates.toSorted((a, b) => {
    const scoreA =
      Math.abs(a.centerY - currentCenterY) * 12 + Math.abs(a.centerX - currentCenterX);

    const scoreB =
      Math.abs(b.centerY - currentCenterY) * 12 + Math.abs(b.centerX - currentCenterX);

    return scoreA - scoreB;
  })[0];

  return bestCandidate?.index ?? currentIndex;
};

const getHorizontalNeighborIndexRuntime = ({
  columnTolerance,
  currentIndex,
  direction,
  positionedResults,
}: {
  columnTolerance: number;
  currentIndex: number;
  direction: "left" | "right";
  positionedResults: PositionedResult[];
}): number => {
  const resolved = resolveCurrentResult(positionedResults, currentIndex);

  if (!resolved) {
    return currentIndex;
  }

  if (!resolved.isExactMatch) {
    return resolved.currentResult.index;
  }

  const {centerX: currentCenterX, centerY: currentCenterY} = getResultCenter(
    resolved.currentResult
  );

  const candidateColumns = positionedResults
    .map((item) => ({
      centerX: item.rect.left + item.rect.width / 2,
      index: item.index,
      rect: item.rect,
    }))
    .filter((item) =>
      direction === "left"
        ? item.centerX < currentCenterX - columnTolerance
        : item.centerX > currentCenterX + columnTolerance
    );

  if (candidateColumns.length === 0) {
    return currentIndex;
  }

  let bestCandidate: {index: number; score: number} | undefined;

  for (const candidate of candidateColumns) {
    const candidateCenterY = candidate.rect.top + candidate.rect.height / 2;

    const deltaY = Math.abs(candidateCenterY - currentCenterY);

    const deltaX = Math.abs(candidate.centerX - currentCenterX);

    const score = deltaX * 12 + deltaY;

    if (!bestCandidate || score < bestCandidate.score) {
      bestCandidate = {index: candidate.index, score};
    }
  }

  return bestCandidate?.index ?? currentIndex;
};

const scrollSelectedResultIntoViewRuntime = ({
  behavior = "smooth",
  resultReferences,
  resultsContainer,
  selectedResultIndex,
}: {
  behavior?: ScrollBehavior;
  resultReferences: Array<HTMLButtonElement | null>;
  resultsContainer: HTMLDivElement | undefined;
  selectedResultIndex: number;
}): void => {
  if (selectedResultIndex < 0) {
    return;
  }

  const resolvedBehavior: ScrollBehavior = isMobileDevice() ? "auto" : behavior;

  const selectedElement = resultReferences[selectedResultIndex];

  if (!resultsContainer || !selectedElement) {
    return;
  }

  const containerRect = resultsContainer.getBoundingClientRect();

  const elementRect = selectedElement.getBoundingClientRect();

  const absoluteElementTop =
    elementRect.top - containerRect.top + resultsContainer.scrollTop;

  const centeredTop =
    absoluteElementTop - (resultsContainer.clientHeight - elementRect.height) / 2;

  const maxScrollTop = Math.max(
    0,
    resultsContainer.scrollHeight - resultsContainer.clientHeight
  );

  const targetTop = Math.min(maxScrollTop, Math.max(0, centeredTop));

  resultsContainer.scrollTo({
    behavior: resolvedBehavior,
    top: targetTop,
  });

  const verifyAndFallback = () => {
    const currentElement = resultReferences[selectedResultIndex];

    if (!resultsContainer || !currentElement) {
      return;
    }

    const currentContainerRect = resultsContainer.getBoundingClientRect();

    const currentElementRect = currentElement.getBoundingClientRect();

    const topGap = currentElementRect.top - currentContainerRect.top;

    const bottomGap = currentContainerRect.bottom - currentElementRect.bottom;

    const isOutOfView = topGap < 8 || bottomGap < 8;

    if (isOutOfView) {
      currentElement.scrollIntoView({
        behavior: resolvedBehavior,
        block: "center",
        inline: "nearest",
      });
    }
  };

  requestAnimationFrame(verifyAndFallback);
};

const canOpenDetailsChain = (
  resolvedDetails: HTMLDetailsElement,
  closeModal: () => void
): boolean => {
  const summaryElement = resolvedDetails.querySelector(":scope > summary");

  if (!(summaryElement instanceof HTMLElement) || !summaryElement.id) {
    return false;
  }

  const detailsChain: HTMLDetailsElement[] = [];

  let current: HTMLElement | undefined = resolvedDetails;

  while (current) {
    if (current instanceof HTMLDetailsElement) {
      detailsChain.unshift(current);
    }

    current = current.parentElement?.closest<HTMLDetailsElement>("details") ?? undefined;
  }

  const isAlreadyOpen = detailsChain.every((details) => details.hasAttribute("open"));

  const delayStep = isAlreadyOpen ? 0 : 400;

  setTimeout(closeModal, 0);

  for (const [index, details] of detailsChain.entries()) {
    const currentSummary = details.querySelector(":scope > summary");

    if (!(currentSummary instanceof HTMLElement) || !currentSummary.id) {
      continue;
    }

    if (!details.hasAttribute("open")) {
      details.setAttribute("open", "");
    }

    const isLast = index === detailsChain.length - 1;

    const delay = index * delayStep;

    setTimeout(() => {
      dispatchEvent(
        new CustomEvent("open-spoiler-by-id", {
          detail: {id: currentSummary.id, skipScroll: !isLast},
        })
      );
    }, delay);
  }

  return true;
};

const openSearchAnchorRuntime = ({
  anchorValue,
  closeModal,
}: {
  anchorValue: string;
  closeModal: () => void;
}): void => {
  const resolvedDetails = resolveDetailsByAnchor(anchorValue);

  if (resolvedDetails && canOpenDetailsChain(resolvedDetails, closeModal)) {
    return;
  }

  const targetElement = document.getElementById(anchorValue);

  if (!targetElement) {
    return;
  }

  scrollToElement(targetElement);
  setTimeout(closeModal, 0);
};

type SearchModalBehaviorParameters = {
  handleLinkClick: (anchorValue: string) => void;
  isModalOpen: boolean;
  resultLinkClassName: string;
  resultReferences: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  results: SearchResult[];
  selectedResultIndex: number;
  setSelectedResultIndex: React.Dispatch<React.SetStateAction<number>>;
  resultsLimit?: number;
};

export const useSearchLinkNavigation = (closeModal: () => void) => {
  return useCallback(
    (anchorValue: string) => {
      openSearchAnchorRuntime({anchorValue, closeModal});
    },
    [closeModal]
  );
};

export const useSearchViewState = (
  isPageLoaded: boolean,
  resultsLength: number,
  setQuery: React.Dispatch<React.SetStateAction<string>>
) => {
  const [isSearching, setIsSearching] = useState(false);

  const [isResultsProcessed, setIsResultsProcessed] = useState(false);

  useEffect(() => {
    if (isPageLoaded) {
      const timeout = setTimeout(() => {
        setIsResultsProcessed(true);
      }, 100);

      return () => clearTimeout(timeout);
    }

    setIsResultsProcessed(false);
  }, [isPageLoaded, resultsLength]);

  const handleQueryChange = useCallback(
    (value: string) => {
      setIsSearching(value.trim() !== "");
      setIsResultsProcessed(false);
      setQuery(value);
    },
    [setQuery]
  );

  const resetSearchState = useCallback(() => {
    setQuery("");
    setIsSearching(false);
    setIsResultsProcessed(false);
  }, [setQuery]);

  return {
    handleQueryChange,
    isResultsProcessed,
    isSearching,
    resetSearchState,
  };
};

export const useSearchModalBehavior = ({
  handleLinkClick,
  isModalOpen,
  resultLinkClassName,
  resultReferences,
  results,
  resultsLimit,
  selectedResultIndex,
  setSelectedResultIndex,
}: SearchModalBehaviorParameters) => {
  const inputReference = useRef<HTMLInputElement>(null);

  const [resultsContainer, setResultsContainer] = useState<HTMLDivElement | undefined>();

  const resultsContainerReference = useCallback((element: HTMLDivElement | null) => {
    setResultsContainer(element ?? undefined);
  }, []);

  const wasModalOpenReference = useRef(false);

  const [isFadeVisible, setIsFadeVisible] = useState(false);

  const columnTolerance = 40;

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const timeout = setTimeout(() => {
      inputReference.current?.focus();
      inputReference.current?.select();
    }, 0);

    return () => clearTimeout(timeout);
  }, [isModalOpen]);

  useEffect(() => {
    const element = resultsContainer;

    if (!element) {
      return;
    }

    const checkFadeVisibility = () => {
      setIsFadeVisible(
        element.scrollHeight > element.clientHeight &&
          element.scrollTop + element.clientHeight < element.scrollHeight - 1
      );
    };

    let isScheduled = false;

    const handleScroll = () => {
      if (isScheduled) {
        return;
      }

      isScheduled = true;

      requestAnimationFrame(() => {
        isScheduled = false;
        checkFadeVisibility();
      });
    };

    checkFadeVisibility();
    element.addEventListener("scroll", handleScroll, {passive: true});
    window.addEventListener("resize", handleScroll);

    const observer = new MutationObserver(() => {
      handleScroll();
    });

    observer.observe(element, {
      childList: true,
      subtree: true,
    });

    return () => {
      element.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, [resultsContainer]);

  const getPositionedResults = useCallback(() => {
    return getPositionedResultsRuntime(resultReferences.current);
  }, [resultReferences]);

  const getVisualNeighborIndex = useCallback(
    (currentIndex: number, direction: "down" | "up"): number => {
      return getVisualNeighborIndexRuntime({
        columnTolerance,
        currentIndex,
        direction,
        positionedResults: getPositionedResults(),
        resultsLength: results.length,
      });
    },
    [columnTolerance, getPositionedResults, results.length]
  );

  const getHorizontalNeighborIndex = useCallback(
    (currentIndex: number, direction: "left" | "right"): number => {
      return getHorizontalNeighborIndexRuntime({
        columnTolerance,
        currentIndex,
        direction,
        positionedResults: getPositionedResults(),
      });
    },
    [columnTolerance, getPositionedResults]
  );

  const scrollSelectedResultIntoView = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      scrollSelectedResultIntoViewRuntime({
        behavior,
        resultReferences: resultReferences.current,
        resultsContainer,
        selectedResultIndex,
      });
    },
    [resultReferences, selectedResultIndex, resultsContainer]
  );

  const resultsSignature = useMemo(
    () => results.map((result) => result.id).join("|"),
    [results]
  );

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const handleKeyDown = (event_: KeyboardEvent) => {
      if (results.length === 0) {
        return;
      }

      switch (event_.key) {
        case "ArrowDown": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getVisualNeighborIndex(previousIndex, "down")
          );

          break;
        }

        case "ArrowUp": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getVisualNeighborIndex(previousIndex, "up")
          );

          break;
        }

        case "ArrowLeft": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getHorizontalNeighborIndex(previousIndex, "left")
          );

          break;
        }

        case "ArrowRight": {
          event_.preventDefault();

          setSelectedResultIndex((previousIndex) =>
            getHorizontalNeighborIndex(previousIndex, "right")
          );

          break;
        }

        case "Enter": {
          event_.preventDefault();

          if (selectedResultIndex >= 0 && selectedResultIndex < results.length) {
            handleLinkClick(
              results[selectedResultIndex].anchor || results[selectedResultIndex].id
            );
          }

          break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [
    getHorizontalNeighborIndex,
    getVisualNeighborIndex,
    handleLinkClick,
    isModalOpen,
    results,
    selectedResultIndex,
    setSelectedResultIndex,
  ]);

  useEffect(() => {
    if (!isModalOpen || selectedResultIndex < 0) {
      wasModalOpenReference.current = false;

      return;
    }

    const isJustOpened = !wasModalOpenReference.current;

    wasModalOpenReference.current = true;

    if (!isJustOpened) {
      scrollSelectedResultIntoView("smooth");

      return;
    }

    let rafId = 0;

    let previousRelativeTop: number | undefined;

    let stableFrames = 0;

    let frameCount = 0;

    const requiredStableFrames = 1;

    const maxFrames = 10;

    const waitForStableLayoutAndScroll = () => {
      const container = resultsContainer;

      const selectedElement = resultReferences.current[selectedResultIndex];

      frameCount += 1;

      if (!container || !selectedElement) {
        if (frameCount < maxFrames) {
          rafId = requestAnimationFrame(waitForStableLayoutAndScroll);
        } else {
          scrollSelectedResultIntoView("smooth");
        }

        return;
      }

      const containerRect = container.getBoundingClientRect();

      const elementRect = selectedElement.getBoundingClientRect();

      const relativeTop = elementRect.top - containerRect.top;

      if (
        previousRelativeTop !== undefined &&
        Math.abs(relativeTop - previousRelativeTop) < 1
      ) {
        stableFrames += 1;
      } else {
        stableFrames = 0;
      }

      previousRelativeTop = relativeTop;

      if (stableFrames >= requiredStableFrames || frameCount >= maxFrames) {
        scrollSelectedResultIntoView("smooth");

        return;
      }

      rafId = requestAnimationFrame(waitForStableLayoutAndScroll);
    };

    rafId = requestAnimationFrame(waitForStableLayoutAndScroll);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isModalOpen, resultReferences, scrollSelectedResultIntoView, selectedResultIndex]);

  useEffect(() => {
    if (
      !isModalOpen ||
      selectedResultIndex < 0 ||
      results.length === 0 ||
      resultsLimit === Number.MAX_SAFE_INTEGER
    ) {
      return;
    }

    const rafId = requestAnimationFrame(() => {
      scrollSelectedResultIntoView("smooth");
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [
    isModalOpen,
    results.length,
    resultsSignature,
    scrollSelectedResultIntoView,
    selectedResultIndex,
    resultsLimit,
  ]);

  useEffect(() => {
    const container = resultsContainer;

    if (!container) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof HTMLElement && event.target.tagName === "MARK")) {
        return;
      }

      event.stopPropagation();

      const button = event.target.closest(
        `.${resultLinkClassName}`
      ) as HTMLButtonElement | null;

      if (button) {
        button.click();
      }
    };

    container.addEventListener("click", handleClick, {capture: true});

    return () => {
      container.removeEventListener("click", handleClick, true);
    };
  }, [resultLinkClassName, results, resultsContainer]);

  return {
    inputReference,
    isFadeVisible,
    resultsContainerReference,
  };
};

export {useSearchLogic} from "./useSearchLogic";
