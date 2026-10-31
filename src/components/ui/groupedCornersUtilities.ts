import {applyInteractiveScaleVariables} from "../../utilities/interactiveScaleUtilities";

const CORNER_CLASSES = [
  "group-corner-tl",
  "group-corner-tr",
  "group-corner-bl",
  "group-corner-br",
] as const;

export const GROUP_SELECTORS = [
  ".flexible-links",
  "[class*='modal-controls-group']",
  "[class*='search-category']",
  "[class*='search-external-links']",
] as const;

const PREFERRED_RADIUS_SOURCE_SELECTORS = [
  "[class*='modal-content']",
  ".article",
  "[class*='search-results-shell']",
  "[class*='search-static']",
] as const;

const MIN_RADIUS_RATIO = 0.75;

const MIN_RADIUS_FALLBACK_PX = 2;

const RADIUS_LEVELS = [1, 0.875, 0.75] as const;

const parsePixelValue = (value: string) => {
  const numericValue = Number(value.replace(/px$/, ""));

  if (!Number.isFinite(numericValue)) {
    return;
  }

  return numericValue;
};

const getInsetInParent = (parent: HTMLElement, child: HTMLElement) => {
  const parentRect = parent.getBoundingClientRect();

  const childRect = child.getBoundingClientRect();

  const distances = [
    childRect.left - parentRect.left,
    childRect.top - parentRect.top,
    parentRect.right - childRect.right,
    parentRect.bottom - childRect.bottom,
  ].map((distance) => Math.max(0, distance));

  return Math.min(...distances);
};

const findLeftMost = (elements: HTMLElement[]) => {
  let leftMost = elements[0];

  for (const element of elements) {
    if (element.offsetLeft < leftMost.offsetLeft) {
      leftMost = element;
    }
  }

  return leftMost;
};

const findRightMost = (elements: HTMLElement[]) => {
  let rightMost = elements[0];

  for (const element of elements) {
    if (element.offsetLeft > rightMost.offsetLeft) {
      rightMost = element;
    }
  }

  return rightMost;
};

const getGroupItems = (group: HTMLElement) => {
  return [...group.children].filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement &&
      (child.matches("button") || child.matches("a")) &&
      child.offsetParent !== null
  );
};

const getElementMaxPadding = (element: HTMLElement) => {
  const styles = getComputedStyle(element);

  const paddings = [
    parsePixelValue(styles.paddingTop) ?? 0,
    parsePixelValue(styles.paddingRight) ?? 0,
    parsePixelValue(styles.paddingBottom) ?? 0,
    parsePixelValue(styles.paddingLeft) ?? 0,
  ];

  return Math.max(...paddings);
};

const getElementPriorityInlinePadding = (element: HTMLElement) => {
  const styles = getComputedStyle(element);

  const inlinePaddings = [
    parsePixelValue(styles.paddingLeft) ?? 0,
    parsePixelValue(styles.paddingRight) ?? 0,
  ];

  const maxInlinePadding = Math.max(...inlinePaddings);

  return maxInlinePadding > 0 ? maxInlinePadding : getElementMaxPadding(element);
};

const getElementMaxBorder = (element: HTMLElement) => {
  const styles = getComputedStyle(element);

  const borders = [
    parsePixelValue(styles.borderTopWidth) ?? 0,
    parsePixelValue(styles.borderRightWidth) ?? 0,
    parsePixelValue(styles.borderBottomWidth) ?? 0,
    parsePixelValue(styles.borderLeftWidth) ?? 0,
  ];

  return Math.max(...borders);
};

const getElementRadius = (element: HTMLElement) => {
  const styles = getComputedStyle(element);

  const cornerRadii = [
    parsePixelValue(styles.borderTopLeftRadius),
    parsePixelValue(styles.borderTopRightRadius),
    parsePixelValue(styles.borderBottomLeftRadius),
    parsePixelValue(styles.borderBottomRightRadius),
  ].filter((radius): radius is number => radius !== undefined && radius > 0);

  if (cornerRadii.length === 0) {
    return;
  }

  return Math.min(...cornerRadii);
};

const findPreferredRadiusSourceElement = (group: HTMLElement) => {
  let current = group.parentElement;

  while (current) {
    for (const selector of PREFERRED_RADIUS_SOURCE_SELECTORS) {
      if (current.matches(selector) && (getElementRadius(current) ?? 0) > 0) {
        return current;
      }
    }

    current = current.parentElement;
  }
};

const resolveSourceRadius = (
  parent: HTMLElement,
  preferredSource: HTMLElement | undefined
) => {
  if (preferredSource) {
    if (parent !== preferredSource) {
      return;
    }

    return getElementRadius(parent);
  }

  const parentRadius = getElementRadius(parent);

  if (parentRadius !== undefined && parentRadius > 0) {
    return parentRadius;
  }
};

const clearCornerClasses = (element: HTMLElement) => {
  for (const cornerClass of CORNER_CLASSES) {
    element.classList.remove(cornerClass);
  }
};

