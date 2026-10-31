import {useCallback, useMemo} from "react";

import {getPointOnCubicBezier, getSpeedOnCubicBezier} from "./easingEditorMath";

import {
  type AnimationMode,
  type GraphDimensions,
  INFINITE_SPEED,
  PADDING,
  type Point,
  SAMPLES,
  type TimeMapEntry,
  VALUE_Y_MAX_FACTOR,
  VALUE_Y_MIN_FACTOR,
} from "./easingEditorTypes";

export function useGetTforX(p0: Point, p1: Point, p2: Point, p3: Point) {
  const timeToTMap = useMemo<TimeMapEntry[]>(() => {
    const map: TimeMapEntry[] = [];

    if (!p3) {
      return map;
    }

    for (let index = 0; index <= SAMPLES; index++) {
      const t = index / SAMPLES;

      const x = getPointOnCubicBezier(t, p0, p1, p2, p3).x;

      map.push({t, x});
    }

    return map;
  }, [p0, p1, p2, p3]);

  return useCallback(
    (xTarget: number): number => {
      if (xTarget <= 0) {
        return 0;
      }

      const duration = p3.x;

      if (xTarget >= duration) {
        return 1;
      }

      let high = SAMPLES;

      let index = 0;

      let low = 0;

      while (low <= high) {
        index = Math.floor((low + high) / 2);

        const xAtIndex = timeToTMap[index]?.x;

        if (xAtIndex < xTarget) {
          low = index + 1;
        } else if (xAtIndex > xTarget) {
          high = index - 1;
        } else {
          return timeToTMap[index]?.t ?? 0;
        }
      }

      if (timeToTMap[index]?.x > xTarget && index > 0) {
        index--;
      }

      const lower = timeToTMap[index];

      const upper = timeToTMap[index + 1];

      if (!lower || !upper) {
        return timeToTMap[index]?.t ?? 0;
      }

      const range = upper.x - lower.x;

      if (range === 0) {
        return lower.t;
      }

      const xRatio = (xTarget - lower.x) / range;

      return lower.t + xRatio * (upper.t - lower.t);
    },
    [timeToTMap, p3.x]
  );
}

export function useLinearTime(
  elapsedTime: number,
  duration: number,
  animationMode: AnimationMode
) {
  return useMemo(() => {
    const durationMs = duration * 1000;

    if (durationMs === 0) {
      return 0;
    }

    if (animationMode === "loop") {
      return (elapsedTime % durationMs) / 1000;
    }

    if (animationMode === "once") {
      return Math.min(elapsedTime, durationMs) / 1000;
    }

    const cycleTime = durationMs * 2;

    const timeInCycle = elapsedTime % cycleTime;

    return (timeInCycle < durationMs ? timeInCycle : cycleTime - timeInCycle) / 1000;
  }, [elapsedTime, duration, animationMode]);
}

