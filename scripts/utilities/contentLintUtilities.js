import fs from "node:fs";

import path from "node:path";

import {getSectionFiles, ROOT, SECTIONS_ROOT, toRelativePath} from "./fileUtilities.js";

import {createFinding} from "./reportUtilities.js";

import {lineFromOffset, normalizeInlineText, stripTags} from "./textUtilities.js";

export const APP_NAMES = [
  "Adobe Premiere",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "Adobe Photoshop",
  "Adobe Media Encoder",
  "Adobe Creative Cloud",
  "Shutter Encoder",
  "Subtitle Edit",
  "FFmpeg",
  "Ezgif",
  "Stable Diffusion",
];

export const PLUGIN_NAMES = [
  "AfterCodecs",
  "Voukoder",
  "Duplicate Frame Remover",
  "Mocha",
  "Element 3D",
  "Cineware",
  "GifGun",
  "FX Console",
  "AEUX",
  "Auto Crop 3",
  "Depth Anything V2",
];

const HTML_TAG_RE = /<\/?\s*[A-Za-z][^>]*>/;

const STRING_PROP_RE = /\b(title|caption|tag|anchor)\s*=\s*(["'])([\s\S]*?)\2/g;

const DETAILS_SUMMARY_OPEN_RE = /<DetailsSummary\b([\s\S]*?)>/g;

const NESTED_DETAILS_SUMMARY_OPEN_RE = /<NestedDetailsSummary\b([\s\S]*?)>/g;

const DIVIDER_RE = /<Divider>([\s\S]*?)<\/Divider>/g;

const KEBAB_CASE_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const SUSPICIOUS_ANCHORS = new Set(["test", "new", "example", "todo", "temp"]);

const DIVIDER_MAX_TEXT_LENGTH = 80;

export function getContentFiles(sections) {
  return getSectionFiles({sections});
}

export function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function getStringProp(attrs, name) {
  const match = attrs.match(new RegExp(`\\b${name}\\s*=\\s*(["'])([\\s\\S]*?)\\1`));

  return match?.[2];
}

export function hasMarked(inner, className, name) {
  const re = new RegExp(
    `<mark\\s+className=["']${className}["']>[^<]*${escapeRegex(name)}[^<]*<\\/mark>`,
    "i"
  );

  return re.test(inner);
}

export function hasPlain(inner, name) {
  const re = new RegExp(`\\b${escapeRegex(name)}\\b`, "i");

  return re.test(inner);
}

function makeFinding(file, line, type, message, snippet) {
  return createFinding({
    file: toRelativePath(file),
    line,
    message,
    snippet,
    type,
  });
}

export function collectNoHtmlStringFindings(files) {
  const errors = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");

    STRING_PROP_RE.lastIndex = 0;

    let match;

    while ((match = STRING_PROP_RE.exec(content)) !== null) {
      const attr = match[1];

      const value = match[3];

      if (!HTML_TAG_RE.test(value)) {
        continue;
      }

      errors.push(
        makeFinding(
          file,
          lineFromOffset(content, match.index),
          `html-in-${attr}`,
          `HTML-подобная разметка внутри ${attr}`,
          normalizeInlineText(value.slice(0, 140))
        )
      );
    }
  }

  return {errors, warnings: []};
}

export function collectDividerStyleFindings(files, {strict = false} = {}) {
  const errors = [];

  const warnings = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");

    DIVIDER_RE.lastIndex = 0;

    let match;

    while ((match = DIVIDER_RE.exec(content)) !== null) {
      const inner = match[1];

      const text = normalizeInlineText(stripTags(inner));

      const line = lineFromOffset(content, match.index);

      if (inner.includes("?")) {
        const finding = makeFinding(
          file,
          line,
          "divider-question-mark",
          "Текст Divider содержит вопросительный знак",
          normalizeInlineText(inner).slice(0, 140)
        );

        if (strict) {
          errors.push(finding);
        } else {
          warnings.push(finding);
        }
      }

      if (text.length > DIVIDER_MAX_TEXT_LENGTH) {
        warnings.push(
          makeFinding(
            file,
            line,
            "divider-too-long",
            `Текст Divider длиннее ${DIVIDER_MAX_TEXT_LENGTH} символов`,
            text.slice(0, 140)
          )
        );
      }

      for (const app of APP_NAMES) {
        if (hasPlain(inner, app) && !hasMarked(inner, "app", app)) {
          errors.push(
            makeFinding(
              file,
              line,
              "divider-app-mark",
              `${app} нужно обернуть в mark.app`,
              `${app} нужно обернуть в mark.app`
            )
          );
        }
      }

      for (const plugin of PLUGIN_NAMES) {
        if (hasPlain(inner, plugin) && !hasMarked(inner, "plugin", plugin)) {
          errors.push(
            makeFinding(
              file,
              line,
              "divider-plugin-mark",
              `${plugin} нужно обернуть в mark.plugin`,
              `${plugin} нужно обернуть в mark.plugin`
            )
          );
        }
      }
    }
  }

  return {errors, warnings};
}

