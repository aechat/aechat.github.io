import React, {useEffect, useState} from "react";

import {
  AnimationRounded,
  Apple,
  ArchitectureRounded,
  AssistantRounded,
  BlockRounded,
  BurstModeRounded,
  BusinessCenterRounded,
  CarRepairRounded,
  CloseRounded,
  ContentCutRounded,
  DesktopWindowsRounded,
  DevicesOtherRounded,
  DomainRounded,
  FormatListBulletedRounded,
  ForumRounded,
  GradientRounded,
  HandymanRounded,
  ImageRounded,
  MmsRounded,
  MovieFilterRounded,
  MovieRounded,
  MusicNoteRounded,
  PermMediaRounded,
  ScienceRounded,
  SmartToyRounded,
  SpellcheckRounded,
  SportsEsportsRounded,
  SubtitlesRounded,
  TextureRounded,
  VideoSettingsRounded,
  ViewInArRounded,
  VolumeUpRounded,
  WebRounded,
  WhatshotRounded,
  WorkRounded,
} from "@mui/icons-material";

import {Divider, Modal} from "antd";

import {Helmet} from "react-helmet-async";

import Addition from "../components/content/Addition";

import Footer from "../components/layout/Footer";

import Header from "../components/layout/Header";

import PageTransition from "../components/layout/PageTransition";

import modalStyles from "../components/modals/Modal.module.scss";

import {LinkCard} from "../components/ui/LinkCards";

import {usePageLoad} from "../hooks/usePageLoad";

import {useRipple} from "../hooks/useRipple";

import {getPlatformInfo} from "../utilities/browserDetection";

import {triggerHaptic} from "../utilities/haptics";

import {AeIcon, PrIcon, PsIcon} from "./FaqIcon";

