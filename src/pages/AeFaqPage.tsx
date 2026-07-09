import React from "react";

import {
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

import AeActions from "./sections/aefaq/AeActions";

import AeErrors from "./sections/aefaq/AeErrors";

import AeExport from "./sections/aefaq/AeExport";

import AeFromNewbies from "./sections/aefaq/AeFromNewbies";

import AeImport from "./sections/aefaq/AeImport";

import AeInstallProblems from "./sections/aefaq/AeInstallProblems";

import AeInterface from "./sections/aefaq/AeInterface";

import AePerformance from "./sections/aefaq/AePerformance";

import AeWhereFind from "./sections/aefaq/AeWhereFind";

const AeFaqPage = () => {
  const isPageLoaded = usePageLoad(true);

  useCopyToClipboard();
  useSmartCopy(isPageLoaded);

  const sections = [
    {
      component: AeWhereFind,
      icon: <TravelExploreRounded />,
      id: "where-find",
      key: "1",
      title: "Ищем полезности",
    },
    {
      component: AeInstallProblems,
      icon: <InstallDesktopRounded />,
      id: "install-problems",
      key: "2",
      title: "Проблемы с установкой",
    },
    {
      component: AeFromNewbies,
      icon: <HelpCenterOutlined />,
      id: "from-newbies",
      key: "3",
      title: "Вопросы от новичков",
    },
    {
      component: AeImport,
      icon: <InputRounded />,
      id: "import",
      key: "4",
      title: "Импорт",
    },
    {
      component: AeInterface,
      icon: <TouchAppOutlined />,
      id: "interface",
      key: "5",
      title: "Интерфейс",
    },
    {
      component: AePerformance,
      icon: <SpeedRounded />,
      id: "performance",
      key: "6",
      title: "Производительность",
    },
    {
      component: AeActions,
      icon: <PsychologyAltOutlined />,
      id: "actions",
      key: "7",
      title: "Как и чем?",
    },
    {
      component: AeErrors,
      icon: <ErrorOutlineRounded />,
      id: "errors",
      key: "8",
      title: "Ошибки и предупреждения",
    },
    {
      component: AeExport,
      icon: <VideoSettingsRounded />,
      id: "export",
      key: "9",
      title: "Рендер и экспорт",
    },
  ];

  useAnchorValidation(sections, isPageLoaded);

  return (
    <div className="page">
      <SearchProvider isPageLoaded={isPageLoaded}>
        <Helmet>
          <title>aefaq@aechat</title>
          <link
            href="/icons/aefaq.svg"
            rel="icon"
            type="image/svg+xml"
          />
          <meta
            content="Преодолеваем трудности при работе с Adobe After Effects"
            name="description"
          />
          <meta
            content="aefaq@aechat"
            itemProp="name"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            itemProp="image"
          />
          <meta
            content="aechat, aefaq, after effects, telegram, чат, аефак, ссылки, плагины, шаблоны, утилиты, faq, ae, design, motion design, видеомонтаж"
            name="keywords"
          />
          <meta
            content="website"
            property="og:type"
          />
          <meta
            content="https://aechat.ru/aefaq"
            property="og:url"
          />
          <meta
            content="aefaq@aechat"
            property="og:title"
          />
          <meta
            content="Преодолеваем трудности при работе с Adobe After Effects"
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
            content="aefaq@aechat"
            name="twitter:title"
          />
          <meta
            content="Преодолеваем трудности при работе с Adobe After Effects"
            name="twitter:description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            name="twitter:image"
          />
        </Helmet>
        <Header title="aefaq" />
        <PageTransition className="main">
          <div className="article-container-flex">
            <div className="article-container">
              <div className="article-title">
                <h1>aefaq</h1>
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
                title="aechat"
              />
            </div>
          </div>
        </PageTransition>
        <SearchInPage sections={sections} />
      </SearchProvider>
    </div>
  );
};

export default AeFaqPage;
