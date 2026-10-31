export interface ActiveSelectionRange {
  range: Range;
  selection: Selection;
}

export const getClosestElement = (node: Node | null): Element | undefined => {
  if (!node) {
    return undefined;
  }

  return node instanceof Element ? node : (node.parentElement ?? undefined);
};

export const getActiveSelectionRange = (): ActiveSelectionRange | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const selection = getSelection();

  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
    return undefined;
  }

  return {
    range: selection.getRangeAt(0),
    selection,
  };
};

export const hasActiveTextSelection = (): boolean => {
  return getActiveSelectionRange() !== undefined;
};

export const createRangeContainer = (range: Range): HTMLDivElement => {
  const container = document.createElement("div");

  container.append(range.cloneContents());

  return container;
};
