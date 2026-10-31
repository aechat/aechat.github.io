import React, {ReactNode, useContext, useEffect, useRef, useState} from "react";

import {Apple, WindowSharp} from "@mui/icons-material";

import {message} from "antd";

import {getPlatformInfo} from "../../utilities/browserDetection";

import {triggerHaptic} from "../../utilities/haptics";

import {
  getCurrentHashAnchor,
  replaceCurrentUrlHash,
} from "../../utilities/urlHashUtilities";

import {generateAnchorId} from "../detailsSummary/DetailsSummary";

import {ParentAnchorContext} from "../detailsSummary/spoilerContexts";

import styles from "./ContentFilter.module.scss";

type ContentFilterProperties =
  | {windowsContent: ReactNode; macContent?: ReactNode}
  | {windowsContent?: ReactNode; macContent: ReactNode};

const ContentFilter: React.FC<ContentFilterProperties> = ({
  macContent,
  windowsContent,
}) => {
  const [isWindowsActive, setIsWindowsActive] = useState(true);

  const parentAnchor = useContext(ParentAnchorContext);

  const windowsContainerReference = useRef<HTMLDivElement>(null);

  const macContainerReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const platform = getPlatformInfo();

    const isMac = platform.isMacOS || platform.isIOS;

    let isActiveWindows = !isMac;

    const currentHash = getCurrentHashAnchor();

    if (currentHash) {
      const target = document.querySelector(
        `[data-anchor="${CSS.escape(currentHash)}"], [id="${CSS.escape(currentHash)}"]`
      );

      if (target) {
        if (windowsContainerReference.current?.contains(target)) {
          if (isMac) {
            isActiveWindows = true;

            message.info({
              content:
                "Внимание: запрашиваемая статья по ссылке предназначена для Windows",
            });
          }
        } else if (!isMac && macContainerReference.current?.contains(target)) {
          isActiveWindows = false;

          message.info({
            content: "Внимание: запрашиваемая статья по ссылке предназначена для macOS",
          });
        }
      }
    }

    setIsWindowsActive(isActiveWindows);
  }, []);

  useEffect(() => {
    generateAnchorId();
  }, [isWindowsActive]);

  const hasWindowsContent = windowsContent !== undefined;

  const hasMacContent = macContent !== undefined;

  if (!hasWindowsContent && !hasMacContent) {
    return <></>;
  }

  const isToggleButtonVisible = hasWindowsContent && hasMacContent;

  let isDisplayForWindows = isWindowsActive;

  if (hasWindowsContent && !hasMacContent) {
    isDisplayForWindows = true;
  } else if (!hasWindowsContent && hasMacContent) {
    isDisplayForWindows = false;
  }

  const osName = isDisplayForWindows ? "Windows" : "macOS";

  const osIcon = isDisplayForWindows ? <WindowSharp /> : <Apple />;

  const infoMessagePrefix = isToggleButtonVisible
    ? "Информация ниже указана для устройств на "
    : "Информация ниже указана только для устройств на ";

  const buttonLabel = isDisplayForWindows ? "Показать для macOS" : "Показать для Windows";

  return (
    <>
      <div className={styles["change-os"]}>
        <div className={styles["change-os-info-container"]}>
          {osIcon}
          <div>
            {infoMessagePrefix}
            <b>
              <u>{osName}</u>
            </b>
            .
          </div>
        </div>
        {isToggleButtonVisible && (
          <button
            aria-label={buttonLabel}
            onClick={() => {
              triggerHaptic("selection");

              const currentHash = getCurrentHashAnchor();

              if (
                parentAnchor &&
                currentHash &&
                currentHash.startsWith(`${parentAnchor}-`)
              ) {
                replaceCurrentUrlHash(`#${parentAnchor}`);
              }

              setIsWindowsActive(!isWindowsActive);
            }}
          >
            {buttonLabel}
          </button>
        )}
      </div>
      <div
        ref={windowsContainerReference}
        className={styles["change-os-content"]}
        style={{display: isDisplayForWindows ? "block" : "none"}}
      >
        {windowsContent}
      </div>
      <div
        ref={macContainerReference}
        className={styles["change-os-content"]}
        style={{display: isDisplayForWindows ? "none" : "block"}}
      >
        {macContent}
      </div>
    </>
  );
};

export default ContentFilter;
