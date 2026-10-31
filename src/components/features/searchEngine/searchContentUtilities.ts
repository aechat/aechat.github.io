import {
  type CompiledSearchQuery,
  compileSearchQuery,
  hasCompiledQueryMatchInFields,
  type WorkerRankedResult,
} from "./searchQueryCore";

type ListContentDependencies = {
  additionContainerSelector: string;
  getTopLevelAdditionContainer: (
    element: Element,
    rootDetail: Element,
    additionContainerSelector: string
  ) => Element | undefined;
  normalizeText: (text: string) => string;
  stripHtml: (html: string) => string;
};

type TableContentDependencies = {
  decodeHtmlEntities: (text: string) => string;
  normalizeKeyCombination: (text: string) => string;
};

type SearchMatch = {
  result: string;
  matchCount: number;
};

type SnippetFormattingDependencies = {
  additionContainerSelector: string;
  applyAdditionSnippetStyles: (html: string, additionContainerSelector: string) => string;
  extractKeyCombinationText: (element: Element) => string;
  extractMatchingLine: (content: string, query: string) => string;
  getCompactSnippetScore: (html: string, compiledQuery: CompiledSearchQuery) => number;
  hasMatch: (text: string, compiledQuery: CompiledSearchQuery) => boolean;
  stripHtml: (html: string) => string;
  wrapSnippetWithAdditionContainer: (
    additionContainer: Element,
    snippetHtml: string
  ) => string;
  wrapSnippetWithClosestAddition: (
    element: Element,
    snippetHtml: string,
    additionContainerSelector: string
  ) => string;
};

export type SearchResultMapped = {
  anchor?: string;
  content: string;
  hasTagMatch: boolean;
  hasTitleMatch: boolean;
  id: string;
  isSingleParagraphMatch: boolean;
  tag?: string;
  title: string;
};

export type CachedDetailForMapping = {
  anchor?: string;
  content: string;
  id: string;
  sourceOrder: number;
  tag?: string;
  title: string;
};

type MapSearchResultsDependencies = {
  cachedDetailsByKey: Map<string, CachedDetailForMapping>;
  formatContent: (content: string, compiledQuery: CompiledSearchQuery) => string;
};

const KEY_MODIFIERS = ["ctrl", "alt", "shift", "win", "cmd"] as const;

const KEY_MODIFIER_ALIASES: Record<string, string> = {
  command: "cmd",
  control: "ctrl",
  windows: "win",
};

const ADDITION_STYLE_KEYS = [
  "addition-danger",
  "addition-info",
  "addition-tldr",
  "addition-warning",
] as const;

const MAX_COMPACT_SNIPPET_TEXT_LENGTH = 780;

const escapeRegExp = (string_: string) =>
  string_.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);

const ALIAS_REGEXES: Record<string, RegExp> = Object.fromEntries(
  Object.keys(KEY_MODIFIER_ALIASES).map((alias) => [
    alias,
    new RegExp(escapeRegExp(alias), "g"),
  ])
);

const NORMALIZATION_REGEX = /[^a-zа-яё0-9_+\-=()]/gi;

const REPLACE_CHARS_REGEX = /ё/gi;

const UNDERSCORE_REGEX = /_/g;

export const removeFigureContainers = (root: Element): void => {
  for (const element of root.querySelectorAll('[class*="media-figure"]')) {
    element.remove();
  }
};

const removeNestedDetailsContainers = (root: Element): void => {
  for (const nestedDetails of root.querySelectorAll(
    'details[data-nested-details-summary="true"], details.details-nested, .details-nested'
  )) {
    nestedDetails.remove();
  }
};

const escapeCssClassName = (className: string): string => {
  return typeof CSS !== "undefined" && typeof CSS.escape === "function"
    ? CSS.escape(className)
    : className.replaceAll(/[^a-zA-Z0-9_-]/g, String.raw`\$&`);
};

const cloneWithoutFigures = (element: Element): Element => {
  const clone = element.cloneNode(true) as Element;

  removeFigureContainers(clone);
  removeNestedDetailsContainers(clone);

  return clone;
};

