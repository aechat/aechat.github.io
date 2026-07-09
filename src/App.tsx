import React, {lazy, Suspense, useEffect, useRef, useState} from "react";

import {ConfigProvider, message, Modal} from "antd";

import {AnimatePresence} from "framer-motion";

import {Navigate, Route, Routes, useLocation} from "react-router-dom";

import Snowfall from "react-snowfall";

import modalStyles from "./components/modals/Modal.module.scss";

import {ThemeProvider, useTheme} from "./components/modals/ThemeChanger";

import GroupedCornersManager from "./components/ui/GroupedCornersManager";

import LoadingAnimation from "./components/ui/LoadingAnimation";

import {LinkHandlerProvider, useLinkHandler} from "./context/LinkHandlerContext";

import LoadingContext from "./context/LoadingContext";

import {useAprilFoolsReplace} from "./hooks/useAprilFoolsReplace";

import useDynamicFavicon from "./hooks/useDynamicFavicon";

import {useRipple} from "./hooks/useRipple";

import getAntTheme from "./styles/antTheme";

import {isWebKitBrowser} from "./utilities/browserDetection";

import {copyText} from "./utilities/copyUtilities";

import {
  disposeHaptics,
  setupHapticMessageFeedback,
  triggerHaptic,
  withSelectionHaptic,
} from "./utilities/haptics";

import {
  getStoredBoolean,
  getStoredNumber,
  isLocalStorageAvailable,
  setStoredBoolean,
  setStoredNumber,
} from "./utilities/localStorageUtilities";

import faviconSvg from "/icons/favicon.svg?raw";

import aefaqSvg from "/icons/aefaq.svg?raw";

import prfaqSvg from "/icons/prfaq.svg?raw";

import psfaqSvg from "/icons/psfaq.svg?raw";

const Links = lazy(() => import("./pages/LinksPage"));

const ChatRules = lazy(() => import("./pages/ChatRules"));

const RegFilePage = lazy(() => import("./pages/RegFilePage"));

const NotFound = lazy(() => import("./pages/NotFound"));

const AeFaqPage = lazy(() => import("./pages/AeFaqPage"));

const PrFaqPage = lazy(() => import("./pages/PrFaqPage"));

const PsFaqPage = lazy(() => import("./pages/PsFaqPage"));

const SAFARI_WARNING_INTERVAL = 60 * 60 * 1000;

const shouldShowStoredWarning = (
  dismissedKey: string,
  lastShownKey: string,
  interval: number,
  showWhenStorageUnavailable: boolean
): boolean => {
  if (!isLocalStorageAvailable()) {
    return showWhenStorageUnavailable;
  }

  if (getStoredBoolean(dismissedKey, false)) {
    return false;
  }

  const lastShown = getStoredNumber(lastShownKey, 0, (value) =>
    Number.parseInt(value, 10)
  );

  return !lastShown || Date.now() - lastShown >= interval;
};

const updateStoredWarningState = (
  dontShowAgain: boolean,
  dismissedKey: string,
  lastShownKey: string
): void => {
  if (dontShowAgain) {
    setStoredBoolean(dismissedKey, true);

    return;
  }

  setStoredNumber(lastShownKey, Date.now());
};

const FilesRedirect = () => {
  useEffect(() => {
    document.title = "files@aechat";
    globalThis.location.href = "https://github.com/aechat/links/tree/main/public/files";
  }, []);

  return <></>;
};

const RedirectHtml = () => {
  const location = useLocation();

  const path = location.pathname;

  if (path.endsWith(".html")) {
    return (
      <Navigate
        replace
        to={path.replace(/\.html$/, "")}
      />
    );
  }

  return <></>;
};

