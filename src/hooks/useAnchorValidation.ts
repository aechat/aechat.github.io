import {useEffect, useRef} from "react";

import {message} from "antd";

import {useLocation} from "react-router-dom";

import {resolveDetailsByAnchor} from "../utilities/anchorResolvers";

import {scrollToAnchorById} from "../utilities/scrollToAnchor";

import {replaceCurrentUrlHash} from "../utilities/urlHashUtilities";

interface Section {
  id: string;
}

const ANCHOR_VALIDATION_DELAY = 1000;

const ANCHOR_ALIGN_FALLBACK_DELAY = 450;

const MAX_ATTEMPTS = 15;

const ATTEMPT_INTERVAL = 200;

const isSectionAnchor = (sections: Section[], anchorId: string): boolean => {
  return sections.some((section) => section.id === anchorId);
};

const decodeAnchor = (anchor: string): string => {
  try {
    return decodeURIComponent(anchor);
  } catch {
    return anchor;
  }
};

export const useAnchorValidation = (sections: Section[], isPageLoaded: boolean) => {
  const {hash} = useLocation();

  const lastValidatedHashReference = useRef<string>("");

  const sectionsReference = useRef<Section[]>(sections);

  sectionsReference.current = sections;

  useEffect(() => {
    if (!isPageLoaded) return;

    const currentAnchor = hash.slice(1);

    if (!currentAnchor) {
      lastValidatedHashReference.current = "";

      return;
    }

    if (lastValidatedHashReference.current === hash) {
      return;
    }

    let firstAlignFrameId: number | undefined;

    let secondAlignFrameId: number | undefined;

    let alignFallbackTimeout: ReturnType<typeof setTimeout> | undefined;

    let validationTimeout: ReturnType<typeof setTimeout> | undefined;

    let pendingAnchorId = "";

    const alignToPendingAnchor = () => {
      if (!pendingAnchorId) {
        return;
      }

      scrollToAnchorById(pendingAnchorId, {updateHash: false});
    };

    const scheduleSecondFrameAlign = () => {
      secondAlignFrameId = requestAnimationFrame(alignToPendingAnchor);
    };

    const alignAnchorAfterLayoutStabilization = (anchorId: string) => {
      pendingAnchorId = anchorId;
      firstAlignFrameId = requestAnimationFrame(scheduleSecondFrameAlign);

      alignFallbackTimeout = setTimeout(
        alignToPendingAnchor,
        ANCHOR_ALIGN_FALLBACK_DELAY
      );
    };

    let attempts = 0;

    const validateAnchors = () => {
      const currentRawAnchor = hash.slice(1);

      if (!currentRawAnchor) return;

      const decodedAnchor = decodeAnchor(currentRawAnchor);

      const matchedDetails =
        resolveDetailsByAnchor(decodedAnchor) || resolveDetailsByAnchor(currentRawAnchor);

      if (matchedDetails) {
        lastValidatedHashReference.current = hash;
        alignAnchorAfterLayoutStabilization(decodedAnchor);

        return;
      }

      const isMatchingSection =
        isSectionAnchor(sectionsReference.current, decodedAnchor) ||
        isSectionAnchor(sectionsReference.current, currentRawAnchor);

      if (isMatchingSection) {
        lastValidatedHashReference.current = hash;
        scrollToAnchorById(decodedAnchor);

        return;
      }

      if (attempts < MAX_ATTEMPTS) {
        attempts++;
        validationTimeout = setTimeout(validateAnchors, ATTEMPT_INTERVAL);

        return;
      }

      lastValidatedHashReference.current = hash;

      const faqContainer = document.querySelector(".article-content");

      if (faqContainer) {
        message.error(
          "Не удалось найти статью по ссылке. Возможно, она была перемещена или удалена."
        );

        replaceCurrentUrlHash("");
      }
    };

    validationTimeout = setTimeout(validateAnchors, ANCHOR_VALIDATION_DELAY);

    return () => {
      if (validationTimeout !== undefined) {
        clearTimeout(validationTimeout);
      }

      if (firstAlignFrameId !== undefined) {
        cancelAnimationFrame(firstAlignFrameId);
      }

      if (secondAlignFrameId !== undefined) {
        cancelAnimationFrame(secondAlignFrameId);
      }

      if (alignFallbackTimeout !== undefined) {
        clearTimeout(alignFallbackTimeout);
      }
    };
  }, [hash, isPageLoaded]);
};
