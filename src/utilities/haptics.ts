import {type HapticInput, WebHaptics} from "web-haptics";

import {message} from "antd";

import {isMobileDevice} from "./browserDetection";

import {hasStoredBoolean, setStoredBoolean} from "./localStorageUtilities";

type MessageLevel = "error" | "info" | "success" | "warning";

type MessageMethod = (...arguments_: unknown[]) => unknown;

const messagePatterns: Record<MessageLevel, HapticInput> = {
  error: "error",
  info: "light",
  success: "success",
  warning: "warning",
};

const vibrationStorageKey = "isVibrationEnabled";

const vibrationState = {
  haptics: undefined as WebHaptics | undefined,
  hasResolvedVibrationPreference: false,
  isMessagePatched: false,
  isVibrationEnabled: true,
};

export const isHapticFeedbackSupported = () => {
  return (
    typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    typeof document !== "undefined" &&
    isMobileDevice() &&
    WebHaptics.isSupported
  );
};

const resolveVibrationPreference = () => {
  if (
    typeof window === "undefined" ||
    vibrationState.hasResolvedVibrationPreference ||
    !isHapticFeedbackSupported()
  ) {
    return;
  }

  vibrationState.isVibrationEnabled = hasStoredBoolean(vibrationStorageKey, true, {
    persistFallback: true,
  });

  vibrationState.hasResolvedVibrationPreference = true;
};

export const setIsVibrationEnabled = (isEnabled: boolean) => {
  if (!isHapticFeedbackSupported()) {
    vibrationState.isVibrationEnabled = false;
    vibrationState.hasResolvedVibrationPreference = true;

    return;
  }

  vibrationState.isVibrationEnabled = isEnabled;
  vibrationState.hasResolvedVibrationPreference = true;
  setStoredBoolean(vibrationStorageKey, isEnabled);

  if (!isEnabled) {
    vibrationState.haptics?.cancel();
  }
};

const getHapticsInstance = () => {
  if (!isHapticFeedbackSupported()) {
    return;
  }

  vibrationState.haptics ??= new WebHaptics({showSwitch: false});

  return vibrationState.haptics;
};

export const triggerHaptic = (input: HapticInput = "selection") => {
  if (!isHapticFeedbackSupported()) {
    return;
  }

  resolveVibrationPreference();

  if (!vibrationState.isVibrationEnabled) {
    return;
  }

  const instance = getHapticsInstance();

  if (!instance) {
    return;
  }

  void instance.trigger(input).catch(() => {});
};

export const withHaptic = <Arguments extends unknown[], Result>(
  input: HapticInput,
  handler: (...arguments_: Arguments) => Result
) => {
  return (...arguments_: Arguments): Result => {
    triggerHaptic(input);

    return handler(...arguments_);
  };
};

export const withSelectionHaptic = <Arguments extends unknown[], Result>(
  handler: (...arguments_: Arguments) => Result
) => withHaptic("selection", handler);

export const withSoftHaptic = <Arguments extends unknown[], Result>(
  handler: (...arguments_: Arguments) => Result
) => withHaptic("soft", handler);

export const triggerDisclosureHaptic = (
  isOpen: boolean,
  previousIsOpen: boolean | undefined
) => {
  if (previousIsOpen === undefined) {
    return;
  }

  if (isOpen && !previousIsOpen) {
    triggerHaptic("selection");

    return;
  }

  if (!isOpen && previousIsOpen) {
    triggerHaptic("soft");
  }
};

const patchMessageMethod = (level: MessageLevel) => {
  const mutableMessage = message as unknown as {[K in MessageLevel]: MessageMethod};

  const originalMethod = mutableMessage[level];

  mutableMessage[level] = (...arguments_) => {
    triggerHaptic(messagePatterns[level]);

    return originalMethod(...arguments_);
  };
};

export const setupHapticMessageFeedback = () => {
  if (vibrationState.isMessagePatched) {
    return;
  }

  patchMessageMethod("success");
  patchMessageMethod("error");
  patchMessageMethod("warning");
  patchMessageMethod("info");
  vibrationState.isMessagePatched = true;
};

export const disposeHaptics = () => {
  if (!vibrationState.haptics) {
    return;
  }

  vibrationState.haptics.destroy();
  vibrationState.haptics = undefined;
};
