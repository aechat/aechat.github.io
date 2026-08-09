import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {CloseRounded, FolderOpenRounded} from "@mui/icons-material";

import {message, Modal} from "antd";

import {RemoveScroll} from "react-remove-scroll";

import {Link} from "react-router-dom";

import {useLongPress} from "../../hooks/useLongPress";

import {useRipple} from "../../hooks/useRipple";

import {copyText} from "../../utilities/copyUtilities";

import {formatNestedQuotes} from "../../utilities/stringUtilities";

import modalStyles from "../modals/Modal.module.scss";

import styles from "./LinkCards.module.scss";

type LinkCardVariant = "external" | "internal";

interface LinkCardProperties {
  description?: string;
  href: string;
  icon: React.ReactNode;
  name: string;
  variant?: LinkCardVariant;
}

const getLinkCardCopyUrl = (href: string, variant: LinkCardVariant): string => {
  return variant === "internal" ? `${globalThis.location.origin}${href}` : href;
};

export const LinkCard: React.FC<LinkCardProperties> = ({
  description,
  href,
  icon,
  name,
  variant = "external",
}) => {
  const hasDescription = !!description;

  const handleCopyLink = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      event.stopPropagation();

      const urlToCopy = getLinkCardCopyUrl(href, variant);

      (async () => {
        const success = await copyText(urlToCopy);

        if (success) {
          message.success(`Ссылка на «${formatNestedQuotes(name)}» скопирована`);
        } else {
          message.error("Не удалось скопировать ссылку");
        }
      })();

      return true;
    },
    [href, name, variant]
  );

  const longPressProperties = useLongPress(handleCopyLink);

  const rippleProperties = useRipple<HTMLDivElement>();

  const content = (
    <>
      <div
        className={`${styles["name-container"]} ${hasDescription ? "" : styles["name-container_full-height"]}`}
      >
        <span className={styles["icon"]}>{icon}</span>
        <p className={styles["name"]}>{name}</p>
      </div>
      {hasDescription && <p className={styles["description"]}>{description}</p>}
    </>
  );

  return (
    <div
      className={`links-grid-item ${styles["links-button"]}`}
      {...longPressProperties}
      {...rippleProperties}
    >
      {variant === "internal" ? (
        <Link to={href}>{content}</Link>
      ) : (
        <a
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          {content}
        </a>
      )}
    </div>
  );
};

interface FolderCardProperties {
  children?: React.ReactNode;
  description?: string;
  icon?: React.ReactNode;
  modalTitle?: string;
  name: string;
}

export const FolderCard: React.FC<FolderCardProperties> = ({
  children,
  description,
  icon,
  modalTitle,
  name,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalContentReference = useRef<HTMLDivElement>(null);

  const rippleProperties = useRipple<HTMLDivElement>();

  const closeButtonRipple = useRipple<HTMLButtonElement>({haptic: false});

  const openFolder = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeFolder = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const rafId = requestAnimationFrame(() => {
      globalThis.dispatchEvent(new Event("resize"));
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [isOpen]);

  const linkCards: React.ReactNode[] = [];

  const otherChildren: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement<{icon?: React.ReactNode}>(child) &&
      (child.type === LinkCard || (child.props && "href" in child.props))
    ) {
      linkCards.push(child);

      return;
    }

    otherChildren.push(child);
  });

  const {miniIcons, uniqueIcons} = useMemo(() => {
    const extracted: React.ReactNode[] = [];

    const seenTypes = new Set<unknown>();

    React.Children.forEach(children, (child) => {
      if (
        React.isValidElement<{icon?: React.ReactNode}>(child) &&
        child.props &&
        child.props.icon
      ) {
        const iconElement = child.props.icon;

        if (React.isValidElement(iconElement)) {
          const typeKey = iconElement.type;

          if (!seenTypes.has(typeKey)) {
            seenTypes.add(typeKey);
            extracted.push(iconElement);
          }
        }
      }
    });

    if (extracted.length >= 4) {
      const shuffled = [...extracted];

      for (let index = shuffled.length - 1; index > 0; index--) {
        const randomValues = new Uint32Array(1);

        crypto.getRandomValues(randomValues);

        const randomIndex = Math.floor(
          (randomValues[0] / (0xff_ff_ff_ff + 1)) * (index + 1)
        );

        [shuffled[index], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[index],
        ];
      }

      return {miniIcons: shuffled.slice(0, 4), uniqueIcons: extracted};
    }

    return {miniIcons: [], uniqueIcons: extracted};
  }, [children]);

  const hasMiniIcons = miniIcons.length >= 4;

  const displayIcon =
    icon ??
    (hasMiniIcons ? <FolderOpenRounded /> : (uniqueIcons[0] ?? <FolderOpenRounded />));

  const hasDescription = !!description;

  return (
    <>
      <div
        className={`links-grid-item ${styles["links-button"]}`}
        onClick={openFolder}
        {...rippleProperties}
      >
        <div className={styles["folder-content"]}>
          <div
            className={`${styles["name-container"]} ${hasDescription ? "" : styles["name-container_full-height"]} ${styles["folder-name-container"]}`}
          >
            <span className={styles["icon"]}>{displayIcon}</span>
            <div>
              <p className={styles["name"]}>{name}</p>
              {hasDescription && <p className={styles["description"]}>{description}</p>}
            </div>
          </div>
          {hasMiniIcons && (
            <div className={styles["folder-right"]}>
              <div className={styles["mini-grid"]}>
                {miniIcons.map((miniIcon, index) => (
                  <div
                    key={index}
                    className={styles["mini-icon"]}
                  >
                    {miniIcon}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <RemoveScroll enabled={isOpen}>
        <Modal
          centered
          className="modal"
          closeIcon={false}
          footer={<></>}
          open={isOpen}
          width={1000}
          onCancel={closeFolder}
        >
          <div
            ref={modalContentReference}
            className={styles["modal-container"]}
          >
            <div className={modalStyles["modal-header"]}>
              <div className={modalStyles["modal-header-title"]}>
                {modalTitle ?? name}
              </div>
              <button
                className={modalStyles["modal-header-button"]}
                onClick={closeFolder}
                onMouseDown={closeButtonRipple.onMouseDown}
              >
                <CloseRounded />
              </button>
            </div>
            {otherChildren}
            {linkCards.length > 0 && <div className="links-grid">{linkCards}</div>}
          </div>
        </Modal>
      </RemoveScroll>
    </>
  );
};

export const FolderLink = FolderCard;
