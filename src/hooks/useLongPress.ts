import {useCallback, useRef} from "react";

import {applyRipple} from "./useRipple";

interface UseLongPressOptions {
  getRippleTarget?: (
    event: React.MouseEvent | React.TouchEvent
  ) => HTMLElement | undefined;
}

const resolveDefaultRippleTarget = (event_: React.MouseEvent | React.TouchEvent) => {
  const currentTarget = event_.currentTarget;

  if (currentTarget instanceof HTMLElement) {
    return currentTarget;
  }

  const target = event_.target;

  if (target instanceof HTMLElement) {
    return target;
  }
};

export const useLongPress = (
  canHandlePress: (event: React.MouseEvent | React.TouchEvent) => boolean,
  ms = 500,
  options: UseLongPressOptions = {}
) => {
  const {getRippleTarget} = options;

  const touchStartTime = useRef(0);

  const isPotentialLongPress = useRef(false);

  const touchStartCoords = useRef({x: 0, y: 0});

  const isTouchEventInProgress = useRef(false);

  const onTouchStart = useCallback((event_: React.TouchEvent<HTMLElement>) => {
    isTouchEventInProgress.current = true;
    touchStartTime.current = Date.now();
    isPotentialLongPress.current = true;

    const touch = event_.touches[0];

    touchStartCoords.current = {x: touch.clientX, y: touch.clientY};
  }, []);

  const onTouchMove = useCallback((event_: React.TouchEvent<HTMLElement>) => {
    if (!isPotentialLongPress.current) {
      return;
    }

    const touch = event_.touches[0];

    const moveThreshold = 10;

    const deltaX = Math.abs(touch.clientX - touchStartCoords.current.x);

    const deltaY = Math.abs(touch.clientY - touchStartCoords.current.y);

    if (deltaX > moveThreshold || deltaY > moveThreshold) {
      isPotentialLongPress.current = false;
    }
  }, []);

  const onTouchEnd = useCallback(
    (event_: React.TouchEvent<HTMLElement>) => {
      if (!isPotentialLongPress.current) {
        setTimeout(() => {
          isTouchEventInProgress.current = false;
        }, 300);

        return;
      }

      const pressDuration = Date.now() - touchStartTime.current;

      if (pressDuration > ms && canHandlePress(event_)) {
        const touch = event_.changedTouches[0];

        const rippleTarget =
          getRippleTarget?.(event_) ?? resolveDefaultRippleTarget(event_);

        if (touch && rippleTarget) {
          applyRipple(rippleTarget, touch.clientX, touch.clientY);
        }

        event_.preventDefault();
      }

      setTimeout(() => {
        isTouchEventInProgress.current = false;
      }, 300);

      isPotentialLongPress.current = false;
    },
    [canHandlePress, getRippleTarget, ms]
  );

  const onContextMenu = useCallback(
    (event_: React.MouseEvent<HTMLElement>) => {
      if (isTouchEventInProgress.current) {
        return;
      }

      const isCallbackResult = canHandlePress(event_);

      const rippleTarget =
        getRippleTarget?.(event_) ?? resolveDefaultRippleTarget(event_);

      if (!(isCallbackResult && rippleTarget)) {
        return;
      }

      applyRipple(rippleTarget, event_.clientX, event_.clientY);
      event_.preventDefault();
    },
    [canHandlePress, getRippleTarget]
  );

  return {
    onContextMenu: onContextMenu as unknown as React.MouseEventHandler<HTMLElement>,
    onTouchEnd: onTouchEnd as unknown as React.TouchEventHandler<HTMLElement>,
    onTouchMove: onTouchMove as unknown as React.TouchEventHandler<HTMLElement>,
    onTouchStart: onTouchStart as unknown as React.TouchEventHandler<HTMLElement>,
  };
};
