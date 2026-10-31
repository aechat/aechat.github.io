import React, {
  createContext,
  useCallback,
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

import {RemoveScroll} from "react-remove-scroll";

import {useCloseAllModals} from "../../hooks/useCloseAllModals";

import {useRipple} from "../../hooks/useRipple";

import {isMobileDevice, isWebKitBrowser} from "../../utilities/browserDetection";

import {
  isHapticFeedbackSupported,
  setIsVibrationEnabled as setGlobalVibrationEnabled,
  withSelectionHaptic,
} from "../../utilities/haptics";

import {
  getLocalStorageItem,
  getStoredNumber,
  hasStoredBoolean,
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
  setIsHoverScaleAnimationEnabled: (isEnabled: boolean) => void;
  setIsSnowfallEnabled: (isEnabled: boolean) => void;
  setIsSpoilerAnimationEnabled: (isEnabled: boolean) => void;
  setIsVibrationEnabled: (isEnabled: boolean) => void;
  setSaturateRatio: (ratio: number) => void;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProperties | undefined>(undefined);

const isSnowfallEnabledForMonth = (month: number): boolean => {
  return [0, 1, 11].includes(month) && hasStoredBoolean("isSnowfallEnabled", true);
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

    const savedTheme = (getLocalStorageItem("theme") as Theme) ?? "system";

    const savedAccentHue = getStoredNumber("accentHue", 210, (value) =>
      Math.trunc(Number(value))
    );

    const savedSaturateRatio = getStoredNumber("saturateRatio", 1, Number);

    const isResolvedSpoilerAnimationEnabled = hasStoredBoolean(
      "isSpoilerAnimationEnabled",
      true,
      {persistFallback: true}
    );

    const isResolvedHoverScaleAnimationEnabled = hasStoredBoolean(
      "isHoverScaleAnimationEnabled",
      !isMobileDevice() && !isWebKitBrowser(),
      {persistFallback: true}
    );

    const isResolvedSnowfallEnabled = isSnowfallEnabledForMonth(new Date().getMonth());

    const hasVibrationSupport = isHapticFeedbackSupported();

    const isResolvedVibrationEnabled =
      hasVibrationSupport &&
      hasStoredBoolean("isVibrationEnabled", true, {persistFallback: true});

    setThemeState(savedTheme);
    setAccentHueState(savedAccentHue);
    setSaturateRatioState(savedSaturateRatio);
    setIsSpoilerAnimationEnabledState(isResolvedSpoilerAnimationEnabled);
    setIsHoverScaleAnimationEnabledState(isResolvedHoverScaleAnimationEnabled);
    setIsSnowfallEnabled(isResolvedSnowfallEnabled);

    if (hasVibrationSupport) {
      setIsVibrationEnabledState(isResolvedVibrationEnabled);
      setGlobalVibrationEnabled(isResolvedVibrationEnabled);
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

  const setIsSpoilerAnimationEnabled = (isEnabled: boolean) => {
    setIsSpoilerAnimationEnabledState(isEnabled);
    setStoredBoolean("isSpoilerAnimationEnabled", isEnabled);
  };

  const setIsHoverScaleAnimationEnabled = (isEnabled: boolean) => {
    setIsHoverScaleAnimationEnabledState(isEnabled);
    setStoredBoolean("isHoverScaleAnimationEnabled", isEnabled);
  };

  const setSnowfallEnabled = (isEnabled: boolean) => {
    setIsSnowfallEnabled(isEnabled);
    setStoredBoolean("isSnowfallEnabled", isEnabled);
  };

  const setVibrationEnabled = (isEnabled: boolean) => {
    if (!isHapticFeedbackSupported()) {
      return;
    }

    setIsVibrationEnabledState(isEnabled);
    setGlobalVibrationEnabled(isEnabled);
  };

  const isThemeDarkMode = (theme: Theme, isSystemDark: boolean): boolean => {
    return theme === "dark" || (theme === "system" && isSystemDark);
  };

  const updateTheme = () => {
    if (typeof window === "undefined") {
      return;
    }

    const root = document.documentElement;

    root.style.setProperty("--accent-hue", accentHueState.toString());
    root.style.setProperty("--saturate-ratio", saturateRatioState.toString());
    root.classList.toggle("no-spoiler-animation", !isSpoilerAnimationEnabledState);
    root.classList.toggle("no-hover-scale-animation", !isHoverScaleAnimationEnabledState);

    const isSystemDark = matchMedia("(prefers-color-scheme: dark)").matches;

    const isDarkMode = isThemeDarkMode(themeState, isSystemDark);

    root.classList.toggle("dark", isDarkMode);
    root.classList.toggle("light", !isDarkMode);
    dispatchEvent(new CustomEvent("accentHueChanged"));
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
    if (typeof window === "undefined") {
      return;
    }

    const handleSystemThemeChange = () => themeState === "system" && updateTheme();

    const mediaQuery = matchMedia("(prefers-color-scheme: dark)");

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

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  useCloseAllModals(closeModal);

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

  const currentPath = typeof window === "undefined" ? "" : location.pathname;

  const pagesWithSpoilerAnimation = ["/aefaq", "/prfaq", "/psfaq"];

  const today = new Date();

  const month = today.getMonth();

  const day = today.getDate();

  const isNewYearPeriod = (month === 11 && day >= 25) || (month === 0 && day <= 7);

  const isWinter = [0, 1, 11].includes(month);

  const isShowSpoilerAnimationSelector = pagesWithSpoilerAnimation.some((path) =>
    currentPath.startsWith(path)
  );

  const isShowVibrationSelector = isHapticFeedbackSupported();

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
      <RemoveScroll enabled={isModalOpen}>
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
            {isShowSpoilerAnimationSelector && (
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
            {isShowVibrationSelector && (
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
      </RemoveScroll>
    </Modal>
  );
};

export {ThemeModal};
