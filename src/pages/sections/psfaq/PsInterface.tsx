import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PsInterface: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="disable-home-screen"
        tag="home screen, стартовое окно, последние проекты, запуск программы"
        title="Как отключить стартовое окно с последними открытыми проектами при запуске?"
      >
        <p>
          Если вас раздражает окно с недавними открытыми проектами или оно у вас грузится
          достаточно долго, его можно отключить в настройках. Для этого перейдите в
          настройки <mark className="select">«Edit» → «Preferences» → «General»</mark> и
          снимите чекбокс напротив параметра{" "}
          <mark className="select">«Auto show the Home Screen»</mark>, а затем нажмите на{" "}
          <mark className="select">«OK»</mark> в правой части окна.
        </p>
        <ArticleMedia
          caption="Отключаем отображение домашнего экрана при запуске программы"
          src="legacy/photoshop/disable_show_home_screen.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="change-theme-color"
        tag="тема интерфейса, светлый интерфейс, тёмный интерфейс, ui brightness"
        title="Как сделать фон программы светлее или темнее?"
      >
        <p>
          В <mark className="app">Adobe Photoshop</mark> с давних пор доступна возможность
          сделать фон всего интерфейса более тёмным или светлым. Для изменения цветовой
          схемы перейдите в настройки{" "}
          <mark className="select">«Edit» → «Preferences» → «Interface»</mark> и в{" "}
          <mark className="select">«Color Theme»</mark> выберите нужное вам значение.
          После выбора новой цветовой схемы не забудьте нажать на{" "}
          <mark className="select">«OK»</mark>.
        </p>
        <ArticleMedia
          caption="Preferences"
          src="legacy/photoshop/change_color_theme.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="custom-splash-screen"
        tag="заставка, изображение запуска, resource hacker, dll, startup image, splash screen customization"
        title="Как изменить картинку во время запуска программы?"
      >
        <Addition type="danger">
          Действия с заменой файлов программы вы делаете на свой страх и риск! После
          обновления программы ваша картинка перезапишется на исходную. Инструкция
          действительна только для устройств на Windows.
        </Addition>
        <p>
          При запуске <mark className="app">Adobe Photoshop</mark> вы часто видите
          какую-либо картинку, задуманную <mark className="company">Adobe</mark>, и,
          наверное, задумывались, что неплохо бы заменить её на свою. Да, такое можно
          сделать с помощью правок <mark className="file">DAT</mark>-файлов, расположенных
          в папке <mark className="path">Resources</mark> в директории с установленной
          программой. Для этого нам пригодится утилита{" "}
          <mark className="app">Photoshop Splash Screen Extractor</mark> от Pronama,
          которую можно загрузить{" "}
          <a
            download
            href="files/Photoshop Splash Screen Extractor.rar"
          >
            этой
          </a>{" "}
          ссылке и распаковать её с помощью архиватора, например{" "}
          <mark className="app">WinRAR</mark>, в удобном вам месте. Также существует и{" "}
          <a href="https://psccicon.azurewebsites.net/">онлайн-версия</a> данной утилиты.
        </p>
        <Divider>Распаковываем ресурсы программы</Divider>
        <p>
          После распаковки утилиты вам нужно перейти в папку с установленным{" "}
          <mark className="app">Adobe Photoshop</mark>, обычно это{" "}
          <mark className="path">C:\Program Files\Adobe\Adobe Photoshop 20XX</mark> и
          скопировать оттуда папку <mark className="path">Resource</mark> в папку{" "}
          <mark className="path">PSCC2018Icon</mark>.
        </p>
        <ArticleMedia
          caption="Копируем папку ресурсов для извлечения"
          src="legacy/photoshop/copy_resources_to_extract.mp4"
          type="video"
        />
        <p>
          Затем перейдите внутрь <mark className="path">PSCC2018Icon</mark> и откройте
          скрипт <mark className="file">EXTRACT.CMD</mark>. Он начнёт извлечение картинок
          из этих файлов в новую папку <mark className="path">Work</mark>, в которой будут
          храниться изображения маленького и большого разрешения. После распаковки
          ресурсов нужно перейти в <mark className="path">Work</mark>, а в ней — в
          подпапку <mark className="path">Low</mark> и найти изображение{" "}
          <mark className="image">SPLASHBACKGROUND_S0.PNG</mark>. Отредактировать этот
          файл вы можете в любом редакторе изображений, хоть в том же{" "}
          <mark className="app">Adobe Photoshop</mark>. При сохранении нужно просто не
          менять размер изображения и сохранить его также в{" "}
          <mark className="image">PNG</mark>.
        </p>
        <ArticleMedia
          caption="Извлекаем ресурсы Photoshop"
          src="legacy/photoshop/extract_resources.mp4"
          type="video"
        />
        <p>
          В качестве примера я заменю стандартное изображение на изображение автомобиля
          Ford Focus и сохраню его в <mark className="image">PNG</mark> в той же
          директории, куда были распакованы картинки интерфейса{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ArticleMedia
          caption="Пример модификации изображения при загрузке Adobe Photoshop"
          src="legacy/photoshop/custom_splash_example.png"
          type="image"
        />
        <Divider>Запаковываем ресурсы и заменяем их</Divider>
        <p>
          После редактирования и замены стартового изображения в{" "}
          <mark className="path">Work\Low</mark> их нужно обратно запаковать с помощью
          скрипта <mark className="file">PACK.CMD</mark> в папке{" "}
          <mark className="path">PSCC2018Icon</mark> в директории с утилитой. После
          упаковки папка <mark className="path">Resources</mark> вновь появится в{" "}
          <mark className="path">Work</mark>. Её нужно будет переместить с заменой в
          директорию с <mark className="app">Adobe Photoshop</mark>, обычно это{" "}
          <mark className="path">C:\Program Files\Adobe\Adobe Photoshop 20XX</mark>.
        </p>
        <ArticleMedia
          caption="Замена файлов и открытие программы с уже изменённой плашкой"
          src="legacy/photoshop/pack_resource_and_start_with_custom_splash.mp4"
          type="video"
        />
        <p>
          После успешной замены файлов можно запустить программу и наслаждаться своим
          шедевром, который вы сотворили.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PsInterface;