const isListOrParagraph = (element: Element): boolean => {
  const tag = element.tagName;

  return tag === "LI" || tag === "P";
};

const processTextNode = (
  node: Text,
  compiledQuery: CompiledSearchQuery,
  matchTester: SnippetFormattingDependencies["hasMatch"]
): string => {
  const text = node.textContent || "";

  return matchTester(text, compiledQuery) ? text : "";
};

const isKeyCombinationWords = (searchWords: string[]): boolean => {
  return searchWords.some(
    (word) =>
      word.includes("ctrl") ||
      word.includes("alt") ||
      word.includes("shift") ||
      word.includes("win") ||
      word.includes("cmd")
  );
};

const isKeyCombinationMatch = (
  clonedRow: HTMLTableRowElement,
  searchWords: string[],
  normalizeKeyCombination: (text: string) => string
): boolean => {
  const searchPattern = normalizeKeyCombination(searchWords.join(" "));

  const rowText = [...clonedRow.cells]
    .map((cell) => {
      const keyElements = cell.querySelectorAll("mark.key");

      return keyElements.length > 0
        ? [...keyElements]
            .map((element) => element.textContent?.toLowerCase() || "")
            .join(" ")
        : cell.textContent?.toLowerCase() || "";
    })
    .join(" ");

  return normalizeKeyCombination(rowText).includes(searchPattern);
};

const isGeneralMatch = (
  clonedRow: HTMLTableRowElement,
  searchWords: string[]
): boolean => {
  const rowHtml = clonedRow.getHTML().toLowerCase();

  return searchWords.every((word) => rowHtml.includes(word.toLowerCase()));
};

const getExcludedColumnIndices = (table: HTMLTableElement): Set<number> => {
  return new Set(
    [...table.querySelectorAll("th")]
      .map((th, index) =>
        th.textContent?.toLowerCase().includes("описание") ? index : -1
      )
      .filter((index) => index !== -1)
  );
};

const getFilteredTableRows = (table: HTMLTableElement): HTMLTableRowElement[] => {
  return [...table.querySelectorAll("tr")].filter((row) => {
    let parent = row.parentElement;

    while (parent) {
      if (parent.tagName.toLowerCase() === "thead") {
        return false;
      }

      parent = parent.parentElement;
    }

    return true;
  }) as HTMLTableRowElement[];
};

const extractTableHeaders = (
  table: HTMLTableElement,
  decodeHtmlEntities: (text: string) => string
): string[] => {
  return [...table.querySelectorAll("th")]
    .map((th) => decodeHtmlEntities(th.textContent?.trim() ?? ""))
    .filter((header) => !header.toLowerCase().includes("описание"));
};

const processTableRow = (
  row: HTMLTableRowElement,
  excludedColumns: Set<number>,
  isKeyCombo: boolean,
  searchWords: string[],
  normalizeKeyCombination: (text: string) => string
): string | undefined => {
  const clonedRow = row.cloneNode(true) as HTMLTableRowElement;

  for (const [index, cell] of [...clonedRow.cells].entries()) {
    if (excludedColumns.has(index)) {
      cell.remove();
    }
  }

  if (clonedRow.cells.length === 0) {
    return;
  }

  const hasMatch = isKeyCombo
    ? isKeyCombinationMatch(clonedRow, searchWords, normalizeKeyCombination)
    : isGeneralMatch(clonedRow, searchWords);

  return hasMatch ? clonedRow.outerHTML : undefined;
};

