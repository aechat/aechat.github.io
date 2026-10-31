import {useEffect, useState} from "react";

import {generateAnchorId} from "../components/detailsSummary/DetailsSummary";

import {useLoading} from "../context/LoadingContext";

const PAGE_LOAD_DELAY = 100;

export const useIsPageLoaded = (isFaqPage = false): boolean => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const {canDismiss, setIsLoading} = useLoading();

  useEffect(() => {
    let isCancelled = false;

    const finishLoading = () => {
      if (isCancelled) {
        return;
      }

      setIsPageLoaded(true);

      if (canDismiss) {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(async () => {
      if (isCancelled) {
        return;
      }

      if (!isFaqPage) {
        finishLoading();

        return;
      }

      await generateAnchorId();

      if (isCancelled) {
        return;
      }

      finishLoading();
    }, PAGE_LOAD_DELAY);

    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [setIsLoading, isFaqPage, canDismiss]);

  return isPageLoaded;
};
