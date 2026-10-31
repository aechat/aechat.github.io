import React, {useEffect, useState} from "react";

import {useSpoiler} from "../detailsSummary/spoilerContexts";

import Addition from "./Addition";

import CodeSnippet from "./CodeSnippet";

import styles from "./CodeSnippet.module.scss";

const HOSTS_URL =
  "https://raw.githubusercontent.com/ignaciocastro/a-dove-is-dumb/refs/heads/main/list.txt";

const parseHostsLines = (text: string): string[] => {
  return text.split(/\r?\n/).filter((line) => {
    const trimmed = line.trim();

    return trimmed !== "" && !trimmed.startsWith("#");
  });
};

const isAbortError = (error: unknown): boolean => {
  return error instanceof Error && error.name === "AbortError";
};

const HostsAdobeModal: React.FC = () => {
  const isOpen = useSpoiler();

  const [hostsLines, setHostsLines] = useState<string[]>([]);

  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen || hasLoaded) {
      return;
    }

    const controller = new AbortController();

    const {signal} = controller;

    const fetchHosts = async () => {
      try {
        const response = await fetch(HOSTS_URL, {signal});

        if (!response.ok) {
          return;
        }

        const text = await response.text();

        setHostsLines(parseHostsLines(text));
        setHasLoaded(true);
      } catch (error: unknown) {
        if (isAbortError(error)) {
          return;
        }

        console.error(
          error instanceof Error
            ? "Failed to fetch hosts:"
            : "Failed to fetch hosts with unknown error:",
          error
        );
      }
    };

    fetchHosts();

    return () => {
      controller.abort();
    };
  }, [isOpen, hasLoaded]);

  return (
    <>
      <CodeSnippet
        className={styles["hosts-adobe-code"]}
        language="shell"
      >
        {hostsLines.join("\n")}
      </CodeSnippet>
      <Addition type="warning">
        Для изменения системных файлов требуются права администратора. Если файла{" "}
        <mark className="file">HOSTS</mark> в этой директории нет, создайте его вручную
        без расширения. После изменения файла <mark className="file">HOSTS</mark>{" "}
        желательно перезагрузить устройство.
      </Addition>
      <Addition type="info">
        <ul>
          <li>Чтобы скопировать адреса в буфер обмена, просто нажмите на них.</li>
          <li>
            Если не хочется копировать файл <mark className="file">HOSTS</mark> туда-сюда,
            откройте текстовый редактор от имени администратора, внесите строки и
            сохраните изменения.
          </li>
          <li>
            Так как <mark className="company">Adobe</mark> регулярно обновляет свои базы,
            рекомендуется периодически обновлять <mark className="file">HOSTS</mark>{" "}
            новыми адресами для блокировки.{" "}
            <a href="https://github.com/ignaciocastro/a-dove-is-dumb/blob/main/README.md">
              Как автоматизировать это?
            </a>
          </li>
        </ul>
      </Addition>
    </>
  );
};

export default HostsAdobeModal;