const processTable = (
  table: HTMLTableElement,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): string | undefined => {
  const rows = [...table.querySelectorAll("tr")];

  let activeQuery = compiledQuery;

  if (!compiledQuery.isKeyCombination) {
    const cellsText = [...table.querySelectorAll("td")]
      .map((cell) => dependencies.extractKeyCombinationText(cell))
      .join(" ");

    const matchedWords = compiledQuery.searchWords.filter((word) => {
      const wordQuery = compileSearchQuery(word);

      return dependencies.hasMatch(cellsText, wordQuery);
    });

    if (matchedWords.length > 0) {
      activeQuery = compileSearchQuery(matchedWords.join(" "));
    } else {
      return undefined;
    }
  }

  const matchingRows = rows.filter((row) => {
    const cells = [...row.querySelectorAll("td")];

    const rowText = cells
      .map((cell) => dependencies.extractKeyCombinationText(cell))
      .join(" ");

    return dependencies.hasMatch(rowText, activeQuery);
  });

  if (matchingRows.length > 0) {
    const newTable = document.createElement("table");

    const thead = table.querySelector(":scope > thead");

    if (thead) {
      newTable.append(thead.cloneNode(true));
    }

    const tbody = document.createElement("tbody");

    for (const row of matchingRows) {
      tbody.append(row.cloneNode(true));
    }

    newTable.append(tbody);

    return newTable.outerHTML;
  }

  return undefined;
};

const processContainerChildren = (
  element: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): SearchMatch => {
  let result = "";

  let matchCount = 0;

  for (const node of element.childNodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const textResult = processTextNode(
        node as Text,
        compiledQuery,
        dependencies.hasMatch
      );

      if (textResult) {
        result += textResult;
        matchCount += 1;
      }

      continue;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const elementNode = node as Element;

    if (elementNode.classList.toString().includes("media-figure")) {
      continue;
    }

    const elementResult = processElement(elementNode, compiledQuery, dependencies);

    if (!elementResult.result) {
      continue;
    }

    result += elementResult.result;
    matchCount += elementResult.matchCount;
  }

  return {matchCount, result};
};

const handleListWithNestedMatches = (
  element: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): SearchMatch => {
  const ul = element.querySelector(":scope > ul");

  const nestedItems = ul ? [...ul.querySelectorAll("li")] : [];

  const matchingNestedItems = nestedItems.filter((item) =>
    dependencies.hasMatch(item.textContent || "", compiledQuery)
  );

  const clone = cloneWithoutFigures(element);

  if (!ul || matchingNestedItems.length === 0) {
    return {
      matchCount: 1,
      result: dependencies.wrapSnippetWithClosestAddition(
        element,
        `<ul>${clone.outerHTML}</ul>`,
        dependencies.additionContainerSelector
      ),
    };
  }

  const newUl = document.createElement("ul");

  for (const item of matchingNestedItems) {
    const nestedItemClone = cloneWithoutFigures(item);

    newUl.append(nestedItemClone);
  }

  const oldUl = clone.querySelector(":scope > ul");

  if (oldUl) {
    oldUl.replaceWith(newUl);
  }

  return {
    matchCount: matchingNestedItems.length + 1,
    result: dependencies.wrapSnippetWithClosestAddition(
      element,
      `<ul>${clone.outerHTML}</ul>`,
      dependencies.additionContainerSelector
    ),
  };
};

const processElement = (
  element: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): SearchMatch => {
  if (isListOrParagraph(element)) {
    const sanitizedElement = cloneWithoutFigures(element);

    const fullText = (sanitizedElement as HTMLElement).textContent || "";

    if (!dependencies.hasMatch(fullText, compiledQuery)) {
      return {matchCount: 0, result: ""};
    }

    if (element.tagName === "LI") {
      return handleListWithNestedMatches(element, compiledQuery, dependencies);
    }

    return {
      matchCount: 1,
      result: dependencies.wrapSnippetWithClosestAddition(
        element,
        sanitizedElement.outerHTML,
        dependencies.additionContainerSelector
      ),
    };
  }

  return processContainerChildren(element, compiledQuery, dependencies);
};

const getTruncatedTable = (table: HTMLTableElement): string => {
  const maxRows = 8;

  const newTable = document.createElement("table");

  const thead = table.querySelector(":scope > thead");

  if (thead) {
    newTable.append(thead.cloneNode(true));
  }

  const tbody = table.querySelector(":scope > tbody");

  const allRows = tbody
    ? [...tbody.querySelectorAll("tr")]
    : [...table.querySelectorAll("tr")].filter(
        (row) => !row.parentElement || row.parentElement.tagName.toLowerCase() !== "thead"
      );

  const newTbody = document.createElement("tbody");

  const rows = allRows.slice(0, maxRows);

  for (const row of rows) {
    newTbody.append(row.cloneNode(true));
  }

  const truncatedCount = allRows.length - maxRows;

  if (truncatedCount > 0) {
    const tr = document.createElement("tr");

    tr.className = "table-truncated-row";

    const td = document.createElement("td");

    const maxCols = Math.max(
      ...allRows.map((row) => row.querySelectorAll("td, th").length),
      1
    );

    td.setAttribute("colspan", maxCols.toString());
    td.textContent = `...и ещё ${truncatedCount} строк`;
    tr.append(td);
    newTbody.append(tr);
  }

  newTable.append(newTbody);

  return newTable.outerHTML;
};

