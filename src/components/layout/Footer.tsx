import React, {useEffect, useRef, useState} from "react";

import {GitHub} from "@mui/icons-material";

import {useLocation} from "react-router-dom";

import {formatRelativeTime} from "../../utilities/dateUtilities";

import styles from "./Footer.module.scss";

const OWNER = "aechat";

const REPO = "links";

const BRANCH = "main";

interface GithubCommitAPI {
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
  html_url: string;
}

interface CommitData {
  date: Date;
  message: string;
  url: string;
}

interface FooterProperties {
  initialYear: number;
  title: string;
}

const FAQ_PATHS = ["/aefaq", "/prfaq", "/psfaq"] as const;

type FaqPath = (typeof FAQ_PATHS)[number];

const PATH_MAP: Record<FaqPath, string> = {
  "/aefaq": "src/pages/sections/aefaq",
  "/prfaq": "src/pages/sections/prfaq",
  "/psfaq": "src/pages/sections/psfaq",
};

const isFaqPage = (p: string): p is FaqPath => {
  return FAQ_PATHS.includes(p as FaqPath);
};

const isLinksPage = (p: string): boolean => {
  return p === "/";
};

const Footer: React.FC<FooterProperties> = ({initialYear, title}) => {
  const location = useLocation();

  const [commitData, setCommitData] = useState<CommitData | undefined>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [error, setError] = useState<string | undefined>();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const footerReference = useRef<HTMLElement>(null);

  const currentYear = new Date().getFullYear();

  const path = location.pathname;

  useEffect(() => {
    if (!isFaqPage(path)) {
      return;
    }

    setIsVisible(false);

    if (globalThis.IntersectionObserver === undefined) {
      setIsVisible(true);

      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {rootMargin: "200px"}
    );

    const currentFooter = footerReference.current;

    if (currentFooter) {
      observer.observe(currentFooter);
    }

    return () => {
      observer.disconnect();
    };
  }, [path]);

  useEffect(() => {
    if (!isVisible || !isFaqPage(path)) {
      return;
    }

    const folderPath = PATH_MAP[path];

    const getLastCommit = async () => {
      setIsLoading(true);
      setError(undefined);
      setCommitData(undefined);

      const url = `https://api.github.com/repos/${OWNER}/${REPO}/commits?path=${folderPath}&sha=${BRANCH}`;

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Ошибка сети: ${response.status}`);
        }

        const commits = (await response.json()) as GithubCommitAPI[];

        const lastMeaningfulCommit = commits.find(
          (commit) => !commit.commit.message.startsWith("Merge")
        );

        if (!lastMeaningfulCommit) {
          throw new Error("Не удалось найти коммиты для этой папки.");
        }

        const rawMessage = lastMeaningfulCommit.commit.message;

        const regex = /^\w+(\([^)]*\))?:\s*(.*)/;

        const match = regex.exec(rawMessage);

        let description = rawMessage;

        if (match && match[2]) {
          description = match[2];
        }

        const message = description;

        setCommitData({
          date: new Date(lastMeaningfulCommit.commit.author.date),
          message,
          url: lastMeaningfulCommit.html_url,
        });
      } catch (error_) {
        const errorMessage =
          error_ instanceof Error ? error_.message : "Произошла неизвестная ошибка";

        setError("Индикатор свежести временно недоступен.");
        console.error(`Ошибка при получении данных с GitHub: ${errorMessage}`);
      } finally {
        setIsLoading(false);
      }
    };

    getLastCommit();
  }, [path, isVisible]);

  const renderCommitInfo = () => {
    if (isLoading) {
      return <p className={styles["commit-info"]}>Ищем информацию...</p>;
    }

    if (error) {
      return <p className={styles["commit-info"]}>{error}</p>;
    }

    if (!commitData) {
      return;
    }

    const relativeTime = formatRelativeTime(commitData.date);

    return (
      <p className={styles["commit-info"]}>
        Последнее обновление страницы {relativeTime}:{" "}
        <a
          href={commitData.url}
          rel="noreferrer"
          target="_blank"
        >
          {commitData.message}
        </a>
      </p>
    );
  };

  return (
    <footer ref={footerReference}>
      <div className={styles["footer-container"]}>
        <div>
          <p>
            <a href="https://github.com/m1sh3r">m1sh3r</a> {"+ "}
            {title} \\ &copy; {initialYear} - {currentYear}
          </p>
          <p className={styles["footer-content-info"]}>
            Данная страница не является коммерческим проектом.
          </p>
          {isFaqPage(path) && (
            <>
              <p className={styles["footer-content-info"]}>
                Содержание этой страницы периодически обновляется на основе информации из
                открытых источников и предоставляется по принципу «как есть». Оно может
                быть неполным, устаревшим или неточным, а мнения автора и читателей — не
                совпадать.
              </p>
              <p className={styles["footer-content-info"]}>
                Администрация страницы не несёт ответственности за возможные негативные
                последствия использования опубликованной информации, программ, файлов или
                сторонних ресурсов, упомянутых в статьях.
              </p>
              {renderCommitInfo()}
            </>
          )}
          {isLinksPage(path) && (
            <p className={styles["footer-content-info"]}>
              Ссылки, размещённые на этой странице, предоставлены в ознакомительных целях.
              Администрация страницы не несёт ответственности за содержимое публикаций на
              сторонних ресурсах.
            </p>
          )}
        </div>
        <a
          aria-label="перейти на GitHub"
          className={styles["footer-github-link"]}
          href="https://github.com/aechat/aechat.github.io"
          rel="noreferrer"
          target="_blank"
        >
          <GitHub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
