import React, {memo} from "react";

import searchStyles from "./SearchEngine.module.scss";

interface SearchResultCardProperties {
  anchor?: string;
  cardIndex: number;
  content: string;
  highlightedTags: React.ReactNode[];
  highlightedTitle: React.ReactNode;
  id: string;
  isContentOverflowing: boolean;
  isContentUnclamped: boolean;
  isHovered: boolean;
  isMobile: boolean;
  isSelected: boolean;
  onClick: (event_: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  setContentRef: (element: HTMLDivElement | null) => void;
  setResultRef: (element: HTMLButtonElement | null) => void;
  tagsToDisplay: string[];
}

const getResultCardStyle = ({
  isHovered,
  isMobile,
  isSelected,
}: {
  isHovered: boolean;
  isMobile: boolean;
  isSelected: boolean;
}): React.CSSProperties => {
  return isMobile || isSelected || isHovered
    ? {filter: "none", opacity: 1}
    : {filter: "saturate(0.25)", opacity: 0.85};
};

const SearchResultCardComponent: React.FC<SearchResultCardProperties> = ({
  anchor,
  cardIndex,
  content,
  highlightedTags,
  highlightedTitle,
  id,
  isContentOverflowing,
  isContentUnclamped,
  isHovered,
  isMobile,
  isSelected,
  onClick,
  onMouseEnter,
  onMouseLeave,
  setContentRef,
  setResultRef,
  tagsToDisplay,
}) => {
  return (
    <div
      className={`${searchStyles["search-results-item"]} ${isMobile ? searchStyles["is-mobile"] : ""}`}
      style={{"--card-index": cardIndex} as React.CSSProperties}
    >
      <button
        ref={setResultRef}
        className={`${searchStyles["search-link"]} ${isSelected ? searchStyles["search-selected"] : ""}`}
        data-anchor={anchor}
        data-id={id}
        style={getResultCardStyle({isHovered, isMobile, isSelected})}
        tabIndex={0}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className={`${searchStyles["search-header"]} ${
            isSelected ? searchStyles["search-header-selected"] : ""
          }`}
        >
          <p className={searchStyles["search-title"]}>{highlightedTitle}</p>
          {tagsToDisplay.length > 0 && (
            <span className={searchStyles["search-tags"]}>
              {tagsToDisplay.map((tag_, tagIndex) => (
                <span
                  key={`${tag_}-${tagIndex}`}
                  className={searchStyles["search-tag-item"]}
                >
                  {highlightedTags[tagIndex]}
                </span>
              ))}
            </span>
          )}
        </div>
        <div
          ref={setContentRef}
          className={`${searchStyles["search-content"]} ${
            isContentOverflowing ? searchStyles["search-content-truncated"] : ""
          } ${isContentUnclamped ? searchStyles["search-content-unclamped"] : ""} ${
            isSelected ? searchStyles["search-content-selected"] : ""
          } article-content no-copy`}
          dangerouslySetInnerHTML={{__html: content}}
        />
      </button>
    </div>
  );
};

export const SearchResultCard = memo(SearchResultCardComponent);