const getFirstCleanParagraphOrElement = (root: Element): string => {
  const firstParagraph = root.querySelector(
    ":scope details > p, :scope details > div > p"
  );

  if (firstParagraph) {
    const cleanedParagraph = firstParagraph.cloneNode(true) as Element;

    removeFigureContainers(cleanedParagraph);

    return cleanedParagraph.outerHTML;
  }

  const firstElement = root.firstElementChild;

  if (firstElement) {
    if (firstElement.tagName.toLowerCase() === "table") {
      return getTruncatedTable(firstElement as HTMLTableElement);
    }

    const cleanedElement = firstElement.cloneNode(true) as Element;

    removeFigureContainers(cleanedElement);

    return cleanedElement.outerHTML;
  }

  return "";
};

const isKeyCombinationTablePresent = (tables: NodeListOf<HTMLTableElement>): boolean => {
  return [...tables].some((table) => {
    const headers = [...table.querySelectorAll("th")];

    return headers.some((th) => {
      const text = th.textContent?.toLowerCase() || "";

      return text.includes("комбинация") || text.includes("действие");
    });
  });
};

const pickBestListOrParagraphMatch = (
  root: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): SearchMatch => {
  let bestResult: SearchMatch = {matchCount: 0, result: ""};

  const listItems = root.querySelectorAll(":scope ul > li");

  for (const item of listItems) {
    const itemResult = processElement(item, compiledQuery, dependencies);

    if (itemResult.matchCount > bestResult.matchCount) {
      bestResult = itemResult;
    }
  }

  if (!bestResult.result) {
    const paragraphs = root.querySelectorAll("p");

    for (const paragraph of paragraphs) {
      const paragraphResult = processElement(paragraph, compiledQuery, dependencies);

      if (paragraphResult.matchCount > bestResult.matchCount) {
        bestResult = paragraphResult;
      }
    }
  }

  return bestResult;
};

const pickTableOrFallback = (
  root: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): string => {
  const tables = root.querySelectorAll("table");

  if (tables.length > 0) {
    const shouldPrioritizeKeyCombinationTable =
      compiledQuery.isKeyCombination && isKeyCombinationTablePresent(tables);

    for (const table of tables) {
      if (shouldPrioritizeKeyCombinationTable) {
        const headers = [...table.querySelectorAll("th")];

        const isKeyCombinationTable = headers.some((th) => {
          const text = th.textContent?.toLowerCase() || "";

          return text.includes("комбинация") || text.includes("действие");
        });

        if (!isKeyCombinationTable) {
          continue;
        }
      }

      const tableResult = processTable(table, compiledQuery, dependencies);

      if (tableResult) {
        return tableResult;
      }
    }

    return getTruncatedTable(tables[0]);
  }

  return getFirstCleanParagraphOrElement(root);
};

