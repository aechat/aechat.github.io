import React, {useEffect, useLayoutEffect, useState} from "react";

import LinearProgress from "@mui/material/LinearProgress";

import {useLocation} from "react-router-dom";

import {useLoading} from "../../context/LoadingContext";

import {getStoredNumber, setStoredNumber} from "../../utilities/localStorageUtilities";

import styles from "./LoadingAnimation.module.scss";

interface LoadingAnimationProperties {
  isLoading: boolean;
  isSuppressed?: boolean;
}

const LoadingAnimation: React.FC<LoadingAnimationProperties> = ({
  isLoading,
  isSuppressed = false,
}) => {
  const taglineText = "@aechat";

  const {canDismiss, setCanDismiss, setIsLoading} = useLoading();

  const location = useLocation();

  const getTitle = () => {
    const path = location.pathname;

    if (path.startsWith("/aefaq")) {
      return "aefaq";
    }

    if (path.startsWith("/prfaq")) {
      return "prfaq";
    }

    if (path.startsWith("/psfaq")) {
      return "psfaq";
    }

    if (path.startsWith("/rules")) {
      return "rules";
    }
  };

  const [isFontsLoaded, setIsFontsLoaded] = useState(false);

  useEffect(() => {
    let isDisposed = false;

    const markFontsLoaded = () => {
      if (!isDisposed) {
        setIsFontsLoaded(true);
      }
    };

    if (!("fonts" in document)) {
      markFontsLoaded();

      return () => {
        isDisposed = true;
      };
    }

    const logoFont = "italic 800 1em 'Red Hat Display'";

    const taglineFont = "italic 500 1em 'Red Hat Display'";

    void (async () => {
      try {
        await Promise.all([
          document.fonts.load(logoFont),
          document.fonts.load(taglineFont),
        ]);
      } catch {
        // Fallback to loaded state
      } finally {
        markFontsLoaded();
      }
    })();

    const fallbackTimer = setTimeout(markFontsLoaded, 2000);

    return () => {
      isDisposed = true;
      clearTimeout(fallbackTimer);
    };
  }, []);

  const [isShowIntro, setIsShowIntro] = useState(false);

  const [isShowProgressBar, setIsShowProgressBar] = useState(false);

  const [isTextAnimationFinished, setIsTextAnimationFinished] = useState(false);

  const [isIntroAnimationFinished, setIsIntroAnimationFinished] = useState(false);

  useLayoutEffect(() => {
    setIsLoading(true);
    setCanDismiss(!getTitle());
  }, [location.pathname, setIsLoading, setCanDismiss]);

  useEffect(() => {
    if (isSuppressed) {
      setIsShowProgressBar(false);
      setIsShowIntro(false);
      setCanDismiss(true);
      setIsTextAnimationFinished(false);
      setIsIntroAnimationFinished(false);

      return;
    }

    if (!isLoading) {
      return;
    }

    const timers: Array<ReturnType<typeof setTimeout>> = [];

    const startTimer = (callback: () => void, delay: number) => {
      const timer = setTimeout(callback, delay);

      timers.push(timer);

      return timer;
    };

    setIsTextAnimationFinished(false);
    setIsIntroAnimationFinished(false);

    startTimer(() => {
      setIsShowProgressBar(true);
    }, 50);

    const title = getTitle();

    const isTitleExists = Boolean(title);

    if (!isTitleExists) {
      setIsShowIntro(false);
      setCanDismiss(true);
      setIsIntroAnimationFinished(true);

      return () => {
        for (const timer of timers) {
          clearTimeout(timer);
        }
      };
    }

    const now = Date.now();

    const lastShown = getStoredNumber("introLastShown", 0);

    const shouldShowIntro = !lastShown || now - lastShown > 10 * 60 * 1000;

    if (!shouldShowIntro) {
      setIsShowIntro(false);
      setCanDismiss(false);
      setIsIntroAnimationFinished(true);
      startTimer(() => setCanDismiss(true), 500);
    } else if (isFontsLoaded) {
      setIsShowIntro(true);
      setCanDismiss(false);
    } else {
      setIsShowIntro(false);
      setCanDismiss(false);
      setIsIntroAnimationFinished(true);
    }

    return () => {
      for (const timer of timers) {
        clearTimeout(timer);
      }
    };
  }, [isLoading, location.pathname, isFontsLoaded, isSuppressed]);

  useEffect(() => {
    if (isLoading || (isShowIntro && !isTextAnimationFinished)) {
      return;
    }

    setCanDismiss(true);
  }, [isLoading, isShowIntro, isTextAnimationFinished]);

  useEffect(() => {
    if (!isShowIntro || !isTextAnimationFinished) {
      return;
    }

    setStoredNumber("introLastShown", Date.now());
    setCanDismiss(true);
  }, [isShowIntro, isTextAnimationFinished]);

  const title = getTitle();

  const isShow = !isSuppressed && (isLoading || !canDismiss);

  const [shouldRender, setShouldRender] = useState(isShow);

  const [isFadingOut, setIsFadingOut] = useState(false);

  const [isInitialOverlay, setIsInitialOverlay] = useState(isShow);

  useEffect(() => {
    if (isSuppressed) {
      setShouldRender(false);
      setIsFadingOut(false);

      return;
    }

    if (isShow) {
      setShouldRender(true);
      setIsFadingOut(false);
    } else {
      setIsFadingOut(true);
    }
  }, [isSuppressed, isShow]);

  const titleLength = title?.length ?? 0;

  const taglineLength = taglineText.length;

  const totalLength = titleLength + taglineLength;

  const hasTitle = titleLength > 0;

  const centerIndex = ((hasTitle ? titleLength : taglineLength) - 1) / 2;

  const maxDistance = Math.max(centerIndex, totalLength - 1 - centerIndex);

  const maxTitleDelay = 0.5 + maxDistance * 0.1 + 0.75;

  const maxTaglineDelay = 0.675 + maxDistance * 0.05 + 0.75;

  const introPhaseDuration = Math.max(maxTitleDelay, maxTaglineDelay) * 1000;

  const introAnimationDuration = introPhaseDuration + 500;

  useEffect(() => {
    if (!isShowIntro || isIntroAnimationFinished) {
      return;
    }

    const timer = setTimeout(() => {
      setIsIntroAnimationFinished(true);
    }, introPhaseDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [introPhaseDuration, location.pathname, isShowIntro, isIntroAnimationFinished]);

  useEffect(() => {
    if (!isShowIntro || isTextAnimationFinished) {
      return;
    }

    const timer = setTimeout(() => {
      setIsTextAnimationFinished(true);
    }, introAnimationDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [introAnimationDuration, location.pathname, isShowIntro, isTextAnimationFinished]);

  if (isSuppressed || !shouldRender) {
    return <></>;
  }

  const loopStepDelay = 0.06;

  const progressBarDelay = isShowProgressBar ? 0.25 : 0;

  const isProgressBarVisible =
    isShowProgressBar && isIntroAnimationFinished && (isLoading || !canDismiss);

  const overlayStateClass = (() => {
    if (isFadingOut) {
      return styles["fade-out"];
    }

    return isInitialOverlay ? styles["fade-initial"] : styles["fade-in"];
  })();

  return (
    <div
      className={`${styles["loading-animation-overlay"]} ${overlayStateClass}`}
      onAnimationEnd={(event) => {
        if (
          !isFadingOut ||
          event.target !== event.currentTarget ||
          !event.animationName.includes("fade-out")
        ) {
          return;
        }

        setShouldRender(false);
        setIsFadingOut(false);
        setIsInitialOverlay(false);
        setIsShowProgressBar(false);
      }}
    >
      <div className={styles["loading-content"]}>
        {isShowIntro && (
          <div className={styles["animated-text-container"]}>
            {title && (
              <div className={styles["animated-text-logo"]}>
                {[...title].map((char, index) => {
                  const globalIndex = index;

                  const distance = Math.abs(globalIndex - centerIndex);

                  const offset = globalIndex - centerIndex;

                  const delay = 0.5 + distance * 0.1;

                  const loopPhase = globalIndex * loopStepDelay;

                  const isFurthest = Math.abs(distance - maxDistance) < 0.01;

                  return (
                    <span
                      key={`title-${index}`}
                      className={styles["animated-text-letter-wrapper"]}
                      style={
                        {
                          "--char-offset": offset,
                          "--intro-delay": `${delay}s`,
                          "--loop-phase": `${loopPhase}s`,
                        } as React.CSSProperties
                      }
                    >
                      <span
                        className={styles["animated-text-letter"]}
                        onAnimationEnd={
                          isFurthest
                            ? (event) => {
                                if (event.animationName.includes("smooth-scale")) {
                                  setIsIntroAnimationFinished(true);
                                }
                              }
                            : undefined
                        }
                      >
                        {char}
                      </span>
                    </span>
                  );
                })}
              </div>
            )}
            <div className={styles["animated-text-tagline-wrapper"]}>
              <div className={styles["animated-text-tagline"]}>
                {[...taglineText].map((char, index) => {
                  const globalIndex = titleLength + index;

                  const distance = Math.abs(globalIndex - centerIndex);

                  const offset = globalIndex - centerIndex;

                  const delay = 0.675 + distance * 0.05;

                  const loopPhase = globalIndex * loopStepDelay;

                  const isFurthest = Math.abs(distance - maxDistance) < 0.01;

                  return (
                    <span
                      key={`tagline-${index}`}
                      className={styles["animated-text-letter-wrapper"]}
                      style={
                        {
                          "--char-offset": offset,
                          "--intro-delay": `${delay}s`,
                          "--loop-phase": `${loopPhase}s`,
                        } as React.CSSProperties
                      }
                    >
                      <span
                        className={styles["animated-text-letter"]}
                        onAnimationEnd={
                          isFurthest
                            ? (event) => {
                                if (event.animationName.includes("smooth-scale")) {
                                  setIsIntroAnimationFinished(true);
                                }
                              }
                            : undefined
                        }
                      >
                        {char}
                      </span>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div
          className={`${styles["progress-bar-container"]} ${
            isProgressBarVisible ? styles["visible"] : ""
          }`}
          style={{
            marginTop: isShowIntro ? "30px" : "0",
            transitionDelay: `${progressBarDelay}s`,
          }}
        >
          <LinearProgress
            color="inherit"
            style={{borderRadius: "4px", height: "2px", opacity: "0.5"}}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