const Links = () => {
  usePageLoad();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const ripple = useRipple<HTMLButtonElement>({haptic: false});

  const openModal = () => {
    triggerHaptic("soft");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    triggerHaptic("soft");
    setIsModalOpen(false);
  };

  useEffect(() => {
    const cornerClasses = [
      "links-corner-tl",
      "links-corner-tr",
      "links-corner-bl",
      "links-corner-br",
    ] as const;

    const hoverGrowthPx = 6;

    const activeGrowthPx = 3;

    const clearCornerClasses = (element: HTMLElement) => {
      for (const cornerClass of cornerClasses) {
        element.classList.remove(cornerClass);
      }
    };

    const getScaleValue = (dimension: number, growthPx: number) => {
      const safeDimension = Math.max(dimension, 1);

      return (safeDimension + growthPx) / safeDimension;
    };

    const applyScaleVariables = (element: HTMLElement) => {
      const width = element.offsetWidth;

      const height = element.offsetHeight;

      const baseDimension = Math.max(width, height);

      const hoverScale = getScaleValue(baseDimension, hoverGrowthPx);

      const activeScale = getScaleValue(baseDimension, activeGrowthPx);

      element.style.setProperty("--links-hover-scale-x", hoverScale.toFixed(6));
      element.style.setProperty("--links-hover-scale-y", hoverScale.toFixed(6));
      element.style.setProperty("--links-active-scale-x", activeScale.toFixed(6));
      element.style.setProperty("--links-active-scale-y", activeScale.toFixed(6));
    };

    const findLeftMost = (elements: HTMLElement[]) => {
      let leftMost = elements[0];

      for (const element of elements) {
        if (element.offsetLeft < leftMost.offsetLeft) {
          leftMost = element;
        }
      }

      return leftMost;
    };

    const findRightMost = (elements: HTMLElement[]) => {
      let rightMost = elements[0];

      for (const element of elements) {
        if (element.offsetLeft > rightMost.offsetLeft) {
          rightMost = element;
        }
      }

      return rightMost;
    };

    const applyCornersForGrid = (grid: HTMLElement) => {
      const items = [...grid.querySelectorAll<HTMLElement>(".links-grid-item")];

      if (items.length === 0) {
        return;
      }

      for (const item of items) {
        clearCornerClasses(item);
        applyScaleVariables(item);
      }

      const topValues = items.map((item) => item.offsetTop);

      const minTop = Math.min(...topValues);

      const maxTop = Math.max(...topValues);

      const topRow = items.filter((item) => item.offsetTop === minTop);

      const bottomRow = items.filter((item) => item.offsetTop === maxTop);

      const topLeft = findLeftMost(topRow);

      const topRight = findRightMost(topRow);

      const bottomLeft = findLeftMost(bottomRow);

      const bottomRight = findRightMost(bottomRow);

      topLeft.classList.add("links-corner-tl");
      topRight.classList.add("links-corner-tr");
      bottomLeft.classList.add("links-corner-bl");
      bottomRight.classList.add("links-corner-br");
    };

    const updateAllGridCorners = () => {
      const grids = document.querySelectorAll<HTMLElement>(".links-grid");

      for (const grid of grids) {
        applyCornersForGrid(grid);
      }
    };

    let rafId: number | undefined;

    const scheduleUpdate = () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        rafId = undefined;
        updateAllGridCorners();
      });
    };

    scheduleUpdate();
    window.addEventListener("resize", scheduleUpdate);

    const resizeObserver =
      "ResizeObserver" in globalThis ? new ResizeObserver(scheduleUpdate) : undefined;

    if (resizeObserver) {
      const grids = document.querySelectorAll<HTMLElement>(".links-grid");

      for (const grid of grids) {
        resizeObserver.observe(grid);
      }
    }

    return () => {
      if (rafId !== undefined) {
        cancelAnimationFrame(rafId);
      }

      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver?.disconnect();
    };
  }, []);

  return (
    <div className="page">
      <Helmet>
        <title>links@aechat</title>
        <link
          href="/icons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
        <meta
          content="Коллекция полезных ссылок, FAQ и ресурсов для сообщества AEChat"
          name="description"
        />
        <meta
          content="links@aechat"
          itemProp="name"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          itemProp="image"
        />
        <meta
          content="aechat, aefaq, prfaq, psfaq, after effects, premiere pro, photoshop, telegram, чат, аефак, прфак, псфак, ссылки, плагины, шаблоны, утилиты, faq, ae, pr, ps, design, motion design, видеомонтаж"
          name="keywords"
        />
        <meta
          content="website"
          property="og:type"
        />
        <meta
          content="https://aechat.ru/"
          property="og:url"
        />
        <meta
          content="links@aechat"
          property="og:title"
        />
        <meta
          content="Коллекция полезных ссылок, FAQ и ресурсов для сообщества AEChat"
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
          content="links@aechat"
          name="twitter:title"
        />
        <meta
          content="Коллекция полезных ссылок, FAQ и ресурсов для сообщества AEChat"
          name="twitter:description"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          name="twitter:image"
        />
      </Helmet>
      <Header title="links" />
      <PageTransition className="main">
        <div
          className="logo-container"
          style={{display: "none"}}
        >
          <h1 className="logo-title">links@aechat</h1>
          <p className="logo-slogan">Собрали полезные ссылки для вас</p>
        </div>
        <div className="links">
          <Divider>Ответы на частые вопросы</Divider>
          <div className="links-grid">
            <LinkCard
              description="Преодолеваем трудности при работе с Adobe After Effects"
              href="/aefaq"
              icon={<AeIcon />}
              name="aefaq"
              variant="internal"
            />{" "}
            <LinkCard
              description="Поясняем за монтаж и нюансы в Adobe Premiere"
              href="/prfaq"
              icon={<PrIcon />}
              name="prfaq"
              variant="internal"
            />{" "}
            <LinkCard
              description="Базарим за обработку изображений в Adobe Photoshop"
              href="/psfaq"
              icon={<PsIcon />}
              name="psfaq"
              variant="internal"
            />
          </div>
          <Divider>Каналы в Telegram</Divider>
          <Addition type="info">
            {(() => {
              const {isAndroid, isIOS, isMacOS} = getPlatformInfo();

              if (isIOS) {
                return (
                  <>
                    Для скачивания файлов из каналов ниже рекомендуется использовать
                    официальное приложение <mark className="app">Telegram</mark> вместо
                    веб-версии. Его можно установить через{" "}
                    <a
                      href="https://telegram.org/dl/ios"
                      rel="noreferrer"
                      target="_blank"
                    >
                      App Store
                    </a>
                    .
                  </>
                );
              }

              if (isAndroid) {
                return (
                  <>
                    Для скачивания файлов из каналов ниже рекомендуется использовать
                    официальное приложение <mark className="app">Telegram</mark> вместо
                    веб-версии. Его можно установить по{" "}
                    <a
                      href="https://telegram.org/android"
                      rel="noreferrer"
                      target="_blank"
                    >
                      этой
                    </a>{" "}
                    ссылке.
                  </>
                );
              }

              if (isMacOS) {
                return (
                  <>
                    Для скачивания файлов из каналов ниже рекомендуется использовать
                    десктопную версию <mark className="app">Telegram</mark> вместо
                    веб-версии. Её можно скачать по{" "}
                    <a
                      href="https://macos.telegram.org/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      этой
                    </a>{" "}
                    ссылке.
                  </>
                );
              }

              return (
                <>
                  Для скачивания файлов из каналов ниже рекомендуется использовать
                  десктопную версию <mark className="app">Telegram</mark> вместо
                  веб-версии. Её можно скачать по{" "}
                  <a
                    href="https://desktop.telegram.org/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    этой
                  </a>{" "}
                  ссылке.
                </>
              );
            })()}
          </Addition>
          <div className="links-grid">
            <LinkCard
              description="Шаблоны и плагины для Adobe After Effects со всего интернета"
              href="https://t.me/s/aetemp"
              icon={<PermMediaRounded />}
              name="AETemp"
            />
            <LinkCard
              description="Шаблоны и плагины для Adobe Premiere со всего интернета"
              href="https://t.me/s/premtemp"
              icon={<MovieFilterRounded />}
              name="PremTemp"
            />
            <LinkCard
              description="Шаблоны для Adobe Photoshop, Adobe Illustrator и Figma"
              href="https://t.me/s/designworld"
              icon={<MmsRounded />}
              name="Design World"
            />
            <LinkCard
              description="программы для творчества на windows"
              href="https://t.me/+Qd9xu7A4TeIwNzY6"
              icon={<HandymanRounded />}
              name="склад стройматериалов"
            />
            <LinkCard
              description="невошедший в стройматериалы контент"
              href="https://t.me/+gSmpjWyhd5w3ZGFi"
              icon={<CarRepairRounded />}
              name="купить запчасти на форд фокус"
            />
            <LinkCard
              description="как склад стройматериалов, но для macOS"
              href="https://t.me/+ZqiaMfQRFgM4YmEy"
              icon={<Apple />}
              name="Яблоневый сад"
            />
          </div>
          <Divider>Сервисы и утилиты</Divider>
          <div className="links-grid">
            <LinkCard
              description="Сервис для покупки шаблонов с Envato Element и других платформ"
              href="https://histock.ru/?ref=509060394"
              icon={<SmartToyRounded />}
              name="HiStock"
            />
            <LinkCard
              description="Онлайн-конвертер медиафайлов в GIF"
              href="https://ezgif.com/"
              icon={<BurstModeRounded />}
              name="Ezgif"
            />
            <LinkCard
              description="Просмотрщик векторных анимаций в формате Lottie и JSON"
              href="https://lottiefiles.com/preview"
              icon={<AnimationRounded />}
              name="LottieFiles Preview"
            />
            <LinkCard
              description="Просмотрщик и конвертер изображений для Windows"
              href="https://www.faststone.org/FSIVDownload.htm"
              icon={<ImageRounded />}
              name="FastStone Image Viewer"
            />
            <LinkCard
              description="Конвертер медиафайлов в различные форматы"
              href="https://www.shutterencoder.com/"
              icon={<VideoSettingsRounded />}
              name="Shutter Encoder"
            />
            <LinkCard
              description="Утилита для работы с видеоконтейнерами MKV и WEBM"
              href="https://mkvtoolnix.download/downloads.html"
              icon={<VideoSettingsRounded />}
              name="MKVToolNix"
            />
            <LinkCard
              description="Онлайн-версия MediaInfo для просмотра метаданных файлов"
              href="https://mediaarea.net/MediaInfoOnline"
              icon={<FormatListBulletedRounded />}
              name="MediaInfo Online"
            />
            <LinkCard
              description="Загрузчик медиафайлов с поддержкой очередей и конвертации файлов"
              href="https://h264.space/programs/alchemist"
              icon={<ScienceRounded />}
              name="Alchemist"
            />
            <LinkCard
              description="Утилита для разделения аудиофайла на несколько дорожек"
              href="https://www.stemroller.com/"
              icon={<MusicNoteRounded />}
              name="StemRoller"
            />
            <LinkCard
              description="Утилита для быстрой подрезки видео и аудио"
              href="https://github.com/mifi/lossless-cut"
              icon={<ContentCutRounded />}
              name="LossLessCut"
            />
            <LinkCard
              description="Утилита для редактирования и генерации субтитров"
              href="https://github.com/SubtitleEdit/subtitleedit/releases"
              icon={<SubtitlesRounded />}
              name="Subtitle Edit"
            />
          </div>
          <Divider>Чаты в Telegram</Divider>
          <Addition type="warning">
            Перед вступлением в какой-либо чат — прочитайте его правила, чтобы избежать
            недоразумений или внезапных блокировок и ограничений. Обычно правила чатов
            находятся в закреплённом сообщении или в описании чата.
          </Addition>
          <div className="links-grid">
            <LinkCard
              description="Сообщество для обсуждения работы в Adobe After Effects и Adobe Premiere"
              href="https://t.me/joinchat/F1DdXtG9LephYWUy"
              icon={<ForumRounded />}
              name="AEChat"
            />
            <LinkCard
              description="Сообщество для обсуждения дизайна, работы в Adobe Photoshop, Adobe Illustrator и Figma"
              href="https://t.me/+3LF_B_VK-Nw4YzYy"
              icon={<ForumRounded />}
              name="DWChat"
            />
            <LinkCard
              description="Сообщество для обсуждения компьютерных технологий и проблем"
              href="https://t.me/technical_chat"
              icon={<DevicesOtherRounded />}
              name="Tech Support"
            />
            <LinkCard
              description="Сообщество для обсуждения компьютерного железа в тяжелых задачах"
              href="https://t.me/HARD_TALK"
              icon={<DesktopWindowsRounded />}
              name="HARD_TALK"
            />
            <LinkCard
              description="Сообщество для обсуждения монтажа любыми инструментами"
              href="https://t.me/ru_montage"
              icon={<MovieRounded />}
              name="ru_montage"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в DaVinci Resolve"
              href="https://t.me/DaVinci_Resolve_ru"
              icon={<MovieRounded />}
              name="DaVinci Resolve RU"
            />
            <LinkCard
              description="Сообщество от колориста Евгения Ивакина"
              href="https://t.me/montirovka_chat"
              icon={<MovieRounded />}
              name="Монтировка"
            />
            <LinkCard
              description="Сообщество от @TimesaverVFX"
              href="https://t.me/timesaverchat"
              icon={<MovieRounded />}
              name="Чат Таймсейвера"
            />
            <LinkCard
              description="Сообщество для обсуждения цветокоррекции в видео"
              href="https://t.me/ExitLight_Chat"
              icon={<GradientRounded />}
              name="ExitLight Community Chat"
            />
            <LinkCard
              description="Сообщество для поиска шрифта по изображению"
              href="https://t.me/whatthefontt"
              icon={<SpellcheckRounded />}
              name="Что за шрифт?"
            />
            <LinkCard
              description="Сообщество для обсуждения саунд-дизайна, музыки и звука в целом"
              href="https://t.me/sound_tut"
              icon={<VolumeUpRounded />}
              name="Sound Chat"
            />
            <LinkCard
              description="Сообщество для публикации вакансий и обсуждения рабочей жизни"
              href="https://t.me/s/UpWorkTut"
              icon={<BusinessCenterRounded />}
              name="Рабочая курилка"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в Blender"
              href="https://t.me/blender3dchat"
              icon={<ViewInArRounded />}
              name="Blender 3D Chat"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в Blender в формате «вопрос-ответ»"
              href="https://t.me/blender_ru"
              icon={<ViewInArRounded />}
              name="Blender_ru: вопрос-ответ"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в Maxon Cinema 4D"
              href="https://t.me/cinema4dchat"
              icon={<AnimationRounded />}
              name="Cinema 4D Chat"
            />
            <LinkCard
              description="Сообщество для обсуждения текстурирования в Substance"
              href="https://t.me/+Utwk54hiRyjGorFJ"
              icon={<TextureRounded />}
              name="Substance Chat"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в Autodesk 3DS Max"
              href="https://t.me/ohmy3dsmax"
              icon={<DomainRounded />}
              name="3DS Max"
            />
            <LinkCard
              description="Ещё одно сообщество для обсуждения работы в Autodesk 3DS Max"
              href="https://t.me/chat3dsmax"
              icon={<DomainRounded />}
              name="3DSMax (Визуализаторы)"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в Unity в формате «вопрос-ответ»"
              href="https://t.me/unity3d_ru"
              icon={<SportsEsportsRounded />}
              name="Unity Engine: вопрос - ответ"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в игровом движке Unreal Engine"
              href="https://t.me/ue_chat"
              icon={<SportsEsportsRounded />}
              name="Unreal Engine Chat"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в SideFX Houdini"
              href="https://t.me/houdinitut"
              icon={<WhatshotRounded />}
              name="Houdini Chat"
            />
            <LinkCard
              description="Сообщество для обсуждения о нейросетях"
              href="https://t.me/stable_dif"
              icon={<AssistantRounded />}
              name="StableDif"
            />
            <LinkCard
              description="Ещё одно сообщество для обсуждения о нейросетях"
              href="https://t.me/neuralnetworkstut"
              icon={<AssistantRounded />}
              name="Neural Networks Chat"
            />
            <LinkCard
              description="Сообщество для обсуждения фронтенд-разработки сайтов"
              href="https://t.me/friendlyfrontendchat"
              icon={<WebRounded />}
              name="Friendly Frontend Chat"
            />
            <LinkCard
              description="Сообщество для обсуждения работы в Figma"
              href="https://t.me/figmachat"
              icon={<ArchitectureRounded />}
              name="Фигма-чат"
            />
          </div>
          <Divider>Вакансии и работа</Divider>
          <Addition type="danger">
            Пожалуйста, будьте внимательны при выполнении заказов и остерегайтесь
            мошенников на фрилансе!{" "}
            <button
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                cursor: "pointer",
                font: "inherit",
                fontWeight: "700",
                padding: "0",
                textDecoration: "underline",
              }}
              type="button"
              onClick={openModal}
              onMouseDown={ripple.onMouseDown}
            >
              Подробнее...
            </button>
          </Addition>
          <Modal
            centered
            closeIcon={false}
            footer={<></>}
            open={isModalOpen}
            width={1000}
            onCancel={closeModal}
          >
            <div className={modalStyles["modal"]}>
              <div className={modalStyles["modal-header"]}>
                <div className={modalStyles["modal-header-title"]}>
                  Остерегайтесь мошенников!
                </div>
                <button
                  className={modalStyles["modal-header-button"]}
                  onClick={closeModal}
                  onMouseDown={ripple.onMouseDown}
                >
                  <CloseRounded />
                </button>
              </div>
              <div className={modalStyles["modal-content"]}>
                <p>
                  Пожалуйста, будьте внимательны при выполнении заказов на фрилансе — вы
                  можете столкнуться с недобросовестным заказчиком или попасть в ловко
                  организованную схему мошенничества.
                </p>
                <Addition type="danger">
                  <ul>
                    <li>
                      Если заказчик предлагает оплатить гарантийный взнос, перевести
                      деньги на «безопасный счёт», оформить карту или перейти по
                      подозрительной ссылке —{" "}
                      <b>
                        <u>немедленно завершите диалог</u>
                      </b>{" "}
                      и{" "}
                      <b>
                        <u>никому не сообщайте коды из SMS</u>
                      </b>
                      . Вы не обязаны ничего платить для получения заказа или
                      вознаграждения.
                    </li>
                    <li>
                      Будьте осторожны с сайтами, которые представляются площадками с
                      «безопасным счётом» и заявляют, будто получили сертификат от{" "}
                      <mark>Webmoney</mark> или других старых платёжных сервисов —{" "}
                      <b>
                        <u>сразу покиньте сайт</u>
                      </b>
                      . Обычно там просят ввести данные карты или внести «взнос для
                      получения средств», которые вы, конечно, не получите.
                    </li>
                    <li>
                      <b>
                        <u>
                          Никогда не переходите по ссылкам для «получения оплаты» через
                          универсальные формы.
                        </u>
                      </b>{" "}
                      Это почти всегда мошенничество: злоумышленники попросят указать
                      номер, срок действия и CVC карты, чтобы похитить деньги.
                    </li>
                    <li>
                      Если вы работаете на бирже вроде{" "}
                      <a
                        href="https://kwork.ru/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Kwork
                      </a>
                      ,{" "}
                      <a
                        href="https://www.fiverr.com/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        Fiverr
                      </a>
                      ,{" "}
                      <a
                        href="https://www.fl.ru/"
                        rel="noreferrer"
                        target="_blank"
                      >
                        FL
                      </a>{" "}
                      и других —{" "}
                      <b>
                        <u>не переходите в мессенджеры</u>
                      </b>
                      . Площадки блокируют участников, уходящих в{" "}
                      <mark className="app">Telegram</mark>,{" "}
                      <mark className="app">Whatsapp</mark> и прочие соцсети, а при
                      общении вне биржи никто не гарантирует защиту от обмана.
                    </li>
                    <li>
                      <b>
                        <u>Проверяйте профиль</u>
                      </b>{" "}
                      заказчика или исполнителя, особенно если вы общаетесь вне биржи.
                      Насторожитесь, если в аккаунте <mark className="app">Telegram</mark>{" "}
                      или другом мессенджере несколько одинаковых фото, загруженных в один
                      день — это частый признак нового или взломанного профиля, созданного
                      для выманивания денег.
                    </li>
                  </ul>
                </Addition>
                <Addition type="warning">
                  Если вы передали данные карты или перевели деньги мошеннику — срочно
                  обратитесь в банк и сообщите о факте мошенничества. Немедленно
                  заблокируйте карту и перевыпустите её в банковском приложении. Чем
                  быстрее вы свяжетесь с банком — тем выше шанс вернуть средства.
                </Addition>
              </div>
            </div>
          </Modal>
          <div className="links-grid">
            <LinkCard
              href="https://t.me/ru_montage_pins"
              icon={<WorkRounded />}
              name="ru_montage_pins"
            />
            <LinkCard
              href="https://t.me/prodjob"
              icon={<WorkRounded />}
              name="Работа видеопродакшн"
            />
            <LinkCard
              href="https://t.me/kinopeople"
              icon={<WorkRounded />}
              name="Работники Кино Pro"
            />
            <LinkCard
              href="https://t.me/cgfreelance"
              icon={<WorkRounded />}
              name="CG Freelance"
            />
            <LinkCard
              href="https://t.me/+R_KxUQG5hYo5ZjAy"
              icon={<WorkRounded />}
              name="МИР КРЕАТОРОВ"
            />
            <LinkCard
              href="https://t.me/video_academy"
              icon={<WorkRounded />}
              name="VA Видео для бизнеса"
            />
            <LinkCard
              href="https://t.me/platform_film"
              icon={<WorkRounded />}
              name="ПЛОЩАДКА"
            />
            <LinkCard
              href="https://t.me/tochnop"
              icon={<WorkRounded />}
              name="Точно продюсер"
            />
            <LinkCard
              href="https://t.me/vdhl_good"
              icon={<WorkRounded />}
              name="ВДХЛ - Вакансии для хороших людей"
            />
            <LinkCard
              href="https://t.me/jetlagchat"
              icon={<WorkRounded />}
              name="JETLAG CHAT"
            />
            <LinkCard
              href="https://t.me/KAADchanel"
              icon={<WorkRounded />}
              name="КААД"
            />
            <LinkCard
              href="https://t.me/+3vHv2p2bRdRlOTMy"
              icon={<WorkRounded />}
              name="Design Career"
            />
            <LinkCard
              href="https://t.me/s/motionhunter"
              icon={<WorkRounded />}
              name="Motion designer hunter"
            />
            <LinkCard
              href="https://t.me/s/job_2dfa"
              icon={<WorkRounded />}
              name="Вакансии для аниматоров"
            />
            <LinkCard
              href="https://t.me/s/fordesigner"
              icon={<WorkRounded />}
              name="Jobs for Designers"
            />
            <LinkCard
              href="https://t.me/s/CGWorkHub"
              icon={<WorkRounded />}
              name="CGWorkHub"
            />
            <LinkCard
              href="https://t.me/s/jobforjunior"
              icon={<WorkRounded />}
              name="Job for Junior"
            />
            <LinkCard
              href="https://t.me/s/dprofilejob"
              icon={<WorkRounded />}
              name="Dprofile.Работа"
            />
            <LinkCard
              href="https://t.me/s/artdesignjob"
              icon={<WorkRounded />}
              name="HSE CHANCE"
            />
            <LinkCard
              href="https://t.me/s/freelancetaverna"
              icon={<WorkRounded />}
              name="Фриланс Таверна"
            />
            <LinkCard
              href="https://t.me/vakansii_reelsmaker"
              icon={<WorkRounded />}
              name="Таверна монтажёров и рилсмейкеров"
            />
            <LinkCard
              href="https://t.me/s/workindesign"
              icon={<WorkRounded />}
              name="Work for Designers"
            />
            <LinkCard
              href="https://t.me/s/designer_ru"
              icon={<WorkRounded />}
              name="ИЩУ_ДИЗАЙНЕРА"
            />
          </div>
          <Divider>Чёрные списки</Divider>
          <div className="links-grid">
            <LinkCard
              href="https://t.me/cgblacklist"
              icon={<BlockRounded />}
              name="CG Blacklist"
            />
            <LinkCard
              href="https://t.me/kinostop"
              icon={<BlockRounded />}
              name="Чёрный список кино индустрии"
            />
            <LinkCard
              href="https://t.me/AEnedozakaz"
              icon={<BlockRounded />}
              name="AEНедозаказчики"
            />
            <LinkCard
              href="https://t.me/Brickspacer_blacklist"
              icon={<BlockRounded />}
              name="Brickspacer Blacklist"
            />
            <LinkCard
              href="https://t.me/moshenniki_frilans"
              icon={<BlockRounded />}
              name="Мошенники в фрилансе"
            />
          </div>
          <Footer
            initialYear={2024}
            title="aechat"
          />
        </div>
      </PageTransition>
    </div>
  );
};

export default Links;