const pickBestCompactSnippet = (
  root: Element,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): string | undefined => {
  const candidates = root.querySelectorAll("p, li");

  let bestHtml: string | undefined;

  let bestScore = -Infinity;

  for (const candidate of candidates) {
    const processedCandidate = processElement(candidate, compiledQuery, dependencies);

    if (!processedCandidate.result) {
      continue;
    }

    let candidateHtml = processedCandidate.result;

    const additionContainer = candidate.closest(dependencies.additionContainerSelector);

    if (additionContainer) {
      candidateHtml = dependencies.wrapSnippetWithAdditionContainer(
        additionContainer,
        candidateHtml
      );
    }

    if (dependencies.stripHtml(candidateHtml).length > MAX_COMPACT_SNIPPET_TEXT_LENGTH) {
      const compactLineHtml = dependencies.extractMatchingLine(
        candidateHtml,
        compiledQuery.searchWords.join(" ")
      );

      candidateHtml = additionContainer
        ? dependencies.wrapSnippetWithAdditionContainer(
            additionContainer,
            compactLineHtml
          )
        : compactLineHtml;
    }

    const candidateScore = dependencies.getCompactSnippetScore(
      candidateHtml,
      compiledQuery
    );

    if (candidateScore <= bestScore) {
      continue;
    }

    bestScore = candidateScore;
    bestHtml = candidateHtml;
  }

  return bestHtml;
};

export const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replaceAll(REPLACE_CHARS_REGEX, "е")
    .replaceAll(UNDERSCORE_REGEX, " ")
    .replaceAll(NORMALIZATION_REGEX, " ")
    .replaceAll(/\s+/g, " ")
    .trim();
};

export const normalizeWord = (word: string): string => {
  return normalizeText(word).replaceAll(" ", "");
};

export const extractSearchWords = (query: string): string[] => [
  ...new Set(
    query
      .split(/\s+/)
      .flatMap((word) => normalizeText(word).split(" ").filter(Boolean))
      .filter(Boolean)
  ),
];

export const isKeyCombinationSearch = (text: string): boolean => {
  const lowerText = text.toLowerCase();

  if (lowerText.includes("+")) {
    return KEY_MODIFIERS.some((modifier) => lowerText.includes(modifier));
  }

  const words = lowerText.split(/\s+/).filter(Boolean);

  return (
    words.length > 0 &&
    words.every(
      (word) => (KEY_MODIFIERS as readonly string[]).includes(word) || word.length <= 2
    ) &&
    KEY_MODIFIERS.some((modifier) => lowerText.includes(modifier))
  );
};

export const normalizeKeyCombination = (text: string): string => {
  let normalized = text.toLowerCase();

  for (const [alias, standard] of Object.entries(KEY_MODIFIER_ALIASES)) {
    normalized = normalized.replace(ALIAS_REGEXES[alias], () => standard);
  }

  return normalized.replaceAll("+", " ").replaceAll(/\s+/g, " ").trim();
};

export const getAdditionContainerSelector = (
  additionStyles: Record<string, string | undefined>
): string => {
  const classNames = ADDITION_STYLE_KEYS.map((key) => additionStyles[key]).filter(
    (className): className is string => typeof className === "string"
  );

  return classNames.map((className) => `.${escapeCssClassName(className)}`).join(", ");
};

export const wrapSnippetWithClosestAddition = (
  element: Element,
  snippetHtml: string,
  additionContainerSelector: string
): string => {
  const additionContainer = element.closest(additionContainerSelector);

  return additionContainer
    ? wrapSnippetWithAdditionContainer(additionContainer, snippetHtml)
    : snippetHtml;
};

export const wrapSnippetWithAdditionContainer = (
  additionContainer: Element,
  snippetHtml: string
): string => {
  const containerTag = additionContainer.tagName.toLowerCase();

  const containerClassName = additionContainer.getAttribute("class") || "";

  const containerAttributes = containerClassName ? ` class="${containerClassName}"` : "";

  return `<${containerTag}${containerAttributes}><div>${snippetHtml}</div></${containerTag}>`;
};

const ENTITY_CLASS_NAMES = [
  "app",
  "plugin",
  "file",
  "key",
  "select",
  "video",
  "audio",
  "image",
  "path",
  "word",
  "tag",
] as const;

const COMBINED_ENTITY_SELECTOR = ENTITY_CLASS_NAMES.map(
  (className) => `mark.${className}`
).join(", ");

const MAX_FORMATTED_SNIPPET_CACHE_SIZE = 600;

const formattedSnippetCache = new Map<string, string>();

const entityExtractionState: {root: HTMLDivElement | undefined} = {
  root: undefined,
};