const SafariWarningModal = ({
  onClose,
  open,
}: {
  open: boolean;
  onClose: (dontShowAgain: boolean) => void;
}) => {
  const [dontShowAgain, setDontShowAgain] = React.useState(false);

  const ripple = useRipple<HTMLButtonElement>({haptic: "soft"});

  const handleClose = () => {
    onClose(dontShowAgain);
  };

  const handleDontShowAgainChange = withSelectionHaptic(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDontShowAgain(event.target.checked);
    }
  );

  return (
    <Modal
      centered
      closable={false}
      footer={<></>}
      open={open}
      title={undefined}
      width={450}
      zIndex={9999}
    >
      <div className={modalStyles["modal"]}>
        <div className={modalStyles["modal-header"]}>
          <div className={modalStyles["modal-header-title"]}>
            ⚠ Предупреждение для Safari
          </div>
        </div>
        <div
          className={`${modalStyles["modal-content"]} ${modalStyles["modal-content--error"]}`}
        >
          <div className={modalStyles["modal-text-balance"]}>
            <p>
              В браузере <mark className="app">Safari</mark> при чтении некоторых статей
              данная страница может упасть в ошибку{" "}
              <mark className="danger">«На этой странице произошла ошибка»</mark> из-за
              переполнения памяти.
            </p>
            <p>
              Во избежание проблем рекомендуется открывать данную страницу с Mac или ПК
              через <mark className="app">Chrome</mark> или{" "}
              <mark className="app">Firefox</mark>. Вы можете продолжить работу с сайтом,
              закрыв данное окно.
            </p>
          </div>
          <div className="flexible-links">
            <button
              onClick={handleClose}
              onMouseDown={ripple.onMouseDown}
            >
              Продолжить
            </button>
          </div>
          <label className="warning-dismiss-option">
            <input
              checked={dontShowAgain}
              type="checkbox"
              onChange={handleDontShowAgainChange}
            />
            Претензий не имею, больше не показывать
          </label>
        </div>
      </div>
    </Modal>
  );
};

