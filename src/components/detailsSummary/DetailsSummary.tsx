import React, {ReactNode, useCallback, useEffect, useMemo, useRef, useState} from "react";

import {message, Tooltip} from "antd";

import {useLongPress} from "../../hooks/useLongPress";

import {usePrevious} from "../../hooks/usePrevious";

import {useRipple} from "../../hooks/useRipple";

import {canCopyText} from "../../utilities/copyUtilities";

import {triggerDisclosureHaptic} from "../../utilities/haptics";

import {scrollToElement} from "../../utilities/scrollToAnchor";

import {formatNestedQuotes} from "../../utilities/stringUtilities";

import {
  getCurrentHashAnchor,
  replaceCurrentUrlHash,
} from "../../utilities/urlHashUtilities";

import {useTheme} from "../modals/ThemeChanger";

import {CopyButton} from "../ui/CopyButton";

import {
  canCopyAnchorLink,
  isElementHiddenByFilter,
  isFirstAnchorOccurrence,
  normalizeAnchor,
  replaceUrlHash,
  throwDuplicateAnchorError,
} from "./anchorUtilities";

import styles from "./DetailsSummary.module.scss";

import {parseTags, TagList} from "./DetailsSummaryTags";

import {
  assignAnchorIdIfMissing,
  DETAILS_SUMMARY_DELAYS,
  dispatchOpenSpoilerById,
  getSpoilerCloseStartHeight,
  getSpoilerMaxAnimatedHeight,
  getSpoilerTransitionDurationMs,
  getTopLevelSummaryElements,
  isHashForNestedInDetails,
  isHashForOpenNestedInDetails,
  processNestedSummaries,
  scheduleSpoilerStackingUpdate,
  setInstantSpoilerMaxHeight,
  SPOILER_ANCHOR_ASSIGNED_EVENT,
} from "./detailsSummaryUtilities";

import {
  DetailsSummaryContext,
  ParentAnchorContext,
  SpoilerContext,
} from "./spoilerContexts";

interface DetailsSummaryProperties {
  anchor: string;
  children: ReactNode;
  tag?: string;
  title: string;
}

const TASK_BUDGET_MS = 50;

interface SchedulerHost {
  scheduler?: {yield?: () => Promise<void>};
}

const yieldToMain = async (): Promise<void> => {
  const {scheduler: globalScheduler} = globalThis as SchedulerHost;

  if (typeof globalScheduler?.yield === "function") {
    await globalScheduler.yield();

    return;
  }

  await new Promise<void>((resolve) => setTimeout(resolve, 0));
};

interface AnchorTask {
  blockIndex: number;
  generatedAnchor: string;
  summary: HTMLElement;
  summaryIndex: number;
}

const processAnchorTask = (task: AnchorTask, currentHash: string) => {
  const {generatedAnchor, summary} = task;

  const summaryId = assignAnchorIdIfMissing(summary, generatedAnchor);

  const detailsElement = summary.closest("details");

  if (detailsElement instanceof HTMLElement && isElementHiddenByFilter(detailsElement)) {
    return;
  }

  const textualAnchor = normalizeAnchor(detailsElement?.dataset.anchor);

  const isTextualAnchorUsable =
    Boolean(currentHash) &&
    textualAnchor === currentHash &&
    detailsElement instanceof HTMLDetailsElement &&
    isFirstAnchorOccurrence(detailsElement, textualAnchor);

  if (
    currentHash &&
    (summaryId === currentHash ||
      (isTextualAnchorUsable && textualAnchor === currentHash))
  ) {
    const isAlreadyOpen =
      detailsElement instanceof HTMLDetailsElement && detailsElement.open;

    dispatchOpenSpoilerById(summaryId, {skipScroll: isAlreadyOpen});
  }

  if (detailsElement instanceof HTMLDetailsElement) {
    processNestedSummaries(
      detailsElement,
      generatedAnchor,
      currentHash,
      summaryId,
      textualAnchor
    );
  }
};

const anchorGenerationState: {
  activePromise: Promise<void> | undefined;
  hasPending: boolean;
} = {
  activePromise: undefined,
  hasPending: false,
};

