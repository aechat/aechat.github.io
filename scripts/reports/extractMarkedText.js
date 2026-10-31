import fs from "node:fs";

import path from "node:path";

import {
  getSectionFiles,
  SCRIPT_LOGS_ROOT,
  SECTIONS_ROOT,
  toRelativePath,
} from "../utilities/fileUtilities.js";

import {
  addToMapArray,
  lineFromOffset,
  makeTimestamp,
  safeDocName,
} from "../utilities/textUtilities.js";

const MAX_NESTED_TAGS = 2;

const MAX_TEXT_LENGTH = 280;

function decodeHtmlEntities(value) {
  return value
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ");
}

function stripTagsAndBraces(value) {
  let result = "";

  let tagDepth = 0;

  let braceDepth = 0;

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];

    if (character === "<") {
      tagDepth += 1;
    } else if (character === ">") {
      tagDepth = Math.max(0, tagDepth - 1);
    } else if (character === "{") {
      braceDepth += 1;
    } else if (character === "}") {
      braceDepth = Math.max(0, braceDepth - 1);
    } else if (tagDepth === 0 && braceDepth === 0) {
      result += character;
    }
  }

  return result;
}

function normalizeInnerText(raw) {
  const converted = decodeHtmlEntities(raw).replaceAll(/<br\s*\/?>/gi, "\n");

  const stripped = stripTagsAndBraces(converted);

  return stripped
    .replaceAll(/[\t\r ]+/g, " ")
    .replaceAll(/\n\s+/g, "\n")
    .trim();
}

function splitClassTokens(value) {
  return value
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean);
}

function normalizeClassName(value) {
  const cleaned = value.toLowerCase().replaceAll(/[^a-z0-9_-]/g, "-");

  return cleaned || "no-class";
}

function extractClasses(attrs) {
  const matches = [];

  const patterns = [
    /\bclassName\s*=\s*"([^"]+)"/g,
    /\bclassName\s*=\s*'([^']+)'/g,
    /\bclass\s*=\s*"([^"]+)"/g,
    /\bclass\s*=\s*'([^']+)'/g,
    /\bclassName\s*=\s*\{\s*"([^"]+)"\s*\}/g,
    /\bclassName\s*=\s*\{\s*'([^']+)'\s*\}/g,
    /\bclass\s*=\s*\{\s*"([^"]+)"\s*\}/g,
    /\bclass\s*=\s*\{\s*'([^']+)'\s*\}/g,
  ];

  for (const pattern of patterns) {
    let match;

    while ((match = pattern.exec(attrs)) !== null) {
      matches.push(...splitClassTokens(match[1] ?? ""));
    }
  }

  if (matches.length === 0) {
    return ["no-class"];
  }

  return [...new Set(matches.map(normalizeClassName))];
}

function hasClassAttribute(attrs) {
  return /\bclass(Name)?\s*=/.test(attrs);
}

function discoverTagsWithClasses(content, out) {
  const pattern = /<([A-Za-z][A-Za-z0-9_-]*)\b([^>]*)>/g;

  let match;

  while ((match = pattern.exec(content)) !== null) {
    const tag = match[1];

    const attrs = match[2] ?? "";

    if (hasClassAttribute(attrs)) {
      out.add(tag);
    }
  }
}

function countNestedTags(rawInner) {
  const matches = rawInner.match(/<([A-Za-z][A-Za-z0-9_-]*)\b/g);

  return matches ? matches.length : 0;
}

function shouldKeepExtract(rawInner, text) {
  return countNestedTags(rawInner) <= MAX_NESTED_TAGS && text.length <= MAX_TEXT_LENGTH;
}

function extractByTag(content, tag) {
  const pattern = new RegExp(`<${tag}\\b([^>]*)>([\\s\\S]*?)<\\/${tag}>`, "g");

  const items = [];

  let match;

  while ((match = pattern.exec(content)) !== null) {
    const attrs = match[1] ?? "";

    const rawInner = match[2] ?? "";

    const text = normalizeInnerText(rawInner);

    if (!text) continue;

    if (!shouldKeepExtract(rawInner, text)) continue;

    items.push({
      tag,
      classes: extractClasses(attrs),
      hasClassAttr: hasClassAttribute(attrs),
      line: lineFromOffset(content, match.index),
      text,
    });
  }

  return items;
}

const files = getSectionFiles();

const timestamp = makeTimestamp();

const runDir = path.join(SCRIPT_LOGS_ROOT, `mark-extract-${timestamp}`);