const ErrorFallback = ({error}: {error: Error}) => {
  const ripple = useRipple<HTMLButtonElement>();

  useEffect(() => {
    triggerHaptic("error");
  }, []);

  const isDynamicImportError =
    error.message.includes("dynamically imported module") ||
    (error.cause &&
      typeof error.cause === "object" &&
      "message" in error.cause &&
      (error.cause as Error).message.includes("dynamically imported module"));

  const isCssPreloadError =
    error.message.includes("unable to preload css for /assets/") ||
    (error.cause &&
      typeof error.cause === "object" &&
      "message" in error.cause &&
      (error.cause as Error).message.includes("unable to preload css for /assets/"));

  const isNewVersionError = isDynamicImportError || isCssPreloadError;

  const isTimeoutError = error.message.includes("timed out");

  return (
    <div className="error-container">
      <div className="error-backtitle">Ошибка</div>
      <div className={`${modalStyles["modal"]} error-modal`}>
        <div className={modalStyles["modal-header"]}>
          <div className={modalStyles["modal-header-title"]}>
            {(() => {
              let errorTitle = "Произошла ошибка";

              if (isNewVersionError) {
                errorTitle = "Доступна новая версия сайта";
              } else if (isTimeoutError) {
                errorTitle = "Загрузка страницы заняла слишком много времени";
              }

              return errorTitle;
            })()}
          </div>
        </div>
        <div className={`${modalStyles["modal-content"]}`}>
          <div className={modalStyles["modal-text-balance"]}>
            <p>
              {(() => {
                let errorMessage = "Всякое бывает, попробуйте перезагрузить страницу.";

                if (isNewVersionError) {
                  errorMessage =
                    "Обновите страницу, чтобы получить доступ к последним изменениям.";
                } else if (isTimeoutError) {
                  errorMessage =
                    "Пожалуйста, проверьте ваше интернет-соединение и попробуйте обновить страницу.";
                }

                return errorMessage;
              })()}
            </p>
            {!isNewVersionError && (
              <p>
                <span
                  className="error-message-copyable"
                  onClick={async () => {
                    const success = await copyText(error.message);

                    if (success) {
                      message.success("Текст ошибки скопирован в буфер обмена");
                    } else {
                      message.error("Не удалось скопировать текст ошибки");
                    }
                  }}
                >
                  {error.message}
                </span>
              </p>
            )}
            <div className="flexible-links">
              {isNewVersionError === false && (
                <button
                  onClick={() => {
                    if (globalThis.window !== undefined)
                      globalThis.window.location.href = "/";
                  }}
                  onMouseDown={ripple.onMouseDown}
                >
                  На главную
                </button>
              )}
              <button
                onClick={() => {
                  if (globalThis.window !== undefined)
                    globalThis.window.location.reload();
                }}
                onMouseDown={ripple.onMouseDown}
              >
                Обновить страницу
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

class ErrorBoundary extends React.Component<
  {children: React.ReactNode; onError?: (error: Error) => void},
  {hasError: boolean; error: Error | undefined}
> {
  constructor(properties: {children: React.ReactNode; onError?: (error: Error) => void}) {
    super(properties);
    this.state = {error: undefined, hasError: false};
  }

  static getDerivedStateFromError(error: Error) {
    return {error, hasError: true};
  }

  componentDidCatch(error: Error) {
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return <ErrorFallback error={this.state.error} />;
    }

    return <>{this.props.children}</>;
  }
}

const SnowfallManager = () => {
  const {accentHue, isSnowfallEnabled, saturateRatio, theme} = useTheme();

  const isSystemDark =
    globalThis.window?.matchMedia &&
    globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDarkMode = theme === "dark" || (theme === "system" && isSystemDark);

  const lightness = isDarkMode ? "75%" : "50%";

  const color = `hsl(${accentHue}, ${saturateRatio * 50}%, ${lightness})`;

  return isSnowfallEnabled ? (
    <Snowfall
      color={color}
      opacity={[0.25, 0.5]}
      radius={[0.5, 1.5]}
      speed={[0.25, 1]}
      style={{
        height: "100vh",
        position: "fixed",
        width: "100vw",
      }}
      wind={[0, 1]}
    />
  ) : (
    <></>
  );
};

const AppInner = () => {
  const {accentHue, saturateRatio, theme} = useTheme();

  const isSystemDark =
    globalThis.window?.matchMedia &&
    globalThis.window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDarkMode = theme === "dark" || (theme === "system" && isSystemDark);

  return (
    <ConfigProvider theme={getAntTheme(isDarkMode, accentHue, saturateRatio)}>
      <LinkHandlerProvider>
        <AppContent />
      </LinkHandlerProvider>
    </ConfigProvider>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
};

const AppContent = () => {
  const location = useLocation();

  const {handleLinkClick} = useLinkHandler();

  useAprilFoolsReplace();

  useEffect(() => {
    setupHapticMessageFeedback();

    return () => {
      disposeHaptics();
    };
  }, []);

  const [svgContent, setSvgContent] = useState(faviconSvg);

  useEffect(() => {
    const path = location.pathname;

    if (path.startsWith("/aefaq")) {
      setSvgContent(aefaqSvg);
    } else if (path.startsWith("/prfaq")) {
      setSvgContent(prfaqSvg);
    } else if (path.startsWith("/psfaq")) {
      setSvgContent(psfaqSvg);
    } else {
      setSvgContent(faviconSvg);
    }
  }, [location.pathname]);

  useDynamicFavicon(svgContent);

  const [isSafariWarningOpen, setIsSafariWarningOpen] = useState(false);

  useEffect(() => {
    if (isSafariWarningOpen) {
      triggerHaptic("warning");
    }
  }, [isSafariWarningOpen]);

  const [isAppReady, setIsAppReady] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  const [canDismiss, setCanDismiss] = useState(true);

  const [loadingError, setLoadingError] = useState<Error | undefined>();

  const [boundaryError, setBoundaryError] = useState<Error | undefined>();

  const previousPathname = useRef(location.pathname);

  if (previousPathname.current !== location.pathname) {
    previousPathname.current = location.pathname;
    setIsLoading(true);
    setCanDismiss(false);
  }

  useEffect(() => {
    if (!isLoading || boundaryError || !isAppReady || isSafariWarningOpen) {
      return;
    }

    const safetyTimer = setTimeout(() => {
      setLoadingError((previousError) => {
        if (previousError || boundaryError) {
          return previousError;
        }

        return new Error("Page loading timed out after 60 seconds.");
      });
    }, 60_000);

    return () => clearTimeout(safetyTimer);
  }, [boundaryError, isAppReady, isLoading, isSafariWarningOpen]);

  useEffect(() => {
    setLoadingError(undefined);
    setBoundaryError(undefined);
  }, [location.pathname]);

  useEffect(() => {
    if (globalThis.window === undefined) return;

    let shouldShowWarning = false;

    const isWebKit = isWebKitBrowser();

    const path = location.pathname;

    const isFaqPage =
      path.startsWith("/aefaq") || path.startsWith("/prfaq") || path.startsWith("/psfaq");

    if (isWebKit && isFaqPage) {
      shouldShowWarning = shouldShowStoredWarning(
        "safariWarningDismissed",
        "safariWarningLastShown",
        SAFARI_WARNING_INTERVAL,
        false
      );
    }

    if (shouldShowWarning) {
      setIsAppReady(false);
      setIsSafariWarningOpen(true);
    } else {
      setIsSafariWarningOpen(false);
      setIsAppReady(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    const path = globalThis.window.location.pathname;

    if (path.endsWith("/index.html")) {
      globalThis.window.location.replace("/");
    } else if (path.endsWith(".html")) {
      globalThis.window.location.replace(path.replace(/\.html$/, ""));
    }
  }, [location]);

  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    const handleAnchorMouseDown = (event: MouseEvent) => {
      if (event.button !== 0) {
        return;
      }

      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      triggerHaptic("selection");
    };

    globalThis.document.addEventListener("mousedown", handleAnchorMouseDown);

    return () => {
      globalThis.document.removeEventListener("mousedown", handleAnchorMouseDown);
    };
  }, []);

  if (loadingError && !boundaryError) {
    return <ErrorFallback error={loadingError} />;
  }

  return (
    <div
      className="app-root"
      onClickCapture={handleLinkClick}
    >
      <GroupedCornersManager pathKey={location.pathname} />
      <SnowfallManager />
      <ErrorBoundary onError={setBoundaryError}>
        <SafariWarningModal
          open={isSafariWarningOpen}
          onClose={(dontShowAgain) => {
            updateStoredWarningState(
              dontShowAgain,
              "safariWarningDismissed",
              "safariWarningLastShown"
            );

            setIsSafariWarningOpen(false);
            setIsAppReady(true);
          }}
        />
        <LoadingContext.Provider value={{canDismiss, setCanDismiss, setIsLoading}}>
          <LoadingAnimation
            isLoading={isLoading}
            isSuppressed={isSafariWarningOpen}
          />
          {isAppReady && (
            <Suspense fallback={undefined}>
              <AnimatePresence
                mode="wait"
                onExitComplete={() => {
                  if (globalThis.window !== undefined) {
                    setTimeout(() => {
                      globalThis.window.scrollTo({
                        behavior: "instant",
                        top: 0,
                      });
                    }, 50);
                  }
                }}
              >
                <Routes
                  key={location.pathname}
                  location={location}
                >
                  <Route
                    element={<Links />}
                    path="/"
                  />
                  <Route
                    element={<AeFaqPage />}
                    path="/aefaq"
                  />
                  <Route
                    element={<PrFaqPage />}
                    path="/prfaq"
                  />
                  <Route
                    element={<PsFaqPage />}
                    path="/psfaq"
                  />
                  <Route
                    element={<ChatRules />}
                    path="/rules"
                  />
                  <Route
                    element={<FilesRedirect />}
                    path="/files"
                  />
                  <Route
                    element={<RegFilePage />}
                    path="/regfile"
                  />
                  <Route
                    element={<RegFilePage />}
                    path="/reg"
                  />
                  <Route
                    element={
                      <>
                        <NotFound />
                        <RedirectHtml />
                      </>
                    }
                    path="*"
                  />
                </Routes>
              </AnimatePresence>
            </Suspense>
          )}
        </LoadingContext.Provider>
      </ErrorBoundary>
    </div>
  );
};
