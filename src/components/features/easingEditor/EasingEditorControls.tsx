import React from "react";

import {Slider} from "antd";

import {triggerHaptic} from "../../../utilities/haptics";

import styles from "./EasingEditor.module.scss";

import {type AnimationMode, type AnimationProperty, MODES} from "./easingEditorTypes";

interface AnimationControlsProperties {
  actualFps: number;
  animationMode: AnimationMode;
  animationProperty: AnimationProperty;
  duration: number;
  fps: number;
  handleResetAnimation: () => void;
  handleTogglePlayPause: () => void;
  isPaused: boolean;
  isTrailVisible: boolean;
  setAnimationMode: (mode: AnimationMode) => void;
  setAnimationProperty: (property: AnimationProperty) => void;
  setDuration: (value: number) => void;
  setFps: (value: number) => void;
  setIsTrailVisible: (isShow: boolean) => void;
}

const modeTextMap: Record<AnimationMode, string> = {
  "loop": "Цикл",
  "once": "Один раз",
  "ping-pong": "Пинг-понг",
};

const propertyTextMap: Record<AnimationProperty, string> = {
  position: "Позиция",
  positionAndRotation: "Позиция + Поворот",
  positionAndScale: "Позиция + масштаб",
  rotation: "Поворот",
  scale: "Масштаб",
  scaleAndRotate: "Поворот + масштаб",
};

export const AnimationControls: React.FC<AnimationControlsProperties> = ({
  actualFps,
  animationMode,
  animationProperty,
  duration,
  fps,
  handleResetAnimation,
  handleTogglePlayPause,
  isPaused,
  isTrailVisible,
  setAnimationMode,
  setAnimationProperty,
  setDuration,
  setFps,
  setIsTrailVisible,
}) => {
  const handleDurationAfterChange = triggerHaptic.bind(undefined, "selection");

  return (
    <div className={styles["animation-controls"]}>
      <div className={styles["control-item"]}>
        <label>
          <span>Длительность</span>: <span>{duration.toFixed(2)} сек.</span>
        </label>
        <Slider
          max={5}
          min={1}
          step={0.25}
          value={duration}
          onAfterChange={handleDurationAfterChange}
          onChange={setDuration}
        />
        <label>
          <span>Частота кадров</span>{" "}
          {actualFps < fps - 0.5 && (
            <span className={styles["fps-warning"]}>({Math.round(actualFps)})</span>
          )}
        </label>
        <div className="flexible-links">
          {[8, 15, 24, 30, 60].map((f) => (
            <button
              key={f}
              className={fps === f ? "active selected" : ""}
              style={{flexBasis: "15px"}}
              onClick={() => {
                triggerHaptic("selection");
                setFps(f);
              }}
            >
              {f}
            </button>
          ))}
        </div>
        <label>Режим</label>
        <div className="flexible-links">
          {MODES.map((mode) => (
            <button
              key={mode}
              className={animationMode === mode ? "active selected" : ""}
              onClick={() => {
                triggerHaptic("selection");
                setAnimationMode(mode);
              }}
            >
              {modeTextMap[mode]}
            </button>
          ))}
        </div>
      </div>
      <div className={styles["control-item"]}>
        <label>Свойство</label>
        <div className="flexible-links">
          {Object.keys(propertyTextMap).map((property) => (
            <button
              key={property}
              className={animationProperty === property ? "active selected" : ""}
              onClick={() => {
                triggerHaptic("selection");
                setAnimationProperty(property as AnimationProperty);
              }}
            >
              {propertyTextMap[property as AnimationProperty]}
            </button>
          ))}
        </div>
        <label>Управление</label>
        <div className="flexible-links">
          <button
            onClick={() => {
              triggerHaptic("soft");
              handleTogglePlayPause();
            }}
          >
            {isPaused ? "▶ Воспроизвести" : "❚❚ Пауза"}
          </button>
          <button
            className={styles["reset-desaturated"]}
            onClick={() => {
              triggerHaptic("soft");
              handleResetAnimation();
            }}
          >
            Сбросить
          </button>
          <button
            className={isTrailVisible ? "active selected" : ""}
            onClick={() => {
              triggerHaptic("selection");
              setIsTrailVisible(!isTrailVisible);
            }}
          >
            Показать след
          </button>
        </div>
      </div>
    </div>
  );
};