const runAnchorGenerationPass = async () => {
  const containers = [...document.querySelectorAll(".article-content")];

  const currentHash = getCurrentHashAnchor();

  const tasks: AnchorTask[] = [];

  for (const [blockIndex, container] of containers.entries()) {
    const summaries = getTopLevelSummaryElements(container);

    for (const [summaryIndex, summary] of summaries.entries()) {
      const generatedAnchor = `${blockIndex + 1}.${summaryIndex + 1}`;

      tasks.push({blockIndex, generatedAnchor, summary, summaryIndex});
    }
  }

  let deadline = performance.now() + TASK_BUDGET_MS;

  for (const task of tasks) {
    processAnchorTask(task, currentHash);

    if (performance.now() < deadline) {
      continue;
    }

    await yieldToMain();
    deadline = performance.now() + TASK_BUDGET_MS;
  }

  dispatchEvent(new Event(SPOILER_ANCHOR_ASSIGNED_EVENT));
};

export const generateAnchorId = async () => {
  if (globalThis.window === undefined) return;

  if (anchorGenerationState.activePromise) {
    anchorGenerationState.hasPending = true;

    await anchorGenerationState.activePromise;

    return;
  }

  anchorGenerationState.activePromise = (async () => {
    do {
      anchorGenerationState.hasPending = false;
      await runAnchorGenerationPass();
    } while (anchorGenerationState.hasPending);
  })();

  try {
    await anchorGenerationState.activePromise;
  } finally {
    anchorGenerationState.activePromise = undefined;
  }
};

