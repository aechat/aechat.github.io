import React from "react";

import {Tooltip} from "antd";

import {Helmet} from "react-helmet-async";

import {useLocation} from "react-router-dom";

import Addition from "../components/content/Addition";

import {ArticleMedia} from "../components/content/ArticleMedia";

import CodeSnippet from "../components/content/CodeSnippet";

import ContentFilter from "../components/content/ContentFilter";

import Footer from "../components/layout/Footer";

import Header from "../components/layout/Header";

import PageTransition from "../components/layout/PageTransition";

import {CopyButton} from "../components/ui/CopyButton";

import {useCopyToClipboard} from "../hooks/useCopyToClipboard";

import {useHashAnchorNavigation} from "../hooks/useHashAnchorNavigation";

import {usePageLoad} from "../hooks/usePageLoad";

const RegFilePage = () => {
  const {hash} = useLocation();

  usePageLoad();
  useCopyToClipboard();

  const {handleCopyAnchor} = useHashAnchorNavigation(hash);

  return (
    <div>
      <Helmet>
        <title>reg@aechat</title>
        <link
          href="/icons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
        <meta
          content="Активируем расширения в приложениях Adobe"
          name="description"
        />
        <meta
          content="reg@aechat"
          itemProp="name"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          itemProp="image"
        />
        <meta
          content="reg, регфайл, активация расширений, after effects, premiere"
          name="keywords"
        />
        <meta
          content="website"
          property="og:type"
        />
        <meta
          content="https://aechat.ru/reg"
          property="og:url"
        />
        <meta
          content="reg@aechat"
          property="og:title"
        />
        <meta
          content="Активируем расширения в приложениях Adobe"
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
          content="reg@aechat"
          name="twitter:title"
        />
        <meta
          content="Активируем расширения в приложениях Adobe"
          name="twitter:description"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          name="twitter:image"
        />
      </Helmet>
      <Header title="reg" />
      <PageTransition className="main">
        <div className="article-container-flex">
          <div className="article-container article-static-container">
            <div className="article-title">
              <h1>Активация расширений в приложениях Adobe</h1>
            </div>
            <h2
              className="article-static-title"
              id="about"
            >
              Что такое reg-файл?
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <CopyButton onClick={() => handleCopyAnchor("about")} />
              </Tooltip>
            </h2>
            <div className="article-static-content">
              <section className="article-static-section article-content">
                <p>
                  <mark className="file">Reg-файл</mark> — файл со значениями для реестра
                  Windows, позволяющий изменять параметры системы и некоторых программ. В
                  контексте <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Premiere Pro</mark> под ним обычно
                  подразумевается файл для включения debug-режима, необходимого для
                  запуска сторонних расширений формата <mark className="file">ZXP</mark>.
                  На macOS аналогичная настройка выполняется через терминал.
                </p>
                <p>
                  Для корректной работы сторонних расширений формата{" "}
                  <mark className="file">ZXP</mark> необходимо не только поместить их в
                  папку <mark className="path">../CEP/extensions</mark>, но и включить
                  debug-режим. Без него установленные расширения могут не запускаться из
                  меню <mark className="select">«Window» → «Extensions»</mark>.
                </p>
              </section>
            </div>
            <h2
              className="article-static-title"
              id="activate"
            >
              Как активировать расширения в Adobe After Effects и Adobe Premiere?
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <CopyButton onClick={() => handleCopyAnchor("tone")} />
              </Tooltip>
            </h2>
            <div className="article-static-content">
              <section className="article-static-section article-content">
                <ContentFilter
                  macContent={
                    <>
                      <ul>
                        <li>
                          Откройте <mark className="app">Терминал</mark> любым удобным вам
                          способом.
                        </li>
                        <li>
                          <p>
                            Введите в терминал команды ниже и нажмите на{" "}
                            <mark className="key">Enter</mark>.
                          </p>
                          <CodeSnippet>
                            defaults write com.adobe.CSXS.5 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.6 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.7 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.8 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.9 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.10 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.11 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.12 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.13 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.14 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.15 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.16 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.17 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.18 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.19 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.20 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.21 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.22 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.23 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.24 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.25 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.26 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.27 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.28 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.29 PlayerDebugMode 1
                            <br />
                            defaults write com.adobe.CSXS.30 PlayerDebugMode 1
                          </CodeSnippet>
                          <Addition type="info">
                            Эти команды нужно ввести только один раз — при последующих
                            установках дополнительных расширений повторять их не
                            требуется.
                          </Addition>
                        </li>
                        <li>
                          Перезапустите <mark className="app">Adobe After Effects</mark>{" "}
                          или <mark className="app">Adobe Premiere</mark> и проверьте
                          работоспособность расширения, открыв его в{" "}
                          <mark className="select">«Window» → «Extensions»</mark>.
                        </li>
                      </ul>
                    </>
                  }
                  windowsContent={
                    <>
                      <ul>
                        <li>
                          <p>
                            Скачайте файл реестра с ключами для активации debug-режима.
                          </p>
                          <div className="flexible-links">
                            <a
                              download
                              href="files/Enable Extensions Adobe.reg"
                            >
                              Enable Extensions Adobe.reg
                            </a>
                          </div>
                        </li>
                        <li>
                          <p>
                            Откройте скачанный файл, а затем подтвердите слияние файла
                            реестра с вашим реестром, нажав на{" "}
                            <mark className="select">«Да»</mark>.
                          </p>
                          <ArticleMedia
                            caption="Диалог подтверждения слияния файла реестра"
                            src="shared/system/merge-reg-file.png"
                            type="image"
                          />
                        </li>
                        <li>
                          Перезапустите <mark className="app">Adobe After Effects</mark>{" "}
                          или <mark className="app">Adobe Premiere</mark> и проверьте
                          работоспособность расширения, открыв его в{" "}
                          <mark className="select">«Window» → «Extensions»</mark>.
                        </li>
                      </ul>
                    </>
                  }
                />
              </section>
            </div>
            <Footer
              initialYear={2023}
              title="aechat"
            />
          </div>
        </div>
      </PageTransition>
    </div>
  );
};

export default RegFilePage;
