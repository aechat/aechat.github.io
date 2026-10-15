import React, {useEffect, useRef, useState} from "react";

import {Helmet} from "react-helmet-async";

import PageTransition from "../components/layout/PageTransition";

import modalStyles from "../components/modals/Modal.module.scss";

import {usePageLoad} from "../hooks/usePageLoad";

import {useRipple} from "../hooks/useRipple";

interface Subtitle {
  end: number;
  start: number;
  text: string;
}

const NotFound = () => {
  const audioReference = useRef<HTMLAudioElement | null>(null);

  const videoReference = useRef<HTMLVideoElement | null>(null);

  const ripple = useRipple<HTMLButtonElement>();

  usePageLoad();

  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);

  const [currentSubtitle, setCurrentSubtitle] = useState<string>("Пустота");

  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const hasStartedVideoReference = useRef(false);

  const hasShownVideoReference = useRef(false);

  const hasFadedOutReference = useRef(false);

  useEffect(() => {
    if (videoReference.current) {
      videoReference.current.defaultMuted = true;
      videoReference.current.muted = true;
    }

    audioReference.current = new Audio("/files/404.mp3");

    const fetchSubtitles = async () => {
      try {
        const response = await fetch("/files/404.json");

        const json = await response.json();

        setSubtitles(json);
      } catch (error) {
        console.error("Ошибка загрузки субтитров:", error);
      }
    };

    fetchSubtitles();

    const handlePlayAudio = () => {
      if (audioReference.current) {
        audioReference.current.play().catch((error) => {
          console.error("Ошибка воспроизведения аудио:", error);
        });
      }
    };

    globalThis.addEventListener("click", handlePlayAudio);

    const audioElement = audioReference.current;

    const videoElement = videoReference.current;

    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }

      if (videoElement) {
        videoElement.pause();
      }

      globalThis.removeEventListener("click", handlePlayAudio);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number | undefined;

    const audioElement = audioReference.current;

    if (!audioElement || subtitles.length === 0) {
      return;
    }

    const firstSubtitle = subtitles[0];

    const syncVideoPlayback = (
      currentTime: number,
      duration: number,
      videoElement: HTMLVideoElement
    ) => {
      if (currentTime < firstSubtitle.start) {
        hasStartedVideoReference.current = false;
        hasShownVideoReference.current = false;
        hasFadedOutReference.current = false;
        setIsVideoVisible(false);

        return;
      }

      if (!hasStartedVideoReference.current) {
        hasStartedVideoReference.current = true;
        videoElement.currentTime = 0;

        videoElement.play().catch((error) => {
          console.error("Ошибка воспроизведения видео:", error);
        });
      }

      const showVideo = () => {
        if (hasShownVideoReference.current) {
          return;
        }

        hasShownVideoReference.current = true;
        setIsVideoVisible(true);
      };

      if (!hasShownVideoReference.current && currentTime >= firstSubtitle.end) {
        if (!videoElement.paused && videoElement.currentTime > 0) {
          showVideo();
        } else {
          videoElement.addEventListener("playing", showVideo, {once: true});
        }
      }

      if (!hasShownVideoReference.current) {
        return;
      }

      const isNearEnd =
        Number.isFinite(duration) && duration > 0 && duration - currentTime <= 4;

      if (isNearEnd) {
        if (!hasFadedOutReference.current) {
          hasFadedOutReference.current = true;
          setIsVideoVisible(false);
        }

        return;
      }

      if (hasFadedOutReference.current && currentTime >= firstSubtitle.end) {
        hasFadedOutReference.current = false;
        setIsVideoVisible(true);
      }
    };

    const syncSubtitles = () => {
      const currentTime = audioElement.currentTime;

      const current = subtitles.find(
        (sub) => currentTime >= sub.start && currentTime <= sub.end
      );

      const nextText = current ? current.text : "Пустота";

      setCurrentSubtitle((previous) => (previous === nextText ? previous : nextText));

      const videoElement = videoReference.current;

      if (firstSubtitle && videoElement) {
        syncVideoPlayback(currentTime, audioElement.duration, videoElement);
      }

      if (!audioElement.paused && !audioElement.ended) {
        animationFrameId = requestAnimationFrame(syncSubtitles);
      }
    };

    const handlePlay = () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(syncSubtitles);

      const videoElement = videoReference.current;

      if (hasStartedVideoReference.current && videoElement && videoElement.paused) {
        videoElement.play().catch(() => {});
      }
    };

    const handleStop = () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = undefined;
      }

      const videoElement = videoReference.current;

      if (videoElement && !videoElement.paused) {
        videoElement.pause();
      }
    };

    const handleEnded = () => {
      setIsVideoVisible(false);
      handleStop();
    };

    audioElement.addEventListener("play", handlePlay);
    audioElement.addEventListener("pause", handleStop);
    audioElement.addEventListener("ended", handleEnded);

    if (!audioElement.paused && !audioElement.ended) {
      animationFrameId = requestAnimationFrame(syncSubtitles);
    }

    return () => {
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }

      audioElement.removeEventListener("play", handlePlay);
      audioElement.removeEventListener("pause", handleStop);
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, [subtitles]);

  return (
    <PageTransition className="not-found error">
      <Helmet>
        <title>notfound@aechat</title>
        <link
          href="/icons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
        <meta
          content="Страница не найдена"
          name="description"
        />
        <meta
          content="notfound@aechat"
          itemProp="name"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          itemProp="image"
        />
        <meta
          content="404, not found, aechat, страница не найдена"
          name="keywords"
        />
        <meta
          content="website"
          property="og:type"
        />
        <meta
          content="https://aechat.ru/404"
          property="og:url"
        />
        <meta
          content="notfound@aechat"
          property="og:title"
        />
        <meta
          content="Страница не найдена"
          property="og:description"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          property="og:image"
        />
        <meta
          content="summary_large_image"
          name="twitter:card"
        />
        <meta
          content="notfound@aechat"
          name="twitter:title"
        />
        <meta
          content="Страница не найдена"
          name="twitter:description"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          name="twitter:image"
        />
      </Helmet>
      <div className="error-container">
        <div
          className={`video-backtitle${isVideoVisible ? " video-backtitle--visible" : ""}`}
        >
          <video
            ref={videoReference}
            loop
            muted
            playsInline
            preload="auto"
            src="/files/404.webm"
          />
        </div>
        <div className="error-backtitle">{currentSubtitle}</div>
        <div className={`${modalStyles["modal"]} error-modal`}>
          <div className={modalStyles["modal-header"]}>
            <div className={modalStyles["modal-header-title"]}>Страница не найдена</div>
          </div>
          <div
            className={`${modalStyles["modal-content"]} ${modalStyles["modal-content--error"]}`}
          >
            <div className={modalStyles["modal-text-balance"]}>
              <div className="flexible-links">
                <button
                  onClick={() => {
                    globalThis.location.reload();
                    globalThis.location.href = "/";
                  }}
                  onMouseDown={ripple.onMouseDown}
                >
                  На главную
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
