import {useEffect} from "react";

import {message} from "antd";

import {
  createRangeContainer,
  getActiveSelectionRange,
  getClosestElement,
} from "../utilities/selectionUtilities";

interface ClipboardSource {
  url: string;
}

interface SmartClipboardContent {
  html: string;
  plainText: string;
}

const isNonSummaryMarkSelection = (range: Range): boolean => {
  const startElement = getClosestElement(range.startContainer);

  const endElement = getClosestElement(range.endContainer);

  const startMark = startElement?.closest("mark");

  const endMark = endElement?.closest("mark");

  if (startMark && endMark && startMark === endMark && !startMark.closest("summary")) {
    return true;
  }

  const temporaryDiv = createRangeContainer(range);

  const marks = [...temporaryDiv.querySelectorAll("mark")].filter(
    (markElement) => !markElement.closest("summary")
  );

  if (marks.length === 0) {
    return false;
  }

  const cleanedSelection = temporaryDiv.cloneNode(true) as HTMLDivElement;

  for (const markElement of cleanedSelection.querySelectorAll("mark")) {
    if (!markElement.closest("summary")) {
      markElement.remove();
    }
  }

  const remainingText = (cleanedSelection.textContent ?? "").replaceAll(/\s+/g, "");

  return remainingText.length === 0;
};

const collectSources = (selection: Selection): ClipboardSource[] => {
  const openDetails = document.querySelectorAll("details[open]");

  if (openDetails.length === 0) {
    return [];
  }

  const sources: ClipboardSource[] = [];

  for (const detail of openDetails) {
    const contentSection = detail.querySelector(".details-nested-section");

    if (!contentSection || !selection.containsNode(contentSection, true)) {
      continue;
    }

    const summary = detail.querySelector("summary");

    const numericAnchor = summary?.id;

    const textualAnchor = (detail as HTMLElement).dataset.anchor;

    const anchorToUse = textualAnchor ?? numericAnchor;

    if (!anchorToUse) {
      continue;
    }

    const url = new URL(location.href);

    url.hash = anchorToUse;
    sources.push({url: url.href});
  }

  return sources;
};

const buildClipboardContent = (
  selectedHtml: string,
  selectedText: string,
  sources: ClipboardSource[]
): SmartClipboardContent => {
  const separatorPlain = "\n---\n";

  const separatorHtml = "<hr>";

  if (sources.length === 1) {
    const source = sources[0];

    return {
      html: `
          ${selectedHtml}
          ${separatorHtml}
          <p>Взято из статьи <a href="${source.url}">${source.url}</a>.</p>
        `,
      plainText: `${selectedText}${separatorPlain}Взято из статьи ${source.url}`,
    };
  }

  const sourcesText = sources.map((source) => source.url).join("\n");

  const sourcesHtml = sources
    .map((source) => `<li><a href="${source.url}">${source.url}</a></li>`)
    .join("");

  return {
    html: `
          ${selectedHtml}
          ${separatorHtml}
          <p>Взято из статей:</p>
          <ul>${sourcesHtml}</ul>
        `,
    plainText: `${selectedText}${separatorPlain}Взято из статей:\n${sourcesText}`,
  };
};

const canApplySmartCopy = (
  event: ClipboardEvent,
  selection: Selection,
  range: Range
): boolean => {
  const sources = collectSources(selection);

  if (sources.length === 0) {
    return false;
  }

  event.preventDefault();
  event.stopPropagation();

  const temporaryDiv = createRangeContainer(range);

  const selectedHtml = temporaryDiv.getHTML();

  const selectedText = selection.toString().trim();

  const {html, plainText} = buildClipboardContent(selectedHtml, selectedText, sources);

  event.clipboardData?.setData("text/plain", plainText);
  event.clipboardData?.setData("text/html", html);

  return true;
};

const handleSmartCopy = (event: ClipboardEvent) => {
  if (event.defaultPrevented) {
    return;
  }

  const activeSelectionRange = getActiveSelectionRange();

  if (!activeSelectionRange) {
    return;
  }

  const {range, selection} = activeSelectionRange;

  const shouldShowCopySuccess =
    isNonSummaryMarkSelection(range) || canApplySmartCopy(event, selection, range);

  if (shouldShowCopySuccess) {
    message.success("Выделенный текст скопирован в буфер обмена");
  }
};

export const useSmartCopy = (isPageLoaded: boolean) => {
  useEffect(() => {
    if (!isPageLoaded) {
      return;
    }

    document.addEventListener("copy", handleSmartCopy);

    return () => {
      document.removeEventListener("copy", handleSmartCopy);
    };
  }, [isPageLoaded]);
};