function pushStrictFinding({errors, finding, strict, warnings}) {
  if (strict) {
    errors.push(finding);
  } else {
    warnings.push(finding);
  }
}

function getSectionKey(file) {
  const relative = toRelativePath(file, SECTIONS_ROOT);

  const [section] = relative.split("/");

  if (!section || section.startsWith("..")) {
    return "default";
  }

  return section;
}

export function collectDetailsSummaryFindings(files, {strict = false} = {}) {
  const errors = [];

  const warnings = [];

  const anchorsBySection = new Map();

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");

    const section = getSectionKey(file);

    let sectionAnchors = anchorsBySection.get(section);

    if (!sectionAnchors) {
      sectionAnchors = new Map();
      anchorsBySection.set(section, sectionAnchors);
    }

    DETAILS_SUMMARY_OPEN_RE.lastIndex = 0;

    let match;

    while ((match = DETAILS_SUMMARY_OPEN_RE.exec(content)) !== null) {
      const attrs = match[1] ?? "";

      const line = lineFromOffset(content, match.index);

      const anchor = getStringProp(attrs, "anchor");

      const title = getStringProp(attrs, "title");

      if (!anchor) {
        pushStrictFinding({
          errors,
          finding: makeFinding(
            file,
            line,
            "details-missing-anchor",
            "В DetailsSummary отсутствует anchor"
          ),
          strict,
          warnings,
        });
      } else {
        const entries = sectionAnchors.get(anchor) ?? [];

        entries.push({file, line});
        sectionAnchors.set(anchor, entries);

        if (!KEBAB_CASE_RE.test(anchor)) {
          pushStrictFinding({
            errors,
            finding: makeFinding(
              file,
              line,
              "details-anchor-case",
              "anchor в DetailsSummary должен быть в kebab-case",
              anchor
            ),
            strict,
            warnings,
          });
        }

        if (SUSPICIOUS_ANCHORS.has(anchor)) {
          warnings.push(
            makeFinding(
              file,
              line,
              "details-suspicious-anchor",
              "anchor в DetailsSummary похож на временный",
              anchor
            )
          );
        }
      }

      if (!title) {
        pushStrictFinding({
          errors,
          finding: makeFinding(
            file,
            line,
            "details-missing-title",
            "В DetailsSummary отсутствует title"
          ),
          strict,
          warnings,
        });
      }

      const closeIndex = content.indexOf(
        "</DetailsSummary>",
        match.index + match[0].length
      );

      if (closeIndex !== -1) {
        const body = content.slice(match.index + match[0].length, closeIndex);

        if (normalizeInlineText(body).length === 0) {
          warnings.push(
            makeFinding(file, line, "details-empty-body", "Тело DetailsSummary пустое")
          );
        }
      }

      const tag = getStringProp(attrs, "tag");

      if (tag) {
        if (/,(?=\S)/.test(tag)) {
          warnings.push(
            makeFinding(
              file,
              line,
              "details-tag-spacing",
              "Значения tag в DetailsSummary должны разделяться запятой и пробелом",
              tag.slice(0, 140)
            )
          );
        }

        const tags = tag
          .split(",")
          .map((item) => item.trim().toLowerCase())
          .filter(Boolean);

        if (new Set(tags).size !== tags.length) {
          warnings.push(
            makeFinding(
              file,
              line,
              "details-duplicate-tag",
              "tag в DetailsSummary содержит дубли",
              tag.slice(0, 140)
            )
          );
        }
      }
    }

    NESTED_DETAILS_SUMMARY_OPEN_RE.lastIndex = 0;

    while ((match = NESTED_DETAILS_SUMMARY_OPEN_RE.exec(content)) !== null) {
      const attrs = match[1] ?? "";

      const line = lineFromOffset(content, match.index);

      const anchor = getStringProp(attrs, "anchor");

      const title = getStringProp(attrs, "title");

      if (!title) {
        pushStrictFinding({
          errors,
          finding: makeFinding(
            file,
            line,
            "nested-details-missing-title",
            "В NestedDetailsSummary отсутствует title"
          ),
          strict,
          warnings,
        });
      }

      if (anchor && !KEBAB_CASE_RE.test(anchor)) {
        pushStrictFinding({
          errors,
          finding: makeFinding(
            file,
            line,
            "nested-details-anchor-case",
            "anchor в NestedDetailsSummary должен быть в kebab-case",
            anchor
          ),
          strict,
          warnings,
        });
      }
    }
  }

  for (const sectionAnchors of anchorsBySection.values()) {
    for (const [anchor, entries] of sectionAnchors.entries()) {
      if (entries.length < 2) {
        continue;
      }

      for (const entry of entries) {
        warnings.push(
          makeFinding(
            entry.file,
            entry.line,
            "details-duplicate-anchor",
            "anchor в DetailsSummary дублируется",
            anchor
          )
        );
      }
    }
  }

  return {errors, warnings};
}

