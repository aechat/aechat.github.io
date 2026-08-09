import React, {createContext, useCallback, useContext, useRef, useState} from "react";

import {CloseRounded} from "@mui/icons-material";

import {Modal} from "antd";

import {RemoveScroll} from "react-remove-scroll";

import {useNavigate} from "react-router-dom";

import modalStyles from "../components/modals/Modal.module.scss";

import {useEnterKeyConfirm} from "../hooks/useEnterKeyConfirm";

import {useRipple} from "../hooks/useRipple";

import {
  downloadFileWithFallback,
  resolveDownloadLinkFileSize,
} from "../utilities/downloadUtilities";

import {LinkTarget, resolveLinkTarget} from "../utilities/linkTargets";

import {scrollToAnchorById} from "../utilities/scrollToAnchor";

const LinkHandlerContext = createContext<
  {handleLinkClick: (event_: React.MouseEvent | MouseEvent) => void} | undefined
>(undefined);

export const useLinkHandler = () => {
  const context = useContext(LinkHandlerContext);

  if (!context) throw new Error("useLinkHandler must be used within LinkHandlerProvider");

  return context;
};

export const LinkHandlerProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const navigate = useNavigate();

  const [target, setTarget] = useState<LinkTarget | undefined>();

  const [isDownloadStarting, setIsDownloadStarting] = useState(false);

  const [sizeCache, setSizeCache] = useState<Record<string, string>>({});

  const downloadAbortReference = useRef<AbortController | null>(null);

  const ripple = useRipple<HTMLButtonElement>();

  const closeModal = useCallback(() => {
    setTarget(undefined);
    setIsDownloadStarting(false);
    downloadAbortReference.current?.abort();
  }, []);

  const handleLinkClick = useCallback(
    (event: React.MouseEvent | MouseEvent) => {
      if (event.defaultPrevented) return;

      const element = event.target as Element;

      if (
        element.closest("header") ||
        element.closest(".links-grid-item") ||
        element.closest("[data-no-intercept]")
      ) {
        return;
      }

      const result = resolveLinkTarget(
        element,
        event.currentTarget ?? undefined,
        sizeCache
      );

      if (!result) return;

      event.preventDefault();
      event.stopPropagation();
      setTarget(result);

      if (result.type === "download" && !result.fileSize) {
        resolveDownloadLinkFileSize(result.href).then((size) => {
          if (size) {
            setSizeCache((previous) => ({...previous, [result.href]: size}));

            setTarget((previous) =>
              previous?.type === "download" && previous.href === result.href
                ? {...previous, fileSize: size}
                : previous
            );
          }
        });
      }
    },
    [sizeCache]
  );

  const handleOk = useCallback(async () => {
    if (!target) return;

    switch (target.type) {
      case "external": {
        window.open(target.href, "_blank", "noreferrer");
        break;
      }

      case "page": {
        navigate(target.href);
        break;
      }

      case "section": {
        scrollToAnchorById(target.id);
        break;
      }

      case "article": {
        const element = document.getElementById(target.id);

        if (element?.closest("details")) {
          globalThis.dispatchEvent(new CustomEvent("close-all-spoilers"));

          setTimeout(
            () =>
              globalThis.dispatchEvent(
                new CustomEvent("open-spoiler-by-id", {detail: {id: target.id}})
              ),
            50
          );
        } else scrollToAnchorById(target.id);

        break;
      }

      case "download": {
        setIsDownloadStarting(true);

        const controller = new AbortController();

        downloadAbortReference.current = controller;

        try {
          await downloadFileWithFallback({
            fileName: target.fileName,
            href: target.href,
            signal: controller.signal,
          });
        } catch (error) {
          if (!(error instanceof DOMException && error.name === "AbortError"))
            console.error(error);
        } finally {
          setIsDownloadStarting(false);
        }

        break;
      }
      // No default
    }

    closeModal();
  }, [target, navigate, closeModal]);

  useEnterKeyConfirm(!!target, handleOk);

  const getModalProperties = () => {
    if (!target) return;

    let downloadButtonLabel = "Скачать";

    if (isDownloadStarting) {
      downloadButtonLabel = "Подготовка...";
    } else if (target.type === "download" && target.fileSize) {
      downloadButtonLabel = `Скачать (${target.fileSize})`;
    }

    const config = {
      article: {
        btn: "Перейти",
        content: (
          <p>
            Вы уверены, что хотите перейти к статье{" "}
            <mark className="select">
              «{target.type === "article" ? target.title : ""}»
            </mark>{" "}
            на этой странице?
          </p>
        ),
        title: "Переход на другую статью",
      },
      download: {
        btn: downloadButtonLabel,
        content: (
          <p>
            Вы уверены, что хотите скачать{" "}
            {target.type === "download" ? target.fileKind : ""}{" "}
            <mark className={target.type === "download" ? target.fileMarkClass : ""}>
              «{target.type === "download" ? target.fileName : ""}»
            </mark>
            ?
          </p>
        ),
        title: "Скачивание файла",
      },
      external: {
        btn: "Перейти",
        content: <p>Вы уверены, что хотите перейти по внешней ссылке?</p>,
        title: target.type === "external" ? target.href : "",
      },
      page: {
        btn: "Перейти",
        content: (
          <p>
            Вы уверены, что хотите перейти на страницу{" "}
            <mark className="select">
              «{target.type === "page" ? target.title || target.href : ""}»
            </mark>
            ?
          </p>
        ),
        title: "Переход на другую страницу",
      },
      section: {
        btn: "Перейти",
        content: (
          <p>
            Вы уверены, что хотите перейти к разделу{" "}
            <mark className="select">
              «{target.type === "section" ? target.title : ""}»
            </mark>{" "}
            на этой странице?
          </p>
        ),
        title: "Переход к разделу",
      },
    };

    return config[target.type];
  };

  const modalProperties = getModalProperties();

  return (
    <LinkHandlerContext.Provider value={{handleLinkClick}}>
      {children}
      <RemoveScroll enabled={Boolean(target)}>
        <Modal
          centered
          closeIcon={false}
          footer={<></>}
          open={!!target}
          zIndex={10_000}
          onCancel={closeModal}
        >
          {modalProperties && (
            <div className={modalStyles["modal"]}>
              <div className={modalStyles["modal-header"]}>
                <div className={modalStyles["modal-header-title"]}>
                  {modalProperties.title}
                </div>
                <button
                  className={modalStyles["modal-header-button"]}
                  onClick={closeModal}
                  onMouseDown={ripple.onMouseDown}
                >
                  <CloseRounded />
                </button>
              </div>
              <div className={modalStyles["modal-content"]}>
                {modalProperties.content}
                <div className="flexible-links">
                  <button
                    disabled={isDownloadStarting}
                    onClick={handleOk}
                    onMouseDown={ripple.onMouseDown}
                  >
                    {modalProperties.btn}
                  </button>
                </div>
              </div>
            </div>
          )}
        </Modal>
      </RemoveScroll>
    </LinkHandlerContext.Provider>
  );
};