export function useTimecode(linearTime: number, fps: number, duration: number) {
  return useMemo(() => {
    const epsilon = 1e-9;

    if (linearTime >= duration - epsilon) {
      let endSeconds = Math.floor(duration);

      let endFrames = Math.round((duration - endSeconds) * fps);

      if (endFrames >= fps) {
        endSeconds += 1;
        endFrames = 0;
      }

      return `${String(endSeconds).padStart(2, "0")}:${String(endFrames).padStart(2, "0")}`;
    }

    const totalFrames = Math.floor(linearTime * fps);

    const seconds = Math.floor(totalFrames / fps);

    const frames = totalFrames % fps;

    return `${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
  }, [linearTime, fps, duration]);
}

export function useValueGraphMapping(
  duration: number,
  trackWidth: number,
  dimensions: GraphDimensions,
  svgReference: React.RefObject<SVGSVGElement | null>
) {
  const {height, width} = dimensions;

  const graphWidth = width - PADDING * 2;

  const graphHeight = height - PADDING * 2;

  const yMax = trackWidth * VALUE_Y_MAX_FACTOR;

  const yMin = trackWidth * VALUE_Y_MIN_FACTOR;

  const yRange = yMax - yMin;

  const mapValueToSvg = useCallback(
    (p: Point): Point => {
      if (yRange === 0 || graphWidth <= 0 || graphHeight <= 0) {
        return {x: PADDING, y: PADDING};
      }

      const xRatio = duration === 0 ? 0 : p.x / duration;

      const yRatio = (p.y - yMin) / yRange;

      return {
        x: PADDING + xRatio * graphWidth,
        y: PADDING + (1 - yRatio) * graphHeight,
      };
    },
    [duration, graphWidth, graphHeight, yMin, yRange]
  );

  const mapValueFromSvg = useCallback(
    (svgP: Point): Point | undefined => {
      if (trackWidth === 0 || graphWidth <= 0 || !svgReference.current) {
        return undefined;
      }

      const svgRect = svgReference.current.getBoundingClientRect();

      const mouseX = svgP.x - svgRect.left;

      const mouseY = svgP.y - svgRect.top;

      const xRatio = (mouseX - PADDING) / graphWidth;

      const yRatio = 1 - (mouseY - PADDING) / graphHeight;

      const x = xRatio * duration;

      const y = yRatio * yRange + yMin;

      return {x, y};
    },
    [duration, trackWidth, graphWidth, graphHeight, yMin, yRange, svgReference]
  );

  return {mapValueFromSvg, mapValueToSvg};
}

export function useSpeedGraphMapping(
  duration: number,
  dimensions: GraphDimensions,
  svgReference: React.RefObject<SVGSVGElement | null>,
  speedOut: number,
  speedIn: number,
  p0: Point,
  p1: Point,
  p2: Point,
  p3: Point,
  speedYMin: number,
  speedYMax: number
) {
  const {height, width} = dimensions;

  const graphWidth = width - PADDING * 2;

  const graphHeight = height - PADDING * 2;

  const speedYRange = speedYMax - speedYMin;

  const mapTimeToSvg = useCallback(
    (time: number) =>
      duration === 0 ? PADDING : PADDING + (time / duration) * graphWidth,
    [duration, graphWidth]
  );

  const mapSpeedToSvg = useCallback(
    (speed: number) =>
      PADDING +
      (speedYRange === 0
        ? graphHeight / 2
        : (1 - (speed - speedYMin) / speedYRange) * graphHeight),
    [speedYMin, speedYRange, graphHeight]
  );

  const mapSpeedFromSvg = useCallback(
    (svgP: Point): Point | undefined => {
      if (speedYRange === 0 || graphWidth <= 0 || !svgReference.current) {
        return undefined;
      }

      const svgRect = svgReference.current.getBoundingClientRect();

      const mouseX = svgP.x - svgRect.left;

      const mouseY = svgP.y - svgRect.top;

      const xRatio = (mouseX - PADDING) / graphWidth;

      const yRatio = 1 - (mouseY - PADDING) / graphHeight;

      const x = xRatio * duration;

      const y = yRatio * speedYRange + speedYMin;

      return {x, y};
    },
    [duration, graphWidth, graphHeight, speedYMin, speedYRange, svgReference]
  );

  const speedCurvePath = useMemo(() => {
    if (speedYRange === 0 || width <= 0) {
      return "";
    }

    let path = `M ${mapTimeToSvg(0)},${mapSpeedToSvg(speedOut)}`;

    for (let index = 1; index <= SAMPLES; index++) {
      const t = index / SAMPLES;

      const x = getPointOnCubicBezier(t, p0, p1, p2, p3).x;

      let speed = getSpeedOnCubicBezier(t, p0, p1, p2, p3);

      if (Math.abs(speed) === INFINITE_SPEED) {
        speed = speed > 0 ? INFINITE_SPEED : -INFINITE_SPEED;
      }

      path += ` L ${mapTimeToSvg(x)},${mapSpeedToSvg(speed)}`;
    }

    return path;
  }, [width, speedYRange, mapTimeToSvg, mapSpeedToSvg, speedOut, p0, p1, p2, p3]);

  const speedGraphHandles = useMemo(() => {
    const influenceOutX = (p1.x / duration) * 100;

    const influenceInX = ((duration - p2.x) / duration) * 100;

    return {
      h1: {x: (influenceOutX / 100) * duration, y: speedOut},
      h2: {x: duration - (influenceInX / 100) * duration, y: speedIn},
    };
  }, [p1.x, p2.x, speedOut, speedIn, duration]);

  return {
    mapSpeedFromSvg,
    mapSpeedToSvg,
    mapTimeToSvg,
    speedCurvePath,
    speedGraphHandles,
  };
}
