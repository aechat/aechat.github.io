import {
  isElementHiddenByFilter,
  isFirstAnchorOccurrence,
  normalizeAnchor,
} from "./anchorUtilities";

import styles from "./DetailsSummary.module.scss";

export const DETAILS_SUMMARY_DELAYS = {
  ACTION_DELAY: 150,
  HOVER_DELAY: 750,
  NESTED_OPEN_AFTER_PARENT_DELAY: 150,
} as const;

export const SPOILER_ANCHOR_ASSIGNED_EVENT = "spoiler-anchor-assigned";

export const dispatchOpenSpoilerById = (
  id: string,
  options?: {delay?: number; skipScroll?: boolean}
) => {
  const delay = options?.delay ?? DETAILS_SUMMARY_DELAYS.ACTION_DELAY;

  setTimeout(() => {
    dispatchEvent(
      new CustomEvent("open-spoiler-by-id", {
        detail: {id, skipScroll: options?.skipScroll},
      })
    );
  }, delay);
};

export const assignAnchorIdIfMissing = (element: Element, fallbackId: string): string => {
  if (!element.hasAttribute("id")) {
    element.setAttribute("id", fallbackId);
  }

  return element.id;
};

export const isHashForOpenNestedInDetails = (
  detailsElement: HTMLDetailsElement | null,
  hash: string
): boolean => {
  if (!detailsElement || !hash) {
    return false;
  }

  const openNestedDetails = detailsElement.querySelectorAll<HTMLDetailsElement>(
    'details[data-nested-details-summary="true"][open]'
  );

  for (const nestedDetails of openNestedDetails) {
    const nestedSummary = nestedDetails.querySelector("summary");

    const nestedSummaryId = nestedSummary instanceof HTMLElement ? nestedSummary.id : "";

    const nestedTextualAnchor = normalizeAnchor(nestedDetails.dataset.anchor);

    if (hash === nestedSummaryId || hash === nestedTextualAnchor) {
      return true;
    }
  }

  return false;
};

export const isHashForNestedInDetails = (
  detailsElement: HTMLDetailsElement | null,
  hash: string
): boolean => {
  if (!detailsElement || !hash) {
    return false;
  }

  const nestedDetailsElements = detailsElement.querySelectorAll<HTMLDetailsElement>(
    'details[data-nested-details-summary="true"]'
  );

  for (const nestedDetails of nestedDetailsElements) {
    const nestedSummary = nestedDetails.querySelector("summary");

    const nestedSummaryId = nestedSummary instanceof HTMLElement ? nestedSummary.id : "";

    const nestedTextualAnchor = normalizeAnchor(nestedDetails.dataset.anchor);

    if (hash === nestedSummaryId || hash === nestedTextualAnchor) {
      return true;
    }
  }

  return false;
};

export const processNestedSummaries = (
  detailsElement: HTMLDetailsElement,
  generatedAnchor: string,
  currentHash: string,
  parentSummaryId: string,
  parentTextualAnchor?: string
) => {
  const isParentAnchorPrioritized =
    Boolean(currentHash) &&
    (currentHash === parentSummaryId || currentHash === parentTextualAnchor);

  const nestedSummaries = [
    ...detailsElement.querySelectorAll<HTMLElement>(
      `:scope details[data-nested-details-summary="true"] > summary`
    ),
  ];

  for (const [nestedIndex, nestedSummary] of nestedSummaries.entries()) {
    const nestedAnchor = `${generatedAnchor}.${nestedIndex + 1}`;

    const nestedSummaryId = assignAnchorIdIfMissing(nestedSummary, nestedAnchor);

    const nestedDetailsElement = nestedSummary.closest("details");

    if (
      nestedDetailsElement instanceof HTMLElement &&
      isElementHiddenByFilter(nestedDetailsElement)
    ) {
      continue;
    }

    const nestedTextualAnchor =
      nestedDetailsElement instanceof HTMLDetailsElement
        ? nestedDetailsElement.dataset.anchor
        : undefined;

    const normalizedNestedTextualAnchor = normalizeAnchor(nestedTextualAnchor);

    const isNestedTextualAnchorUsable =
      Boolean(currentHash) &&
      normalizedNestedTextualAnchor === currentHash &&
      nestedDetailsElement instanceof HTMLDetailsElement &&
      isFirstAnchorOccurrence(nestedDetailsElement, normalizedNestedTextualAnchor);

    if (
      isParentAnchorPrioritized ||
      !currentHash ||
      (nestedSummaryId !== currentHash &&
        (!isNestedTextualAnchorUsable || normalizedNestedTextualAnchor !== currentHash))
    ) {
      continue;
    }

    dispatchOpenSpoilerById(parentSummaryId, {delay: 0, skipScroll: true});

    dispatchOpenSpoilerById(nestedSummaryId, {
      delay: DETAILS_SUMMARY_DELAYS.NESTED_OPEN_AFTER_PARENT_DELAY,
    });
  }
};

