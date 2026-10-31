import {
  INFINITE_SPEED,
  type KeyframeParameters,
  type Point,
  SAMPLES,
  SPEED_AXIS_PADDING_FACTOR,
} from "./easingEditorTypes";

export const getPointOnCubicBezier = (
  t: number,
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point
): Point => {
  const cX = 3 * (p1.x - p0.x);

  const bX = 3 * (p2.x - p1.x) - cX;

  const aX = p3.x - p0.x - cX - bX;

  const cY = 3 * (p1.y - p0.y);

  const bY = 3 * (p2.y - p1.y) - cY;

  const aY = p3.y - p0.y - cY - bY;

  const x = aX * t ** 3 + bX * t ** 2 + cX * t + p0.x;

  const y = aY * t ** 3 + bY * t ** 2 + cY * t + p0.y;

  return {x, y};
};

export const getNiceTickStep = (range: number, maxTicks: number): number => {
  if (range === 0) {
    return 1;
  }

  const roughStep = range / (maxTicks - 1);

  const power = Math.floor(Math.log10(roughStep));

  const magnitude = 10 ** power;

  const residual = roughStep / magnitude;

  if (residual > 5) {
    return 10 * magnitude;
  }

  if (residual > 2) {
    return 5 * magnitude;
  }

  return residual > 1 ? 2 * magnitude : magnitude;
};

const getCubicDerivative = (
  t: number,
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point
): Point => {
  return {
    x:
      3 * (1 - t) ** 2 * (p1.x - p0.x) +
      6 * (1 - t) * t * (p2.x - p1.x) +
      3 * t ** 2 * (p3.x - p2.x),
    y:
      3 * (1 - t) ** 2 * (p1.y - p0.y) +
      6 * (1 - t) * t * (p2.y - p1.y) +
      3 * t ** 2 * (p3.y - p2.y),
  };
};

export const getSpeedOnCubicBezier = (
  t: number,
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point
): number => {
  const derivative = getCubicDerivative(t, p0, p1, p2, p3);

  if (Math.abs(derivative.x) < 1e-6) {
    return derivative.y > 0 ? INFINITE_SPEED : -INFINITE_SPEED;
  }

  return derivative.y / derivative.x;
};

export const getAnimationPreviewHeight = (animationProperty: string): number => {
  return ["scale", "scaleAndRotate"].includes(animationProperty) ? 250 : 120;
};

export const calculateBezierGeometry = ({
  duration,
  keyframeIn,
  keyframeOut,
  trackWidth,
}: {
  duration: number;
  keyframeIn: KeyframeParameters;
  keyframeOut: KeyframeParameters;
  trackWidth: number;
}) => {
  if (trackWidth === 0) {
    return {
      p0: {x: 0, y: 0},
      p1: {x: 0, y: 0},
      p2: {x: 0, y: 0},
      p3: {x: 0, y: 0},
      speedIn: 0,
      speedOut: 0,
      valueYMax: 0,
      valueYMin: 0,
    };
  }

  const p0: Point = {x: 0, y: 0};

  const p3: Point = {x: duration, y: trackWidth};

  const p1x = (keyframeOut.influence / 100) * duration;

  const p1: Point = {x: p1x, y: keyframeOut.yFactor * trackWidth};

  const p2xRelative = (keyframeIn.influence / 100) * duration;

  const p2: Point = {
    x: duration - p2xRelative,
    y: keyframeIn.yFactor * trackWidth,
  };

  let currentSpeedOut = p1.y > 0 ? INFINITE_SPEED : -INFINITE_SPEED;

  if (p1x > 1e-6) {
    currentSpeedOut = p1.y / p1x;
  }

  let currentSpeedIn = trackWidth > p2.y ? INFINITE_SPEED : -INFINITE_SPEED;

  if (p2xRelative > 1e-6) {
    currentSpeedIn = (trackWidth - p2.y) / p2xRelative;
  }

  let yMin = p0.y;

  let yMax = p0.y;

  for (let index = 0; index <= SAMPLES; index++) {
    const t = index / SAMPLES;

    const point = getPointOnCubicBezier(t, p0, p1, p2, p3);

    if (point.y < yMin) {
      yMin = point.y;
    }

    if (point.y > yMax) {
      yMax = point.y;
    }
  }

  return {
    p0,
    p1,
    p2,
    p3,
    speedIn: currentSpeedIn,
    speedOut: currentSpeedOut,
    valueYMax: yMax,
    valueYMin: yMin,
  };
};

export const calculateSpeedAxisRange = ({
  duration,
  p0,
  p1,
  p2,
  p3,
  speedIn,
  speedOut,
  trackWidth,
}: {
  duration: number;
  p0: Point;
  p1: Point;
  p2: Point;
  p3: Point;
  speedIn: number;
  speedOut: number;
  trackWidth: number;
}) => {
  if (duration <= 0 || trackWidth <= 0) {
    return {speedYMax: 500, speedYMin: -500, speedYTicks: [-500, 0, 500]};
  }

  const speedSamples: number[] = [];

  for (let index = 0; index <= SAMPLES; index++) {
    const t = index / SAMPLES;

    const speed = getSpeedOnCubicBezier(t, p0, p1, p2, p3);

    if (Math.abs(speed) !== INFINITE_SPEED) {
      speedSamples.push(speed);
    }
  }

  if (speedSamples.length === 0) {
    speedSamples.push(speedOut, speedIn);
  }

  const minValue = Math.min(...speedSamples, speedOut, speedIn);

  const maxValue = Math.max(...speedSamples, speedOut, speedIn);

  const range = Math.max(maxValue - minValue, 200);

  const padding = range * SPEED_AXIS_PADDING_FACTOR;

  let finalMin = minValue - padding;

  let finalMax = maxValue + padding;

  if (finalMin > -100 && finalMin <= 0) {
    finalMin = -100;
  }

  if (finalMax < 100 && finalMax >= 0) {
    finalMax = 100;
  }

  const targetTickCount = 5;

  const step = getNiceTickStep(finalMax - finalMin, targetTickCount);

  const ticks: number[] = [];

  if (step > 0) {
    const firstTick = Math.ceil(finalMin / step) * step;

    for (let currentTick = firstTick; currentTick <= finalMax; currentTick += step) {
      ticks.push(currentTick);
    }
  }

  return {speedYMax: finalMax, speedYMin: finalMin, speedYTicks: ticks};
};
