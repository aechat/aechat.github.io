import pluginJs from "@eslint/js";

import prettierConfig from "eslint-config-prettier";

import pluginJsxA11y from "eslint-plugin-jsx-a11y";

import pluginImport from "eslint-plugin-import";

import pluginPrettier from "eslint-plugin-prettier";

import pluginReact from "eslint-plugin-react";

import perfectionistPlugin from "eslint-plugin-perfectionist";

import sonarjs from "eslint-plugin-sonarjs";

import stylistic from "@stylistic/eslint-plugin";

import unicornPlugin from "eslint-plugin-unicorn";

import globals from "globals";

import tseslint from "typescript-eslint";

const SHARED_PADDING_RULES = [
  "error",
  {blankLine: "always", prev: "*", next: "return"},
  {blankLine: "always", prev: "directive", next: "*"},
  {blankLine: "always", prev: "directive", next: "directive"},
  {
    blankLine: "always",
    prev: "*",
    next: ["function", "class"],
  },
  {
    blankLine: "always",
    prev: ["function", "class"],
    next: "*",
  },
  {
    blankLine: "always",
    prev: "*",
    next: ["if", "for", "while", "do", "switch", "try"],
  },
  {
    blankLine: "always",
    prev: ["if", "for", "while", "do", "switch", "try"],
    next: "*",
  },
  {blankLine: "always", prev: "*", next: "multiline-expression"},
  {blankLine: "always", prev: "multiline-expression", next: "*"},
  {blankLine: "always", prev: "*", next: "multiline-block-like"},
  {blankLine: "always", prev: "multiline-block-like", next: "*"},
  {blankLine: "always", prev: "case", next: "case"},
  {blankLine: "always", prev: "*", next: "import"},
  {blankLine: "always", prev: "import", next: "*"},
  {blankLine: "always", prev: "*", next: "export"},
  {blankLine: "always", prev: "export", next: "export"},
  {blankLine: "always", prev: ["const", "let", "var"], next: "*"},
  {blankLine: "always", prev: "*", next: ["const", "let", "var"]},
  {
    blankLine: "always",
    prev: ["const", "let", "var"],
    next: ["const", "let", "var"],
  },
];

const TS_PADDING_RULES = [
  ...SHARED_PADDING_RULES,
  {
    blankLine: "always",
    prev: "*",
    next: ["function", "class", "interface", "type"],
  },
  {
    blankLine: "always",
    prev: ["function", "class", "interface", "type"],
    next: "*",
  },
  {blankLine: "always", prev: "*", next: "iife"},
  {blankLine: "always", prev: "iife", next: "*"},
];

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules/*",
      "**/dist/*",
      "**/@typescript-eslint/*",
      ".yarn/**",
      ".pnp.*",
    ],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/padding-line-between-statements": SHARED_PADDING_RULES,
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    ignores: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
    },
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/padding-line-between-statements": TS_PADDING_RULES,
    },
  },
  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "jsx-a11y": pluginJsxA11y,
      "prettier": pluginPrettier,
      "@typescript-eslint": tseslint.plugin,
      "react": pluginReact,
      "import": pluginImport,
      "perfectionist": perfectionistPlugin,
      "@stylistic": stylistic,
      "unicorn": unicornPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "prettier/prettier": "warn",
      "eol-last": "off",
      "padding-line-between-statements": "off",
      "@typescript-eslint/padding-line-between-statements": "off",
      "@stylistic/padding-line-between-statements": TS_PADDING_RULES,
      "@stylistic/padded-blocks": ["warn", "always"],
      "@stylistic/lines-between-class-members": [
        "warn",
        "always",
        {exceptAfterSingleLine: true},
      ],
      "@stylistic/multiline-ternary": ["warn", "always-multiline"],
      "@stylistic/operator-linebreak": ["warn", "after"],
      "grouped-accessor-pairs": ["warn", "getBeforeSet"],
      "no-duplicate-imports": "warn",
      "import/newline-after-import": "warn",
      "import/order": [
        "warn",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always-and-inside-groups",
          "alphabetize": {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "perfectionist/sort-variable-declarations": [
        "warn",
        {
          order: "asc",
          ignoreCase: true,
        },
      ],
      "perfectionist/sort-classes": [
        "warn",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
          groups: [
            "index-signature",
            "static-property",
            "static-method",
            "private-property",
            "property",
            "constructor",
            "private-method",
            "method",
            "unknown",
          ],
        },
      ],
      "perfectionist/sort-interfaces": [
        "warn",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
        },
      ],
      "perfectionist/sort-named-exports": [
        "warn",
        {
          order: "asc",
          ignoreCase: true,
        },
      ],
      "perfectionist/sort-named-imports": [
        "warn",
        {
          order: "asc",
          ignoreCase: true,
        },
      ],
      "perfectionist/sort-objects": [
        "warn",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
        },
      ],
      ...unicornPlugin.configs.recommended.rules,
      "unicorn/prefer-query-selector": "off",
      "curly": ["warn", "all"],
      "no-empty": ["warn", {allowEmptyCatch: true}],
      "eqeqeq": ["warn", "always"],
      "no-console": ["warn", {allow: ["warn", "error"]}],
      "react/jsx-uses-vars": "warn",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
      "react/jsx-props-no-spreading": "off",
      "react/jsx-indent-props": ["warn", 2],
      "react/jsx-indent": ["warn", 2],
      "react/jsx-no-duplicate-props": "warn",
      "react/jsx-no-target-blank": "warn",
      "react/jsx-no-undef": "warn",
      "jsx-a11y/alt-text": "warn",
      "jsx-a11y/anchor-has-content": "warn",
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          components: ["Link"],
          specialLink: ["to"],
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  sonarjs.configs.recommended,
  {
    rules: {
      "sonarjs/todo-tag": "warn",
      "sonarjs/fixme-tag": "warn",
      "sonarjs/different-types-comparison": "off",
      "sonarjs/deprecation": "off",
    },
  },
  {
    files: ["src/**/*.tsx"],
    rules: {
      "unicorn/filename-case": [
        "warn",
        {
          case: "pascalCase",
          checkDirectories: false,
        },
      ],
    },
  },
  {
    files: ["src/pages/sections/**/*.tsx"],
    rules: {
      "arrow-body-style": ["error", "always"],
    },
  },
  {
    files: ["src/hooks/**/*.tsx"],
    rules: {
      "unicorn/filename-case": [
        "warn",
        {
          case: "camelCase",
        },
      ],
    },
  },
  {
    files: ["src/**/*.ts"],
    rules: {
      "unicorn/filename-case": [
        "warn",
        {
          case: "camelCase",
          ignore: ["vite-env.d.ts"],
        },
      ],
    },
  },
  {
    files: ["src/vite-env.d.ts"],
    rules: {
      "unicorn/prevent-abbreviations": "off",
    },
  },
  {
    files: ["scripts/**/*.js"],
    rules: {
      "sonarjs/cognitive-complexity": "off",
      "sonarjs/updated-loop-counter": "off",
      "sonarjs/slow-regex": "off",
      "sonarjs/regex-complexity": "off",
      "sonarjs/duplicates-in-character-class": "off",
      "sonarjs/no-dead-store": "off",
    },
  },
  prettierConfig,
];
