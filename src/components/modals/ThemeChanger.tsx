import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";

import {
  CloseRounded,
  DarkModeRounded,
  HideSourceRounded,
  LightModeRounded,
  RestartAlt,
  TuneRounded,
} from "@mui/icons-material";

import {Modal, Slider, Switch, Tooltip} from "antd";

import {useRipple} from "../../hooks/useRipple";

import {isMobileDevice, isWebKitBrowser} from "../../utilities/browserDetection";

import {
  isHapticFeedbackSupported,
  setIsVibrationEnabled as setGlobalVibrationEnabled,
  withSelectionHaptic,
} from "../../utilities/haptics";

import {
  getLocalStorageItem,
  getStoredBoolean,
  getStoredNumber,
  isLocalStorageAvailable,
  setLocalStorageItem,
  setStoredBoolean,
  setStoredNumber,
} from "../../utilities/localStorageUtilities";

import modalStyles from "./Modal.module.scss";

type Theme = "light" | "dark" | "system";

interface ThemeContextProperties {
  accentHue: number;
  isHoverScaleAnimationEnabled: boolean;
  isSnowfallEnabled: boolean;
  isSpoilerAnimationEnabled: boolean;
  isVibrationEnabled: boolean;
  saturateRatio: number;
  setAccentHue: (hue: number) => void;
  setIsHoverScaleAnimationEnabled: (enabled: boolean) => void;
  setIsSnowfallEnabled: (enabled: boolean) => void;
  setIsSpoilerAnimationEnabled: (enabled: boolean) => void;
  setIsVibrationEnabled: (enabled: boolean) => void;
  setSaturateRatio: (ratio: number) => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProperties | undefined>(undefined);

const getSnowfallEnabledForMonth = (month: number): boolean => {
  if (![0, 1, 11].includes(month)) {
    return false;
  }

  return getStoredBoolean("isSnowfallEnabled", true);
};

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [themeState, setThemeState] = useState<Theme>("system");

  const [accentHueState, setAccentHueState] = useState<number>(210);

  const [saturateRatioState, setSaturateRatioState] = useState<number>(1);

  const [isSpoilerAnimationEnabledState, setIsSpoilerAnimationEnabledState] =
    useState<boolean>(true);

  const [isHoverScaleAnimationEnabledState, setIsHoverScaleAnimationEnabledState] =
    useState<boolean>(true);

  const [isSnowfallEnabled, setIsSnowfallEnabled] = useState<boolean>(false);

  const [isVibrationEnabledState, setIsVibrationEnabledState] = useState<boolean>(true);

