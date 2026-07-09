import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import CodeSnippet from "../../../components/content/CodeSnippet";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

import NestedDetailsSummary from "../../../components/detailsSummary/NestedDetailsSummary";

import {getPlatformInfo} from "../../../utilities/browserDetection";

const PrInstallProblems: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="how-to-install"
        tag="как установить, куда устанавливать, установка, распаковка, инструкция, плагины, шаблоны, пресеты, скрипты, расширения, пакеты, луты, архивы, zip, rar"
        title="В архиве или под записью нет инструкции по установке. Куда что кидать?"
      >
        <p>
          Обычно большинство дополнительных материалов устанавливается одинаково — всё
          зависит от типа файла. Однако некоторые шаги могут отличаться в зависимости от
          операционной системы. В этой статье мы расскажем, как устанавливать разные типы
          файлов для <mark className="app">Adobe Premiere</mark> и использовать их в
          программе.
        </p>
        <Addition type="info">
          Сторонние плагины и расширения, будь то лицензионные или «народные», в
          большинстве случаев без проблем устанавливаются как на официальную, так и на
          «народную» версию <mark className="app">Adobe Premiere</mark>. Способы проверки
          лицензии программы и сторонних дополнений обычно не пересекаются.
        </Addition>
        <Addition type="warning">
          Прежде чем использовать шаблоны формата <mark className="file">PRPROJ</mark>,{" "}
          <mark className="file">AEP</mark>, <mark className="file">MOGRT</mark> или
          пакеты для <mark className="plugin">AtomX</mark>,{" "}
          <mark className="plugin">Motion Bro</mark> или подобных расширений, убедитесь,
          что архив с проектом или пакетом полностью распакован, а его содержимое
          находится в директории, путь к которой не содержит кириллических символов и не
          превышает 256 символов.
        </Addition>
        <Divider>Универсальные инструкции для разных типов файлов</Divider>
        <ul>
          <li>
            <p>
              Проекты формата <mark className="file">PRPROJ</mark> открываются как обычные
              проекты в <mark className="app">Adobe Premiere</mark>: двойным кликом, через{" "}
              <mark className="select">«File» → «Open Project»</mark> или сочетанием
              клавиш <mark className="key">Ctrl + O</mark>. Чтобы импортировать такой файл
              в свой проект, воспользуйтесь командой{" "}
              <mark className="select">«File» → «Import»</mark> или сочетанием{" "}
              <mark className="key">Ctrl + I</mark>.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  Прежде чем открывать проект формата <mark className="file">PRPROJ</mark>
                  , полностью распакуйте архив и открывайте проект уже из распакованной
                  папки. Так вы убережёте себя от появления ошибок, связанных с
                  отсутствием файлов, например{" "}
                  <mark className="warning">«Медиаданные в автономном режиме»</mark>.
                </li>
                <li>
                  Если попытаться открыть только файл <mark className="file">PRPROJ</mark>{" "}
                  без полной распаковки архива,{" "}
                  <mark className="app">Adobe Premiere</mark> не сможет найти все
                  необходимые для проекта файлы.
                </li>
                <li>
                  В большинстве случаев рядом с файлом шаблона есть туториал, объясняющий,
                  как им пользоваться. Он может находиться в папке{" "}
                  <mark className="path">Help</mark>,{" "}
                  <mark className="path">Tutorial</mark> или в корне архива.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <p>
              Если в архиве находится файл <mark className="file">AEP</mark>, для импорта
              таких проектов необходим установленный{" "}
              <mark className="app">Adobe After Effects</mark>. Их можно импортировать в
              свой проект через <mark className="select">«File» → «Import»</mark> или{" "}
              <mark className="key">Ctrl + I</mark>. Композиция из{" "}
              <mark className="app">Adobe After Effects</mark> в{" "}
              <mark className="app">Adobe Premiere</mark> будет работать через{" "}
              <mark className="plugin">Dynamic Link</mark>
              <sup>1</sup>.
            </p>
            <Addition type="warning">
              <ul>
                <li>
                  <sup>1</sup> Прежде чем импортировать <mark className="file">AEP</mark>,
                  убедитесь, что у вас установлены{" "}
                  <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Premiere</mark> одного года выпуска.
                  Например, <mark className="app">Adobe After Effects</mark>{" "}
                  <mark className="version">25.X (2025)</mark> и{" "}
                  <mark className="app">Adobe Premiere Pro</mark>{" "}
                  <mark className="version">24.X (2024)</mark> не смогут взаимодействовать
                  через <mark className="plugin">Dynamic Link</mark>, так как их релизные
                  циклы различаются.
                </li>
                <li>
                  Если <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Premiere</mark> установлены в рамках одного
                  релизного цикла, но всё равно не «видят» друг друга — проверьте,
                  установлены ли они в директорию по умолчанию, а не на другой диск,
                  отличный от <mark className="path">C:\</mark>.
                </li>
              </ul>
            </Addition>
            <Addition type="info">
              <ul>
                <li>
                  Прежде чем импортировать проект формата{" "}
                  <mark className="file">AEP</mark>, полностью распакуйте архив и
                  импортируйте проект уже из распакованной папки. Так вы убережёте себя от
                  появления разноцветных «плейсхолдеров» и ошибок, связанных с отсутствием
                  файлов.
                </li>
                <li>
                  Если попытаться импортировать только файл{" "}
                  <mark className="file">AEP</mark> без полной распаковки архива,{" "}
                  <mark className="app">Adobe Premiere</mark> не сможет найти все
                  необходимые для проекта файлы.
                </li>
                <li>
                  В большинстве случаев рядом с файлом шаблона есть туториал, объясняющий,
                  как им пользоваться. Он может находиться в папке{" "}
                  <mark className="path">Help</mark>,{" "}
                  <mark className="path">Tutorial</mark> или в корне архива.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <p>
              Пакеты шаблонов формата <mark className="file">ATOM</mark> устанавливаются
              перетаскиванием файла в окно расширения{" "}
              <mark className="plugin">AtomX</mark>.
            </p>
            <Addition type="warning">
              <mark className="plugin">AtomX</mark> <mark className="version">3.0.9</mark>{" "}
              может не импортировать пакеты, выдавая ошибку{" "}
              <mark className="danger">«Connection Failure»</mark> или просить код для
              активации. Для решения этой проблемы попробуйте установить{" "}
              <mark className="plugin">AtomX</mark> <mark className="version">3.0.8</mark>{" "}
              и повторить попытку импорта пакета.
            </Addition>
          </li>
          <li>
            Пакеты шаблонов формата <mark className="file">MBR</mark> устанавливаются
            перетаскиванием в окно расширения <mark className="plugin">Motion Bro</mark>.
          </li>
        </ul>
        <ContentFilter
          macContent={
            <>
              <NestedDetailsSummary
                anchor="archive"
                title="Архивы (ZIP, 7Z, RAR)"
              >
                <p>
                  Если вы скачали архив формата <mark className="file">ZIP</mark>,{" "}
                  <mark className="file">7Z</mark> или <mark className="file">RAR</mark> —
                  его необходимо распаковать с помощью архиватора для дальнейшей работы с
                  его содержимым. Это можно сделать с помощью{" "}
                  <mark className="app">Keka</mark> или{" "}
                  <mark className="app">The Unarchiver</mark>. Для распаковки многотомного
                  архива, то есть если в названии архивов есть{" "}
                  <mark className="file">PART1</mark>, <mark className="file">PART2</mark>{" "}
                  и так далее, нужно запускать распаковку только первой части — остальные
                  подхватятся автоматически. Другие части архива не нужно трогать без
                  острой необходимости, если вы не знаете, что с ними делать.
                </p>
                <Addition type="info">
                  Загрузить <mark className="app">Keka</mark> можно по{" "}
                  <a href="https://www.keka.io/ru/">этой</a> ссылке, а{" "}
                  <mark className="app">The Unarchiver</mark> — по{" "}
                  <a href="https://theunarchiver.com/">этой</a>.
                </Addition>
                <ArticleMedia
                  caption="Распаковка через контекстное меню"
                  src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                  type="image"
                />
                <Addition type="info">
                  <ul>
                    <li>
                      Многотомные архивы создаются для того, чтобы файл можно было
                      спокойно передать, обойдя ограничения на максимальный размер в{" "}
                      <mark className="app">Telegram</mark> или другом сервисе.
                    </li>
                    <li>
                      Если вы хотите сделать <mark className="app">Keka</mark> архиватором
                      по умолчанию, то вам понадобится установить{" "}
                      <a href="https://www.keka.io/defaultapp/">KekaExternalHelper</a>.
                      Подробная инструкция расположена в{" "}
                      <a href="https://github.com/aonez/Keka/wiki/Default-application">
                        вики на GitHub
                      </a>
                      .
                    </li>
                  </ul>
                </Addition>
                <Addition type="warning">
                  Если в архиве находится папка <mark className="path">_MACOSX</mark>, то
                  в ней нет никаких полезных файлов, установщиков и плагинов, которые
                  предназначены именно для устройств на macOS. Это скрытая системная
                  папка, которую иногда создаёт операционная система: в ней хранятся
                  метаданные и информация о файловой системе. Внутри данной директории нет
                  ничего интересного для пользователя, поэтому смело игнорируйте её.
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="dmg"
                title="Пакеты (DMG, APP, PKG)"
              >
                <p>
                  Чтобы установить пакет формата <mark className="file">DMG</mark>,{" "}
                  <mark className="file">APP</mark> или <mark className="file">PKG</mark>{" "}
                  — достаточно открыть такой файл двойным кликом и следовать инструкциям
                  инсталлятора.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      По умолчанию в macOS вы не сможете без «танцев с бубном» открыть
                      установщики от неподтверждённых разработчиков. Чтобы обойти этот
                      запрет, нужно изменить настройки безопасности операционной системы.
                      Подробнее об этом вы можете прочитать на{" "}
                      <a href="https://support.apple.com/ru-ru/102445">сайте Apple</a>,{" "}
                      <a href="https://yablyk.com/678518-programma-ne-mozhet-byt-otkryta-tak-kak-ee-avtor-oshibka-na-mac-kak-obojti/">
                        Яблык
                      </a>
                      ,{" "}
                      <a href="https://www.iphones.ru/iNotes/pochemu-mac-ne-razreshaet-ustanavlivat-prilozheniya-ne-iz-app-store-05-15-2020">
                        iPhones.ru
                      </a>{" "}
                      или в{" "}
                      <a href="https://appstorrent.ru/200-mistakes.html">
                        решениях проблем с установкой на appstorrent
                      </a>
                      .
                    </li>
                    <li>
                      Если вы сталкиваетесь с ошибкой{" "}
                      <mark className="danger">
                        «Не удаётся открыть программу „AppName”»
                      </mark>
                      , попробуйте открыть её через <mark className="key">ПКМ</mark>,
                      выбрав в контекстном меню <mark className="select">«Открыть»</mark>.
                    </li>
                  </ul>
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="plugin"
                title="Плагины (PLUGIN)"
              >
                <p>
                  Плагины формата <mark className="file">PLUGIN</mark> или{" "}
                  <mark className="file">BUNDLE</mark> распаковываются в общую папку
                  плагинов —{" "}
                  <mark className="path">
                    /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                  </mark>
                  . Обычно установленные плагины находятся в окне{" "}
                  <mark className="select">«Effects»</mark> и могут вызываться с помощью{" "}
                  <mark className="plugin">Excalibur</mark>.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      В редких случаях плагин может вызываться из другого места в
                      интерфейсе программы — читайте приложенную документацию к
                      устанавливаемому плагину.
                    </li>
                    <li>
                      Если вы хотите, чтобы плагин отображался только в конкретной версии{" "}
                      <mark className="app">Adobe Premiere</mark> — распакуйте его в папку{" "}
                      <mark className="path">
                        /Applications/Adobe Premiere Pro 20XX/Plug-Ins
                      </mark>
                      , где <mark className="version">20XX</mark> — год вашей версии
                      программы.
                    </li>
                    <li>
                      Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                      <mark className="app">Adobe Premiere</mark> и наоборот. Уточняйте в
                      документации к устанавливаемому плагину, для каких версий{" "}
                      <mark className="app">Adobe Premiere</mark> он предназначен.
                    </li>
                  </ul>
                </Addition>
                <Addition type="warning">
                  Учтите, что не все плагины формата <mark className="file">PLUGIN</mark>{" "}
                  поддерживаются в <mark className="app">Adobe Premiere</mark>, так как в
                  основном они предназначены для{" "}
                  <mark className="app">Adobe After Effects</mark> и не всегда имеют
                  обратную совместимость с <mark className="app">Adobe Premiere</mark>.
                </Addition>
                <Addition type="danger">
                  Плагины формата <mark className="file">AEX</mark> и{" "}
                  <mark className="file">PRM</mark> не подходят для устройств на macOS,
                  так как они предназначены для устройств на Windows.
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="mogrt"
                title="Шаблоны (MOGRT)"
              >
                <p>
                  Если в архиве находится файл <mark className="file">MOGRT</mark>, такие
                  шаблоны устанавливаются через панель{" "}
                  <mark className="select">«Graphics Templates»</mark>, начиная с{" "}
                  <mark className="app">Adobe Premiere Pro</mark>{" "}
                  <mark className="version">25.0 (2025)</mark> и выше, или через{" "}
                  <mark className="select">«Essential Graphics»</mark> в версиях ниже.
                  Чтобы установить такие шаблоны, нажмите кнопку{" "}
                  <mark className="select">«Install Motion Graphics template»</mark> и
                  укажите файл в открывшемся окне файлового менеджера либо просто
                  перетащите <mark className="file">MOGRT</mark> в это окно.
                </p>
                <ArticleMedia
                  caption="Graphics Templates (ранее Essential Graphics)"
                  src="legacy/premierepro/install_mogrt.png"
                  type="image"
                />
                <p>
                  Также вы можете скопировать файлы вручную в стандартную папку локальных
                  шаблонов по пути{" "}
                  <mark className="path">
                    /Library/Application Support/Adobe/Common/Motion Graphics Templates
                  </mark>{" "}
                  или импортировать целую папку, нажав на иконку{" "}
                  <mark className="select">«Add additional folder»</mark> возле{" "}
                  <mark className="select">«Local Templates»</mark>, если нажата кнопка
                  фильтра. После этого они также появятся в программе.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      В большинстве случаев рядом с шаблоном есть туториал по его
                      использованию. Он может находиться в папке{" "}
                      <mark className="path">Help</mark>,{" "}
                      <mark className="path">Tutorial</mark> или в корне архива.
                    </li>
                    <li>
                      Настройка шаблонов, в которых можно менять текст или плейсхолдеры,
                      производится в панели{" "}
                      <mark className="select">«Properties» → «Edit»</mark> или{" "}
                      <mark className="select">«Essential Graphics» → «Edit»</mark>, в
                      зависимости от версии программы.
                    </li>
                    <li>
                      <p>
                        По своей сути файл формата <mark className="file">MOGRT</mark> —
                        это архив с двумя или тремя файлами, которые формируют
                        анимационный шаблон. Такие шаблоны создаются как в{" "}
                        <mark className="app">Adobe After Effects</mark>, так и в{" "}
                        <mark className="app">Adobe Premiere</mark>.
                      </p>
                      <ul>
                        <li>
                          <mark className="file">DEFINITION.JSON</mark> — содержит ссылки,
                          контроллеры и другую техническую информацию.
                        </li>
                        <li>
                          <mark className="file">PROJECT.AEGRAPHICS</mark> — хранит всю
                          анимацию. Стандартными средствами{" "}
                          <mark className="app">Adobe Premiere</mark> его не
                          отредактировать, но можно открыть в{" "}
                          <mark className="app">Adobe After Effects</mark>, внести правки
                          и конвертировать обратно в <mark className="file">MOGRT</mark>.
                        </li>
                        <li>
                          <mark className="file">THUMB.JPG</mark> — обложка для
                          предпросмотра в панели{" "}
                          <mark className="select">«Essential Graphics»</mark>.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Addition>
                <Addition type="warning">
                  Для некоторых <mark className="file">MOGRT</mark> может потребоваться
                  установленный <mark className="app">Adobe After Effects</mark>. Если он
                  установлен, но <mark className="app">Adobe Premiere</mark> всё равно
                  выдаёт ошибку, убедитесь, что обе программы относятся к одной
                  «версии-года» и у вас установлен{" "}
                  <mark className="app">Adobe Creative Cloud</mark>.
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="preset"
                title="Пресеты (PRFPSET)"
              >
                <p>
                  Пресеты формата <mark className="file">PRFPSET</mark> устанавливаются
                  следующим образом:
                </p>
                <ul>
                  <li>
                    <p>
                      Откройте окно <mark className="select">«Effects»</mark>, нажмите на
                      иконку с тремя полосками в его заголовке, а затем — на кнопку{" "}
                      <mark className="select">«Import Presets»</mark>.
                    </p>
                    <Addition type="info">
                      В папке с пресетами вы можете создать собственную папку или
                      расположить скачанные пресеты в уже существующих.
                    </Addition>
                    <ArticleMedia
                      caption="Adobe Premiere"
                      src="legacy/premierepro/import_presets.png"
                      type="image"
                    />
                  </li>
                  <li>
                    В открывшемся окне выберите файл пресетов формата{" "}
                    <mark className="file">PRFPSET</mark>.
                  </li>
                  <li>
                    <p>
                      После выбора файла импортированные пресеты появятся в окне{" "}
                      <mark className="select">«Effects»</mark> в папке{" "}
                      <mark className="path">Presets</mark>.
                    </p>
                    <Addition type="info">
                      Все ваши пресеты хранятся в одном общем файле{" "}
                      <mark className="file">
                        Effect Presets and Custom Items.prfpset
                      </mark>
                      , который находится по пути{" "}
                      <mark className="path">
                        ~/Documents/Adobe/Premiere Pro/XX.X/Profile-XXXXXX
                      </mark>
                      . Этот файл не стоит редактировать вне{" "}
                      <mark className="app">Adobe Premiere</mark>, но его можно
                      скопировать и перенести в другое место, чтобы в случае необходимости
                      восстановить пресеты.
                    </Addition>
                  </li>
                </ul>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="zxp"
                title="Расширения (ZXP)"
              >
                <p>
                  Расширения формата <mark className="file">ZXP</mark> можно установить
                  двумя способами: с использованием{" "}
                  <mark className="app">ZXP Installer</mark> от{" "}
                  <mark className="web">aescripts</mark> или ручной распаковкой расширения
                  в нужную директорию. После корректной установки установленные расширения
                  появятся в <mark className="select">«Window» → «Extensions»</mark> и
                  будут работать в своём новом окне, который вы можете прикрепить в своё
                  рабочее пространство.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      Расширения такого формата обычно являются кросс-платформенными: они
                      работают как в Windows, так и в macOS.
                    </li>
                    <li>
                      Прежде чем устанавливать расширение такого формата — убедитесь в
                      том, что используемая вами версия{" "}
                      <mark className="app">Adobe Premiere</mark> его поддерживает, иначе
                      он может не появиться в списке расширений.
                    </li>
                    <li>
                      Если расширение просит включить разрешение на запись файлов и доступ
                      в интернет, перейдите в{" "}
                      <mark className="select">
                        «Premiere» → «Preferences» → «Control Surface»
                      </mark>{" "}
                      и установите флажок у параметра{" "}
                      <mark className="select">
                        «Allow Extensions to write to files and access network»
                      </mark>
                      .
                    </li>
                    <li>
                      Иногда в архиве может быть уже распакованный{" "}
                      <mark className="file">ZXP</mark>. Это можно понять по наличию папок{" "}
                      <mark className="path">META-INF</mark> и{" "}
                      <mark className="path">CSXS</mark> внутри папки с названием
                      расширения.
                    </li>
                  </ul>
                </Addition>
                <ul>
                  <li>
                    <p>
                      Чтобы установить расширение через{" "}
                      <mark className="app">ZXP Installer</mark> — его нужно загрузить с{" "}
                      <a href="https://aescripts.com/learn/zxp-installer/">
                        официального сайта aescripts
                      </a>{" "}
                      и установить, следуя инструкциям инсталлятора. После установки
                      утилиты откройте его, а затем переместите файл{" "}
                      <mark className="file">ZXP</mark> прямо в окно{" "}
                      <mark className="app">ZXP Installer</mark>. Затем нажмите на{" "}
                      <mark className="select">«Install»</mark> и дождитесь окончания
                      установки.
                    </p>
                    <Addition type="danger">
                      Пожалуйста, не используйте{" "}
                      <a href="https://zxpinstaller.com/">ZXP Installer</a> от{" "}
                      <mark className="company">ELEMENTS Storage Media</mark>, если вы
                      используете версии программ от
                      <mark className="company">Adobe</mark>, которые отвязаны от
                      приложения <mark className="app">Adobe Creative Cloud</mark>. Этот{" "}
                      <a href="https://zxpinstaller.com/">ZXP Installer</a> будет выдавать
                      вам ошибку <mark className="danger">-193</mark> до тех пор, пока вы
                      не установите <mark className="app">Adobe Creative Cloud</mark>, а
                      он, в свою очередь, может повредить уже установленные программы.
                    </Addition>
                  </li>
                  <li>
                    <p>
                      Если вы не хотите устанавливать сторонние программы для таких
                      расширений, выполните шаги ниже.
                    </p>
                    <ul>
                      <li>
                        Переименуйте файл <mark className="file">ZXP</mark> в{" "}
                        <mark className="file">ZIP</mark> и распакуйте его как обычный
                        архив.
                      </li>
                      <li>
                        <p>
                          Переместите содержимое распакованного архива в папку{" "}
                          <mark className="path">
                            /Library/Application Support/Adobe/CEP/extensions
                          </mark>
                          .{" "}
                          <a href="https://yablyk.com/174998-kak-otkryt-skrytuyu-papku-biblioteki-library-na-mac-macos-sierra/">
                            Как открыть папку «Библиотеки»?
                          </a>
                        </p>
                        <Addition type="info">
                          Если такой папки нет — создайте её вручную через контекстное
                          меню <mark className="app">Finder</mark>.
                        </Addition>
                      </li>
                      <li>
                        <p>
                          Откройте <mark className="app">Терминал</mark> и введите команды
                          ниже — они активируют debug-режим, необходимый для корректной
                          работы вручную установленных расширений.
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
                          <ul>
                            <li>
                              Эти команды нужно ввести только один раз — при последующих
                              установках дополнительных расширений повторять их не
                              требуется.
                            </li>
                            <li>
                              Если вы пропустите этот шаг, расширения будут отображаться в
                              списке, но при попытке их открыть ничего не произойдёт.
                            </li>
                          </ul>
                        </Addition>
                      </li>
                    </ul>
                  </li>
                </ul>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="vst"
                title="Аудиоплагины (VST, VST3)"
              >
                <p>
                  Аудиоплагины формата <mark className="file">VST</mark> или{" "}
                  <mark className="file">VST3</mark> можно устанавливать в любом месте
                  системы, однако рекомендуется хранить их в общей папке:{" "}
                  <mark className="path">/Library/Audio/Plug-Ins/VST</mark> — для{" "}
                  <mark className="file">VST</mark> или{" "}
                  <mark className="path">/Library/Audio/Plug-Ins/VST3</mark> — для{" "}
                  <mark className="file">VST3</mark>. Иногда плагины распространяются в
                  виде установщиков и автоматически распаковываются в нужные каталоги.
                </p>
                <p>
                  Однако сами по себе эти плагины в программе не появятся.{" "}
                  <mark className="app">Adobe Premiere</mark> не ищет их автоматически при
                  запуске, поэтому сканирование нужно запускать вручную. Чтобы
                  просканировать аудиоплагины, перейдите в{" "}
                  <mark className="select">«Preferences» → «Audio»</mark> и нажмите кнопку{" "}
                  <mark className="select">«Manage Audio Plug-Ins»</mark>. В открывшемся
                  окне выберите <mark className="select">«Scan for Plug-Ins»</mark>, чтобы
                  программа обнаружила плагины, установленные в системе.
                </p>
                <ArticleMedia
                  caption="Сканируем VST-эффекты"
                  src="legacy/premierepro/install_vst3.mp4"
                  type="video"
                />
                <p>
                  При необходимости можно добавить собственную папку с плагинами с помощью
                  кнопки <mark className="select">«Add»</mark> в разделе{" "}
                  <mark className="select">«VST Plug-In Folders»</mark>, если
                  автоматический поиск не нашёл нужные файлы.
                </p>
                <p>
                  После сканирования плагины появятся в списке установленных, и вы сможете
                  использовать их в <mark className="select">«Track Mixer»</mark> или
                  других разделах программы.
                </p>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="lut"
                title="Файлы для цветокоррекции (CUBE, ITX, LOOK, LUT, RGB, LS3, MBLOOK)"
              >
                <ul>
                  <li>
                    <p>
                      Файлы для цветокоррекции форматов <mark className="file">CUBE</mark>
                      , <mark className="file">ITX</mark>,{" "}
                      <mark className="file">LOOK</mark> или{" "}
                      <mark className="file">LUT</mark> распаковываются в{" "}
                      <mark className="path">
                        /Applications/Adobe Premiere Pro 20XX/Adobe Premiere Pro
                        20XX.app/Contents/Lumetri/LUTs
                      </mark>
                      . Чтобы добраться до папки{" "}
                      <mark className="path">Contents/Lumetri/LUTs</mark> — выделите и
                      нажмите <mark className="key">ПКМ</mark> по ярлыку{" "}
                      <mark className="app">Adobe Premiere Pro 20XX</mark> в директории{" "}
                      <mark className="path">/Applications/Adobe Premiere Pro 20XX</mark>,
                      а затем выберите{" "}
                      <mark className="select">«Показать содержимое пакета»</mark> в
                      контекстном меню. Для изменений файлов внутри пакета потребуются
                      права администратора. Файлы для цветокоррекции можно будет
                      использовать в эффекте <mark className="plugin">Lumetri Color</mark>
                      .
                    </p>
                    <ul>
                      <li>
                        Если вы поместите файлы в папку{" "}
                        <mark className="path">Technical</mark>, где обычно располагаются
                        входные <mark className="file">LUT</mark> для проявки изображения
                        с камеры, например для преобразования между цветовыми
                        пространствами, то они появятся в параметре{" "}
                        <mark className="select">«Input LUT»</mark> во вкладке{" "}
                        <mark className="select">«Basic Correction»</mark>.
                      </li>
                      <li>
                        Если вы поместите файлы в папку{" "}
                        <mark className="path">Creative</mark>, где располагаются файлы
                        для стилизации изображения уже после базовой цветокоррекции, то
                        они появятся в параметре <mark className="select">«Look»</mark> во
                        вкладке <mark className="select">«Creative»</mark>.
                      </li>
                      <li>
                        В <mark className="path">Legacy</mark> располагаются устаревшие
                        файлы для цветокоррекции для совместимости со старыми проектами в{" "}
                        <mark className="app">Adobe Premiere</mark> и не используются
                        программой в последних версиях. При необходимости вы можете
                        скопировать нужные файлы цветокоррекции оттуда в папку{" "}
                        <mark className="path">Creative</mark> или{" "}
                        <mark className="path">Technical</mark>.
                      </li>
                    </ul>
                    <Addition type="info">
                      <ul>
                        <li>
                          Чтобы открыть панель <mark className="app">Lumetri Color</mark>,
                          перейдите в <mark className="select">«Window»</mark> и выберите{" "}
                          <mark className="select">«Lumetri Color»</mark>.
                        </li>
                        <li>
                          Если вы хотите использовать файл для цветокоррекции один раз,
                          выберите в <mark className="select">«Input LUT»</mark> или{" "}
                          <mark className="select">«Look»</mark> значение{" "}
                          <mark className="select">«Browse»</mark> и укажите путь к файлу.
                        </li>
                      </ul>
                    </Addition>
                    <ArticleMedia
                      src="_mg31FMwrxc"
                      type="youtube"
                    />
                  </li>
                  <li>
                    <p>
                      Файлы для цветокоррекции форматов <mark className="file">RGX</mark>,{" "}
                      <mark className="file">LS3</mark> или{" "}
                      <mark className="file">MBLOOK</mark> устанавливаются с помощью
                      кнопки импорта во вкладке <mark className="select">«Looks»</mark>{" "}
                      стороннего расширения{" "}
                      <mark className="plugin">Magic Bullet Looks</mark>.
                    </p>
                    <ArticleMedia
                      caption="Magic Bullet Looks"
                      src="legacy/import_magic_bullet_looks.png"
                      type="image"
                    />
                  </li>
                </ul>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="font"
                title="Шрифты (TTF, OTF)"
              >
                <p>
                  Шрифты форматов <mark className="file">TTF</mark> или{" "}
                  <mark className="file">OTF</mark> устанавливаются стандартными
                  средствами операционной системы. Установленные шрифты будут отображаться
                  во всех программах, поддерживающих сторонние шрифты, в том числе и в{" "}
                  <mark className="app">Adobe Premiere</mark>. Это можно сделать
                  несколькими способами.
                </p>
                <ul>
                  <li>
                    Запустите приложение <mark className="app">Шрифты</mark>, выделите
                    нужные файлы шрифтов и перенесите их в открытое окно программы.
                  </li>
                  <li>
                    Дважды кликните на файл шрифта и в открывшемся окне нажмите кнопку{" "}
                    <mark className="select">«Установить»</mark>.
                  </li>
                  <li>
                    Используйте сторонний менеджер для установки, организации и активации
                    нужных шрифтов, например <mark className="app">FontBase</mark>,{" "}
                    <mark className="app">Typeface</mark> или{" "}
                    <mark className="app">RightFont</mark>.
                  </li>
                </ul>
              </NestedDetailsSummary>
            </>
          }
          windowsContent={
            <>
              <NestedDetailsSummary
                anchor="archive"
                title="Архивы (ZIP, 7Z, RAR)"
              >
                <p>
                  Если вы скачали архив формата <mark className="file">ZIP</mark>,{" "}
                  <mark className="file">7Z</mark> или <mark className="file">RAR</mark> —
                  его необходимо распаковать с помощью архиватора для дальнейшей работы с
                  его содержимым. Это можно сделать с помощью{" "}
                  <mark className="app">WinRAR</mark> или{" "}
                  <mark className="app">7-Zip</mark>, однако многотомные архивы всё же
                  рекомендуется распаковывать именно через{" "}
                  <mark className="app">WinRAR</mark> во избежание непредвиденных ошибок.
                  Для распаковки многотомного архива, то есть, если в названии архивов
                  есть <mark className="file">PART1</mark>,{" "}
                  <mark className="file">PART2</mark> и так далее, нужно запустить
                  распаковку только первой части — остальные подхватятся автоматически.
                  Другие части архива не нужно трогать без острой необходимости, если вы
                  не знаете, что с ними делать.
                </p>
                <ArticleMedia
                  src="95B7quetKoQ"
                  type="youtube"
                />
                <Addition type="info">
                  <ul>
                    <li>
                      <mark className="app">WinRAR</mark> можно загрузить по{" "}
                      <a href="https://www.rarlab.com/download.htm">этой</a> ссылке, а{" "}
                      <mark className="app">7-Zip</mark> — по{" "}
                      <a href="https://www.7-zip.org/download.html">этой</a>.{" "}
                      <em className="article-note-muted">
                        Надеюсь, вы в курсе, как обойти 40-дневное «ограничение» у{" "}
                        <mark className="app">WinRAR</mark>.
                      </em>
                    </li>
                    <li>
                      Многотомные архивы создаются для того, чтобы файл можно было
                      спокойно передать, обойдя ограничения на максимальный размер в{" "}
                      <mark className="app">Telegram</mark> или другом сервисе.
                    </li>
                  </ul>
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="exe"
                title="Установщики (EXE, MSI)"
              >
                <p>
                  Для того чтобы установить программу или плагин, поставляющийся в формате
                  исполняемого файла <mark className="file">EXE</mark> или{" "}
                  <mark className="file">MSI</mark> — достаточно его открыть двойным
                  кликом и следовать инструкциям инсталлятора.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      Перед установкой плагинов с помощью инсталлятора рекомендуется
                      закрыть <mark className="app">Adobe Premiere</mark> для корректной
                      установки.
                    </li>
                    <li>
                      Если в записи указано, что установщик является репаком — после его
                      установки программа или плагин уже будет «народно» активирован,
                      никаких дополнительный действий для активации делать не нужно.
                    </li>
                  </ul>
                </Addition>
                <Addition type="danger">
                  <ul>
                    <li>
                      При использовании установщиков убедитесь, что{" "}
                      <mark className="app">Adobe Premiere</mark> установлен в стандартном
                      расположении <mark className="path">C:\Program Files\Adobe\</mark>,
                      а не в другом месте или на другом разделе. В противном случае
                      устанавливаемый плагин может установиться не туда, из-за чего не
                      будет отображаться и корректно работать в программе.
                    </li>
                    <li>
                      Если вы доверяете источнику, откуда вы скачали установщик — для
                      корректной установки отключите полностью или на время ваше{" "}
                      <mark className="app">антивирусное ПО</mark> во избежание проблем
                      при установке из-за отсутствия нужных файлов.{" "}
                      <a href="#disable-defender">Подробнее...</a>
                    </li>
                  </ul>
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="plugin"
                title="Плагины (PRM, AEX)"
              >
                <p>
                  Плагины форматов <mark className="file">PRM</mark> или{" "}
                  <mark className="file">AEX</mark> распаковываются в общую папку плагинов
                  —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  . Обычно установленные плагины находятся в окне{" "}
                  <mark className="select">«Effects»</mark> и могут вызываться с помощью{" "}
                  <mark className="plugin">Excalibur</mark>.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      В редких случаях плагин может вызываться из другого места в
                      программе — читайте приложенную документацию к устанавливаемому
                      плагину.
                    </li>
                    <li>
                      Если вы хотите, чтобы плагин отображался только в конкретной версии{" "}
                      <mark className="app">Adobe Premiere</mark> — распакуйте его в папку{" "}
                      <mark className="path">
                        C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Plug-ins
                      </mark>
                      , где <mark className="version">20XX</mark> — год вашей версии
                      программы.
                    </li>
                    <li>
                      Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                      <mark className="app">Adobe Premiere</mark> и наоборот. Уточняйте в
                      документации к устанавливаемому плагину, для каких версий{" "}
                      <mark className="app">Adobe Premiere</mark> он предназначен.
                    </li>
                  </ul>
                </Addition>
                <Addition type="warning">
                  Учтите, что не все плагины формата <mark className="file">AEX</mark>{" "}
                  поддерживаются в <mark className="app">Adobe Premiere</mark>, так как в
                  основном они предназначены для{" "}
                  <mark className="app">Adobe After Effects</mark> и не всегда имеют
                  обратную совместимость с <mark className="app">Adobe Premiere</mark>.
                </Addition>
                <Addition type="danger">
                  Плагины формата <mark className="file">PLUGIN</mark> и{" "}
                  <mark className="file">BUNDLE</mark> не подходят для устройств на{" "}
                  Windows, так как они предназначены для устройств на macOS.
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="mogrt"
                title="Шаблоны (MOGRT)"
              >
                <p>
                  Если в архиве находится файл <mark className="file">MOGRT</mark>, такие
                  шаблоны устанавливаются через панель{" "}
                  <mark className="select">«Graphics Templates»</mark>, начиная с версии{" "}
                  <mark className="app">Adobe Premiere Pro</mark>{" "}
                  <mark className="version">25.0 (2025)</mark>, или через{" "}
                  <mark className="select">«Essential Graphics»</mark> в ранних версиях.
                  Чтобы установить такие шаблоны, нажмите кнопку{" "}
                  <mark className="select">«Install Motion Graphics template»</mark> и
                  укажите файл в открывшемся окне файлового менеджера либо просто
                  перетащите <mark className="file">MOGRT</mark> в это окно.
                </p>
                <ArticleMedia
                  caption="Graphics Templates (ранее Essential Graphics)"
                  src="legacy/premierepro/install_mogrt.png"
                  type="image"
                />
                <p>
                  Также вы можете скопировать файлы вручную в стандартную папку локальных
                  шаблонов по пути{" "}
                  <mark className="path">
                    %APPDATA%/Adobe/Common/Motion Graphics Templates
                  </mark>{" "}
                  или импортировать целую папку, нажав на иконку{" "}
                  <mark className="select">«Add additional folder»</mark> возле{" "}
                  <mark className="select">«Local Templates»</mark>, если нажата кнопка
                  фильтра. После этого они также появятся в программе.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      В большинстве случаев рядом с шаблоном есть туториал по его
                      использованию. Он может находиться в папке{" "}
                      <mark className="path">Help</mark>,{" "}
                      <mark className="path">Tutorial</mark> или в корне архива.
                    </li>
                    <li>
                      Настройка шаблонов, в которых можно менять текст или плейсхолдеры,
                      производится в панели{" "}
                      <mark className="select">«Properties» → «Edit»</mark> или{" "}
                      <mark className="select">«Essential Graphics» → «Edit»</mark>, в
                      зависимости от версии программы.
                    </li>
                  </ul>
                </Addition>
                <Addition type="warning">
                  <ul>
                    <li>
                      Для некоторых <mark className="file">MOGRT</mark> может
                      потребоваться установленный{" "}
                      <mark className="app">Adobe After Effects</mark>. Если он
                      установлен, но <mark className="app">Adobe Premiere</mark> всё равно
                      выдаёт ошибку, убедитесь, что обе программы находятся в стандартной
                      директории <mark className="path">C:\Program Files\Adobe\</mark> и
                      относятся к одной «версии-года».
                    </li>
                    <li>
                      <p>
                        Если вы просматриваете содержимое архива в{" "}
                        <mark className="app">Проводнике</mark> Windows, учтите, что он
                        некорректно обрабатывает файлы и принимает{" "}
                        <mark className="file">MOGRT</mark> как файл архива. Из-за этого
                        можно случайно зайти в содержимое такого файла, как в папку, и не
                        понять, что с ним делать дальше. Чтобы избежать проблем,
                        распакуйте весь архив с шаблоном, желательно с помощью{" "}
                        <mark className="app">WinRAR</mark> или{" "}
                        <mark className="app">7-Zip</mark> и импортируйте его в{" "}
                        <mark className="app">Adobe Premiere</mark>. Не открывайте
                        содержимое файла <mark className="file">MOGRT</mark> без острой
                        необходимости.
                      </p>
                      <p>
                        По своей сути файл формата <mark className="file">MOGRT</mark> —
                        это архив с двумя или тремя файлами, которые формируют
                        анимационный шаблон. Такие шаблоны создаются как в{" "}
                        <mark className="app">Adobe After Effects</mark>, так и в{" "}
                        <mark className="app">Adobe Premiere</mark>.
                      </p>
                      <ul>
                        <li>
                          <mark className="file">DEFINITION.JSON</mark> — содержит ссылки,
                          контроллеры и другую техническую информацию.
                        </li>
                        <li>
                          <mark className="file">PROJECT.AEGRAPHICS</mark> — хранит всю
                          анимацию. Стандартными средствами{" "}
                          <mark className="app">Adobe Premiere</mark> его не
                          отредактировать, но можно открыть в{" "}
                          <mark className="app">Adobe After Effects</mark>, внести правки
                          и конвертировать обратно в <mark className="file">MOGRT</mark>.
                        </li>
                        <li>
                          <mark className="file">THUMB.JPG</mark> — обложка для
                          предпросмотра в панели{" "}
                          <mark className="select">«Essential Graphics»</mark>.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="prfpset"
                title="Пресеты (PRFPSET, EFFECT, BSP, BAP, BCP)"
              >
                <ul>
                  <li>
                    <p>
                      Пресеты формата <mark className="file">PRFPSET</mark>{" "}
                      устанавливаются следующим образом:
                    </p>
                    <ul>
                      <li>
                        <p>
                          Откройте окно <mark className="select">«Effects»</mark>, нажмите
                          на иконку с тремя полосками в его заголовке, а затем — на кнопку{" "}
                          <mark className="select">«Import Presets»</mark>.
                        </p>
                        <Addition type="info">
                          В папке с пресетами вы можете создать папку со своим названием
                          или расположить скачанные пресеты в уже существующих.
                        </Addition>
                        <ArticleMedia
                          caption="Adobe Premiere"
                          src="legacy/premierepro/import_presets.png"
                          type="image"
                        />
                      </li>
                      <li>
                        В открывшемся окне выберите файл пресетов формата{" "}
                        <mark className="file">PRFPSET</mark>.
                      </li>
                      <li>
                        <p>
                          После выбора файла импортированные пресеты появятся в окне{" "}
                          <mark className="select">«Effects»</mark> в папке{" "}
                          <mark className="path">Presets</mark>.
                        </p>
                        <Addition type="info">
                          Все ваши пресеты хранятся в одном общем файле{" "}
                          <mark className="file">
                            Effect Presets and Custom Items.prfpset
                          </mark>
                          , который находится по пути{" "}
                          <mark className="path">
                            C:\Users\%UserName%\Documents\Adobe\Premiere
                            Pro\XX.X\Profile-XXXXXX\
                          </mark>
                          . Этот файл не стоит редактировать вне{" "}
                          <mark className="app">Adobe Premiere</mark>, но его можно
                          скопировать и перенести в другое место, чтобы в случае
                          необходимости восстановить пресеты.
                        </Addition>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Пресеты форматов <mark className="file">GP</mark>,{" "}
                      <mark className="file">EFFECT</mark> или{" "}
                      <mark className="file">TRANSITION</mark> относятся к пакету
                      сторонних плагинов <mark className="plugin">Boris FX Sapphire</mark>{" "}
                      и импортируются через браузер пресетов или с помощью ручной
                      распаковки пресетов в стандартную директорию. Импортированные
                      пресеты можно будет использовать с помощью{" "}
                      <mark className="select">«Load Preset»</mark> в контроллере каждого
                      эффекта.
                    </p>
                    <ul>
                      <li>
                        Чтобы импортировать файлы через браузер пресетов — примените на
                        слой любой эффект, относящийся к{" "}
                        <mark className="app">Boris FX Sapphire</mark>. После применения —
                        нажмите на <mark className="select">«Load Preset»</mark> в
                        контроллере эффекта. В открывшемся окне перейдите в{" "}
                        <mark className="select">«File» → «Import Preset»</mark> и
                        выберите нужный файл.
                      </li>
                      <li>
                        Если вы хотите импортировать файлы пресетов без использования{" "}
                        <mark className="select">«Preset Browser»</mark>, переместите их в
                        стандартную директорию для них —{" "}
                        <mark className="path">
                          C:\ProgramData\BorisFX\Sapphire\Sapphire\presets
                        </mark>
                        .
                      </li>
                    </ul>
                  </li>
                  <li>
                    <p>
                      Пресеты форматов <mark className="file">BSP</mark>,{" "}
                      <mark className="file">BAP</mark> или{" "}
                      <mark className="file">BCP</mark> относятся к пакету сторонних
                      плагинов <mark className="plugin">Boris FX Continuum</mark>.
                    </p>
                    <ul>
                      <li>
                        Чтобы применить пресет к эффекту из этого пакета — просто нажмите
                        на <mark className="select">«Load»</mark> в его контроллере и
                        укажите путь до файла.
                      </li>
                      <li>
                        Чтобы файлы появились в браузере пресетов, который открывается
                        нажатием на <mark className="select">«FX Browser»</mark> —
                        распакуйте их в{" "}
                        <mark className="path">
                          C:\ProgramData\BorisFX\Continuum\XX\Presets
                        </mark>
                        . В этой директории будет много подпапок, которые относятся к
                        определённой категории и эффекту — распакуйте пресет в необходимое
                        вам место.
                      </li>
                    </ul>
                  </li>
                </ul>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="zxp"
                title="Расширения (ZXP)"
              >
                <p>
                  Расширения формата <mark className="file">ZXP</mark> можно установить
                  двумя способами: с использованием{" "}
                  <mark className="app">ZXP Installer</mark> от{" "}
                  <mark className="web">aescripts</mark> или вручную. После корректной
                  установки они появятся в меню{" "}
                  <mark className="select">«Window» → «Extensions»</mark> и будут работать
                  в отдельном окне, которое можно прикрепить к рабочему пространству.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      Расширения такого формата обычно являются кросс-платформенными: они
                      работают как в Windows, так и в macOS.
                    </li>
                    <li>
                      Прежде чем устанавливать расширение такого формата — убедитесь в
                      том, что используемая вами версия{" "}
                      <mark className="app">Adobe Premiere</mark> его поддерживает, иначе
                      он может не появиться в списке расширений.
                    </li>
                    <li>
                      Если расширение просит включить разрешение на запись файлов и доступ
                      в интернет, перейдите в{" "}
                      <mark className="select">
                        «Edit» → «Preferences» → «Scripting & Expressions»
                      </mark>{" "}
                      и установите флажок у параметра{" "}
                      <mark className="select">
                        «Allow Scripts to Write Files and Access Network»
                      </mark>
                      .
                    </li>
                    <li>
                      Иногда в архиве может быть уже распакованный{" "}
                      <mark className="file">ZXP</mark>. Это можно понять по наличию папок{" "}
                      <mark className="path">META-INF</mark> и{" "}
                      <mark className="path">CSXS</mark> внутри папки с названием
                      расширения.
                    </li>
                  </ul>
                </Addition>
                <ul>
                  <li>
                    <p>
                      Чтобы установить расширение через{" "}
                      <mark className="app">ZXP Installer</mark> — его нужно загрузить с{" "}
                      <a href="https://aescripts.com/learn/zxp-installer/">
                        официального сайта aescripts
                      </a>{" "}
                      и установить, следуя инструкциям. После установки утилиты откройте
                      его, а затем переместите файл <mark className="file">ZXP</mark>{" "}
                      прямо в окно <mark className="app">ZXP Installer</mark>. Затем
                      нажмите на <mark className="select">«Install»</mark> и дождитесь
                      окончания установки.
                    </p>
                    <Addition type="danger">
                      Пожалуйста, не используйте{" "}
                      <a href="https://zxpinstaller.com/">ZXP Installer</a> от{" "}
                      <mark className="company">ELEMENTS Storage Media</mark>, если вы
                      используете версии программ от
                      <mark className="company">Adobe</mark>, которые отвязаны от
                      приложения <mark className="app">Adobe Creative Cloud</mark>. Этот{" "}
                      <a href="https://zxpinstaller.com/">ZXP Installer</a> будет выдавать
                      вам ошибку <mark className="danger">-193</mark> до тех пор, пока вы
                      не установите <mark className="app">Adobe Creative Cloud</mark>, а
                      он, в свою очередь, может повредить уже установленные программы.
                    </Addition>
                  </li>
                  <li>
                    <p>
                      Если вы не хотите использовать сторонние программы для установки
                      расширений, выполните следующие шаги.
                    </p>
                    <ul>
                      <li>
                        <p>
                          Переименуйте файл <mark className="file">ZXP</mark> в{" "}
                          <mark className="file">ZIP</mark> и распакуйте его как обычный
                          архив.
                        </p>
                        <Addition type="info">
                          Прежде чем менять расширение файла, убедитесь, что в{" "}
                          <mark className="app">Проводнике</mark> включено{" "}
                          <a href="https://remontka.pro/show-file-extensions-windows-11/">
                            отображение расширений файлов
                          </a>
                          .
                        </Addition>
                      </li>
                      <li>
                        <p>
                          Переместите содержимое распакованного архива в папку{" "}
                          <mark className="path">
                            C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
                          </mark>
                          .
                        </p>
                        <Addition type="info">
                          Если папка отсутствует — создайте её вручную через контекстное
                          меню проводника или с помощью команды{" "}
                          <mark className="code">
                            mkdir &quot;C:\Program Files (x86)\Common
                            Files\Adobe\CEP\extensions&quot;
                          </mark>
                          .
                        </Addition>
                      </li>
                      <li>
                        <p>
                          Скачайте и запустите, подтвердив слияние с реестром,{" "}
                          <a
                            download
                            href="files/Enable Extensions Adobe.reg"
                          >
                            файл реестра
                          </a>
                          , включающий debug-режим для{" "}
                          <mark className="app">Adobe Premiere</mark>. Это необходимо,
                          чтобы установленные вручную расширения запускались корректно.
                        </p>
                        <Addition type="info">
                          <ul>
                            <li>
                              Этот файл достаточно применить один раз — при последующих
                              установках повторять это действие не придётся.
                            </li>
                            <li>
                              Если вы пропустите этот шаг, расширения будут отображаться в
                              списке, но не откроются при запуске.
                            </li>
                          </ul>
                        </Addition>
                      </li>
                    </ul>
                  </li>
                </ul>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="vst"
                title="Аудиоплагины (VST, VST3)"
              >
                <p>
                  Аудиоплагины формата <mark className="file">VST</mark> или{" "}
                  <mark className="file">VST3</mark> можно устанавливать в любом месте
                  системы, однако рекомендуется хранить их в общей папке:{" "}
                  <mark className="path">C:\Program Files\Common Files\VST</mark> — для{" "}
                  <mark className="file">VST</mark> или{" "}
                  <mark className="path">C:\Program Files\Common Files\VST3</mark> — для{" "}
                  <mark className="file">VST3</mark>. Иногда плагины распространяются в
                  виде установщиков и автоматически распаковываются в нужные каталоги.
                </p>
                <p>
                  Однако сами по себе эти плагины в программе не появятся.{" "}
                  <mark className="app">Adobe Premiere</mark> не ищет их автоматически при
                  запуске, поэтому сканирование нужно запускать вручную. Чтобы
                  просканировать аудиоплагины, перейдите в{" "}
                  <mark className="select">«Edit» → «Preferences» → «Audio»</mark> и
                  нажмите кнопку <mark className="select">«Manage Audio Plug-Ins»</mark>.
                  В открывшемся окне выберите{" "}
                  <mark className="select">«Scan for Plug-Ins»</mark>, чтобы программа
                  обнаружила плагины, установленные в системе.
                </p>
                <ArticleMedia
                  caption="Сканируем VST-плагины"
                  src="legacy/premierepro/install_vst3.mp4"
                  type="video"
                />
                <p>
                  При необходимости можно добавить собственную папку с плагинами с помощью
                  кнопки <mark className="select">«Add»</mark> в разделе{" "}
                  <mark className="select">«VST Plug-In Folders»</mark>, если
                  автоматический поиск не нашёл нужные файлы.
                </p>
                <p>
                  После сканирования плагины появятся в списке установленных, и вы сможете
                  использовать их в <mark className="select">«Track Mixer»</mark> или
                  других разделах программы.
                </p>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="lut"
                title="Файлы для цветокоррекции (CUBE, ITX, LOOK, LUT, RGB, LS3, MBLOOK)"
              >
                <ul>
                  <li>
                    <p>
                      Файлы для цветокоррекции форматов <mark className="file">CUBE</mark>
                      , <mark className="file">ITX</mark>,{" "}
                      <mark className="file">LOOK</mark> или{" "}
                      <mark className="file">LUT</mark> распаковываются в{" "}
                      <mark className="path">
                        C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Support
                        Files\Lumetri\LUTs\
                      </mark>
                      . Файлы для цветокоррекции можно будет использовать в эффекте{" "}
                      <mark className="plugin">Lumetri Color</mark>. В этой директории
                      есть три папки: <mark className="path">Technical</mark>,{" "}
                      <mark className="path">Creative</mark> и{" "}
                      <mark className="path">Legacy</mark>.
                    </p>
                    <ul>
                      <li>
                        Если вы распакуете файлы в <mark className="path">Technical</mark>
                        , где обычно располагаются входные{" "}
                        <mark className="file">LUT</mark> (например, для преобразования
                        цветовых пространств), то они появятся в параметре{" "}
                        <mark className="select">«Input LUT»</mark> во вкладке{" "}
                        <mark className="select">«Basic Correction»</mark>.
                      </li>
                      <li>
                        Если вы распакуете файлы в <mark className="path">Creative</mark>,
                        где располагаются файлы для стилизации изображения после базовой
                        цветокоррекции, то они появятся в параметре{" "}
                        <mark className="select">«Look»</mark> во вкладке{" "}
                        <mark className="select">«Creative»</mark>.
                      </li>
                      <li>
                        В <mark className="path">Legacy</mark> находятся устаревшие файлы
                        для цветокоррекции для совместимости со старыми проектами в{" "}
                        <mark className="app">Adobe Premiere</mark> и в последних версиях
                        программы не используются. При необходимости вы можете скопировать
                        нужные файлы цветокоррекции из неё в{" "}
                        <mark className="path">Creative</mark> или{" "}
                        <mark className="path">Technical</mark>.
                      </li>
                    </ul>
                    <Addition type="info">
                      <ul>
                        <li>
                          Чтобы открыть панель Lumetri Color, перейдите в{" "}
                          <mark className="select">«Window»</mark> и выберите{" "}
                          <mark className="select">«Lumetri Color»</mark>.
                        </li>
                        <li>
                          Если вы хотите использовать файл для цветокоррекции один раз,
                          выберите в <mark className="select">«Input LUT»</mark> или{" "}
                          <mark className="select">«Look»</mark> значение{" "}
                          <mark className="select">«Browse»</mark> и выберите нужный файл.
                        </li>
                      </ul>
                    </Addition>
                    <ArticleMedia
                      src="yrrW-V8bO_I"
                      type="youtube"
                    />
                  </li>
                  <li>
                    <p>
                      Файлы для цветокоррекции форматов <mark className="file">RGX</mark>,{" "}
                      <mark className="file">LS3</mark> или{" "}
                      <mark className="file">MBLOOK</mark> устанавливаются с помощью
                      кнопки импорта во вкладке <mark className="select">«Looks»</mark>{" "}
                      стороннего расширения{" "}
                      <mark className="plugin">Magic Bullet Looks</mark>.
                    </p>
                    <ArticleMedia
                      caption="Magic Bullet Looks"
                      src="legacy/import_magic_bullet_looks.png"
                      type="image"
                    />
                  </li>
                </ul>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="font"
                title="Шрифты (TTF, OTF)"
              >
                <p>
                  Шрифты форматов <mark className="file">TTF</mark> или{" "}
                  <mark className="file">OTF</mark> устанавливаются стандартными
                  средствами операционной системы. Установленные шрифты будут отображаться
                  во всех программах, поддерживающие сторонние шрифты, в том числе и в{" "}
                  <mark className="app">Adobe Premiere</mark>. Это можно сделать
                  несколькими способами.
                </p>
                <ul>
                  <li>
                    Откройте файл шрифта двойным щелчком и в открывшемся окне нажмите
                    кнопку <mark className="select">«Установить»</mark> в левом верхнем
                    углу.
                  </li>
                  <li>
                    Если у вас есть целый набор шрифтов и вы не хотите открывать каждый
                    файл по отдельности, просто распакуйте архив со шрифтами в любую
                    папку. После этого выделите нужные шрифты, нажмите{" "}
                    <mark className="key">ПКМ</mark> и выберите в контекстном меню{" "}
                    <mark className="select">«Установить»</mark> или{" "}
                    <mark className="select">«Установить для всех пользователей»</mark>.
                  </li>
                  <li>
                    <p>
                      Распакуйте файлы шрифтов в{" "}
                      <mark className="path">C:\Windows\Fonts</mark>. Это позволит
                      установить шрифты для всех пользователей системы.
                    </p>
                    <Addition type="info">
                      Если у вас нет прав администратора, вы можете распаковать файлы
                      шрифтов в папку{" "}
                      <mark className="path">%LOCALAPPDATA%\Microsoft\Windows\Fonts</mark>
                      . В таком случае шрифты будут установлены только для вашей учётной
                      записи.
                    </Addition>
                  </li>
                  <li>
                    Используйте сторонний менеджер для установки, организации и активации
                    нужных шрифтов, например{" "}
                    <mark className="app">Corel Font Manager</mark>,{" "}
                    <mark className="app">FontExpert</mark> или{" "}
                    <mark className="app">FontBase</mark>.
                  </li>
                </ul>
              </NestedDetailsSummary>
            </>
          }
        />
        <Addition type="info">
          Если у вас остались вопросы или вы до сих пор сталкиваетесь с проблемами при
          установке — обратитесь к нам в{" "}
          <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-defender"
        tag="репак от кролика, выключить дефендер, отрубить антивирус, ложное срабатывание, хелпер, ошибка 24, вирусы, трояны, проверьте правильно ли указано имя и повторите попытку, windows не удается получить доступ к указанному устройству пути или файлу, возможно у вас нет нужных разрешений для доступа к этому объекту, некоторые файлы не были созданы, операция не была успешно завершена так как файл содержит вирус или потенциально нежелательную программу, обнаружены угрозы, куда-то пропадают файлы плагинов и программ, интеллектуальное управление приложениями заблокировало приложение которое может быть небезопасным, приложение заблокировано так как невозможно установить его автора, это не одно из известных нам приложений, приложение может украсть или повредить ваши персональные данные и зашифровать их чтобы вы не могли получить к ним доступ или использовать ваше устройство для атаки на устройства других людей, это приложение частично заблокировано, некоторые функции могут не работать поскольку не удалось подтвердить издателя файла который это приложение попыталось загрузить, угроза помещена в карантин, файлы в карантине находятся в изолированной области где они не могут нанести вред устройству, они будут удалены автоматически, эти угрозы или приложение удалены из карантина либо восстановлены на устройстве, угроза удалена или восстановлена, это приложение заблокировано, эта опасная программа выполняет команды злоумышленника, operation did not complete successfully because the file contains a virus or potentially unwanted software, windows cannot find helper.exe, make sure you typed the name correctly and then try again, 0x800700E1"
        title="«Не удаётся найти „..\install\helper.exe“» или как отключить Windows Defender и Windows SmartScreen?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                При установке «народного» программного обеспечения ваш антивирус может
                сработать на модифицированные файлы, удалить их и пометить как{" "}
                <mark className="warning">«HackTool:Win32/Crack!MTB»</mark>,{" "}
                <mark className="warning">«Contrebrew.A!ml»</mark>,{" "}
                <mark className="warning">«Trojan:Win32/Adload!rfn»</mark>,{" "}
                <mark className="warning">«Adware»</mark> или даже якобы «троян» и
                «опаснейший вирус». Например, ошибка{" "}
                <mark className="danger">«helper.exe не найден»</mark> в репаках от{" "}
                <mark className="user">KpoJIuK</mark> возникает именно потому, что
                антивирус удаляет этот файл, считая его угрозой из-за чекбокса для
                установки рекламного ПО, который можно убрать перед установкой.
              </p>
              <p>
                Поэтому, если вы доверяете <a href="#where-to-download">источникам</a>,
                откуда скачали файлы, паниковать не нужно. Просто временно или полностью
                отключите антивирус, чтобы избежать проблем при установке. Это касается не
                только репаков, но и плагинов, и других файлов из интернета — даже если
                они абсолютно безопасны.{" "}
                <em className="article-note-muted">
                  А если не доверяете, не предъявляйте администраторам претензии без
                  подтверждённых фактов и используйте лицензионные версии.
                </em>
              </p>
              <p>
                В этой статье в качестве примера{" "}
                <mark className="app">антивирусного ПО</mark> будет выступать стандартный{" "}
                <mark className="app">Windows Defender</mark>, поставляемый в операционную
                систему «из коробки», так как именно он чаще всего и «вставляет палки в
                колёса».
              </p>
              <Addition type="info">
                Способы отключения и удаления{" "}
                <mark className="app">Windows Defender</mark>, описанные в этой статье,
                могут отличаться в зависимости от вашей установленной версии Windows.
              </Addition>
              <Divider>Отключаем Windows Defender на время</Divider>
              <p>
                Если вы готовы взять на себя риски, связанные с установкой программного
                обеспечения неофициальными способами, то для нормальной установки
                программ, плагинов или другого содержимого необходимо временно отключить
                встроенный антивирус <mark className="app">Windows Defender</mark> или
                любой другой, установленный на вашем устройстве. Обычно для этого хватает
                отключения <mark className="select">«Защиты в реальном времени»</mark>.
              </p>
              <Addition type="warning">
                <mark className="select">«Защита в реальном времени»</mark> в последних
                сборках Windows имеет нездоровое свойство самостоятельно включаться спустя
                несколько секунд. Не стесняйтесь отключать её заново.
              </Addition>
              <ArticleMedia
                src="blwRAOQUjsM"
                type="youtube"
              />
              <Divider>Вносим исключения для Windows Defender</Divider>
              <p>
                Если вы не хотите отключать <mark className="app">Windows Defender</mark>{" "}
                или <mark className="select">«Защита в реальном времени»</mark> включается
                раньше, чем вы успеваете запустить установщик — попробуйте добавить папки{" "}
                <mark className="path">C:\Program Files\Adobe</mark>, папку с загруженными
                файлами и <mark className="path">%TEMP%</mark> в исключения антивируса.
                После настройки повторите процесс установки программы.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Если директория <mark className="path">C:\Program Files\Adobe</mark>{" "}
                    отсутствует, создайте её самостоятельно.
                  </li>
                  <li>
                    После завершения установки исключения можно убрать, но рекомендуется
                    оставить в списке хотя бы{" "}
                    <mark className="path">C:\Program Files\Adobe</mark>, чтобы антивирус
                    не повредил файлы приложения.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                src="ET94_dv3f8c"
                type="youtube"
              />
              <p>
                Также вы можете воспользоваться сторонними утилитами для управлениями
                исключений в <mark className="app">Windows Defender</mark>.
              </p>
              <div className="flexible-links">
                <a href="https://www.sordum.org/10636/defender-exclusion-tool-v1-4/">
                  Defender Exclusion Tool
                </a>
              </div>
              <Divider>Убираем «палки в колёсах» от Windows SmartScreen</Divider>
              <p>
                В последних сборках Windows 11 компания{" "}
                <mark className="company">Microsoft</mark>{" "}
                <del>усилила меры безопасности</del> добавила пользователям проблем,
                внедрив расширенный анализ исполняемых файлов через функцию{" "}
                <mark className="select">«Интеллектуальное управление приложениями»</mark>
                . Она дополняет работу фильтра{" "}
                <mark className="app">Windows SmartScreen</mark>. Из-за этого при запуске
                репаков или сторонних установщиков система может заблокировать файл
                сообщением{" "}
                <mark className="select">
                  «„Интеллектуальное управление приложениями” заблокировало приложение,
                  которое может быть небезопасным»
                </mark>
                .
              </p>
              <p>
                Чтобы отключить эту защиту, перейдите в настройки{" "}
                <mark className="app">Защитника Windows</mark>, откройте раздел{" "}
                <mark className="select">
                  «Управление приложениями и браузером» → «Параметры интеллектуального
                  управления приложениями»
                </mark>{" "}
                и выберите <mark className="select">«Выключить»</mark>
                <sup>1</sup>. После этого препятствий для запуска программ возникнуть не
                должно, особенно если вы уже отключили{" "}
                <mark className="select">«Защиту в реальном времени»</mark>.
              </p>
              <Addition type="info">
                <p>
                  <sup>1</sup> Несмотря на предупреждение о том, что эту функцию нельзя
                  вернуть без полной переустановки Windows на некоторых сборках, на
                  базовую защиту <mark className="app">Windows Defender</mark> её
                  отключение не влияет.{" "}
                  <em className="article-note-muted">
                    Заодно избавитесь от лишних фильтров.
                  </em>
                </p>
                <p>
                  В последних версиях Windows 11 эту функцию можно включить обратно без
                  переустановки системы.
                </p>
              </Addition>
              <ArticleMedia
                caption="Отключаем «Интеллектуальное управление приложениями»"
                src="legacy/disable_advanced_smartscreen.mp4"
                type="video"
              />
              <p>
                В Windows 10 этот фильтр работает аналогично: при запуске файла всплывает
                окно{" "}
                <mark className="select">«Система Windows защитила ваш компьютер»</mark>.
                Так <mark className="app">Windows SmartScreen</mark> реагирует на файлы,
                которые кажутся ему подозрительными.
              </p>
              <p>
                Чтобы запустить такой файл, нажмите{" "}
                <mark className="select">«Подробнее»</mark> в нижней части окна, а затем —{" "}
                <mark className="select">«Выполнить в любом случае»</mark>.
              </p>
              <Addition type="warning">
                Иногда фильтр может остановить вас окном{" "}
                <mark className="select">«Вредоносный файл»</mark>. Обычно это решается
                установкой чекбокса <mark className="select">«Разблокировать»</mark> в
                свойствах файла возле{" "}
                <mark className="select">
                  «Этот файл получен с другого компьютера и, возможно, был заблокирован с
                  целью защиты компьютера»
                </mark>
                .
              </Addition>
              <p>
                Если после нажатия на <mark className="select">«Подробнее»</mark> кнопка
                запуска не появилась — полностью отключите фильтр в параметрах{" "}
                <mark className="app">Защитника Windows</mark>.
              </p>
              <ArticleMedia
                src="HxlxS1Mdyp0"
                type="youtube"
              />
              <Divider>Или удаляем Windows Defender с «корнями»</Divider>
              <p>
                Если добавление исключений не помогло, вас раздражают ложные срабатывания
                или вы хотите полностью отключить{" "}
                <mark className="app">Windows Defender</mark> — попробуйте нашу утилиту{" "}
                <mark className="app">Defender Grounder</mark>. Она отключает{" "}
                <mark className="app">Windows Defender</mark> и{" "}
                <mark className="app">Windows SmartScreen</mark> с помощью записи
                параметров в реестр, не удаляя файлы антивирусной защиты, а также
                добавляет в исключения все доступные в системе диски целиком. После
                установки необходимых программ защиту можно включить обратно через эту же
                утилиту.
              </p>
              <div className="flexible-links">
                <a
                  download
                  href="files/Defender Grounder.bat"
                >
                  Defender Grounder
                </a>
              </div>
              <p>
                Если <mark className="app">Defender Grounder</mark> не помог вам в
                отключении стандартной защиты — попробуйте воспользоваться утилитами из
                списка ниже. Некоторые из них удаляют полностью антивирусное решение от{" "}
                <mark className="company">Microsoft</mark>.
              </p>
              <div className="flexible-links">
                <a href="https://win10tweaker.ru/forum/topic/defenderkiller">
                  DefenderKiller
                </a>
                <a href="https://github.com/ionuttbara/windows-defender-remover/releases">
                  Defender Remover
                </a>
                <a href="https://winaero.com/disable-or-enable-windows-defender-in-windows-10#Disable_Microsoft_Defender_with_Winaero_Tweaker">
                  Winaero Tweaker
                </a>
                <a href="https://www.sordum.org/9480/defender-control-v2-1/">
                  Defender Control
                </a>
              </div>
              <Addition type="danger">
                <p>
                  Полное удаление или отключение{" "}
                  <mark className="app">Windows Defender</mark> рекомендуется только
                  опытным пользователям Windows, которые полностью осознают возможные
                  последствия и используют альтернативные средства защиты — например
                  собственную бдительность, сторонние антивирусы или регулярное резервное
                  копирование данных.
                </p>
                <p>
                  Если вы не слишком уверенный пользователь и не уверены в своих
                  действиях, лучше ограничиться временным отключением антивируса
                  самостоятельно через интерфейс{" "}
                  <mark className="app">Windows Defender</mark> или добавлением нужных
                  файлов и папок в исключения.
                </p>
              </Addition>
              <Addition type="warning">
                Удалённый <mark className="app">Windows Defender</mark> может вернуться
                после установки крупного обновления, например при переходе с Windows 11
                24H2 на Windows 11 25H2. Чтобы от него избавиться, просто повторите
                процесс удаления.
              </Addition>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="non-stock-installation-path-problems"
        tag="символьные ссылки, symlink, нет места на диске, нестандартный путь установки, проблемы с плагинами, installation path, some products require host applications which are not installed on this computer"
        title="Почему из каждого угла советуют не менять путь для установки программы?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                Часто в различных чатах, в том числе в{" "}
                <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>, пользователи
                сталкиваются с одной и той же проблемой: нужное дополнение не появляется в
                программе, хотя установка выполнена строго по{" "}
                <a href="#how-to-install">инструкциям</a>. Причина почти всегда одна:{" "}
                <mark className="app">Adobe Premiere</mark> установлен в нестандартную
                директорию.
              </p>
              <p>
                Дело в том, что большинство инсталляторов, такие как{" "}
                <mark className="plugin">Red Giant</mark>,{" "}
                <mark className="plugin">Universe</mark> или{" "}
                <mark className="plugin">FX Console</mark>, «тупо» ищут стандартные пути
                вроде <mark className="path">C:\Program Files\Adobe</mark> и не пытаются
                найти программу в другом месте. В итоге установщик либо выдаёт ошибку,
                будто <mark className="app">Adobe Premiere</mark> не найден, либо, что ещё
                хуже, ставит плагины для другой программы. Например, найдя{" "}
                <mark className="app">DaVinci Resolve</mark> по стандартному пути, он
                установит <mark className="term">OFX</mark>-версию плагина для него, а ваш{" "}
                <mark className="app">Adobe Premiere</mark> останется ни с чем.
              </p>
              <p>
                Но проблемы не заканчиваются на сторонних дополнениях: это может сломать
                связь и между самими программами <mark className="company">Adobe</mark>.
                Например, если <mark className="app">Adobe Premiere</mark> и{" "}
                <mark className="app">Adobe Media Encoder</mark> установлены в разные
                нестандартные директории, то <mark className="app">Adobe Premiere</mark>{" "}
                не сможет отправить секвенцию на рендер в{" "}
                <mark className="app">Adobe Media Encoder</mark>, сообщив, что программа
                не установлена.
              </p>
              <Divider>Предотвращаем проблему в будущем</Divider>
              <p>
                Чтобы избавиться от подобных проблем, нужно переустановить{" "}
                <mark className="app">Adobe Premiere</mark> «по-человечески» — то есть не
                менять местоположение программы при установке. Для этого достаточно
                удалить текущую версию с помощью{" "}
                <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>{" "}
                или любого другого деинсталлятора, например{" "}
                <mark className="app">Revo Uninstaller</mark>. При необходимости перед
                удалением можно скопировать папки <mark className="path">Plug-Ins</mark>,{" "}
                <mark className="path">Presets</mark> и{" "}
                <mark className="path">Scripts</mark> из установленной программы в удобное
                место — для резервного копирования и последующего восстановления файлов
                дополнений. Затем запустите установщик{" "}
                <mark className="app">Adobe Premiere</mark> и начните его установку, не
                меняя директорию установки программы.
              </p>
              <p>
                Но в качестве аргумента на вопрос{" "}
                <mark className="quote">
                  «А зачем вы, собственно, установили Premiere на другой раздел?»
                </mark>{" "}
                часто слышится{" "}
                <mark className="quote">
                  «А у меня на разделе, где установлена Windows, мало места!»
                </mark>
                , и пользователь, у которого проблемы с установкой плагинов, не хочет идти
                верным путём. Но и для таких случаев есть хорошие новости: в этой статье
                разберём, как навести порядок в Windows или корректно перенести программу
                на другой раздел — так, чтобы система считала её установленной в
                стандартной директории.
              </p>
              <Divider>Очищаем системный раздел от мусора</Divider>
              <p>
                Если вы согласны переустановить{" "}
                <mark className="app">Adobe Premiere</mark> на стандартный раздел, но у
                вас мало места — попробуйте почистить систему от разного хлама. Это можно
                сделать разными способами: стандартными средствами, сторонними программами
                или вручную, предварительно проанализировав всю систему. После очистки
                системы от мусора начните процесс переустановки{" "}
                <mark className="app">Adobe Premiere</mark> в стандартное место и
                наслаждайтесь корректной работой сторонних плагинов.
              </p>
              <ul>
                <li>
                  Систему от мусора стандартными средствами можно почистить с помощью
                  служебной программы <mark className="code">cleanmgr.exe</mark>, которую
                  можно открыть из окна <mark className="app">«Выполнить»</mark>. В ней
                  вам нужно указать нужный раздел с системой и нажать{" "}
                  <mark className="select">«ОК»</mark>. Эта утилита проанализирует систему
                  на наличие накопившихся обновлений Windows, старых точек восстановления
                  и хлама, который можно выборочно удалить.
                </li>
                <li>
                  <p>
                    Автоматически почистить систему от мусора можно и с помощью сторонних
                    программ, таких как <mark className="app">Auslogics BoostSpeed</mark>,{" "}
                    <mark className="app">Reg Organizer</mark>,{" "}
                    <mark className="app">Dism++</mark>,{" "}
                    <mark className="app">Kerish Doctor</mark> или{" "}
                    <mark className="app">CCleaner</mark>.
                  </p>
                  <Addition type="warning">
                    Используйте подобные утилиты с осторожностью, иначе рискуете удалить
                    важные файлы. Эти утилиты предназначены для более продвинутых
                    пользователей, которые понимают, что делают.
                  </Addition>
                </li>
                <li>
                  Если вы хотите проанализировать ваш системный раздел и посмотреть, какая
                  директория занимает слишком много места, вам помогут программы вроде{" "}
                  <mark className="app">WizTree</mark>,{" "}
                  <mark className="app">WinDirStat</mark> или{" "}
                  <mark className="app">JDiskReport</mark>. С их помощью вы можете
                  просканировать все директории, узнать размер каждой папки или файла и
                  при необходимости удалить ненужное.
                </li>
              </ul>
              <Divider>Сжимаем пространство на диске</Divider>
              <p>
                В Windows есть функция сжатия операционной системы или целого раздела. Она
                может помочь в тех случаях, когда в вашем устройстве установлен накопитель
                со слишком малым объёмом памяти, и его не хватает даже для базовых
                программ и утилит. Этой функцией можно воспользоваться с помощью{" "}
                <mark className="app">командной строки Windows</mark> или{" "}
                <mark className="app">PowerShell</mark>.
              </p>
              <Addition type="danger">
                Используйте функцию сжатия файлов с осторожностью и только если у вашего
                устройства имеется производительный процессор и быстрый накопитель.
                Использование <mark className="term">NTFS-сжатия</mark> на медленном
                накопителе может привести к замедлению работы системы в целом.
              </Addition>
              <ul>
                <li>
                  <p>
                    Чтобы сжать только операционную систему, воспользуйтесь командой{" "}
                    <mark className="code">compact /compactos:always</mark> и дождитесь
                    окончания операции. Обычно сжатие системы освобождает примерно 3–5 ГБ
                    дискового пространства, которое можно занять установкой{" "}
                    <mark className="app">Adobe Premiere</mark>.
                  </p>
                  <Addition type="info">
                    Текущее состояние сжатия Windows можно узнать с помощью команды{" "}
                    <mark className="code">compact /compactos:query</mark>.
                  </Addition>
                </li>
                <li>
                  <p>
                    Чтобы сжать нужный раздел, воспользуйтесь командой{" "}
                    <mark className="code">compact /s /c /a /i /f /exe:lzx</mark>,
                    предварительно перейдя в нужный раздел с помощью команды{" "}
                    <mark className="code">cd</mark>.
                  </p>
                  <Addition type="warning">
                    Если вы начнёте сжатие в корневом каталоге, есть риск нарваться на
                    синий экран смерти. Вместо этого лучше перейдите в каждый раздел из
                    корневого каталога, а затем начните сжатие с помощью ранее упомянутой
                    команды. Она начнёт сжатие файлов в текущем и во вложенных каталогах.
                  </Addition>
                </li>
              </ul>
              <Divider>Разбираемся с дисковыми разделами</Divider>
              <p>
                Иногда при покупке нового ноутбука или устройства на Windows с рук на нём
                уже зачем-то размечен один диск на два раздела — системный и
                пользовательский, то есть поделён на <mark className="path">C:\</mark> и{" "}
                <mark className="path">D:\</mark>. Диск делят якобы для удобства, но на
                деле разделение одного диска на несколько может привести к снижению его
                производительности — особенно если диск один и на нём установлена
                операционная система. Также разделы часто делят в соотношении примерно
                30:70 (системный к пользовательскому), что нередко приводит к ситуациям,
                когда пользователь устанавливает программы не на стандартный раздел, а
                затем сталкивается с проблемами при установке дополнительных материалов.
              </p>
              <p>
                Если это ваш случай, я бы порекомендовал разобраться с текущими разделами
                и, по возможности, объединить их в один. Для просмотра разделов дисков вы
                можете воспользоваться стандартной утилитой{" "}
                <mark className="app">diskmgmt.msc</mark>, которую можно открыть через
                окно <mark className="app">«Выполнить»</mark> комбинацией{" "}
                <mark className="key">Win + R</mark>. Прежде чем объединять разделы,
                перенесите файлы из удаляемого раздела в другой — то есть из{" "}
                <mark className="path">D:\</mark> в <mark className="path">C:\</mark>, —
                затем удалите ненужный раздел и за счёт освободившегося места расширьте
                системный. Также можно воспользоваться сторонними утилитами, например{" "}
                <mark className="app">AOMEI Partition Assistant</mark>, где такие действия
                выполняются гораздо проще.
              </p>
              <Addition type="info">
                Подробнее про объединение разделов стандартными и сторонними средствами
                написано в статье на{" "}
                <a href="https://remontka.pro/merge-disk-partitions-windows/">
                  remontka.pro
                </a>
                .
              </Addition>
              <Divider>
                Переносим программы на другой раздел с помощью символьных ссылок
              </Divider>
              <Addition type="danger">
                Используйте функцию переноса программ с помощью символьных ссылок только в
                крайнем случае, когда у вас нет возможности разобраться с разделами или
                почистить систему от мусора. Стабильная работа программ при использовании
                символьных ссылок не гарантируется!
              </Addition>
              <p>
                Если вы действительно хотите перенести программы на другой раздел, можно
                воспользоваться механизмом символьных ссылок. С их помощью можно указать
                системе, что нужная директория находится в другом месте, но при этом всё
                будет выглядеть так, будто она по-прежнему расположена в стандартной
                папке.
              </p>
              <p>
                <mark className="word">Символьная ссылка</mark> или{" "}
                <mark className="word">Symlink</mark> — это специальный тип ярлыка на
                уровне файловой системы, который перенаправляет доступ к одному пути на
                другой. Обычно символьные ссылки применяют для переноса тяжёлых программ,
                кэшей, библиотек и других редко редактируемых данных на другой раздел или
                диск — например, если на <mark className="path">C:\</mark> заканчивается
                место, а <mark className="path">D:\</mark> пустой.
              </p>
              <Addition type="info">
                Если не хотите использовать командную строку — попробуйте инструменты с
                интерфейсом:{" "}
                <a href="https://github.com/arnobpl/SymlinkCreator">Symlink Creator</a>{" "}
                или{" "}
                <a href="https://sourceforge.net/projects/symlink-manager/">
                  Symlink Manager
                </a>
                .
              </Addition>
              <ArticleMedia
                src="VaupaCuluJA"
                type="youtube"
              />
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="install-adobe-errors-codes"
        tag="в настоящее время невозможно установить, операционная система не соответствует минимальным требованиям для этой программы установки"
        title="Код ошибки 1, 501, 176, 195, 21 или другие при установке Adobe Premiere"
      >
        <Divider>Исправляем ошибку 1 или 501</Divider>
        <p>
          Обычно ошибка 1 или 501 возникает из-за того, что у вас повреждено приложение{" "}
          <mark className="app">Adobe Creative Cloud</mark> или были некорректно удалены
          предыдущие программы от <mark className="company">Adobe</mark>, а потом вы
          установили «народные» версии программ. Чтобы это исправить — попробуйте очистить
          остатки предыдущих установок с помощью{" "}
          <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
            Adobe Creative Cloud Cleaner Tool
          </a>{" "}
          или любого другого деинсталлятора, например{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </p>
        <Divider>Исправляем ошибку 176</Divider>
        <ContentFilter
          macContent={
            <>
              <p>
                Скорее всего, до установки более новых версий{" "}
                <mark className="app">Adobe Premiere</mark> вы пользовались другими
                программами <mark className="company">Adobe</mark>. Для решения проблемы
                попробуйте удалить папку{" "}
                <mark className="path">/Library/Application Support/Adobe/caps</mark>, а
                затем повторить попытку установки.
              </p>
            </>
          }
          windowsContent={
            <>
              <p>
                Скорее всего, до установки более новых версий{" "}
                <mark className="app">Adobe Premiere</mark> вы пользовались другими
                программами <mark className="company">Adobe</mark>. Для решения проблемы
                попробуйте удалить папку{" "}
                <mark className="path">
                  C:\Program Files (x86)\Common Files\Adobe\caps
                </mark>
                , а затем повторить попытку установки.
              </p>
            </>
          }
        />
        <Divider>
          Исправляем ошибку 195 —{" "}
          <mark className="warning">
            «Требуется процессор, поддерживающий инструкции Advanced Vector Extensions 2
            (AVX2)»
          </mark>
        </Divider>
        <p>
          Если вы столкнулись с этой ошибкой при установке программы — это означает, что
          ваш процессор не поддерживает инструкции <mark className="hardware">AVX2</mark>,
          необходимые для корректной работы последних версий{" "}
          <mark className="app">Adobe Premiere</mark>. Чтобы устранить проблему — обновите
          устройство или процессор на более современный либо установите более старую
          версию программы, например <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">23.6 (2023)</mark> или{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">24.0 (2024)</mark>.
        </p>
        <Divider>
          Исправляем ошибку 21 —{" "}
          <mark className="warning">
            «Операционная система не соответствует минимальным требованиям для этой
            программы установки»
          </mark>
        </Divider>
        <ContentFilter
          windowsContent={
            <>
              <p>
                Скорее всего, вы пытаетесь установить{" "}
                <mark className="app">Adobe Premiere Pro</mark>{" "}
                <mark className="version">24.X (2024)</mark> или выше на устаревшую сборку
                Windows. В таком случае есть только два решения.
              </p>
              <ul>
                <li>
                  <p>
                    Если планируете установить свежую версию{" "}
                    <mark className="app">Adobe Premiere</mark>, перейдите на Windows 11.
                    Систему можно обновить поверх предыдущей версии с помощью образа{" "}
                    <mark className="file">ISO</mark> — без потери данных, настроек и
                    приложений. В{" "}
                    <a href="https://helpx.adobe.com/premiere-pro/system-requirements.html">
                      системных требованиях Premiere
                    </a>{" "}
                    обычно указана минимальная версия операционной системы, необходимая
                    для корректного запуска программы.
                  </p>
                  <Addition type="info">
                    <ul>
                      <li>
                        Последняя версия, поддерживающая Windows 7 и Windows 8.1, —{" "}
                        <mark className="app">Adobe Premiere Pro</mark>{" "}
                        <mark className="version">16.X (2019)</mark>.
                      </li>
                      <li>
                        Последняя версия, поддерживающая Windows 10 LTSC 21H2, —{" "}
                        <mark className="app">Adobe Premiere Pro</mark>{" "}
                        <mark className="version">23.X (2023)</mark>.
                      </li>
                    </ul>
                  </Addition>
                  <p>
                    Проверить текущую сборку Windows можно с помощью команды{" "}
                    <mark className="app">winver</mark> в окне{" "}
                    <mark className="app">Выполнить</mark>, которое открывается
                    комбинацией клавиш <mark className="key">Win + R</mark>.
                  </p>
                  <div className="flexible-links">
                    <a href="https://www.microsoft.com/ru-ru/software-download/windows11">
                      Обновиться до Windows 11
                    </a>
                  </div>
                  <p>
                    Если загрузка с сайта <mark className="company">Microsoft</mark> не
                    работает или вам нужен образ <mark className="file">ISO</mark> для
                    записи на USB-накопитель — воспользуйтесь ссылками ниже.
                  </p>
                  <div className="flexible-links">
                    <a href="https://files.rg-adguard.net/category">
                      Скачать оригинальные файлы Microsoft на rg-adguard.net
                    </a>
                    <a href="https://www.comss.ru/download/page.php?id=2572">
                      Скачать оригинальные образы Windows 10 на Comss
                    </a>
                    <a href="https://www.comss.ru/download/page.php?id=9234">
                      Скачать оригинальные образы Windows 11 на Comss
                    </a>
                    <a href="https://nnmclub.to/forum/tracker.php?pid=10412851">
                      Сборки Windows от SanLex на NNM-Club
                    </a>
                  </div>
                </li>
                <li>
                  Если вы не желаете обновлять или переустанавливать систему, то можете
                  установить более старую версию{" "}
                  <mark className="app">Adobe Premiere Pro</mark>{" "}
                  <mark className="version">23.6 (2023)</mark> или{" "}
                  <mark className="app">Adobe Premiere Pro</mark>{" "}
                  <mark className="version">15.1 (2018)</mark>. В таком случае установка
                  пройдёт корректно.
                </li>
              </ul>
            </>
          }
        />
        <Addition type="info">
          Другие решения по кодам ошибок при установке вы можете найти на{" "}
          <a href="https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html">
            сайте Adobe
          </a>{" "}
          или на различных интернет-форумах.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="kpojiuk-corrupted-install-files"
        tag="репак от кролика, повреждённые файлы, ошибка установки, installation error, многотомный архив, проблемы при скачивании из telegram"
        title="«Некоторые установочные файлы были повреждены. Загрузите свежую копию и повторите установку»"
      >
        <p>
          Эта ошибка возникает, когда вы пытаетесь открыть установщик репака от{" "}
          <mark className="user">KpoJIuK</mark>, а он оказывается повреждённым и не может
          корректно распаковаться. Часто это происходит из-за некорректных действий
          пользователя или срабатывания антивирусной программы на вашем устройстве с{" "}
          Windows.
        </p>
        <Divider>Устраняем эту ошибку</Divider>
        <ul>
          <li>
            <p>
              Для начала убедитесь, что вы полностью скачали файл. Довольно часто
              веб-версия <mark className="app">Telegram</mark> загружает установочные
              файлы с ошибками.{" "}
              {(() => {
                const {isAndroid, isIOS, isMacOS} = getPlatformInfo();

                if (isIOS) {
                  return (
                    <>
                      Чтобы корректно скачивать подобные файлы, рекомендую использовать
                      официальное приложение <mark className="app">Telegram</mark> вместо
                      веб-версии, которое можно установить из{" "}
                      <a href="https://telegram.org/dl/ios">App Store</a>.
                    </>
                  );
                }

                if (isAndroid) {
                  return (
                    <>
                      Чтобы корректно скачивать подобные файлы, рекомендую использовать
                      официальное приложение <mark className="app">Telegram</mark> вместо
                      веб-версии, которое можно установить по{" "}
                      <a href="https://telegram.org/android">этой</a> ссылке.
                    </>
                  );
                }

                if (isMacOS) {
                  return (
                    <>
                      Чтобы корректно скачивать подобные файлы, рекомендую воспользоваться
                      десктопной версией <mark className="app">Telegram</mark> вместо
                      веб-версии, которую можно скачать по{" "}
                      <a href="https://macos.telegram.org/">этой</a> ссылке.
                    </>
                  );
                }

                return (
                  <>
                    Чтобы корректно скачивать подобные файлы, рекомендую воспользоваться
                    десктопной версией <mark className="app">Telegram</mark> вместо
                    веб-версии, которую можно скачать по{" "}
                    <a href="https://desktop.telegram.org/">этой</a> ссылке.
                  </>
                );
              })()}
            </p>
            <Addition type="info">
              Если вы полностью скачали файл из канала{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> и
              уверены, что проблема не на вашей стороне, — сообщите об этом в комментариях
              под постом.
            </Addition>
          </li>
          <li>
            <p>
              Если вы скачали репак, запакованный в многотомный архив — убедитесь, что вы
              скачали все части архива. Если хоть одна часть репака будет повреждена —
              архив может не открыться.
            </p>
            <Addition type="info">
              Чтобы распаковать такой архив, достаточно начать распаковку первой части —
              остальные подхватятся автоматически. Для распаковки таких архивов рекомендую
              воспользоваться <mark className="app">WinRAR</mark>.
            </Addition>
          </li>
          <li>
            Если архив не хочет нормально распаковываться через{" "}
            <mark className="app">7-Zip</mark> или другой архиватор, попробуйте
            распаковать его с помощью <mark className="app">WinRAR</mark> — обычно это
            решает проблему.
          </li>
          <li>
            Иногда корректному открытию инсталлятора может мешать антивирусное ПО, которое
            «вставляет палки в колёса», принимая за вирус файлы, распаковывающиеся во
            временную директорию. В таком случае{" "}
            <a href="#disable-defender">рекомендуется его отключить</a> — разумеется, на
            свой страх и риск.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="kpojiuk-the-hosts-file-does-not-exist-or-is-not-accessible"
        tag="репак от кролика, файл hosts, нет доступа"
        title="«rsload.net заблокирован в hosts» или «The hosts file does not exist or is not accessible»"
      >
        <p>
          Эта ошибка чаще всего возникает из-за того, что в вашей системе по какой-то
          причине отсутствует файл <mark className="file">HOSTS</mark>. Чтобы решить эту
          проблему — проверьте содержимое директории{" "}
          <mark className="path">%WINDIR%\System32\Drivers\etc</mark>. Если в нём нет
          файла <mark className="file">HOSTS</mark> — создайте его самостоятельно,
          например с помощью <mark className="app">Блокнота</mark>, и переместите
          созданный файл без расширения в эту папку.{" "}
          <a href="https://support.microsoft.com/ru-ru/topic/%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%82%D1%8C-%D1%81%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B8%D0%BC%D0%BE%D0%B5-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-hosts-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-c2a43f9d-e176-c6f3-e4ef-3500277a6dae">
            Подробнее на сайте Microsoft...
          </a>
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="kpojiuk-repack-adware"
        tag="репак от кролика, реклама, adware, нежелательные изменения"
        title="Забыл убрать галочку с рекламой при установке репака от KpoJIuK. Как избавиться от последствий?"
      >
        <p>
          По умолчанию в репаках от <mark className="user">KpoJIuK</mark> включена галочка{" "}
          <mark className="select">«Реклама»</mark>, поэтому можно случайно нарваться на
          установку ненужного <mark className="web">me.fo</mark> или{" "}
          <mark className="web">hi.ru</mark> в качестве стартовой страницы браузера или на
          установку <mark className="app">Яндекс.Браузера</mark>. К счастью, все эти
          нововведения можно удалить через <mark className="app">Панель управления</mark>{" "}
          или любым другим удобным для вас способом, например через{" "}
          <mark className="app">Revo Uninstaller</mark>.
        </p>
        <p>
          В следующий раз не забывайте убирать чекбокс{" "}
          <mark className="select">«Реклама»</mark> при установке репаков от{" "}
          <mark className="user">KpoJIuK</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="genp"
        tag="genp, активация, патч, активация приложений из creative cloud"
        title="Я не доверяю репакам, но установить программы от Adobe хочется. Какие есть ещё варианты?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                Если вы по каким-то причинам опасаетесь, что при установке репаков от{" "}
                <mark className="user">KpoJIuK</mark>,{" "}
                <mark className="user">m0nkrus</mark> или других релизеров на компьютер
                может попасть нежелательное ПО, вы можете активировать программы от{" "}
                <mark className="company">Adobe</mark> вручную с помощью утилиты{" "}
                <mark className="app">GenP</mark>.
              </p>
              <ul>
                <li>
                  Из плюсов — можно устанавливать и обновлять программы, загружать
                  бесплатные плагины напрямую из{" "}
                  <mark className="app">Adobe Creative Cloud</mark>, а также ставить
                  публичные бета-версии, чтобы опробовать нововведения до того, как они
                  появятся в стабильном релизе.
                </li>
                <li>
                  Из минусов — возможные проблемы с{" "}
                  <mark className="plugin">Dynamic Link</mark>, когда{" "}
                  <mark className="app">Adobe After Effects</mark> и{" "}
                  <mark className="app">Adobe Premiere</mark> не «видят» друг друга. Патч
                  также может перестать работать после обновлений приложений от{" "}
                  <mark className="company">Adobe</mark>, и придётся искать новую версию{" "}
                  <mark className="app">GenP</mark>. Функции, использующие генерацию
                  контента на базе <mark className="app">Adobe Firefly</mark>, тоже
                  недоступны — как и в других «народных» версиях.
                </li>
              </ul>
              <Addition type="warning">
                <ul>
                  <li>
                    Если вы хотите «переехать» с репаков или у вас уже установлены
                    какие-то приложения от <mark className="company">Adobe</mark>, перед
                    активацией через <mark className="app">GenP</mark> лучше удалить их, а
                    также почистить записи в брандмауэре и файле{" "}
                    <mark className="file">HOSTS</mark> во избежание конфликтов. Сделать
                    это можно с помощью{" "}
                    <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                      Adobe Creative Cloud Cleaner Tool
                    </a>{" "}
                    или любого другого деинсталлятора, например{" "}
                    <mark className="app">Revo Uninstaller</mark>.
                  </li>
                  <li>
                    Во избежание проблем во время работы <mark className="app">GenP</mark>{" "}
                    рекомендуется <a href="#disable-defender">отключить</a>{" "}
                    <mark className="app">антивирусное ПО</mark>, установленное на вашем
                    устройстве.
                  </li>
                </ul>
              </Addition>
              <Addition type="info">
                Действия, описанные в этой статье, могут немного отличаться в зависимости
                от версии <mark className="app">Adobe Creative Cloud</mark> и{" "}
                <mark className="app">GenP</mark>.
              </Addition>
              <Divider>
                Устанавливаем и разбираемся с{" "}
                <mark className="app">Adobe Creative Cloud</mark>
              </Divider>
              <ul>
                <li>
                  <p>
                    Прежде чем искать и применять <mark className="app">GenP</mark>, нужно
                    скачать <mark className="app">Adobe Creative Cloud</mark> с{" "}
                    <a href="https://www.adobe.com/download/creative-cloud">
                      официального сайта
                    </a>{" "}
                    и установить его как обычную программу. При установке войдите в свой
                    аккаунт <mark className="company">Adobe</mark> или создайте новый.
                  </p>
                  <Addition type="warning">
                    Не устанавливайте флажок напротив параметра{" "}
                    <mark className="select">
                      «Установите службу Adobe Genuine Service (AGS)»
                    </mark>
                    : его установка, наоборот, усугубит ситуацию с активацией программ от{" "}
                    <mark className="company">Adobe</mark>.
                  </Addition>
                  <ArticleMedia
                    caption="Установка Adobe Creative Cloud"
                    src="legacy/creative_cloud_install.mp4"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    После успешной установки{" "}
                    <mark className="app">Adobe Creative Cloud</mark> перед вами появится
                    главное меню, но скачивать оттуда приложения пока рано: сам{" "}
                    <mark className="app">Adobe Creative Cloud</mark> ещё не пропатчен для
                    корректной установки программ. Иначе вам предложат оформить пробную
                    версию, которая нам не подходит.
                  </p>
                  <ArticleMedia
                    caption="Adobe Creative Cloud"
                    src="legacy/creative_cloud_main_menu.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    После входа в <mark className="app">Adobe Creative Cloud</mark> сразу
                    же отключите его автозапуск и автоматические обновления, чтобы
                    избежать сюрпризов в дальнейшем.
                  </p>
                  <p>
                    Для этого нажмите на изображение профиля в правом верхнем углу и
                    выберите <mark className="select">«Установки»</mark>. В открывшемся
                    окне отключите три параметра, связанные с автозапуском и
                    автообновлением, в разделе <mark className="select">«Общие»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Adobe Creative Cloud"
                    src="legacy/creative_cloud_open_settings.mp4"
                    type="video"
                  />
                  <Addition type="info">
                    При желании вы можете установить английский язык для новых приложений
                    по умолчанию — это настраивается в разделе{" "}
                    <mark className="select">«Приложения»</mark>. Также можно изменить
                    язык <mark className="app">Adobe Premiere</mark>{" "}
                    <a href="#switch-language">вручную</a> уже после установки.
                  </Addition>
                </li>
                <li>
                  После внесения нужных изменений обязательно полностью закройте{" "}
                  <mark className="app">Adobe Creative Cloud</mark> перед запуском{" "}
                  <mark className="app">GenP</mark>.
                </li>
              </ul>
              <Divider>
                Разбираемся с <mark className="app">GenP</mark>
              </Divider>
              <ul>
                <li>
                  <p>
                    Далее нужно скачать сам <mark className="app">GenP</mark> с сайта{" "}
                    <a href="https://gen.paramore.su/#downloads">gen.paramore.su</a>. На
                    сайте есть три варианта: загрузить готовый образ{" "}
                    <mark className="app">GenP</mark> для быстрого запуска, скачать
                    исходники с утилитами для самостоятельной сборки или воспользоваться{" "}
                    <mark className="file">TORRENT</mark>-файлом.
                  </p>
                  <Addition type="info">
                    Ранее <mark className="app">GenP</mark> распространялся через{" "}
                    <mark className="web">Reddit</mark>, однако сабреддит{" "}
                    <mark className="copy">r/genp</mark> был заблокирован за нарушение
                    авторских прав.
                  </Addition>
                  <Addition type="warning">
                    Авторы оригинального <mark className="app">GenP</mark> прекратили
                    поддержку своего продукта и больше обновляться не будет. Несмотря на
                    открытый код данной утилиты, его форки от других пользователей могут
                    быть небезопасными или неработоспособыми.
                  </Addition>
                  <p>
                    Поскольку основная аудитория программ от{" "}
                    <mark className="company">Adobe</mark>, как правило, не хочет
                    разбираться с ручной компиляцией патчера, выберем вариант{" "}
                    <mark className="select">«Binary»</mark>. После этого начнётся
                    скачивание архива.
                  </p>
                  <ArticleMedia
                    caption="Скачивание GenP"
                    src="legacy/download_genp.mp4"
                    type="video"
                  />
                  <Addition type="info">
                    Если ваш браузер выдаёт предупреждение о вирусе в скачиваемом файле —
                    разрешите загрузку вручную или уберите из имени файла расширение,
                    добавленное браузером.
                  </Addition>
                </li>
                <li>
                  <p>
                    После загрузки распакуйте архив и запустите файл{" "}
                    <mark className="app">GenP-vX.Y.Z.exe</mark>.
                  </p>
                  <p>
                    В открывшемся окне <mark className="app">GenP</mark> нажмите{" "}
                    <mark className="select">«Search»</mark>, чтобы найти{" "}
                    <mark className="app">Adobe Creative Cloud</mark>, а затем —{" "}
                    <mark className="select">«Patch»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Применение патча для Adobe Creative Cloud"
                    src="legacy/apply_genp_first_patch.mp4"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    После применения первого патча можно устанавливать приложения из{" "}
                    <mark className="app">Adobe Creative Cloud</mark>.
                  </p>
                  <ArticleMedia
                    caption="Установка приложений в Adobe Creative Cloud"
                    src="legacy/creative_cloud_install_apps.mp4"
                    type="video"
                  />
                  <Addition type="warning">
                    По умолчанию <mark className="app">Adobe Creative Cloud</mark>{" "}
                    устанавливает приложения на языке, на котором локализована ваша
                    операционная система. Вы можете изменить язык программ{" "}
                    <a href="https://helpx.adobe.com/creative-cloud/apps/manage-apps/creative-cloud-apps/change-language-for-creative-cloud-apps.html">
                      перед установкой
                    </a>{" "}
                    или поменять его для <mark className="app">Adobe After Effects</mark>{" "}
                    уже <a href="#switch-language">после установки</a>.
                  </Addition>
                </li>
                <li>
                  После установки нужных вам приложений снова откройте{" "}
                  <mark className="app">GenP</mark>, запустите поиск кнопкой{" "}
                  <mark className="select">«Search»</mark> и ещё раз примените патч через{" "}
                  <mark className="select">«Patch»</mark> — на этот раз уже для
                  установленных программ. После этого ими можно пользоваться.
                </li>
              </ul>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="speech-to-text-not-working"
        tag="бесконечная загрузка, голос в субтитры, транскрибация, распознавание речи в текст, captions, text, beginning language pack download, transcribing"
        title="Почему функция Speech to Text не работает на «народных» версиях?"
      >
        <p>
          Обычно дистрибутивы <mark className="app">Adobe Premiere</mark>, чтобы не
          раздувать их вес, распространяются без встроенных языковых пакетов для
          распознавания речи, так как суммарно они занимают более 10 ГБ. При необходимости
          нужные файлы загружаются прямо из приложения.{" "}
          <em className="article-note-muted">Однако есть нюанс...</em>
        </p>
        <p>
          В «народных» версиях процесс загрузки файлов будет длиться бесконечно, так как у
          приложения нет доступа к интернету. Решается эта проблема довольно просто —
          нужно установить языковые пакеты отдельно, желательно с того же ресурса, откуда
          вы скачали программу.
        </p>
        <Addition type="info">
          Например, языковые пакеты для репака от <mark className="user">KpoJIuK</mark> вы
          можете скачать в канале{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> по
          хештегу <mark className="tag">#speechtotext</mark> или в канале{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a> по поиску{" "}
          <mark className="tag">Speech To Text</mark>.
        </Addition>
        <Addition type="danger">
          Перед установкой языкового пакета, внимательно смотрите, для какой версии{" "}
          <mark className="app">Adobe Premiere</mark> он предназначен. Если вы установите
          пакет для другой версии, то вы не сможете воспользоваться им для транскрибации и
          зря займёте место на диске. Текущую версию{" "}
          <mark className="app">Adobe Premiere</mark> вы можете узнать у себя в{" "}
          <mark className="select">«Help» → «About Adobe Premiere»</mark>.
        </Addition>
        <Divider>Начинаем транскрибацию речи в текст</Divider>
        <p>
          После того как вы установили языковые пакеты, можно приступать к преобразованию
          речи из аудиодорожки в текст.
        </p>
        <ul>
          <li>
            <p>
              Для начала откройте панель <mark className="select">«Window» → «Text»</mark>{" "}
              и выберите в контекстном меню{" "}
              <mark className="select">«Generate static transcript»</mark>.
            </p>
            <ArticleMedia
              caption="Text"
              src="legacy/premierepro/text_generate_static_transcript.png"
              type="image"
            />
          </li>
          <li>
            <p>
              В появившемся окне в параметре <mark className="select">«Language»</mark>{" "}
              выберите язык диктора и нажмите <mark className="select">«Transcribe»</mark>
              .
            </p>
            <Addition type="info">
              Если в списке рядом с нужным языком виден значок облака со стрелкой, значит
              языковой пакет по какой-то причине всё ещё не установлен в системе.
            </Addition>
            <ArticleMedia
              caption="Generate static transcript"
              src="legacy/premierepro/generate_transcribe_settings.png"
              type="image"
            />
          </li>
          <li>
            Дождитесь завершения обработки аудиодорожки. На основе полученной расшифровки
            вы можете создать субтитры с помощью{" "}
            <mark className="select">«Create Captions»</mark> в контекстном меню,
            отредактировать текст или перейти к нужному моменту на таймлайне, просто
            выбрав фразу.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="purge-speech-to-text-packages"
        title="Где хранятся языковые пакеты и как удалить лишние после обновления?"
      >
        <p>
          После обновления <mark className="app">Adobe Premiere</mark> и языковых пакетов
          старые файлы не удаляются автоматически, так как могут использоваться в
          предыдущих версиях <mark className="app">Adobe Premiere</mark>. Со временем это
          превращается в лишние данные на диске.
        </p>
        <ContentFilter
          windowsContent={
            <>
              <p>
                Файлы транскрибации и языковые пакеты для автоматического создания
                субтитров находятся в директории{" "}
                <mark className="path">
                  C:\Program Files\Common Files\Adobe\Premiere Pro
                </mark>
                . Внутри расположены папки с установленными версиями программы.
              </p>
              <p>
                В папке нужной версии, например <mark className="path">26.0</mark>,
                находится директория <mark className="path">SpeechESL</mark>. Именно здесь
                хранятся языковые пакеты, которые можно удалить вручную при необходимости.
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="match-version"
        tag="какую версию надо скачать для связки, совместимость версий, dynamic link, premiere pro, media encoder, мажорная версия, релиз, выбор версии"
        title="Обязательно ли точное совпадение версий смежных программ от Adobe для их совместной работы?"
      >
        <p>
          У многих пользователей возникает вопрос:{" "}
          <mark className="quote">
            «Какую версию нужно устанавливать для связки AE, PR и ME?»
          </mark>{" "}
          — особенно если это первая установка нескольких программ от{" "}
          <mark className="company">Adobe</mark>. Разберёмся, что означают цифры в
          нумерации программ и на какие из них действительно стоит обращать внимание.
        </p>
        <Divider>Разбираемся с нумерацией версий</Divider>
        <p>
          При установке программ важно обращать внимание на «версию-год», например 25.X
          (2025), и на первые два числа в номере версии: мажорную версию и релиз-поинт.
          Всё, что идёт после, — это номера патча и билда, которые можно игнорировать. Они
          не влияют на работу <mark className="plugin">Dynamic Link</mark> в рамках одного
          релизного цикла.
        </p>
        <p>
          Предположим, вы видите установщики:{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.3.2.2 (2025)</mark>,{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.3.0.84 (2025)</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>{" "}
          <mark className="version">25.3.0.73 (2025)</mark>. Может показаться, что из-за
          разницы в последних цифрах они не смогут «увидеть» друг друга, однако это не
          так. Программы этих версий будут спокойно работать и взаимодействовать между
          собой.
        </p>
        <p>
          Более того, точное совпадение релиз-поинта не всегда обязательно, если
          установлена одна и та же мажорная версия. Например, связка из{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.3 (2025)</mark>,{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.1 (2025)</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>{" "}
          <mark className="version">25.0 (2025)</mark> будет работать без особых проблем.
          Однако всё же лучше устанавливать программы одного релиз-поинта, например 25.3 —
          это поможет избежать возможных сложностей.
        </p>
        <p>
          Но если одна из программ окажется версией предыдущего релизного цикла, например{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">24.6 (2024)</mark>, а вторая —{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.3 (2025)</mark>, они не смогут «увидеть» друг
          друга, поскольку их мажорные версии не совпадают. Обратной совместимости в таком
          случае нет, и <mark className="plugin">Dynamic Link</mark> просто не будет
          работать с ними.
        </p>
        <Divider>Проверяем совместимость сторонних плагинов</Divider>
        <p>
          Что касается сторонних плагинов с «версией-годом» в названии, то они не всегда
          должны строго соответствовать версии <mark className="app">Adobe Premiere</mark>
          . Чаще всего такие плагины работают и на релизах двухлетней давности. Например,
          если установить <mark className="plugin">Boris FX Sapphire</mark>{" "}
          <mark className="version">2025</mark> на{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">23.X (2023)</mark>, всё будет работать корректно.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="missing-dynamic-link"
        tag="не подключается dynamic link, программы не видят друг друга, динамик линк, aegp plugin aedynamiclinkserver: adobe media encoder is not installed, please download and install it to use this feature, failed to connect to adobe media encoder, медиа енкодер"
        title="Установил Adobe Media Encoder и Adobe After Effects, но Adobe Premiere почему-то не видит"
      >
        <p>
          Функция <mark className="plugin">Dynamic Link</mark> позволяет синхронизировать
          композиции из <mark className="app">Adobe After Effects</mark> в{" "}
          <mark className="app">Adobe Premiere</mark> на таймлайне и отправлять их в
          очередь рендера <mark className="app">Adobe Media Encoder</mark>. Но не всегда
          их получается «подружить». Иногда <mark className="app">Adobe Premiere</mark>{" "}
          при попытке отправить секвенцию в очередь рендера в{" "}
          <mark className="app">Adobe Media Encoder</mark> может попросить установить{" "}
          <mark className="app">Adobe Media Encoder</mark>, хотя эта программа вроде бы
          уже есть в системе. Чтобы программы «видели» друг друга, необходимо соблюсти
          несколько условий.
        </p>
        <ArticleMedia
          src="LvvjQbY1jgw"
          type="youtube"
        />
        <ul>
          <li>
            Убедитесь, что вы установили <mark className="app">Adobe After Effects</mark>,{" "}
            <mark className="app">Adobe Premiere</mark> и{" "}
            <mark className="app">Adobe Media Encoder</mark> одной «версии-года». Если,
            например, установлены <mark className="app">Adobe After Effects</mark>{" "}
            <mark className="version">25.X (2025)</mark>,{" "}
            <mark className="app">Adobe Premiere Pro</mark>{" "}
            <mark className="version">24.X (2024)</mark> и{" "}
            <mark className="app">Adobe Media Encoder</mark>{" "}
            <mark className="version">23.X (2023)</mark>, — они никогда не смогут
            взаимодействовать через <mark className="plugin">Dynamic Link</mark>, так как
            версии релизного цикла различаются.
          </li>
        </ul>
        <ContentFilter
          windowsContent={
            <>
              <ul>
                <li>
                  <p>
                    Если установлены <mark className="app">Adobe After Effects</mark>,{" "}
                    <mark className="app">Adobe Premiere</mark> и{" "}
                    <mark className="app">Adobe Media Encoder</mark> одного релизного
                    цикла, но они всё равно не «видят» друг друга — проверьте, установлены
                    ли они в директорию по умолчанию, а не на другой диск, отличный от{" "}
                    <mark className="path">C:\</mark>.
                  </p>
                  <Addition type="info">
                    Если на системном разделе не хватает места или вы хотите перенести
                    программы от <mark className="company">Adobe</mark> на другой раздел —
                    воспользуйтесь{" "}
                    <a href="https://www.youtube.com/watch?v=VaupaCuluJA">
                      функцией создания символьных ссылок
                    </a>
                    .
                  </Addition>
                </li>
              </ul>
              <p>
                Если условия соблюдены, программы должны увидеть друг друга. В редких
                случаях, даже при выполнении всех требований, связь может не установиться
                по следующим причинам.
              </p>
              <ul>
                <li>
                  Если вы используете <mark className="app">GenP</mark> для активации
                  программ — он может работать некорректно. Попробуйте полностью удалить
                  все программы с помощью{" "}
                  <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                    Adobe Creative Cloud Cleaner Tool
                  </a>{" "}
                  или любого стороннего деинсталлятора, например{" "}
                  <mark className="app">Revo Uninstaller</mark>, а затем установите репаки
                  от <mark className="user">KpoJIuK</mark> или{" "}
                  <mark className="user">m0nkrus</mark>.
                </li>
                <li>
                  Если вы уже используете репаки от <mark className="user">KpoJIuK</mark>{" "}
                  или <mark className="user">m0nkrus</mark> — попробуйте просто
                  перезагрузить устройство. Возможно, процессы, отвечающие за{" "}
                  <mark className="plugin">Dynamic Link</mark>, дали сбой и не уведомили
                  об этом.{" "}
                  <em className="article-note-muted">
                    Или просто переустановите программы.
                  </em>
                </li>
              </ul>
              <p>
                Однако, если вам нужно только экспортировать секвенцию из{" "}
                <mark className="app">Adobe Premiere</mark>, всё же рекомендуется не
                использовать <mark className="app">Adobe Media Encoder</mark> без острой
                необходимости — в программе уже есть вполне хороший инструментарий для
                экспорта в популярные форматы. Если нужного вам формата нет в списке
                экспорта, вы можете сконвертировать полученное видео с помощью стороннего
                ПО — например, <mark className="app">Shutter Encoder</mark>.
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="plugin-installer-types"
        tag="непонятные обозначения, adobe, ae, pr, ps, lr, ofx, ce, davinci, vegas, repack, standalone, репак"
        title="Как понять, для какой программы предназначен установщик плагина?"
      >
        <p>
          Обычно в названии установочных файлов указывается, для каких программ
          предназначен плагин. Это сделано, чтобы не перепутать файлы для нужных вам
          программ и установить их правильно.
        </p>
        <ul>
          <li>
            <p>
              <mark className="word">AE</mark>, <mark className="file">AEX</mark>,{" "}
              <mark className="word">PR</mark>, <mark className="file">PRM</mark> или{" "}
              <mark className="company">Adobe</mark> — плагины установятся в{" "}
              <mark className="app">Adobe Premiere</mark> или{" "}
              <mark className="app">Adobe After Effects</mark>.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  Иногда плагины с припиской <mark className="word">AE</mark> или{" "}
                  <mark className="word">AEX</mark> могут устанавливаться как в{" "}
                  <mark className="app">Adobe After Effects</mark>, так и в{" "}
                  <mark className="app">Adobe Premiere</mark>.
                </li>
                <li>
                  Плагины, распространяющиеся в виде установщиков, устанавливаются в
                  стандартные папки программ. Перед установкой убедитесь, что программы от{" "}
                  <mark className="company">Adobe</mark> установлены в стандартное
                  расположение — это поможет избежать ситуаций, когда плагин не появляется
                  в нужной программе.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="word">PS</mark>, <mark className="word">LR</mark> — плагины
            установятся в <mark className="app">Adobe Photoshop</mark> или{" "}
            <mark className="app">Adobe Lightroom</mark>.
          </li>
          <li>
            <p>
              <mark className="word">OFX</mark> или <mark className="word">OpenFX</mark> —
              плагин установится для программ, поддерживающих стандарт формата{" "}
              <mark className="copy">OpenFX</mark>. К ним относятся{" "}
              <mark className="app">DaVinci Resolve</mark>,{" "}
              <mark className="app">Vegas Pro</mark>, <mark className="app">Nuke</mark> и{" "}
              <a href="https://ru.wikipedia.org/wiki/OpenFX#%D0%A5%D0%BE%D1%81%D1%82%D1%8B">
                остальные
              </a>
              .
            </p>
            <Addition type="warning">
              Такой тип плагинов не совместим с продуктами{" "}
              <mark className="company">Adobe</mark>, так как их программы не поддерживают
              стандарт плагинов <mark className="copy">OpenFX</mark>.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">AVX</mark> — плагин установится для программ от{" "}
              <mark className="company">Avid</mark>.
            </p>
            <Addition type="warning">
              Такой тип плагинов не совместим с программами от{" "}
              <mark className="company">Adobe</mark> и с программами, поддерживающими
              стандарт <mark className="copy">OpenFX</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Standalone</mark> или <mark className="word">SAL</mark>{" "}
            — плагин, который может работать как самостоятельная программа и не зависит от
            других приложений, например <mark className="plugin">Boris FX Mocha Pro</mark>{" "}
            или <mark className="plugin">Boris FX Optics</mark>.
          </li>
          <li>
            <p>
              <mark className="word">Репак от ...</mark> или{" "}
              <mark className="word">Repack by ...</mark> — перепакованный установщик
              плагина, который устанавливает его в нужное место. Обычно такие плагины уже
              активированы, если не указано иное.
            </p>
            <Addition type="warning">
              При запуске таких установщиков стоит быть внимательным к чекбоксам — есть
              риск установить в систему ненужные программы.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">CE</mark> — маркировка от группы релизеров{" "}
              <mark className="user">Team V.R.</mark>, расшифровывающаяся как{" "}
              <mark className="term">Corporate Edition</mark>. Так обозначаются
              дистрибутивы, которые можно установить без дополнительных действий по
              активации. По сути, это маркировка <mark className="word">репака</mark>.
            </p>
            <Addition type="warning">
              Однако такие установщики не всегда содержат полностью «пролечённый» продукт
              — некоторые эффекты могут остаться без «патченной» лицензии.
            </Addition>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="unlicensed-effect"
        tag="плагин не активирован, license failed, красный крест, почему при его применении появляются красные кресты, непонятные наложения, надписи про отсутствие лицензии"
        title="Почему эффект, который я хочу применить на слой, накладывает какие-то кресты или надписи про активацию?"
      >
        <p>
          Чаще всего такие наложения говорят об одном — у вас отсутствует действительная
          активация для применённого плагина. Скорее всего, вы проигнорировали инструкцию
          по установке «народной» версии того или иного стороннего плагина или неправильно
          ею воспользовались.
        </p>
        <p>
          В редких случаях источник, откуда вы скачали плагин, может предоставить
          нерабочий вариант. В этом случае найдите нужный плагин из другого источника,
          например из <a href="#where-to-download">самой первой статьи</a> на этой
          странице.
        </p>
        <p>
          Если вы экспортируете секвенцию с помощью{" "}
          <mark className="app">Adobe Media Encoder</mark> — откажитесь от него в пользу
          экспорта напрямую из <mark className="app">Adobe Premiere</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-red-giant-installer-moved"
        tag="trapcode, mbl, magic bullet, vfx suite, universe, red giant, packages directory, ошибка установки, распаковать архив"
        title="«This installer application has been moved. It must be run from its original folder containing a packages directory. The installer will now exit.» при установке любого пакета от Red Giant"
      >
        <p>
          Скорее всего, вы пытаетесь установить плагины от{" "}
          <mark className="plugin">Red Giant</mark>, не распаковав архив полностью. При
          использовании стандартного просмотрщика архивов в Windows 10 или 11 и при
          запуске из него файла <mark className="file">EXE</mark> остальные
          файлы-зависимости остаются внутри архива. В результате установщик не может найти
          нужные данные и выдаёт ошибку.
        </p>
        <p>
          Чтобы установка прошла корректно, распакуйте весь архив заранее или используйте{" "}
          <a
            href="https://www.rarlab.com/download.htm"
            title="Официальный сайт WinRAR"
          >
            WinRAR
          </a>
          . <mark className="app">WinRAR</mark> умеет временно извлекать весь архив при
          открытии установочных файлов вроде <mark className="file">EXE</mark> или{" "}
          <mark className="file">MSI</mark>, даже если вы открыли их напрямую из архива.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="unlicensed-red-giant"
        tag="red giant, maxon, активация, unlicensed, нет лицензии, redgiant activation service unlocker, please launch the maxon app and sign in to your account, in order to keep using this product without interruption, please activate a license, trapcode particular, magic bullet looks, vfx suite, universe"
        title="«Red Giant is unlicensed» при применении любого эффекта от Maxon"
      >
        <p>
          Эта ошибка возникает из-за того, что у вас банально не активированы плагины от{" "}
          <mark className="company">Red Giant</mark>. Если вы недавно устанавливали
          «народную» версию плагинов, то, скорее всего, вы не полностью прочитали или
          проигнорировали инструкцию по их активации.
        </p>
        <ContentFilter
          windowsContent={
            <>
              <Divider>Перечитываем инструкцию по активации</Divider>
              <p>
                Согласно «современной» инструкции по активации «народной» версии этих
                дополнений, после основной установки{" "}
                <mark className="app">Maxon App</mark> и плагинов нужно ещё запустить{" "}
                <mark className="app">RedGiant Activation Service Unlocker.exe</mark>, про
                который некоторые пользователи почему-то забывают.
              </p>
              <p>
                После открытия утилиты пройдите этап применения патча и, желательно,
                перезагрузите устройство. После этого ошибка об отсутствии лицензии должна
                исчезнуть.
              </p>
              <Divider>
                Проверяем состояние сервиса <mark className="app">Red Giant Service</mark>
              </Divider>
              <p>
                В некоторых случаях, даже после активации с помощью{" "}
                <mark className="app">RedGiant Activation Service Unlocker.exe</mark>, сам
                сервис <mark className="app">Red Giant Service</mark> может быть не
                запущен или отключён в настройках служб.
              </p>
              <p>
                Чтобы проверить состояние службы{" "}
                <mark className="app">Red Giant Service</mark>, воспользуйтесь окном{" "}
                <mark className="app">«Выполнить»</mark>: нажмите{" "}
                <mark className="key">Win + R</mark>, введите в поле{" "}
                <mark className="select">«Открыть»</mark> значение{" "}
                <mark className="code">services.msc</mark> и нажмите{" "}
                <mark className="key">Enter</mark>. Затем в открывшемся приложении найдите{" "}
                <mark className="app">Red Giant Service</mark>, нажмите по нему{" "}
                <mark className="key">ПКМ</mark> и выберите в контекстном меню{" "}
                <mark className="select">«Запустить»</mark> или{" "}
                <mark className="select">«Перезапустить»</mark>.
              </p>
              <ArticleMedia
                caption="Ручной запуск Red Giant Service"
                src="legacy/start_red_giant_service.png"
                type="image"
              />
              <p>
                Также проверьте тип запуска сервиса в его свойствах — он должен быть
                установлен на <mark className="select">«Автоматически»</mark>. Если
                указано иное — измените значение на нужное и нажмите{" "}
                <mark className="select">«Применить»</mark>.
              </p>
              <ArticleMedia
                caption="Проверяем тип запуска Red Giant Service"
                src="legacy/red_giant_service_start_type.png"
                type="image"
              />
              <Divider />
              <p>
                Если ни один из способов не помог и предупреждение появляется снова —
                повторно примените активатор или установите более старую версию эффектов,
                например <mark className="version">2024.1</mark> или ниже.
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-red-giant-unlocker-error"
        tag="red giant, team v.r., активатор, ошибка 5, отказано в доступе, access denied, deletefile, red giant service, select action - an error occurred while trying to replace the existing file: deletefile failed; code 5. access denied"
        title="«Виберiть дiю — виникла помилка при спробi замiни iснуючого файлу: DeleteFile збiй; код 5. Отказано в доступi» при применении активатора от Team V.R. для пакетов Red Giant"
      >
        <p>
          Эта ошибка означает, что активатор не может перезаписать какой-то файл, потому
          что он у вас открыт в фоновом режиме. В вашем окне ошибки должен отобразиться
          полный путь до «виновника торжества» — скорее всего, это будет висящий в фоне{" "}
          <mark className="app">Red Giant Service.exe</mark>.
        </p>
        <p>
          Чтобы корректно применить активатор, закройте проблемный сервис с помощью{" "}
          <mark className="app">Диспетчера задач</mark>, завершив процесс{" "}
          <mark className="app">Red Giant Service.exe</mark> во вкладке{" "}
          <mark className="select">«Подробности»</mark> (Windows 10 или 11 21H2) или{" "}
          <mark className="select">«Сведения»</mark> (Windows 11 22H2 и выше). После
          завершения проблемного процесса, повторите попытку активации, нажав на{" "}
          <mark className="select">«Спробувати знову»</mark> — она должна пройти
          нормально.
        </p>
        <ArticleMedia
          caption="Диспетчер задач"
          src="legacy/kill_redgiantservice.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-zxp-installer-193"
        tag="extension manager init failed, status -193, a required resource is missing, please relaunch the creative cloud app and try again, zxp installer, ошибка -193, не установлен creative cloud"
        title="«Error: Extension Manager init failed, status = -193! A required resource is missing. Please relaunch the Creative Cloud app and try again» при использовании ZXP Installer"
      >
        <p>
          Эта ошибка прямо указывает на то, что на вашем устройстве отсутствует программа{" "}
          <mark className="app">Adobe Creative Cloud</mark>. Если вы пытаетесь установить
          какое-либо расширение формата <mark className="file">ZXP</mark> с помощью{" "}
          <a href="https://zxpinstaller.com/">ZXP Installer</a> от{" "}
          <mark className="company">ELEMENTS Storage Media</mark> — откажитесь от него в
          пользу <a href="https://aescripts.com/learn/zxp-installer/">ZXP Installer</a> от{" "}
          <mark className="web">aescripts</mark> или ручной распаковки расширения в нужное
          место. При этом <mark className="app">Adobe Creative Cloud</mark> устанавливать
          не нужно, если вы используете репаки от <mark className="user">KpoJIuK</mark>{" "}
          или <mark className="user">m0nkrus</mark>.
        </p>
        <Addition type="info">
          Более подробную информацию про установку дополнительных материалов вы можете
          прочитать в <a href="#how-to-install">статье 2.1</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="update-app"
        tag="обновление и перенос, перенести плагины расширения и пресеты, новая версия премьера, хочу обновить программу, update, плагины, скрипты, настройки, сохранить настройки"
        title="Как обновить программу, не потеряв при этом плагины и прочий установленный контент?"
      >
        <p>
          Обновление программы — вещь хорошая: разработчики добавляют новые функции и
          исправляют старые баги. У некоторых пользователей часто возникает вопрос, как
          правильно обновляться и нужно ли что-то делать дополнительно после обновления{" "}
          <mark className="app">Adobe Premiere</mark>. Существует два вида обновлений —
          между версиями «одного года» и между «разными годами».
        </p>
        <Addition type="info">
          Под «годом» обычно подразумевается мажорная версия в названии программы,
          например <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">23.X (2023)</mark> или{" "}
          <mark className="app">Adobe Media Encoder</mark>{" "}
          <mark className="version">25.X (2025)</mark>.
        </Addition>
        <Divider>Что произойдёт с моими проектами после обновления программы?</Divider>
        <p>
          При открытии проекта из старых версий появится окно с текстом{" "}
          <mark className="select">
            «This project was saved from a previous version of Adobe Premiere and must be
            converted»
          </mark>
          . Вам предложат конвертировать его для работы в обновлённой программе и указать
          путь для сохранения копии. Исходный файл при этом останется нетронутым.
        </p>
        <Addition type="warning">
          Обратите внимание: после конвертации вы не сможете открыть новый файл проекта в
          мажорных версиях <mark className="app">Adobe Premiere</mark> ниже текущей.
          Например, проект из <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.4 (2025)</mark> может открыться в{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.1 (2025)</mark>, а в{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">24.6 (2024)</mark> — нет.
        </Addition>
        <Divider>Обновляемся между версиями «одного года»</Divider>
        <p>
          Чтобы перейти на новую версию <mark className="app">Adobe Premiere</mark> в
          пределах «одного года», например с{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">24.0 (2024)</mark> на{" "}
          <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">24.6 (2024)</mark>, достаточно запустить инсталлятор и
          выполнить стандартное обновление кнопками{" "}
          <mark className="select">«Установить»</mark> и{" "}
          <mark className="select">«Продолжить»</mark>. Установщик перезапишет только
          основные файлы программы, сохранив установленные плагины, пресеты и другие
          дополнения, поэтому переносить их вручную не придётся. Рабочие пространства,
          настройки и прочие пользовательские данные будут автоматически перенесены в
          новую версию.
        </p>
        <Divider>Обновляемся с «одного года» на другой</Divider>
        <ContentFilter
          windowsContent={
            <>
              <p>
                При обновлении с «одного года» на другой, например с{" "}
                <mark className="app">Adobe Premiere Pro</mark>{" "}
                <mark className="version">23.6 (2023)</mark> на{" "}
                <mark className="app">Adobe Premiere Pro</mark>{" "}
                <mark className="version">25.2 (2025)</mark>, вам придётся немного
                повозиться с переносом некоторых типов дополнений. Рабочие пространства,
                настройки и прочие пользовательские данные также будут автоматически
                перенесены в новую версию, как при обновлении между «одним годом».
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    При установке версии «другого года» старая версия программы никуда не
                    денется и останется на вашем устройстве. При необходимости вы сможете
                    удалить её позже или продолжить работу в ней.
                  </li>
                  <li>
                    После обновления <mark className="app">Adobe Premiere</mark> не
                    забудьте также обновить{" "}
                    <mark className="app">Adobe After Effects</mark> и{" "}
                    <mark className="app">Adobe Media Encoder</mark>, чтобы связь между
                    программами работала корректно.
                  </li>
                  <li>
                    Если какое-то дополнение после обновления не отображается или не
                    работает корректно в новой версии{" "}
                    <mark className="app">Adobe Premiere</mark> — убедитесь в том, что он
                    поддерживает новую версию программы. В противном случае найдите и
                    установите обновлённую версию нужного вам дополнения.
                  </li>
                </ul>
              </Addition>
              <p>
                Есть два варианта решения проблемы — постепенно «выдёргивать» старые файлы
                и переносить их в новую версию программы или перезаписать папку старой
                версии новой. Начнём с первого способа, который, как по мне, является
                более «безопасным» и надёжным. Однако стоит учитывать, что большинство
                дополнений для <mark className="app">Adobe Premiere</mark> устанавливаются
                в общие папки и лишь в редких случаях устанавливаются в папку конкретной
                версии программы, поэтому переносить их вручную чаще всего не придётся.
              </p>
              <Divider>Поэтапно переносим файлы со старой версии в новую</Divider>
              <p>
                Первый способ заключается в перемещении файлов из директорий, привязанных
                к старой версии программы, в соответствующие папки новой. Это касается тех
                файлов, что вы добавляли вручную — например, файлы для цветокоррекции в
                папке <mark className="path">Lumetri</mark>.
              </p>
              <Addition type="danger">
                Копируйте только те файлы и папки, которые вы добавляли сами. Не трогайте
                стандартные файлы, чтобы случайно не нарушить работу новой версии
                программы после замены файлов.
              </Addition>
              <p>
                Ниже приведён список того, что нужно перенести или сохранить на всякий
                случай, если что-то пойдёт не так.
              </p>
              <ul>
                <li>
                  <p>
                    Сторонние плагины форматов <mark className="file">PRM</mark> и{" "}
                    <mark className="file">AEX</mark>, расположеные в{" "}
                    <mark className="path">
                      C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Support Files\PlugIns
                    </mark>
                    , где <mark className="version">20XX</mark> — предыдущая версия
                    программы.
                  </p>
                  <Addition type="info">
                    При желании вы можете перенести сторонние плагины из папки с
                    программой в общую —{" "}
                    <mark className="path">
                      C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                    </mark>
                    . После этого они будут работать во всех поддерживаемых версиях{" "}
                    <mark className="app">Adobe Premiere</mark>, и при будущих обновлениях
                    их не придётся перемещать.
                  </Addition>
                  <Addition type="danger">
                    Не трогайте и не переносите директории{" "}
                    <mark className="path">(AfterEffectsLib)</mark>,{" "}
                    <mark className="path">Common</mark>,{" "}
                    <mark className="path">ControlSurface</mark>,{" "}
                    <mark className="path">Testing</mark> и{" "}
                    <mark className="path">XMPFiles</mark> без острой необходимости: в них
                    находятся стандартные плагины.
                  </Addition>
                </li>
                <li>
                  Пользовательские файлы для цветокоррекции из директории{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Premiere Pro 20XX\Support Files\Lumetri
                  </mark>
                  .
                </li>
              </ul>
              <p>
                А теперь обсудим, какие файлы можно не трогать для дальнейшей миграции в
                новую версию программы.
              </p>
              <ul>
                <li>
                  <p>
                    Плагины форматов <mark className="file">PRM</mark> и{" "}
                    <mark className="file">AEX</mark>, расположенные в{" "}
                    <mark className="path">
                      C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                    </mark>
                    , не нужно трогать, так как они в любом случае будут работать во всех
                    поддерживаемых дополнением версиях{" "}
                    <mark className="app">Adobe Premiere</mark>.
                  </p>
                  <Addition type="warning">
                    <p>
                      Не стоит трогать файлы «больших» плагинов, например{" "}
                      <mark className="plugin">Boris FX Sapphire</mark> или{" "}
                      <mark className="plugin">Magic Bullet Suite</mark>, если вы не
                      знаете, что с ними делать. Обычно они также устанавливаются в{" "}
                      <mark className="path">
                        C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                      </mark>
                      .
                    </p>
                    <p>
                      Если часть плагинов осталась в папке с конкретной версией программы
                      — вы можете перенести их в папку новой версии программы или
                      запустить инсталлятор эффектов и установить «поверх» существующих.
                    </p>
                  </Addition>
                </li>
                <li>
                  Расширения формата <mark className="file">ZXP</mark>, что открываются в
                  программе из <mark className="select">«Window» → «Extensions»</mark> и
                  находятся в директориях{" "}
                  <mark className="path">
                    C:\Program Files\Common Files\Adobe\CEP\extensions
                  </mark>{" "}
                  и{" "}
                  <mark className="path">
                    C:\Program Files (x86)\Common Files\Adobe\CEP\extensions
                  </mark>{" "}
                  также не требуют переноса — они размещаются в своей общей директории и
                  доступны во всех поддерживаемых расширением версиях{" "}
                  <mark className="app">Adobe Premiere</mark>.
                </li>
                <li>
                  <p>
                    Файлы проектов и исходники, над которыми вы работали, никуда не
                    пропадут после обновления. Они будут расположены там, где вы их
                    сохранили в последний раз.
                  </p>
                  <Addition type="warning">
                    При открытии и конвертации проекта, созданного в ранней версии
                    программы в новой, вы не сможете открыть его в ранней версии
                    программы.
                  </Addition>
                </li>
                <li>
                  Пресеты и шаблоны <mark className="file">MOGRT</mark>, расположенные в{" "}
                  <mark className="path">
                    %APPDATA%\Adobe\Common\Motion Graphics Templates
                  </mark>{" "}
                  никуда переносить не нужно, так как они в любом случае будут работать во
                  всех поддерживаемых шаблоном версиях{" "}
                  <mark className="app">Adobe Premiere</mark>.
                </li>
              </ul>
              <Divider>Перезаписываем старую версию программы новой</Divider>
              <Addition type="danger">
                Данный способ обновления не гарантирует 100% стабильной работы программы,
                поэтому все действия вы выполняете на свой страх и риск.
              </Addition>
              <p>
                Второй способ обновления с сохранением плагинов заключается в том, что вам
                нужно переименовать папку старой версии программы на название версии, на
                которую вы планируете обновиться. Так инсталлятор новой версии «подумает»,
                будто она уже установлена, и просто перезапишет файлы программы, не
                затрагивая ваши дополнения.
              </p>
              <p>
                Для этого откройте директорию с программами{" "}
                <mark className="company">Adobe</mark>, обычно это{" "}
                <mark className="path">C:\Program Files\Adobe</mark>. Затем продублируйте
                папку старой версии, уберите из имени приставку{" "}
                <mark className="quote">«- копия»</mark> и измените год на нужный.
                Например, при переходе с <mark className="app">Adobe Premiere Pro</mark>{" "}
                <mark className="version">23.6 (2023)</mark> на{" "}
                <mark className="app">Adobe Premiere Pro</mark>{" "}
                <mark className="version">25.2 (2025)</mark> переименуйте папку{" "}
                <mark className="path">Adobe Premiere Pro 2023</mark> в{" "}
                <mark className="path">Adobe Premiere Pro 2025</mark>.
              </p>
              <p>
                После переименования запустите инсталлятор новой версии, выберите язык,
                нажмите <mark className="select">«Продолжить»</mark> и дождитесь успешной
                установки новой версии программы.
              </p>
              <Divider>Если всё пошло по п!$%е после обновления</Divider>
              <p>
                Если после обновления «поверх» программа не запускается или работает
                нестабильно, стоит выполнить чистую установку. В этом случае сохраните
                резервные копии важных дополнений из директорий, описанных выше или в{" "}
                <a href="#how-to-install">статье про их установку</a>, либо просто
                запишите их список, чтобы затем установить всё с чистого листа.
              </p>
              <p>
                Для этого удалите все версии <mark className="app">Adobe Premiere</mark> с
                помощью{" "}
                <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>{" "}
                или другого деинсталлятора, например{" "}
                <mark className="app">Revo Uninstaller</mark>.
              </p>
              <p>
                После удаления откройте инсталлятор и выполните установку программы как
                обычно и постепенно возвращайте нужные дополнения в директорию{" "}
                <mark className="app">Adobe Premiere</mark>. После проделанных манипуляций
                вы можете продолжить работу в программе, как ни в чём не бывало.
              </p>
              <Addition type="warning">
                При копировании файлов из резервной копии в директорию программы не
                заменяйте новые стандартные файлы старыми, чтобы избежать проблем со
                стабильностью.
              </Addition>
            </>
          }
        />
      </DetailsSummary>
      <Addition type="info">
        Некоторые решения проблем, которые могут у вас возникнуть после установки
        дополнительных материалов или во время использования программы, находятся в общем
        разделе <a href="#errors">«Ошибки и предупреждения»</a>.
      </Addition>
    </div>
  );
};

export default PrInstallProblems;
