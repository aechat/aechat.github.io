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

import PrActions from "./sections/prfaq/PrActions";

import PrErrors from "./sections/prfaq/PrErrors";

import PrExport from "./sections/prfaq/PrExport";

import PrExportProblems from "./sections/prfaq/PrExportProblems";

import PrFromNewbies from "./sections/prfaq/PrFromNewbies";

import PrImport from "./sections/prfaq/PrImport";

import PrInstallProblems from "./sections/prfaq/PrInstallProblems";

import PrInterface from "./sections/prfaq/PrInterface";

import PrPerformance from "./sections/prfaq/PrPerformance";

import PrWhereFind from "./sections/prfaq/PrWhereFind";

const PrFaqPage = () => {
  const isPageLoaded = usePageLoad(true);

  useCopyToClipboard();
  useSmartCopy(isPageLoaded);

  const sections = useMemo(
    () => [
      {
        component: PrWhereFind,
        icon: <TravelExploreRounded />,
        id: "where-find",
        key: "1",
        title: "Ищем полезности",
      },
      {
        component: PrInstallProblems,
        icon: <InstallDesktopRounded />,
        id: "install-problems",
        key: "2",
        title: "Проблемы с установкой",
      },
      {
        component: PrFromNewbies,
        icon: <HelpCenterOutlined />,
        id: "from-newbies",
        key: "3",
        title: "Вопросы от новичков",
      },
      {
        component: PrImport,
        icon: <InputRounded />,
        id: "import",
        key: "4",
        title: "Импорт",
      },
      {
        component: PrInterface,
        icon: <TouchAppOutlined />,
        id: "interface",
        key: "5",
        title: "Интерфейс",
      },
      {
        component: PrPerformance,
        icon: <SpeedRounded />,
        id: "performance",
        key: "6",
        title: "Производительность",
      },
      {
        component: PrActions,
        icon: <PsychologyAltOutlined />,
        id: "actions",
        key: "7",
        title: "Как и чем?",
      },
      {
        component: PrErrors,
        icon: <ErrorOutlineRounded />,
        id: "errors",
        key: "8",
        title: "Ошибки и предупреждения",
      },
      {
        component: PrExport,
        icon: <VideoSettingsRounded />,
        id: "export",
        key: "9",
        title: "Рендер и экспорт",
      },
      {
        component: PrExportProblems,
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
          <title>prfaq@aechat</title>
          <link
            href="/icons/prfaq.svg"
            rel="icon"
            type="image/svg+xml"
          />
          <meta
            content="Поясняем за монтаж и нюансы в Adobe Premiere"
            name="description"
          />
          <meta
            content="prfaq@aechat"
            itemProp="name"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            itemProp="image"
          />
          <meta
            content="aechat, prfaq, premiere pro, telegram, чат, прфак, ссылки, плагины, шаблоны, утилиты, faq, pr, design, motion design, видеомонтаж"
            name="keywords"
          />
          <meta
            content="website"
            property="og:type"
          />
          <meta
            content="https://aechat.ru/prfaq"
            property="og:url"
          />
          <meta
            content="prfaq@aechat"
            property="og:title"
          />
          <meta
            content="Поясняем за монтаж и нюансы в Adobe Premiere"
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
            content="prfaq@aechat"
            name="twitter:title"
          />
          <meta
            content="Поясняем за монтаж и нюансы в Adobe Premiere"
            name="twitter:description"
          />
          <meta
            content="https://aechat.ru/icons/aechat.png"
            name="twitter:image"
          />
        </Helmet>
        <Header title="prfaq" />
        <PageTransition className="main">
          <div className="article-container-flex">
            <div className="article-container">
              <div className="article-title">
                <h1>prfaq</h1>
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

export default PrFaqPage;
