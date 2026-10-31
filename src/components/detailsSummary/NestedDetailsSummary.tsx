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
  canCopyAnchorLink,
  isFirstAnchorOccurrence,
  normalizeAnchor,
  replaceUrlHash,
  throwDuplicateAnchorError,
} from "./anchorUtilities";

import {
  DETAILS_SUMMARY_DELAYS,
  getSpoilerCloseStartHeight,
  getSpoilerMaxAnimatedHeight,
  getSpoilerTransitionDurationMs,
  setInstantSpoilerMaxHeight,
  SPOILER_ANCHOR_ASSIGNED_EVENT,
} from "./detailsSummaryUtilities";

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
  modifierClass = "",
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

  const [isCopyTooltipEnabled, setIsCopyTooltipEnabled] = useState(false);

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

    const isNextIsOpen = !isOpen;

    if (isNextIsOpen) {
      shouldDelayClickScrollReference.current = true;
    } else {
      lastExpandedHeightReference.current = getExpandedHeight();
    }

    isOpenReference.current = isNextIsOpen;
    setIsOpen(isNextIsOpen);
  };

  const updateDynamicStyles = useCallback(() => {
    const details = detailsReference.current;

    const contentWrapper = contentWrapperReference.current;

    const innerContent = innerContentReference.current;

    if (!contentWrapper || !innerContent || !details?.open) {
      return;
    }

    const measuredHeight = innerContent.scrollHeight;

    const detailsHeight = details.offsetHeight;

    if (contentWrapper.style.maxHeight !== "none") {
      setInstantSpoilerMaxHeight(contentWrapper, `${measuredHeight}px`);
    }

    lastExpandedHeightReference.current = measuredHeight;
    details.style.marginBottom = `${detailsHeight * 0.005 + 16}px`;
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
        ':scope details[data-nested-details-summary="true"] > summary'
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
    if (!import.meta.env.DEV) {
      return;
    }

    const detailsElement = detailsReference.current;

    if (
      fullAnchor &&
      detailsElement instanceof HTMLDetailsElement &&
      !isFirstAnchorOccurrence(detailsElement, fullAnchor)
    ) {
      throwDuplicateAnchorError(fullAnchor, "NestedDetailsSummary");
    }
  }, [fullAnchor]);

  const scrollToSummary = useCallback(() => {
    const summary = detailsReference.current?.querySelector(
      `.${styles["details-nested-summary"]}`
    );

    if (!summary) {
      return;
    }

    clearTimeout(scrollTimeoutReference.current);

    const shouldDelay =
      shouldDelayClickScrollReference.current || shouldDelayNextScrollReference.current;

    const delay = shouldDelay ? DETAILS_SUMMARY_DELAYS.ACTION_DELAY : 0;

    shouldDelayNextScrollReference.current = false;
    shouldDelayClickScrollReference.current = false;

    scrollTimeoutReference.current = setTimeout(() => {
      scrollToElement(summary);
    }, delay);
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
    const isJustOpened = isOpen && !previousIsOpen;

    if (!isJustOpened) {
      return;
    }

    if (shouldDelayClickScrollReference.current) {
      shouldScrollAfterOpenReference.current = false;
      scrollToSummary();

      return;
    }

    shouldScrollAfterOpenReference.current = true;
  }, [isOpen, previousIsOpen, scrollToSummary]);

  useEffect(() => {
    if (!displayAnchorId || typeof window === "undefined") {
      return;
    }

    const isJustOpened = isOpen && !previousIsOpen;

    const justClosed = !isOpen && previousIsOpen;

    const currentHash = getCurrentHashAnchor();

    const resolvedAnchor = getEffectiveAnchor();

    if (isJustOpened && resolvedAnchor && currentHash !== resolvedAnchor) {
      updateUrlHash(`#${resolvedAnchor}`);
    } else if (justClosed && currentHash === resolvedAnchor) {
      const parentAnchorData = getParentAnchorData();

      const parentAnchor =
        parentAnchorData.parentTextualAnchor || parentAnchorData.parentSummaryId;

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
          dispatchEvent(
            new CustomEvent("open-spoiler-by-id", {
              detail: {id: parentId, skipScroll: true},
            })
          );
        }

        setTimeout(() => {
          dispatchEvent(
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

    addEventListener("open-spoiler-by-id", handleOpenEvent);

    return () => removeEventListener("open-spoiler-by-id", handleOpenEvent);
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
        const parentAnchorData = getParentAnchorData();

        const parentAnchor =
          parentAnchorData.parentTextualAnchor || parentAnchorData.parentSummaryId;

        const nestedDetails = detailsReference.current;

        const parentDetails = nestedDetails?.parentElement?.closest(
          'details:not([data-nested-details-summary="true"])'
        );

        if (
          !parentAnchor ||
          !(parentDetails instanceof HTMLDetailsElement) ||
          !parentDetails.matches(":hover")
        ) {
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

        const activeAnchor = resolvedAnchor || summaryId;

        if (getCurrentHashAnchor() === activeAnchor) {
          updateUrlHash(`#${parentAnchor}`);
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

    if (!isOpen && !details.open) {
      contentWrapper.style.maxHeight = "0px";
      details.style.marginBottom = "";

      return;
    }

    let openRetryAnimationFrame: number | undefined;

    let transitionAnimationFrame: number | undefined;

    let openFallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    let closeFallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    let resizeObserver: ResizeObserver | undefined;

    const flushPendingScroll = () => {
      if (!shouldScrollAfterOpenReference.current) {
        return;
      }

      shouldScrollAfterOpenReference.current = false;
      scrollToSummary();
    };

    const finalizeOpen = () => {
      if (!isOpenReference.current) {
        return;
      }

      lastExpandedHeightReference.current = innerContent.scrollHeight;
      setInstantSpoilerMaxHeight(contentWrapper, "none");
      resizeObserver?.observe(innerContent);
      flushPendingScroll();
      updateDynamicStyles();
    };

    const updateOpenHeight = (attempt = 0) => {
      const targetHeight = innerContent.scrollHeight;

      if (targetHeight > 0 || attempt >= 40) {
        const animatedHeight = getSpoilerMaxAnimatedHeight(details, targetHeight);

        const openDurationMs = getSpoilerTransitionDurationMs();

        contentWrapper.style.setProperty(
          "--spoiler-transition-duration",
          `${openDurationMs}ms`
        );

        lastExpandedHeightReference.current = targetHeight;
        details.style.marginBottom = `${(details.offsetHeight + targetHeight) * 0.005 + 16}px`;

        openRetryAnimationFrame = requestAnimationFrame(() => {
          contentWrapper.style.maxHeight = `${animatedHeight}px`;
        });

        clearTimeout(openFallbackTimeout);

        openFallbackTimeout = setTimeout(() => {
          finalizeOpen();
        }, openDurationMs + 60);

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

      if (isOpen && isClosingAnimationReference.current) {
        return;
      }

      isClosingAnimationReference.current = false;

      if (isOpen) {
        finalizeOpen();
      } else {
        details.open = false;
      }

      if (!openFallbackTimeout) {
        return;
      }

      clearTimeout(openFallbackTimeout);
      openFallbackTimeout = undefined;
    };

    contentWrapper.addEventListener("transitionend", onTransitionEnd);

    const onWindowResize = () => {
      if (!isOpen) {
        return;
      }

      updateDynamicStyles();
    };

    if (isOpen) {
      resizeObserver = new ResizeObserver(() => {
        if (!isOpenReference.current) {
          return;
        }

        updateDynamicStyles();
      });

      window.addEventListener("resize", onWindowResize);
    }

    const duration = Number(
      getComputedStyle(contentWrapper).transitionDuration.replace("s", "")
    );

    const durationMs = Number.isNaN(duration) ? 350 : duration * 1000;

    if (isOpen) {
      isClosingAnimationReference.current = false;

      const currentHeight = details.open
        ? contentWrapper.getBoundingClientRect().height
        : 0;

      details.open = true;

      if (durationMs <= 0) {
        finalizeOpen();
      } else {
        setInstantSpoilerMaxHeight(contentWrapper, `${currentHeight}px`);

        transitionAnimationFrame = requestAnimationFrame(() => {
          updateOpenHeight();
        });
      }
    } else if (details.open) {
      isClosingAnimationReference.current = true;

      if (durationMs <= 0) {
        details.open = false;
        setInstantSpoilerMaxHeight(contentWrapper, "0px");
        details.style.marginBottom = "";
      } else {
        const currentHeight = getSpoilerCloseStartHeight(details, getExpandedHeight());

        const closeDurationMs = getSpoilerTransitionDurationMs();

        contentWrapper.style.setProperty(
          "--spoiler-transition-duration",
          `${closeDurationMs}ms`
        );

        setInstantSpoilerMaxHeight(contentWrapper, `${currentHeight}px`);
        details.style.marginBottom = "";

        transitionAnimationFrame = requestAnimationFrame(() => {
          contentWrapper.style.maxHeight = "0px";
        });

        closeFallbackTimeout = setTimeout(() => {
          if (!isOpenReference.current) {
            details.open = false;
          }
        }, closeDurationMs + 50);
      }
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

      resizeObserver?.disconnect();
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

    const shouldCheckId = () => {
      const resolvedSummaryId =
        summaryElement.id || assignFallbackSummaryId(summaryElement);

      if (resolvedSummaryId) {
        setDisplayAnchorId(resolvedSummaryId);

        return true;
      }

      return false;
    };

    if (shouldCheckId()) {
      return;
    }

    const handleAnchorAssigned = () => {
      if (shouldCheckId()) {
        removeEventListener(SPOILER_ANCHOR_ASSIGNED_EVENT, handleAnchorAssigned);
      }
    };

    addEventListener(SPOILER_ANCHOR_ASSIGNED_EVENT, handleAnchorAssigned);

    return () => {
      removeEventListener(SPOILER_ANCHOR_ASSIGNED_EVENT, handleAnchorAssigned);
    };
  }, [assignFallbackSummaryId]);

  const canHandleCopyAnchor = useCallback(
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

        await canCopyAnchorLink({
          anchorToCopy,
          successMessage: `Ссылка на вложенную статью ${numericAnchor || anchorToCopy} скопирована в буфер обмена`,
        });
      })();

      return true;
    },
    [assignFallbackSummaryId, getEffectiveAnchor]
  );

  const summaryLongPressProperties = useLongPress(canHandleCopyAnchor);

  return (
    <NestedDetailsSummaryContext.Provider value={true}>
      <details
        ref={detailsReference}
        className={`${styles["details-nested"]} ${modifierClass} ${
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
          {isCopyTooltipEnabled ? (
            <Tooltip
              defaultOpen
              title="Скопировать ссылку"
            >
              <CopyButton
                isDisabled={!displayAnchorId}
                onClick={canHandleCopyAnchor}
              />
            </Tooltip>
          ) : (
            <span
              onFocus={() => setIsCopyTooltipEnabled(true)}
              onMouseEnter={() => setIsCopyTooltipEnabled(true)}
            >
              <CopyButton
                isDisabled={!displayAnchorId}
                onClick={canHandleCopyAnchor}
              />
            </span>
          )}
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
