export const resolveDetailsByAnchor = (
  anchorValue: string
): HTMLDetailsElement | undefined => {
  if (!anchorValue) {
    return undefined;
  }

  try {
    const detailsByTextualAnchor = document.querySelector<HTMLDetailsElement>(
      `details[data-anchor="${CSS.escape(anchorValue)}"]`
    );

    if (detailsByTextualAnchor) {
      return detailsByTextualAnchor;
    }
  } catch {
    const allDetails =
      document.querySelectorAll<HTMLDetailsElement>("details[data-anchor]");

    for (const details of allDetails) {
      if (details.dataset.anchor === anchorValue) {
        return details;
      }
    }
  }

  const elementById = document.getElementById(anchorValue);

  if (!elementById) {
    return undefined;
  }

  const detailsByNumericAnchor = elementById.closest("details");

  return detailsByNumericAnchor instanceof HTMLDetailsElement
    ? detailsByNumericAnchor
    : undefined;
};
