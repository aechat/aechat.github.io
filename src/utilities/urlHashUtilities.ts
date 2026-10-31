export const getPagePathWithSearch = (): string => {
  return `${location.pathname}${location.search}`;
};

export const getCurrentHashAnchor = (): string => {
  return globalThis.window === undefined ? "" : location.hash.slice(1);
};

export const replaceCurrentUrlHash = (hash: string): void => {
  if (globalThis.window === undefined) {
    return;
  }

  history.replaceState(undefined, "", `${getPagePathWithSearch()}${hash}`);
};
