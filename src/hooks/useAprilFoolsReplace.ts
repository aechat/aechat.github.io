import {useEffect} from "react";

const NON_REPLACEABLE_SOURCES = new Set(["path"]);

const APRIL_FOOLS_ENTRIES = [
  ["adobe", "абобе"],
  ["after effects", "послеэффектс"],
  ["premiere pro", "профессиональная премьера"],
  ["premiere", "премьера"],
  ["media encoder", "медиаисчадие ада"],
  ["creative cloud", "креативное облако"],
  ["photoshop", "фотожоп"],
  ["illustrator", "иллюстратор"],
  ["windows defender", "вставлятель палок в колёса"],
  ["stable diffusion", "стабильная диффузия"],
  ["subtitle edit", "редактор субтитров"],
  ["revo uninstaller", "революционный удалятор приложений"],
  ["davinci resolve", "давинчи разрулит"],
  ["topaz gigapixel ai", "гигатопаз"],
  ["topaz photo ai", "фототопаз"],
  ["topaz video ai", "видеотопаз"],
  ["zxp installer", "хз инсталлятор"],
  ["windows", "окна"],
  ["telegram", "мах"],
  ["mediainfo", "медиаинфошка"],
  ["antivirus", "антизловред"],
  ["антивирусное по", "антизловредное колдунство"],
  ["handbrake", "ручник"],
  ["winrar", "40-дневный предупреждатор"],
  ["7-zip", "семь зипов"],
  ["ffmpeg", "форд фокус мпег"],
  ["figma", "фигма бой"],
  ["keka", "кек)0)"],
  ["vpn", "внезапный переезд в нидерланды"],
  ["genp", "генпук"],
  ["rosetta", "розетка"],
  ["параметры", "настройкопульт"],
  ["app", "вирус"],
  ["browser", "проводник по интернету"],
  ["faq", "чаво"],
  ["macos", "яблочный линукс"],
  ["plugin", "дополнятор"],
  ["script", "колдунство"],
  ["select", "выбрать"],
  ["aechat", "аечат"],
  ["aefaq", "аефак"],
  ["prfaq", "прфак"],
  ["psfaq", "псфак"],
  ["voukoder", "вукодер"],
  ["boris fx", "эффекты бориса"],
  ["red giant", "красные гианты"],
  ["roto brush", "браш в рот"],
  ["sapphire", "сапфир"],
  ["deep glow", "глубочайшее свечение"],
  ["vfx suite", "инструментарий для голливуда"],
  ["continuum", "континуумный"],
  ["magic bullet", "магическая муля"],
  ["twixtor", "твикстор"],
  ["saber", "полоски как в звёздных войнах"],
  ["advanced 3d", "расширенный 3д"],
  ["aftercodecs", "афтеркокетс"],
  ["h.264", "ш264"],
  ["gifgun", "пулёмет из gif"],
  ["bodymovin", "телотряска"],
  ["fx console", "эффектуальная консось нових поколеня"],
  ["cyclops", "циклоп"],
  ["s_shake", "эдиторская трясучка"],
  ["sharpen", "ультра 4к чёткость"],
  ["unsharpen mask", "ультра чёткость для эдитов в тикток"],
  ["element 3d", "элементарный 3д"],
  ["motion bro", "двигательный бро"],
  ["atomx", "атомный хер"],
  ["mocha pro", "профессиональная моча"],
  ["universe", "универсальный"],
  ["mocha ae", "послеэффектная моча"],
  ["influx", "инфлюкс"],
  ["autokroma", "автокромешный"],
  ["cinema 4d", "четырёхдверное кино"],
  ["cineware", "кинопровод"],
  ["trapcode", "трапкод"],
  ["particular", "частичный генератор лагов"],
  ["maxon", "масон"],
  ["twitch", "устаревшяя эдиторская трясучка"],
  ["autofill", "автозаполнитель"],
  ["grow bounds", "расширитель одного места"],
  ["overlord", "слишком повелитель"],
  ["classic 3d", "классик, я бы даже сказал плесантли 3д"],
  ["lumetri color", "люметральный цвет"],
  ["quicktime", "быстровремя"],
  ["микшер", "мишер"],
  ["intel", "синяя контора"],
  ["amd", "красная контора"],
  ["nvidia", "зелёная контора"],
  ["apple", "яблоко"],
  ["apple silicon", "яблочный силикон"],
  ["ryzen", "рязань"],
  ["snapdragon", "мобильный повелитель"],
  ["hdd", "хард"],
  ["ssd", "быстрее чем хард"],
  ["nvme", "быстрее чем тот, что быстрее харда"],
  ["avx2", "где авх покажи мне ткни"],
  ["gif", "гиф"],
  ["mp4", "мп4"],
  ["psd", "фотожопный файл"],
  ["jpg", "жипег"],
  ["webp", "вебп"],
  ["webm", "вебм"],
  ["png", "пнг"],
  ["svg", "свг"],
  ["hlg", "шлг"],
  ["rec.", "рекордный"],
  ["srgb", "святойргб"],
  ["w203", "мерс цешка 203"],
  ["meta", "контора в виде знака бесконечности"],
  ["videocopilot", "видео второй пилот"],
  ["re:visionfx", "ре:видимостьэффектов"],
  ["microsoft", "контора мелкомягких"],
  ["rules", "рули"],
  ["aescripts", "аескриптология"],
  ["youtube", "твоя труба"],
  ["youtube shorts", "твои шорты из трубы"],
  ["instagram", "инста"],
  ["instagram reels", "рилсы"],
  ["reddit", "редит"],
  ["videohive", "видеохайв"],
  ["envato elements", "элементы енвато"],
  ["tiktok", "собрание вертикалистов"],
  ["dwchat", "двчат"],
  ["tl;dr", "я ленивый на чтение"],
  ["smartscreen", "умный экран"],
  ["onedrive", "единственное вождение"],
  ["kpojiuk", "кролик"],
  ["m0nkrus", "монкрус"],
  ["out of memory", "нищий по памяти"],
] as const;

