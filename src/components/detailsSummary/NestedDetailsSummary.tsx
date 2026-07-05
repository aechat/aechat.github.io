import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {Tooltip} from "antd";

import {useLongPress} from "../../hooks/useLongPress";

import {usePrevious} from "../../hooks/usePrevious";

import {useRipple} from "../../hooks/useRipple";

import {triggerDisclosureHaptic} from "../../utilities/haptics";

import {scrollToElement} from "../../utilities/scrollToAnchor";

import {getCurrentHashAnchor} from "../../utilities/urlHashUtilities";

import {CopyButton} from "../ui/CopyButton";

import {
  copyAnchorLink,
  isFirstAnchorOccurrence,
  normalizeAnchor,
  replaceUrlHash,
  throwDuplicateAnchorError,
} from "./anchorUtilities";

import {DETAILS_SUMMARY_DELAYS} from "./detailsSummaryUtilities";

import styles from "./NestedDetailsSummary.module.scss";

import {
  DetailsSummaryContext,
  NestedDetailsSummaryContext,
  ParentAnchorContext,
  SpoilerContext,
} from "./spoilerContexts";

interface NestedDetailsSummaryProperties {
  anchor?: string;
  children: ReactNode;
  modifierClass?: string;
  startOpen?: boolean;
  title: string;
}

const getClosedParents = (detailsElement: HTMLDetailsElement | null): string[] => {
  const parents: string[] = [];

  let current = detailsElement?.parentElement?.closest<HTMLDetailsElement>("details");

  while (current) {
    if (!current.open) {
      const summary = current.querySelector("summary");

      if (summary?.id) {
        parents.unshift(summary.id);
      }
    }

    current = current.parentElement?.closest<HTMLDetailsElement>("details");
  }

  return parents;
};

