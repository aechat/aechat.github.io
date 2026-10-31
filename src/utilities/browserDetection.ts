interface BrowserInfo {
  isLegacy: boolean;
  name: string;
  version: number;
}

interface PlatformInfo {
  isAndroid: boolean;
  isIOS: boolean;
  isMacOS: boolean;
  isMobile: boolean;
  isWindows: boolean;
}

type NavigatorWithUAData = Navigator & {
  userAgentData?: {
    mobile?: boolean;
  };
};

const MOBILE_VIEWPORT_MAX_WIDTH = 768;

const getUserAgent = (): string => {
  return typeof window === "undefined" || typeof navigator === "undefined"
    ? ""
    : (navigator.userAgent ?? "");
};

const getUserAgentLowerCase = (): string => getUserAgent().toLowerCase();

export function getBrowserInfo(): BrowserInfo {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {isLegacy: false, name: "Unknown", version: 0};
  }

  const ua = getUserAgent();

  let name = "Unknown";

  let version = 0;

  let match = /(Chrom(e|ium))\/((\d+)\.?(\d+)?\.?(\d+)?\.?(\d+)?)/.exec(ua);

  if (match) {
    name = "Chrome";
    version = Math.trunc(Number(match[4]));
  }

  match = /(Firefox)\/((\d+)\.?(\d+)?\.?(\d+)?\.?(\d+)?)/.exec(ua);

  if (!match && ua.includes("Firefox")) {
    match = /(Firefox)\/(\d+)/.exec(ua);
  }

  if (match) {
    name = "Firefox";
    version = Math.trunc(Number(match[2]));
  }

  match = /Version\/((\d+)(?:\.\d+){0,2})\s(Safari)\/((\d+)(?:\.\d+){0,2})/.exec(ua);

  if (match && !ua.includes("Chrome") && !ua.includes("Edge") && !ua.includes("Opera")) {
    name = "Safari";
    version = Math.trunc(Number(match[2]));
  }

  match = /(Edg)\/((\d+)\.?(\d+)?\.?(\d+)?\.?(\d+)?)/.exec(ua);

  if (match) {
    name = "Edge";
    version = Math.trunc(Number(match[2]));
  }

  match = /(Opera|OPR)\/((\d+)\.?(\d+)?\.?(\d+)?\.?(\d+)?)/.exec(ua);

  if (match) {
    name = "Opera";
    version = Math.trunc(Number(match[2]));
  }

  const legacyThresholds: {[key: string]: number} = {
    Chrome: 90,
    Edge: 90,
    Firefox: 90,
    Opera: 75,
    Safari: 14,
  };

  const isLegacy =
    version > 0 &&
    legacyThresholds[name] !== undefined &&
    version < legacyThresholds[name];

  return {isLegacy, name, version};
}

export const getPlatformInfo = (): PlatformInfo => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {
      isAndroid: false,
      isIOS: false,
      isMacOS: false,
      isMobile: false,
      isWindows: false,
    };
  }

  const ua = getUserAgentLowerCase();

  const isIOS = /iphone|ipad|ipod/.test(ua);

  const isAndroid = /android/.test(ua);

  const isMacOS = /macintosh|mac os x/.test(ua);

  const isWindows = /windows/.test(ua);

  const uaDataMobile = (navigator as NavigatorWithUAData).userAgentData?.mobile;

  const isMobile =
    typeof uaDataMobile === "boolean"
      ? uaDataMobile
      : isIOS || isAndroid || /mobile/.test(ua);

  return {isAndroid, isIOS, isMacOS, isMobile, isWindows};
};

export const isMobileDevice = (
  options: {maxWidth?: number; useViewportFallback?: boolean} = {}
): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const {isMobile} = getPlatformInfo();

  const isUseViewportFallback = Boolean(options.useViewportFallback);

  const maxWidth = options.maxWidth ?? MOBILE_VIEWPORT_MAX_WIDTH;

  const isViewportIsMobile = isUseViewportFallback && window.innerWidth <= maxWidth;

  return isMobile || isViewportIsMobile;
};

export const isWebKitBrowser = (): boolean => {
  const ua = getUserAgent();

  return Boolean(
    ua &&
    /AppleWebKit|Epiphany|Safari/i.test(ua) &&
    !/Chrome|Chromium|Edg|OPR|Brave/i.test(ua)
  );
};
