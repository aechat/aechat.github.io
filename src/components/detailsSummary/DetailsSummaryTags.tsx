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

export const TagList: React.FC<{tags: string}> = ({tags}) => {
  const [expanded, setExpanded] = useState(false);

  const allTags = useMemo(() => parseTags(tags), [tags]);

  const isOverflowing = allTags.length > TAG_LIMIT;

  const [randomizedTags, setRandomizedTags] = useState<string[]>([]);

  useEffect(() => {
    if (!isOverflowing) {
      return;
    }

    const shuffled = [...allTags];

    for (let index = shuffled.length - 1; index > 0; index--) {
      const randomValues = new Uint32Array(1);

      crypto.getRandomValues(randomValues);

      const index_ = Math.floor((randomValues[0] / (0xff_ff_ff_ff + 1)) * (index + 1));

      const temporary = shuffled[index];

      shuffled[index] = shuffled[index_];
      shuffled[index_] = temporary;
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
