import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import CodeSnippet from "../../../components/content/CodeSnippet";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

import TgsToJsonConverter from "../../../components/features/converters/ConverterTgsToJson";

const ProjectStructureExample = `Обзор на Ford Focus 2
├── Video
│   ├── Car_Broll             // общие кадры автомобиля (езды, экстерьер, интерьер)
│   ├── Talking_Head          // блогер в кадре
│   ├── Screen_Recordings     // съёмки с экрана (сравнения, сайты, реклама)
│   └── Phone_Footage         // вертикальные видео, снятые на смартфон
├── Proxy                     // прокси-файлы (при необходимости)
├── Audio
│   ├── Voiceover             // озвучка, записанная отдельно
│   ├── Music                 // фоновая музыка
│   └── SFX                   // звуковые эффекты: щелчки, шум шин, рев мотора
├── Images
│   ├── Diagrams              // технические схемы, инфографика
│   ├── Screenshots           // скриншоты с сайтов, приложений
│   └── Memes                 // мемы и вставки для юмора
├── Export
│   ├── Previews              // превью для согласования
│   ├── Final                 // финальные рендеры
│   └── Shorts                // вертикальные версии и клипы для соцсетей
├── техническое задание.docx
├── сценарий.docx
├── project.prproj            // если вдруг пригодится Premiere для сборки и нарезки клипов
└── project.aep               // главный проект After Effects`;

