import React, {useEffect, useRef, useState} from "react";

import mediaMetadata from "virtual:media-metadata";

import {CloseRounded, ShareRounded} from "@mui/icons-material";

import {message} from "antd";

import {animate, AnimatePresence, motion, useMotionValue} from "framer-motion";

import {createPortal} from "react-dom";

import {canCopyText} from "../../utilities/copyUtilities";

import {triggerHaptic} from "../../utilities/haptics";

import {useSpoiler} from "../detailsSummary/spoilerContexts";

import styles from "./ArticleMedia.module.scss";

interface BaseMediaProperties {
  src: string;
}

interface ImageMediaProperties extends BaseMediaProperties {
  caption: string;
  density?: number;
  height?: number | string;
  type: "image";
  width?: number | string;
}

interface VideoMediaProperties extends BaseMediaProperties {
  autoPlay?: boolean;
  caption: string;
  density?: number;
  height?: number | string;
  loop?: boolean;
  type: "video";
  width?: number | string;
}

interface YouTubeMediaProperties extends BaseMediaProperties {
  height?: number | string;
  type: "youtube";
  width?: number | string;
}

export type ArticleMediaProperties =
  ImageMediaProperties | VideoMediaProperties | YouTubeMediaProperties;

type MediaMetadata = {height: number; width: number};

type DragLimits = {
  bottom: number;
  left: number;
  right: number;
  top: number;
};

const mediaMetadataMap = mediaMetadata as Record<string, MediaMetadata | undefined>;

const VIEWER_PADDING = 100;

const VIEWER_SCALE = {
  DOUBLE_TAP_THRESHOLD: 1.5,
  MAX: 4,
  MIN: 1,
  STEP: 0.5,
  ZOOMED_THRESHOLD: 1.05,
} as const;

const VIEWER_SPRING = {
  damping: 30,
  stiffness: 300,
  type: "spring",
} as const;

const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

const getMediaSource = (source: string): string => {
  if (source.startsWith("http") || source.startsWith("/")) return source;

  return source.startsWith("media/") ? `/${source}` : `/media/${source}`;
};

const getYouTubeId = (source: string): string => {
  return source.includes("/") ? source.split("/").pop() || "" : source;
};

const getMetadata = (source: string) => {
  let key = source;

  if (key.startsWith("/")) key = key.slice(1);

  if (!key.startsWith("media/")) key = `media/${key}`;

  return mediaMetadataMap[key];
};

const getDensity = (source: string, density?: number): number => {
  if (density && density > 0) {
    return density;
  }

  return /@2x\.[a-z0-9]+$/i.test(source) ? 2 : 1;
};

const getConstrainedMediaWidth = (
  metadata: MediaMetadata | undefined,
  maxHeight: string,
  density = 1
) => {
  if (!metadata) {
    return "100%";
  }

  const logicalWidth = Math.round(metadata.width / density);

  const logicalHeight = Math.round(metadata.height / density);

  return `min(${logicalWidth}px, calc(${maxHeight} * ${logicalWidth} / ${logicalHeight}))`;
};

const getMediaWidth = (
  type: ArticleMediaProperties["type"],
  metadata: MediaMetadata | undefined,
  density = 1,
  customWidth?: number | string
) => {
  if (customWidth !== undefined) {
    return typeof customWidth === "number" ? `${customWidth}px` : customWidth;
  }

  if (type === "image") {
    return getConstrainedMediaWidth(metadata, "80vh", density);
  }

  if (type === "video") {
    return getConstrainedMediaWidth(metadata, "65vh", density);
  }

  return metadata ? `${Math.round(metadata.width / density)}px` : "100%";
};

const getMediaLayout = (
  type: ArticleMediaProperties["type"],
  source: string,
  density = 1,
  customWidth?: number | string
) => {
  const metadata = getMetadata(source);

  return {
    aspectRatio: metadata ? `${metadata.width}/${metadata.height}` : "16/9",
    mediaWidth: getMediaWidth(type, metadata, density, customWidth),
    metadata,
  };
};

const getDragLimits = (image: HTMLImageElement, scaleValue: number): DragLimits => {
  const scaledWidth = image.offsetWidth * scaleValue;

  const scaledHeight = image.offsetHeight * scaleValue;

  const viewportWidth = window.innerWidth - VIEWER_PADDING;

  const viewportHeight = window.innerHeight - VIEWER_PADDING;

  const maxX = scaledWidth > viewportWidth ? (scaledWidth - viewportWidth) / 2 : 0;

  const maxY = scaledHeight > viewportHeight ? (scaledHeight - viewportHeight) / 2 : 0;

  return {
    bottom: maxY,
    left: -maxX,
    right: maxX,
    top: -maxY,
  };
};