const getStructuralRadiusSource = (group: HTMLElement) => {
  const preferredSource = findPreferredRadiusSourceElement(group);

  if (preferredSource) {
    return {
      border: getElementMaxBorder(preferredSource),
      padding: getElementPriorityInlinePadding(preferredSource),
      radius: getElementRadius(preferredSource) ?? 0,
    };
  }

  let current = group.parentElement;

  while (current) {
    const radius = getElementRadius(current);

    if (radius !== undefined && radius > 0) {
      return {
        border: getElementMaxBorder(current),
        padding: getElementPriorityInlinePadding(current),
        radius,
      };
    }

    current = current.parentElement;
  }
};

const getStructuralRadiusByLayout = (group: HTMLElement) => {
  const preferredSource = findPreferredRadiusSourceElement(group);

  let currentChild: HTMLElement | null = group;

  let sourceRadius: number | undefined;

  let accumulatedInset = 0;

  while (currentChild && currentChild.parentElement) {
    const currentParent: HTMLElement | null = currentChild.parentElement;

    if (!(currentParent instanceof HTMLElement)) {
      break;
    }

    const parentBorder = getElementMaxBorder(currentParent);

    const inset = getInsetInParent(currentParent, currentChild);

    accumulatedInset += parentBorder + inset;

    const resolvedSourceRadius = resolveSourceRadius(currentParent, preferredSource);

    if (resolvedSourceRadius !== undefined) {
      sourceRadius = resolvedSourceRadius;
      break;
    }

    currentChild = currentParent;
  }

  if (sourceRadius === undefined) {
    return;
  }

  const rawRatio = (sourceRadius - accumulatedInset) / sourceRadius;

  const clampedRatio = Math.max(MIN_RADIUS_RATIO, Math.min(1, rawRatio));

  let quantizedRatio: number = RADIUS_LEVELS[2];

  if (clampedRatio >= 0.9375) {
    quantizedRatio = RADIUS_LEVELS[0];
  } else if (clampedRatio >= 0.8125) {
    quantizedRatio = RADIUS_LEVELS[1];
  }

  const minRadius = Math.max(MIN_RADIUS_FALLBACK_PX, sourceRadius * MIN_RADIUS_RATIO);

  const nestedRadius = Math.max(minRadius, sourceRadius * quantizedRatio);

  return Math.min(sourceRadius, nestedRadius);
};

const applyGroupCornerRadius = (group: HTMLElement, items: HTMLElement[]) => {
  const groupStyles = getComputedStyle(group);

  let parentRadius = parsePixelValue(groupStyles.getPropertyValue("--radius-parent"));

  let parentPadding = parsePixelValue(
    groupStyles.getPropertyValue("--radius-parent-padding")
  );

  let parentBorder = parsePixelValue(
    groupStyles.getPropertyValue("--radius-parent-border")
  );

  const structuralSource = getStructuralRadiusSource(group);

  if (parentRadius === undefined) {
    parentRadius = structuralSource?.radius;
  }

  if (parentPadding === undefined) {
    parentPadding = structuralSource?.padding;
  }

  if (parentBorder === undefined) {
    parentBorder = structuralSource?.border;
  }

  if (parentRadius === undefined) {
    parentRadius = getElementRadius(items[0]) ?? 0;
  }

  if (parentPadding === undefined) {
    parentPadding = getElementPriorityInlinePadding(group);
  }

  if (parentBorder === undefined) {
    parentBorder = getElementMaxBorder(group);
  }

  const structuralRadius = getStructuralRadiusByLayout(group);

  const nestedRadius =
    structuralRadius ??
    Math.max(
      MIN_RADIUS_FALLBACK_PX,
      parentRadius * MIN_RADIUS_RATIO,
      Math.min(parentRadius, parentRadius - parentBorder - parentPadding)
    );

  if (nestedRadius <= 0) {
    return;
  }

  group.style.setProperty("--group-corner-radius", `${nestedRadius.toFixed(4)}px`);
};

const applyCornersForGroup = (group: HTMLElement) => {
  const items = getGroupItems(group);

  if (items.length === 0) {
    return;
  }

  applyGroupCornerRadius(group, items);

  for (const item of items) {
    clearCornerClasses(item);
    applyInteractiveScaleVariables(item);
  }

  const topValues = items.map((item) => item.offsetTop);

  const minTop = Math.min(...topValues);

  const maxTop = Math.max(...topValues);

  const topRow = items.filter((item) => item.offsetTop === minTop);

  const bottomRow = items.filter((item) => item.offsetTop === maxTop);

  const topLeft = findLeftMost(topRow);

  const topRight = findRightMost(topRow);

  const bottomLeft = findLeftMost(bottomRow);

  const bottomRight = findRightMost(bottomRow);

  topLeft.classList.add("group-corner-tl");
  topRight.classList.add("group-corner-tr");
  bottomLeft.classList.add("group-corner-bl");
  bottomRight.classList.add("group-corner-br");
};

export const updateAllGroupCorners = () => {
  for (const selector of GROUP_SELECTORS) {
    const groups = document.querySelectorAll<HTMLElement>(selector);

    for (const group of groups) {
      applyCornersForGroup(group);
    }
  }
};