export const applyAdditionSnippetStyles = (
  html: string,
  additionContainerSelector: string
): string => {
  if (!html || !additionContainerSelector || !html.includes("addition")) {
    return html;
  }

  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = html;

  const allAdditionElements = [
    ...temporaryDiv.querySelectorAll(additionContainerSelector),
  ];

  if (allAdditionElements.length === 0) {
    return html;
  }

  const nestedAdditionContainers = allAdditionElements.filter((element) => {
    const parentAdditionContainer = element.parentElement?.closest(
      additionContainerSelector
    );

    return Boolean(parentAdditionContainer);
  });

  for (const nestedAdditionContainer of nestedAdditionContainers) {
    const fragment = document.createDocumentFragment();

    while (nestedAdditionContainer.firstChild) {
      fragment.append(nestedAdditionContainer.firstChild);
    }

    nestedAdditionContainer.replaceWith(fragment);
  }

  for (const element of temporaryDiv.querySelectorAll(additionContainerSelector)) {
    if (!(element instanceof HTMLElement)) {
      continue;
    }

    element.style.fontSize = "0.9rem";
    element.style.margin = "10px";

    if (element.closest("li")) {
      element.style.marginInline = "0";
    }
  }

  return temporaryDiv.getHTML();
};

export const getTopLevelAdditionContainer = (
  element: Element,
  rootDetail: Element,
  additionContainerSelector: string
): Element | undefined => {
  let additionContainer: Element | null = element.closest(additionContainerSelector);

  if (additionContainer === null) {
    return;
  }

  while (additionContainer.parentElement !== null) {
    const parentAdditionContainer: Element | null =
      additionContainer.parentElement.closest(additionContainerSelector);

    if (!parentAdditionContainer || !rootDetail.contains(parentAdditionContainer)) {
      break;
    }

    additionContainer = parentAdditionContainer;
  }

  return additionContainer ?? undefined;
};

export const buildAdditionsHtml = (
  detail: Element,
  additionContainerSelector: string
): string => {
  const additions = [...detail.querySelectorAll(additionContainerSelector)].filter(
    (addition) => {
      const parentAddition = addition.parentElement?.closest(additionContainerSelector);

      return !parentAddition || !detail.contains(parentAddition);
    }
  );

  if (additions.length === 0) {
    return "";
  }

  const hasMediaFigures = Boolean(detail.querySelector('[class*="media-figure"]'));

  const htmlParts: string[] = [];

  for (const addition of additions) {
    if (!hasMediaFigures) {
      htmlParts.push(addition.outerHTML);

      continue;
    }

    const clone = addition.cloneNode(true) as Element;

    removeFigureContainers(clone);
    htmlParts.push(clone.outerHTML);
  }

  return htmlParts.filter(Boolean).join("\n");
};

export const collectDividerTexts = (detail: Element): string[] => {
  return [...detail.querySelectorAll(".ant-divider-inner-text")]
    .map((element) => element.textContent?.trim() || "")
    .filter(Boolean);
};

export const collectFlexibleLinksTexts = (detail: Element): string[] => {
  return [...detail.querySelectorAll(":scope .flexible-links a")]
    .map((element) => element.textContent?.trim() || "")
    .filter(Boolean);
};

export const collectLinkHrefs = (detail: Element): string[] => {
  return [...detail.querySelectorAll("a[href]")]
    .map((element) => element.getAttribute("href")?.trim() || "")
    .filter(Boolean);
};

export const buildParagraphsHtml = (detail: Element): string => {
  const paragraphs = [...detail.querySelectorAll<HTMLParagraphElement>("p")];

  if (paragraphs.length === 0) {
    return "";
  }

  const hasMediaFigures = Boolean(detail.querySelector('[class*="media-figure"]'));

  const htmlParts: string[] = [];

  for (const paragraph of paragraphs) {
    if (!hasMediaFigures) {
      htmlParts.push(paragraph.outerHTML);

      continue;
    }

    const clone = paragraph.cloneNode(true) as Element;

    removeFigureContainers(clone);
    htmlParts.push(clone.outerHTML);
  }

  return htmlParts.filter(Boolean).join("\n");
};

