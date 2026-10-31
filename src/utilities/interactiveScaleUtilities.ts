const HOVER_GROWTH_PX = 6;

const ACTIVE_GROWTH_PX = 3;

const getScaleValue = (dimension: number, growthPx: number): number => {
  const safeDimension = Math.max(dimension, 1);

  return (safeDimension + growthPx) / safeDimension;
};

const setStyleIfChanged = (
  element: HTMLElement,
  property: string,
  value: string
): void => {
  if (element.style.getPropertyValue(property) !== value) {
    element.style.setProperty(property, value);
  }
};

export const applyInteractiveScaleVariables = (element: HTMLElement): void => {
  const width = element.offsetWidth;

  const height = element.offsetHeight;

  const baseDimension = Math.max(width, height);

  const hoverScale = getScaleValue(baseDimension, HOVER_GROWTH_PX).toFixed(6);

  const activeScale = getScaleValue(baseDimension, ACTIVE_GROWTH_PX).toFixed(6);

  setStyleIfChanged(element, "--links-hover-scale-x", hoverScale);
  setStyleIfChanged(element, "--links-hover-scale-y", hoverScale);
  setStyleIfChanged(element, "--links-active-scale-x", activeScale);
  setStyleIfChanged(element, "--links-active-scale-y", activeScale);
};
