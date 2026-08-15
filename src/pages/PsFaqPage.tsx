import React, {useMemo} from "react";

import {
  BrokenImageOutlined,
  ErrorOutlineRounded,
  HelpCenterOutlined,
  InputRounded,
  InstallDesktopRounded,
  PsychologyAltOutlined,
  SpeedRounded,
  TouchAppOutlined,
  TravelExploreRounded,
  VideoSettingsRounded,
} from "@mui/icons-material";

import {Divider} from "antd";

import {Helmet} from "react-helmet-async";

import {
  SearchInPage,
  SearchProvider,
} from "../components/features/searchEngine/SearchEngine";

import Footer from "../components/layout/Footer";

import Header from "../components/layout/Header";

import PageTransition from "../components/layout/PageTransition";

import {useAnchorValidation} from "../hooks/useAnchorValidation";

import {useCopyToClipboard} from "../hooks/useCopyToClipboard";

import {usePageLoad} from "../hooks/usePageLoad";

import {useSmartCopy} from "../hooks/useSmartCopy";

import PsActions from "./sections/psfaq/PsActions";

import PsErrors from "./sections/psfaq/PsErrors";

import PsExport from "./sections/psfaq/PsExport";

import PsExportProblems from "./sections/psfaq/PsExportProblems";

import PsFromNewbies from "./sections/psfaq/PsFromNewbies";

import PsImport from "./sections/psfaq/PsImport";

import PsInstallProblems from "./sections/psfaq/PsInstallProblems";

import PsInterface from "./sections/psfaq/PsInterface";

import PsPerformance from "./sections/psfaq/PsPerformance";

import PsWhereFind from "./sections/psfaq/PsWhereFind";

const PsFaqPage = () => {
  const isPageLoaded = usePageLoad(true);

  useCopyToClipboard();
  useSmartCopy(isPageLoaded);

  const sections = useMemo(
    () => [
      {
        component: PsWhereFind,
        icon: <TravelExploreRounded />,
        id: "where-find",
        key: "1",
        title: "Ищем полезности",
      },
      {
        component: PsInstallProblems,
        icon: <InstallDesktopRounded />,
        id: "install-problems",
        key: "2",
        title: "Проблемы с установкой",
      },
      {
        component: PsFromNewbies,
        icon: <HelpCenterOutlined />,
        id: "from-newbies",
        key: "3",
        title: "Вопросы от новичков",
      },
      {
        component: PsImport,
        icon: <InputRounded />,
        id: "import",
        key: "4",
        title: "Импорт",
      },
      {
        component: PsInterface,
        icon: <TouchAppOutlined />,
        id: "interface",
        key: "5",
        title: "Интерфейс",
      },
      {
        component: PsPerformance,
        icon: <SpeedRounded />,
        id: "performance",
        key: "6",
        title: "Производительность",
      },
      {
        component: PsActions,
        icon: <PsychologyAltOutlined />,
        id: "actions",
        key: "7",
        title: "Как и чем?",
      },
      {
        component: PsErrors,
        icon: <ErrorOutlineRounded />,
        id: "errors",
        key: "8",
        title: "Ошибки и предупреждения",
      },
      {
        component: PsExport,
        icon: <VideoSettingsRounded />,
        id: "export",
        key: "9",
        title: "Рендер и экспорт",
      },
      {
        component: PsExportProblems,
        icon: <BrokenImageOutlined />,
        id: "export-problems",
        key: "10",
        title: "Проблемы при экспорте",
      },
    ],
    []
  );

  useAnchorValidation(sections, isPageLoaded);

  return (
    <div className="page">
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>psfaq@aechat</title>
          <link
            href="/icons/psfaq.svg"
            rel="icon"
            type="image/svg+xml"
          />
          <meta
            content="Базарим за обработку изображений в Adobe Photoshop"
            name="description"
          />
          <meta
            content="psfaq@aechat"
            itemProp="name"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            itemProp="image"
          />
          <meta
            content="aechat, psfaq, photoshop, telegram, чат, псфак, ссылки, плагины, шаблоны, утилиты, faq, ps, design"
            name="keywords"
          />
          <meta
            content="website"
            property="og:type"
          />
          <meta
            content="https://aechat.ru/psfaq"
            property="og:url"
          />
          <meta
            content="psfaq@aechat"
            property="og:title"
          />
          <meta
            content="Базарим за обработку изображений в Adobe Photoshop"
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
            content="psfaq@aechat"
            name="twitter:title"
          />
          <meta
            content="Базарим за обработку изображений в Adobe Photoshop"
            name="twitter:description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            name="twitter:image"
          />
        </Helmet>
        <Header title="psfaq" />
        <PageTransition className="main">
          <div className="article-container-flex">
            <div className="article-container">
              <div className="article-title">
                <h1>psfaq</h1>
              </div>
              {sections.map((section) => (
                <div
                  key={section.key}
                  id={section.id}
                >
                  <Divider
                    style={{
                      color: "var(--color-page-text)",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                    titlePlacement="right"
                  >
                    {section.title}
                  </Divider>
                  <section.component />
                </div>
              ))}
              <Footer
                initialYear={2023}
                title="aechat & dwchat"
              />
            </div>
          </div>
        </PageTransition>
        <SearchInPage sections={sections} />
      </SearchProvider>
    </div>
  );
};

export default PsFaqPage;
