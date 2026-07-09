import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import CodeSnippet from "../../../components/content/CodeSnippet";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

import NestedDetailsSummary from "../../../components/detailsSummary/NestedDetailsSummary";

import {getPlatformInfo} from "../../../utilities/browserDetection";

const PsInstallProblems: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="how-to-install"
        tag="как установить, куда распаковать, забыли положить, плагины, шаблоны, пресеты, скрипты, расширения, луты, архивы, installation guide"
        title="В архиве или под записью нет инструкции по установке. Куда что кидать?"
      >
        <p>
          Обычно большинство дополнительных материалов устанавливается одинаково — всё
          зависит от типа файла. Однако некоторые шаги могут отличаться в зависимости от
          операционной системы. В этой статье мы расскажем, как устанавливать разные типы
          файлов для <mark className="app">Adobe Photoshop</mark> и использовать их в
          программе.
        </p>
        <Addition type="info">
          Сторонние плагины и расширения, будь то лицензионные или «народные», в
          большинстве случаев без проблем устанавливаются как на официальную, так и на
          «народную» версию <mark className="app">Adobe Photoshop</mark>. Способы проверки
          лицензии программы и сторонних дополнений обычно не пересекаются.
        </Addition>
        <Divider>Универсальные инструкции для разных типов файлов</Divider>
        <ul>
          <li>
            <p>
              Изображения формата <mark className="image">PSD</mark> открываются как
              обычные проекты в <mark className="app">Adobe Photoshop</mark>: двойным
              кликом
              <sup>1</sup>, через <mark className="select">«File» → «Open»</mark> или
              сочетанием клавиш <mark className="key">Ctrl + O</mark>.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  <p>
                    <sup>1</sup> Двойное нажатие на <mark className="image">PSD</mark> в
                    файловом менеджере открывает приложение, назначенное в настройках
                    системы. Поскольку <mark className="image">PSD</mark> могут
                    открываться не только в <mark className="app">Adobe Photoshop</mark>,
                    но и в других просмотрщиках изображений, по умолчанию может
                    запускаться не та программа.
                  </p>
                  <p>
                    Автор статьи назначил{" "}
                    <mark className="app">FastStone Image Viewer</mark> на Windows
                    программой по умолчанию для просмотра{" "}
                    <mark className="image">PSD</mark>, чтобы открывать их без запуска{" "}
                    <mark className="app">Adobe Photoshop</mark>. При необходимости файл
                    можно открыть в <mark className="app">Adobe Photoshop</mark> по
                    клавише <mark className="key">E</mark>, назначив её в настройках
                    просмотрщика.
                  </p>
                </li>
                <li>
                  Если вы хотите встроить <mark className="image">PSD</mark> в свой
                  проект, просто перенесите файл из проводника в окно с открытым проектом
                  в <mark className="app">Adobe Photoshop</mark> или поместите через{" "}
                  <mark className="select">«File» → «Place Embedded»</mark>.
                  Импортированный <mark className="image">PSD</mark> появится как
                  смарт-объект, который можно будет отредактировать двойным нажатием по
                  миниатюре в окне <mark className="select">«Layers»</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <p>
              Аналогично, если в архиве содержатся файлы <mark className="image">AI</mark>
              , <mark className="image">EPS</mark>, <mark className="image">JPG</mark>,{" "}
              <mark className="image">PNG</mark>, <mark className="image">PDF</mark>,{" "}
              <mark className="image">SVG</mark> или другие изображения, их можно открыть
              в <mark className="app">Adobe Photoshop</mark> простым перетаскиванием в
              окно программы или через <mark className="select">«File» → «Open»</mark>.
            </p>
            <Addition type="info">
              <p>
                Чтобы поместить изображение в открытый проект, переместите его из
                проводника, скопируйте изображение и вставьте его с помощью{" "}
                <mark className="key">Ctrl + V</mark> или выберите{" "}
                <mark className="select">«File» → «Place Embedded»</mark>
                <sup>1</sup> и в открытом окне проводника выберите нужный файл.
              </p>
              <Addition type="info">
                <sup>1</sup> Изображения, помещённые в проект через{" "}
                <mark className="select">«Place Embedded»</mark>, будут импортированы как
                смарт-объект.
              </Addition>
            </Addition>
          </li>
          <li>
            <ContentFilter
              macContent={
                <>
                  <p>
                    Операции формата <mark className="file">ATN</mark> импортируются через
                    окно <mark className="select">«Window» → «Actions»</mark>, которое
                    также можно открыть с помощью комбинации клавиш{" "}
                    <mark className="key">Option + F9</mark>. В этом окне откройте
                    контекстное меню в правом верхнем углу и выберите{" "}
                    <mark className="select">«Load Actions»</mark>.
                  </p>
                  <Addition type="info">
                    Если вместо функциональных клавиш у вас срабатывает перемотка аудио,
                    дополнительно зажмите <mark className="key">Fn</mark> вместе с
                    указанной выше комбинацией или измените поведение функциональных
                    клавиш в настройках macOS.
                  </Addition>
                </>
              }
              windowsContent={
                <p>
                  Операции формата <mark className="file">ATN</mark> импортируются через
                  окно <mark className="select">«Window» → «Actions»</mark>, которое также
                  можно открыть с помощью комбинации клавиш{" "}
                  <mark className="key">Alt + F9</mark>. В этом окне откройте контекстное
                  меню в правом верхнем углу и выберите{" "}
                  <mark className="select">«Load Actions»</mark>.
                </p>
              }
            />
            <p>
              В открывшемся окне файлового менеджера выберите нужный файл. После этого
              импортированные операции отобразятся в окне{" "}
              <mark className="select">«Actions»</mark>, и вы сможете применять их в своих
              проектах.
            </p>
            <ArticleMedia
              caption="Импорт файлов операций"
              src="legacy/photoshop/load_actions.png"
              type="image"
            />
            <Addition type="warning">
              Рекомендуется использовать английскую локализацию{" "}
              <mark className="app">Adobe Photoshop</mark> при использовании сторонних{" "}
              <mark className="file">ATN</mark> файлов. В них часто могут быть завязаны
              действия на стандартные слова английской локализации.{" "}
              <a href="#switch-language">Как изменить локализацию?</a>
            </Addition>
          </li>
          <li>
            <p>
              Наборы кистей формата <mark className="file">ABR</mark> импортируются через
              окно <mark className="select">«Window» → «Brushes»</mark>. В этом окне
              откройте контекстное меню в правом верхнем углу и выберите{" "}
              <mark className="select">«Import Brushes»</mark>.
            </p>
            <p>
              В открывшемся окне файлового менеджера выберите нужный файл. После этого
              импортированные кисти отобразятся в окне{" "}
              <mark className="select">«Brushes»</mark>, и вы сможете рисовать ими в своих
              проектах.
            </p>
            <ArticleMedia
              caption="Импорт кистей"
              src="legacy/photoshop/import_brushes.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Градиенты формата <mark className="file">GRD</mark> импортируются через окно{" "}
              <mark className="select">«Window» → «Gradients»</mark>. В этом окне откройте
              контекстное меню в правом верхнем углу и выберите{" "}
              <mark className="select">«Import Gradients»</mark>.
            </p>
            <p>
              В открывшемся окне файлового менеджера выберите нужный файл. После этого
              импортированные градиенты отобразятся в окне{" "}
              <mark className="select">«Gradients»</mark>, и вы сможете использовать их в
              своих проектах.
            </p>
            <ArticleMedia
              caption="Импорт градиентов"
              src="legacy/photoshop/import_gradients.png"
              type="image"
            />
          </li>
        </ul>
        <ContentFilter
          macContent={
            <>
              <NestedDetailsSummary
                anchor="archive"
                title="Архивы (ZIP, 7Z, RAR)"
              >
                <Addition type="danger">
                  Если в архиве находится папка <mark className="path">_MACOSX</mark>, то
                  в нём нет никаких полезных файлов, установщиков и плагинов, которые
                  предназначены именно для устройств macOS. Это скрытая системная папка,
                  которая иногда создаётся операционной системой, в которой хранятся
                  метаданные и информация о файловой системе. В нём нет ничего интересного
                  для пользователя.
                </Addition>
                <p>
                  Если вы скачали архив формата <mark className="file">ZIP</mark>,{" "}
                  <mark className="file">7Z</mark> или <mark className="file">RAR</mark>,
                  то вам необходимо его распаковать с помощью архиватора для дальнейшей
                  работы с ним. Это можно сделать с помощью{" "}
                  <mark className="app">Keka</mark> или{" "}
                  <mark className="app">The Unarchiver</mark>.
                </p>
                <Addition type="info">
                  <ul>
                    <li>
                      Загрузить <mark className="app">Keka</mark> можно по{" "}
                      <a href="https://www.keka.io/ru/">этой</a> ссылке, а{" "}
                      <mark className="app">The Unarchiver</mark> — по{" "}
                      <a href="https://theunarchiver.com/">этой</a>.
                    </li>
                    <li>
                      Для распаковки многотомного архива, то есть если в названии архивов
                      есть <mark className="file">PART1</mark>,{" "}
                      <mark className="file">PART2</mark> и так далее, нужно запустить
                      распаковку только первой части архива, остальные части подхватятся
                      автоматически. Остальные части архива не нужно трогать без острой
                      необходимости, если вы не знаете, что с ними делать.
                    </li>
                    <li>
                      Многотомные архивы создаются для того, чтобы файл можно было
                      спокойно передать, обойдя ограничения максимального размера в{" "}
                      <mark className="app">Telegram</mark> или другого ресурса.
                    </li>
                    <li>
                      Если вы хотите сделать <mark className="app">Keka</mark> архиватором
                      по умолчанию, то вам нужно будет установить{" "}
                      <a href="https://www.keka.io/defaultapp/">KekaExternalHelper</a>.
                      Подробная инструкция расположена в{" "}
                      <a href="https://github.com/aonez/Keka/wiki/Default-application">
                        Wiki на GitHub
                      </a>
                      .
                    </li>
                  </ul>
                </Addition>
                <ArticleMedia
                  caption="Распаковка через контекстное меню"
                  src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                  type="image"
                />
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
                anchor="zxp"
                title="Расширения (ZXP)"
              >
                <p>
                  Если в архиве находится файл <mark className="file">ZXP</mark>, то такие
                  расширения обычно устанавливаются через{" "}
                  <a href="https://aescripts.com/learn/zxp-installer/">ZXP Installer</a>{" "}
                  от <mark className="web">aescripts</mark>. Прежде чем устанавливать
                  расширение такого формата, убедитесь в том, что ваша версия{" "}
                  <mark className="app">Adobe Photoshop</mark> его поддерживает. После
                  того как вы установите расширение, откройте терминал и введите команды
                  ниже, их можно скопировать одним нажатием. Если терминал не выдал
                  никакие ошибки, то вы можете спокойно открыть{" "}
                  <mark className="app">Adobe Photoshop</mark> и проверить
                  работоспособность установленного расширения.
                </p>
                <Addition type="danger">
                  Пожалуйста, не используйте{" "}
                  <a href="https://zxpinstaller.com/">ZXP Installer</a> от{" "}
                  <mark className="company">ELEMENTS Storage Media</mark>, если вы
                  используете версии программ от
                  <mark className="company">Adobe</mark>, которые отвязаны от приложения{" "}
                  <mark className="app">Adobe Creative Cloud</mark>. Этот{" "}
                  <a href="https://zxpinstaller.com/">ZXP Installer</a> будет выдавать вам
                  ошибку <mark className="danger">-193</mark> до тех пор, пока вы не
                  установите <mark className="app">Adobe Creative Cloud</mark>, а он, в
                  свою очередь, может повредить уже установленные программы.
                </Addition>
                <Addition type="info">
                  <ul>
                    <li>
                      <p>
                        Если вы не хотите устанавливать стороннее ПО для установки{" "}
                        <mark className="file">ZXP</mark>, то вы можете переименовать файл{" "}
                        <mark className="file">ZXP</mark> в{" "}
                        <mark className="file">ZIP</mark> и распаковать его как обычный
                        архив. Содержимое свежераспакованного файла нужно поместить в
                        папку{" "}
                        <mark className="path">
                          /Library/Application Support/Adobe/CEP/extensions
                        </mark>{" "}
                        и после этого ввести команды, которые были расположены чуть ниже в
                        терминал.
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
                        <br />
                      </CodeSnippet>
                    </li>
                    <li>
                      Команды выше достаточно ввести один раз, в дальнейшем при установке
                      подобных расширений команды для терминала вводить не нужно. Эти
                      команды включают debug-режим в{" "}
                      <mark className="app">Adobe Photoshop</mark> для корректного
                      открытия и работы сторонних расширений, установленные из просторов
                      интернета.
                    </li>
                    <li>
                      Иногда в архиве может быть уже распакованный{" "}
                      <mark className="file">ZXP</mark> архив. Это можно понять по наличию
                      папок <mark className="path">META-INF</mark> и{" "}
                      <mark className="path">CSXS</mark> внутри папки с названием
                      расширения.
                    </li>
                  </ul>
                </Addition>
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
                </p>
                <p>
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
                      закрыть <mark className="app">Adobe Photoshop</mark> для корректной
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
                      <mark className="app">Adobe Photoshop</mark> установлен в
                      стандартном расположении{" "}
                      <mark className="path">C:\Program Files\Adobe\</mark>, а не в другом
                      месте или на другом разделе. В противном случае устанавливаемый
                      плагин может установиться не туда, из-за чего не будет отображаться
                      и корректно работать в программе.
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
                title="Дополнения (8BF, 8BE, 8BX, 8BI)"
              >
                <p>
                  Дополнения форматов <mark className="file">8BF</mark>,{" "}
                  <mark className="file">8BE</mark>, <mark className="file">8BX</mark>,
                  или <mark className="file">8BI</mark> распаковываются в папку плагинов
                  внутри директории программы —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
                  </mark>
                  . Устанавливаемое дополнение может вызываться из определённого места
                  интерфейса, например из <mark className="select">«Filters»</mark>,{" "}
                  <mark className="select">«File» → «Scripts»</mark> или{" "}
                  <mark className="select">«File» → «Automate»</mark> — читайте
                  приложенную документацию к устанавливаемому дополнению.
                </p>
                <Addition type="info">
                  Не всегда новые версии плагинов могут работать со старыми версиями{" "}
                  <mark className="app">Adobe Photoshop</mark> и наоборот. Уточняйте в
                  документации к устанавливаемому плагину, для каких версий{" "}
                  <mark className="app">Adobe Photoshop</mark> он предназначен.
                </Addition>
                <Addition type="warning">
                  В{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe Photoshop 20XX\Required\Plug-ins
                  </mark>{" "}
                  находятся стандартные дополнения программы. Не стоит изменять содержимое
                  каталога без острой необходимости.
                </Addition>
                <Addition type="danger">
                  Дополнения формата <mark className="file">PLUGIN</mark> не подходят для
                  устройств на Windows, так как они предназначены для устройств на macOS.
                </Addition>
              </NestedDetailsSummary>
              <NestedDetailsSummary
                anchor="ccx"
                title="Расширения (CCX)"
              >
                <p>
                  Расширения формата <mark className="file">CCX</mark> устанавливаются по
                  следующему порядку действий.
                </p>
                <ul>
                  <li>
                    <p>
                      Переименуйте файл <mark className="file">CCX</mark> в{" "}
                      <mark className="file">ZIP</mark> и распакуйте его как обычный
                      архив.{" "}
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
                    Переместите содержимое распакованного архива в папку{" "}
                    <mark className="path">
                      C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
                    </mark>
                    .
                  </li>
                  <li>
                    После корректной установки установленные расширения появятся в{" "}
                    <mark className="select">«Plugins»</mark> в горизонтальном меню в
                    верхней части интерфейса программы.
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
                  появятся в <mark className="select">«Plugins»</mark> и будут работать в
                  своём новом окне, который вы можете прикрепить в своё рабочее
                  пространство.
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
                      <mark className="app">Adobe Photoshop</mark> его поддерживает, иначе
                      он может не появиться в списке расширений.
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
              </NestedDetailsSummary>
            </>
          }
        />
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
        anchor="install-adobe-errors-codes"
        tag="в настоящее время невозможно установить, операционная система не соответствует минимальным требованиям для этой программы установки"
        title="Код ошибки 1, 501, 176, 195, 21 или другие при установке Adobe Photoshop"
      >
        <Divider>Исправляем ошибку 1 или 501</Divider>
        <p>
          Обычно ошибка 1 и 501 возникает из-за того, что у вас повреждено приложение{" "}
          <mark className="app">Adobe Creative Cloud</mark> или были криво удалены
          предыдущие программы от <mark className="company">Adobe</mark>. Чтобы исправить
          это — очистите остатки предыдущих установок с помощью{" "}
          <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
            Adobe Creative Cloud Cleaner
          </a>{" "}
          или <mark className="app">Revo Uninstaller</mark>.
        </p>
        <Divider>Исправляем ошибку 176</Divider>
        <ContentFilter
          macContent={
            <>
              <p>
                Скорее всего, вы до установки более новых версий{" "}
                <mark className="app">Adobe Photoshop</mark> пользовались другими
                программами <mark className="company">Adobe</mark>. Для решения —
                попробуйте удалить папку{" "}
                <mark className="path">/Library/Application Support/Adobe/caps</mark>, а
                затем повторить попытку установки нужной программы.
              </p>
            </>
          }
          windowsContent={
            <>
              <p>
                Скорее всего, вы до установки более новых версий{" "}
                <mark className="app">Adobe Photoshop</mark> пользовались другими
                программами <mark className="company">Adobe</mark>. Для решения —
                попробуйте удалить папку{" "}
                <mark className="path">
                  C:\Program Files (x86)\Common Files\Adobe\caps
                </mark>
                , а затем повторить попытку установки нужной программы.
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
          Если вы столкнулись с этой ошибкой при установке, это означает, что ваш
          процессор не поддерживает инструкции <mark className="hardware">AVX2</mark>,
          необходимые для последних версий <mark className="app">Adobe Photoshop</mark>.
          Для решения проблемы обновите процессор или установите более старую версию
          программы, например <mark className="app">Adobe Photoshop</mark>{" "}
          <mark className="version">23.6 (2023)</mark> или{" "}
          <mark className="app">Adobe Photoshop</mark>{" "}
          <mark className="version">24.0 (2024)</mark>.
        </p>
        <Divider>
          Исправляем ошибку 21 —{" "}
          <mark className="warning">
            «Операционная система не соответствует минимальным требованиям для этой
            программы установки»
          </mark>
        </Divider>
        <p>
          Скорее всего, вы пытаетесь установить{" "}
          <mark className="app">Adobe Photoshop</mark>{" "}
          <mark className="version">25.X (2024)</mark> или выше на несвежую сборку
          Windows. В таком случае у вас есть только два выхода, по какому пути идти —
          решать только вам.
        </p>
        <ul>
          <li>
            <p>
              Если вы хотите установить свежую версию{" "}
              <mark className="app">Adobe Photoshop</mark>, то вам нужно обновить вашу
              систему до Windows 10 22H2 или установить Windows 11. Обычно в{" "}
              <a href="https://helpx.adobe.com/photoshop/system-requirements.html">
                системных требованиях
              </a>{" "}
              <mark className="app">Adobe Photoshop</mark> указывается минимальная версия
              операционной системы.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  Текущую сборку Windows вы можете посмотреть в{" "}
                  <mark className="app">winver</mark>.
                </li>
                <li>
                  Если у вас стоит Windows 10 редакции LTSC, то сборку новее 21H2 вы не
                  сможете установить. Вам нужно будет переустановить систему на редакцию{" "}
                  <mark className="term">Home</mark> или <mark className="term">Pro</mark>
                  .{" "}
                  <em className="article-note-muted">
                    Или поэкспериментировать с редакцией LTSC для IoT.
                  </em>
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            Если вы не желаете обновлять или переустанавливать систему, то вы можете
            установить более старую версию, например{" "}
            <mark className="app">Adobe Photoshop</mark>{" "}
            <mark className="version">23.6 (2023)</mark> или{" "}
            <mark className="app">Adobe Photoshop</mark>{" "}
            <mark className="version">15.1 (2018)</mark>. В таком случае установщик
            выполнит установку корректно.
          </li>
        </ul>
        <Addition type="info">
          Остальные решения по кодам ошибок при установке вы можете найти на{" "}
          <a href="https://helpx.adobe.com/creative-cloud/kb/troubleshoot-download-install-logs.html">
            сайте Adobe
          </a>{" "}
          или на различных форумах в интернете.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="about-free-photoshop-with-firefly"
        tag="файрфляй, искусственный интеллект, нейросети, нейронная сеть, генерация изображений, стейбл дифьюжен, stable diffusion, sd"
        title="Где скачать Photoshop с рабочим Firefly? Какие есть аналоги?"
      >
        <p
          style={{
            fontFamily: "Onest, sans-serif",
            fontSize: "5rem",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Нигде!
        </p>
        <p style={{fontWeight: "600", lineHeight: "1.5"}}>
          Для использования <mark className="plugin">Adobe Firefly</mark> в{" "}
          <mark className="app">Adobe Photoshop</mark> оформите подписку Creative Cloud
          или активируйте пробную версию на 14 дней.
        </p>
        <Divider></Divider>
        <p>
          С выходом <mark className="app">Adobe Photoshop</mark>{" "}
          <mark className="version">25.X (2024)</mark> многие начали из каждого угла
          спрашивать, мол{" "}
          <mark className="quote">«где народный фш с нейросетью можно скачать?»</mark>.
          Благодаря таким повсеместным вопросам от халявщиков —{" "}
          <mark className="company">Adobe</mark> прикрыл эту функцию с сентября 2023 года
          для тех, у кого отсутствует подписка{" "}
          <mark className="app">Adobe Creative Cloud</mark>.{" "}
          <em className="article-note-muted">
            Да, перестаньте об этом спрашивать, пожалуйста.
          </em>
        </p>
        <Addition type="info">
          Источники, распространяющие в интернете{" "}
          <mark className="app">Adobe Photoshop</mark> с «генеративной заливкой» — либо
          распространяют устаревшую бету-версию или патчер-заменятор-файлов от{" "}
          <mark className="user">m0nkrus</mark>, которую тоже исправили давным давно, либо
          предлагают оформить пробную версию на 14 дней. Нам эти варианты не подходят.
        </Addition>
        <p>
          Но не стоит расстраиваться: использовать сторонние плагины и сервисы для
          генерации изображений и <mark className="word">инпеинта</mark> никто не
          запрещал, поэтому об аналогах мы и поговорим.
        </p>
        <Divider>Разбираем доступные варианты</Divider>
        <ul>
          <li>
            Вы можете развернуть локальный <mark className="app">Stable Diffusion</mark> и
            использовать его в качестве плагина для{" "}
            <mark className="app">Adobe Photoshop</mark>. Данный способ требует хорошей
            видеокарты с объёмом VRAM не менее 8 ГБ.
          </li>
          <li>
            Либо вы можете воспользоваться различными онлайн-сервисами по генерации
            изображений и редактирования уже существующих. Например,{" "}
            <a href="https://krea.ai">KreaAI</a> или{" "}
            <a href="https://www.recraft.ai/">RecraftAI</a>.
          </li>
          <li>
            Из онлайн-сервисов, заменяющий <mark className="plugin">Adobe Firefly</mark>{" "}
            был популярен плагин <mark className="plugin">Alpaca ML</mark>, но его работа
            была прекращена 25 октября 2024 года, а ссылки на регистрацию и скачивание
            были удалены, поэтому поговорить о нём мы не можем.
          </li>
          <li>
            Ну и крайний способ — оформлять пробную версию на 14 дней и каждый раз
            регистрировать новый аккаунт <mark className="company">Adobe</mark>. Это нам в
            любом случае не подходит, так как в некоторых случаях при активации пробной
            версии с вас попросят данные банковской карты или PayPal.
          </li>
        </ul>
        <p>
          Более подробно поговорим только о самом локальном{" "}
          <mark className="app">Stable Diffusion</mark> и его внедрении в{" "}
          <mark className="app">Adobe Photoshop</mark> через плагин.
        </p>
        <Divider>
          Связываем <mark className="app">Stable Diffusion</mark> с{" "}
          <mark className="app">Adobe Photoshop</mark>
        </Divider>
        <Addition type="warning">
          Действия проделываются на устройстве с операционной системой Windows. Способ
          соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark> на устройствах с macOS не
          проверялся.
        </Addition>
        <p>
          Для начала нам нужно загрузить сам <mark className="app">Stable Diffusion</mark>
          . Это можно сделать с помощью программы{" "}
          <mark className="app">Stability Matrix</mark>, который можно загрузить из{" "}
          <a href="https://github.com/LykosAI/StabilityMatrix/releases">
            страницы релизов на GitHub
          </a>
          . Он доступен для Windows и macOS.
        </p>
        <Addition type="info">
          Если у вас уже установлен <mark className="app">Stable Diffusion</mark>, то вы
          можете пропустить этап установки и перейти сразу к установке плагинов.
        </Addition>
        <p>
          Программа портативная, то есть может устанавливаться где угодно на вашем
          компьютере и даже на внешнем носителе. Чтобы продолжить настройку — нажмите на{" "}
          <mark className="select">«Continue»</mark>. После перехода к окну{" "}
          <mark className="select">«Analytics»</mark> нажмите на{" "}
          <mark className="select">«Don&apos;t Share Analytics»</mark>.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/first_start_stability_matrix.png"
          type="image"
        />
        <Addition type="info">
          <ul>
            <li>
              Рекомендуется использовать скоростной накопитель для более быстрой загрузки
              моделей для генерации изображений.
            </li>
            <li>
              Рекомендуется иметь не менее 20-30 ГБ свободного места на накопителе, так
              как среднестатистическая модель Stable Diffusion занимает около 4-8 ГБ в
              зависимости от типа модели.
            </li>
          </ul>
        </Addition>
        <p>
          Далее программа предлагает нам установить любой интерфейс для{" "}
          <mark className="app">Stable Diffusion</mark>. В данной статье я выберу{" "}
          <mark className="select">«Stable Diffusion reForge»</mark>, так как она хорошо
          оптимизирована для слабых видеокарт. Вы же можете выбрать любой другой
          интерфейс, основанный на <mark className="app">Automatic1111</mark> или
          следовать моему выбору.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/stability_matrix_select_ui.png"
          type="image"
        />
        <p>
          После выбора интерфейса нам предложат скачать популярные модели, но для
          генеративной заливки или расширения изображений они нам не особо подойдут,
          поэтому загрузку моделей мы пока что пропустим, нажав на{" "}
          <mark className="select">«Close»</mark>. После этого начнётся скачивание всего и
          вся, поэтому наберитесь терпения.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/select_popular_models_stability_matrix.png"
          type="image"
        />
        <Addition type="info">
          Если вы столкнулись с ошибкой{" "}
          <mark className="quote">«Package Modification Failed»</mark>, то повторите
          попытку установки интерфейса снова, нажав на кнопку{" "}
          <mark className="select">«Add Package»</mark> в вкладке{" "}
          <mark className="select">«Packages»</mark>.
        </Addition>
        <p>
          Более подробно о работе программы и интерфейсе{" "}
          <mark className="app">Stability Matrix</mark> вы можете посмотреть в видео ниже.
        </p>
        <ArticleMedia
          src="Fjl9dAoRqHM"
          type="youtube"
        />
        <p>
          Если у вас установка интерфейса прошла успешно, то время устанавливать плагин
          для соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>. Загрузку моделей для генеративной
          заливки и подобного мы отложим и вернёмся к нему позже.
        </p>
        <Addition type="warning">
          Для загрузки моделей возможно потребуется код API для CivitAI, который надо
          будет ввести в настройках <mark className="app">Stability Matrix</mark>. Его
          можно создать в{" "}
          <a href="https://civitai.com/user/account">настройках вашего профиля</a> после
          регистрации на ресурсе.
        </Addition>
        <p>
          Далее нам нужно запустить сам интерфейс{" "}
          <mark className="app">Stable Diffusion</mark>, нажав на{" "}
          <mark className="select">«Launch»</mark> в странице пакетов. Первый запуск
          интерфейса может продлиться некоторое время, особенно если не установлена ни
          одна модель, так как мы скачивание моделей пропустили. После успешной загрузки
          дополнительных зависимостей у вас откроется локальный сервер и автоматически
          откроется браузер с адресом <a href="http://127.0.0.1:7860/">127.0.0.1:7860</a>.
        </p>
        <p>
          Далее в интерфейсе <mark className="app">Stable Diffusion</mark> мы переходим в
          вкладку <mark className="select">«Extensions»</mark>, чтобы найти там плагин для
          соединения <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ArticleMedia
          caption="Firefox // Stable Diffusion"
          src="legacy/photoshop/select_extensions_sd.png"
          type="image"
        />
        <p>
          В вкладке <mark className="select">«Extensions»</mark> нам нужно перейти в
          вкладку <mark className="select">«Available»</mark> и загрузить список моделей,
          нажав на <mark className="select">«Load from»</mark> в верхней части окна. Затем
          нужно ввести в поиск расширений слово{" "}
          <mark className="company">Adobe Photoshop</mark> и нажать на{" "}
          <mark className="select">«Install»</mark> рядом с{" "}
          <mark className="plugin">Auto-Photoshop-StableDiffusion-Plugin</mark>.
        </p>
        <ArticleMedia
          caption="Firefox // Stable Diffusion"
          src="legacy/photoshop/download_ps_sd_extension.png"
          type="image"
        />
        <p>
          После установки расширения в <mark className="app">Stable Diffusion</mark>{" "}
          вернитесь на вкладку <mark className="select">«Installed»</mark> и нажмите на
          кнопку <mark className="select">«Apply and quit»</mark>. Таким образом вы
          перезагрузите сервер <mark className="app">Stable Diffusion</mark> и активируете
          плагин.
        </p>
        <ArticleMedia
          caption="Firefox // Stable Diffusion"
          src="legacy/photoshop/apply_and_restart_sd.png"
          type="image"
        />
        <p>
          С установкой плагина для <mark className="app">Stable Diffusion</mark> мы
          разобрались, осталось установить плагин для{" "}
          <mark className="app">Adobe Photoshop</mark>. Для этого переходим на{" "}
          <a href="https://github.com/AbdullahAlfaraj/Auto-Photoshop-StableDiffusion-Plugin/releases">
            страницу релизов плагина на GitHub
          </a>{" "}
          и выбираем любой удобный вам способ установки плагина. Я же выберу вариант
          установки плагина через распаковку <mark className="file">ZIP</mark> архива и
          скачиваю именно <mark className="file">ZIP</mark> файл. Его нужно распаковать в
          папку{" "}
          <mark className="path">
            C:\Program Files\Adobe\Adobe Photoshop 20XX\Plug-ins
          </mark>
          , создав дополнительную папку с любым названием на латинице, чтобы не было хаоса
          в этой папке.
        </p>
        <p>
          Казалось бы, можно уже запускать <mark className="app">Adobe Photoshop</mark> и
          творить чудеса. Но мы всё-таки не установили модели для генерации изображений.
          Для этого вернитесь в <mark className="app">Stability Matrix</mark> и перейдите
          в раздел с моделями.
        </p>
        <p>
          Там нам нужно найти любую вам понравившуюся модель именно с пометкой{" "}
          <mark className="term">Inpainting</mark>. Различные версии можно найти на
          странице модели.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/download_inpainting_model.png"
          type="image"
        />
        <p>
          Далее нам нужно открыть сам плагин в{" "}
          <mark className="app">Adobe Photoshop</mark>. Для этого переходим в{" "}
          <mark className="select">«Plugins»</mark> и выбираем{" "}
          <mark className="plugin">
            «Auto Photoshop StableDiffusion Plugin» → «Auto-Photoshop-SD»
          </mark>
          .
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/open_sd_plugin_in_ps.png"
          type="image"
        />
        <p>
          В открытом окне плагина мы переходим на вкладку{" "}
          <mark className="select">«Settings»</mark> и выбираем тип интерфейса, в моем
          случае это <mark className="select">«Automatic1111»</mark> и вводим чуть выше
          адрес сервера <mark className="app">Stable Diffusion</mark>, который открывается
          в браузере.
        </p>
        <Addition type="info">
          Если у вас установлен <mark className="app">ComfyUI</mark>, то вы можете
          оставить стандартную галочку и указать другой адрес сервера при необходимости.
        </Addition>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/change_server_sd_settings.png"
          type="image"
        />
        <p>
          Нам может выбить ошибка про отсутствие флага <mark className="code">--api</mark>
          , который мы не вставляли перед запуском{" "}
          <mark className="app">Stable Diffusion</mark>. И естественно из-за этого пока не
          получится подключить <mark className="app">Stable Diffusion</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/forgotten_api_flag.png"
          type="image"
        />
        <p>
          Решается это просто, нам нужно снова вернуться в{" "}
          <mark className="app">Stability Matrix</mark>, открыть настройки запуска,
          пролистать вниз и в поле{" "}
          <mark className="select">«Extra Launch Arguments»</mark> впишите{" "}
          <mark className="code">--api</mark>.
        </p>
        <ArticleMedia
          caption="Stability Matrix"
          src="legacy/photoshop/enter_launch_arguments.png"
          type="image"
        />
        <p>
          После этого перезагрузите сервер <mark className="app">SD</mark>, если он был
          запущен, а затем в <mark className="app">Adobe Photoshop</mark> в вкладке{" "}
          <mark className="select">«Stable Diffusion»</mark> плагина нажмите на кнопку{" "}
          <mark className="select">«Refresh»</mark>. После этого соединение между двумя
          вселенными произойдет корректно и даже появится возможность выбрать модель.
          Установку плагина можно считать завершённой, осталось разобраться с интерфейсом
          плагина.
        </p>
        <Addition type="info">
          Если соединение между двумя вселенными всё ещё не может установиться —
          попробуйте разрешить соединение по порту, на котором работает{" "}
          <mark className="app">Stable Diffusion</mark>, в{" "}
          <mark className="app">брандмауэре Windows</mark>. Возможно он был заблокирован
          для блокировки доступа <mark className="app">Adobe Photoshop</mark> в интернет.
        </Addition>
        <Addition type="warning">
          Перед использованием параметров <mark className="select">«Img2Img»</mark>,{" "}
          <mark className="select">«Outpainting»</mark> или{" "}
          <mark className="select">«Inpainting»</mark> — не забудьте переключиться на
          соответствующую модель, иначе можете наткнуться на неожиданные генерации.
        </Addition>
        <ArticleMedia
          caption="Stable Diffusion в Adobe Photoshop"
          src="legacy/photoshop/sd_in_ps_example.mp4"
          type="video"
        />
        <p>
          Результат генераций без первоначальных настроек может быть ни о чём, но никто не
          запрещал настраивать ваши генерации более детально. Но об этом я не буду
          заострять внимание, ведь информации об{" "}
          <mark className="app">Stable Diffusion</mark> довольно много на просторах
          интернета. А ещё лучше — создать изображения в браузерном интерфейсе (WebUI)
          генератора изображений.
        </p>
        <Addition type="warning">
          Прежде чем использовать плагин для соединения <mark className="app">SD</mark> и{" "}
          <mark className="app">Adobe Photoshop</mark> — интерфейс{" "}
          <mark className="app">Stable Diffusion</mark> нужно каждый раз запускать через{" "}
          <mark className="app">Stability Matrix</mark>, если он не был запущен. Да, это
          может быть не удобно, но куда деваться.
        </Addition>
        <Divider>
          <mark className="app">Firefly</mark> в{" "}
          <mark className="app">Adobe Lightroom</mark> для устройств на Android
        </Divider>
        <p>
          Если вам прям позарез нужно использовать{" "}
          <mark className="company">Adobe Firefly</mark> для одноразового использования,
          то вы можете установить «народную» версию{" "}
          <mark className="app">Adobe Lightroom</mark> для{" "}
          <a href="https://4pda.to/forum/index.php?showtopic=636042">
            устройств на Android
          </a>
          . Почему «одноразовое» использование? Потому что{" "}
          <mark className="company">Adobe Firefly</mark> работает на серверах и для
          пользователей без активной подписки любого плана от{" "}
          <mark className="company">Adobe</mark> предоставляется малое количество
          «генеративных баллов».
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Для работоспособности генеративной заливки для удаления требуется вход в
              аккаунт <mark className="company">Adobe</mark>.
            </li>
            <li>
              Генеративная заливка с помощью{" "}
              <mark className="company">Adobe Firefly</mark> будет работать только для
              удаления объектов без возможности указать свой{" "}
              <mark className="word">промпт</mark>.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="neural-filters-download"
        tag="neural filters"
        title="Где и как скачать нейро-фильтры в Photoshop?"
      >
        <p>
          Вы, наверное, не раз натыкались на то, что вкладка{" "}
          <mark className="select">«Neural Filters»</mark> не доступна на «народных»
          версиях <mark className="app">Adobe Photoshop</mark>. Она не активна по той
          причине, что вы не вошли в аккаунт <mark className="company">Adobe</mark>.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/disabled_neural_filters.png"
          type="image"
        />
        <p>
          Чтобы активировать вкладку <mark className="select">«Neural Filters»</mark> вам
          нужно зарегистрировать аккаунт <mark className="company">Adobe</mark> если у вас
          его нет и войти в него. Для этого перейдите в{" "}
          <mark className="select">«Help»</mark> и нажмите на{" "}
          <mark className="select">«Sign In»</mark>. В открывшемся окне произведите вход в
          аккаунт.
        </p>
        <Addition type="info">
          Если при попытке входа в аккаунт вы столкнулись с окном{" "}
          <mark className="select">«Sorry, something went wrong»</mark> и надписью{" "}
          <mark className="select">«Are you connected to the internet?»</mark>, то, скорее
          всего, программа не может выйти в интернет. Для решения этой проблемы временно
          разрешите программе доступ в сеть в настройках{" "}
          <mark className="app">брандмауэра</mark>.
        </Addition>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/help_sign_in.png"
          type="image"
        />
        <p>
          После входа в аккаунт вкладка <mark className="select">«Neural Filters»</mark> в
          контекстном меню <mark className="select">«Filter»</mark> станет активной и вы
          сможете загрузить нейро-фильтры, нажав на иконку загрузки рядом с ними.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/download_neural_filters.png"
          type="image"
        />
        <p>
          Но не тут-то было: иногда загрузка нейро-фильтров сразу прерывается без
          объяснения причины. Чтобы это исправить, нужно внести несколько адресов в файл{" "}
          <mark className="file">HOSTS</mark>. Для этого вам нужно перейти в{" "}
          <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопировать файл{" "}
          <mark className="path">hosts</mark> в любое удобное место, открыть любой
          текстовый редактор, например <mark className="app">Notepad++</mark> или{" "}
          <mark className="app">VS Code</mark>, и внести строки чуть ниже в конец файла.
          Затем сохраните отредактированный файл и перенесите его обратно в{" "}
          <mark className="path">C:\Windows\System32\drivers\etc\hosts</mark> с заменой и
          перезагрузите <mark className="app">Adobe Photoshop</mark>, если он у вас был
          открыт.
        </p>
        <Addition type="warning">
          Для изменения системных файлов требуются права администратора.
        </Addition>
        <CodeSnippet>
          {`127.0.0.1 cc-api-data.adobe.io
127.0.0.1 ic.adobe.io
127.0.0.1 genuine.adobe.com
127.0.0.1 prod.adobegenuine.com
127.0.0.1 assets.adobedtm.com`}
        </CodeSnippet>
        <p>
          После этого загрузка нейро-фильтров должна начаться нормально. Нейро-фильтры
          обычно загружаются в папку{" "}
          <mark className="path">
            %APPDATA%\Adobe\UXP\PluginsStorage\PHSP\XX\Internal\com.adobe.nfp.gallery\PluginData
          </mark>
          , где <mark className="version">XX</mark> — версия программы, указанная в первой
          части числа в <mark className="select">«Help» → «About Photoshop»</mark>. Эта
          информация вам пригодится, если вы хотите удалить файлы нейро-фильтров или
          распаковать их в нужную папку из другого источника в интернете.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="kpojiuk-corrupted-install-files"
        tag="репак от кролика"
        title="«Некоторые установочные файлы были повреждены. Загрузите свежую копию и повторите установку»"
      >
        <p>
          Эта ошибка возникает, когда вы пытаетесь открыть установщик репака от{" "}
          <mark className="user">KpoJIuK</mark>, а он оказывается битым и не может
          корректно распаковаться. Часто это происходит из-за некорректных действий
          пользователя или срабатывания антивирусной программы на вашем устройстве с
          Windows.
        </p>
        <Divider>Устраняем эту ошибку</Divider>
        <ul>
          <li>
            <p>
              Убедитесь в том, что вы полностью скачали файл. Довольно часто веб-версия{" "}
              <mark className="app">Telegram</mark> загружает установочные файлы с
              ошибками.{" "}
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
              Если вы полностью скачали файл с канала{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> и вы
              уверены, что проблема не на вашей стороне, сообщите об этом в комментариях
              под постом.
            </Addition>
          </li>
          <li>
            <p>
              Если вы скачали репак, запакованный в многотомный архив, которые обычно
              помечаются как <mark className="file">PART1</mark>,{" "}
              <mark className="file">PART2</mark> и так далее по порядку, убедитесь в том,
              что вы скачали все части архива, а также его корректно распаковали.
            </p>
            <Addition type="info">
              Чтобы распаковать такой архив, достаточно начать распаковку первой части
              архива, остальные части подхватятся автоматически. Для распаковки таких
              архивов рекомендую воспользоваться <mark className="app">WinRAR</mark>.
            </Addition>
          </li>
          <li>
            Иногда корректному открытию инсталлятора может мешать включенное{" "}
            <mark className="app">антивирусное ПО</mark>, которое вставляет палки в
            колёса, считая файлы, распаковывающиеся во временную директорию как за вирус.
            В таком случае рекомендуется отключить его, конечно же на свой страх и риск.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="kpojiuk-the-hosts-file-does-not-exist-or-is-not-accessible"
        tag="репак от кролика"
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
        tag="репак от кролика"
        title="Забыл убрать галочку с рекламой при установке репака от KpoJIuK. Как избавиться от последствий?"
      >
        <p>
          По умолчанию в репаках от <mark className="user">KpoJIuK</mark> включена галочка{" "}
          <mark className="select">«Реклама»</mark>, поэтому можно случайно нарваться на
          установку <mark className="web">me.fo</mark> или{" "}
          <mark className="web">hi.ru</mark> в качестве стартовой страницы браузера или на
          установку <mark className="app">Яндекс.Браузера</mark>. К счастью все эти
          нововведения можно удалить через <mark className="app">Панель управления</mark>{" "}
          или любым удобным для вас способом.
        </p>
        <p>
          В следующий раз не забывайте убирать галочку{" "}
          <mark className="select">«Реклама»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-creative-cloud-missing"
        tag="ошибка запуска, хвосты от неудачного удаления, переустановка, adobe cc"
        title="«Приложение Adobe Creative Cloud, необходимое для устранения проблемы, отсутствует или повреждено...» при запуске программы"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                Такая ошибка может возникнуть, если вы когда-то установили{" "}
                <mark className="app">Adobe Creative Cloud</mark> рядом с «народными»
                версиями программ, из которых его предварительно вырезали. А затем решили
                удалить само приложение <mark className="app">Adobe Creative Cloud</mark>,
                оставив за собой нежелательные «хвосты».
              </p>
              <p>
                Решение довольно простое: удалите все приложения от{" "}
                <mark className="company">Adobe</mark> и установите их заново — это
                поможет избавиться от лишних зависимостей, связанных с{" "}
                <mark className="app">Adobe Creative Cloud</mark>. Да, вы не ослышались.
                Чтобы полностью очистить систему от программ{" "}
                <mark className="company">Adobe</mark> — воспользуйтесь консольной
                утилитой{" "}
                <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                  Adobe Creative Cloud Cleaner
                </a>{" "}
                или любым другим деинсталлятором, например{" "}
                <mark className="app">Revo Uninstaller</mark>.
              </p>
            </>
          }
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
      <Addition type="info">
        Некоторые решения проблем, которые могут у вас возникнуть после установки
        дополнительных материалов или во время использования программы, находятся в общем
        разделе <a href="#errors">«Ошибки и предупреждения»</a>.
      </Addition>
    </div>
  );
};

export default PsInstallProblems;
