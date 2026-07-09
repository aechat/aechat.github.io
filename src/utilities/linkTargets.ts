import {resolveDetailsByAnchor} from "./anchorResolvers";

import {
  getFileNameFromHref,
  isGithubRawFromRepository,
  isHttpLink,
} from "./linkUtilities";

export interface ArticleLinkTarget {
  id: string;
  title: string;
  type: "article";
}

export interface SectionLinkTarget {
  id: string;
  title: string;
  type: "section";
}

export interface InternalPageLinkTarget {
  href: string;
  title?: string;
  type: "page";
}

export interface DownloadLinkTarget {
  fileKind: string;
  fileMarkClass: string;
  fileName: string;
  fileSize?: string;
  href: string;
  type: "download";
}

export type LinkTarget =
  | ArticleLinkTarget
  | SectionLinkTarget
  | InternalPageLinkTarget
  | DownloadLinkTarget
  | {href: string; type: "external"};

const pageTitles: Record<string, string> = {
  "/": "links",
  "/aefaq": "aefaq",
  "/prfaq": "prfaq",
  "/psfaq": "psfaq",
  "/reg": "Активация debug-режима для CEP-расширений",
  "/regfile": "Активация debug-режима для CEP-расширений",
  "/rules": "Правила чатов AEChat и DWChat",
};

const fileMarkClasses: Record<string, string> = {
  avi: "video",
  flac: "audio",
  gif: "image",
  jpeg: "image",
  jpg: "image",
  m4a: "audio",
  mkv: "video",
  mov: "video",
  mp3: "audio",
  mp4: "video",
  ogg: "audio",
  png: "image",
  svg: "image",
  wav: "audio",
  webm: "video",
  webp: "image",
};

const fileKinds: Record<string, string> = {
  "7z": "архив",
  "8be": "плагин",
  "8bf": "плагин",
  "8bi": "плагин",
  "8bx": "плагин",
  "abr": "набор кистей",
  "aep": "проект",
  "aex": "плагин",
  "app": "приложение",
  "atn": "операцию",
  "atom": "пакет шаблонов",
  "avi": "видео",
  "bap": "пресет",
  "bcp": "пресет",
  "bsp": "пресет",
  "bundle": "плагин",
  "ccx": "расширение",
  "cube": "LUT-профиль",
  "definition": "служебный файл",
  "dmg": "установщик",
  "effect": "пресет",
  "enc": "шаблон кодирования",
  "exe": "установщик",
  "ffx": "пресет",
  "flac": "аудио",
  "gif": "изображение",
  "gp": "пресет",
  "grd": "градиент",
  "gz": "архив",
  "hosts": "системный файл",
  "iso": "ISO-образ",
  "itx": "LUT-профиль",
  "jpeg": "изображение",
  "jpg": "изображение",
  "json": "JSON-файл",
  "jsx": "скрипт",
  "jsxbin": "скрипт",
  "license": "лицензионный файл",
  "look": "LUT-профиль",
  "ls3": "LUT-профиль",
  "lut": "LUT-профиль",
  "m4a": "аудио",
  "mblook": "LUT-профиль",
  "mbr": "пакет шаблонов",
  "mkv": "видео",
  "mogrt": "графический шаблон",
  "mov": "видео",
  "mp3": "аудио",
  "mp4": "видео",
  "msi": "установщик",
  "ogg": "аудио",
  "otf": "шрифт",
  "pdf": "документ",
  "pkg": "установщик",
  "plugin": "плагин",
  "png": "изображение",
  "prfpset": "пресет",
  "prm": "плагин",
  "project": "служебный файл",
  "prproj": "проект",
  "rar": "архив",
  "reg": "файл реестра",
  "rgx": "LUT-профиль",
  "svg": "изображение",
  "tar": "архив",
  "thumb": "миниатюру",
  "torrent": "торрент-файл",
  "transition": "пресет",
  "ttf": "шрифт",
  "vst": "аудиоплагин",
  "vst3": "аудиоплагин",
  "wav": "аудио",
  "webm": "видео",
  "webp": "изображение",
  "zip": "архив",
  "zxp": "расширение",
};

const getArticleTitle = (summary: Element): string => {
  const title = summary.querySelector("h2, h3")?.textContent || "без названия";

  return title.replace(/^\d+\.\d+\.\s*/, "");
};

const getAnchor = (target: EventTarget | undefined) =>
  target instanceof Element ? target.closest<HTMLAnchorElement>("a[href]") : undefined;

const resolveDownloadTarget = (
  anchor: HTMLAnchorElement,
  href: string,
  downloadSizeCache: Record<string, string>
): DownloadLinkTarget | undefined => {
  if (
    anchor.hasAttribute("download") ||
    isGithubRawFromRepository(href, "aechat", "links")
  ) {
    const fileName =
      anchor.getAttribute("download")?.trim() || getFileNameFromHref(href, "файл");

    const extension = fileName.split(".").pop()?.toLowerCase() || "";

    return {
      fileKind: fileKinds[extension] || "файл",
      fileMarkClass: fileMarkClasses[extension] || "file",
      fileName,
      fileSize: downloadSizeCache[href],
      href,
      type: "download",
    };
  }

  return undefined;
};

const resolveAnchorTarget = (
  anchor: HTMLAnchorElement,
  href: string,
  currentTarget: EventTarget | undefined
): ArticleLinkTarget | SectionLinkTarget | undefined => {
  if (!href.startsWith("#") || href.length <= 1) return undefined;

  const id = href.slice(1);

  const details = resolveDetailsByAnchor(id);

  if (details) {
    if (
      currentTarget instanceof Element &&
      currentTarget.closest("details") === details
    ) {
      return undefined;
    }

    const summary = details.querySelector("summary");

    if (summary?.id)
      return {id: summary.id, title: getArticleTitle(summary), type: "article"};
  }

  if (document.getElementById(id)) {
    const rawTitle = anchor.textContent?.trim() || "раздел";

    const cleanTitle = rawTitle.replaceAll(/(^[«"'])|([»"']$)/g, "");

    return {id, title: cleanTitle, type: "section"};
  }

  return undefined;
};

export const resolveLinkTarget = (
  target: EventTarget | undefined,
  currentTarget: EventTarget | undefined,
  downloadSizeCache: Record<string, string> = {}
): LinkTarget | undefined => {
  const anchor = getAnchor(target);

  if (!anchor) return undefined;

  const href = anchor.getAttribute("href") || "";

  const download = resolveDownloadTarget(anchor, href, downloadSizeCache);

  if (download) return download;

  if (isHttpLink(href)) return {href, type: "external"};

  if (href.startsWith("/") && !href.startsWith("#")) {
    return {href, title: pageTitles[href] || anchor.textContent?.trim(), type: "page"};
  }

  return resolveAnchorTarget(anchor, href, currentTarget);
};