export const buildTableGroupsHtml = (
  detail: Element,
  searchWords: string[],
  dependencies: TableContentDependencies
): string => {
  const tableGroups: Record<string, string[]> = {};

  const tables = [...detail.querySelectorAll<HTMLTableElement>("table")];

  const isKeyCombo = isKeyCombinationWords(searchWords);

  for (const table of tables) {
    const headers = extractTableHeaders(table, dependencies.decodeHtmlEntities);

    const headerKey = headers.join("|");

    const allRows = getFilteredTableRows(table);

    const excludedColumns = getExcludedColumnIndices(table);

    const processedRows = allRows
      .map((row) =>
        processTableRow(
          row,
          excludedColumns,
          isKeyCombo,
          searchWords,
          dependencies.normalizeKeyCombination
        )
      )
      .filter(Boolean) as string[];

    if (processedRows.length === 0) {
      continue;
    }

    tableGroups[headerKey] ??= [];
    tableGroups[headerKey].push(...processedRows);
  }

  return Object.entries(tableGroups)
    .map(([headerKey, rows]) => {
      const headers = headerKey.split("|").filter(Boolean);

      let headerRow = "";

      if (headers.length > 0) {
        const headersHtml = headers.map((header) => `<th>${header}</th>`).join("");

        headerRow = `<thead><tr>${headersHtml}</tr></thead>`;
      }

      return `<table>${headerRow}${rows.join("")}</table>`;
    })
    .join("");
};

const getCleanElementOuterHtml = (element: Element, hasMediaFigures: boolean): string => {
  if (!hasMediaFigures) {
    return element.outerHTML;
  }

  const clone = element.cloneNode(true) as Element;

  removeFigureContainers(clone);

  return clone.outerHTML;
};

export const buildListContentHtml = (
  detail: Element,
  searchWords: string[],
  dependencies: ListContentDependencies
): string => {
  const uls = [...detail.querySelectorAll<HTMLUListElement>("ul")];

  if (uls.length === 0) {
    return "";
  }

  const hasMediaFigures = Boolean(detail.querySelector('[class*="media-figure"]'));

  const normalizedSearchWords = searchWords.map((word) =>
    dependencies.normalizeText(word)
  );

  const parts: string[] = [];

  const addedParts = new Set<string>();

  for (const ul of uls) {
    const ulHtml = getCleanElementOuterHtml(ul, hasMediaFigures);

    const ulText = hasMediaFigures
      ? dependencies.stripHtml(ulHtml)
      : ul.textContent || "";

    const normalizedUlText = dependencies.normalizeText(ulText);

    const hasMatch =
      normalizedSearchWords.length === 0 ||
      normalizedSearchWords.some((normalizedWord) =>
        normalizedUlText.includes(normalizedWord)
      );

    if (!hasMatch) {
      continue;
    }

    const additionContainer = dependencies.getTopLevelAdditionContainer(
      ul,
      detail,
      dependencies.additionContainerSelector
    );

    const targetHtml = additionContainer
      ? getCleanElementOuterHtml(additionContainer, hasMediaFigures)
      : ulHtml;

    if (addedParts.has(targetHtml)) {
      continue;
    }

    parts.push(targetHtml);
    addedParts.add(targetHtml);
  }

  return parts.filter(Boolean).join("\n");
};

export const extractEntityTextFromContent = (content: string): string => {
  if (!content.trim() || !content.includes("<mark")) {
    return "";
  }

  entityExtractionState.root ??= document.createElement("div");
  entityExtractionState.root.innerHTML = content;

  const buckets = new Map<string, string[]>();

  for (const className of ENTITY_CLASS_NAMES) {
    buckets.set(className, []);
  }

  for (const element of entityExtractionState.root.querySelectorAll(
    COMBINED_ENTITY_SELECTOR
  )) {
    const text = element.textContent?.trim() || "";

    if (!text) {
      continue;
    }

    for (const className of ENTITY_CLASS_NAMES) {
      if (element.classList.contains(className)) {
        buckets.get(className)?.push(text);
      }
    }
  }

  entityExtractionState.root.replaceChildren();

  return ENTITY_CLASS_NAMES.flatMap((className) => buckets.get(className) ?? []).join(
    " "
  );
};