const NestedDetailsSummary: React.FC<NestedDetailsSummaryProperties> = ({
  anchor,
  children,
  modifierClass,
  startOpen = false,
  title,
}) => {
  const isInDetailsSummary = useContext(DetailsSummaryContext);

  const isParentOpen = useContext(SpoilerContext);

  const parentTextualAnchor = useContext(ParentAnchorContext);

  if (!isInDetailsSummary) {
    console.error(
      "Ошибка: NestedDetailsSummary должен быть вложен только в DetailsSummary."
    );

    return;
  }

  const [isOpen, setIsOpen] = useState(startOpen);

  const [displayAnchorId, setDisplayAnchorId] = useState("");

  const isOpenReference = useRef(isOpen);

  const shouldScrollAfterOpenReference = useRef(false);

  const lastExpandedHeightReference = useRef(0);

  const isClosingAnimationReference = useRef(false);

  const shouldDelayNextScrollReference = useRef(false);

  const shouldDelayClickScrollReference = useRef(false);

  const ripple = useRipple<HTMLElement>({haptic: false});

  const detailsReference = useRef<HTMLDetailsElement>(null);

  const contentWrapperReference = useRef<HTMLDivElement>(null);

  const innerContentReference = useRef<HTMLDivElement>(null);

  const scrollTimeoutReference = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const getExpandedHeight = useCallback(() => {
    const measuredWrapperHeight =
      contentWrapperReference.current?.getBoundingClientRect().height ?? 0;

    const measuredInnerHeight = innerContentReference.current?.scrollHeight ?? 0;

    return Math.max(
      lastExpandedHeightReference.current,
      measuredWrapperHeight,
      measuredInnerHeight,
      1
    );
  }, []);

  const handleSummaryClick = (event: React.MouseEvent) => {
    event.preventDefault();

    const nextIsOpen = !isOpen;

    if (nextIsOpen) {
      shouldDelayClickScrollReference.current = true;
    } else {
      lastExpandedHeightReference.current = getExpandedHeight();
    }

    isOpenReference.current = nextIsOpen;
    setIsOpen(nextIsOpen);
  };

  const updateDynamicStyles = useCallback(() => {
    const details = detailsReference.current;

    if (details?.open) {
      const contentWrapper = details.querySelector<HTMLElement>(
        `.${styles["details-nested-content-wrapper"]}`
      );

      const innerContent = contentWrapper?.querySelector<HTMLElement>(
        `.${styles["details-nested-section"]}`
      );

      if (contentWrapper && innerContent) {
        const measuredHeight = innerContent.scrollHeight;

        if (contentWrapper.style.maxHeight !== "none") {
          contentWrapper.style.maxHeight = `${measuredHeight}px`;
        }

        lastExpandedHeightReference.current = measuredHeight;
        details.style.marginBottom = `${details.offsetHeight * 0.01 + 10}px`;
      }
    }
  }, []);

  const updateUrlHash = useCallback((hash: string) => {
    replaceUrlHash(hash);
  }, []);

  const getParentAnchorData = useCallback(() => {
    const nestedDetails = detailsReference.current;

    if (!nestedDetails) {
      return {parentSummaryId: "", parentTextualAnchor: ""};
    }

    const parentDetails = nestedDetails.parentElement?.closest(
      'details:not([data-nested-details-summary="true"])'
    );

    if (!(parentDetails instanceof HTMLDetailsElement)) {
      return {parentSummaryId: "", parentTextualAnchor: ""};
    }

    const parentSummary = parentDetails.querySelector("summary");

    return {
      parentSummaryId: parentSummary instanceof HTMLElement ? parentSummary.id || "" : "",
      parentTextualAnchor: normalizeAnchor(parentDetails.dataset.anchor),
    };
  }, []);

  const normalizedAnchor = useMemo(() => normalizeAnchor(anchor), [anchor]);

  const fullAnchor = useMemo(() => {
    if (!normalizedAnchor) {
      return "";
    }

    return parentTextualAnchor
      ? `${parentTextualAnchor}-${normalizedAnchor}`
      : normalizedAnchor;
  }, [parentTextualAnchor, normalizedAnchor]);

  const getEffectiveAnchor = useCallback(() => {
    const generatedAnchor = displayAnchorId;

    if (!fullAnchor) {
      return generatedAnchor;
    }

    const detailsElement = detailsReference.current;

    if (
      !(detailsElement instanceof HTMLDetailsElement) ||
      !isFirstAnchorOccurrence(detailsElement, fullAnchor)
    ) {
      throwDuplicateAnchorError(fullAnchor, "NestedDetailsSummary");

      return generatedAnchor;
    }

    const {parentSummaryId} = getParentAnchorData();

    if (fullAnchor === parentTextualAnchor || fullAnchor === parentSummaryId) {
      throwDuplicateAnchorError(fullAnchor, "NestedDetailsSummary");

      return generatedAnchor;
    }

    return fullAnchor;
  }, [fullAnchor, displayAnchorId, parentTextualAnchor, getParentAnchorData]);

  const assignFallbackSummaryId = useCallback((summaryElement: HTMLElement): string => {
    if (summaryElement.id) {
      return summaryElement.id;
    }

    const nestedDetailsElement = detailsReference.current;

    const parentDetailsElement = nestedDetailsElement?.parentElement?.closest(
      'details:not([data-nested-details-summary="true"])'
    );

    if (!(parentDetailsElement instanceof HTMLDetailsElement)) {
      return "";
    }

    const parentSummaryElement = parentDetailsElement.querySelector("summary");

    const parentSummaryId =
      parentSummaryElement instanceof HTMLElement ? parentSummaryElement.id : "";

    if (!parentSummaryId) {
      return "";
    }

    const nestedSummaryElements = [
      ...parentDetailsElement.querySelectorAll<HTMLElement>(
        'details[data-nested-details-summary="true"] > summary'
      ),
    ];

    const nestedIndex = nestedSummaryElements.indexOf(summaryElement);

    if (nestedIndex === -1) {
      return "";
    }

    const fallbackId = `${parentSummaryId}.${nestedIndex + 1}`;

    summaryElement.id = fallbackId;

    return fallbackId;
  }, []);

  useEffect(() => {
    const detailsElement = detailsReference.current;

    if (
      detailsElement instanceof HTMLDetailsElement &&
      fullAnchor &&
      !isFirstAnchorOccurrence(detailsElement, fullAnchor)
    ) {
      throwDuplicateAnchorError(fullAnchor, "NestedDetailsSummary");
    }
  }, [fullAnchor]);

  const scrollToSummary = useCallback(() => {
    const summary = detailsReference.current?.querySelector(
      `.${styles["details-nested-summary"]}`
    );

    if (summary) {
      clearTimeout(scrollTimeoutReference.current);

      const shouldDelay =
        shouldDelayClickScrollReference.current || shouldDelayNextScrollReference.current;

      const delay = shouldDelay ? DETAILS_SUMMARY_DELAYS.ACTION_DELAY : 0;

      shouldDelayNextScrollReference.current = false;
      shouldDelayClickScrollReference.current = false;

      scrollTimeoutReference.current = setTimeout(() => {
        scrollToElement(summary);
      }, delay);
    }
  }, []);

  useEffect(
    () => () => {
      clearTimeout(scrollTimeoutReference.current);
    },
    []
  );

  const previousIsOpen = usePrevious(isOpen);

  useEffect(() => {
    triggerDisclosureHaptic(isOpen, previousIsOpen);
  }, [isOpen, previousIsOpen]);

  useEffect(() => {
    isOpenReference.current = isOpen;
  }, [isOpen]);

  useEffect(() => {
    const justOpened = isOpen && !previousIsOpen;

    if (justOpened) {
      if (shouldDelayClickScrollReference.current) {
        shouldScrollAfterOpenReference.current = false;
        scrollToSummary();

        return;
      }

      shouldScrollAfterOpenReference.current = true;
    }
  }, [isOpen, previousIsOpen, scrollToSummary]);

  useEffect(() => {
    if (globalThis.window === undefined || !displayAnchorId) {
      return;
    }

    const justOpened = isOpen && !previousIsOpen;

    const justClosed = !isOpen && previousIsOpen;

    const currentHash = getCurrentHashAnchor();

    const resolvedAnchor = getEffectiveAnchor();

    if (justOpened && resolvedAnchor && currentHash !== resolvedAnchor) {
      updateUrlHash(`#${resolvedAnchor}`);
    } else if (justClosed && currentHash === resolvedAnchor) {
      const {parentSummaryId, parentTextualAnchor} = getParentAnchorData();

      const parentAnchor = parentTextualAnchor || parentSummaryId;

      updateUrlHash(parentAnchor ? `#${parentAnchor}` : "");
    }
  }, [
    displayAnchorId,
    getParentAnchorData,
    getEffectiveAnchor,
    isOpen,
    previousIsOpen,
    updateUrlHash,
  ]);

  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const {id, skipScroll} = (
        event as CustomEvent<{
          id: string;
          skipScroll?: boolean;
        }>
      ).detail;

      const summaryElement = detailsReference.current?.querySelector(
        `.${styles["details-nested-summary"]}`
      );

      if (!(summaryElement instanceof HTMLElement)) {
        return;
      }

      const resolvedSummaryId =
        summaryElement.id || assignFallbackSummaryId(summaryElement);

      if (resolvedSummaryId !== id) {
        return;
      }

      const closedParents = getClosedParents(detailsReference.current);

      if (closedParents.length > 0) {
        for (const parentId of closedParents) {
          globalThis.dispatchEvent(
            new CustomEvent("open-spoiler-by-id", {
              detail: {id: parentId, skipScroll: true},
            })
          );
        }

        setTimeout(() => {
          globalThis.dispatchEvent(
            new CustomEvent("open-spoiler-by-id", {
              detail: {id, skipScroll},
            })
          );
        }, 150);

        return;
      }

      if (isOpenReference.current) {
        if (!skipScroll) {
          shouldDelayNextScrollReference.current = true;
          scrollToSummary();
        }
      } else {
        if (!skipScroll) {
          shouldScrollAfterOpenReference.current = true;
        }

        shouldDelayNextScrollReference.current = true;
        isOpenReference.current = true;
        setIsOpen(true);
      }
    };

    globalThis.addEventListener("open-spoiler-by-id", handleOpenEvent);

    return () => globalThis.removeEventListener("open-spoiler-by-id", handleOpenEvent);
  }, [assignFallbackSummaryId, scrollToSummary]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    let leaveTimeoutId: ReturnType<typeof setTimeout>;

    const nestedContentElement = detailsReference.current;

    const handleMouseEnter = () => {
      clearTimeout(leaveTimeoutId);

      timeoutId = setTimeout(() => {
        if (!isOpenReference.current) {
          return;
        }

        const summaryElement = detailsReference.current?.querySelector(
          `.${styles["details-nested-summary"]}`
        );

        const summaryId =
          summaryElement instanceof HTMLElement
            ? summaryElement.id || assignFallbackSummaryId(summaryElement)
            : "";

        const resolvedAnchor = getEffectiveAnchor();

        const anchorToSet = resolvedAnchor || summaryId;

        if (!anchorToSet || globalThis.window === undefined) {
          return;
        }

        if (getCurrentHashAnchor() !== anchorToSet) {
          updateUrlHash(`#${anchorToSet}`);
        }
      }, DETAILS_SUMMARY_DELAYS.HOVER_DELAY);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId);

      leaveTimeoutId = setTimeout(() => {
        const {parentSummaryId, parentTextualAnchor} = getParentAnchorData();

        const parentAnchor = parentTextualAnchor || parentSummaryId;

        const nestedDetails = detailsReference.current;

        const parentDetails = nestedDetails?.parentElement?.closest(
          'details:not([data-nested-details-summary="true"])'
        );

        if (
          parentAnchor &&
          parentDetails instanceof HTMLDetailsElement &&
          parentDetails.matches(":hover")
        ) {
          const summaryElement = detailsReference.current?.querySelector(
            `.${styles["details-nested-summary"]}`
          );

          const summaryId =
            summaryElement instanceof HTMLElement
              ? summaryElement.id || assignFallbackSummaryId(summaryElement)
              : "";

          const resolvedAnchor = getEffectiveAnchor();

          const activeAnchor = resolvedAnchor || summaryId;

          if (getCurrentHashAnchor() === activeAnchor) {
            updateUrlHash(`#${parentAnchor}`);
          }
        }
      }, DETAILS_SUMMARY_DELAYS.HOVER_DELAY);
    };

    if (nestedContentElement) {
      nestedContentElement.addEventListener("mouseenter", handleMouseEnter);
      nestedContentElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (nestedContentElement) {
        nestedContentElement.removeEventListener("mouseenter", handleMouseEnter);
        nestedContentElement.removeEventListener("mouseleave", handleMouseLeave);
      }

      clearTimeout(timeoutId);
      clearTimeout(leaveTimeoutId);
    };
  }, [assignFallbackSummaryId, getEffectiveAnchor, getParentAnchorData, updateUrlHash]);

  useEffect(() => {
    const details = detailsReference.current;

    const contentWrapper = contentWrapperReference.current;

    const innerContent = innerContentReference.current;

    if (!details || !contentWrapper || !innerContent) return;

    let openRetryAnimationFrame: number | undefined;

    let transitionAnimationFrame: number | undefined;

    let openFallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    let closeFallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    const flushPendingScroll = () => {
      if (!shouldScrollAfterOpenReference.current) {
        return;
      }

      shouldScrollAfterOpenReference.current = false;
      scrollToSummary();
    };

    const updateOpenHeight = (attempt = 0) => {
      const targetHeight = innerContent.scrollHeight;

      if (targetHeight > 0 || attempt >= 40) {
        contentWrapper.style.maxHeight = `${targetHeight}px`;
        lastExpandedHeightReference.current = targetHeight;
        updateDynamicStyles();

        return;
      }

      openRetryAnimationFrame = requestAnimationFrame(() => {
        updateOpenHeight(attempt + 1);
      });
    };

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== contentWrapper || event.propertyName !== "max-height") {
        return;
      }

      if (isClosingAnimationReference.current && isOpen) {
        return;
      }

      if (isOpen) {
        isClosingAnimationReference.current = false;
        lastExpandedHeightReference.current = innerContent.scrollHeight;
        contentWrapper.style.maxHeight = "none";
        flushPendingScroll();
        updateDynamicStyles();
      } else {
        isClosingAnimationReference.current = false;
        details.open = false;
      }

      if (openFallbackTimeout) {
        clearTimeout(openFallbackTimeout);
        openFallbackTimeout = undefined;
      }
    };

    contentWrapper.addEventListener("transitionend", onTransitionEnd);

    const resizeObserver = new ResizeObserver(() => {
      if (!isOpen) {
        return;
      }

      updateDynamicStyles();
    });

    resizeObserver.observe(innerContent);

    const onWindowResize = () => {
      if (!isOpen) {
        return;
      }

      updateDynamicStyles();
    };

    window.addEventListener("resize", onWindowResize);

    const duration = Number.parseFloat(
      getComputedStyle(contentWrapper).transitionDuration
    );

    const durationMs = Number.isNaN(duration) ? 350 : duration * 1000;

    if (isOpen) {
      isClosingAnimationReference.current = false;
      details.open = true;

      const currentHeight = contentWrapper.getBoundingClientRect().height;

      contentWrapper.style.maxHeight = `${currentHeight}px`;
      updateDynamicStyles();

      transitionAnimationFrame = requestAnimationFrame(() => {
        updateOpenHeight();
      });

      openFallbackTimeout = setTimeout(() => {
        if (!isOpenReference.current) {
          return;
        }

        contentWrapper.style.maxHeight = "none";
        flushPendingScroll();
        updateDynamicStyles();
      }, durationMs + 60);
    } else {
      isClosingAnimationReference.current = true;

      const currentHeight = getExpandedHeight();

      contentWrapper.style.maxHeight = `${currentHeight}px`;
      contentWrapper.getBoundingClientRect();
      details.style.marginBottom = "";

      transitionAnimationFrame = requestAnimationFrame(() => {
        contentWrapper.style.maxHeight = "0px";
      });

      closeFallbackTimeout = setTimeout(() => {
        if (!isOpen) {
          details.open = false;
        }
      }, durationMs + 50);
    }

    return () => {
      if (openRetryAnimationFrame !== undefined) {
        cancelAnimationFrame(openRetryAnimationFrame);
      }

      if (transitionAnimationFrame !== undefined) {
        cancelAnimationFrame(transitionAnimationFrame);
      }

      if (openFallbackTimeout) {
        clearTimeout(openFallbackTimeout);
      }

      if (closeFallbackTimeout) {
        clearTimeout(closeFallbackTimeout);
      }

      resizeObserver.disconnect();
      window.removeEventListener("resize", onWindowResize);
      contentWrapper.removeEventListener("transitionend", onTransitionEnd);
    };
  }, [getExpandedHeight, isOpen, isParentOpen, scrollToSummary, updateDynamicStyles]);

  useEffect(() => {
    const summaryElement = detailsReference.current?.querySelector<HTMLElement>(
      `.${styles["details-nested-summary"]}`
    );

    if (!summaryElement) {
      return;
    }

    const checkId = () => {
      const resolvedSummaryId =
        summaryElement.id || assignFallbackSummaryId(summaryElement);

      if (resolvedSummaryId) {
        setDisplayAnchorId(resolvedSummaryId);

        return true;
      }

      return false;
    };

    if (checkId()) {
      return;
    }

    const checkIdInterval = setInterval(() => {
      if (checkId()) {
        clearInterval(checkIdInterval);
      }
    }, 100);

    return () => clearInterval(checkIdInterval);
  }, [assignFallbackSummaryId]);

  const handleCopyAnchor = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.preventDefault();
      event.stopPropagation();

      (async () => {
        const summaryElement = detailsReference.current?.querySelector(
          `.${styles["details-nested-summary"]}`
        );

        const numericAnchor =
          summaryElement instanceof HTMLElement
            ? summaryElement.id || assignFallbackSummaryId(summaryElement)
            : "";

        const anchorToCopy = getEffectiveAnchor() || numericAnchor;

        await copyAnchorLink({
          anchorToCopy,
          successMessage: `Ссылка на вложенную статью ${numericAnchor || anchorToCopy} скопирована в буфер обмена`,
        });
      })();

      return true;
    },
    [assignFallbackSummaryId, getEffectiveAnchor]
  );

  const summaryLongPressProperties = useLongPress(handleCopyAnchor);

  return (
    <NestedDetailsSummaryContext.Provider value={true}>
      <details
        ref={detailsReference}
        className={`${styles["details-nested"]} ${modifierClass || ""} ${
          isOpen ? styles["is-open"] : ""
        }`.trim()}
        data-anchor={fullAnchor || undefined}
        data-nested-details-summary="true"
      >
        <summary
          className={styles["details-nested-summary"]}
          onClick={handleSummaryClick}
          onMouseDown={ripple.onMouseDown}
          {...summaryLongPressProperties}
        >
          <div className={styles["details-nested-summary-left"]}>
            <span className={styles["details-nested-summary-icon"]}>+</span>
            <div className={styles["details-nested-summary-text-content"]}>
              <h3>{title}</h3>
            </div>
          </div>
          <Tooltip title="Скопировать ссылку">
            <CopyButton
              disabled={!displayAnchorId}
              onClick={handleCopyAnchor}
            />
          </Tooltip>
        </summary>
        <div
          ref={contentWrapperReference}
          className={styles["details-nested-content-wrapper"]}
        >
          <section
            ref={innerContentReference}
            className={styles["details-nested-section"]}
          >
            {React.Children.count(children) === 0 ? (
              <div className="article-placeholder">
                <p>
                  Эта вложенная статья пока пустая: либо я ещё не дошёл до её написания,
                  либо написал такую дичь, что пришлось всё скрыть и отправить на
                  переделку.
                </p>
                <p>Следите за обновлениями.</p>
              </div>
            ) : (
              <ParentAnchorContext.Provider value={fullAnchor || parentTextualAnchor}>
                {children}
              </ParentAnchorContext.Provider>
            )}
          </section>
        </div>
      </details>
    </NestedDetailsSummaryContext.Provider>
  );
};

export default NestedDetailsSummary;