const byFileDir = path.join(runDir, "by-file");

const byClassDir = path.join(runDir, "by-class");

fs.mkdirSync(byFileDir, {recursive: true});
fs.mkdirSync(byClassDir, {recursive: true});

const tagsWithClasses = new Set();

const contentByFile = new Map();

for (const file of files) {
  const rel = toRelativePath(file);

  const content = fs.readFileSync(file, "utf8");

  contentByFile.set(rel, content);
  discoverTagsWithClasses(content, tagsWithClasses);
}

const tags = [...tagsWithClasses].sort();

const byFile = new Map();

const byClass = new Map();

for (const [file, content] of contentByFile.entries()) {
  for (const tag of tags) {
    const items = extractByTag(content, tag);

    for (const item of items) {
      const shouldInclude = item.hasClassAttr || tagsWithClasses.has(item.tag);

      if (!shouldInclude) continue;

      for (const cls of item.classes) {
        const group = `${item.tag}.${cls}`;

        const view = {
          tag: item.tag,
          className: cls,
          group,
          line: item.line,
          text: item.text,
        };

        addToMapArray(byFile, file, view);

        addToMapArray(byClass, group, {
          file,
          line: item.line,
          text: item.text,
        });
      }
    }
  }
}

for (const [file, items] of byFile.entries()) {
  const grouped = new Map();

  for (const item of items) {
    addToMapArray(grouped, item.group, item);
  }

  const lines = [];

  lines.push(`# ${file}`);
  lines.push("");
  lines.push(`Всего извлечений: **${items.length}**`);
  lines.push("");

  const groups = [...grouped.keys()].sort();

  for (const group of groups) {
    const entries = grouped.get(group) ?? [];

    lines.push(`## ${group} (${entries.length})`);
    lines.push("");

    for (const entry of entries) {
      lines.push(`- [строка ${entry.line}] ${entry.text}`);
    }

    lines.push("");
  }

  const outputFile = path.join(byFileDir, safeDocName(file));

  fs.writeFileSync(outputFile, lines.join("\n"), "utf8");
}

for (const [group, items] of byClass.entries()) {
  const lines = [];

  lines.push(`# ${group}`);
  lines.push("");
  lines.push(`Всего извлечений: **${items.length}**`);
  lines.push("");

  for (const entry of items) {
    lines.push(`- ${entry.file} [строка ${entry.line}] ${entry.text}`);
  }

  lines.push("");

  const outputFile = path.join(byClassDir, safeDocName(group));

  fs.writeFileSync(outputFile, lines.join("\n"), "utf8");
}

const indexLines = [];

indexLines.push("# Извлечённый текст из тегов с class/className");
indexLines.push("");
indexLines.push(`Источник: ${toRelativePath(SECTIONS_ROOT)}`);
indexLines.push("Режим: авто по class/className, без фиксированного списка тегов");

indexLines.push(
  `Фильтр шума: nestedTags<=${MAX_NESTED_TAGS}, textLength<=${MAX_TEXT_LENGTH}`
);

indexLines.push("");
indexLines.push(`Файлов с извлечениями: **${byFile.size}**`);
indexLines.push(`Групп tag.class: **${byClass.size}**`);
indexLines.push(`Тегов с классами: **${tagsWithClasses.size}**`);
indexLines.push("");
indexLines.push("## По файлам");
indexLines.push("");

for (const [file, items] of [...byFile.entries()].sort((a, b) =>
  a[0].localeCompare(b[0])
)) {
  const docName = safeDocName(file);

  indexLines.push(`- ${file}: ${items.length} -> [${docName}](./by-file/${docName})`);
}

indexLines.push("");
indexLines.push("## По классам");
indexLines.push("");

for (const [group, items] of [...byClass.entries()].sort((a, b) =>
  a[0].localeCompare(b[0])
)) {
  const docName = safeDocName(group);

  indexLines.push(`- ${group}: ${items.length} -> [${docName}](./by-class/${docName})`);
}

indexLines.push("");

const indexPath = path.join(runDir, "index.log");

fs.writeFileSync(indexPath, indexLines.join("\n"), "utf8");
console.log(`Готово. Директория отчёта: ${toRelativePath(runDir)}`);
console.log(`Файлов с извлечениями: ${byFile.size}`);
console.log(`Групп tag.class: ${byClass.size}`);
console.log(`Тегов с классами: ${tagsWithClasses.size}`);