  useLayoutEffect(() => {
    if (!isLocalStorageAvailable()) {
      return;
    }

    const savedTheme = (getLocalStorageItem("theme") as Theme) || "system";

    const savedAccentHue = getStoredNumber("accentHue", 210, (value) =>
      Number.parseInt(value, 10)
    );

    const savedSaturateRatio = getStoredNumber("saturateRatio", 1, Number.parseFloat);

    const resolvedSpoilerAnimationEnabled = getStoredBoolean(
      "isSpoilerAnimationEnabled",
      true,
      {persistFallback: true}
    );

    const resolvedHoverScaleAnimationEnabled = getStoredBoolean(
      "isHoverScaleAnimationEnabled",
      !isMobileDevice() && !isWebKitBrowser(),
      {persistFallback: true}
    );

    const resolvedSnowfallEnabled = getSnowfallEnabledForMonth(new Date().getMonth());

    const hasVibrationSupport = isHapticFeedbackSupported();

    const resolvedVibrationEnabled = hasVibrationSupport
      ? getStoredBoolean("isVibrationEnabled", true, {persistFallback: true})
      : false;

    setThemeState(savedTheme);
    setAccentHueState(savedAccentHue);
    setSaturateRatioState(savedSaturateRatio);
    setIsSpoilerAnimationEnabledState(resolvedSpoilerAnimationEnabled);
    setIsHoverScaleAnimationEnabledState(resolvedHoverScaleAnimationEnabled);
    setIsSnowfallEnabled(resolvedSnowfallEnabled);

    if (hasVibrationSupport) {
      setIsVibrationEnabledState(resolvedVibrationEnabled);
      setGlobalVibrationEnabled(resolvedVibrationEnabled);
    } else {
      setIsVibrationEnabledState(false);
      setGlobalVibrationEnabled(false);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setLocalStorageItem("theme", newTheme);
  };

  const setAccentHue = (hue: number) => {
    setAccentHueState(hue);
    setStoredNumber("accentHue", hue);
  };

  const setSaturateRatio = (ratio: number) => {
    setSaturateRatioState(ratio);
    setStoredNumber("saturateRatio", ratio);
  };

  const setIsSpoilerAnimationEnabled = (enabled: boolean) => {
    setIsSpoilerAnimationEnabledState(enabled);
    setStoredBoolean("isSpoilerAnimationEnabled", enabled);
  };

  const setIsHoverScaleAnimationEnabled = (enabled: boolean) => {
    setIsHoverScaleAnimationEnabledState(enabled);
    setStoredBoolean("isHoverScaleAnimationEnabled", enabled);
  };

  const setSnowfallEnabled = (enabled: boolean) => {
    setIsSnowfallEnabled(enabled);
    setStoredBoolean("isSnowfallEnabled", enabled);
  };

  const setVibrationEnabled = (enabled: boolean) => {
    if (!isHapticFeedbackSupported()) {
      return;
    }

    setIsVibrationEnabledState(enabled);
    setGlobalVibrationEnabled(enabled);
  };

  const calculateIsDarkMode = (theme: Theme, isSystemDark: boolean): boolean => {
    return theme === "dark" || (theme === "system" && isSystemDark);
  };

  const updateTheme = () => {
    if (globalThis.window === undefined) {
      return;
    }

    const root = document.documentElement;

    root.style.setProperty("--accent-hue", accentHueState.toString());
    root.style.setProperty("--saturate-ratio", saturateRatioState.toString());
    root.classList.toggle("no-spoiler-animation", !isSpoilerAnimationEnabledState);
    root.classList.toggle("no-hover-scale-animation", !isHoverScaleAnimationEnabledState);

    const isSystemDark = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkMode = calculateIsDarkMode(themeState, isSystemDark);

    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
    globalThis.dispatchEvent(new CustomEvent("accentHueChanged"));
  };

  useLayoutEffect(
    () => updateTheme(),
    [
      themeState,
      accentHueState,
      saturateRatioState,
      isSpoilerAnimationEnabledState,
      isHoverScaleAnimationEnabledState,
    ]
  );

  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    const handleSystemThemeChange = () => themeState === "system" && updateTheme();

    const mediaQuery = globalThis.window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [themeState]);

  const contextValue = useMemo(
    () => ({
      accentHue: accentHueState,
      isHoverScaleAnimationEnabled: isHoverScaleAnimationEnabledState,
      isSnowfallEnabled: isSnowfallEnabled,
      isSpoilerAnimationEnabled: isSpoilerAnimationEnabledState,
      isVibrationEnabled: isVibrationEnabledState,
      saturateRatio: saturateRatioState,
      setAccentHue,
      setIsHoverScaleAnimationEnabled,
      setIsSnowfallEnabled: setSnowfallEnabled,
      setIsSpoilerAnimationEnabled,
      setIsVibrationEnabled: setVibrationEnabled,
      setSaturateRatio,
      setTheme,
      theme: themeState,
    }),
    [
      themeState,
      accentHueState,
      saturateRatioState,
      isSpoilerAnimationEnabledState,
      isHoverScaleAnimationEnabledState,
      isSnowfallEnabled,
      isVibrationEnabledState,
    ]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProperties => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};

interface ThemeToggleButtonProperties {
  className?: string;
}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProperties> = ({className}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleCloseAll = () => closeModal();

    globalThis.window?.addEventListener("close-all-modals", handleCloseAll);

    return () => {
      globalThis.window?.removeEventListener("close-all-modals", handleCloseAll);
    };
  }, []);