export const getTopLevelSummaryElements = (container: Element): HTMLElement[] => {
  return [
    ...container.querySelectorAll<HTMLElement>(
      `details:not(.details-nested) > .${styles["details-summary"]}`
    ),
  ];
};

const pendingStackingContainers = new Set<Element>();

const stackingState: {frameId: number | undefined} = {
  frameId: undefined,
};

const setStylePropertyIfChanged = (
  element: HTMLElement,
  property: string,
  value: string
) => {
  if (element.style.getPropertyValue(property) !== value) {
    element.style.setProperty(property, value);
  }
};

const getNestedDepth = (spoilerElement: HTMLDetailsElement): number => {
  let depth = 0;

  let ancestorNestedDetails = spoilerElement.parentElement?.closest<HTMLDetailsElement>(
    'details[data-nested-details-summary="true"]'
  );

  while (ancestorNestedDetails) {
    depth += 1;

    ancestorNestedDetails =
      ancestorNestedDetails.parentElement?.closest<HTMLDetailsElement>(
        'details[data-nested-details-summary="true"]'
      );
  }

  return depth;
};

const updateContainerSpoilerStacking = (articleContent: Element) => {
  const spoilerElements = articleContent.querySelectorAll<HTMLDetailsElement>(
    'details[data-anchor], details[data-nested-details-summary="true"]'
  );

  const spoilersByDepth = new Map<number, HTMLDetailsElement[]>();

  for (const spoilerElement of spoilerElements) {
    const depth = getNestedDepth(spoilerElement);

    setStylePropertyIfChanged(spoilerElement, "--spoiler-depth", String(depth));

    const spoilersAtDepth = spoilersByDepth.get(depth) ?? [];

    spoilersAtDepth.push(spoilerElement);
    spoilersByDepth.set(depth, spoilersAtDepth);
  }

  for (const spoilersAtDepth of spoilersByDepth.values()) {
    const totalSpoilers = spoilersAtDepth.length;

    for (const [index, spoilerElement] of spoilersAtDepth.entries()) {
      setStylePropertyIfChanged(
        spoilerElement,
        "--spoiler-order",
        String(totalSpoilers - index)
      );
    }
  }
};

export const scheduleSpoilerStackingUpdate = (
  detailsElement: HTMLDetailsElement | null
) => {
  if (!detailsElement || globalThis.window === undefined) {
    return;
  }

  const articleContent = detailsElement.closest(".article-content");

  if (!articleContent) {
    return;
  }

  pendingStackingContainers.add(articleContent);

  if (stackingState.frameId !== undefined) {
    return;
  }

  stackingState.frameId = requestAnimationFrame(() => {
    stackingState.frameId = undefined;

    for (const container of pendingStackingContainers) {
      updateContainerSpoilerStacking(container);
    }

    pendingStackingContainers.clear();
  });
};

export const getSpoilerMaxAnimatedHeight = (
  detailsElement: HTMLDetailsElement,
  fullHeight: number
): number => {
  if (globalThis.window === undefined) {
    return fullHeight;
  }

  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;

  const summaryElement = detailsElement.querySelector("summary");

  const summaryHeight =
    summaryElement instanceof HTMLElement ? summaryElement.offsetHeight : 0;

  const viewportLimit = Math.max(320, window.innerHeight - headerHeight - summaryHeight);

  return Math.min(fullHeight, viewportLimit);
};

export const getSpoilerCloseStartHeight = (
  detailsElement: HTMLDetailsElement,
  fullHeight: number
): number => {
  const animatedLimit = getSpoilerMaxAnimatedHeight(detailsElement, fullHeight);

  if (fullHeight <= animatedLimit || globalThis.window === undefined) {
    return fullHeight;
  }

  const documentElement = document.documentElement;

  const bottomSlack = Math.max(
    0,
    documentElement.scrollHeight - (window.scrollY + window.innerHeight)
  );

  const maxSafeReduction = Math.min(fullHeight - animatedLimit, bottomSlack);

  return Math.max(animatedLimit, fullHeight - maxSafeReduction);
};

export const getSpoilerTransitionDurationMs = (): number => {
  return 300;
};

export const setInstantSpoilerMaxHeight = (
  contentWrapper: HTMLElement,
  maxHeight: string
) => {
  contentWrapper.style.transition = "none";
  contentWrapper.style.maxHeight = maxHeight;
  contentWrapper.getBoundingClientRect();
  contentWrapper.style.transition = "";
};
