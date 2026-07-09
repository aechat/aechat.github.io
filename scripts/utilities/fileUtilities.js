import {existsSync, readdirSync, statSync} from "node:fs";

import path from "node:path";

import {shouldIgnore} from "./ignore.js";

export const ROOT = process.cwd();

export const SECTIONS_ROOT = path.join(ROOT, "src", "pages", "sections");

export const SCRIPT_LOGS_ROOT = path.join(ROOT, "scripts", "logs");

export const DEFAULT_SECTIONS = ["aefaq", "prfaq", "psfaq"];

export const SCRIPT_EXTENSIONS = new Set([".tsx", ".ts", ".jsx", ".js"]);

export function toPosixPath(filePath) {
  return filePath.replaceAll(path.sep, "/");
}

export function toRelativePath(filePath, root = ROOT) {
  return toPosixPath(path.relative(root, filePath));
}

export function getSectionRoots(sections = DEFAULT_SECTIONS, sourceRoot = SECTIONS_ROOT) {
  return sections.map((section) => path.join(sourceRoot, section));
}

export function walk(dir, callback) {
  if (!existsSync(dir)) {
    return;
  }

  const files = readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (shouldIgnore(fullPath)) {
      continue;
    }

    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

export function walkFiles({
  roots = [ROOT],
  extensions,
  shouldInclude = () => true,
  respectIgnore = true,
} = {}) {
  const files = [];

  const extensionSet = extensions ? new Set(extensions) : undefined;

  const visit = (currentPath) => {
    if (!existsSync(currentPath)) {
      return;
    }

    if (respectIgnore && shouldIgnore(currentPath)) {
      return;
    }

    const stat = statSync(currentPath);

    if (stat.isDirectory()) {
      for (const entry of readdirSync(currentPath)) {
        visit(path.join(currentPath, entry));
      }

      return;
    }

    if (extensionSet && !extensionSet.has(path.extname(currentPath))) {
      return;
    }

    if (shouldInclude(currentPath)) {
      files.push(currentPath);
    }
  };

  for (const root of roots) {
    visit(root);
  }

  return files.sort((a, b) => toRelativePath(a).localeCompare(toRelativePath(b)));
}

export function getSectionFiles({
  sections = DEFAULT_SECTIONS,
  extensions = SCRIPT_EXTENSIONS,
} = {}) {
  return walkFiles({
    roots: getSectionRoots(sections),
    extensions,
  });
}
