import {useCallback, useEffect, useRef} from "react";

import {message} from "antd";

import {canCopyText} from "../utilities/copyUtilities";

import {hasActiveTextSelection} from "../utilities/selectionUtilities";

import {useLongPress} from "./useLongPress";

import {applyRipple} from "./useRipple";

export {canCopyText} from "../utilities/copyUtilities";

const CLICK_COPYABLE_SELECTOR =
  "code, mark.copy, mark.path, mark.code, mark.key, table mark.plugin, table mark.key";

interface WindowWithAutoCopyFlag extends Window {
  isAutoCopyEnabled?: boolean;
}

const getAutoCopyWindow = (): WindowWithAutoCopyFlag => {
  return globalThis as unknown as WindowWithAutoCopyFlag;
};

const isExcludedElement = (element: HTMLElement): boolean => {
  return (
    element.closest(".no-copy") !== null ||
    element.closest(".search-tags") !== null ||
    element.closest(".details-tags .tag") !== null ||
    (element.tagName === "MARK" && element.classList.length === 0)
  );
};

const resolveClickCopyTarget = (target: HTMLElement): HTMLElement | undefined => {
  if (hasActiveTextSelection()) {
    return undefined;
  }

  const copyTarget = target.closest(CLICK_COPYABLE_SELECTOR);

  return !(copyTarget instanceof HTMLElement) || isExcludedElement(copyTarget)
    ? undefined
    : copyTarget;
};

const resolveMarkOrCodeTarget = (
  element: Element | undefined
): HTMLElement | undefined => {
  const copyTarget = element?.closest("mark, code");

  return copyTarget instanceof HTMLElement ? copyTarget : undefined;
};

const resolveTouchElement = (event_: React.TouchEvent): HTMLElement | undefined => {
  const touch = event_.changedTouches[0];

  if (!touch) {
    return undefined;
  }

  const elementAtPoint = document.elementFromPoint(touch.clientX, touch.clientY);

  return elementAtPoint instanceof HTMLElement ? elementAtPoint : undefined;
};

const resolveEventCopyTarget = (
  event_: React.MouseEvent | React.TouchEvent
): HTMLElement | undefined => {
  if ("changedTouches" in event_) {
    return resolveMarkOrCodeTarget(resolveTouchElement(event_));
  }

  return resolveMarkOrCodeTarget(
    event_.target instanceof HTMLElement ? event_.target : undefined
  );
};

const createPointerTargetController = () => {
  let pointerTarget: HTMLElement | undefined;

  let pointerTargetPreviousCursor = "";

  const setPointerTarget = (target: HTMLElement | undefined) => {
    if (pointerTarget === target) {
      return;
    }

    if (pointerTarget) {
      pointerTarget.style.cursor = pointerTargetPreviousCursor;
    }

    pointerTarget = target;

    if (pointerTarget) {
      pointerTargetPreviousCursor = pointerTarget.style.cursor;
      pointerTarget.style.cursor = "pointer";
    } else {
      pointerTargetPreviousCursor = "";
    }
  };

  return {
    resetPointerTarget: () => setPointerTarget(undefined),
    setPointerTarget,
  };
};

export const useCopyToClipboard = () => {
  const isCopyingReference = useRef(false);

  const resolveCopyTarget = useCallback(
    (event_: React.MouseEvent | React.TouchEvent) => resolveEventCopyTarget(event_),
    []
  );

  const copyElementContent = useCallback(async (element: HTMLElement) => {
    if (
      hasActiveTextSelection() ||
      isExcludedElement(element) ||
      isCopyingReference.current
    ) {
      return;
    }

    isCopyingReference.current = true;

    const textToCopy = element.textContent ?? "";

    try {
      const isSuccess = await canCopyText(textToCopy);

      if (isSuccess) {
        message.success("Текст скопирован в буфер обмена");
      } else {
        message.error("Не удалось скопировать текст");
      }
    } finally {
      setTimeout(() => {
        isCopyingReference.current = false;
      }, 100);
    }
  }, []);

  const canHandleLongPress = useCallback(
    (event_: React.MouseEvent | React.TouchEvent) => {
      const target = resolveCopyTarget(event_);

      if (target) {
        void copyElementContent(target);

        return true;
      }

      return false;
    },
    [copyElementContent, resolveCopyTarget]
  );

  const longPressHandlers = useLongPress(canHandleLongPress, 500, {
    getRippleTarget: resolveCopyTarget,
  });

  useEffect(() => {
    const autoCopyWindow = getAutoCopyWindow();

    if (autoCopyWindow.isAutoCopyEnabled) {
      return;
    }

    const {onContextMenu, onTouchEnd, onTouchMove, onTouchStart} = longPressHandlers;

    const {resetPointerTarget, setPointerTarget} = createPointerTargetController();

    const onClickCopyable = (event_: MouseEvent) => {
      const target = event_.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const copyTarget = resolveClickCopyTarget(target);

      if (!(copyTarget instanceof HTMLElement)) {
        return;
      }

      applyRipple(copyTarget, event_.clientX, event_.clientY);
      void copyElementContent(copyTarget);
    };

    let lastHoveredElement: EventTarget | null | undefined;

    const onMouseMove = (event_: MouseEvent) => {
      const target = event_.target;

      if (target === lastHoveredElement) {
        return;
      }

      lastHoveredElement = target;

      if (!(target instanceof HTMLElement)) {
        resetPointerTarget();

        return;
      }

      setPointerTarget(resolveClickCopyTarget(target));
    };

    const onSelectionChange = () => {
      lastHoveredElement = undefined;

      if (hasActiveTextSelection()) {
        setPointerTarget(undefined);
      }
    };

    document.addEventListener(
      "contextmenu",
      onContextMenu as unknown as (event_: MouseEvent) => void
    );

    document.addEventListener(
      "touchstart",
      onTouchStart as unknown as (event_: TouchEvent) => void,
      {passive: true}
    );

    document.addEventListener(
      "touchmove",
      onTouchMove as unknown as (event_: TouchEvent) => void,
      {passive: true}
    );

    document.addEventListener(
      "touchend",
      onTouchEnd as unknown as (event_: TouchEvent) => void
    );

    document.addEventListener("click", onClickCopyable);
    document.addEventListener("mousemove", onMouseMove, {passive: true});
    document.addEventListener("selectionchange", onSelectionChange);
    autoCopyWindow.isAutoCopyEnabled = true;

    return () => {
      document.removeEventListener(
        "contextmenu",
        onContextMenu as unknown as (event_: MouseEvent) => void
      );

      document.removeEventListener(
        "touchstart",
        onTouchStart as unknown as (event_: TouchEvent) => void
      );

      document.removeEventListener(
        "touchmove",
        onTouchMove as unknown as (event_: TouchEvent) => void
      );

      document.removeEventListener(
        "touchend",
        onTouchEnd as unknown as (event_: TouchEvent) => void
      );

      document.removeEventListener("click", onClickCopyable);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("selectionchange", onSelectionChange);
      resetPointerTarget();
      autoCopyWindow.isAutoCopyEnabled = false;
    };
  }, [longPressHandlers, copyElementContent]);

  return {copyElementContent};
};
