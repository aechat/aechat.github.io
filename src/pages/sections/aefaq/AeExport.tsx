import React from "react";

import {Divider} from "antd";

import {Link} from "react-router-dom";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import CodeSnippet from "../../../components/content/CodeSnippet";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

import NestedDetailsSummary from "../../../components/detailsSummary/NestedDetailsSummary";

import JsonToTgsConverter from "../../../components/features/converters/ConverterJsonToTgs";

const AeExport: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="how-to-export"
        tag="очередь рендера, render queue, настройки экспорта, render settings, output module, export settings, h264, h265, hevc, avc1, voukoder, aftercodecs, gif, webm, vp9, av1, альфа канал, alpha channel, видео с прозрачностью, ezgif, gifgun, resolume, dxv, apple prores, tgs, lottie"
        title="Как экспортировать композицию?"
      >
        <p>
          После того, как вы закончили работу над композицией, её нужно экспортировать — в
          видео, изображение или аудио. Иначе её не получится ни использовать в другом
          проекте, ни передать клиенту. В <mark className="app">Adobe After Effects</mark>{" "}
          экспорт обычно выполняют через окно{" "}
          <mark className="select">«Render Queue»</mark> — очередь рендеринга, в которую
          добавляют нужные композиции, выбирают формат, настраивают параметры и указывают
          путь сохранения итогового файла.{" "}
          <em className="article-note-muted">
            И для этого даже не нужно использовать{" "}
            <mark className="app">Adobe Media Encoder</mark>.
          </em>
        </p>
        <Divider>
          Как работать с <mark className="select">«Render Queue»</mark>?
        </Divider>
        <p>
          Чтобы отправить в очередь экспорта текущую или выделенную композицию в окне{" "}
          <mark className="select">«Project»</mark>, выберите{" "}
          <mark className="select">
            «Composition» → «Add Composition to Render Queue»
          </mark>{" "}
          или <mark className="select">«File» → «Export» → «Add to Render Queue»</mark>,
          либо используйте сочетание клавиш <mark className="key">Ctrl + M</mark>.
        </p>
        <ArticleMedia
          caption="Добавление композиции в очередь рендера"
          src="after-effects/export/file-export-add-to-render-queue.png"
          type="image"
        />
        <p>
          Для каждой композиции в очереди можно задать три основных параметра вывода:{" "}
          <mark className="select">«Output Module»</mark>,{" "}
          <mark className="select">«Render Settings»</mark> и{" "}
          <mark className="select">«Output To»</mark>. Для каждого из них доступны готовые
          и пользовательские пресеты. Чтобы выбрать шаблон, нажмите на стрелку слева от
          названия.
        </p>
        <ArticleMedia
          caption="Применение пресетов для экспорта"
          src="after-effects/export/apply-export-presets.mp4"
          type="video"
        />
        <p>
          Чтобы изменить значения применённого пресета — нажмите на его название или в
          списке доступных пресетов нажмите на <mark className="select">«Custom»</mark>.
          После этого откроется окно с детальной настройкой нужного вам раздела. Для
          применения настроек нажмите <mark className="select">«OK»</mark> в правом нижнем
          углу окна.
        </p>
        <ArticleMedia
          caption="Изменяем значения модуля экспорта под себя"
          src="after-effects/export/custom-export-settings.mp4"
          type="video"
        />
        <Divider>
          Настраиваем <mark className="select">«Output Module»</mark>
        </Divider>
        <p>
          Основные настройки экспорта находятся в{" "}
          <mark className="select">«Output Module»</mark>. Здесь можно задать формат
          файла, настроить звук, а также изменить размер изображения — обрезать, растянуть
          или масштабировать его.
        </p>
        <ArticleMedia
          caption="Модуль вывода"
          src="after-effects/export/output-module.png"
          type="image"
        />
        <p>
          Но иногда в списке <mark className="select">«Format»</mark> может не оказаться
          нужного варианта, например <mark className="video">VP9</mark> или{" "}
          <mark className="image">GIF</mark>. Ниже в спойлерах показано, как
          экспортировать композиции в разные популярные форматы.
        </p>
        <Addition type="info">
          <p>
            Однако прежде чем начать их раскрывать, хотелось бы пройтись по базовой
            терминологии, которая встречается в этой статье и может вызывать трудности у
            некоторых читателей.{" "}
            <em className="article-note-muted">А если не хотите — пролистайте дальше.</em>
          </p>
          <ul>
            <li>
              <p>
                <mark className="word">Контейнер</mark> — это оболочка, в которой хранятся
                видео и аудио, субтитры и служебная информация. Расширение файла, например{" "}
                <mark className="file">MP4</mark>, <mark className="file">MKV</mark> или{" "}
                <mark className="file">MOV</mark>, указывает на тип контейнера.
              </p>
              <p>
                Поскольку контейнер — это лишь «обёртка», его иногда можно сменить без
                перекодирования. Например, если видео с кодеком{" "}
                <mark className="video">H.264</mark> упаковано в{" "}
                <mark className="file">MOV</mark>, его можно перепаковать в{" "}
                <mark className="file">MP4</mark> без изменения содержимого, то есть без
                потери качества. Иногда это работает даже при простом переименовании
                файла, однако такой способ не всегда гарантирует корректное
                воспроизведение, поэтому лучше использовать утилиты, которые умеют менять
                контейнер без перекодирования.
              </p>
            </li>
            <li>
              <p>
                <mark className="word">Кодек</mark> — это алгоритм, который сжимает видео,
                уменьшая размер файла. При сжатии с потерями часть информации неизбежно
                теряется, а для воспроизведения видео затем декодируется. Кодеки бывают
                двух видов: монтажные и потоковые (delivery).
              </p>
              <ul>
                <li>
                  <mark className="word">Монтажный кодек</mark> — тип кодеков, созданных
                  специально для видеомонтажа и композитинга, например{" "}
                  <mark className="video">Apple ProRes</mark>,{" "}
                  <mark className="video">DNxHR</mark> или{" "}
                  <mark className="video">GoPro CineForm</mark>. В отличие от кодеков для
                  публикации, таких как <mark className="video">H.264</mark>, они обычно
                  используют внутрикадровое сжатие, при котором каждый кадр хранится
                  независимо. Это избавляет процессор от необходимости вычислять
                  межкадровые изменения и заметно снижает нагрузку на систему, но требует
                  больше места на диске.
                </li>
                <li>
                  <p>
                    <mark className="word">Потоковый (delivery) кодек</mark> — кодеки для
                    распространения видео в интернете и просмотра, например{" "}
                    <mark className="video">H.264</mark>,{" "}
                    <mark className="video">H.265</mark>,{" "}
                    <mark className="video">VP9</mark> или{" "}
                    <mark className="video">AV1</mark>. Обычно обеспечивают хорошее
                    соотношение качества и размера файла.
                  </p>
                  <Addition type="danger">
                    <p>
                      Крайне не рекомендуется использовать для монтажа видео из интернета,
                      закодированные подобными кодеками. Они предназначены прежде всего
                      для финального вывода и просмотра, поэтому при работе с материалами,
                      загруженными с <mark className="web">YouTube</mark> или других
                      площадок, могут появляться артефакты или «зелёный экран», а сама
                      работа с такими исходниками может быть медленной и нестабильной
                      из-за постоянного декодирования сжатых кадров.
                    </p>
                    <p>
                      Прежде чем использовать подобные файлы в проекте, их стоит
                      перекодировать в монтажный кодек, например{" "}
                      <mark className="video">Apple ProRes 422</mark>.{" "}
                      <a href="#import-workflow">Подробнее...</a>
                    </p>
                  </Addition>
                </li>
              </ul>
              <p>
                Видео может кодироваться программно или с использованием аппаратного
                ускорения, например <mark className="codec-param">Intel Quick Sync</mark>{" "}
                или <mark className="codec-param">NVIDIA NVENC</mark>. Список доступных
                вариантов зависит от «железа» вашего устройства.
              </p>
              <Addition type="warning">
                <ul>
                  <li>
                    Аппаратное ускорение кодирования не ускоряет обработку применённых в
                    композициях эффектов.
                  </li>
                  <li>
                    Некоторые кодировщики, такие как{" "}
                    <mark className="codec-param">NVIDIA NVENC</mark>, ориентированы
                    прежде всего на скорость. Из-за менее точных алгоритмов иногда могут
                    появляться незначительные искажения цвета или дефекты изображения,
                    например муар на тексте. Если вы хотите снизить вероятность подобных
                    проблем, предпочтительнее использовать программный кодировщик{" "}
                    <mark className="codec-param">x264</mark>, который кодирует видео
                    медленнее, но точнее.
                  </li>
                </ul>
              </Addition>
              <p>
                У кодека обычно есть несколько параметров, но не все из них могут
                настраиваться при экспорте из{" "}
                <mark className="app">Adobe After Effects</mark>.
              </p>
              <ul>
                <li>
                  <p>
                    <mark className="word">Битрейт</mark> — это скорость передачи данных,
                    которая обычно измеряется в Мбит/с. Он определяет степень сжатия: чем
                    ниже битрейт, тем сильнее сжатие и заметнее артефакты — изображение
                    может рассыпаться на квадраты, детали размываться, а плавные градиенты
                    превращаться в полосы.
                  </p>
                  <Addition type="info">
                    Если видео уже было сильно сжато, например до 1 Мбит/с, вернуть
                    исходное качество, просто повысив битрейт при повторной конвертации,
                    не получится — это не архив, и вы лишь увеличите размер файла, но не
                    улучшите качество.
                  </Addition>
                </li>
                <li>
                  <p>
                    <mark className="word">Цветовая субдискретизация</mark> — это метод
                    сжатия изображения, при котором информация о цвете для группы пикселей
                    усредняется, чтобы сэкономить место.
                  </p>
                  <p>
                    Основные форматы цветовой субдискретизации —{" "}
                    <mark className="codec-param">4:2:0</mark>,{" "}
                    <mark className="codec-param">4:2:2</mark> и{" "}
                    <mark className="codec-param">4:4:4</mark>. Первая цифра в этой схеме
                    отвечает за количество сэмплов яркости, вторая — за количество сэмплов
                    цвета в первой строке пикселей, а третья — во второй. Иногда
                    встречается и чётвертая цифра, которая указывает на наличие
                    альфа-канала.
                  </p>
                </li>
                <li>
                  <mark className="word">Профиль</mark> — набор возможностей кодека,
                  используемых при сжатии. Чем выше профиль, тем эффективнее сжатие, но
                  ниже совместимость со слабыми и старыми устройствами. Для наибольшей
                  совместимости чаще всего используют профиль{" "}
                  <mark className="codec-param">Main</mark>.{" "}
                  <a href="https://ru.wikipedia.org/wiki/H.264#%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D0%B8">
                    Подробнее...
                  </a>
                </li>
                <li>
                  <mark className="word">Уровень</mark> — это ограничение кодека по
                  максимальному разрешению, частоте кадров и битрейту. Он влияет на
                  совместимость с разными устройствами, особенно старыми: если указать
                  уровень выше поддерживаемого, видео может не воспроизвестись. На
                  качество изображения этот параметр не влияет.{" "}
                  <a href="https://ru.wikipedia.org/wiki/H.264#%D0%A3%D1%80%D0%BE%D0%B2%D0%BD%D0%B8">
                    Подробнее...
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </Addition>
        <NestedDetailsSummary
          anchor="mp4"
          title="MP4 (H.264, H.265)"
        >
          <p>
            В <mark className="app">Adobe After Effects</mark> экспорт в{" "}
            <mark className="video">H.264</mark> и <mark className="video">H.265</mark> в
            контейнере <mark className="file">MP4</mark> можно выполнить тремя способами:
            через встроенный <mark className="plugin">H.264</mark>
            <sup>1</sup>, начиная с версии <mark className="version">23.0 (2023)</mark>,
            или с помощью сторонних плагинов — <mark className="plugin">Voukoder</mark> и{" "}
            <mark className="plugin">AfterCodecs</mark>. Их можно выбрать в списке{" "}
            <mark className="select">«Format»</mark> в настройках модуля вывода.
          </p>
          <ArticleMedia
            caption="Выбор формата экспорта в H.264"
            src="after-effects/export/export-h264.png"
            type="image"
          />
          <Addition type="warning">
            <sup>1</sup> Стандартный <mark className="plugin">H.264</mark> не поддерживает
            экспорт в <mark className="video">H.265</mark>, в отличие от{" "}
            <mark className="plugin">Voukoder</mark> и{" "}
            <mark className="plugin">AfterCodecs</mark>.
          </Addition>
          <Addition type="danger">
            <ul>
              <li>
                <p>
                  Из <mark className="app">Adobe After Effects</mark> не получится
                  экспортировать видео с прозрачностью в кодеках{" "}
                  <mark className="video">H.264</mark> и{" "}
                  <mark className="video">H.265</mark>. В таком случае используйте{" "}
                  <mark className="video">Apple ProRes 4444</mark>, если нужна
                  прозрачность, корректно работающая в монтажных программах.
                </p>
                <p>
                  Несмотря на то, что <mark className="video">H.265</mark> технически
                  может хранить альфа-канал, такие видео с прозрачностью будут корректно
                  воспроизводиться только в <mark className="app">Safari</mark> на macOS и
                  iOS. При импорте такого исходника в монтажные программы прозрачность
                  поддерживаться не будет — вместо альфа-канала будет чёрный фон.{" "}
                  <em className="article-note-muted">
                    И да, с таким видео есть хороший шанс получить артефакты при
                    воспроизведении или экспорте.
                  </em>
                </p>
              </li>
              <li>
                Из-за особенностей стандарта <mark className="video">H.264</mark> и его
                производных вы не сможете экспортировать композицию с нечётным
                разрешением, например 725×501. В таком случае{" "}
                <mark className="app">Adobe After Effects</mark> либо автоматически
                приведёт размеры к ближайшим чётным значениям, либо выдаст ошибку при
                экспорте.
              </li>
            </ul>
          </Addition>
          <Divider>
            В чём разница между <mark className="plugin">H.264</mark>,{" "}
            <mark className="plugin">Voukoder</mark> и{" "}
            <mark className="plugin">AfterCodecs</mark>?
          </Divider>
          <ul>
            <li>
              <p>
                Стандартный <mark className="plugin">H.264</mark> не умеет адекватно
                работать с нестандартной частотой кадров, например 20 FPS, плохо работает
                с неквадратными пикселями в настройках композиции и иногда даёт проблемы
                совместимости воспроизведения на некоторых устройствах из-за
                автоматического выбора профиля и уровня кодека.
              </p>
              <p>
                По сравнению с <mark className="plugin">Voukoder</mark> и{" "}
                <mark className="plugin">AfterCodecs</mark> у него отсутствует поддержка{" "}
                <mark className="codec-param">CQ (Constant Quality)</mark> и ниже
                эффективность сжатия.{" "}
                <em className="article-note-muted">
                  Зато дополнительно скачивать и устанавливать ничего не нужно.
                </em>
              </p>
            </li>
            <li>
              <mark className="plugin">Voukoder</mark> предлагает больше настроек, но
              многие из них могут не понадобиться. В контексте экспорта в{" "}
              <mark className="video">H.264</mark> и <mark className="video">H.265</mark>{" "}
              его ключевая особенность — поддержка{" "}
              <mark className="codec-param">CQ (Constant Quality)</mark> и других режимов
              с указанием уровня качества изображения. В этих режимах вы задаёте желаемый
              уровень, а кодек сам подбирает битрейт. В простых сценах он ниже, в сложных
              — выше, что помогает не раздувать размер файла.
            </li>
            <li>
              <mark className="plugin">AfterCodecs</mark> имеет более простой интерфейс и
              реже искажает цвета, чем <mark className="plugin">Voukoder</mark>. Его
              ключевая особенность — возможность задать целевой процент качества
              изображения или размер файла, а также скорость кодирования: во первом случае
              используется алгоритм, похожий на{" "}
              <mark className="codec-param">CQ (Constant Quality)</mark>, во втором —
              переменный битрейт.
            </li>
            <li>
              Также есть вероятность, что видео, экспортированное через стандартный{" "}
              <mark className="plugin">H.264</mark>, может не открываться в некоторых
              проигрывателях, например <mark className="app">Windows Media Player</mark>,
              или на некоторых устройствах, например старых iPhone. Обычно это решается
              конвертацией видео, например через{" "}
              <mark className="app">Shutter Encoder</mark>, либо экспортом композиции
              через альтернативные плагины.
            </li>
          </ul>
          <p>
            Если же вы слишком чувствительны к особенностям сжатия{" "}
            <mark className="video">H.264</mark> и разнице между оригиналом и итоговым
            видео, то ни один из этих способов экспорта вам не подойдёт. В таком случае,
            если вам нужно получить «максимальное» качество видео — используйте{" "}
            <mark className="video">Apple ProRes 4444</mark> или несжатые кодеки.{" "}
            <em className="article-note-muted">
              Потом не удивляйтесь, почему такие видео занимают много дискового
              пространства и их сложно куда-либо загрузить.
            </em>
          </p>
          <p>
            Также учтите, что все способы, описанные в статье, поддерживают только{" "}
            <mark className="color-space">Rec.709</mark> и не позволяют экспортировать
            композиции в <mark className="color-space">Rec.2100 HLG</mark> и другие
            цветовые пространства. Если вы работали с исходниками, снятыми на iPhone, или
            вам нужно получить <mark className="video">H.264</mark> или{" "}
            <mark className="video">H.265</mark> в{" "}
            <mark className="color-space">Rec.2100 HLG</mark>, сначала экспортируйте
            композицию в <mark className="video">Apple ProRes 422</mark> или{" "}
            <mark className="video">Apple ProRes 4444</mark> с нужным цветовым
            пространством, а затем перекодируйте файл в требуемый кодек без изменения
            параметров цвета, например через <mark className="app">Shutter Encoder</mark>.
          </p>
          <Divider>
            Экспортируем композицию с помощью стандартного{" "}
            <mark className="plugin">H.264</mark>
          </Divider>
          <Addition type="warning">
            Если вы по каким-то причинам используете{" "}
            <mark className="app">Adobe After Effects</mark>{" "}
            <mark className="version">22.6 (2022)</mark> или ниже, пролистайте эту статью
            дальше для ознакомления с альтернативными способами экспорта.
          </Addition>
          <ul>
            <li>
              <p>
                Для экспорта видео в кодеке <mark className="video">H.264</mark> с помощью
                стандартного экспортёра нужно выбрать значение{" "}
                <mark className="select">«H.264»</mark> в списке{" "}
                <mark className="select">«Format»</mark> в настройках модуля вывода.
              </p>
              <ArticleMedia
                caption="Выбор стандартного H.264 в качестве формата экспорта"
                src="after-effects/export/export-stock-h264.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После того, как вы выбрали нужный формат — откройте{" "}
                <mark className="select">«Format Options»</mark> in разделе{" "}
                <mark className="select">«Video Output»</mark> для открытия дополнительных
                настроек формата.
              </p>
              <ArticleMedia
                caption="Открываем настройки формата стандартного H.264"
                src="after-effects/export/stock-h264-format-options.png"
                type="image"
              />
            </li>
            <li>
              <p>
                В открывшемся окне вы можете задать целевой битрейт и выбрать режим
                кодирования битрейта — постоянный или переменный, настроить расстояние
                между <mark className="codec-param">I-кадрами</mark>, а также профиль и
                уровень <mark className="video">H.264</mark>.
              </p>
              <ArticleMedia
                caption="Настройки формата стандартного H.264"
                src="after-effects/export/select-stock-h264-options.png"
                type="image"
              />
              <Addition type="info">
                <p>
                  По умолчанию вы не сможете выбрать профиль и уровень кодека, пока не
                  уберёте чекбокс автоматического выбора значения правее поля выбора
                  значения.
                </p>
              </Addition>
            </li>
            <li>
              После настройки параметров закройте лишние окна и запустите экспорт в{" "}
              <mark className="select">«Render Queue»</mark>.
            </li>
          </ul>
          <Divider>
            Экспортируем композицию с помощью <mark className="video">Voukoder</mark>
          </Divider>
          <ContentFilter
            windowsContent={
              <>
                <Addition type="warning">
                  <ul>
                    <li>
                      <p>
                        В этой статье демонстрируется{" "}
                        <mark className="plugin">Voukoder Classic</mark>{" "}
                        <mark className="version">13.4.1</mark>, недоступный для устройств
                        на macOS. К сожалению, репозиторий этой версии на{" "}
                        <a href="https://github.com/Vouk/voukoder/releases/tag/13.4.1">
                          GitHub
                        </a>{" "}
                        был удалён, так как её заменили платной{" "}
                        <mark className="plugin">Voukoder Pro</mark>.
                      </p>
                      <p>
                        Архив с плагином и «коннекторами» можно найти в{" "}
                        <a href="https://t.me/+Qd9xu7A4TeIwNzY6">
                          складе стройматериалов
                        </a>{" "}
                        по хештегу <mark className="tag">#voukoder</mark>. Перед
                        установкой «коннектора» убедитесь, что{" "}
                        <mark className="app">Adobe After Effects</mark> установлен в
                        директорию по умолчанию.
                      </p>
                    </li>
                    <li>
                      <mark className="plugin">Voukoder Classic</mark> в некоторых случаях
                      может сильно искажать цвет. Если вам нужно сохранить точность
                      цветопередачи, воспользуйтесь экспортом в{" "}
                      <mark className="video">Apple ProRes 422</mark> или{" "}
                      <mark className="video">Apple ProRes 4444</mark>, а затем
                      конвертируйте видео в <mark className="video">H.264</mark> или{" "}
                      <mark className="video">H.265</mark> с помощью стороннего ПО,
                      например <mark className="app">Shutter Encoder</mark>.
                    </li>
                  </ul>
                </Addition>
              </>
            }
          />
          <ul>
            <li>
              <p>
                Для экспорта видео в кодеке <mark className="video">H.264</mark> или{" "}
                <mark className="video">H.265</mark> с помощью{" "}
                <mark className="plugin">Voukoder</mark> нужно выбрать значение{" "}
                <mark className="select">«Voukoder»</mark> в списке{" "}
                <mark className="select">«Format»</mark> в настройках модуля вывода.
              </p>
              <ArticleMedia
                caption="Выбор формата Voukoder"
                src="after-effects/export/export-voukoder.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После того, как вы выбрали нужный формат — откройте{" "}
                <mark className="select">«Format Options»</mark> в разделе{" "}
                <mark className="select">«Video Output»</mark> для открытия дополнительных
                настроек формата.
              </p>
              <ArticleMedia
                caption="Открываем настройки формата Voukoder"
                src="after-effects/export/voukoder-format-options.png"
                type="image"
              />
            </li>
            <li>
              <p>
                В открывшемся окне нас встречает раздел{" "}
                <mark className="select">«Video»</mark> с открытой вкладкой{" "}
                <mark className="select">«Кодек»</mark> в котором вы можете указать нужный
                кодек. Для <mark className="video">H.264</mark> и{" "}
                <mark className="video">H.265</mark> вы можете выбрать программное и
                аппаратное кодирование.
              </p>
              <ArticleMedia
                caption="Выбираем кодек для экспорта в Voukoder"
                src="after-effects/export/voukoder-select-video-codec-h264-h265.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    <mark className="word">Программное кодирование</mark> — кодирование
                    выполняется процессором с помощью{" "}
                    <mark className="codec-param">x264</mark> или{" "}
                    <mark className="codec-param">x265</mark>.
                  </li>
                  <li>
                    <mark className="word">Аппаратное кодирование</mark> — кодирование
                    выполняется с использованием ускорения видеокарты или встроенной
                    графики, например <mark className="select">«NVIDIA NVENC»</mark>,{" "}
                    <mark className="select">«Intel QSV»</mark> или{" "}
                    <mark className="select">«AMD AMF»</mark>. Обычно быстрее программного
                    кодирования, но иногда искажает цвета.{" "}
                    <em className="article-note-muted">
                      Список доступных вариантов зависит от «железа» вашего устройства.
                    </em>
                  </li>
                </ul>
              </Addition>
            </li>
            <li>
              <p>
                Для настройки профиля, преднастройки под тип контента и режима кодирования
                перейдите во вкладку <mark className="select">«Параметры»</mark>.
              </p>
              <p>
                По умолчанию используется режим <mark className="codec-param">CRF</mark>,
                который позволяет экспортировать композицию с постоянным уровнем качества
                и адекватным размером файла. Его значение по умолчанию —{" "}
                <mark className="copy">23</mark>. Чем меньше значение, тем выше качество,
                но больше размер файла. Чтобы изменить параметр, нажмите на его значение в
                правой части таблицы.
              </p>
              <Addition type="info">
                В зависимости от выбранного кодека набор настроек может отличаться.
              </Addition>
              <ArticleMedia
                caption="Настройка значения постоянного качества"
                src="after-effects/export/voukoder-select-constant-rate-factor.png"
                type="image"
              />
            </li>
            <li>
              <p>
                В разделе <mark className="select">«Аудио»</mark> вы можете указать кодек
                для аудиодорожки. Если вы не знаете что выбрать — оставьте значение по
                умолчанию.
              </p>
              <ArticleMedia
                caption="Настройка аудиокодека"
                src="after-effects/export/voukoder-select-audio-codec.png"
                type="image"
              />
              <p>
                Для настройки битрейта и других параметров аудиодорожки перейдите во
                вкладку <mark className="select">«Параметры»</mark>. Чтобы изменить
                параметр, нажмите на его значение в правой части таблицы.
              </p>
              <Addition type="info">
                В зависимости от выбранного кодека набор настроек может отличаться.
              </Addition>
              <ArticleMedia
                caption="Настройка битрейта аудио"
                src="after-effects/export/voukoder-select-audio-bitrate.png"
                type="image"
              />
            </li>
            <li>
              <p>
                В разделе <mark className="select">«Вывод»</mark> вы можете изменить
                контейнер видео. Если он отличается от{" "}
                <mark className="select">«MPEG-4 (.mp4)»</mark>, исправьте это.
              </p>
              <ArticleMedia
                caption="Настройка контейнера"
                src="after-effects/export/voukoder-select-video-container.png"
                type="image"
              />
            </li>
            <li>
              После настройки параметров закройте лишние окна и запустите экспорт в{" "}
              <mark className="select">«Render Queue»</mark>.
            </li>
          </ul>
          <Divider>
            Экспортируем композицию с помощью <mark className="video">AfterCodecs</mark>
          </Divider>
          <ul>
            <li>
              <p>
                Для экспорта видео в кодеке <mark className="video">H.264</mark> или{" "}
                <mark className="video">H.265</mark> с помощью{" "}
                <mark className="plugin">AfterCodecs</mark> нужно выбрать значение{" "}
                <mark className="select">«AfterCodecs .mp4»</mark> в списке{" "}
                <mark className="select">«Format»</mark> в настройках модуля вывода.
              </p>
              <ArticleMedia
                caption="Выбор формата AfterCodecs"
                src="after-effects/export/export-aftercodecs-mp4.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После того, как вы выбрали нужный формат — откройте{" "}
                <mark className="select">«Format Options»</mark> в разделе{" "}
                <mark className="select">«Video Output»</mark> для открытия дополнительных
                настроек формата.
              </p>
              <ArticleMedia
                caption="Открываем настройки формата AfterCodecs"
                src="after-effects/export/aftercodecs-mp4-format-options.png"
                type="image"
              />
            </li>
            <li>
              <p>
                В открывшемся окне нас встречает множество настроек, с помощью которых
                можно выбрать кодек, режим и скорость кодирования, настроить цвет и задать
                расстояние между <mark className="codec-param">I-кадрами</mark>.
              </p>
              <ArticleMedia
                caption="Настройки AfterCodecs"
                src="after-effects/export/aftercodecs-mp4-settings.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    <p>
                      Параметр <mark className="select">«Video Codec»</mark> отвечает за
                      выбор кодека. Так как мы выбрали формат{" "}
                      <mark className="select">«AfterCodecs .mp4»</mark>, то выбор кодеков
                      не велик: <mark className="select">«H.264»</mark> с тремя шаблонами
                      и <mark className="select">«H.265»</mark>.
                    </p>
                  </li>
                  <li>
                    <p>
                      Параметр <mark className="select">«Tradeoff»</mark> определяет режим
                      кодирования.
                    </p>
                    <ul>
                      <li>
                        <mark className="select">«Quality»</mark> работает по принципу{" "}
                        <mark className="codec-param">CRF</mark>, но значение задаётся в
                        процентах. Выставлять значение выше 85% особого смысла нет: файл
                        станет тяжелее, а разницу в качестве вы вряд ли заметите.
                      </li>
                      <li>
                        <mark className="select">«Bitrate»</mark> задаёт постоянный
                        битрейт на всё видео.{" "}
                        <em className="article-note-muted">
                          Хотя после экспорта <mark className="app">MediaInfo</mark>{" "}
                          пишет, что переменный.
                        </em>
                      </li>
                      <li>
                        <mark className="select">«File Size»</mark> подгоняет качество с
                        помощью переменного битрейта, чтобы уложиться в заданный размер
                        файла.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <mark className="select">«Speed»</mark> задаёт скорость кодирования:
                    чем ниже значение, тем медленнее процесс, но лучше сжатие.
                  </li>
                  <li>
                    В <mark className="select">«Colors»</mark> можно настроить битность,
                    выбрать цветовой диапазон: <mark className="color-space">16–235</mark>{" "}
                    или <mark className="color-space">0–255</mark> , а также задать
                    цветовую субдискретизацию.
                  </li>
                  <li>
                    В разделе <mark className="select">«Misc»</mark> можно выбрать
                    преднастройку под тип контента и указать профиль кодека.
                  </li>
                  <li>
                    Параметр <mark className="select">«GOP»</mark> отвечает за расстояние
                    между <mark className="codec-param">I-кадрами</mark>.
                  </li>
                  <li>
                    Параметр <mark className="select">«Audio Bitrate»</mark> отвечает за
                    битрейт аудио.
                  </li>
                </ul>
              </Addition>
            </li>
            <li>
              После настройки параметров закройте лишние окна и запустите экспорт в{" "}
              <mark className="select">«Render Queue»</mark>.
            </li>
          </ul>
          <Divider>
            Конвертируем готовое видео через <mark className="app">Shutter Encoder</mark>
          </Divider>
          <p>
            Если у вас уже есть видео в другом формате или итоговый файл получился слишком
            большим, а заново рендерить композицию не хочется, воспользуйтесь{" "}
            <mark className="app">Shutter Encoder</mark> — бесплатным<sup>1</sup>{" "}
            конвертером на базе <mark className="app">FFmpeg</mark> с поддержкой большого
            количества форматов, включая <mark className="video">H.264</mark> и{" "}
            <mark className="video">H.265</mark>.
          </p>
          <Addition type="info">
            <ul>
              <li>
                <sup>1</sup> Чтобы скачать <mark className="app">Shutter Encoder</mark>{" "}
                бесплатно, установите чекбокс{" "}
                <mark className="select">
                  «I do not wish to participate in the development of the software»
                </mark>{" "}
                на <a href="https://www.shutterencoder.com/">сайте</a>, а затем нажмите на
                кнопку скачивания образа утилиты для вашей операционной системы.
              </li>
              <li>
                В русской локализации <mark className="app">Shutter Encoder</mark> иногда
                встречаются неточности перевода, которые могут сбивать с толку. Чтобы
                переключить интерфейс на английский язык, откройте настройки программы
                через иконку шестерёнки в левом верхнем углу, затем найдите параметр{" "}
                <mark className="select">«Установить язык»</mark>, выберите{" "}
                <mark className="select">«English»</mark> и подтвердите перезапуск
                программы.
              </li>
            </ul>
          </Addition>
          <p>
            На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
            показаться запутанным и сложным, но для конвертации файлов достаточно
            выполнить несколько простых действий.
          </p>
          <ul>
            <li>
              <p>
                Для импорта файлов в <mark className="app">Shutter Encoder</mark> нажмите{" "}
                <mark className="select">«Browse»</mark> или перетащите их в окно
                программы для добавления в очередь.
              </p>
              <ArticleMedia
                caption="Импорт файла в Shutter Encoder"
                src="tools/shutter-encoder/convert/import-file.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                Затем выберите в <mark className="select">«Choose Function»</mark> нужный
                формат для конвертации — <mark className="video">H.264</mark> или{" "}
                <mark className="video">H.265</mark>. Изменение данного параметра будет
                относиться ко всем файлам в очереди конвертации.
              </p>
              <ArticleMedia
                caption="Выбор функции для конвертации в Shutter Encoder"
                src="tools/shutter-encoder/convert/choose-function-h264-h265.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                После выбора функции нужно определиться с режимом кодирования, который
                влияет на то, как кодек распределяет битрейт, а значит — на качество и
                размер итогового файла. Обычно выделяют три типа.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    <mark className="codec-param">CQ (Constant Quality)</mark> —
                    динамически распределяет битрейт в зависимости от сложности сцены и
                    сохраняет стабильное качество на протяжении всего ролика. Это
                    оптимальный выбор для большинства задач.
                  </li>
                  <li>
                    <mark className="codec-param">VBR (Variable Bitrate)</mark> — требует
                    настройки целевого и максимального битрейта, которые не всегда легко
                    подобрать с первого раза, особенно при попытке сохранить баланс между
                    качеством и размером файла.
                  </li>
                  <li>
                    <mark className="codec-param">CBR (Constant Bitrate)</mark> —
                    использует фиксированный битрейт независимо от сложности сцены, что
                    часто приводит к увеличенному размеру файла и менее равномерному
                    качеству.
                  </li>
                </ul>
              </Addition>
              <p>
                Если ваша цель — уменьшить размер файла без заметной потери качества,
                выберите <mark className="codec-param">CQ</mark>. Для этого в параметре{" "}
                <mark className="select">«Video Bitrate»</mark> переключитесь с{" "}
                <mark className="select">«VBR»</mark> на этот режим несколькими нажатиями.
              </p>
              <ArticleMedia
                caption="Выбор режима кодирования в Shutter Encoder"
                src="tools/shutter-encoder/convert/change-video-bitrate-cq-h264.mp4"
                type="video"
              />
              <Addition type="info">
                <ul>
                  <li>
                    Чем меньше значение <mark className="select">«CQ»</mark>, тем лучше
                    качество. По умолчанию устанавливается{" "}
                    <mark className="copy">23</mark> — этого достаточно для большинства
                    случаев.
                  </li>
                  <li>
                    Если нужно сохранить почти максимальное качество, укажите значение от{" "}
                    <mark className="copy">17</mark> до <mark className="copy">20</mark>.
                    Однако размер файла при этом может заметно возрасти.
                  </li>
                  <li>
                    Экстремальные значения, например <mark className="copy">50</mark> или{" "}
                    <mark className="copy">7</mark>, использовать не рекомендуется — в
                    итоге можно получить «кашу» из пикселей или слишком большой по весу
                    файл.
                  </li>
                </ul>
              </Addition>
            </li>
            <li>
              <p>
                При необходимости укажите битрейт аудио в параметре{" "}
                <mark className="select">«Audio Bitrate»</mark>. Обычно достаточно
                значения <mark className="copy">320</mark> Кбит/с.
              </p>
              <ArticleMedia
                caption="Выбор битрейта для аудиодорожки в Shutter Encoder"
                src="tools/shutter-encoder/convert/change-audio-bitrate-320-h264.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                При необходимости включите аппаратное ускорение для декодирования видео в
                параметре <mark className="select">«Hardware Acceleration»</mark>. В
                большинстве случаев это ускорит процесс конвертации видео.
              </p>
              <Addition type="info">
                Выбор значений в этом параметре зависит от формата, вашего устройства и
                установленных драйверов.
              </Addition>
              <ArticleMedia
                caption="Выбор аппаратного ускорения для конвертации файлов в Shutter Encoder"
                src="tools/shutter-encoder/convert/change-hardware-acceleration-h264.mp4"
                type="video"
              />
              <Addition type="warning">
                <p>
                  Аппаратные кодировщики, такие как{" "}
                  <mark className="select">«NVIDIA NVENC»</mark>, ориентированы прежде
                  всего на скорость кодирования. Из-за менее точных алгоритмов сжатия при
                  их использовании могут появляться незначительные артефакты, например
                  муар на тексте.
                </p>
                <p>
                  Если для вас важнее качество, не используйте аппаратное ускорение. В
                  этом случае будет использоваться программный кодировщик{" "}
                  <mark className="codec-param">x264</mark> или{" "}
                  <mark className="codec-param">x265</mark>, который работает медленнее,
                  но обычно обеспечивает более качественное сжатие.
                </p>
              </Addition>
            </li>
            <li>
              <p>
                При необходимости измените цветовое пространство во вкладке{" "}
                <mark className="select">«Colorimetry»</mark>, если оно отличается от
                требуемого. Для социальных сетей и веб-страниц чаще всего используется{" "}
                <mark className="color-space">Rec.709</mark>. Проверить цветовое
                пространство исходного файла можно через{" "}
                <mark className="app">MediaInfo</mark>.
              </p>
              <Addition type="warning">
                Цвета после конвертации из одного цветового пространства в другое могут
                незначительно измениться.
              </Addition>
              <ArticleMedia
                caption="Конвертация цветовых пространств в Shutter Encoder"
                src="tools/shutter-encoder/convert/convert-colorspace-h264.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                При необходимости измените частоту кадров во вкладке{" "}
                <mark className="select">«Advanced features»</mark> с помощью параметра{" "}
                <mark className="select">«Conform by»</mark>.
              </p>
              <ArticleMedia
                caption="Изменение частоты кадров в Shutter Encoder"
                src="tools/shutter-encoder/convert/conform-by-drop-25fps-h264.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                После настройки параметров нажмите{" "}
                <mark className="select">«Start function»</mark> в левой части интерфейса
                для запуска конвертации.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Если в программу добавлено несколько исходников, они будут
                    конвертированы последовательно в соответствии с выбранными
                    настройками.
                  </li>
                  <li>
                    По умолчанию результат конвертации сохраняется в той же папке, где
                    находится исходное видео. При необходимости директорию вывода можно
                    изменить во вкладке <mark className="select">«Output»</mark>.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                caption="Начало конвертации в Shutter Encoder"
                src="tools/shutter-encoder/convert/start-function-h264.png"
                type="image"
              />
            </li>
          </ul>
        </NestedDetailsSummary>
        <NestedDetailsSummary
          anchor="mov"
          title="MOV (Apple ProRes, DNxHR, DNxHD, DV, DVCPRO, GoPro Cineform)"
        >
          <ul>
            <li>
              <p>
                Для экспорта видео в кодеке <mark className="video">Apple ProRes</mark>,{" "}
                <mark className="video">DNxHR</mark>, <mark className="video">DNxHD</mark>
                , <mark className="video">DV</mark>, <mark className="video">DVCPRO</mark>{" "}
                или <mark className="video">GoPro Cineform</mark> нужно выбрать значение{" "}
                <mark className="select">«QuickTime»</mark> в списке{" "}
                <mark className="select">«Format»</mark> в настройках модуля вывода.
              </p>
              <ArticleMedia
                caption="Выбор формата QuickTime"
                src="after-effects/export/export-quicktime.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После того, как вы выбрали нужный формат — откройте{" "}
                <mark className="select">«Format Options»</mark> в разделе{" "}
                <mark className="select">«Video Output»</mark> для открытия настроек
                формата, в котором можно выбрать нужный кодек.
              </p>
              <ArticleMedia
                caption="Открываем настройки формата QuickTime"
                src="after-effects/export/quicktime-format-options.png"
                type="image"
              />
            </li>
            <li>
              <p>
                В <mark className="select">«Format Options»</mark> вы можете выбрать
                нужный кодек в списке <mark className="select">«Video Codec»</mark>.{" "}
                <a href="https://ru.wikipedia.org/wiki/Apple_ProRes#%D0%A1%D1%80%D0%B0%D0%B2%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5_%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%BE%D0%B2_%D1%81%D0%B5%D0%BC%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B0_ProRes">
                  В чём разница между вариантами Apple ProRes?
                </a>
              </p>
              <ArticleMedia
                caption="Выбор кодека для формата QuickTime"
                src="after-effects/export/select-quicktime-codec.png"
                type="image"
              />
              <Addition type="info">
                <p>
                  Если вы выбрали кодек, поддерживающий альфа-канал, например{" "}
                  <mark className="video">Apple ProRes 4444</mark> или{" "}
                  <mark className="video">GoPro CineForm</mark> и вы хотите экспортировать
                  композицию с альфа-каналом — не забудьте указать значение{" "}
                  <mark className="select">«RGB + Alpha»</mark> в параметре{" "}
                  <mark className="select">«Channels»</mark>.
                </p>
                <ArticleMedia
                  caption="Включаем сохранение альфа-канала для Apple ProRes 4444"
                  src="after-effects/export/prores-4444-rgb+alpha.png"
                  type="image"
                />
              </Addition>
            </li>
            <li>
              После настройки параметров закройте лишние окна и запустите экспорт в{" "}
              <mark className="select">«Render Queue»</mark>.
            </li>
          </ul>
        </NestedDetailsSummary>
        <NestedDetailsSummary
          anchor="dxv"
          title="Resolume (DXV)"
        >
          <p>
            Из <mark className="app">Adobe After Effects</mark> нельзя напрямую
            экспортировать композицию в кодеке <mark className="video">DXV</mark>{" "}
            стандартными средствами. Для этого потребуется установить стороннюю утилиту
            <mark className="app">Resolume Alley</mark>, которая может работать как
            отдельно, так и в виде плагина для{" "}
            <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Premiere</mark>.
          </p>
          <ContentFilter
            macContent={
              <>
                <ul>
                  <li>
                    <p>
                      Для загрузки <mark className="app">Resolume Alley</mark> перейдите
                      на официальный{" "}
                      <a href="https://www.resolume.com/download/mac">сайт</a>{" "}
                      <mark className="company">Resolume</mark>, пролистайте вниз и в
                      выпадающем меню <mark className="select">«Alley downloads»</mark>{" "}
                      выберите последнюю доступную версию для скачивания.
                    </p>
                    <ArticleMedia
                      caption="Чекбокс выбора установки плагинов для экспорта в DXV 3"
                      src="tools/resolume-alley/download-from-resolume-page.png"
                      type="image"
                    />
                  </li>
                  <li>
                    <p>
                      Откройте загруженный инсталлятор и следуйте инструкциям. При
                      необходимости отметьте чекбокс установки плагинов для{" "}
                      <mark className="app">Adobe After Effects</mark> и{" "}
                      <mark className="app">Adobe Premiere</mark>, если планируете
                      экспортировать композиции напрямую из{" "}
                      <mark className="app">Adobe After Effects</mark>.
                    </p>
                    <ArticleMedia
                      caption="Чекбокс выбора установки плагинов для экспорта в DXV 3"
                      src="tools/resolume-alley/install-dxv-exporter-plugins-for-ae-pr.png"
                      type="image"
                    />
                  </li>
                </ul>
              </>
            }
            windowsContent={
              <>
                <ul>
                  <li>
                    <p>
                      Для загрузки <mark className="app">Resolume Alley</mark> перейдите
                      на официальный{" "}
                      <a href="https://www.resolume.com/download/win">сайт</a>{" "}
                      <mark className="company">Resolume</mark>, пролистайте вниз и в
                      выпадающем меню <mark className="select">«Alley downloads»</mark>{" "}
                      выберите последнюю доступную версию для скачивания.
                    </p>
                    <ArticleMedia
                      caption="Выбор версии Resolume Alley для скачивания"
                      src="tools/resolume-alley/download-from-resolume-page.png"
                      type="image"
                    />
                  </li>
                  <li>
                    <p>
                      Откройте загруженный инсталлятор и следуйте инструкциям. При
                      необходимости отметьте чекбокс установки плагинов для{" "}
                      <mark className="app">Adobe After Effects</mark> и{" "}
                      <mark className="app">Adobe Premiere</mark>, если планируете
                      экспортировать композиции напрямую из{" "}
                      <mark className="app">Adobe After Effects</mark>.
                    </p>
                    <ArticleMedia
                      caption="Чекбокс выбора установки плагинов для экспорта в DXV 3"
                      src="tools/resolume-alley/install-dxv-exporter-plugins-for-ae-pr.png"
                      type="image"
                    />
                  </li>
                </ul>
              </>
            }
          />
          <Divider>
            Экспортируем с помощью плагина <mark className="plugin">DXV 3</mark>
          </Divider>
          <ul>
            <li>
              <p>
                Для экспорта видео в кодеке <mark className="video">DXV</mark> с помощью
                плагина, поставляемый с <mark className="app">Resolume Alley</mark> нужно
                выбрать значение <mark className="select">«DXV 3»</mark> в списке{" "}
                <mark className="select">«Format»</mark> в настройках модуля вывода.
              </p>
              <ArticleMedia
                caption="Выбор формата DXV 3"
                src="after-effects/export/export-dxv3.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После того, как вы выбрали нужный формат — откройте{" "}
                <mark className="select">«Format Options»</mark> в разделе{" "}
                <mark className="select">«Video Output»</mark> для открытия дополнительных
                настроек формата.
              </p>
              <ArticleMedia
                caption="Открываем настройки формата DXV 3"
                src="after-effects/export/dxv3-format-options.png"
                type="image"
              />
            </li>
            <li>
              <p>
                В открывшемся окне нас встречает выбор типа сжатия кодека и настройка
                сохранения альфа-канала.
              </p>
              <ArticleMedia
                caption="Выбираем сжатие для экспорта в DXV 3"
                src="after-effects/export/select-dxv3-compression.png"
                type="image"
              />
            </li>
            <li>
              После настройки параметров закройте лишние окна и запустите экспорт в{" "}
              <mark className="select">«Render Queue»</mark>.
            </li>
          </ul>
          <Divider>
            Конвертируем готовое видео через <mark className="app">Resolume Alley</mark>
          </Divider>
          <p>
            Если у вас уже есть видео в другом формате — воспользуйтесь ранее
            установленной утилитой <mark className="app">Resolume Alley</mark> для
            конвертации в кодек <mark className="video">DXV</mark>.
          </p>
          <ul>
            <li>
              <p>
                Для импорта файлов в <mark className="app">Resolume Alley</mark> нажмите{" "}
                <mark className="select">«Open»</mark> или перетащите их в окно программы
                для добавления в очередь.
              </p>
              <ArticleMedia
                caption="Импорт файла в Resolume Alley"
                src="tools/resolume-alley/import-file.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                Для перехода к настройкам конвертации нажмите на{" "}
                <mark className="select">«Convert file»</mark> в левой части интерфейса.
              </p>
              <ArticleMedia
                caption="Переход к настройкам конвертации в Resolume Alley"
                src="tools/resolume-alley/convert-file.png"
                type="image"
              />
            </li>
            <li>
              <p>
                Затем выберите в <mark className="select">«Presets»</mark> нужное сжатие
                для конвертации.
              </p>
              <ArticleMedia
                caption="Выбор пресета для конвертации в Resolume Alley"
                src="tools/resolume-alley/select-preset.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После настройки параметров нажмите{" "}
                <mark className="select">«Queue file»</mark> в левой части интерфейса для
                запуска конвертации.
              </p>
              <ArticleMedia
                caption="Переход к настройкам конвертации в Resolume Alley"
                src="tools/resolume-alley/queue-file.png"
                type="image"
              />
              <Addition type="warning">
                Некоторые видеопроигрыватели могут некорректно отображать цвета после
                конвертации в <mark className="video">DXV</mark>.
              </Addition>
            </li>
          </ul>
        </NestedDetailsSummary>
        <NestedDetailsSummary
          anchor="webm"
          title="Видео для веб-страниц: WEBM (VP9, AV1) и H.265 с альфа-каналом"
        >
          <p>
            Из <mark className="app">Adobe After Effects</mark> не получится
            экспортировать композицию в кодеках <mark className="video">VP9</mark> и{" "}
            <mark className="video">AV1</mark> в контейнере{" "}
            <mark className="file">WEBM</mark>
            <sup>1</sup>, а также в <mark className="video">H.265</mark> с альфа-каналом
            стандартными средствами. В таком случае придётся использовать «костыли»:
            сначала экспортировать композицию в промежуточный формат, а затем
            конвертировать полученное видео в нужный кодек.
          </p>
          <Addition type="warning">
            <sup>1</sup> Несмотря на то, что существует{" "}
            <a href="https://fnord.com/">сторонний плагин</a> для экспорта{" "}
            <mark className="plugin">WEBM</mark> от <mark className="user">fnord</mark>{" "}
            для <mark className="app">Adobe Media Encoder</mark>, я не рекомендую его
            использовать на постоянной основе. Он часто выдаёт видео с жуткими
            артефактами, отвратительным качеством или просто «падает» посреди рендера без
            причины.
          </Addition>
          <p>
            Прежде чем начать экспорт композиции, нужно определиться с целями формата
            видео.
          </p>
          <ul>
            <li>
              <p>
                Если задача — получить видео с прозрачностью и небольшим размером для
                работы в монтажных программах, это не лучший вариант. По умолчанию{" "}
                <mark className="app">Adobe After Effects</mark> и{" "}
                <mark className="app">Adobe Premiere</mark> не поддерживают импорт{" "}
                <mark className="video">WEBM</mark>, хотя это можно исправить установкой
                стороннего импортёра <mark className="plugin">Autokroma Influx</mark>.
                Учтите, что при импорте через него стабильность проекта не гарантируется —
                такие файлы могут замедлять работу или вызывать ошибки.
              </p>
              <p>
                If вы будете передавать проект с такими форматами, получателю придётся
                также установить <mark className="plugin">Autokroma Influx</mark> или
                конвертировать исходники в другой формат для совместимости.
              </p>
            </li>
            <li>
              <p>
                Если же задача — получить видео меньшего размера по сравнению с{" "}
                <mark className="video">H.264</mark> или с прозрачностью<sup>1</sup> для
                размещения на веб-странице, то <mark className="video">VP9</mark> и{" "}
                <mark className="video">AV1</mark> хорошо подходят для этой цели.
              </p>
              <Addition type="warning">
                <sup>1</sup> <mark className="app">Safari</mark> на iOS и macOS не
                поддерживает <mark className="video">WEBM</mark> с прозрачностью, поэтому
                вместо альфа-канала будет отображаться чёрный фон. Чтобы обеспечить
                совместимость, видео придётся конвертировать в{" "}
                <mark className="video">H.265</mark> через{" "}
                <mark className="app">Shutter Encoder</mark> с включённой опцией{" "}
                <mark className="select">«Enable Alpha Channel»</mark> в{" "}
                <mark className="select">«Advanced Settings»</mark> и указывать полученное
                видео как дополнительный источник для воспроизведения в теге{" "}
                <mark className="code">{`<video>`}</mark>.
              </Addition>
            </li>
          </ul>
          <Divider>Экспортируем композицию в промежуточном формате</Divider>
          <p>
            В качестве промежуточного формата можно использовать практически что угодно,
            но для экспорта видео с прозрачностью лучше выбрать{" "}
            <mark className="video">Apple ProRes 4444</mark>. Это один из немногих
            форматов, который поддерживает альфа-канал при экспорте.
          </p>
          <ul>
            <li>
              <p>
                Для экспорта видео в кодеке{" "}
                <mark className="video">Apple ProRes 4444</mark> нужно выбрать значение{" "}
                <mark className="select">«QuickTime»</mark> в списке{" "}
                <mark className="select">«Format»</mark> в настройках модуля вывода.
              </p>
              <ArticleMedia
                caption="Выбор формата QuickTime"
                src="after-effects/export/export-quicktime.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После того, как вы выбрали нужный формат — откройте{" "}
                <mark className="select">«Format Options»</mark> в разделе{" "}
                <mark className="select">«Video Output»</mark> для открытия настроек
                формата, в котором можно выбрать нужный кодек.
              </p>
              <ArticleMedia
                caption="Открываем настройки формата QuickTime"
                src="after-effects/export/quicktime-format-options.png"
                type="image"
              />
            </li>
            <li>
              <p>
                В <mark className="select">«Format Options»</mark> выберите кодек{" "}
                <mark className="select">«Apple ProRes 4444»</mark> в списке{" "}
                <mark className="select">«Video Codec»</mark>.
              </p>
              <ArticleMedia
                caption="Выбор кодека для формата QuickTime"
                src="after-effects/export/select-quicktime-prores-4444.png"
                type="image"
              />
            </li>
            <li>
              После настройки параметров закройте лишние окна и запустите экспорт в{" "}
              <mark className="select">«Render Queue»</mark>.
            </li>
          </ul>
          <Divider>
            Конвертируем готовое видео через <mark className="app">Shutter Encoder</mark>
          </Divider>
          <p>
            После экспорта композиции нам нужно воспользоваться{" "}
            <mark className="app">Shutter Encoder</mark> — бесплатным<sup>1</sup>{" "}
            конвертером на базе <mark className="app">FFmpeg</mark> с поддержкой большого
            количества форматов, включая <mark className="video">VP9</mark>,{" "}
            <mark className="video">AV1</mark> и <mark className="video">H.265</mark> с
            альфа-каналом.
          </p>
          <Addition type="info">
            <ul>
              <li>
                <sup>1</sup> Чтобы скачать <mark className="app">Shutter Encoder</mark>{" "}
                бесплатно, установите чекбокс{" "}
                <mark className="select">
                  «I do not wish to participate in the development of the software»
                </mark>{" "}
                на <a href="https://www.shutterencoder.com/">сайте</a>, а затем нажмите на
                кнопку скачивания образа утилиты для вашей операционной системы.
              </li>
              <li>
                В русской локализации <mark className="app">Shutter Encoder</mark> иногда
                встречаются неточности перевода, которые могут сбивать с толку. Чтобы
                переключить интерфейс на английский язык, откройте настройки программы
                через иконку шестерёнки в левом верхнем углу, затем найдите параметр{" "}
                <mark className="select">«Установить язык»</mark>, выберите{" "}
                <mark className="select">«English»</mark> и подтвердите перезапуск
                программы.
              </li>
            </ul>
          </Addition>
          <p>
            На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
            показаться запутанным и сложным, но для конвертации файлов достаточно
            выполнить несколько простых действий.
          </p>
          <ul>
            <li>
              <p>
                Для импорта файлов в <mark className="app">Shutter Encoder</mark> нажмите{" "}
                <mark className="select">«Browse»</mark> или перетащите их в окно
                программы для добавления в очередь.
              </p>
              <ArticleMedia
                caption="Импорт файла в Shutter Encoder"
                src="tools/shutter-encoder/convert/import-file.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                Затем выберите в <mark className="select">«Choose Function»</mark> нужный
                формат для конвертации — <mark className="video">VP9</mark>,{" "}
                <mark className="video">AV1</mark> или{" "}
                <mark className="video">H.265</mark>. Изменение данного параметра будет
                относиться ко всем файлам в очереди конвертации.
              </p>
              <ArticleMedia
                caption="Выбор функции для конвертации в Shutter Encoder"
                src="tools/shutter-encoder/convert/choose-function-vp9-av1-h265.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                После выбора функции нужно определиться с режимом кодирования, который
                влияет на то, как кодек распределяет битрейт, а значит — на качество и
                размер итогового файла. Обычно выделяют три типа.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    <mark className="codec-param">CQ (Constant Quality)</mark> —
                    динамически распределяет битрейт в зависимости от сложности сцены и
                    сохраняет стабильное качество на протяжении всего ролика. Это
                    оптимальный выбор для большинства задач.
                  </li>
                  <li>
                    <mark className="codec-param">VBR (Variable Bitrate)</mark> — требует
                    настройки целевого и максимального битрейта, которые не всегда легко
                    подобрать с первого раза, особенно при попытке сохранить баланс между
                    качеством и размером файла.
                  </li>
                  <li>
                    <mark className="codec-param">CBR (Constant Bitrate)</mark> —
                    использует фиксированный битрейт независимо от сложности сцены, что
                    часто приводит к увеличенному размеру файла и менее равномерному
                    качеству.
                  </li>
                </ul>
              </Addition>
              <p>
                Если ваша цель — уменьшить размер файла без заметной потери качества,
                выберите <mark className="codec-param">CQ</mark>. Для этого в параметре{" "}
                <mark className="select">«Video Bitrate»</mark> переключитесь с{" "}
                <mark className="select">«VBR»</mark> на этот режим несколькими нажатиями.
              </p>
              <ArticleMedia
                caption="Выбор режима кодирования в Shutter Encoder"
                src="tools/shutter-encoder/convert/change-video-bitrate-cq-vp9.mp4"
                type="video"
              />
              <Addition type="info">
                <ul>
                  <li>
                    Чем меньше значение <mark className="select">«CQ»</mark>, тем лучше
                    качество. По умолчанию устанавливается{" "}
                    <mark className="copy">23</mark> — этого достаточно для большинства
                    случаев.
                  </li>
                  <li>
                    Если нужно сохранить почти максимальное качество, укажите значение от{" "}
                    <mark className="copy">17</mark> до <mark className="copy">20</mark>.
                    Однако размер файла при этом может заметно возрасти.
                  </li>
                  <li>
                    Экстремальные значения, например <mark className="copy">50</mark> или{" "}
                    <mark className="copy">7</mark>, использовать не рекомендуется — в
                    итоге можно получить «кашу» из пикселей или слишком большой по весу
                    файл.
                  </li>
                </ul>
              </Addition>
            </li>
            <li>
              <p>
                При необходимости укажите битрейт аудио в параметре{" "}
                <mark className="select">«Audio Bitrate»</mark>. Обычно достаточно
                значения <mark className="copy">320</mark> Кбит/с.
              </p>
              <ArticleMedia
                caption="Выбор битрейта для аудиодорожки в Shutter Encoder"
                src="tools/shutter-encoder/convert/change-audio-bitrate-320-vp9.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                При необходимости измените цветовое пространство во вкладке{" "}
                <mark className="select">«Colorimetry»</mark>, если оно отличается от
                требуемого. Для социальных сетей и веб-страниц чаще всего используется{" "}
                <mark className="color-space">Rec.709</mark>. Проверить цветовое
                пространство исходного файла можно через{" "}
                <mark className="app">MediaInfo</mark>.
              </p>
              <Addition type="warning">
                Цвета после конвертации из одного цветового пространства в другое могут
                незначительно измениться.
              </Addition>
              <ArticleMedia
                caption="Конвертация цветовых пространств в Shutter Encoder"
                src="tools/shutter-encoder/convert/convert-colorspace-vp9.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                Если вы хотите сохранить альфа-канал при конвертации, включите параметр{" "}
                <mark className="select">«Enable alpha channel»</mark> во вкладке{" "}
                <mark className="select">«Advanced features»</mark>.
              </p>
              <ArticleMedia
                caption="Сохранение альфа-канала при конвертации в Shutter Encoder"
                src="tools/shutter-encoder/convert/enable-alpha-channel-vp9.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                После настройки параметров нажмите{" "}
                <mark className="select">«Start function»</mark> в левой части интерфейса
                для запуска конвертации.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Если в программу добавлено несколько исходников, они будут
                    конвертированы последовательно в соответствии с выбранными
                    настройками.
                  </li>
                  <li>
                    По умолчанию результат конвертации сохраняется в той же папке, где
                    находится исходное видео. При необходимости директорию вывода можно
                    изменить во вкладке <mark className="select">«Output»</mark>.
                  </li>
                </ul>
              </Addition>
              <ArticleMedia
                caption="Начало конвертации в Shutter Encoder"
                src="tools/shutter-encoder/convert/start-function-vp9.png"
                type="image"
              />
            </li>
          </ul>
          <Divider>Используем конвертированные видео на странице</Divider>
          <p>
            Как уже сказано ранее, одни браузеры поддерживают{" "}
            <mark className="video">VP9</mark> и <mark className="video">AV1</mark> с
            прозрачностью, а другие — нет. Таблицы совместимости форматов и кодеков
            браузерами можно посмотреть по ссылкам ниже.
          </p>
          <div className="flexible-links">
            <a href="https://caniuse.com/webm">Поддержка WEBM (VP8, VP9)</a>
            <a href="https://caniuse.com/av1">Поддержка AV1</a>
            <a href="https://caniuse.com/mpeg4">Поддержка H.264</a>
            <a href="https://caniuse.com/hevc">Поддержка H.265 (HEVC)</a>
          </div>
          <p>
            Для тега <mark className="code">{`<video>`}</mark> можно указать несколько
            источников, и браузер выберет первый поддерживаемый вариант, проходя по{" "}
            <mark className="code">{`<source>`}</mark> сверху вниз. Чтобы видео с
            прозрачностью корректно отображалось в <mark className="app">Safari</mark>,
            разместите первым вариант с <mark className="video">H.265</mark>, а затем{" "}
            <mark className="video">WEBM</mark>. Учтите, что для{" "}
            <mark className="video">H.265</mark> с альфа-каналом нужно указать тип и кодек{" "}
            <mark className="code">type=&quot;video/mp4;codecs=hvc1&quot;</mark>, иначе
            прозрачность может не отобразиться.
          </p>
          <p>
            В остальных браузерах, например <mark className="app">Firefox</mark> или{" "}
            <mark className="app">Chrome</mark> для воспроизведения видео будет
            использоваться <mark className="video">WEBM</mark>.
          </p>
          <CodeSnippet language="html">
            {`<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Использование видео с прозрачностью в разных браузерах</title>
  </head>
  <body>
    <video
      loop
      controls
      autoplay
    >
      <source
        src="images/aefaq@aechat_alpha.mp4"
        type="video/mp4;codecs=hvc1"
      />
      <source
        src="images/aefaq@aechat_alpha.webm"
        type="video/webm"
      />
    </video>
  </body>
</html>`}
          </CodeSnippet>
        </NestedDetailsSummary>
        <NestedDetailsSummary
          anchor="gif"
          title="Анимированный GIF"
        >
          <p>
            Из <mark className="app">Adobe After Effects</mark> нельзя вывести
            анимированный <mark className="image">GIF</mark> стандартными средствами.
            Однако это можно сделать тремя способами: с помощью стороннего расширения{" "}
            <mark className="plugin">GifGun</mark>, конвертацией промежуточного результата
            через веб-сервис <mark className="web">Ezgif</mark> или экспортом через{" "}
            <mark className="app">Adobe Media Encoder</mark>.
          </p>
          <Addition type="danger">
            <ul>
              <li>
                <p>
                  Если вы собираетесь использовать <mark className="image">GIF</mark> на
                  веб-странице, лучше рассмотреть в качестве альтернативы{" "}
                  <mark className="video">WEBM</mark> или{" "}
                  <mark className="video">H.264</mark>. Они обеспечивают лучшее качество
                  при меньшем размере файла. <mark className="image">GIF</mark> сжимается
                  значительно менее эффективно, поэтому итоговый файл может получиться
                  очень большим, особенно при высоком разрешении или частоте кадров.
                </p>
                <p>
                  Для веба обычно достаточно разрешения до 1024×576 и частоты до 15 FPS.
                  Тяжёлые <mark className="image">GIF</mark> создают дополнительную
                  нагрузку на браузер и могут замедлять работу сайта, особенно на
                  мобильных устройствах.{" "}
                  <em className="article-note-muted">
                    Я уж не говорю про скрипты на этом сайте...
                  </em>
                </p>
              </li>
              <li>
                <mark className="image">GIF</mark> ограничен 256 цветами, а прозрачность
                работает только в бинарном режиме. Из-за этого он плохо подходит для
                плавных градиентов, точной цветопередачи и полупрозрачных элементов.
              </li>
            </ul>
          </Addition>
          <Divider>
            Экспортируем композицию с помощью <mark className="plugin">GifGun</mark>
          </Divider>
          <ul>
            <li>
              <p>
                Если у вас установлено расширение <mark className="plugin">GifGun</mark> —
                откройте его через меню{" "}
                <mark className="select">«Window» → «Extensions» → «GifGun»</mark>.
              </p>
              <ArticleMedia
                caption="Открываем расширение GifGun"
                src="after-effects/plugins/gifgun/open.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    Если расширение установлено, но не открывается при нажатии в меню —
                    активируйте debug-режим, согласно <Link to="/reg">инструкции</Link>.
                  </li>
                  <li>
                    Для корректной работы расширения необходимо в настройках{" "}
                    <mark className="select">
                      «Edit» → «Preferences» → «Scripting & Expressions»
                    </mark>{" "}
                    установить флажок у параметра{" "}
                    <mark className="select">
                      «Allow Scripts to Write Files and Access Network»
                    </mark>
                    .
                  </li>
                </ul>
              </Addition>
            </li>
            <li>
              <p>
                В открывшемся окне расширения вы увидите простой интерфейс с двумя
                элементами: кнопкой <mark className="select">«Make GIF»</mark> для запуска
                экспорта и иконкой шестерёнки для доступа к настройкам.
              </p>
              <ArticleMedia
                caption="Основное меню GifGun"
                src="after-effects/plugins/gifgun/main.png"
                type="image"
              />
            </li>

            <li>
              <p>
                Для изменения настроек нажмите на иконку шестерёнки в главном окне
                расширения. Здесь можно указать максимальный размер файла, разрешение,
                сжатие, частоту кадров и директорию для сохранения анимации.
              </p>
              <ArticleMedia
                caption="Настройки экспорта в GifGun"
                src="after-effects/plugins/gifgun/export-settings.png"
                type="image"
              />
            </li>

            <li>
              <p>
                После завершения настройки нажмите{" "}
                <mark className="select">«Make GIF»</mark> и дождитесь окончания экспорта.
                Если включён чекбокс <mark className="select">«Open GIF folder»</mark>,
                после завершения расширение автоматически откроет директорию в проводнике
                с сохранённой анимацией.
              </p>
            </li>
          </ul>
          <Divider>
            Конвертируем готовое видео через <mark className="app">Ezgif</mark>
          </Divider>
          <p>
            Если вы не хотите устанавливать расширение или у вас уже есть готовое видео,
            которое нужно конвертировать в <mark className="image">GIF</mark>,
            воспользуйтесь онлайн-сервисом <mark className="web">Ezgif</mark>. Он
            обеспечивает хорошее соотношение качества и размера файла.
          </p>
          <ul>
            <li>
              <p>
                Для начала конвертации перейдите на{" "}
                <a href="https://ezgif.com/video-to-gif">сайт</a>{" "}
                <mark className="web">Ezgif</mark>, перетащите видео в область загрузки
                или выберите его вручную через <mark className="select">«Обзор»</mark>, а
                затем нажмите <mark className="select">«Upload Video»</mark>.
              </p>
              <Addition type="warning">
                Максимальный размер загружаемого файла — 200 МБ.
              </Addition>
              <ArticleMedia
                caption="Импорт файла в Ezgif"
                src="tools/ezgif/import-file.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                После загрузки можно настроить частоту кадров, разрешение, соотношение
                сторон и метод сжатия итогового файла. После изменения параметров нажмите{" "}
                <mark className="select">«Convert to GIF!»</mark> для начала конвертации.
              </p>
              <Addition type="warning">
                Максимальная длительность <mark className="image">GIF</mark> зависит от
                выбранной частоты кадров: до 60 секунд при 5 FPS или до 15 секунд при 20
                FPS.
              </Addition>
              <ArticleMedia
                caption="Настройка конвертации в Ezgif"
                src="tools/ezgif/export-settings.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После завершения конвертации готовый <mark className="image">GIF</mark>{" "}
                появится в разделе <mark className="select">«Output GIF Animation»</mark>.
                Для сохранения нажмите <mark className="key">ПКМ</mark> по анимации и
                выберите <mark className="select">«Сохранить изображение как...»</mark>.
              </p>
              <Addition type="info">
                При необходимости размер <mark className="image">GIF</mark> можно
                дополнительно уменьшить, воспользовавшись инструментом{" "}
                <a href="https://ezgif.com/optimize">оптимизации</a>.
              </Addition>
              <ArticleMedia
                caption="Сохранение результата конвертации"
                src="tools/ezgif/save-result.png"
                type="image"
              />
            </li>
          </ul>
          <Divider>
            Экспортируем композицию с помощью{" "}
            <mark className="app">Adobe Media Encoder</mark>
          </Divider>
          <p>
            <mark className="image">GIF</mark> можно экспортировать и через{" "}
            <mark className="app">Adobe Media Encoder</mark>. Несмотря на то, что многие
            его обходят стороной, он предлагает больше вариантов форматов для экспорта по
            сравнению с «чистым» <mark className="app">Adobe After Effects</mark>.
          </p>
          <ul>
            <li>
              <p>
                Для начала отправьте композицию<sup>1</sup> из{" "}
                <mark className="app">Adobe After Effects</mark> в{" "}
                <mark className="app">Adobe Media Encoder</mark> через меню{" "}
                <mark className="select">
                  «File» → «Export» → «Add to Adobe Media Encoder Queue»
                </mark>{" "}
                и дождитесь запуска программы, либо откройте{" "}
                <mark className="app">Adobe Media Encoder</mark> и импортируйте готовое
                видео вручную.
              </p>
              <Addition type="info">
                <sup>1</sup> Композиция корректно отправится в{" "}
                <mark className="app">Adobe Media Encoder</mark> только если версии обеих
                программ совпадают по году выпуска и они установлены в стандартные папки.{" "}
                <a href="#match-version">Всмысле?</a>
              </Addition>
              <ArticleMedia
                caption="Импорт файла в Adobe Media Encoder"
                src="media-encoder/import-file.mp4"
                type="video"
              />
            </li>
            <li>
              <p>
                После импорта файла выберите формат{" "}
                <mark className="select">«Animated GIF»</mark>. Для настройки разрешения,
                частоты кадров и других параметров откройте{" "}
                <mark className="select">«Export Settings»</mark>, нажав на название
                пресета.
              </p>
              <Addition type="warning">
                Если выбрать <mark className="select">«GIF»</mark> без{" "}
                <mark className="select">«Animated»</mark>, будет создана
                последовательность отдельных кадров, которая заполнит директорию для
                сохранения.
              </Addition>
              <ArticleMedia
                caption="Выбор формата Animated GIF в Adobe Media Encoder"
                src="media-encoder/select-animated-gif.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После настройки параметров в{" "}
                <mark className="select">«Export Settings»</mark> нажмите{" "}
                <mark className="select">«OK»</mark>, чтобы закрыть окно, и запустите
                экспорт, нажав на зелёную иконку треугольника в правом верхнем углу окна
                очереди экспорта.
              </p>
              <ArticleMedia
                caption="Начало экспорта GIF в Adobe Media Encoder"
                src="media-encoder/start-queue-gif.png"
                type="image"
              />
            </li>
          </ul>
        </NestedDetailsSummary>
        <NestedDetailsSummary
          anchor="telegram"
          title="Telegram (Стикеры, эмодзи, TGS)"
        >
          <p>
            Из <mark className="app">Adobe After Effects</mark> нельзя вывести некоторые
            типы анимации в формате <mark className="file">TGS</mark> и композиции в{" "}
            <mark className="image">WEBP</mark> и <mark className="video">VP9</mark>{" "}
            стандартными способами.
          </p>
          <Divider>
            Разбираемся с типами стикеров в <mark className="app">Telegram</mark>
          </Divider>
          <p>
            В <mark className="app">Telegram</mark> доступны несколько типов стикеров и
            эмодзи для создания, между которыми некоторые пользователи часто путаются.
            Стикеры и эмодзи могут быть статичными, видео или анимированными.
          </p>
          <Addition type="info">
            Подробнее о требованиях для того или иного типа стикеров вы можете прочитать в{" "}
            <a href="https://core.telegram.org/stickers">документации</a>{" "}
            <mark className="app">Telegram</mark>.
          </Addition>
          <ul>
            <li>
              <p>
                <mark className="word">Статичный стикер</mark> или{" "}
                <mark className="word">статичный эмодзи</mark> — обычная картинка, которую
                отправляют собеседнику. Её можно создать в любом графическом редакторе,
                например в <mark className="app">Adobe Photoshop</mark> или{" "}
                <mark className="app">GIMP</mark>, или экспортировать из{" "}
                <mark className="app">Adobe After Effects</mark> как{" "}
                <a href="#how-to-export-still">один кадр</a>.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Для создания принимаются изображения формата{" "}
                    <mark className="image">PNG</mark> или{" "}
                    <mark className="image">WEBP</mark> с прозрачным или непрозрачным
                    фоном.
                  </li>
                  <li>
                    Для статичных стикеров максимальное разрешение составляет 512×512
                    пикселей, при этом допускается любое соотношение сторон, если ни одна
                    из сторон не превышает установленный лимит. Для статичных эмодзи
                    размер должен быть строго 100×100 пикселей.
                  </li>
                </ul>
              </Addition>
            </li>
            <li>
              <p>
                <mark className="word">Анимированный стикер</mark> или{" "}
                <mark className="word">анимированные эмодзи</mark> — это векторная
                анимация, которая не теряет в качестве при воспроизведении на разных
                устройствах. По своей сути она похожа на анимацию{" "}
                <mark className="image">Lottie</mark> и имеет ряд ограничений по эффектам
                и параметрам экспорта. Для экспорта композиции в эти форматы используется{" "}
                <mark className="plugin">Bodymovin-TG</mark> или{" "}
                <mark className="plugin">Bodymovin</mark> с последующей конвертацией{" "}
                <mark className="file">JSON</mark> в <mark className="file">TGS</mark>{" "}
                через встроенный в статью конвертер.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Для анимированных стикеров разрешение композиции должно быть ровно
                    512×512 пикселей, а для анимированных эмодзи — ровно 100×100 пикселей.
                  </li>
                  <li>
                    Частота кадров должна быть строго 30 или 60 FPS, иначе экспорт может
                    завершиться ошибкой.
                  </li>
                  <li>
                    Длительность анимации не должна превышать 3 секунд, а итоговый файл —
                    64 Кб.
                  </li>
                </ul>
              </Addition>
              <Addition type="danger">
                <p>
                  Для корректного вывода анимации в файл формата{" "}
                  <mark className="file">TGS</mark>, согласно{" "}
                  <a href="https://core.telegram.org/stickers#animated-stickers">
                    документации
                  </a>
                  , в композиции недопустимы следующие эффекты и свойства:
                </p>
                <ul>
                  <li>
                    Выражения не поддерживаются, но их можно конвертировать в ключи. Для
                    этого выделите нужное свойство с выражением, нажмите{" "}
                    <mark className="key">ПКМ</mark> и выберите{" "}
                    <mark className="select">
                      «Keyframe Assistant» → «Convert Expression to Keyframes»
                    </mark>
                    .
                  </li>
                  <li>
                    У ключевых кадров не поддерживается интерполяция скорости с помощью{" "}
                    <mark className="select">«Auto Bezier»</mark>. Для смены типа
                    интерполяции выделите нужные ключи, нажмите{" "}
                    <mark className="key">Ctrl + Alt + K</mark> и отключите автоматический
                    Безье.
                  </li>
                  <li>
                    Слои с изображениями не поддерживаются. Если такой слой всё-таки
                    нужен, выполните автотрассировку для конвертации в вектор в{" "}
                    <mark className="app">Adobe Illustrator</mark> или другой программе, а
                    затем импортируйте как слой-фигуру.{" "}
                    <a href="https://helpx.adobe.com/illustrator/using/image-trace-results-optimization.html">
                      Подробнее...
                    </a>
                  </li>
                  <li>
                    Текстовые слои не поддерживаются, но могут быть преобразованы в
                    фигуры. Для этого нажмите <mark className="key">ПКМ</mark> по слою с
                    текстом и выберите{" "}
                    <mark className="select">«Create» → «Create Shapes from Text»</mark>.
                  </li>
                  <li>
                    Нельзя использовать <mark className="select">«Time Remapping»</mark> и{" "}
                    <mark className="select">«Auto-Oriented Layers»</mark>. Проверить
                    скорость слоя можно в столбце{" "}
                    <mark className="select">«Stretch»</mark>. Автоориентацию можно
                    выключить, выделив слой и нажав{" "}
                    <mark className="key">Ctrl + Alt + O</mark>, затем выбрав{" "}
                    <mark className="select">«Off»</mark>.
                  </li>
                  <li>
                    Эффекты из <mark className="select">«Effects & Presets»</mark>{" "}
                    использовать нельзя — они не сохраняются в итоговой анимации.
                  </li>
                  <li>
                    <mark className="select">«Solid Layer»</mark>, маски, трёхмерные слои
                    и элементы слоёв-фигур, включая{" "}
                    <mark className="select">«Merge Paths»</mark>,{" "}
                    <mark className="select">«Repeater»</mark>,{" "}
                    <mark className="select">«Star Shape»</mark> и{" "}
                    <mark className="select">«Gradient Stroke»</mark>, не поддерживаются.
                  </li>
                </ul>
              </Addition>
            </li>
            <li>
              <p>
                <mark className="word">Видеостикер</mark> — обычное видео в формате{" "}
                <mark className="video">WEBM</mark> с кодеком{" "}
                <mark className="video">VP9</mark>. Для экспорта в данном формате сначала
                выполните экспорт в промежуточный файл, после чего конвертируйте его с
                помощью стороннего конвертера.{" "}
                <a href="#how-to-export-webm">Подробнее...</a>
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Для видеостикеров максимальное разрешение составляет 512×512 пикселей,
                    при этом допускается любое соотношение сторон, если ни одна из сторон
                    не превышает установленный лимит. Для видеоэмодзи размер должен быть
                    строго 100×100 пикселей.
                  </li>
                  <li>Частота кадров не должна превышать 30 FPS.</li>
                  <li>
                    Длительность видео не должна превышать 3 секунд, а итоговый файл — 256
                    Кб.
                  </li>
                </ul>
              </Addition>
            </li>
          </ul>
          <Divider>
            Экспортируем анимированный стикер или эмодзи через{" "}
            <mark className="app">Bodymovin-Telegram</mark>
          </Divider>
          <ul>
            <li>
              <p>
                Для экспорта из <mark className="app">Adobe After Effects</mark> в стикеры
                формата <mark className="file">TGS</mark> понадобится бесплатное стороннее
                расширение{" "}
                <a href="https://github.com/TelegramMessenger/bodymovin-extension">
                  Bodymovin-TG
                </a>
                . После установки он появится в меню{" "}
                <mark className="select">
                  «Window» → «Extensions» → «Bodymovin for Telegram Stickers»
                </mark>
                .
              </p>
              <ArticleMedia
                caption="Открываем расширение Bodymovin-TG"
                src="after-effects/plugins/bodymovin-tg/open.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    Если расширение установлено, но не открывается при нажатии в меню —
                    активируйте debug-режим, согласно <Link to="/reg">инструкции</Link>.
                  </li>
                  <li>
                    Для корректной работы расширения необходимо в настройках{" "}
                    <mark className="select">
                      «Edit» → «Preferences» → «Scripting & Expressions»
                    </mark>{" "}
                    установить флажок у параметра{" "}
                    <mark className="select">
                      «Allow Scripts to Write Files and Access Network»
                    </mark>
                    .
                  </li>
                </ul>
              </Addition>
              <Addition type="warning">
                Данное расширение давно не обновлялось и могут возникать ошибки при работе
                с последними версиями <mark className="app">Adobe After Effects</mark>.
                Кроме того, в нём меньше функций по сравнению с оригинальным{" "}
                <mark className="plugin">Bodymovin</mark>, который можно использовать в
                качестве альтернативы.
              </Addition>
            </li>
            <li>
              <p>
                В открывшемся окне можно выбрать композицию для экспорта, указать путь
                сохранения и запустить рендер с помощью кнопки{" "}
                <mark className="select">«Export»</mark>. Перед запуском убедитесь, что
                анимация соответствует требованиям для анимированных стикеров или эмодзи.
              </p>
              <ArticleMedia
                caption="Основное меню Bodymovin-TG"
                src="after-effects/plugins/bodymovin-tg/main.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После успешного экспорта перейдите в{" "}
                <a href="https://t.me/Stickers">бот</a> для создания стикеров и начните
                создание набора. Если что-то пойдёт не так, бот сообщит об этом и укажет
                на проблему. Чаще всего ошибки связаны со слишком большим размером файла
                или неверно выбранным типом стикера в начале работы.
              </p>
            </li>
          </ul>
          <Divider>
            Экспортируем анимированный стикер или эмодзи через{" "}
            <mark className="plugin">Bodymovin</mark>
          </Divider>
          <ul>
            <li>
              <p>
                Если экспорт через <mark className="plugin">Bodymovin-TG</mark> завершился
                сбоем или вам не хватает функциональности оригинального расширения,
                попробуйте использовать <mark className="plugin">Bodymovin</mark>
                <sup>1</sup>, а затем конвертировать полученный файл через конвертер из
                статьи.
              </p>
              <Addition type="info">
                <sup>1</sup> Чтобы бесплатно скачать расширение, зарегистрируйтесь или
                войдите в аккаунт на <a href="https://aescripts.com">aescripts</a>, а
                затем на странице{" "}
                <a href="https://aescripts.com/bodymovin/">дополнения</a> установите
                значение <mark className="copy">0</mark> в поле{" "}
                <mark className="select">«Name Your Own Price»</mark> и оформите заказ.
                Ссылка на скачивание появится{" "}
                <a href="https://aescripts.com/downloadable/customer/products/">
                  в вашем профиле
                </a>
                .
              </Addition>
            </li>
            <li>
              <p>
                После установки <mark className="plugin">Bodymovin</mark> он появится в
                меню <mark className="select">«Window» → «Extensions» → «Bodymovin»</mark>
                .
              </p>
              <ArticleMedia
                caption="Открываем расширение Bodymovin"
                src="after-effects/plugins/bodymovin/open.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    Если расширение установлено, но не открывается при нажатии в меню —
                    активируйте debug-режим, согласно <Link to="/reg">инструкции</Link>.
                  </li>
                  <li>
                    Для корректной работы расширения необходимо в настройках{" "}
                    <mark className="select">
                      «Edit» → «Preferences» → «Scripting & Expressions»
                    </mark>{" "}
                    установить флажок у параметра{" "}
                    <mark className="select">
                      «Allow Scripts to Write Files and Access Network»
                    </mark>
                    .
                  </li>
                </ul>
              </Addition>
            </li>
            <li>
              <p>
                В открывшемся окне можно выбрать композицию для экспорта, указать путь
                сохранения и запустить рендер с помощью кнопки{" "}
                <mark className="select">«Export»</mark>. Перед запуском убедитесь, что
                анимация соответствует требованиям для анимированных стикеров или эмодзи.
                Совместимость эффектов для выделенного свойства или слоя можно проверить
                прямо в <mark className="plugin">Bodymovin</mark> во вкладке{" "}
                <mark className="select">«Support Features»</mark>.
              </p>
              <ArticleMedia
                caption="Основное меню Bodymovin"
                src="after-effects/plugins/bodymovin/main.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После успешного экспорта анимации в <mark className="file">JSON</mark>{" "}
                поместите файл в конвертер ниже и нажмите{" "}
                <mark className="select">«Скачать преобразованный TGS»</mark>.
              </p>
              <JsonToTgsConverter />
            </li>
            <li>
              <p>
                После успешного экспорта перейдите в{" "}
                <a href="https://t.me/Stickers">бот</a> для создания стикеров и начните
                создание набора. Если что-то пойдёт не так, бот сообщит об этом и укажет
                на проблему. Чаще всего ошибки связаны со слишком большим размером файла
                или неверно выбранным типом стикера в начале работы.
              </p>
            </li>
          </ul>
        </NestedDetailsSummary>
        <NestedDetailsSummary
          anchor="frame"
          title="Текущий кадр предпросмотра как изображение (JPEG, PNG, TIFF)"
        >
          <Divider>
            Экспортируем кадр композиции через{" "}
            <mark className="select">«Render Queue»</mark>
          </Divider>
          <ul>
            <li>
              <p>
                Чтобы быстро отправить текущий кадр композиции в очередь рендеринга,
                нажмите <mark className="key">Ctrl + Alt + S</mark> или перейдите в меню{" "}
                <mark className="select">«Composition» → «Save Frame As» → «File»</mark>.
              </p>
              <ArticleMedia
                caption="Экспорт текущего кадра стандартными средствами"
                src="after-effects/export/save-frame-as-file.png"
                type="image"
              />
            </li>
            <li>
              <p>
                После этого откроется <mark className="select">«Render Queue»</mark>, где
                по умолчанию будет предложен экспорт в формат{" "}
                <mark className="image">PSD</mark>. Формат изображения можно изменить в
                настройках <mark className="select">«Output Module»</mark>.
              </p>
              <ArticleMedia
                caption="Текущий кадр композиции в очереди рендера"
                src="after-effects/export/save-frame-as-file-render-queue.png"
                type="image"
              />
              <Addition type="info">
                Вы можете создать собственный шаблон для экспорта кадров и установить его
                по умолчанию, чтобы не менять формат файла каждый раз вручную.
              </Addition>
            </li>
            <li>
              После настройки параметров закройте лишние окна и запустите экспорт в{" "}
              <mark className="select">«Render Queue»</mark>.
            </li>
          </ul>
          <Divider>
            Экспортируем кадр композиции с помощью{" "}
            <mark className="plugin">FX Console</mark>
          </Divider>
          <ul>
            <li>
              <p>
                Для сохранения текущего кадра в файл или буфер обмена с помощью{" "}
                <mark className="plugin">FX Console</mark> воспользуйтесь кнопкой{" "}
                <mark className="select">«Export»</mark>, оформленной в виде иконки
                загрузки, или <mark className="key">«Take a Screenshot»</mark>
                <sup>1</sup>, оформленной в виде иконки фотоаппарата.
              </p>
              <Addition type="info">
                <sup>1</sup> Созданные скриншоты отправляются в галерею{" "}
                <mark className="plugin">FX Console</mark>, откуда их позже можно
                экспортировать в буфер обмена или сохранить в файл.
              </Addition>
              <ArticleMedia
                caption="Экспорт текущего кадра с помощью FX Console"
                src="after-effects/plugins/fx-console/copy-to-clipboard.png"
                type="image"
              />
            </li>
            <li>
              <p>
                Если вам нужно сохранять скриншоты в полном разрешении независимо от
                разрешения, установленного в окне предпросмотра, для начала перейдите в{" "}
                <mark className="select">«Settings»</mark>, оформленную в виде иконки
                шестерёнки.
              </p>
              <ArticleMedia
                caption="Открытие настроек FX Console"
                src="after-effects/plugins/fx-console/open-settings.png"
                type="image"
              />
            </li>
            <li>
              <p>
                Затем установите чекбокс напротив параметра{" "}
                <mark className="select">«Full Resolution Screenshots»</mark> и нажмите{" "}
                <mark className="key">«OK»</mark> для сохранения изменений.
              </p>
              <ArticleMedia
                caption="Включение возможности сохранения скриншотов в полном разрешении в FX Console"
                src="after-effects/plugins/fx-console/enable-full-resolution-screenshots.png"
                type="image"
              />
            </li>
          </ul>
          <Divider>
            Экспортируем кадр композиции с помощью{" "}
            <mark className="select">«Copy Frame to Clipboard»</mark>
          </Divider>
          <p>
            Начиная с <mark className="app">Adobe After Effects</mark>{" "}
            <mark className="version">26.3</mark> и выше, разработчики добавили
            возможность скопировать текущий кадр предпросмотра композиции в буфер обмена.
          </p>
          <ul>
            <li>
              <p>
                Чтобы скопировать текущий кадр предпросмотра в буфер обмена, нажмите на
                иконку <mark className="select">«Copy Frame to Clipboard»</mark> в окне
                предпросмотра или нажмите{" "}
                <mark className="key">Ctrl + Alt + Shift + F5</mark>.
              </p>
              <ArticleMedia
                caption="Копирование текущего кадра в буфер обмена"
                src="after-effects/interface/copy-frame-to-clipboard.png"
                type="image"
              />
              <Addition type="info">
                Некоторые пользователи ошибочно считают, что кнопка{" "}
                <mark className="select">«Take Snapshot»</mark> (иконка фотоаппарата в
                окне предпросмотра) также сохраняет текущий кадр в файл. На самом деле она
                сохраняет его только во временную память программы для сравнения с другими
                кадрами предпросмотра композиции.
              </Addition>
            </li>
            <li>
              Затем вставьте скопированное в буфер обмена изображение в любой графический
              редактор, например <mark className="app">GIMP</mark> или{" "}
              <mark className="app">Adobe Photoshop</mark> или мессенджер с помощью
              комбинации клавиш <mark className="key">Ctrl + V</mark>. Далее вы можете
              продолжить работу с изображением как хотите.
            </li>
          </ul>
        </NestedDetailsSummary>
        <NestedDetailsSummary
          anchor="sequence"
          title="Секвенция изображений (JPEG, PNG, TIFF)"
        >
          <ul>
            <li>
              <p>
                Для экспорта секвенции изображений нужно выбрать значение с припиской{" "}
                <mark className="select">«Sequence»</mark> в названии, например{" "}
                <mark className="select">«PNG Sequence»</mark> или{" "}
                <mark className="select">«JPG Sequence»</mark> в списке{" "}
                <mark className="select">«Format»</mark> в настройках модуля вывода.
              </p>
              <ArticleMedia
                caption="Выбор формата секвенции изображений"
                src="after-effects/export/export-image-sequence.png"
                type="image"
              />
              <Addition type="info">
                <p>
                  Если вы выбрали формат, поддерживающий альфа-канал, например{" "}
                  <mark className="image">PNG</mark> и вы хотите экспортировать композицию
                  с альфа-каналом — не забудьте указать значение{" "}
                  <mark className="select">«RGB + Alpha»</mark> в параметре{" "}
                  <mark className="select">«Channels»</mark>.
                </p>
                <ArticleMedia
                  caption="Включаем сохранение альфа-канала для секвенции PNG"
                  src="after-effects/export/png-rgb+alpha.png"
                  type="image"
                />
              </Addition>
            </li>
            <li>
              <p>
                После настройки параметров закройте лишние окна и запустите экспорт в{" "}
                <mark className="select">«Render Queue»</mark>.
              </p>
              <Addition type="info">
                При экспорте секвенции <mark className="app">Adobe After Effects</mark> по
                умолчанию создаёт отдельную подпапку для изображений. Это поведение можно
                отключить, убрав флажок{" "}
                <mark className="select">«Save in subfolder»</mark> при выборе пути
                сохранения.
              </Addition>
            </li>
          </ul>
        </NestedDetailsSummary>
        <NestedDetailsSummary
          anchor="audio"
          title="Аудио (MP3, WAV, AIFF)"
        >
          <ul>
            <li>
              <p>
                Для экспорта аудио в форматах <mark className="audio">MP3</mark>,{" "}
                <mark className="audio">WAV</mark> или <mark className="audio">AIFF</mark>{" "}
                нужно выбрать соответствующие значения в списке{" "}
                <mark className="select">«Format»</mark> в настройках модуля вывода.
              </p>
              <ArticleMedia
                caption="Выбор формата аудио"
                src="after-effects/export/export-audio.png"
                type="image"
              />
            </li>
            <li>
              После настройки параметров закройте лишние окна и запустите экспорт в{" "}
              <mark className="select">«Render Queue»</mark>.
            </li>
          </ul>
        </NestedDetailsSummary>
      </DetailsSummary>
    </div>
  );
};

export default AeExport;
