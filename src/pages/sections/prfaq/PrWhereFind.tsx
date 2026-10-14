import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

import {getPlatformInfo} from "../../../utilities/browserDetection";

const PrWhereFind: React.FC = () => {
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
            <a href="https://t.me/s/premtemp">PremTemp</a> — канал с переходами,
            шаблонами, расширениями и прочими полезными материалами для ваших секвенций в{" "}
            <mark className="app">Adobe Premiere</mark>.
          </li>
          <li>
            <a href="https://t.me/s/aetemp">AETemp</a> — канал с аналогичным контентом, но
            для <mark className="app">Adobe After Effects</mark>.
          </li>
          <li>
            <a href="https://t.me/s/designworld">Design World</a> — канал со статичной
            графикой, эффектами и кистями для <mark className="app">Adobe Photoshop</mark>
            , которые в дальнейшем можно использовать в ваших проектах.
          </li>
        </ul>
        <Addition type="info">
          Если вы не нашли в каналах <a href="https://t.me/s/premtemp">PremTemp</a>,{" "}
          <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
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
          Контент, предоставленный в <a href="https://t.me/s/premtemp">PremTemp</a>,{" "}
          <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
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
          Файлы из каналов <a href="https://t.me/s/premtemp">PremTemp</a>,{" "}
          <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
          <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a> или{" "}
          <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a>{" "}
          предоставляются «как есть» из открытых источников. Устанавливая или распаковывая
          содержимое из этих каналов — вы принимаете на себя все риски и берёте
          ответственность за использование «народных» материалов.
          <ul>
            <li>
              Администрация этих каналов не может всерьёз воспринимать вбросы вроде{" "}
              <mark className="quote">
                «В „складе”, „саду”, или „аетемпе” одни вирусы водятся!»
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
              Предположим, что на вход вы дали скриншот, но с одной проблемой — он
              неконтрастный и весь контент сливается. Что же делать? Для этого нужно
              предварительно обработать изображение.
            </p>
            <ArticleMedia
              caption="Пример плохого исходника"
              src="legacy/likefont/prfaq_likefont_example.png"
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
              src="legacy/likefont/prfaq_likefont_fixed.png"
              type="image"
            />
          </li>
          <li>
            <p>
              После этого пролистайте страницу ниже, и вы увидите несколько изображений,
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
              caption="Изображения к которым нужно вписать букву"
              src="legacy/likefont/prfaq_likefont_recognition.png"
              type="image"
            />
          </li>
          <li>
            <p>
              После обработки изображения ниже у вас появится список возможных шрифтов. В
              моём примере был использован шрифт{" "}
              <mark className="copy">Berlin Sans FB</mark>, и с его нахождением сервис
              отлично справился.
            </p>
            <ArticleMedia
              caption="Результат распознавания"
              src="legacy/likefont/prfaq_likefont_result.png"
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
          зависимости от версии <mark className="app">Adobe Premiere</mark>. Также
          рекомендуется переключить интерфейс на английский язык, чтобы не возвращаться к
          этой таблице снова и снова.
        </Addition>
        <Addition type="danger">
          В <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.X (2025)</mark> и выше убрали папку{" "}
          <mark className="path">Obsolete</mark>, где были расположены устаревшие, по
          мнению <mark className="company">Adobe</mark>, эффекты. Эффекты всё ещё будут
          доступны для проектов, которые были созданы в предыдущих версиях{" "}
          <mark className="app">Adobe Premiere</mark>, но без танцев с бубном их применить
          в новых проектах не получится.{" "}
          <a href="https://community.adobe.com/t5/premiere-pro-beta-discussions/now-released-obsolete-effects-transitions-and-presets-removed/td-p/14703879">
            Подробнее...
          </a>
        </Addition>
        <Divider>Аудиоэффекты (Audio Effects)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Баланс</mark>
              </td>
              <td>
                <mark className="plugin">Balance</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Без звука</mark>
              </td>
              <td>
                <mark className="plugin">Mute</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Бинауральный - Ambisonics</mark>
              </td>
              <td>
                <mark className="plugin">Binauralizer - Ambisonics</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Громкость</mark>
              </td>
              <td>
                <mark className="plugin">Volume</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Панорамирование - Ambisonics</mark>
              </td>
              <td>
                <mark className="plugin">Panner - Ambisonics</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Амплитуда и сжатие (Amplitude and Compression)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">DeEsser</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Громкость канала</mark>
              </td>
              <td>
                <mark className="plugin">Channel Volume</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Динамика</mark>
              </td>
              <td>
                <mark className="plugin">Dynamics</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Жесткий Ограничитель</mark>
              </td>
              <td>
                <mark className="plugin">Hard Limiter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Компрессор с трубчатым моделированием</mark>
              </td>
              <td>
                <mark className="plugin">Tube-modeled Compressor</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Микширование каналов</mark>
              </td>
              <td>
                <mark className="plugin">Channel Mixer</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Многополосный компрессор</mark>
              </td>
              <td>
                <mark className="plugin">Multiband Compressor</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Обработка динамических характеристик</mark>
              </td>
              <td>
                <mark className="plugin">Dynamic Processing</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Однополосый компрессор</mark>
              </td>
              <td>
                <mark className="plugin">Single-band Compressor</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Усилить</mark>
              </td>
              <td>
                <mark className="plugin">Amplify</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Задержка и эхо (Delay and Echo)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Аналоговая задержка</mark>
              </td>
              <td>
                <mark className="plugin">Analog Delay</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Задержка</mark>
              </td>
              <td>
                <mark className="plugin">Delay</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Многократное эхо</mark>
              </td>
              <td>
                <mark className="plugin">Multitap Delay</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Фильтр и эквалайзер (Filter and EQ)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Бас</mark>
              </td>
              <td>
                <mark className="plugin">Bass</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Верхние частоты</mark>
              </td>
              <td>
                <mark className="plugin">Treble</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Графический эквалайзер (10 полос)</mark>
              </td>
              <td>
                <mark className="plugin">Graphic Equalizer (10 Bands)</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Графический эквалайзер (20 полос)</mark>
              </td>
              <td>
                <mark className="plugin">Graphic Equalizer (20 Bands)</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Графический эквалайзер (30 полос)</mark>
              </td>
              <td>
                <mark className="plugin">Graphic Equalizer (30 Bands)</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Научный фильтр</mark>
              </td>
              <td>
                <mark className="plugin">Scientific Filter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Параметрический эквалайзер</mark>
              </td>
              <td>
                <mark className="plugin">Parametric Equalizer</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Полоса пропускания</mark>
              </td>
              <td>
                <mark className="plugin">Bandpass</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Простой параметрический эквалайзер</mark>
              </td>
              <td>
                <mark className="plugin">Simple Parametric EQ</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Простой узкополосный блокирующий фильтр</mark>
              </td>
              <td>
                <mark className="plugin">Simple Notch Filter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Узкополосный блокирующий фильтр</mark>
              </td>
              <td>
                <mark className="plugin">Notch Filter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фильтр FFT</mark>
              </td>
              <td>
                <mark className="plugin">FFT Filter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фильтр высоких частот</mark>
              </td>
              <td>
                <mark className="plugin">Lowpass</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фильтр низких частот</mark>
              </td>
              <td>
                <mark className="plugin">Highpass</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Модуляция (Modulation)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Phaser</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Флэнжер</mark>
              </td>
              <td>
                <mark className="plugin">Flanger</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Хор/флэнжер</mark>
              </td>
              <td>
                <mark className="plugin">Chorus/Flanger</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Снижение шума/восстановление (Noise Reduction/Restoration)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">DeHummer</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Автоматическое удаление щелчков</mark>
              </td>
              <td>
                <mark className="plugin">Automatic Click Remover</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Удалить эхо</mark>
              </td>
              <td>
                <mark className="plugin">DeReverb</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Уменьшение шума</mark>
              </td>
              <td>
                <mark className="plugin">DeNoise</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Реверберация (Reverb)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Реверберация витка</mark>
              </td>
              <td>
                <mark className="plugin">Convolution Reverb</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Реверберация окружающего звучания</mark>
              </td>
              <td>
                <mark className="plugin">Surround Reverb</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Студийная реверберация</mark>
              </td>
              <td>
                <mark className="plugin">Studio Reverb</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Особый (Special)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Loudness Radar</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Заполнить левый правым</mark>
              </td>
              <td>
                <mark className="plugin">Fill Left with Right</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Заполнить правый левым</mark>
              </td>
              <td>
                <mark className="plugin">Fill Right with Left</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Измеритель громкости</mark>
              </td>
              <td>
                <mark className="plugin">Loudness Meter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Искажение</mark>
              </td>
              <td>
                <mark className="plugin">Distortion</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Мастеринг</mark>
              </td>
              <td>
                <mark className="plugin">Mastering</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Набор для гитары</mark>
              </td>
              <td>
                <mark className="plugin">GuitarSuite</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Обратить</mark>
              </td>
              <td>
                <mark className="plugin">Invert</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Поменять каналы</mark>
              </td>
              <td>
                <mark className="plugin">Swap Channels</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Расширитель вокала</mark>
              </td>
              <td>
                <mark className="plugin">Vocal Enhancer</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Стереоизображения (Stereo Imagery)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Расширение стерео</mark>
              </td>
              <td>
                <mark className="plugin">Stereo Expander</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Время и тональность (Time and Pitch)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Изменение высоты звука</mark>
              </td>
              <td>
                <mark className="plugin">Pitch Shifter</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Аудиопереходы (Audio Transitions)</Divider>
        <Divider>Перекрытие звуков (Crossfade)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Постоянная мощность</mark>
              </td>
              <td>
                <mark className="plugin">Constant Power</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Постоянное усиление</mark>
              </td>
              <td>
                <mark className="plugin">Constant Gain</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Экспоненциальное затухание</mark>
              </td>
              <td>
                <mark className="plugin">Exponential Fade</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Видеоэффекты (Video Effects)</Divider>
        <Divider>Видео (Video)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Метаданные и вставка временного кода</mark>
              </td>
              <td>
                <mark className="plugin">Metadata & Timecode Burn-in</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Простой текст</mark>
              </td>
              <td>
                <mark className="plugin">Simple Text</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Согласование SDR</mark>
              </td>
              <td>
                <mark className="plugin">SDR Conform</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Видео с погружением (Immersive Video)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Градиенты цвета VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Color Gradients</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Повернуть сферу VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Rotate Sphere</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Плоскость в сферу VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Plate to Sphere</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Понижение уровня шума VR</mark>
              </td>
              <td>
                <mark className="plugin">VR De-Noise</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Проекция VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Projection</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Размытие VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Blur</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Свечение VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Glow</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Увеличить четкость VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Sharpen</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фрактальный шум VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Fractal Noise</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Хроматические аберрации VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Chromatic Aberrations</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цифровой сбой VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Digital Glitch</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Время (Time)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Время постеризации</mark>
              </td>
              <td>
                <mark className="plugin">Posterize Time</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Эхо</mark>
              </td>
              <td>
                <mark className="plugin">Echo</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Генерировать (Generate)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
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
            </tr>
            <tr>
              <td>
                <mark className="plugin">Блики</mark>
              </td>
              <td>
                <mark className="plugin">Lens Flare</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Градиент</mark>
              </td>
              <td>
                <mark className="plugin">Ramp</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Молния</mark>
              </td>
              <td>
                <mark className="plugin">Lightning</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Изменить (Adjust)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">ProcAmp</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Извлечь</mark>
              </td>
              <td>
                <mark className="plugin">Extract</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Уровни</mark>
              </td>
              <td>
                <mark className="plugin">Levels</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Эффекты освещения</mark>
              </td>
              <td>
                <mark className="plugin">Lighting Effects</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Искажение</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Вихревое смещение</mark>
              </td>
              <td>
                <mark className="plugin">Turbulent Displace</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Волнообразная деформация</mark>
              </td>
              <td>
                <mark className="plugin">Wave Warp</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Зеркало</mark>
              </td>
              <td>
                <mark className="plugin">Mirror</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Искажение линзы</mark>
              </td>
              <td>
                <mark className="plugin">Lens Distortion</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Привязка по углам</mark>
              </td>
              <td>
                <mark className="plugin">Corner Pin</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Скручивание</mark>
              </td>
              <td>
                <mark className="plugin">Twirl</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Смещение</mark>
              </td>
              <td>
                <mark className="plugin">Offset</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Стабилизатор деформации</mark>
              </td>
              <td>
                <mark className="plugin">Warp Stabilizer</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сферизация</mark>
              </td>
              <td>
                <mark className="plugin">Spherize</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Увеличение</mark>
              </td>
              <td>
                <mark className="plugin">Magnify</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Устранение эффекта плавающего затвора</mark>
              </td>
              <td>
                <mark className="plugin">Rolling Shutter Repair</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Канал (Channel)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Обратить</mark>
              </td>
              <td>
                <mark className="plugin">Invert</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Контроль изображения (Image Correction)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Гамма-коррекция</mark>
              </td>
              <td>
                <mark className="plugin">Gamma Correction</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Замена цвета</mark>
              </td>
              <td>
                <mark className="plugin">Color Replace</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Фильтр цвета</mark>
              </td>
              <td>
                <mark className="plugin">Color Pass</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Черное и белое</mark>
              </td>
              <td>
                <mark className="plugin">Black & White</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Коррекция цвета (Color Correction)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">ASC CDL</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Яркость и контрастность</mark>
              </td>
              <td>
                <mark className="plugin">Brightness & Contrast</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Ограничитель видео</mark>
              </td>
              <td>
                <mark className="plugin">Video Limiter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Оттенок</mark>
              </td>
              <td>
                <mark className="plugin">Tint</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цвет Lumetri</mark>
              </td>
              <td>
                <mark className="plugin">Lumetri Color</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовой баланс</mark>
              </td>
              <td>
                <mark className="plugin">Color Balance</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Переход (Transition)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Градиентное вытеснение</mark>
              </td>
              <td>
                <mark className="plugin">Gradient Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Линейное вытеснение</mark>
              </td>
              <td>
                <mark className="plugin">Linear Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Растворение блоков</mark>
              </td>
              <td>
                <mark className="plugin">Block Dissolve</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Перспектива (Perspective)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
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
            </tr>
            <tr>
              <td>
                <mark className="plugin">Тень</mark>
              </td>
              <td>
                <mark className="plugin">Drop Shadow</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Преобразовать (Transform)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Автоматическое центрирование</mark>
              </td>
              <td>
                <mark className="plugin">Auto Reframe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Зеркальное отражение по вертикали</mark>
              </td>
              <td>
                <mark className="plugin">Vertical Flip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Зеркальное отражение по горизонтали</mark>
              </td>
              <td>
                <mark className="plugin">Horizontal Flip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Обрезать</mark>
              </td>
              <td>
                <mark className="plugin">Crop</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Преобразовать</mark>
              </td>
              <td>
                <mark className="plugin">Transform</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Растушевка границ</mark>
              </td>
              <td>
                <mark className="plugin">Edge Feather</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Прозрачное наложение (Keying)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Изменение альфа-канала</mark>
              </td>
              <td>
                <mark className="plugin">Alpha Adjust</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Ключ Ultra</mark>
              </td>
              <td>
                <mark className="plugin">Ultra Key</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Ключ маски дорожки</mark>
              </td>
              <td>
                <mark className="plugin">Track Matte Key</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Ключ яркости</mark>
              </td>
              <td>
                <mark className="plugin">Luma Key</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовой ключ</mark>
              </td>
              <td>
                <mark className="plugin">Color Key</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Размытие и резкость (Blur & Sharpen)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Контурная резкость</mark>
              </td>
              <td>
                <mark className="plugin">Unsharp Mask</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Направленное размытие</mark>
              </td>
              <td>
                <mark className="plugin">Directional Blur</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Размытие камеры</mark>
              </td>
              <td>
                <mark className="plugin">Camera Blur</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Размытие по Гауссу</mark>
              </td>
              <td>
                <mark className="plugin">Gaussian Blur</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Увеличить четкость</mark>
              </td>
              <td>
                <mark className="plugin">Sharpen</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">
                  Уменьшить мерцание в чересстрочной развертке
                </mark>
              </td>
              <td>
                <mark className="plugin">Reduce Interlace Flicker</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Стилизация (Stylize)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Выделение краев</mark>
              </td>
              <td>
                <mark className="plugin">Find Edges</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Мазки кистью</mark>
              </td>
              <td>
                <mark className="plugin">Brush Strokes</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Мозаика</mark>
              </td>
              <td>
                <mark className="plugin">Mosaic</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Постеризация</mark>
              </td>
              <td>
                <mark className="plugin">Posterize</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Проблесковый свет</mark>
              </td>
              <td>
                <mark className="plugin">Strobe Light</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Репликация</mark>
              </td>
              <td>
                <mark className="plugin">Replicate</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Свечение альфа-канала</mark>
              </td>
              <td>
                <mark className="plugin">Alpha Glow</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Цветовое тиснение</mark>
              </td>
              <td>
                <mark className="plugin">Color Emboss</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Шероховатые края</mark>
              </td>
              <td>
                <mark className="plugin">Roughen Edges</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Утилита (Utility)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">ToneMapper</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Конвертер Cineon</mark>
              </td>
              <td>
                <mark className="plugin">Cineon Converter</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Шум и зерно (Noise & Grain)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Шум</mark>
              </td>
              <td>
                <mark className="plugin">Noise</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Видеопереходы (Video Transitions)</Divider>
        <Divider>Видео с погружением (Immersive Video)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Вытеснение диафрагмы VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Iris Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Градиентное вытеснение VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Gradient Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Масштабирование Мебиуса VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Mobius Zoom</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Световые лучи VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Light Rays</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Случайные прямоугольники VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Random Blocks</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Сферическое размытие VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Spherical Blur</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Утечки света VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Light Leaks</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Утечки цветности VR</mark>
              </td>
              <td>
                <mark className="plugin">VR Chroma Leaks</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Вытеснение (Wipe)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Barn Doors</mark>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Inset</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Вытеснение</mark>
              </td>
              <td>
                <mark className="plugin">Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Вытеснение в шахматном порядке</mark>
              </td>
              <td>
                <mark className="plugin">Checker Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Вытеснение полосами</mark>
              </td>
              <td>
                <mark className="plugin">Band Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Жалюзи</mark>
              </td>
              <td>
                <mark className="plugin">Venetian Blinds</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Зигзагообразные блоки</mark>
              </td>
              <td>
                <mark className="plugin">Zig-Zag Blocks</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Квадраты по спирали</mark>
              </td>
              <td>
                <mark className="plugin">Spiral Boxes</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Клиновидное вытеснение</mark>
              </td>
              <td>
                <mark className="plugin">Wedge Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Колесо</mark>
              </td>
              <td>
                <mark className="plugin">Pinwheel</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Радиальное вытеснение</mark>
              </td>
              <td>
                <mark className="plugin">Radial Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Разбрызгивание краски</mark>
              </td>
              <td>
                <mark className="plugin">Paint Splatter</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Случайное вытеснение</mark>
              </td>
              <td>
                <mark className="plugin">Random Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Случайные прямоугольники</mark>
              </td>
              <td>
                <mark className="plugin">Random Blocks</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Циферблат</mark>
              </td>
              <td>
                <mark className="plugin">Clock Wipe</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Шахматная доска</mark>
              </td>
              <td>
                <mark className="plugin">CheckerBoard</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Диафрагма (Iris)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Диафрагма в виде квадрата</mark>
              </td>
              <td>
                <mark className="plugin">Iris Box</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Диафрагма в виде креста</mark>
              </td>
              <td>
                <mark className="plugin">Iris Cross</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Диафрагма в виде круга</mark>
              </td>
              <td>
                <mark className="plugin">Iris Round</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Диафрагма в виде ромба</mark>
              </td>
              <td>
                <mark className="plugin">Iris Diamond</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Листание страницы (Page Peel)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Листание страницы</mark>
              </td>
              <td>
                <mark className="plugin">Page Peel</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Переворачивание страницы</mark>
              </td>
              <td>
                <mark className="plugin">Page Turn</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Масштаб (Zoom)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Взаимное масштабирование</mark>
              </td>
              <td>
                <mark className="plugin">Cross Zoom</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Растворение (Dissolve)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <mark className="plugin">Аддитивный наплыв</mark>
              </td>
              <td>
                <mark className="plugin">Additive Dissolve</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Монтаж морфа</mark>
              </td>
              <td>
                <mark className="plugin">Morph Cut</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Неаддитивное растворение</mark>
              </td>
              <td>
                <mark className="plugin">Non-Additive Dissolve</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Перекрестный наплыв</mark>
              </td>
              <td>
                <mark className="plugin">Cross Dissolve</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Погружение в белый</mark>
              </td>
              <td>
                <mark className="plugin">Dip to White</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Погружение в черный</mark>
              </td>
              <td>
                <mark className="plugin">Dip to Black</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Растворение пленки</mark>
              </td>
              <td>
                <mark className="plugin">Film Dissolve</mark>
              </td>
            </tr>
          </tbody>
        </table>
        <Divider>Скольжение (Slide)</Divider>
        <table className="table">
          <thead>
            <tr>
              <th>Эффект на русском</th>
              <th>Эффект на английском</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Center Split</mark>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>
                <mark className="plugin">Split</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Выталкивание</mark>
              </td>
              <td>
                <mark className="plugin">Push</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Лассо</mark>
              </td>
              <td>
                <mark className="plugin">Whip</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Скольжение</mark>
              </td>
              <td>
                <mark className="plugin">Slide</mark>
              </td>
            </tr>
            <tr>
              <td>
                <mark className="plugin">Слайд-шоу по полосам</mark>
              </td>
              <td>
                <mark className="plugin">Band Slide</mark>
              </td>
            </tr>
          </tbody>
        </table>
      </DetailsSummary>
    </div>
  );
};

export default PrWhereFind;
