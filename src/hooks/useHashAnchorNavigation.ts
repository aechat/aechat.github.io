import {useCallback, useEffect} from "react";

import {message} from "antd";

import {canCopyText} from "../utilities/copyUtilities";

import {scrollToElement} from "../utilities/scrollToAnchor";

import {replaceCurrentUrlHash} from "../utilities/urlHashUtilities";

const SCROLL_DELAY = 300;

const URL_CLEANUP_DELAY = 5000;

export const useHashAnchorNavigation = (hash: string) => {
  const handleCopyAnchor = useCallback(async (anchorId: string) => {
    const anchor = `${location.origin}${location.pathname}#${anchorId}`;

    const isSuccess = await canCopyText(anchor);

    if (isSuccess) {
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

      if (!element) {
        return;
      }

      scrollToElement(element);

      cleanupTimer = setTimeout(() => {
        replaceCurrentUrlHash("");
      }, URL_CLEANUP_DELAY);
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