const ARTICLE_MEDIA_OPEN_RE = /<ArticleMedia\b([\s\S]*?)(?:\/>|><\/ArticleMedia>)/g;

export function collectArticleMediaFindings(files) {
  const errors = [];

  const warnings = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");

    ARTICLE_MEDIA_OPEN_RE.lastIndex = 0;

    let match;

    while ((match = ARTICLE_MEDIA_OPEN_RE.exec(content)) !== null) {
      const attrs = match[1] ?? "";

      const line = lineFromOffset(content, match.index);

      const src = getStringProp(attrs, "src");

      const type = getStringProp(attrs, "type");

      if (!src) {
        errors.push(
          makeFinding(
            file,
            line,
            "article-media-missing-src",
            "У компонента ArticleMedia отсутствует свойство src"
          )
        );

        continue;
      }

      if (!type) {
        errors.push(
          makeFinding(
            file,
            line,
            "article-media-missing-type",
            "У компонента ArticleMedia отсутствует свойство type"
          )
        );

        continue;
      }

      if (
        type === "youtube" ||
        src.startsWith("http://") ||
        src.startsWith("https://") ||
        src.startsWith("//")
      ) {
        continue;
      }

      let resolvedSource = src;

      if (!resolvedSource.startsWith("/")) {
        if (resolvedSource.startsWith("media/")) {
          resolvedSource = `/${resolvedSource}`;
        } else {
          resolvedSource = `/media/${resolvedSource}`;
        }
      }

      const fullPath = path.join(ROOT, "public", resolvedSource);

      if (!fs.existsSync(fullPath)) {
        errors.push(
          makeFinding(
            file,
            line,
            "article-media-missing-file",
            `Медиафайл "${src}" не найден по пути "public${resolvedSource}"`,
            `src="${src}"`
          )
        );
      }
    }
  }

  return {errors, warnings};
}

export function mergeFindings(...groups) {
  return groups.reduce(
    (result, group) => ({
      errors: [...result.errors, ...group.errors],
      warnings: [...result.warnings, ...group.warnings],
    }),
    {errors: [], warnings: []}
  );
}
