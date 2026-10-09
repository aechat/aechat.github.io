import {useCallback, useEffect} from "react";

import {message} from "antd";

import {copyText} from "../utilities/copyUtilities";

import {scrollToElement} from "../utilities/scrollToAnchor";

import {replaceCurrentUrlHash} from "../utilities/urlHashUtilities";

const SCROLL_DELAY = 300;

const URL_CLEANUP_DELAY = 5000;

export const useHashAnchorNavigation = (hash: string) => {
  const handleCopyAnchor = useCallback(async (anchorId: string) => {
    const anchor = `${globalThis.location.origin}${globalThis.location.pathname}#${anchorId}`;

    const success = await copyText(anchor);

    if (success) {
      message.success("Ссылка на раздел скопирована в буфер обмена");
    }
  }, []);

  useEffect(() => {
    if (!hash) {
      return;
    }

    let cleanupTimer: ReturnType<typeof setTimeout> | undefined;

    const scrollTimer = setTimeout(() => {
      const element = document.querySelector(hash);

      if (element) {
        scrollToElement(element);

        cleanupTimer = setTimeout(() => {
          replaceCurrentUrlHash("");
        }, URL_CLEANUP_DELAY);
      }
    }, SCROLL_DELAY);

    return () => {
      clearTimeout(scrollTimer);

      if (cleanupTimer) {
        clearTimeout(cleanupTimer);
      }
    };
  }, [hash]);

  return {handleCopyAnchor};
};
