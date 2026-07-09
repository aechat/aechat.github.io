import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import CodeSnippet from "../../../components/content/CodeSnippet";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PrInterface: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="bilingual"
        title="Как сделать двойной язык интерфейса?"
      >
        <ContentFilter
          macContent={
            <>
              <p>
                Если вы не хотите кардинально менять язык программы, вы можете сделать
                интерфейс двуязычным. Для этого откройте консоль с помощью комбинации
                клавиш <mark className="key">Control + F12</mark> и переключитесь на режим
                отображения <mark className="select">«Debug Database View»</mark>. Далее
                найдите параметры <mark className="select">«ApplicationLanguage»</mark> и{" "}
                <mark className="select">«ApplicationLanguageBilingual»</mark> и укажите
                значения <mark className="copy">ru_RU</mark> и{" "}
                <mark className="copy">true</mark> соответственно. После этого
                перезагрузите программу, и теперь во многих местах интерфейса будет
                русский язык, а в скобках — эквивалент на английском.
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
              Если вы не хотите кардинально менять язык программы, вы можете сделать
              интерфейс двуязычным. Для этого откройте консоль с помощью комбинации клавиш{" "}
              <mark className="key">Ctrl + F12</mark> и переключитесь на режим отображения{" "}
              <mark className="select">«Debug Database View»</mark>. Далее найдите
              параметры <mark className="select">«ApplicationLanguage»</mark> и{" "}
              <mark className="select">«ApplicationLanguageBilingual»</mark> и укажите
              значения <mark className="copy">ru_RU</mark> и{" "}
              <mark className="copy">true</mark> соответственно. После этого перезагрузите
              программу, и теперь во многих местах интерфейса будет русский язык, а в
              скобках — эквивалент на английском.
            </p>
          }
        />
        <ArticleMedia
          caption="Adobe Premiere"
          src="legacy/premierepro/set_double_language.png"
          type="image"
        />
        <Addition type="danger">
          Не рекомендуется использовать двойной язык на постоянной основе, так как
          основной язык программы останется русским, а значит баги русской локализации{" "}
          <mark className="app">Adobe Premiere</mark> никуда не денутся.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="essential-graphics-missing"
        tag="essential graphics missing, mogrt panel, графические шаблоны, окно панели"
        title="Куда пропало окно «Essential Graphics»?"
      >
        <p>
          В <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.X (2025)</mark> и выше панель{" "}
          <mark className="select">«Essential Graphics»</mark> убрали и перенесли часть
          функционала в новое окно <mark className="select">«Graphics Templates»</mark>.
          Открыть его можно в контекстном меню <mark className="select">«Window»</mark>.
        </p>
        <p>
          Из нового окна <mark className="select">«Graphics Templates»</mark> вы до сих
          пор можете импортировать <mark className="file">MOGRT</mark> файлы прямиком в
          ваш проект и редактировать их в новом окне{" "}
          <mark className="select">«Properties»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="set-to-frame-size-missing"
        tag="масштаб под размер кадра, frame size, transform"
        title="Куда пропала кнопка «Set to Frame Size»?"
      >
        <p>
          В <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.X (2025)</mark> и выше{" "}
          <mark className="select">«Set to Frame Size»</mark> заменили на{" "}
          <mark className="select">«Fit to Frame»</mark>. Эта функция увеличивает значение{" "}
          <mark className="select">«Scale»</mark> до тех пор, пока не упрётся в ближайшую
          сторону по высоте или ширине вашей секвенции.
        </p>
        <p>
          Вместе с этим обновлением добавили новую функцию{" "}
          <mark className="select">«Fill Frame»</mark>, которая тоже работает через{" "}
          <mark className="select">«Scale»</mark>, но подгоняет значение под самую большую
          сторону вашей секвенции.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="change-time-display-format"
        tag="альтернативный таймкод, формат времени, time display, frame count"
        title="Как изменить вид отсчёта времени на таймлайне?"
      >
        <p>
          По умолчанию в <mark className="app">Adobe Premiere</mark> текущее время
          отображается в формате ЧЧ:ММ:СС:Кадр, но иногда хочется поменять вариант
          отображения на что-то другое.
        </p>
        <p>
          Для изменения формата отображения текущего времени нажмите на{" "}
          <mark className="key">ПКМ</mark> по отображению текущего времени и выберите
          нужный вам тип вывода.
        </p>
        <p>
          Если вы хотите передвинуть временную метку меньше, чем на кадр, чтобы подрезать
          аудио, вам нужно включить режим отображения аудиовремени. Для этого нажмите на
          три полоски в заголовке окна с таймлайном и выберите{" "}
          <mark className="select">«Show Audio Units»</mark>. Убрать можно аналогичным
          образом.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="excalibur"
        tag="панель эффектов, фх консоль, экскалибур"
        title="Есть ли аналог FX Console для Premiere?"
      >
        <p>
          Да, есть, и называется{" "}
          <a href="https://knightsoftheeditingtable.com/excalibur">Excalibur</a>. С
          помощью него можно применять различные эффекты, пресеты и переходы с помощью
          всплывающего меню, а также выполнять некоторые команды.
        </p>
        <ArticleMedia
          caption="Adobe Premiere"
          src="https://images.squarespace-cdn.com/content/v1/5d090703bfcf6300017faaa8/1605797292871-IKNJ3QIJPGK2TFMMBIIY/web_01_fx.gif?format=750w"
          type="image"
        />
        <Addition type="info">
          По умолчанию для открытия всплывающего окна указана комбинация клавиш{" "}
          <mark className="key">Alt + Space</mark>. Комбинацию клавиш можно поменять в
          настройках плагина.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="audio-waveforms-missing"
        tag="audio waveforms, визуализация аудио, waveform missing, timeline audio display"
        title="Пропала визуализация аудиодорожек на таймлайне, как их вернуть?"
      >
        <p>
          Это довольно частый и неприятный баг, возникающий при использовании{" "}
          <mark className="app">Adobe Premiere</mark>. Обычно это лечится очисткой кэша{" "}
          <mark className="file">PEAK</mark> файлов.
        </p>
        <p>
          Для очистки кэша и файлов предпросмотра перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Media Cache»</mark> и нажмите
          на <mark className="select">«Delete»</mark> возле параметра{" "}
          <mark className="select">«Remove Media Cache Files»</mark>. Или очистите кэш
          вручную в <mark className="path">%TEMP%</mark> и папке проекта.
        </p>
        <p>
          После очистки кэша предпросмотр аудиофайлов должен появиться автоматически. Если
          это не происходит, попробуйте принудительно отрендерить звук с помощью{" "}
          <mark className="select">«Sequence» → «Render Audio»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="change-accent-color"
        tag="акцентный цвет, консоль, тема, accent color, theme customization"
        title="Как изменить акцентный цвет интерфейса программы?"
      >
        <Addition type="danger">
          Для <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.X (2025)</mark> и выше данная инструкция
          неактуальна, после включения параметра в консоли в настройках ничего не будет.
        </Addition>
        <ContentFilter
          macContent={
            <>
              <p>
                Вы, наверное, не раз натыкались на различные скриншоты, где у
                пользователей изменён цветовой акцент в интерфейсе программы. В{" "}
                <mark className="app">Adobe Premiere Pro</mark> от{" "}
                <mark className="version">11.X (2017)</mark> до{" "}
                <mark className="version">24.X (2024)</mark> можно включить возможность
                изменения акцента через консоль. Для этого нажмите на комбинацию клавиш{" "}
                <mark className="key">Control + F12</mark>. Затем введите команду ниже в
                консоль в режиме <mark className="select">«Console View»</mark> и нажмите
                на <mark className="key">Enter</mark>.
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
              Вы, наверное, не раз натыкались на различные скриншоты, где у пользователей
              изменён цветовой акцент в интерфейсе программы. В{" "}
              <mark className="app">Adobe Premiere Pro</mark> от{" "}
              <mark className="version">11.X (2017)</mark> до{" "}
              <mark className="version">24.X (2024)</mark> можно включить возможность
              изменения акцента через консоль. Для этого нажмите на комбинацию клавиш{" "}
              <mark className="key">Ctrl + F12</mark>. Затем введите команду ниже в
              консоль в режиме <mark className="select">«Console View»</mark> и нажмите на{" "}
              <mark className="key">Enter</mark>.
            </p>
          }
        />
        <CodeSnippet>debug.set Enable_Theme_Colorizing=true</CodeSnippet>
        <Addition type="info">
          Режимы отображения консоли можно изменить, нажав на три полоски в заголовке
          окна. Также этот параметр можно найти и в режиме отображения{" "}
          <mark className="select">«Debug Database View»</mark>.
        </Addition>
        <ArticleMedia
          caption="Console"
          src="legacy/premierepro/console_theme_colorizing.png"
          type="image"
        />
        <p>
          Далее, после включения возможности изменять цвет, перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Appearance»</mark> и...
        </p>
        <p>
          В открывшейся цветовой палитре вы можете указать любой цвет, какой захотите.
          Желательно выбрать тот цвет, который будет хорошо выделяться на фоне остального
          интерфейса.
        </p>
        <Addition type="warning">
          Не рекомендуется выбирать тёмные или слишком насыщенные оттенки: из-за них
          некоторые элементы интерфейса могут стать плохо различимыми.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="custom-splash-screen"
        tag="заставка, изображение запуска, resource hacker, dll, startup image, splash screen customization"
        title="Как изменить картинку во время запуска программы?"
      >
        <Addition type="danger">
          Действия с заменой файлов программы вы делаете на свой страх и риск! После
          обновления программы ваша картинка перезапишется на исходную. Инструкция
          действительна только для устройств на Windows.
        </Addition>
        <p>
          При запуске <mark className="app">Adobe Premiere</mark> вы часто видите
          какую-либо картинку, задуманную <mark className="company">Adobe</mark>, и
          наверняка задумывались, что неплохо бы её заменить на свою. К счастью,{" "}
          <mark className="company">Adobe</mark> оставила нам возможность замены картинки
          при запуске без ковыряния с <mark className="file">DLL</mark> файлов, как это
          было в статье про замену в <mark className="app">Adobe After Effects</mark> в{" "}
          <a href="/aefaq">aefaq</a>.
        </p>
        <Divider>Ищем изображение, которое появляется при запуске</Divider>
        <p>
          Картинка, которую вы видите при запуске{" "}
          <mark className="app">Adobe Premiere</mark>, хранится в директории с
          установленной программой, обычно это{" "}
          <mark className="path">C:\Program Files\Adobe\Adobe Premiere Pro 20XX</mark> в
          подпапке <mark className="path">PNG</mark>.
        </p>
        <ArticleMedia
          caption="Проводник"
          src="legacy/premierepro/exploring_png_in_installation_folder.png"
          type="image"
        />
        <p>
          В случае, как и с <mark className="app">Adobe After Effects</mark>, там хранятся
          три почти одинаковые картинки: <mark className="image">PR_SPLASH.PNG</mark>,{" "}
          <mark className="image">PR_SPLASH@2X.PNG</mark> и{" "}
          <mark className="image">PR_SPLASH@3TO2X.PNG</mark>, каждое из которых
          адаптировано под определённый масштаб дисплея. Вы можете отредактировать их в
          любимом графическом редакторе, например{" "}
          <mark className="app">Adobe Photoshop</mark> и заменить одно, два или все три
          изображения в зависимости от ваших личных предпочтений, если часто меняете
          масштабирование системы. При редактировании изображения не нужно менять его
          разрешение и нужно сохранить файл также в <mark className="image">PNG</mark>. По
          аналогии вы можете изменить плашку для окна{" "}
          <mark className="select">«About»</mark>, заменив файлы{" "}
          <mark className="image">PR_ABOUT.PNG</mark>,{" "}
          <mark className="image">PR_ABOUT@2X.PNG</mark> и{" "}
          <mark className="image">PR_ABOUT@3TO2X.PNG</mark>.
        </p>
        <Addition type="warning">
          Для изменения файлов в директории с установкой{" "}
          <mark className="app">Adobe Premiere</mark> могут потребоваться права
          администратора. Чтобы изменять картинки, лучше перенесите их в другое место,
          например на <mark className="path">Рабочий стол</mark>, отредактируйте, а потом
          переместите их обратно с заменой в папке с программой.
        </Addition>
        <p>
          В качестве примера я заменю стандартное изображение на изображение автомобиля
          Ford Focus и сохраню его в <mark className="image">PNG</mark>.
        </p>
        <ArticleMedia
          caption="Пример модификации изображения при загрузке Adobe Premiere"
          src="legacy/premierepro/custom_splash_example.png"
          type="image"
        />
        <Divider>Заменяем изображение</Divider>
        <p>
          После изменения исходного изображения перенесите его с заменой в папку{" "}
          <mark className="path">PNG</mark> в директорию с установленной программой. После
          успешной замены можно запустить программу и наслаждаться своим шедевром, который
          вы сотворили.
        </p>
        <ArticleMedia
          caption="Замена изображения и открытие программы с уже изменённой плашкой"
          src="legacy/premierepro/replace_splash_screen.mp4"
          type="video"
        />
      </DetailsSummary>
    </div>
  );
};

export default PrInterface;
