import React, {useEffect, useState} from "react";

import {HomeRounded, SwipeUpRounded} from "@mui/icons-material";

import {Tooltip} from "antd";

import {motion} from "framer-motion";

import {Link, useLocation} from "react-router-dom";

import {useRipple} from "../../hooks/useRipple";

import {SearchButton} from "../features/searchEngine/SearchEngine";

import SupportDonut from "../modals/SupportDonut";

import {ThemeToggleButton} from "../modals/ThemeChanger";

import styles from "./Header.module.scss";

interface HeaderProperties {
  title: string;
}

const constants = {
  ANIMATION_DURATION: 0.5,
  ANIMATION_EASE: [0.075, 0.82, 0.165, 1],
  SCROLL_THRESHOLD: 25,
  WIDE_SCREEN_WIDTH: 650,
} as const;

const SEARCH_PATHS = ["aefaq", "prfaq", "psfaq"] as const;

const WIP_PATHS = ["prfaq", "psfaq"] as const;

const TOOLTIP_MESSAGES: Record<string, string> = {
  "/": "Ссылки на полезные ресурсы, программы и чаты",
  "/aefaq": "Ответы на часто задаваемые вопросы по Adobe After Effects",
  "/prfaq": "Ответы на часто задаваемые вопросы по Adobe Premiere",
  "/psfaq": "Ответы на часто задаваемые вопросы по Adobe Photoshop",
  "/rules": "Правила сообщества AEChat и DWChat",
};

const Header: React.FC<HeaderProperties> = ({title}) => {
  const location = useLocation();

  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  const [isWide, setIsWide] = useState(
    globalThis.window === undefined
      ? false
      : window.innerWidth > constants.WIDE_SCREEN_WIDTH
  );

  const ripple = useRipple<HTMLButtonElement>();

  const rippleLink = useRipple<HTMLAnchorElement>();

  const scrollToTop = (): void => {
    if (globalThis.window !== undefined) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });

      globalThis.history.replaceState({}, "", currentPath);
    }
  };

  const checkScrollPosition = (): void => {
    if (globalThis.window !== undefined) {
      setIsScrollButtonVisible(window.scrollY > constants.SCROLL_THRESHOLD);
    }
  };

  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  useEffect(() => {
    if (globalThis.window === undefined) {
      return;
    }

    const resizeHandler = (): void => {
      setIsWide(window.innerWidth > constants.WIDE_SCREEN_WIDTH);
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const shouldShowSearch = (): boolean => {
    if (globalThis.window !== undefined) {
      return SEARCH_PATHS.some((path) => currentPath.includes(path));
    }

    return false;
  };

  const currentPath = location.pathname;

  const tooltipMessage = TOOLTIP_MESSAGES[currentPath];

  return (
    <motion.header
      animate={{opacity: 1}}
      className={`${styles.header}`}
      exit={{opacity: 0}}
      initial={{opacity: 0}}
      transition={{
        duration: constants.ANIMATION_DURATION,
        ease: constants.ANIMATION_EASE,
      }}
    >
      <div className={styles["header-left"]}>
        {currentPath === "/" ? undefined : (
          <Link
            className={styles.icon}
            to="/"
            onClick={() => {
              globalThis.window?.dispatchEvent(new CustomEvent("close-all-modals"));
            }}
            onMouseDown={rippleLink.onMouseDown}
          >
            <HomeRounded />
          </Link>
        )}
        <div className={styles.logo}>
          {tooltipMessage ? (
            <>
              <Tooltip title={tooltipMessage}>{title}</Tooltip>
              <sub>@aechat</sub>
            </>
          ) : (
            <>
              {title}
              <sub>@aechat</sub>
            </>
          )}
          {WIP_PATHS.some((path) => currentPath.includes(path)) && (
            <Tooltip title="Некоторые статьи на этой странице могут отсутствовать или иметь множество ошибок">
              <mark>[WIP]</mark>
            </Tooltip>
          )}
        </div>
        <div>{isWide ? <SupportDonut wide /> : <SupportDonut />}</div>
      </div>
      <div className={styles["header-right"]}>
        <div
          className={`${styles["header-right"]} ${isScrollButtonVisible ? styles.visible : styles.hidden}`}
        >
          <button
            aria-label="Прокрутить страницу вверх"
            className={styles.icon}
            onClick={scrollToTop}
            onMouseDown={ripple.onMouseDown}
          >
            <SwipeUpRounded />
          </button>
        </div>
        {shouldShowSearch() && (
          <div>{isWide ? <SearchButton wide /> : <SearchButton />}</div>
        )}
        <ThemeToggleButton className={styles.icon} />
      </div>
    </motion.header>
  );
};

export default Header;
