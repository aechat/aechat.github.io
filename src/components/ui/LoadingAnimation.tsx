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

    if (path.startsWith("/aefaq")) return "aefaq";

    if (path.startsWith("/prfaq")) return "prfaq";

    if (path.startsWith("/psfaq")) return "psfaq";

    if (path.startsWith("/rules")) return "rules";
  };

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    let isDisposed = false;

    const markFontsLoaded = () => {
      if (!isDisposed) {
        setFontsLoaded(true);
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

    const fontsLoading = Promise.all([
      document.fonts.load(logoFont),
      document.fonts.load(taglineFont),
    ]);

    fontsLoading.then(markFontsLoaded).catch(markFontsLoaded);

    const fallbackTimer = globalThis.setTimeout(markFontsLoaded, 2000);

    return () => {
      isDisposed = true;
      globalThis.clearTimeout(fallbackTimer);
    };
  }, []);

  const [showIntro, setShowIntro] = useState(false);

  const [showProgressBar, setShowProgressBar] = useState(false);

  const [textAnimationFinished, setTextAnimationFinished] = useState(false);

  const [introAnimationFinished, setIntroAnimationFinished] = useState(false);

  useLayoutEffect(() => {
    setIsLoading(true);
    setCanDismiss(!getTitle());
  }, [location.pathname, setIsLoading, setCanDismiss]);

  useEffect(() => {
    const timers: Array<ReturnType<typeof globalThis.setTimeout>> = [];

    const startTimer = (callback: () => void, delay: number) => {
      const timer = globalThis.setTimeout(callback, delay);

      timers.push(timer);

      return timer;
    };

    if (isSuppressed) {
      setShowProgressBar(false);
      setShowIntro(false);
      setCanDismiss(true);
      setTextAnimationFinished(false);
      setIntroAnimationFinished(false);

      return;
    }

    if (isLoading) {
      setTextAnimationFinished(false);
      setIntroAnimationFinished(false);

      startTimer(() => {
        setShowProgressBar(true);
      }, 50);

      const title = getTitle();

      const titleExists = !!title;

      if (!titleExists) {
        setShowIntro(false);
        setCanDismiss(true);
        setIntroAnimationFinished(true);

        return () => {
          for (const timer of timers) {
            globalThis.clearTimeout(timer);
          }
        };
      }

      const now = Date.now();

      const lastShown = getStoredNumber("introLastShown", 0);

      const shouldShowIntro = !lastShown || now - lastShown > 10 * 60 * 1000;

      if (!shouldShowIntro) {
        setShowIntro(false);
        setCanDismiss(false);
        setIntroAnimationFinished(true);
        startTimer(() => setCanDismiss(true), 500);
      } else if (fontsLoaded) {
        setShowIntro(true);
        setCanDismiss(false);
      } else {
        setShowIntro(false);
        setCanDismiss(false);
        setIntroAnimationFinished(true);
      }

      return () => {
        for (const timer of timers) {
          globalThis.clearTimeout(timer);
        }
      };
    }
  }, [isLoading, location.pathname, fontsLoaded, isSuppressed]);

  useEffect(() => {
    if (isLoading || (showIntro && !textAnimationFinished)) return;

    setCanDismiss(true);
  }, [isLoading, showIntro, textAnimationFinished]);

  useEffect(() => {
    if (!showIntro || !textAnimationFinished) return;

    setStoredNumber("introLastShown", Date.now());
    setCanDismiss(true);
  }, [showIntro, textAnimationFinished]);

  const title = getTitle();

  const show = !isSuppressed && (isLoading || !canDismiss);

  const [shouldRender, setShouldRender] = useState(show);

  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (isSuppressed) {
      setShouldRender(false);
      setIsFadingOut(false);

      return;
    }

    if (show) {
      setShouldRender(true);
      setIsFadingOut(false);
    } else {
      setIsFadingOut(true);
    }
  }, [isSuppressed, show]);

  let progressBarDelay = 0;

  if (showProgressBar) {
    progressBarDelay = 0.25;
  }

  const isProgressBarVisible =
    showProgressBar && introAnimationFinished && (isLoading || !canDismiss);

  const titleLength = title ? title.length : 0;

  const taglineLength = taglineText.length;

  const totalLength = titleLength + taglineLength;

  const hasTitle = titleLength > 0;

  const centerIndex = hasTitle ? (titleLength - 1) / 2 : (taglineLength - 1) / 2;

  const maxDistance = Math.max(centerIndex, totalLength - 1 - centerIndex);

  const loopStepDelay = 0.06;

  const maxTitleDelay = 0.5 + maxDistance * 0.1 + 0.75;

  const maxTaglineDelay = 0.675 + maxDistance * 0.05 + 0.75;

  const introPhaseDuration = Math.max(maxTitleDelay, maxTaglineDelay) * 1000;

  const introAnimationDuration = introPhaseDuration + 500;

  useEffect(() => {
    if (!showIntro || introAnimationFinished) return;

    const timer = globalThis.setTimeout(() => {
      setIntroAnimationFinished(true);
    }, introPhaseDuration);

    return () => {
      globalThis.clearTimeout(timer);
    };
  }, [introPhaseDuration, location.pathname, showIntro, introAnimationFinished]);

  useEffect(() => {
    if (!showIntro || textAnimationFinished) return;

    const timer = globalThis.setTimeout(() => {
      setTextAnimationFinished(true);
    }, introAnimationDuration);

    return () => {
      globalThis.clearTimeout(timer);
    };
  }, [introAnimationDuration, location.pathname, showIntro, textAnimationFinished]);

  if (isSuppressed || !shouldRender) return <></>;

  return (
    <div
      className={`${styles["loading-animation-overlay"]} ${
        isFadingOut ? styles["fade-out"] : styles["fade-in"]
      }`}
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
        setShowProgressBar(false);
      }}
    >
      <div className={styles["loading-content"]}>
        {showIntro && (
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
                                  setIntroAnimationFinished(true);
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
                                  setIntroAnimationFinished(true);
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
            marginTop: showIntro ? "30px" : "0",
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