const ImageViewer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  src: string;
}> = ({isOpen, onClose, src}) => {
  const scale = useMotionValue(1);

  const x = useMotionValue(0);

  const y = useMotionValue(0);

  const [isZoomed, setIsZoomed] = useState(false);

  const historyPushedReference = useRef(false);

  const onCloseReference = useRef(onClose);

  const constraintsReference = useRef<HTMLDivElement>(null);

  const imageReference = useRef<HTMLImageElement>(null);

  const [dragLimits, setDragLimits] = useState<DragLimits>({
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  });

  useEffect(() => {
    onCloseReference.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    scale.set(1);
    x.set(0);
    y.set(0);
    setIsZoomed(false);
  }, [isOpen, scale, x, y]);

  useEffect(() => {
    const unsubscribe = scale.on("change", (scaleValue) => {
      const isNewIsZoomed = scaleValue > VIEWER_SCALE.ZOOMED_THRESHOLD;

      setIsZoomed(isNewIsZoomed);

      if (!imageReference.current) {
        return;
      }

      const newLimits = getDragLimits(imageReference.current, scaleValue);

      setDragLimits(newLimits);

      const currentX = x.get();

      const currentY = y.get();

      const clampedX = clamp(currentX, newLimits.left, newLimits.right);

      const clampedY = clamp(currentY, newLimits.top, newLimits.bottom);

      if (currentX !== clampedX) x.set(clampedX);

      if (currentY !== clampedY) y.set(clampedY);
    });

    return unsubscribe;
  }, [scale, x, y]);

  const handleManualClose = () => {
    triggerHaptic("soft");

    if (historyPushedReference.current) {
      historyPushedReference.current = false;
      history.back();
    } else {
      onClose();
    }
  };

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (
      event.target === event.currentTarget ||
      event.target === constraintsReference.current
    ) {
      handleManualClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    try {
      history.pushState({imageViewerOpen: true}, "");
      historyPushedReference.current = true;
    } catch (error) {
      console.warn("History API not available or restricted:", error);
      historyPushedReference.current = false;
    }

    const handlePopState = () => {
      historyPushedReference.current = false;
      onCloseReference.current();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleManualClose();
      }
    };

    addEventListener("popstate", handlePopState);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      removeEventListener("popstate", handlePopState);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleWheel = (event: React.WheelEvent) => {
    event.stopPropagation();

    if (event.deltaY === 0) return;

    const current = scale.get();

    const direction = event.deltaY < 0 ? 1 : -1;

    const newScale = clamp(
      current + direction * VIEWER_SCALE.STEP,
      VIEWER_SCALE.MIN,
      VIEWER_SCALE.MAX
    );

    animate(scale, newScale, VIEWER_SPRING);
  };

  const distanceReference = useRef<number>(0);

  const handleTouchStart = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      distanceReference.current = Math.hypot(
        event.touches[0].clientX - event.touches[1].clientX,
        event.touches[0].clientY - event.touches[1].clientY
      );
    }
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    if (event.touches.length !== 2) {
      return;
    }

    const distribution = Math.hypot(
      event.touches[0].clientX - event.touches[1].clientX,
      event.touches[0].clientY - event.touches[1].clientY
    );

    const delta = distribution - distanceReference.current;

    const current = scale.get();

    const newScale = clamp(current + delta * 0.005, VIEWER_SCALE.MIN, VIEWER_SCALE.MAX);

    scale.set(newScale);
    distanceReference.current = distribution;
  };

  const lastTapReference = useRef<number>(0);

  const handleTap = () => {
    const now = Date.now();

    if (now - lastTapReference.current < 300) {
      const current = scale.get();

      if (current > VIEWER_SCALE.DOUBLE_TAP_THRESHOLD) {
        animate(scale, VIEWER_SCALE.MIN, VIEWER_SPRING);
        animate(x, 0, VIEWER_SPRING);
        animate(y, 0, VIEWER_SPRING);
      } else {
        animate(scale, 3, VIEWER_SPRING);
      }
    }

    lastTapReference.current = now;
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{opacity: 1}}
          className={styles["media-viewer-overlay"]}
          exit={{opacity: 0}}
          initial={{opacity: 0}}
          transition={{duration: 0.2}}
          onClick={handleBackgroundClick}
          onTouchMove={handleTouchMove}
          onTouchStart={handleTouchStart}
          onWheel={handleWheel}
        >
          <button
            aria-label="Закрыть"
            className={styles["media-viewer-close"]}
            onClick={handleManualClose}
          >
            <CloseRounded />
          </button>
          <motion.div
            className={styles["media-viewer-image-wrapper"]}
            onClick={handleBackgroundClick}
          >
            <motion.img
              ref={imageReference}
              alt=""
              className={styles["media-viewer-image"]}
              drag={isZoomed ? true : "y"}
              dragConstraints={isZoomed ? dragLimits : {bottom: 0, top: 0}}
              dragElastic={isZoomed ? 0.05 : 0.7}
              src={src}
              style={{scale, x, y}}
              onClick={(event) => {
                event.stopPropagation();
                handleTap();
              }}
              onDragEnd={(_, info) => {
                if (
                  !isZoomed &&
                  (Math.abs(info.offset.y) > 60 || Math.abs(info.velocity.y) > 500)
                ) {
                  handleManualClose();
                }
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const ArticleMedia: React.FC<ArticleMediaProperties> = (properties) => {
  const {src, type} = properties;

  const caption = type === "youtube" ? undefined : properties.caption;

  const isSpoilerOpen = useSpoiler();

  const [hasBeenOpened, setHasBeenOpened] = useState(isSpoilerOpen ?? true);

  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const [hasOpenedViewer, setHasOpenedViewer] = useState(false);

  useEffect(() => {
    if (isSpoilerOpen) {
      setHasBeenOpened(true);
    }
  }, [isSpoilerOpen]);

  const renderCaption = () => {
    if (!caption || type === "youtube") {
      return;
    }

    return <figcaption className={styles["media-caption"]}>{caption}</figcaption>;
  };

  const renderContent = () => {
    const density = type === "youtube" ? 1 : getDensity(src, properties.density);

    const customWidth = properties.width;

    const {aspectRatio, mediaWidth, metadata} = getMediaLayout(
      type,
      src,
      density,
      customWidth
    );

    const isMediaReady = hasBeenOpened || Boolean(isSpoilerOpen);

    if (!isMediaReady) {
      return (
        <div
          className={styles["media-placeholder"]}
          style={{aspectRatio, width: mediaWidth}}
        />
      );
    }

    const resolvedSource = getMediaSource(src);

    const displayWidth = metadata ? Math.round(metadata.width / density) : undefined;

    const displayHeight = metadata ? Math.round(metadata.height / density) : undefined;

    switch (type) {
      case "image": {
        return (
          <img
            alt={caption}
            className={`${styles["media-content"]} ${styles["media-content--image"]}`}
            decoding="async"
            height={displayHeight}
            loading="lazy"
            src={resolvedSource}
            style={{aspectRatio, cursor: "zoom-in", width: mediaWidth}}
            width={displayWidth}
            onClick={() => {
              triggerHaptic("soft");
              setHasOpenedViewer(true);
              setIsViewerOpen(true);
            }}
          />
        );
      }

      case "video": {
        return (
          <video
            controls
            playsInline
            autoPlay={properties.autoPlay}
            className={`${styles["media-content"]} ${styles["media-content--video"]}`}
            height={displayHeight}
            loop={properties.loop}
            src={resolvedSource}
            style={{aspectRatio, width: mediaWidth}}
            width={displayWidth}
          />
        );
      }

      case "youtube": {
        const videoId = getYouTubeId(src);

        return (
          <>
            <iframe
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className={styles["media-iframe"]}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1&rel=0`}
            />
            <div className={styles["media-youtube-actions"]}>
              <button
                onClick={() => {
                  triggerHaptic("soft");
                  window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
                }}
              >
                Открыть видео в новой вкладке
              </button>
              <button
                aria-label="Копировать ссылку"
                onClick={async () => {
                  triggerHaptic("soft");

                  const isSuccess = await canCopyText(
                    `https://www.youtube.com/watch?v=${videoId}`
                  );

                  if (isSuccess) {
                    message.success("Ссылка на видео скопирована");
                  } else {
                    message.error("Не удалось скопировать ссылку");
                  }
                }}
              >
                <ShareRounded />
              </button>
            </div>
          </>
        );
      }

      default: {
        return;
      }
    }
  };

  const figureClass = type === "youtube" ? styles["media-figure--youtube"] : undefined;

  return (
    <>
      <div className={`${styles.media} media`}>
        <figure className={`${styles["media-figure"]} ${figureClass}`}>
          {renderContent()}
          {renderCaption()}
        </figure>
      </div>
      {type === "image" && hasOpenedViewer && (
        <ImageViewer
          isOpen={isViewerOpen}
          src={getMediaSource(src)}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
};

export {ArticleMedia};