const escapeRegex = (value: string) =>
  value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);

const shouldUseWordBoundaries = (value: string) => /^[A-Za-zА-Яа-яЁё0-9_-]+$/.test(value);

const DICTIONARY_ENTRIES = APRIL_FOOLS_ENTRIES;

const TRANSLIT_CHARACTER_MAP: Readonly<Record<string, string>> = {
  ё: "yo",
  ж: "zh",
  й: "j",
  х: "x",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shh",
  ъ: "'",
  ы: "y",
  ь: "'",
  э: "e",
  ю: "yu",
  я: "ya",
};

const LEET_CHARACTER_MAP: Readonly<Record<string, string>> = {
  A: "4",
  a: "4",
  E: "3",
  e: "3",
  I: "1",
  i: "1",
  O: "0",
  o: "0",
  S: "5",
  s: "5",
  T: "7",
  t: "7",
  А: "4",
  а: "4",
  е: "3",
  Е: "3",
  И: "1",
  и: "1",
  О: "0",
  о: "0",
  Т: "7",
  т: "7",
  Э: "3",
  э: "3",
};

const hashToBucket = (value: string, bucketsCount: number) => {
  let hash = 2_166_136_261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.codePointAt(index) ?? 0;
    hash = Math.imul(hash, 16_777_619);
  }

  return (hash >>> 0) % bucketsCount;
};

const transliterateCharacter = (character: string) => {
  const lowerCharacter = character.toLocaleLowerCase();

  const replacement = TRANSLIT_CHARACTER_MAP[lowerCharacter];

  if (!replacement) {
    return character;
  }

  const isUppercase =
    character === character.toLocaleUpperCase() &&
    character !== character.toLocaleLowerCase();

  return isUppercase ? replacement.toLocaleUpperCase() : replacement;
};

const applySlangWord = (word: string) => {
  let replacedWord = word;

  for (const {pattern, replacementWord} of DICTIONARY_PATTERNS) {
    replacedWord = replacedWord.replaceAll(pattern, replacementWord);
  }

  return replacedWord;
};

const applyLeetWord = (word: string) =>
  [...word]
    .map((character) => transliterateCharacter(character))
    .map((character) => LEET_CHARACTER_MAP[character] ?? character)
    .join("");

