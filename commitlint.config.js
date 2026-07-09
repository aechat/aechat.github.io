export default {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "scope-list-spacing": (parsed) => {
          const header = parsed.header || "";

          const scopeMatch = header.match(/^[^(]+\(([^)]+)\):/);

          if (!scopeMatch) {
            return [true];
          }

          const scopeRaw = scopeMatch[1];

          const hasComma = scopeRaw.includes(",");

          if (!hasComma) {
            return [true];
          }

          const hasSpaceBeforeComma = /\s,/.test(scopeRaw);

          const hasNoSpaceAfterComma = /,(?=\S)/.test(scopeRaw);

          const hasTooManySpacesAfterComma = /, {2,}/.test(scopeRaw);

          const isValid =
            !hasSpaceBeforeComma && !hasNoSpaceAfterComma && !hasTooManySpacesAfterComma;

          return [
            isValid,
            "При перечислении нескольких scope используйте формат `scope1, scope2` (запятая и один пробел).",
          ];
        },
      },
    },
  ],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // добавление новой функциональности
        "fix", // исправление ошибки
        "docs", // изменения в документации
        "format", // правки форматирования кода, не влияющие на логику или внешний вид (автоматическое форматирование)
        "refactor", // рефакторинг кода без исправления ошибок или добавления новой функциональности
        "chore", // рутинные задачи, обновление зависимостей, настройка, сборка
        "content", // изменения в контенте статей
        "revert", // откат предыдущего коммита
        "merge", // слияние ветвей
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        // код и интерфейс
        "app",
        "components",
        "styles",
        "hooks",
        "utils",
        // контент статей (перечисление через запятую с пробелом: aefaq, prfaq)
        "aefaq",
        "prfaq",
        "psfaq",
        "rules",
        "reg",
        "links",
        "docs",
        // проектные области
        "config",
        "deps",
        "assets",
        "scripts",
        "*",
      ],
    ],
    "header-max-length": [2, "always", 150],
    "scope-list-spacing": [2, "always"],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "type-case": [2, "always", "lower-case"],
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};
