import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";

import {triggerHaptic} from "../../../utilities/haptics";

import styles from "./EasingEditor.module.scss";

import {AnimationControls} from "./EasingEditorControls";

import {SpeedGraph, ValueGraph} from "./EasingEditorGraphs";

import {
  useGetTforX,
  useLinearTime,
  useSpeedGraphMapping,
  useTimecode,
  useValueGraphMapping,
} from "./easingEditorHooks";

import {
  calculateBezierGeometry,
  calculateSpeedAxisRange,
  getAnimationPreviewHeight,
  getPointOnCubicBezier,
} from "./easingEditorMath";

import {AnimationDemo} from "./EasingEditorPreview";

import {
  type AnimationMode,
  type AnimationProperty,
  type DragInfo,
  type KeyframeParameters,
  VALUE_Y_MAX_FACTOR,
  VALUE_Y_MIN_FACTOR,
} from "./easingEditorTypes";

const EasingEditor: React.FC = () => {
  const [keyframeOut, setKeyframeOut] = useState<KeyframeParameters>({
    influence: 33.33,
    yFactor: 0,
  });

  const [keyframeIn, setKeyframeIn] = useState<KeyframeParameters>({
    influence: 33.33,
    yFactor: 1,
  });

  const [dragInfo, setDragInfo] = useState<DragInfo | undefined>();

  const [dragSpeedAxisRange, setDragSpeedAxisRange] = useState<
    | {
        min: number;
        max: number;
      }
    | undefined
  >();

  const [duration, setDuration] = useState(2);

  const [animationProperty, setAnimationProperty] =
    useState<AnimationProperty>("position");

  const [animationMode, setAnimationMode] = useState<AnimationMode>("ping-pong");

  const [fps, setFps] = useState(30);

  const [isPaused, setIsPaused] = useState(false);

  const [isTrailVisible, setIsTrailVisible] = useState(true);

  const [actualFps, setActualFps] = useState(fps);

  const [trackWidth, setTrackWidth] = useState(0);

  const [elapsedTime, setElapsedTime] = useState(0);

  const [valueGraphDims, setValueGraphDims] = useState({height: 0, width: 0});

  const [speedGraphDims, setSpeedGraphDims] = useState({height: 0, width: 0});

  const trackReference = useRef<HTMLDivElement>(null);

  const valueGraphSvgReference = useRef<SVGSVGElement>(null);

  const speedGraphSvgReference = useRef<SVGSVGElement>(null);

  const animationFrameReference = useRef<number | undefined>(undefined);

  const startTimeReference = useRef<number>(0);

  const elapsedOnPauseReference = useRef<number>(0);

  const lastFrameRenderTimeReference = useRef<number>(0);

  const frameCountReference = useRef(0);

  const lastFpsUpdateTimeReference = useRef(0);

  const fpsReference = useRef(fps);

  useEffect(() => {
    fpsReference.current = fps;
  }, [fps]);

  useEffect(() => {
    const elementsToObserve = [
      trackReference.current,
      valueGraphSvgReference.current,
      speedGraphSvgReference.current,
    ].filter(Boolean) as Element[];

    if (elementsToObserve.length === 0) {
      return;
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === trackReference.current) {
          setTrackWidth(entry.contentRect.width);
        }

        if (entry.target === valueGraphSvgReference.current) {
          setValueGraphDims({
            height: entry.contentRect.height,
            width: entry.contentRect.width,
          });
        }

        if (entry.target === speedGraphSvgReference.current) {
          setSpeedGraphDims({
            height: entry.contentRect.height,
            width: entry.contentRect.width,
          });
        }
      }
    });

    for (const element of elementsToObserve) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const {p0, p1, p2, p3, speedIn, speedOut, valueYMax, valueYMin} = useMemo(
    () =>
      calculateBezierGeometry({
        duration,
        keyframeIn,
        keyframeOut,
        trackWidth,
      }),
    [duration, keyframeIn, keyframeOut, trackWidth]
  );

  const getTforX = useGetTforX(p0, p1, p2, p3);

  const linearTime = useLinearTime(elapsedTime, duration, animationMode);

  const animatedPoint = useMemo(
    () => getPointOnCubicBezier(getTforX(linearTime), p0, p1, p2, p3),
    [linearTime, getTforX, p0, p1, p2, p3]
  );

  const {speedYMax, speedYMin, speedYTicks} = useMemo(
    () =>
      calculateSpeedAxisRange({
        duration,
        p0,
        p1,
        p2,
        p3,
        speedIn,
        speedOut,
        trackWidth,
      }),
    [duration, p0, p1, p2, p3, speedIn, speedOut, trackWidth]
  );

  const {mapValueFromSvg, mapValueToSvg} = useValueGraphMapping(
    duration,
    trackWidth,
    valueGraphDims,
    valueGraphSvgReference
  );

  const {
    mapSpeedFromSvg,
    mapSpeedToSvg,
    mapTimeToSvg,
    speedCurvePath,
    speedGraphHandles,
  } = useSpeedGraphMapping(
    duration,
    speedGraphDims,
    speedGraphSvgReference,
    speedOut,
    speedIn,
    p0,
    p1,
    p2,
    p3,
    speedYMin,
    speedYMax
  );

  useEffect(() => {
    if (isPaused) {
      elapsedOnPauseReference.current = elapsedTime;

      return;
    }

    startTimeReference.current = performance.now() - elapsedOnPauseReference.current;
    lastFrameRenderTimeReference.current = performance.now();
    lastFpsUpdateTimeReference.current = 0;
    frameCountReference.current = 0;

    const animate = (timestamp: number) => {
      if (lastFpsUpdateTimeReference.current === 0) {
        lastFpsUpdateTimeReference.current = timestamp;
      }

      frameCountReference.current++;

      const timeSinceFpsUpdate = timestamp - lastFpsUpdateTimeReference.current;

      if (timeSinceFpsUpdate > 500) {
        setActualFps(frameCountReference.current / (timeSinceFpsUpdate / 1000));
        frameCountReference.current = 0;
        lastFpsUpdateTimeReference.current = timestamp;
      }

      const frameInterval = 1000 / fpsReference.current;

      const timeSinceLastRender = timestamp - lastFrameRenderTimeReference.current;

      if (timeSinceLastRender < frameInterval) {
        animationFrameReference.current = requestAnimationFrame(animate);

        return;
      }

      lastFrameRenderTimeReference.current =
        timestamp - (timeSinceLastRender % frameInterval);

      const totalElapsedTime = timestamp - startTimeReference.current;

      if (animationMode === "once" && totalElapsedTime >= duration * 1000) {
        setElapsedTime(duration * 1000);
        setIsPaused(true);
      } else {
        setElapsedTime(totalElapsedTime);
        animationFrameReference.current = requestAnimationFrame(animate);
      }
    };

    animationFrameReference.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameReference.current) {
        cancelAnimationFrame(animationFrameReference.current);
      }
    };
  }, [isPaused, duration, animationMode]);

  const handleMouseDown = useCallback(
    (
      event: React.MouseEvent | React.TouchEvent,
      handle: "p1" | "p2",
      graphType: "value" | "speed"
    ) => {
      event.preventDefault();
      triggerHaptic("selection");
      document.body.style.cursor = "grabbing";
      setDragInfo({graphType, handle});

      if (graphType === "speed") {
        setDragSpeedAxisRange({max: speedYMax, min: speedYMin});
      }
    },
    [speedYMin, speedYMax]
  );

  const handleMouseUp = useCallback(() => {
    document.body.style.cursor = "default";
    setDragInfo(undefined);
    setDragSpeedAxisRange(undefined);
  }, []);

  const handleMouseMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!dragInfo || trackWidth === 0) {
        return;
      }

      if (event.cancelable) {
        event.preventDefault();
      }

      const touch = "touches" in event ? event.touches[0] : event;

      const isShiftPressed = "shiftKey" in event && event.shiftKey;

      const valueYMax = trackWidth * VALUE_Y_MAX_FACTOR;

      const valueYMin = trackWidth * VALUE_Y_MIN_FACTOR;

      const handleValueGraphMove = () => {
        const normalizedPoint = mapValueFromSvg({x: touch.clientX, y: touch.clientY});

        if (!normalizedPoint) {
          return;
        }

        let clampedY = Math.max(valueYMin, Math.min(valueYMax, normalizedPoint.y));

        if (isShiftPressed) {
          clampedY = dragInfo.handle === "p1" ? 0 : trackWidth;
        }

        const handleX = Math.max(0, Math.min(duration, normalizedPoint.x));

        return {
          influence:
            ((dragInfo.handle === "p1" ? handleX : duration - handleX) / duration) * 100,
          yFactor: clampedY / trackWidth,
        };
      };

      const handleSpeedGraphMove = () => {
        const normalizedPoint = mapSpeedFromSvg({x: touch.clientX, y: touch.clientY});

        if (!normalizedPoint) {
          return;
        }

        const handleX = Math.max(0, Math.min(duration, normalizedPoint.x));

        const influence =
          ((dragInfo.handle === "p1" ? handleX : duration - handleX) / duration) * 100;

        const speedYMinOnDrag = dragSpeedAxisRange?.min ?? speedYMin;

        const speedYMaxOnDrag = dragSpeedAxisRange?.max ?? speedYMax;

        let targetSpeed = isShiftPressed ? 0 : normalizedPoint.y;

        targetSpeed = Math.max(speedYMinOnDrag, Math.min(speedYMaxOnDrag, targetSpeed));

        let yFactor;

        if (dragInfo.handle === "p1") {
          const p1x = (influence / 100) * duration;

          let p1y = targetSpeed * p1x;

          p1y = Math.max(valueYMin, Math.min(valueYMax, p1y));
          yFactor = p1y / trackWidth;
        } else {
          const p2xRelative = (influence / 100) * duration;

          let p2y = trackWidth - targetSpeed * p2xRelative;

          p2y = Math.max(valueYMin, Math.min(valueYMax, p2y));
          yFactor = p2y / trackWidth;
        }

        return {influence, yFactor};
      };

      const newParameters =
        dragInfo.graphType === "value" ? handleValueGraphMove() : handleSpeedGraphMove();

      if (newParameters) {
        if (dragInfo.handle === "p1") {
          setKeyframeOut((current) => ({...current, ...newParameters}));
        } else {
          setKeyframeIn((current) => ({...current, ...newParameters}));
        }
      }
    },
    [
      dragInfo,
      trackWidth,
      duration,
      mapValueFromSvg,
      mapSpeedFromSvg,
      speedYMin,
      speedYMax,
      dragSpeedAxisRange,
    ]
  );

  useEffect(() => {
    if (dragInfo) {
      addEventListener("mousemove", handleMouseMove);

      addEventListener("touchmove", handleMouseMove, {
        passive: false,
      });

      addEventListener("mouseup", handleMouseUp);
      addEventListener("touchend", handleMouseUp);
    }

    return () => {
      removeEventListener("mousemove", handleMouseMove);
      removeEventListener("touchmove", handleMouseMove);
      removeEventListener("mouseup", handleMouseUp);
      removeEventListener("touchend", handleMouseUp);
    };
  }, [dragInfo, handleMouseMove, handleMouseUp]);

  const timecode = useTimecode(linearTime, fps, duration);

  const resetTimer = () => {
    elapsedOnPauseReference.current = 0;
    setElapsedTime(0);
  };

  const handleResetAnimation = () => {
    resetTimer();
    setDuration(2);
    setFps(30);
    setKeyframeOut({influence: 33.33, yFactor: 0});
    setKeyframeIn({influence: 33.33, yFactor: 1});
    setIsPaused(false);
  };

  const handleTogglePlayPause = () => {
    if (animationMode === "once" && elapsedTime >= duration * 1000) {
      resetTimer();
      setIsPaused(false);
    } else {
      setIsPaused((previous) => !previous);
    }
  };

  const handleSetAnimationMode = (mode: AnimationMode) => {
    setAnimationMode(mode);
    resetTimer();
    setIsPaused(false);
  };

  return (
    <div className={styles["easing-editor-wrapper"]}>
      <div
        className={styles["animation-demo-container"]}
        style={{minHeight: `${getAnimationPreviewHeight(animationProperty)}px`}}
      >
        <AnimationDemo
          animatedPoint={animatedPoint}
          animationProperty={animationProperty}
          isTrailVisible={isTrailVisible}
          trackRef={trackReference}
          trackWidth={trackWidth}
          valueYMax={valueYMax}
          valueYMin={valueYMin}
        />
        <span className={styles["timecode"]}>{timecode}</span>
      </div>
      <div className={styles["graphs-container"]}>
        <ValueGraph
          animatedPoint={animatedPoint}
          animationProperty={animationProperty}
          dimensions={valueGraphDims}
          duration={duration}
          mapToSvg={mapValueToSvg}
          p0={p0}
          p1={p1}
          p2={p2}
          p3={p3}
          svgRef={valueGraphSvgReference}
          trackWidth={trackWidth}
          onMouseDown={(event, handle) => handleMouseDown(event, handle, "value")}
        />
        <SpeedGraph
          curvePath={speedCurvePath}
          dimensions={speedGraphDims}
          duration={duration}
          handle1={speedGraphHandles.h1}
          handle2={speedGraphHandles.h2}
          mapSpeedToSvg={mapSpeedToSvg}
          mapTimeToSvg={mapTimeToSvg}
          svgRef={speedGraphSvgReference}
          yTicks={speedYTicks}
          onMouseDown={(event, handle) => handleMouseDown(event, handle, "speed")}
        />
      </div>
      <AnimationControls
        actualFps={actualFps}
        animationMode={animationMode}
        animationProperty={animationProperty}
        duration={duration}
        fps={fps}
        handleResetAnimation={handleResetAnimation}
        handleTogglePlayPause={handleTogglePlayPause}
        isPaused={isPaused}
        isTrailVisible={isTrailVisible}
        setAnimationMode={handleSetAnimationMode}
        setAnimationProperty={setAnimationProperty}
        setDuration={setDuration}
        setFps={setFps}
        setIsTrailVisible={setIsTrailVisible}
      />
    </div>
  );
};

export default EasingEditor;