const DetailsSummary: React.FC<DetailsSummaryProperties> = ({
  anchor,
  children,
  tag,
  title,
}) => {
  const normalizedTag = useMemo(
    () => (tag ? parseTags(tag).join(", ") : undefined),
    [tag]
  );

  const {isSpoilerAnimationEnabled} = useTheme();

  const hasScrolledAfterOpening = useRef(false);

  const skipNextAutoScroll = useRef(false);

  const [isOpen, setIsOpen] = useState(false);

  const wasOpenReference = useRef(false);

  const [isCopyTooltipEnabled, setIsCopyTooltipEnabled] = useState(false);

  const previousIsOpen = usePrevious(isOpen);

  useEffect(() => {
    triggerDisclosureHaptic(isOpen, previousIsOpen);
  }, [isOpen, previousIsOpen]);

  const [displayAnchorId, setDisplayAnchorId] = useState("");

  const detailsReference = useRef<HTMLDetailsElement>(null);

  const sectionReference = useRef<HTMLElement>(null);

  const getEffectiveAnchor = useCallback(() => {
    const generatedAnchor = displayAnchorId;

    const textualAnchor = normalizeAnchor(anchor);

    if (!textualAnchor) {
      return generatedAnchor;
    }

    const detailsElement = detailsReference.current;

    if (
      !(detailsElement instanceof HTMLDetailsElement) ||
      !isFirstAnchorOccurrence(detailsElement, textualAnchor)
    ) {
      throwDuplicateAnchorError(textualAnchor, "DetailsSummary");

      return generatedAnchor;
    }

    return textualAnchor;
  }, [anchor, displayAnchorId]);

  useEffect(() => {
    if (!import.meta.env.DEV) {
      return;
    }

    const detailsElement = detailsReference.current;

    const textualAnchor = normalizeAnchor(anchor);

    if (
      textualAnchor &&
      detailsElement instanceof HTMLDetailsElement &&
      !isFirstAnchorOccurrence(detailsElement, textualAnchor)
    ) {
      throwDuplicateAnchorError(textualAnchor, "DetailsSummary");
    }
  }, [anchor]);

  const updateDynamicStyles = useCallback(() => {
    const details = detailsReference.current;

    if (!details?.open) {
      return;
    }

    const contentWrapper = details.querySelector<HTMLElement>(
      `.${styles["details-content-wrapper"]}`
    );

    const innerContent = contentWrapper?.querySelector<HTMLElement>(
      `.${styles["details-content-inner"]}`
    );

    if (!contentWrapper || !innerContent) {
      return;
    }

    const scrollHeight = innerContent.scrollHeight;

    const detailsHeight = details.offsetHeight;

    setInstantSpoilerMaxHeight(contentWrapper, `${scrollHeight}px`);
    details.style.marginBottom = `${detailsHeight * 0.01 + 10}px`;
  }, []);

  const updateUrlHash = useCallback((hash: string) => {
    replaceUrlHash(hash);
  }, []);

  const updateDimmingEffect = useCallback(() => {
    if (globalThis.window === undefined) return;

    const openDetailsElements = document.querySelectorAll(
      `.${styles["details-summary-root"]}[open]`
    );

    const hasAnyOpen = openDetailsElements.length > 0;

    document.body.classList.toggle("body-has-any-spoiler-open", hasAnyOpen);

    if (!hasAnyOpen) {
      document.body.classList.remove("has-open-details");

      return;
    }

    const viewportHeight = window.innerHeight;

    const isAnyInMainView = [...openDetailsElements].some((details) => {
      const rect = details.getBoundingClientRect();

      const isOutOfMainView =
        rect.bottom < viewportHeight * 0.15 || rect.top > viewportHeight * 0.9;

      return !isOutOfMainView;
    });

    document.body.classList.toggle("has-open-details", isAnyInMainView);
  }, []);

  const doScroll = useCallback(() => {
    const summary = detailsReference.current?.querySelector(
      `.${styles["details-summary"]}`
    );

    if (summary) {
      setTimeout(() => {
        scrollToElement(summary);
      }, DETAILS_SUMMARY_DELAYS.ACTION_DELAY);
    }
  }, []);

  useEffect(() => {
    if (isSpoilerAnimationEnabled || typeof window === "undefined") return;

    wasOpenReference.current = isOpen;

    const details = detailsReference.current;

    if (!details) return;

    const contentWrapper = details.querySelector<HTMLElement>(
      `.${styles["details-content-wrapper"]}`
    );

    if (!contentWrapper) return;

    const innerContent = contentWrapper.querySelector<HTMLElement>(
      `.${styles["details-content-inner"]}`
    );

    if (!innerContent) return;

    const resizeObserver = new ResizeObserver(updateDynamicStyles);

    window.addEventListener("resize", updateDynamicStyles);

    if (isOpen) {
      details.open = true;
      contentWrapper.style.maxHeight = `${innerContent.scrollHeight}px`;
      resizeObserver.observe(innerContent);
      updateDynamicStyles();
      updateDimmingEffect();
      setTimeout(updateDimmingEffect, 100);
    } else if (details.open) {
      resizeObserver.unobserve(innerContent);
      details.open = false;
      contentWrapper.style.maxHeight = "0px";
      details.style.marginBottom = "";
      updateDimmingEffect();
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateDynamicStyles);
    };
  }, [isOpen, isSpoilerAnimationEnabled, updateDimmingEffect, updateDynamicStyles]);

  useEffect(() => {
    if (!isSpoilerAnimationEnabled || typeof window === "undefined") return;

    const details = detailsReference.current;

    if (!details) return;

    const contentWrapper = details.querySelector<HTMLElement>(
      `.${styles["details-content-wrapper"]}`
    );

    if (!contentWrapper) return;

    const innerContent = contentWrapper.querySelector<HTMLElement>(
      `.${styles["details-content-inner"]}`
    );

    if (!innerContent) return;

    const wasOpen = wasOpenReference.current;

    wasOpenReference.current = isOpen;

    const isJustOpened = isOpen && !wasOpen;

    const isJustClosed = !isOpen && wasOpen;

    const preventScroll = (event: Event) => {
      event.preventDefault();
    };

    const scrollLockOptions: AddEventListenerOptions = {passive: false};

    const enableScroll = () => {
      window.removeEventListener("wheel", preventScroll, scrollLockOptions);
      removeEventListener("touchmove", preventScroll, scrollLockOptions);
    };

    const disableScroll = () => {
      window.addEventListener("wheel", preventScroll, scrollLockOptions);
      addEventListener("touchmove", preventScroll, scrollLockOptions);
    };

    const resizeObserver = new ResizeObserver(updateDynamicStyles);

    window.addEventListener("resize", updateDynamicStyles);

    let openAnimationFrame = 0;

    let openTransitionFrame = 0;

    let fallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    let dimmingTimeout: ReturnType<typeof setTimeout> | undefined;

    let isTransitionFinished = false;

    const finishTransition = () => {
      if (isTransitionFinished) {
        return;
      }

      isTransitionFinished = true;
      clearTimeout(fallbackTimeout);
      fallbackTimeout = undefined;

      if (isOpen) {
        resizeObserver.observe(innerContent);
        updateDynamicStyles();

        if (isJustOpened && !hasScrolledAfterOpening.current) {
          doScroll();
          hasScrolledAfterOpening.current = true;
        }
      } else {
        details.open = false;
        updateDimmingEffect();
        hasScrolledAfterOpening.current = false;
      }

      enableScroll();
    };

    const handleTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== contentWrapper || event.propertyName !== "max-height") {
        return;
      }

      finishTransition();
    };

    contentWrapper.addEventListener("transitionend", handleTransitionEnd);

    if (isJustOpened || (isJustClosed && details.open)) {
      disableScroll();
    }

    if (isOpen && !isJustOpened) {
      details.open = true;
      resizeObserver.observe(innerContent);
      updateDynamicStyles();
    } else if (isOpen) {
      const currentHeight = details.open
        ? contentWrapper.getBoundingClientRect().height
        : 0;

      details.open = true;
      setInstantSpoilerMaxHeight(contentWrapper, `${currentHeight}px`);
      updateDimmingEffect();
      dimmingTimeout = setTimeout(updateDimmingEffect, 100);

      openAnimationFrame = requestAnimationFrame(() => {
        const scrollHeight = innerContent.scrollHeight;

        const animatedHeight = getSpoilerMaxAnimatedHeight(details, scrollHeight);

        const durationMs = getSpoilerTransitionDurationMs();

        contentWrapper.style.setProperty(
          "--spoiler-transition-duration",
          `${durationMs}ms`
        );

        setInstantSpoilerMaxHeight(contentWrapper, `${currentHeight}px`);
        details.style.marginBottom = `${(details.offsetHeight + scrollHeight) * 0.01 + 10}px`;

        openTransitionFrame = requestAnimationFrame(() => {
          contentWrapper.style.maxHeight = `${animatedHeight}px`;
        });

        fallbackTimeout = setTimeout(finishTransition, durationMs + 60);
      });
    } else if (details.open) {
      resizeObserver.unobserve(innerContent);

      const renderedHeight =
        contentWrapper.getBoundingClientRect().height || innerContent.scrollHeight;

      const startHeight = getSpoilerCloseStartHeight(details, renderedHeight);

      const durationMs = getSpoilerTransitionDurationMs();

      contentWrapper.style.setProperty(
        "--spoiler-transition-duration",
        `${durationMs}ms`
      );

      setInstantSpoilerMaxHeight(contentWrapper, `${startHeight}px`);
      details.style.marginBottom = "";

      openAnimationFrame = requestAnimationFrame(() => {
        contentWrapper.style.maxHeight = "0px";
      });

      fallbackTimeout = setTimeout(finishTransition, durationMs + 60);
    }

    return () => {
      cancelAnimationFrame(openAnimationFrame);
      cancelAnimationFrame(openTransitionFrame);
      clearTimeout(fallbackTimeout);
      clearTimeout(dimmingTimeout);
      resizeObserver.disconnect();
      contentWrapper.removeEventListener("transitionend", handleTransitionEnd);
      window.removeEventListener("resize", updateDynamicStyles);
      enableScroll();
    };
  }, [
    isOpen,
    updateDimmingEffect,
    isSpoilerAnimationEnabled,
    doScroll,
    updateDynamicStyles,
  ]);

  useEffect(() => {
    const summaryId = displayAnchorId;

    if (!summaryId || globalThis.window === undefined) return;

    const isJustOpened = isOpen && !previousIsOpen;

    const justClosed = !isOpen && previousIsOpen;

    const currentHash = getCurrentHashAnchor();

    const resolvedAnchor = getEffectiveAnchor();

    const isCurrentHashNestedInDetails = isHashForOpenNestedInDetails(
      detailsReference.current,
      currentHash
    );

    const isCurrentHashAnyNestedInDetails = isHashForNestedInDetails(
      detailsReference.current,
      currentHash
    );

    if (
      isJustOpened &&
      resolvedAnchor &&
      currentHash !== resolvedAnchor &&
      !isCurrentHashAnyNestedInDetails
    ) {
      updateUrlHash(`#${resolvedAnchor}`);
    } else if (
      justClosed &&
      (currentHash === summaryId ||
        currentHash === resolvedAnchor ||
        isCurrentHashNestedInDetails)
    ) {
      updateUrlHash("");
    }
  }, [
    isOpen,
    previousIsOpen,
    displayAnchorId,
    updateUrlHash,
    anchor,
    getEffectiveAnchor,
  ]);

  useEffect(() => {
    const isJustOpened = isOpen && !previousIsOpen;

    if (!isJustOpened) {
      return;
    }

    if (skipNextAutoScroll.current) {
      skipNextAutoScroll.current = false;

      return;
    }

    doScroll();

    if (isSpoilerAnimationEnabled) {
      hasScrolledAfterOpening.current = true;
    }
  }, [isOpen, previousIsOpen, doScroll, isSpoilerAnimationEnabled]);

  useEffect(() => {
    if (!detailsReference.current) {
      return;
    }

    const summaryElement = detailsReference.current.querySelector(
      `.${styles["details-summary"]}`
    );

    if (!summaryElement) {
      return;
    }

    const shouldCheckId = () => {
      const currentSummaryId = summaryElement.id;

      if (currentSummaryId) {
        setDisplayAnchorId(currentSummaryId);

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
  }, []);

  useEffect(() => {
    const handleOpenEvent = (event: Event) => {
      const {id, skipScroll} = (
        event as CustomEvent<{
          id: string;
          skipScroll?: boolean;
        }>
      ).detail;

      const summaryElement = detailsReference.current?.querySelector(
        `.${styles["details-summary"]}`
      );

      if (!(summaryElement && summaryElement.id === id)) {
        return;
      }

      if (skipScroll) {
        skipNextAutoScroll.current = true;
        hasScrolledAfterOpening.current = true;
      }

      if (isOpen) {
        if (!skipScroll) {
          doScroll();
        }
      } else {
        setIsOpen(true);
      }
    };

    addEventListener("open-spoiler-by-id", handleOpenEvent);

    return () => removeEventListener("open-spoiler-by-id", handleOpenEvent);
  }, [isOpen, doScroll]);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    const globalWithState = globalThis as typeof globalThis & {
      detailsSummaryScrollFrameId?: number;
      detailsSummaryScrollListener?: () => void;
      detailsSummaryScrollSubscriberCount?: number;
    };

    const currentCount = globalWithState.detailsSummaryScrollSubscriberCount ?? 0;

    globalWithState.detailsSummaryScrollSubscriberCount = currentCount + 1;

    if (currentCount === 0) {
      const handleScroll = () => {
        if (
          globalWithState.detailsSummaryScrollFrameId !== undefined ||
          !document.body.classList.contains("body-has-any-spoiler-open")
        ) {
          return;
        }

        globalWithState.detailsSummaryScrollFrameId = requestAnimationFrame(() => {
          globalWithState.detailsSummaryScrollFrameId = undefined;
          updateDimmingEffect();
        });
      };

      globalWithState.detailsSummaryScrollListener = handleScroll;
      window.addEventListener("scroll", handleScroll, {passive: true});
    }

    return () => {
      const remainingCount =
        (globalWithState.detailsSummaryScrollSubscriberCount ?? 1) - 1;

      globalWithState.detailsSummaryScrollSubscriberCount = Math.max(0, remainingCount);

      if (!(remainingCount === 0 && globalWithState.detailsSummaryScrollListener)) {
        return;
      }

      if (globalWithState.detailsSummaryScrollFrameId !== undefined) {
        cancelAnimationFrame(globalWithState.detailsSummaryScrollFrameId);
        globalWithState.detailsSummaryScrollFrameId = undefined;
      }

      window.removeEventListener("scroll", globalWithState.detailsSummaryScrollListener);

      globalWithState.detailsSummaryScrollListener = undefined;
    };
  }, [updateDimmingEffect]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const section = sectionReference.current;

    const handleMouseEnter = () => {
      timeoutId = setTimeout(() => {
        const detailsElement = detailsReference.current;

        const summaryId = detailsElement?.querySelector(
          `.${styles["details-summary"]}`
        )?.id;

        const textualAnchor =
          detailsElement instanceof HTMLDetailsElement
            ? normalizeAnchor(detailsElement.dataset.anchor)
            : "";

        const isTextualAnchorUsable =
          detailsElement instanceof HTMLDetailsElement &&
          Boolean(textualAnchor) &&
          isFirstAnchorOccurrence(detailsElement, textualAnchor);

        const anchorForHash = isTextualAnchorUsable ? textualAnchor : summaryId;

        const currentHash = getCurrentHashAnchor();

        const isCurrentHashOpenNested = isHashForOpenNestedInDetails(
          detailsElement,
          currentHash
        );

        if (anchorForHash && !isCurrentHashOpenNested && typeof window !== "undefined") {
          replaceCurrentUrlHash(`#${anchorForHash}`);
        }
      }, DETAILS_SUMMARY_DELAYS.HOVER_DELAY);
    };

    const handleMouseLeave = () => {
      clearTimeout(timeoutId);
    };

    if (section) {
      section.addEventListener("mouseenter", handleMouseEnter);
      section.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener("mouseenter", handleMouseEnter);
        section.removeEventListener("mouseleave", handleMouseLeave);
      }

      clearTimeout(timeoutId);
    };
  }, []);

  const handleSummaryClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (detailsReference.current) setIsOpen(!detailsReference.current.open);
  };

  const canHandleCopyAnchor = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.preventDefault();
      event.stopPropagation();

      (async () => {
        const summaryElement = detailsReference.current?.querySelector(
          `.${styles["details-summary"]}`
        );

        const numericAnchor = summaryElement?.id ?? "";

        const anchorToCopy = getEffectiveAnchor() || numericAnchor;

        await canCopyAnchorLink({
          anchorToCopy,
          successMessage: `Ссылка на статью ${numericAnchor || anchorToCopy} скопирована в буфер обмена`,
        });
      })();

      return true;
    },
    [getEffectiveAnchor]
  );

  const summaryLongPressProperties = useLongPress(canHandleCopyAnchor);

  const rippleProperties = useRipple<HTMLElement>({haptic: false});

  const canHandleFlexibleLinkCopy = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      const target = event.target as HTMLElement;

      const link = target.closest<HTMLAnchorElement>(".flexible-links a");

      if (link) {
        (async () => {
          const isSuccess = await canCopyText(link.href);

          const displayName = link.textContent || link.href;

          if (isSuccess) {
            message.success(`Ссылка на «${formatNestedQuotes(displayName)}» скопирована`);
          } else {
            message.error("Не удалось скопировать ссылку");
          }
        })();

        return true;
      }

      return false;
    },
    []
  );

  const getFlexibleLinkRippleTarget = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      const target = event.target;

      if (!(target instanceof HTMLElement)) {
        return;
      }

      const link = target.closest(".flexible-links a");

      if (link instanceof HTMLElement) {
        return link;
      }
    },
    []
  );

  const sectionLongPressProperties = useLongPress(canHandleFlexibleLinkCopy, 500, {
    getRippleTarget: getFlexibleLinkRippleTarget,
  });

  useEffect(() => {
    scheduleSpoilerStackingUpdate(detailsReference.current);
  }, [children]);

  const headingText = (displayAnchorId ? `${displayAnchorId}. ` : "") + title;

  return (
    <>
      <details
        ref={detailsReference}
        className={`${styles["details-summary-root"]} ${isOpen ? styles["is-open"] : ""}`}
        data-anchor={anchor}
        data-tags={normalizedTag}
      >
        <summary
          className={styles["details-summary"]}
          onClick={handleSummaryClick}
          {...summaryLongPressProperties}
          {...rippleProperties}
        >
          <div className={styles["details-summary-left"]}>
            <span className={styles["details-summary-icon"]}>+</span>
            <div className={styles["details-summary-text-content"]}>
              <h2>{headingText}</h2>
              {normalizedTag && <TagList tags={normalizedTag} />}
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
        <div className={styles["details-content-wrapper"]}>
          <div className={styles["details-content-inner"]}>
            <SpoilerContext.Provider value={isOpen}>
              <DetailsSummaryContext.Provider value={true}>
                <ParentAnchorContext.Provider value={normalizeAnchor(anchor)}>
                  <section
                    ref={sectionReference}
                    className={`${styles["details-section"]} details-nested-section`}
                    {...sectionLongPressProperties}
                  >
                    {React.Children.count(children) === 0 ? (
                      <div className="article-placeholder">
                        <p>
                          Эта статья пока пустая: либо я ещё не дошёл до её написания,
                          либо написал такую дичь, что пришлось всё скрыть и отправить на
                          переделку.
                        </p>
                        <p>Следите за обновлениями.</p>
                      </div>
                    ) : (
                      children
                    )}
                  </section>
                </ParentAnchorContext.Provider>
              </DetailsSummaryContext.Provider>
            </SpoilerContext.Provider>
          </div>
        </div>
      </details>
    </>
  );
};

export default DetailsSummary;
