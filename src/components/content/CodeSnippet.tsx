import hljs from "highlight.js";

import React, {useEffect, useMemo, useRef} from "react";

import {message} from "antd";

import {canCopyText} from "../../utilities/copyUtilities";

import {triggerHaptic} from "../../utilities/haptics";

import "highlight.js/styles/github-dark.css";

import styles from "./CodeSnippet.module.scss";

interface CodeSnippetProperties {
  children: React.ReactNode;
  className?: string;
  language?: string;
}

const getCodeTextFromNode = (node: React.ReactNode): string => {
  const parts: string[] = [];

  const visit = (entry: React.ReactNode): void => {
    if (entry === null || entry === undefined || typeof entry === "boolean") {
      return;
    }

    if (typeof entry === "string" || typeof entry === "number") {
      parts.push(String(entry));

      return;
    }

    if (Array.isArray(entry)) {
      for (const child of entry) {
        visit(child);
      }

      return;
    }

    if (!React.isValidElement<{children?: React.ReactNode}>(entry)) {
      return;
    }

    if (entry.type === "br") {
      parts.push("\n");

      return;
    }

    if (entry.props.children !== undefined) {
      visit(entry.props.children);
    }
  };

  visit(node);

  return parts.join("");
};

const CodeSnippet: React.FC<CodeSnippetProperties> = ({
  children,
  className,
  language = "javascript",
}) => {
  const codeReference = useRef<HTMLElement | null>(null);

  const codeText = useMemo(() => {
    return getCodeTextFromNode(children);
  }, [children]);

  useEffect(() => {
    if (codeReference.current) {
      hljs.highlightElement(codeReference.current);
    }
  }, [codeText, language]);

  const handleCopy = (event: React.MouseEvent<HTMLPreElement>): void => {
    event.stopPropagation();
    triggerHaptic("soft");

    void (async () => {
      const isSuccess = await canCopyText(codeReference.current?.textContent ?? "");

      if (isSuccess) {
        message.success("Код скопирован в буфер обмена");
      } else {
        message.error("Не удалось скопировать код");
      }
    })();
  };

  return (
    <pre
      aria-label="Нажмите, чтобы скопировать код"
      role="button"
      onClick={handleCopy}
    >
      <code
        ref={codeReference}
        className={`${language} ${className ?? styles.code}`}
      >
        {codeText}
      </code>
    </pre>
  );
};

export default CodeSnippet;
