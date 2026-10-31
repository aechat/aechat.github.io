#!/usr/bin/env node
import {askForConfirmation, rl} from "../utilities/interactiveUtilities.js";

import {runScript} from "../utilities/scriptRunner.js";

async function fixSpecificContentTags(content, tagName) {
  const regex = new RegExp(
    `<${tagName}>(?:<mark className="${tagName}">)?([^<]*)(?:</mark>)?</${tagName}>`,
    "g"
  );

  const matches = Array.from(content.matchAll(regex));

  const replacements = [];

  for (const match of matches) {
    const [fullMatch, word] = match;

    const proposed = word.toUpperCase();

    if (word === proposed || !word) continue;

    const shouldReplace = await askForConfirmation(word, proposed);

    if (shouldReplace) {
      const newText = fullMatch.replace(word, proposed);

      replacements.push({
        start: match.index,
        end: match.index + fullMatch.length,
        newText,
      });
    }
  }

  for (const rep of replacements.reverse()) {
    content = content.substring(0, rep.start) + rep.newText + content.substring(rep.end);
  }

  return content;
}

async function fixKeyTags(content) {
  const regex = /<key>(?:<mark className="key">)?([^<]*)(?:<\/mark>)?<\/key>/g;

  const matches = Array.from(content.matchAll(regex));

  const replacements = [];

  for (const match of matches) {
    const [fullMatch, keyContent] = match;

    const proposed = keyContent
      .split("+")
      .map((part) => part.trim())
      .join(" + ");

    if (keyContent === proposed) continue;

    const shouldReplace = await askForConfirmation(keyContent, proposed);

    if (shouldReplace) {
      const newText = fullMatch.replace(keyContent, proposed);

      replacements.push({
        start: match.index,
        end: match.index + fullMatch.length,
        newText,
      });
    }
  }

  for (const rep of replacements.reverse()) {
    content = content.substring(0, rep.start) + rep.newText + content.substring(rep.end);
  }

  return content;
}

async function processor(filePath, originalContent) {
  if (!filePath.endsWith(".tsx")) {
    return originalContent;
  }

  let fixed = originalContent;

  console.log("Выберите, какие теги обрабатывать:");
  console.log("1. Теги <file>");
  console.log("2. Теги <image>");
  console.log("3. Теги <video>");
  console.log("4. Теги <audio>");
  console.log("5. Теги клавиш (<key>)");
  console.log("6. Все теги контента (<file>, <image>, <video>, <audio>)");
  console.log("7. Все теги: контент и клавиши");

  const choice = await rl.question("Введите номер (1-7): ");

  let categories = [];

  switch (choice.trim()) {
    case "1":
      categories.push("file");
      break;

    case "2":
      categories.push("image");
      break;

    case "3":
      categories.push("video");
      break;

    case "4":
      categories.push("audio");
      break;

    case "5":
      categories.push("key");
      break;

    case "6":
      categories.push("file", "image", "video", "audio");
      break;

    case "7":
      categories.push("file", "image", "video", "audio", "key");
      break;
    default:
      console.log("Неверный выбор. Выход.");

      return originalContent;
  }

  console.log("\nИнструкции для подтверждения:");
  console.log("  y - да, заменить в этот раз");
  console.log("  n - нет, не заменять в этот раз (запомнить для сессии)");
  console.log("  a - да, для всех таких случаев (запомнить для сессии)");
  console.log("  s - пропустить все вхождения этого слова (добавить в белый список)");

  if (categories.includes("file")) {
    fixed = await fixSpecificContentTags(fixed, "file");
  }

  if (categories.includes("image")) {
    fixed = await fixSpecificContentTags(fixed, "image");
  }

  if (categories.includes("video")) {
    fixed = await fixSpecificContentTags(fixed, "video");
  }

  if (categories.includes("audio")) {
    fixed = await fixSpecificContentTags(fixed, "audio");
  }

  if (categories.includes("key")) {
    fixed = await fixKeyTags(fixed);
  }

  return fixed;
}

runScript("fixTokens", processor);