  const ripple = useRipple<HTMLButtonElement>();

  return (
    <>
      <button
        className={className}
        onClick={openModal}
        onMouseDown={ripple.onMouseDown}
      >
        <TuneRounded />
      </button>
      <ThemeModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

interface ThemeModalProperties {
  closeModal: () => void;
  isModalOpen: boolean;
}

interface ThemeOptionButtonProperties {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ThemeOptionButton: React.FC<ThemeOptionButtonProperties> = ({
  children,
  isSelected,
  onClick,
  onMouseDown,
}) => (
  <button
    className={`${modalStyles["modal-controls-option"]} ${isSelected ? modalStyles["modal-controls-option-selected"] : ""}`}
    onClick={onClick}
    onMouseDown={onMouseDown}
  >
    {children}
  </button>
);

const ThemeModal: React.FC<ThemeModalProperties> = ({closeModal, isModalOpen}) => {
  const {
    accentHue,
    isHoverScaleAnimationEnabled,
    isSnowfallEnabled,
    isSpoilerAnimationEnabled,
    isVibrationEnabled,
    saturateRatio,
    setAccentHue,
    setIsHoverScaleAnimationEnabled,
    setIsSnowfallEnabled,
    setIsSpoilerAnimationEnabled,
    setIsVibrationEnabled,
    setSaturateRatio,
    setTheme,
    theme,
  } = useTheme();

  const [temporaryHue, setTemporaryHue] = useState(accentHue);

  const [temporarySaturate, setTemporarySaturate] = useState(saturateRatio);

  useEffect(() => {
    setTemporaryHue(accentHue);
  }, [accentHue]);

  useEffect(() => {
    setTemporarySaturate(saturateRatio);
  }, [saturateRatio]);

  const currentPath =
    globalThis.window === undefined ? "" : globalThis.window.location.pathname;

  const pagesWithSpoilerAnimation = ["/aefaq", "/prfaq", "/psfaq"];

  const today = new Date();

  const month = today.getMonth();

  const day = today.getDate();

  const isNewYearPeriod = (month === 11 && day >= 25) || (month === 0 && day <= 7);

  const isWinter = [0, 1, 11].includes(month);

  const showSpoilerAnimationSelector = pagesWithSpoilerAnimation.some((path) =>
    currentPath.startsWith(path)
  );

  const showVibrationSelector = isHapticFeedbackSupported();

  const ripple = useRipple<HTMLButtonElement>();

  const handleSpoilerAnimationChange = withSelectionHaptic(setIsSpoilerAnimationEnabled);

  const handleHoverScaleAnimationChange = withSelectionHaptic(
    setIsHoverScaleAnimationEnabled
  );

  const handleVibrationChange = withSelectionHaptic(setIsVibrationEnabled);

  const handleSnowfallChange = withSelectionHaptic(setIsSnowfallEnabled);

  const handleAccentHueAfterChange = withSelectionHaptic(setAccentHue);

  const handleSaturationAfterChange = withSelectionHaptic(setSaturateRatio);

  return (
    <Modal
      destroyOnHidden
      closeIcon={false}
      footer={<></>}
      open={isModalOpen}
      width={450}
      onCancel={closeModal}
    >
      <div className={modalStyles["modal"]}>
        <div className={modalStyles["modal-header"]}>
          <div className={modalStyles["modal-header-title"]}>Настройки страницы</div>
          <button
            className={modalStyles["modal-header-button"]}
            onClick={closeModal}
            onMouseDown={ripple.onMouseDown}
          >
            <CloseRounded />
          </button>
        </div>
        <div className={modalStyles["modal-content"]}>
          <div className={modalStyles["modal-controls-element"]}>
            <div className={modalStyles["modal-controls-title"]}>Цветовая схема</div>
            <div className={modalStyles["modal-controls-group"]}>
              <ThemeOptionButton
                isSelected={theme === "light"}
                onClick={() => setTheme("light")}
                onMouseDown={ripple.onMouseDown}
              >
                <LightModeRounded />
                Светлая
              </ThemeOptionButton>
              <ThemeOptionButton
                isSelected={theme === "dark"}
                onClick={() => setTheme("dark")}
                onMouseDown={ripple.onMouseDown}
              >
                <DarkModeRounded />
                Тёмная
              </ThemeOptionButton>
              <ThemeOptionButton
                isSelected={theme === "system"}
                onClick={() => setTheme("system")}
                onMouseDown={ripple.onMouseDown}
              >
                <HideSourceRounded />
                Системная
              </ThemeOptionButton>
            </div>
          </div>
          {showSpoilerAnimationSelector && (
            <>
              <div className={modalStyles["modal-controls-row"]}>
                <span className={modalStyles["modal-controls-title"]}>
                  Анимация раскрытия спойлеров
                </span>
                <Switch
                  checked={isSpoilerAnimationEnabled}
                  onChange={handleSpoilerAnimationChange}
                />
              </div>
            </>
          )}
          <div className={modalStyles["modal-controls-row"]}>
            <span className={modalStyles["modal-controls-title"]}>
              Анимация увеличения при наведении и нажатии
            </span>
            <Switch
              checked={isHoverScaleAnimationEnabled}
              onChange={handleHoverScaleAnimationChange}
            />
          </div>
          {showVibrationSelector && (
            <div className={modalStyles["modal-controls-row"]}>
              <span className={modalStyles["modal-controls-title"]}>
                Тактильная отдача
              </span>
              <Switch
                checked={isVibrationEnabled}
                onChange={handleVibrationChange}
              />
            </div>
          )}
          {isWinter && (
            <div className={modalStyles["modal-controls-row"]}>
              <span className={modalStyles["modal-controls-title"]}>
                {isNewYearPeriod ? "Новогоднее настроение" : "Анимация снега"}
              </span>
              <Switch
                checked={isSnowfallEnabled}
                onChange={handleSnowfallChange}
              />
            </div>
          )}
          <div className={modalStyles["modal-controls-element"]}>
            <div className={modalStyles["modal-controls-title"]}>
              Оттенок акцентного цвета
              <Tooltip title="Сбросить оттенок">
                <button
                  className={modalStyles["modal-controls-reset"]}
                  onClick={() => setAccentHue(210)}
                  onMouseDown={ripple.onMouseDown}
                >
                  <RestartAlt />
                </button>
              </Tooltip>
            </div>
            <div className={modalStyles["modal-controls-slider"]}>
              <Slider
                max={360}
                min={0}
                value={temporaryHue}
                onAfterChange={handleAccentHueAfterChange}
                onChange={setTemporaryHue}
              />
            </div>
          </div>
          <div className={modalStyles["modal-controls-element"]}>
            <div className={modalStyles["modal-controls-title"]}>
              Насыщенность акцентного цвета
              <Tooltip title="Сбросить насыщенность">
                <button
                  className={modalStyles["modal-controls-reset"]}
                  onClick={() => setSaturateRatio(1)}
                  onMouseDown={ripple.onMouseDown}
                >
                  <RestartAlt />
                </button>
              </Tooltip>
            </div>
            <div className={modalStyles["modal-controls-slider"]}>
              <Slider
                max={1}
                min={0}
                step={0.025}
                value={temporarySaturate}
                onAfterChange={handleSaturationAfterChange}
                onChange={setTemporarySaturate}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export {ThemeModal};
