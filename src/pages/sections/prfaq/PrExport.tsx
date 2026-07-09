import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PrExport: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="export-mp4"
        tag="h264, h265, hevc, avc1, voukoder, aftercodecs"
        title="Как вывести секвенцию в MP4 и H.264/H.265?"
      >
        <p>
          Предположим, вы хотите вывести качественное видео с минимальным весом в кодеке{" "}
          <mark className="video">H.264</mark> или <mark className="video">H.265</mark>, а
          также в цветовом пространстве <mark className="color-space">Rec.709</mark>. Из{" "}
          <mark className="app">Adobe Premiere</mark> можно вывести тремя способами.
        </p>
        <ul>
          <li>
            Через встроенный кодек <mark className="plugin">H.264</mark>.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">Voukoder</mark>. Доступен
            только для Windows, поддержка устройств на macOS косвенно присутствует с
            <mark className="plugin">Voukoder Pro</mark>{" "}
            <mark className="version">2.0</mark> и выше, но мы его рассматривать не будем.
          </li>
          <li>
            Через сторонний плагин <mark className="plugin">AfterCodecs</mark>. Доступен
            для Windows и macOS, а также поддерживает достаточно много старых версий
            программы.
          </li>
        </ul>
        <Addition type="warning">
          Через кодеки <mark className="video">H.264</mark> и{" "}
          <mark className="video">H.265</mark> нельзя вывести видео с альфа-каналом, то
          есть с прозрачностью. Для вывода видео на прозрачном фоне воспользуйтесь
          форматом <mark className="video">QUICKTIME — Apple ProRes 4444</mark>.
        </Addition>
        <p>
          Для начала нужно разобраться, куда нажимать. Чтобы перейти к началу экспорта,
          откройте вкладку <mark className="select">«Export»</mark> или нажмите комбинацию
          клавиш <mark className="key">Ctrl + M</mark>.
        </p>
        <p>
          После этого вы переместитесь в полноэкранное окно настроек экспорта. В этой
          вкладке можно указать название файла, путь сохранения, формат и задать в других
          вкладках более детальные настройки. Также вы можете выбрать область для
          кодирования видео — всю секвенцию или только её часть.
        </p>
        <ArticleMedia
          caption="Интерфейс экспорта"
          src="legacy/premierepro/export_interface.png"
          type="image"
        />
        <Divider>
          Экспортируем через встроенный <mark className="video">H.264</mark>
        </Divider>
        <p>
          По умолчанию при открытии вкладки экспорта,{" "}
          <mark className="app">Adobe Premiere</mark> сам установит пресет для вывода в{" "}
          <mark className="video">H.264</mark> с переменным битрейтом с одним проходом
          примерно в 15 Мбит/с. Для социальных сетей таких параметров хватит.
        </p>
        <p>
          Если вам нужно изменить тип битрейта и скорость передачи данных, раскройте
          вкладку <mark className="select">«Video»</mark> и измените нужные параметры. Вам
          доступны изменение битрейта, частоты кадров, цветового профиля, включение
          эффектов и переключение между <mark className="select">«Software»</mark>- и{" "}
          <mark className="select">«Hardware»</mark>-кодированием. Чтобы изменить
          «заблокированные настройки», просто уберите флажок справа от нужного параметра.
        </p>
        <ArticleMedia
          caption="Настройки экспорта видео"
          src="legacy/premierepro/export_video_settings.mp4"
          type="video"
        />
        <p>
          Затем просто нажмите на кнопку <mark className="select">«Export»</mark> в правом
          нижнем углу и дождитесь окончания кодирования вашей секвенции.
        </p>
        <Divider>
          Экспортируем через <mark className="plugin">Voukoder</mark>
        </Divider>
        <p>
          Если же вас результат рендера от стандартного H.264 не устраивает, можно
          воспользоваться плагином <mark className="plugin">Voukoder</mark>. В этом
          примере мы рассмотрим плагин{" "}
          <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">версии 13.4.1</a>
          , не Pro-версию.
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Чтобы подключить плагин к <mark className="app">Adobe Premiere</mark>, нужно
              скачать и установить сам <mark className="plugin">Voukoder</mark> и{" "}
              <mark className="plugin">коннектор</mark> к нему. Для корректной установки
              плагина убедитесь, что вы не устанавливали{" "}
              <mark className="app">Adobe Premiere</mark> в нестандартное расположение.
            </li>
            <li>
              В этой статье используется версия{" "}
              <mark className="plugin">Voukoder Classic</mark>{" "}
              <mark className="version">13.4.1</mark>. К сожалению, исходный репозиторий
              на <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">GitHub</a>{" "}
              был удалён, поэтому последнюю классическую версию вы можете найти в{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">складе стройматериалов</a> по
              хештегу <mark className="tag">#voukoder</mark>. Демонстрируемая версия
              плагина <mark className="plugin">Voukoder</mark> недоступна для устройств с{" "}
              macOS.
            </li>
          </ul>
        </Addition>
        <p>
          Чтобы начать рендер с помощью <mark className="plugin">Voukoder</mark>, вам
          нужно снова перейти во вкладку <mark className="select">«Export»</mark> и в
          параметре <mark className="select">«Format»</mark> выбрать{" "}
          <mark className="select">«Voukoder»</mark>.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/selecting_voukoder.png"
          type="image"
        />
        <p>
          Чтобы перейти в настройки плагина, вам нужно раскрыть вкладку{" "}
          <mark className="select">«Voukoder»</mark> и нажать на кнопку{" "}
          <mark className="select">«Configure»</mark>.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/open_voukoder_settings.png"
          type="image"
        />
        <p>
          После открытия настроек нам нужно выбрать кодек, в который мы хотим
          экспортировать видео. В основном для вывода видео и его корректного открытия на
          многих современных устройствах используется кодек{" "}
          <mark className="video">H.264</mark>. Но можно и воспользоваться{" "}
          <mark className="video">HEVC (H.265)</mark>, если вам нужно примерно сохранить
          качество видео с меньшим объёмом файла. Кодеки{" "}
          <mark className="video">AV1</mark> и <mark className="video">VP9</mark> для
          вывода из <mark className="app">Adobe After Effects</mark> используются редко, а
          если уж и надо вывести в таком формате, то проще переконвертировать видео позже
          через условный <a href="https://www.shutterencoder.com/">Shutter Encoder</a>.
          Теперь поговорим и о приставках в названиях кодеков.
        </p>
        <Addition type="info">
          Варианты кодирования показаны на устройстве со связкой процессора{" "}
          <mark className="hardware">AMD</mark> и видеокарты{" "}
          <mark className="hardware">NVIDIA</mark>. Выбор у вас может отличаться в
          зависимости от вашего железа.
        </Addition>
        <ul>
          <p>
            Для вариантов <mark className="video">H.264</mark> и{" "}
            <mark className="video">H.265</mark> есть три варианта для кодирования.
          </p>
          <li>
            <mark className="video">x264</mark> или <mark className="video">x265</mark>{" "}
            используется для кодирования видео на процессоре без дополнительного
            использования видеокарты. Стабильно, но не всегда быстро.
          </li>
          <li>
            <mark className="select">«NVIDIA NVENC»</mark> используется для кодирования
            видео с использованием видеокарты <mark className="hardware">NVIDIA</mark>.
            Может ускорить процесс рендера, но не гарантирует 100% использование
            видеокарты.
          </li>
          <li>
            <mark className="select">«AMD AMF»</mark> — то же самое, что и предыдущий
            параметр, но на встроенном видеочипе <mark className="hardware">AMD</mark>.
          </li>
        </ul>
        <ArticleMedia
          caption="Voukoder 13.4.1"
          src="legacy/premierepro/select_codec_in_voukoder.png"
          type="image"
        />
        <p>
          После выбора нужного нам кодека (я выбрал{" "}
          <mark className="video">H.264 (NVIDIA NVENC)</mark>), нужно перейти во вкладку{" "}
          <mark className="select">«Параметры»</mark>. В этой вкладке можно указать
          качество желаемого видео. По умолчанию там уже стоит то, что нам нужно, а именно
          параметр квантования и его фактор. <mark className="codec-param">CQP</mark> или{" "}
          <mark className="code">CRF</mark> — это некий эквивалент качества, чем меньше —
          тем лучше качество, но больше вес.
        </p>
        <ArticleMedia
          caption="Voukoder 13.4.1"
          src="legacy/premierepro/codec_parameter_voukoder.png"
          type="image"
        />
        <ul>
          <li>
            <p>
              Значения <mark className="copy">23</mark> или{" "}
              <mark className="copy">25</mark> хватит с головой для экспорта видео в
              YouTube, VK Видео и подобные видеоплощадки.
            </p>
            <Addition type="info">
              Учтите, что многие видеоплощадки всё равно будут сжимать видео по-своему,
              чтобы уместить их у себя на серверах.
            </Addition>
          </li>
          <li>
            Если вам нужно почти максимальное качество, тогда укажите значение квантования{" "}
            <mark className="vesrion">17</mark> или <mark className="vesrion">20</mark>. В
            таком случае вес файла заметно возрастёт.
          </li>
          <li>
            <p>
              Если вы хотите получить видео с хорошим соотношением качество/минимальный
              вес, тогда укажите значение <mark className="copy">30</mark>. Можете
              поэкспериментировать со значением в большую или меньшую сторону.
            </p>
            <Addition type="warning">
              Экстремальные значения, например <mark className="copy">50</mark>, не
              рекомендуется использовать, так как можете получить кашу из кадров на
              выходе.
            </Addition>
          </li>
        </ul>
        <p>
          Дальше в <mark className="plugin">Voukoder</mark> нам ничего не нужно
          настраивать. При необходимости вы можете изменить другие параметры в окне
          экспорта и начать экспорт с помощью кнопки{" "}
          <mark className="select">«Export»</mark>.
        </p>
        <Divider>
          Экспортируем через <mark className="plugin">AfterCodecs</mark>
        </Divider>
        <p>
          Теперь поговорим и про <mark className="plugin">AfterCodecs</mark>. Для начала
          экспорта через <mark className="plugin">AfterCodecs</mark> нам нужно снова
          вернуться во вкладку <mark className="select">«Export»</mark> и выбрать в
          параметре <mark className="select">«Format»</mark> значение{" "}
          <mark className="select">«AfterCodecs»</mark>.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/selecting_aftercodecs.png"
          type="image"
        />
        <p>
          Чтобы перейти в настройки <mark className="plugin">AfterCodecs</mark>, раскройте
          вкладку <mark className="select">«Video Settings»</mark> и нажмите на кнопку{" "}
          <mark className="select">«AfterCodecs Settings»</mark>.
        </p>
        <Addition type="info">
          По умолчанию в <mark className="plugin">AfterCodecs</mark> стоит контейнер{" "}
          <mark className="video">MOV</mark>. Так как мы в этой статье экспортируем видео
          в <mark className="video">MP4</mark>, то и указать нужно соответствующий
          контейнер для вывода.
        </Addition>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/change_format_open_aftercodecs_settings.png"
          type="image"
        />
        <p>
          В открывшемся окне мы снова видим кучу непонятных параметров. Здесь нам нужно
          указать качество и скорость кодирования видео.
        </p>
        <ul>
          <li>
            В параметре <mark className="select">«Tradeoff»</mark> мы можем указать три
            варианта, на что ориентироваться при кодировании: на процент качества (похож
            на метод квантования CQP), на желаемый битрейт или на желаемый размер файла
            (не рекомендуется при повседневном использовании).
          </li>
          <li>
            Значение для скорости кодирования <mark className="select">«Speed»</mark>{" "}
            можно поставить <mark className="copy">2</mark> или{" "}
            <mark className="copy">4</mark>.
          </li>
          <li>
            В разделе <mark className="select">«Colors»</mark> можно изменить битность и
            цветовой диапазон. Обычно там значения меняют редко.
          </li>
          <li>
            В <mark className="select">«Audio»</mark> лучше указать значение{" "}
            <mark className="copy">512</mark> вместо{" "}
            <mark className="select">«Auto»</mark>, чтобы вывести звук без сильной потери
            качества.
          </li>
          <Addition type="warning">
            Параметры <mark className="select">«Tuning»</mark>,{" "}
            <mark className="select">«H.264 Profiles»</mark>,{" "}
            <mark className="select">«GOP»</mark>,{" "}
            <mark className="select">«Audio Bitrate»</mark>,{" "}
            <mark className="select">«VR Meta»</mark> и{" "}
            <mark className="select">«Fast Start»</mark> лучше не менять без острой
            необходимости!
          </Addition>
        </ul>
        <ArticleMedia
          caption="AfterCodecs 1.11.5 for Adobe Premiere Pro"
          src="legacy/premierepro/aftercodecs_settings.png"
          type="image"
        />
        <p>
          После завершения настроек мы нажимаем <mark className="select">«OK»</mark> и
          начинаем рендер как обычно, через кнопку{" "}
          <mark className="select">«Export»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="export-web"
        tag="видео с прозрачностью, webm, vp9, av1, h265, alpha channel"
        title="Как вывести секвенцию в WEBM и VP9?"
      >
        <p>
          Стандартными средствами из <mark className="app">Adobe Premiere</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> нельзя вывести композицию в{" "}
          <mark className="video">WEBM</mark>, но можно вывести в другом формате и
          переконвертировать его.
        </p>
        <Addition type="danger">
          Крайне не рекомендую использовать плагин{" "}
          <a href="https://fnord.com/">WEBM от fnord</a> для экспорта из{" "}
          <mark className="app">Adobe Premiere</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>, так как он часто выводит видео
          на прозрачном фоне с жуткими артефактами.
        </Addition>
        <Divider>Экспортируем секвенцию в удобном формате</Divider>
        <p>
          Для начала нам нужно вывести секвенцию как обычно, через{" "}
          <mark className="video">Apple ProRes 4444</mark>, если вы хотите видео с
          альфа-каналом или в <mark className="video">Apple ProRes 422</mark>, если вы
          хотите видео без альфа-канала. Ну или вообще вывести в ваш любимый формат, так
          как полученное видео мы всё равно будем конвертировать. Чтобы это сделать, нам
          нужно перейти во вкладку <mark className="select">«Export»</mark> с помощью
          комбинации клавиш <mark className="key">Ctrl + M</mark>.
        </p>
        <p>
          После перехода во вкладку экспорта выбираем в параметре{" "}
          <mark className="select">«Format»</mark> значение{" "}
          <mark className="select">«QuickTime»</mark>. Затем раскройте вкладку{" "}
          <mark className="select">«Video»</mark> и в параметре{" "}
          <mark className="select">«Video Codec»</mark> укажите нужный кодек в зависимости
          от ваших требований.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/export_prores4444_8bit-alpha.png"
          type="image"
        />
        <Addition type="warning">
          Не забудьте поставить в <mark className="select">«Depth»</mark> параметр{" "}
          <mark className="select">«8-bpc + alpha»</mark> или{" "}
          <mark className="select">«16-bpc + alpha»</mark>, если вы собираетесь выводить
          видео с альфа-каналом.
        </Addition>
        <p>
          Затем не забудьте указать путь, куда вы хотите вывести видео и нажмите на кнопку{" "}
          <mark className="select">«Export»</mark> в правом нижнем углу. После экспорта вы
          сможете воспользоваться этим видео в последующем монтаже видео или где-нибудь
          ещё.
        </p>
        <Divider>
          Конвертируем в <mark className="video">WEBM</mark> с помощью{" "}
          <mark className="app">Shutter Encoder</mark>
        </Divider>
        <p>
          После успешного экспорта открываем <mark className="app">Shutter Encoder</mark>{" "}
          и вставляем в него выведенное видео из{" "}
          <mark className="app">Adobe Premiere</mark>. В параметре{" "}
          <mark className="select">«Choose Function»</mark> выбираем{" "}
          <mark className="video">VP9</mark>.
        </p>
        <Addition type="info">
          Если у вас не установлен <mark className="app">Shutter Encoder</mark>, то его
          можно скачать по <a href="https://www.shutterencoder.com/">этой</a> ссылке.
        </Addition>
        <ArticleMedia
          caption="Shutter Encoder"
          src="legacy/select_vp9_shutter_encoder.png"
          type="image"
        />
        <p>
          Затем включаем в дополнительных опциях{" "}
          <mark className="select">«Enable alpha channel»</mark>, если вы хотите вывести
          видео с альфа-каналом.
        </p>
        <ArticleMedia
          caption="Shutter Encoder"
          src="legacy/enable_alpha_shutter_encoder.png"
          type="image"
        />
        <p>
          В программе можно также выставить путь для файла (по умолчанию видео кодируется
          в папку, где был исходник) и остальные параметры, если вам это нужно. После
          настроек нажимаем на кнопку <mark className="select">«Start function»</mark> или
          на комбинацию клавиш <mark className="key">Ctrl + Enter</mark>.
        </p>
        <p>
          После экспорта вы получите видео в кодеке <mark className="video">VP9</mark> и
          контейнере <mark className="video">WEBM</mark>, которое можно использовать в
          веб-проектах или где-нибудь ещё.
        </p>
        <Addition type="warning">
          Имейте в виду, что поддержка <mark className="video">WEBM</mark> на прозрачном
          фоне в <mark className="app">Safari</mark> для устройств на iOS и macOS
          отсутствует, там будет отображаться чёрный фон вместо прозрачности.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="export-gif"
        tag="сохранить анимированную гифку, gifgun, ezgif, animated gif"
        title="Как вывести секвенцию в GIF?"
      >
        <p>
          Из <mark className="app">Adobe Premiere</mark> вывести ваш ролик в формат{" "}
          <mark className="image">GIF</mark> можно тремя способами.
        </p>
        <Addition type="info">
          Если вы собираетесь выводить секвенцию в <mark className="image">GIF</mark> для
          веб-страницы, то советую лучше вывести в формат{" "}
          <mark className="video">WEBM</mark>. Он лучше подходит для получения
          качественного изображения с маленьким размером.
        </Addition>
        <ul>
          <li>
            Вывести <mark className="image">GIF</mark> напрямую из{" "}
            <mark className="app">Adobe Premiere</mark>, указав формат{" "}
            <mark className="select">«Animated GIF»</mark> во вкладке{" "}
            <mark className="select">«Export»</mark>.
          </li>
          <li>
            Либо вывести <mark className="image">GIF</mark> через{" "}
            <del className="article-note-muted">упаси боже</del>{" "}
            <mark className="plugin">Media Encoder</mark>.
          </li>
          <li>
            С помощью конвертации вашего видео через онлайн-сервис{" "}
            <a href="https://ezgif.com/video-to-gif">Ezgif</a>. Он даёт самый адекватный
            результат по соотношению качество/размер файла.
          </li>
        </ul>
        <Addition type="warning">
          <p>
            У формата <mark className="image">GIF</mark> есть множество ограничений и
            нюансов.
          </p>
          <ul>
            <li>
              Данный формат не поддерживает полупрозрачность, только два цвета для
              альфа-канала: <mark className="code">#FFFFFF</mark> и{" "}
              <mark className="code">#000000</mark>.
            </li>
            <li>
              <mark className="image">GIF</mark> вмещает в себя только 256 цветов, поэтому
              забудьте о плавных градиентах и качественном цвете.
            </li>
            <li>
              Полученный файл может быть огромным по весу, если указать большое разрешение
              или FPS. Максимально рекомендуемо использовать разрешение 1024×576 и 15 FPS
              для секвенций с соотношением сторон 16:9.
            </li>
          </ul>
        </Addition>
        <Divider>
          Экспортируем из <mark className="app">Adobe Premiere</mark>
        </Divider>
        <p>
          Для начала экспорта <mark className="image">GIF</mark> напрямую из{" "}
          <mark className="app">Adobe Premiere</mark> вам нужно перейти во вкладку{" "}
          <mark className="select">«Export»</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Затем выберите в параметре{" "}
          <mark className="select">«Format»</mark> значение{" "}
          <mark className="select">«Animated GIF»</mark> и не забудьте указать путь для
          вывода файла.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/selecting_animated_gif.png"
          type="image"
        />
        <Addition type="warning">
          Если вы выберете в качестве формата параметр{" "}
          <mark className="select">«GIF»</mark> без слова{" "}
          <mark className="select">«Animated»</mark>, то вы получите только кадры
          отдельными изображениями формата <mark className="image">GIF</mark> и забьёте
          себе папку для сохранения.
        </Addition>
        <p>
          После завершения настроек просто нажмите на кнопку{" "}
          <mark className="select">«Export»</mark> в правом нижнем углу экрана, и вы
          получите в нужном месте нужный файл.
        </p>
        <Divider>
          Экспортируем из <mark className="app">Adobe Media Encoder</mark>
        </Divider>
        <p>
          <mark className="image">GIF</mark> можно ещё получить с помощью{" "}
          <mark className="app">Adobe Media Encoder</mark>. Хоть мы и отговариваем от его
          использования, но если вам нужно вывести много изображений формата{" "}
          <mark className="image">GIF</mark>, то он подойдёт лучше.
        </p>
        <p>
          Для того чтобы начать экспорт через{" "}
          <mark className="app">Adobe Media Encoder</mark>, перейдите в{" "}
          <mark className="select">«File» → «Export»</mark> и нажмите на{" "}
          <mark className="select">«Add to Adobe Media Encoder Queue»</mark> или нажмите
          на комбинацию клавиш <mark className="key">Alt + Shift + M</mark> и подождите,
          когда откроется вторая программа.
        </p>
        <Addition type="info">
          Секвенция из <mark className="app">Adobe Premiere</mark> корректно отправится в{" "}
          <mark className="app">Adobe Media Encoder</mark> только в том случае, если у вас
          установлен одинаковый год программ и на стандартном расположении программ. В
          противном случае вам выбьют ошибку о том, что{" "}
          <mark className="app">Adobe Media Encoder</mark> не установлен.
        </Addition>
        <p>
          После открытия <mark className="app">Adobe Media Encoder</mark> укажите формат{" "}
          <mark className="image">ANIMATED GIF</mark> в очереди экспорта. Там же вы можете
          указать пресет и путь к выходному файлу. Для детальной настройки вы можете
          открыть <mark className="select">«Export Settings»</mark>, нажав по названию
          стандартного пресета. Там же вы можете указать разрешение, FPS и другие
          параметры.
        </p>
        <ArticleMedia
          caption="Media Encoder"
          src="legacy/premierepro/selecting_animated_gif_media_encoder.png"
          type="image"
        />
        <Addition type="warning">
          Если вы выберете в качестве формата параметр{" "}
          <mark className="select">«GIF»</mark> без слова{" "}
          <mark className="select">«Animated»</mark>, то вы получите только кадры
          отдельными изображениями формата <mark className="image">GIF</mark> и забьёте
          себе папку для сохранения.
        </Addition>
        <p>
          После настройки просто нажмите на кнопку <mark className="select">«OK»</mark> и
          нажмите на зелёную иконку для начала экспорта. После этого в месте, куда вы
          указали путь, появится файл формата <mark className="image">GIF</mark>.
        </p>
        <Divider>
          Конвертируем через <mark className="app">Ezgif</mark>
        </Divider>
        <p>
          Если вы не хотите возиться с экспортом или у вас уже есть готовое видео, которое
          надо лишь перегнать в формат <mark className="image">GIF</mark>, то советую
          онлайн-сервис <a href="https://ezgif.com/video-to-gif">Ezgif</a>. При
          конвертации через этот сервис вы получите <mark className="image">GIF</mark> с
          отличным соотношением качества и размера файла.
        </p>
        <p>
          Для начала конвертации просто загрузите ваше видео в сервис, а затем нажмите на
          кнопку <mark className="select">«Upload Video»</mark>.
        </p>
        <ArticleMedia
          caption="Ezgif"
          src="legacy/ezgif_main.png"
          type="image"
        />
        <Addition type="warning">
          Максимальный размер файла, который можно загрузить в сервис, не должен превышать{" "}
          200 МБ. Максимальная длина не должна превышать 60 секунд для конвертации в 5 FPS
          или 15 секунд для конвертации в 20 FPS.
        </Addition>
        <p>
          После загрузки видео вы сможете настроить FPS и нужное разрешение. Выбор из
          настроек, мягко говоря, не очень широкий, но для простой конвертации хватает.
          Если вы настроили всё, что вам нужно, то просто нажмите на кнопку{" "}
          <mark className="select">«Convert to GIF!»</mark>.
        </p>
        <ArticleMedia
          caption="Ezgif"
          src="legacy/ezgif_settings.png"
          type="image"
        />
        <p>
          Далее после успешной конвертации вы получите ваше видео в формате{" "}
          <mark className="image">GIF</mark> чуть ниже, в разделе{" "}
          <mark className="select">«Output GIF Animation»</mark>, которое можно сохранить
          по нажатию <mark className="key">ПКМ</mark> →{" "}
          <mark className="select">«Сохранить изображение как...»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="export-prores"
        tag="prores 4444, prores 422, quicktime, видео с прозрачностью, alpha channel"
        title="Как вывести секвенцию с альфа-каналом, то есть с прозрачностью?"
      >
        <Addition type="warning">
          В <mark className="video">H.264</mark> и <mark className="video">MP4</mark>{" "}
          нельзя вывести композицию с альфа-каналом. Это можно сделать только на
          устройствах с macOS и при использовании кодека{" "}
          <mark className="video">H.265 (HEVC)</mark>.
        </Addition>
        <p>
          Прежде чем начать вывод секвенции с прозрачностью, убедитесь в том, что сама
          прозрачность у вас существует. Без этого никак. Чтобы проверить прозрачные
          участки в видео, нажмите на иконку гаечного ключа в окне{" "}
          <mark className="select">«Program Monitor»</mark> и выберите в меню параметр{" "}
          <mark className="select">«Transparency Grid»</mark>. Эта опция подставляет сетку
          в виде шахматной доски для отображения прозрачных частей в секвенции.
        </p>
        <ArticleMedia
          caption="Program Monitor"
          src="legacy/premierepro/toggle_transparency_grid.png"
          type="image"
        />
        <p>
          Если всё с этим в порядке, то пора переходить во вкладку{" "}
          <mark className="select">«Export»</mark>, нажав на комбинацию клавиш{" "}
          <mark className="key">Ctrl + M</mark>. Затем выберите в{" "}
          <mark className="select">«Format»</mark> параметр{" "}
          <mark className="select">«QuickTime»</mark> и в{" "}
          <mark className="select">«Depth»</mark> выберите{" "}
          <mark className="select">«8-bpc + Alpha»</mark> или{" "}
          <mark className="select">«16-bpc + Alpha»</mark>, если вам нужно вывести видео с
          большей битностью.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/export_prores4444_8bit-alpha.png"
          type="image"
        />
        <p>
          Затем укажите путь для вывода файла и нажмите на кнопку{" "}
          <mark className="select">«Export»</mark> в правом нижнем углу. После экспорта вы
          сможете воспользоваться этим видео в последующем монтаже или где-нибудь ещё.
        </p>
        <Addition type="info">
          Если вы хотите посмотреть такое видео, но у вас оно не открывается стандартным
          плеером, то вам нужно установить сторонний видеоплеер, например{" "}
          <mark className="app">VLC</mark> или <mark className="app">MPC-HC</mark>.
          Учтите, что не все видеопроигрыватели корректно отображают видео с
          альфа-каналом.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="save-export-preset"
        title="Как сохранить свой шаблон с настройками для экспорта секвенций?"
      >
        <p>
          Вы, наверное, не раз замечали параметр <mark className="select">«Preset»</mark>{" "}
          в окне экспорта и задумывались, можно ли добавить свои? Да, в{" "}
          <mark className="app">Adobe Premiere</mark> можно добавить свои надстройки,
          чтобы в дальнейшем не перенастраивать экспорт.
        </p>
        <p>
          Для этого перейдите во вкладку <mark className="select">«Export»</mark> и
          начните там настраивать экспорт под себя. После того, как вы закончили — нажмите
          на три точки рядом с параметром <mark className="select">«Preset»</mark> и в
          контекстном меню нажмите на <mark className="select">«Save Preset»</mark>. В
          открывшемся меню введите название вашего будущего пресета и нажмите на{" "}
          <mark className="select">«OK»</mark>.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/create_custom_preset.mp4"
          type="video"
        />
        <p>
          После этого вы сможете воспользоваться своими заготовленными настройками
          экспорта в дальнейшем. Чтобы удалить, импортировать пресеты или сохранить их
          отдельным файлом, воспользуйтесь окном{" "}
          <mark className="select">«Preset Manager»</mark>, которая открывается через три
          точки у <mark className="select">«Preset»</mark> и выбрать там{" "}
          <mark className="select">«More Presets»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="export-still"
        tag="кадр, изображение, скриншот, jpg, png, psd, превью, still"
        title="Как вывести текущий кадр предпросмотра как файл изображения?"
      >
        <p>
          Для экспорта текущего кадра предпросмотра достаточно нажать на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + E</mark> или нажать на иконку фотоаппарата
          в <mark className="select">«Program Monitor»</mark>.
        </p>
        <ArticleMedia
          caption="Program Monitor"
          src="legacy/premierepro/export_frame_program_monitor.png"
          type="image"
        />
        <p>
          Затем в открывшемся окне выберите формат и путь для сохранения изображения, а
          потом нажмите на <mark className="select">«OK»</mark>.
        </p>
        <ArticleMedia
          caption="Export Frame"
          src="legacy/premierepro/export_frame.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="export-sequence"
        title="Как вывести все кадры секвенции как отдельные файлы изображений?"
      >
        <p>
          Если вы хотите вывести все кадры из секвенции в отдельные файлы, то вам
          достаточно выбрать в качестве способа вывода <mark className="image">JPG</mark>,{" "}
          <mark className="image">PNG</mark>, <mark className="image">TIFF</mark> или
          любой другой формат изображений.
        </p>
        <p>
          Для начала, как всегда, нам нужно перейти во вкладку{" "}
          <mark className="select">«Export»</mark> и выбрать в параметре{" "}
          <mark className="select">«Format»</mark> нужный нам тип файла.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/select_png_export.png"
          type="image"
        />
        <Addition type="info">
          Если вы хотите вывести кадры с прозрачностью — не забудьте указать параметр{" "}
          <mark className="select">«Include Alpha Channel»</mark>.
        </Addition>
        <p>
          Затем не забудьте создать новую пустую папку, куда вы хотите экспортировать все
          кадры, и указать её в качестве пути для вывода.{" "}
          <mark className="app">Adobe Premiere</mark> не создаёт автоматически подпапку
          для секвенции изображений, как это делает{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <p>
          После этого просто нажимаем на кнопку <mark className="select">«Export»</mark>.
          Вот и всё, все кадры из вашей секвенции сохранятся в нужную папку.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="export-only-work-area"
        tag="рабочая область, настройки рендера, длина секвенции, таймлайн"
        title="Как экспортировать всю длину секвенции или только её часть?"
      >
        <p>
          Прежде чем начать экспорт части секвенции, вам нужно поставить точки входа на
          таймлайне с помощью кнопок <mark className="key">I</mark> и{" "}
          <mark className="key">O</mark>. Это позволит вам создать область, в пределах
          которой мы можем начать экспорт.
        </p>
        <Addition type="info">
          Чтобы очистить рабочую область, нажмите на комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + X</mark>.
        </Addition>
        <p>
          Затем нам нужно перейти во вкладку <mark className="select">«Export»</mark> и в
          параметре <mark className="select">«Range»</mark> под окном предпросмотра
          указать область рендера секвенции. Нам предлагают четыре варианта на выбор.
        </p>
        <ArticleMedia
          caption="Export"
          src="legacy/premierepro/select_export_range.png"
          type="image"
        />
        <ul>
          <li>
            <mark className="select">«Entire Source»</mark> позволяет вывести секвенцию по
            всей её длине. В данной ситуации нам это не подходит.
          </li>
          <li>
            <mark className="select">«Source In/Out»</mark> позволяет вывести секвенцию по
            меткам начала и конца, или же входа и выхода, отмеченная с помощью кнопок{" "}
            <mark className="key">I</mark> и <mark className="key">O</mark>. То, что там
            нужно.
          </li>
          <li>
            <mark className="select">«Work Area»</mark> позволяет вывести секвенцию по
            размеру рабочей области. По умолчанию рабочая область скрыта, и её можно
            активировать, нажав на три полоски в заголовке таймлайна и выбрав{" "}
            <mark className="select">«Work Area Bar»</mark>. В данной ситуации тоже может
            подойти, но он менее удобен.
          </li>
          <li>
            <mark className="select">«Custom»</mark> позволяет вывести секвенцию по длине,
            указанным под окном предпросмотра в вкладке{" "}
            <mark className="select">«Export»</mark>. Подходит, если вы не хотите ставить
            метки In/Out на вашем таймлайне.
          </li>
        </ul>
        <p>
          После настройки области экспорта не забудьте настроить остальные параметры
          экспорта под ваши нужны и нажать на кнопку{" "}
          <mark className="select">«Export»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="collect-files"
        tag="сбор проекта, collect files, project manager"
        title="Я сделал работу, но мне нужно передать .PRPROJ вместе с исходниками другому человеку. Возможно ли это сделать без танцев с бубном?"
      >
        <p>
          Да, возможно. Это можно сделать через{" "}
          <mark className="select">«Project Manager»</mark>, который находится в параметре{" "}
          <mark className="select">«File»</mark> контекстного меню.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/file_project_manager.png"
          type="image"
        />
        <p>
          После открытия окна <mark className="select">«Project Manager»</mark> вы можете
          увидеть список ваших секвенций. В этом списке вы можете выбрать все секвенции
          для экспорта или оставить только нужные. Также не забудьте указать нужный путь
          до файла, нажав на кнопку <mark className="select">«Browse»</mark> в параметре{" "}
          <mark className="select">«Destination Path»</mark>. В разделе{" "}
          <mark className="select">«Options»</mark> вы можете указать, сохранять ли файлы
          предпросмотра или неиспользуемые исходники и прочие параметры.
        </p>
        <p>
          Чтобы начать сохранение проекта вместе с исходниками, достаточно нажать на{" "}
          <mark className="select">«OK»</mark> в правом нижнем углу и дождаться окончания
          операции. Убедитесь в том, что у вас включен параметр{" "}
          <mark className="select">«Collect Files and Copy to New Location»</mark>.
        </p>
        <ArticleMedia
          caption="Project Manager"
          src="legacy/premierepro/project_manager.png"
          type="image"
        />
        <ContentFilter
          macContent={
            <>
              <p>
                После окончания сборки файлов, перейдите в папку, куда вы сохранили проект
                и создайте архив с помощью <a href="https://www.keka.io/ru/">keka</a>.
                Если площадка или социальная сеть, в которой вы пытаетесь поделиться
                архивом, вставляет палки в колёса в виде ограничений на размер файла — вы
                сможете разделить архив на определённый размер файла перед его созданием и
                отправить его другому человеку по кусочкам. После создания архива,
                отправьте его другому человеку любым удобным для вас способом.
              </p>
              <div className="article-media-gallery-grid">
                <ArticleMedia
                  caption="Выбор формата архива"
                  src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/main-window-format.gif"
                  type="image"
                />
                <ArticleMedia
                  caption="Выбор размера разделения архива"
                  src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/main-window-split.gif"
                  type="image"
                />
              </div>
              <Addition type="info">
                Подробнее о создании архивов через{" "}
                <a href="https://www.keka.io/ru/">Keka</a> вы можете прочесть на{" "}
                <a href="https://github.com/aonez/Keka/wiki/Compressing-with-Keka">
                  этой странице
                </a>
                .
              </Addition>
            </>
          }
          windowsContent={
            <>
              <p>
                После окончания сборки файлов, перейдите в папку, куда вы сохранили проект
                и создайте архив с помощью{" "}
                <a href="https://www.rarlab.com/download.htm">WinRAR</a> или{" "}
                <a href="https://www.7-zip.org/">7-Zip</a>. Если площадка или социальная
                сеть, в которой вы пытаетесь поделиться архивом, вставляет палки в колёса
                в виде ограничений на размер файла — вы сможете разделить архив на
                определённый размер файла перед его созданием и отправить его другому
                человеку по кусочкам. После создания архива, отправьте его другому
                человеку любым удобным для вас способом.
              </p>
              <ArticleMedia
                src="6KumGS0EyUQ"
                type="youtube"
              />
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="export-xml"
        tag="экспорт xml, перенос таймлайна, другой видеоредактор"
        title="Я нарезал видео, но хочу переместить таймлайн в другую монтажную программу. Как это сделать?"
      >
        <p>
          В <mark className="app">Adobe Premiere</mark> есть функция для экспорта{" "}
          <mark className="file">XML</mark> файла. В этом файле хранится вся информация об
          используемых клипах, точках их входа и выхода, а также другие параметры.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PrExport;
