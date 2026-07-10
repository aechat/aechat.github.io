import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

import {getPlatformInfo} from "../../../utilities/browserDetection";

const AeWhereFind: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="where-to-download"
        tag="adobe, after effects, photoshop, premiere pro, скачать, установить, бесплатно, скрипты, расширения, плагины, templates, plugins, scripts, extensions"
        title="Где найти и скачать шаблоны, плагины и различные программы?"
      >
        <p>
          На <a href="/">главной странице</a>, в закреплённом сообщении в чате{" "}
          <a
            href="https://t.me/joinchat/F1DdXtG9LephYWUy"
            title="AEChat в Telegram"
          >
            AEChat
          </a>{" "}
          и в списке ниже вы всегда можете найти ссылки на каналы с полезным контентом в{" "}
          <mark className="app">Telegram</mark>.
        </p>
        <Addition type="info">
          {(() => {
            const {isAndroid, isIOS, isMacOS} = getPlatformInfo();

            if (isIOS) {
              return (
                <>
                  Чтобы без проблем скачивать файлы из каналов, описанных ниже,
                  рекомендуется использовать официальное приложение{" "}
                  <mark className="app">Telegram</mark> вместо веб-версии. Его можно
                  установить из <a href="https://telegram.org/dl/ios">App Store</a>.
                </>
              );
            }

            if (isAndroid) {
              return (
                <>
                  Чтобы без проблем скачивать файлы из каналов, описанных ниже,
                  рекомендуется использовать официальное приложение{" "}
                  <mark className="app">Telegram</mark> вместо веб-версии. Его можно
                  установить по <a href="https://telegram.org/android">этой</a> ссылке.
                </>
              );
            }

            if (isMacOS) {
              return (
                <>
                  Чтобы без проблем скачивать файлы из каналов, описанных ниже,
                  рекомендуется использовать десктопную версию{" "}
                  <mark className="app">Telegram</mark> вместо веб-версии. Её можно
                  скачать по <a href="https://macos.telegram.org/">этой</a> ссылке.
                </>
              );
            }

            return (
              <>
                Чтобы без проблем скачивать файлы из каналов, описанных ниже,
                рекомендуется использовать десктопную версию{" "}
                <mark className="app">Telegram</mark> вместо веб-версии. Её можно скачать
                по <a href="https://desktop.telegram.org/">этой</a> ссылке.
              </>
            );
          })()}
        </Addition>
        <Divider>Скачать шаблоны и различные материалы</Divider>
        <ul>
          <li>
            <a href="https://t.me/s/aetemp">AETemp</a> — канал с переходами, шаблонами,
            расширениями и прочими полезными материалами для ваших композиций в{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            <a href="https://t.me/s/designworld">Design World</a> — канал со статичной
            графикой, эффектами и кистями для <mark className="app">Adobe Photoshop</mark>
            , которые в дальнейшем можно использовать для ваших композиций в{" "}
            <mark className="app">Adobe After Effects</mark>.
          </li>
        </ul>
        <Addition type="info">
          Если вы не нашли в каналах <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
          <a href="https://t.me/s/designworld">Design World</a> нужный шаблон, но у вас
          есть на него ссылка, воспользуйтесь сервисом{" "}
          <a href="https://histock.ru/?ref=509060394">HiStock</a> для оперативной покупки
          шаблонов с платформ{" "}
          <a
            href="https://elements.envato.com"
            title="Envato Elements"
          >
            Envato Elements
          </a>
          ,{" "}
          <a
            href="https://freepik.com/"
            title="Freepik"
          >
            Freepik
          </a>
          ,{" "}
          <a
            href="https://motionarray.com/"
            title="Motion Array"
          >
            Motion Array
          </a>{" "}
          и{" "}
          <a
            href="https://artlist.io/"
            title="Artlist"
          >
            Artlist
          </a>{" "}
          по выгодным ценам.
        </Addition>
        <Addition type="danger">
          Файлы из <mark className="web">Videohive</mark>,{" "}
          <mark className="web">Shutterstock</mark> и других сервисов, которые не
          используют подписочную модель распространения, не поддерживаются.
        </Addition>
        <Addition type="warning">
          Контент, предоставленный в <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
          <a href="https://t.me/s/designworld">Design World</a>, не должен использоваться
          в коммерческих целях. Если вы планируете использовать какой-либо материал в
          коммерческих целях, вам нужно будет приобрести нужный шаблон во избежание
          проблем с правообладателями.
        </Addition>
        <Divider>Скачать программы и плагины</Divider>
        <ul>
          <li>
            <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов</a> — канал с
            творческими программами, утилитами и плагинами к различным программам по
            демократичным ценам для пользователей устройств на операционной системе{" "}
            Windows.
          </li>
          <li>
            <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад</a> — такой же канал с
            программами, как и склад стройматериалов, но для пользователей устройств на
            macOS.
          </li>
        </ul>
        <Addition type="info">
          Если у вас возникли проблемы с установкой программ или плагинов, прочтите раздел{" "}
          <a href="#install-problems">«Проблемы с установкой»</a> или обратитесь к нам в{" "}
          <a href="https://t.me/joinchat/F1DdXtG9LephYWUy">AEChat</a>.
        </Addition>
        <Addition type="warning">
          При установке программ с пометкой{" "}
          <mark className="quote">«репак от кролика»</mark> из{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склада стройматериалов (Windows)</a> не
          забывайте убирать галочку <mark className="select">«Реклама»</mark> и отключать
          антивирус перед установкой, иначе можете столкнуться с ошибкой{" "}
          <mark className="select">«helper.exe не найден»</mark>.
        </Addition>
        <Addition type="danger">
          Файлы из каналов <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a>{" "}
          предоставляются «как есть» из открытых источников. Устанавливая или распаковывая
          содержимое из этих каналов — вы принимаете на себя все риски и берёте
          ответственность за использование «народных» материалов.
          <ul>
            <li>
              Администрация этих каналов не может всерьёз воспринимать вбросы вроде{" "}
              <mark className="quote">
                «В „складе“, „саду“ или „аетемпе“ одни вирусы водятся!»
              </mark>{" "}
              без внятных доказательств наличия{" "}
              <mark className="app">вредоносного ПО</mark>. Ложное срабатывание вашего{" "}
              <mark className="app">антивируса</mark> и{" "}
              <mark className="app">Virustotal</mark> также не является доказательством
              наличия <mark className="app">зловредов</mark> в архиве или программе.
            </li>
            <li>
              Если вы доверяете этим источникам, то во избежание проблем с установкой
              программ или плагинов рекомендуется на время или полностью отключить{" "}
              <mark className="app">антивирусное ПО</mark>, установленное на вашем
              устройстве. В противном случае не предъявляйте администраторам претензии без
              подтверждённых фактов и используйте лицензионные версии.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="video-resources"
        tag="футажи, стоки, creative commons, cc0, stock footage, free video, video assets"
        title="Где найти и скачать стоковые видео для своих проектов?"
      >
        <p>
          В Интернете существует множество онлайн-видеостоков, среди которых многие
          предоставляют материалы с лицензией{" "}
          <mark className="term">Creative Commons Zero (CC0)</mark>. Это означает, что вы
          можете использовать их в своих коммерческих проектах, не указывая авторство.
        </p>
        <div className="flexible-links">
          <a
            href="https://mixkit.co/"
            title="Mixkit"
          >
            Mixkit
          </a>
          <a
            href="https://www.pexels.com/videos/"
            title="Pexels"
          >
            Pexels
          </a>
          <a
            href="https://pixabay.com/videos/"
            title="Pixabay"
          >
            Pixabay
          </a>
          <a
            href="https://coverr.co/"
            title="Coverr"
          >
            Coverr
          </a>
          <a
            href="https://mazwai.com/"
            title="Mazwai"
          >
            Mazwai
          </a>
          <a
            href="https://www.videezy.com/"
            title="Videezy"
          >
            Videezy
          </a>
          <a
            href="https://www.vidsplay.com/"
            title="Vidsplay"
          >
            Vidsplay
          </a>
          <a
            href="https://cutestockfootage.com/"
            title="Cute Stock Footage"
          >
            Cute Stock Footage
          </a>
          <a
            href="https://www.ignitemotion.com/"
            title="IgniteMotion"
          >
            IgniteMotion
          </a>
          <a
            href="https://beachfrontbroll.com/"
            title="Beachfront B-Roll"
          >
            Beachfront B-Roll
          </a>
          <a
            href="https://motionarray.com/browse/stock-video/"
            title="Motion Array"
          >
            Motion Array
          </a>
          <a
            href="https://pond5.com/free"
            title="Pond5"
          >
            Pond5
          </a>
          <a
            href="https://www.productioncrate.com"
            title="ProductionCrate"
          >
            ProductionCrate
          </a>
          <a
            href="https://openfootage.net/"
            title="Openfootage"
          >
            Openfootage
          </a>
          <a
            href="https://www.storyblocks.com/video"
            title="Storyblocks"
          >
            Storyblocks
          </a>
        </div>
        <Addition type="warning">
          Перед использованием материалов внимательно ознакомьтесь с условиями
          использования на каждом конкретном ресурсе. Некоторые из них могут потребовать
          оформить подписку.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="graphics-resources"
        tag="фото, изображения, текстуры, шрифты, кисти, паттерны, иконки, psd, graphic resources, free graphics, stock photos"
        title="Где найти и скачать графику для своих проектов?"
      >
        <p>
          В канале{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            Design World
          </a>{" "}
          в <mark className="app">Telegram</mark> вы можете найти полезные материалы для
          использования в различных графических редакторах, например{" "}
          <mark className="app">Adobe Photoshop</mark> и{" "}
          <mark className="app">Adobe Illustrator</mark>. В{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            этом канале
          </a>{" "}
          есть навигация для поиска всевозможных материалов, например по тегам:{" "}
          <mark className="tag">#текстуры</mark>, <mark className="tag">#шрифты</mark>,{" "}
          <mark className="tag">#кисти</mark>, <mark className="tag">#паттерны</mark>.
        </p>
        <p>
          Если вам не хватило контента из{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            Design World
          </a>
          , можете воспользоваться списком сайтов с различными графическими материалами.
        </p>
        <div className="flexible-links">
          {" "}
          <a
            href="https://unsplash.com/"
            title="Unsplash"
          >
            Unsplash
          </a>
          <a
            href="https://www.pexels.com/"
            title="Pexels"
          >
            Pexels
          </a>
          <a
            href="https://pickupimage.com/ru/"
            title="Pickup Image"
          >
            Pickup Image
          </a>
          <a
            href="https://www.freepik.com/"
            title="Freepik"
          >
            Freepik
          </a>
          <a
            href="https://gratisography.com/"
            title="Gratisography"
          >
            Gratisography
          </a>
          <a
            href="https://www.flickr.com/"
            title="The British Library"
          >
            Flickr
          </a>
          <a
            href="https://rupixel.ru/"
            title="RuPixel"
          >
            RuPixel
          </a>
          <a
            href="https://www.stockvault.net/"
            title="Stockvault"
          >
            Stockvault
          </a>
          <a
            href="https://picjumbo.com/"
            title="Picjumbo"
          >
            Picjumbo
          </a>
          <a
            href="https://www.flaticon.com/ru/"
            title="Flaticon"
          >
            Flaticon
          </a>
          <a
            href="https://www.stockio.com/"
            title="Stockio"
          >
            Stockio
          </a>
          <a
            href="https://creazilla.com/ru"
            title="Creazilla"
          >
            Creazilla
          </a>
          <a
            href="https://www.uidownload.com/ru"
            title="UIDownload"
          >
            UIDownload
          </a>
          <a
            href="https://stock.adobe.com/free"
            title="Adobe Stock"
          >
            Adobe Stock
          </a>
          <a
            href="https://polyhaven.com/"
            title="Poly Haven"
          >
            Poly Haven
          </a>
          <a
            href="https://cc0textures.com/"
            title="CC0 Textures"
          >
            CC0 Textures
          </a>
          <a
            href="https://texturebox.com/"
            title="Texture Box"
          >
            Texture Box
          </a>
        </div>
        <Addition type="warning">
          Перед использованием материалов внимательно ознакомьтесь с условиями
          использования на каждом конкретном ресурсе. Некоторые из них могут потребовать
          оформить подписку.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="sfx-resources"
        tag="sfx, звук, музыка, саунд-дизайн, аудио, sound effects, royalty free music, audio library"
        title="Где найти и скачать звуковые эффекты для своих композиций?"
      >
        <p>
          В канале <a href="https://t.me/s/aetemp">AETemp</a> вы можете найти звуковые
          эффекты по хештегу <mark className="tag">#звуки</mark>. Если же вам не хватит
          ассортимента из <a href="https://t.me/s/aetemp">этого канала</a>, то ниже
          приведён список сайтов, откуда можно скачать другие звуковые эффекты и
          использовать их в своих проектах.
        </p>
        <div className="flexible-links">
          <a
            href="https://www.adobe.com/products/audition/offers/adobeauditiondlcsfx.html"
            title="Adobe Audition Effects"
          >
            Adobe Audition Effects
          </a>
          <a
            href="https://www.zapsplat.com/"
            title="Zapsplat"
          >
            Zapsplat
          </a>
          <a
            href="https://www.soundeffectsplus.com/"
            title="SoundEffects+"
          >
            SoundEffects+
          </a>
          <a
            href="https://freesound.org/"
            title="Freesound"
          >
            Freesound
          </a>
          <a
            href="https://www.freesfx.co.uk/"
            title="FreeSFX"
          >
            FreeSFX
          </a>
          <a
            href="https://uppbeat.io/sfx"
            title="Uppbeat"
          >
            Uppbeat
          </a>
          <a
            href="https://mixkit.co/free-sound-effects/"
            title="Mixkit"
          >
            Mixkit
          </a>
          <a
            href="https://pixabay.com/sound-effects/"
            title="Pixabay"
          >
            Pixabay
          </a>
          <a
            href="https://www.audiomicro.com/free-sound-effects"
            title="Audiomicro"
          >
            Audiomicro
          </a>
          <a
            href="https://www.soundjay.com/"
            title="SoundJay"
          >
            SoundJay
          </a>
          <a
            href="https://www.bensound.com/"
            title="Bensound"
          >
            Bensound
          </a>
          <a
            href="https://www.incompetech.com/music/royalty-free/music.html"
            title="Incompetech"
          >
            Incompetech
          </a>
          <a
            href="https://www.jamendo.com/"
            title="Jamendo"
          >
            Jamendo
          </a>
          <a
            href="https://www.youtube.com/audiolibrary"
            title="YouTube Audio Library"
          >
            YouTube Audio Library
          </a>
          <a
            href="https://www.ccmixter.org/"
            title="ccMixter"
          >
            ccMixter
          </a>
          <a
            href="https://www.musopen.org/music/"
            title="Musopen"
          >
            Musopen
          </a>
          <a
            href="https://mobygratis.com/"
            title="mobygratis"
          >
            mobygratis
          </a>
          <a
            href="https://tunetank.com/"
            title="tunetank"
          >
            tunetank
          </a>
          <a
            href="https://app.hellothematic.com/"
            title="Thematic"
          >
            Thematic
          </a>
          <a
            href="https://taketones.com/"
            title="TakeTones"
          >
            TakeTones
          </a>
          <a
            href="https://audiokaif.ru/"
            title="Аудио Кайф"
          >
            Аудио Кайф
          </a>
          <a
            href="https://www.chosic.com/free-music/all/"
            title="Chosic"
          >
            Chosic
          </a>
          <a
            href="https://blocsonic.com/"
            title="blocSonic"
          >
            blocSonic
          </a>
          <a
            href="https://audionautix.com/"
            title="AudionautiX"
          >
            AudionautiX
          </a>
          <a
            href="https://www.looperman.com/"
            title="Looperman"
          >
            Looperman
          </a>
        </div>
        <Addition type="warning">
          Перед использованием материалов внимательно ознакомьтесь с условиями
          использования на каждом конкретном ресурсе. Некоторые из них могут потребовать
          оформить подписку.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="likefont"
        tag="идентификация шрифта, find font, likefont, определить шрифт, font identification"
        title="Как распознать шрифт по картинке?"
      >
        <p>
          Для распознавания шрифта на изображении вы можете воспользоваться сервисом{" "}
          <a
            href="https://en.likefont.com"
            title="Сервис по нахождению шрифтов LikeFont"
          >
            LikeFont
          </a>
          . Этот сервис может распознавать шрифты как на латинице, так и на кириллице.
        </p>
        <ul>
          <li>
            <p>
              Чтобы начать поиск нужного начертания, сначала перейдите на сайт{" "}
              <a
                href="https://en.likefont.com"
                title="Сервис по нахождению шрифтов LikeFont"
              >
                LikeFont
              </a>{" "}
              и загрузите туда своё изображение с помощью проводника или{" "}
              <mark className="key">Ctrl + V</mark>.
            </p>
            <Addition type="danger">
              Учтите, что по умолчанию на странице установлен флажок{" "}
              <mark className="select">
                «I agree to post it in Identification Community»
              </mark>
              , который разрешает публикацию вашего скриншота в сообществе. Если вы не
              хотите выкладывать скриншот в сеть — уберите галочку.
            </Addition>
            <ArticleMedia
              caption="Главная страница LikeFont"
              src="legacy/likefont/likefont_mainpage.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Предположим, что на вход вы дали скриншот с одной проблемой: он
              неконтрастный, и весь контент сливается. В таком случае изображение нужно
              предварительно обработать.
            </p>
            <ArticleMedia
              caption="Пример плохого исходника"
              src="legacy/likefont/aefaq_likefont_example.png"
              type="image"
            />
          </li>
          <li>
            <p>
              После загрузки сайт предлагает инструменты для обработки изображения,
              например <mark className="select">«Threshold»</mark>. Его нужно повысить до
              максимально возможного значения, чтобы отделить текст от фона. При
              необходимости вы можете воспользоваться инструментами для поворота,
              отзеркаливания и наклона изображения.
            </p>
            <ArticleMedia
              caption="Изображение после обработки средствами сайта"
              src="legacy/likefont/aefaq_likefont_fixed.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Затем пролистайте страницу ниже, и вы увидите несколько изображений,
              разделённых на распознанные сервисом буквы. К каждому такому изображению
              нужно вписать соответствующую букву для точности распознавания. Если на
              изображении нет буквы или символа, то такую ячейку можно пропустить. После
              того как вы впишете буквы, нажмите на{" "}
              <mark className="select">«Identify Now»</mark>, и сервис начнёт распознавать
              шрифт, а затем выдаст результат.
            </p>
            <Addition type="info">
              Чем больше букв вы впишете, тем точнее будет результат распознавания шрифта.
            </Addition>
            <ArticleMedia
              caption="Изображения, к которым нужно вписать букву"
              src="legacy/likefont/aefaq_likefont_recognition.png"
              type="image"
            />
          </li>
          <li>
            <p>
              После обработки изображения ниже у вас появится список возможных шрифтов. В
              моём примере был использован шрифт{" "}
              <mark className="copy">JetBrains Mono</mark>, и с его нахождением сервис
              отлично справился.
            </p>
            <ArticleMedia
              caption="Результат распознавания"
              src="legacy/likefont/aefaq_likefont_result.png"
              type="image"
            />
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="effects-list"
        tag="русский язык, английский перевод, локализация, effects translation, language switch, localization"
        title="Где найти таблицу перевода стандартных эффектов?"
      >
        <Addition type="warning">
          Перевод и наличие эффектов, а также способ их работы могут отличаться в
          зависимости от версии <mark className="app">Adobe After Effects</mark>. Также
          рекомендуется переключить интерфейс на английский язык, чтобы не возвращаться к
          этой таблице снова и снова.
        </Addition>
        <p>
          Пользователям, использующим русскоязычный интерфейс{" "}
          <mark className="app">Adobe After Effects</mark>, иногда бывает трудно найти
          эффект, который обозначен на английском языке. В таких случаях можно обратиться
          к таблице перевода.
        </p>
        <Divider>Эффекты для работы с 3D каналами (3D Channel Effects)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Извлечение канала 3D</mark>
              </td>
              <td>
                <mark className="plugin">3D Channel Extract</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Cryptomatte</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/_cOG53NWJj4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Подложка глубины</mark>
              </td>
              <td>
                <mark className="plugin">Depth Matte</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=278"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Глубина поля</mark>
              </td>
              <td>
                <mark className="plugin">Depth of Field</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=216"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">EXtractoR</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/7DW84Vt5gvQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">3D туман</mark>
              </td>
              <td>
                <mark className="plugin">Fog 3D</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=318"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Подложка идентификатора</mark>
              </td>
              <td>
                <mark className="plugin">ID Matte</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/qAKdcIeku3Q&t=457"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">IDentifier</mark>
              </td>
              <td>
                <mark className="plugin">IDentifier</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/7DW84Vt5gvQ&t=195"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для работы с аудио (Audio)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Назад</mark>
              </td>
              <td>
                <mark className="plugin">Backwards</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=46"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">ВЧ и НЧ</mark>
              </td>
              <td>
                <mark className="plugin">Bass &amp; Treble</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=79"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Компрессор</mark>
              </td>
              <td>
                <mark className="plugin">Compressor</mark>
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Задержка</mark>
              </td>
              <td>
                <mark className="plugin">Delay</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=101"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Искажение</mark>
              </td>
              <td>
                <mark className="plugin">Distortion</mark>
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фланджер и хор</mark>
              </td>
              <td>
                <mark className="plugin">Flange &amp; Chorus</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=139"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Шумоподавитель</mark>
              </td>
              <td>
                <mark className="plugin">Gate</mark>
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фильтр НЧ и ВЧ</mark>
              </td>
              <td>
                <mark className="plugin">High-Low Pass</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=158"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Модулятор</mark>
              </td>
              <td>
                <mark className="plugin">Modulator</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=177"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Параметрическая коррекция</mark> или{" "}
                <mark className="plugin">Параметр. коррекция</mark>
              </td>
              <td>
                <mark className="plugin">Parametric EQ</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=191"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Реверберация</mark>
              </td>
              <td>
                <mark className="plugin">Reverb</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=211"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Стереомикшер</mark>
              </td>
              <td>
                <mark className="plugin">Stereo Mixer</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=224"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Тон</mark>
              </td>
              <td>
                <mark className="plugin">Tone</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lNYgKQPU2Pk&t=242"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для размытия и резкости (Blur &amp; Sharpen)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Двухстороннее размытие</mark>
              </td>
              <td>
                <mark className="plugin">Bilateral Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/oq0FC5UuE7M&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Размытие при малой глубине резкости камеры</mark>{" "}
                или <mark className="plugin">Разм.мал.гл.рез.</mark>
              </td>
              <td>
                <mark className="plugin">Camera Lens Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/EPw0nMrhP8E&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">
                  Восстановление резкости при дрожании камеры
                </mark>{" "}
                или <mark className="plugin">Дрож. камеры: восст. резк.</mark>
              </td>
              <td>
                <mark className="plugin">Camera-Shake Deblur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/28L2XalNr5A&t=1178"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Cross Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/UOEFos3tyHs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Radial Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/4hpvPSexGOg&t=161"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Radial Fast Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/4hpvPSexGOg&t=248"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Vector Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/tWF41oySk3U&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Размытие каналов</mark>
              </td>
              <td>
                <mark className="plugin">Channel Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/x4jHZoUk2uc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сложное размытие</mark>
              </td>
              <td>
                <mark className="plugin">Compound Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/JGkoDPa1XEw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Направленное размытие</mark> или{" "}
                <mark className="plugin">Направл. разм.</mark>
              </td>
              <td>
                <mark className="plugin">Directional Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/7BUnCtU9ARY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Быстрое размытие по рамке</mark>
              </td>
              <td>
                <mark className="plugin">Fast Box Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/MyEZcFBwloY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Размытие по Гауссу</mark>
              </td>
              <td>
                <mark className="plugin">Gaussian Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/MyEZcFBwloY&t=76"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Радиальное размытие</mark>
              </td>
              <td>
                <mark className="plugin">Radial Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/4hpvPSexGOg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Увеличить резкость</mark> или{" "}
                <mark className="plugin">Увел. четкость</mark>
              </td>
              <td>
                <mark className="plugin">Sharpen</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/2HwYIQWSQb8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Умное размытие</mark>
              </td>
              <td>
                <mark className="plugin">Smart Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/oq0FC5UuE7M&t=104"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Контурная резкость</mark> или{" "}
                <mark className="plugin">Контур. резкость</mark>
              </td>
              <td>
                <mark className="plugin">Unsharp Mask</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/QhKqU1ZHUJ4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для работы с цветовыми каналами (Channel)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Арифметический</mark>
              </td>
              <td>
                <mark className="plugin">Arithmetic</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Смешение</mark>
              </td>
              <td>
                <mark className="plugin">Blend</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=176"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Вычисления</mark>
              </td>
              <td>
                <mark className="plugin">Calculations</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=223"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Composite</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/trNkh341o6s&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Инструмент комбинирования каналов</mark> или{" "}
                <mark className="plugin">Инстр.комбинир.каналов</mark>
              </td>
              <td>
                <mark className="plugin">Channel Combiner</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=310"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сложный арифметический</mark>
              </td>
              <td>
                <mark className="plugin">Compound Arithmetic</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/fV_6S9hF3as&t=116"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Обратить</mark>
              </td>
              <td>
                <mark className="plugin">Invert</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/1hhA-21q8Xw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Минимакс</mark>
              </td>
              <td>
                <mark className="plugin">Minimax</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/ibfYiy--9Hs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Удалить обработку краев цветом</mark> или{" "}
                <mark className="plugin">Удал. обр. краев цветов</mark>
              </td>
              <td>
                <mark className="plugin">Remove Color Matting</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/8u8uJkSl9Uw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Задать каналы</mark>
              </td>
              <td>
                <mark className="plugin">Set Channels</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/IKah5aJHwmg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Настроить подложку</mark>
              </td>
              <td>
                <mark className="plugin">Set Matte</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/zfmuXUgATpo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сдвинуть каналы</mark>
              </td>
              <td>
                <mark className="plugin">Shift Channels</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/-pqGYehO-4s&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сплошной совмещенный</mark>
              </td>
              <td>
                <mark className="plugin">Solid Composite</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/ZZiabVb-OEg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для коррекции цвета (Color Correction)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Автоцвет</mark>
              </td>
              <td>
                <mark className="plugin">Auto Color</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/NW4VGAt5x4g&t=198"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Автоконтраст</mark>
              </td>
              <td>
                <mark className="plugin">Auto Contrast</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/NW4VGAt5x4g&t=166"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Автоуровни</mark>
              </td>
              <td>
                <mark className="plugin">Auto Levels</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/NW4VGAt5x4g&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Черное и белое</mark>
              </td>
              <td>
                <mark className="plugin">Black &amp; White</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/fmN2-L0NG6o&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Яркость и контрастность</mark>
              </td>
              <td>
                <mark className="plugin">Brightness &amp; Contrast</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/s4bAXwpcj-0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цвета телетрансляции</mark>
              </td>
              <td>
                <mark className="plugin">Broadcast Colors</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/pE58Xz1wXxI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Color Neutralizer</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/earDDwlY5IE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Color Offset</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/1-vGTVngKRw&t=10"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Kernel</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/H1cXvYYM_0U&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Toner</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/euIDwp4bsi0&t=186"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Изменить цвет</mark>
              </td>
              <td>
                <mark className="plugin">Change Color</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/LfbBtfbRFo8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Заменить на цвет</mark>
              </td>
              <td>
                <mark className="plugin">Change to Color</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/LfbBtfbRFo8&t=154"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Микширование каналов</mark>
              </td>
              <td>
                <mark className="plugin">Channel Mixer</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/pkPBKtVumaQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовой баланс</mark>
              </td>
              <td>
                <mark className="plugin">Color Balance</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/pkPBKtVumaQ&t=139"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовой баланс (HLS)</mark>
              </td>
              <td>
                <mark className="plugin">Color Balance (HLS)</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/pkPBKtVumaQ&t=180"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Привязка цвета</mark>
              </td>
              <td>
                <mark className="plugin">Color Link</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Vq6FpcCtSd0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Стабилизатор цвета</mark>
              </td>
              <td>
                <mark className="plugin">Color Stabilizer</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/8-16s24iBy8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Colorama</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/85XJHcAydVU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Кривые</mark>
              </td>
              <td>
                <mark className="plugin">Curves</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/nP47ynBc3B8&t=398"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Выровнять</mark>
              </td>
              <td>
                <mark className="plugin">Equalize</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/_S4N3PEvaws&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Экспозиция</mark>
              </td>
              <td>
                <mark className="plugin">Exposure</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/PciM7SLWu40&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Гамма/Основа/Усиление</mark>
              </td>
              <td>
                <mark className="plugin">Gamma/Pedestal/Gain</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/yJyHkxTTlc4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовой тон/Насыщенность</mark> или{" "}
                <mark className="plugin">Цв. тон/Насыщенность</mark>
              </td>
              <td>
                <mark className="plugin">Hue/Saturation</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/76LQhG-nl_0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Оставить цвет</mark>
              </td>
              <td>
                <mark className="plugin">Leave Color</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/LfbBtfbRFo8&t=314"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Уровни</mark>
              </td>
              <td>
                <mark className="plugin">Levels</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/nP47ynBc3B8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Уровни (отдельные элементы управления)</mark> или{" "}
                <mark className="plugin">Уровни (отд.эл.управ.)</mark>
              </td>
              <td>
                <mark className="plugin">Levels (Individual Controls)</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/nP47ynBc3B8&t=372"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цвет Lumetri</mark>
              </td>
              <td>
                <mark className="plugin">Lumetri Color</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/y4fuhIPxmJg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фотофильтр</mark>
              </td>
              <td>
                <mark className="plugin">Photo Filter</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/LwdOCzlVHe4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Произвольная карта PS</mark>
              </td>
              <td>
                <mark className="plugin">PS Arbitrary Map</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/POK5dgZh6zQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Выборочная коррекция цвета</mark> или{" "}
                <mark className="plugin">Выб. коррекция цвета</mark>
              </td>
              <td>
                <mark className="plugin">Selective Color</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/R__aeOjw2Ms&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Тень/подсветка</mark>
              </td>
              <td>
                <mark className="plugin">Shadow/Highlight</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/D8FOw8fUbSg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Оттенок</mark>
              </td>
              <td>
                <mark className="plugin">Tint</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/euIDwp4bsi0&t=87"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Трехкрасочный</mark>
              </td>
              <td>
                <mark className="plugin">Tritone</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/euIDwp4bsi0&t=134"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Красочность</mark>
              </td>
              <td>
                <mark className="plugin">Vibrance</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/o9O-SK4j5yc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Видеоограничитель</mark>
              </td>
              <td>
                <mark className="plugin">Video Limiter</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/iuNNcEmuJI8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Преобраз.отображ.OCIO</mark>
              </td>
              <td>
                <mark className="plugin">OCIO Display Transform</mark>
              </td>
              <td rowSpan={5}>—</td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Преобразование CDL OCIO</mark>
              </td>
              <td>
                <mark className="plugin">OCIO CDL Transform</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Преобраз.цв.пр-ва OCIO</mark>
              </td>
              <td>
                <mark className="plugin">OCIO Color Space Transform</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Преобразование файла OCIO</mark>
              </td>
              <td>
                <mark className="plugin">OCIO File Transform</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Преобразование вида OCIO</mark>
              </td>
              <td>
                <mark className="plugin">OCIO Look Transform</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для искажения (Distort)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Деформация по Безье</mark>
              </td>
              <td>
                <mark className="plugin">Bezier Warp</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/J77LkU-aiIM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Выпуклость</mark>
              </td>
              <td>
                <mark className="plugin">Bulge</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/03JF-PxF1gE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Bend It</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/L46aRRGkb58&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Bender</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/L46aRRGkb58&t=440"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Blobbylize</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/WPo-dkPiynI&t=470"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Flo Motion</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/8prrshDN0eo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Griddler</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/SN6yteIc88k&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Lens</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/HhY6NqWRU_M&t=228"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Page Turn</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/fybg41bOoLE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Power Pin</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/NeUrbL0oadc&t=146"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Ripple Pulse</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/k5b_kRqgky8&t=369"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Slant</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/wxOL7Cjm-is&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Smear</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/w6PkkWRpZpQ&t=84"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Split</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sZjtBJX_Its&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Split 2</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sZjtBJX_Its&t=62"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Tiler</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/uAc5sToN5DM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Привязка по углам</mark> или{" "}
                <mark className="plugin">Прив. по углам</mark>
              </td>
              <td>
                <mark className="plugin">Corner Pin</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/NeUrbL0oadc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">
                  Увеличение с сохранением уровня детализации
                </mark>{" "}
                или <mark className="plugin">Увел.с сохран.ур.детализ.</mark>
              </td>
              <td>
                <mark className="plugin">Detail-preserving Upscale</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/njLTViB1dTk&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Карта смещения</mark>
              </td>
              <td>
                <mark className="plugin">Displacement Map</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/4N2xvjYoLTM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Пластика</mark>
              </td>
              <td>
                <mark className="plugin">Liquify</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/EHlmVsp-JPs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Увеличение</mark>
              </td>
              <td>
                <mark className="plugin">Magnify</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/c_dn9kPHmhA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Деформация сетки</mark>
              </td>
              <td>
                <mark className="plugin">Mesh Warp</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/2_nRHBNmCuQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Зеркало</mark>
              </td>
              <td>
                <mark className="plugin">Mirror</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/9XMohV-HL-0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Смещение</mark>
              </td>
              <td>
                <mark className="plugin">Offset</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/3DYJQO70B7M&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Компенсация оптики</mark>
              </td>
              <td>
                <mark className="plugin">Optics Compensation</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/HhY6NqWRU_M&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Полярные координаты</mark>
              </td>
              <td>
                <mark className="plugin">Polar Coordinates</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/9do6TuDBYEQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Изменить форму</mark>
              </td>
              <td>
                <mark className="plugin">Reshape</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Rp6iKBfOfgg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Рябь</mark>
              </td>
              <td>
                <mark className="plugin">Ripple</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/k5b_kRqgky8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Устранение эффекта плавающего затвора</mark> или{" "}
                <mark className="plugin">Устр.эфф.плав.затвора</mark>
              </td>
              <td>
                <mark className="plugin">Rolling Shutter Repair</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/28L2XalNr5A&t=1363"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Пятно</mark>
              </td>
              <td>
                <mark className="plugin">Smear</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/w6PkkWRpZpQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сферизация</mark>
              </td>
              <td>
                <mark className="plugin">Spherize</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/MUAStb2uULc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Преобразовать</mark>
              </td>
              <td>
                <mark className="plugin">Transform</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/JChsjyYSA2A&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Вихревое смещение</mark>
              </td>
              <td>
                <mark className="plugin">Turbulent Displace</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/HiKTFo-PYAg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Скручивание</mark>
              </td>
              <td>
                <mark className="plugin">Twirl</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Jb9YMWrVHLk&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Деформация</mark>
              </td>
              <td>
                <mark className="plugin">Warp</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Qg9eeziEpJo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Стабилизатор деформации</mark>
              </td>
              <td>
                <mark className="plugin">Warp Stabilizer</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/28L2XalNr5A&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Волнообразная деформация</mark>
              </td>
              <td>
                <mark className="plugin">Wave Warp</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/AbY7V6bJITA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для контроля выражений (Expression Controls)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Элемент управления 3D точкой</mark> или{" "}
                <mark className="plugin">Эле.упр.3D точки</mark>
              </td>
              <td>
                <mark className="plugin">3D Point Control</mark>
              </td>
              <td rowSpan={8}>
                <a
                  href="https://youtu.be/zW3Oj2X9oEY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Элемент управления углами</mark> или{" "}
                <mark className="plugin">Эл.упр.углами</mark>
              </td>
              <td>
                <mark className="plugin">Angle Control</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Элемент управления «Флажок»</mark> или{" "}
                <mark className="plugin">Эл.упр.«Флажок»</mark>
              </td>
              <td>
                <mark className="plugin">Checkbox Control</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Элемент управления цветом</mark> или{" "}
                <mark className="plugin">Эл.упр.цветом</mark>
              </td>
              <td>
                <mark className="plugin">Color Control</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Управление раскрывающимся меню</mark> или{" "}
                <mark className="plguin">Управ. раскр. меню</mark>
              </td>
              <td>
                <mark className="plugin">Dropdown Menu Control</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Элемент управления слоями</mark> или{" "}
                <mark className="plugin">Эл.упр.слоями</mark>
              </td>
              <td>
                <mark className="plugin">Layer Control</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Элемент управления точкой</mark> или{" "}
                <mark className="plugin">Эл.упр.точкой</mark>
              </td>
              <td>
                <mark className="plugin">Point Control</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Элемент управления «Ползунок»</mark> или{" "}
                <mark className="plugin">Эл.упр.«Ползунок»</mark>
              </td>
              <td>
                <mark className="plugin">Slider Control</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Генераторы изображения (Generate)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">4-цветный градиент</mark>
              </td>
              <td>
                <mark className="plugin">4-Color Gradient</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/MfyN1bBe8rE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Расширенное освещение</mark>
              </td>
              <td>
                <mark className="plugin">Advanced Lightning</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/YJ8jXYU9lYs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Спектр аудио</mark>
              </td>
              <td>
                <mark className="plugin">Audio Spectrum</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/1MCQ2JvExyE&t=510"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Форма звуковой волны</mark>
              </td>
              <td>
                <mark className="plugin">Audio Waveform</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/1MCQ2JvExyE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Луч</mark>
              </td>
              <td>
                <mark className="plugin">Beam</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/ESaxBxvt6Us&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Glue Gun</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/RjClIwbbV04&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Light Burst 2.5</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/rNJ5SRrWqyo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Light Rays</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/lUyIpM4aRwU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Light Sweep</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/0n0pZp_BA2w&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Threads</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/fn2Yx3YjlS0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Мозаичная текстура</mark> или{" "}
                <mark className="plugin">Мозаич.текстура</mark>
              </td>
              <td>
                <mark className="plugin">Cell Pattern</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/y6R1_9E0tPo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Шахматная доска</mark>
              </td>
              <td>
                <mark className="plugin">Checkerboard</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/xhIJdj_dA7U&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Круг</mark>
              </td>
              <td>
                <mark className="plugin">Circle</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/yb-wbWtJnng&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Эллипс</mark>
              </td>
              <td>
                <mark className="plugin">Ellipse</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/yb-wbWtJnng&t=312"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Заливка пипеткой</mark>
              </td>
              <td>
                <mark className="plugin">Eyedropper Fill</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/bNsQ0RCT2l4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Заливка</mark>
              </td>
              <td>
                <mark className="plugin">Fill</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/euIDwp4bsi0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фрактал</mark>
              </td>
              <td>
                <mark className="plugin">Fractal</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Rl2CpXgDgok&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовая шкала градиента</mark>
              </td>
              <td>
                <mark className="plugin">Gradient Ramp</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/JhdhSF2ibgQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сетка</mark>
              </td>
              <td>
                <mark className="plugin">Grid</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/5Ug1sVc7uYE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Блики</mark>
              </td>
              <td>
                <mark className="plugin">Lens Flare</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/bgiA3_-9abw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Заливка</mark>
              </td>
              <td>
                <mark className="plugin">Paint Bucket</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/bNsQ0RCT2l4&t=192"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Радиоволны</mark>
              </td>
              <td>
                <mark className="plugin">Radio Waves</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/wf8XFPvUptc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Каракули</mark>
              </td>
              <td>
                <mark className="plugin">Scribble</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/2l4ao-cXlxM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Обводка</mark>
              </td>
              <td>
                <mark className="plugin">Stroke</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/NZAcHdOaUH4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Vegas</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/FQ0oTGpHbBs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Надпись</mark>
              </td>
              <td>
                <mark className="plugin">Write-on</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/NZAcHdOaUH4&t=179"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для VR-видео (Immersive Video)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Размытие VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=320"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Хроматические аберрации VR</mark> или{" "}
                <mark className="plugin">Хроматич. аберрации</mark>
              </td>
              <td>
                <mark className="plugin">VR Chromatic Aberrations</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=435"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Градиенты цвета VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Color Gradients</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=538"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Конвертер VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Converter</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=621"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Понижение уровня шума VR</mark>
              </td>
              <td>
                <mark className="plugin">VR De-Noise</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=648"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цифровой сбой VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Digital Glitch</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=680"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фрактальный шум VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Fractal Noise</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=927"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Свечение VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Glow</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1011"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Плоскость VR в сферу</mark>
              </td>
              <td>
                <mark className="plugin">VR Plane to Sphere</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1037"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Повернуть сферу VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Rotate Sphere</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1131"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Увеличить четкость VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Sharpen</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1153"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сфера VR в плоскость</mark>
              </td>
              <td>
                <mark className="plugin">VR Sphere to Plane</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/cXv70dpIQJw&t=1167"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для кеинга (Keying)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Advanced Spill Suppressor</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/tK_Z1dYgtxs&t=112"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Simple Wire Removal</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/ALAoNGXvLC4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Ключ разности цвета</mark>
              </td>
              <td>
                <mark className="plugin">Color Difference Key</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/kO-HrJ1su-0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовой диапазон</mark>
              </td>
              <td>
                <mark className="plugin">Color Range</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/W6vIw8_bZHM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Подложка разницы</mark>
              </td>
              <td>
                <mark className="plugin">Difference Matte</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/ciX-roxC4oQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Извлечь</mark>
              </td>
              <td>
                <mark className="plugin">Extract</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/v7pqZ9gtn8I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Внутренний/внешний ключ</mark>
              </td>
              <td>
                <mark className="plugin">Inner/Outer Key</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/z1Ji43Sg5bk&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Key Cleaner</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/tK_Z1dYgtxs&t=334"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Keylight (1.2)</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/tK_Z1dYgtxs&t=443"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Линейный цветовой ключ</mark>
              </td>
              <td>
                <mark className="plugin">Linear Color Key</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/8RjOe6cO-cY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Unmult</mark>
              </td>
              <td>—</td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для изменения подложек (Matte)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Подавление подложки</mark>
              </td>
              <td>
                <mark className="plugin">Matte Choker</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/rGmc9rrf5pc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Форма Mocha</mark>
              </td>
              <td>
                <mark className="plugin">Mocha shape</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/wmV2p5DprI8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Уточнить жесткую подложку</mark>
              </td>
              <td>
                <mark className="plugin">Refine Hard Matte</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/0m5b7Qs6Ido&t=423"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Уточнить мягкую подложку</mark>
              </td>
              <td>
                <mark className="plugin">Refine Soft Matte</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/0m5b7Qs6Ido&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Упрощенное подавление</mark>
              </td>
              <td>
                <mark className="plugin">Simple Choker</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/8lCEc-H3JJU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для генерации шума и зерна (Noise &amp; Grain)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Добавить зернистость</mark>
              </td>
              <td>
                <mark className="plugin">Add Grain</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/FmSTOXu2V6I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Пыль и царапины</mark>
              </td>
              <td>
                <mark className="plugin">Dust &amp; Scratches</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Q1BBpMxmbXU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фрактальный шум</mark>
              </td>
              <td>
                <mark className="plugin">Fractal Noise</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/kdttSozSLG4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Соответствие зернистости</mark>
              </td>
              <td>
                <mark className="plugin">Match Grain</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/FmSTOXu2V6I&t=621"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Медиана</mark>
              </td>
              <td>
                <mark className="plugin">Median</mark>
              </td>
              <td rowSpan={2}>
                <a
                  href="https://youtu.be/x-m_B8qThhI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Median (предыдущая версия)</mark>
              </td>
              <td>
                <mark className="plugin">Median (Legacy)</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Шум</mark>
              </td>
              <td>
                <mark className="plugin">Noise</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/pWSNY7XvN-A&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Альфа-канал шума</mark>
              </td>
              <td>
                <mark className="plugin">Noise Alpha</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/jZj0hioZYoM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Шум HLS</mark>
              </td>
              <td>
                <mark className="plugin">Noise HLS</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/pWSNY7XvN-A&t=55"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Автошум HLS</mark>
              </td>
              <td>
                <mark className="plugin">Noise HLS Auto</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/pWSNY7XvN-A&t=165"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Удалить зернистость</mark>
              </td>
              <td>
                <mark className="plugin">Remove Grain</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/FmSTOXu2V6I&t=835"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Турбулентный шум</mark>
              </td>
              <td>
                <mark className="plugin">Turbulent Noise</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/kdttSozSLG4&t=262"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Устаревшие эффекты (Obsolete или Legacy)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Базовый 3D</mark>
              </td>
              <td>
                <mark className="plugin">Basic 3D</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=45"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Основной текст</mark>
              </td>
              <td>
                <mark className="plugin">Basic Text</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=85"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовой ключ</mark>
              </td>
              <td>
                <mark className="plugin">Color Key</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=249"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Размытие по Гауссу (из прежней версии)</mark> или{" "}
                <mark className="plugin">Разм.по Гауссу (преж. вер.)</mark>
              </td>
              <td>
                <mark className="plugin">Gaussian Blur (Legacy)</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=167"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Молния</mark>
              </td>
              <td>
                <mark className="plugin">Lightning</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=135"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Ключ яркости</mark>
              </td>
              <td>
                <mark className="plugin">Luma Key</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=339"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Текст по контуру</mark>
              </td>
              <td>
                <mark className="plugin">Path Text</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=112"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">
                  Уменьшить мерцание в чересстрочной развертке
                </mark>{" "}
                или <mark className="plugin">Умен.мерц.в чересстр.разв.</mark>
              </td>
              <td>
                <mark className="plugin">Reduce Interlace Flicker</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=205"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Подавление разлития</mark>
              </td>
              <td>
                <mark className="plugin">Spill Suppressor</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/sQFUGX_Of84&t=403"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для перспективы (Perspective)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Функция 3D Camera Tracker</mark>
              </td>
              <td>
                <mark className="plugin">3D Camera Tracker</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/yaT3YwIK-BI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">3D очки</mark>
              </td>
              <td>
                <mark className="plugin">3D Glasses</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/hLLcg1xE7Mo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Скос альфа-канала</mark>
              </td>
              <td>
                <mark className="plugin">Bevel Alpha</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Y217431eGeM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Скошенные края</mark>
              </td>
              <td>
                <mark className="plugin">Bevel Edges</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Y217431eGeM&t=36"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Cylinder</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Y205itPnJCc&t=627"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Environment</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/WFwbm0kOzRQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Sphere</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Y205itPnJCc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Spotlight</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/vagmclmkMU4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Тень</mark>
              </td>
              <td>
                <mark className="plugin">Drop Shadow</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/nzapxMlX74A&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Радиальная тень</mark>
              </td>
              <td>
                <mark className="plugin">Radial Shadow</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Bx-T-8Vjm2k&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для имитации чего-либо (Simulation)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Танец карт</mark>
              </td>
              <td>
                <mark className="plugin">Card Dance</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/XC-Pd_wNbbM&t=695"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Каустические кривые</mark>
              </td>
              <td>
                <mark className="plugin">Caustics</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/20keMi3bDqc&t=440"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Ball Action</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/uV83WKGQw8Q&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Bubbles</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/B-6XRRtxdSE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Drizzle</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/jJ5MJoL2X_I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Hair</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Jw6P4lnFT6I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Mr. Mercury</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/QwzDqLmIKSI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Particle Systems II</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/7Fp9207Ds5I&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Particle World</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/7Fp9207Ds5I&t=2503"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Pixel Polly</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Wtsws9nN4jM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Rainfall</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/c2TT33Vn0OU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Scatterize</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/2XrcDJI8dhc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Snowfall</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/c2TT33Vn0OU&t=483"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Star Burst</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/G9qbU1ifWWc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Пена</mark>
              </td>
              <td>
                <mark className="plugin">Foam</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/74iePAKBQrg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Площадка для частиц</mark>
              </td>
              <td>
                <mark className="plugin">Particle Playground</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/qzzEy76cCXo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Разброс</mark>
              </td>
              <td>
                <mark className="plugin">Shatter</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/UJI7cbilZYA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Мир волн</mark>
              </td>
              <td>
                <mark className="plugin">Wave World</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/20keMi3bDqc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для стилизации (Stylize)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Мазки кисти</mark>
              </td>
              <td>
                <mark className="plugin">Brush Strokes</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/2sQ0R6zQeYY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Мультипликация</mark>
              </td>
              <td>
                <mark className="plugin">Cartoon</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/QS9QFYnvRi4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Block Load</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/YQRdM_hus4k&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Burn Film</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/HNu77TCadtE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Glass</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/WPo-dkPiynI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC HexTile</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/oqwCF_U3fBo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Kaleida</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/TwiP0uHa4WI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Mr. Shoothie</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/8hk95dMWk4k&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Plastic</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/WPo-dkPiynI&t=335"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC RepeTile</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/UptUlJdoS0M&t=161"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Threshold</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/OGEENhaGDL8&t=79"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Threshold RGB</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/OGEENhaGDL8&t=186"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Vignette</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/eBtk3tN_91o&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовое тиснение</mark>
              </td>
              <td>
                <mark className="plugin">Color Emboss</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/X-SpnyETdEA&t=143"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Тиснение</mark>
              </td>
              <td>
                <mark className="plugin">Emboss</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/X-SpnyETdEA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Выделение краев</mark>
              </td>
              <td>
                <mark className="plugin">Find Edges</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/gEWfYGCejsU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Свечение</mark>
              </td>
              <td>
                <mark className="plugin">Glow</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/t40ZTEBr_M0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Мозаика</mark>
              </td>
              <td>
                <mark className="plugin">Mosaic</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/luVfpqT_rYg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Мозаика движения</mark>
              </td>
              <td>
                <mark className="plugin">Motion Tile</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/UptUlJdoS0M&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Постеризация</mark>
              </td>
              <td>
                <mark className="plugin">Posterize</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/vNWMxYpv6js&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Шероховатые края</mark>
              </td>
              <td>
                <mark className="plugin">Roughen Edges</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/DbMCkyMg0sw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Рассеивание</mark>
              </td>
              <td>
                <mark className="plugin">Scatter</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/oGw-o6eMbgI&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Проблесковый цвет</mark>
              </td>
              <td>
                <mark className="plugin">Strobe Light</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/N1to_8jgnjQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Текстуризация</mark>
              </td>
              <td>
                <mark className="plugin">Texturize</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/u9KJs9q-6es&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Пороговое значение</mark> или{" "}
                <mark className="plugin">порог. значение</mark>
              </td>
              <td>
                <mark className="plugin">Threshold</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/OGEENhaGDL8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для генерации текста (Text)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Нумерация</mark>
              </td>
              <td>
                <mark className="plugin">Numbers</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/EMHcq7YOhfQ&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Тайм-код</mark>
              </td>
              <td>
                <mark className="plugin">Timecode</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/EMHcq7YOhfQ&t=360"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для манипуляции временем (Time)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Force Motion Blur</mark>
              </td>
              <td>
                <a
                  href="https://www.youtube.com/watch?v=ANG3iMQVHVo"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Wide Time</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/IQxvw91sOB4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Эхо</mark>
              </td>
              <td>
                <mark className="plugin">Echo</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/N2qxF8V57FE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Размытие пикселей в движении</mark> или{" "}
                <mark className="plugin">Разм. пикселей в движ.</mark>
              </td>
              <td>
                <mark className="plugin">Pixel Motion Blur</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/DZAakVlJoGU&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Время постеризации</mark>
              </td>
              <td>
                <mark className="plugin">Posterize Time</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/Iu1E9M1EDHY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Разница во времени</mark>
              </td>
              <td>
                <mark className="plugin">Time Difference</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/AzKAVI6KT18&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Смещение по времени</mark> или{" "}
                <mark className="plugin">Смещ. по вр.</mark>
              </td>
              <td>
                <mark className="plugin">Time Displacement</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/vjXP8Hyj4XE&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Искажение времени</mark>
              </td>
              <td>
                <mark className="plugin">Timewarp</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/JsyuG98HZMo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Эффекты для создания переходов (Transition)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Растворение блоков</mark>
              </td>
              <td>
                <mark className="plugin">Block Dissolve</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/6O2I2oLgw4E&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Вытеснение карт</mark>
              </td>
              <td>
                <mark className="plugin">Card Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/XC-Pd_wNbbM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Glass Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/QcLSKGk7G4s&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Grid Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/BC30h50BHqo&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Image Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/QcLSKGk7G4s&t=195"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Jaws</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/BC30h50BHqo&t=119"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Light Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/YEiAz-BddNs&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Line Sweep</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/BC30h50BHqo&t=97"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Radial ScaleWipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/u0Eru4q2qek&t=132"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Scale Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/u0Eru4q2qek&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Twister</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/F0FRc-oORS0&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC WarpoMatic</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/QcLSKGk7G4s&t=292"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Градиентное вытеснение</mark>
              </td>
              <td>
                <mark className="plugin">Gradient Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/acYRLZGEYmc&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Вытеснение диафрагмы</mark>
              </td>
              <td>
                <mark className="plugin">Iris Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/VoyS7UsjZTY&t=68"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Линейное стирание</mark>
              </td>
              <td>
                <mark className="plugin">Linear Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/VoyS7UsjZTY&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Радиальное вытеснение</mark>
              </td>
              <td>
                <mark className="plugin">Radial Wipe</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/VoyS7UsjZTY&t=36"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Жалюзи</mark>
              </td>
              <td>
                <mark className="plugin">Venetian Blinds</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/1Bcq4j69RBg&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Технические эффекты (Utility)</Divider>
        <table>
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
              <th className="where-find-index-column">
                Описание эффекта
                <br />
                от Jake In Motion
                <br />
                на <mark className="web">YouTube</mark>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Применить цвета LUT</mark>
              </td>
              <td>
                <mark className="plugin">Apply Color LUT</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/S1GUo46T2H8&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">CC Overbrights</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/2Akn5zdDMgM&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Конвертер Cineon</mark>
              </td>
              <td>
                <mark className="plugin">Cineon Converter</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/EPxpRkz5Q1Y&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Конвертер профиля цвета</mark>
              </td>
              <td>
                <mark className="plugin">Color Profile Converter</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/xJ8JFqNW07Q&t=8"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Нарастить границы</mark>
              </td>
              <td>
                <mark className="plugin">Grow Bounds</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/-JzYpi6Uyb4&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Расширитель HDR</mark>
              </td>
              <td>
                <mark className="plugin">HDR Compander</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/VvH1JOdd_Cw&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сжатие подсветки HDR</mark>
              </td>
              <td>
                <mark className="plugin">HDR Highlight Compression</mark>
              </td>
              <td>
                <a
                  href="https://youtu.be/npeUQbpaZbA&t=6"
                  title="Видео от Jake In Motion"
                >
                  Видео
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
      <DetailsSummary
        anchor="presets-list"
        tag="русский язык, английский перевод, локализация, presets translation, language switch, localization"
        title="Где найти таблицу перевода стандартных пресетов?"
      >
        <Addition type="warning">
          <ul>
            <li>
              Перевод и наличие пресетов, а также способ их работы могут отличаться в
              зависимости от версии <mark className="app">Adobe After Effects</mark>.
            </li>
            <li>
              <p>
                Если при установке <mark className="app">Adobe After Effects</mark> вы
                выбрали русский язык, то программа создаст файлы пресетов с русскими
                названиями. Простое переключение языка интерфейса это не исправит — файлы
                придётся переименовывать вручную.
              </p>
              <p>
                Чтобы быстро исправить это, скачайте набор для своей версии по ссылкам
                ниже и замените им файлы в папке{" "}
                <mark className="path">
                  C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Presets
                </mark>{" "}
                на Windows или{" "}
                <mark className="path">
                  /Applications/Adobe After Effects 20XX/Presets
                </mark>{" "}
                на macOS, предварительно удалив стандартные пресеты на русском языке.
              </p>
              <div className="flexible-links">
                <a
                  download
                  href="https://github.com/aechat/aechat.github.io/raw/refs/heads/main/public/files/default_presets/Adobe%20After%20Effects%202014%20(13.2)%20Presets.zip"
                >
                  Adobe After Effects 2014 (13.2)
                </a>
                <a
                  download
                  href="https://github.com/aechat/aechat.github.io/raw/refs/heads/main/public/files/default_presets/Adobe%20After%20Effects%202015%20(13.8)%20Presets.zip"
                >
                  Adobe After Effects 2015 (13.8)
                </a>
                <a
                  download
                  href="https://github.com/aechat/aechat.github.io/raw/refs/heads/main/public/files/default_presets/Adobe%20After%20Effects%202017%20(14.2)%20Presets.zip"
                >
                  Adobe After Effects 2017 (14.2)
                </a>
                <a
                  download
                  href="https://github.com/aechat/aechat.github.io/raw/refs/heads/main/public/files/default_presets/Adobe%20After%20Effects%202018%20(15.1)%20Presets.zip"
                >
                  Adobe After Effects 2018 (15.1)
                </a>
                <a
                  download
                  href="https://github.com/aechat/aechat.github.io/raw/refs/heads/main/public/files/default_presets/Adobe%20After%20Effects%202019-2022%20(16.1-22.6)%20Presets.zip"
                >
                  Adobe After Effects 2019-2022 (16.1-22.6)
                </a>
                <a
                  download
                  href="https://github.com/aechat/aechat.github.io/raw/refs/heads/main/public/files/default_presets/Adobe%20After%20Effects%202023%20(23.6)%20Presets.zip"
                >
                  Adobe After Effects 2023 (23.6)
                </a>
                <a
                  download
                  href="https://github.com/aechat/aechat.github.io/raw/refs/heads/main/public/files/default_presets/Adobe%20After%20Effects%202024%20(24.6)%20Presets.zip"
                >
                  Adobe After Effects 2024 (24.6)
                </a>
                <a
                  download
                  href="https://github.com/aechat/aechat.github.io/raw/refs/heads/main/public/files/default_presets/Adobe%20After%20Effects%202025-2026%20(25.6-26.0)%20Presets.zip"
                >
                  Adobe After Effects 2025-2026 (25.6-26.0)
                </a>
              </div>
            </li>
          </ul>
        </Addition>
        <p>
          Иногда пользователю требуется перевод стандартных пресетов, так как их названия
          тоже зависят от локализации программы при установке.
        </p>
        <Divider>Adobe Express - In</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Возникновение возгоранием</mark>
              </td>
              <td>
                <mark className="copy">Flicker In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Возникновение вскакиванием</mark>
              </td>
              <td>
                <mark className="copy">Pop In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Возникновение вырастанием</mark>
              </td>
              <td>
                <mark className="copy">Grow In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Возникновение кручением</mark>
              </td>
              <td>
                <mark className="copy">Spin In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Возникновение прыжками</mark>
              </td>
              <td>
                <mark className="copy">Tumble In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Возникновение сдвигом</mark>
              </td>
              <td>
                <mark className="copy">Slide In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Возникновение тряской</mark>
              </td>
              <td>
                <mark className="copy">Bungee In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Возникновение уменьшением</mark>
              </td>
              <td>
                <mark className="copy">Shrink In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Постепенное возникновение</mark>
              </td>
              <td>
                <mark className="copy">Fade In</mark>
              </td>
            </tr>
          </tbody>
        </table>{" "}
        <Divider>Adobe Express - Looping</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Цикл вращения</mark>
              </td>
              <td>
                <mark className="copy">Spin Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл дрожания</mark>
              </td>
              <td>
                <mark className="copy">Jitter Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл дыхания</mark>
              </td>
              <td>
                <mark className="copy">Breathe Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл извивания</mark>
              </td>
              <td>
                <mark className="copy">Wiggle Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл качания</mark>
              </td>
              <td>
                <mark className="copy">Bob Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл мерцания</mark>
              </td>
              <td>
                <mark className="copy">Flicker Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл мигания</mark>
              </td>
              <td>
                <mark className="copy">Blinking Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл подпрыгивания</mark>
              </td>
              <td>
                <mark className="copy">Yoyo Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл пульса</mark>
              </td>
              <td>
                <mark className="copy">Pulse Loop</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Adobe Express - Out</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Исчезновение вырастанием</mark>
              </td>
              <td>
                <mark className="copy">Grow Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Исчезновение выскакиванием</mark>
              </td>
              <td>
                <mark className="copy">Pop Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Исчезновение кручением</mark>
              </td>
              <td>
                <mark className="copy">Spin Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Исчезновение прыжками</mark>
              </td>
              <td>
                <mark className="copy">Tumble Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Исчезновение сдвигом</mark>
              </td>
              <td>
                <mark className="copy">Slide Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Исчезновение тряской</mark>
              </td>
              <td>
                <mark className="copy">Bungee Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Исчезновение угасанием</mark>
              </td>
              <td>
                <mark className="copy">Flicker Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Исчезновение уменьшением</mark>
              </td>
              <td>
                <mark className="copy">Shrink Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Постепенное исчезновение</mark>
              </td>
              <td>
                <mark className="copy">Fade Out</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Backgrounds</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Аниме — быстрые линии</mark>
              </td>
              <td>
                <mark className="copy">Anime Speed Lines</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Аниме — радиальные линии</mark>
              </td>
              <td>
                <mark className="copy">Anime Radial</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Видение</mark>
              </td>
              <td>
                <mark className="copy">Apparition</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Глубокие ткани</mark>
              </td>
              <td>
                <mark className="copy">Deep Tissue</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Гонки прямоугольников</mark>
              </td>
              <td>
                <mark className="copy">Racing Rectangles</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Жуть</mark>
              </td>
              <td>
                <mark className="copy">Creepy</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Занавес</mark>
              </td>
              <td>
                <mark className="copy">Curtain</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Зеленые кристаллы</mark>
              </td>
              <td>
                <mark className="copy">Green Crystals</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Зигзаг молнии</mark>
              </td>
              <td>
                <mark className="copy">Lightning Bend</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Инфекция</mark>
              </td>
              <td>
                <mark className="copy">Infection</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Кирпичи</mark>
              </td>
              <td>
                <mark className="copy">Blocks</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Космическая мощь</mark>
              </td>
              <td>
                <mark className="copy">Cosmic Power</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Красная скорость</mark>
              </td>
              <td>
                <mark className="copy">Red Speed</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Магма</mark>
              </td>
              <td>
                <mark className="copy">Magma</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Несварение</mark>
              </td>
              <td>
                <mark className="copy">Indigestion</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Огни в тумане</mark>
              </td>
              <td>
                <mark className="copy">Fog Lights</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поднимающийся дым</mark>
              </td>
              <td>
                <mark className="copy">Smoke Rising</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Река</mark>
              </td>
              <td>
                <mark className="copy">River</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Розовый свет</mark>
              </td>
              <td>
                <mark className="copy">Rose Light</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Стремительные изгибы</mark>
              </td>
              <td>
                <mark className="copy">Sweeping Curves</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сфера</mark>
              </td>
              <td>
                <mark className="copy">Orb</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Угольки</mark>
              </td>
              <td>
                <mark className="copy">Cinders</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Шелк</mark>
              </td>
              <td>
                <mark className="copy">Silk</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Электрическая цепь</mark>
              </td>
              <td>
                <mark className="copy">Circuit</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Behaviors</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Автопрокрутка — по вертикали</mark>
              </td>
              <td>
                <mark className="copy">Autoscroll - vertical</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Автопрокрутка — по горизонтали</mark>
              </td>
              <td>
                <mark className="copy">Autoscroll - horizontal</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Генерация значения волны</mark>
              </td>
              <td>
                <mark className="copy">Wave Value Generator</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Затухание поверх нижнего слоя</mark>
              </td>
              <td>
                <mark className="copy">Fade Out Over Layer Below</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Колебания</mark>
              </td>
              <td>
                <mark className="copy">Wigglerama</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб по осям XYZ</mark>
              </td>
              <td>
                <mark className="copy">Separate XYZ Scale</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">
                  Масштабирование одиночного отражения сигнала — по маркерам слоя
                </mark>
              </td>
              <td>
                <mark className="copy">Scale Bounce - layer markers</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">
                  Масштабирование одиночного отражения сигнала — произвольно
                </mark>
              </td>
              <td>
                <mark className="copy">Scale Bounce - random</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мигание непрозрачности — по маркерам слоя</mark>
              </td>
              <td>
                <mark className="copy">Opacity Flash - layer markers</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мигание непрозрачности — произвольно</mark>
              </td>
              <td>
                <mark className="copy">Opacity Flash - random</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Моргание непрозрачности</mark>
              </td>
              <td>
                <mark className="copy">Blinking Opacity</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нарастание + затухание — кадры</mark>
              </td>
              <td>
                <mark className="copy">Fade In+Out - frames</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нарастание + затухание — мс</mark>
              </td>
              <td>
                <mark className="copy">Fade In+Out - msec</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нарастание поверх нижнего слоя</mark>
              </td>
              <td>
                <mark className="copy">Fade In Over Layer Below</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Обрезать контуры — на слой в кадр</mark>
              </td>
              <td>
                <mark className="copy">Trim Paths - at layer in</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Обрезать контуры — на слой из кадра</mark>
              </td>
              <td>
                <mark className="copy">Trim Paths - at layer out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поворот со временем</mark>
              </td>
              <td>
                <mark className="copy">Rotate Over Time</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Покачивания — желе</mark>
              </td>
              <td>
                <mark className="copy">Wiggle - gelatin</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Покачивания — наклон</mark>
              </td>
              <td>
                <mark className="copy">Wiggle - shear</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Покачивания — поворот</mark>
              </td>
              <td>
                <mark className="copy">Wiggle - rotation</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Покачивания — позиция</mark>
              </td>
              <td>
                <mark className="copy">Wiggle - position</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Покачивания — шкала</mark>
              </td>
              <td>
                <mark className="copy">Wiggle - scale</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Принудительное использование опорной точки</mark>
              </td>
              <td>
                <mark className="copy">Lock Anchor Point</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Случайное вкл.-выкл.</mark>
              </td>
              <td>
                <mark className="copy">Random On-Off</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Случайные цвета</mark>
              </td>
              <td>
                <mark className="copy">Random Colors</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Случайные целые числа</mark>
              </td>
              <td>
                <mark className="copy">Random Whole Numbers</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Смещение со временем</mark>
              </td>
              <td>
                <mark className="copy">Drift Over Time</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Image - Creative</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Виньетированная подсветка</mark>
              </td>
              <td>
                <mark className="copy">Vignette Lighting</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Декоративная подсветка — аморфная</mark>
              </td>
              <td>
                <mark className="copy">Mood Lighting - amorphous</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Декоративная подсветка — полосы</mark>
              </td>
              <td>
                <mark className="copy">Mood Lighting - streaks</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Декоративная подсветка — цифровая</mark>
              </td>
              <td>
                <mark className="copy">Mood Lighting - digital</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Зашумленное виньетирование</mark>
              </td>
              <td>
                <mark className="copy">Noisy Vignette</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Контрастность — насыщенность</mark>
              </td>
              <td>
                <mark className="copy">Contrast - saturation</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Контрастность — яркость</mark>
              </td>
              <td>
                <mark className="copy">Contrast - luminance</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Наложенные тени</mark>
              </td>
              <td>
                <mark className="copy">Stacked Drop Shadows</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оттенки серого 1</mark>
              </td>
              <td>
                <mark className="copy">Grayscale 1</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оттенки серого 2</mark>
              </td>
              <td>
                <mark className="copy">Grayscale 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оттенки серого 3</mark>
              </td>
              <td>
                <mark className="copy">Grayscale 3</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оттенки серого 4</mark>
              </td>
              <td>
                <mark className="copy">Grayscale 4</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Размер — свечение + тень</mark>
              </td>
              <td>
                <mark className="copy">Dimension - glow+shadow</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Размер — фаска + тень</mark>
              </td>
              <td>
                <mark className="copy">Dimension - bevel+shadow</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — голубое небо</mark>
              </td>
              <td>
                <mark className="copy">Colorize - sky blue</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — градиент заката</mark>
              </td>
              <td>
                <mark className="copy">Colorize - sunset gradient</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — инфракрасный</mark>
              </td>
              <td>
                <mark className="copy">Colorize - infrared</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — королевский пурпур</mark>
              </td>
              <td>
                <mark className="copy">Colorize - royal purple</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — красный отпечаток руки</mark>
              </td>
              <td>
                <mark className="copy">Colorize - red hand tint</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — лунные тени</mark>
              </td>
              <td>
                <mark className="copy">Colorize - moonshadows</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — оранжевое небо</mark>
              </td>
              <td>
                <mark className="copy">Colorize - sky orange</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — погружение в золото</mark>
              </td>
              <td>
                <mark className="copy">Colorize - gold dip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — сепия</mark>
              </td>
              <td>
                <mark className="copy">Colorize - sepia</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тонирование — синяя акварель</mark>
              </td>
              <td>
                <mark className="copy">Colorize - blue wash</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цветение — кристаллизация 1</mark>
              </td>
              <td>
                <mark className="copy">Bloom - crystallize 1</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цветение — кристаллизация 2</mark>
              </td>
              <td>
                <mark className="copy">Bloom - crystallize 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цветение — светлые + темные</mark>
              </td>
              <td>
                <mark className="copy">Bloom - brights+darks</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цветение — яркие краски</mark>
              </td>
              <td>
                <mark className="copy">Bloom - brights</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Эффект мерцания VHS</mark>
              </td>
              <td>
                <mark className="copy">VHS Flicker Effect</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Эффект отрисовки вручную</mark>
              </td>
              <td>
                <mark className="copy">Hand Drawn Effect</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Image - Special Effects</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Ночное видение</mark>
              </td>
              <td>
                <mark className="copy">Night Vision</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ошибки регистрации движения</mark>
              </td>
              <td>
                <mark className="copy">Motion Registration Errors</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Плохой телевизор 1 — деформация</mark>
              </td>
              <td>
                <mark className="copy">Bad TV 1 - warp</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Плохой телевизор 2 — старый</mark>
              </td>
              <td>
                <mark className="copy">Bad TV 2 - old</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Плохой телевизор 3 — слабый</mark>
              </td>
              <td>
                <mark className="copy">Bad TV 3 - weak</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Треснутый кафель</mark>
              </td>
              <td>
                <mark className="copy">Cracked Tiles</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Утечки света — по маркерам слоя</mark>
              </td>
              <td>
                <mark className="copy">Light Leaks - layer markers</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Утечки света — произвольно</mark>
              </td>
              <td>
                <mark className="copy">Light Leaks - random</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Image - Utilities</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">
                  Keylight + Ключевая очистка + Расширенное подавление пропуска цвета
                </mark>
              </td>
              <td>
                <mark className="copy">
                  Keylight + Key Cleaner + Advanced Spill Suppressor
                </mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Альфа-каналы из освещенности (Unmult)</mark>
              </td>
              <td>
                <mark className="copy">Alpha From Lightness (Unmult)</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Альфа-увеличение и выделение</mark>
              </td>
              <td>
                <mark className="copy">Magnify & Preserve Alpha</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Динамический диапазон сжатия-расширения</mark>
              </td>
              <td>
                <mark className="copy">Compress-Expand Dynamic Range</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Инверсия альфа-канала</mark>
              </td>
              <td>
                <mark className="copy">Invert Alpha</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Обрезка краев</mark>
              </td>
              <td>
                <mark className="copy">Crop Edges</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Отражение + переворот</mark>
              </td>
              <td>
                <mark className="copy">Flip + Flop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Отражение</mark>
              </td>
              <td>
                <mark className="copy">Flip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Переворот</mark>
              </td>
              <td>
                <mark className="copy">Flop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пример выражения образа</mark>
              </td>
              <td>
                <mark className="copy">Sample Image Expression</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Прозрачное наложение — размытие зеленого</mark>
              </td>
              <td>
                <mark className="copy">Keying - green blur</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Прозрачное наложение — размытие синего</mark>
              </td>
              <td>
                <mark className="copy">Keying - blue blur</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Уровни — из видео на компьютер</mark>
              </td>
              <td>
                <mark className="copy">Levels - Video to Computer</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Уровни — с компьютера в видео</mark>
              </td>
              <td>
                <mark className="copy">Levels - computer to video</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Legacy</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">3D — поворот по окружности</mark>
              </td>
              <td>
                <mark className="copy">3D Rotate around Circle</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — увеличение масштаба строк</mark>
              </td>
              <td>
                <mark className="copy">3D Lines Zoom In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вертушка</mark>
              </td>
              <td>
                <mark className="copy">Pinwheel</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Возгорание</mark>
              </td>
              <td>
                <mark className="copy">Inflammation</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вспыхивающие слова</mark>
              </td>
              <td>
                <mark className="copy">Word Flash</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вставка видео — рваные края</mark>
              </td>
              <td>
                <mark className="copy">Inset Video - torn edges</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вставка видео — с рамкой</mark>
              </td>
              <td>
                <mark className="copy">Inset Video - framed</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Входящие</mark>
              </td>
              <td>
                <mark className="copy">Incoming</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вьющиеся ленты 2</mark>
              </td>
              <td>
                <mark className="copy">Twisty Ribbons 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вьющиеся ленты</mark>
              </td>
              <td>
                <mark className="copy">Twisty Ribbons</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Голубые вспышки</mark>
              </td>
              <td>
                <mark className="copy">Blue Flash</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Замещение</mark>
              </td>
              <td>
                <mark className="copy">Outgoing - Incoming</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Звездная дорожка</mark>
              </td>
              <td>
                <mark className="copy">Walk Of Stars</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Зеленые точки</mark>
              </td>
              <td>
                <mark className="copy">Green Dots</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Зумер — США</mark>
              </td>
              <td>
                <mark className="copy">DialTone-US</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Изменчивость</mark>
              </td>
              <td>
                <mark className="copy">Fluctuate</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Иступление</mark>
              </td>
              <td>
                <mark className="copy">Frenzy</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Капли</mark>
              </td>
              <td>
                <mark className="copy">Drop Bounce</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Левая треть — маска ковша NTSC</mark>
              </td>
              <td>
                <mark className="copy">Left Third - scoop mask NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Левая треть — маска ковша PAL</mark>
              </td>
              <td>
                <mark className="copy">Left Third - scoop mask PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мигающие полосы</mark>
              </td>
              <td>
                <mark className="copy">Bars Blinky</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Многократная экспозиция с тиснением</mark>
              </td>
              <td>
                <mark className="copy">Embossed Multiple Exposure</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Многоножка</mark>
              </td>
              <td>
                <mark className="copy">Centipede</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Молния — по вертикали</mark>
              </td>
              <td>
                <mark className="copy">Lightning - Vertical</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Молния — по горизонтали</mark>
              </td>
              <td>
                <mark className="copy">Lightning - Horizontal</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нижняя треть — маска ковша NTSC</mark>
              </td>
              <td>
                <mark className="copy">Lower Third - scoop mask NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нижняя треть — маска ковша PAL</mark>
              </td>
              <td>
                <mark className="copy">Lower Third - scoop mask PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Обрезка белого</mark>
              </td>
              <td>
                <mark className="copy">White Trim</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Овалы — концентрические NTSC</mark>
              </td>
              <td>
                <mark className="copy">Ovals - concentric NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Овалы — концентрические PAL</mark>
              </td>
              <td>
                <mark className="copy">Ovals - concentric PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Овалы — произвольно 1 NTSC</mark>
              </td>
              <td>
                <mark className="copy">Ovals - random 1 NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Овалы — произвольно 1 PAL</mark>
              </td>
              <td>
                <mark className="copy">Ovals - random 1 PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Овалы — произвольно 2 NTSC</mark>
              </td>
              <td>
                <mark className="copy">Ovals - random 2 NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Овалы — произвольно 2 PAL</mark>
              </td>
              <td>
                <mark className="copy">Ovals - random 2 PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — заштрихованные NTSC</mark>
              </td>
              <td>
                <mark className="copy">Boxes - stroked NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — заштрихованные PAL</mark>
              </td>
              <td>
                <mark className="copy">Boxes - stroked PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — концентрические NTSC</mark>
              </td>
              <td>
                <mark className="copy">Boxes - concentric NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — концентрические PAL</mark>
              </td>
              <td>
                <mark className="copy">Boxes - concentric PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — произвольные 1 NTSC</mark>
              </td>
              <td>
                <mark className="copy">Boxes - random 1 NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — произвольные 1 PAL</mark>
              </td>
              <td>
                <mark className="copy">Boxes - random 1 PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — произвольные 2 NTSC</mark>
              </td>
              <td>
                <mark className="copy">Boxes - random 2 NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — произвольные 2 PAL</mark>
              </td>
              <td>
                <mark className="copy">Boxes - random 2 PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — произвольные 3 NTSC</mark>
              </td>
              <td>
                <mark className="copy">Boxes - random 3 NTSC</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Окна — произвольные 3 PAL</mark>
              </td>
              <td>
                <mark className="copy">Boxes - random 3 PAL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Организм</mark>
              </td>
              <td>
                <mark className="copy">Organism</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Отдельная позиция XYZ</mark>
              </td>
              <td>
                <mark className="copy">Separate XYZ Position</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Отражение по нескольким линиям</mark>
              </td>
              <td>
                <mark className="copy">Multi-Line Flip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оттягивание нижней трети — затемнение</mark>
              </td>
              <td>
                <mark className="copy">Lower Third Holldout - darken</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оттягивание нижней трети — насыщение</mark>
              </td>
              <td>
                <mark className="copy">Lower Third Holddout - saturate</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Передний план — задний план</mark>
              </td>
              <td>
                <mark className="copy">Front - Back</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Переход к вставке</mark>
              </td>
              <td>
                <mark className="copy">Fly to Inset</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Петарды</mark>
              </td>
              <td>
                <mark className="copy">Spin Flash</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Появление</mark>
              </td>
              <td>
                <mark className="copy">Emerge</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пульсация</mark>
              </td>
              <td>
                <mark className="copy">Pulse Exposure</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">С обеих сторон</mark>
              </td>
              <td>
                <mark className="copy">Frontside - Backside</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сжатие — расширение</mark>
              </td>
              <td>
                <mark className="copy">Contract - Expand</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Силуэты</mark>
              </td>
              <td>
                <mark className="copy">Silhouettes</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скрепка</mark>
              </td>
              <td>
                <mark className="copy">Paper Clip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Спирограф</mark>
              </td>
              <td>
                <mark className="copy">Spirograph</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тени</mark>
              </td>
              <td>
                <mark className="copy">Shadows</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Уменьшение блочности DV</mark>
              </td>
              <td>
                <mark className="copy">Reduce DV blockiness</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цифровой</mark>
              </td>
              <td>
                <mark className="copy">Digital</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Элегия</mark>
              </td>
              <td>
                <mark className="copy">Lyrical</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Эфирный</mark>
              </td>
              <td>
                <mark className="copy">Ethereal</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Эхо-локация</mark>
              </td>
              <td>
                <mark className="copy">Sonar Ping</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Shapes - Backgrounds</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Граница композиции</mark>
              </td>
              <td>
                <mark className="copy">Composition Border</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Калейдоскоп</mark>
              </td>
              <td>
                <mark className="copy">Kaleidoscopic</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нейронная сеть — круговая</mark>
              </td>
              <td>
                <mark className="copy">Nerve Net - Circular</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нейронная сеть — пента</mark>
              </td>
              <td>
                <mark className="copy">Nerve Net - Penta</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скопление рамок</mark>
              </td>
              <td>
                <mark className="copy">Box Swarm</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Солнечные лучи</mark>
              </td>
              <td>
                <mark className="copy">Sunburst</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Shapes - Elements</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Аналоговые часы</mark>
              </td>
              <td>
                <mark className="copy">Analogue Clock</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Бегущая строка — рамки</mark>
              </td>
              <td>
                <mark className="copy">Chasing Line - Boxes</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Булавка для карты</mark>
              </td>
              <td>
                <mark className="copy">Popping Map Pin</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Всплеск</mark>
              </td>
              <td>
                <mark className="copy">Burst Pop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Гистограмма</mark>
              </td>
              <td>
                <mark className="copy">Bar Graph</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Двумерное текстовое окно (форма)</mark>
              </td>
              <td>
                <mark className="copy">2D Text Box (Shape)</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Значки карты колебаний</mark>
              </td>
              <td>
                <mark className="copy">Bouncing Map Icons</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Изменяемый курсор</mark>
              </td>
              <td>
                <mark className="copy">Switchable Cursor Element</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Инструменты отслеживания области</mark>
              </td>
              <td>
                <mark className="copy">Marquee Chasers</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Каркасный червь</mark>
              </td>
              <td>
                <mark className="copy">Wireframe Worm</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Кольцевая диаграмма</mark>
              </td>
              <td>
                <mark className="copy">Ring Chart</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Линейная диаграмма</mark>
              </td>
              <td>
                <mark className="copy">Line Graph</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Надпись на стрелке</mark>
              </td>
              <td>
                <mark className="copy">Write On Arrow</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Наклейка с вырубкой</mark>
              </td>
              <td>
                <mark className="copy">Crinkle Cut Sticker</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ограничительная рамка</mark>
              </td>
              <td>
                <mark className="copy">Bounding Box</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Повторяющиеся линии</mark>
              </td>
              <td>
                <mark className="copy">Repeating Lines</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Почтовая марка</mark>
              </td>
              <td>
                <mark className="copy">Postage Stamp</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Простой маркер для карты</mark>
              </td>
              <td>
                <mark className="copy">Simple Map Marker</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Радиальная диаграмма</mark>
              </td>
              <td>
                <mark className="copy">Radial Graph</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Рамка с зубчиками</mark>
              </td>
              <td>
                <mark className="copy">Scalloped Frame</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Решетка из крестов</mark>
              </td>
              <td>
                <mark className="copy">Grid of Crosses</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Спираль ДНК</mark>
              </td>
              <td>
                <mark className="copy">DNA Helix</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Shapes - Sprites - Animated</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Винтажная звездочка</mark>
              </td>
              <td>
                <mark className="copy">Vintage Star</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Круговой — ячеистое разделение</mark>
              </td>
              <td>
                <mark className="copy">Circular - cellular divvision</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лицо пришельца — с анимацией</mark>
              </td>
              <td>
                <mark className="copy">Alien Face - animated</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мандала — с анимацией</mark>
              </td>
              <td>
                <mark className="copy">Mandala - animated</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Область стадии</mark>
              </td>
              <td>
                <mark className="copy">Phase Scope</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сверкающая звезда</mark>
              </td>
              <td>
                <mark className="copy">TwinkleStar</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Спиро-мандала</mark>
              </td>
              <td>
                <mark className="copy">SpiroMandala</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Танцевальный узел</mark>
              </td>
              <td>
                <mark className="copy">Dancing Knot</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Shapes - Sprites - Still</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Благодатный огонь</mark>
              </td>
              <td>
                <mark className="copy">Holy Light</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Власть цветам</mark>
              </td>
              <td>
                <mark className="copy">Flower Power</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Индейское солнце</mark>
              </td>
              <td>
                <mark className="copy">Indian Sun</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Иноземные письмена</mark>
              </td>
              <td>
                <mark className="copy">Alien Calligraphy</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Круговой — полукруг</mark>
              </td>
              <td>
                <mark className="copy">Circular - half round</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Круговой — тройной пунктир</mark>
              </td>
              <td>
                <mark className="copy">Circular - tri dash</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лицо пришельца</mark>
              </td>
              <td>
                <mark className="copy">Alien Face</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лопасти вентилятора</mark>
              </td>
              <td>
                <mark className="copy">Fan Blades</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лучистая звезда-4</mark>
              </td>
              <td>
                <mark className="copy">RayStar-4</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лучистая звезда-8</mark>
              </td>
              <td>
                <mark className="copy">RayStar-8</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мандала</mark>
              </td>
              <td>
                <mark className="copy">Mandala</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мишень</mark>
              </td>
              <td>
                <mark className="copy">Bullseye</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Перекрестие — квадратное</mark>
              </td>
              <td>
                <mark className="copy">Crosshair - square</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Перекрестие — квадратные скобки</mark>
              </td>
              <td>
                <mark className="copy">Crosshair - brackets</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Перекрестие — круглое</mark>
              </td>
              <td>
                <mark className="copy">Crosshair - round</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Рамка — пунктирные линии</mark>
              </td>
              <td>
                <mark className="copy">Box - dashed lines</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скругленная скобка — двойная</mark>
              </td>
              <td>
                <mark className="copy">Rounded Bracket - double</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скругленная скобка — с фаской</mark>
              </td>
              <td>
                <mark className="copy">Rounded Bracket - bevelled</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тризуб</mark>
              </td>
              <td>
                <mark className="copy">Tri Cog</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Шестеренка 1</mark>
              </td>
              <td>
                <mark className="copy">Gear 1</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Шестеренка 2</mark>
              </td>
              <td>
                <mark className="copy">Gear 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Эригерон</mark>
              </td>
              <td>
                <mark className="copy">Seaside Daisy</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Sound Effects</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Бластер</mark>
              </td>
              <td>
                <mark className="copy">Blaster</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Занят</mark>
              </td>
              <td>
                <mark className="copy">Busy</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Звонок телефона-США</mark>
              </td>
              <td>
                <mark className="copy">Phone-US</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Позвонить в Adobe</mark>
              </td>
              <td>
                <mark className="copy">CallAdobe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Телефонная компания</mark>
              </td>
              <td>
                <mark className="copy">PhoneCompany</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Тональный набор</mark>
              </td>
              <td>
                <mark className="copy">DTMF</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Synthetics</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Голографическая пленка</mark>
              </td>
              <td>
                <mark className="copy">Holographic Foil</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Дым — сносимый ветром</mark>
              </td>
              <td>
                <mark className="copy">Smoke - Drifting</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Звездная спираль</mark>
              </td>
              <td>
                <mark className="copy">Starburst Spin</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Золотая атмосфера</mark>
              </td>
              <td>
                <mark className="copy">Gold Ambiance</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мозаика</mark>
              </td>
              <td>
                <mark className="copy">Mosaic</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мозаичная пленка</mark>
              </td>
              <td>
                <mark className="copy">Chip Foil</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оборотная сторона компакт-диска</mark>
              </td>
              <td>
                <mark className="copy">CD Back</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оранжевые прожилки</mark>
              </td>
              <td>
                <mark className="copy">Orange Streaks</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Синие полосы</mark>
              </td>
              <td>
                <mark className="copy">Blue Bars</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Топографические линии</mark>
              </td>
              <td>
                <mark className="copy">Topographic Lines</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ячейки</mark>
              </td>
              <td>
                <mark className="copy">Cells</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - 3D Text</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">
                  3D база, вращение вокруг оси X, каскад (возн.)
                </mark>
              </td>
              <td>
                <mark className="copy">3D Basic Rotate X Cascade In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">
                  3D база, вращение вокруг оси Y, каскад (возн.)
                </mark>
              </td>
              <td>
                <mark className="copy">3D Basic Rotate Y Cascade In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D база, позиция по оси Z, каскад (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Basic Position Z Cascade In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D база, позиция по оси Z, печать (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Basic Position Z Type In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D волна на дорожке (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Swing In On Path</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D дождь по словам (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Rain In By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D опускание по спирали и развертывание</mark>
              </td>
              <td>
                <mark className="copy">3D Spiral Down & Unfold</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D падение, масштаб и наклон (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Fall Back Scale & Skew In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D падение, перемешивание и размытие (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Fall Back Scramble & Blur In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D полет и развертывание (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Fly In & Unfold</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D полет из-за камеры (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Fly In From Behind Camera</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">
                  3D полет, случайный порядок, вращение вокруг оси Y (возн.)
                </mark>
              </td>
              <td>
                <mark className="copy">3D Fly In Random & Rotate Y</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D разворот и цветные символы</mark>
              </td>
              <td>
                <mark className="copy">3D Twist & color characters</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D случайные символы, кувыркание (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Random Spike Tumble In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D случайные слова, кувыркание (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Random Tumble In By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D установка на позиции (возн.)</mark>
              </td>
              <td>
                <mark className="copy">3D Resolve Position In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — колебание внутрь — в случайном порядке</mark>
              </td>
              <td>
                <mark className="copy">3D Flutter In Random Order</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — колебание внутрь — слева</mark>
              </td>
              <td>
                <mark className="copy">3D Flutter In From Left</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — колебание наружу — справа</mark>
              </td>
              <td>
                <mark className="copy">3D Flutter Out From Right</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — колебание — по центру</mark>
              </td>
              <td>
                <mark className="copy">3D Bouncing In Centered</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — отразить вверх — отражение</mark>
              </td>
              <td>
                <mark className="copy">3D Flip Up Reflection</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — отразить внутрь — поворот по оси X</mark>
              </td>
              <td>
                <mark className="copy">3D Flip In Rotate X</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — отразить наружу — поворот по оси X</mark>
              </td>
              <td>
                <mark className="copy">3D Flip Out Rotate X</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — поворот внутрь по символу X</mark>
              </td>
              <td>
                <mark className="copy">3D Rotate in by Character X</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — поворот внутрь по символу</mark>
              </td>
              <td>
                <mark className="copy">3D Rotate in by Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — поворот наружу по символу X</mark>
              </td>
              <td>
                <mark className="copy">3D Rotate out by Character X</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — поворот наружу по слову</mark>
              </td>
              <td>
                <mark className="copy">3D Rotate out by Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — скремблирование в положении по оси Z</mark>
              </td>
              <td>
                <mark className="copy">3D Scramble in Position Z</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — спиральный поворот внутри по строке</mark>
              </td>
              <td>
                <mark className="copy">3D Spiral Rotate In by Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">3D — спиральный поворот наружу по строке</mark>
              </td>
              <td>
                <mark className="copy">3D Spiral Rotate Out by Line</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Animate In</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Вброс с прокруткой</mark>
              </td>
              <td>
                <mark className="copy">Fly In With A Twist</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вброс снизу</mark>
              </td>
              <td>
                <mark className="copy">Fly In From Bottom</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Всплывающие словечки</mark>
              </td>
              <td>
                <mark className="copy">Pop Buzz Words</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Выезд в случайном порядке</mark>
              </td>
              <td>
                <mark className="copy">Random Shuffle In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Высыпание символов</mark>
              </td>
              <td>
                <mark className="copy">Raining Characters In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вытеснение к центру</mark>
              </td>
              <td>
                <mark className="copy">Wipe In To Center</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Генерирующая таблица</mark>
              </td>
              <td>
                <mark className="copy">Espresso Eye Chart</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Декодирование в кадр по случайным символам</mark>
              </td>
              <td>
                <mark className="copy">Decode In By Random Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Закручивание пословно</mark>
              </td>
              <td>
                <mark className="copy">Spin In By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Медленное затухание - вкл</mark>
              </td>
              <td>
                <mark className="copy">Slow Fade On</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мерцание непрозрачности в кадр</mark>
              </td>
              <td>
                <mark className="copy">Opacity Flicker In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мигающий курсор телетайпа</mark>
              </td>
              <td>
                <mark className="copy">Blinking Cursor Typewriter Console</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Печатная машинка</mark>
              </td>
              <td>
                <mark className="copy">Typewriter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Плавный выезд</mark>
              </td>
              <td>
                <mark className="copy">Smooth Move In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Посимвольное вбрасывание</mark>
              </td>
              <td>
                <mark className="copy">Drop In By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Посимвольное всплывание</mark>
              </td>
              <td>
                <mark className="copy">Fade Up Characters</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Посимвольный ввод с прокруткой</mark>
              </td>
              <td>
                <mark className="copy">Spin In By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Посимвольный выезд</mark>
              </td>
              <td>
                <mark className="copy">Characters Shuffle In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Последовательно посимвольно</mark>
              </td>
              <td>
                <mark className="copy">Straight In By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Последовательно пословно</mark>
              </td>
              <td>
                <mark className="copy">Straight In By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Последовательный многострочный ввод 2</mark>
              </td>
              <td>
                <mark className="copy">Straight In Multi-Line 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пословное проявление</mark>
              </td>
              <td>
                <mark className="copy">Fade Up Words</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пословный выезд в случайном порядке</mark>
              </td>
              <td>
                <mark className="copy">Random Word Shuffle In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Построчное растяжение</mark>
              </td>
              <td>
                <mark className="copy">Stretch In Each Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Построчный ввод</mark>
              </td>
              <td>
                <mark className="copy">Straight In Multi-Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Прокрутка каждого слова</mark>
              </td>
              <td>
                <mark className="copy">Twirl On Each Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Прокрутка каждой строки</mark>
              </td>
              <td>
                <mark className="copy">Twirl On Each Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Проявление с отражением</mark>
              </td>
              <td>
                <mark className="copy">Fade Up And Flip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Проявление с эффектом декодирования</mark>
              </td>
              <td>
                <mark className="copy">Decoder Fade In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Проявляющиеся строки</mark>
              </td>
              <td>
                <mark className="copy">Fade Up Lines</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растяжение каждого слова</mark>
              </td>
              <td>
                <mark className="copy">Stretch In Each Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение в кадр по границе композиции</mark>
              </td>
              <td>
                <mark className="copy">Slide In From Comp Edge</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение в кадр по линии</mark>
              </td>
              <td>
                <mark className="copy">Slide In By Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение вверх по символу</mark>
              </td>
              <td>
                <mark className="copy">Slide Up By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение вверх по слову</mark>
              </td>
              <td>
                <mark className="copy">Slide Up By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение вниз по символу</mark>
              </td>
              <td>
                <mark className="copy">Slide Down By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение и всплывание в кадр</mark>
              </td>
              <td>
                <mark className="copy">Slide and Pop In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Случайное появление (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Random Fade In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Спираль в центр (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Center Spiral In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Чередующиеся символы в кадр</mark>
              </td>
              <td>
                <mark className="copy">Alternating Characters In</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Animate Out</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Декодирование из кадра по случайным символам</mark>
              </td>
              <td>
                <mark className="copy">Decode Out By Random Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Затухание с эффектом кодирования</mark>
              </td>
              <td>
                <mark className="copy">Encoder Fade Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Медленное затухание</mark>
              </td>
              <td>
                <mark className="copy">Fade Out Slow</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мерцание непрозрачности из кадра</mark>
              </td>
              <td>
                <mark className="copy">Opacity Flicker Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Посимвольное затухание</mark>
              </td>
              <td>
                <mark className="copy">Fade Out By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Посимвольное осыпание</mark>
              </td>
              <td>
                <mark className="copy">Raining Characters Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Посимвольное стирание со скольжением вправо</mark>
              </td>
              <td>
                <mark className="copy">Slide Off Right By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пословная скрутка</mark>
              </td>
              <td>
                <mark className="copy">Twirl Off Each Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пословное рассыпание в случайном порядке</mark>
              </td>
              <td>
                <mark className="copy">Random Word Fly Off</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пословное убегание вправо</mark>
              </td>
              <td>
                <mark className="copy">Slide Off Right By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Построчное растяжение</mark>
              </td>
              <td>
                <mark className="copy">Stretch Out Each Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Рассыпание в случайном порядке</mark>
              </td>
              <td>
                <mark className="copy">Random Fly Off</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растяжение каждого слова</mark>
              </td>
              <td>
                <mark className="copy">Stretch Out Each Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение и всплывание из кадра</mark>
              </td>
              <td>
                <mark className="copy">Slide and Pop Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение из кадра по границе композиции</mark>
              </td>
              <td>
                <mark className="copy">Slide Out To Comp Edge</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение из кадра по линии</mark>
              </td>
              <td>
                <mark className="copy">Slide Out By Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скрутка по линиям</mark>
              </td>
              <td>
                <mark className="copy">Twirl Off Each Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Чередующиеся символы из кадра</mark>
              </td>
              <td>
                <mark className="copy">Alternating Characters Out</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Blurs</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Испарение (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Evaporate Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Каретка (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Transporter In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Размытие и наплывание в кадр</mark>
              </td>
              <td>
                <mark className="copy">Blur and Fade In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Размытие и наплывание из кадра</mark>
              </td>
              <td>
                <mark className="copy">Blur and Fade Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Размытие по словам (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Blur In By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Размытие с помехами</mark>
              </td>
              <td>
                <mark className="copy">Blur Glitch</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Резкое размытие в кадр по символу</mark>
              </td>
              <td>
                <mark className="copy">Harsh Blur In By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Резкое размытие из кадра по символу</mark>
              </td>
              <td>
                <mark className="copy">Harsh Blur Out By Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скоростной поезд (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Bullet Train In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Туман (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Foggy In</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Curver and Spins</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Быстрое вращение (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Spin Fast In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вброс с прокруткой по часовой стрелке</mark>
              </td>
              <td>
                <mark className="copy"> Clockwise Entry</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ввод спиралью</mark>
              </td>
              <td>
                <mark className="copy">Spiral In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Кто успел</mark>
              </td>
              <td>
                <mark className="copy">Musical Chairs</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лассо (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Lasso In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лассо по словам (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Lasso Tumble In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ньютон</mark>
              </td>
              <td>
                <mark className="copy">Newton</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Обод колеса (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Tire Rim In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Обратное вращение</mark>
              </td>
              <td>
                <mark className="copy">Retrograde</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пикирование (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Swoop In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поворот против часовой стрелки</mark>
              </td>
              <td>
                <mark className="copy">Counter Rotate</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поворот</mark>
              </td>
              <td>
                <mark className="copy">Rotate</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Появление с прокруткой</mark>
              </td>
              <td>
                <mark className="copy">Whirl In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пылевой дьявол (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Dust Devil Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Радиальное сверкание (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Radial Flare In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Раскрывающийся цветок (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Bloom Flower In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сальто (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Somersault In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Спираль (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Spiral Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Чаинки (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Tea Leaves In</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Expressions</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Выделение списка слов</mark>
              </td>
              <td>
                <mark className="copy">Word List Highlight</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Двумерное текстовое окно (маска и эффекты)</mark>
              </td>
              <td>
                <mark className="copy">2D Text Box (Mask &amp; Effects)</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Номер кадра</mark>
              </td>
              <td>
                <mark className="copy">Frame Number</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Отображение компьютерного времени</mark>
              </td>
              <td>
                <mark className="copy">Display Comp Time</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скачущий текст</mark>
              </td>
              <td>
                <mark className="copy">Text Bounce</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл списка слов</mark>
              </td>
              <td>
                <mark className="copy">Cycle Word List</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Червячок</mark>
              </td>
              <td>
                <mark className="copy">Inch Worm</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Fill and Stroke</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Вымывание цвета</mark>
              </td>
              <td>
                <mark className="copy">Color Wash Behavior</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вытеснение заливки</mark>
              </td>
              <td>
                <mark className="copy">Fill Color Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мигающая обводка - построчно по ширине</mark>
              </td>
              <td>
                <mark className="copy">Wiggly Stroke Width By Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ниспадающая дорожка</mark>
              </td>
              <td>
                <mark className="copy">Stroke Ease Down</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оранжевая пульсация</mark>
              </td>
              <td>
                <mark className="copy">Pulse Orange</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Последовательное выделение</mark>
              </td>
              <td>
                <mark className="copy">Chasing Stroke</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пульсирующие дорожки</mark>
              </td>
              <td>
                <mark className="copy">Pulsing Strokes</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скользящее мерцание цвета</mark>
              </td>
              <td>
                <mark className="copy">Sliding Color Flicker</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Смещение в холодный оттенок</mark>
              </td>
              <td>
                <mark className="copy">Chill Hue Shift</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цветное мигание</mark>
              </td>
              <td>
                <mark className="copy">Flicker Color</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Циклическая заливка оттенка</mark>
              </td>
              <td>
                <mark className="copy">Cycle Fill Hue</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Graphical</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Голубой фон</mark>
              </td>
              <td>
                <mark className="copy">Blue Note</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Желтые кубики</mark>
              </td>
              <td>
                <mark className="copy">Yellow Boxes</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Красные круги</mark>
              </td>
              <td>
                <mark className="copy">Red Circles</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нарезка</mark>
              </td>
              <td>
                <mark className="copy">Cut Shapes</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Опасность</mark>
              </td>
              <td>
                <mark className="copy">Hazard</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поцарапанная пленка</mark>
              </td>
              <td>
                <mark className="copy">Scratchy Film</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Размен</mark>
              </td>
              <td>
                <mark className="copy">Exchange</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Снежинки</mark>
              </td>
              <td>
                <mark className="copy">Snowflakes</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Lights and Optical</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Бродвей</mark>
              </td>
              <td>
                <mark className="copy">Broadway</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вспышки</mark>
              </td>
              <td>
                <mark className="copy">Flash</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лампа дневного света</mark>
              </td>
              <td>
                <mark className="copy">Fluorescent Light</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Легкое мигание</mark>
              </td>
              <td>
                <mark className="copy">Office Light</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Наложение</mark>
              </td>
              <td>
                <mark className="copy">Overlay</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Проявление с мерцанием</mark>
              </td>
              <td>
                <mark className="copy">Flicker Exposure</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пульсирующие пузырьки</mark>
              </td>
              <td>
                <mark className="copy">Bubble Pulse</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Mechanical</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Автоматика</mark>
              </td>
              <td>
                <mark className="copy">Automation</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Автомобильная поездка 2</mark>
              </td>
              <td>
                <mark className="copy">Roadtrip 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Автомобильная поездка</mark>
              </td>
              <td>
                <mark className="copy">Roadtrip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Алгоритм (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Algorithm In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вертолет (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Helicopter In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вставка текста (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Insert Text In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Гиперпространственный двигатель 9.8</mark>
              </td>
              <td>
                <mark className="copy">Warp 9.8</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Кинематика (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Kinematic In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Кольцевой алгоритм</mark>
              </td>
              <td>
                <mark className="copy">Algorithm Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лестница</mark>
              </td>
              <td>
                <mark className="copy">Stairstep</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Механика (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Mechanical In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поворот экрана</mark>
              </td>
              <td>
                <mark className="copy">Screen Roll</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Подлодка</mark>
              </td>
              <td>
                <mark className="copy">Submarine</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Подчеркивание (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Underscore In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поршни</mark>
              </td>
              <td>
                <mark className="copy">Pistons</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Прыжки с увеличением</mark>
              </td>
              <td>
                <mark className="copy">Scale Bounce</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сбой сигнала</mark>
              </td>
              <td>
                <mark className="copy">Bad Reception</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Стеллаж и перо</mark>
              </td>
              <td>
                <mark className="copy">Rack & Pinion</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Электромагнит (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Electro Magnet In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Эффект Доплера</mark>
              </td>
              <td>
                <mark className="copy">Doppler</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Miscellaneous</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Вброс углом</mark>
              </td>
              <td>
                <mark className="copy">Angle Fly-In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Взрыв (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Explode Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Волнистые линии (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Wiggly Lines In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вопрос</mark>
              </td>
              <td>
                <mark className="copy">Question</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Впрыгивание</mark>
              </td>
              <td>
                <mark className="copy">Bounce In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Выдувание (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Blow Away Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Выжимка</mark>
              </td>
              <td>
                <mark className="copy">Squeeze</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Декодер текста со сбоями</mark>
              </td>
              <td>
                <mark className="copy">Glitchy Text Decoder</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Дымок</mark>
              </td>
              <td>
                <mark className="copy">Smokey</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Йо-йо</mark>
              </td>
              <td>
                <mark className="copy">Yo-Yo</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Качение и прыжок (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Roll Bounce In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Маятник (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Pendulum In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Прыжки на веревке</mark>
              </td>
              <td>
                <mark className="copy">Bungee</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Равномерные скачки</mark>
              </td>
              <td>
                <mark className="copy">Sequential Jump</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сальто назад</mark>
              </td>
              <td>
                <mark className="copy">Back Flip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение и прыжок (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Slide Bounce In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Смывающаяся точка (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Vanishing Point In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Соскальзывание (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Slip In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Суматоха</mark>
              </td>
              <td>
                <mark className="copy">Rattle</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Супергерой (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Superhero In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Хаос (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Chaotic In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Швырок (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Clay Pigeons Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Шестизарядный револьвер (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Six-Shooter in</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Multi-line</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Вброс по символам</mark>
              </td>
              <td>
                <mark className="copy">Fly In By Characters</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вброс по словам</mark>
              </td>
              <td>
                <mark className="copy">Fly In By Words</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Договор (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Deal In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Живчик (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Zippy In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Идеи</mark>
              </td>
              <td>
                <mark className="copy">Ideas</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пакет данных</mark>
              </td>
              <td>
                <mark className="copy">Data Packet</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пневматика (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Pneumatic In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поток данных (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Data Stream In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Реактивная струя (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Jetstream In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сбор стопки (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Alternating Stack In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Суп из букв</mark>
              </td>
              <td>
                <mark className="copy">Alphabet Soup</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Текстовый редактор (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Word Processor In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Течения (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Currents In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Шифрование (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Encryption In</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Number Counters</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Обратный отсчет с фиксированной шириной</mark>
              </td>
              <td>
                <mark className="copy">Counter Countdown Monospaced</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Отсчет времени с фиксированной шириной</mark>
              </td>
              <td>
                <mark className="copy">Timer Countdown Monospaced</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Счетчик валюты с фиксированной шириной</mark>
              </td>
              <td>
                <mark className="copy">Currency Counter Monospaced</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Счетчик процентов с фиксированной шириной</mark>
              </td>
              <td>
                <mark className="copy">Percentage Counter Monospaced</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Organic</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Амплитудные прыжки</mark>
              </td>
              <td>
                <mark className="copy">Dip-Bounce</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Бумеранг (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Boomerang In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вдоль и поперек (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Slice and Dice In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Выезд</mark>
              </td>
              <td>
                <mark className="copy">Shuffle</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Двойная спираль</mark>
              </td>
              <td>
                <mark className="copy">Double-Helix</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Диагональный прыжок (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Diagonal Bounce In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Дрожание</mark>
              </td>
              <td>
                <mark className="copy">Quiver</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Жвачка (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Chewing Gum In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Кипяток</mark>
              </td>
              <td>
                <mark className="copy">Boiling</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Колебание (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Wobble In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Колибри (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Hummingbird In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Командная борьба</mark>
              </td>
              <td>
                <mark className="copy">Tag Team</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Лабрадор (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Labrador In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Летающие формы</mark>
              </td>
              <td>
                <mark className="copy">Flying Formation</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Медленное кипение</mark>
              </td>
              <td>
                <mark className="copy">Simmer</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Морская болезнь</mark>
              </td>
              <td>
                <mark className="copy">Sea-Sick</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Насекомые (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Insects In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Океанский прилив</mark>
              </td>
              <td>
                <mark className="copy">Ocean Tide</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Осень</mark>
              </td>
              <td>
                <mark className="copy">Autumn</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Подъем (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Climb In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поток ветра</mark>
              </td>
              <td>
                <mark className="copy">Wind Current</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Приманка</mark>
              </td>
              <td>
                <mark className="copy">Fish Bait</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Прорастание (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Sprouts In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пульсация (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Ripple In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пшеничное поле</mark>
              </td>
              <td>
                <mark className="copy">Wheatfield</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Разреженная строка</mark>
              </td>
              <td>
                <mark className="copy">Loose Line</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Резинка</mark>
              </td>
              <td>
                <mark className="copy">Rubber</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Резиновый пол</mark>
              </td>
              <td>
                <mark className="copy">Rubber Floor</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Салфетка от насекомых</mark>
              </td>
              <td>
                <mark className="copy">Insect Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Слепень (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Horsefly In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Чехарда</mark>
              </td>
              <td>
                <mark className="copy">Leapfrog</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Paths</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Антилопа</mark>
              </td>
              <td>
                <mark className="copy">Antelope</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Барьеры</mark>
              </td>
              <td>
                <mark className="copy">Hurdles</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Безделушка</mark>
              </td>
              <td>
                <mark className="copy">Tchotchke</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">В объезд</mark>
              </td>
              <td>
                <mark className="copy">Bump And Slide On</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вниз и наружу</mark>
              </td>
              <td>
                <mark className="copy">Down And Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Воздушный шар</mark>
              </td>
              <td>
                <mark className="copy">Balloon</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Всплывание пузыря (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Bubble Pop Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Двойная спираль</mark>
              </td>
              <td>
                <mark className="copy">Double Spiral</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Длинная спираль (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Long Spiral Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Зигзаг</mark>
              </td>
              <td>
                <mark className="copy">Zig-Zag</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Змейка</mark>
              </td>
              <td>
                <mark className="copy">Serpent</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Канатный мост</mark>
              </td>
              <td>
                <mark className="copy">Rope Bridge</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Катушки 2</mark>
              </td>
              <td>
                <mark className="copy">Reel-To-Reel 2</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Катушки</mark>
              </td>
              <td>
                <mark className="copy">Reel To Reel</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Колебание</mark>
              </td>
              <td>
                <mark className="copy">Bouncing</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Конвейер</mark>
              </td>
              <td>
                <mark className="copy">Conveyor Belt</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Крысиное гнездо</mark>
              </td>
              <td>
                <mark className="copy">Rat Nest</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Муравьи</mark>
              </td>
              <td>
                <mark className="copy">Ants</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Оборот на 360</mark>
              </td>
              <td>
                <mark className="copy">360 Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Печатная плата (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Circuit Board Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Равновесие</mark>
              </td>
              <td>
                <mark className="copy">Balance</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Симметрия</mark>
              </td>
              <td>
                <mark className="copy">Symmetry</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Скольжение под гору - выкл</mark>
              </td>
              <td>
                <mark className="copy">Downhill Slide Off</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Трубы</mark>
              </td>
              <td>
                <mark className="copy">Pipes</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Удар каратиста</mark>
              </td>
              <td>
                <mark className="copy">Karate Chop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Цикл возникновения-исчезновения</mark>
              </td>
              <td>
                <mark className="copy">Loop In and Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Эластичный</mark>
              </td>
              <td>
                <mark className="copy">Springy</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Rotation</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Водоворот</mark>
              </td>
              <td>
                <mark className="copy">Swirly Rotation</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вращение каждого символа</mark>
              </td>
              <td>
                <mark className="copy">Rotate Per Character</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Закручивание</mark>
              </td>
              <td>
                <mark className="copy">Spin In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Огромная петля</mark>
              </td>
              <td>
                <mark className="copy">Loopy Loop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Отразить вверх</mark>
              </td>
              <td>
                <mark className="copy">Flip Up</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Поворот по словам</mark>
              </td>
              <td>
                <mark className="copy">Rotate Per Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Полный оборот</mark>
              </td>
              <td>
                <mark className="copy">Full Rotation</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Случайные вращения</mark>
              </td>
              <td>
                <mark className="copy">Random Rotation</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Смерч</mark>
              </td>
              <td>
                <mark className="copy">Whirlwind</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Стекание</mark>
              </td>
              <td>
                <mark className="copy">Drip Down</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Scale</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Давайте танцевать</mark>
              </td>
              <td>
                <mark className="copy">Lets Dance</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Scale In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Scale Out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб по словам (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Scale In By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб по словам (исч.)</mark>
              </td>
              <td>
                <mark className="copy">Scale Out By Word</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштабирование в кадр от точки</mark>
              </td>
              <td>
                <mark className="copy">Scale In From Point</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштабирование из кадра от точки</mark>
              </td>
              <td>
                <mark className="copy">Scale Out From Point</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мигающее вытеснение с масштабированием</mark>
              </td>
              <td>
                <mark className="copy">Wiggly Scale Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Произвольное масштабирование (возн.)</mark>
              </td>
              <td>
                <mark className="copy">Random Scale In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Увеличение вперед</mark>
              </td>
              <td>
                <mark className="copy">Zoom Forward</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Удаление с уменьшением</mark>
              </td>
              <td>
                <mark className="copy">Zoom Away</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Text - Tracking</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Растяжение</mark>
              </td>
              <td>
                <mark className="copy">Increase Tracking</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растянутый</mark>
              </td>
              <td>
                <mark className="copy">Stretchy</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Расширение</mark>
              </td>
              <td>
                <mark className="copy">Extend</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сжатие</mark>
              </td>
              <td>
                <mark className="copy">Contract</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Смещение в кадр по трекингу</mark>
              </td>
              <td>
                <mark className="copy">Shift In By Tracking</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Смещение из кадра по трекингу</mark>
              </td>
              <td>
                <mark className="copy">Shift Out By Tracking</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Судорога</mark>
              </td>
              <td>
                <mark className="copy">Spasm</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сужение</mark>
              </td>
              <td>
                <mark className="copy">Decrease Tracking</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Увеличение</mark>
              </td>
              <td>
                <mark className="copy">Magnify</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Transitions - Dissolves</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Затухание блока - построчное</mark>
              </td>
              <td>
                <mark className="copy">Block Dissolve - scanlines</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Затухание блока - цифровое</mark>
              </td>
              <td>
                <mark className="copy">Block Dissolve - digital</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Затухание - мигание в белый</mark>
              </td>
              <td>
                <mark className="copy">Fade - flash to white</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Затухание - погружение в черный</mark>
              </td>
              <td>
                <mark className="copy">Fade - dip to black</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мерцающая непрозрачность - на слой в кадр</mark>
              </td>
              <td>
                <mark className="copy">Flickering Opacity - at layer in</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Мерцающая непрозрачность - на слой из кадра</mark>
              </td>
              <td>
                <mark className="copy">Flickering Opacity - at layer out</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Нарастание - переэкспонированное</mark>
              </td>
              <td>
                <mark className="copy">Fade - overexposed</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пиксельное растворение</mark>
              </td>
              <td>
                <mark className="copy">Pixelated Dissolve</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растворение блока - произвольно</mark>
              </td>
              <td>
                <mark className="copy">Block Dissolve - random</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растворение - большие двоичные объекты</mark>
              </td>
              <td>
                <mark className="copy">Dissolve - blobs</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растворение - дизеринг</mark>
              </td>
              <td>
                <mark className="copy">Dissolve - dither</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растворение - нерастаявший</mark>
              </td>
              <td>
                <mark className="copy">Dissolve - unmelt</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растворение - пар</mark>
              </td>
              <td>
                <mark className="copy">Dissolve - vapor</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растворение - песок</mark>
              </td>
              <td>
                <mark className="copy">Dissolve - sand</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растворение - рябь</mark>
              </td>
              <td>
                <mark className="copy">Dissolve - ripple</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Чернильное растворение</mark>
              </td>
              <td>
                <mark className="copy">Inky Dissolve</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Transitions - Movement</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Всплывание и отражение в кадр</mark>
              </td>
              <td>
                <mark className="copy">Pop and Wobble In</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вытеснение карт - 2D дробные</mark>
              </td>
              <td>
                <mark className="copy">Card Wipe - 2D fractured</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вытеснение карт - 3D качание</mark>
              </td>
              <td>
                <mark className="copy">Card Wipe - 3D swing</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Вытеснение карт - 3D пиксельная буря</mark>
              </td>
              <td>
                <mark className="copy">Card Wipe - 3D pixelstorm</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб полный</mark>
              </td>
              <td>
                <mark className="copy">Scale - Cardinal</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб - 2D-вращение</mark>
              </td>
              <td>
                <mark className="copy">Zoom - 2D spin</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб - 3D переворот</mark>
              </td>
              <td>
                <mark className="copy">Zoom - 3D tumble</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб - пузырь</mark>
              </td>
              <td>
                <mark className="copy">Zoom - bubble</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб - раскачивание</mark>
              </td>
              <td>
                <mark className="copy">Zoom - wobbling</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Масштаб - спираль</mark>
              </td>
              <td>
                <mark className="copy">Zoom - spiral</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растягивание из линии - по горизонтали</mark>
              </td>
              <td>
                <mark className="copy">Stretch Over - horizontal</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растягивание по вертикали</mark>
              </td>
              <td>
                <mark className="copy">Stretch Over - vertical</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растяжение и размытие</mark>
              </td>
              <td>
                <mark className="copy">Stretch & Blur</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растяжение и скольжение</mark>
              </td>
              <td>
                <mark className="copy">Stretch & Slide</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Растяжение с края</mark>
              </td>
              <td>
                <mark className="copy">Stretch - Edge</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Слайд - обвал</mark>
              </td>
              <td>
                <mark className="copy">Slide - swoop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Слайд - падение</mark>
              </td>
              <td>
                <mark className="copy">Slide - drop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Слайд - прямо</mark>
              </td>
              <td>
                <mark className="copy">Slide - straight</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Transitions - Wipes</Divider>
        <table>
          <thead>
            <tr>
              <th>Пресет на русском</th>
              <th>Пресет на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="copy">Двери сарая</mark>
              </td>
              <td>
                <mark className="copy">Barn Doors</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Жалюзи</mark>
              </td>
              <td>
                <mark className="copy">Venetian Blinds</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Закрашивание сверху</mark>
              </td>
              <td>
                <mark className="copy">Paint On</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Заполнение - шашки HD</mark>
              </td>
              <td>
                <mark className="copy">Checker Wipe HD</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ленты - встречное заполнение HD</mark>
              </td>
              <td>
                <mark className="copy">Band Wipe - crossing HD</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ленты - заклеивание HD</mark>
              </td>
              <td>
                <mark className="copy">Band Wipe - Build HD</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Ленты - зигзаг HD</mark>
              </td>
              <td>
                <mark className="copy">Band Wipe - Zig Zag HD</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Линейное вытеснение</mark>
              </td>
              <td>
                <mark className="copy">Linear Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пиксельное вытеснение из центра</mark>
              </td>
              <td>
                <mark className="copy">Pixelated Iris Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Пиксельное линейное вытеснение</mark>
              </td>
              <td>
                <mark className="copy">Pixelated Linear Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Раскладушка</mark>
              </td>
              <td>
                <mark className="copy">Clam Shell</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Сетка_Вытеснение</mark>
              </td>
              <td>
                <mark className="copy">Grid Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Стирание - радиальное полное</mark>
              </td>
              <td>
                <mark className="copy">Radial Wipe - Cardinal</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Угол_Отображение</mark>
              </td>
              <td>
                <mark className="copy">Corner Reveal</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Часы_Вытеснение</mark>
              </td>
              <td>
                <mark className="copy">Clock Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Чернильное вытеснение из центра</mark>
              </td>
              <td>
                <mark className="copy">Inky Iris Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="copy">Чернильное линейное вытеснение</mark>
              </td>
              <td>
                <mark className="copy">Inky Linear Wipe</mark>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
    </div>
  );
};

export default AeWhereFind;
