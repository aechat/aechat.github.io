import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

import {getPlatformInfo} from "../../../utilities/browserDetection";

const PsWhereFind: React.FC = () => {
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
            href="https://t.me/+3LF_B_VK-Nw4YzYy"
            title="DWChat в Telegram"
          >
            DWChat
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
            <a href="https://t.me/s/designworld">Design World</a> — канал со статичной
            графикой, эффектами и кистями для <mark className="app">Adobe Photoshop</mark>
            , которые можно использовать в ваших работах.
          </li>
          <li>
            <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
            <a href="https://t.me/s/premtemp">PremTemp</a> — каналы с материалами для{" "}
            <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Premiere</mark>, откуда можно почерпнуть идеи для
            ваших проектов в <mark className="app">Adobe Photoshop</mark>.
          </li>
        </ul>
        <Addition type="info">
          Если вы не нашли в канале <a href="https://t.me/s/designworld">Design World</a>{" "}
          нужный шаблон, но у вас есть на него ссылка, воспользуйтесь сервисом{" "}
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
          Контент, предоставленный в <a href="https://t.me/s/designworld">Design World</a>
          , <a href="https://t.me/s/aetemp">AETemp</a> и{" "}
          <a href="https://t.me/s/premtemp">PremTemp</a>, не должен использоваться в
          коммерческих целях. Если вы планируете использовать какой-либо материал в
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
          <a href="https://t.me/+3LF_B_VK-Nw4YzYy">DWChat</a>.
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
          Файлы из каналов <a href="https://t.me/s/designworld">Design World</a>,{" "}
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
        anchor="graphics-resources"
        tag="фото, изображения, текстуры, шрифты, кисти, паттерны, иконки, psd, graphic resources, free graphics, stock photos"
        title="Где найти и скачать графику для своих проектов?"
      >
        <p>
          Для таких случаев был создан канал{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            Design World
          </a>{" "}
          в <mark className="app">Telegram</mark> с полезными материалами для
          использования в различных графических редакторах, например{" "}
          <mark className="app">Adobe Photoshop</mark> и{" "}
          <mark className="app">Adobe Illustrator</mark>. В{" "}
          <a
            href="https://t.me/s/DesignWorld"
            title="Канал Design World в Telegram"
          >
            данном канале
          </a>{" "}
          есть навигация по каналу для нахождения всякой всячины, например:{" "}
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
          , то вы можете воспользоваться списком различных сайтов с различными
          графическими материалами.
        </p>
        <div className="flexible-links">
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
        </div>
        <Addition type="warning">
          Перед использованием материалов, внимательно ознакомьтесь с условиями
          использования на каждом конкретном ресурсе. Некоторые ресурсы из списка могут
          потребовать оформить подписку на использование некоторых материалов.
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
              src="legacy/likefont/psfaq_likefont_example.png"
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
              src="legacy/likefont/psfaq_likefont_fixed.png"
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
              caption="Изображения, к которым нужно вписать букву"
              src="legacy/likefont/psfaq_likefont_recognition.png"
              type="image"
            />
          </li>
          <li>
            <p>
              После обработки изображения ниже у вас появится список возможных шрифтов. В
              моём примере был использован шрифт <mark className="copy">Broadway</mark>, и
              с его нахождением сервис отлично справился.
            </p>
            <ArticleMedia
              caption="Результат распознавания"
              src="legacy/likefont/psfaq_likefont_result.png"
              type="image"
            />
          </li>
        </ul>
      </DetailsSummary>
    </div>
  );
};

export default PsWhereFind;
