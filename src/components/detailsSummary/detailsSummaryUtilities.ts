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
      nestedDetailsElement instanceof HTMLDetailsElement &&
      Boolean(normalizedNestedTextualAnchor) &&
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
