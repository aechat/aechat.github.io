const getLocalStorage = (): Storage | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    return localStorage;
  } catch {
    return undefined;
  }
};

export const isLocalStorageAvailable = (): boolean => {
  return getLocalStorage() !== undefined;
};

export const getLocalStorageItem = (key: string): string | undefined => {
  try {
    return getLocalStorage()?.getItem(key) ?? undefined;
  } catch {
    return undefined;
  }
};

export const canSetLocalStorageItem = (key: string, value: string): boolean => {
  try {
    getLocalStorage()?.setItem(key, value);

    return true;
  } catch {
    return false;
  }
};

export const setLocalStorageItem = (key: string, value: string): void => {
  canSetLocalStorageItem(key, value);
};

interface StoredBooleanOptions {
  persistFallback?: boolean;
}

export const hasStoredBoolean = (
  key: string,
  isFallback: boolean,
  options: StoredBooleanOptions = {}
): boolean => {
  const saved = getLocalStorageItem(key);

  if (saved === undefined) {
    if (options.persistFallback) {
      setStoredBoolean(key, isFallback);
    }

    return isFallback;
  }

  return saved === "true";
};

export const canSetStoredBoolean = (key: string, isValue: boolean): boolean => {
  return canSetLocalStorageItem(key, isValue.toString());
};

export const setStoredBoolean = (key: string, isValue: boolean): void => {
  setLocalStorageItem(key, isValue.toString());
};

type StoredNumberParser = (value: string) => number;

export const getStoredNumber = (
  key: string,
  fallback: number,
  parser: StoredNumberParser = Number
): number => {
  const saved = getLocalStorageItem(key);

  return saved === undefined ? fallback : parser(saved);
};

export const canSetStoredNumber = (key: string, value: number): boolean => {
  return canSetLocalStorageItem(key, value.toString());
};

export const setStoredNumber = (key: string, value: number): void => {
  setLocalStorageItem(key, value.toString());
};