const applyMixedCaseWord = (word: string, wordOffset: number) =>
  [...word]
    .map((character, characterIndex) => {
      const lowerCharacter = character.toLocaleLowerCase();

      const upperCharacter = character.toLocaleUpperCase();

      const isLetter = lowerCharacter !== upperCharacter;

      if (!isLetter) {
        return character;
      }

      const caseBucket = hashToBucket(`${wordOffset}:${characterIndex}:${word}`, 2);

      return caseBucket === 0 ? lowerCharacter : upperCharacter;
    })
    .join("");

const applyMixedDialectTransform = (value: string) =>
  value.replaceAll(/[A-Za-zА-Яа-яЁё]+/g, (word, wordOffset) => {
    const modeBucket = hashToBucket(`${wordOffset}:${word}`, 8);

    let transformedWord = word;

    if (modeBucket >= 4 && modeBucket < 6) {
      transformedWord = applySlangWord(word);
    } else if (modeBucket >= 6) {
      transformedWord = applyLeetWord(word);
    }

    return applyMixedCaseWord(transformedWord, wordOffset);
  });

const createSearchPattern = (sourceWord: string) => {
  const escapedSourceWord = escapeRegex(sourceWord);

  if (shouldUseWordBoundaries(sourceWord)) {
    return new RegExp(String.raw`\b${escapedSourceWord}\b`, "gi");
  }

  return new RegExp(escapedSourceWord, "gi");
};

const DICTIONARY_PATTERNS = DICTIONARY_ENTRIES.filter(
  ([sourceWord]) => NON_REPLACEABLE_SOURCES.has(sourceWord) === false
)
  .toSorted(
    ([leftSourceWord], [rightSourceWord]) =>
      rightSourceWord.length - leftSourceWord.length
  )
  .map(([sourceWord, replacementWord]) => ({
    pattern: createSearchPattern(sourceWord),
    replacementWord,
  }));

const isAprilFoolsDay = () => {
  const currentDate = new Date();

  return currentDate.getMonth() === 3 && currentDate.getDate() === 1;
};

const shouldSkipTextNode = (node: Node) => {
  const parentElement = node.parentElement;

  if (!parentElement) {
    return true;
  }

  if (
    parentElement.closest(
      "script, style, noscript, textarea, mark.copy, mark.path, mark.file, mark.code"
    )
  ) {
    return true;
  }

  return false;
};

const replaceDictionaryWordsInTextNode = (node: Node) => {
  if (node.nodeType !== Node.TEXT_NODE || shouldSkipTextNode(node)) {
    return;
  }

  const currentValue = node.nodeValue;

  if (!currentValue) {
    return;
  }

  let replacedValue = currentValue;

  const placeholderEntries: Array<readonly [string, string]> = [];

  let placeholderIndex = 0;

  for (const {pattern, replacementWord} of DICTIONARY_PATTERNS) {
    replacedValue = replacedValue.replaceAll(pattern, () => {
      const placeholder = `§§${placeholderIndex}§§`;

      placeholderEntries.push([placeholder, replacementWord]);
      placeholderIndex += 1;

      return placeholder;
    });
  }

  replacedValue = applyMixedDialectTransform(replacedValue);

  for (const [placeholder, replacementWord] of placeholderEntries) {
    replacedValue = replacedValue.replaceAll(placeholder, replacementWord);
  }

  if (replacedValue === currentValue) {
    return;
  }

  node.nodeValue = replacedValue;
};

const replaceDictionaryWordsInNodeTree = (rootNode: Node) => {
  replaceDictionaryWordsInTextNode(rootNode);

  const walker = document.createTreeWalker(rootNode, NodeFilter.SHOW_TEXT);

  let currentNode = walker.nextNode();

  while (currentNode) {
    replaceDictionaryWordsInTextNode(currentNode);
    currentNode = walker.nextNode();
  }
};

export const useAprilFoolsReplace = () => {
  useEffect(() => {
    if (globalThis.document === undefined || isAprilFoolsDay() === false) {
      return;
    }

    replaceDictionaryWordsInNodeTree(document.body);

    const observer = new MutationObserver((mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === "characterData") {
          replaceDictionaryWordsInTextNode(mutation.target);
          continue;
        }

        for (const addedNode of mutation.addedNodes) {
          replaceDictionaryWordsInNodeTree(addedNode);
        }
      }
    });

    observer.observe(document.body, {
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);
};