export const formatSearchSnippetResult = (
  text: string,
  compiledQuery: CompiledSearchQuery,
  dependencies: SnippetFormattingDependencies
): string => {
  const temporaryDiv = document.createElement("div");

  temporaryDiv.innerHTML = text;

  for (const element of temporaryDiv.querySelectorAll(
    ".ant-divider, .ant-divider-inner-text"
  )) {
    element.remove();
  }

  const tagMatch = (temporaryDiv.querySelector("[data-tags]") as HTMLElement)?.dataset
    .tags;

  const titleMatch = temporaryDiv.querySelector(":scope summary h2")?.textContent;

  if (
    (tagMatch && dependencies.hasMatch(tagMatch, compiledQuery)) ||
    (titleMatch && dependencies.hasMatch(titleMatch, compiledQuery))
  ) {
    return dependencies.applyAdditionSnippetStyles(
      getFirstCleanParagraphOrElement(temporaryDiv),
      dependencies.additionContainerSelector
    );
  }

  const bestCompactSnippet = pickBestCompactSnippet(
    temporaryDiv,
    compiledQuery,
    dependencies
  );

  if (bestCompactSnippet) {
    return dependencies.applyAdditionSnippetStyles(
      bestCompactSnippet,
      dependencies.additionContainerSelector
    );
  }

  const bestResult = pickBestListOrParagraphMatch(
    temporaryDiv,
    compiledQuery,
    dependencies
  );

  return dependencies.applyAdditionSnippetStyles(
    bestResult.result || pickTableOrFallback(temporaryDiv, compiledQuery, dependencies),
    dependencies.additionContainerSelector
  );
};

export const mapRankedResultsToSearchResults = (
  queryText: string,
  rankedResults: WorkerRankedResult[],
  dependencies: MapSearchResultsDependencies
): SearchResultMapped[] => {
  const compiledQuery = compileSearchQuery(queryText);

  const normalizedCacheQuery = compiledQuery.originalText.trim().toLowerCase();

  const mappedResults: SearchResultMapped[] = [];

  for (const workerResult of rankedResults) {
    const detailKey = `${workerResult.id}::${workerResult.sourceOrder}`;

    const detail = dependencies.cachedDetailsByKey.get(detailKey);

    if (!detail) {
      continue;
    }

    const snippetCacheKey = `${detailKey}::${normalizedCacheQuery}`;

    let formattedContent = formattedSnippetCache.get(snippetCacheKey);

    if (formattedContent === undefined) {
      formattedContent = dependencies.formatContent(detail.content, compiledQuery);

      if (formattedSnippetCache.size >= MAX_FORMATTED_SNIPPET_CACHE_SIZE) {
        const oldestKey = formattedSnippetCache.keys().next().value;

        if (oldestKey !== undefined) {
          formattedSnippetCache.delete(oldestKey);
        }
      }

      formattedSnippetCache.set(snippetCacheKey, formattedContent);
    }

    mappedResults.push({
      ...(detail.anchor && {anchor: detail.anchor}),
      ...(detail.tag && {tag: detail.tag}),
      content: formattedContent,
      hasTagMatch: workerResult.hasTagMatch,
      hasTitleMatch: workerResult.hasTitleMatch,
      id: detail.id,
      isSingleParagraphMatch: workerResult.isSingleParagraphMatch,
      title: detail.title,
    });
  }

  return mappedResults;
};

export const getMatchingTagsByQuery = (
  tag: string | undefined,
  compiledQuery: CompiledSearchQuery
): string[] => {
  return !tag || compiledQuery.searchWords.length === 0 || tag.trim() === ""
    ? []
    : tag
        .split(",")
        .map((tagItem) => tagItem.trim())
        .filter(Boolean)
        .filter((tagItem) =>
          hasCompiledQueryMatchInFields([tagItem], compiledQuery, "any")
        );
};

export const getResultWord = (count: number): string => {
  if (count % 10 === 1 && count % 100 !== 11) {
    return "результат";
  }

  return count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)
    ? "результата"
    : "результатов";
};

export {extractMatchingLine} from "./searchHighlightUtilities";
