import {replaceCurrentUrlHash} from "./urlHashUtilities";

const constants = {
  PADDING: {
    MAX: 14,
    MIN: 10,
    SCREEN: {
      MAX: 768,
      MIN: 320,
    },
  },
} as const;

interface ScrollToAnchorOptions {
  shouldUpdateHash?: boolean;
  updateHash?: unknown;
}

interface AnchorClickEvent {
  preventDefault: () => void;
}

const getScrollPadding = () => {
  if (typeof window === "undefined") {
    return 0;
  }

  const {MAX, MIN, SCREEN} = constants.PADDING;

  const screenProgress = (window.innerWidth - SCREEN.MIN) / (SCREEN.MAX - SCREEN.MIN);

  return Math.min(MIN + (MAX - MIN) * screenProgress, MAX);
};

const getScrollTop = (target: Element) => {
  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

  const padding = getScrollPadding();

  return target.getBoundingClientRect().top + window.scrollY - headerHeight - padding;
};

export const canScrollToElement = (target: Element): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  window.scrollTo({behavior: "smooth", top: getScrollTop(target)});

  return true;
};

export const scrollToElement = (target: Element): void => {
  canScrollToElement(target);
};

export const canScrollToAnchorById = (
  anchorId: string,
  options: ScrollToAnchorOptions = {}
): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const target = document.getElementById(anchorId);

  if (!target) {
    return false;
  }

  const shouldUpdate = options.shouldUpdateHash ?? options.updateHash !== false;

  if (shouldUpdate) {
    replaceCurrentUrlHash(`#${anchorId}`);
  }

  return canScrollToElement(target);
};

export const scrollToAnchorById = (
  anchorId: string,
  options: ScrollToAnchorOptions = {}
): void => {
  canScrollToAnchorById(anchorId, options);
};

export const canScrollToAnchorFromClick = (
  event: AnchorClickEvent,
  anchorId: string,
  options: ScrollToAnchorOptions = {}
): boolean => {
  event.preventDefault();

  return canScrollToAnchorById(anchorId, options);
};

export const scrollToAnchorFromClick = (
  event: AnchorClickEvent,
  anchorId: string,
  options: ScrollToAnchorOptions = {}
): void => {
  canScrollToAnchorFromClick(event, anchorId, options);
};
