import {useEffect} from "react";

const useDynamicFavicon = (svgContent: string) => {
  useEffect(() => {
    if (!svgContent) {
      return;
    }

    let previousUrl: string | undefined;

    const getAccentColor = () => {
      const accentHue = getComputedStyle(document.documentElement).getPropertyValue(
        "--accent-hue"
      );

      return `hsl(${accentHue}, 100%, 70%)`;
    };

    const updateFavicon = () => {
      try {
        const color = getAccentColor();

        const themedSvg = svgContent.replaceAll(/fill="[^"]*"/g, () => `fill="${color}"`);

        const svgBlob = new Blob([themedSvg], {type: "image/svg+xml"});

        if (previousUrl) {
          URL.revokeObjectURL(previousUrl);
        }

        const url = URL.createObjectURL(svgBlob);

        previousUrl = url;

        let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");

        if (link) {
          link.href = url;
        } else {
          link = document.createElement("link");
          link.rel = "icon";
          link.href = url;
          document.querySelector("head")?.append(link);
        }
      } catch (error) {
        console.error("Failed to update favicon:", error);
      }
    };

    updateFavicon();

    const handleAccentHueChange = () => {
      updateFavicon();
    };

    addEventListener("accentHueChanged", handleAccentHueChange);

    return () => {
      removeEventListener("accentHueChanged", handleAccentHueChange);

      if (previousUrl) {
        URL.revokeObjectURL(previousUrl);
      }
    };
  }, [svgContent]);
};

export default useDynamicFavicon;
