import {MouseEvent as ReactMouseEvent} from "react";

import {triggerHaptic} from "../utilities/haptics";

import type {HapticInput} from "web-haptics";

interface RippleOptions {
  haptic?: HapticInput | false;
}

const RIPPLE_MIN_SIZE = 128;

const RIPPLE_MAX_SIZE = 336;

const MARK_RIPPLE_MIN_SIZE = 176;

const MARK_RIPPLE_MAX_SIZE = 280;

const findActiveRect = (
  element: HTMLElement,
  clientX: number,
  clientY: number,
  isMarkElement: boolean
) => {
  const elementRect = element.getBoundingClientRect();

  const lineRects = isMarkElement ? [...element.getClientRects()] : [];

  if (!isMarkElement) {
    return {activeRect: elementRect, lineRects};
  }

  const rectByPointer = lineRects.find(
    (lineRect) =>
      clientX >= lineRect.left &&
      clientX <= lineRect.right &&
      clientY >= lineRect.top &&
      clientY <= lineRect.bottom
  );

  return {activeRect: rectByPointer ?? elementRect, lineRects};
};

const ensurePositionedHost = (hostElement: HTMLElement) => {
  const computedStyle = getComputedStyle(hostElement);

  if (computedStyle.position === "static") {
    hostElement.style.position = "relative";
  }
};

const isInlineLikeElement = (hostElement: HTMLElement): boolean => {
  const {display} = getComputedStyle(hostElement);

  return display.startsWith("inline");
};

const getRippleLayer = (hostElement: HTMLElement): HTMLSpanElement => {
  const existingLayer = hostElement.querySelector<HTMLSpanElement>(
    ":scope > .ripple-container[data-ripple-layer='true']"
  );

  if (existingLayer) {
    return existingLayer;
  }

  const layer = document.createElement("span");

  layer.classList.add("ripple-container");
  layer.dataset.rippleLayer = "true";
  layer.style.position = "absolute";
  layer.style.inset = "0";
  layer.style.overflow = "hidden";
  layer.style.borderRadius = "inherit";
  layer.style.pointerEvents = "none";
  hostElement.append(layer);

  return layer;
};

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, value));
};

export const applyRipple = (
  element: HTMLElement,
  clientX: number,
  clientY: number,
  options: RippleOptions = {}
) => {
  const isMarkElement = element.tagName === "MARK";

  if (isMarkElement && element.classList.length === 0) {
    return;
  }

  const {haptic = "selection"} = options;

  if (haptic !== false) {
    triggerHaptic(haptic);
  }

  const {activeRect, lineRects} = findActiveRect(
    element,
    clientX,
    clientY,
    isMarkElement
  );

  const isFixedRipple = isMarkElement && lineRects.length > 1;

  const hostElement = isFixedRipple ? document.body : element;

  const ripple = document.createElement("span");

  const rippleHost = isFixedRipple
    ? hostElement
    : (() => {
        ensurePositionedHost(hostElement);

        return isInlineLikeElement(hostElement)
          ? hostElement
          : getRippleLayer(hostElement);
      })();

  const layoutWidth = element.offsetWidth || activeRect.width;

  const layoutHeight = element.offsetHeight || activeRect.height;

  const scaleX = activeRect.width > 0 ? activeRect.width / layoutWidth : 1;

  const scaleY = activeRect.height > 0 ? activeRect.height / layoutHeight : 1;

  const maxSide = Math.max(layoutWidth, layoutHeight);

  const diagonal = Math.hypot(layoutWidth, layoutHeight);

  const baseSize = Math.max(maxSide * 1.45, diagonal * 0.95);

  const size = isMarkElement
    ? clamp(baseSize, MARK_RIPPLE_MIN_SIZE, MARK_RIPPLE_MAX_SIZE)
    : clamp(baseSize, RIPPLE_MIN_SIZE, RIPPLE_MAX_SIZE);

  const x = isFixedRipple ? clientX : (clientX - activeRect.left) / scaleX;

  const y = isFixedRipple ? clientY : (clientY - activeRect.top) / scaleY;

  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${x - size / 2}px`;
  ripple.style.top = `${y - size / 2}px`;
  ripple.classList.add("ripple");

  if (isFixedRipple) {
    ripple.style.position = "fixed";
    ripple.style.zIndex = "10000";
  }

  rippleHost.append(ripple);

  setTimeout(() => {
    if (ripple.parentElement) {
      ripple.remove();
    }
  }, 750);
};

export const useRipple = <T extends HTMLElement>(options: RippleOptions = {}) => {
  const handleMouseDown = (event: ReactMouseEvent<T>) => {
    if (event.button !== 0) {
      return;
    }

    applyRipple(event.currentTarget, event.clientX, event.clientY, options);
  };

  return {onMouseDown: handleMouseDown};
};
