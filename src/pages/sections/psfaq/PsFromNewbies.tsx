import React from "react";

import {Divider} from "antd";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PsFromNewbies: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="get-started"
        tag="для новичка, первый раз, только открыл"
        title="Первый раз установил Photoshop, с чего бы мне начать обучение?"
      >
        <p>
          <mark className="app">Adobe Photoshop</mark> сейчас широко применяется во многих
          сферах, включая графический дизайн, фотографию, веб-дизайн и иллюстрации. Если
          вы ещё не определились с направлением работы с программой, хотите просто изучить
          функционал и посмотреть примеры — советую пройти курс{" "}
          <a href="https://www.youtube.com/playlist?list=PL_jKgaFUK_61p1yXULw7KPi6HGpyXKTWx">
            «Фотошоп с нуля»
          </a>{" "}
          от <a href="https://www.youtube.com/@Photofoxchannel">PhotoFox</a>.
        </p>
        <ArticleMedia
          src="-IqjBmVaApg"
          type="youtube"
        />
        <p>
          Если вы уже уверенно обрабатываете и создаёте изображения в{" "}
          <mark className="app">Adobe Photoshop</mark> и хотите узнать что-то новое,
          рекомендую заглянуть на каналы и плейлисты ниже.
        </p>
        <div className="flexible-links">
          <a href="https://www.youtube.com/playlist?list=PL3ysV0s8Gs4UpuSH_wx2vchA-HzRXNcFv">
            «Уроки Photoshop для продвинутых» от Study Kvo
          </a>
          <a href="https://www.youtube.com/playlist?list=PLrsq-o51mMFHXOE0wRrDpb0l4mj9EjTkS">
            Фишки и лайфхаки от VideoSmile
          </a>
          <a href="https://www.youtube.com/@grafon/videos">GRAFON Уроки фотошопа</a>
          <a href="https://www.youtube.com/@ps-master/videos">
            Фотошопер — уроки фотошопа
          </a>
          <a href="https://www.youtube.com/@IntuitiveDesigns/videos">Intuitive Designs</a>
          <a href="https://www.youtube.com/@Texturelabs/videos">Texturelabs</a>
          <a href="https://www.youtube.com/@PANTERvision/videos">P A N T E R</a>
          <a href="https://www.youtube.com/@thazero/videos">ThaZero</a>
        </div>
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
          <mark className="quote">«А что обновилось то?»</mark>. Ещё время от времени{" "}
          <mark className="company">Adobe</mark> выкладывает на сайт список выявленных
          неполадок и старается приложить к ним временное решение.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/photoshop/using/whats-new.html">
            Что нового в Photoshop последних выпусков
          </a>
          <a href="https://helpx.adobe.com/photoshop/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/photoshop/kb/known-issues.html">
            Выявленные неполадки в Photoshop
          </a>
        </div>
      </DetailsSummary>
      <DetailsSummary
        anchor="switch-language"
        tag="изменить язык, смена языка, установка английской версии"
        title="Почему мне с каждого угла советуют поставить английский язык программы и как это сделать?"
      >
        <p>
          Удивительно, но в <mark className="app">Adobe Photoshop</mark> можно сменить
          язык интерфейса, и многие оставляют его на русском по двум причинам. Первая —
          пользователю может быть удобно, что весь интерфейс программы переведён. Вторая —
          в некоторых «народных» версиях программы, в частности при установке репака от{" "}
          <mark className="user">KpoJIuK</mark> при смене языка при установке на
          английский он попросту не применяется.
        </p>
        <p>
          На практике русская локализация <mark className="app">Adobe Photoshop</mark>{" "}
          может вставить палки в колёса пользователю. Почему? Например, многие{" "}
          <mark className="plugin">Actions</mark> жёстко завязаны на английские названия
          слоёв и команд — если названия не совпадают, скрипт ломается. Также бывают
          случаи, когда сторонние плагины и эффекты тоже могут ломаться из-за русской
          локализации. Ещё в большинстве обучающих видео часто используется английская
          локализация, это тоже решающий фактор, особенно если вы только начинаете изучать
          программу.{" "}
          <em className="article-note-muted">
            Конечно, не в такой степени часто, как для{" "}
            <mark className="app">Adobe After Effects</mark> и{" "}
            <mark className="app">Adobe Premiere</mark>, но всё же.
          </em>
        </p>
        <Divider>Меняем язык в «народной» версии программы</Divider>
        <p>
          Для быстрой смены языка — откройте контекстное меню{" "}
          <mark className="select">«Редактирование» → «Настройки»</mark> и выберите в нём{" "}
          <mark className="select">«Интерфейс»</mark>.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/редактирование_настройки_интерфейс.png"
          type="image"
        />
        <p>
          Затем в открывшемся окне выберите в параметре{" "}
          <mark className="select">«Язык»</mark> значение{" "}
          <mark className="select">«English»</mark>. После этого перезагрузите программу и
          теперь вы можете работать с английской локализацией{" "}
          <mark className="app">Adobe Photoshop</mark>.
        </p>
        <ArticleMedia
          caption="Установки"
          src="legacy/photoshop/change_language.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="photoshop-vs-illustrator"
        title="В каких случаях нужно использовать Adobe Photoshop, а в каких — Adobe Illustrator?"
      >
        <ul>
          <li>
            <mark className="app">Adobe Photoshop</mark> — это прежде всего программа для
            редактирования растровых изображений, которые состоят из пикселей. Она
            идеально подходит для обработки фотографий, ретуши и создания композиций из
            различных изображений.
          </li>
          <li>
            <mark className="app">Adobe Illustrator</mark> — это векторный редактор,
            который работает с графикой, состоящей из линий и кривых. Векторная графика
            может масштабироваться до любого размера без потери качества, что делает{" "}
            <mark className="app">Adobe Illustrator</mark> идеальным для создания
            логотипов, иконок, шрифтов и инфографики, которые должны оставаться четкими
            при изменении размера. В отличие от{" "}
            <mark className="app">Adobe Photoshop</mark>,{" "}
            <mark className="app">Adobe Illustrator</mark> не предназначен для детальной
            обработки фотографий и сложного редактирования растровых изображений.
          </li>
          <li></li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="image-canvas-size-change"
        tag="image size, canvas size, размер изображения, размер холста"
        title="Как я могу быстро изменить размер изображения или холста?"
      >
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/change_image_size.mp4"
          type="video"
        />
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/change_canvas_size.mp4"
          type="video"
        />
        <p>
          Разница между <mark className="select">«Image Size»</mark> и{" "}
          <mark className="select">«Canvas Size»</mark> заключается в том, что в...
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="smart-objects"
        tag="smart objects"
        title="Для чего нужны смарт-объекты?"
      >
        <ArticleMedia
          caption="Photoshop"
          src="legacy/photoshop/using_smart_objects.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-auto-select"
        tag="disable auto-select"
        title="Как отключить автовыделение слоёв?"
      >
        <ArticleMedia
          caption="Photoshop"
          src="legacy/photoshop/disable_auto-select.png"
          type="image"
        />
      </DetailsSummary>
    </div>
  );
};

export default PsFromNewbies;
