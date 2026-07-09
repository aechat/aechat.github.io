import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PrFromNewbies: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="get-started"
        tag="для новичка, курсы, туториалы, уроки, базовый курс"
        title="Я первый раз открыл программу. С чего бы мне начать обучение?"
      >
        <Addition type="danger">
          Эта подборка носит ознакомительный характер и не заменяет индивидуальный план
          обучения. Используйте её как отправную точку для изучения монтажа в{" "}
          <mark className="app">Adobe Premiere</mark> и смежных инструментов, которые
          могут понадобиться в работе.
        </Addition>
        <Addition type="warning">
          <ul>
            <li>
              Учтите, что большинство авторов курсов и каналов на{" "}
              <mark className="web">YouTube</mark> работают в английской версии программы.
              Чтобы избежать проблем с локализацией, рекомендуется{" "}
              <a href="#switch-language">изменить язык программы</a> на английский, если у
              вас установлена русская версия. Это поможет избежать путаницы с переводом
              названий эффектов или элементов интерфейса.
            </li>
            <li>
              Если вы предпочитаете работать с русской локализацией{" "}
              <mark className="app">Adobe Premiere</mark>, вам может пригодиться таблица
              перевода <a href="#effects-list">эффектов</a>.
            </li>
            <li>
              Не стоит всерьёз полагаться на <mark className="app">ChatGPT</mark>,{" "}
              <mark className="app">DeepSeek</mark> или другие текстовые нейросети при
              обучении работе в <mark className="app">Adobe Premiere</mark>. Они часто
              придумывают несуществующие функции программы или указывают не на те элементы
              интерфейса.
            </li>
          </ul>
        </Addition>
        <Divider>Подборка курсов для начинающих</Divider>
        <ul>
          <li>
            <p>
              Если вы только начинаете заниматься монтажом или хотите лучше разобраться в
              интерфейсе и возможностях <mark className="app">Adobe Premiere</mark>,
              пройдите курс{" "}
              <a href="https://www.youtube.com/playlist?list=PLcN7xY5E2wrmIlv6SNF2xacsryFtGIfXK">
                «Азбука Adobe Premiere Pro»
              </a>{" "}
              от <a href="https://youtube.com/zernov">Ильи Зернова</a>. Этот курс поможет
              вам освоить интерфейс программы и научиться работать с клипами и эффектами.
            </p>
            <Addition type="warning">
              Курс был записан в <mark className="app">Adobe Premiere Pro</mark>{" "}
              <mark className="version">13.X (2019)</mark>. Некоторые функции и комбинации
              клавиш могут отличаться от вашей текущей версии программы.
            </Addition>
            <ArticleMedia
              src="Wi-AalXwilg"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Если вы уже знакомы с интерфейсом программы, но всё ещё чувствуете себя
              неуверенно, попробуйте изучить каналы на{" "}
              <mark className="web">YouTube</mark> из списка ниже: они помогут прокачать
              ваши навыки.
            </p>
            <div className="flexible-links">
              <a href="https://www.youtube.com/@VideoRevealed/videos">VideoRevealed</a>
              <a href="https://www.youtube.com/@egorlistopadov">Егор Листопадов</a>
              <a href="https://www.youtube.com/@Profileschool/videos">Profileschool</a>
              <a href="https://www.youtube.com/@pankovskii/playlists">PANKOVSKII</a>
              <a href="https://www.youtube.com/@DmitryKolotilshikov/videos">
                Дмитрий Колотильщиков
              </a>
              <a href="https://www.youtube.com/@VIDEODIM/videos">Как монтировать видео</a>
            </div>
            <p>
              И не забываем про дополнительный список комплексных курсов по{" "}
              <mark className="app">Adobe Premiere</mark>, затрагивающий разные области
              применения программы.
            </p>
            <div className="flexible-links">
              <a href="https://cloudlessons.ru/v/530/">«Супер Premiere» от VideoSmile</a>
              <a href="https://www.profileschool.ru/category/video/course_adobe_premiere_base">
                «Adobe Premiere Pro базового уровня» от Дмитрия Ларионова
              </a>
              <a href="https://www.profileschool.ru/category/video/course_theory_editing">
                «Теория монтажа. Первый уровень» от Дмитрия Ларионова
              </a>
              <a href="https://khs.ru/montage-video">
                «Монтаж видео в Premiere Pro» от KHS
              </a>
            </div>
          </li>
        </ul>
        <Divider>Принципы монтажа</Divider>
        <p>
          Знание кнопок в программе не сделает вас монтажёром без понимания законов
          склейки кадров. Чтобы видео смотрелось целостно, а зритель не терял ориентацию в
          пространстве сцены, изучите базовые принципы монтажа на основе набора правил от
          советского режиссёра Алексея Георгиевича Соколова.
        </p>
        <ArticleMedia
          src="eR_NKRUeTBc"
          type="youtube"
        />
        <div className="flexible-links">
          <a href="https://www.youtube.com/playlist?list=PLC1VMnkSWzhzzfKZVF3jLUqKo3UoINFAR">
            «Виды монтажа» от ANIMATION SCHOOL
          </a>
        </div>
        <Divider>Подборка туториалов на разные темы</Divider>
        <ul>
          <li>
            <p>
              После сборки чернового варианта склейки кадры нужно выровнять по цвету и
              экспозиции. Для освоения базовых инструментов цветокоррекции в программе
              изучите работу с <mark className="plugin">Lumetri Color</mark> от{" "}
              <a href="https://www.youtube.com/@pankovskii">PANKOVSKII</a>.
            </p>
            <ArticleMedia
              src="HOkM0nllRv8"
              type="youtube"
            />
            <Addition type="info">
              Учтите, что хорошие материалы по цветокоррекции видео на{" "}
              <mark className="web">YouTube</mark> и в Интернете чаще всего показываются
              на примере <mark className="app">Davinci Resolve</mark>. Однако, если
              разобраться в базовых инструментах, «красить» видео можно в почти любой
              программе, в том числе и в <mark className="app">Adobe Premiere</mark>.
            </Addition>
            <p>
              Также цветокоррекцию под определённый стиль вы можете выполнить с помощью
              сторонних плагинов, например <mark className="plugin">Dehancer Pro</mark>,{" "}
              <mark className="plugin">Magic Bullet Looks</mark> или похожих инструментов.
            </p>
            <ArticleMedia
              src="z2Il2mTt4xY"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Звук в видео не менее важен, чем картинка, поэтому его тоже стоит
              обрабатывать. Для этого обычно используется окно{" "}
              <mark className="select">«Track Mixer»</mark>.
            </p>
            <ArticleMedia
              src="vjah3INC2UU"
              type="youtube"
            />
            <Addition type="info">
              <ul>
                <li>
                  Аудиоэффекты можно применять напрямую к конкретным клипам на таймлайне.
                  Для этого выберите нужный инструмент в панели{" "}
                  <mark className="select">«Effects»</mark> в категории аудио.
                </li>
                <li>
                  <p>
                    <mark className="app">Adobe Premiere</mark> поддерживает сторонние
                    аудиоплагины форматов <mark className="file">VST</mark> и{" "}
                    <mark className="file">VST3</mark>. Программа не ищет их автоматически
                    при запуске, поэтому их сканирование нужно запустить вручную.
                  </p>
                  <p>
                    Для этого перейдите в{" "}
                    <mark className="select">«Edit» → «Preferences» → «Audio»</mark>,
                    нажмите кнопку <mark className="select">«Manage Audio Plug-Ins»</mark>{" "}
                    и в открывшемся окне кликните{" "}
                    <mark className="select">«Scan for Plug-Ins»</mark>. При необходимости
                    можно добавить собственную папку с плагинами с помощью кнопки{" "}
                    <mark className="select">«Add»</mark> в разделе{" "}
                    <mark className="select">«VST Plug-In Folders»</mark>, если
                    автоматический поиск не нашёл нужные файлы.
                  </p>
                </li>
              </ul>
            </Addition>
            <p>
              Для более глубокого изучения темы работы со звуком стоит обратиться к
              профильным курсам.
            </p>
            <div className="flexible-links">
              <a href="https://www.profileschool.ru/category/audio/course_sound_basics">
                «Основы звука» от Артура Орлова
              </a>
              <a href="https://www.profileschool.ru/category/audio/course_introduction_to_sound">
                «Введение в звук» от Артура Орлова
              </a>
              <a href="https://www.profileschool.ru/category/video/course_sound_processing_for_video">
                «Работа со звуком для видео» от Артура Орлова
              </a>
              <a href="https://www.profileschool.ru/category/audio/course_music_theory">
                «Теория музыки» от Артура Орлова
              </a>
            </div>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="keyboard-shortcuts"
        tag="хоткеи, горячие клавиши, шорткаты, keyboard shortcuts, hotkeys"
        title="Где найти таблицу комбинаций клавиш?"
      >
        <p>
          Горячие клавиши сокращают количество лишних кликов мышью и заметно ускоряют
          выполнение рутинных задач. Ниже собраны популярные комбинации для работы с
          проектами в <mark className="app">Adobe Premiere</mark>.
        </p>
        <Addition type="warning">
          Горячие клавиши в этой таблице могут отличаться в зависимости от вашей версии
          программы и заданных вами комбинаций. Посмотреть клавиши, которые назначены у
          вас для определённого действия, вы можете с помощью окна настроек комбинаций
          клавиш в <mark className="select">«Edit» → «Keyboard Shortcuts»</mark>.
          Подробный список комбинаций клавиш вы можете найти{" "}
          <a href="https://helpx.adobe.com/premiere/desktop/get-started/keyboard-shortcuts/default-keyboard-shortcuts.html">
            на официальном сайте Adobe
          </a>
          .
        </Addition>
        <ContentFilter
          windowsContent={
            <>
              <Divider>Выбор инструментов</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Selection Tool»</mark> — инструмент
                      выделения клипов и элементов на таймлайне
                    </td>
                    <td>
                      <mark className="key">V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Track Select Forward Tool»</mark> —
                      инструмент выделения клипов правее курсора на таймлайне
                    </td>
                    <td>
                      <mark className="key">A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Track Select Backward Tool»</mark> —
                      инструмент выделения клипов левее курсора на таймлайне
                    </td>
                    <td>
                      <mark className="key">Shift + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ripple Edit Tool»</mark> — инструмент для
                      подрезки начала и конца клипа со сдвигом остальных клипов на
                      таймлайне
                    </td>
                    <td>
                      <mark className="key">B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Rolling Edit Tool»</mark> — инструмент
                      изменения соотношения длины двух клипов на таймлайне
                    </td>
                    <td>
                      <mark className="key">N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Rate Stretch Tool»</mark> — инструмент
                      удлинения или укорачивания клипа на таймлайне
                    </td>
                    <td>
                      <mark className="key">R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Razor Tool»</mark> — инструмент резки
                      клипов на таймлайне
                    </td>
                    <td>
                      <mark className="key">C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Slip Tool»</mark> — инструмент смещения
                      клипа с сохранением позиции на таймлайне
                    </td>
                    <td>
                      <mark className="key">Y</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Slide Tool»</mark> — инструмент смещения
                      клипа, оставляя его на месте на таймлайне
                    </td>
                    <td>
                      <mark className="key">U</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Pen Tool»</mark> — инструмент пера для
                      рисования масок или создания фигур
                    </td>
                    <td>
                      <mark className="key">P</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Hand Tool»</mark> — инструмент руки для
                      перемещения некоторых частей интерфейса
                    </td>
                    <td>
                      <mark className="key">H</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom Tool»</mark> — инструмент лупы для
                      увеличения или уменьшения предпросмотра
                    </td>
                    <td>
                      <mark className="key">Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Type Tool»</mark> — инструмент создания и
                      редактирования текста
                    </td>
                    <td>
                      <mark className="key">T</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Работа с файлами и проектом (File)</Divider>
              <table className="table">
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«New Project»</mark> — создать новый проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Sequence»</mark> — создать новую
                      секвенцию
                    </td>
                    <td>
                      <mark className="key">Ctrl + N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Bin»</mark> — создать новую папку в
                      панели <mark className="select">«Project»</mark>
                      <Addition type="info">
                        Комбинация работает только если панель{" "}
                        <mark className="select">«Project»</mark> в фокусе.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Bin From Selection»</mark> — создать папку
                      из выделенных элементов в панели{" "}
                      <mark className="select">«Project»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Open Project»</mark> — открыть проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + O</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Close»</mark> — закрыть активную панель
                    </td>
                    <td>
                      <mark className="key">Ctrl + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Close Project»</mark> — закрыть текущий
                      проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Save»</mark> — сохранить текущий проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Save As»</mark> — сохранить проект под
                      новым именем
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Save a Copy»</mark> — сохранить копию
                      проекта под новым именем
                      <Addition type="info">
                        Разница этого действия с <mark className="select">«Save As»</mark>{" "}
                        заключается в том, что{" "}
                        <mark className="select">«Save a Copy»</mark> добавляет слово{" "}
                        <mark className="copy">Copy</mark> в название проекта при
                        сохранении, а <mark className="select">«Save As»</mark> — нет.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Import»</mark> — открыть окно импорта
                      файлов
                    </td>
                    <td>
                      <mark className="key">Ctrl + I</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Export Media»</mark> — отправить секвенцию
                      на экспорт прямо из <mark className="app">Adobe Premiere</mark>
                    </td>
                    <td>
                      <mark className="key">Ctrl + M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Send to Adobe Media Encoder»</mark> —
                      отправить секвенцию на экспорт в{" "}
                      <mark className="app">Adobe Media Encoder</mark>
                    </td>
                    <td>
                      <mark className="key">Alt + Shift + M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Export Frame»</mark> — экспортировать
                      текущий кадр как изображение
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Get Media File Properties for Selection»
                      </mark>{" "}
                      — открыть панель{" "}
                      <mark className="select">«Media File Properties»</mark> для
                      выделенных файлов
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + H</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Exit»</mark> — завершить работу{" "}
                      <mark className="app">Adobe Premiere</mark>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Q</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Редактирование (Edit)</Divider>
              <table className="table">
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Undo»</mark> — отменить последнее действие
                      <Addition type="info">
                        <p>
                          Объём хранения последних действий можно изменить в поле{" "}
                          <mark className="select">«History States»</mark> в контекстном
                          меню панели{" "}
                          <mark className="select">«History» → «Settings»</mark>. По
                          умолчанию установлено значение <mark className="copy">32</mark>.
                        </p>
                        <Addition type="warning">
                          История последних действий хранится только в пределах текущей
                          сессии. Если вы завершите работу программы — история не
                          восстановится.
                        </Addition>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Redo»</mark> — вернуть отменённое действие
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Cut»</mark> — вырезать выделенные элементы
                      и поместить их в буфер обмена
                    </td>
                    <td>
                      <mark className="key">Ctrl + X</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Copy»</mark> — скопировать выделенные
                      элементы и поместить их в буфер обмена
                    </td>
                    <td>
                      <mark className="key">Ctrl + C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste»</mark> — вставить содержимое из
                      буфера обмена
                    </td>
                    <td>
                      <mark className="key">Ctrl + V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste Insert»</mark> — вставить содержимое
                      из буфера обмена вставкой
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste Attributes»</mark> — вставить
                      скопированные атрибуты клипа
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste To Same Track»</mark> — вставить
                      клип на той же дорожке таймлайна, где он был
                    </td>
                    <td>
                      <mark className="key">Ctrl + V</mark>
                      <Addition type="info">
                        В <mark className="app">Adobe Premiere Pro</mark>{" "}
                        <mark className="version">22.5 (2022)</mark> и ниже данная
                        комбинация клавиш была назначена на действие{" "}
                        <mark className="select">«Paste»</mark>, которое работает как{" "}
                        <mark className="select">«Paste To Target Track»</mark>.
                      </Addition>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Paste Insert To Same Track»</mark> —
                      вставить клип со сдвигом на той же дорожке таймлайна, где он был
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + V</mark>
                      <Addition type="info">
                        В <mark className="app">Adobe Premiere Pro</mark>{" "}
                        <mark className="version">22.5 (2022)</mark> и ниже данная
                        комбинация клавиш была назначена на действие{" "}
                        <mark className="select">«Paste Insert»</mark>, которое работает
                        как <mark className="select">«Paste Insert To Target Track»</mark>
                        .
                      </Addition>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Clear»</mark> — удалить выделенный объект
                    </td>
                    <td>
                      <mark className="key">Delete</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ripple Delete»</mark> — удалить выделенный
                      клип и сдвинуть остальные на его место
                    </td>
                    <td>
                      <mark className="key">Shift + Delete</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Duplicate»</mark> — продублировать
                      выделенные объекты в панели{" "}
                      <mark className="select">«Project»</mark>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + /</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Select All»</mark> — выделить всё
                      <Addition type="info">
                        Выделение зависит от состояния фокуса панели, например{" "}
                        <mark className="select">«Timeline»</mark> или{" "}
                        <mark className="select">«Project»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Deselect All»</mark> — убрать выделение
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Find»</mark> — открыть окно поиска
                      <Addition type="info">
                        Работа поиска зависит от состояния фокуса панелей{" "}
                        <mark className="select">«Project»</mark> или{" "}
                        <mark className="select">«Timeline»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + F</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Edit Original»</mark> — открыть выделенный
                      файл из панели <mark className="select">«Timeline»</mark> или{" "}
                      <mark className="select">«Project»</mark> в сторонней программе
                      <Addition type="info">
                        Открытие выделенного файла в сторонней программе зависит от
                        настроенных зависимостей для каждого расширения файла в настройках
                        вашей системы. Это может быть видеопроигрыватель или графический
                        редактор.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + E</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Клипы (Clip)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Modify Clip» → «Audio Channels»</mark> —
                      открыть настройки аудиоканалов выделенных клипов
                    </td>
                    <td>
                      <mark className="key">Shift + G</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Audio Gain»</mark> — открыть окно
                      нормализации громкости аудиодорожки выделенного клипа
                    </td>
                    <td>
                      <mark className="key">G</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Speed/Duration...»</mark> — открыть окно
                      редактирования скорости и интерполяции для выделенных клипов
                    </td>
                    <td>
                      <mark className="key">Ctrl + R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Insert»</mark> — вставить клип из панели{" "}
                      <mark className="select">«Source Monitor»</mark> или{" "}
                      <mark className="select">«Project»</mark> на таймлайне
                    </td>
                    <td>
                      <mark className="key">
                        , <span className="shortcut-hint">(Б)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Overwrite»</mark> — заменить клип на
                      таймлайне содержимым, открытым в{" "}
                      <mark className="select">«Source Monitor»</mark> или выделенным в{" "}
                      <mark className="select">«Project»</mark>
                    </td>
                    <td>
                      <mark className="key">
                        . <span className="shortcut-hint">(Ю)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Link»</mark> — связать или отвязать видео
                      и аудио выделенных клипов на таймлайне
                    </td>
                    <td>
                      <mark className="key">Ctrl + L</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Group»</mark> — сгруппировать выделенные
                      клипы
                    </td>
                    <td>
                      <mark className="key">Ctrl + G</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ungroup»</mark> — разгруппировать
                      выделенные клипы
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + G</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Addition type="info">
                Для действий создания <mark className="select">«Nest»</mark> и{" "}
                <mark className="select">«Make Subsequence»</mark> из выделенных клипов по
                умолчанию нет комбинаций клавиш. Однако вы можете их назначить вручную в
                настройках горячих клавиш, например <mark className="select">«Nest»</mark>{" "}
                на <mark className="key">Ctrl + Shift + U</mark>.
              </Addition>
              <Divider>Секвенция (Sequence)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Render Effects in Work Area»</mark> —
                      начать пререндер участков секвенции, отмеченных красной полосой
                      рендеринга
                      <Addition type="info">
                        При желании вы также можете настроить комбинацию клавиш для
                        действия <mark className="select">«Render In to Out»</mark>,
                        которое выполняет пререндер участков секвенции, отмеченных жёлтыми
                        и красными полосами рендеринга, например на{" "}
                        <mark className="key">Shift + Enter</mark>.{" "}
                        <a href="#render-bar-colors">Что эти цвета означают?</a>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Enter</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Match Frame»</mark> — синхронизировать
                      выделенный клип с панелью{" "}
                      <mark className="select">«Source Monitor»</mark>.
                      <Addition type="warning">
                        Данное действие не будет выполнено, если в рабочем пространстве не
                        открыт <mark className="select">«Source Monitor»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">F</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Reverse Match Frame»</mark> — переместить
                      индикатор текущего времени на таймлайне к моменту исходника в панели{" "}
                      <mark className="select">«Source Monitor»</mark>
                      <Addition type="warning">
                        Данное действие не будет выполнено, если в рабочем пространстве не
                        открыт <mark className="select">«Source Monitor»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Shift + R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Next Edit Point»</mark> — перейти к
                      следующей точке склейки клипов от индикатора текущего времени
                      <Addition type="info">
                        <ul>
                          <li>
                            Данное поведение зависит от указанных{" "}
                            <mark className="select">«Track Targeting»</mark> на
                            таймлайне.
                          </li>
                          <li>
                            Действие зависит от состояния фокуса панели{" "}
                            <mark className="select">«Timeline»</mark>.
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        ↓ <span className="shortcut-hint">(вниз)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Previous Edit Point»</mark> —
                      перейти к предыдущей точке склейки клипов от индикатора текущего
                      времени
                      <Addition type="info">
                        <ul>
                          <li>
                            Данное поведение зависит от указанных{" "}
                            <mark className="select">«Track Targeting»</mark> на
                            таймлайне.
                          </li>
                          <li>
                            Действие зависит от состояния фокуса панели{" "}
                            <mark className="select">«Timeline»</mark>.
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        ↑ <span className="shortcut-hint">(вверх)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Next Edit Point on Any Track»</mark>{" "}
                      — перейти к следующей точке склейки клипов от индикатора текущего
                      времени на любой дорожке
                      <Addition type="info">
                        Действие зависит от состояния фокуса панели{" "}
                        <mark className="select">«Timeline»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Shift + ↓ <span className="shortcut-hint">(вниз)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Go to Previous Edit Point on Any Track»
                      </mark>{" "}
                      — перейти к предыдущей точке склейки клипов от индикатора текущего
                      времени на любой дорожке
                      <Addition type="info">
                        Действие зависит от состояния фокуса панели{" "}
                        <mark className="select">«Timeline»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Shift + ↑ <span className="shortcut-hint">(вверх)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Extend Selected Edit to Playhead»</mark> —
                      продлить выбранный стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Forward»</mark> — подрезать вперёд
                      <Addition type="info">
                        Данное действие будет работать, если выделено начало или конец
                        клипа
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + → <span className="shortcut-hint">(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Backward»</mark> — подрезать назад
                      <Addition type="info">
                        Данное действие будет работать, если выделено начало или конец
                        клипа
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + ← <span className="shortcut-hint">(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Forward Many»</mark> — подрезать
                      вперёд на шаг<sup>1</sup>
                      <Addition type="info">
                        <ul>
                          <li>
                            Данное действие будет работать, если выделено начало или конец
                            клипа.
                          </li>
                          <li>
                            <sup>1</sup> По умолчанию в{" "}
                            <mark className="app">Adobe Premiere</mark> настроено на
                            смещение в пределах 5 кадров или 100 единиц времени аудио.
                            Данные значения можно изменить в{" "}
                            <mark className="select">
                              «Edit» → «Preferences» → «Trim»
                            </mark>
                            .
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Shift + → <span className="shortcut-hint">(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Backward Many»</mark> — подрезать
                      назад на шаг<sup>1</sup>
                      <Addition type="info">
                        <ul>
                          <li>
                            Данное действие будет работать, если выделено начало или конец
                            клипа.
                          </li>
                          <li>
                            <sup>1</sup> По умолчанию в{" "}
                            <mark className="app">Adobe Premiere</mark> настроено на
                            смещение в пределах 5 кадров или 100 единиц времени аудио.
                            Данные значения можно изменить в{" "}
                            <mark className="select">
                              «Edit» → «Preferences» → «Trim»
                            </mark>
                            .
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Shift + ← <span className="shortcut-hint">(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Ripple Trim Previous Edit To Playhead»
                      </mark>{" "}
                      — разрезать клип до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Q</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ripple Trim Next Edit To Playhead»</mark>{" "}
                      — разрезать клип после индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Extend Previous Edit To Playhead»</mark> —
                      продлить предыдущий стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Shift + Q</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Extend Next Edit To Playhead»</mark> —
                      продлить следующий стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Shift + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Previous Edit to Playhead»</mark> —
                      подрезать предыдущий стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Q</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Next Edit to Playhead»</mark> —
                      подрезать следующий стык до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Add Edit»</mark> — разрезать выделенный
                      клип по индикатору текущего времени
                    </td>
                    <td>
                      <mark className="key">Ctrl + K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Add Edit to All Tracks»</mark> — разрезать
                      клипы по индикатору текущего времени на всех дорожках, кроме
                      заблокированных
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Apply Video Transition»</mark> — применить
                      видеопереход
                      <Addition type="info">
                        По умолчанию применяется переход{" "}
                        <mark className="plugin">«Cross Dissolve»</mark>. Вы можете
                        изменить переход на свой, выбрав нужный переход в панели{" "}
                        <mark className="select">«Effects»</mark> и с помощью{" "}
                        <mark className="key">ПКМ</mark> нажать{" "}
                        <mark className="select">
                          «Set Selected as Default Transition»
                        </mark>
                        .
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Apply Audio Transition»</mark> — применить
                      аудиопереход
                      <Addition type="info">
                        По умолчанию применяется переход{" "}
                        <mark className="plugin">«Constant Power»</mark>. Вы можете
                        изменить переход на свой, выбрав нужный переход в панели{" "}
                        <mark className="select">«Effects»</mark> и с помощью{" "}
                        <mark className="key">ПКМ</mark> нажать{" "}
                        <mark className="select">
                          «Set Selected as Default Transition»
                        </mark>
                        .
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Apply Default Transitions to Selection»
                      </mark>{" "}
                      — применить видеопереходы и аудиопереходы к выделенным клипам
                      <Addition type="info">
                        По умолчанию для видео применяется переход{" "}
                        <mark className="plugin">«Cross Dissolve»</mark>, а для аудио —{" "}
                        <mark className="plugin">«Constant Power»</mark>. Вы можете
                        изменить переход на свой, выбрав нужный переход в панели{" "}
                        <mark className="select">«Effects»</mark> и с помощью{" "}
                        <mark className="key">ПКМ</mark> нажать{" "}
                        <mark className="select">
                          «Set Selected as Default Transition»
                        </mark>
                        .
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Shift + D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom Out»</mark> — уменьшить масштаб
                      таймлайна в <mark className="select">«Timeline»</mark>,{" "}
                      <mark className="select">«Program Monitor»</mark> и{" "}
                      <mark className="select">«Source Monitor»</mark>, а также масштаб
                      содержимого панелей <mark className="select">«Project»</mark> и{" "}
                      <mark className="select">«Media Browser»</mark>
                    </td>
                    <td>
                      <mark className="key">-</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom In»</mark> — увеличить масштаб
                      таймлайна в <mark className="select">«Timeline»</mark>,{" "}
                      <mark className="select">«Program Monitor»</mark> и{" "}
                      <mark className="select">«Source Monitor»</mark>, а также масштаб
                      содержимого панелей <mark className="select">«Project»</mark> и{" "}
                      <mark className="select">«Media Browser»</mark>
                    </td>
                    <td>
                      <mark className="key">=</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Snap»</mark> — переключить привязку клипов
                      и склеек на таймлайне при перемещении или добавлении клипов или
                      склеек
                    </td>
                    <td>
                      <mark className="key">S</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Маркеры</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Mark In»</mark> — поставить точку входа на
                      таймлайне
                    </td>
                    <td>
                      <mark className="key">I</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Mark Out»</mark> — поставить точку выхода
                      на таймлайне
                    </td>
                    <td>
                      <mark className="key">O</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Mark Clip»</mark> — пометить точки входа и
                      выхода вокруг клипа, находящегося под индикатором текущего времени
                      на таймлайне
                    </td>
                    <td>
                      <mark className="key">X</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Mark Selection»</mark> — пометить точки
                      входа и выхода в пределах выделенных клипов на таймлайне
                    </td>
                    <td>
                      <mark className="key">/</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to In»</mark> — перейти к точке входа
                      на таймлайне
                    </td>
                    <td>
                      <mark className="key">Shift + I</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Out»</mark> — перейти к точке выхода
                      на таймлайне
                    </td>
                    <td>
                      <mark className="key">Shift + O</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Clear In and Out»</mark> — убрать точки
                      входа и выхода на таймлайне
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + X</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Add Marker»</mark> — добавить маркер
                      выделенному клипу под индикатором текущего времени
                      <Addition type="info">
                        Если выделенный клип находится вне позиции индикатора текущего
                        времени или ничего не выделено, маркер установится на секвенцию.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Next Marker»</mark> — перейти к
                      следующему маркеру от индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Shift + M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Previous Marker»</mark> — перейти к
                      предыдущему маркеру от индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Clear Selected Marker»</mark> — удалить
                      выделенные маркеры
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + M</mark>
                      <Addition type="warning">
                        Дополнительно, зажав <mark className="key">Shift</mark>, вы
                        удалите все маркеры на секвенции.
                      </Addition>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Графика (Graphics and Titles)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Text»</mark> — создать новый слой с
                      текстом
                    </td>
                    <td>
                      <mark className="key">Ctrl + T</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Rectangle»</mark> — создать новый
                      прямоугольник
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Ellipse»</mark> — создать новый эллипс
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Arrange» → «Bring Forward»</mark> —
                      переместить выделенный слой в{" "}
                      <mark className="select">«Graphic»</mark> выше по иерархии
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + ] <span className="shortcut-hint">(Ъ)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Arrange» → «Send Backward»</mark> —
                      переместить выделенный слой в{" "}
                      <mark className="select">«Graphic»</mark> ниже по иерархии
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + [ <span className="shortcut-hint">(Х)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Select Next Layer»</mark> — выделить
                      следующий слой в <mark className="select">«Graphic»</mark>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Alt + ] <span className="shortcut-hint">(Ъ)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Select Previous Layer»</mark> — выделить
                      предыдущий слой в <mark className="select">«Graphic»</mark>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Alt + [ <span className="shortcut-hint">(Х)</span>
                      </mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Работа с окнами (Window)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Project»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 1</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Source Monitor»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 2</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Timeline»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 3</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Program Monitor»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 4</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Effect Controls»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 5</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Audio Track Mixer»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 6</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Effects»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 7</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Media Browser»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 8</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Открыть панель <mark className="select">«Audio Clip Mixer»</mark>
                    </td>
                    <td>
                      <mark className="key">Shift + 9</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Reset to Saved Layout»</mark> — сбросить
                      рабочее пространство до последнего сохранённого состояния
                    </td>
                    <td>
                      <mark className="key">Alt + Shift + 0</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Воспроизведение и навигация (Playback)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Play-Stop Toggle»</mark> — начать или
                      остановить воспроизведение предпросмотра
                    </td>
                    <td>
                      <mark className="key">Space</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Play from Playhead to Out Point»</mark> —
                      проиграть от индикатора текущего времени до точки выхода
                    </td>
                    <td>
                      <mark className="key">Ctrl + Space</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Play In to Out»</mark> — проиграть
                      предпросмотр в пределах рабочей области
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + Space</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shuttle Left»</mark> — проиграть
                      предпросмотр назад
                      <Addition type="info">
                        Многократное нажатие ускоряет проигрывание, с модификатором{" "}
                        <mark className="key">Shift</mark>, наоборот, замедляет.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">J</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shuttle Stop»</mark> — остановить
                      перемотку
                    </td>
                    <td>
                      <mark className="key">K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shuttle Right»</mark> — проиграть
                      предпросмотр вперёд
                      <Addition type="info">
                        Многократное нажатие ускоряет проигрывание, с модификатором{" "}
                        <mark className="key">Shift</mark>, наоборот, замедляет.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">L</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Step Back 1 Frame»</mark> — перейти на
                      предыдущий кадр
                    </td>
                    <td>
                      <mark className="key">
                        ← <span className="shortcut-hint">(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Step Backward Many»</mark> — перейти назад
                      на шаг<sup>1</sup>
                      <Addition type="info">
                        <sup>1</sup> По умолчанию в{" "}
                        <mark className="app">Adobe Premiere</mark> шаг смещения
                        составляет 5 кадров. Изменить это значение можно в{" "}
                        <mark className="select">
                          «Edit» → «Preferences» → «Playback»
                        </mark>{" "}
                        в параметре{" "}
                        <mark className="select">«Step forward/back many»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Shift + ← <span className="shortcut-hint">(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Step Forward 1 Frame»</mark> — перейти на
                      следующий кадр
                    </td>
                    <td>
                      <mark className="key">
                        → <span className="shortcut-hint">(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Step Forward Many»</mark> — перейти вперёд
                      на шаг<sup>1</sup>
                      <Addition type="info">
                        <sup>1</sup> По умолчанию в{" "}
                        <mark className="app">Adobe Premiere</mark> шаг смещения
                        составляет 5 кадров. Изменить это значение можно в{" "}
                        <mark className="select">
                          «Edit» → «Preferences» → «Playback»
                        </mark>{" "}
                        в параметре{" "}
                        <mark className="select">«Step forward/back many»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Shift + → <span className="shortcut-hint">(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Selected Clip Start»</mark> —
                      перейти к началу выделенного клипа
                    </td>
                    <td>
                      <mark className="key">Shift + Home</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Selected Clip End»</mark> — перейти
                      к концу выделенного клипа
                    </td>
                    <td>
                      <mark className="key">Shift + End</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Select Clip at Playhead»</mark> — выделить
                      текущий клип под индикатором текущего времени
                      <Addition type="info">
                        Работает, если выключен{" "}
                        <mark className="select">«Select Follow Playhead»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">D</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Субтитры (Captions)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">«Add Captions Track»</mark> — добавить
                      дорожку с субтитрами
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Add new caption segment at playhead»
                      </mark>{" "}
                      — добавить новый сегмент субтитров на таймлайне
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Center align text»</mark> — выровнять
                      текст субтитров по центру
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + C</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Интерфейс и окно программы (Window)</Divider>
              <table>
                <thead>
                  <tr>
                    <th>Действие</th>
                    <th className="shortcut-column">Комбинация</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <mark className="select">
                        «Maximize or Restore Frame Under Cursor»
                      </mark>{" "}
                      — развернуть или восстановить панель под курсором
                    </td>
                    <td>
                      <mark className="key">
                        ` <span className="shortcut-hint">(Ё)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Maximize or Restore Active Frame»</mark> —
                      развернуть или восстановить активную панель
                    </td>
                    <td>
                      <mark className="key">
                        Shift + ` <span className="shortcut-hint">(Ё)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Toggle Full Screen»</mark> — включить или
                      выключить полноэкранный режим
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + ` <span className="shortcut-hint">(Ё)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>Раскрыть программу на весь экран, скрыв заголовок окна</td>
                    <td>
                      <mark className="key">Ctrl + \</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="recommended-plugins"
        tag="список рекомендаций, топ плагинов, скрипты, расширения"
        title="Какие полезные дополнения стоит установить для работы с проектами?"
      >
        <p>
          Сторонние дополнения — вещь полезная, которая может ускорить{" "}
          <em className="article-note-muted">или замедлить</em> выполнение разных действий
          с композициями и слоями, а также расширить функционал{" "}
          <mark className="app">Adobe Premiere</mark>. В этой статье собрана подборка
          популярных дополнений и эффектов для разных задач.
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Пожалуйста, не устанавливайте всё подряд в{" "}
              <mark className="app">Adobe Premiere</mark>. Ставьте только те дополнения,
              которые действительно планируете использовать в работе. Избыточное
              количество плагинов и расширений перегружает программу и может заметно
              замедлить её запуск и работу.
            </li>
            <li>Подборка автора статьи может не совпадать с вашим мнением.</li>
          </ul>
        </Addition>
        <Addition type="info">
          <ul>
            <li>
              Большинство дополнений из статьи можно найти в каналах{" "}
              <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a>{" "}
              или <a href="https://t.me/+ZqiaMfQRFgM4YmEy">«Яблоневый сад» (macOS)</a>.
              <Addition type="info">
                Инструкции по установке популярных форматов дополнений вы можете найти в{" "}
                <a href="#how-to-install">статье 2.1</a>.
              </Addition>
            </li>
            <li>
              <p>
                Прежде, чем начать — отдельно хочется сказать по терминологии. Часто
                новички загоняют под одну гребёнку слова{" "}
                <mark className="word">плагин</mark> и{" "}
                <mark className="word">расширения</mark>, хотя область действий у них
                кардинально отличаются.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    <p>
                      <mark className="word">Плагин</mark> — дополнение к{" "}
                      <mark className="app">Adobe Premiere</mark> и иногда к{" "}
                      <mark className="app">Adobe After Effects</mark> и{" "}
                      <mark className="app">Adobe Media Encoder</mark> формата{" "}
                      <mark className="file">PRM</mark> или{" "}
                      <mark className="file">AEX</mark> на{" "}
                      <mark className="os">Windows</mark> и{" "}
                      <mark className="file">BUNDLE</mark> или{" "}
                      <mark className="file">PLUGIN</mark> на{" "}
                      <mark className="os">macOS</mark>. Обычно с помощью них вы
                      расширяете функционал программы за счёт добавления новых эффектов в{" "}
                      <mark className="select">«Effects»</mark>, новый формат рендера или
                      новых элементов меню.
                    </p>
                    <Addition type="danger">
                      <ul>
                        <li>
                          Плагины формата <mark className="file">PRM</mark> и{" "}
                          <mark className="file">AEX</mark> не подходят для устройств на{" "}
                          macOS, так как они предназначены для устройств на Windows.
                        </li>
                        <li>
                          Плагины формата <mark className="file">BUNDLE</mark> и{" "}
                          <mark className="file">PLUGIN</mark> не подходят для устройств
                          на Windows, так как они предназначены для устройств на macOS.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <mark className="word">Расширение</mark> — дополнение формата{" "}
                    <mark className="file">ZXP</mark>, которое может устанавливаться на
                    обеих платформах — Windows и macOS. Чаще всего представляет собой
                    веб-страницу в стеке <mark className="file-code">HTML</mark>,{" "}
                    <mark className="file-code">CSS</mark> и{" "}
                    <mark className="file-code">JavaScript</mark>, бэкэндом и доступом к
                    вашей файловой системе, выполняющее определённые действия и связывает
                    веб-страницу с <mark className="app">Adobe After Effects</mark>. Сами
                    страницы и скрипты для них могут писаться как на чистом{" "}
                    <mark className="file-code">JavaScript</mark>, так и с использованием
                    различных фреймворков, например{" "}
                    <mark className="file-code">React</mark> или{" "}
                    <mark className="file-code">Vue</mark>.
                  </li>
                </ul>
              </Addition>
            </li>
          </ul>
        </Addition>
        <Divider>Подборка для совместимости с чужими проектами</Divider>
        <ul>
          <li>
            <p>
              <mark className="plugin">Boris FX Sapphire</mark> и{" "}
              <mark className="plugin">Boris FX Continuum</mark> — пакеты популярных
              эффектов от <mark className="company">Boris FX</mark>, которые дополняют
              скудный стандартный набор инструментов.
            </p>
            <p>
              Из ключевых эффектов этих пакетов можно выделить{" "}
              <mark className="plugin">S_Shake</mark> для создания эффекта тряски слоя,{" "}
              <mark className="plugin">S_LensFlare</mark> для создания имитации бликов
              объектива, <mark className="plugin">BCC+Primatte Studio</mark> для кеинга и{" "}
              <mark className="plugin">BCC+UpRes ML</mark> для улучшения «качества» слоя.{" "}
              <a href="https://support.borisfx.com/hc/en-us/articles/11229342880141-What-s-the-difference-between-BCC-and-BCC">
                В чём разница между «BCC» и «BCC+»?
              </a>
            </p>
            <ArticleMedia
              src="knBQt0MNGr0"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Пакеты от <mark className="company">Red Giant</mark>:{" "}
              <mark className="plugin">Magic Bullet Suite</mark>,{" "}
              <mark className="plugin">VFX Suite</mark> и{" "}
              <mark className="plugin">Universe</mark>. Последние версии первых трёх
              пакетов объединены в один <mark className="plugin">Maxon Red Giant</mark>, а{" "}
              <mark className="plugin">Maxon Universe</mark> по-прежнему устанавливается
              отдельно.
            </p>
            <p>
              Из ключевых эффектов этих пакетов можно выделить{" "}
              <mark className="plugin">Primatte Keyer</mark> и{" "}
              <mark className="plugin">Supercomp</mark> для композитинга, а также{" "}
              <mark className="plugin">Magic Bullet Looks</mark> и{" "}
              <mark className="plugin">Magic Bullet Cosmo</mark> для цветокоррекции и
              ретуши.
            </p>
            <ArticleMedia
              src="y2HphEWcNTM"
              type="youtube"
            />
          </li>
          <li>
            <mark className="plugin">Boris FX Mocha Pro</mark> — расширенная версия
            стандартного плагина для трекинга <mark className="plugin">Mocha AE</mark> без
            ограничений. <a href="#mocha-ae-vs-pro">Чем они отличаются?</a>
            <ArticleMedia
              src="Deajk1XAWVc"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Twixtor</mark> и{" "}
              <mark className="plugin">RSMB</mark> от{" "}
              <mark className="company">RE:VisionFX</mark> — эффекты для создания плавного
              замедления происходящего на слое и создания размытия в движении.{" "}
              <a href="#frame-interpolation">Чем ещё можно плавно замедлить видео?</a>
            </p>
            <ArticleMedia
              src="20Smtrzt3m4"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Film Impact Premium Transitions</mark> и{" "}
              <mark className="plugin">Film Impact Premium Effects</mark> — сборник
              различных эффектов и переходов. Ранее этот набор был платным, но начиная с{" "}
              <mark className="app">Adobe Premiere Pro</mark>{" "}
              <mark className="version">25.6 (2025)</mark> он входит в стандартную
              поставку программы.
            </p>
            <ArticleMedia
              src="TScee_B9Qt8"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">FXHome Ignite Pro</mark> — сборник эффектов,
              названия которых выглядят как стандартные эффекты{" "}
              <mark className="app">Adobe Premiere</mark>. Иногда при открытии чужих
              проектов с такими эффектами у пользователей без установленного пакета
              возникает вопрос: откуда они взялись, являются ли они стандартными и как их
              установить.
            </p>
            <Addition type="warning">
              На момент написания статьи компания <mark className="company">FXHome</mark>{" "}
              прекратила существование, поэтому поддержка этих эффектов завершена и они
              больше недоступны на официальном сайте.
            </Addition>
            <ArticleMedia
              src="oV1PIx1HZNQ"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">FilmConvert</mark> — плагин для применения
              различных фильтров для имитации плёнки.
            </p>
            <ArticleMedia
              src="0GaskxpUwYo"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Neat Video</mark> — плагин для шумоподавления и
              уменьшения мерцания на видео.
            </p>
            <ArticleMedia
              src="DYKBQF7eIUo"
              type="youtube"
            />
          </li>
        </ul>
        <Divider>Подборка полезных инструментов</Divider>
        <li>
          <p>
            <mark className="plugin">Excalibur</mark> — панель для быстрого применения
            переходов и эффектов, а также для выполнения других действий. По умолчанию
            вызывается комбинацией клавиш <mark className="key">Alt + Space</mark>, но её
            можно переназначить в настройках расширения. Это расширение можно считать
            аналогом <mark className="plugin">FX Console</mark> из{" "}
            <mark className="app">Adobe After Effects</mark> для{" "}
            <mark className="app">Adobe Premiere</mark>.
          </p>
          <ArticleMedia
            src="lvlgHy5TQx8"
            type="youtube"
          />
        </li>
        <li>
          <p>
            <mark className="plugin">AtomX</mark>,{" "}
            <mark className="plugin">MotionBro</mark>,{" "}
            <mark className="plugin">Premiere Composer</mark> и похожие расширения с
            различными паками помогут ускорить работу за счёт быстрого применения
            разнообразных эффектов и переходов.
          </p>
          <ArticleMedia
            src="Cmq0ToqZZns"
            type="youtube"
          />
          <Addition type="warning">
            <ul>
              <li>
                Учтите, что при применении некоторых переходов из пакетов для этих
                расширений производительность проекта может снизиться.
              </li>
              <li>
                Не рекомендуется хранить файлы пакетов этих расширений по пути длиннее 255
                символов: это может вызвать ошибки импорта и нестабильную работу
                расширений.
              </li>
            </ul>
          </Addition>
        </li>
        <li>
          <p>
            <mark className="app">Nobe OmniScope</mark> — дополнение, которое подключается
            к <mark className="app">Adobe Premiere</mark> и другим монтажным программам
            для отображения скопов вашего видео. Похоже на{" "}
            <mark className="plugin">Lumetri Scopes</mark>, но функциональнее.
          </p>
          <ArticleMedia
            src="2omKlqykk9w"
            type="youtube"
          />
        </li>
        <Divider>Подборка для синхронизации дорожек c разных камер</Divider>
        <ul>
          <li>
            <p>
              <mark className="app">PluralEyes</mark> — программа от{" "}
              <mark className="company">Red Giant</mark> для синхронизации всех аудио и
              видео, снятые с разных камер.
            </p>
            <Addition type="warning">
              На момент написания статьи поддержка программы прекращена: пользоваться ей
              можно, но новых обновлений не будет.{" "}
              <a href="https://support.maxon.net/hc/en-us/articles/7389361453340-PluralEyes-Limited-Maintenance-Mode">
                Подробнее...
              </a>
            </Addition>
            <ArticleMedia
              src="oNwq2w2mNuA"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="app">Syncaila</mark> — отечественный продукт для
              синхронизации многокамерной съёмки.
            </p>
            <ArticleMedia
              src="sxhbLwIdTt8"
              type="youtube"
            />
            <Addition type="info">
              В программе доступна пробная версия на 20 дней. После её завершения
              синхронизация ограничивается 20 клипами на двух дорожках. Полную версию{" "}
              <mark className="app">Syncaila</mark> можно приобрести на{" "}
              <a href="https://syncaila.com/ru#section-licenses">официальном сайте</a>.
            </Addition>
          </li>
        </ul>
        <Divider>Подборка для создания субтитров</Divider>
        <ul>
          <li>
            <p>
              <mark className="app">Subtitle Edit</mark> — сторонняя программа для
              редактирования и генерации субтитров из звука с помощью технологий{" "}
              <mark className="app">Whisper</mark> и{" "}
              <mark className="app">Vosk/Kaldi</mark>.
            </p>
            <ArticleMedia
              src="ZDXyBAzApH8"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Submachine</mark> — расширение для создания
              анимированных субтитров для <mark className="web">TikTok</mark>,{" "}
              <mark className="web">YouTube Shorts</mark> или{" "}
              <mark className="web">Instagram Reels</mark>
              <sup>1</sup>. Перед использованием лучше уделить время на его изучение.
            </p>
            <ArticleMedia
              src="xYidiPvc_LY"
              type="youtube"
            />
            <Addition type="warning">
              Данное расширение на <mark className="app">Adobe Premiere Pro</mark>{" "}
              <mark className="version">24.2 (2024)</mark> и{" "}
              <mark className="app">Adobe Premiere Pro</mark>{" "}
              <mark className="version">24.2.1 (2024)</mark> может работать некорректно.
            </Addition>
            <Addition type="danger">
              <sup>1</sup> <mark className="web">Instagram</mark> и{" "}
              <mark className="company">Meta</mark> признаны экстремистскими организациями
              и запрещены на территории Российской Федерации.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="plugin">Captioneer</mark> — аналог предыдущего в списке
              дополнения, с его помощью тоже можно создавать анимированные субтитры и
              применять на них стили из <mark className="file">MOGRT</mark> файлов.
            </p>
            <ArticleMedia
              src="44MGfi6mNTw"
              type="youtube"
            />
          </li>
        </ul>
        <Divider>Подборка для обработки звука</Divider>
        <Addition type="info">
          <mark className="app">Adobe Premiere</mark> поддерживает любые VST3-плагины,
          поэтому вы можете пользоваться своими любимыми эффектами для обработки звука,
          если вы работали ранее в DAW-программах и хотите перенести эффекты оттуда.
        </Addition>
        <ul>
          <li>
            <p>
              <mark className="plugin">iZotope RX</mark>,{" "}
              <mark className="plugin">iZotope Nectar</mark> и{" "}
              <mark className="plugin">iZotope Ozone</mark> — плагины для обработки звука,
              восстановления голоса и мастеринга.
            </p>
            <ArticleMedia
              src="oWR5aGBmlYo"
              type="youtube"
            />
          </li>
          <li>
            <mark className="plugin">FabFilter Bundle</mark> — сборник различных плагинов
            для обработки звука.
          </li>
          <li>
            <mark className="plugin">Antares Auto-Tune</mark> — знаменитый плагин для
            коррекции голоса.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="changelog"
        tag="что нового, фишки, обновления, апдейты, патчноуты"
        title="Где я могу узнать о нововведениях в обновлениях программы?"
      >
        <p>
          Обычно на сайте <mark className="company">Adobe</mark> в день выхода публичной
          стабильной версии выкладываются основные нововведения. Это сделано для того,
          чтобы каждый прохожий не спрашивал из каждого угла{" "}
          <mark className="quote">А что обновилось то?</mark>. Ещё время от времени{" "}
          <mark className="company">Adobe</mark> выкладывает на сайт список выявленных
          неполадок и старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/premiere-pro/using/whats-new.html">
            Что нового в Adobe Premiere последних выпусков
          </a>
          <a href="https://helpx.adobe.com/premiere-pro/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/premiere-pro/kb/known-issues.html">
            Выявленные неполадки в Adobe Premiere
          </a>
        </div>
        <p>
          Мы советуем время от времени обновлять{" "}
          <mark className="app">Adobe Premiere</mark>, а также сторонние плагины, чтобы
          исключить возможные проблемы при дальнейшем использовании программы.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="switch-language"
        tag="изменить язык, смена языка, установка английской версии"
        title="Почему мне с каждого угла советуют поставить английский язык программы и как это сделать?"
      >
        <p>
          В <mark className="app">Adobe Premiere</mark>, как и в случае с{" "}
          <mark className="app">Adobe After Effects</mark>, вы можете наткнуться на
          различные баги и приколы при использовании сторонних шаблонов,{" "}
          <mark className="file">MOGRT</mark> или пресетов. Создатели подобного рода
          контента не рассчитывают на то, что вы будете использовать другую локализацию{" "}
          <mark className="app">Adobe Premiere</mark>, отличную от английской.
        </p>
        <ContentFilter
          macContent={
            <>
              <p>
                Для быстрой смены языка программы вам нужно открыть консоль с помощью
                комбинации клавиш <mark className="key">Control + F12</mark> и
                переключиться на режим отображения{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <Addition type="info">
                Если вместо функциональных клавиш у вас срабатывает изменение громкости,
                дополнительно зажмите <mark className="key">Fn</mark> вместе с указанной
                выше комбинацией или измените поведение функциональных клавиш в настройках
                macOS.
              </Addition>
            </>
          }
          windowsContent={
            <p>
              Для быстрой смены языка программы вам нужно открыть консоль с помощью
              комбинации клавиш <mark className="key">Ctrl + F12</mark> и переключиться на
              режим отображения <mark className="select">«Debug Database View»</mark>.
            </p>
          }
        />
        <ArticleMedia
          caption="Включение вида Debug Database View"
          src="legacy/premierepro/console_debug-database-view.png"
          type="image"
        />
        <p>
          Затем в строке поиска нам нужно написать{" "}
          <mark className="copy">ApplicationLanguage</mark> или найти этот параметр
          вручную. В строке с одноимённым параметром вводим значение{" "}
          <mark className="copy">en_US</mark>.
        </p>
        <ArticleMedia
          caption="Установка английского языка в консоли"
          src="legacy/premierepro/set_language_console.png"
          type="image"
        />
        <p>
          После ввода значения — перезагрузите программу и вы сможете насладиться
          англоязычным интерфейсом программы.
        </p>
        <Addition type="info">
          Чтобы вернуть язык, который был установлен по умолчанию — достаточно убрать
          значение из этого параметра и снова перезапустить{" "}
          <mark className="app">Adobe Premiere</mark>.
        </Addition>
        <Addition type="danger">
          После таких способов смены языка названия стандартных пресетов и рабочих
          областей могут остаться на русском языке. Их можно будет переименовать вручную
          или удалить, а затем поставить поверх дистрибутив{" "}
          <mark className="app">Adobe Premiere</mark> с указанием английского языка в
          установщике. Ну или просто переустановите программу сразу на английском языке.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="configure-backup"
        tag="бекап, бэкап, возврат, вернуть, восстановить, облачное хранилище, облако, яндекс диск, журнал файлов, история изменений, откат проекта"
        title="Как настроить резервное копирование, чтобы возвращаться к предыдущим версиям проекта?"
      >
        <p>
          Бывают ситуации, когда после внесённых изменений клиенту результат не нравится и
          нужно вернуться к предыдущей версии. Или, например, файл проекта{" "}
          <mark className="file">PRPROJ</mark> неожиданно повредился после сбоя. Если
          заранее позаботиться о резервном копировании, таких проблем можно избежать. Есть
          два варианта: в облачном хранилище или локально.
        </p>
        <Divider>Создаём резервные копии в облачном хранилище</Divider>
        <p>
          Один из самых простых способов резервного копирования — использовать облачное
          хранилище с включённой автоматической синхронизацией. У популярных сервисов,
          например <mark className="app">Яндекс.Диск</mark>,{" "}
          <mark className="app">Google Drive</mark>, <mark className="app">Dropbox</mark>{" "}
          есть клиенты для Windows и macOS, которые синхронизируют указанные вами папки
          автоматически.
        </p>
        <p>
          Во многих таких сервисах доступна история версий — она позволяет вернуть старую
          копию файла, если вы что-то случайно удалили или перезаписали. Учтите, что у
          каждого сервиса есть свой срок хранения истории версий файлов — уточняйте это в
          вашем тарифном плане.
        </p>
        <div className="flexible-links">
          <a href="https://yandex.ru/support/yandex-360/customers/disk/desktop/windows/ru/version-control">
            История изменений файла в Яндекс.Диске
          </a>
          <a href="https://support.google.com/drive/answer/2409045?hl=ru&co=GENIE.Platform%3DDesktop">
            Журнал версий в Google Диске
          </a>
          <a href="https://help.dropbox.com/ru-ru/delete-restore/version-history-overview">
            Журнал версий файлов в Dropbox
          </a>
          <a href="https://help.mega.io/ru/files-folders/restore-delete/file-version-history">
            Как управлять версиями файлов в Mega
          </a>
          <a href="https://support.microsoft.com/ru-ru/office/%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%B5%D0%B4%D1%8B%D0%B4%D1%83%D1%89%D0%B5%D0%B9-%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8-%D1%84%D0%B0%D0%B9%D0%BB%D0%B0-%D1%85%D1%80%D0%B0%D0%BD%D1%8F%D1%89%D0%B5%D0%B3%D0%BE%D1%81%D1%8F-%D0%B2-onedrive-159cad6d-d76e-4981-88ef-de6e96c93893">
            Восстановление предыдущей версии файла в OneDrive
          </a>
        </div>
        <Divider>Создаём локальные резервные копии стандартными средствами ОС</Divider>
        <p>
          Если вариант с облачным хранилищем не подходит, можно организовать систему
          резервного копирования локально. И в Windows, и в macOS есть встроенные функции
          для этого. Обычно для их работы требуется отдельный накопитель.
        </p>
        <ContentFilter
          macContent={
            <>
              <p>
                В macOS эта функция называется <mark className="app">Time Machine</mark>.
                Она создаёт «снимки» вашей системы и файлов каждый час или по нажатию
                кнопки. Для работы <mark className="app">Time Machine</mark> нужен внешний
                накопитель, желательно объёмом от 512 ГБ.
              </p>
              <ArticleMedia
                src="Gx76i28c150"
                type="youtube"
              />
            </>
          }
          windowsContent={
            <>
              <p>
                В Windows эта функция называется{" "}
                <mark className="app">«История файлов»</mark>. Она создаёт копии файлов в
                другой папке или на другом диске. С её помощью можно восстановить
                удалённый или предыдущую версию файла. Для работы этой функции нужно
                заранее указать диск для сохранения копий.
              </p>
              <ArticleMedia
                src="xDFQEx9gylc"
                type="youtube"
              />
              <p>
                В параметрах можно задать, как часто сохраняются резервные копии — от
                каждых 10 минут до одного раза в день — и сколько они будут храниться: от
                месяца до двух лет. По истечении этого срока старые версии файлов
                удаляются автоматически.
              </p>
              <Addition type="info">
                <p>
                  По умолчанию <mark className="app">«История файлов»</mark> копирует
                  только стандартные папки <mark className="path">«Библиотеки»</mark>,{" "}
                  <mark className="path">«Рабочий стол»</mark> и прочие. Чтобы добавить
                  свои папки, их нужно добавить в библиотеку.
                </p>
              </Addition>
            </>
          }
        />
        <Divider>Создаём локальные резервные копии сторонними утилитами</Divider>
        <p>
          Если возможностей стандартных решений в вашей операционной системе оказалось
          недостаточно, можно воспользоваться сторонними программами для бэкапов, например{" "}
          <mark className="app">AOMEI Backupper</mark> или{" "}
          <mark className="app">Acronis True Image</mark>. Они доступны как для Windows,
          так и для macOS. С их помощью вы можете настроить автоматическое резервное
          копирование папок, разделов диска или даже целого образа системы — по расписанию
          или при наступлении определённых событий.
        </p>
        <ArticleMedia
          src="ImCjFVlF3gQ"
          type="youtube"
        />
        <p>
          В качестве альтернативы классическим бэкапам можно воспользоваться системами
          контроля версий, например <mark className="app">Git</mark>, который работает на{" "}
          <a href="https://git-scm.com/install/windows">Windows</a>,{" "}
          <a href="https://git-scm.com/install/mac">macOS</a> и большинстве дистрибутивов{" "}
          <a href="https://git-scm.com/install/linux">Linux</a>. Однако у этого, казалось
          бы, нетипичного для видеопродакшна решения есть важный нюанс:{" "}
          <mark className="app">Git</mark> создавался для кода и плохо справляется с
          большими файлами вроде видео или <mark className="file">AEP</mark>, раздувая
          репозиторий до гигантских размеров. Эту проблему решает специальное расширение —{" "}
          <mark className="app">Git LFS (Large File Storage)</mark>, который стоит
          использовать при работе с медиафайлами.
        </p>
        <p>
          Если решите попробовать эту систему, для удобства рекомендую графические клиенты{" "}
          <mark className="app">SourceGit</mark> или{" "}
          <mark className="app">SourceTree</mark>. С помощью такого подхода вы сможете
          вручную фиксировать состояние проекта, смотреть историю изменения файлов и при
          необходимости возвращаться к предыдущим версиям.
        </p>
        <ArticleMedia
          src="G4f9OH4IQE8"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="nest"
        tag="нест, unnest, вложенный таймлайн, вложенные клипы, прекомпоз"
        title="Что такое Nest, как их создать и распаковывать?"
      >
        <p>
          <mark className="select">«Nest»</mark> — функция объединения нескольких клипов
          или слоев в одну секвенцию, которая затем может быть использована как единый
          элемент в таймлайне. Это бывает полезным для организации материала или
          применения эффектов к группе клипов одновременно.
        </p>
        <p>
          Для создания <mark className="select">«Nest»</mark> нужно выделить нужные клипы,
          нажать на <mark className="key">ПКМ</mark> и нажать на кнопку{" "}
          <mark className="select">«Nest»</mark>. После этого откроется окно в которое вы
          можете вписать название новой секвенции.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/creating_nest.mp4"
          type="video"
        />
        <p>
          А чтобы распаковать <mark className="select">«Nest»</mark> или же наложить на
          таймлайн «распакованную» секвенцию — найдите нужную секвенцию в окне{" "}
          <mark className="select">«Project»</mark>, отключите функцию{" "}
          <mark className="select">
            «Insert and overwrite sequences as nests or individual clips»
          </mark>{" "}
          и перетяните секвенцию прямо на таймлайн. Старый{" "}
          <mark className="select">«Nest»</mark> можно удалить без всяких проблем.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/unnesting_nest.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="timeline-track-targeting"
        tag="выделение, вставка клипов"
        title="Для чего нужны A1 и V1 слева от клипов на таймлайне?"
      >
        <p>
          Вы, наверное, не раз замечали параметры слева от ваших клипов, но не всегда
          понимали, для чего они созданы. Это кнопки{" "}
          <mark className="select">«Source Patching»</mark> и{" "}
          <mark className="select">«Track Targeting»</mark>. Самые крайние левые{" "}
          <mark className="select">«V1»</mark> и <mark className="select">«A1»</mark>, или
          же <mark className="select">«Source Patching»</mark> отвечают за импорт футажей.
          Отключая либо <mark className="select">«A1»</mark> либо{" "}
          <mark className="select">«V1»</mark> — вы отключаете возможность импорта либо
          аудиодорожки, либо видеодорожки. Отключая или включая оба параметра — вы сможете
          импортировать и видео, и аудиодорожку на таймлайн.
        </p>
        <ArticleMedia
          src="BOW2Fr7SKo0"
          type="youtube"
        />
        <p>
          А вот <mark className="select">«A1»</mark>, <mark className="select">«A2»</mark>
          , <mark className="select">«A3»</mark> и <mark className="select">«V1»</mark>,{" "}
          <mark className="select">«V2»</mark>, <mark className="select">«V3»</mark> или{" "}
          <mark className="select">«Track Targeting»</mark> отвечают за выделение клипов и
          вставку видеодорожек и аудиодорожек на таймлайн.
        </p>
        <ArticleMedia
          src="pzQnzaRm2OY"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="scale-vs-fit"
        title='Чем отличается "Scale to Frame Size" от "Fill Frame" и "Fit to Frame"?'
      >
        <p>
          Использование разных способов подгонки изображения под размер вашей секвенции
          может сказаться на качестве изображения.
        </p>
        <ul>
          <li>
            <p>
              <mark className="select">«Scale to Frame Size»</mark> изменяет разрешение
              клипа под размер вашей секвенции, при этом оставляет значение{" "}
              <mark className="select">«Scale»</mark> на 100% и меньше нагружает ресурсы
              ПК.
            </p>
            <Addition type="warning">
              Если вы уменьшите клип, записанный в 4K под секвенцию 1080p через{" "}
              <mark className="select">«Scale to Frame Size»</mark>, то вы заметите, что
              качество просядет. Также это касается и увеличения клипов.
            </Addition>
          </li>
          <li>
            <mark className="select">«Fill Frame»</mark> подгоняет значение{" "}
            <mark className="select">«Scale»</mark> под самую большую сторону вашей
            секвенции и клип не теряет в качестве.
          </li>
          <li>
            <mark className="select">«Fit to Frame»</mark> подгоняет размер клипа под
            ближайшую сторону вашей секвенции через значение{" "}
            <mark className="select">«Scale»</mark>.
          </li>
        </ul>
        <Addition type="info">
          В предыдущих версиях <mark className="app">Adobe Premiere</mark> вместо{" "}
          <mark className="select">«Fit to Frame»</mark> была кнопка{" "}
          <mark className="select">«Set to Frame Size»</mark>.
        </Addition>
        <ArticleMedia
          src="dKTWbkPfcmE"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="mask-update"
        tag="redesigned mask, куда делись маски"
        title="Что произошло с масками в новых версиях программы?"
      >
        <p>
          Начиная с <mark className="app">Adobe Premiere</mark>{" "}
          <mark className="version">26.0 (2026)</mark>, разработчики переработали
          инструменты для создания и редактирования масок. Теперь, чтобы создать маску для
          клипа, нужно выделить его на таймлайне, выбрать{" "}
          <mark className="select">«Object Mask Tool»</mark>,{" "}
          <mark className="select">«Ellipse Mask Tool»</mark>,{" "}
          <mark className="select">«Rectangle Mask Tool»</mark> или{" "}
          <mark className="select">«Pen Mask Tool»</mark> в панели инструментов и начать
          рисовать в предпросмотре. В предыдущих версиях для этого нужно было переходить в{" "}
          <mark className="select">«Effect Controls»</mark> и уже оттуда создавать и
          редактировать маски для конкретных эффектов.
        </p>
        <p>
          Если вы хотите применить маску к конкретному эффекту, перенесите её из раздела{" "}
          <mark className="select">«Unassigned Masks»</mark> на нужный эффект. Чтобы
          обрезать клип маской, перенесите её на <mark className="select">«Opacity»</mark>
          .
        </p>
        <Addition type="info">
          Дополнительную информацию об этом обновлении можно прочитать на{" "}
          <a href="https://helpx.adobe.com/premiere/desktop/add-video-effects/create-masks-and-composites/rectangle-ellipse-and-pen-masks.html">
            сайте Adobe
          </a>
          .
        </Addition>
        <ArticleMedia
          src="RF5IH7W09tk"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="missing-obsolete-effects"
        tag="вернуть устаревшие эффекты, восстановить встроенные пресеты"
        title="Куда пропали эффекты из папки Obsolete в новых версиях программы?"
      >
        <p>
          <mark className="company">Adobe</mark> признала встроенные эффекты, пресеты и
          переходы, которые были в папке <mark className="path">Obsolete</mark> слишком
          устаревшими и решила их удалить в новых версиях. Проекты, которые были созданы в
          более старых версиях <mark className="app">Adobe Premiere</mark>, могут работать
          спокойно, но применить новые эффекты из окна{" "}
          <mark className="select">«Effects & Presets»</mark> уже не получится.
        </p>
        <div className="flexible-links">
          <a href="https://community.adobe.com/t5/premiere-pro-beta-discussions/now-released-obsolete-effects-transitions-and-presets-removed/td-p/14703879">
            Решение об удалении устаревших эффектов и чем их заменить в дальнейшем
          </a>
        </div>
        <p>
          Часть эффектов из этого списка всё ещё можно восстановить в некоторых новых
          версиях <mark className="app">Adobe Premiere</mark>. Для этого нужно скачать{" "}
          <a
            download
            href="files/Obsolete Effects.prfpset"
          >
            нужный пресет
          </a>{" "}
          и импортировать его в <mark className="app">Adobe Premiere</mark> в соответствии
          с <a href="#how-to-install">инструкцией по установке</a> дополнительного
          контента. Если в пресетах нужного эффекта не оказалось — воспользуйтесь
          аналогами, приведённые в рекомендациях на форуме{" "}
          <mark className="company">Adobe</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="restore-track"
        tag="вернуть дорожку, track header, видеодорожка, аудиодорожка, timeline tracks"
        title="Как вернуть звуковую или видеодорожку на таймлайне?"
      >
        <p>
          Для возвращения недостающей части у вашего исходника вам нужно выделить клип, а
          затем нажать на кнопку <mark className="key">F</mark>. Затем уберите{" "}
          <mark className="select">«Source patching for inserts and overwrites»</mark> в
          той дорожке, в которой вы потеряли видео или аудио. После этого нажмите на{" "}
          <mark className="key">.</mark> или <mark className="key">Ю</mark>.
        </p>
        <ArticleMedia
          caption="Видео из Telegram-канала @nano_tutorials"
          src="legacy/premierepro/restore_missing.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="preview-no-audio"
        tag="пропало аудио, no audio, нет звука, аудио, отсутствует, audio hardware"
        title="Почему у меня отсутствует звук при проигрывании предпросмотра?"
      >
        <p>
          Если вы недавно меняли аудиовыход, например подключили беспроводные наушники или
          внешний монитор с колонками, то вполне вероятно что у вас сбились настройки
          звука. Вам следует проверить настройки аудиовыхода в настройках программы, для
          этого нужно перейти в{" "}
          <mark className="select">«Edit» → «Preferences» → «Audio Hardware»</mark> и
          указать в параметре <mark className="select">«Default Output»</mark> нужный вам
          аудиовыход.
        </p>
        <ArticleMedia
          caption="Изменяем настройки аудио"
          src="legacy/premierepro/set_audio_output.png"
          type="image"
        />
        <Addition type="info">
          Иногда в некоторых случаях необходимо будет в параметре{" "}
          <mark className="select">«Default Input»</mark> указать{" "}
          <mark className="select">«No Input»</mark>, так как иногда микрофоны, внезапно,
          могут мешать нормальному предпросмотру в{" "}
          <mark className="app">Adobe Premiere</mark>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-selection-follow-playhead"
        tag="selection follows playhead, выделение по курсору, timeline preference, playhead"
        title="Как отключить выделение объекта на таймлайне при перемещении временной метки?"
      >
        <p>
          Функцию выделения клипа при перемещении временной метки можно отключить, убрав
          галочку с <mark className="select">«Select Follow Playhead»</mark> в{" "}
          <mark className="select">«Sequence»</mark>. Выделение клипа зависит от выбранных
          дорожек с помощью <mark className="select">«Track Targeting»</mark>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Выделение клипов зависит от выбранных дорожек с помощью{" "}
              <mark className="select">«Track Targeting»</mark>.
            </li>
            <li>
              Выделить текущий клип под плейхедом, если у вас выключен{" "}
              <mark className="select">«Select Follow Playhead»</mark> можно с помощью
              клавиши <mark className="key">D</mark>.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="timeline-preferences-missing"
        title="Куда пропала настройка Timeline в Preferences?"
      >
        <p>
          В настройках раздел <mark className="select">«Timeline»</mark> может
          отсутствовать на некоторых «народных» версиях{" "}
          <mark className="app">Adobe Premiere</mark> и его можно вернуть простым способом
          — входом в аккаунт <mark className="company">Adobe</mark>.
        </p>
        <Addition type="info">
          После входа в аккаунт <mark className="company">Adobe</mark> псевдо-лицензия не
          слетит, не переживайте.
        </Addition>
        <p>
          Для входа в аккаунт перейдите в <mark className="select">«Help»</mark> и нажмите
          на <mark className="select">«Sign In»</mark>. Затем в появившемся окне проведите
          процедуру входа в аккаунт, а затем попробуйте открыть настройки снова и
          убедитесь в том, что там появился раздел{" "}
          <mark className="select">«Timeline»</mark>.
        </p>
      </DetailsSummary>
      <Addition type="info">
        Ответы на некоторые вопросы, связанные с интерфейсом, находятся в разделе{" "}
        <a href="#interface">«Интерфейс»</a>.
      </Addition>
    </div>
  );
};

export default PrFromNewbies;
