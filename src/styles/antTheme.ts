import {theme} from "antd";

const getAntTheme = (isDarkMode: boolean, accentHue: number, saturateRatio: number) => {
  const accentLightness = isDarkMode ? 73 : 45;

  const calculatedAccentColor = `hsl(${accentHue}, ${saturateRatio * (isDarkMode ? 100 : 65)}%, ${accentLightness}%)`;

  return {
    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    components: {
      Breadcrumb: {
        itemColor: "var(--color-page-text-muted)",
        linkColor: "var(--color-page-text)",
        linkHoverColor: calculatedAccentColor,
        separatorColor: calculatedAccentColor,
      },
      Divider: {
        colorSplit: "var(--color-panel-border)",
        colorTextHeading: "var(--color-panel-text)",
        fontSizeLG: 15,
      },
      InputNumber: {
        colorBgContainer: "var(--color-article-background-muted)",
        colorBorder: "var(--color-article-border)",
        colorPrimary: calculatedAccentColor,
        colorText: "var(--color-page-text)",
        colorTextPlaceholder: "var(--color-page-text-muted)",
        controlItemBgActive: "var(--color-page-background)",
        controlItemBgHover: "var(--color-article-background)",
        controlOutline: calculatedAccentColor,
        handleActiveBg: calculatedAccentColor,
        handleHoverBg: calculatedAccentColor,
      },
      Modal: {
        headerBg: "transparent",
        titleColor: "var(--color-page-text)",
      },
      Select: {
        colorBgContainer: "var(--color-article-background-muted)",
        colorBgElevated: "var(--color-article-background)",
        colorBorder: "var(--color-article-border)",
        colorPrimary: calculatedAccentColor,
        colorPrimaryHover: calculatedAccentColor,
        colorText: "var(--color-page-text)",
        colorTextPlaceholder: "var(--color-page-text-muted)",
        colorTextQuaternary: "var(--color-page-text-muted)",
        controlItemBgActive: "var(--color-panel-background)",
        controlItemBgHover: "var(--color-panel-dropdown-background-hover)",
        optionActiveBg: "var(--color-panel-dropdown-background-hover)",
        optionSelectedBg: "var(--color-panel-background)",
        optionSelectedColor: "var(--color-panel-text)",
        selectorBg: "var(--color-article-background-muted)",
      },
      Slider: {
        dotActiveBorderColor: calculatedAccentColor,
        dotBorderColor: calculatedAccentColor,
        handleActiveColor: calculatedAccentColor,
        handleActiveOutlineColor: calculatedAccentColor,
        handleColor: calculatedAccentColor,
        railBg: "var(--color-article-border)",
        railHoverBg: "var(--color-article-border)",
        trackBg: "var(--color-panel-border)",
        trackHoverBg: calculatedAccentColor,
      },
      Tooltip: {
        colorBgSpotlight: "var(--color-article-background)",
        colorText: "var(--color-page-text)",
        colorTextLightSolid: "var(--color-page-text)",
      },
    },
    token: {
      colorBgBase: "var(--color-page-background)",
      colorBgElevated: "var(--color-article-background)",
      colorBorder: "var(--color-article-border)",
      colorPrimary: calculatedAccentColor,
      colorText: "var(--color-page-text)",
      fontFamily: "Inter, sans-serif",
    },
  };
};

export default getAntTheme;
