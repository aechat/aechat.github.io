import React from "react";

import {ShareRounded} from "@mui/icons-material";

import {withSoftHaptic} from "../../utilities/haptics";

import styles from "./CopyButton.module.scss";

interface CopyButtonProperties {
  className?: string;
  isDisabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CopyButton: React.FC<CopyButtonProperties> = ({
  className = "",
  isDisabled = false,
  onClick,
}) => {
  const handleClick = withSoftHaptic((event: React.MouseEvent<HTMLButtonElement>) => {
    onClick(event);
  });

  const buttonClasses = [
    styles["copy-button"],
    isDisabled ? styles.disabled : "",
    className,
  ]
    .join(" ")
    .trim();

  return (
    <button
      aria-label="Copy"
      className={buttonClasses}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <ShareRounded />
    </button>
  );
};
