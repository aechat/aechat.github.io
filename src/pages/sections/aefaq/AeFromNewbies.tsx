import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import CodeSnippet from "../../../components/content/CodeSnippet";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

import NestedDetailsSummary from "../../../components/detailsSummary/NestedDetailsSummary";

import EasingEditor from "../../../components/features/easingEditor/EasingEditor";

const AeFromNewbies: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="get-started"
        tag="для новичка, курсы, туториалы, уроки, базовый курс"
        title="Я первый раз открыл программу. С чего бы мне начать обучение?"
      >
        <Addition type="danger">
          Эта подборка носит ознакомительный характер и не заменяет индивидуальный план
          обучения. Используйте её как отправную точку для изучения{" "}
          <mark className="app">Adobe After Effects</mark> и смежных инструментов, которые
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
              <mark className="app">Adobe After Effects</mark>, вам могут пригодиться
              таблицы перевода <a href="#effects-list">эффектов</a> и{" "}
              <a href="#presets-list">пресетов</a>.
            </li>
            <li>
              Не стоит всерьёз полагаться на <mark className="app">ChatGPT</mark>,{" "}
              <mark className="app">DeepSeek</mark> или другие текстовые нейросети при
              обучении работе в <mark className="app">Adobe After Effects</mark>. Они
              часто придумывают несуществующие функции программы или указывают не на те
              элементы интерфейса.
            </li>
          </ul>
        </Addition>
        <Divider>Подборка курсов для начинающих</Divider>
        <ul>
          <li>
            <p>
              Если вы только начинаете свой путь в мире композитинга и никогда не работали
              с программами вроде <mark className="app">Adobe After Effects</mark>,
              пройдите курс{" "}
              <a href="https://www.youtube.com/playlist?list=PLcN7xY5E2wrmIU__8uNIHglZTyZ29RMIM">
                «Основы After Effects»
              </a>{" "}
              от <a href="https://youtube.com/zernov">Ильи Зернова</a>. Этот курс поможет
              вам освоить интерфейс программы и научиться работать с ключевыми кадрами,
              титрами и эффектами.
            </p>
            <ArticleMedia
              src="nogR7eyhYug"
              type="youtube"
            />
          </li>
          <li>
            <p>
              В качестве альтернативы вы можете пройти{" "}
              <a href="https://www.youtube.com/playlist?list=PLrsq-o51mMFE4ez9Q4qmkyoXZ_lYsyZNi">
                мини-курс «After Effects для начинающих» от VideoSmile
              </a>
              . При прохождении этого курса вы научитесь работать с различными эффектами,
              создавать анимацию текста, а также использовать маски и инструмент{" "}
              <mark className="plugin">Roto Brush</mark> для вырезания объектов в кадре.
            </p>
            <ArticleMedia
              src="ZTrELWgEtUI"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Если вы владеете английским на уровне комфортного понимания речи, изучите
              плейлист{" "}
              <a href="https://www.youtube.com/playlist?list=PLYfCBK8IplO77FDDLnS06qEMoVLD7Qyib">
                «Learn Adobe After Effects» от Gareth David Studio
              </a>
              . Автор подробно разбирает основные функции программы и демонстрирует
              различные примеры работы.
            </p>
            <ArticleMedia
              src="FuJMHF510mc"
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
              <a href="https://www.youtube.com/@TutoView/videos">Tutorials View+</a>
              <a href="https://www.youtube.com/@BenMarriott/videos">Ben Marriott</a>
              <a href="https://www.youtube.com/@AEPlug/videos">AEPlug</a>
              <a href="https://www.youtube.com/@JakeInMotion/videos">Jake In Motion</a>
              <a href="https://www.youtube.com/@SmertimbaGraphics/videos">
                Smertimba Graphics
              </a>
              <a href="https://www.youtube.com/@SonduckFilm/videos">SonduckFilm</a>
              <a href="https://youtube.com/@ollyspin/videos">olly</a>
              <a href="https://youtube.com/@mapal/videos">Mapal</a>
              <a href="https://www.youtube.com/@motionbyscott/videos">Motion By Scott</a>
              <a href="https://www.youtube.com/@MotionXP/videos">MotionXP</a>
            </div>
            <p>
              И не забываем про дополнительный список комплексных курсов по{" "}
              <mark className="app">Adobe After Effects</mark>, затрагивающий разные
              области применения программы.
            </p>
            <div className="flexible-links">
              <a href="https://cloudlessons.ru/v/410/">
                «Супер After Effects» от VideoSmile
              </a>
              <a href="https://volnitsa.zenclass.ru/public/course/4b9a6429-5c06-4f91-a73b-312bc57b9e35">
                «Быстрый вход в After Effects» от Вольницы
              </a>
              <a href="https://volnitsa.net/motiontype">«Motion Type» от Вольницы</a>
              <a href="https://khs.ru/after">
                «After Effects от новичка до специалиста» от KHS
              </a>
              <a href="https://www.profileschool.ru/category/video/course_adobe_after_effects_base">
                «After Effects базового уровня» от Никиты Чеснокова
              </a>
            </div>
          </li>
        </ul>
        <Divider>Принципы анимации</Divider>
        <ArticleMedia
          src="LcoDiK2a_oM"
          type="youtube"
        />
        <div className="flexible-links">
          <a href="https://www.youtube.com/playlist?list=PLC1VMnkSWzhyvstYWgvctvjTjKICAXWZD">
            «Принципы анимации» от ANIMATION SCHOOL
          </a>
          <a href="https://www.youtube.com/watch?v=VvjtQ_ewuQY">
            Основные принципы анимации на примерах в After Effects (Часть 1)
          </a>
          <a href="https://www.youtube.com/watch?v=eoX9_9AuxUc">
            Основные принципы анимации на примерах в After Effects (Часть 2)
          </a>
        </div>
        <Divider>Подборка туториалов на разные темы</Divider>
        <ul>
          <li>
            <p>
              Если вы сталкиваетесь с трудностями при работе с графиками скорости и
              значения, а также с <mark className="select">«Graph Editor»</mark>,
              посмотрите подробное объяснение этого инструмента от{" "}
              <a href="https://www.youtube.com/@JakeInMotion">Jake In Motion</a> или
              прочтите <a href="#keyframe-types">статью про ключевые кадры</a>.
            </p>
            <ArticleMedia
              src="7pOCtlrrE3Y"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Если вы хотите повторить трендовые ролики с плавным ускорением и
              замедлением, так называемым «speed ramp», то этот эффект делается с помощью
              изменения скорости в параметре{" "}
              <mark className="select">«Time Remapping»</mark>.
            </p>
            <Addition type="info">
              Чтобы включить <mark className="select">«Time Remapping»</mark> у
              выделенного слоя, нажмите комбинацию клавиш{" "}
              <mark className="key">Ctrl + Alt + T</mark>.
            </Addition>
            <ArticleMedia
              src="_kcfkuNwd3M"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Цветокоррекция помогает задать нужное настроение или стиль композиции. Для
              этого можно использовать <mark className="plugin">Lumetri Color</mark> или
              отдельные инструменты из раздела{" "}
              <mark className="path">Color Correction</mark> из стандартной поставки
              программы.
            </p>
            <div className="flexible-links">
              <a href="https://helpx.adobe.com/after-effects/using/color-correction-effects.html">
                Эффекты для цветокоррекции
              </a>
              <a href="https://helpx.adobe.com/after-effects/using/color-basics.html">
                Основы цветокоррекции от Adobe
              </a>
            </div>
            <ArticleMedia
              src="y4fuhIPxmJg"
              type="youtube"
            />
          </li>
        </ul>
        <Divider>Подборка туториалов для «тикток-эдитов»</Divider>
        <Addition type="warning">
          Прежде чем углубляться в <mark className="word">«эдиторство»</mark> и учиться
          применять разные эффекты, рекомендуется всё же освоить базовый функционал{" "}
          <mark className="app">Adobe After Effects</mark>. Без фундаментальных знаний
          многие тонкости работы с инструментами могут быть вам непонятны, ведь не все
          «эдиторы» подробно объясняют процесс, а просто показывают его.{" "}
        </Addition>
        <ul>
          <li>
            <p>
              Если вам регулярно попадаются «эдиты» в <mark className="web">TikTok</mark>,{" "}
              <mark className="web">YouTube Shorts</mark> или{" "}
              <mark className="web">Instagram Reels</mark>
              <sup>1</sup> и хочется попробовать создать что-то подобное, обратите
              внимание на обучающие видео на каналах ниже.
            </p>
            <div className="flexible-links">
              <a href="https://www.youtube.com/@Tozel./videos">Tozel</a>
              <a href="https://www.youtube.com/@rdylt09/videos">rdylt09</a>
              <a href="https://www.youtube.com/@theayzedit/videos">The Ayz Edit</a>
              <a href="https://www.youtube.com/@yaniksksks/videos">Yaniksksks</a>
              <a href="https://www.youtube.com/@imduong2k6/videos">imduong2k6</a>
              <a href="https://www.youtube.com/@Victoriaaep/videos">Victoria.aep</a>
              <a href="https://www.youtube.com/@creativegraphicz/videos">
                Creative Graphicz
              </a>
              <a href="https://www.youtube.com/@ReverseStark/videos">ReverseStark</a>
            </div>
            <Addition type="danger">
              <sup>1</sup> <mark className="web">Instagram</mark> и{" "}
              <mark className="company">Meta</mark> признаны экстремистскими организациями
              и запрещены на территории Российской Федерации.
            </Addition>
          </li>
          <li>
            <p>
              В «эдитах» нередко используют эффект тряски камеры. Его можно реализовать
              разными способами, например с помощью стандартного выражения{" "}
              <mark className="code">wiggle(freq, amp)</mark> или сторонних эффектов{" "}
              <mark className="plugin">S_Shake</mark> и{" "}
              <mark className="plugin">Twitch</mark>
              <sup>1</sup>.
            </p>
            <Addition type="danger">
              <sup>1</sup> Автор статьи не рекомендует применять{" "}
              <mark className="plugin">Twitch</mark> в новых проектах, так как он морально
              устарел и не поддерживает{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>. В качестве аналога
              подойдёт <mark className="plugin">S_Shake</mark> из пакета{" "}
              <mark className="plugin">Boris FX Sapphire</mark> со стилем{" "}
              <mark className="select">«Twitchy»</mark>.
            </Addition>
            <ArticleMedia
              src="rT1rOj3BBCE"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Ещё один популярный эффект для динамичных сцен — частицы. Их можно создавать
              с помощью стандартных генераторов, таких как{" "}
              <mark className="plugin">CC Particle World</mark>, или через сторонние
              инструменты, например <mark className="plugin">Trapcode Particular</mark>.
            </p>
            <ArticleMedia
              src="GgIbELgZLLI"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Для придания объектам свечения используют различные эффекты: от стандартного{" "}
              <mark className="plugin">Glow</mark> до сторонних{" "}
              <mark className="plugin">S_Glow</mark>,{" "}
              <mark className="plugin">Deep Glow</mark> и других.
            </p>
            <Addition type="warning">
              Учтите, что эффект свечения очень требователен к ресурсам и может серьёзно
              снизить производительность проекта.
            </Addition>
            <ArticleMedia
              src="t40ZTEBr_M0"
              type="youtube"
            />
          </li>
          <li>
            <p>
              Блики от объектива применяются для усиления реалистичности сцены. В
              реальности они возникают из-за отражения света от поверхностей объектов,
              диафрагмы или многократных отражений между линзами. Повторить этот эффект
              можно стандартным <mark className="plugin">Lens Flare</mark>, сторонними
              инструментами <mark className="plugin">Optical Flares</mark>,{" "}
              <mark className="plugin">S_LensFlare</mark> или даже комбинацией различных
              эффектов размытия и искажения.
            </p>
            <ArticleMedia
              src="-yD3MxlR78c"
              type="youtube"
            />
          </li>
          <li>
            <p>
              На популярных видеоплощадках, таких как <mark className="web">TikTok</mark>{" "}
              и <mark className="web">YouTube Shorts</mark> нередко используют спорные
              приёмы «улучшения» качества через цветокоррекцию: применяют эффекты{" "}
              <mark className="plugin">Sharpen</mark> и{" "}
              <mark className="plugin">Unsharpen Mask</mark> с чрезмерными значениями,
              завышают контраст и насыщенность, а затем называют видео 4K, хотя
              фактическое разрешение меньше.{" "}
              <em className="article-note-muted">
                Пожалуйста, не доводите до максимума значения эффектов{" "}
                <mark className="plugin">Unsharpen Mask</mark> и{" "}
                <mark className="plugin">Sharpen</mark> в погоне за «качеством» — после
                таких «улучшений» результат обычно выглядит так себе.
              </em>
            </p>
            <ArticleMedia
              src="d9ESpD7vc2Y"
              type="youtube"
            />
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="layer"
        tag="слои, базовые слои, adjustment layer, image sequence, null object, shape layer, solid layer, text layer, корректирующий слой, нулевой объект, нуль, секвенция изображений, сплошная заливка, слой фигура, текст, 3d, слои, трёхмерные слои, 3d layer, 3d object, camera, light, источник света, камера, трёхмерные модели, cineware, effect, blending mode, layer style, marker, эффект, режим наложения, стиль слоя, маркер"
        title="Что такое слои и как с ними работать?"
      >
        <p>
          Когда вы создаёте композицию, то для того, чтобы в ней что-либо появилось —
          нужно создать слои. Слои бывают разных видов, например текст, камера, видео или
          фигура. В <mark className="app">Adobe After Effects</mark>, в отличие от
          программ для нелинейного монтажа вроде{" "}
          <mark className="app">Adobe Premiere</mark>, каждый слой занимает отдельную
          дорожку. Также каждому слою вы можете задать свой цвет метки для лучшего
          ориентирования в таймлайне.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/timeline_example.png"
          type="image"
        />
        <p>
          Порядок слоёв на таймлайне влияет на то, как они перекрываются: верхний слой
          всегда отображается поверх нижнего. Для трёхмерных слоёв это правило отличается
          — наложение определяется положением по оси Z, кроме случаев когда на обычный
          двумерный слой применили эффект, работающий в трёхмерном пространстве, например{" "}
          <mark className="plugin">Trapcode Particular</mark> или{" "}
          <mark className="plugin">Element 3D</mark>.
        </p>
        <Divider>Создание слоёв</Divider>
        <p>
          Чтобы создать слой, перейдите в <mark className="select">«Layer» → «New»</mark>{" "}
          или нажмите <mark className="key">ПКМ</mark> по пустому месту на таймлайне и
          выберите <mark className="select">«New»</mark>. В выпадающем меню выберите
          нужный тип слоя.
        </p>
        <ArticleMedia
          caption="Создаём слои с помощью контекстного меню"
          src="legacy/aftereffects/create_layers.png"
          type="image"
        />
        <p>
          Для создания слоя из изображения или видео, перетащите файл на таймлайн
          композиции из окна <mark className="select">«Project»</mark> или из файлового
          менеджера<sup>1</sup>.
        </p>
        <Addition type="warning">
          <sup>1</sup> В Windows, если у вас включён контроль учётных записей (UAC) и{" "}
          <mark className="app">Adobe After Effects</mark> запущен от имени
          администратора, то импорт файлов с помощью{" "}
          <mark className="term">drag-n-drop</mark>, например из{" "}
          <mark className="app">Проводника</mark>, работать не будет. Это не баг, а
          особенность безопасности Windows. Система просто не позволяет передавать файлы
          из приложений, запущенных с правами обычного пользователя, в те, которые
          работают от имени администратора.
        </Addition>
        <Divider>Порядок рендеринга</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> операции внутри слоя
          выполняются в строгой последовательности:{" "}
          <mark className="select">«Masks»</mark> →{" "}
          <mark className="select">«Effects»</mark> →{" "}
          <mark className="select">«Transformations»</mark> →{" "}
          <mark className="select">«Layer Styles»</mark>. Применённые на слой эффекты
          рендерятся сверху вниз — их порядок можно менять простым перетаскиванием.
        </p>
        <Addition type="info">
          В любой непонятной ситуации создавайте{" "}
          <mark className="select">«Pre-compose»</mark>, чтобы «запечь» результат, прежде
          чем редактировать его дальше.
        </Addition>
        <Divider>Разбираем виды слоёв</Divider>
        <p>
          Слои в <mark className="app">Adobe After Effects</mark> делятся на несколько
          типов, каждый со своими уникальными свойствами. Почти к любому параметру можно
          применить выражения — для этого кликните по иконке{" "}
          <mark className="select">«секундомера»</mark> с зажатой клавишей{" "}
          <mark className="key">Alt</mark>.
        </p>
        <ul>
          <li>
            <p>
              <mark className="select">«Слои-исходники»</mark> — импортированные в проект{" "}
              <mark className="image">фото</mark>, <mark className="audio">аудио</mark>,{" "}
              <mark className="video">видео</mark> и{" "}
              <mark className="image">секвенции изображений</mark>.
            </p>
            <p>
              Слои с <mark className="video">видео</mark>,{" "}
              <mark className="audio">аудио</mark> и{" "}
              <mark className="image">изображениями</mark> относятся к импортируемым
              объектам. Чтобы их добавить в проект, используйте{" "}
              <mark className="select">«File» → «Import»</mark> или комбинацию клавиш{" "}
              <mark className="key">Ctrl + I</mark>.
            </p>
            <NestedDetailsSummary
              anchor="video"
              title="Видео"
            >
              <p>
                <mark className="select">«Video»</mark> — слой, содержащий футаж с
                видеодорожкой в формате <mark className="video">MP4</mark>,{" "}
                <mark className="video">MOV</mark>, <mark className="video">AVI</mark> и
                прочие. Такие файлы могут содержать звуковую дорожку или быть без неё.
              </p>
              <Addition type="warning">
                <ul>
                  <li>
                    <mark className="app">Adobe After Effects</mark> поддерживает не все
                    кодеки и контейнеры. Если видео не импортируется — его нужно
                    перекодировать в подходящий формат, например{" "}
                    <mark className="video">Apple ProRes 422</mark> с помощью{" "}
                    <mark className="app">Shutter Encoder</mark> или использовать
                    сторонний плагин <mark className="plugin">Autokroma Influx</mark> для
                    добавления поддержки многих форматов.
                  </li>
                  <li>
                    <mark className="app">Adobe After Effects</mark> не может работать с
                    несколькими звуковыми дорожками в одном файле — он «увидит» только
                    первую. Если вам нужны все аудиодорожки, запакованные в видео, их
                    придётся извлечь с помощью <mark className="app">HandBrake</mark> или{" "}
                    <mark className="app">MKVToolNix</mark> и импортировать отдельно.
                  </li>
                </ul>
              </Addition>
              <p>
                Поскольку <mark className="app">Adobe After Effects</mark> не является
                программой для монтажа, даже одиночное видео может проигрываться в нём не
                так плавно, как в обычном плеере, и при этом потреблять много оперативной
                памяти. Дело в том, что программа кэширует каждый кадр для того, чтобы их
                показать в предпросмотре, вместо того чтобы просто воспроизводить файл
                «как есть».
              </p>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="audio"
              title="Аудио"
            >
              <p>
                <mark className="select">«Audio»</mark> — слой, содержащий только
                аудиодорожку. Для изменения громкости используется параметр{" "}
                <mark className="select">«Audio Levels»</mark>. Чтобы увидеть форму волны
                — нажмите дважды <mark className="key">L</mark>.
              </p>
              <Addition type="warning">
                <ul>
                  <li>
                    Некоторые форматы аудио, например <mark className="audio">OGG</mark> —
                    не поддерживаются. Их нужно конвертировать в{" "}
                    <mark className="audio">WAV</mark> или{" "}
                    <mark className="audio">MP3</mark>. Сделать это можно через{" "}
                    <mark className="app">Shutter Encoder</mark> или{" "}
                    <mark className="app">EZ CD Audio Converter</mark>.
                  </li>
                  <li>
                    <mark className="app">Adobe After Effects</mark> не предназначен для
                    серьёзной работы со звуком, несмотря на наличие эффектов в разделе{" "}
                    <mark className="path">Audio Effects</mark>. Для этого лучше
                    использовать <mark className="app">Adobe Audition</mark> или{" "}
                    <mark className="app">Adobe Premiere</mark>.
                  </li>
                </ul>
              </Addition>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="still"
              title="Статичное изображение"
            >
              <p>
                <mark className="select">«Still»</mark> — слой, содержащее растровое или
                векторное
                <sup>4</sup> изображение: <mark className="image">JPEG</mark>,{" "}
                <mark className="image">PNG</mark>, <mark className="image">HEIF</mark>
                <sup>1</sup>, <mark className="image">RAW</mark>
                <sup>2</sup>, <mark className="image">PSD</mark>
                <sup>3</sup>, <mark className="image">AI</mark>
                <sup>4</sup>, <mark className="image">EPS</mark>
                <sup>4</sup>, <mark className="image">EXR</mark> и другие.
              </p>
              <Addition type="warning">
                <sup>1</sup> В Windows для импорта файлов{" "}
                <mark className="image">HEIF/HEIC</mark> необходимо установить{" "}
                <a href="#import-hevc">соответствующие кодеки</a>.
              </Addition>
              <Addition type="info">
                <ul>
                  <li>
                    <p>
                      <sup>2</sup> <mark className="image">RAW</mark> — необработанные
                      изображения, создаваемые камерой или смартфоном в режиме{" "}
                      <mark className="image">RAW</mark>. Формат зависит от производителя:{" "}
                      <mark className="image">DNG</mark>,{" "}
                      <mark className="image">CR3</mark>,{" "}
                      <mark className="image">NEF</mark>,{" "}
                      <mark className="image">ARW</mark>,{" "}
                      <mark className="image">RAF</mark> и т. д.
                    </p>
                    <Addition type="info">
                      <ul>
                        <li>
                          При импорте <mark className="image">RAW</mark> может открыться
                          модуль <mark className="plugin">Camera RAW</mark> — аналог{" "}
                          <mark className="app">Adobe Lightroom</mark> внутри{" "}
                          <mark className="app">Adobe After Effects</mark>. Старые версии{" "}
                          <mark className="plugin">Camera RAW</mark> могут не поддерживать
                          новые камеры.
                        </li>
                        <li>
                          Чтобы повторно открыть{" "}
                          <mark className="plugin">Camera RAW</mark> после импорта,
                          выделите нужный файл в окне{" "}
                          <mark className="select">«Project»</mark>, нажмите{" "}
                          <mark className="key">Ctrl + Alt + G</mark>, чтобы открыть окно{" "}
                          <mark className="select">«Interpret Footage»</mark>, и кликните{" "}
                          <mark className="select">«More Options»</mark>.
                        </li>
                        <li>
                          <mark className="image">RAW</mark> часто бывает в высоком
                          разрешении, что может серьёзно нагрузить проект — особенно при
                          применении эффектов. Лучше предварительно обработать такие
                          изображения в <mark className="app">Adobe Photoshop</mark> или{" "}
                          <mark className="app">Adobe Lightroom</mark>, сохранить в{" "}
                          <mark className="image">TIFF</mark> с меньшим разрешением и
                          только потом использовать в{" "}
                          <mark className="app">Adobe After Effects</mark>.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <p>
                      <sup>3</sup> <mark className="image">PSD</mark> из{" "}
                      <mark className="app">Adobe Photoshop</mark> можно импортировать как
                      целое <mark className="image">изображение</mark> или послойно.
                    </p>
                    <Addition type="warning">
                      Если <mark className="image">PSD</mark> сохранён в цветовом режиме,
                      отличном от <mark className="term">RGB</mark>, — послойный импорт в{" "}
                      <mark className="app">Adobe After Effects</mark> будет недоступен.{" "}
                      <a href="#import-layered-psd">Подробнее...</a>
                    </Addition>
                  </li>
                  <li>
                    <p>
                      <sup>4</sup> При импорте векторных изображений включите параметр{" "}
                      <mark className="select">«Continuously Rasterize»</mark> у слоя. Эта
                      функция позволяет масштабировать графику без потери качества,
                      адаптируя её под разрешение композиции. Однако при её использовании
                      возможны побочные эффекты — например, разрывы при применении{" "}
                      <mark className="plugin">Puppet Tool</mark>.
                    </p>
                    <Addition type="info">
                      Некоторые пользователи считают, что включённый{" "}
                      <mark className="select">«Continuously Rasterize»</mark> позволяет
                      увеличивать предпросмотр без потери качества, как в{" "}
                      <mark className="app">Adobe Illustrator</mark>. На деле это не так:{" "}
                      <mark className="app">Adobe After Effects</mark> — растровый
                      редактор, он не может отобразить больше пикселей, чем указано в
                      настройках композиции.
                    </Addition>
                  </li>
                </ul>
              </Addition>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="image-sequence"
              title="Секвенция изображений"
            >
              <p>
                <mark className="select">«Image Sequence»</mark> — стопка кадров из
                изображений поддерживаемых форматов, импортируемая как покадровое видео
                без звука. Такой тип слоя полезен для импорта покадрово отрендеренных
                проектов из какого-нибудь 3D-софта, например,{" "}
                <mark className="app">Blender</mark> или{" "}
                <mark className="app">Cinema 4D</mark>.
              </p>
              <ArticleMedia
                src="efHrVdCsX-4"
                type="youtube"
              />
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы импортировать нужные изображения как секвенцию, откройте окно{" "}
                    <mark className="select">«Import»</mark> с помощью комбинации клавиш{" "}
                    <mark className="key">Ctrl + I</mark>, выделите первый кадр в папке с
                    отрендеренными кадрами и выберите внизу опцию{" "}
                    <mark className="select">«PNG Sequence»</mark> в разделе{" "}
                    <mark className="select">«Sequence Settings»</mark>, где вместо{" "}
                    <mark className="image">PNG</mark> — ваш формат изображений.
                  </li>
                  <li>
                    Чтобы изменить <mark className="term">FPS</mark> после импорта
                    секвенции, воспользуйтесь функцией{" "}
                    <mark className="select">«Interpret Footage»</mark>. Чтобы её открыть
                    — выделите нужную секвенцию в окне{" "}
                    <mark className="select">«Project»</mark> и нажмите комбинацию клавиш{" "}
                    <mark className="key">Ctrl + Alt + G</mark>. В открывшемся окне вы
                    можете изменить параметр <mark className="select">«Frame Rate»</mark>.
                  </li>
                  <li>
                    Чтобы задать значение <mark className="select">«Frame Rate»</mark> по
                    умолчанию при импорте секвенций — откройте настройки программы{" "}
                    <mark className="select">«Edit» → «Preferences» → «Import»</mark> и в
                    разделе <mark className="select">«Sequence Footage»</mark> задайте
                    нужное значение <mark className="select">«Frames per second»</mark>.
                    Оно будет применяться ко всем новым секвенциям. Уже импортированные
                    это не затронет.
                  </li>
                  <li>
                    Если вы хотите импортировать секвенции с разными сценами или ракурсами
                    — лучше разделить их по папкам и импортировать как отдельные{" "}
                    <mark className="word">«шоты»</mark>.
                  </li>
                </ul>
              </Addition>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="photoshop"
              title="Файлы Photoshop"
            >
              <p>
                <mark className="file">PSD</mark> — файлы изображений, создаваемые и
                редактируемые в <mark className="app">Adobe Photoshop</mark>.{" "}
                <mark className="app">Adobe After Effects</mark> поддерживает импорт таких
                файлов в проект как целое изображение, так и послойно<sup>1</sup>. При
                этом наличие установленного <mark className="app">Adobe Photoshop</mark> в
                системе не требуется.
              </p>
              <Addition type="warning">
                <sup>1</sup> <mark className="image">PSD</mark>, сохранённые в режиме{" "}
                <mark className="term">CMYK</mark>, не поддерживают послойный импорт слоёв
                в проект. Чтобы это исправить — измените цветовой режим файла на{" "}
                <mark className="term">RGB</mark>. <a href="#import-layered-psd">Как?</a>
              </Addition>
              <ArticleMedia
                src="e1ZJfivOloM"
                type="youtube"
              />
              <Addition type="info">
                Чтобы быстро открыть программу для редактирования{" "}
                <mark className="image">PSD</mark>, выделите слой и нажмите комбинацию
                клавиш <mark className="key">Ctrl + E</mark>. Какая программа откроется —
                зависит от настроек ассоциаций файлов в вашей операционной системе. Если
                вы не меняли эти настройки вручную, с большой долей вероятности откроется{" "}
                <mark className="app">Adobe Photoshop</mark>, если он установлен.
              </Addition>
            </NestedDetailsSummary>
          </li>
          <li>
            <p>
              <mark className="select">«Слои для специальных функций»</mark> — к ним
              относятся <mark className="select">«Camera»</mark>,{" "}
              <mark className="select">«Light Layer»</mark>,{" "}
              <mark className="select">«Null Object»</mark> и{" "}
              <mark className="select">«Adjustment Layer»</mark>.
            </p>
            <NestedDetailsSummary
              anchor="camera"
              title="Камера"
            >
              <p>
                <mark className="select">«Camera»</mark> — слой, который служит
                виртуальным объективом для вашей сцены, определяя ракурс, глубину резкости
                и поле зрения для всех слоёв, работающих в трёхмерном пространстве. Камера
                не будет работать с двумерными слоями, если на нём не применён эффект
                работающий в трёхмерном пространстве.
              </p>
              <ArticleMedia
                src="zgMHWFolli8"
                type="youtube"
              />
              <p>
                В окне <mark className="select">«Camera Settings»</mark> для камеры можно
                выбрать тип<sup>1</sup>, задать имя и пресет, изменить значения угла
                обзора
                <sup>2</sup> и размера плёнки<sup>3</sup>. Если включить{" "}
                <mark className="select">«Enable Depth of Field»</mark>, станет доступна
                настройка расстояния до точки фокусировки<sup>4</sup>, апертуры
                <sup>5</sup>, диафрагмы
                <sup>6</sup> и уровня размытия<sup>7</sup>. При необходимости можно также
                изменить метрическую систему<sup>8</sup>.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы открыть параметры этого слоя — выделите слой с камерой и нажмите{" "}
                    <mark className="key">Ctrl + Shift + Y</mark>.
                  </li>
                  <li>
                    Также свойства камеры можно анимировать на таймлайне, раскрыв вкладку{" "}
                    <mark className="select">«Camera Options»</mark> у слоя.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                caption="Camera Settings"
                src="legacy/aftereffects/camera_settings.png"
                type="image"
              />
              <Addition type="warning">
                Учтите, что не все параметры камеры доступны в движках рендера{" "}
                <mark className="plugin">Advanced 3D</mark> и{" "}
                <mark className="plugin">Cinema 4D</mark>, например,{" "}
                <mark className="select">«Depth of Field»</mark>.
              </Addition>
              <Addition type="info">
                <ul>
                  <li>
                    <p>
                      <sup>1</sup> У камеры может быть два типа:{" "}
                      <mark className="select">«One-Node»</mark> и{" "}
                      <mark className="select">«Two-Node»</mark>.
                    </p>
                    <Addition type="info">
                      <ul>
                        <li>
                          <mark className="select">«One-Node Camera»</mark> или{" "}
                          <mark className="select">«одноузловая камера»</mark> работает
                          как физическая камера: перемещается независимо от точки фокуса и
                          вращается вокруг себя.
                        </li>
                        <li>
                          <mark className="select">«Two-Node Camera»</mark> или{" "}
                          <mark className="select">«двухузловая камера»</mark> имеет точку
                          обзора и ориентируется относительно{" "}
                          <mark className="select">«Point of Interest»</mark>. Такой тип
                          полезен при создании параллакс-эффекта.
                        </li>
                        <li>
                          Для любого типа камеры можно включить автоориентацию: выделите
                          камеру, нажмите <mark className="key">Ctrl + Alt + O</mark> и
                          выберите нужный параметр. Если выбрать{" "}
                          <mark className="select">
                            «Orient Towards Point of Interest»
                          </mark>{" "}
                          — <mark className="select">«одноузловая камера»</mark>{" "}
                          превратится в <mark className="select">«двухузловую»</mark>.
                          Если выбрать <mark className="select">«Off»</mark> или{" "}
                          <mark className="select">«Orient Along Path»</mark>, наоборот —{" "}
                          <mark className="select">«двухузловая»</mark> станет{" "}
                          <mark className="select">«одноузловой»</mark>.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <sup>2</sup> Параметры <mark className="select">«Zoom»</mark>,{" "}
                    <mark className="select">«Angle of View»</mark> и{" "}
                    <mark className="select">«Focal Length»</mark> связаны между собой.{" "}
                    <mark className="select">«Focal Length»</mark> — это фокусное
                    расстояние объектива: чем оно меньше, тем шире{" "}
                    <mark className="select">«Angle of View»</mark> и больше объектов
                    попадает в кадр. Чем больше фокусное расстояние, тем меньше угол
                    обзора, объекты кажутся ближе, а перспектива сжимается.{" "}
                    <mark className="select">«Zoom»</mark> — это итоговое увеличение,
                    напрямую зависящее от этих двух параметров. Настраивая один из них, вы
                    влияете на оптику всей виртуальной камеры.
                  </li>
                  <li>
                    <sup>3</sup> <mark className="select">«Film Size»</mark> — размер
                    условной плёнки. Изменение этого параметра влияет на{" "}
                    <mark className="select">«Zoom»</mark> и{" "}
                    <mark className="select">«Angle of View»</mark>.
                  </li>
                  <li>
                    <sup>4</sup> <mark className="select">«Focus Distance»</mark> —
                    расстояние до точки фокусировки. Его можно привязать к нужному слою:
                    кликните по нему <mark className="key">ПКМ</mark> и выберите{" "}
                    <mark className="select">
                      «Camera» → «Link Focus Distance to Layer»
                    </mark>
                    .
                  </li>
                  <li>
                    <sup>5</sup> <mark className="select">«Aperture»</mark> — отвечает за
                    размытие: чем больше апертура, тем сильнее размываются объекты вне
                    фокуса. Изменение этого значения автоматически скорректирует{" "}
                    <mark className="select">«F-Stop»</mark> в противоположную сторону.
                  </li>
                  <li>
                    <sup>6</sup> <mark className="select">«F-Stop»</mark> — также отвечает
                    за размытие: чем меньше значение, тем сильнее эффект. При его
                    изменении <mark className="select">«Aperture»</mark> тоже изменится —
                    обратно пропорционально.
                  </li>
                  <li>
                    <sup>7</sup> <mark className="select">«Blur Level»</mark> регулирует
                    степень размытия. Фактически это дополнительный коэффициент действия
                    параметров <mark className="select">«Aperture»</mark> и{" "}
                    <mark className="select">«F-Stop»</mark>.
                  </li>
                  <li>
                    <sup>8</sup> В <mark className="select">«Units»</mark> можно изменить
                    метрическую систему — на миллиметры, дюймы или пиксели. В{" "}
                    <mark className="select">«Measure Film Size»</mark> задаётся, по какой
                    оси измерять размер плёнки: горизонтально, вертикально или по
                    диагонали.
                  </li>
                </ul>
              </Addition>
              <p>
                Если раскрыть слой камеры на таймлайне, вы увидите дополнительные
                параметры, связанные с визуальными эффектами диафрагмы<sup>1</sup> и
                пересветами
                <sup>2</sup>.
              </p>
              <ArticleMedia
                caption="Timeline"
                src="legacy/aftereffects/camera_options_on_timeline.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    <p>
                      <sup>1</sup> Параметры, начинающиеся с{" "}
                      <mark className="select">«Iris»</mark>, задают форму и поведение
                      боке. Но не все эффекты, работающие в трёхмерном пространстве
                      отзываются на эти настройки.
                    </p>
                    <Addition type="info">
                      <ul>
                        <li>
                          <mark className="select">«Iris Shape»</mark> — форма лепестков
                          диафрагмы, видимых в ярких бликах. Значения, отличные от{" "}
                          <mark className="select">«Fast Rectangle»</mark>, требуют больше
                          ресурсов и могут замедлить рендер, зато обеспечивают более
                          реалистичное размытие. При использовании{" "}
                          <mark className="select">«Fast Rectangle»</mark> некоторые
                          параметры ниже не работают.
                        </li>
                        <li>
                          <mark className="select">«Iris Rotation»</mark> — угол поворота
                          лепестков.
                        </li>
                        <li>
                          <mark className="select">«Iris Roundness»</mark> — сглаженность
                          углов лепестков: от почти треугольных до идеально округлых.
                        </li>
                        <li>
                          <mark className="select">«Iris Aspect Ratio»</mark> —
                          соотношение сторон фигуры диафрагмы. Можно растянуть или
                          сплющить форму.
                        </li>
                        <li>
                          <mark className="select">«Iris Diffraction Fringe»</mark> —
                          имитация световой дифракции на бликах. До значения 200 эффект
                          почти незаметен, но при 500 становится выраженным.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <p>
                      <sup>2</sup> Параметры, начинающиеся с{" "}
                      <mark className="select">«Highlight»</mark>, отвечают за усиление
                      яркости и насыщенности светлых участков изображения. Работают только
                      при включённом <mark className="select">«Depth of Field»</mark>, но
                      при этом значение размытия может оставаться нулевым.
                    </p>
                    <Addition type="info">
                      <ul>
                        <li>
                          <mark className="select">«Highlight Gain»</mark> — усиливает
                          яркость самых светлых участков размытия.
                        </li>
                        <li>
                          <mark className="select">«Highlight Threshold»</mark> —
                          определяет порог яркости, с которого начинают работать{" "}
                          <mark className="select">«Highlight Gain»</mark> и{" "}
                          <mark className="select">«Highlight Saturation»</mark>. По
                          умолчанию установлено значение <mark className="copy">255</mark>
                          ; пока вы не снизите этот порог, остальные два параметра не
                          окажут никакого эффекта.
                        </li>
                        <li>
                          <mark className="select">«Highlight Saturation»</mark> —
                          регулирует насыщенность самых ярких размытых участков.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                </ul>
              </Addition>
              <p>
                В настройках <mark className="app">Adobe After Effects</mark> можно
                включить управление камерой с помощью мыши при зажатой{" "}
                <mark className="key">Alt</mark>, а также использовать клавиши{" "}
                <mark className="key">1</mark>, <mark className="key">2</mark> и{" "}
                <mark className="key">3</mark> для выбора инструментов навигации камеры, и{" "}
                <mark className="key">4</mark>, <mark className="key">5</mark> и{" "}
                <mark className="key">6</mark> — для переключения типов инструментов для
                трёхмерных объектов в окне предпросмотра.
              </p>
              <ArticleMedia
                caption="Настраиваем управление трёхмерной камерой"
                src="legacy/aftereffects/edit_preferences_3d.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    <p>
                      <mark className="key">Shift + 1 / 2 / 3</mark> — быстро переключает
                      инструменты между указанными режимами.
                    </p>
                    <Addition type="info">
                      <ul>
                        <li>
                          <mark className="key">1</mark> — инструмент вращения по орбите
                          вокруг курсора, сцены или{" "}
                          <mark className="select">«Point of Interest»</mark>.
                        </li>
                        <li>
                          <mark className="key">2</mark> — инструмент панорамирования от
                          курсора или поворота{" "}
                          <mark className="select">«Point of Interest»</mark>.
                        </li>
                        <li>
                          <mark className="key">3</mark> — инструмент панорамирования по
                          оси Z относительно курсора, от вида камеры или от{" "}
                          <mark className="select">«Point of Interest»</mark>.
                        </li>
                        <li>
                          <mark className="key">4</mark> — инструмент перемещения
                          трёхмерного объекта.
                        </li>
                        <li>
                          <mark className="key">5</mark> — инструмент масштабирования
                          трёхмерного объекта.
                        </li>
                        <li>
                          <mark className="key">6</mark> — инструмент поворота трёхмерного
                          объекта.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <p>
                      Чтобы вернуть универсальный манипулятор после переключения
                      инструмента, выберите его в <mark className="select">«Tools»</mark>{" "}
                      или нажмите <mark className="key">Shift + V</mark>.
                    </p>
                    <ArticleMedia
                      caption="Tools"
                      src="legacy/aftereffects/select_universal_transform_gizmo.png"
                      type="image"
                    />
                  </li>
                </ul>
              </Addition>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="light"
              title="Источник освещения"
            >
              <p>
                <mark className="select">«Light Layer»</mark> — слой, который используется
                для создания света в композиции и влияет на трёхмерные объекты. Он
                позволяет освещать слои и отбрасывать от них тени, но не влияет на
                двумерные слои. Для источника света можно настроить его тип<sup>1</sup>,
                цвет<sup>2</sup>, интенсивность<sup>3</sup>, угол освещения<sup>4</sup> и
                плавность затухания конуса<sup>5</sup>, дальность действия<sup>6</sup>, а
                также работу с тенями
                <sup>7</sup>.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы создать источник освещения — нажмите комбинацию клавиш{" "}
                    <mark className="key">Ctrl + Alt + Shift + L</mark>.
                  </li>
                  <li>
                    Для настройки цвета, интенсивности и других параметров — используйте{" "}
                    <mark className="key">Ctrl + Shift + Y</mark>.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                caption="Light Settings"
                src="legacy/aftereffects/light_settings.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    <p>
                      <sup>1</sup> <mark className="select">«Light Type»</mark> — тип
                      источника освещения.
                    </p>
                    <Addition type="info">
                      <ul>
                        <li>
                          <mark className="select">«Parallel»</mark> — направленный,
                          неограниченный источник света, имитирующий солнце: лучи идут
                          строго параллельно и словно приходят «из бесконечности».
                        </li>
                        <li>
                          <mark className="select">«Spot»</mark> (по умолчанию) — свет от
                          источника в виде конуса, как у фонарика или сценического
                          прожектора. Для такого типа доступны настройки угла конуса
                          <sup>4</sup> и плавного рассеивания
                          <sup>5</sup>.
                        </li>
                        <li>
                          <mark className="select">«Point»</mark> — всенаправленный
                          точечный свет, как от обычной лампочки.
                        </li>
                        <li>
                          <mark className="select">«Ambient»</mark> — заполняющий свет, не
                          создающий теней.
                        </li>
                        <li>
                          <p>
                            <mark className="select">«Environment»</mark> — создаёт
                            освещение, отражения и тени за счёт карты{" "}
                            <mark className="image">HDRI</mark>.
                          </p>
                          <Addition type="warning">
                            Этот тип освещения доступен только при работе с движком{" "}
                            <mark className="plugin">Advanced 3D</mark>.
                          </Addition>
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <sup>2</sup> <mark className="select">«Color»</mark> — настройка цвета
                    источника освещения. Чем темнее цвет, тем ниже будет яркость самого
                    источника — вполне логично.
                  </li>
                  <li>
                    <sup>3</sup> <mark className="select">«Intensity»</mark> — мощность
                    источника освещения. Значения могут быть практически любыми.
                    Отрицательные значения «вычитают» свет других источников.
                  </li>
                  <li>
                    <sup>4</sup> <mark className="select">«Cone Angle»</mark> — угол
                    вершины конуса. Чем больше значение, тем шире распространяется свет.
                  </li>
                  <li>
                    <sup>5</sup> <mark className="select">«Cone Feather»</mark> —
                    сглаживает края светового конуса. При больших значениях{" "}
                    <mark className="select">«Intensity»</mark> эффект может быть
                    незаметен.
                  </li>
                  <li>
                    <p>
                      <sup>6</sup> <mark className="select">«Falloff»</mark> — параметр,
                      отвечающий за постепенное снижение{" "}
                      <mark className="select">«Intensity»</mark> в зависимости от
                      расстояния. <mark className="select">«Radius»</mark> задаёт область,
                      в пределах которой свет остаётся постоянным, а{" "}
                      <mark className="select">«Falloff Distance»</mark> — длину, после
                      которой свет начинает постепенно затухать.
                    </p>
                    <Addition type="info">
                      <ul>
                        <li>
                          <mark className="select">«None»</mark> — интенсивность света не
                          зависит от расстояния.
                        </li>
                        <li>
                          <mark className="select">«Smooth»</mark> — плавное уменьшение
                          яркости в пределах заданных дистанции и радиуса.
                        </li>
                        <li>
                          <mark className="select">«Inverse Square Clamped»</mark> —
                          интенсивность убывает обратно пропорционально квадрату
                          расстояния до источника.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <sup>7</sup> <mark className="select">«Casts Shadows»</mark> —
                    включает возможность для источника света отбрасывать тени. Чтобы слой
                    принимал тень, у него должен быть активен параметр{" "}
                    <mark className="select">«Accepts Shadows»</mark> (включён по
                    умолчанию). Чтобы слой сам отбрасывал тень, у него должен быть включён
                    параметр <mark className="select">«Casts Shadows»</mark> (по умолчанию
                    отключён).
                  </li>
                </ul>
              </Addition>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="adjustment"
              title="Корректирующий слой"
            >
              <p>
                <mark className="select">«Adjustment Layer»</mark> — довольно мощный
                инструмент. С его помощью можно выполнить цветокоррекцию, добавить
                цифровой шум, заставить трястись всю композицию или внести различные
                искажения. Эффекты, применённые к такому слою, будут влиять только на те
                слои, которые расположены ниже него на таймлайне.
              </p>
              <Addition type="warning">
                Не все эффекты могут корректно применяться на{" "}
                <mark className="select">«Adjustment Layer»</mark>, если в композиции
                отсутствует фон, созданный через{" "}
                <mark className="select">«Solid Layer»</mark> и размещённый под{" "}
                <mark className="select">«Adjustment Layer»</mark>.
              </Addition>
              <ArticleMedia
                src="rgMKGFWWqjA"
                type="youtube"
              />
              <p>
                По сути, роль <mark className="select">«Adjustment Layer»</mark> может
                выполнять почти любой объект на таймлайне — достаточно включить для него
                соответствующую через контекстное меню в{" "}
                <mark className="select">«Layer»</mark>, <mark className="key">ПКМ</mark>{" "}
                или с помощью соответствующего переключателя на таймлайне.
              </p>
              <ArticleMedia
                caption="Демонстрация работы корректирующего слоя"
                src="legacy/aftereffects/enable_adjustment_layer_mode.mp4"
                type="video"
              />
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="null"
              title="Нулевой объект"
            >
              <p>
                <mark className="select">«Null Object»</mark> — невидимый манипулятор для
                объектов, слоёв или параметров эффекта. Он часто применяется для создания
                зависимости между управляющими и управляемыми элементами. К нулевому
                объекту можно привязать сразу несколько слоёв — например, для их вращения
                вокруг определённой оси. Для этого можно воспользоваться лассо в столбце{" "}
                <mark className="select">«Parent & Link»</mark>
                <sup>1</sup> или <mark className="word">выражениями</mark>.
              </p>
              <ContentFilter
                macContent={
                  <>
                    <Addition type="info">
                      <sup>1</sup> Если вы скрыли отображение этого столбца на таймлайне —
                      нажмите <mark className="key">F4</mark> или{" "}
                      <mark className="key">ПКМ</mark> по заголовкам столбцов и выберите{" "}
                      <mark className="select">«Columns» → «Parent & Link»</mark>.
                    </Addition>
                    <Addition type="info">
                      Если вместо функциональных клавиш у вас срабатывает{" "}
                      <mark className="app">Launchpad</mark> или{" "}
                      <mark className="app">Spotlight</mark>, дополнительно зажмите{" "}
                      <mark className="key">Fn</mark> вместе с указанной выше комбинацией
                      или измените поведение функциональных клавиш в настройках macOS.
                    </Addition>
                  </>
                }
                windowsContent={
                  <Addition type="info">
                    <sup>1</sup> Если вы скрыли отображение этого столбца на таймлайне —
                    нажмите <mark className="key">F4</mark> или{" "}
                    <mark className="key">ПКМ</mark> по заголовкам столбцов и выберите{" "}
                    <mark className="select">«Columns» → «Parent & Link»</mark>.
                  </Addition>
                }
              />
              <ArticleMedia
                src="8ei_cj6A2Gg"
                type="youtube"
              />
              <Addition type="warning">
                Не стоит путать колонки <mark className="select">«Parent & Link»</mark> с{" "}
                <mark className="select">«Track Matte»</mark>, несмотря на то, что у обоих
                столбцов есть лассо для указания ссылки на нужный слой. Часто новички не
                смотрят на название нужной колонки, а потом удивляются, почему у них
                программа работает не так, как они хотят.
              </Addition>
            </NestedDetailsSummary>
          </li>
          <li>
            <p>
              <mark className="select">«Синтетические слои»</mark> — слои, которые
              содержат визуальные элементы, не основанные на импортированных файлах. К ним
              относятся <mark className="select">«Text Layer»</mark>,{" "}
              <mark className="select">«Shape Layer»</mark> и{" "}
              <mark className="select">«Solid Layer»</mark>.
            </p>
            <NestedDetailsSummary
              anchor="shape"
              title="Слой-фигура"
            >
              <p>
                <mark className="select">«Shape Layer»</mark> — слой, содержащий
                какую-либо форму. Фигуры могут быть разных типов:{" "}
                <mark className="select">«Rectangle»</mark>,{" "}
                <mark className="select">«Rounded Rectangle»</mark>,{" "}
                <mark className="select">«Ellipse»</mark>,{" "}
                <mark className="select">«Polygon»</mark> или{" "}
                <mark className="select">«Star»</mark>.
              </p>
              <p>
                Сами фигуры могут быть двух типов контуров: параметрическими и Безье.{" "}
                <mark className="select">«Path»</mark> маски и фигурного слоя
                взаимозаменяемы: их можно копировать и вставлять друг в друга.
              </p>
              <ul>
                <li>
                  <mark className="select">«Параметрические контуры»</mark> создаются
                  инструментами для фигур, например{" "}
                  <mark className="select">«Rectangle Tool»</mark> или{" "}
                  <mark className="select">«Ellipse Tool»</mark>. Их свойства, например
                  размер или скругление углов остаются редактируемыми через числовые
                  значения, но форму нельзя изменить произвольно.
                </li>
                <li>
                  <mark className="select">«Контуры Безье»</mark> создаются с помощью
                  инструмента <mark className="select">«Pen Tool»</mark> или могут быть
                  получены конвертацией из параметрического контура —{" "}
                  <mark className="key">ПКМ</mark> по контуру фигуры →{" "}
                  <mark className="select">«Convert To Bezier Path»</mark>. Даёт полный
                  контроль над формой через вершины и манипуляторы, но нельзя будет
                  изменить скругление или другие свойства фигуры.
                </li>
              </ul>
              <p>
                Внутри одного слоя-фигуры можно размещать несколько контуров, группировать
                их и применять к группам отдельные трансформации и атрибуты. Это позволяет
                создавать фигуры без необходимости использовать большое количество
                отдельных слоёв.
              </p>
              <ArticleMedia
                src="98ro7x3kl8A"
                type="youtube"
              />
              <Divider>
                Нюансы про <mark className="select">«Size»</mark> линии,{" "}
                <mark className="select">«Scale»</mark> фигуры и{" "}
                <mark className="select">«Scale»</mark> слоя
              </Divider>
              <p>
                При изменении масштаба фигуры с помощью{" "}
                <mark className="select">«Scale»</mark>, то вместе с увеличением
                масштабирования у вас поплывут закругления, обводка и прочие свойства. Это
                происходит потому что вы изменяете масштаб самого слоя, а не нужной
                фигуры.
              </p>
              <p>
                Чтобы при измении размера фигуры ничего не искажало — изменяйте{" "}
                <mark className="select">«Size»</mark> в{" "}
                <mark className="select">«Path»</mark> фигуры.
              </p>
              <Divider>
                Как изменять размер фигуры относительно левого или правого края без
                искажений?
              </Divider>
              <p>
                По умолчанию фигуры могут изменять свой масштаб только от центра и якорную
                точку в таком случае нельзя переместить. Даже если вы её переместите, она
                не даст никакого эффекта. Поэтому для таких случаев придётся использовать
                выражения.
              </p>
              <ArticleMedia
                src="lbV0xwkJOc0"
                type="youtube"
              />
              <p>
                Выражения ниже нужно применять на{" "}
                <mark className="select">«Anchor Point»</mark> в{" "}
                <mark className="select">«Transform»</mark> фигуры, а не слоя.{" "}
                <em className="article-note-muted">Иначе решение не сработает.</em>
              </p>
              <CodeSnippet>{`shapeName="Rectangle 1"; pathName="Rectangle Path 1"; // измените название фигуры и его контура при необходимости
w = content(shapeName).content(pathName).size[0];
h = content(shapeName).content(pathName).size[1];
[w/2, h/-2] // изменение размера фигуры от правого верхнего угла`}</CodeSnippet>
              <CodeSnippet>{`shapeName="Rectangle 1"; pathName="Rectangle Path 1"; // измените название фигуры и его контура при необходимости
w = content(shapeName).content(pathName).size[0];
h = content(shapeName).content(pathName).size[1];
[w/-2, h/-2] // изменение размера фигуры от левого верхнего угла`}</CodeSnippet>
              <CodeSnippet>
                {`shapeName="Rectangle 1"; pathName="Rectangle Path 1"; // измените название фигуры и его контура при необходимости
w = content(shapeName).content(pathName).size[0];
h = content(shapeName).content(pathName).size[1];
[w/2, h/2] // изменение размера фигуры от правого нижнего угла`}
              </CodeSnippet>
              <CodeSnippet>{`shapeName="Rectangle 1"; pathName="Rectangle Path 1"; // измените название фигуры и его контура при необходимости
w = content(shapeName).content(pathName).size[0];
h = content(shapeName).content(pathName).size[1];
[w/-2, h/2] // изменение размера фигуры от левого нижнего угла`}</CodeSnippet>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="text"
              title="Текстовый слой"
            >
              <p>
                <mark className="select">«Text Layer»</mark> — это слой с редактируемым
                текстом. У него есть два типа:{" "}
                <mark className="select">«Point Text»</mark> и{" "}
                <mark className="select">«Paragraph Text»</mark>. Каждый из них
                используется для разных целей. Вы можете{" "}
                <a href="https://www.youtube.com/watch?v=-PS2Yl-IzTQ">анимировать</a>{" "}
                <mark className="select">«Source Text»</mark> — менять сам текст на
                ключевых кадрах,{" "}
                <a href="https://www.youtube.com/watch?v=_CEpgznn-XU">пустить</a> текст по{" "}
                <mark className="select">«Path»</mark> с помощью маски или{" "}
                <a href="https://www.youtube.com/watch?v=IJ3QHNQSJg8">использовать</a>{" "}
                текстовые аниматоры.
              </p>
              <p>
                Шрифт, его размер, обводка, межстрочные и межбуквенные интервалы, лигатуры
                и другие параметры внешнего вида настраиваются в окне{" "}
                <mark className="select">«Character»</mark>. Выравнивание, отступы и
                расстояние между абзацами — в окне{" "}
                <mark className="select">«Paragraph»</mark>.
              </p>
              <Addition type="info">
                Начиная с <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">23.4 (2023)</mark>, большинство этих параметров
                доступно в окне <mark className="select">«Properties»</mark>.
              </Addition>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Point Text»</mark> — используется, когда не
                    важны ограничения по ширине или высоте. Его название говорит само за
                    себя: текст задаётся от одной точки и чаще всего идёт в одну строку.
                    Подходит для заголовков, коротких примечаний и вставок. Поддерживает
                    только выравнивание по левому, правому краю и по центру — выравнивание
                    по ширине невозможно, так как у такого текста нет фиксированной рамки.
                  </p>
                  <ArticleMedia
                    caption="Создание Point Text"
                    src="legacy/aftereffects/create_point_text.mp4"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Paragraph Text»</mark> — подходит, когда
                    нужно вписать текст в конкретную «коробку» (ограничить ширину и/или
                    высоту). Часто используется для встраивания текста в фигуры, например
                    прямоугольники. Поддерживает все типы выравнивания, включая
                    выравнивание по ширине — настраивается в{" "}
                    <mark className="select">«Paragraph»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Создание Paragraph Text"
                    src="legacy/aftereffects/create_paragraph_text.mp4"
                    type="video"
                  />
                </li>
              </ul>
              <p>
                Один тип текстового слоя можно преобразовать в другой. Для этого выберите
                инструмент <mark className="select">«Text»</mark>, затем — нужный слой,
                кликните по нему <mark className="key">ПКМ</mark> и выберите{" "}
                <mark className="select">«Convert to Point Text»</mark> или{" "}
                <mark className="select">«Convert to Paragraph Text»</mark> — в
                зависимости от того, что у вас сейчас.
              </p>
              <ArticleMedia
                caption="Конвертация Point Text в Paragraph Text"
                src="legacy/aftereffects/convert_to_paragraph_text.mp4"
                type="video"
              />
              <p>
                Также текст можно писать горизонтально и вертикально. Для этого есть
                инструменты <mark className="select">«Horizontal Text Tool»</mark> (по
                умолчанию) и <mark className="select">«Vertical Text Tool»</mark>.
                Вертикальный текст чаще используется в азиатских языках, но может
                пригодиться и для латиницы или кириллицы — например, для создания{" "}
                <mark className="term">monospace-like</mark> шрифта. Это полезно для
                анимации счётчиков, чтобы текст не прыгал.
              </p>
              <ArticleMedia
                src="__-rPlFfRow"
                type="youtube"
              />
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="solid"
              title="Сплошная заливка"
            >
              <p>
                <mark className="select">«Solid Layer»</mark> — объект с однотонным
                цветом, обычно соответствующий размерам композиции. Он часто используется
                как фон или как «инициатор» для трёхмерных эффектов, таких как{" "}
                <mark className="plugin">Element 3D</mark>,{" "}
                <mark className="plugin">Trapcode Particular</mark>,{" "}
                <mark className="plugin">Trapcode Form</mark> или{" "}
                <mark className="plugin">CC Particle World</mark>. Кроме того,{" "}
                <mark className="select">«Solid Layer»</mark> может служить простым фоном
                — это особенно полезно, когда некоторые эффекты, например переходы из{" "}
                <mark className="plugin">AtomX</mark> или{" "}
                <mark className="plugin">Motion Bro</mark>, работают некорректно с
                прозрачностью.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы создать <mark className="select">«Solid Layer»</mark> — нажмите
                    комбинацию клавиш <mark className="key">Ctrl + Y</mark>.
                  </li>
                  <li>
                    Чтобы настроить размер, цвет и другие параметры такого слоя — нажмите
                    комбинацию клавиш <mark className="key">Ctrl + Shift + Y</mark>.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                src="e-g1y4p8Jc0"
                type="youtube"
              />
              <Addition type="warning">
                <ul>
                  <li>
                    Если применённый вами эффект работает в собственном трёхмерном
                    пространстве — не стоит преобразовывать слой-«инициатор» в{" "}
                    <mark className="select">«3D Layer»</mark>. Чтобы изменить его вид или
                    положение, используйте <mark className="select">«Camera»</mark> или,
                    если возможно, создавайте{" "}
                    <mark className="select">«Null Object»</mark> для параметров положения
                    объекта.
                  </li>
                  <li>
                    Чтобы определить, использует ли эффект своё трёхмерное пространство,
                    обратите внимание на его название в{" "}
                    <mark className="select">«Effects & Controls»</mark> — рядом должна
                    отображаться иконка <mark className="select">«кубика»</mark>.
                  </li>
                </ul>
              </Addition>
            </NestedDetailsSummary>
          </li>
          <li>
            <p>
              <mark className="select">«Трёхмерные объекты»</mark>, нативный импорт
              которых стал доступен с помощью <mark className="plugin">Advanced 3D</mark>{" "}
              в <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">24.1 (2024)</mark> и выше
              <sup>1</sup>.
            </p>
            <Addition type="info">
              <sup>1</sup> Для импорта трёхмерных объектов в предыдущих версиях{" "}
              <mark className="app">Adobe After Effects</mark> используйте сторонние
              плагины, например <mark className="plugin">Element 3D</mark>.
            </Addition>
            <NestedDetailsSummary
              anchor="3d"
              title="Трёхмерный слой"
            >
              <p>
                <mark className="select">«3D Layer»</mark> — это двумерный слой, который
                может перемещаться и вращаться в трёхмерном пространстве. Он
                взаимодействует с камерами и источниками света, но сам остаётся плоским. В
                роли трёхмерного слоя может выступать картинка, фигура, текст,
                слой-заливка и другие типы слоёв. Не стоит путать с{" "}
                <mark className="select">«3D Object»</mark>.
              </p>
              <p>
                Трёхмерные слои могут пересекаться и отбрасывать тени — но только если
                между ними нет ничего, что мешает этому взаимодействию. Препятствием может
                быть не только обычный двумерный слой, но и некоторые другие, даже если
                они сами трёхмерные: <mark className="select">«Adjustment Layer»</mark>;
                слой с применённым <mark className="select">«Layer Styles»</mark>;
                прекомпозиция с эффектом, маской (в любом режиме, кроме{" "}
                <mark className="select">«None»</mark>) или{" "}
                <mark className="select">«Track Matte»</mark>; а также трёхмерная
                прекомпозиция без включённого{" "}
                <mark className="select">«Collapse Transformations»</mark>.
              </p>
              <ArticleMedia
                src="7NFsxeG-sWY"
                type="youtube"
              />
              <Addition type="warning">
                Слои, расположенные на одном уровне по оси Z, могут конфликтовать между
                собой и вызывать артефакты — например, мерцание или разрывы изображения.
                Чтобы избежать этого, старайтесь смещать их хотя бы на один пиксель друг
                от друга.
              </Addition>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="3d-object"
              title="Трёхмерные модели"
            >
              <p>
                <mark className="select">«3D Object»</mark> — объёмные модели форматов{" "}
                <mark className="file">FBX</mark>, <mark className="file">OBJ</mark>,{" "}
                <mark className="file">GLB</mark> или <mark className="file">GLTF</mark>,
                импорт которых стал возможен в{" "}
                <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">24.1 (2024)</mark> и выше с помощью{" "}
                <mark className="plugin">Advanced 3D</mark>. Такие модели можно создать в
                любом популярном 3D-редакторе, например{" "}
                <mark className="app">Blender</mark>,{" "}
                <mark className="app">Cinema 4D</mark> или{" "}
                <mark className="app">Substance 3D Painter</mark>.
              </p>
              <ArticleMedia
                src="qPOkGR7Ek2I"
                type="youtube"
              />
              <Addition type="info">
                Если вы используете <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">24.0 (2024)</mark> или более старую версию —
                используйте сторонний плагин <mark className="plugin">Element 3D</mark>{" "}
                для импорта моделей формата <mark className="file">OBJ</mark> и{" "}
                <mark className="file">E3D</mark>.
              </Addition>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="cinema-4d"
              title="Файлы Maxon Cinema 4D"
            >
              <p>
                В <mark className="app">Adobe After Effects</mark> можно импортировать
                проекты формата <mark className="file">C4D</mark>, созданные в{" "}
                <mark className="app">Maxon Cinema 4D</mark>, с помощью{" "}
                <mark className="plugin">Cineware</mark> — эффекта и технологии
                интеграции, обеспечивающей связь между этими двумя программами.
              </p>
              <Addition type="warning">
                Если вы используете репак <mark className="app">Adobe After Effects</mark>{" "}
                от <mark className="user">KpoJIuK</mark> или версию с вырезанным модулем{" "}
                <mark className="plugin">Cinema 4D Lite</mark> — установите полноценную{" "}
                <mark className="app">Maxon Cinema 4D</mark>, иначе вы столкнетесь с тем,
                что вы не сможете импортировать проекты формата{" "}
                <mark className="file">C4D</mark>.{" "}
                <a href="#fix-cinema-4d-must-be-installed">Подробнее...</a>
              </Addition>
              <ArticleMedia
                src="qFVQrxWvOjw"
                type="youtube"
              />
            </NestedDetailsSummary>
          </li>
          <li>
            <p>
              Слои <mark className="select">«композиций»</mark> и{" "}
              <mark className="select">«прекомпозиций»</mark>.
            </p>
            <NestedDetailsSummary
              anchor="composition"
              title="Композиция"
            >
              <p>
                <mark className="select">«Composition»</mark> — это ваш рабочий холст, а
                также своего рода контейнер, в котором вы можете расположить свои слои.
                Каждая композиция имеет собственный таймлайн. Чтобы создать новую пустую
                композицию — нажмите на комбинацию клавиш{" "}
                <mark className="key">Ctrl + N</mark>.
              </p>
              <p>
                Для того чтобы изменить настройки открытой композиции на таймлайне —
                нажмите <mark className="key">Ctrl + K</mark> или перейдите в{" "}
                <mark className="select">«Composition» → «Composition Settings»</mark>.
                Изменить настройки композиции можно и в окне{" "}
                <mark className="select">«Project»</mark>: выделите нужную композицию,
                нажмите <mark className="key">ПКМ</mark> по ней и выберите{" "}
                <mark className="select">«Composition Settings»</mark>.
              </p>
              <p>
                После открытия настроек композиции нас встречает вкладка{" "}
                <mark className="select">«Basic»</mark>. В ней можно задать имя
                композиции, настроить её размер — ширину и высоту в пикселях, а также
                зафиксировать соотношение сторон<sup>1</sup>. Ещё можно настроить частоту
                кадров<sup>2</sup>, соотношение сторон пикселя<sup>3</sup>, стартовый
                таймкод<sup>4</sup>, продолжительность
                <sup>5</sup>, разрешение<sup>6</sup> и фон композиции
                <sup>7</sup>.
              </p>
              <ArticleMedia
                caption="Composition Settings"
                src="legacy/aftereffects/composition_settings_basic.png"
                type="image"
              />
              <Addition type="warning">
                Учтите, что при экспорте не все кодеки поддерживают нечётное количество
                пикселей в размере той композиции, которую вы хотите экспортировать.
              </Addition>
              <Addition type="info">
                <ul>
                  <li>
                    <sup>1</sup> При включённом{" "}
                    <mark className="select">«Lock Aspect Ratio»</mark> изменение одной
                    стороны будет автоматически менять и вторую — в соответствии с
                    соотношением сторон.
                  </li>
                  <li>
                    <p>
                      <sup>2</sup> Настройка <mark className="select">«Drop Frame»</mark>{" "}
                      и <mark className="select">«Non-Drop Frame»</mark> доступна только
                      при некоторых значениях частоты кадров с плавающей точкой, например{" "}
                      29,97 или 59,94.
                    </p>
                    <Addition type="info">
                      <ul>
                        <li>
                          <mark className="select">«Drop Frame»</mark> — это способ
                          нумерации, при котором иногда пропускаются номера кадров, но
                          сами кадры при этом не теряются. Это делается для того, чтобы
                          таймкод точно совпадал с реальным временем. Потому что,
                          например, 29,97 кадров в секунду — это не ровно 30, и со
                          временем смещение накапливается. Чтобы избежать расхождений,
                          через определённые интервалы пропускают несколько номеров кадров
                          в счётчике — включают пропуск кадров.
                        </li>
                        <li>
                          <mark className="select">«Non-Drop Frame»</mark> — нумерация
                          кадров идёт без пропусков. В таком случае со временем таймкод
                          может расходиться с реальным временем видео.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <sup>3</sup> <mark className="select">«Pixel Aspect Ratio»</mark>{" "}
                    отвечает за соотношение сторон пикселя. В большинстве современных
                    видео пиксели квадратные — их ширина равна высоте, и изменение этого
                    соотношения сейчас встречается редко. Однако в некоторых
                    видеоформатах, например <mark className="term">DV PAL</mark>, пиксели
                    прямоугольные — то есть ширина и высота не равны. При необходимости вы
                    можете включить предпросмотр с коррекцией под неквадратный пиксель:
                    откройте контекстное меню окна предпросмотра композиции и включите{" "}
                    <mark className="select">«Pixel Aspect Ratio Correction»</mark>.
                  </li>
                  <li>
                    <p>
                      <sup>4</sup> При создании прекомпозиции, если включить{" "}
                      <mark className="select">
                        «Adjust composition duration to the time span of the selected
                        layers»
                      </mark>
                      , новая композиция начнёт отсчёт с момента появления самого раннего
                      слоя и обрежет ненужную длину, которая не попала в диапазон
                      длительности выделенных слоёв.
                    </p>
                    <Addition type="info">
                      Например, если вы выделили три слоя: первый начинается на второй
                      секунде, второй — на четвёртой, а третий заканчивается на седьмой,
                      то новая прекомпозиция будет иметь длину ровно 5 секунд и начнётся
                      не с 00:00:00:00, а с 00:00:02:00 — с момента появления самого
                      раннего слоя в родительской композиции.
                    </Addition>
                  </li>
                  <li>
                    <sup>5</sup> По умолчанию в{" "}
                    <mark className="app">Adobe After Effects</mark> продолжительность
                    выражается в формате ЧЧ:ММ:СС:КК, где Ч — часы, М — минуты, С —
                    секунды, К — кадры. При желании вы можете изменить формат времени на
                    отображение количества кадров, нажав <mark className="key">ЛКМ</mark>{" "}
                    по таймкоду на таймлайне с зажатым <mark className="key">Ctrl</mark>.
                  </li>
                  <li>
                    <sup>6</sup> Параметр <mark className="select">«Resolution»</mark>{" "}
                    влияет только на разрешение рендеринга — так же, как если бы вы
                    изменяли значение качества в окне предпросмотра. В этом параметре
                    доступны привычные значения: <mark className="select">«Full»</mark>,{" "}
                    <mark className="select">«Half»</mark>,{" "}
                    <mark className="select">«Third»</mark>,{" "}
                    <mark className="select">«Quarter»</mark> и{" "}
                    <mark className="select">«Custom»</mark>, в котором можно указать
                    значение каждого пикселя по горизонтали и вертикали, который нужно
                    отрендерить для предпросмотра.
                  </li>
                  <li>
                    <sup>7</sup> Настройка цвета фона в настройках композиции влияет
                    только на цвет подложки в окне предпросмотра. Чтобы действительно
                    добавить фон в композицию — создайте{" "}
                    <mark className="select">«Solid Layer»</mark>, задайте ему нужный цвет
                    и расположите его самым последним слоем по иерархии наложения.
                  </li>
                </ul>
              </Addition>
              <p>
                Во вкладке <mark className="select">«Advanced»</mark> вы можете настроить
                размытие в движении более детально, указав значения угла<sup>1</sup> и
                фазы затвора<sup>2</sup>, количества семплов<sup>3</sup>, а также якорную
                точку
                <sup>4</sup> самой композиции при изменении её размера. В этом разделе
                также есть два полезных параметра, связанные с{" "}
                <mark className="select">«Preserve»</mark>
                <sup>5</sup>.
              </p>
              <ArticleMedia
                caption="Composition Settings"
                src="legacy/aftereffects/composition_settings_advanced.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    <sup>1</sup> <mark className="select">«Shutter Angle»</mark> или{" "}
                    <mark className="select">«угол затвора»</mark> — степень размытия
                    движущихся объектов. Чем больше{" "}
                    <mark className="select">«угол затвора»</mark>, тем сильнее
                    размывается изображение при движении.
                  </li>
                  <li>
                    <sup>2</sup> <mark className="select">«Shutter Phase»</mark> или{" "}
                    <mark className="select">«фаза затвора»</mark> — параметр, который
                    задаёт смещение момента начала «виртуального затвора» по времени
                    относительно текущего кадра при создании размытия движения.
                  </li>
                  <li>
                    <sup>3</sup> <mark className="select">«Samples Per Frame»</mark> или{" "}
                    <mark className="select">«количество семплов размытия на кадр»</mark>{" "}
                    — чем больше значение, тем меньше будет «лесенок» у следов движущегося
                    объекта.
                  </li>
                  <li>
                    <sup>4</sup> Изменение <mark className="select">«Anchor»</mark> влияет
                    на положение ваших слоёв при изменении размера ширины или высоты
                    композиции. Если, например, указать левый нижний угол, то композиция
                    начнёт изменять размер относительно этой точки, а все ваши слои будут
                    стоять относительно этой якорной точки. По умолчанию все слои при
                    изменении размера композиции остаются в центре.
                  </li>
                  <li>
                    <sup>5</sup>{" "}
                    <mark className="select">
                      «Preserve frame rate when nested or in render queue
                    </mark>{" "}
                    сохраняет заданную частоту кадров композиции при вложении в другую.{" "}
                    <mark className="select">«Preserve resolution when nested»</mark>{" "}
                    сохраняет разрешение (<mark className="select">«Full»</mark>,{" "}
                    <mark className="select">«Half»</mark>,{" "}
                    <mark className="select">«Third»</mark>,{" "}
                    <mark className="select">«Quarter»</mark> или{" "}
                    <mark className="select">«Custom»</mark>), указанное в окне
                    предпросмотра или настройках композиции, при вложении в другую
                    композицию.{" "}
                    <a href="https://www.youtube.com/watch?v=ko1Uua-2znU">Подробнее...</a>
                  </li>
                </ul>
              </Addition>
              <p>
                Во вкладке <mark className="select">«3D Renderer»</mark> вы можете
                изменить движок для рендера трёхмерных слоёв и, при возможности, настроить
                его параметры. Учтите, что <mark className="plugin">Advanced 3D</mark> и{" "}
                <mark className="plugin">Cinema 4D</mark> многое не поддерживают из
                привычных действий, как <mark className="plugin">Classic 3D</mark>.
                Например — отсутствует поддержка режимов наложения, размытия в движении,
                невозможность применения некоторых эффектов и прочее.
              </p>
              <ArticleMedia
                caption="Composition Settings"
                src="legacy/aftereffects/composition_settings_3d_renderer.png"
                type="image"
              />
              <p>
                При необходимости композицию можно «зафиксировать и отрендерить», чтобы не
                просчитывать её заново каждый раз, если вы не планируете больше её
                редактировать. Для этого выделите нужную композицию в окне{" "}
                <mark className="select">«Project»</mark>, нажмите по ней{" "}
                <mark className="key">ПКМ</mark> и выберите в контекстном меню{" "}
                <mark className="select">«Create Proxy» → «Movie»</mark>. После этого
                программа отправит вас в <mark className="select">«Render Queue»</mark>,
                где можно задать нужные настройки рендера. Чтобы сохранить качество,
                рекомендую выбрать <mark className="select">«QuickTime»</mark> с кодеком{" "}
                <mark className="video">Apple ProRes 422</mark> или{" "}
                <mark className="video">Apple ProRes 4444</mark>.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Если вы хотите, чтобы при финальном рендере использовались
                    прокси-файлы вместо повторного просчёта оригинальной композиции, в
                    параметре <mark className="select">«Proxy Use»</mark> настроек{" "}
                    <mark className="select">«Render Settings»</mark> установите значение{" "}
                    <mark className="select">«Use All Proxies»</mark>.
                  </li>
                  <li>
                    Чтобы временно отключить прокси, нажмите на иконку квадрата слева от
                    названия композиции в окне <mark className="select">«Project»</mark>.
                    А чтобы полностью отвязать прокси-файл — нажмите{" "}
                    <mark className="key">ПКМ</mark> по композиции и выберите{" "}
                    <mark className="select">«Set Proxy» → «None»</mark>.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                caption="Создание прокси для композиции"
                src="legacy/aftereffects/create_comp_proxy.mp4"
                type="video"
              />
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="precompose"
              title="Предварительная композиция"
            >
              <p>
                <mark className="select">«Pre-comp»</mark> — это дочерняя композиция,
                которая создаётся на основе выделенных слоёв родительской композиции.
                Чтобы её создать, выделите нужные слои на таймлайне и нажмите{" "}
                <mark className="key">Ctrl + Shift + C</mark>. В появившемся окне можно
                выбрать один из двух способов вложения.
              </p>
              <ArticleMedia
                caption="Pre-compose"
                src="legacy/aftereffects/pre-compose.png"
                type="image"
              />
              <ul>
                <li>
                  <p>
                    <mark className="select">
                      «Leave all attributes in &apos;Composition Name&apos;»
                    </mark>{" "}
                    — создать прекомпозицию, параметры которой (разрешение, частота
                    кадров) будут основаны на исходном файле, а не на родительской
                    композиции. Все свойства, атрибуты и эффекты при этом останутся в
                    родительской композиции. Например, если на таймлайн с частотой 60 FPS
                    вы добавили видеофайл с частотой 25 FPS и создали прекомпоз с этой
                    опцией, то новая композиция тоже будет иметь частоту 25 FPS.
                  </p>
                  <Addition type="warning">
                    Эта опция доступна только тогда, когда выделен один слой, а также если
                    этот слой имеет <mark className="select">«Source»</mark>, например
                    слой с <mark className="video">видео</mark>,{" "}
                    <mark className="image">фото</mark> или{" "}
                    <mark className="audio">аудио</mark>.
                  </Addition>
                </li>
                <li>
                  <p>
                    <mark className="select">
                      «Move all attributes into the new composition»
                    </mark>{" "}
                    — перемещает выделенный слой или слои со всеми свойствами, атрибутами
                    и эффектами в новую композицию, которая создаётся с параметрами
                    родительской.
                  </p>
                  <ul>
                    <li>
                      <p>
                        <mark className="select">
                          «Adjust composition duration to the time span of the selected
                          layers»
                        </mark>{" "}
                        — обрезает новую композицию под общую длительность выделенных
                        слоёв.
                      </p>
                      <Addition type="warning">
                        Учтите: при включённом параметре значение стартового таймкода
                        будет изменено на таймкод начала первого выделенного слоя. При
                        необходимости вы можете позже изменить стартовый таймкод в
                        настройках созданной композиции.
                      </Addition>
                    </li>
                  </ul>
                </li>
                <li>
                  <mark className="select">«Open New Composition»</mark> — откроет
                  созданную прекомпозицию на таймлайне.
                </li>
              </ul>
              <Addition type="info">
                Для прекомпозиций иногда бывает полезно включать{" "}
                <mark className="select">«Collapse Transformation»</mark>. Эта опция
                позволяет предварительной композиции вести себя как набор слоёв с
                сохранением всей их чёткости, трёхмерных параметров и анимаций, как будто
                вы слои вовсе не «прекомпозили».{" "}
                <a href="https://www.youtube.com/watch?v=Ns41v75th_I&t=358s">
                  Подробнее...
                </a>
              </Addition>
            </NestedDetailsSummary>
          </li>
        </ul>
        <Divider>Разбираем атрибуты слоя</Divider>
        <ul>
          <li>
            <p>
              На сами слои можно применять эффекты, добавлять маркеры, использовать маски
              и многое другое.
            </p>
            <NestedDetailsSummary
              anchor="parent-link"
              title="Parent & Link"
            >
              <p>
                <mark className="select">«Parent & Link»</mark> связывает слои в иерархию
                «родитель и ребёнок». Дочерний объект наследует положение, масштаб и
                поворот родителя относительно текущего времени, сохраняя при этом
                возможность независимой анимации. Поэтому, если родитель уже анимирован,
                привязку лучше делать в тот момент, когда{" "}
                <mark className="select">«Current Time Indicator»</mark> стоит в её
                начале.{" "}
                <em className="article-note-muted">Хотя всё зависит от ситуации...</em>
              </p>
              <p>
                Данный функционал полезен для создания персонажной анимации или для
                соединения тех или иных слоёв друг с другом.
              </p>
              <Addition type="warning">
                Не стоит путать колонки <mark className="select">«Parent & Link»</mark> с{" "}
                <mark className="select">«Track Matte»</mark>, несмотря на то, что у обоих
                столбцов есть лассо для указания ссылки на нужный слой. Часто новички не
                смотрят на название нужной колонки, а потом удивляются, почему у них
                программа работает не так, как они хотят.
              </Addition>
              <ArticleMedia
                src="TP1fEnJkzmQ"
                type="youtube"
              />
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="masks"
              title="Маски и «Track Matte»"
            >
              <p>
                <mark className="select">«Mask»</mark> — область, в которой слой будет
                виден или не виден, в зависимости от типа маски и её настроек. Её часто
                используют для выделения или скрытия частей изображения, а также для
                создания эффектов с плавной анимацией появления или исчезновения объектов.
              </p>
              <ArticleMedia
                src="VOV4zs87xOU"
                type="youtube"
              />
              <p>
                Для создания обычной маски выделите нужный слой, выберите инструмент{" "}
                <mark className="select">«Pen Tool»</mark> или одну из фигур:{" "}
                <mark className="select">«Rectangle Tool»</mark>
                <sup>1</sup>, <mark className="select">«Rounded Rectangle Tool»</mark>
                <sup>2</sup>, <mark className="select">«Ellipse Tool»</mark>,{" "}
                <mark className="select">«Polygon Tool»</mark> или{" "}
                <mark className="select">«Star Tool»</mark>, а затем нарисуйте область,
                которая должна остаться видимой.
              </p>
              <Addition type="warning">
                <ul>
                  <li>
                    <sup>1, 2</sup> Вы не можете изменить или анимировать{" "}
                    <mark className="select">«Roundness»</mark> для таких фигур. Вместо
                    этого используйте связку{" "}
                    <mark className="select">«Shape Layer» → «Rectangle»</mark> и{" "}
                    <mark className="select">«Track Matte»</mark>.
                  </li>
                  <li>
                    Не все эффекты корректно работают с масками на одном слое, например{" "}
                    <mark className="plugin">Roto Brush</mark>. Если нужно наложить маску
                    на слой с таким эффектом, создайте прекомпозицию с переносом атрибутов
                    внутрь, а маски добавляйте уже на ней.
                  </li>
                </ul>
              </Addition>
              <p>
                Созданную маску можно растушевать, изменив параметр{" "}
                <mark className="select">«Mask Feather»</mark>, настроить прозрачность
                через <mark className="select">«Mask Opacity»</mark>, расширить с помощью{" "}
                <mark className="select">«Mask Expansion»</mark>, а также анимировать её
                форму.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Если на таймлайне выделен{" "}
                    <mark className="select">«Shape Layer»</mark>, инструменты рисования
                    по умолчанию создают новую фигуру внутри слоя. Чтобы вместо этого
                    нарисовать маску, переключите режим на панели инструментов с{" "}
                    <mark className="select">«Tool Creates Shape»</mark> на{" "}
                    <mark className="select">«Tool Creates Mask»</mark>.
                  </li>
                  <li>
                    <mark className="select">«Path»</mark> у маски и слоя-фигуры
                    взаимозаменяемы. Вы можете копировать ключевые кадры формы с{" "}
                    <mark className="select">«Shape Layer»</mark> на{" "}
                    <mark className="select">«Mask»</mark> и наоборот.
                  </li>
                </ul>
              </Addition>
              <p>
                Для масок можно использовать режимы наложения{" "}
                <mark className="select">«None»</mark>,{" "}
                <mark className="select">«Add»</mark> (по умолчанию),{" "}
                <mark className="select">«Subtract»</mark>,{" "}
                <mark className="select">«Intersect»</mark>,{" "}
                <mark className="select">«Lighten»</mark>,{" "}
                <mark className="select">«Darken»</mark> и{" "}
                <mark className="select">«Difference»</mark>. Если масок несколько, эти
                режимы определяют способ их взаимодействия, а действие каждой можно
                инвертировать.
              </p>
              <ArticleMedia
                src="gn0jUFq-vPw"
                type="youtube"
              />
              <p>
                Помимо обычной маски, есть и <mark className="select">«Track Matte»</mark>
                . Он представляет собой слой, на основе которого создаётся сложная маска,
                работающая по прозрачности или яркости. В роли подложки может выступать
                что угодно: статичное изображение, видео, векторная графика, текст или
                фигура. Например, текстовый слой может служить маской для видеоряда, чтобы
                изображение проступало только сквозь очертания букв. Слой заполнения
                считывает информацию о прозрачности из каналов слоя-подложки либо на
                основе альфа-канала, либо по яркости пикселей.
              </p>
              <ArticleMedia
                src="VWkS1vcs0Wk"
                type="youtube"
              />
              <Addition type="warning">
                Пожалуйста, не путайте колонки{" "}
                <mark className="select">«Track Matte»</mark> с{" "}
                <mark className="select">«Parent & Link»</mark>, несмотря на то, что у
                обоих столбцов есть лассо для указания ссылки на нужный слой. Часто
                новички не смотрят на название нужной колонки, а потом удивляются, почему
                у них программа работает не так, как они хотят.
              </Addition>
              <Divider>
                Особенности работы с «Track Matte» в разных версиях программы
              </Divider>
              <p>
                В <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">23.0 (2023)</mark> и выше интерфейс работы с{" "}
                <mark className="select">«Track Matte»</mark> обновили, что часто путает
                пользователей при просмотре старых уроков, хотя принцип действия остался
                прежним. Выбор режимов <mark className="select">«Alpha»</mark> и{" "}
                <mark className="select">«Luma»</mark> вместе с инверсией заменили на
                иконки, а привязку сделали удобнее: теперь один слой-маску можно
                использовать сразу для нескольких слоёв композиции.
              </p>
              <Addition type="info">
                Дополнительную информацию об этом обновлении можно прочитать на{" "}
                <a href="https://helpx.adobe.com/after-effects/using/track-mattes-and-traveling-mattes.html">
                  сайте Adobe
                </a>
                .
              </Addition>
              <ArticleMedia
                src="2Fi57LLJrUE"
                type="youtube"
              />
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="guide"
              title="Слой направляющей"
            >
              <p>
                <mark className="select">«Guide Layer»</mark> — атрибут, который
                превращает слой в своего рода «комментарий»: он виден в окне
                предпросмотра, но не рендерится при финальном экспорте<sup>1</sup>.
              </p>
              <p>
                Его можно использовать при наложении технических оверлеев, таких как
                границы интерфейса <mark className="web">TikTok</mark> или{" "}
                <mark className="web">YouTube Shorts</mark>, а также для передачи
                инструкций коллегам по проекту, чтобы им было проще внести правки позже.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    <sup>1</sup> Данное поведение можно изменить в{" "}
                    <mark className="select">«Render Settings»</mark>, изменив значение
                    параметра <mark className="select">«Guide Layers»</mark> на{" "}
                    <mark className="select">«Current Settings»</mark>.
                  </li>
                  <li>
                    Чтобы включить этот атрибут — откройте{" "}
                    <mark className="select">«Layer»</mark> или нажмите{" "}
                    <mark className="key">ПКМ</mark> по слою и выберите в контекстном меню{" "}
                    <mark className="select">«Guide Layer»</mark>.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                src="_rxq8Pa9WdQ"
                type="youtube"
              />
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="shy"
              title="Скрытые слои"
            >
              <p>
                <mark className="select">«Shy Layer»</mark> — атрибут, который задаётся
                слою, если его нужно скрыть из таймлайна. При этом сам слой из композиции
                не исчезает и отображается, как и прежде. Такой атрибут полезен для
                организации слоёв и при создании шаблонов — он помогает скрыть некоторые
                слои от лишних глаз, но при этом никак не защищает их от удаления.
              </p>
              <ArticleMedia
                src="Bw3snjRq2kE"
                type="youtube"
              />
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="blending-modes"
              title="Режимы наложения"
            >
              <p>
                <mark className="select">«Blending Modes»</mark> — режимы наложения,
                определяющие, как слой взаимодействует со слоями ниже по иерархии. С их
                помощью можно создавать различные визуальные эффекты, например осветлять
                или затемнять изображение другим слоем.
              </p>
              <Addition type="info">
                Переключать режимы наложения можно через столбец{" "}
                <mark className="select">«Modes»</mark> или с помощью комбинаций клавиш{" "}
                <mark className="key">Shift + =</mark> и{" "}
                <mark className="key">Shift + -</mark>, предварительно выделив слои.
              </Addition>
              <Addition type="warning">
                <ul>
                  <li>
                    <p>
                      Учтите, что режимы наложения не поддерживаются в движках рендера{" "}
                      <mark className="plugin">Advanced 3D</mark> и{" "}
                      <mark className="plugin">Cinema 4D</mark>.
                    </p>
                    <p>
                      Если вам нужно сохранить работоспособность режимов наложения при
                      использовании трёхмерных слоёв — переключите движок рендеринга на{" "}
                      <mark className="plugin">Classic 3D</mark> в настройках композиции.
                    </p>
                  </li>
                  <li>
                    Режимы наложения нельзя анимировать ключевыми кадрами. Чтобы изменить
                    режим наложения в определённый отрезок времени — разделите выделенные
                    слои комбинацией клавиш <mark className="key">Ctrl + Shift + D</mark>{" "}
                    и измените режим наложения для второй части разделённого слоя.
                  </li>
                  <li>
                    Режимы наложения работают только в том случае, если под слоем есть
                    другие видимые слои. Добавлять под него чёрный{" "}
                    <mark className="select">«Solid Layer»</mark> бессмысленно.
                  </li>
                  <li>
                    Некоторые режимы наложения могут работать некорректно с добавленными
                    на слой <mark className="select">«Layer Styles»</mark>.
                  </li>
                </ul>
              </Addition>
              <Divider>Описание и демонстрация режимов наложения слоёв</Divider>
              <p>
                Режимы наложения условно делятся на 8 групп, однако в интерфейсе{" "}
                <mark className="app">Adobe After Effects</mark> их названия не
                отображаются, а в списке они отделены только разделительными линиями.
              </p>
              <Addition type="info">
                <p>Чтобы не путаться в описаниях, сразу определимся с терминами.</p>
                <ul>
                  <li>
                    <mark className="word">Верхний слой</mark> — слой, на котором выбран
                    режим наложения.
                  </li>
                  <li>
                    <mark className="word">Нижний слой</mark> — слои, которые находятся
                    ниже верхнего слоя по иерархии на таймлайне композиции.
                  </li>
                  <li>
                    <mark className="word">Итоговый слой</mark> — результат наложения
                    слоёв.
                  </li>
                  <li>
                    <mark className="word">Канал</mark> — составляющая часть изображения,
                    содержащая информацию об одном параметре цвета, например, об
                    интенсивности красного, зелёного, синего или о прозрачности.
                  </li>
                  <li>
                    <mark className="word">RGB</mark> — цветовая модель, в которой цвета
                    формируются смешиванием каналов красного, зелёного и синего.
                  </li>
                  <li>
                    <mark className="word">Alpha</mark> или{" "}
                    <mark className="word">альфа-канал</mark> — канал, который определяет
                    степень прозрачности цвета.
                  </li>
                  <li>
                    <mark className="word">HSL</mark> — цветовая модель, разделяющая
                    параметры цвета на каналы тона, насыщенности и яркости.
                  </li>
                </ul>
              </Addition>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Normal»</mark> — режим по умолчанию. Верхний
                    слой перекрывает нижний слой без смешивания.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Normal"
                    src="media/after-effects/blending-modes/Normal.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Dissolve»</mark> — превращает полупрозрачные
                    области верхнего слоя в зернистый шум. Отдельные участки верхнего слоя
                    становятся полностью прозрачными, пропуская нижний слой. Не работает с
                    трёхмерными слоями.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Dissolve"
                    src="media/after-effects/blending-modes/Dissolve.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Dancing Dissolve»</mark> — работает
                    аналогично <mark className="select">«Dissolve»</mark>, но узор шума
                    пересчитывается на каждом кадре. Не работает с трёхмерными слоями.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Dancing Dissolve"
                    src="media/after-effects/blending-modes/Dancing Dissolve.webm"
                    type="video"
                  />
                </li>
              </ul>
              <Divider>Категория «Subtractive»</Divider>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Darken»</mark> — сравнивает каналы верхнего
                    и нижнего слоёв и оставляет более тёмные значения. На границах, где
                    цвета слоёв различаются, могут появляться новые оттенки.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Darken"
                    src="media/after-effects/blending-modes/Darken.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Multiply»</mark> — затемняет изображение,
                    перемножая значения каналов верхнего и нижнего слоёв. Белый цвет
                    верхнего слоя не меняет нижний слой, серые тона пропорционально
                    затемняют его, а чёрный делает итоговый слой чёрным. Применяется для
                    наложения теней или удаления светлого фона.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Multiply"
                    src="media/after-effects/blending-modes/Multiply.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Color Burn»</mark> — затемняет нижний слой,
                    повышая его контраст и насыщенность в зависимости от значений каналов
                    верхнего слоя. Белый цвет верхнего слоя не меняет нижний слой.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Color Burn"
                    src="media/after-effects/blending-modes/Color Burn.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Classic Color Burn»</mark> — устаревшая
                    версия режима <mark className="select">«Color Burn»</mark>,
                    сохранённая для совместимости со старыми проектами.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Classic Color Burn"
                    src="media/after-effects/blending-modes/Classic Color Burn.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Linear Burn»</mark> — затемняет нижний слой,
                    снижая общую яркость в зависимости от значений каналов верхнего слоя.
                    Белый цвет верхнего слоя не меняет нижний слой, а тёмные участки
                    сильнее уводятся в чёрный цвет по сравнению с режимом{" "}
                    <mark className="select">«Multiply»</mark>.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Linear Burn"
                    src="media/after-effects/blending-modes/Linear Burn.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Darker Color»</mark> — сравнивает яркость
                    верхнего и нижнего слоёв и оставляет цвета того слоя, который темнее.
                    В отличие от режима <mark className="select">«Darken»</mark>, работает
                    с цветом целиком, а не по отдельным каналам, давая резкие границы без
                    смешивания оттенков.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Darker Color"
                    src="media/after-effects/blending-modes/Darker Color.webm"
                    type="video"
                  />
                </li>
              </ul>
              <Divider>Категория «Additive»</Divider>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Add»</mark> — складывает значения каналов
                    верхнего и нижнего слоёв. Любые значения яркости выше единицы
                    становятся белыми, серые тона пропорционально осветляют нижний слой, а
                    чёрный цвет верхнего слоя не меняет его. Применяется для наложения
                    эффектов вспышки, лазеров или свечений.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Add"
                    src="media/after-effects/blending-modes/Add.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Lighten»</mark> — сравнивает каналы верхнего
                    и нижнего слоёв и оставляет более светлые значения. Как и режим{" "}
                    <mark className="select">«Darken»</mark>, может создавать новые цвета
                    на границах, где цвета слоёв различаются.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Lighten"
                    src="media/after-effects/blending-modes/Lighten.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Screen»</mark> — осветляет изображение.
                    Математически работает противоположно умножению: инвертирует значения
                    каналов, перемножает их и инвертирует обратно. Белый цвет верхнего
                    слоя делает итоговый слой белым, серые тона пропорционально осветляют
                    нижний слой, а чёрный не меняет его. Применяется для наложения
                    эффектов огня, искр или пыли на чёрном фоне.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Screen"
                    src="media/after-effects/blending-modes/Screen.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Color Dodge»</mark> — осветляет каналы
                    нижнего слоя за счёт уменьшения их контраста в зависимости от значений
                    каналов верхнего слоя. Чёрный цвет верхнего слоя не меняет нижний
                    слой.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Color Dodge"
                    src="media/after-effects/blending-modes/Color Dodge.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Classic Color Dodge»</mark> — устаревшая
                    версия режима <mark className="select">«Color Dodge»</mark>,
                    сохранённая для совместимости со старыми проектами.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Classic Color Dodge"
                    src="media/after-effects/blending-modes/Classic Color Dodge.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Linear Dodge»</mark> — складывает значения
                    каналов верхнего и нижнего слоёв. Чёрный цвет верхнего слоя не меняет
                    нижний слой. При полной непрозрачности результат наложения идентичен
                    режиму <mark className="select">«Add»</mark>, но отличается от него
                    при её снижении. Добавлен для совместимости с проектами в{" "}
                    <mark className="app">Adobe Photoshop</mark>.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Linear Dodge"
                    src="media/after-effects/blending-modes/Linear Dodge.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Lighter Color»</mark> — сравнивает яркость
                    верхнего и нижнего слоёв и оставляет цвета того слоя, который светлее.
                    В отличие от режима <mark className="select">«Lighten»</mark>,
                    работает с цветом целиком, а не по отдельным каналам, давая резкие
                    границы без смешивания оттенков.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Lighter Color"
                    src="media/after-effects/blending-modes/Lighter Color.webm"
                    type="video"
                  />
                </li>
              </ul>
              <Divider>Категория «Complex»</Divider>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Overlay»</mark> — сочетает в себе режимы{" "}
                    <mark className="select">«Multiply»</mark> для тёмных участков и{" "}
                    <mark className="select">«Screen»</mark> для светлых. Затемнение или
                    осветление каналов зависит от значений нижнего слоя. Обычно
                    используется при наложении текстур, сохраняя детали теней и бликов.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Overlay"
                    src="media/after-effects/blending-modes/Overlay.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Soft Light»</mark> — повышает контраст
                    нижнего слоя в зависимости от значений каналов верхнего, имитируя
                    освещение рассеянным источником света. Затемняет тени и осветляет
                    блики без жёстких пересветов.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Soft Light"
                    src="media/after-effects/blending-modes/Soft Light.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Hard Light»</mark> — имитирует освещение
                    нижнего слоя направленным прожектором. В отличие от режима{" "}
                    <mark className="select">«Overlay»</mark>, затемнение или осветление
                    каналов зависит от значений верхнего.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Hard Light"
                    src="media/after-effects/blending-modes/Hard Light.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Linear Light»</mark> — осветляет или
                    затемняет нижний слой, изменяя яркость его каналов в зависимости от
                    значений верхнего.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Linear Light"
                    src="media/after-effects/blending-modes/Linear Light.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Vivid Light»</mark> — осветляет или
                    затемняет нижний слой, изменяя контраст его каналов в зависимости от
                    значений верхнего.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Vivid Light"
                    src="media/after-effects/blending-modes/Vivid Light.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Pin Light»</mark> — заменяет значения
                    каналов нижнего слоя в зависимости от значений верхнего. Если канал
                    верхнего слоя светлее 50% серого, то тёмные области нижнего заменяются
                    значениями верхнего. Если темнее 50% серого — заменяются светлые.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Pin Light"
                    src="media/after-effects/blending-modes/Pin Light.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Hard Mix»</mark> — сводит значения каналов
                    итогового слоя к крайним точкам, из-за чего цвета раскладываются на
                    восемь базовых: красный, жёлтый, зелёный, голубой, синий, пурпурный,
                    белый и чёрный.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Hard Mix"
                    src="media/after-effects/blending-modes/Hard Mix.webm"
                    type="video"
                  />
                </li>
              </ul>
              <Divider>Категория «Difference»</Divider>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Difference»</mark> — находит разницу между
                    значениями каналов верхнего и нижнего слоёв. Наложение белого цвета
                    инвертирует каналы нижнего слоя, а чёрный цвет верхнего слоя не меняет
                    нижний слой. Применяется для проверки и точного выравнивания двух
                    кадров: при их совпадении итоговый слой становится чёрным.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Difference"
                    src="media/after-effects/blending-modes/Difference.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Classic Difference»</mark> — устаревшая
                    версия режима <mark className="select">«Difference»</mark>,
                    сохранённая для совместимости со старыми проектами.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Classic Difference"
                    src="media/after-effects/blending-modes/Classic Difference.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Exclusion»</mark> — находит разницу между
                    значениями каналов слоёв по более плавной формуле, чем режим{" "}
                    <mark className="select">«Difference»</mark>. Наложение белого цвета
                    инвертирует каналы нижнего слоя, средние тона снижают контраст до
                    нейтрального серого, а чёрный цвет верхнего слоя не меняет его. Даёт
                    мягкий пастельный результат, часто применяемый для винтажного
                    тонирования.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Exclusion"
                    src="media/after-effects/blending-modes/Exclusion.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Subtract»</mark> — математически вычитает
                    значения каналов верхнего слоя из нижнего. Чёрный цвет верхнего слоя
                    не меняет нижний слой. Если значения итогового цвета уходят ниже нуля,
                    они заменяются чёрным цветом.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Subtract"
                    src="media/after-effects/blending-modes/Substract.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Divide»</mark> — математически делит
                    значения каналов нижнего слоя на значения верхнего. Белый цвет
                    верхнего слоя не меняет нижний слой. Если значения итогового цвета
                    превышают единицу, они заменяются белым. Используется для удаления
                    нежелательных цветовых оттенков с футажей.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Divide"
                    src="media/after-effects/blending-modes/Divide.webm"
                    type="video"
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Hue»</mark> — переносит цветовой тон
                    верхнего слоя на нижний, сохраняя яркость и насыщенность последнего.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Hue"
                    src="media/after-effects/blending-modes/Hue.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Saturation»</mark> — переносит насыщенность
                    верхнего слоя на нижний, сохраняя яркость и цветовой тон последнего.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Saturation"
                    src="media/after-effects/blending-modes/Saturation.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Color»</mark> — заменяет цветовой тон и
                    насыщенность нижнего слоя, сохраняя его яркость. Применяется для
                    тонирования чёрно-белых кадров или изменения цвета объектов.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Color"
                    src="media/after-effects/blending-modes/Color.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Luminosity»</mark> — переносит яркость
                    верхнего слоя на нижний, сохраняя цветовой тон и насыщенность
                    последнего. Работает противоположно режиму{" "}
                    <mark className="select">«Color»</mark>.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Luminosity"
                    src="media/after-effects/blending-modes/Luminosity.webm"
                    type="video"
                  />
                </li>
              </ul>
              <Divider>Категория «Matte»</Divider>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Stencil Alpha»</mark> — использует
                    альфа-канал верхнего слоя как глобальный трафарет. Нижний слой
                    обрезается строго по форме этого альфа-канала.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Stencil Alpha"
                    src="media/after-effects/blending-modes/Stencil Alpha.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Stencil Luma»</mark> — обрезает нижний слой
                    по яркости верхнего слоя. Белые области верхнего слоя оставляют нижний
                    слой непрозрачным, серые тона создают полупрозрачность, а чёрные
                    делают его полностью прозрачным.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Stencil Luma"
                    src="media/after-effects/blending-modes/Stencil Luma.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Silhouette Alpha»</mark> — работает
                    противоположно режиму <mark className="select">«Stencil Alpha»</mark>,
                    вырезая отверстие в нижнем слое по форме альфа-канала верхнего слоя.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Silhouette Alpha"
                    src="media/after-effects/blending-modes/Silhouette Alpha.webm"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    <mark className="select">«Silhouette Luma»</mark> — работает
                    противоположно режиму <mark className="select">«Stencil Luma»</mark>,
                    вырезая прозрачность в нижнем слое по яркости верхнего слоя. Белые
                    области верхнего слоя делают нижний слой полностью прозрачным, серые
                    тона пропорционально регулируют степень его прозрачности, а чёрные
                    оставляют непрозрачным.
                  </p>
                  <ArticleMedia
                    loop
                    caption="Silhouette Luma"
                    src="media/after-effects/blending-modes/Silhouette Luma.webm"
                    type="video"
                  />
                </li>
              </ul>
              <Divider>Категория «Utility»</Divider>
              <ul>
                <li>
                  <p>
                    <mark className="select">«Alpha Add»</mark> — складывает только
                    альфа-каналы верхнего и нижнего слоёв.
                  </p>
                </li>
                <li>
                  <p>
                    <mark className="select">«Luminescent Premul»</mark> — предотвращает
                    отсечение цветовых значений верхнего слоя, превышающих значение его
                    альфа-канала при наложении. Используется при композитинге бликов,
                    вспышек и свечений на футажах с предварительно умноженным
                    альфа-каналом.
                  </p>
                </li>
              </ul>
            </NestedDetailsSummary>
            <NestedDetailsSummary
              anchor="markers"
              title="Маркеры"
            >
              <p>
                <mark className="select">«Markers»</mark> — это метки с возможностью
                добавления комментария, которые можно ставить на слой или на таймлайн
                композиции. Они помогают отмечать важные моменты, например биты в музыке
                или начало определённого действия.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы поставить маркер на выделенный слой — нажмите{" "}
                    <mark className="key">
                      * <span className="shortcut-hint">(на Numpad)</span>
                    </mark>{" "}
                    на цифровом блоке клавиатуры.
                  </li>
                  <li>
                    Чтобы поставить маркер на слой и сразу открыть окно его настроек —
                    нажмите{" "}
                    <mark className="key">
                      Alt + * <span className="shortcut-hint">(на Numpad)</span>
                    </mark>
                    .
                  </li>
                  <li>
                    Если слой не выделен, маркер будет поставлен на таймлайн композиции.
                  </li>
                </ul>
              </Addition>
            </NestedDetailsSummary>
          </li>
        </ul>
        <Divider>Дополнительные материалы</Divider>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/creating-layers.html">
            Создание слоев
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layers.html">
            Управление слоями
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/selecting-arranging-layers.html">
            Выделение и упорядочивание слоев
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layer-properties.html">
            Свойства слоя
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/creating-editing-text-layers.html">
            Создание и работа с текстовыми слоями
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/creating-shapes-masks.html">
            Создание фигур и масок
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/preparing-importing-still-images.html">
            Подготовка и импорт статичных изображений
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/importing-interpreting-footage-items.html">
            Импорт и интерпретация футажей
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/effects-animation-presets-overview.html">
            Применение эффектов и пресетов на слои
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/blending-modes-layer-styles.html">
            Режимы наложения
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/overview-shape-layers-paths-vector.html">
            Растровые и векторные изображения
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/layer-markers-composition-markers.html">
            Маркеры слоя и маркеры композиции
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/precomposing-nesting-pre-rendering.html">
            Создание прекомпозиций и пререндеринг
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/3d-layers.html">
            Трёхмерные слои и модели
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/cameras-lights-points-interest.html">
            Камеры, освещение и точки обзора
          </a>
        </div>
        <Addition type="info">
          Чтобы открыть нужную статью от <mark className="company">Adobe</mark> на русском
          языке — добавьте <mark className="copy">/ru</mark> в ссылку после{" "}
          <mark className="web">helpx.adobe.com</mark>. Учтите, что статьи, переведённые
          на другие языки, могут быть переведены некорректно или иметь устаревшую
          информацию.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="vocabulary"
        tag="сленг, жаргон, терминология, понятия, сокращения, глоссарий"
        title="Какие популярные термины есть у пользователей программы?"
      >
        <p>
          Когда пользователь только начинает изучать{" "}
          <mark className="app">Adobe After Effects</mark>, у него может возникнуть
          недопонимание в процессе общения с другими людьми. Это нормально: у каждой сферы
          есть свой сленг. В этой статье собраны часто используемые термины и слова.
        </p>
        <Divider>Базовые понятия и интерфейс</Divider>
        <ul>
          <li>
            <p>
              <mark className="word">Композиция</mark>, или{" "}
              <mark className="word">композ</mark>, — сцена вашего проекта. В композиции
              обычно собирают слои, фигуры и видеофайлы, а также применяют к ним эффекты.
              У каждой композиции есть своя частота кадров, разрешение, длительность и
              другие параметры.
            </p>
            <Addition type="info">
              Чтобы открыть настройки композиции, используйте комбинацию клавиш{" "}
              <mark className="key">Ctrl + K</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Превью</mark>, или{" "}
            <mark className="word">предпросмотр</mark>, — то, что вы видите в окне, где
            отображается ваша композиция.
          </li>
          <li>
            <mark className="word">«Зайди в окно превью»</mark> — вам предлагают открыть
            окно с настройками проигрывания предпросмотра{" "}
            <mark className="select">«Window» → «Preview»</mark>, чтобы убедиться, что всё
            настроено корректно. Бывает, что у пользователя выставлены неправильные
            значения частоты кадров, из-за чего предпросмотр воспроизводится слишком
            быстро или медленно, либо выбрано низкое качество:{" "}
            <mark className="select">«Auto»</mark> или{" "}
            <mark className="select">«Quarter»</mark> вместо{" "}
            <mark className="select">«Full»</mark>.
          </li>
          <li>
            <mark className="word">Плейхед</mark>, или{" "}
            <mark className="word">CTI (Current Time Indicator)</mark>, — вертикальная
            временная метка, показывающая, на каком кадре вы находитесь в предпросмотре.
          </li>
          <li>
            <mark className="word">Ромбик</mark>, <mark className="word">ключ</mark>, или{" "}
            <mark className="word">кейфрейм</mark>, — ключевые кадры, то есть метки, на
            основе которых создаётся движение параметра. Они указывают, как должен
            выглядеть анимированный элемент в конкретный момент времени.
          </li>
          <li>
            <p>
              <mark className="word">Часы</mark>, или{" "}
              <mark className="word">секундомер</mark>, — элемент интерфейса на таймлайне
              или в панели управления эффектом, с помощью которого добавляются ключевые
              кадры.
            </p>
            <Addition type="info">
              Если нажать на секундомер с зажатым <mark className="key">Alt</mark>,
              включится режим работы с выражениями. Выключается он так же.
            </Addition>
          </li>
          <li>
            <mark className="word">Хоткей</mark>, или{" "}
            <mark className="word">горячие клавиши</mark>, — комбинация клавиш для
            быстрого выполнения определённого действия.
          </li>
          <li>
            <p>
              <mark className="word">Ракета</mark> — окно{" "}
              <mark className="select">«Project Settings»</mark>, в котором обычно меняют
              цветовое пространство проекта или настраивают использование видеокарты.
            </p>
            <Addition type="info">
              Это окно открывается комбинацией клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + K</mark>.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Разрешение</mark>, или{" "}
              <mark className="word">резолюшен</mark>, — количество пикселей по ширине и
              высоте. Иногда используется в контексте качества предпросмотра:{" "}
              <mark className="select">«Full»</mark>,{" "}
              <mark className="select">«Half»</mark>,{" "}
              <mark className="select">«Third»</mark> или{" "}
              <mark className="select">«Quarter»</mark>.
            </p>
            <Addition type="info">
              Если у вас есть композиция с разрешением 1280×720, а в{" "}
              <mark className="select">«Render Settings»</mark> вы указали{" "}
              <mark className="select">«Resize»</mark> до 3840×2160, вы просто растянете
              видео с 720p до 4K без фактического улучшения качества. Композиция не будет
              рендериться сразу в 4K.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Прокси</mark> — копия исходника, созданная для
              повышения производительности. Её качество зависит от кодека и разрешения.
              Прокси стоит использовать, если возникают проблемы с производительностью
              из-за высокого разрешения исходников или требуется более стабильная работа.
            </p>
            <p>
              Прокси можно создать прямо в{" "}
              <mark className="app">Adobe After Effects</mark> или с помощью сторонних
              программ, например <mark className="app">Adobe Media Encoder</mark> или{" "}
              <mark className="app">Shutter Encoder</mark>. Также прокси можно применять к
              композициям, чтобы сократить время повторного рендеринга, если вы не
              планируете вносить в них изменения.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  Переключаться между прокси и оригиналом можно в окне{" "}
                  <mark className="select">«Project»</mark>, нажав на квадратный флажок
                  слева от имени файла.
                </li>
                <li>
                  Если вы создали прокси в другой программе, назначить его можно так: в
                  окне <mark className="select">«Project»</mark> выберите файл, нажмите{" "}
                  <mark className="key">ПКМ</mark> и выберите{" "}
                  <mark className="select">«Set Proxy» → «File»</mark>.
                </li>
                <li>
                  По умолчанию в финальный рендеринг попадает оригинальный файл. Это
                  поведение можно изменить в{" "}
                  <mark className="select">«Render Settings»</mark>, указав в параметре{" "}
                  <mark className="select">«Proxy Use»</mark> значение{" "}
                  <mark className="select">«Use All Proxies»</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="word">Рендер</mark> — процесс обработки кадров и, при
            необходимости, их упаковки в нужный контейнер с выбранным кодеком. Обычно
            используется в контексте экспорта композиции в видеофайл или изображение.
          </li>
          <li>
            <p>
              <mark className="word">Редьюс</mark> — функция{" "}
              <mark className="select">«Reduce Project»</mark>, которая облегчает проект,
              удаляя из него всё, кроме выбранной композиции и всех связанных с ней
              элементов. Находится в{" "}
              <mark className="select">«File» → «Dependencies» → «Reduce Project»</mark>.
              Похожая команда, <mark className="select">«Remove Unused Footage»</mark>,
              удаляет только неиспользуемые в проекте исходники.
            </p>
            <Addition type="warning">
              Если вы пользуетесь этой функцией впервые, на всякий случай создайте копию
              проекта — вдруг она удалит что-то лишнее.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Коллект</mark> — функция{" "}
              <mark className="select">«Collect Files»</mark>, которая собирает все файлы,
              используемые в проекте, в одну папку. Эту папку можно заархивировать и
              отправить другому человеку или перенести на другой диск.
            </p>
            <Addition type="info">
              Функция находится в{" "}
              <mark className="select">«File» → «Dependencies» → «Collect Files»</mark>.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">«Перелинкуй исходники»</mark> — призыв переподключить
              потерянные файлы. Для этого нажмите <mark className="key">ПКМ</mark> по
              потерянному исходнику в окне <mark className="select">«Project»</mark>,
              выберите <mark className="select">«Replace Footage» → «File»</mark> или
              нажмите <mark className="key">Ctrl + H</mark>.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  Чтобы отобразить только потерянные файлы в окне{" "}
                  <mark className="select">«Project»</mark>, введите в поиск ключевое
                  слово <mark className="copy">Missing Footage</mark>.
                </li>
                <li>
                  Если остальные потерянные исходники находятся в той же папке, они
                  подключатся автоматически после указания первого файла.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="word">«Перекодируй видос»</mark> — призыв конвертировать
            исходники в монтажный кодек, например{" "}
            <mark className="video">Apple ProRes 422</mark>, через{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">Adobe Media Encoder</mark>.
          </li>
        </ul>
        <Divider>Работа со слоями и эффектами</Divider>
        <ul>
          <li>
            <p>
              <mark className="word">Аджастмент</mark> — корректирующий слой,{" "}
              <mark className="select">«Adjustment Layer»</mark>. Он позволяет применять
              эффекты ко всем слоям, расположенным ниже на таймлайне. Такой слой часто
              используют для общей цветокоррекции или других эффектов, влияющих на всю
              сцену.
            </p>
            <Addition type="info">
              Чтобы создать такой слой, нажмите{" "}
              <mark className="key">Ctrl + Alt + Y</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Солид</mark> — слой сплошной заливки заданного цвета,{" "}
            <mark className="select">«Solid Layer»</mark>. Часто применяется как фон или
            «инициатор» для трёхмерных эффектов вроде{" "}
            <mark className="plugin">Trapcode Particular</mark> или{" "}
            <mark className="plugin">Mettle Flux</mark>.
          </li>
          <li>
            <mark className="word">Шейп</mark> — слой с фигурой,{" "}
            <mark className="select">«Shape Layer»</mark>. Это может быть как произвольная
            форма, так и стандартная: квадрат, эллипс или «звезда».
          </li>
          <li>
            <mark className="word">Маска</mark> — ограничивающая область на слое, через
            которую проявляется эффект или сам слой.
          </li>
          <li>
            <p>
              <mark className="word">Патч</mark>, <mark className="word">path</mark>, или{" "}
              <mark className="word">путь</mark>, — линия или кривая, которая образует
              фигуру или маску.
            </p>
            <Addition type="info">
              Путь маски и фигурного слоя взаимозаменяемы: их можно копировать и вставлять
              друг в друга.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Прекомпоз</mark> — дочерняя композиция, созданная из
              выделенных слоёв родительской. Создаётся с помощью{" "}
              <mark className="key">Ctrl + Shift + C</mark>. Чаще всего используется для
              группировки объектов в один слой.
            </p>
            <Addition type="info">
              В любой непонятной ситуации — используйте прекомпоз. Часто помогает.
            </Addition>
          </li>
          <li>
            <mark className="word">Трансформ</mark> — базовые свойства слоя: положение,
            масштаб, поворот и прочие. Иногда означает встроенный эффект{" "}
            <mark className="plugin">Transform</mark>.
          </li>
          <li>
            <p>
              <mark className="word">Овершут</mark> — приём в анимации, при котором объект
              слегка «проскакивает» свою конечную точку, а затем возвращается назад. Такой
              эффект создаёт реалистичное, «пружинящее» движение и имитирует инерцию.
            </p>
            <Addition type="warning">
              Некоторые свойства, например положение (если не разделено через{" "}
              <mark className="select">«Separate Dimensions»</mark>), не поддерживают{" "}
              <mark className="word">овершут</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Моушен-блюр</mark> — размытие в движении. С его помощью
            можно сделать движение объекта более плавным и естественным. Включается
            переключателем <mark className="select">«Motion Blur»</mark> у слоя или
            применяется как эффект <mark className="plugin">CC Force Motion Blur</mark>.
          </li>
          <li>
            <mark className="word">Стесняшка</mark>, <mark className="word">шляпка</mark>{" "}
            или <mark className="word">медуза</mark> — иконка и функция{" "}
            <mark className="select">«Shy»</mark>. Если у слоя отмечен этот атрибут, его
            можно легко скрыть на таймлайне, но он останется видимым в композиции.
          </li>
          <li>
            <mark className="word">Решётка</mark> — индикатор{" "}
            <mark className="select">«Guide Layer»</mark>. Такой слой виден только в
            предпросмотре и не попадает в финальный рендеринг. Используется для заметок
            или технических разметок.
          </li>
          <li>
            <mark className="word">Кубик</mark> — индикатор, который переводит слой в
            трёхмерное пространство. С такими слоями можно работать в 3D: менять положение
            по трём осям, поворачивать объект в пространстве или управлять камерой.
          </li>
          <li>
            <p>
              <mark className="word">Солнышко</mark>, или{" "}
              <mark className="word">звёздочка</mark>, — иконка, которая выполняет два
              разных действия в зависимости от типа слоя:{" "}
              <mark className="select">«Continuously Rasterize»</mark> для сглаживания
              векторных объектов или{" "}
              <mark className="select">«Collapse Transformation»</mark> для
              слоёв-композиций.
            </p>
            <Addition type="info">
              При включённой опции{" "}
              <mark className="select">«Continuously Rasterize»</mark> увеличение масштаба
              предпросмотра не даст «векторной» чёткости, так как{" "}
              <mark className="app">Adobe After Effects</mark> всегда растрирует
              изображение под разрешение композиции.
            </Addition>
          </li>
          <li>
            <mark className="word">Тайлинг</mark> — эффект бесшовной плитки, который можно
            использовать для заполнения пустоты, например при имитации тряски камеры.
            Обычно делается с помощью эффектов <mark className="plugin">CC Repetile</mark>{" "}
            или <mark className="plugin">Motion Tile</mark>.
          </li>
          <li>
            <mark className="word">Тайм-ремапинг</mark> — изменение скорости видео в
            определённых промежутках времени. Делается с помощью встроенной функции{" "}
            <mark className="select">«Time Remapping»</mark>, которая включается
            комбинацией клавиш <mark className="key">Ctrl + Alt + T</mark> или сторонних
            плагинов вроде <mark className="plugin">Twixtor</mark>.
          </li>
          <li>
            <p>
              <mark className="word">Улитка</mark>, <mark className="word">спираль</mark>{" "}
              или <mark className="word">лассо</mark> — инструмент для привязки свойства
              одного слоя к другому.
            </p>
            <Addition type="info">
              Если этого инструмента нет на таймлайне, включите его:{" "}
              <mark className="key">ПКМ</mark> по заголовкам столбцов →{" "}
              <mark className="select">«Columns» → «Parent & Link»</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Усики</mark> — манипуляторы для управления кривыми в
            редакторе графиков <mark className="select">«Graph Editor»</mark>, траекторией
            движения объекта в окне предпросмотра композиции или углами фигуры.
          </li>
          <li>
            <p>
              <mark className="word">Выражения</mark>,{" "}
              <mark className="word">expressions</mark> или{" "}
              <mark className="word">экспрешены</mark> — код на языке, похожем на{" "}
              <mark className="file-code">JavaScript</mark>, который используется для
              управления параметрами или вычисления значений. Часто применяется для
              создания сложных анимаций или привязки свойств друг к другу.
            </p>
            <Addition type="info">
              Чтобы активировать режим редактирования выражения, нажмите на иконку
              секундомера у нужного параметра, зажав <mark className="key">Alt</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">Шейк</mark>, или <mark className="word">вигл</mark>, —
            случайное движение или тряска слоя, часто по осям X и Y. Этот эффект популярен
            в <mark className="word">эдитах</mark>. Под «виглом» обычно подразумевают
            встроенную функцию выражения <mark className="code">wiggle(freq, amp)</mark>.
          </li>
          <li>
            <mark className="word">Автотрейс</mark> — функция, которая автоматически
            создаёт маски по контурам объекта. Вызывается через{" "}
            <mark className="select">«Layer» → «Auto-Trace»</mark>.
          </li>
          <li>
            <mark className="word">Морфинг</mark> — приём плавного превращения одной
            фигуры в другую.
          </li>
          <li>
            <mark className="word">Кеинг</mark> — процедура удаления однородного фона (как
            правило, зелёного или синего) из видео или изображения.
          </li>
          <li>
            <mark className="word">Клинап</mark> — процедура удаления ненужных объектов в
            кадре. Делается встроенным инструментом{" "}
            <mark className="plugin">Content-Aware Fill</mark>, сторонним плагином{" "}
            <mark className="plugin">Mocha Pro</mark> или другими методами.
          </li>
          <li>
            <mark className="word">Нулевой объект</mark>,{" "}
            <mark className="word">Null Object</mark> или{" "}
            <mark className="word">нуль</mark> — невидимый вспомогательный слой, который
            используется для управления другими слоями или в качестве «носителя»
            контроллеров.
          </li>
          <li>
            <mark className="word">Ротобраш</mark>, или{" "}
            <mark className="word">Roto Brush</mark>, — стандартный инструмент программы
            для выделения движущегося объекта в кадре.
          </li>
          <li>
            <mark className="word">Ротоскопинг</mark> — процесс покадрового отделения
            объекта от фона.
          </li>
          <li>
            <mark className="word">Трекинг</mark> — отслеживание движения объекта для
            последующей привязки к нему другого объекта. Часто применяется для замены
            экранов на видео.
          </li>
        </ul>
        <Divider>Инструменты</Divider>
        <ul>
          <li>
            Если вы слышите <mark className="word">«борисовский»</mark>,{" "}
            <mark className="word">«сапфировский»</mark> или{" "}
            <mark className="word">«континуумовский»</mark>, то обычно собеседник имеет в
            виду плагины от компании <mark className="company">Boris FX</mark>, в
            частности пакеты <mark className="plugin">Sapphire</mark> и{" "}
            <mark className="plugin">Continuum</mark>. Например,{" "}
            <mark className="word">«сапфировский шейк»</mark> — это эффект{" "}
            <mark className="plugin">S_Shake</mark>, а{" "}
            <mark className="word">«континуумовский блюр»</mark> —{" "}
            <mark className="plugin">BCC Lens Blur</mark>.
          </li>
          <li>
            <mark className="word">«Максоновский»</mark>, или{" "}
            <mark className="word">«редгиантовский»</mark>, — подразумеваются плагины от
            компаний <mark className="company">Maxon</mark> и{" "}
            <mark className="company">Red Giant</mark>, например{" "}
            <mark className="plugin">Trapcode Particular</mark> или{" "}
            <mark className="plugin">Universe</mark>.
          </li>
          <li>
            <mark className="word">Могрт</mark>, или <mark className="word">MOGRT</mark>,
            — шаблон анимационного дизайна, который создаётся в{" "}
            <mark className="app">Adobe After Effects</mark> для дальнейшего использования
            в <mark className="app">Adobe Premiere</mark>.
          </li>
          <li>
            <p>
              <mark className="word">Мокка</mark>, или <mark className="word">моча</mark>,
              — плагин <mark className="plugin">Boris FX Mocha</mark> для трекинга. В{" "}
              <mark className="app">Adobe After Effects</mark> поставляется урезанная
              версия <mark className="plugin">Mocha AE</mark>; полная называется{" "}
              <mark className="plugin">Mocha Pro</mark>.
            </p>
            <Addition type="info">
              О различиях <mark className="plugin">Mocha AE</mark> и{" "}
              <mark className="plugin">Mocha Pro</mark> вы можете прочитать на{" "}
              <a href="https://support.borisfx.com/hc/en-us/articles/10232625711117-I-use-Mocha-AE-what-is-the-difference-between-Mocha-AE-and-Mocha-Pro-Do-I-need-Mocha-Pro">
                официальном сайте Boris FX
              </a>
              .
            </Addition>
          </li>
          <li>
            <mark className="word">Элемент 3D</mark> — сторонний плагин{" "}
            <mark className="plugin">Element 3D</mark> от{" "}
            <mark className="company">VideoCopilot</mark> для работы с трёхмерными
            моделями.
          </li>
          <li>
            <mark className="word">Инфлюкс</mark> — сторонний плагин{" "}
            <mark className="plugin">Autokroma Influx</mark>, позволяющий импортировать в
            проект неподдерживаемые форматы файлов, например{" "}
            <mark className="video">MKV</mark> или <mark className="video">FLV</mark>.
          </li>
          <li>
            <p>
              <mark className="word">Плагин</mark> — подключаемый эффект в виде файла,
              обычно с расширением <mark className="file">AEX</mark> для Windows или{" "}
              <mark className="file">PLUGIN</mark> для macOS. Часто используется с
              вопросом «где скачать?».
            </p>
            <Addition type="info">
              Инструкцию по установке плагинов вы можете найти в{" "}
              <a href="#how-to-install">статье 2.1</a>.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Пресет</mark> — готовый набор эффектов в формате{" "}
              <mark className="file">FFX</mark>. Может сохраняться вместе с анимацией.
            </p>
            <Addition type="info">
              Инструкцию по установке пресетов вы можете найти в{" "}
              <a href="#how-to-install">статье 2.1</a>.
            </Addition>
            <Addition type="warning">
              Не все сторонние пресеты будут корректно работать в вашем проекте; иногда их
              нужно адаптировать.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Скрипт</mark> — файл формата{" "}
              <mark className="file">JSX</mark> или <mark className="file">JSXBIN</mark>,
              выполняющий определённые действия.
            </p>
            <Addition type="info">
              Инструкцию по установке скриптов вы можете найти в{" "}
              <a href="#how-to-install">статье 2.1</a>.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Экстеншен</mark>, или{" "}
              <mark className="word">extension</mark>, — расширение, упакованное в формате{" "}
              <mark className="file">ZXP</mark>. После установки появляется в меню{" "}
              <mark className="select">«Window» → «Extensions»</mark>.
            </p>
            <Addition type="info">
              Инструкцию по установке расширений вы можете найти в{" "}
              <a href="#how-to-install">статье 2.1</a>.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Дупликатор</mark> — обычно имеется в виду бесплатный
              скрипт{" "}
              <a href="https://aescripts.com/true-comp-duplicator/">
                True Comp Duplicator
              </a>
              . Он используется для создания независимых дубликатов композиций.
            </p>
            <Addition type="info">
              Чтобы скачать его, нужно зарегистрироваться на сайте{" "}
              <a href="https://aescripts.com">aescripts</a>, на странице плагина указать
              цену 0 и оформить заказ.
            </Addition>
          </li>
          <li>
            <mark className="word">Компсеттер</mark> — бесплатный скрипт{" "}
            <a href="https://aescripts.com/rd-compsetter/">rd: CompSetter</a> для
            пакетного изменения параметров нескольких композиций.
          </li>
        </ul>
        <Divider>Сокращения и сленг</Divider>
        <ul>
          <li>
            <mark className="word">ЕМНИП</mark> — сокращение от «если мне не изменяет
            память».
          </li>
          <li>
            <mark className="word">КТТС</mark> — сокращение от «как только, так сразу».
          </li>
          <li>
            <mark className="word">ASAP</mark>, или <mark className="word">АСАП</mark>, —
            сокращение от «as soon as possible», или «как можно скорее».
          </li>
          <li>
            <mark className="word">Топикстартер</mark>, или{" "}
            <mark className="word">ТС</mark>, — пользователь, который задал вопрос или
            начал обсуждение.
          </li>
        </ul>
        <Divider>Технические термины и форматы</Divider>
        <ul>
          <li>
            <p>
              <mark className="word">Альфа-канал</mark> — четвёртый канал в цветовой
              модели <mark className="term">RGBA</mark>, отвечающий за прозрачность.
              Например, <mark className="image">PNG</mark> поддерживает множество уровней
              прозрачности, а <mark className="image">GIF</mark> — только полную
              прозрачность или её отсутствие. Чтобы сохранить видео с прозрачностью,
              подойдут контейнеры <mark className="video">MOV</mark>,{" "}
              <mark className="video">AVI</mark> или <mark className="video">WEBM</mark> с
              кодеком, поддерживающим альфа-канал.
            </p>
            <Addition type="info">
              Если хотите узнать больше об альфа-канале,{" "}
              <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%BA%D0%B0%D0%BD%D0%B0%D0%BB">
                загляните на Википедию
              </a>
              .
            </Addition>
          </li>
          <li>
            <p>
              <mark className="word">Битрейт</mark> — скорость передачи данных
              видеопотока, обычно измеряется в Мбит/с. Он определяет, насколько сильно
              сжаты данные. Чем выше битрейт, тем лучше качество видео, особенно в
              динамичных сценах.
            </p>
            <Addition type="info">
              Если у исходного видео битрейт 10 Мбит/с, а при экспорте вы укажете 50
              Мбит/с — качество не улучшится. Вы просто увеличите размер файла.
            </Addition>
            <Divider>Виды битрейта</Divider>
            <ul>
              <li>
                <mark className="word">CBR (Constant Bitrate)</mark>, или{" "}
                <mark className="word">постоянный битрейт</mark>, — кодирование, при
                котором битрейт остаётся неизменным на протяжении всего файла. Размер
                файла легко предсказать. Подходит для монтажа, но неэффективен для
                соцсетей из-за большого размера.
              </li>
              <li>
                <mark className="word">VBR (Variable Bitrate)</mark>, или{" "}
                <mark className="word">переменный битрейт</mark>, — кодирование, при
                котором кодек сам регулирует битрейт в зависимости от сложности сцены.
                Плохо подходит для монтажа, но хорошо — для финального экспорта и
                публикации в интернете.
              </li>
              <li>
                <p>
                  <mark className="word">Квантование (Constant Quality)</mark> — метод
                  сжатия, при котором уровень качества остаётся постоянным на протяжении
                  всего видео. Чем меньше значение <mark className="word">CQ</mark>, тем
                  лучше качество, но больше размер. Обычно значения 23 хватает для
                  большинства случаев.
                </p>
                <Addition type="info">
                  Чтобы экспортировать композицию с использованием{" "}
                  <mark className="word">CQ</mark>, используйте сторонний плагин{" "}
                  <mark className="plugin">Voukoder Classic</mark> или конвертируйте видео
                  через <mark className="app">Shutter Encoder</mark>.
                </Addition>
              </li>
              <li>
                <p>
                  <mark className="word">Lossless</mark> — кодирование без потерь.
                  Используется редко, когда важна полная идентичность с оригиналом.
                </p>
                <Addition type="warning">
                  Длинная композиция, закодированная без потерь, может занять почти всё
                  дисковое пространство.
                </Addition>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <mark className="word">Кодек</mark> — программа или библиотека, которая
              кодирует и декодирует видеоданные. Кодеки делятся на{" "}
              <mark className="word">монтажные</mark> и{" "}
              <mark className="word">потоковые (delivery)</mark>. Использовать видео с
              потоковыми кодеками для монтажа не рекомендуется во избежание различных
              проблем и артефактов при работе с ними.
            </p>
            <Divider>Монтажные кодеки</Divider>
            <ul>
              <li>
                <p>
                  <mark className="video">Apple ProRes</mark> — индустриальный стандарт
                  для монтажа. <mark className="video">Apple ProRes 422</mark> чаще всего
                  применяют на этапе редактирования, а{" "}
                  <mark className="video">Apple ProRes 4444</mark> — для экспорта с
                  альфа-каналом.
                </p>
                <Addition type="info">
                  У каждого варианта данного кодека —{" "}
                  <mark className="codec-param">422</mark>,{" "}
                  <mark className="codec-param">422 LT</mark> или{" "}
                  <mark className="codec-param">4444</mark> — свой фиксированный битрейт.
                  Ручная настройка не предусмотрена.{" "}
                  <a href="https://ru.wikipedia.org/wiki/Apple_ProRes#%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B2_%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B0_ProRes">
                    Подробнее...
                  </a>
                </Addition>
              </li>
              <li>
                <mark className="video">DNxHD</mark> /{" "}
                <mark className="video">DNxHR</mark> — монтажные кодеки от{" "}
                <mark className="company">Avid</mark>, аналог{" "}
                <mark className="video">Apple ProRes</mark>.
              </li>
              <li>
                <mark className="video">GoPro Cineform</mark> — ещё один популярный
                монтажный кодек, поддерживает альфа-канал.
              </li>
            </ul>
            <Divider>Потоковые (delivery) кодеки</Divider>
            <ul>
              <li>
                <p>
                  <mark className="video">H.264</mark> /{" "}
                  <mark className="video">H.265 (HEVC)</mark> — самые популярные кодеки
                  для распространения видео в интернете. Обеспечивают хорошее соотношение
                  качества и размера.
                </p>
                <Addition type="danger">
                  <ul>
                    <li>
                      Крайне не рекомендуется использовать для монтажа видео из интернета,
                      закодированные этими кодеками. Такие кодеки предназначены только для
                      финального вывода. При монтаже скачанных с{" "}
                      <mark className="web">YouTube</mark> видео вы можете получить
                      артефакты или «зелёный экран», так как монтажная программа не всегда
                      может корректно с ними работать.
                    </li>
                    <li>
                      Прежде чем использовать видео из интернета для монтажа, их стоит
                      перекодировать в монтажный кодек, например{" "}
                      <mark className="video">Apple ProRes 422</mark>.{" "}
                      <a href="#import-workflow">Подробнее...</a>
                    </li>
                    <li>
                      «Проблема зелёного экрана» часто встречается при работе с «кривыми»
                      исходниками в <mark className="video">H.264</mark> или при
                      использовании видеокарт <mark className="hardware">AMD</mark>.
                      Иногда для решения проблемы достаточно отключить аппаратное
                      ускорение декодирования в{" "}
                      <mark className="select">«Edit» → «Preferences» → «Import»</mark>,
                      если вы не хотите перекодировать исходники.
                    </li>
                  </ul>
                </Addition>
              </li>
              <li>
                <p>
                  <mark className="video">VP9</mark> / <mark className="video">AV1</mark>{" "}
                  — кодеки от Google в контейнере <mark className="video">WEBM</mark>,
                  часто используются для веб-страниц. Поддерживают альфа-канал.
                </p>
                <Addition type="info">
                  Экспортировать в эти кодеки из{" "}
                  <mark className="app">Adobe After Effects</mark> можно только с
                  использованием сторонних конвертеров, например{" "}
                  <mark className="app">Shutter Encoder</mark>.
                </Addition>
              </li>
              <li>
                <mark className="video">MPEG</mark> — устаревший кодек. Раньше его
                использовали для записи видео на DVD и Blu-ray.
              </li>
            </ul>
          </li>
          <li>
            <mark className="word">Контейнер</mark> — формат файла, в котором содержатся
            видео- и аудиодорожки, например <mark className="video">MP4</mark>,{" "}
            <mark className="video">MOV</mark> или <mark className="file">MKV</mark>.
          </li>
          <li>
            <mark className="word">Абсолютный путь</mark> — это полный путь до файла,
            начиная с корневого диска. Пример:{" "}
            <mark className="path">C:/Users/aechat/Downloads/your_video.mp4</mark>.
          </li>
          <li>
            <mark className="word">Относительный путь</mark> — это путь от текущей
            директории, в которой вы находитесь. Если вы сейчас в{" "}
            <mark className="path">C:/Users/aechat</mark>, а файл находится в папке{" "}
            <mark className="path">Downloads</mark>, относительный путь будет таким:{" "}
            <mark className="path">Downloads/your_video.mp4</mark>.
          </li>
          <li>
            <p>
              <mark className="word">Векторная графика</mark>, или{" "}
              <mark className="word">вектор</mark>, — изображение, описанное с помощью
              математических формул. Его отличительная особенность — возможность
              масштабирования без потери качества.
            </p>
            <Addition type="info">
              В <mark className="app">Adobe After Effects</mark> даже при включённом{" "}
              <mark className="select">«Continuously Rasterize»</mark> вы не сможете
              бесконечно приближать предпросмотр без пикселизации, так как программа
              всегда растрирует изображение под разрешение композиции.
            </Addition>
          </li>
          <li>
            <mark className="word">Растровая графика</mark> — изображение или видео,
            состоящее из цветных пикселей. Чем выше разрешение, тем лучше качество.
          </li>
          <li>
            <mark className="word">Семплы</mark> — количество выборок. Часто применяется в
            плагинах, использующие трёхмерное пространство или в настройках размытия в
            движении. Чем больше семплов, тем лучше картинка, но ниже производительность.
          </li>
          <li>
            <p>
              <mark className="word">Мультифрейм-рендер</mark>, или{" "}
              <mark className="word">MFR</mark>, — функция{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>, появившаяся в{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">22.X (2022)</mark> и выше. Она ускоряет финальный
              рендер, обрабатывая сразу несколько кадров параллельно.
            </p>
            <Addition type="warning">
              Использование <mark className="select">«Multi-Frame Rendering»</mark> может
              привести к увеличению потребления оперативной памяти и есть риск чаще видеть
              ошибку <mark className="warning">«Out of Memory»</mark>.
            </Addition>
          </li>
          <li>
            <mark className="word">«Народная» программа</mark> — софт, который был
            «спирачен» и распространяется бесплатно. К нюансам обычно относят отсутствие
            онлайн-функций или ограничения, которые «народным умельцам» не удалось обойти.
          </li>
          <li>
            <mark className="word">Установка «поверх»</mark> — инсталляция программы без
            предварительного удаления. Данный метод позволяет обновить её до более новой
            версии, если установленная отличается от версии в установщике, или
            восстановить повреждённые файлы.
          </li>
        </ul>
        <Divider>Производственные термины</Divider>
        <ul>
          <li>
            <mark className="word">Ватермарк</mark>, <mark className="word">вотерка</mark>{" "}
            или <mark className="word">водяной знак</mark> — полупрозрачная надпись или
            логотип, которую ставят с целью указать первоисточник и защитить от
            копирования.
          </li>
          <li>
            <p>
              <mark className="word">Сейф-зона</mark>,{" "}
              <mark className="word">Safe Area</mark> или{" "}
              <mark className="word">безопасная зона</mark> — рамки внутри кадра, которые
              помогают размещать ключевые элементы так, чтобы они были видны на
              большинстве экранов. Такие зоны актуальны для вертикальных видео, так как
              интерфейс соцсети может перекрывать часть контента.
            </p>
            <Addition type="info">
              Чтобы включить отображение безопасных зон, нажмите на иконку{" "}
              <mark className="select">«Choose grid and guide options»</mark> под окном
              предпросмотра и выберите{" "}
              <mark className="select">«Title / Action Safe»</mark>
              .
              <ArticleMedia
                caption="Composition"
                src="legacy/aftereffects/enable_action_safe.png"
                type="image"
              />
            </Addition>
          </li>
          <li>
            <mark className="word">Говорящая голова</mark> — формат видео, в котором
            присутствует только диктор, снятый крупным планом.
          </li>
          <li>
            <mark className="word">Грейдинг</mark> — цветокоррекция. Делится на базовую
            (выравнивание по цвету и яркости) и финальную (стилизация, точечные правки).
          </li>
          <li>
            <mark className="word">Глитч</mark>, или <mark className="word">glitch</mark>,
            — визуальный эффект, имитирующий цифровой сбой или артефакт.
          </li>
          <li>
            <mark className="word">Ванфрейм-эффект</mark> — эффект, который применяется
            всего на один кадр, обычно с использованием{" "}
            <mark className="select">«Adjustment Layer»</mark>. Часто используется для{" "}
            <mark className="word">глитчей</mark> или вспышек.
          </li>
          <li>
            <mark className="word">Плашка</mark> — графический элемент, поверх которого
            размещают текст.
          </li>
          <li>
            <mark className="word">Рыба</mark> — черновой вариант видео с примерным
            монтажом, без финальной цветокоррекции и звука. Делается для оценки темпа и
            общей структуры.
          </li>
          <li>
            <mark className="word">Шот</mark>, или <mark className="word">футаж</mark>, —
            отдельный фрагмент видео или сцены.
          </li>
          <li>
            <mark className="word">Референс</mark>, или <mark className="word">реф</mark>,
            — синоним слов «пример» и «образец». Используется для иллюстрации анимации или
            согласования видения с заказчиком.
          </li>
          <li>
            <mark className="word">Шаблон</mark> — готовый проект или пресет, который
            ускоряет работу. Некоторые сторонние шаблоны могут быть слишком требовательны
            к ресурсам; в таких случаях проще сделать «самоделку», то есть собственный
            шаблон для личного пользования.
          </li>
          <li>
            <mark className="word">Переходы</mark>, или{" "}
            <mark className="word">транзишены</mark>, — визуальные эффекты для стилизации
            соединения двух клипов.
          </li>
          <li>
            <mark className="word">Туториал</mark> — обучающее видео о том, как
            пользоваться программой или как использовать определённый эффект или плагин.
            Такие видео помогают новичку ориентироваться в интерфейсе программы и иногда
            раскрывают некоторые хитрости при создании эффектов.
          </li>
          <li>
            <mark className="word">Эдиты</mark> — как правило, видео под музыку на основе
            кадров из фильмов, аниме или игр. Часто встречаются на{" "}
            <mark className="web">YouTube</mark> и <mark className="web">TikTok</mark>.
          </li>
          <li>
            <p>
              <mark className="word">Рилсы</mark>, или{" "}
              <mark className="word">шортсы</mark>, — короткие вертикальные видеоролики
              формата 9:16, публикующиеся в <mark className="web">Instagram</mark>
              <sup>1</sup> или <mark className="web">YouTube</mark>.
            </p>
            <Addition type="danger">
              <sup>1</sup> <mark className="web">Instagram</mark> и{" "}
              <mark className="company">Meta</mark> признаны экстремистскими организациями
              и запрещены на территории Российской Федерации.
            </Addition>
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
          проектами в <mark className="app">Adobe After Effects</mark>.
        </p>
        <Addition type="warning">
          Горячие клавиши в этой таблице могут отличаться в зависимости от вашей версии
          программы и заданных вами комбинаций. Посмотреть клавиши, которые назначены у
          вас для определённого действия, вы можете с помощью окна настроек комбинаций
          клавиш в <mark className="select">«Edit» → «Keyboard Shortcuts»</mark>.
          Подробный список комбинаций клавиш вы можете найти{" "}
          <a href="https://helpx.adobe.com/after-effects/using/keyboard-shortcuts-reference.html">
            на официальном сайте Adobe
          </a>{" "}
          или посмотреть в{" "}
          <a href="https://www.youtube.com/watch?v=i6eFTDS2rvI">видео от AEPlug</a>.
        </Addition>
        <ContentFilter
          windowsContent={
            <>
              <Divider>Работа с файлами и проектом (File)</Divider>
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
                      <mark className="select">«New Project»</mark> — создать новый проект
                      и закрыть текущий
                      <Addition type="info">
                        Если открытый проект не был сохранён, программа предложит это
                        сделать.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Composition»</mark> — открыть окно
                      создания новой композиции
                    </td>
                    <td>
                      <mark className="key">Ctrl + N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Import File»</mark> — открыть окно импорта
                      файлов в проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + I</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Open Project»</mark> — открыть окно выбора
                      проекта
                    </td>
                    <td>
                      <mark className="key">Ctrl + O</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Open Most Recent Project»</mark> — открыть
                      последний проект, над которым вы работали
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + P</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Recent Script Files → ...»</mark> —
                      открыть или выполнить недавно использованный скрипт формата{" "}
                      <mark className="file">JSX</mark> или{" "}
                      <mark className="file">JSXBIN</mark>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Save Project»</mark> — сохранить проект
                    </td>
                    <td>
                      <mark className="key">Ctrl + S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Save Project As»</mark> — сохранить проект
                      под другим именем или форматом
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Increment and Save Project»</mark> —
                      инкрементное сохранение проекта
                      <Addition type="info">
                        При каждом нажатии в папке проекта будет создаваться новая копия с
                        возрастающим числом в названии.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + S</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Выбор инструментов (Application)</Divider>
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
                      выделения
                    </td>
                    <td>
                      <mark className="key">V</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Hand Tool»</mark> — инструмент «Рука»
                      <Addition type="info">
                        Зажмите <mark className="key">Пробел</mark>, чтобы временно
                        активировать инструмент.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">H</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Pen Tool / Mask Feather Tool»</mark> —
                      инструмент пера или растушёвки маски
                      <Addition type="info">
                        <ul>
                          <li>
                            Если на таймлайне выделен{" "}
                            <mark className="select">«Shape Layer»</mark>, инструменты
                            рисования по умолчанию создают новую фигуру внутри слоя. Чтобы
                            вместо этого нарисовать маску, переключите режим на панели
                            инструментов с{" "}
                            <mark className="select">«Tool Creates Shape»</mark> на{" "}
                            <mark className="select">«Tool Creates Mask»</mark>.
                          </li>
                          <li>
                            При повторном нажатии клавиши происходит последовательное
                            переключение между этими инструментами.
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">G</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Text Tool»</mark> — инструмент создания и
                      изменения текста
                      <Addition type="info">
                        Многократное нажатие переключает между горизонтальным и
                        вертикальным написанием.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + T</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Pan Behind (Anchor Point) Tool»</mark> —
                      инструмент изменения положения якорной точки
                    </td>
                    <td>
                      <mark className="key">Y</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shape / Mask»</mark> — инструмент для
                      создания фигур и масок
                      <Addition type="info">
                        <ul>
                          <li>
                            Если на таймлайне выделен{" "}
                            <mark className="select">«Shape Layer»</mark>, инструменты
                            рисования по умолчанию создают новую фигуру внутри слоя. Чтобы
                            вместо этого нарисовать маску, переключите режим на панели
                            инструментов с{" "}
                            <mark className="select">«Tool Creates Shape»</mark> на{" "}
                            <mark className="select">«Tool Creates Mask»</mark>.
                          </li>
                          <li>
                            Многократное нажатие на <mark className="key">Q</mark>{" "}
                            переключает выбор между прямоугольником, эллипсом,
                            многоугольником и звездой.
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Q</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Brush Tool»</mark> — инструмент «Кисть»
                      для рисования на слое
                      <Addition type="info">
                        Многократное нажатие переключает между кистью, штампом и ластиком.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom»</mark> — инструмент «Лупа» для
                      увеличения предпросмотра или таймлайна композиции
                      <Addition type="info">
                        С зажатым <mark className="key">Alt</mark> выполняется уменьшение.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Rotation Tool»</mark> — инструмент
                      поворота слоя
                    </td>
                    <td>
                      <mark className="key">W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Roto Brush Tool / Refine Edge Tool»</mark>{" "}
                      — инструмент «Кисть для ротоскопии»
                    </td>
                    <td>
                      <mark className="key">Alt + W</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Camera Tool»</mark> — инструмент «Камера»
                      <Addition type="info">
                        Многократное нажатие переключает между режимами работы камеры.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Puppet»</mark> — инструмент «Марионетка»
                      <Addition type="info">
                        Многократное нажатие переключает между разными инструментами
                        марионетки.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + P</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Отображение свойств слоя (Timeline Panel)</Divider>
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
                      <mark className="select">«Show/Hide Effects»</mark> — показать или
                      скрыть применённые эффекты на выделенных слоях
                      <Addition type="info">
                        Если ни один слой не выделен — список эффектов раскроется у всех
                        слоёв на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Effects (Expressions)»</mark> —
                      показать или скрыть свойства с выражениями на выделенных слоях
                      <Addition type="info">
                        Если ни один слой не выделен — применённые выражения раскроются у
                        всех слоёв на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      Дважды <mark className="key">E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Show/Hide All of the Selected Layers&apos; Properties»
                      </mark>{" "}
                      — показать или скрыть все свойства на выделенных слоях
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + ` <span className="shortcut-hint">(Ё)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Audio Levels»</mark> — показать
                      или скрыть уровень громкости на выделенных слоях
                      <Addition type="info">
                        Если ни один слой не выделен — уровень громкости раскроется у всех
                        слоёв со звуковой дорожкой на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">L</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Audio Levels»</mark> — показать
                      или скрыть звуковую волну на выделенных слоях
                      <Addition type="info">
                        Если ни один слой не выделен — звуковая волна раскроется у всех
                        слоёв со звуковой дорожкой на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      Дважды <mark className="key">L</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Show/Hide Anchor Point or Position of Interest»
                      </mark>
                      — показать или скрыть свойство положения якорной точки на выделенных
                      слоёв или точки обзора у выделенных камер и источников освещения
                      <Addition type="info">
                        Если ни один слой не выделен — данное свойство раскроется у всех
                        поддерживаемых слоёв на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Mask Shape»</mark> — показать
                      или скрыть созданные маски на выделенных слоях
                      <Addition type="info">
                        Если ни один слой не выделен — список масок раскроется у всех
                        слоёв с созданными масками на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">M</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Position»</mark> — показать или
                      скрыть свойство положения выделенных слоёв в пространстве
                      <Addition type="info">
                        Если ни один слой не выделен — свойство положения раскроется у
                        всех двумерных и трёхмерных объектов на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">P</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Show/Hide Rotation and Orientation Properties»
                      </mark>
                      — показать или скрыть свойство поворота на выделенных слоях
                      <Addition type="info">
                        <ul>
                          <li>
                            Если ни один слой не выделен — свойство поворота раскроется у
                            всех двумерных и трёхмерных объектов на таймлайне.
                          </li>
                          <li>
                            У трёхмерных слоёв к свойству поворота добавится свойство
                            ориентации слоя.
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Scale»</mark> — показать или
                      скрыть свойство масштаба на выделенных слоях
                      <Addition type="info">
                        Если ни один слой не выделен — свойство масштаба раскроется у всех
                        слоёв на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">S</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Opacity»</mark> — показать или
                      скрыть свойство непрозрачности на выделенных слоях
                      <Addition type="info">
                        Если ни один слой не выделен — свойство непрозрачности раскроется
                        у всех слоёв на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">T</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Show/Hide Properties with Keyframes»
                      </mark>
                      — показать или скрыть все свойства с ключевыми кадрами на выделенных
                      слоёв
                      <Addition type="info">
                        <ul>
                          <li>
                            Если ни один слой не выделен — свойства с ключевыми кадрами
                            раскроются у всех слоёв на таймлайне.
                          </li>
                          <li>
                            При двойном нажатии раскроются все изменённые свойства даже
                            без ключевых кадров.
                          </li>
                        </ul>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">U</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide ... (Extend)»</mark> — показать
                      или скрыть свойство, добавив его к уже открытым
                      <Addition type="info">
                        Например, при нажатии <mark className="key">S</mark>, затем{" "}
                        <mark className="key">Shift + P</mark> и{" "}
                        <mark className="key">Shift + R</mark> у слоя одновременно
                        отобразятся масштаб, положение и поворот.
                      </Addition>
                    </td>
                    <td>
                      Модификатор <mark className="key">Shift</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Add/Delete ... Keyframe at Current Time»
                      </mark>{" "}
                      — добавить ключевой кадр для свойства, не показывая его
                      <Addition type="info">
                        Например, <mark className="key">Alt + Shift + P</mark> добавит
                        ключевой кадр для свойства положения.
                      </Addition>
                    </td>
                    <td>
                      Модификатор <mark className="key">Alt + Shift</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Работа с ключевыми кадрами на таймлайне (Animation)</Divider>
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
                      <mark className="select">«Select All»</mark> — выделить все слои
                    </td>
                    <td>
                      <mark className="key">Ctrl + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Deselect All Layers»</mark> — снять
                      выделение со всех слоёв
                    </td>
                    <td>
                      <mark className="key">F2</mark> или{" "}
                      <mark className="key">Ctrl + Shift + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Deselect All Keyframes and Properties»
                      </mark>{" "}
                      — снять выделение со всех ключевых кадров и свойств
                    </td>
                    <td>
                      <mark className="key">Shift + F2</mark> или{" "}
                      <mark className="key">Ctrl + Alt + Shift + A</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Graph Editor»</mark> — открыть
                      или закрыть редактор графиков скорости
                    </td>
                    <td>
                      <mark className="key">Shift + F3</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Previous Keyframe»</mark> — перейти
                      к предыдущему ключевому кадру или маркеру
                    </td>
                    <td>
                      <mark className="key">J</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Next Keyframe»</mark> — перейти к
                      следующему ключевому кадру или маркеру
                    </td>
                    <td>
                      <mark className="key">K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Set Keyframe to Easy Ease»</mark> —
                      применить интерполяцию «Easy Ease» для выделенных ключевых кадров
                    </td>
                    <td>
                      <mark className="key">F9</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Set Keyframe to Easy Ease In»</mark> —
                      применить интерполяцию «Easy Ease In» для выделенных ключевых кадров
                    </td>
                    <td>
                      <mark className="key">Shift + F9</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Set Keyframe to Easy Ease Out»</mark> —
                      применить интерполяцию «Easy Ease Out» для выделенных ключевых
                      кадров
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + F9</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Toggle Hold Interpolation for Selected Keyframes»
                      </mark>
                      — применить интерполяцию «Hold» для выделенных ключевых кадров
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + H</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Shift Selected Keyframes 1 Frame Earlier»
                      </mark>
                      — сдвинуть выделенные ключевые кадры на 1 кадр влево
                    </td>
                    <td>
                      <mark className="key">
                        Alt + ← <span className="shortcut-hint">(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Shift Selected Keyframes 1 Frame Later»
                      </mark>{" "}
                      — сдвинуть выделенные ключи на 1 кадр вправо
                    </td>
                    <td>
                      <mark className="key">
                        Alt + → <span className="shortcut-hint">(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Shift Selected Keyframes 10 Frames Earlier»
                      </mark>
                      — сдвинуть выделенные ключи на 10 кадров влево
                    </td>
                    <td>
                      <mark className="key">
                        Alt + Shift + ← <span className="shortcut-hint">(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Shift Selected Keyframes 10 Frames Later»
                      </mark>
                      — сдвинуть выделенные ключи на 10 кадров вправо
                    </td>
                    <td>
                      <mark className="key">
                        Alt + Shift + → <span className="shortcut-hint">(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Keyframe Interpolation (Edit in Dialog Box)»
                      </mark>
                      — открыть окно «Keyframe Interpolation»
                      <Addition type="info">
                        Данное окно откроется, если у вас выделен хотя бы один ключевой
                        кадр на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Keyframe Velocity (Edit in Dialog Box)»
                      </mark>{" "}
                      — открыть окно «Keyframe Velocity»
                      <Addition type="info">
                        Данное окно откроется, если у вас выделен хотя бы один ключевой
                        кадр на таймлайне.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + K</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Редактирование (Edit)</Divider>
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
                      <mark className="select">«Undo Last Action»</mark> — отменить
                      последнее действие
                    </td>
                    <td>
                      <mark className="key">Ctrl + Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Redo Last Action»</mark> — вернуть
                      отменённое действие
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + Z</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Cut»</mark> — вырезать выделенное
                      содержимое и поместить его в буфер обмена
                    </td>
                    <td>
                      <mark className="key">Ctrl + X</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Copy»</mark> — скопировать выделенное
                      содержимое и поместить его в буфер обмена
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
                </tbody>
              </table>
              <Divider>Работа со слоями на таймлайне (Layer)</Divider>
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
                      <mark className="select">«Pre-compose»</mark> — создать
                      прекомпозицию из выделенных слоёв
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Duplicate»</mark> — дублировать слой
                      <Addition type="warning">
                        Дублируя слой с композицией, вы копируете лишь ссылку на него. Вы
                        не создадите таким образом независимый дубликат композиции.{" "}
                        <a href="#composition-independent">
                          А как правильно дублировать композиции?
                        </a>
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + D</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Delete All Effects from Selected Layers»
                      </mark>{" "}
                      — удалить все эффекты на выделенных слоях
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + E</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Apply Recently Used Animation Preset»
                      </mark>{" "}
                      — применить недавно использованный пресет формата{" "}
                      <mark className="file">FFX</mark>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + F</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Show/Hide Effect Controls Panel for Selected Layers»
                      </mark>{" "}
                      — показать или скрыть панель управления эффектами
                    </td>
                    <td>
                      <mark className="key">F3</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Layer Settings»</mark> — открыть настройки
                      выделенного слоя
                      <Addition type="info">
                        Работает для <mark className="select">«Null Object»</mark>,{" "}
                        <mark className="select">«Light Layer»</mark>,{" "}
                        <mark className="select">«Solid Layer»</mark> и{" "}
                        <mark className="select">«Adjustment Layer»</mark>.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + Y</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Center Layer in View»</mark> — расположить
                      слой по центру композиции
                    </td>
                    <td>
                      <mark className="key">Ctrl + Home</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Center Anchor Point in Layer Content»
                      </mark>{" "}
                      — установить якорную точку по центру слоя
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Home</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Fit Layer to Comp Width»</mark> —
                      растянуть выделенный слой под ширину композиции
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + H</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Fit Layer to Comp Height»</mark> —
                      растянуть выделенный слой под высоту композиции
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + G</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Enable Time Remapping»</mark> — включить
                      или выключить изменение времени слоя
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + T</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Reverse Layer»</mark> — обратить
                      проигрывание слоя
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Go to Earliest In Point of Selected Layers»
                      </mark>{" "}
                      — переместить индикатор текущего времени к самому раннему началу
                      одного из выделенных слоёв
                    </td>
                    <td>
                      <mark className="key">I</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Go to Latest Out Point of Selected Layers»
                      </mark>{" "}
                      — переместить индикатор текущего времени к самому позднему концу
                      одного из выделенных слоёв
                    </td>
                    <td>
                      <mark className="key">O</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Set Layer In Point at Current Time»</mark>{" "}
                      — переместить начало выделенных слоёв к индикатору текущего времени
                    </td>
                    <td>
                      <mark className="key">
                        [ <span className="shortcut-hint">(Х)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Set Layer Out Point at Current Time»
                      </mark>{" "}
                      — переместить конец выделенных слоёв к индикатору текущего времени
                    </td>
                    <td>
                      <mark className="key">
                        ] <span className="shortcut-hint">(Ъ)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Split Layer at Current Time»</mark> —
                      разделить выделенные слои на две части
                      <Addition type="info">
                        Вы можете изменить, где будут появляться новые слои после
                        разделения — над исходным слоем или под ним, с помощью параметра{" "}
                        <mark className="select">
                          «Create Split Layers Above Original Layer»
                        </mark>{" "}
                        в{" "}
                        <mark className="select">«Edit → Preferences → Composition»</mark>
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
                        «Trim Layer In Point to Current Time»
                      </mark>{" "}
                      — обрезать начало выделенных слоёв до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">
                        Alt + [ <span className="shortcut-hint">(Х)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Trim Layer Out Point to Current Time»
                      </mark>{" "}
                      — обрезать конец выделенных слоёв до индикатора текущего времени
                    </td>
                    <td>
                      <mark className="key">
                        Alt + ] <span className="shortcut-hint">(Ъ)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shift Layer 1 Frame Earlier»</mark> —
                      сдвинуть выделенные слои на 1 кадр влево
                    </td>
                    <td>
                      <mark className="key">Alt + PgUp</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shift Layer 10 Frames Earlier»</mark> —
                      сдвинуть выделенные слои на 10 кадров влево
                    </td>
                    <td>
                      <mark className="key">Alt + Shift + PgUp</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shift Layer 1 Frame Later»</mark> —
                      сдвинуть выделенные слои на 1 кадр вправо
                    </td>
                    <td>
                      <mark className="key">Alt + PgDown</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Shift Layer 10 Frames Later»</mark> —
                      сдвинуть выделенные слои на 10 кадров вправо
                    </td>
                    <td>
                      <mark className="key">Alt + Shift + PgDown</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Send Layer Backward»</mark> — опустить
                      выделенные слои ниже по иерархии в композиции
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + [ <span className="shortcut-hint">(Х)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Bring Layer Forward»</mark> — поднять
                      выделенные слои выше по иерархии в композиции
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + ] <span className="shortcut-hint">(Ъ)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Next/Previous Layer Blending Mode»</mark>{" "}
                      — переключить режим наложения на выделенных слоях
                      <Addition type="info">
                        Режимы наложения работают только в том случае, если под слоем есть
                        другие видимые слои. Добавлять под него чёрный{" "}
                        <mark className="select">«Solid Layer»</mark> бессмысленно.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Shift + =</mark> или{" "}
                      <mark className="key">Shift + -</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Создание слоёв (Layer → New)</Divider>
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
                      <mark className="select">«New Solid Layer»</mark> — создать новый
                      слой-заливку
                    </td>
                    <td>
                      <mark className="key">Ctrl + Y</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Adjustment Layer»</mark> — создать
                      новый корректирующий слой
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Y</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Null Object»</mark> — создать новый
                      нулевой объект
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + Y</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Text Layer»</mark> — создать новый
                      пустой текстовый слой
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + T</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Camera Layer»</mark> — создать новую
                      камеру
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + C</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«New Light Layer»</mark> — создать новый
                      источник света
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + L</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Работа с таймлайном и композицией (Composition)</Divider>
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
                      <mark className="select">«Set Work Area Start»</mark> — установить
                      начало рабочей области
                    </td>
                    <td>
                      <mark className="key">B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Set Work Area End»</mark> — установить
                      конец рабочей области
                    </td>
                    <td>
                      <mark className="key">N</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Set Work Area to Selected Layers»</mark> —
                      задать длительность рабочей области под выделенные слои
                      <Addition type="info">
                        Если ни один слой не выделен, рабочая область будет установлена по
                        всей длине композиции.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + B</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Start of Work Area»</mark> —
                      переместить индикатор текущего времени к началу рабочей области
                    </td>
                    <td>
                      <mark className="key">Shift + Home</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to End of Work Area»</mark> —
                      переместить индикатор текущего времени к концу рабочей области
                    </td>
                    <td>
                      <mark className="key">Shift + End</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Go to Start of Composition, Layer, or Footage Item»
                      </mark>{" "}
                      — перенести индикатор текущего времени к началу композиции
                    </td>
                    <td>
                      <mark className="key">Home</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">
                        «Go to End of Composition, Layer, or Footage Item»
                      </mark>{" "}
                      — перенести индикатор текущего времени к концу композиции
                    </td>
                    <td>
                      <mark className="key">End</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go Back 1 Frame»</mark> — перенести
                      индикатор текущего времени на 1 кадр назад
                    </td>
                    <td>
                      <mark className="key">PgUp</mark> или{" "}
                      <mark className="key">
                        Ctrl + ← <span className="shortcut-hint">(влево)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go Forward 1 Frame»</mark> — перенести
                      индикатор текущего времени на 1 кадр вперёд
                    </td>
                    <td>
                      <mark className="key">PgDown</mark> или{" "}
                      <mark className="key">
                        Ctrl + → <span className="shortcut-hint">(вправо)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go Back 10 Frames»</mark> — перенести
                      индикатор текущего времени на 10 кадров назад
                    </td>
                    <td>
                      <mark className="key">Shift + PgUp</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go Forward 10 Frames»</mark> — перенести
                      индикатор текущего времени на 10 кадров вперёд
                    </td>
                    <td>
                      <mark className="key">Shift + PgDown</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Composition Settings»</mark> — открыть
                      настройки композиции
                    </td>
                    <td>
                      <mark className="key">Ctrl + K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Project Settings»</mark> — открыть
                      настройки проекта
                    </td>
                    <td>
                      <mark className="key">Ctrl + Alt + Shift + K</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Toggle Show Rulers»</mark> — показать или
                      скрыть линейки в предпросмотре композиции
                    </td>
                    <td>
                      <mark className="key">Ctrl + R</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Trim Comp to Work Area»</mark> — обрезать
                      длительность композиции по рабочей области
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + X</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom In / Zoom Out»</mark> — увеличить или
                      уменьшить масштаб таймлайна
                    </td>
                    <td>
                      <mark className="key">=</mark> или <mark className="key">-</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Go to Time»</mark> — перейти к
                      определённому времени на таймлайне
                    </td>
                    <td>
                      <mark className="key">Alt + Shift + J</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Add Layer Marker»</mark> — поставить
                      маркер на таймлайне для выделенных слоёв
                      <Addition type="info">
                        Если ни один слой не выделен — маркер установится для открытой
                        композиции.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        * <span className="shortcut-hint">(на Numpad)</span>
                      </mark>
                      <Addition type="info">
                        Если у вас клавиатура без цифрового блока, можно переназначить эту
                        клавишу в{" "}
                        <mark className="select">«Edit» → «Keyboard Shortcuts»</mark>.
                      </Addition>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Работа с предпросмотром (View)</Divider>
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
                      <mark className="select">«Toggle Show Layer Controls»</mark> —
                      показать или скрыть границы слоёв, контроллеры и пути движения
                      <Addition type="info">
                        Настроить отображение некоторых наложений можно в окне{" "}
                        <mark className="select">«View Options»</mark> (
                        <mark className="key">Ctrl + Alt + U</mark>).
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Ctrl + Shift + H</mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Toggle Show Grid»</mark> — показать или
                      скрыть сетку в предпросмотре композиции или слоя
                      <Addition type="info">
                        Настроить сетку можно в{" "}
                        <mark className="select">
                          «Edit» → «Preferences» → «Grids & Guides»
                        </mark>
                        .
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + &apos; <span className="shortcut-hint">(Э)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Toggle Show Guides»</mark> — показать или
                      скрыть направляющие в предпросмотре композиции или слоя
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + ; <span className="shortcut-hint">(Ж)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Toggle Snap to Guides»</mark> — включить
                      или выключить привязку к направляющим
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Shift + ; <span className="shortcut-hint">(Ж)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Show/Hide Title/Action Safe Guides»</mark>{" "}
                      — показать или скрыть безопасные зоны в предпросмотре композиции или
                      слоя
                    </td>
                    <td>
                      <mark className="key">
                        &apos; <span className="shortcut-hint">(Э)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Zoom In / Zoom Out»</mark> — увеличить или
                      уменьшить масштаб предпросмотра композиции или слоя
                    </td>
                    <td>
                      <mark className="key">
                        . <span className="shortcut-hint">(Ю)</span>
                      </mark>{" "}
                      или{" "}
                      <mark className="key">
                        , <span className="shortcut-hint">(Б)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Preview»</mark> — начать или остановить
                      воспроизведение предпросмотра композиции или слоя
                      <Addition type="info">
                        При включённом кэшировании первое нажатие запускает просчёт,
                        второе — принудительно начинает воспроизведение уже просчитанных
                        кадров.
                      </Addition>
                    </td>
                    <td>
                      <mark className="key">Пробел</mark>
                    </td>
                  </tr>
                </tbody>
              </table>
              <Divider>Прочее (Application)</Divider>
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
                      <mark className="select">«Preferences»</mark> — открыть окно
                      настроек <mark className="app">Adobe After Effects</mark>
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Alt + ; <span className="shortcut-hint">(Ж)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Keyboard Shortcuts»</mark> — открыть
                      редактор горячих клавиш
                    </td>
                    <td>
                      <mark className="key">
                        Ctrl + Alt + &apos; <span className="shortcut-hint">(Э)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Maximize Panel»</mark> — развернуть или
                      восстановить панель под курсором
                    </td>
                    <td>
                      <mark className="key">
                        ` <span className="shortcut-hint">(Ё)</span>
                      </mark>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <mark className="select">«Maximize App Window»</mark> — раскрыть
                      программу на весь экран, скрыв заголовок окна
                    </td>
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
          <mark className="app">Adobe After Effects</mark>. В этой статье собрана подборка
          популярных дополнений и эффектов для разных задач.
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Пожалуйста, не устанавливайте всё подряд в{" "}
              <mark className="app">Adobe After Effects</mark>. Ставьте только те
              дополнения, которые действительно планируете использовать в работе.
              Избыточное количество плагинов и скриптов перегружает программу и может
              заметно замедлить её запуск и работу.
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
                <mark className="word">плагин</mark>,{" "}
                <mark className="word">расширения</mark> и{" "}
                <mark className="word">скрипт</mark>, хотя область действий у них
                кардинально отличаются.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    <p>
                      <mark className="word">Плагин</mark> — дополнение к{" "}
                      <mark className="app">Adobe After Effects</mark> и иногда к{" "}
                      <mark className="app">Adobe Premiere</mark> и{" "}
                      <mark className="app">Adobe Media Encoder</mark> формата{" "}
                      <mark className="file">AEX</mark> на{" "}
                      <mark className="os">Windows</mark> и{" "}
                      <mark className="file">PLUGIN</mark> на{" "}
                      <mark className="os">macOS</mark>. Обычно с помощью них вы
                      расширяете функционал программы за счёт добавления новых эффектов в{" "}
                      <mark className="select">«Effects & Presets»</mark>, новый формат
                      рендера или новых элементов меню.
                    </p>
                    <Addition type="danger">
                      <ul>
                        <li>
                          Плагины формата <mark className="file">AEX</mark> не подходят
                          для устройств на macOS, так как они предназначены для устройств
                          на Windows.
                        </li>
                        <li>
                          Плагины формата <mark className="file">PLUGIN</mark> не подходят
                          для устройств на Windows, так как они предназначены для
                          устройств на macOS.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <mark className="word">Скрипт</mark> — файл{" "}
                    <mark className="file">JSX</mark> или{" "}
                    <mark className="file">JSXBIN</mark>, содержащий интерпретируемый код,
                    написанный на <mark className="file-code">JavaScript</mark> или{" "}
                    <mark className="file-code">ExtendScript</mark>, выполняющий различные
                    действия и имеющий доступ к вашей файловой системе, если вы это
                    разрешите в настройках программы. Они могут быть как с интерфейсом,
                    так и без. Если у скрипта есть интерфейс — он будет открываться в
                    отдельной плавающей панели. При необходимости вы можете его прикрепить
                    к вашему рабочему пространству.{" "}
                    <a href="#customize-workspace">Как?</a>
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
              <mark className="plugin">Trapcode Suite</mark>,{" "}
              <mark className="plugin">VFX Suite</mark> и{" "}
              <mark className="plugin">Universe</mark>. Последние версии первых трёх
              пакетов объединены в один <mark className="plugin">Maxon Red Giant</mark>, а{" "}
              <mark className="plugin">Maxon Universe</mark> по-прежнему устанавливается
              отдельно.
            </p>
            <p>
              Из ключевых эффектов этих пакетов можно выделить{" "}
              <mark className="plugin">Primatte Keyer</mark> и{" "}
              <mark className="plugin">Supercomp</mark> для композитинга,{" "}
              <mark className="plugin">Trapcode Particular</mark> для создания частиц и{" "}
              <mark className="plugin">Sound Keys</mark> для генерации ключей из аудио, а
              также <mark className="plugin">Magic Bullet Looks</mark> и{" "}
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
              <mark className="plugin">Element 3D</mark> от{" "}
              <mark className="company">VideoCopilot</mark> — используется для импорта
              трёхмерных моделей в форматах <mark className="file">OBJ</mark>,{" "}
              <mark className="file">C4D</mark>
              <sup>1</sup> и <mark className="file">E3D</mark>.
            </p>
            <ArticleMedia
              src="P3BKw9jK-kI"
              type="youtube"
            />
            <Addition type="warning">
              <sup>1</sup> Для импорта моделей <mark className="file">C4D</mark> требуется
              установленная <mark className="app">Maxon Cinema 4D</mark>.
            </Addition>
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
              src="EGZCNcQyvrE"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Deep Glow</mark> — создаёт красивое свечение
              объекта, но может сильно замедлить рендеринг.{" "}
              <a href="#grow-bounds">Что делать, если свечение обрезается?</a>
            </p>
            <ArticleMedia
              src="3XdA_cZAZao"
              type="youtube"
            />
            <Addition type="warning">
              <ul>
                <li>
                  Первая и вторая версии <mark className="plugin">Deep Glow</mark>{" "}
                  несовместимы между собой, поскольку{" "}
                  <mark className="plugin">Deep Glow</mark> и{" "}
                  <mark className="plugin">Deep Glow 2</mark> считаются отдельными
                  плагинами. При этом обе версии можно установить одновремено.
                </li>
                <li>
                  Если вы не планируете использовать обе версии — перенесите параметры из
                  старой версии эффекта в новую в старых проектах. Начиная с{" "}
                  <mark className="plugin">Deep Glow 2</mark>{" "}
                  <mark className="version">1.1</mark>, в комплект поставляется скрипт{" "}
                  <mark className="file">DEEP GLOW UPGRADER.JSX</mark>, который находит в
                  проекте все вхождения первой версии{" "}
                  <mark className="plugin">Deep Glow</mark> и заменяет их на{" "}
                  <mark className="plugin">Deep Glow 2</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <p>
              <mark className="plugin">Saber</mark> от{" "}
              <mark className="company">VideoCopilot</mark> — бесплатный плагин для
              создания неоновой обводки.
            </p>
            <ArticleMedia
              src="os-qqVrMc-Q"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">loopFlow</mark> — оживляет статичные изображения:
              текущую воду, клубящийся дым или огонь.
            </p>
            <ArticleMedia
              src="O8Hb0y7hKlk"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">AutoFill</mark> — плагин для создания эффекта
              «проявления» объекта.
            </p>
            <ArticleMedia
              src="NQFRDWL5LQs"
              type="youtube"
            />
            <Addition type="warning">
              Первая и вторая версии <mark className="plugin">AutoFill</mark> несовместимы
              между собой.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="plugin">Twitch</mark> от{" "}
              <mark className="company">VideoCopilot</mark> — устаревший
              <sup>1</sup> плагин для создания эффекта тряски, который почему-то до сих
              пор популярен у «эдиторов».
            </p>
            <ArticleMedia
              src="-4icg0BOJCg"
              type="youtube"
            />
            <Addition type="danger">
              <sup>1</sup> Автор статьи не рекомендует использовать этот эффект в новых
              проектах, так как он «морально устарел» и не поддерживает{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>. В качестве замены
              лучше подходит <mark className="plugin">S_Shake</mark> из пакета{" "}
              <mark className="plugin">Boris FX Sapphire</mark> со стилем{" "}
              <mark className="select">«Twitchy»</mark>.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="plugin">Displacer Pro</mark> — бесплатный плагин для
              создания искажений и переходов.
            </p>
            <ArticleMedia
              src="FLMdpxrKqlw"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Pixel Sorter 2 / 3</mark> — плагин для создания
              эффектов «сортировки пикселей» и различных искажений.
            </p>
            <ArticleMedia
              src="TjQzOFrjIcg"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Mettle Flux</mark>,{" "}
              <mark className="plugin">Mettle FreeForm Pro</mark> и{" "}
              <mark className="plugin">Mettle Mantra</mark> — инструменты для создания
              фрактальных волн, искажений и работы с 360-градусным видео.
            </p>
            <ArticleMedia
              src="iiyF2qyzyCA"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">FXHome Ignite Pro</mark> — сборник эффектов,
              названия которых выглядят как стандартные эффекты{" "}
              <mark className="app">Adobe After Effects</mark>. Иногда при открытии чужих
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
        </ul>
        <Divider>Подборка полезных инструментов для работы с композициями</Divider>
        <ul>
          <li>
            <p>
              <mark className="plugin">Auto Crop 3</mark> — плагин для кадрирования
              композиции по размеру слоёв.
            </p>
            <ArticleMedia
              src="JrnkNA-ZjUk"
              type="youtube"
            />
            <Addition type="info">
              Начиная с <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">26.0 (2026)</mark> и новее, часть функционала
              кадрирования слоёв стала доступна без использования сторонних инструментов.{" "}
              <a href="https://helpx.adobe.com/after-effects/using/composition-basics.html#crop-composition-to-selected-layer-bounds">
                Подробнее...
              </a>
            </Addition>
          </li>
          <li>
            <p>
              <mark className="plugin">Flow</mark> — расширение для быстрого применения
              готовых кривых анимации. Позволяет ускорить рутинную работу со скоростью
              изменения значений в несколько раз.
            </p>
            <ArticleMedia
              src="7jWg8ZcXDsY"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">FX Console</mark> от{" "}
              <mark className="company">VideoCopilot</mark> — всплывающая панель для
              быстрого поиска и применения эффектов.
            </p>
            <ArticleMedia
              src="rqmDo04T0pY"
              type="youtube"
            />
            <Addition type="info">
              В последней публичной бета-версии{" "}
              <mark className="app">Adobe After Effects</mark> часть функционала этого
              дополнения теперь заменена новым окном{" "}
              <mark className="select">«Quick Apply»</mark>.{" "}
              <a href="https://helpx.adobe.com/after-effects/using/quick-apply.html">
                Подробнее...
              </a>
            </Addition>
          </li>
          <li>
            <p>
              <mark className="plugin">Guides</mark> от{" "}
              <mark className="user">Rendertom</mark> — расширяет возможности работы с
              направляющими.
            </p>
            <ArticleMedia
              src="5NOF6vpHL1A"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">kBar</mark> — настраиваемая панель, на кнопки
              которой можно назначить любые действия: применение эффектов, выражений,
              запуск скриптов и прочее.
            </p>
            <ArticleMedia
              src="Rvch7wPpMgo"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Copy Pasta</mark> — бесплатное расширение для
              вставки в проект изображений и видео из буфера обмена.
            </p>
            <ArticleMedia
              src="9LjcDQE7LvA"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Keystone</mark> — инструмент для манипуляций с
              ключевыми кадрами: растягивание, смещение, выравнивание.
            </p>
            <ArticleMedia
              src="ldrWE8Vbif0"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Motion Tools Pro</mark> — настраиваемый набор
              инструментов для анимации.
            </p>
            <ArticleMedia
              src="SISTBJr3kUo"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Newton</mark> — плагин для симуляции физики
              двумерных объектов.
            </p>
            <ArticleMedia
              src="5V479qd06o4"
              type="youtube"
            />
          </li>
          <li>
            <mark className="plugin">rd: CompSetter</mark> — скрипт для пакетного
            изменения параметров нескольких композиций.
          </li>
          <li>
            <p>
              <mark className="plugin">True Comp Duplicator</mark> — бесплатный скрипт для
              создания независимых дубликатов композиций.
            </p>
            <ArticleMedia
              src="EQ1KIS65Djo"
              type="youtube"
            />
          </li>
        </ul>
        <Divider>Подборка технических инструментов</Divider>
        <ul>
          <li>
            <p>
              <mark className="plugin">Autokroma Influx</mark> — плагин для импорта в
              проект файлов неподдерживаемых форматов, например{" "}
              <mark className="video">WEBM</mark>, <mark className="video">MKV</mark> или{" "}
              <mark className="video">FLV</mark>.
            </p>
            <Addition type="warning">
              Иногда видео с немонтажными кодеками или файлы, импортированные через{" "}
              <mark className="plugin">Autokroma Influx</mark>, могут работать
              нестабильно. Картинка может дёргаться, появляться артефакты, меняться цвета
              или вовсе пропадать, а рендер — тормозить. Чтобы избежать таких проблем,
              лучше заранее перекодировать исходники в монтажный формат — например, с
              помощью <mark className="app">MKVToolNix</mark>,{" "}
              <mark className="app">HandBrake</mark> или{" "}
              <mark className="app">Shutter Encoder</mark>.
            </Addition>
            <ArticleMedia
              src="l3zBFli6BIk"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Cyclops</mark> — расширение для экспорта композиции
              вместе со всеми границами слоёв и направляющими, как в предпросмотре.
            </p>
            <ArticleMedia
              src="wYogLvGl1ow"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Paint Link</mark> — связывает{" "}
              <mark className="app">Adobe After Effects</mark> с{" "}
              <mark className="app">Adobe Photoshop</mark> для покадровой обработки слоя.
            </p>
            <ArticleMedia
              src="c7U1U_qBiHs"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Pseudo Effect Maker</mark> — инструмент для
              создания удобных контроллеров для ваших эффектов или выражений.
            </p>
            <ArticleMedia
              src="IHzDtW_Rnkw"
              type="youtube"
            />
          </li>
          <li>
            <p>
              <mark className="plugin">Voukoder</mark> и{" "}
              <mark className="plugin">Autokroma AfterCodecs</mark> — плагины для экспорта
              композиций в <mark className="video">H.264</mark> и другие форматы, которые
              работают порой лучше стандартного экспортёра.{" "}
              <a href="#export-mp4">Как экспортировать композицию с помощью них?</a>
            </p>
            <ArticleMedia
              src="AxkqdNZFKPk"
              type="youtube"
            />
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="changelog"
        tag="что нового, фишки, обновления, апдейты, патчноуты, changelog, список изменений"
        title="Где я могу узнать о нововведениях в обновлениях программы?"
      >
        <p>
          Обычно в день выхода новой стабильной версии{" "}
          <mark className="app">Adobe After Effects</mark>, разработчики публикуют на
          своём сайте список нововведений. Это делается для того, чтобы каждый не
          спрашивал из-за каждого угла:{" "}
          <mark className="quote">«А что обновилось-то?»</mark>. Также{" "}
          <mark className="company">Adobe</mark> время от времени выкладывает списки
          выявленных неполадок и временные решения для них.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/whats-new.html">
            Что нового в After Effects
          </a>
          <a href="https://helpx.adobe.com/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/after-effects/kb/known-issues-after-effects.html">
            Известные проблемы в After Effects
          </a>
        </div>
        <p>
          А вообще, рекомендуется время от времени обновлять{" "}
          <mark className="app">Adobe After Effects</mark> и сторонние плагины. Многие
          баги старых версий, например утечка оперативной памяти или смещение кадра при
          экспорте, исправляются в более новых.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="switch-language"
        tag="изменить язык программы, смена языка, установка английской версии, english version, локализация"
        title="Почему все советуют ставить английскую версию программы и как это сделать?"
      >
        <p>
          Установив английскую версию программы, вы убережёте себя от возможных ошибок с
          выражениями или некорректной работы сторонних плагинов. Многие из них просто не
          «дружат» с языками интерфейса, отличными от английского.
        </p>
        <p>
          Кроме того, искать обучающие материалы станет проще: почти все туториалы
          записаны именно с использованием английской локализацией программы. А ещё вы
          быстрее будете находить нужные эффекты в самой программе — в русской локализации
          названия некоторых из них переведены порой нелогично.
        </p>
        <Addition type="danger">
          <ul>
            <li>
              При смене языка <mark className="app">Adobe After Effects</mark> сбросит
              пользовательские настройки, так как они привязаны к языку интерфейса. При
              этом сторонние плагины, скрипты и пресеты останутся на месте.
            </li>
            <li>
              После смены языка описанным ниже способом названия стандартных пресетов и
              рабочих областей останутся на русском языке.{" "}
              <a href="#presets-list">Где найти перевод пресетов?</a>
            </li>
          </ul>
        </Addition>
        <ContentFilter
          macContent={
            <>
              <Divider>Меняем язык с помощью консоли</Divider>
              <Addition type="warning">
                Этот способ работает только в{" "}
                <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">24.X (2024)</mark> и выше.
              </Addition>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро менять язык через{" "}
                <mark className="select">«Console»</mark>. Чтобы это сделать — сначала
                нажмите <mark className="key">Command + F12</mark>. В открывшемся окне
                нажмите на иконку открытия контекстного меню и переключитесь в режим{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <Addition type="info">
                Если вместо функциональных клавиш у вас срабатывает изменение громкости,
                дополнительно зажмите <mark className="key">Fn</mark> вместе с указанной
                выше комбинацией или измените поведение функциональных клавиш в настройках
                macOS.
              </Addition>
              <ArticleMedia
                caption="Включение Debug Database View"
                src="legacy/aftereffects/console_debug-database-view.png"
                type="image"
              />
              <p>
                Затем в строке поиска введите{" "}
                <mark className="copy">ApplicationLanguage</mark> и в строке с этим
                параметром напишите <mark className="copy">en_US</mark>. После этого
                перезапустите <mark className="app">Adobe After Effects</mark>. Чтобы
                вернуть язык по умолчанию, просто удалите значение из этого параметра и
                снова перезапустите программу.
              </p>
              <ArticleMedia
                caption="Установка английского языка в консоли"
                src="legacy/aftereffects/set_language_console.png"
                type="image"
              />
            </>
          }
          windowsContent={
            <>
              <Divider>Меняем язык с помощью текстового файла</Divider>
              <p>
                Для быстрой смены языка на английский достаточно создать пустой текстовый
                файл с названием <mark className="file">ae_force_english.txt</mark> и
                поместить его в папку <mark className="path">«Документы»</mark>,
                находящийся в директории{" "}
                <mark className="path">%USERPROFILE%\Documents</mark>. В сам файл ничего
                писать не нужно. После этого перезапустите{" "}
                <mark className="app">Adobe After Effects</mark>, если он был открыт.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы быстро открыть папку <mark className="path">«Документы»</mark>,
                    нажмите <mark className="key">Win + R</mark>, введите{" "}
                    <mark className="path">%USERPROFILE%\Documents</mark> и нажмите{" "}
                    <mark className="key">Enter</mark>.
                  </li>
                  <li>
                    Если лень создавать файл вручную, можно сделать это командой{" "}
                    <mark className="code">
                      echo.&gt;&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
                    </mark>{" "}
                    в <mark className="app">cmd</mark>. Учтите, что при использовании{" "}
                    <mark className="app">PowerShell</mark> эта команда не сработает.
                  </li>
                </ul>
              </Addition>
              <Divider>Меняем язык с помощью консоли</Divider>
              <Addition type="warning">
                Этот способ работает только в{" "}
                <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">24.X (2024)</mark> и выше.
              </Addition>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро менять язык через{" "}
                <mark className="select">«Console»</mark>. Чтобы это сделать — сначала
                нажмите <mark className="key">Ctrl + F12</mark>. В открывшемся окне
                нажмите на иконку открытия контекстного меню и переключитесь в режим{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <ArticleMedia
                caption="Включение Debug Database View"
                src="legacy/aftereffects/console_debug-database-view.png"
                type="image"
              />
              <p>
                Затем в строке поиска введите{" "}
                <mark className="copy">ApplicationLanguage</mark> и в строке с этим
                параметром напишите <mark className="copy">en_US</mark>. После этого
                перезапустите <mark className="app">Adobe After Effects</mark>. Чтобы
                вернуть язык по умолчанию, просто удалите значение из этого параметра и
                снова перезапустите программу.
              </p>
              <ArticleMedia
                caption="Установка английского языка в консоли"
                src="legacy/aftereffects/set_language_console.png"
                type="image"
              />
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="purge"
        tag="очистка кэша, purge, disk cache, память"
        title="Как очистить кэш и зачем это нужно делать?"
      >
        <p>
          Регулярная очистка кэша помогает избавиться от артефактов в предпросмотре, а
          также может решить проблему с ошибкой{" "}
          <mark className="warning">«Out of Memory»</mark>. Чтобы быстро очистить кэш,
          перейдите в{" "}
          <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark> и
          нажмите <mark className="select">«OK»</mark>. После этого предпросмотр нужно
          будет кэшировать заново.
        </p>
        <Addition type="info">
          Очистка кэша никак не повлияет на ваши проекты: они не сломаются и не удалятся.
          Максимум, что придётся сделать после этого — закэшировать композицию заново.
        </Addition>
        <ArticleMedia
          caption="Очистка кэша и оперативной памяти"
          src="legacy/aftereffects/edit_purge_all-memory-and-disk-cache.png"
          type="image"
        />
        <ContentFilter
          windowsContent={
            <>
              <Addition type="info">
                <ul>
                  <li>
                    Если очистка кэша не помогает избавиться от ошибки{" "}
                    <mark className="warning">«Out of Memory»</mark>, попробуйте{" "}
                    <a href="#configure-swapfile">настроить файл подкачки</a>.
                  </li>
                  <li>
                    Вы можете назначить горячую клавишу для очистки кэша в{" "}
                    <mark className="select">«Edit» → «Keyboard Shortcuts»</mark>. По
                    умолчанию есть комбинация только для очистки оперативной памяти:{" "}
                    <mark className="key">Ctrl + Alt + / (Num)</mark>.
                  </li>
                  <li>
                    <p>
                      Если у вас много оперативной памяти и производительный процессор —
                      отключите дисковый кэш в{" "}
                      <mark className="select">«Edit» → «Preferences» → «Disk»</mark>
                      <sup>1</sup>, сняв галочку{" "}
                      <mark className="select">«Enable Disk Cache»</mark>. Это позволит
                      программе реже обращаться к накопителю.
                    </p>
                    <Addition type="info">
                      <sup>1</sup> В предыдущих версиях{" "}
                      <mark className="app">Adobe After Effects</mark> этот параметр
                      находится в разделе{" "}
                      <mark className="select">«Media & Disk Cache»</mark>.
                    </Addition>
                  </li>
                </ul>
              </Addition>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-idle-cache"
        tag="disable idle caching, выключить кэширование при простое, очень тормозит и зависает программа при выполнении какого-нибудь действия после небольшой паузы"
        title="Как отключить автоматическое кэширование предпросмотра при бездействии?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">22.X (2022)</mark> и выше по умолчанию включено
          автоматическое кэширование кадров во время простоя. На слабых компьютерах или
          при использовании ресурсоёмких эффектов это может вызывать дискомфорт, излишне
          нагружая систему и заполняя оперативную память. Неудивительно, что из-за такого
          поведения программы некоторые «староверы» до сих пор ворчат, мол,{" "}
          <mark className="quote">
            «раньше было лучше, а сейчас всё лагает на ровном месте!!1!»
          </mark>
          . Благо, в <mark className="company">Adobe</mark> при внедрении этой функции
          предусмотрели возможность её отключения.{" "}
          <em className="article-note-muted">И не все об этом в курсе.</em>
        </p>
        <Divider>Отключаем кэширование в простое</Divider>
        <p>
          Для отключения автоматического кэширования при бездействии перейдите в{" "}
          <mark className="select">«Composition» → «Preview»</mark> и снимите флажок{" "}
          <mark className="select">«Cache Frames When Idle»</mark> или нажмите комбинацию
          клавиш <mark className="key">Alt + Shift + I</mark>.
        </p>
        <ArticleMedia
          caption="Отключаем кэширование в простое"
          src="legacy/aftereffects/disable_idle_cache.png"
          type="image"
        />
        <Divider>Настраиваем функцию кэширования в простое</Divider>
        <p>
          Если вы не хотите отключать эту функцию, но хотите изменить время, после
          которого начнётся автоматическое кэширование, — перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Previews»</mark>. В параметре{" "}
          <mark className="select">«Idle Delay Before Caching Starts»</mark> вы можете
          указать любое число от 2 до 15 секунд.
        </p>
        <Addition type="info">
          Чуть ниже этого параметра можно настроить область и направление кэширования:{" "}
          <mark className="select">«Around Current Time»</mark>,{" "}
          <mark className="select">«From Current Time»</mark> или{" "}
          <mark className="select">«From Start of Range»</mark>.
        </Addition>
        <ArticleMedia
          caption="Настраиваем время до старта кэширования при простое"
          src="legacy/aftereffects/change_time_idle_cache.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="configure-backup"
        tag="бекап, бэкап, возврат, вернуть, восстановить, облачное хранилище, облако, яндекс диск, журнал файлов, история изменений, откат проекта"
        title="Как настроить резервное копирование, чтобы возвращаться к предыдущим версиям проекта?"
      >
        <p>
          Бывают ситуации, когда после внесённых изменений клиенту результат не нравится и
          нужно вернуться к предыдущей версии. Или, например, файл проекта{" "}
          <mark className="file">AEP</mark> неожиданно повредился после сбоя. Если заранее
          позаботиться о резервном копировании, таких проблем можно избежать. Есть два
          варианта: в облачном хранилище или локально.
        </p>
        <Addition type="info">
          Чтобы быстро сохранить копию открытого проекта под новым именем — воспользуйтесь
          комбинацией <mark className="key">Ctrl + Alt + Shift + S</mark>. Эта команда
          сохранит проект с тем же названием, добавив в конец порядковый номер.
        </Addition>
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
        anchor="how-to-recover-unsaved"
        tag="вылет, краш, восстановление, не сохранил, автосохранение, autosave"
        title="Я работал над проектом, но ни разу его не сохранял. Программа «вылетела». Можно ли восстановить проект?"
      >
        <p>
          Нет. <mark className="app">Adobe After Effects</mark> не создаёт автосохранения,
          если проект изначально не был сохранён. В следующий раз перед началом работы
          сразу сохраните файл проекта и периодически нажимайте{" "}
          <mark className="key">Ctrl + S</mark>.
        </p>
        <Addition type="info">
          Чтобы не попасть впросак, если файл проекта повредится — заранее{" "}
          <a href="#configure-backup">настройте резервное копирование</a> проектов.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="ae-vs-premiere"
        tag="разница, сравнение, after effects vs premiere pro, пайплайн, выбор программы"
        title="В каких случаях нужно использовать Adobe After Effects, а в каких — Adobe Premiere?"
      >
        <p>
          Эти две программы предназначены для разных задач. В{" "}
          <mark className="app">Adobe After Effects</mark> теоретически можно смонтировать
          двухчасовой фильм, а в <mark className="app">Adobe Premiere</mark> — заняться
          композитингом. Однако такой подход неэффективен. Разберёмся, когда какую
          программу использовать.
        </p>
        <ArticleMedia
          src="xxDdL455rAo"
          type="youtube"
        />
        <ul>
          <li>
            Обе программы подходят для создания коротких видеороликов до одной минуты с
            применением различных эффектов — например,{" "}
            <mark className="video">«рилсов»</mark>,{" "}
            <mark className="video">«тиктоков»</mark>, анимационных афиш, баннеров или
            коротких <mark className="video">«эдитов»</mark>.
          </li>
          <li>
            Теоретически <mark className="app">Adobe Premiere</mark> позволяет делать
            моушен-дизайн, но реализация создании анимации там крайне неудобна. Проще
            создать нужную анимацию в <mark className="app">Adobe After Effects</mark>,
            экспортировать композицию и импортировать её в{" "}
            <mark className="app">Adobe Premiere</mark>.
          </li>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark> не рассчитан на сборку
              длинных видеороликов — он иначе работает с памятью и файлами по сравнению с{" "}
              <mark className="app">Adobe Premiere</mark>. Даже при полной сборке проекта
              в <mark className="app">Adobe After Effects</mark> вы можете столкнуться с
              ошибками вроде <mark className="warning">«Out of Memory»</mark> и долгим
              рендером. Для длинных проектов, подкастов, фильмов или сериалов лучше
              использовать <mark className="app">Adobe Premiere</mark> или другую
              программу для нелинейного монтажа — например,{" "}
              <mark className="app">DaVinci Resolve</mark>.
            </p>
            <Addition type="info">
              При необходимости вы можете импортировать нужный фрагмент из секвенции в{" "}
              <mark className="app">Adobe After Effects</mark> с помощью{" "}
              <mark className="select">«Replace with After Effects Composition»</mark>,
              затем экспортировать его в <mark className="video">Apple ProRes 4444</mark>{" "}
              и заменить исходный участок в <mark className="app">Adobe Premiere</mark>.
            </Addition>
            <Addition type="warning">
              <ul>
                <li>
                  Не рекомендуется часто использовать{" "}
                  <mark className="plugin">Dynamic Link</mark>, особенно в крупных
                  проектах — это может привести к неожиданным проблемам на этапе
                  финального экспорта.
                </li>
                <li>
                  В <mark className="app">Adobe After Effects</mark> можно создавать
                  композиции до трёх часов, но этого стоит избегать. Вы только усложните
                  себе работу из-за неправильно выстроенного пайплайна.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <mark className="app">Adobe After Effects</mark> не предназначен для
            полноценной обработки аудио. Несмотря на наличие эффектов вроде{" "}
            <mark className="plugin">Echo</mark> или{" "}
            <mark className="plugin">Reverb</mark>, работать со звуком удобнее в{" "}
            <mark className="app">Adobe Premiere</mark> или{" "}
            <mark className="app">Adobe Audition</mark>. Эти программы поддерживают
            многодорожечную обработку и <mark className="plugin">VST-плагины</mark>. При
            необходимости звук можно экспортировать из них и импортировать обратно в
            композицию <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            <mark className="app">Adobe Premiere</mark> не подходит для сложного
            композитинга и создания визуальных эффектов с нуля. В этом плане{" "}
            <mark className="app">Adobe After Effects</mark> предлагает больше
            возможностей: поддержка трёхмерных сцен, работа со сторонними эффектами и
            плагинами (например, <mark className="plugin">Trapcode Particular</mark>)
            делают его более подходящим для таких задач.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="replace-footage"
        tag="replace footage, замена файла, перелинковать"
        title="Как заменить один исходник другим?"
      >
        <p>
          Иногда при работе с проектом в <mark className="app">Adobe After Effects</mark>{" "}
          возникает необходимость заменить импортированный исходник другим файлом —
          например, версией, перекодированной в монтажный кодек, или просто другим видео.
          Это можно сделать несколькими способами.
        </p>
        <Divider>
          Заменяем через <mark className="select">«Replace Footage»</mark>
        </Divider>
        <p>
          Найдите в окне <mark className="select">«Project»</mark> исходник, который нужно
          заменить. Нажмите на него <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="select">«Replace Footage» → «File»</mark>. В открывшемся окне
          укажите новый файл. Старый исходник будет заменён на новый во всех композициях,
          где он использовался.
        </p>
        <ArticleMedia
          caption="Project"
          src="legacy/aftereffects/replace_footage.png"
          type="image"
        />
        <Divider>
          Заменяем с зажатой клавишей <mark className="key">Alt</mark>
        </Divider>
        <p>
          Чтобы заменить исходник с помощью <mark className="key">Alt</mark>, сначала
          импортируйте футаж, которым планируете выполнить замену. Затем выделите нужный
          слой на таймлайне и перетащите новый футаж из{" "}
          <mark className="select">«Project»</mark> на него, удерживая{" "}
          <mark className="key">Alt</mark>. Исходник будет заменён только для выделенного
          файла.
        </p>
        <ArticleMedia
          caption="Замена футажей с помощью клавиши Alt"
          src="legacy/aftereffects/replace_footage_alt.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="keyframe-types"
        tag="графики скорости, ключи, кейфрейм, keyframe, graph editor, speed graph, value graph, интерполяция, анимация, кривые скорости"
        title="Что такое ключевые кадры и для чего они нужны?"
      >
        <p>
          <mark className="word">Ключевые кадры</mark> или{" "}
          <mark className="word">«кейфреймы»</mark> являются основой любой анимации. Они
          задают значение свойства объекта или эффекта в определённый момент времени.
          Например, с их помощью можно задать начальные и конечные координаты, чтобы
          анимировать движение.
        </p>
        <p>
          Чтобы установить первый ключевой кадр, нужно нажать на значок секундомера рядом
          с названием свойства на таймлайне или в окне{" "}
          <mark className="select">«Effect Controls»</mark>. Последующие ключевые кадры
          создаются автоматически при изменении значения параметра, если индикатор
          текущего времени находится в другой позиции на временной шкале.
        </p>
        <ArticleMedia
          caption="Установка ключевых кадров"
          src="legacy/aftereffects/position_keyframing.mp4"
          type="video"
        />
        <ContentFilter
          macContent={
            <>
              <p>
                По умолчанию программа создаёт линейную анимацию с равномерным движением.
                Чтобы добавить анимации естественности и динамики, используют плавные
                ускорения и замедления. Для этого в{" "}
                <mark className="app">Adobe After Effects</mark> есть редактор графиков{" "}
                <mark className="select">«Graph Editor»</mark>, который позволяет детально
                настраивать скорость изменения свойств. Он открывается нажатием на
                соответствующий значок на панели таймлайна или с помощью сочетания клавиш{" "}
                <mark className="key">Shift + F3</mark>.
              </p>
              <Addition type="info">
                Если вместо функциональных клавиш у вас открывается{" "}
                <mark className="select">«Mission Control»</mark>, дополнительно зажмите{" "}
                <mark className="key">Fn</mark> вместе с указанной выше комбинацией или
                измените поведение функциональных клавиш в настройках macOS.
              </Addition>
            </>
          }
          windowsContent={
            <p>
              По умолчанию программа создаёт линейную анимацию с равномерным движением.
              Чтобы добавить анимации естественности и динамики, используют плавные
              ускорения и замедления. Для этого в{" "}
              <mark className="app">Adobe After Effects</mark> есть редактор графиков{" "}
              <mark className="select">«Graph Editor»</mark>, который позволяет детально
              настраивать скорость изменения свойств. Он открывается нажатием на
              соответствующий значок на панели таймлайна или с помощью сочетания клавиш{" "}
              <mark className="key">Shift + F3</mark>.
            </p>
          }
        />
        <ContentFilter
          macContent={
            <>
              <p>
                Чтобы изменить график скорости, выделите нужные ключевые кадры и нажмите{" "}
                <mark className="key">F9</mark> для применения{" "}
                <mark className="select">«Easy Ease»</mark> или{" "}
                <mark className="key">Command + Option + K</mark> для открытия окна{" "}
                <mark className="select">«Keyframe Interpolation»</mark>, где можно
                выбрать для них тип интерполяции.
              </p>
              <Addition type="info">
                Если вместо функциональных клавиш у вас срабатывает перемотка аудио,
                дополнительно зажмите <mark className="key">Fn</mark> вместе с указанной
                выше комбинацией или измените поведение функциональных клавиш в настройках
                macOS.
              </Addition>
            </>
          }
          windowsContent={
            <p>
              Чтобы изменить график скорости, выделите нужные ключевые кадры и нажмите{" "}
              <mark className="key">F9</mark> для применения{" "}
              <mark className="select">«Easy Ease»</mark> или{" "}
              <mark className="key">Ctrl + Alt + K</mark> для открытия окна{" "}
              <mark className="select">«Keyframe Interpolation»</mark>, где можно выбрать
              для них тип интерполяции.
            </p>
          }
        />
        <Divider>Типы интерполяции</Divider>
        <p>
          <mark className="word">Интерполяция</mark> является математическим алгоритмом, с
          помощью которого программа рассчитывает промежуточные состояния объекта между{" "}
          <mark className="word">ключевыми кадрами</mark> для создания плавного перехода.
        </p>
        <p>
          Если ключевые кадры фиксируют значения в конкретные моменты времени, то
          интерполяция определяет характер изменений между ними. В{" "}
          <mark className="app">Adobe After Effects</mark> существует два основных типа
          интерполяции: <mark className="select">«Temporal Interpolation»</mark> и{" "}
          <mark className="select">«Spatial Interpolation»</mark>.
        </p>
        <ul>
          <li>
            <p>
              Временная интерполяция, или{" "}
              <mark className="select">«Temporal Interpolation»</mark>, регулирует
              скорость изменения свойства во времени.
            </p>
            <Addition type="info">
              Примеры интерполяции демонстрируются в режиме отображения{" "}
              <mark className="select">«Value Graph»</mark>.
            </Addition>
            <ul>
              <li>
                <p>
                  Тип <mark className="select">«Linear»</mark>, или линейная интерполяция,
                  предполагает движение с постоянной скоростью. На графике она
                  отображается в виде прямой линии, а на таймлайне имеет форму ромба.
                </p>
                <ArticleMedia
                  caption="Линейная интерполяция"
                  src="legacy/aftereffects/temporal_linear.png"
                  type="image"
                />
              </li>
              <li>
                <p>
                  Тип <mark className="select">«Bezier»</mark>, или интерполяция Безье,
                  даёт полный контроль над анимацией. Этот тип позволяет вручную
                  настраивать кривые ускорения с помощью независимых манипуляторов с
                  каждой стороны ключевого кадра. На таймлайне такие ключевые кадры
                  обозначаются значком песочных часов.
                </p>
                <ArticleMedia
                  caption="Интерполяция «Безье»"
                  src="legacy/aftereffects/temporal_bezier.mp4"
                  type="video"
                />
                <Addition type="info">
                  Чтобы быстро переключиться между режимами{" "}
                  <mark className="select">«Bezier»</mark> и{" "}
                  <mark className="select">«Continuous Bezier»</mark>, зажмите клавишу{" "}
                  <mark className="key">Alt</mark> и потяните за манипулятор в редакторе
                  графиков.
                </Addition>
              </li>
              <li>
                <p>
                  Тип <mark className="select">«Continuous Bezier»</mark>, или
                  «непрерывный Безье», связывает манипуляторы друг с другом, что
                  обеспечивает плавный переход через ключевой кадр без резких изломов на
                  кривой. Изменение одного рычага влияет на форму кривой с противоположной
                  стороны. На таймлайне такие ключевые кадры также обозначаются значком
                  песочных часов.
                </p>
                <ArticleMedia
                  caption="Интерполяция «Непрерывный Безье»"
                  src="legacy/aftereffects/temporal_continuous_bezier.mp4"
                  type="video"
                />
              </li>
              <li>
                <p>
                  Тип <mark className="select">«Auto Bezier»</mark>, или «автоматический
                  Безье», заставляет программу автоматически сглаживать кривую для
                  создания плавного движения. Этот тип используют редко, так как анимация
                  часто требует ручной корректировки. На таймлайне такой ключ отображается
                  в виде круга.
                </p>
                <Addition type="info">
                  Чтобы быстро применить <mark className="select">«Auto Bezier»</mark>,
                  щёлкните по ключевому кадру с зажатой клавишей{" "}
                  <mark className="key">Ctrl</mark> на таймлайне или{" "}
                  <mark className="key">Alt</mark> в редакторе графиков.
                </Addition>
                <ArticleMedia
                  caption="Интерполяция «Автоматический Безье»"
                  src="legacy/aftereffects/temporal_auto_bezier.mp4"
                  type="video"
                />
              </li>
              <li>
                <p>
                  Тип <mark className="select">«Hold»</mark>, или «удержание», оставляет
                  значение параметра неизменным до следующего ключевого кадра, после чего
                  оно мгновенно меняется на новое. Этот тип подходит для создания
                  слайд-шоу, stop-motion анимации или имитации резкой смены состояний. На
                  таймлайне такой ключевой кадр выглядит как квадрат.
                </p>
                <ArticleMedia
                  caption="Интерполяция «Удержание»"
                  src="legacy/aftereffects/temporal_hold.mp4"
                  type="video"
                />
              </li>
            </ul>
          </li>
          <li>
            <p>
              Пространственная интерполяция, или{" "}
              <mark className="select">«Spatial Interpolation»</mark>, определяет
              траекторию движения объекта в пространстве. Она применяется к таким
              свойствам, как <mark className="select">«Position»</mark> и{" "}
              <mark className="select">«Anchor Point»</mark>.
            </p>
            <ArticleMedia
              caption="Изменение типа пространственной интерполяции"
              src="legacy/aftereffects/change_spatial_interpolation.mp4"
              type="video"
            />
            <ul>
              <li>
                Тип <mark className="select">«Linear»</mark>, или линейная интерполяция,
                заставляет объект перемещаться по строго прямым линиям от одной точки к
                другой.
              </li>
              <li>
                Тип <mark className="select">«Bezier»</mark>, или Безье, позволяет вручную
                искривлять путь движения с помощью независимых рычагов в окне просмотра.
              </li>
              <li>
                Тип <mark className="select">«Continuous Bezier»</mark>, или «непрерывный
                Безье», создаёт гладкую и скруглённую траекторию. Манипуляторы в точках
                пути взаимосвязаны, что исключает появление острых углов.
              </li>
              <li>
                Тип <mark className="select">«Auto Bezier»</mark>, или «автоматический
                Безье», автоматически скругляет углы траектории и делает путь плавным без
                участия пользователя.
              </li>
            </ul>
            <p>
              Для параметров с пространственной интерполяцией при наличии трёх и более
              ключевых кадров доступна функция{" "}
              <mark className="select">«Rove Across Time»</mark>. Она равномерно
              распределяет промежуточные кадры по таймлайну, чтобы скорость движения на
              всём пути оставалась постоянной. Если сместить крайние ключевые кадры,
              промежуточные точки автоматически подстроятся под новый темп.
            </p>
          </li>
        </ul>
        <Divider>Типы графиков для анимации</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark> редактор графиков работает в
          двух режимах: <mark className="select">«Value Graph»</mark> и{" "}
          <mark className="select">«Speed Graph»</mark>. При этом горизонтальная ось
          всегда отображает время.
        </p>
        <ul>
          <li>
            <p>
              График значений, или <mark className="select">«Value Graph»</mark>,
              отображает значение свойства по вертикальной оси. Например, для свойства
              <mark className="select">«Scale»</mark>
              <sup>1</sup> значения указываются в процентах. Крутизна кривой напрямую
              отражает скорость: чем круче наклон, тем быстрее меняется значение.
            </p>
            <Addition type="info">
              <sup>1</sup> График <mark className="select">«Value Graph»</mark> нельзя
              редактировать для параметров, состоящих из нескольких связанных значений,
              например <mark className="select">«Position»</mark>. Чтобы работать с этим
              графиком, необходимо разделить оси. Для этого щёлкните правой кнопкой мыши
              по названию свойства и выберите пункт{" "}
              <mark className="select">«Separate Dimensions»</mark>. Если разделить оси
              невозможно или вы не хотите этого делать, используйте{" "}
              <mark className="select">«Speed Graph»</mark>.
            </Addition>
          </li>
          <li>
            График скорости, или <mark className="select">«Speed Graph»</mark>, показывает
            скорость изменения свойства на вертикальной оси, например, в пикселях в
            секунду. Он позволяет настраивать динамику и плавность движения, не затрагивая
            конечные значения в ключевых кадрах.
          </li>
        </ul>
        <p>
          Чтобы переключить режим, нажмите на кнопку{" "}
          <mark className="select">«Choose graph type and options»</mark> в нижней части
          редактора графиков и выберите подходящий вариант.
        </p>
        <ArticleMedia
          caption="Изменение вида графика скорости"
          src="legacy/aftereffects/change_graph_view.mp4"
          type="video"
        />
        <p>
          При необходимости вы можете включить опцию{" "}
          <mark className="select">«Auto-Select Graph Type»</mark>. Она позволяет
          программе самостоятельно выбирать вид графика в зависимости от типа свойства.
          Помимо этого, вы можете воспользоваться функцией{" "}
          <mark className="select">«Show Reference Graph»</mark>, которая удобна для
          сравнения текущего графика с альтернативным типом и выводит второй тип графика
          на задний план для наглядности.
        </p>
        <Divider>
          Интерактивная демонстрация <mark className="select">«Graph Editor»</mark>
        </Divider>
        <p>
          Ниже представлен интерактивный пример, который имитирует работу{" "}
          <mark className="select">«Value Graph»</mark> и{" "}
          <mark className="select">«Speed Graph»</mark> в режиме временной интерполяции{" "}
          <mark className="select">«Bezier»</mark>. Вы можете перемещать манипуляторы,
          чтобы в реальном времени увидеть, как интерполяция влияет на анимацию.
        </p>
        <Addition type="warning">
          В этой демонстрации движение манипуляторов в{" "}
          <mark className="select">«Speed Graph»</mark> ограничено по высоте. Это сделано
          для того, чтобы избежать аномальных скачков значений и сохранить наглядность
          графиков.
        </Addition>
        <EasingEditor />
      </DetailsSummary>
      <DetailsSummary
        anchor="unwanted-keyframe-interpolation"
        tag="интерполяция, лишнее движение, одинаковые ключи, graph editor, keyframe interpolation"
        title="Почему между ключевыми кадрами с одинаковым значением всё равно есть анимация?"
      >
        <Divider>Проверяем график скорости</Divider>
        <ContentFilter
          macContent={
            <>
              <p>
                Скорее всего, вы меняли расстояние между ключами, и график скорости
                «сломался». Чтобы посмотреть график, выделите свойство и нажмите{" "}
                <mark className="key">Shift + F3</mark>. В моём примере у первого и
                второго ключа одинаковое значение, но между ними всё равно идёт анимация
                из-за изгиба кривой скорости.
              </p>
              <Addition type="info">
                Если вместо функциональных клавиш у вас открывается{" "}
                <mark className="select">«Mission Control»</mark>, дополнительно зажмите{" "}
                <mark className="key">Fn</mark> вместе с указанной выше комбинацией или
                измените поведение функциональных клавиш в настройках macOS.
              </Addition>
            </>
          }
          windowsContent={
            <p>
              Скорее всего, вы меняли расстояние между ключами, и график скорости
              «сломался». Чтобы посмотреть график, выделите свойство и нажмите{" "}
              <mark className="key">Shift + F3</mark>. В моём примере у первого и второго
              ключа одинаковое значение, но между ними всё равно идёт анимация из-за
              изгиба кривой скорости.
            </p>
          }
        />
        <ArticleMedia
          caption="Speed Graph"
          src="legacy/aftereffects/problematic_interpolation.png"
          type="image"
        />
        <Divider>Меняем интерполяцию ключевых кадров</Divider>
        <p>
          Чтобы убрать нежелательную анимацию, отредактируйте график скорости или измените
          тип интерполяции. Чтобы задать линейную скорость, выделите ключевые кадры и
          нажмите <mark className="key">Ctrl + Alt + K</mark>. В открывшемся окне{" "}
          <mark className="select">«Keyframe Interpolation»</mark> в параметре{" "}
          <mark className="select">«Temporal Interpolation»</mark> выберите{" "}
          <mark className="select">«Linear»</mark> или{" "}
          <mark className="select">«Hold»</mark>. После этого лишняя анимация между
          ключами должна исчезнуть.
        </p>
        <ArticleMedia
          caption="Keyframe Interpolation"
          src="legacy/aftereffects/change_keyframe_interpolation.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="preview-laggy"
        tag="лагает превью, замедленное, ускоренное, тормозит, слоумо, растянутое аудио"
        title="Почему предпросмотр может воспроизводиться рывками или ускоренно?"
      >
        <p>
          Часто пользователи <mark className="app">Adobe After Effects</mark> жалуются на
          различные проблемы при воспроизведении предпросмотра, в частности, на
          необъяснимые «тормоза», замедленный или ускоренный предпросмотр. В этой статье
          мы разберем популярные причины и способы их решения.
        </p>
        <Divider>Кэшируем предпросмотр перед воспроизведением</Divider>
        <p>
          Часто предпросмотр тормозит, потому что{" "}
          <mark className="app">Adobe After Effects</mark> по умолчанию пытается
          воспроизводить видео в реальном времени и не успевает просчитывать эффекты. В
          отличие от классических нелинейных редакторов, таких как{" "}
          <mark className="app">Adobe Premiere</mark> или{" "}
          <mark className="app">DaVinci Resolve</mark>,{" "}
          <mark className="app">Adobe After Effects</mark> изначально не предназначен для
          полноценного предпросмотра в реальном времени — поэтому кадры следует кэшировать
          заранее.
        </p>
        <p>
          Текущий FPS предпросмотра отображается в окне{" "}
          <mark className="select">«Info»</mark>. Если он ниже, чем FPS композиции
          (например, 22,787/25), значит, воспроизведение идёт не в реальном времени.
        </p>
        <ArticleMedia
          caption="Info"
          src="legacy/aftereffects/info_non-realtime.png"
          type="image"
        />
        <p>
          Чтобы это исправить, включите кэширование перед воспроизведением. Для этого
          откройте окно <mark className="select">«Window» → «Preview»</mark> и установите
          флажки <mark className="select">«Cache Before Playback»</mark> и{" "}
          <mark className="select">«If caching, play cached frames»</mark>. Теперь при
          первом нажатии на <mark className="key">Space</mark> программа сначала
          просчитает кадры, а затем воспроизведёт их из кэша. Повторное нажатие на{" "}
          <mark className="key">Space</mark> прервёт процесс кэширования и сразу начнёт
          воспроизводить кадры, которые уже были закэшированы.
        </p>
        <ArticleMedia
          caption="Preview"
          src="legacy/aftereffects/preview_caching.png"
          type="image"
        />
        <Divider>Проверяем частоту кадров предпросмотра</Divider>
        <p>
          Иногда предпросмотр воспроизводится ускоренно или замедленно из-за неверной
          настройки частоты кадров в окне <mark className="select">«Preview»</mark>, так
          как значение <mark className="select">«Frame Rate»</mark> можно довольно легко
          случайно изменить колёсиком мыши. Убедитесь, что для параметра{" "}
          <mark className="select">«Frame Rate»</mark> установлено значение{" "}
          <mark className="select">«Auto»</mark>.
        </p>
        <Addition type="info">
          Значение <mark className="select">«Frame Rate»</mark> работает следующим
          образом: если вы установили значение <mark className="copy">30</mark> для{" "}
          <mark className="select">«Frame Rate»</mark>, а у самой композиции тоже 30 FPS,
          то изменений в скорости вы не заметите. Однако если изменить частоту кадров
          композиции, например, на 60, а <mark className="select">«Frame Rate»</mark> в{" "}
          <mark className="select">«Preview»</mark> оставить прежним, то воспроизведение
          будет в два раза медленнее. Если установить значение{" "}
          <mark className="select">«Auto»</mark>, скорость будет автоматически
          подстраиваться под FPS композиции.
        </Addition>
        <ArticleMedia
          caption="Preview"
          src="legacy/aftereffects/change_preview_fps.png"
          type="image"
        />
        <p>
          Также стоит проверить значение параметра <mark className="select">«Skip»</mark>.
          Некоторые пользователи могут случайно провести по нему колесом мыши или забыть
          про то, что когда-то сами изменяли этот параметр, а потом удивляются, почему у
          них предпросмотр пропускает выглядит тормознуто, когда в этом же окне указан
          верный <mark className="select">«FPS»</mark>. Чтобы проиграть предпросмотр без
          пропусков кадров, установите в <mark className="select">«Skip»</mark> нулевое
          значение.
        </p>
        <Divider>Проверяем устройство для вывода звука</Divider>
        <p>
          Если вы недавно меняли устройство вывода звука, например, подключили наушники,
          то программа может не справляться с синхронизацией аудио, из-за чего
          предпросмотр «заикается». Попробуйте изменить аудиовыход или уменьшить значение{" "}
          <mark className="select">«Latency»</mark> в{" "}
          <mark className="select">«Edit» → «Preferences» → «Audio»</mark>
          <sup>1</sup>.
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«Audio Hardware»</mark>.
        </Addition>
        <ArticleMedia
          caption="Изменяем настройки аудио"
          src="legacy/aftereffects/audio_hardware_settings.png"
          type="image"
        />
        <Divider>Разбираемся с «кривыми» исходниками</Divider>
        <p>
          Если вы работаете с видео или аудио, скачанными из интернета, есть вероятность,
          что они закодированы в «неудобный» для{" "}
          <mark className="app">Adobe After Effects</mark> формат. Файлы{" "}
          <mark className="file">MP4</mark> часто содержат нестабильные свойства —
          например, переменную частоту кадров или непредсказуемые алгоритмы сжатия, что
          особенно характерно для геймплейных записей или видео с{" "}
          <mark className="web">YouTube</mark>. Особенно это касается{" "}
          <mark className="video">H.264</mark> и <mark className="video">H.265</mark>: они
          отлично подходят для просмотра, но плохо ведут себя при монтаже. Постоянная
          декомпрессия этих кодеков приводит к появлению «артефактов» на превью и
          «тормозам» в работе эффектов, из-за чего{" "}
          <mark className="app">Adobe After Effects</mark> начинает «задыхаться».
        </p>
        <p>
          Аудио в формате <mark className="audio">MP3</mark> тоже может создавать
          проблемы: часть трека может неожиданно пропадать на таймлайне, а звук —
          искажаться или рассинхронизироваться с видео.
        </p>
        <ArticleMedia
          caption="Пример артефактов проблемного аудио"
          src="legacy/aftereffects/audio_artifacts.mp4"
          type="video"
        />
        <p>
          Чтобы избежать подобных проблем, рекомендуется заранее перекодировать файлы в
          рабочие форматы: для видео — например,{" "}
          <mark className="video">Apple ProRes 422</mark> или{" "}
          <mark className="video">Apple ProRes 4444</mark>, для аудио —{" "}
          <mark className="audio">WAV</mark>, а затем импортировать их в проект или
          заменять ими уже добавленные исходники. Сделать это можно через{" "}
          <mark className="app">Shutter Encoder</mark> — бесплатную программу для
          конвертации файлов на основе <mark className="app">FFmpeg</mark>.{" "}
          <a href="#import-workflow">Подробнее...</a>
        </p>
        <ContentFilter
          windowsContent={
            <>
              <Divider>Разбираемся с драйверами</Divider>
              <p>
                Иногда драйверы, например для видеокарты, могут обновиться автоматически
                без вашего ведома и начать работать некорректно с вашей версией{" "}
                <mark className="app">Adobe After Effects</mark>.
              </p>
              <p>
                В таком случае попробуйте откатить проблемный драйвер и{" "}
                <a href="https://remontka.pro/disable-driver-auto-update-windows-10/">
                  отключить автообновление
                </a>
                , чтобы подобные ситуации не повторялись. Если у вас установлена
                видеокарта <mark className="hardware">NVIDIA</mark>, рекомендуется
                загрузить и установить драйвер редакции{" "}
                <mark className="app">«NVIDIA Studio»</mark> с{" "}
                <a href="https://www.nvidia.com/en-eu/geforce/drivers/">
                  официального сайта NVIDIA
                </a>
                . На странице укажите модель вашей видеокарты, операционную систему и в
                поле <mark className="select">«Download Type»</mark> выберите{" "}
                <mark className="select">«Studio Driver»</mark>.
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="preview-no-audio"
        tag="пропало аудио, no audio, нет звука, аудио, отсутствует, audio hardware"
        title="Из-за чего может пропадать звук при проигрывании предпросмотра?"
      >
        <Divider>Проверяем настройки предпросмотра</Divider>
        <p>
          Иногда звук при предпросмотре может внезапно пропасть, если вы случайно что-то
          нажали. Сначала проверьте окно <mark className="select">«Preview»</mark>,
          переключатель аудио на слое и саму аудиодорожку — возможно, звук был случайно
          отключен соответствующей кнопкой.
        </p>
        <ArticleMedia
          caption="Preview"
          src="legacy/aftereffects/toggle_audio_preview.png"
          type="image"
        />
        <Divider>Включаем звук при воспроизведении не в реальном времени</Divider>
        <p>
          По умолчанию <mark className="app">Adobe After Effects</mark> отключает звук,
          если предпросмотр идёт не в реальном времени. Чтобы это исправить, снимите
          галочку{" "}
          <mark className="select">«Mute Audio When Preview Is Not Real-time»</mark> в
          настройках <mark className="select">«Edit» → «Preferences» → «Previews»</mark>.
        </p>
        <ArticleMedia
          caption="Выключаем отключение звука при предпросмотре не в реальном времени"
          src="legacy/aftereffects/mute_audio_when_preview_is_not_real-time.png"
          type="image"
        />
        <Divider>Проверяем и конвертируем исходники</Divider>
        <p>
          <mark className="app">Adobe After Effects</mark> может некорректно
          воспроизводить аудио, если в проекте используются файлы с «кривыми» алгоритмами
          сжатия. Особенно часто это происходит с форматом{" "}
          <mark className="audio">MP3</mark> или с видео, скачанными из интернета, —
          например, с <mark className="web">YouTube</mark>. Проблемы могут проявляться в
          виде пропущенных фрагментов, искажений или «растягивания» звука. Решение зависит
          от типа исходника: если проблема в отдельном аудиофайле, его следует
          конвертировать в формат <mark className="audio">WAV</mark> с помощью{" "}
          <mark className="app">Adobe Audition</mark> или{" "}
          <mark className="app">EZ CD Audio Converter</mark>. Если же некорректный звук —
          часть видеофайла, надёжнее будет перекодировать видео целиком через{" "}
          <mark className="app">Shutter Encoder</mark> и заменить его в проекте.
        </p>
        <Divider>Проверяем устройство для вывода звука</Divider>
        <p>
          Если вы недавно меняли устройство вывода звука, например, подключили наушники,
          то программа может не справляться с синхронизацией аудио, из-за чего при
          предпросмотре может пропадать звук. Попробуйте изменить аудиовыход или уменьшить
          значение <mark className="select">«Latency»</mark> в{" "}
          <mark className="select">«Edit» → «Preferences» → «Audio»</mark>
          <sup>1</sup>.
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«Audio Hardware»</mark>.
        </Addition>
        <ArticleMedia
          caption="Изменяем настройки аудио"
          src="legacy/aftereffects/audio_hardware_settings.png"
          type="image"
        />
        <ContentFilter
          windowsContent={
            <>
              <Divider>Проверяем звуковые драйверы</Divider>
              <p>
                Иногда{" "}
                <mark className="app">служба автоматических обновлений Windows</mark>{" "}
                заменяет работающий драйвер на новую версию, которая может поломать вывод
                звука.
              </p>
              <p>
                Для решения проблемы отсутствующего звука попробуйте переустановить
                драйверы или откатить их в{" "}
                <mark className="app">Диспетчере устройств</mark>. Если сделать это не
                удаётся — воспользуйтесь точкой восстановления или резервной копией
                системы, если они были созданы до появления проблем.
              </p>
              <ArticleMedia
                src="A9WYBglOKaQ"
                type="youtube"
              />
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-cached-preview-needs-2-or-more-frames-for-playback"
        tag="для воспроизведения кэшированного предпросмотра требуется 2 или более кадров, не проигрывается предпросмотр, зацикливается превью, идёт по кругу"
        title="«Cached preview needs 2 or more frames for playback» или как избавиться от зацикливания предпросмотра?"
      >
        <p>
          Часто зацикливание предпросмотра, даже если он не до конца закэширован, означает
          лишь одно — программе попросту не хватает оперативной памяти для корректного
          просмотра. Это особенно заметно, если вы пытаетесь воспроизвести тяжёлую сцену.
          Чтобы минимизировать последствия такого поведения, стоит оптимизировать проект
          или изменить настройки системы и программы.
        </p>
        <Divider>Проверяем длину рабочей области</Divider>
        <p>
          Первым делом проверьте длину рабочей области на таймлайне. Возможно, вы случайно
          сократили её до одного кадра — именно поэтому и возникает ошибка. Программа не
          может запустить предпросмотр, если в рабочей области всего один кадр, что
          логично: любая анимация должна содержать как минимум два.
        </p>
        <ArticleMedia
          caption="Одна из причин ошибки — слишком короткая рабочая область"
          src="legacy/aftereffects/low_work-area.png"
          type="image"
        />
        <p>
          Чтобы это исправить, расширьте рабочую область, переместив метку текущего
          времени и установив её начало клавишей <mark className="key">B</mark>, а конец —
          клавишей <mark className="key">N</mark>. Если требуется, чтобы рабочая область
          охватывала всю композицию или выделенный слой, нажмите{" "}
          <mark className="key">Ctrl + Alt + B</mark>.
        </p>
        <Divider>Очищаем кэш и проверяем память</Divider>
        <p>
          Если рабочая область больше двух кадров, а предпросмотр всё равно зациклен —
          проблема, скорее всего, в переполненном кэше или нехватке оперативной памяти.
        </p>
        <ul>
          <li>
            <p>
              Попробуйте очистить кэш через{" "}
              <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark>
              . После очистки рендеринг предпросмотра должен пройти нормально.
            </p>
            <Addition type="info">
              Очистка кэша никак не повлияет на ваши проекты: они не сломаются и не
              удалятся. Максимум, что придётся сделать после этого — закэшировать
              композицию заново.
            </Addition>
            <ArticleMedia
              caption="Очистка кэша и оперативной памяти"
              src="legacy/aftereffects/edit_purge_all-memory-and-disk-cache.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Проверьте, сколько оперативной памяти вы выделили программе. Для этого
              перейдите в{" "}
              <mark className="select">«Edit» → «Preferences» → «Memory & CPU»</mark>
              <sup>1</sup> и посмотрите на значение{" "}
              <mark className="select">«RAM reserved for other applications»</mark>. Если
              вы неправильно поняли описание и оставили программам{" "}
              <mark className="company">Adobe</mark> слишком мало памяти, это может
              вызвать проблемы с проигрыванием предпросмотра. Чтобы выделить максимум ОЗУ,
              поставьте <mark className="copy">0</mark> в поле{" "}
              <mark className="select">«RAM reserved for other applications»</mark>.
              Программа сама подставит минимальное корректное значение памяти для других
              приложений.
            </p>
            <Addition type="info">
              <sup>1</sup> В предыдущих версиях{" "}
              <mark className="app">Adobe After Effects</mark> этот параметр находится в
              разделе <mark className="select">«Memory & Performance»</mark>.
            </Addition>
            <ArticleMedia
              caption="Настраиваем выделение оперативной памяти программам"
              src="legacy/aftereffects/ram_reserved_for_other_applications.png"
              type="image"
            />
          </li>
          <li>
            Закройте другие ресурсоёмкие программы, например браузер,{" "}
            <mark className="app">Blender</mark>,{" "}
            <mark className="app">Adobe Premiere</mark> или другие.
          </li>
          <li>
            <ContentFilter
              windowsContent={
                <p>
                  Попробуйте <a href="#configure-swapfile">настроить файл подкачки</a>. В
                  качестве минимального и максимального размера установите значения от{" "}
                  <mark className="copy">1024</mark> до{" "}
                  <mark className="copy">65536</mark> или{" "}
                  <mark className="copy">131072</mark>. После настройки система создаст
                  файл подкачки с начальным размером 1 ГБ, который сможет динамически
                  расширяться до 64–128 ГБ в зависимости от ваших настроек.
                </p>
              }
            />
          </li>
        </ul>
        <Divider>Разбираемся с исходниками</Divider>
        <p>
          Причина зацикливания предпросмотра и жалоб в духе{" "}
          <mark className="quote">«вчера всё летало, а сегодня тормозит»</mark> часто
          кроется в «кривых» исходниках. Многие скачивают материалы из интернета и сразу
          закидывают их в проект, не задумываясь, что именно такие файлы чаще всего
          становятся источником проблем с предпросмотром.
        </p>
        <p>
          Эта проблема решается, как ни странно, конвертацией исходников в что-то
          «удобоваримое» программой через такие программы, как{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">HandBrake</mark> или{" "}
          <mark className="app">MKVToolNix</mark>.{" "}
          <a href="#import-workflow">Подробнее...</a>.
        </p>
        <Divider>Разбираемся с эффектами</Divider>
        <p>
          Иногда корректному рендерингу мешает какой-нибудь эффект. Попробуйте найти
          «виновника», поочерёдно отключая эффекты на слоях в композиции. Чаще всего
          проблемы вызывают большое количество «эдиторских» эффектов или обилие
          ресурсоёмких эффектов цветокоррекции. В поиске поможет столбец{" "}
          <mark className="select">«Render Time»</mark>. С его помощью можно выявить самые
          «тяжёлые» эффекты и при необходимости заменить их более лёгкими аналогами или
          вовсе удалить.
        </p>
        <Addition type="info">
          Чтобы включить отображение времени рендеринга, нажмите на иконку улитки в левом
          нижнем углу таймлайна или активируйте колонку{" "}
          <mark className="select">«Render Time»</mark> через меню{" "}
          <mark className="select">«Columns»</mark>.
        </Addition>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/view_render_time.png"
          type="image"
        />
        <Divider>Используем дисковый кэш для предпросмотра</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.2 (2025)</mark> и выше появилась новая функция
          воспроизведения предпросмотра напрямую из дискового кэша. Она позволяет
          проигрывать превью прямо с диска, не загружая кадры в оперативную память. Эта
          опция может спасти, когда даже файл подкачки не помогает.
        </p>
        <p>
          Для активации перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Disk»</mark>
          <sup>1</sup>, поставьте галку{" "}
          <mark className="select">«Enable Disk Cache»</mark> и активируйте параметр{" "}
          <mark className="select">«Enable Preview from Disk Cache»</mark>. Размер кэша{" "}
          <mark className="select">«Maximum Disk Cache Size»</mark> должен быть не меньше{" "}
          100 ГБ, так как программа любит пожирать много дискового пространства.
        </p>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> В предыдущих версиях{" "}
              <mark className="app">Adobe After Effects</mark> этот параметр находится в
              разделе <mark className="select">«Media & Disk Cache»</mark>.
            </li>
            <li>
              Для комфортной работы с дисковым кэшем нужен быстрый накопитель. Можете
              купить дешёвый SSD на 256–512 ГБ и использовать его специально для кэша.
            </li>
          </ul>
        </Addition>
        <ArticleMedia
          caption="Включаем воспроизведение предпросмотра из дискового кэша"
          src="legacy/aftereffects/enable_preview_from_disk_cache.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="preview-low-resolution"
        tag="плохое качество предпросмотра, пиксели, низкое разрешение"
        title="Что делать, если предпросмотр выглядит пиксельным или размытым?"
      >
        <p>
          Чтобы устранить проблемы с качеством предпросмотра, для начала проверьте
          разрешение в окне <mark className="select">«Composition»</mark> и установите
          значение <mark className="select">«Full»</mark>. Список с выбором качества
          находится под окном предпросмотра или в настройках композиции.
        </p>
        <ArticleMedia
          caption="Изменяем разрешение предпросмотра"
          src="legacy/aftereffects/change_resolution_comppreview.mp4"
          type="video"
        />
        <p>
          Если там всё в порядке, но при воспроизведении качество всё равно падает — стоит
          проверить настройки разрешения в окне <mark className="select">«Preview»</mark>.
          Выставьте в этом окне для параметра <mark className="select">«Resolution»</mark>{" "}
          значение <mark className="select">«Full»</mark>.
        </p>
        <ArticleMedia
          caption="Изменяем разрешение предпросмотра в окне «Preview»"
          src="legacy/aftereffects/change_resolution_preview.png"
          type="image"
        />
        <Addition type="info">
          Если в <mark className="select">«Resolution»</mark> стоит{" "}
          <mark className="select">«Auto»</mark>, качество предпросмотра будет меняться в
          зависимости от значения, указанного в окне предпросмотра композиции или в его
          настройках.
        </Addition>
        <p>
          Если предпросмотр остаётся размытым и пиксельным даже при качестве{" "}
          <mark className="select">«Full»</mark>, убедитесь, что его масштаб не превышает{" "}
          100%, а у самой композиции достаточно высокое разрешение. Изменить его можно в
          настройках композиции сочетанием клавиш <mark className="key">Ctrl + K</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="vector-low-resolution"
        tag="векторные изображения, предпросмотр в плохом качестве, пиксели, низкое разрешение"
        title="Почему векторный слой выглядит пиксельным?"
      >
        <p>
          Начнём с того, что <mark className="app">Adobe After Effects</mark> — это
          программа для композитинга, работающая с растровой графикой. Её механика
          отличается от векторных редакторов вроде{" "}
          <mark className="app">Adobe Illustrator</mark>, которые постоянно пересчитывают
          вектор под разрешение монитора, создавая иллюзию «бесконечной» детализации при
          увеличении предпросмотра.
        </p>
        <p>
          В <mark className="app">Adobe After Effects</mark> же при создании композиции вы
          задаёте её разрешение в пикселях, и всё, что в неё помещается, ограничено этим
          разрешением. Поэтому при увеличении масштаба предпросмотра более чем на 100% вы
          всегда будете видеть пиксели, потому что увеличиваете уже отрендеренное
          растровое изображение, даже если в проекте есть векторные слои.
        </p>
        <Divider>Разбираемся, как работают «векторные» слои</Divider>
        <p>
          «Векторность» проявляется не при увеличении предпросмотра, а при трансформации
          самого слоя. Например, при изменении свойства{" "}
          <mark className="select">«Scale»</mark> слой заново пересчитывается и остаётся
          чётким относительно разрешения композиции. За это отвечает свойство{" "}
          <mark className="select">«Continuously Rasterize»</mark>. Для текстовых и
          фигурных слоёв оно включено по умолчанию, а для импортированных векторных
          файлов, например <mark className="file">AI</mark>, его нужно активировать
          вручную, чтобы они сохраняли качество при масштабировании слоя.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/enable_continuously_rasterize.png"
          type="image"
        />
        <Addition type="warning">
          При включённой опции <mark className="select">«Continuously Rasterize»</mark>{" "}
          могут возникнуть артефакты — например, разрывы слоя при использовании{" "}
          <mark className="plugin">Puppet Tool</mark>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="adaptive-resolution"
        tag="адаптивное разрешение, пиксели, adaptive resolution, fast previews"
        title="Почему при перемещении объектов или временной метки качество предпросмотра падает?"
      >
        <p>
          По умолчанию в <mark className="app">Adobe After Effects</mark> включена функция
          адаптивного разрешения: при перемещении плейхеда или слоя качество предпросмотра
          временно снижается для быстрого рендера кадра. Если эта функция вас раздражает,
          её можно отключить — для этого нажмите на{" "}
          <mark className="select">«Fast Previews»</mark> под окном предпросмотра и
          выберите <mark className="select">«Off (Final Quality)»</mark>.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/disable_adaptive_resolution.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="grow-bounds"
        tag="grow bounds, нарастить границы, обрезается эффект, края слоя"
        title="Применяю эффект, например Glow, но он обрезается по границе слоя. Как это исправить?"
      >
        <p>
          Некоторые эффекты работают только в пределах размера слоя, из-за чего их
          действие может обрезаться по краям. Например: если ваша основная композиция
          имеет размер 1920×1080, а слой, на который вы применяете эффект, меньше, то
          эффект будет ограничен размером этого слоя.
        </p>
        <Divider>
          Расширяем границы с помощью <mark className="plugin">Grow Bounds</mark>
        </Divider>
        <p>
          Чтобы это исправить, попробуйте применить стандартный эффект{" "}
          <mark className="plugin">Grow Bounds</mark> перед всеми остальными эффектами и
          укажите, на сколько пикселей нужно «нарастить» границы.
        </p>
        <ArticleMedia
          caption="Применение Grow Bounds"
          src="legacy/aftereffects/apply_grow_bounds.mp4"
          type="video"
        />
        <Addition type="warning">
          Иногда стандартный <mark className="plugin">Grow Bounds</mark> может не помочь.
          В таком случае попробуйте использовать{" "}
          <mark className="plugin">Grow Bounds</mark> из пакета{" "}
          <mark className="plugin">Red Giant Trapcode Suite</mark>.
        </Addition>
        <Divider>
          Разбираемся с краями у эффекта <mark className="plugin">Saber</mark>
        </Divider>
        <p>
          Если вы применили <mark className="plugin">Saber</mark> на слой, размер которого
          меньше размера композиции (например, на слой-фигуру), то{" "}
          <mark className="plugin">Grow Bounds</mark> впринципе не поможет. Для решения
          проблемы создайте <mark className="select">«Solid Layer»</mark> размером с
          композицию и примените <mark className="plugin">Saber</mark> на него. Затем в
          настройках эффекта в разделе <mark className="select">«Customize Core»</mark>{" "}
          выберите <mark className="select">«Layer Masks»</mark> и привяжите маску с
          вашего исходного слоя к маске на слое с <mark className="plugin">Saber</mark>.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/linking_masks_for_saber.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="missing-blending-modes"
        tag="blending modes, classic 3d, cinema 4d, 3d renderer, 3д рендер, track matte"
        title="Почему пропадают режимы наложения и Track Matte, когда я перевожу слой в 3D?"
      >
        <p>
          Скорее всего, у вас включён рендер-движок{" "}
          <mark className="plugin">Advanced 3D</mark>, который стал использоваться по
          умолчанию, начиная с <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">24.1 (2024)</mark>, или{" "}
          <mark className="plugin">Cinema 4D</mark>. При использовании таких движков
          режимы наложения, эффекты и прочие функции могут быть недоступны. Чтобы вернуть
          их работу, нужно переключиться на рендер{" "}
          <mark className="plugin">Classic 3D</mark>.
        </p>
        <p>
          Для этого откройте настройки композиции с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + K</mark>, перейдите во вкладку{" "}
          <mark className="select">«3D Renderer»</mark> и установите для параметра{" "}
          <mark className="select">«Renderer»</mark> значение{" "}
          <mark className="plugin">Classic 3D</mark>. В этой же вкладке можно найти список
          поддерживаемых функций для каждого движка и ознакомиться с ним.
        </p>
        <ArticleMedia
          caption="Composition Settings"
          src="legacy/aftereffects/change_3d_renderer.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="missing-casts-shadows"
        tag="расширенный 3д"
        title="Почему у меня не получается включить «Casts Shadows» при использовании Advanced 3D?"
      >
        <p>
          Функцию{" "}
          <a href="https://helpx.adobe.com/after-effects/using/enable-lights-to-cast-shadows.html">
            отбрасывания теней
          </a>{" "}
          от источника освещения при использовании модуля{" "}
          <mark className="plugin">Advanced 3D</mark> добавили в{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">26.0 (2026)</mark> и выше. В предыдущих сборках
          включить <mark className="select">«Casts Shadows»</mark> было нельзя, так как
          эта возможность ещё не была доступна в стабильном релизе и находилась на стадии
          бета-тестирования.
        </p>
        <Addition type="info">
          Если вы смотрите обучающее видео, где автор активирует{" "}
          <mark className="select">«Casts Shadows»</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.X (2025)</mark>, значит, на момент записи у него
          была установлена публичная бета-версия программы.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="saber-transparency"
        tag="прозрачность, saber, альфа-канал, composite settings, transparent"
        title="Как сделать прозрачный фон у слоя с эффектом Saber?"
      >
        <p>
          По умолчанию <mark className="plugin">Saber</mark> рендерится на чёрном фоне.
          Чтобы сделать фон прозрачным — в настройках эффекта раскройте раздел{" "}
          <mark className="select">«Render Settings»</mark>, найдите параметр{" "}
          <mark className="select">«Composite Settings»</mark> и выберите значение{" "}
          <mark className="select">«Transparent»</mark>.{" "}
          <em className="article-note-muted">
            И режимы наложения больше не понадобятся.
          </em>
        </p>
        <Addition type="info">
          Чтобы включить сетку прозрачности — нажмите на кнопку{" "}
          <mark className="select">«Toggle Transparency Grid»</mark> в окне предпросмотра.
        </Addition>
        <ArticleMedia
          caption="Включение прозрачности в Saber"
          src="legacy/aftereffects/transparent_saber.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="composition-independent"
        tag="true comp duplicator, прекомпоз, копирование, независимость, дубликат, продублировал композицию на таймлайне но копия зависит от оригинала"
        title="Как сделать дубликаты композиций независимыми друг от друга?"
      >
        <p>
          Копируя композицию на таймлайне с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + D</mark>, вы создаёте лишь ещё одну ссылку на ту же
          самую композицию, а не создаёте новую за счёт другой. Поэтому изменения в
          «дубликате» отражаются и в оригинале. Чтобы сделать композиции действительно
          независимыми, их нужно дублировать в окне{" "}
          <mark className="select">«Project»</mark>.
        </p>
        <ArticleMedia
          caption="Правильное дублирование композиции"
          src="legacy/aftereffects/duplicate_composition.mp4"
          type="video"
        />
        <Addition type="info">
          <p>
            Если вам нужно сделать несколько копий с вложенными композициями, обновить
            выражения или сгруппировать их в одну папку, воспользуйтесь бесплатным
            <sup>1</sup> скриптом{" "}
            <a href="https://aescripts.com/true-comp-duplicator/">True Comp Duplicator</a>
            .
          </p>
          <Addition type="info">
            <sup>1</sup> Чтобы бесплатно скачать скрипт, зарегистрируйтесь или войдите в
            аккаунт на <a href="https://aescripts.com">aescripts</a>, а затем на странице
            дополнения установите значение <mark className="copy">0</mark> в поле{" "}
            <mark className="select">«Name Your Own Price»</mark> и оформите заказ. Ссылка
            на скачивание появится{" "}
            <a href="https://aescripts.com/downloadable/customer/products/">
              в вашем профиле
            </a>
            .
          </Addition>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="composition-unpack"
        tag="unprecompose, распрекомпозить, раскомпозить"
        title="Как «распаковать» прекомпозицию?"
      >
        <p>
          Бывают случаи, когда вы создали несколько прекомпозиций, а затем вам внезапно
          понадобилось их «распаковать» обратно. Заходить в каждую, выделять все слои,
          копировать, возвращаться в основную композицию и вставлять — долго и муторно,
          особенно если прекомпозиций много. Однако такие действия можно автоматизировать.
        </p>
        <Addition type="warning">
          Учтите, что при распаковке могут «слететь» выражения и ссылки на слои в
          эффектах, например ссылка на слой в эффекте{" "}
          <mark className="plugin">Displacement Map</mark>.
        </Addition>
        <Divider>
          Используем <mark className="plugin">Un-PreCompose</mark>
        </Divider>
        <p>
          Для решения этой проблемы был создан бесплатный<sup>1</sup> скрипт{" "}
          <a href="https://aescripts.com/un-precompose/">Un-PreCompose</a>. После
          установки он появится в меню{" "}
          <mark className="select">«Layer» → «Un-PreCompose»</mark>. Чтобы кнопка стала
          активной, нужно выделить на таймлайне прекомпозиции, которые вы хотите
          распаковать.
        </p>
        <Addition type="info">
          <sup>1</sup> Чтобы бесплатно скачать скрипт, зарегистрируйтесь или войдите в
          аккаунт на <a href="https://aescripts.com">aescripts</a>, а затем на странице
          дополнения установите значение <mark className="copy">0</mark> в поле{" "}
          <mark className="select">«Name Your Own Price»</mark> и оформите заказ. Ссылка
          на скачивание появится{" "}
          <a href="https://aescripts.com/downloadable/customer/products/">
            в вашем профиле
          </a>
          .
        </Addition>
        <ArticleMedia
          caption="Распаковка нескольких прекомпозиций с помощью Un-precompose"
          src="legacy/aftereffects/unprecompose_demonstration.mp4"
          type="video"
        />
        <Divider>
          Используем <mark className="plugin">AEUX</mark>
        </Divider>
        <p>
          С помощью расширения <mark className="plugin">AEUX</mark>, который был создан
          для переноса макетов из <mark className="app">Figma</mark>, тоже можно
          «распаковать» выделенные композиции с помощью кнопки{" "}
          <mark className="select">«Un-Precomp»</mark> в разделе{" "}
          <mark className="select">«Groups»</mark>.
        </p>
        <Addition type="info">
          Скачать <mark className="plugin">AEUX</mark> можно на странице релизов в{" "}
          <a href="https://github.com/google/AEUX/releases">GitHub</a>.
        </Addition>
        <ArticleMedia
          caption="AEUX"
          src="legacy/aftereffects/aeux_un-precomp.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="how-to-invert-layer-order"
        tag="перевернуть очерёдность, обратный порядок, инверсия, нумерация"
        title="Как инвертировать порядок слоёв на таймлайне?"
      >
        <p>
          Если нужно изменить порядок слоёв так, чтобы последний стал первым, а остальные
          развернулись в обратной последовательности — выделите первый слой, затем,
          удерживая <mark className="key">Shift</mark>, кликните по последнему слою. После
          этого нажмите <mark className="key">Ctrl + X</mark>, а затем{" "}
          <mark className="key">Ctrl + V</mark>.
        </p>
        <ArticleMedia
          caption="Инвертирование порядка слоёв"
          src="legacy/aftereffects/invert_layer_numeration.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="layer-not-visible-on-timeline"
        tag="не видно слой, за кадром, перемещение, плейхед, скобки"
        title="Переместил слой из одной композиции в другую, но он оказался за пределами видимости. Как его вернуть?"
      >
        <p>
          Чтобы переместить начало слоя к текущему положению плейхеда, нажмите{" "}
          <mark className="key">[ (Х)</mark>. Чтобы переместить конец слоя к плейхеду,
          нажмите <mark className="key">] (Ъ)</mark>.
        </p>
        <ArticleMedia
          caption="Перемещение слоёв к плейхеду"
          src="legacy/aftereffects/move_layers_around_playhead.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="composition-crop"
        tag="обрезка, auto crop, region of interest, размер композиции"
        title="Как кадрировать композицию?"
      >
        <p>
          Кадрировать композицию в <mark className="app">Adobe After Effects</mark> можно
          разными способами — вручную или автоматически по краям находящихся в ней слоёв.
        </p>
        <Divider>
          Используем <mark className="plugin">Auto Crop 3</mark>
        </Divider>
        <p>
          Для автоматического кадрирования композиции по границам её содержимого можно
          воспользоваться сторонним плагином <mark className="plugin">Auto Crop 3</mark>.
        </p>
        <p>
          После успешной установки плагин появится в двух местах: в меню{" "}
          <mark className="select">«Layer» → «Auto Crop»</mark> — для быстрого
          кадрирования композиции по краям всех слоёв, а также в меню{" "}
          <mark className="select">«Window» → «Auto Crop.jsxbin»</mark> — для
          дополнительных действий.
        </p>
        <ArticleMedia
          caption="Открываем Auto Crop"
          src="legacy/aftereffects/auto_crop_execute.png"
          type="image"
        />
        <ul>
          <li>
            При нажатии <mark className="select">«Auto Crop»</mark> в{" "}
            <mark className="select">«Layer»</mark> или в окне скрипта композиция будет
            кадрирована по краям всех слоёв в текущий момент предпросмотра. При этом не
            учитывается вся область анимации по длительности.
          </li>
          <li>
            При нажатии <mark className="select">«Crop Duration»</mark> в окне скрипта
            композиция кадрируется по всей длительности анимации. Например, если вы
            анимируете падение шарика — скрипт кадрирует композицию так, чтобы вся
            анимация полностью помещалась в кадр.
          </li>
          <li>
            В <mark className="select">«Preferences»</mark> окна скрипта можно вынести
            дополнительные опции — например, добавить внутренние отступы или расширить
            область кадрирования.
          </li>
        </ul>
        <Divider>
          Используем <mark className="select">«Region of Interest»</mark>
        </Divider>
        <p>
          Если точность до пикселя не важна, композицию можно быстро обрезать с помощью{" "}
          <mark className="select">«Region of Interest»</mark>. Для этого нажмите на
          соответствующую иконку в окне предпросмотра и начните рисовать рамку.
        </p>
        <p>
          Когда область будет нарисована, перейдите в меню{" "}
          <mark className="select">«Composition»</mark> и выберите{" "}
          <mark className="select">«Crop Comp to Region of Interest»</mark>. Композиция
          тут же обрежется по границам нарисованной области.
        </p>
        <ArticleMedia
          caption="Кадрирование с помощью Region of Interest"
          src="legacy/aftereffects/crop_comp_to_region_of_interest.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="change-start-timecode"
        tag="start timecode, начальный таймкод, начало композиции, ноль, 00:00:00:00"
        title="Почему первый кадр в композиции начинается не с нулевой секунды?"
      >
        <p>
          Скорее всего, при создании прекомпозиции вы оставили включённой опцию{" "}
          <mark className="select">
            «Adjust composition duration to the time span of the selected layers»
          </mark>
          . Эта опция устанавливает начальный таймкод новой композиции равным времени
          появления самого раннего из выделенных слоёв.
        </p>
        <p>
          Чтобы это исправить, откройте настройки композиции с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + K</mark> и в поле{" "}
          <mark className="select">«Start Timecode»</mark> укажите 00:00:00:00.
        </p>
        <ArticleMedia
          caption="Composition Settings"
          src="legacy/aftereffects/change_start_timecode.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="text-alignment-options"
        tag="point text, paragraph text, точечный текст, блочный текст, justify"
        title="Почему не все параметры выравнивания текста доступны в окне Paragraph?"
      >
        <p>
          Если вы создаёте текстовый слой простым кликом по композиции, вы создаёте{" "}
          <mark className="select">«Point Text»</mark> без фиксированных границ. В этом
          случае выравнивание по ширине не имеет смысла. Чтобы стали доступны все
          параметры выравнивания, нужно создать текстовый блок типа{" "}
          <mark className="select">«Paragraph Text»</mark>, «рисуя» рамку с зажатой{" "}
          <mark className="key">ЛКМ</mark>.
        </p>
        <ArticleMedia
          caption="Создание Paragraph Text"
          src="legacy/aftereffects/create_paragraph_text.mp4"
          type="video"
        />
        <p>
          Вы также можете преобразовать уже существующий точечный текст в блочный — для
          этого выберите инструмент <mark className="select">«Text»</mark>, нажмите{" "}
          <mark className="key">ПКМ</mark> по слою и выберите в контекстном меню{" "}
          <mark className="select">«Convert to Paragraph Text»</mark>.
        </p>
        <ArticleMedia
          caption="Преобразование точечного текста в блочный"
          src="legacy/aftereffects/convert_to_paragraph_text.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="mocha-ae-vs-pro"
        tag="сравнение, разница, трекинг"
        title="Чем отличается Mocha AE от Mocha Pro?"
      >
        <p>
          В стандартную поставку <mark className="app">Adobe After Effects</mark> входит
          встроенный плагин для трекинга <mark className="plugin">Mocha AE</mark>. Его
          функциональность, по сравнению с <mark className="plugin">Mocha Pro</mark>,
          урезана. В <mark className="plugin">Mocha AE</mark> нельзя стабилизировать
          видео, удалять объекты, использовать магнитное лассо и другие продвинутые
          инструменты. <mark className="plugin">Mocha Pro</mark> лишена этих ограничений.
        </p>
        <Addition type="info">
          Подробнее о различиях можно прочитать на{" "}
          <a href="https://borisfx.com/blog/mocha-ae-vs-mocha-pro-what-are-the-differences">
            официальном сайте Boris FX
          </a>
          .
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="unwanted-switch-font-style"
        tag="font, баг, слетает шрифт, неправильный стиль"
        title="Почему начертание шрифта иногда само меняется?"
      >
        <p>
          Предположим, вы решили написать какой-нибудь текст определённым шрифтом. Но вот
          незадача — шрифт при наборе почему-то меняется. Если вы уверены, что с самим
          шрифтом всё в порядке (например, в <mark className="app">Adobe Photoshop</mark>{" "}
          он работает без проблем), скорее всего, вы столкнулись с редким багом, который
          может проявиться в любой версии <mark className="app">Adobe After Effects</mark>
          . К сожалению, не все шрифты, которые отлично работают в{" "}
          <mark className="app">Adobe Photoshop</mark> и{" "}
          <mark className="app">Adobe Illustrator</mark>, будут также корректно работать в{" "}
          <mark className="app">Adobe After Effects</mark> — из-за его особенностей.
        </p>
        <p>
          Суть бага в том, что при смене начертания программа почему-то сохраняет для
          некоторых букв старый стиль или вовсе сбрасывает шрифт на{" "}
          <mark className="select">«Times New Roman»</mark>. Такой «багованный» шрифт
          также не реагирует на кнопки <mark className="select">«Bold»</mark> и{" "}
          <mark className="select">«Italic»</mark>.
        </p>
        <ArticleMedia
          caption="Проблема некорректного начертания на примере Cascadia Mono"
          src="legacy/aftereffects/font-reset_bug.mp4"
          type="video"
        />
        <Addition type="warning">
          Приведённые ниже способы не являются панацеей и лишь помогают исключить
          некоторые проблемы.
        </Addition>
        <ul>
          <li>
            Попробуйте переконвертировать шрифт в другой формат (например, из{" "}
            <mark className="file">TTF</mark> в <mark className="file">OTF</mark> или
            наоборот). Возможно, файл шрифта был создан с ошибками.
          </li>
          <li>
            Скачайте нужный шрифт из другого источника — например, с{" "}
            <a href="https://fonts.google.com/">Google Fonts</a>, предварительно удалив
            старый.
          </li>
          <li>
            <p>
              Если это не помогло, попробуйте переключить рендер на процессор в{" "}
              <mark className="select">«Project Settings»</mark> и очистить кэш через{" "}
              <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark>
              , а потом написать текст заново.
            </p>
            <Addition type="info">
              Очистка кэша никак не повлияет на ваши проекты: они не сломаются и не
              удалятся. Максимум, что придётся сделать после этого — закэшировать
              композицию заново.
            </Addition>
          </li>
          <li>
            Если шрифт работает нормально, но сбрасывается при попытке написать на
            кириллице — убедитесь, что он действительно поддерживает кириллицу. В
            противном случае найдите похожий шрифт с поддержкой кириллицы.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="multiple-instances"
        tag="несколько экземпляров, multiple instances, два окна, запуск, одновременно"
        title="Как открыть несколько копий программы и работать в разных проектах одновременно?"
      >
        <Addition type="danger">
          Запуск нескольких копий <mark className="app">Adobe After Effects</mark> может
          создать огромную нагрузку на «железо» и может привести к проблемам с
          производительностью программы и всей системы.
        </Addition>
        <p>
          Иногда возникает ситуация: один проект рендерится, а в это время нужно открыть
          другой и внести правки. По умолчанию{" "}
          <mark className="app">Adobe After Effects</mark> не позволяет запускать
          несколько экземпляров, но это ограничение можно обойти.
        </p>
        <ContentFilter
          macContent={
            <>
              <p>
                Чтобы открыть ещё один экземпляр, перейдите в папку с программой, нажмите{" "}
                <mark className="key">ПКМ</mark> по иконке{" "}
                <mark className="app">Adobe After Effects</mark> и выберите{" "}
                <mark className="select">«Показать содержимое пакета»</mark>. Затем
                откройте <mark className="path">Contents/MacOS</mark> и дважды щёлкните по
                исполняемому файлу <mark className="app">Adobe After Effects</mark>.
                Откроется терминал, а вместе с ним — ещё одна копия программы, в которой
                вы можете открыть другой проект и работать с ними.
              </p>
              <ArticleMedia
                src="k1x1goE2F10"
                type="youtube"
              />
            </>
          }
          windowsContent={
            <>
              <p>
                Чтобы снять это ограничение, добавьте ключ{" "}
                <mark className="code">-m</mark> в свойства ярлыка. Для этого откройте
                свойства ярлыка <mark className="app">Adobe After Effects</mark>,
                перейдите в конец строки <mark className="select">«Объект»</mark>,
                поставьте пробел и допишите <mark className="code">-m</mark>. После этого
                нажмите <mark className="select">«Применить»</mark> и закройте свойства
                ярлыка. Теперь этот ярлык позволит запускать несколько копий программы, в
                которых вы можете открыть разные проекты и работать с ними.
              </p>
              <ArticleMedia
                caption="Включение возможности открытия нескольких экземпляров"
                src="legacy/aftereffects/enable_multiple_ae_instances.mp4"
                type="video"
              />
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="secret-settings"
        tag="secret, preferences, отладка, скрытые настройки, disable layer cache"
        title="Что такое «секретные» настройки и как их открыть?"
      >
        <Addition type="danger">
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">26.0 (2026)</mark> и выше данные настройки были
          удалены.
        </Addition>
        <p>
          Разработчики оставили некоторые функции, спрятав их в «секретном» разделе{" "}
          <mark className="select">«Secret»</mark>. Правда, ничего особенно интересного
          для обычного пользователя там нет. Чтобы открыть секретные настройки, откройте
          любой раздел настроек <mark className="select">«Edit» → «Preferences»</mark>,
          удерживая клавишу <mark className="key">Shift</mark>. В появившемся окне слева
          появится раздел <mark className="select">«Secret»</mark>.
        </p>
        <Addition type="warning">
          Клавиша <mark className="key">Shift</mark> должна быть зажата до тех пор, пока
          окно с настройками не откроется.
        </Addition>
        <ArticleMedia
          caption="«Секретные» настройки программы"
          src="legacy/aftereffects/secret_settings.png"
          type="image"
        />
        <p>
          В последних версиях <mark className="app">Adobe After Effects</mark> там
          находится всего три настройки. Иногда отключение кэширования слоёв и
          автоматическая очистка кадров могут помочь, если вы сталкиваетесь с
          переполнением оперативной памяти при рендеринге.
        </p>
        <Addition type="danger">
          Изменение этих параметров может повлиять на стабильность программы. Настраивайте
          эти параметры на свой страх и риск.
        </Addition>
        <ul>
          <li>
            <mark className="select">«Disable Layer Cache»</mark> — отключает кэширование
            слоёв.
          </li>
          <li>
            <mark className="select">«Purge Every X Frames During Make Movie»</mark> —
            автоматически очищает память через каждый заданный параметр кадров при
            рендеринге.
          </li>
          <li>
            <mark className="select">«Ignore Sequence Rendering Errors»</mark> — позволяет
            программе игнорировать ошибки при рендеринге секвенций.
          </li>
        </ul>
      </DetailsSummary>
      <Addition type="info">
        Ответы на некоторые вопросы, связанные с интерфейсом, находятся в разделе{" "}
        <a href="#interface">«Интерфейс»</a>.
      </Addition>
    </div>
  );
};

export default AeFromNewbies;
