import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PrImport: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="import-workflow"
        tag="пайплайн, импорт, подготовка исходников, конвертация, монтажный кодек, shutter encoder, iphone, color space, frame rate"
        title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?"
      >
        <p>
          Прежде чем начать создавать секвенцию и импортировать файлы в{" "}
          <mark className="app">Adobe Premiere</mark>, вам стоит расположить все ваши
          исходники на отдельном диске, в разделе или папке, чтобы иметь к ним быстрый
          доступ, а не держать их на рабочем столе или в системных папках. Так вам будет
          проще работать с большим объёмом материала, особенно если вы собираете проект
          постепенно. <mark className="word">Структурирование</mark> — это основа{" "}
          дальнейшей работы.
        </p>
        <p>
          После первичной сортировки исходников стоит узнать о них получше: в каком кодеке
          и контейнере они запакованы, в каком цветовом пространстве записаны, сколько FPS
          у видеоисходника и прочие технические свойства. Для этого вы можете
          воспользоваться онлайн-сервисом{" "}
          <a href="https://mediaarea.net/MediaInfoOnline">MediaInfo Online</a> или его
          локальной версией <a href="https://mediaarea.net/en/MediaInfo">MediaInfo</a>,
          которая доступна для многих операционных систем.
        </p>
        <Addition type="info">
          Желательно для лучшего отображения информации в{" "}
          <mark className="app">MediaInfo</mark> использовать вид{" "}
          <mark className="select">«Tree»</mark> или воспользоваться консольной версией
          программы.
        </Addition>
        <p>
          В <mark className="app">MediaInfo</mark> можно узнать многое о ваших исходниках.
          Если ваш видеоисходник не скачан из площадок, например из{" "}
          <mark className="web">YouTube</mark>, записан с{" "}
          <mark className="term">Constant FPS</mark>, а цветовое пространство —{" "}
          <mark className="color-space">Rec.709</mark>, можно спокойно импортировать его в
          композицию и работать дальше.
        </p>
        <Addition type="warning">
          Но увы, не всегда такие исходники работают хорошо. Если проскакивают артефакты,
          отправляйте исходники на конвертацию.
        </Addition>
        <p>
          Если же у вас видео записано в <mark className="term">Variable FPS</mark>,
          цветовое пространство — <mark className="color-space">Rec.2020</mark>, да ещё и
          снято на iPhone, то исходники нужно перекодировать в обязательном порядке. Это
          также касается видео, полученных из видеохостингов типа{" "}
          <mark className="web">YouTube</mark>, <mark className="web">VK Видео</mark> и
          аналогичных. После корректной перекодировки вы избавите себя от проблем с
          цветами и неправильной интерпретацией частоты кадров, а также от артефактов,
          вызванных кривым кодированием до вас.
        </p>
        <ArticleMedia
          caption="Терминал — MediaInfo-CLI"
          src="legacy/mediainfo_example.png"
          type="image"
        />
        <p>
          Чтобы начать процесс перекодирования ваших исходников, вам нужно установить
          программу <a href="https://www.shutterencoder.com/">Shutter Encoder</a>,
          запустить и закинуть в неё ваши исходники, можно даже целую папку.
        </p>
        <Addition type="info">
          Чтобы скачать программу бесплатно, на сайте установите чекбокс{" "}
          <mark className="select">
            «I do not wish to participate in the development of the software»
          </mark>{" "}
          и затем нажмите на кнопку скачивания для вашей операционной системы.
        </Addition>
        <p>
          На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
          показаться сложным, но на самом деле это не так. Пользователю для
          перекодирования исходников нужно сделать лишь несколько действий.
        </p>
        <ArticleMedia
          caption="Shutter Encoder"
          src="legacy/shutter_encoder_interface.png"
          type="image"
        />
        <ul>
          <li>
            Для начала выберите кодек в <mark className="select">«Choose Function»</mark>.
            Чаще всего используют <mark className="video">Apple ProRes 422</mark>,{" "}
            <mark className="video">H.264</mark> или <mark className="video">DNXHR</mark>.
          </li>
          <li>
            <p>
              После выбора кодека определитесь с режимом кодирования. Для этого в правой
              части рядом с выбором битрейта есть кнопка, которая переключает кодировщик
              между режимами <mark className="select">«CBR»</mark>,{" "}
              <mark className="select">«VBR»</mark> или{" "}
              <mark className="select">«CQ»</mark>.
            </p>
            <Addition type="info">
              При кодировании в некоторые кодеки, в частности{" "}
              <mark className="video">Apple ProRes</mark>, этот параметр можно пропустить,
              из-за отсутствия режимов кодирования, так как там обычно используются
              стандартные шаблоны для битрейта.
              <ul>
                <li>
                  <mark className="codec-param">CBR</mark> — постоянный битрейт, хорошо
                  подходит для монтажа, но не очень для социальных сетей из-за большего
                  веса по сравнению с кодированием через VBR.
                </li>
                <li>
                  <mark className="codec-param">VBR</mark> — переменный битрейт, на разных
                  временных промежутках битрейт может изменяться. Плохо подходит для
                  монтажа из-за непредсказуемого качества, но хорошо подходит для передачи
                  видео или публикации в социальные сети.
                </li>
                <li>
                  <mark className="codec-param">CQ</mark> — метод, при котором качество
                  видео регулируется изменением уровня сжатия. Чем ниже значение, тем выше
                  качество, но больше размер файла. С помощью этого подхода можно достичь
                  оптимального баланса между качеством и размером.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            После выбора режима кодирования укажите рекомендуемое значение битрейта или
            квантования.
          </li>
          <li>
            Если цветовое пространство исходника отличается от{" "}
            <mark className="color-space">Rec.709</mark>, то в параметре{" "}
            <mark className="select">«Colorimetry»</mark> включите галочку{" "}
            <mark className="select">«Convert Colorspace»</mark>. Затем установите там
            первым значением ваш цветовой профиль, который был указан в{" "}
            <mark className="app">MediaInfo</mark>, а вторым значением —{" "}
            <mark className="color-space">Rec.709</mark>.
          </li>
          <li>
            Затем укажите битрейт для аудио, достаточно установить значение{" "}
            <mark className="copy">320</mark> Кбит/с в параметре{" "}
            <mark className="select">«Audio Bitrate»</mark>.
          </li>
          <li>
            <p>
              После настройки укажите путь для сохранения перекодированных файлов и
              нажмите на кнопку <mark className="select">«Start Function»</mark>.
            </p>
            <Addition type="info">
              Если у вас видеокарта от <mark className="hardware">NVIDIA</mark>, то не
              забудьте установить галочку в параметре{" "}
              <mark className="select">«Hardware Acceleration»</mark> и выбрать рядом
              параметр <mark className="select">«NVIDIA NVENC»</mark>.
            </Addition>
          </li>
        </ul>
        <p>
          После успешного перекодирования исходников вы можете их заменить в окне проекта.
          Для этого перейдите в <mark className="select">«Project»</mark>, выделите нужные
          исходники, нажмите на <mark className="key">ПКМ</mark> и нажмите на кнопку{" "}
          <mark className="select">«Replace Footage»</mark>. В открывшемся окне укажите
          путь до нового файла в системном файловом менеджере.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/replace_footage.png"
          type="image"
        />
        <p>
          Вот и всё, удачной работы с проектом! И да, лучше перекодировать, чем
          недокодировать и мучаться с возможными багами кривых исходников.
        </p>
        <Addition type="info">
          Более подробную информацию о рекомендуемом пайплайне ввода и вывода вы можете
          узнать в Telegram-посте{" "}
          <a href="https://t.me/montage_tutors/2">Montage Tutors</a>.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-artifacts"
        tag="зелёный экран, артефакты, глитчи, полосы, youtube, аппаратное декодирование"
        title="Как избавиться от артефактов при работе с исходниками?"
      >
        <p>
          Скорее всего, вы импортируете исходники, которые были загружены из интернета.
          Такое часто бывает при загрузке видео из <mark className="web">YouTube</mark> и
          последующем импорте в программу. Подобные сервисы перекодируют видео непонятно
          во что и непонятно по каким алгоритмам, поэтому их не рекомендуется использовать
          в дальнейшей работе.
        </p>
        <ArticleMedia
          caption="Артефакты кривых исходников из просторов интернета"
          src="legacy/h264_artifacts.webm"
          type="video"
        />
        <p>
          Чтобы с такими видео из интернета можно было спокойно работать, вам нужно
          перегнать ваши видео в удобоваримый кодек и формат для монтажа, например в{" "}
          <mark className="video">Apple ProRes 422</mark>, а затем заменить их в проекте.
          Да, это нормальный процесс и желательно так делать каждый раз, когда скачиваете
          видео с сервисов, которые любят пережимать для себя, но не для монтажёров.
          Перекодировать видео можно с помощью программ{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">HandBrake</mark> или{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <ArticleMedia
          caption="Shutter Encoder"
          src="legacy/convert_to_prores_shutterencoder.png"
          type="image"
        />
        <p>
          В редких случаях вы можете встретиться с багом, который «полосатит» изображения.
          Это баг встречался из-за кривых версий драйверов для видеокарт{" "}
          <mark className="hardware">NVIDIA</mark> с <mark className="term">55X</mark> до{" "}
          <mark className="term">56X</mark>. Для решения этой проблемы достаточно обновить
          драйвера на видеокарту.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-overexposed-video"
        tag="пересвет, айфон, яркость, цветовое пространство, рек709"
        title="Импортировал видео, а оно слишком засвеченное. Как исправить?"
      >
        <p>
          Скорее всего, вы импортировали видео, записанное на iPhone или на камеру в
          цветовом пространстве <mark className="term">HLG</mark>. Для решения цветовых
          проблем есть два способа.
        </p>
        <Divider>
          Включаем <mark className="select">Auto Tone Map Media</mark>
        </Divider>
        <p>
          В <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">23.2 (2023)</mark> и выше появилась возможность
          активировать коррекцию цвета для исходников с широким цветовым диапазоном. Чтобы
          его включить — перейдите в настройки нужной секвенции через{" "}
          <mark className="select">«Sequence» → «Sequence Settings»</mark> и активируйте
          опцию <mark className="select">«Auto Tone Map Media»</mark> в вкладке{" "}
          <mark className="select">«Color Management»</mark>.
        </p>
        <Addition type="info">
          При создании новых секвенций эта опция обычно включена по умолчанию.
        </Addition>
        <ArticleMedia
          caption="Sequence Settings"
          src="legacy/premierepro/enable_auto_tone_map.png"
          type="image"
        />
        <Divider>Перекодируем в другой цветовой профиль</Divider>
        <p>
          Или же, если результат от <mark className="select">«Auto Tone Map Media»</mark>{" "}
          не устраивает или этот параметр не помогает, то вам нужно все ваши исходники
          перекодировать из одного цветового пространства в другой. Какое цветовое
          пространство у ваших исходников — вы можете об этом узнать через{" "}
          <mark className="app">MediaInfo</mark>. Обычно через эту утилиту можно извлечь
          информацию о формате, FPS и цветовом пространстве вашего исходника.
        </p>
        <ArticleMedia
          caption="Терминал — MediaInfo-CLI"
          src="legacy/mediainfo_example.png"
          type="image"
        />
        <p>
          Чтобы начать перекодирование ваших исходников, вам нужно установить бесплатную
          <sup>1</sup> программу{" "}
          <a href="https://www.shutterencoder.com/">Shutter Encoder</a>. После установки
          просто запустите программу и перетащите в неё ваши файлы, можно даже целую
          папку.
        </p>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> Чтобы скачать <mark className="app">Shutter Encoder</mark>{" "}
              бесплатно, установите чекбокс{" "}
              <mark className="select">
                «I do not wish to participate in the development of the software»
              </mark>{" "}
              на <a href="https://www.shutterencoder.com/">сайте</a> и затем нажмите на
              кнопку скачивания образа утилиты для вашей операционной системы.
            </li>
            <li>
              В русской локализации <mark className="app">Shutter Encoder</mark> иногда
              встречается некорректный перевод некоторых элементов интерфейса, которые
              могут сбить вас с толку. Чтобы сменить язык интерфейса на английский,
              откройте настройки программы, нажав на иконку шестерёнки в левом верхнем
              углу. В открывшемся окне найдите параметр{" "}
              <mark className="select">«Установить язык»</mark>, измените его значение на{" "}
              <mark className="select">«English»</mark> и подтвердите перезапуск
              программы.
            </li>
          </ul>
        </Addition>
        <p>
          На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
          показаться сложным, но на самом деле это не так. Для перекодирования исходников
          вам нужно сделать всего несколько простых шагов.
        </p>
        <ArticleMedia
          caption="Shutter Encoder"
          src="legacy/shutter_encoder_interface.png"
          type="image"
        />
        <ul>
          <li>
            Сначала выберите кодек в <mark className="select">«Choose Function»</mark>.
            Обычно выбирают <mark className="video">Apple ProRes 422</mark>,{" "}
            <mark className="video">H.264</mark> или <mark className="video">DNXHR</mark>.
          </li>
          <li>
            <p>
              После выбора кодека определитесь с режимом кодирования. В правой части,
              рядом с выбором битрейта, есть кнопка, которая переключает кодировщик между
              режимами <mark className="select">«CBR»</mark>,{" "}
              <mark className="select">«VBR»</mark> или{" "}
              <mark className="select">«CQ»</mark>.
            </p>
            <Addition type="info">
              При кодировании в некоторые кодеки, например,{" "}
              <mark className="video">Apple ProRes</mark>, этот параметр можно пропустить,
              так как там обычно используются стандартные шаблоны для битрейта.
              <ul>
                <li>
                  <mark className="codec-param">CBR</mark> — это постоянный битрейт,
                  который хорошо подходит для монтажа, но не очень для социальных сетей
                  из-за большого размера файлов по сравнению с VBR.
                </li>
                <li>
                  <mark className="codec-param">VBR</mark> — это переменный битрейт,
                  который может изменяться в зависимости от временных промежутков. Он не
                  очень подходит для монтажа из-за непредсказуемого качества, но отлично
                  подходит для передачи видео или публикации в соцсетях.
                </li>
                <li>
                  <mark className="codec-param">CQ</mark> — это метод, при котором
                  качество видео регулируется изменением уровня сжатия. Чем ниже значение,
                  тем выше качество, но и размер файла больше. Этот подход позволяет
                  достичь оптимального баланса между качеством и размером.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            После выбора режима кодирования укажите рекомендуемое значение битрейта или
            квантования.
          </li>
          <li>
            Если цветовое пространство вашего исходника отличается от{" "}
            <mark className="color-space">Rec.709</mark>, то в параметре{" "}
            <mark className="select">«Colorimetry»</mark> включите галочку{" "}
            <mark className="select">«Convert Colorspace»</mark>. Затем установите первым
            значением ваш цветовой профиль, указанный в{" "}
            <mark className="app">MediaInfo</mark>, а вторым —{" "}
            <mark className="color-space">Rec.709</mark>.
          </li>
          <li>
            <p>
              После настройки укажите путь для сохранения перекодированных файлов и
              нажмите на кнопку <mark className="select">«Start Function»</mark>.
            </p>
            <Addition type="info">
              Если у вас видеокарта от <mark className="hardware">NVIDIA</mark>, не
              забудьте установить галочку в параметре{" "}
              <mark className="select">«Hardware Acceleration»</mark> и выбрать рядом
              параметр <mark className="select">«NVIDIA NVENC»</mark>.
            </Addition>
          </li>
        </ul>
        <p>
          После перекодирования исходников замените каждый в окне{" "}
          <mark className="select">«Project»</mark>, нажав{" "}
          <mark className="key">ПКМ</mark> по нужному исходнику и нажав на{" "}
          <mark className="select">«Replace Footage»</mark>. В открывшемся окне укажите
          путь до нового перекодированного исходника. При необходимости проделайте эти
          действия с остальными исходниками.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-media-offline"
        tag="media offline, медиаданные в автономном режиме, relink media, missing files"
        title="Что делать с «Media Offline» или «Медиаданные в автономном режиме»"
      >
        <p>
          Эта ошибка часто возникает, если вы удалили исходники из диска, перенесли их или
          открыли чужой проект, не распаковав его из архива полностью. Оно может
          появляться в разных воплощениях — в качестве окна о потерянных исходниках при
          запуске проекта или в качестве плейсхолдера с красной заливкой.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/медиаданные_в_автономном_режиме.png"
          type="image"
        />
        <p>
          Чтобы переподключить «потеряшек», перейдите в{" "}
          <mark className="select">«File»</mark> и нажмите на кнопку{" "}
          <mark className="select">«Link Media»</mark>. В открывшемся окне вы увидите
          список потерявшихся исходников. Вы можете выделить нужный и указать ему путь,
          нажав на <mark className="select">«Locate»</mark>.
        </p>
        <Addition type="info">
          Нажав на кнопку <mark className="select">«Search»</mark> в окне для указания
          пути, программа попытается найти все потерянные файлы во вложенных папках
          текущего пути. Если вы не помните где потеряли ваши файлы, откройте корень
          вашего диска, нажмите на кнопку поиска и подождите некоторое время. Также если
          вы укажете путь только одному файлу, рядом с которым лежат такие же «потеряшки»,
          то и остальные исходники вместе с ним подключатся автоматически.
        </Addition>
        <ArticleMedia
          caption="Media Offline"
          src="legacy/premierepro/missing_media.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="import-unsupported-formats"
        tag="autokroma influx"
        title="Как импортировать MKV, FLV, WEBM или другие неподдерживаемые форматы без конвертации?"
      >
        <p>
          <mark className="app">Adobe Premiere</mark> может не поддерживать некоторые
          кодеки, например <mark className="video">VP9</mark>,{" "}
          <mark className="video">AV1</mark>, а также контейнеры по типу{" "}
          <mark className="video">FLV</mark>, <mark className="video">MKV</mark> и прочие.
        </p>
        <p>
          Любая программа для монтажа и композитинга чего-угодно была изначально
          предназначена работать только с монтажным кодеком. Но в последнее время для
          упрощения работы <mark className="company">Adobe</mark> постепенно добавляет
          поддержку различных форматов, но всё ещё не все. Если у вас небольшой проект и
          нет желания заниматься перекодированием исходников, то вы можете попробовать
          плагин <a href="https://www.autokroma.com/Influx">Autokroma Influx</a>. Он
          облегчает импорт некоторых файлов, которые не поддерживаются в{" "}
          <mark className="app">Adobe Premiere</mark>,{" "}
          <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <Addition type="warning">
          Поскольку декодирование из немонтажных кодеков, а также через{" "}
          <mark className="plugin">Autokroma Influx</mark> работает не так, как хотелось
          бы, то вы можете столкнуться с некоторыми проблемами, например: появление
          различных артефактов, дёрганные кадры, искажённые цвета, долгий рендер или вовсе
          отсутствие изображения. Поэтому рекомендуется в следующий раз всё-таки
          перекодировать ваши исходники в монтажный кодек, например через{" "}
          <mark className="app">Shutter Encoder</mark>.
        </Addition>
        <p>
          Если вы сталкиваетесь с различными артефактами при использовании{" "}
          <mark className="plugin">Autokroma Influx</mark> или не хотите устанавливать
          сторонние плагины, то попробуйте всё же перекодировать ваши исходники через{" "}
          <mark className="app">MKVToolNix</mark>, <mark className="app">HandBrake</mark>{" "}
          или <mark className="app">Shutter Encoder</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="import-hevc"
        tag="iphone"
        title="Как открыть и импортировать HEIC, HEIF или HEVC?"
      >
        <p>
          Некоторые пользователи, использующие <mark className="app">Adobe Premiere</mark>{" "}
          на операционных системах Windows 10 или 11 могут столкнуться с проблемой
          открытия и импорта таких файлов, так как у них не установлены кодеки для работы
          с данными форматами изображений и видео. Казалось бы, достаточно их установить с{" "}
          <mark className="app">Microsoft Store</mark>, но увы. Один из кодеков платный, а
          другой — устанавливается неочевидно.
        </p>
        <p>
          Для того чтобы корректно открыть такие изображения и видео, вам нужно установить
          нужные кодеки. Для начала загрузки кодеков нужно посетить вам нужно установить
          нужные кодеки. Для их загрузки перейдите в{" "}
          <a href="https://store.rg-adguard.net/">генератор ссылок</a> из{" "}
          <mark className="app">Microsoft Store</mark>, а затем вставьте в сервис одну из
          ссылок ниже.
        </p>
        <ul>
          <li>
            Ссылка для скачивания кодека <mark className="image">HEIF/HEIC</mark>:{" "}
            <mark className="code">https://apps.microsoft.com/9pmmsr1cgpwg</mark>
          </li>
          <li>
            <p>
              Ссылка для скачивания кодека <mark className="video">HEVC</mark>:{" "}
              <mark className="code">https://apps.microsoft.com/9n4wgh0z6vhq</mark>
            </p>
            <Addition type="danger">
              <mark className="app">Adobe Premiere</mark> после установки кодеков всё ещё
              не будет импортировать видео с контейнером{" "}
              <mark className="video">HEVC</mark>. То есть если вы попробуете
              импортировать <mark className="video">HEVC</mark> в проект — вам скажут, что
              такой файл не поддерживается. Чтобы это исправить — попробуйте переименовать
              ваше видео в <mark className="video">MP4</mark> или перекодируйте видео в
              другой кодек через <mark className="app">Shutter Encoder</mark>.
            </Addition>
          </li>
        </ul>
        <ArticleMedia
          caption="Браузер"
          src="legacy/link_generator_msstore.png"
          type="image"
        />
        <p>
          После вставки ссылки и нажатия на кнопку <mark className="select">«OK»</mark>,
          нажмите на файл с форматом <mark className="file">APPXBUNDLE</mark> для его
          скачивания.
        </p>
        <Addition type="warning">
          Если браузер жалуется, мол вы скачиваете редкий файл или некий вирус, то
          проигнорируйте и продолжите скачивание дальше.
        </Addition>
        <p>
          Для установки пакетов с расширением <mark className="file">APPXBUNDLE</mark> -
          достаточно их открыть двойным кликом. Если вам предлагают открыть файл с помощью{" "}
          <mark className="app">Обработчика команд Windows</mark> или{" "}
          <mark className="app">Установщика приложений</mark>, то выберите то, что вам
          душе угодно. Я же предпочту установку через{" "}
          <mark className="app">Обработчик команд Windows</mark>.
        </p>
        <p>
          После успешной установки кодеков вы теперь сможете открыть файлы форматов{" "}
          <mark className="file">HEIF</mark>, <mark className="file">HEIC</mark> и{" "}
          <mark className="file">HEVC</mark> в различных видеоплеерах и просмотрщиков
          фото, например в <mark className="app">MPC-HC</mark> и{" "}
          <mark className="app">FastStone Image Viewer</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="import-ae-composition"
        tag="dynamic link, import ae composition, after effects в premiere, linked comp"
        title="Как импортировать композиции из Adobe After Effects в секвенцию?"
      >
        <Addition type="warning">
          Прежде чем начать импорт композиций из{" "}
          <mark className="app">Adobe After Effects</mark> — убедитесь что обе программы
          установлены на стандартном расположении и их версии являются «одногодками». При
          использовании разных версий программ у вас могут быть проблемы с подсоединением
          файлов и <mark className="plugin">Dynamic Link</mark>.
        </Addition>
        <p>
          Для того, чтобы импортировать композиции из{" "}
          <mark className="app">Adobe After Effects</mark> в{" "}
          <mark className="app">Adobe Premiere</mark> через{" "}
          <mark className="plugin">Dynamic Link</mark> — достаточно открыть окно импорта
          через комбинацию клавиш <mark className="key">Ctrl + I</mark> и указать там
          нужный <mark className="file">AEP</mark> файл.
        </p>
        <p>
          После выбора нужного <mark className="file">AEP</mark> файла — у вас откроется
          окно, в котором <mark className="app">Adobe Premiere</mark> подключится к{" "}
          <mark className="app">Adobe After Effects</mark> и через некоторое время выдаст
          вам список композиций. Вы можете выбрать одну или несколько композиций для
          импорта.
        </p>
        <p>
          После успешного импорта вы можете расположить композиции из{" "}
          <mark className="app">Adobe After Effects</mark> прямо на таймлайн в{" "}
          <mark className="app">Adobe Premiere</mark>.
        </p>
        <Addition type="info">
          Чтобы закэшировать предпросмотр в местах, где расположены композиции из{" "}
          <mark className="app">Adobe After Effects</mark> — перейдите в{" "}
          <mark className="select">«Sequence»</mark> и выберите{" "}
          <mark className="select">«Render In to Out»</mark>. Рекомендую поставить свою
          комбинацию клавиш для этого действия.
        </Addition>
        <Addition type="warning">
          <ul>
            <li>
              Версии приложений от <mark className="company">Adobe</mark>, активированные
              через <mark className="app">GenP</mark> могут некорректно работать друг с
              другом через <mark className="plugin">Dynamic Link</mark>. При возникновении
              проблем с работой <mark className="plugin">Dynamic Link</mark> —
              переустановите программы на репаки от <mark className="user">KpoJIuK</mark>{" "}
              или <mark className="user">m0nkrus</mark>.
            </li>
            <li>
              Не рекомендуется использовать слишком много композиций, импортированные
              через <mark className="plugin">Dynamic Link</mark>. Таким образом вы можете
              ухудшить производительность вашего проекта и заработать себе проблемы при
              экспорте секвенции. Если вы не планируете редактировать нужные композиции в
              дальнейшем — рекомендую отрендерить их в{" "}
              <mark className="app">Adobe After Effects</mark> и заменить их в секвенции{" "}
              <mark className="app">Adobe Premiere</mark>.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
    </div>
  );
};

export default PrImport;
