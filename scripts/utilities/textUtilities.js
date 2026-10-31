export function lineFromOffset(text, offset) {
  let line = 1;

  for (let index = 0; index < offset; index += 1) {
    if (text[index] === "\n") {
      line += 1;
    }
  }

  return line;
}

export function normalizeInlineText(value) {
  return value.replaceAll(/\s+/g, " ").trim();
}

export function stripTags(value) {
  let result = "";

  let inTag = false;

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];

    if (character === "<") {
      inTag = true;
    } else if (character === ">") {
      inTag = false;
    } else if (!inTag) {
      result += character;
    }
  }

  return normalizeInlineText(result);
}

export function makeTimestamp() {
  const now = new Date();

  const pad = (value) => String(value).padStart(2, "0");

  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
}

export function formatGeneratedDate() {
  const now = new Date();

  const pad = (value) => String(value).padStart(2, "0");

  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

export function safeDocName(value, extension = ".log") {
  return value.replaceAll(/[\\/:*?"<>|\s]+/g, "_") + extension;
}

export function addToMapArray(map, key, value) {
  if (!map.has(key)) {
    map.set(key, []);
  }

  map.get(key).push(value);
}