const AeImport: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="import-workflow"
        tag="пайплайн, импорт, подготовка исходников, конвертация, монтажный кодек, shutter encoder, iphone, color space, frame rate"
        title="Какие действия нужно совершить с чужими исходниками, прежде чем начать работу?"
      >
        <p>
          Работа с видео состоит из двух ключевых этапов: подготовки исходных материалов и
          финального экспорта. От того, насколько грамотно вы подойдёте к первому этапу,
          зависит стабильность работы программы и итоговый результат. В этой статье мы
          разберём, как правильно подготовить чужие исходники перед импортом в{" "}
          <mark className="app">Adobe After Effects</mark>, чтобы избежать проблем с
          производительностью, артефактами и ошибками.
        </p>
        <Divider>Шаг 1: Организация файлов</Divider>
        <p>
          Прежде чем импортировать файлы в{" "}
          <mark className="app">Adobe After Effects</mark> и создавать композиции,
          перенесите все исходники в отдельную папку или на отдельный диск, а не храните
          их на рабочем столе или в системных директориях. Избегайте кириллицы в названиях
          папок и файлов — используйте латиницу. Это упростит работу с большим количеством
          материала, избавит от поиска нужных файлов по разным местам и, отчасти, от
          необходимости выполнять<sup>1</sup>{" "}
          <mark className="select">«Collect Files»</mark> для передачи или архивации
          проекта.
        </p>
        <Addition type="info">
          <sup>1</sup> Если при передаче проекта ссылки на материалы всё же сбились, можно
          указать один файл с помощью <mark className="select">«Replace Footage»</mark> в
          окне <mark className="select">«Project»</mark>. Остальные файлы также должны
          автоматически подтянуться.
        </Addition>
        <p>
          Структура проекта может выглядеть примерно так — многое может зависеть от ваших
          задач и предпочтений. Главное — чтобы все файлы для монтажа были собраны в одном
          месте и всегда под рукой.
        </p>
        <CodeSnippet language="shell">{ProjectStructureExample}</CodeSnippet>
        <Divider>Шаг 2: Анализ исходников</Divider>
        <p>
          Для начала давайте разберёмся в базовых понятиях. Любой видеофайл состоит из
          двух частей: <mark className="word">контейнера</mark>, например{" "}
          <mark className="file">MOV</mark> или <mark className="file">MP4</mark>, и{" "}
          <mark className="word">кодека</mark>, например,{" "}
          <mark className="video">H.264</mark> или{" "}
          <mark className="video">Apple ProRes</mark>.{" "}
          <mark className="word">Контейнер</mark> — это просто «коробка», в которой лежат
          видео- и аудиодорожки. Сам по себе он не влияет на качество. А вот{" "}
          <mark className="word">кодек</mark> — это алгоритм сжатия, который и определяет,
          насколько качественным и «тяжёлым» будет видео, а также насколько удобно с ним
          будет работать в монтажной программе.
        </p>
        <p>
          После первичной сортировки файлов стоит уточнить сведения об исходниках: в каком
          кодеке и контейнере они сохранены, в каком цветовом пространстве записаны,
          какова частота кадров и узнать другие технические параметры. Для этого можно
          воспользоваться онлайн-сервисом{" "}
          <a href="https://mediaarea.net/MediaInfoOnline">MediaInfo Online</a> или его
          локальной версией <a href="https://mediaarea.net/en/MediaInfo">MediaInfo</a>,
          доступной для многих операционных систем.
        </p>
        <Addition type="info">
          Для подробного просмотра данных в <mark className="app">MediaInfo</mark>{" "}
          используйте режим <mark className="select">«View» → «Tree»</mark> или{" "}
          <mark className="select">«Вид» → «Дерево»</mark> в русской версии, либо
          воспользуйтесь консольной версией программы —{" "}
          <mark className="app">MediaInfo-CLI</mark>.
        </Addition>
        <Divider>Разбираемся с форматами</Divider>
        <p>
          Вы, наверное, спросите:{" "}
          <mark className="quote">«А зачем проверять исходники?»</mark>. Потому что это
          корень ответов на 90% вопросов про тормоза, «артефакты» и «чёрные кадры» в чатах
          и форумах. Спрашивающий обычно молчит, с какими файлами работает, но часто
          кидает один и тот же железный аргумент:{" "}
          <mark className="quote">
            «В проигрывателе-то всё нормально проигрывается!!!!»
          </mark>
          .
        </p>
        <ArticleMedia
          src="Acrm-wQjoaU"
          type="youtube"
        />
        <p>
          Так вот: проигрыватель и <mark className="app">Adobe After Effects</mark> — это
          не одно и то же. Возьмём для примера <mark className="video">H.264</mark>,
          который многие так любят тащить в проект. Это кодек для просмотра и хранения
          видео, а не для монтажа. В нём есть только опорные{" "}
          <mark className="codec-param">I-кадры</mark> — единственные полноценные картинки
          во всём потоке. Всё остальное — это прогнозные{" "}
          <mark className="codec-param">P-кадры</mark>, которые несут в себе только
          инструкцию типа «возьми предыдущий кадр и подвинь вот тот кусок», и, что хуже
          всего, двунаправленные <mark className="codec-param">B-кадры</mark>, которые для
          отрисовки требуют заглянуть не только в прошлое, но и в будущее, ссылаясь на
          кадры, которые ещё даже не были показаны. Подробнее о структуре{" "}
          <mark className="codec-param">GOP</mark> можно почитать в{" "}
          <a href="#advanced-export-settings">этой статье</a>.
        </p>
        <p>
          И вот тут проявляется разница: <mark className="app">Adobe After Effects</mark>{" "}
          не просто показывает видео, а разбирает его и преобразует в свой внутренний,
          несжатый формат, чтобы вы могли работать с каждым кадром. Из-за этого процессору
          приходится распутывать сложный поток из <mark className="codec-param">P</mark>,{" "}
          <mark className="codec-param">I</mark> и <mark className="codec-param">B</mark>
          -кадров при каждом действии пользователя. Это не только дико тормозит всю
          работу, но и вытаскивает наружу все косяки сжатия: артефакты, дёргания, «чёрные
          кадры», а также утечки оперативной памяти и ошибки вроде{" "}
          <mark className="warning">«Out of Memory»</mark>.
        </p>
        <ArticleMedia
          caption="Пример артефактов проблемного исходника из интернета"
          src="legacy/h264_artifacts.webm"
          type="video"
        />
        <p>
          С аудио и изображениями тоже не всё гладко.{" "}
          <mark className="app">Adobe After Effects</mark> нередко некорректно работает со
          сжатым звуком в формате <mark className="audio">MP3</mark>: звук может исчезать,
          искажаться или растягиваться. Со сжатыми изображениями, особенно в формате{" "}
          <mark className="image">JPEG</mark>, тоже возможны похожие проблемы.
        </p>
        <ArticleMedia
          caption="Пример артефактов проблемного аудио"
          src="legacy/aftereffects/audio_artifacts.mp4"
          type="video"
        />
        <p>
          Главный вывод: для стабильной и быстрой работы в{" "}
          <mark className="app">Adobe After Effects</mark> нужно использовать правильно
          подготовленные файлы. Для работы с видео рекомендуется использовать монтажные
          кодеки<sup>1</sup>, например <mark className="video">Apple ProRes</mark>, для
          изображений — <mark className="image">TIFF</mark>,{" "}
          <mark className="image">PSD</mark> или <mark className="image">PNG</mark>, а для
          звука — <mark className="audio">WAV</mark>. Перекодировать исходники можно с
          помощью таких программ, как <mark className="app">Shutter Encoder</mark> или{" "}
          <mark className="app">HandBrake</mark>.
        </p>
        <Addition type="info">
          <p>
            <sup>1</sup> Работа с видео в сжатых кодеках, таких как{" "}
            <mark className="video">H.264</mark>, — это крайняя мера. К ней прибегают,
            лишь когда перекодирование в монтажный формат невозможно из-за нехватки
            дискового пространства. Хотя это и экономит место, производительность страдает
            из-за постоянной декомпрессии «на лету». Если вы всё же вынуждены использовать{" "}
            <mark className="video">H.264</mark>, лучшим компромиссом будет перекодировать
            его в режим <mark className="word">All-Intra</mark>, или{" "}
            <mark className="word">I-Frame Only</mark>. В таком файле каждый кадр
            становится ключевым, что значительно ускоряет работу. Размер файла увеличится,
            но, как правило, он всё равно будет меньше, чем у условного{" "}
            <mark className="video">Apple ProRes</mark>.
          </p>
        </Addition>
        <Divider>Разбираемся с цветовыми пространствами</Divider>
        <p>
          Современные iPhone, если не копаться в настройках, по умолчанию записывают видео
          в <mark className="color-space">HLG</mark> или{" "}
          <mark className="color-space">Rec.2020</mark>. Это цветовое пространство шире
          стандартного <mark className="color-space">Rec.709</mark>. На бумаге звучит
          круто, но на практике при работе в{" "}
          <mark className="app">Adobe After Effects</mark> и других монтажных программах
          это почти всегда оборачивается проблемами: кадры выглядят выжженными и
          пересвеченными из-за несоответствия между цветовыми пространствами исходников и
          самого проекта.
        </p>
        <ArticleMedia
          caption="Терминал — MediaInfo-CLI"
          src="legacy/mediainfo_example.png"
          type="image"
        />
        <p>При работе с такими исходниками у вас есть два варианта:</p>
        <ul>
          <li>
            Сохранить оригинальное цветовое пространство и преобразовывать его уже в{" "}
            <mark className="app">Adobe After Effects</mark> с помощью{" "}
            <mark className="select">«Interpret Footage»</mark>, а также установить нужное
            рабочее цветовое пространство в настройках проекта{" "}
            <mark className="select">«Project Settings»</mark>.
          </li>
          <li>
            Конвертировать исходник и преобразовать его цветовое пространство — это самый
            простой и универсальный способ обеспечить совместимость при встраивании в
            какой-нибудь проект. Это можно сделать с помощью конвертера вроде{" "}
            <mark className="app">Shutter Encoder</mark>.
          </li>
        </ul>
        <Addition type="warning">
          При конвертации из цветового пространства исходника в{" "}
          <mark className="color-space">Rec.709</mark> цвета могут незначительно
          измениться, а также немного сузятся возможности для детальной цветокоррекции,
          поскольку часть информации будет утрачена. Однако для большинства задач, не
          связанных с цветокоррекцией, этот способ является предпочтительным из-за своей
          простоты и предсказуемости при внедрении в какой-нибудь проект с разными
          камерами.
        </Addition>
        <ArticleMedia
          src="vlFdAqoriL0"
          type="youtube"
        />
        <Divider>Разбираемся с частотой кадров</Divider>
        <p>
          Теперь поговорим про переменную частоту кадров. Многие смартфоны и некоторые
          камеры пишут видео именно в этом режиме. Даже если в настройках записи стоит 60
          FPS, на деле частота может плавать из-за перегрева устройства или плохого
          освещения. Такие перепады <mark className="app">Adobe After Effects</mark>{" "}
          переносит плохо: кадры могут дублироваться или перемешиваться, а алгоритмы —
          например, трекинг объекта — работать с ошибками. Чтобы этого избежать, видео
          стоит предварительно конвертировать<sup>1</sup> в постоянную частоту кадров,
          например через <mark className="app">Shutter Encoder</mark> или{" "}
          <mark className="app">HandBrake</mark>.
        </p>
        <Addition type="warning">
          <sup>1</sup> Не путайте конвертацию с интерпретацией через{" "}
          <mark className="select">«Interpret Footage» → «Conform to frame rate»</mark>.
          Если выставить частоту вручную там, вы просто ускорите или замедлите видео, а не
          исправите проблему.
        </Addition>
        <p>
          И последнее: не мешайте в одном проекте футажи с разной частотой кадров. Это ещё
          одна причина «дёрганого» видео, так как программе придётся дублировать кадры,
          чтобы всё синхронизировать. Убедитесь, что частота кадров проекта и исходников
          совпадает. Проверить это можно в окне <mark className="select">«Project»</mark>,
          в столбце <mark className="select">«Frame Rate»</mark>.
        </p>
        <ArticleMedia
          src="p3Jb3UPAw-w"
          type="youtube"
        />
        <Divider>Шаг 3: Конвертируем материалы в рабочие форматы</Divider>
        <p>
          Чтобы перекодировать исходники в <mark className="video">монтажный кодек</mark>{" "}
          или привести в порядок другие свойства, установите и запустите программу для
          конвертации файлов — для этого подойдёт <mark className="app">HandBrake</mark>,{" "}
          <mark className="app">Format Factory</mark>, <mark className="app">VLC</mark>{" "}
          или любая другая. В этой статье используется{" "}
          <mark className="app">Shutter Encoder</mark> — бесплатный и надёжный конвертер
          видео, аудио и изображений с открытым исходным кодом, работающий на базе{" "}
          <mark className="app">FFmpeg</mark> и поддерживающий большое количество
          форматов. Скачать его можно по{" "}
          <a href="https://www.shutterencoder.com/">этой</a> ссылке.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Чтобы скачать программу бесплатно, на сайте установите чекбокс{" "}
              <mark className="select">
                «I do not wish to participate in the development of the software»
              </mark>
              , а затем нажмите на кнопку скачивания для вашей операционной системы.
            </li>
            <li>
              Рекомендуется использовать английский интерфейс программы — в русской
              локализации встречаются некорректные переводы, которые могут сбить вас с
              толку. Чтобы сменить язык, откройте настройки программы, нажав на иконку{" "}
              <mark className="select">«шестерёнки»</mark> в левом верхнем углу. В
              открывшемся окне найдите параметр{" "}
              <mark className="select">«Установить язык»</mark>, измените его значение на{" "}
              <mark className="select">«English»</mark> и подтвердите перезапуск.
            </li>
          </ul>
        </Addition>
        <p>
          На первый взгляд интерфейс <mark className="app">Shutter Encoder</mark> может
          показаться запутанным и сложным, но на самом деле это не так. Для
          перекодирования исходников пользователю нужно выполнить всего несколько
          действий.
        </p>
        <ul>
          <li>
            <p>
              Первым делом импортируйте в программу исходники или целую папку с помощью
              кнопки <mark className="select">«Browse»</mark> или перетащите их в окно
              программы для добавления в очередь.
            </p>
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_import.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Затем выберите в <mark className="select">«Choose Function»</mark> нужный
              формат для конвертации, например <mark className="video">Apple ProRes</mark>{" "}
              или <mark className="video">H.264</mark>. Изменение данного параметра будет
              относиться ко всем файлам в очереди конвертации.
            </p>
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_choose_function.png"
              type="image"
            />
            <ul>
              <li>
                <p>
                  Если вы выбрали <mark className="video">Apple ProRes</mark> — нужно
                  выбрать его тип: <mark className="video">Apple ProRes 422</mark> или{" "}
                  <mark className="video">Apple ProRes 4444</mark>, а также его подвид.
                </p>
                <ArticleMedia
                  caption="Shutter Encoder"
                  src="legacy/shutter_encoder_select_type_prores.png"
                  type="image"
                />
                <Addition type="info">
                  Если вы конвертируете исходник, снятый на свежие iPhone, — отключите
                  вторую аудиодорожку во вкладке{" "}
                  <mark className="select">«Audio Settings»</mark>, иначе при нажатии на{" "}
                  <mark className="select">«Start function»</mark> вы можете столкнуться с
                  ошибкой{" "}
                  <mark className="warning">
                    «Error opening output files: Invalid argument»
                  </mark>
                  .
                  <ArticleMedia
                    caption="Shutter Encoder"
                    src="legacy/shutter_encoder_disable_second_audio.png"
                    type="image"
                  />
                </Addition>
              </li>
              <li>
                <p>
                  Если вы выбрали <mark className="video">H.264</mark> или{" "}
                  <mark className="video">H.265</mark>, то для этого формата потребуется
                  выполнить ещё несколько действий.
                </p>
                <Addition type="danger">
                  Учтите, что <mark className="video">H.264</mark> и{" "}
                  <mark className="video">H.265</mark> не являются{" "}
                  <mark className="video">монтажными кодеками</mark>, и использовать их в
                  работе в <mark className="app">Adobe After Effects</mark> не
                  рекомендуется из-за их непредсказуемого поведения, особенно если вы
                  собираетесь делать трекинг или использовать{" "}
                  <mark className="plugin">Roto Brush</mark>.
                </Addition>
                <ul>
                  <li>
                    <p>
                      Для начала нужно определиться с режимом кодирования, который
                      определяет, как кодек управляет битрейтом, что напрямую влияет на
                      качество и размер итогового файла.
                    </p>
                    <ul>
                      <li>
                        <mark className="codec-param">CQ (Constant Quality)</mark> —
                        динамически распределяет битрейт в зависимости от сложности сцены
                        и поддерживает стабильное качество на всём протяжении ролика. Это
                        оптимальный выбор для большинства задач.
                      </li>
                      <li>
                        <mark className="codec-param">VBR (Variable Bitrate)</mark> —
                        требует настройки целевого и максимального битрейта, подобрать
                        которые с первого раза непросто, особенно если важно сохранить
                        высокое качество и при этом не получить слишком тяжёлый файл.
                      </li>
                      <li>
                        <mark className="codec-param">CBR (Constant Bitrate)</mark> —
                        использует постоянный битрейт независимо от сложности кадра, что
                        нередко приводит к «раздутому» размеру файла и не гарантирует
                        стабильное качество в разных частях видео.
                      </li>
                    </ul>
                    <p>
                      Поскольку режим <mark className="select">«CQ»</mark> обеспечивает
                      лучший баланс между качеством и размером, измените стандартную
                      настройку, переключившись с <mark className="select">«VBR»</mark> на
                      него.
                    </p>
                    <ArticleMedia
                      caption="Shutter Encoder"
                      src="legacy/shutter_encoder_change_cq_h264.mp4"
                      type="video"
                    />
                    <Addition type="info">
                      <ul>
                        <li>
                          Чем меньше значение <mark className="select">«CQ»</mark>, тем
                          лучше качество. По умолчанию устанавливается{" "}
                          <mark className="copy">23</mark> — этого достаточно для
                          большинства случаев.
                        </li>
                        <li>
                          Если нужно сохранить почти максимальное качество, укажите
                          значение от <mark className="copy">17</mark> до{" "}
                          <mark className="copy">20</mark>. Однако размер файла при этом
                          заметно возрастёт.
                        </li>
                        <li>
                          Экстремальные значения, например{" "}
                          <mark className="copy">50</mark>, использовать не рекомендуется
                          — в итоге можно получить «кашу» из пикселей.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <p>
                      Укажите битрейт для аудио в параметре{" "}
                      <mark className="select">«Audio Bitrate»</mark>; достаточно
                      установить значение <mark className="copy">320</mark> Кбит/с.
                    </p>
                    <ArticleMedia
                      caption="Shutter Encoder"
                      src="legacy/shutter_encoder_change_audio_bitrate_h264.mp4"
                      type="video"
                    />
                  </li>
                  <li>
                    <p>
                      При необходимости включите аппаратное ускорение для декодирования
                      видео в параметре{" "}
                      <mark className="select">«Hardware Acceleration»</mark>. В
                      большинстве случаев это ускорит процесс конвертации видео.
                    </p>
                    <ArticleMedia
                      caption="Shutter Encoder"
                      src="legacy/shutter_encoder_enable_hardware_acceleration_h264.png"
                      type="image"
                    />
                    <Addition type="info">
                      Выбор значений в этом параметре зависит от формата, вашего
                      устройства и установленных драйверов.
                    </Addition>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <p>
              При необходимости конвертируйте цветовое пространство во вкладке{" "}
              <mark className="select">«Colorimetry»</mark>, если оно отличается от{" "}
              <mark className="color-space">Rec.709</mark>. Цветовое пространство
              исходника можно узнать через <mark className="app">MediaInfo</mark>.
            </p>
            <Addition type="warning">
              Цвета после конвертации из одного цветового пространства в другое могут
              незначительно измениться.
            </Addition>
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_convert_colorspace.mp4"
              type="video"
            />
          </li>
          <li>
            <p>
              При необходимости преобразуйте переменную частоту кадров в постоянную. Это
              можно сделать во вкладке <mark className="select">«Advanced features»</mark>
              .
            </p>
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_convert_to_constant_fps.mp4"
              type="video"
            />
          </li>
          <li>
            <p>
              После настройки нужных параметров нажмите на кнопку{" "}
              <mark className="select">«Start function»</mark> для начала конвертации. По
              умолчанию программа сохраняет конвертированные файлы в ту же папку, откуда
              были импортированы исходники.
            </p>
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_start_function.png"
              type="image"
            />
            <Addition type="info">
              <ul>
                <li>
                  Если в программу добавлено несколько исходников, они будут
                  конвертированы последовательно в соответствии с вашими настройками.
                </li>
                <li>
                  При необходимости вы можете указать свою директорию для сохранения
                  файлов во вкладке <mark className="select">«Output»</mark>.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
        <Divider>Используем шаблоны для конвертации</Divider>
        <p>
          <mark className="app">Shutter Encoder</mark> поддерживает пресеты для быстрого
          применения настроек конвертации к импортированным в программу файлам, чтобы
          каждый раз не выбирать нужные параметры. Чтобы открыть окно с шаблонами
          настроек, нажмите на значок звезды, расположенный правее кнопки{" "}
          <mark className="select">«Start function»</mark>.
        </p>
        <ArticleMedia
          caption="Shutter Encoder"
          src="legacy/shutter_encoder_my_functions.png"
          type="image"
        />
        <p>
          Если вы ни разу не сохраняли шаблон конвертации, окно сохранённых функций будет
          пустым. Чтобы сохранить свои настройки конвертации, нажмите комбинацию клавиш{" "}
          <mark className="key">Ctrl + S</mark> и в открывшемся окне сохранения введите
          название шаблона. Также вы можете воспользоваться готовыми шаблонами конвертации
          в популярные форматы из{" "}
          <a href="https://github.com/aechat/links/tree/main/public/files/shutterencoder_templates">
            репозитория этого сайта на GitHub
          </a>{" "}
          и импортировать их в программу простым перетаскиванием{" "}
          <mark className="file">ENC</mark> в окно{" "}
          <mark className="select">«My functions»</mark> или переместить файлы в папку{" "}
          <mark className="path">Shutter Encoder</mark> в директории текущего пользователя
          операционной системы.
        </p>
        <Divider>Импортируем материалы в проект</Divider>
        <p>
          После импорта подготовленных материалов в программу вы можете отсортировать их
          вручную в окне <mark className="select">«Project»</mark>, создав папки и
          разместив там нужные файлы, или автоматизировать этот процесс, например, с
          помощью <mark className="plugin">Declutter</mark> или{" "}
          <mark className="plugin">Organize Project Assets Pro</mark>.
        </p>
        <Addition type="info">
          <p>
            При необходимости вы можете создать шаблон с уже созданными папками и
            загружать его при создании нового проекта. Чтобы задать свой файл проекта как
            шаблон, откройте настройки программы{" "}
            <mark className="select">«Edit» → «Preferences» → «Project»</mark>
            <sup>1</sup>, включите параметр{" "}
            <mark className="select">«New Project loads template»</mark>, а затем выберите
            свой файл проекта с помощью{" "}
            <mark className="select">«Choose Project Template»</mark>. Если файл шаблона
            будет удалён или перемещён, программа загрузит пустой проект и предупредит
            вас, что файл не найден.
          </p>
          <Addition type="info">
            <sup>1</sup> В предыдущих версиях{" "}
            <mark className="app">Adobe After Effects</mark> этот параметр находится в
            разделе <mark className="select">«Media & Disk Cache»</mark>.
          </Addition>
          <ArticleMedia
            caption="Выбор шаблонного проекта при создании нового проекта"
            src="legacy/aftereffects/choose_project_template.png"
            type="image"
          />
        </Addition>
        <p>
          Если вы уже импортировали исходники, а затем переконвертировали их — замените
          файлы в окне <mark className="select">«Project»</mark>. Для этого нажмите{" "}
          <mark className="key">ПКМ</mark> по нужному исходнику и выберите{" "}
          <mark className="select">«Replace Footage» → «File»</mark> или нажмите на
          комбинацию клавиш <mark className="key">Ctrl + H</mark>, выделив исходник,
          который нужно заменить. После этого укажите путь до нового файла в системном
          файловом менеджере.
        </p>
        <ArticleMedia
          caption="Заменяем футаж с помощью контекстного меню"
          src="legacy/aftereffects/replace_footage.png"
          type="image"
        />
        <Addition type="info">
          Подробную информацию о пайплайне импорта и экспорта вы можете узнать в{" "}
          <a href="https://t.me/montage_tutors/2">записи канала «Montage Tutors»</a> или в
          статьях разделов <a href="#import">«Импорт»</a> и{" "}
          <a href="#export">«Экспорт»</a> на этой странице.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-color-space"
        tag="пересвет, айфон, яркость, цветовые пространства"
        title="Как исправить искажённые цвета после импорта исходников?"
      >
        <p>
          Проблема искажённых цветов в предпросмотре всё чаще преследует монтажёров и
          обычно возникает из-за несоответствия между цветовыми пространствами, указанными
          в настройках проекта и у исходника. Например, когда вы импортируете исходник,
          записанный в <mark className="color-space">Rec.2020</mark> с iPhone, в проект,
          где в <mark className="select">«Working Color Space»</mark> установлено значение{" "}
          <mark className="select">«Rec.709»</mark>.
        </p>
        <p>
          Чтобы это исправить, нужно привести проект и исходник к одному виду, чтобы
          совпадали их цветовое пространство и тип сигнала, или корректно интерпретировать
          исходник. В этой статье действия по большей части ориентированы на работу с
          исходниками, снятыми на iPhone, так как они встречаются чаще всего, однако те же
          подходы применимы и к материалам с других камер.
        </p>
        <Divider>Что делать с цветовым пространством?</Divider>
        <p>
          По умолчанию в <mark className="app">Adobe After Effects</mark> управление
          цветом отключено, так как в{" "}
          <mark className="select">«Working Color Space»</mark> установлено значение{" "}
          <mark className="select">«None»</mark>. Поэтому программа не выполняет
          преобразования между цветовыми пространствами и отображает изображение «как
          есть». Но в процессе работы с разными проектами вы могли изменить это значение,
          например на <mark className="color-space">sRGB IEC61966-2.1</mark> или{" "}
          <mark className="color-space">Rec.709 Gamma 2.4</mark>. В таком случае при
          импорте HDR-исходников, например <mark className="color-space">Rec.2020</mark> с
          iPhone, цвета могут выглядеть пересвеченными, потому что{" "}
          <mark className="term">HDR</mark> сигнал имеет больший диапазон яркости, чем
          может отобразить <mark className="term">SDR</mark>.
        </p>
        <p>
          В таком случае у вас есть два пути: изменить цветовое пространство всего проекта
          или переопределить его для конкретных исходников. Первый вариант подходит, если
          в проекте используются материалы с одинаковыми параметрами, например снятые на
          одну и ту же камеру, а также если вывод планируется в том же цветовом
          пространстве. Второй вариант — если исходники отличаются, например сняты в
          разных цветовых пространствах, и их нужно привести к одному виду, например{" "}
          <mark className="color-space">Rec.709 Gamma 2.4</mark>.
        </p>
        <Divider>Узнаём о цветовом пространстве исходника и проекта</Divider>
        <p>
          Прежде чем что-либо приводить к одному виду — сначала стоит узнать цветовое
          пространство ваших исходников. Это можно узнать через онлайн-сервис{" "}
          <a href="https://mediaarea.net/MediaInfoOnline">MediaInfo Online</a> или его
          локальной версией <a href="https://mediaarea.net/en/MediaInfo">MediaInfo</a>,
          доступной для многих операционных систем.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Для подробного просмотра данных в <mark className="app">MediaInfo</mark>{" "}
              используйте режим <mark className="select">«View» → «Tree»</mark> или{" "}
              <mark className="select">«Вид» → «Дерево»</mark> в русской версии, либо
              воспользуйтесь консольной версией программы —{" "}
              <mark className="app">MediaInfo-CLI</mark>.
            </li>
            <li>
              Если вы не хотите скачивать <mark className="app">MediaInfo</mark>, то он
              может быть доступен в вашем видеопроигрывателе, например{" "}
              <mark className="app">MPC-HC</mark>.
            </li>
          </ul>
        </Addition>
        <p>
          После открытия метаданных исходника стоит обратить внимание на два поля:{" "}
          <mark className="select">«Transfer characteristics»</mark> и{" "}
          <mark className="select">«Color primaries»</mark>. Первое показывает,{" "}
          <mark className="term">HDR</mark> это или <mark className="term">SDR</mark>, а
          второе — какие используются цветовые координаты. Например,{" "}
          <mark className="color-space">BT.2020</mark> с{" "}
          <mark className="color-space">HLG/PQ</mark> означает, что перед вами исходник в{" "}
          <mark className="term">HDR</mark>, а <mark className="color-space">BT.709</mark>{" "}
          или <mark className="color-space">BT.601</mark> вместе со значением гаммы обычно
          указывают на <mark className="term">SDR</mark>.
        </p>
        <Divider>
          Про замену клипа с помощью{" "}
          <mark className="select">«Replace With After Effects Composition»</mark>
        </Divider>
        <p>
          Если вы переносите исходник из <mark className="app">Adobe Premiere</mark> в{" "}
          <mark className="app">Adobe After Effects</mark> с помощью функции{" "}
          <mark className="select">«Replace With After Effects Composition»</mark>, цвета
          могут заметно исказиться и стать либо пересвеченными, либо «плоскими». Причина
          та же — несоответствие цветовых параметров, так как в{" "}
          <mark className="app">Adobe After Effects</mark> они могут отличаться от
          настроек в <mark className="app">Adobe Premiere</mark> или конфликтовать с ними.
        </p>
        <ul>
          <li>
            <p>
              Если секвенция в <mark className="app">Adobe Premiere</mark> настроена на
              работу с цветовым пространством{" "}
              <mark className="color-space">Rec.2100 HLG</mark>, то после замены клипа на
              мониторе без включенной фукнции отображения{" "}
              <mark className="term">HDR</mark> вы будете видеть пересветы.
            </p>
            <p>
              Проблема в том, что в <mark className="app">Adobe After Effects</mark> при
              переносе выставляется цветовое пространство{" "}
              <mark className="color-space">Rec.2100 HLG W203</mark> у которого яркостный
              диапазон явно больше того, чем может показать{" "}
              <mark className="term">SDR</mark> монитор. Если ваш монитор не поддерживает{" "}
              <mark className="term">HDR</mark> и вы не хотите видеть пересветов и увидеть
              изображение «как есть» — откройте окно{" "}
              <mark className="select">«Project Settings»</mark> с помощью комбинации
              клавиш <mark className="key">Ctrl + Alt + Shift + K</mark>, перейдите во
              вкладку <mark className="select">«Color»</mark> и установите для параметра{" "}
              <mark className="select">«Working Color Space»</mark> значение{" "}
              <mark className="select">«None»</mark>.
            </p>
            <ArticleMedia
              caption="Отключение рабочего цветового пространства"
              src="legacy/aftereffects/disable_rec2100hlgw203.png"
              type="image"
            />
            <Addition type="info">
              <p>
                Если после замены в <mark className="app">Adobe Premiere</mark> цвета
                стали тусклее, проверьте, какое цветовое пространство установилось у
                клипа. Если оно установлено как{" "}
                <mark className="color-space">Rec.709</mark>, переопределите его на{" "}
                <mark className="color-space">Rec.2100 HLG</mark>. Для этого выделите клип
                и задайте нужное значение в{" "}
                <mark className="select">«Override Media Color Space»</mark> в окне{" "}
                <mark className="select">«Lumetri Color» → «Settings»</mark> или{" "}
                <mark className="select">«Interpret Footage» → «Color»</mark>.{" "}
                <em className="article-note-muted">
                  Либо отключите управление цветом через{" "}
                  <mark className="select">
                    «Preserve RGB (disable input color management for this item)»
                  </mark>
                  .
                </em>
              </p>
              <ArticleMedia
                caption="Переопределяем цветовое пространство исходника как Rec.2100 HLG в Adobe Premiere"
                src="legacy/premierepro/override_media_color_space_to_rec2100hlg.png"
                type="image"
              />
            </Addition>
            <p>
              Таким образом вы оставите весь цветовой и яркостный диапазон и сможете
              экспортировать секвенцию в <mark className="color-space">Rec.2100 HLG</mark>{" "}
              из <mark className="app">Adobe Premiere</mark> без особых проблем.
            </p>
            <Addition type="warning">
              <p>
                Учтите, что вы не сможете экспортировать из{" "}
                <mark className="app">Adobe Premiere</mark> в{" "}
                <mark className="video">H.264</mark> и{" "}
                <mark className="video">H.265</mark> секвенции в цветовых пространствах
                отличные от <mark className="color-space">Rec.709</mark>. Для этого
                выберите другой формат, например{" "}
                <mark className="select">«QuickTime»</mark> с кодеком{" "}
                <mark className="video">Apple ProRes 422 HQ</mark> и там установите нужное
                цветовое пространство.
              </p>
              <p>
                При необходимости вы можете конвертировать его позже в нужный вам кодек с
                помощью <mark className="app">Shutter Encoder</mark> без изменения
                цветового пространства.
              </p>
            </Addition>
          </li>
          <li>
            <p>
              Если секвенция в <mark className="app">Adobe Premiere</mark> была настроена
              на работу с <mark className="color-space">Rec.709</mark>, то стоит
              переопределить цветовое простраство у исходников в{" "}
              <mark className="color-space">Rec.709</mark> если они изначально в другом, а
              затем их же и заменить композицией.
            </p>
            <ArticleMedia
              caption="Переопределяем цветовое пространство исходника как Rec.709 в Adobe Premiere"
              src="legacy/premierepro/override_media_color_space_to_rec709.png"
              type="image"
            />
            <p>
              Да, цвета немного исказятся, но вы получите более предсказуемый вариант при
              работе в двух программах. Тем более никто не запрещал позже делать
              цветокоррекцию на ваше усмотрение.{" "}
              <em className="article-note-muted">
                И отключите на всякий случай{" "}
                <mark className="select">«Input Tone Mapping»</mark> в секвенции в{" "}
                <mark className="app">Adobe Premiere</mark>.
              </em>
            </p>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-artifacts"
        tag="зелёный экран, артефакты, глитчи, полосы, youtube, дисковый кэш, аппаратное декодирование"
        title="Как избавиться от артефактов при работе с исходниками?"
      >
        <p>
          Каждый, кто работал в <mark className="app">Adobe After Effects</mark> с чужими
          исходниками, сталкивался с разными проблемами: артефакты и другие графические
          баги могут не только раздражать, но и испортить проект при экспорте. В этой
          статье разберём типичные причины таких ошибок и способы их устранения.
        </p>
        <Divider>Очищаем или отключаем дисковый кэш</Divider>
        <p>
          Если вы работаете с композицией и со временем в предпросмотре начинают
          появляться различные дёргания, старые кадры или что-то ещё, то, возможно, вы
          столкнулись с некорректной работой дискового кэширования. Чтобы быстро очистить
          кэш, перейдите в{" "}
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
        <p>
          При наличии хотя бы 32 ГБ оперативной памяти и мощного процессора дисковый кэш
          можно отключить, особенно если вы редко работаете со сложными сценами. Для этого
          снимите флажок <mark className="select">«Enable Disk Cache»</mark> в{" "}
          <mark className="select">«Edit» → «Preferences» → «Disk»</mark>
          <sup></sup>. Это снизит риск сбоев при воспроизведении кэшированных кадров,
          однако функция предпросмотра кадров с диска станет недоступна.
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«Media & Disk Cache»</mark>.
        </Addition>
        <ArticleMedia
          caption="Отключаем дисковый кэш"
          src="legacy/aftereffects/enable_disk_cache.png"
          type="image"
        />
        <Divider>Исправляем проблемные исходники перекодированием</Divider>
        <p>
          Непредсказуемые артефакты часто возникают, если в проект импортированы
          материалы, скачанные из интернета — например, с{" "}
          <mark className="web">YouTube</mark>. Такие сервисы перекодируют видео
          собственными алгоритмами, которые не всегда подходят для монтажа. В конечном
          итоге процессору приходится каждый раз распутывать поток кадров и сложные
          последовательности <mark className="codec-param">P</mark>,{" "}
          <mark className="codec-param">I</mark> и <mark className="codec-param">B</mark>
          -кадров. Иногда он делает это с ошибками — и на экране предпросмотра могут
          появиться артефакты.
        </p>
        <ArticleMedia
          caption="Пример артефактов проблемного исходника из интернета"
          src="legacy/h264_artifacts.webm"
          type="video"
        />
        <p>
          Чтобы избежать проблем с такими видео, их лучше перекодировать в формат для
          монтажа — например, <mark className="video">Apple ProRes 422</mark>, где каждый
          кадр хранится как отдельное изображение. Это обычная практика, которой стоит
          придерживаться, если вы сомневаетесь в стабильности исходников. Для конвертации
          видео в <mark className="video">монтажные кодеки</mark> подойдут{" "}
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
          В некоторых случаях <mark className="app">Adobe After Effects</mark> может
          некорректно воспроизводить аудиодорожку: пропускать фрагменты звука,
          воспроизводить её растянутой или с искажениями при использовании{" "}
          <mark className="audio">MP3</mark> или других форматов. Чаще всего это решается
          конвертацией в <mark className="audio">WAV</mark> через{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">Adobe Audition</mark> или{" "}
          <mark className="app">EZ CD Audio Converter</mark> и заменой файла в проекте.
        </p>
        <ArticleMedia
          caption="Пример артефактов проблемного аудио"
          src="legacy/aftereffects/audio_artifacts.mp4"
          type="video"
        />
        <Divider>Заменяем проблемные исходники</Divider>
        <p>
          После конвертации перейдите в окно <mark className="select">«Project»</mark>,
          выделите исходник, файл которого вы хотите заменить, нажмите{" "}
          <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="select">«Replace Footage» → «File»</mark>. В открывшемся
          файловом менеджере выберите файл, который вы получили после конвертации. При
          необходимости проделайте те же действия с остальными проблемными исходниками в
          вашем проекте.
        </p>
        <ArticleMedia
          caption="Project"
          src="legacy/aftereffects/replace_footage.png"
          type="image"
        />
        <Divider>Проверяем жёсткий диск, на котором хранится проект</Divider>
        <p>
          В редких случаях артефакты может вызывать неисправный жёсткий диск, на котором
          вы храните свой проект. Такое возможно, если у вас плохой кабель для подключения
          диска или сам диск повреждён. Попробуйте переместить исходники в другое место, а
          затем переподключить их в проекте и проверить, появится ли проблема снова.
        </p>
        <ContentFilter
          windowsContent={
            <>
              <Divider>
                Боремся с «зелёной заливкой» на устройствах с видеокартами AMD
              </Divider>
              <p>
                Если при работе с исходниками вместо видео появляется «зелёная заливка»,
                попробуйте отключить аппаратное декодирование в настройках программы. Для
                этого перейдите в{" "}
                <mark className="select">«Edit» → «Preferences» → «Import»</mark>, снимите
                флажок{" "}
                <mark className="select">«Enable hardware accelerated decoding»</mark> и
                перезагрузите программу. Такое поведение часто встречается на устройствах
                с дискретным или встроенным в процессор видеочипом{" "}
                <mark className="hardware">AMD</mark>. Если это не поможет, придётся
                отправлять исходники на конвертацию.
              </p>
              <ArticleMedia
                caption="Отключаем аппаратное декодирование исходников"
                src="legacy/aftereffects/disable_hardware_accelerated_decoding.png"
                type="image"
              />
              <Divider>
                Боремся с артефактами из-за драйверов{" "}
                <mark className="hardware">NVIDIA</mark>
              </Divider>
              <p>
                В некоторых версиях драйверов <mark className="hardware">NVIDIA</mark>,
                как <mark className="copy">Game Ready</mark>, так и{" "}
                <mark className="copy">Studio</mark>, могут появляться разные артефакты.
                Например, баг, создающий «полосы» на изображении в предпросмотре и при
                экспорте, связан с некорректной работой драйверов версий от 55X до 56X.
                Для решения достаточно обновить драйверы видеокарты — желательно до версии{" "}
                <mark className="app">NVIDIA Studio Driver</mark> для более стабильной
                работы с монтажными программами — либо установить более старую версию.
              </p>
              <Addition type="info">
                Загрузить драйверы <mark className="app">NVIDIA Studio</mark> можно на{" "}
                <a href="https://www.nvidia.com/en-us/geforce/drivers/">
                  официальной странице загрузки
                </a>
                . На сайте укажите модель видеокарты, операционную систему и не забудьте
                выбрать в <mark className="select">«Download Type»</mark> значение{" "}
                <mark className="select">«Studio Driver»</mark>.
              </Addition>
              <Divider>
                Работаем с импортёром Autokroma Influx вместо стандартного
              </Divider>
              <p>
                Если вы по каким-то причинам наотрез отказываетесь от перекодирования
                исходников, то можете попробовать использовать «принудительное»
                декодирование файлов через сторонний плагин{" "}
                <mark className="plugin">Autokroma Influx</mark>. Он может помочь
                уменьшить вероятность ошибок и сбоев при работе с исходниками, скачанными
                из интернета. Для этого в настройках плагина{" "}
                <mark className="plugin">Autokroma Influx</mark> установите для параметра{" "}
                <mark className="select">«Formats»</mark> значение{" "}
                <mark className="select">
                  «Force Influx to override all Adobe importers»
                </mark>
                . Таким образом вы принудительно переопределите декодирование всех
                поддерживаемых форматов через{" "}
                <mark className="plugin">Autokroma Influx</mark>.
              </p>
              <ArticleMedia
                caption="Autokroma Influx"
                src="legacy/influx_force_override.png"
                type="image"
              />
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы открыть настройки{" "}
                    <mark className="plugin">Autokroma Influx</mark>, запустите{" "}
                    <mark className="file">INFLUX.EXE</mark>, находящийся по пути{" "}
                    <mark className="path">
                      C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore\Autokroma
                      Influx
                    </mark>
                    .
                  </li>
                  <li>
                    Список форматов, поддерживаемых{" "}
                    <mark className="plugin">Autokroma Influx</mark>, указан{" "}
                    <a href="https://www.autokroma.com/Influx/Main_Features">
                      на официальном сайте
                    </a>
                    .
                  </li>
                </ul>
              </Addition>
              <Addition type="danger">
                <ul>
                  <li>
                    Принудительное переопределение декодирования через{" "}
                    <mark className="plugin">Autokroma Influx</mark> вы выполняете на свой
                    страх и риск! Стабильность работы и производительность вашего проекта
                    при использовании этой опции не гарантируется.
                  </li>
                  <li>
                    Если возникают проблемы с проектом, верните значение параметра{" "}
                    <mark className="select">«Formats»</mark> обратно на{" "}
                    <mark className="select">
                      «Use Influx for new formats, codecs and as a fallback (Default)»
                    </mark>{" "}
                    и перекодируйте ваши исходники в монтажный кодек.
                  </li>
                </ul>
              </Addition>
              <p>
                Если вы не хотите переопределять стандартный импортёр, просто переименуйте
                нужный исходник, добавив в конец имени файла{" "}
                <mark className="code">.INFLUX</mark>. Например, файл{" "}
                <mark className="file">IMG_1294.MP4</mark> можно переименовать в{" "}
                <mark className="file">IMG_1294.MP4.INFLUX</mark>. Такой файл будет
                принудительно декодирован через{" "}
                <mark className="plugin">Autokroma Influx</mark> вне зависимости от
                настройки <mark className="select">«Formats»</mark>.
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-variable-frame-rate-issues"
        tag="переменный фпс, пропуски кадров, vfr, интерпретация видео, variable frame rate, frame drops"
        title="Почему при импорте исходника с переменной частотой кадров его длина в композиции короче, чем в видеопроигрывателе?"
      >
        <p>
          При импорте <mark className="app">Adobe After Effects</mark> преобразовывает
          видео покадрово, не учитывая особенности переменной или дробной частоты кадров.
          В результате такие файлы могут содержать дублирующиеся кадры, которые программа
          автоматически пропускает. Из-за этого итоговая длительность видео в проекте
          может оказаться короче, чем при воспроизведении того же файла в обычном
          видеопроигрывателе.
        </p>
        <p>
          Чтобы исправить эту проблему, измените частоту кадров с помощью интерпретации.
          Для этого выделите ваш исходник в окне <mark className="select">«Project»</mark>{" "}
          и нажмите комбинацию клавиш <mark className="key">Ctrl + Alt + G</mark>. В
          открывшемся окне в разделе <mark className="select">«Frame Rate»</mark>{" "}
          установите для <mark className="select">«Conform to frame rate»</mark> ожидаемое
          количество кадров в секунду.
        </p>
        <Addition type="warning">
          <mark className="select">«Conform to frame rate»</mark> может изменить скорость
          вашего видео. Если такой вариант вас не устраивает — воспользуйтесь конвертацией
          видео с нужными настройками.
        </Addition>
        <ArticleMedia
          caption="Interpret Footage"
          src="legacy/aftereffects/interpret_footage_main.png"
          type="image"
        />
        <p>
          Если это не помогло, перекодируйте ваш исходник с постоянной частотой кадров
          через <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">Adobe Media Encoder</mark> или{" "}
          <mark className="app">HandBrake</mark>. В{" "}
          <mark className="app">Shutter Encoder</mark> это можно сделать во вкладке{" "}
          <mark className="select">«Advanced features»</mark>.
        </p>
        <ArticleMedia
          caption="Shutter Encoder"
          src="legacy/shutter_encoder_convert_to_constant_fps.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-files-are-missing-since-you-last-saved-project"
        tag="missing files, отсутствуют файлы, потерялись исходники, ошибка импорта, replace footage"
        title="«Warning: files are missing since you last saved project» и вместо клипов — цветовая палитра"
      >
        <p>
          Причин появления этого предупреждения может быть несколько: не до конца
          распакованный архив, перемещение файла проекта или исходников.
        </p>
        <Divider>Правильно распаковываем архив с чужим проектом</Divider>
        <p>
          Если вы собираетесь открыть чужой проект или шаблон, убедитесь, что архив
          полностью распакован и проект не запускается напрямую из архива. При открытии
          проекта из архива будет извлечён только файл <mark className="file">AEP</mark>{" "}
          во временную папку, а все остальные материалы останутся недоступны для{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <ContentFilter
          macContent={
            <>
              <p>
                Для корректного открытия чужого проекта — полностью распакуйте архив, а
                затем зайдите в созданную директорию и откройте проект формата{" "}
                <mark className="file">AEP</mark> оттуда.
              </p>
              <ArticleMedia
                caption="Распаковка через контекстное меню"
                src="https://github.com/aonez/Keka/raw/master/Wiki/Images/Animated/extract-context-menu.gif"
                type="image"
              />
            </>
          }
          windowsContent={
            <>
              <p>
                Для корректного открытия чужого проекта — полностью распакуйте архив, а
                затем зайдите в созданную директорию и откройте проект формата{" "}
                <mark className="file">AEP</mark> оттуда.
              </p>
              <ArticleMedia
                src="1OVwQS0uHhk"
                type="youtube"
              />
            </>
          }
        />
        <Divider>
          Восстанавливаем путь к исходникам после их перемещения или переименования
        </Divider>
        <p>
          Если вы переместили файл <mark className="file">AEP</mark>, а исходники остались
          в другом месте, их можно переподключить вручную. Для этого в окне{" "}
          <mark className="select">«Project»</mark> найдите строку поиска и введите{" "}
          <mark className="copy">Missing Footage</mark>. В списке появятся файлы, которые
          потеряли связь с исходниками. Чтобы восстановить связь — нажмите на нужный файл{" "}
          <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="select">«Replace Footage» → «File»</mark>. Затем в открывшемся
          файловом менеджере укажите путь к исходнику — и сможете продолжить работу.
        </p>
        <Addition type="info">
          Если вы потеряли несколько исходников, но все они лежали в одной папке или её
          подпапках, то при переподключении одного файла остальные подключатся
          автоматически.
        </Addition>
        <ArticleMedia
          caption="Заменяем футаж с помощью контекстного меню"
          src="legacy/aftereffects/replace_footage.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-this-project-uses-fonts-that-are-not-currently-available"
        tag="font substitution will occur until the originals become available, в данном проекте используются шрифты которые в настоящий момент недоступны на этом компьютере, замена шрифтов будет выполняться до тех пор пока не станут доступны исходные шрифты, missing fonts, отсутствуют шрифты, замена шрифтов"
        title="Что делать с «Warning: This project uses fonts that are not currently available on this computer»?"
      >
        <p>
          Это предупреждение означает, что в проекте используются шрифты, отсутствующие в
          вашей системе. В окне предупреждения обычно указывается список недостающих
          шрифтов. Вы можете открыть проект и работать с ним без установки этих шрифтов,
          однако они будут автоматически заменены на стандартный.
        </p>
        <ArticleMedia
          caption="Предупреждение об отсутствующих шрифтах"
          src="legacy/aftereffects/missing_fonts_warning.png"
          type="image"
        />
        <p>
          Чтобы устранить проблему, попросите у автора проекта необходимые файлы шрифтов и
          установите их. Если автор не может предоставить шрифт, попробуйте найти его в
          интернете самостоятельно.
        </p>
        <p>
          Если шрифт установлен, но предупреждение не исчезло, переназначьте его вручную
          на текстовом слое. Иногда один и тот же шрифт может распространяться под разными
          названиями, и <mark className="app">Adobe After Effects</mark> в таком случае не
          распознает его автоматически.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="import-hevc"
        tag="iphone"
        title="Как открыть и импортировать HEIC, HEIF или HEVC?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                Пользователи Windows могут столкнуться с проблемой открытия и импорта в{" "}
                <mark className="app">Adobe After Effects</mark> таких файлов, если в
                системе отсутствуют кодеки для работы с соответствующими форматами
                изображений и видео. Чтобы корректно открывать такие изображения и видео,
                вам нужно установить нужные кодеки. Для их загрузки перейдите в{" "}
                <a href="https://store.rg-adguard.net/">генератор ссылок</a> из{" "}
                <mark className="app">Microsoft Store</mark>, а затем вставьте в сервис
                одну из ссылок ниже.
              </p>
              <ArticleMedia
                caption="Браузер"
                src="legacy/link_generator_msstore.png"
                type="image"
              />
              <ul>
                <li>
                  Ссылка для скачивания кодека <mark className="image">HEIF/HEIC</mark>:{" "}
                  <mark className="code">https://apps.microsoft.com/9pmmsr1cgpwg</mark>.
                </li>
                <li>
                  <p>
                    Ссылка для скачивания кодека <mark className="video">HEVC</mark>:{" "}
                    <mark className="code">https://apps.microsoft.com/9n4wgh0z6vhq</mark>.
                  </p>
                  <Addition type="danger">
                    Учтите, что <mark className="app">Adobe After Effects</mark> после
                    установки кодеков всё равно не сможет импортировать видео с
                    контейнером <mark className="video">HEVC</mark>. Если вы попробуете
                    импортировать такой файл, программа сообщит, что он не поддерживается.
                    Чтобы это исправить, переименуйте ваше видео в{" "}
                    <mark className="video">MP4</mark> или перекодируйте его в другой
                    кодек через <mark className="app">Shutter Encoder</mark>.
                  </Addition>
                </li>
              </ul>
              <p>
                После вставки ссылки в поле ввода и нажатия кнопки{" "}
                <mark className="select">«Generate temporary links»</mark> в виде
                «галочки», нажмите на ссылку с названием файла и расширением{" "}
                <mark className="file">APPXBUNDLE</mark>, чтобы скачать его. Для установки
                пакетов с расширением <mark className="file">APPXBUNDLE</mark> достаточно
                открыть их двойным кликом<sup>1</sup>.
              </p>
              <Addition type="warning">
                Если браузер предупреждает, что вы скачиваете редкий файл или вирус,
                проигнорируйте предупреждение и продолжите скачивание.
              </Addition>
              <Addition type="info">
                <ul>
                  <li>
                    <sup>1</sup> «Быстрая» установка будет работать в том случае, если вы
                    не используете слишком урезанную сборку Windows, в которой отсутствуют
                    <mark className="app">WinGet</mark> или{" "}
                    <mark className="app">Microsoft Store</mark>. Если система предлагает
                    открыть файл с помощью{" "}
                    <mark className="app">Обработчика команд Windows</mark> или{" "}
                    <mark className="app">Установщика приложений</mark>, выберите любой
                    вариант.
                  </li>
                  <li>
                    Если вы не хотите или не можете установить{" "}
                    <mark className="app">Microsoft Store</mark>, пакеты формата{" "}
                    <mark className="file">APPXBUNDLE</mark> можно добавить через{" "}
                    <mark className="app">PowerShell</mark> командой{" "}
                    <mark className="code">Add-AppxPackage ПУТЬ/ДО/ФАЙЛА.APPXBUNDLE</mark>
                    .
                  </li>
                </ul>
              </Addition>
              <p>
                После успешной установки кодеков вы сможете открывать файлы форматов{" "}
                <mark className="file">HEIF</mark>, <mark className="file">HEIC</mark> и{" "}
                <mark className="file">HEVC</mark> в различных видеоплеерах и программах
                для просмотра фото, например в <mark className="app">MPC-HC</mark> и{" "}
                <mark className="app">FastStone Image Viewer</mark>.
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="import-unsupported-formats"
        tag="autokroma influx"
        title="Как импортировать MKV, FLV, WEBM или другие неподдерживаемые форматы без конвертации?"
      >
        <p>
          <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark> изначально не поддерживают
          множество кодеков — например, <mark className="video">VP9</mark> и{" "}
          <mark className="video">AV1</mark>, — а также некоторых контейнеров, таких как{" "}
          <mark className="video">WEBM</mark>, <mark className="video">FLV</mark>,{" "}
          <mark className="video">MKV</mark> и других. Если у вас небольшой проект и нет
          желания конвертировать исходники — попробуйте воспользоваться плагином{" "}
          <a href="https://www.autokroma.com/Influx">Autokroma Influx</a>. Он упрощает
          импорт файлов, которые не поддерживаются в{" "}
          <mark className="app">Adobe After Effects</mark>,{" "}
          <mark className="app">Adobe Premiere</mark> и{" "}
          <mark className="app">Adobe Media Encoder</mark>.
        </p>
        <Addition type="warning">
          Иногда видео с немонтажными кодеками или файлы, импортированные через{" "}
          <mark className="plugin">Autokroma Influx</mark>, могут работать нестабильно.
          Картинка может дёргаться, появляться артефакты, меняться цвета или вовсе
          пропадать, а рендер — тормозить. Чтобы избежать таких проблем, лучше заранее
          перекодировать исходники в монтажный формат — например, с помощью{" "}
          <mark className="app">MKVToolNix</mark>, <mark className="app">HandBrake</mark>{" "}
          или <mark className="app">Shutter Encoder</mark>.
        </Addition>
        <ArticleMedia
          src="l3zBFli6BIk"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-image-sequence-frame-rate"
        tag="fps, частота кадров, интерпретация, frame rate"
        title="Почему при импорте секвенции изображений длина слоя получается короче, длиннее или с неправильной частотой кадров?"
      >
        <p>
          При импорте изображений как секвенции задаётся частота кадров, указанная в
          настройках <mark className="app">Adobe After Effects</mark>. Чтобы проверить
          настройки импорта, перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Import»</mark> и при
          необходимости в параметре <mark className="select">«Sequence Footage»</mark>{" "}
          выберите нужную частоту кадров. Это значение будет применяться при следующем
          импорте секвенций.
        </p>
        <ArticleMedia
          caption="Изменяем стандартное значение кадров в секунду для импортируемых секвенций изображений"
          src="legacy/aftereffects/change_fps_sequence_footage.png"
          type="image"
        />
        <p>
          Если вам нужно преобразовать частоту кадров уже импортированной секвенции,
          воспользуйтесь окном <mark className="select">«Interpret Footage»</mark>. Для
          этого выделите секвенцию в окне <mark className="select">«Project»</mark> и
          нажмите комбинацию клавиш <mark className="key">Ctrl + Alt + G</mark>. В
          открывшемся окне в разделе <mark className="select">«Frame Rate»</mark>{" "}
          установите для <mark className="select">«Conform to frame rate»</mark> нужное
          количество кадров в секунду.
        </p>
        <ArticleMedia
          caption="Interpret Footage"
          src="legacy/aftereffects/interpret_footage_main.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="import-layered-psd"
        tag="photoshop, layered psd, color mode, цветовой режим"
        title="Почему я не могу импортировать PSD по слоям?"
      >
        <p>
          Чтобы в <mark className="app">Adobe After Effects</mark> можно было корректно
          импортировать многослойные изображения <mark className="file">PSD</mark>, они
          должны быть сохранены в режимах <mark className="select">«RGB»</mark> или{" "}
          <mark className="select">«Grayscale»</mark>. В противном случае файлы,
          сохранённые в режимах <mark className="select">«CMYK»</mark>,{" "}
          <mark className="select">«LAB»</mark> и других, будут импортироваться как единое
          изображение без возможности разделения на слои.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/aftereffects/tab_in_photoshop.png"
          type="image"
        />
        <p>
          Чтобы проверить цветовой режим, откройте файл <mark className="image">PSD</mark>{" "}
          в <mark className="app">Adobe Photoshop</mark> и посмотрите заголовок вкладки
          открытого проекта. Если там указано <mark className="select">«CMYK»</mark> или
          любой другой режим, кроме <mark className="select">«RGB»</mark> и{" "}
          <mark className="select">«Grayscale»</mark>, файл необходимо преобразовать в
          правильный цветовой режим. Для этого в меню{" "}
          <mark className="select">«Image» → «Mode»</mark> выберите{" "}
          <mark className="select">«RGB Color»</mark> или{" "}
          <mark className="select">«Grayscale»</mark>.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/aftereffects/photoshop_switch_to_rgb.png"
          type="image"
        />
        <Addition type="warning">
          Если появится окно с вопросом{" "}
          <mark className="select">
            «Change modes can affect the appearance of layers. Flatten image before mode
            change?»
          </mark>
          , нажмите <mark className="select">«Don&apos;t Flatten»</mark> — иначе слои
          объединятся в один. После смены режима цвета могут заметно измениться.
        </Addition>
        <p>
          После изменения цветового режима сохраните проект в{" "}
          <mark className="app">Adobe Photoshop</mark> и попробуйте снова импортировать
          его в <mark className="app">Adobe After Effects</mark> перетаскиванием файла в
          проект или выбрав файл с помощью <mark className="key">Ctrl + I</mark>. Теперь
          при импорте появится возможность типа импорта.
        </p>
        <ArticleMedia
          caption="filename.psd"
          src="legacy/aftereffects/correct_import_psd.png"
          type="image"
        />
        <Divider>Экспортируем слои в отдельные файлы</Divider>
        <p>
          Если этот способ не помог или цвета после смены режима вас не устраивают,
          попробуйте экспортировать все слои из{" "}
          <mark className="app">Adobe Photoshop</mark> отдельными файлами. Для этого
          перейдите в <mark className="select">«File» → «Export»</mark> и выберите{" "}
          <mark className="select">«Layers to Files»</mark>.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/layers_to_files.png"
          type="image"
        />
        <p>
          В открывшемся окне укажите путь для сохранения, имя и формат файлов. Нажмите{" "}
          <mark className="select">«OK»</mark> — и слои будут сохранены по отдельности.
          После этого их можно импортировать в{" "}
          <mark className="app">Adobe After Effects</mark> и работать с ними как обычно.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/export_layers.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="import-ai"
        tag='ai, иллюстратор, градиенты, vector, это файл adobe illustrator который был сохранен без содержимого pdf, чтобы поместить файл в другие приложения или открыть его в них необходимо выполнить его повторное сохранение в adobe illustrator с включенным параметром "создать pdf-совместимый файл", этот параметр располагается в диалоговом окне параметры исходных форматов illustrator которое выводится при сохранении файла adobe illustrator с использованием команды сохранить как, this is an adobe illustrator file that was saved without pdf content, to place or open this file in other applications it should be re-saved from adobe illustrator with the "create pdf compatible file" option turned on, this option is in the illustrator native format options dialog box, which appears when saving an adobe illustrator file using the save as command'
        title="Как импортировать векторное изображение, созданное в Adobe Illustrator?"
      >
        <p>
          Чтобы импортировать файл <mark className="image">AI</mark>, созданный в{" "}
          <mark className="app">Adobe Illustrator</mark>, послойно в{" "}
          <mark className="app">Adobe After Effects</mark> без потери градиентов и других
          деталей, его нужно предварительно подготовить к импорту. Дело в том, что многие
          проекты, особенно скачанные с <mark className="web">Envato Elements</mark> и
          других стоков, в <mark className="app">Adobe Illustrator</mark> выполняются в
          одном слое, внутри которого находятся объекты. Однако при попытке импорта в{" "}
          <mark className="app">Adobe After Effects</mark> с выбранным режимом{" "}
          <mark className="select">«Import As» → «Composition»</mark> вы получите лишь тот
          самый слой без возможности послойного взаимодействия с объектами, которые были
          внутри него.
        </p>
        <p>
          Чтобы послойно импортировать объекты из{" "}
          <mark className="app">Adobe Illustrator</mark> в{" "}
          <mark className="app">Adobe After Effects</mark> — их нужно разделить на
          несколько слоёв. Для этого в самом{" "}
          <mark className="app">Adobe Illustrator</mark> раскройте список объектов,
          выделите группу и в контекстном меню окна{" "}
          <mark className="select">«Layers»</mark> выберите{" "}
          <mark className="select">«Release to Layers (Sequence)»</mark>. Затем вынесите
          все ваши объекты на самый верхний уровень, как показано в видео ниже.
        </p>
        <Addition type="info">
          Структура слоёв в <mark className="app">Adobe Illustrator</mark> может
          отличаться в зависимости от вашего открытого проекта.
        </Addition>
        <ArticleMedia
          caption="Adobe Illustrator"
          src="legacy/illustrator_release_to_layers.mp4"
          type="video"
        />
        <p>
          После того как вы вынесли слои из группы, сохраните проект через{" "}
          <mark className="select">«File» → «Save As»</mark>, выбрав в качестве типа файла{" "}
          <mark className="select">«Adobe Illustrator (*.AI)»</mark>.
        </p>
        <p>
          При сохранении файла <mark className="image">AI</mark> в{" "}
          <mark className="app">Adobe Illustrator</mark> не забудьте активировать опцию{" "}
          <mark className="select">«Create PDF Compatible File»</mark>. Если этого не
          сделать, <mark className="app">Adobe After Effects</mark> не предложит
          импортировать файл послойно, а вместо графики вы получите плейсхолдер с чёрным
          текстом о том, что файл был сохранён без содержимого{" "}
          <mark className="file">PDF</mark>.
        </p>
        <ArticleMedia
          caption="Illustrator Options"
          src="legacy/illustrator_create_pdf_compatible_file.png"
          type="image"
        />
        <p>
          После сохранения перейдите в <mark className="app">Adobe After Effects</mark> и
          импортируйте файл через <mark className="key">Ctrl + I</mark> или простым
          перетаскиванием в окно <mark className="select">«Project»</mark> либо на
          таймлайн. При этом не забудьте выбрать в{" "}
          <mark className="select">«Import Kind»</mark> или{" "}
          <mark className="select">«Import As»</mark> значение{" "}
          <mark className="select">«Composition»</mark>.
        </p>
        <ArticleMedia
          caption="filename.ai"
          src="legacy/aftereffects/import_ai_file.png"
          type="image"
        />
        <p>
          После импорта <mark className="image">AI</mark> вы получите в{" "}
          <mark className="app">Adobe After Effects</mark> слои с градиентами и прочими
          деталями.
        </p>
        <p>
          Их нельзя редактировать как обычную фигуру, но их можно сделать
          «псевдо-векторными», включив для слоёв опцию{" "}
          <mark className="select">«Continuously Rasterize»</mark>
          <sup>1</sup>, которая позволяет не терять качество слоя при его увеличении.
        </p>
        <ArticleMedia
          caption="Импортированные нередактируемые фигуры"
          src="legacy/aftereffects/imported_non_editable_shapes.mp4"
          type="video"
        />
        <Addition type="warning">
          <sup>1</sup> При включённой опции{" "}
          <mark className="select">«Continuously Rasterize»</mark> могут появиться
          побочные эффекты, например разрывы слоя при использовании{" "}
          <mark className="plugin">Puppet Tool</mark>.
        </Addition>
        <Addition type="info">
          Некоторые пользователи ошибочно полагают, что в{" "}
          <mark className="app">Adobe After Effects</mark>, как и в{" "}
          <mark className="app">Adobe Illustrator</mark>, можно приближать изображение в
          предпросмотре без потери качества, если в композиции используются векторные
          слои, однако это не так. <mark className="app">Adobe After Effects</mark> —
          прежде всего растровый, а не векторный редактор. Он отображает и растрирует все
          слои до разрешения, установленного в настройках композиции.
        </Addition>
        <Divider>Про конвертацию слоёв в фигуры</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">26.0 (2026)</mark> и выше появилась возможность{" "}
          <a href="https://helpx.adobe.com/after-effects/using/creating-shapes-masks.html#convert-Illustrator-layers-to-shape-layers">
            преобразовывать слои Illustrator в фигуры
          </a>{" "}
          без потери градиентов<sup>1</sup>. Для этого выделите нужные элементы и нажмите{" "}
          <mark className="key">ПКМ</mark> →{" "}
          <mark className="select">«Create» → «Create Shapes from Vector Layer»</mark>.
        </p>
        <ArticleMedia
          caption="Создание фигур из векторного слоя"
          src="legacy/aftereffects/create_shapes_from_vector_layer.png"
          type="image"
        />
        <Addition type="warning">
          <sup>1</sup> <mark className="select">«Freeform Gradients»</mark> и режимы
          наложения не переносятся автоматически при создании фигур. Однако режимы
          наложения можно выставить вручную уже в самом{" "}
          <mark className="app">Adobe After Effects</mark>.
        </Addition>
        <Divider>Создаём фигуры с градиентами на предыдущих версиях программы</Divider>
        <Addition type="tldr">
          Обновите <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">26.0 (2026)</mark> или пользуйтесь сторонними
          расширениями, например <mark className="plugin">Overlord</mark>.
        </Addition>
        <p>
          В этом и заключается главная проблема импорта из{" "}
          <mark className="app">Adobe Illustrator</mark> в предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark>. При выполнении{" "}
          <mark className="select">«Create Shapes from Vector Layer»</mark> градиенты
          пропадут, а объект окрасится в серый цвет. Это происходит из-за их
          несовместимости в устаревших сборках программы. В таком случае придётся либо
          пересоздавать их вручную, либо воспользоваться расширением{" "}
          <mark className="plugin">Overlord</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="import-figma"
        tag="aeux, overlord, импорт макета, фигма"
        title="Как импортировать макет из Figma?"
      >
        <p>
          Макет, созданный в <mark className="app">Figma</mark>, можно перенести в{" "}
          <mark className="app">Adobe After Effects</mark> с помощью двух сторонних
          расширений: <mark className="plugin">AEUX</mark> и{" "}
          <mark className="plugin">Overlord 2</mark>. В этой статье для демонстрации
          импорта макета из <mark className="app">Figma</mark> в{" "}
          <mark className="app">Adobe After Effects</mark> будет использоваться расширение{" "}
          <mark className="plugin">AEUX</mark>.
        </p>
        <Divider>
          Готовимся к импорту из <mark className="app">Figma</mark>
        </Divider>
        <p>
          Прежде чем начать импорт макета, вам нужно установить десктопную версию{" "}
          <mark className="app">Figma</mark>, так как поддержка сторонних расширений в
          веб-версии <mark className="app">Figma</mark> отсутствует из-за технических
          ограничений. Его можно скачать из{" "}
          <a href="https://www.figma.com/downloads/">официального сайта сервиса</a>.
        </p>
        <p>
          Далее нужно загрузить сам плагин <mark className="plugin">AEUX</mark>, который
          можно загрузить на странице релизов в{" "}
          <a href="https://github.com/google/AEUX/releases">GitHub</a>. Внутри архива есть
          три папки: <mark className="path">Figma</mark>, <mark className="path">AE</mark>{" "}
          и <mark className="path">Sketch</mark>. Последную папку не нужно трогать, если
          вы не используете сервис <mark className="app">Sketch</mark>, поэтому распакуем
          из архива лишь две папки — <mark className="path">Figma</mark> и{" "}
          <mark className="path">AE</mark>.
        </p>
        <Addition type="warning">
          Учтите, что <mark className="plugin">AEUX</mark> давно не обновляется, поэтому
          некоторые элементы, использующие новые функции из{" "}
          <mark className="app">Figma</mark>, возможно, не удастся перенести без ручного
          воссоздания элемента с нуля.
        </Addition>
        <p>
          Для установки плагина в десктопную версию <mark className="app">Figma</mark>{" "}
          нужно указать путь к файлу <mark className="file">MANIFEST.JSON</mark> из
          распакованной папки <mark className="path">Figma</mark> в архиве. Сделать это
          можно через меню{" "}
          <mark className="select">
            «Иконка Figma» → «Plugins» → «Development» → «Import plugin from manifest»
          </mark>
          .
        </p>
        <ArticleMedia
          caption="Figma"
          src="legacy/figma_install_plugin.png"
          type="image"
        />
        <p>
          Далее нужно установить расширение <mark className="plugin">AEUX</mark> для{" "}
          <mark className="app">Adobe After Effects</mark>, чтобы отправлять макеты из{" "}
          <mark className="app">Figma</mark>. Для этого перейдите в распакованную папку{" "}
          <mark className="path">AE</mark> и выберите удобный для вас способ установки{" "}
          <mark className="file">ZXP</mark>: через{" "}
          <a href="https://updates.aescripts.com/zxp-installer/">ZXP Installer</a> или
          вручную. <a href="#how-to-install">Подробнее...</a>
        </p>
        <Divider>
          Отправляем макет в <mark className="app">Adobe After Effects</mark>
        </Divider>
        <p>
          После успешной установки <mark className="plugin">AEUX</mark> в{" "}
          <mark className="app">Figma</mark> и{" "}
          <mark className="app">Adobe After Effects</mark> можно переходить к переносу
          макета.
        </p>
        <p>
          Сразу хочется отметить, что вы не сможете использовать плагины в{" "}
          <mark className="app">Figma</mark>, если вы открыли макет по ссылке и не
          сохранили его в вашем профиле или локально. Чтобы сохранить макет локально —
          нажмите на иконку <mark className="select">«Figma»</mark> и выберите{" "}
          <mark className="select">«File» → «Save local copy»</mark>. В открывшемся окне
          укажите путь до нужной директории для сохранения.
        </p>
        <ArticleMedia
          caption="Figma"
          src="legacy/figma_save_local_copy.png"
          type="image"
        />
        <p>
          Затем откройте в <mark className="app">Figma</mark> только что сохранённый
          проект формата <mark className="file">FIG</mark>. Теперь вы можете запускать
          сторонние плагины, в том числе и <mark className="plugin">AEUX</mark> с помощью{" "}
          <mark className="select">«Иконка Figma» → «Plugins» → «Development»</mark>.
        </p>
        <ArticleMedia
          caption="Figma"
          src="legacy/figma_run_aeux.png"
          type="image"
        />
        <p>
          Чтобы отправить проект в <mark className="app">Adobe After Effects</mark> —
          выделите нужные слои в макете и нажмите на кнопку{" "}
          <mark className="select">«Send selection to AE»</mark> в окне плагина{" "}
          <mark className="plugin">AEUX</mark>.
        </p>
        <Addition type="info">
          Учтите, что <mark className="app">Adobe After Effects</mark> должен быть запущен
          до нажатия кнопки переноса макета из <mark className="app">Figma</mark>.
        </Addition>
        <ArticleMedia
          caption="Figma"
          src="legacy/aftereffects/send_figma_to_ae.mp4"
          type="video"
        />
        <p>
          После нажатия на кнопку переноса у вас откроется{" "}
          <mark className="app">Adobe After Effects</mark>, и программа предложит указать,
          куда сохранить изображения для проекта. После выбора папки вы получите новую
          композицию с макетом из <mark className="app">Figma</mark>. Учтите, что перенос
          макета часто проходит неидеально, поэтому некоторые элементы придётся создавать
          или редактировать для соответствия с оригиналом. Иногда повторный импорт может
          дать результат получше.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="import-3d-objects"
        tag="obj, fbx, gltf, glb, c4d, e3d, element 3d, blender, advanced 3d, cineware, импорт 3d моделей, 3d рендеринг"
        title="Как импортировать трёхмерные объекты?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> есть несколько способов
          импорта трёхмерных моделей. Стоит отметить, что{" "}
          <mark className="app">Adobe After Effects</mark> не рассчитан на полноценное
          редактирование моделей, как в <mark className="app">Blender</mark> и{" "}
          <mark className="app">Cinema 4D</mark>. Зато можно их крутить, вертеть и
          загружать уже анимированные<sup>1</sup> модели.
        </p>
        <Addition type="warning">
          <sup>1</sup> Импорт файлов <mark className="file">FBX</mark>,{" "}
          <mark className="file">GLB</mark> и <mark className="file">GLTF</mark> с
          анимацией возможен только при работе с{" "}
          <mark className="plugin">Advanced 3D</mark>.
        </Addition>
        <Divider>
          Импортируем популярные форматы с помощью{" "}
          <mark className="plugin">Advanced 3D</mark>
        </Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">24.1 (2024)</mark> и выше появился новый движок
          рендеринга <mark className="plugin">Advanced 3D</mark>, который позволяет
          импортировать трёхмерные объекты без использования сторонних плагинов. В
          последней версии <mark className="app">Adobe After Effects</mark> на момент
          написания статьи поддерживается импорт <mark className="file">OBJ</mark>,{" "}
          <mark className="file">FBX</mark>, <mark className="file">GLTF</mark> и{" "}
          <mark className="file">GLB</mark> без использования сторонних инструментов.
          Такие модели можно создавать и редактировать в любом популярном трёхмерном
          редакторе, например <mark className="app">Blender</mark>,{" "}
          <mark className="app">Cinema 4D</mark> или{" "}
          <mark className="app">Substance 3D Painter</mark>.
        </p>
        <Addition type="info">
          <mark className="company">Adobe</mark> рекомендует использовать трёхмерные
          объекты в формате <mark className="file">GLB</mark>, так как в них, как правило,
          уже содержатся все необходимые материалы и текстуры.
        </Addition>
        <p>
          Импортировать перечисленные форматы трёхмерных объектов можно привычным способом
          — через <mark className="key">Ctrl + I</mark> или простым перетаскиванием файла
          на таймлайн либо в окно <mark className="select">«Project»</mark>. Программа при
          вставке таких объектов в таймлайн композиции автоматически переключит текущий
          движок на <mark className="plugin">Advanced 3D</mark>, если используется другой.
        </p>
        <ArticleMedia
          src="qPOkGR7Ek2I"
          type="youtube"
        />
        <p>
          Однако при работе с <mark className="plugin">Advanced 3D</mark> некоторые
          привычные функции, доступные в <mark className="plugin">Classic 3D</mark>, могут
          быть недоступны — например, некоторые эффекты, режимы наложения, размытие в
          движении и настройка глубины резкости. Это связано с техническими особенностями
          модулей рендеринга. Если вам нужно использовать в проекте и{" "}
          <mark className="plugin">Advanced 3D</mark>, и{" "}
          <mark className="plugin">Classic 3D</mark> — создайте две композиции и выберите
          каждому из них свой движок рендеринга. Подробнее об ограничениях вы можете
          прочесть в{" "}
          <mark className="select">«Composition Settings» → «3D Renderer»</mark>.
        </p>
        <Divider>
          Импортируем OBJ, E3D и C4D с помощью <mark className="plugin">Element 3D</mark>
        </Divider>
        <p>
          Если вы работаете в старой версии{" "}
          <mark className="app">Adobe After Effects</mark> или хотите импортировать модель
          формата <mark className="file">E3D</mark>, <mark className="file">C4D</mark>
          <sup>1</sup> или <mark className="file">OBJ</mark> — можно воспользоваться
          сторонним плагином <mark className="plugin">Element 3D</mark> от{" "}
          <mark className="company">VideoCopilot</mark>. Плагин также совместим с более
          новыми версиями <mark className="app">Adobe After Effects</mark>.
        </p>
        <Addition type="warning">
          <sup>1</sup> Для импорта файлов <mark className="file">C4D</mark> требуется
          установленная полноценная версия <mark className="app">Cinema 4D</mark> на вашем
          устройстве.
        </Addition>
        <p>
          Чтобы импортировать трёхмерный объект с помощью{" "}
          <mark className="plugin">Element 3D</mark>, создайте{" "}
          <mark className="select">«Solid Layer»</mark> размером с композицию и примените
          к нему эффект <mark className="plugin">Element 3D</mark>. Обратите внимание, что
          слои с применёнными эффектами, работающие в своём трёхмерном пространстве или
          использующие камеру и освещение, должны оставаться двумерными.
        </p>
        <p>
          В <mark className="select">«Effect Controls»</mark> нажмите{" "}
          <mark className="select">«Scene Setup»</mark> у эффекта{" "}
          <mark className="plugin">Element 3D</mark>. В открывшемся окне плагина кликните{" "}
          <mark className="select">«Import»</mark> и выберите модель через файловый
          менеджер. При импорте объектов формата <mark className="file">OBJ</mark> скорее
          всего вам потребуется вручную создавать материалы и назначать им текстуры и
          свойства.
        </p>
        <ArticleMedia
          src="Qu9eCU9Ge54"
          type="youtube"
        />
        <Divider>
          Импортируем C4D с помощью <mark className="plugin">Cineware</mark>
        </Divider>
        <p>
          Прежде чем импортировать проект формата <mark className="file">C4D</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>, на устройстве должна быть
          установлена полноценная версия <mark className="app">Maxon Cinema 4D</mark>,
          если вы используете репак от <mark className="user">KpoJIuK</mark>, или
          установлен плагин <mark className="plugin">Cinema 4D Lite</mark> из{" "}
          <mark className="app">Adobe Creative Cloud</mark>. В противном случае программа
          выдаст ошибку <mark className="warning">5027::12</mark> и потребует установить{" "}
          <mark className="app">Cinema 4D</mark>.
        </p>
        <p>
          Чтобы импортировать <mark className="file">C4D</mark> с использованием{" "}
          <mark className="plugin">Cineware</mark> — достаточно импортировать файл в
          проект удобным вам способом и поместить его на таймлайн.
        </p>
        <ArticleMedia
          src="qFVQrxWvOjw"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="import-lottie-tgs"
        tag="json, svg, telegram, стикеры, tgs, lottie, bodymovin, animated stickers"
        title="Как импортировать Lottie и TGS?"
      >
        <p>
          <mark className="file">Lottie</mark> — популярный формат анимации для
          встраивания на сайты и в мобильные приложения в виде{" "}
          <mark className="file">JSON</mark>. По схожему принципу работает и{" "}
          <mark className="file">TGS</mark> — формат анимированных стикеров в мессенджере{" "}
          <mark className="app">Telegram</mark>. В стандартной поставке{" "}
          <mark className="app">Adobe After Effects</mark> отсутствует возможность для
          импорта анимации в этих форматах, но это можно решить с помощью сторонних
          инструментов.
        </p>
        <Addition type="danger">
          Учтите, что из-за особенностей импорта <mark className="file">JSON</mark> и{" "}
          <mark className="file">Lottie</mark> некоторые элементы анимации могут
          импортироваться некорректно.
        </Addition>
        <Divider>
          Импортируем файлы <mark className="file">Lottie</mark>
        </Divider>
        <p>
          Прежде чем начать импорт <mark className="file">Lottie</mark> или{" "}
          <mark className="file">JSON</mark>, вам нужно загрузить и установить{" "}
          <mark className="plugin">LottieFiles for Adobe After Effects</mark> —
          официальное бесплатное<sup>1</sup> расширение от{" "}
          <a href="https://lottiefiles.com/">LottieFiles</a>. Скачать его можно с{" "}
          <a href="https://aescripts.com/lottiefiles/">aescripts.com</a>. После установки
          расширение появится в <mark className="select">«Window» → «Extensions»</mark>.
          При первом открытии потребуется войти в аккаунт{" "}
          <mark className="web">LottieFiles</mark>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> Чтобы бесплатно скачать расширение, зарегистрируйтесь или
              войдите в аккаунт на <a href="https://aescripts.com">aescripts</a>, а затем
              на странице дополнения установите значение <mark className="copy">0</mark> в
              поле <mark className="select">«Name Your Own Price»</mark> и оформите заказ.
              Ссылка на скачивание появится{" "}
              <a href="https://aescripts.com/downloadable/customer/products/">
                в вашем профиле
              </a>
              .
            </li>
            <li>
              Инструкцию по установке расширений формата <mark className="file">ZXP</mark>{" "}
              вы можете найти в <a href="#how-to-install">статье 2.1</a>. Для корректной
              работы расширения потребуется установить флажок для параметра{" "}
              <mark className="select">
                «Allow Scripts to Write Files and Access Network»
              </mark>{" "}
              в{" "}
              <mark className="select">
                «Edit» → «Preferences» → «Scripting & Expressions»
              </mark>
              .
            </li>
          </ul>
        </Addition>
        <p>
          После успешного входа в аккаунт <mark className="web">LottieFiles</mark>{" "}
          перейдите во вкладку <mark className="select">«Import»</mark> в расширении и
          нажмите кнопку <mark className="select">«Browse»</mark> для выбора файла формата{" "}
          <mark className="file">JSON</mark>, <mark className="file">SVG</mark> или{" "}
          <mark className="file">Lottie</mark>.
        </p>
        <ArticleMedia
          caption="LottieFiles"
          src="legacy/aftereffects/import_lottiefiles.png"
          type="image"
        />
        <p>
          После выбора файла{" "}
          <mark className="plugin">LottieFiles for Adobe After Effects</mark> выполнит
          конвертацию и создаст новую композицию с вашей анимацией, которую затем можно
          использовать в проектах.
        </p>
        <Divider>
          Импортируем стикеры из <mark className="app">Telegram</mark>
        </Divider>
        <p>
          Прежде чем импортировать анимированный стикер формата{" "}
          <mark className="file">TGS</mark>, его нужно скачать. Для этого откройте
          десктопную версию <mark className="app">Telegram</mark>, отправьте любой стикер
          в чат, например в <mark className="select">«Избранное»</mark>, затем нажмите{" "}
          <mark className="key">ПКМ</mark> по стикеру и выберите в контекстном меню{" "}
          <mark className="select">«Сохранить как»</mark>. В открывшемся окне файлового
          менеджера укажите место для сохранения файла.
        </p>
        <Addition type="info">
          Большинство стандартных анимированных эмодзи можно найти в различных
          стикер-паках, например{" "}
          <a href="https://t.me/addstickers/AnimatedEmojies">здесь</a>.
        </Addition>
        <ArticleMedia
          caption="Telegram"
          src="legacy/download_tgs_from_telegram.png"
          type="image"
        />
        <p>
          После того как вы скачали <mark className="file">TGS</mark>, его нужно
          переконвертировать в <mark className="file">JSON</mark>. Сделать это можно с
          помощью конвертера ниже, загрузив в него файл.
        </p>
        <Divider>
          Конвертируем <mark className="file">TGS</mark> в{" "}
          <mark className="file">JSON</mark>
        </Divider>
        <TgsToJsonConverter />
        <Addition type="info">
          Если вы не хотите разбираться с скачиванием или конвертацией стикера — вы можете
          отправить нужный стикер боту{" "}
          <a href="https://t.me/GimmeStickerBot">@GimmeStickerBot</a> и получить в ответ
          файл в выбранном вами формате.
        </Addition>
        <Divider />
        <p>
          После успешной конвертации скачайте результат и выберите один из способов
          импорта в <mark className="app">Adobe After Effects</mark>: через{" "}
          <mark className="plugin">LottieFiles</mark> или{" "}
          <mark className="plugin">Bodymovin</mark>.
        </p>
        <p>
          В статье уже рассматривался импорт через{" "}
          <mark className="plugin">LottieFiles</mark>, который также поддерживает работу с{" "}
          <mark className="file">JSON</mark>, поэтому далее речь пойдёт о способе импорта
          анимаций с помощью <mark className="plugin">Bodymovin</mark>.{" "}
          <em className="article-note-muted">Ну не повторяться же?</em>
        </p>
        <p>
          <mark className="plugin">Bodymovin</mark> — альтернативное бесплатное
          <sup>1</sup> расширение с{" "}
          <a href="https://aescripts.com/bodymovin/">aescripts.com</a>, с помощью которого
          можно импортировать анимацию в формате <mark className="file">JSON</mark>. После
          установки оно будет находиться в{" "}
          <mark className="select">«Window» → «Extensions»</mark>.
        </p>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> Чтобы бесплатно скачать расширение, зарегистрируйтесь или
              войдите в аккаунт на <a href="https://aescripts.com">aescripts</a>, а затем
              на странице дополнения установите значение <mark className="copy">0</mark> в
              поле <mark className="select">«Name Your Own Price»</mark> и оформите заказ.
              Ссылка на скачивание появится{" "}
              <a href="https://aescripts.com/downloadable/customer/products/">
                в вашем профиле
              </a>
              .
            </li>
            <li>
              Инструкцию по установке расширений формата <mark className="file">ZXP</mark>{" "}
              вы можете найти в <a href="#how-to-install">статье 2.1</a>. Для корректной
              работы расширения потребуется установить флажок для параметра{" "}
              <mark className="select">
                «Allow Scripts to Write Files and Access Network»
              </mark>{" "}
              в{" "}
              <mark className="select">
                «Edit» → «Preferences» → «Scripting & Expressions»
              </mark>
              .
            </li>
          </ul>
        </Addition>
        <p>
          После открытия расширения <mark className="plugin">Bodymovin</mark> перейдите во
          вкладку <mark className="select">«Import Lottie Animation»</mark> и нажмите на
          кнопку <mark className="select">«Import Local File»</mark>. В открывшемся окне
          проводника выберите нужный файл формата <mark className="file">JSON</mark>,
          который вы конвертировали ранее.
        </p>
        <ArticleMedia
          caption="Bodymovin"
          src="legacy/aftereffects/bodymovin_import_json.png"
          type="image"
        />
        <p>
          После импорта в окне <mark className="select">«Project»</mark> появится новая
          композиция. Если при импорте возникнут проблемы, например с градиентами,{" "}
          <mark className="plugin">Bodymovin</mark> укажет, какие данные требуют замены
          или доработки. При необходимости градиенты можно заменить обычной заливкой или
          восстановить вручную — их количество зависит от конкретного стикера.
        </p>
        <ArticleMedia
          caption="Предупреждение о том, что некоторые градиенты не перенеслись"
          src="legacy/aftereffects/gradient_data_bodymovin.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="import-premiere-sequence"
        tag="prproj sequence, dynamic link"
        title="Как импортировать секвенцию из Adobe Premiere?"
      >
        <p>
          Представим, что вы смонтировали видеоролик в{" "}
          <mark className="app">Adobe Premiere</mark> и теперь хотите перенести его в{" "}
          <mark className="app">Adobe After Effects</mark>. Если вы просто импортируете{" "}
          <mark className="file">PRPROJ</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + I</mark>, то получите секвенцию, которую нельзя
          полноценно редактировать. Чтобы её можно было редактировать, словно таймлайн был
          конвертирован из <mark className="app">Adobe Premiere</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>, нужно использовать другой
          способ.
        </p>
        <p>
          Чтобы импортировать секвенции из <mark className="app">Adobe Premiere</mark> как
          полноценные композиции, выберите{" "}
          <mark className="select">«File» → «Import» → «Import Premiere Project»</mark> и
          укажите нужный проект <mark className="file">PRPROJ</mark>.
        </p>
        <ArticleMedia
          caption="Импортируем проект из Adobe Premiere"
          src="legacy/aftereffects/import_premiere_pro_project.png"
          type="image"
        />
        <p>
          Далее <mark className="app">Adobe After Effects</mark> спросит, какие секвенции
          нужно импортировать. По умолчанию стоит параметр{" "}
          <mark className="select">«All Sequences»</mark>, но вы можете указать конкретную
          секвенцию. Также при необходимости можно отключить импорт аудиофайлов.
        </p>
        <ArticleMedia
          caption="Окно «Premiere Importer»"
          src="legacy/aftereffects/premiere_pro_importer.png"
          type="image"
        />
        <p>
          После этого в окне <mark className="select">«Project»</mark> появится новая
          папка с названием вашего проекта из <mark className="app">Adobe Premiere</mark>,
          импортированные файлы и новые композиции с нарезками. Учтите, что из-за
          технических различий между программами некоторые эффекты могут не примениться, и
          их придётся добавить вручную.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="import-mogrt"
        tag="aeproject, анимационный шаблон, motion graphics template"
        title="Как открыть и импортировать MOGRT?"
      >
        <p>
          Шаблоны анимации в формате <mark className="file">MOGRT</mark> обычно создаются
          в <mark className="app">Adobe After Effects</mark> и используются в проектах{" "}
          <mark className="app">Adobe Premiere</mark>. Но при необходимости такие файлы
          можно распаковать и использовать в своих композициях{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <Divider>
          Открываем <mark className="file">MOGRT</mark> как проект
        </Divider>
        <p>
          Чтобы открыть шаблон формата <mark className="file">MOGRT</mark>, нужно вызвать
          окно открытия проекта с помощью{" "}
          <mark className="select">«File» → «Open Project»</mark> или{" "}
          <mark className="key">Ctrl + O</mark>. В открывшемся окне проводника выберите
          нужный файл <mark className="file">MOGRT</mark>, укажите папку, куда нужно
          распаковать проект, и нажмите <mark className="select">«Extract»</mark>. После
          этого <mark className="app">Adobe After Effects</mark> конвертирует шаблон{" "}
          <mark className="file">MOGRT</mark> в отдельный проект и сохранит его в
          указанной папке.
        </p>
        <Addition type="warning">
          Через <mark className="select">«File» → «Import»</mark> такие шаблоны
          импортировать не получится — программа выдаст ошибку о неподдерживаемом файле.
        </Addition>
        <p>
          Чтобы начать редактировать такой шаблон, откройте нужную композицию в окне{" "}
          <mark className="select">«Project»</mark>, а затем откройте окно{" "}
          <mark className="select">«Essential Graphics»</mark> через{" "}
          <mark className="select">«Composition» → «Open in Essential Graphics»</mark>. В
          этом же окне вы можете запаковать проект обратно в{" "}
          <mark className="file">MOGRT</mark> после внесения правок с помощью{" "}
          <mark className="select">«Export Motion Graphics Template»</mark>.
        </p>
        <ArticleMedia
          caption="Essential Graphics"
          src="legacy/aftereffects/essential_graphics.png"
          type="image"
        />
        <Divider>
          Используем <mark className="file">MOGRT</mark> в другом проекте
        </Divider>
        <p>
          Поскольку с помощью <mark className="select">«Open Project»</mark> анимация
          формата <mark className="file">MOGRT</mark> конвертируется в{" "}
          <mark className="file">AEP</mark>, её можно применять в своих проектах,
          импортируя композиции через <mark className="select">«File» → «Import»</mark>{" "}
          или используя комбинацию клавиш <mark className="key">Ctrl + I</mark>. В окне
          импорта нужно указать <mark className="file">AEP</mark> в директории, в которую
          изначально был распакован <mark className="file">MOGRT</mark>. Импортированные
          композиции появятся в окне <mark className="select">«Project»</mark>.
          Редактировать такие шаблоны можно также через{" "}
          <mark className="select">«Composition» → «Open in Essential Graphics»</mark> или
          вручную редактируя слои.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="this-project-must-be-converted-from-version"
        tag="the original file will be unchanged, требуется преобразовать данный проект из версии, исходный файл останется без изменений, совместимость версий, конвертация проекта"
        title="Что означает «This project must be converted from version XX.X.X» при открытии проекта?"
      >
        <p>
          Это сообщение означает, что вы открыли проект, созданный в более старой версии{" "}
          <mark className="app">Adobe After Effects</mark>, в новой версии программы. В
          таких случаях программа автоматически конвертирует проект для совместимости, при
          этом исходный файл остаётся без изменений. Чтобы продолжить работу, просто
          нажмите <mark className="select">«OK»</mark> в появившемся окне.
        </p>
        <ArticleMedia
          caption="Предупреждение о том, что проект будет конвертирован для работы с новой версией программы"
          src="legacy/aftereffects/this_project_must_be_converted.png"
          type="image"
        />
        <p>
          После конвертации и открытия проекта обязательно сохраните его — нажмите{" "}
          <mark className="key">Ctrl + S</mark> или выберите{" "}
          <mark className="select">«File» → «Save»</mark>. В противном случае изменения не
          сохранятся, а также функция автоматического сохранения не будет работать.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-cannot-be-opened-with-this-version"
        tag="обратная совместимость, несовместимость версий, конвертация проекта, файл который вы пытаетесь открыть создан в версии и не может быть открыт с помощью данной версии, сведения об обновлении программного обеспечения"
        title="Что делать с «The file you are attempting to open was created with version XX.X.X and cannot be opened with this version»?"
      >
        <p>
          Это сообщение информирует вас о том, что проект, созданный в новой версии{" "}
          <mark className="app">Adobe After Effects</mark>, нельзя открыть в старой
          версии. В программе отсутствует автоматическая обратная совместимость — для
          открытия таких проектов в предыдущих версиях потребуются дополнительные
          действия.
        </p>
        <p>
          При возникновении этой проблемы у вас есть два варианта решения: попросить
          пользователя с более новой версией программы сохранить проект для старой версии
          или всё же обновить <mark className="app">Adobe After Effects</mark> до
          актуальной версии. Второй способ проще и быстрее: имеет смысл потратить полчаса
          на установку новой версии <mark className="app">Adobe After Effects</mark> и{" "}
          <a href="#update-app">перенос настроек с плагинами</a>.{" "}
          <em className="article-note-muted">
            Это значительно сэкономит время в будущем, если вы часто работаете с чужими
            проектами.
          </em>
        </p>
        <Addition type="info">
          Проекты, созданные в одной версии{" "}
          <mark className="app">Adobe After Effects</mark> на Windows, в большинстве
          случаев без проблем откроются в версии для macOS и наоборот.
        </Addition>
        <Divider>
          Конвертируем проект для старой версии{" "}
          <mark className="app">Adobe After Effects</mark>
        </Divider>
        <p>
          Если у вас установлено две версии{" "}
          <mark className="app">Adobe After Effects</mark> и вы по какой-то причине не
          хотите работать в новой — вы можете конвертировать файл проекта самостоятельно.
          Для этого перейдите в <mark className="select">«File» → «Save As»</mark> и
          выберите нужную версию из списка. Программа предложит указать папку для
          сохранения копии проекта. Рекомендуется сохранять копию проекта в той же папке,
          где находится оригинал, чтобы избежать проблем со ссылками на исходники.
        </p>
        <ArticleMedia
          caption="Выбираем «Сохранить как...»"
          src="legacy/aftereffects/file_save_as.png"
          type="image"
        />
        <p>
          Обратите внимание, что новые версии{" "}
          <mark className="app">Adobe After Effects</mark> уже не позволяют сохранять
          проекты для версий <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">18.X (2021)</mark> или{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">22.X (2022)</mark>. В таком случае придётся установить
          несколько версий программы и последовательно конвертировать проект через каждую.
          Лучше выполнять этот процесс в виртуальной машине, чтобы избежать возможных
          проблем в основной системе.
        </p>
        <p>
          После конвертации до нужной версии откройте сохранённый файл в вашей версии{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <Addition type="warning">
          После сохранения проекта для старой версии часть функций или эффектов,
          добавленных в более новой версии{" "}
          <mark className="app">Adobe After Effects</mark>, могут работать некорректно или
          вовсе не поддерживаться в вашей старой версии программы.
        </Addition>
      </DetailsSummary>
    </div>
  );
};

export default AeImport;
