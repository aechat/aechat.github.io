import React, {useEffect, useMemo, useState} from "react";

import {triggerHaptic} from "../../utilities/haptics";

import styles from "./DetailsSummary.module.scss";

const TAG_LIMIT = 4;

export const parseTags = (tags: string): string[] =>
  tags
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);

const getPluralizedTags = (count: number): string => {
  const lastDigit = count % 10;

  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) return "тегов";

  if (lastDigit === 1) return "тег";

  return [2, 3, 4].includes(lastDigit) ? "тега" : "тегов";
};

const stopToggleTagsPointerDown = (event: React.MouseEvent | React.TouchEvent) => {
  event.stopPropagation();
};

const TagListComponent = ({tags}: {tags: string}) => {
  const [expanded, setExpanded] = useState(false);

  const allTags = useMemo(() => parseTags(tags), [tags]);

  const isOverflowing = allTags.length > TAG_LIMIT;

  const [randomizedTags, setRandomizedTags] = useState<string[]>(() =>
    allTags.slice(0, TAG_LIMIT)
  );

  useEffect(() => {
    if (!isOverflowing) {
      return;
    }

    const shuffled = [...allTags];

    const randomValues = new Uint32Array(TAG_LIMIT);

    crypto.getRandomValues(randomValues);

    for (let index = 0; index < TAG_LIMIT; index++) {
      const remaining = shuffled.length - index;

      const swapIndex =
        index + Math.floor((randomValues[index] / (0xff_ff_ff_ff + 1)) * remaining);

      const temporary = shuffled[index];

      shuffled[index] = shuffled[swapIndex];
      shuffled[swapIndex] = temporary;
    }

    setRandomizedTags(shuffled.slice(0, TAG_LIMIT));
  }, [allTags, isOverflowing]);

  if (allTags.length === 0) {
    return <></>;
  }

  let visibleTags;

  if (expanded) {
    visibleTags = allTags;
  } else if (isOverflowing) {
    visibleTags = randomizedTags;
  } else {
    visibleTags = allTags;
  }

  const hiddenCount = allTags.length - TAG_LIMIT;

  const toggleTags = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    triggerHaptic("soft");
    setExpanded((previous) => !previous);
  };

  return (
    <span className={styles["details-tags"]}>
      {visibleTags.map((t) => (
        <mark key={t}>{t}</mark>
      ))}
      {isOverflowing && (
        <mark
          className={styles["details-tags-toggle"]}
          onClick={toggleTags}
          onMouseDown={stopToggleTagsPointerDown}
          onTouchStart={stopToggleTagsPointerDown}
        >
          {expanded ? "скрыть" : `и ещё ${hiddenCount} ${getPluralizedTags(hiddenCount)}`}
        </mark>
      )}
    </span>
  );
};

export const TagList = React.memo(TagListComponent);

TagList.displayName = "TagList";
