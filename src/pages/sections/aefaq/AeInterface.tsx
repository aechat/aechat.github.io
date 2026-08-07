import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import CodeSnippet from "../../../components/content/CodeSnippet";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const AeInterface: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="fix-blank-home-screen"
        tag="стартовая страница, домашний экран, home screen"
        title="Почему у меня не работает окно с недавними проектами и как его отключить?"
      >
        <p>
          По умолчанию при запуске <mark className="app">Adobe After Effects</mark>{" "}
          открывается домашний экран с приветствием и списком недавних проектов. На
          некоторых «народных» версиях программы стартовый экран может не загружаться и
          оставаться пустым. Для решения этой проблемы достаточно войти в аккаунт{" "}
          <mark className="company">Adobe</mark> через{" "}
          <mark className="select">«Help» → «Sign In»</mark>.{" "}
          <em className="article-note-muted">Нет, псевдо-лицензия не слетит.</em>
        </p>
        <ArticleMedia
          caption="Пустое домашнее окно Adobe After Effects"
          src="legacy/aftereffects/empty_home_screen.png"
          type="image"
        />
        <p>
          Если при попытке входа в аккаунт вы столкнулись с окном{" "}
          <mark className="select">«Sorry, something went wrong»</mark> и надписью{" "}
          <mark className="select">«Are you connected to the internet?»</mark>, то, скорее
          всего, программа не может выйти в интернет. Для решения этой проблемы временно
          разрешите программе доступ в сеть в настройках{" "}
          <mark className="app">брандмауэра</mark>.
        </p>
        <Addition type="info">
          Чтобы открыть <mark className="app">брандмауэр</mark>, запустите{" "}
          <mark className="app">«Выполнить»</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Win + R</mark>, введите{" "}
          <mark className="code">wf.msc</mark> и нажмите{" "}
          <mark className="key">Enter</mark>. Затем перейдите в{" "}
          <mark className="select">«Правила для входящих подключений»</mark> и{" "}
          <mark className="select">«Правила для исходящих подключений»</mark>, найдите
          правила, связанные с блокировкой <mark className="company">Adobe</mark>, нажмите
          на них <mark className="key">ПКМ</mark> и выберите{" "}
          <mark className="select">«Отключить правило»</mark>. После этого перезапустите{" "}
          <mark className="app">Adobe After Effects</mark>, войдите в аккаунт и снова
          включите правила <mark className="app">брандмауэра</mark>.
        </Addition>
        <Divider>Отключаем домашний экран при запуске программы</Divider>
        <p>
          Если вариант со входом в аккаунт вас не устраивает или это окно просто мешает,
          его можно отключить. Для этого перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Startup & Repair»</mark>
          <sup>1</sup> и снимите чекбокс у параметра{" "}
          <mark className="select">«Enable Home Screen»</mark>.
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«General»</mark>.
        </Addition>
        <ArticleMedia
          caption="Отключаем отображение домашнего экрана при запуске программы"
          src="legacy/aftereffects/enable_home_screen.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="customize-workspace"
        tag="интерфейс, окна, панели, закрепить окно, прикрепить панель, scriptui panels, настройка рабочего пространства, stacked panels, группировка панелей, организация окон"
        title="Как работать с панелями в рабочем пространстве?"
      >
        <p>
          Рабочее пространство в <mark className="app">Adobe After Effects</mark> строится
          на панелях. Вы можете свободно откреплять их, превращать в плавающие или менять
          местами, организуя всё как душе угодно. В этой статье разберёмся с основами
          управления окнами.
        </p>
        <Divider>Открываем и закрываем панели</Divider>
        <p>
          При первом знакомстве с интерфейсом легко случайно закрыть нужное окно, а потом
          судорожно его искать. Чтобы вернуть панель, откройте меню{" "}
          <mark className="select">«Window»</mark> и выберите её название в списке. Здесь
          же можно найти расширения или переключиться между рабочими средами.
        </p>
        <p>
          Для закрытия панели нажмите на крестик слева от заголовка или выберите пункт{" "}
          <mark className="select">«Close Panel»</mark> в контекстном меню.
        </p>
        <ArticleMedia
          caption="Открываем и закрываем панель"
          src="legacy/aftereffects/open_window.mp4"
          type="video"
        />
        <Divider>Прикрепляем окна к рабочей среде</Divider>
        <p>
          Чтобы закрепить окно в рабочей среде, зажмите левую кнопку мыши на его названии
          <sup>1</sup> и перетащите в нужную область. Интерфейс подсветит зоны стыковки,
          например внутри другой панели или сбоку от неё.
        </p>
        <Addition type="info">
          <sup>1</sup> Тяните именно за внутреннюю вкладку панели, а не за системную рамку
          окна.
        </Addition>
        <p>
          Для открепления панели выберите <mark className="select">«Undock Panel»</mark> в
          контекстном меню или просто вынесите вкладку за пределы программы.
        </p>
        <ArticleMedia
          caption="Прикрепление окна в рабочее пространство"
          src="legacy/aftereffects/attach_window.mp4"
          type="video"
        />
        <Divider>Нюансы про прикрепление панелей скриптов</Divider>
        <ContentFilter
          macContent={
            <>
              <p>
                Скрипты формата <mark className="file">JSX</mark> или{" "}
                <mark className="file">JSXBIN</mark> с интерфейсом нельзя прикрепить, если
                они лежат прямо в папке <mark className="path">../Scripts</mark>, а не в
                специальной подпапке <mark className="path">ScriptUI Panels</mark>.
              </p>
              <ArticleMedia
                caption="Демонстрация невозможности прикрепить окно скрипта в рабочее пространство"
                src="legacy/aftereffects/i_cant_attach_script.mp4"
                type="video"
              />
              <p>
                Чтобы сделать такие окна прикрепляемыми, переместите нужные скрипты в{" "}
                <mark className="path">ScriptUI Panels</mark>. Полный путь к ним должен
                выглядеть так:{" "}
                <mark className="path">
                  /Applications/Adobe After Effects 20XX/Scripts/ScriptUI Panels
                </mark>
                .
              </p>
              <Addition type="info">
                Если <mark className="app">Adobe After Effects</mark> был запущен во время
                переноса скрипта, перезапустите программу.
              </Addition>
              <ArticleMedia
                caption="Проводник"
                src="legacy/aftereffects/move_from_scripts_to_scriptuipanels.mp4"
                type="video"
              />
            </>
          }
          windowsContent={
            <>
              <p>
                Скрипты формата <mark className="file">JSX</mark> или{" "}
                <mark className="file">JSXBIN</mark> с интерфейсом нельзя прикрепить, если
                они лежат прямо в папке{" "}
                <mark className="path">
                  C:\Program Files\Adobe After Effects 20XX\Support Files\Scripts
                </mark>
                , а не в специальной подпапке{" "}
                <mark className="path">ScriptUI Panels</mark>.
              </p>
              <ArticleMedia
                caption="Демонстрация невозможности прикрепить окно скрипта в рабочее пространство"
                src="legacy/aftereffects/i_cant_attach_script.mp4"
                type="video"
              />
              <p>
                Чтобы сделать такие окна прикрепляемыми, переместите нужные скрипты в{" "}
                <mark className="path">ScriptUI Panels</mark>. Полный путь к ним должен
                выглядеть так:{" "}
                <mark className="path">
                  C:\Program Files\Adobe After Effects 20XX\Support Files\Scripts\ScriptUI
                  Panels
                </mark>
                .
              </p>
              <Addition type="info">
                Если <mark className="app">Adobe After Effects</mark> был запущен во время
                переноса скрипта, перезапустите программу.
              </Addition>
              <ArticleMedia
                caption="Проводник"
                src="legacy/aftereffects/move_from_scripts_to_scriptuipanels.mp4"
                type="video"
              />
            </>
          }
        />
        <p>
          После переноса скрипт переместится из меню{" "}
          <mark className="select">«File» → «Scripts»</mark> в конец списка меню{" "}
          <mark className="select">«Window»</mark>. Открыв скрипт оттуда, вы сможете
          прикрепить его окно в любой части рабочего пространства.
        </p>
        <ArticleMedia
          caption="Прикрепление скрипта True Comp Duplicator"
          src="legacy/aftereffects/attaching_jsx_script.mp4"
          type="video"
        />
        <Divider>Группируем панели</Divider>
        <p>
          Чтобы сэкономить место в своём рабочем пространстве, несколько панелей можно
          объединить в одну с вкладками. Для этого перенесите нужное окно в центр другого
          — они соберутся в общий блок, между вкладками которого можно будет легко
          переключаться.
        </p>
        <p>
          Также можно организовать окна в виде списка. В этом режиме свёрнутые окна
          отображаются строками, а при клике на название нужное окно разворачивается.
          Чтобы включить такой вид, откройте контекстное меню окна и выберите{" "}
          <mark className="select">«Panel Group Settings» → «Stacked Panel Group»</mark>.
        </p>
        <Addition type="info">
          Если хотите, чтобы из списка одновременно было открыто только одно окно,
          активируйте опцию <mark className="select">«Solo Panels in Stack»</mark> в том
          же контекстном меню.
        </Addition>
        <ArticleMedia
          caption="Управление окнами в рабочем пространстве"
          src="legacy/aftereffects/manage_windows.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="maintain-current-workspace"
        tag="maintain current workspace, сохранить рабочее пространство, открытие проектов"
        title="Как зафиксировать текущее рабочее пространство при открытии проектов?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.2 (2025)</mark> и выше появилась настройка, которая
          предотвращает смену рабочего пространства при открытии своих или чужих проектов.
          Раньше эта особенность раздражала многих пользователей, поэтому{" "}
          <mark className="company">Adobe</mark> добавила{" "}
          <a href="https://helpx.adobe.com/after-effects/using/whats-new/2025-2.html#maintain-workspace-when-opening-projects">
            отдельный параметр
          </a>{" "}
          для решения этой проблемы. Чтобы его включить, откройте{" "}
          <mark className="select">«Edit» → «Preferences» → «Project»</mark> и активируйте{" "}
          <mark className="select">
            «Maintain current workspace when opening projects»
          </mark>
          . После этого рабочее пространство будет оставаться неизменным, пока вы не
          измените его вручную.
        </p>
        <Addition type="info">
          <ul>
            <li>
              В предыдущих версиях <mark className="app">Adobe After Effects</mark> такой
              опции нет. Чтобы она появилась, обновитесь до более свежей версии программы.
            </li>
            <li>
              В <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">25.X (2025)</mark> этот чекбокс находится в
              разделе <mark className="select">«General»</mark>.
            </li>
          </ul>
        </Addition>
        <ArticleMedia
          caption="Включаем сохранение текущего рабочего пространства при открытии разных проектов"
          src="legacy/aftereffects/enable_maintain_current_workspace.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="restore-timeline-columns"
        tag="переключатели, столбцы, колонки, timeline columns, switches"
        title="Как вернуть пропавшие переключатели и столбцы на таймлайне?"
      >
        <p>
          Если вы случайно скрыли нужные столбцы на таймлайне, не паникуйте. Чтобы вернуть
          их, нажмите <mark className="key">ПКМ</mark> по их заголовкам и в разделе{" "}
          <mark className="select">«Columns»</mark> контекстного меню отметьте нужные
          пункты.
        </p>
        <p>
          В качестве альтернативы вы можете воспользоваться четырьмя кнопками в левом
          нижнем углу таймлайна: они позволяют быстро включать и отключать определённые
          столбцы.
        </p>
        <ArticleMedia
          caption="Включение столбцов на таймлайне"
          src="legacy/aftereffects/enable_timeline_columns.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="timeline-cache-indicators"
        tag="таймлайн, предпросмотр, кэширование, оперативная память, дисковый кэш"
        title="Что означают зелёная и синяя полосы на таймлайне?"
      >
        <p>
          Каждый, кто хоть раз работал в <mark className="app">Adobe After Effects</mark>,
          замечал на таймлайне зелёные или синие полосы, которые то появляются, то
          пропадают. Эти индикаторы показывают состояние кадров: отрендерены ли они и где
          находятся: в оперативной памяти или в дисковом кэше.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/green-blue_lines.png"
          type="image"
        />
        <ul>
          <li>
            <p>
              <mark className="select">Зелёная линия</mark> показывает кадры композиции,
              которые были кэшированы в оперативную память и готовы к воспроизведению.
              Этот промежуток может как расширяться в зависимости от количества
              отрендеренных кадров, так и сужаться из-за нехватки оперативной памяти,
              поскольку программа может выгрузить эти кадры в дисковый кэш или удалить их.
            </p>
            <Addition type="warning">
              В отличие от классических нелинейных редакторов, например{" "}
              <mark className="app">Adobe Premiere</mark> или{" "}
              <mark className="app">DaVinci Resolve</mark>,{" "}
              <mark className="app">Adobe After Effects</mark> не рассчитан на
              предпросмотр в реальном времени, поэтому кадры всегда стоит предварительно
              кэшировать. Для этого включите в окне{" "}
              <mark className="select">«Preview»</mark> два параметра:{" "}
              <mark className="select">«Cache Before Playback»</mark> и{" "}
              <mark className="select">«If Caching, play cached frames»</mark>.{" "}
              <a href="#preview-laggy">Подробнее...</a>
            </Addition>
          </li>
          <li>
            <p>
              <mark className="select">Синяя линия</mark> означает промежуток кадров,
              записанных в дисковый кэш. Они остаются доступными даже после перезапуска
              программы, если кэш не был очищен. При попытке воспроизвести их из дискового
              кэша кадры перемещаются<sup>1</sup> обратно в оперативную память и
              проигрываются оттуда. Если дисковый кэш отключён, этот цвет на таймлайне не
              появляется.
            </p>
            <Addition type="info">
              <p>
                <sup>1</sup> В <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">25.2 (2025)</mark> и выше добавили функцию
                воспроизведения предпросмотра напрямую из дискового кэша, минуя
                оперативную память, — как в обычном видеопроигрывателе. В таком случае
                зелёная полоса будет означать промежуток, готовый к воспроизведению. Если
                дисковый кэш включён, эта опция активна по умолчанию. Включить или
                выключить её можно в{" "}
                <mark className="select">
                  «Edit» → «Preferences» → «Disk» → «Enable Preview from Disk Cache»
                </mark>
                <sup>2</sup>. При использовании данной опции желательно иметь быстрый
                накопитель.
              </p>
              <Addition type="info">
                <sup>2</sup> В предыдущих версиях{" "}
                <mark className="app">Adobe After Effects</mark> этот параметр находится в
                разделе <mark className="select">«Media & Disk Cache»</mark>.
              </Addition>
            </Addition>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="change-time-display-format"
        tag="альтернативный таймкод, формат времени, time display, frame count"
        title="Как изменить вид отсчёта времени на таймлайне?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> доступно два вида отображения
          времени на таймлайне: в формате ЧЧ:ММ:СС:КК (где Ч — часы, М — минуты, С —
          секунды и К — кадры) или просто по номерам кадров. Переключиться между этими
          режимами можно, кликнув по таймкоду с зажатой клавишей{" "}
          <mark className="key">Ctrl</mark>.
        </p>
        <ArticleMedia
          caption="Изменение вида отображения времени на таймлайне"
          src="legacy/aftereffects/alternate_timecode_style.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="hidden-layers-shy"
        tag="shy layer switch, скрытые слои, таймлайн, видимость слоёв, hidden layers, layer visibility"
        title="Почему я не вижу некоторые слои на таймлайне, хотя они есть в композиции?"
      >
        <p>
          Таким вопросом можно задаться при работе с чужим проектом или шаблоном. Автор
          мог скрыть некоторые слои на таймлайне с помощью функции{" "}
          <mark className="select">«Shy»</mark>, чтобы они не мешали.
        </p>
        <p>
          Включить или выключить отображение скрытых слоёв можно на панели инструментов
          таймлайна с помощью соответствующей иконки. Сделать слой скрытым можно с помощью
          переключателя на самом слое.
        </p>
        <ArticleMedia
          caption="Работа со скрытыми слоями"
          src="legacy/aftereffects/toggle_shy.mp4"
          type="video"
        />
        <Addition type="info">
          Если вы не видите нужные переключатели у слоя, включите столбец{" "}
          <mark className="select">«Switches»</mark>, нажав первую иконку в левом нижнем
          углу таймлайна.
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="last-frame-problem"
        tag="плейхед, cti, последний кадр, таймкод, playhead, current time indicator"
        title="Почему я не могу поставить метку текущего времени в самый конец композиции?"
      >
        <p>
          <mark className="select">«Current Time Indicator»</mark>, или{" "}
          <mark className="select">«индикатор текущего времени»</mark>, показывает
          содержимое, расположенное справа от него.{" "}
          <mark className="app">Adobe After Effects</mark> выделяет кадр, который в данный
          момент отображается в предпросмотре, подсветкой по всей высоте таймлайна.
          Переместив <mark className="select">«CTI»</mark> максимально вправо или нажав
          клавишу <mark className="key">End</mark>, вы перейдёте в конец композиции —
          дальше перемещать его уже некуда.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/last_frame_problem.png"
          type="image"
        />
        <p>
          Композиция из примера на скриншоте длится 30 секунд с частотой 25 FPS. Последний
          кадр для этой композиции — это 00:29:24, или 749-й кадр. На 750-м кадре вы
          ничего не увидите, так как отсчёт кадров, как и в массивах многих языков
          программирования, идёт с нуля, а не с единицы. Всего в композиции действительно{" "}
          750 кадров, но они нумеруются от 0 до 749. Вы, конечно, можете вручную
          установить <mark className="select">«Current Time Indicator»</mark> на один кадр
          после конца композиции. Только в предпросмотре вы ничего не увидите, потому что
          композиция уже закончилась.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-current-time-indicator-stuck"
        tag="current time indicator stuck, cti, плейхед зависает, баг"
        title="Почему красная линия воспроизведения на таймлайне иногда останавливается?"
      >
        <p>
          Предположим, вы начали кэширование предпросмотра, и в какой-то момент индикатор
          текущего времени внезапно останавливается. При этом может зависнуть сам
          предпросмотр — он перестаёт реагировать на его увеличение или перемещение{" "}
          <mark className="select">«Current Time Indicator»</mark>.
        </p>
        <p>
          Этот баг может появиться в любой версии программы, даже на чистой и лицензионной
          без сторонних плагинов и скриптов. Он может возникать при одновременной работе{" "}
          <mark className="app">Adobe After Effects</mark> и{" "}
          <mark className="app">Adobe Premiere</mark>, а также при использовании{" "}
          <mark className="plugin">Dynamic Link</mark>.
        </p>
        <Addition type="warning">
          Приведённый ниже способ не всегда может помочь и не гарантирует устранение
          зависания индикатора предпросмотра.
        </Addition>
        <ContentFilter
          macContent={
            <>
              <p>
                Чтобы попытаться решить проблему, попробуйте установить значение{" "}
                <mark className="select">«false»</mark> для параметра{" "}
                <mark className="select">«PreviewPlaybackOptimization»</mark> в консоли.
                Для этого откройте консоль с помощью комбинации клавиш{" "}
                <mark className="key">Control + F12</mark>, переключитесь на вид{" "}
                <mark className="select">«Debug Database View»</mark> и снимите флажок
                напротив <mark className="select">«PreviewPlaybackOptimization»</mark>.
                После этого перезагрузите программу и попробуйте снова закэшировать и
                проиграть предпросмотр.
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
              Чтобы попытаться решить проблему, попробуйте установить значение{" "}
              <mark className="select">«false»</mark> для параметра{" "}
              <mark className="select">«PreviewPlaybackOptimization»</mark> в консоли. Для
              этого откройте консоль с помощью комбинации клавиш{" "}
              <mark className="key">Ctrl + F12</mark>, переключитесь на вид{" "}
              <mark className="select">«Debug Database View»</mark> и снимите флажок
              напротив <mark className="select">«PreviewPlaybackOptimization»</mark>.
              После этого перезагрузите программу и попробуйте снова закэшировать и
              проиграть предпросмотр.
            </p>
          }
        />
        <ArticleMedia
          caption="Отключаем «PreviewPlaybackOptimization» в консоли программы"
          src="legacy/aftereffects/disable_previewplaybackoptimization.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="show-layer-controls"
        tag="границы слоёв, предпросмотр, траектория движения, layer controls, mask visibility, motion path"
        title="Как включить отображение манипуляторов слоёв в предпросмотре?"
      >
        <Divider>
          Включаем <mark className="select">«Show Layer Controls»</mark>
        </Divider>
        <p>
          В предпросмотре композиции у слоёв отображаются их манипуляторы, но при
          случайном нажатии каких-либо клавиш они могут исчезнуть. Чтобы вернуть
          отображение границ и манипуляторов слоёв, откройте меню{" "}
          <mark className="select">«View»</mark> и включите опцию{" "}
          <mark className="select">«Show Layer Controls»</mark> или воспользуйтесь
          комбинацией клавиш <mark className="key">Ctrl + Shift + H</mark>.
        </p>
        <ArticleMedia
          caption="Composition"
          src="legacy/aftereffects/show_layer_controls.png"
          type="image"
        />
        <Divider>Включаем видимость границ фигур</Divider>
        <p>
          Если вы не видите выделение фигуры маски или фигуры — нажмите на иконку{" "}
          <mark className="select">«Toggle Mask and Shape Path Visibility»</mark>,
          находящуюся внизу окна предпросмотра, или включите параметр{" "}
          <mark className="select">«Masks»</mark> в{" "}
          <mark className="select">«View Options»</mark>.
        </p>
        <ArticleMedia
          caption="Composition"
          src="legacy/aftereffects/toggle_mask_and_shape_path_visibility.png"
          type="image"
        />
        <Divider>
          Проверяем окно <mark className="select">«View Options»</mark>
        </Divider>
        <p>
          Если с включёнными опциями выше вы всё ещё не видите то, что вам нужно, —
          проверьте настройки <mark className="select">«View Options»</mark>, которые
          открываются комбинацией клавиш <mark className="key">Ctrl + Alt + U</mark>. В
          этом окне установите флажки рядом со всеми параметрами или только нужными.
        </p>
        <ArticleMedia
          caption="View Options"
          src="legacy/aftereffects/view_options.png"
          type="image"
        />
        <Divider>Увеличиваем промежуток отображения анимации движения</Divider>
        <p>
          Если вы не видите путь движения объекта или он слишком короткий — измените
          область времени его отображения, открыв{" "}
          <mark className="select">«Edit» → «Preferences» → «Appearance»</mark>
          <sup>1</sup>. В разделе <mark className="select">«Motion Path»</mark> по
          умолчанию длина пути ограничена 15 секундами. Если вы хотите отобразить
          траекторию по всей длине анимации, установите значение{" "}
          <mark className="select">«All Keyframes»</mark>. Также вы можете вовсе отключить
          показ траектории.
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«Display»</mark>.
        </Addition>
        <ArticleMedia
          caption="Изменяем длину отображения пути движения"
          src="legacy/aftereffects/change_motion_path_range.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="preview-zoom"
        tag="масштаб, предпросмотр, зум, плавное масштабирование, preview zoom, magnification"
        title="Как установить свой процент масштабирования в окне предпросмотра?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.3 (2025)</mark> и выше добавили функцию плавного
          масштабирования, а также возможность указывать нужный коэффициент прямо в окне
          предпросмотра. Он больше не ограничивается фиксированными значениями, такими как
          33%, 50% или 100%, поэтому можно масштабировать до любого десятичного значения —
          с помощью «интерактивного» текста или колёсика прокрутки.
        </p>
        <ArticleMedia
          caption="Демонстрация плавного зумирования"
          src="legacy/aftereffects/smooth_zoom_demonstration.mp4"
          type="video"
        />
        <p>
          Если вам не нравится, как работает новый механизм увеличения предпросмотра, — вы
          можете его отключить и вернуть старый вариант. Для этого откройте{" "}
          <mark className="select">«Edit» → «Preferences» → «Previews»</mark> и в разделе{" "}
          <mark className="select">«Magnification»</mark> измените значение параметра{" "}
          <mark className="select">«Type»</mark> на{" "}
          <mark className="select">«Legacy»</mark>. Также в этом разделе можно настроить,
          с какого места увеличивать предпросмотр — от центра композиции или от точки
          положения курсора.
        </p>
        <ArticleMedia
          caption="Настраиваем тип увеличения предпросмотра"
          src="legacy/aftereffects/magnification_settings.png"
          type="image"
        />
        <Divider>Увеличиваем предпросмотр через ae-zoom</Divider>
        <p>
          Если вы используете более старую версию программы, воспользуйтесь сторонним
          плагином <mark className="plugin">ae-zoom</mark>, который добавляет окно с
          плавной регулировкой масштаба в предпросмотре. Скачать его можно на{" "}
          <a href="https://github.com/QuisPic/ae-zoom/releases">
            странице релизов в GitHub
          </a>
          .
        </p>
        <ArticleMedia
          caption="Демонстрация плагина ae-zoom"
          src="legacy/ae-zoom_demonstration.webm"
          type="video"
        />
        <ContentFilter
          macContent={
            <>
              <ul>
                <li>
                  Чтобы установить это расширение, перенесите файл{" "}
                  <mark className="file">ZOOM.JSX</mark> из архива в стандартную папку для
                  скриптов —{" "}
                  <mark className="path">
                    Library/Applications/Adobe After Effects 20XX/Scripts/
                  </mark>
                  .
                </li>
                <li>
                  Затем перенесите <mark className="file">ZOOM.PLUGIN</mark> из папки
                  архива <mark className="path">Plug-in/macOS</mark> в общую папку для
                  плагинов —{" "}
                  <mark className="path">
                    /Library/Application Support/Adobe/Common/Plug-ins/7.0/MediaCore
                  </mark>
                  .
                </li>
              </ul>
            </>
          }
          windowsContent={
            <>
              <ul>
                <li>
                  Чтобы установить это расширение, перенесите файл{" "}
                  <mark className="file">ZOOM.JSX</mark> из архива в стандартную папку для
                  скриптов —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files\Scripts\
                  </mark>
                  .
                </li>
                <li>
                  Затем перенесите <mark className="file">ZOOM.AEX</mark> из папки архива{" "}
                  <mark className="path">Plug-in/Windows</mark> в общую папку для плагинов
                  —{" "}
                  <mark className="path">
                    C:\Program Files\Adobe\Common\Plug-ins\7.0\MediaCore
                  </mark>
                  .
                </li>
              </ul>
            </>
          }
        />
        <p>
          После установки вы сможете открыть окно для увеличения в{" "}
          <mark className="select">«File» → «Scripts»</mark> и регулировать масштаб. Если
          вы хотите, чтобы окно для масштабирования можно было прикрепить, переместите{" "}
          <mark className="file">ZOOM.JSX</mark> в дочернюю папку{" "}
          <mark className="path">ScriptUI Panels</mark>. Тогда скрипт будет открываться из
          меню <mark className="select">«Window»</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="3d-views"
        tag="3д, проекция, предпросмотр, camera views, 3d view, viewport"
        title="Где найти «Front View», «Current Camera» и другие варианты отображения камеры?"
      >
        <p>
          Если в вашей композиции нет камеры и ни один слой не преобразован в трёхмерный,
          эти кнопки будут скрыты из-за ненадобности. Чтобы они появились, в композиции
          должно быть соблюдено хотя бы одно из условий: создана камера, применён любой
          эффект, работающий в трёхмерном пространстве, например{" "}
          <mark className="plugin">CC Particle World</mark> или{" "}
          <mark className="plugin">Trapcode Particular</mark>, либо хотя бы один слой
          должен быть преобразован в трёхмерный.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/toggle_3d_layer.png"
          type="image"
        />
        <p>
          Если одно из условий соблюдено, то в окне предпросмотра появятся кнопки для
          переключения видов. Рядом вы можете переключить движок трёхмерного рендера,
          включить <mark className="select">«Draft 3D»</mark> или разделить предпросмотр
          на несколько видов.
        </p>
        <ArticleMedia
          caption="Composition"
          src="legacy/aftereffects/change_view.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="bezier-handles"
        tag="bezier handles, separate dimensions, value speed graph, graph editor, интерполяция, кривые безье, keyframe interpolation, редактор графиков, разделить оси"
        title="Почему у меня пропали направляющие Безье?"
      >
        <p>
          Новичок, недавно открывший программу, может случайно нажать что-то не то, из-за
          чего могут пропасть важные элементы для создания анимации или фигур.
        </p>
        <Divider>Разбираемся с графиками скорости</Divider>
        <ContentFilter
          macContent={
            <>
              <p>
                Если вы пытаетесь отредактировать график скорости какого-либо атрибута,
                сначала убедитесь, что вы выделили нужные ключевые кадры и нажали клавишу{" "}
                <mark className="key">F9</mark> для применения{" "}
                <mark className="select">«Easy Ease»</mark>.
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
              Если вы пытаетесь отредактировать график скорости какого-либо атрибута,
              сначала убедитесь, что вы выделили нужные ключевые кадры и нажали клавишу{" "}
              <mark className="key">F9</mark> для применения{" "}
              <mark className="select">«Easy Ease»</mark>.
            </p>
          }
        />
        <p>
          Также вы можете проверить значение{" "}
          <mark className="select">«Temporal Interpolation»</mark> для выделенных ключевых
          кадров в окне <mark className="select">«Keyframe Interpolation»</mark>, которое
          открывается комбинацией клавиш <mark className="key">Ctrl + Alt + K</mark>.
          Убедитесь, что там установлено <mark className="select">«Bezier»</mark>. В
          режимах <mark className="select">«Linear»</mark> или{" "}
          <mark className="select">«Hold»</mark> изменить график значения нельзя.
        </p>
        <ArticleMedia
          caption="Keyframe Interpolation"
          src="legacy/aftereffects/temporal_interpolation_bezier.png"
          type="image"
        />
        <p>
          Если вы попытаетесь отредактировать график скорости параметра с несколькими
          значениями в массиве, например <mark className="select">«Position»</mark> или{" "}
          <mark className="select">«Anchor Point»</mark>, в режиме{" "}
          <mark className="select">«Value Graph»</mark>, то у вас попросту не получится
          это сделать. В таком случае есть два варианта решения этой проблемы: придётся
          либо разделить значения через{" "}
          <mark className="select">«Separate Dimensions»</mark>, если это возможно, либо
          переключиться на вид графика <mark className="select">«Speed Graph»</mark>.
        </p>
        <Divider>Делим значения положения</Divider>
        <p>
          Чтобы разделить значения у <mark className="select">«Position»</mark> — нажмите{" "}
          <mark className="key">ПКМ</mark> по атрибуту и выберите{" "}
          <mark className="select">«Separate Dimensions»</mark>.
        </p>
        <ArticleMedia
          caption="Разделение атрибутов положения на X и Y"
          src="legacy/aftereffects/separate_dimensions.mp4"
          type="video"
        />
        <Divider>Изменение вида графика скорости</Divider>
        <ContentFilter
          macContent={
            <>
              <p>
                Если разделить значения нужного параметра не получается или вы не хотите
                этого делать, придётся переключиться на другой вид графика: с{" "}
                <mark className="select">«Value Graph»</mark> на{" "}
                <mark className="select">«Speed Graph»</mark>. Чтобы это сделать —
                откройте <mark className="select">«Graph Editor»</mark> с помощью
                комбинации клавиш <mark className="key">Shift + F3</mark> или
                соответствующей кнопки на таймлайне, вызовите контекстное меню и выберите
                нужный вариант.
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
              Если разделить значения нужного параметра не получается или вы не хотите
              этого делать, придётся переключиться на другой вид графика: с{" "}
              <mark className="select">«Value Graph»</mark> на{" "}
              <mark className="select">«Speed Graph»</mark>. Чтобы это сделать — откройте{" "}
              <mark className="select">«Graph Editor»</mark> с помощью комбинации клавиш{" "}
              <mark className="key">Shift + F3</mark> или соответствующей кнопки на
              таймлайне, вызовите контекстное меню и выберите нужный вариант.
            </p>
          }
        />
        <ArticleMedia
          caption="Изменение вида графика скорости"
          src="legacy/aftereffects/change_graph_view.mp4"
          type="video"
        />
        <Divider>Возвращаем «усики» в пространстве</Divider>
        <p>
          Если вы хотите изменять плавность траектории движения объекта в окне
          предпросмотра, нужно изменить тип пространственной интерполяции для ключей. Для
          этого выделите нужные ключевые кадры и нажмите комбинацию клавиш{" "}
          <mark className="key">Ctrl + Alt + K</mark>. В открывшемся окне в параметре{" "}
          <mark className="select">«Spatial Interpolation»</mark> выберите значение{" "}
          <mark className="select">«Bezier»</mark> или другой тип кривой Безье. После
          этого вы сможете изменять траекторию движения в предпросмотре.
        </p>
        <ArticleMedia
          caption="Изменение типа пространственной интерполяции"
          src="legacy/aftereffects/change_spatial_interpolation.mp4"
          type="video"
        />
        <Addition type="info">
          <p>
            Если вы не видите путь движения объекта или он слишком короткий, измените
            область времени его отображения, открыв{" "}
            <mark className="select">«Edit» → «Preferences» → «Appearance»</mark>
            <sup>1</sup> и установив значение{" "}
            <mark className="select">«All Keyframes»</mark>. Также убедитесь, что у вас
            включено отображение манипуляторов слоя с помощью комбинации клавиш{" "}
            <mark className="key">Ctrl + Shift + H</mark>.
          </p>
          <Addition type="info">
            <sup>1</sup> В предыдущих версиях{" "}
            <mark className="app">Adobe After Effects</mark> этот параметр находится в
            разделе <mark className="select">«Display»</mark>.
          </Addition>
        </Addition>
        <Divider>Возвращаем манипуляторы при создании шейпов</Divider>
        <p>
          При создании фигур с помощью пера может пропасть возможность изменения изгиба
          при зажатии <mark className="key">ЛКМ</mark> и перемещении курсора. Скорее
          всего, вы случайно включили функцию{" "}
          <mark className="select">«Roto Bezier»</mark>, которая автоматически искривляет
          линию в зависимости от расположения точек. Эту функцию можно отключить на панели
          инструментов, сняв соответствующий флажок.
        </p>
        <Addition type="info">
          Для конвертирования типа вершины воспользуйтесь инструментом{" "}
          <mark className="select">«Convert Vertex Tool»</mark>. Он активирует «усики» у
          фигур, созданных без помощи <mark className="select">«Roto Bezier»</mark>.
        </Addition>
        <ArticleMedia
          caption="Демонстрация работы «Roto Bezier»"
          src="legacy/aftereffects/rotobezier_demo.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="change-graph-editor-view"
        tag="graph editor, speed graph, value graph, отображение графика, редкатор графиков, анимация, интерполяция, кривые безье"
        title="Почему мой редактор графика скорости не похож на тот, что показывают в уроках?"
      >
        <ContentFilter
          macContent={
            <>
              <p>
                Скорее всего, у вас включён другой вид отображения графика скорости.
                Попробуйте изменить его на <mark className="select">«Value Graph»</mark>{" "}
                или <mark className="select">«Speed Graph»</mark> в зависимости от задачи.
                Для этого откройте <mark className="select">«Graph Editor»</mark> (клавиши{" "}
                <mark className="key">Shift + F3</mark> или кнопка на таймлайне), вызовите
                контекстное меню и выберите нужный вид графика.
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
              Скорее всего, у вас включён другой вид отображения графика скорости.
              Попробуйте изменить его на <mark className="select">«Value Graph»</mark> или{" "}
              <mark className="select">«Speed Graph»</mark> в зависимости от задачи. Для
              этого откройте <mark className="select">«Graph Editor»</mark> (клавиши{" "}
              <mark className="key">Shift + F3</mark> или кнопка на таймлайне), вызовите
              контекстное меню и выберите нужный вид графика.
            </p>
          }
        />
        <ArticleMedia
          caption="Изменение вида графика скорости"
          src="legacy/aftereffects/change_graph_view.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="roto-brush-update"
        tag="roto brush, ротобраш"
        title="Что случилось с инструментами для ротоскопирования в Adobe After Effects 26.2 (2026) и выше?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">26.2 (2026)</mark> и выше обновили функционал{" "}
          <mark className="plugin">Roto Brush</mark>. В него добавили новые инструменты{" "}
          <mark className="select">«Quick Matte Tool»</mark> для быстрого создания масок и{" "}
          <mark className="select">«Quick Selection Tool»</mark>, как это было реализовано
          в <mark className="app">Adobe Premiere</mark>{" "}
          <mark className="version">26.0 (2026)</mark>.
        </p>
        <p>
          Привычные инструменты <mark className="plugin">Roto Brush</mark>, которые
          некоторые пользователи «потеряли» в интерфейсе программы, переименовали в{" "}
          <mark className="select">«Selection Brush Tool»</mark> и{" "}
          <mark className="select">«Refine Edge Tool»</mark>, а основному инструменту
          изменили иконку.
        </p>
        <ArticleMedia
          caption="Обновлённые инструменты для ротоскопирования"
          src="media/after-effects/interface/rotobrush-tools-26.2.png"
          type="image"
        />
        <Addition type="info">
          Дополнительную информацию об этом обновлении можно прочитать на{" "}
          <a href="https://helpx.adobe.com/after-effects/desktop/roto-brush-and-refine-matte/roto-brush/object-matte.html">
            сайте Adobe
          </a>
          .
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="track-matte-update"
        tag="trkmat, track matte, alpha matte, luma matte, обтравочные маски, matte options, compositing, маска по альфе, маска по яркости, подложка, обновление интерфейса"
        title="Что случилось с «Alpha Matte» и «Luma Matte» в Adobe After Effects 23.0 (2023) и выше?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">23.0 (2023)</mark> и выше работа с{" "}
          <mark className="select">«Track Matte»</mark> была переосмыслена. Выбор режимов{" "}
          <mark className="select">«Alpha»</mark> и <mark className="select">«Luma»</mark>{" "}
          вместе с инверсией заменили на компактные иконки, а привязка стала удобнее:
          теперь один слой-маску можно использовать сразу для нескольких слоёв.
        </p>
        <p>
          Это обновление упростило работу с <mark className="select">«Track Matte»</mark>,
          но вызвало путаницу в обучающих материалах. Старые уроки могут быть непонятны
          пользователям новых версий программы и наоборот. Если вы учитесь по старым
          урокам, адаптируйтесь к изменениям или поищите актуальные видео, записанные в
          последних версиях <mark className="app">Adobe After Effects</mark>.{" "}
          <em className="article-note-muted">
            Или установите ту же версию программы, что демонстрируется на видео.
          </em>
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
      </DetailsSummary>
      <DetailsSummary
        anchor="show-3d-camera-tracker-points"
        tag="3d camera tracker, трекер камеры, точки трекинга, point visibility"
        title="Почему точки для прикрепления объекта не отображаются в 3D Camera Tracker?"
      >
        <p>
          Скорее всего, вы скрыли отображение границ слоёв и их манипуляторов в окне
          предпросмотра. Чтобы их вернуть, нажмите комбинацию клавиш{" "}
          <mark className="key">Ctrl + Shift + H</mark> или включите{" "}
          <mark className="select">«Show Layer Controls»</mark> в{" "}
          <mark className="select">«View»</mark>. Точки будут отображаться и выделяться,
          если на панели <mark className="select">«Effect Controls»</mark> выделен сам
          эффект <mark className="plugin">3D Camera Tracker</mark>.
        </p>
        <Addition type="info">
          Если вам нужно принудительно отобразить точки трекинга, включите функцию{" "}
          <mark className="select">«Render Track Points»</mark> в настройках эффекта.
          <ArticleMedia
            caption="Effects Controls"
            src="legacy/aftereffects/render_track_points.png"
            type="image"
          />
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="show-audio-waveform"
        tag="waveform, аудио, звуковая волна, аудиослой, audio visualization, sound wave, audio layer"
        title="Как включить отображение звуковой волны у аудиослоя?"
      >
        <p>
          Если вам нужно отобразить звуковую волну у слоя, чтобы расставить маркеры или
          для других целей — просто выделите нужный слой со звуком и дважды нажмите
          клавишу <mark className="key">L</mark>. Это раскроет параметр{" "}
          <mark className="select">«Waveform»</mark>, который вы можете растянуть по
          высоте, потянув за его нижний край.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/show_waveform.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fx-console"
        tag="fx console, ctrl space, быстрое применение эффектов, плагин, эффекты, quick effects, command palette"
        title="Как включить всплывающую панель для применения эффектов по Ctrl + Space?"
      >
        <Addition type="info">
          Начиная с <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">26.2 (2026)</mark> и выше, часть функционала{" "}
          <mark className="plugin">FX Console</mark> теперь может быть заменена новым
          окном <mark className="select">«Quick Apply»</mark>, вызываемая с помощью
          комбинации клавиш <mark className="key">Ctrl + Enter</mark>.{" "}
          <a href="https://helpx.adobe.com/after-effects/desktop/animate-in-after-effects/animation-keyframes/quick-apply.html">
            Подробнее...
          </a>
        </Addition>
        <p>
          <mark className="key">Ctrl + Space</mark> для открытия панели применения
          эффектов не является встроенной функцией{" "}
          <mark className="app">Adobe After Effects</mark>. За него отвечает стороннее
          дополнение{" "}
          <a href="https://www.videocopilot.net/blog/?s=fx%20console">FX Console</a>. С
          его помощью действительно можно быстро применить эффект к выделенному слою,
          нажав указанную комбинацию клавиш. Кроме того, плагин позволяет быстро создавать
          скриншоты текущего кадра в файл или в буфер обмена.
        </p>
        <Addition type="info">
          Для создания скриншотов в полном разрешении включите параметр{" "}
          <mark className="select">«Full Resolution Screenshots»</mark> в настройках
          плагина. Там же можно переназначить комбинацию клавиш для его вызова.
        </Addition>
        <Addition type="warning">
          В сети встречаются жалобы на то, что при открытом окне{" "}
          <mark className="select">«Properties»</mark> панель{" "}
          <mark className="plugin">FX Console</mark> может открываться не с первого раза.
          Чтобы решить эту проблему — просто закройте или скройте это окно.
        </Addition>
        <ArticleMedia
          caption="Демонстрация плагина FX Console"
          src="legacy/aftereffects/fx_console_demonstration.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-auto-open-properties"
        tag="окно свойств слоя, properties window, auto-open panel"
        title="Как отключить автоматическое открытие окна «Properties»?"
      >
        <p>
          Окно <mark className="select">«Properties»</mark> появилось в{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">23.4 (2023)</mark> и выше. Однако не всем
          пользователям понравилось это нововведение, а некоторых раздражало, что окно
          открывается автоматически при выборе определённых инструментов.
        </p>
        <p>
          К счастью, автоматическое открытие окна свойств можно отключить, сняв флажок{" "}
          <mark className="select">«Auto-Open Panel»</mark> при выбранном инструменте,
          например <mark className="select">«Text»</mark> или{" "}
          <mark className="select">«Pen Tool»</mark>. При этом процедуру, возможно,
          придётся повторить для разных инструментов, так как один флажок не отключает
          автоматическое открытие окна во всех случаях.
        </p>
        <Addition type="info">
          Подробности о работе этого окна вы можете прочитать на{" "}
          <a href="https://helpx.adobe.com/after-effects/using/properties-panel.html">
            сайте Adobe
          </a>
          .
        </Addition>
        <ArticleMedia
          caption="Переключаем чекбокс автооткрытия панели"
          src="legacy/aftereffects/toggle_auto-open_panel.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="change-stock-label-colors"
        tag="цвет меток, слои, маркировка слоёв, label colors"
        title="Как изменить стандартные цвета меток для различных типов слоёв?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> всем типам слоёв
          присваивается определённый цвет. Иногда пользователю хочется сделать цвета слоёв
          более насыщенными или заменить их на свои. Чтобы это сделать, перейдите в
          настройки программы:{" "}
          <mark className="select">«Edit» → «Preferences» → «Labels»</mark>.
        </p>
        <p>
          Перед вами появятся две категории —{" "}
          <mark className="select">«Label Defaults»</mark> и{" "}
          <mark className="select">«Label Colors»</mark>. В первой вы можете задать для
          нужного типа слоя или маркера любой цвет из второй категории. Во второй
          категории можно изменить цвет и даже задать ему своё имя.
        </p>
        <ArticleMedia
          caption="Настраиваем стандартные цвета для слоёв"
          src="legacy/aftereffects/preferences_labels.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="change-color-picker"
        tag="color picker, системный выбор цвета, системная палитра, color palette"
        title="Почему у меня изменился интерфейс выбора цвета и как его вернуть?"
      >
        <p>
          Скорее всего, вы случайно установили флажок возле параметра, который позволяет
          программе использовать системное диалоговое окно выбора цвета. Чтобы вернуть
          стандартный для <mark className="app">Adobe After Effects</mark> вид, перейдите
          в <mark className="select">«Edit» → «Preferences» → «Appearance»</mark>
          <sup>1</sup> и уберите флажок возле параметра{" "}
          <mark className="select">«Use System Color Picker»</mark>. После этого при
          выборе цвета вернётся привычное окно.
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> эта кнопка находится в разделе{" "}
          <mark className="select">«General»</mark>.
        </Addition>
        <ArticleMedia
          caption="Отключаем системный выбор цвета"
          src="legacy/aftereffects/use_system_color_picker.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="change-accent-color"
        tag="акцентный цвет, консоль, тема, accent color, theme customization"
        title="Как изменить акцентный цвет интерфейса программы?"
      >
        <Addition type="danger">
          <ul>
            <li>
              Эта инструкция действительна только для версий{" "}
              <mark className="app">Adobe After Effects</mark> от{" "}
              <mark className="version">14.X (2017)</mark> до{" "}
              <mark className="version">24.X (2024)</mark>.
            </li>
            <li>
              После редизайна интерфейса в{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">25.0 (2025)</mark> и выше эта инструкция больше
              неактуальна: при включении параметра в консоли в настройках ничего не
              появится.
            </li>
          </ul>
        </Addition>
        <ContentFilter
          macContent={
            <>
              <p>
                Возможно, вы видели скриншоты, где у пользователей изменён акцентный цвет
                интерфейса. В <mark className="app">Adobe After Effects</mark> от{" "}
                <mark className="version">14.X (2017)</mark> до{" "}
                <mark className="version">24.X (2024)</mark> функцию изменения цвета
                интерфейса можно активировать через консоль. Для этого нажмите{" "}
                <mark className="key">Control + F12</mark>, введите приведённую ниже
                команду в режиме <mark className="select">«Console View»</mark> и нажмите{" "}
                <mark className="key">Enter</mark>.
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
              Возможно, вы видели скриншоты, где у пользователей изменён акцентный цвет
              интерфейса. В <mark className="app">Adobe After Effects</mark> от{" "}
              <mark className="version">14.X (2017)</mark> до{" "}
              <mark className="version">24.X (2024)</mark> функцию изменения цвета
              интерфейса можно активировать через консоль. Для этого нажмите{" "}
              <mark className="key">Ctrl + F12</mark>, введите приведённую ниже команду в
              режиме <mark className="select">«Console View»</mark> и нажмите{" "}
              <mark className="key">Enter</mark>.
            </p>
          }
        />
        <CodeSnippet>debug.set Enable_Theme_Colorizing=true</CodeSnippet>
        <Addition type="info">
          Переключать режимы консоли можно через контекстное меню в заголовке окна. Этот
          параметр доступен и в режиме{" "}
          <mark className="select">«Debug Database View»</mark>.
        </Addition>
        <ArticleMedia
          caption="Console"
          src="legacy/aftereffects/console_theme_colorizing.png"
          type="image"
        />
        <p>
          После успешного включения опции перейдите в настройки программы:{" "}
          <mark className="select">«Edit» → «Preferences» → «Appearance»</mark> и нажмите
          на кнопку <mark className="select">«Change Color»</mark>.
        </p>
        <ArticleMedia
          caption="Изменяем акцентный цвет"
          src="legacy/aftereffects/select_theme_color.png"
          type="image"
        />
        <p>
          В открывшейся цветовой палитре вы можете указать любой цвет. Желательно выбрать
          тот, который будет хорошо выделяться на фоне остального интерфейса. После выбора
          нужного цвета нажмите <mark className="select">«OK»</mark> — теперь вы можете
          наслаждаться «афтером не как у всех».
        </p>
        <Addition type="danger">
          Не рекомендуется выбирать слишком тёмные или чрезмерно насыщенные оттенки — это
          может затруднить восприятие некоторых элементов интерфейса.
        </Addition>
        <ArticleMedia
          caption="Change Color"
          src="legacy/aftereffects/theme_colorizing.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="full-dark-theme-interface"
        tag="windhawk, mica for everyone, dark theme, theme customization"
        title="Как изменить светлые участки интерфейса тёмными?"
      >
        <ContentFilter
          windowsContent={
            <>
              <Addition type="danger">
                <ul>
                  <li>
                    Эта инструкция ориентирована на опытных пользователей Windows, которые
                    понимают, что делают. Прежде чем ставить сторонние темы — создайте{" "}
                    <a href="https://remontka.pro/system-restore-points-windows-10/">
                      точку восстановления системы
                    </a>
                    . Все действия в статье были выполнены на Windows 11 24H2.
                  </li>
                  <li>
                    Стабильность работы системы и{" "}
                    <mark className="app">Adobe After Effects</mark> после установки
                    сторонних модификаций не гарантируется.
                  </li>
                </ul>
              </Addition>
            </>
          }
        />
        <p>
          Некоторых пользователей раздражает, что{" "}
          <mark className="app">Adobe After Effects</mark> использует системные элементы
          интерфейса Windows, которые не всегда гармонируют с интерфейсом программы —
          например, белая полоса меню, контекстное меню и рамка окна.
        </p>
        <ArticleMedia
          caption="«Проблемный» интерфейс Adobe After Effects на Windows"
          src="legacy/aftereffects/problem_windows_interface.png"
          type="image"
        />
        <p>
          К счастью, это можно частично исправить сторонними утилитами:{" "}
          <mark className="app">Mica For Everyone</mark> для изменения рамки окна и{" "}
          <mark className="app">Windhawk</mark> с модификацией{" "}
          <mark className="select">«Dark mode context menus»</mark>.
        </p>
        <Divider>
          Разбираемся с <mark className="app">Mica For Everyone</mark>
        </Divider>
        <p>
          <mark className="app">Mica For Everyone</mark> — утилита для принудительного
          изменения цвета рамок, типа скругления окон и эффекта размытия фона заголовка
          окна. Скачать и установить её можно с{" "}
          <a href="https://github.com/MicaForEveryone/MicaForEveryone/releases">
            страницы релизов на GitHub
          </a>
          .
        </p>
        <p>
          После запуска утилиты откроется окно с настройками стилей окон, где нужно
          добавить правило для <mark className="app">Adobe After Effects</mark>. Для этого
          в левом нижнем углу нажмите{" "}
          <mark className="select">«Add new rule» → «Add process rule»</mark>.
        </p>
        <Addition type="info">
          Рекомендую сразу убрать лишние встроенные правила, оставив только{" "}
          <mark className="select">«Global»</mark>. Для этого перейдите в каждое правило,
          нажмите <mark className="select">«Remove rule»</mark>.
        </Addition>
        <ArticleMedia
          caption="Mica For Everyone"
          src="legacy/micaforeveryone_add_process_rule.png"
          type="image"
        />
        <p>
          Затем в текстовом поле окна добавления правила введите{" "}
          <mark className="copy">AfterFX</mark> и нажмите{" "}
          <mark className="select">«Add rule»</mark>.
        </p>
        <ArticleMedia
          caption="Mica For Everyone"
          src="legacy/micaforeveryone_add_afterfx.png"
          type="image"
        />
        <p>
          Далее откройте правило <mark className="select">«AfterFX»</mark> и установите
          следующие параметры: для <mark className="select">«Title bar color»</mark>{" "}
          выберите <mark className="select">«Dark»</mark>, а для{" "}
          <mark className="select">«Backdrop type»</mark> —{" "}
          <mark className="select">«Mica»</mark> или{" "}
          <mark className="select">«None»</mark> в зависимости от предпочтений. При
          желании закругления окна можно убрать, установив в{" "}
          <mark className="select">«Corner preference»</mark> значение{" "}
          <mark className="select">«Squared»</mark>.
        </p>
        <ArticleMedia
          caption="Mica For Everyone"
          src="legacy/micaforeveryone_afterfx_settings.png"
          type="image"
        />
        <p>
          После настройки стилей — не забудьте включить автоматический запуск утилиты при
          каждой перезагрузке Windows в{" "}
          <mark className="select">«App settings» → «Launch on startup»</mark>.
        </p>
        <ArticleMedia
          caption="Mica For Everyone"
          src="legacy/micaforeveryone_launch_on_startup.png"
          type="image"
        />
        <Divider>Включаем тёмное контекстное меню</Divider>
        <p>
          Следующий шаг — нужно установить <mark className="app">Windhawk</mark>, который
          вы можете найти на <a href="https://windhawk.net/">сайте проекта</a>. После его
          установки нужно найти модификацию{" "}
          <mark className="copy">Dark mode context menus</mark> и установить его.
        </p>
        <ArticleMedia
          caption="Включаем модификацию на тёмное контекстное меню"
          src="legacy/enable_dark_mode_context_menus.mp4"
          type="video"
        />
        <p>
          После всех изменений и модификаций, откройте{" "}
          <mark className="app">Adobe After Effects</mark> и наслаждайтесь по-настоящему
          тёмной темой программы.
        </p>
        <ArticleMedia
          caption="«Решённый» интерфейс Adobe After Effects на Windows"
          src="legacy/aftereffects/solved_windows_interface.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="custom-splash-screen"
        tag="заставка, изображение запуска, resource hacker, dll, startup image, splash screen customization"
        title="Как изменить картинку во время запуска программы?"
      >
        <ContentFilter
          windowsContent={
            <>
              <Addition type="danger">
                <ul>
                  <li>
                    Эта инструкция ориентирована на опытных пользователей, которые
                    понимают, что делают. Действия с заменой файлов программы вы
                    совершаете на свой страх и риск!
                  </li>
                  <li>
                    Стабильность работы <mark className="app">Adobe After Effects</mark>{" "}
                    после замены изображения не гарантируется.
                  </li>
                  <li>
                    После обновления программы ваша картинка перезапишется на исходную.
                  </li>
                </ul>
              </Addition>
              <p>
                При запуске <mark className="app">Adobe After Effects</mark> вы видите
                картинку, созданную <mark className="company">Adobe</mark>, и, возможно,
                задумывались, что неплохо бы заменить её на свою. Такое можно сделать с
                помощью махинаций с файлами <mark className="file">DLL</mark>. Для этого
                нам пригодится программа <mark className="app">Resource Hacker</mark>,
                которую можно загрузить по{" "}
                <a href="https://angusj.com/resourcehacker/#download">этой</a> ссылке.
              </p>
              <Divider>Извлекаем изображения из DLL</Divider>
              <p>
                После открытия <mark className="app">Resource Hacker</mark> откройте в
                программе файл <mark className="file">AFTERFXLIB.DLL</mark>, находящийся
                по пути{" "}
                <mark className="path">
                  C:\Program Files\Adobe\Adobe After Effects 20XX\Support Files
                </mark>
                .
              </p>
              <ArticleMedia
                caption="Resource Hacker"
                src="legacy/aftereffects/resource_hacker_open_file.png"
                type="image"
              />
              <p>
                После открытия файла в левой части окна{" "}
                <mark className="app">Resource Hacker</mark> появятся папки. Откройте
                папку <mark className="path">PNG</mark>, найдите изображения с названиями{" "}
                <mark className="image">AE_SPLASH</mark>,{" "}
                <mark className="image">AE_SPLASH_AT_2X</mark> и{" "}
                <mark className="image">AE_SPLASH_AT_3TO2X</mark>, а затем извлеките их,
                нажав на каждом <mark className="key">ПКМ</mark> и выбрав{" "}
                <mark className="select">«Save *.png resource»</mark>. Укажите удобное вам
                место для сохранения.
              </p>
              <Addition type="info">
                Всего есть три файла, каждый из которых адаптирован под определённый
                масштаб дисплея. Вы можете заменить одно, два или все три изображения. По
                аналогии можно изменить изображение для окна{" "}
                <mark className="select">«About»</mark>, заменив файлы{" "}
                <mark className="image">AE_ABOUT</mark>,{" "}
                <mark className="image">AE_ABOUT_AT_2X</mark> и{" "}
                <mark className="image">AE_ABOUT_AT_3TO2X</mark>.
              </Addition>
              <ArticleMedia
                caption="Resource Hacker"
                src="legacy/aftereffects/resource_hacker_extract_file.png"
                type="image"
              />
              <p>
                Отредактировать извлечённый файл можно в любом редакторе изображений,
                например <mark className="app">Adobe Photoshop</mark>,{" "}
                <mark className="app">GIMP</mark> или{" "}
                <mark className="app">Adobe Illustrator</mark>. Главное — не менять размер
                изображения и сохранить его также в формате{" "}
                <mark className="image">PNG</mark>. Я же просто заменю в{" "}
                <mark className="app">Adobe Photoshop</mark> стандартное изображение на
                картинку с автомобилем Ford Focus и сохраню его в{" "}
                <mark className="image">PNG</mark>.
              </p>
              <ArticleMedia
                caption="Пример модификации изображения при загрузке Adobe After Effects"
                src="legacy/aftereffects/custom_splash_example.png"
                type="image"
              />
              <Divider>Заменяем изображения в DLL</Divider>
              <p>
                После редактирования изображения вернитесь в{" "}
                <mark className="app">Resource Hacker</mark>, выберите файл, который нужно
                заменить, и нажмите <mark className="key">Ctrl + R</mark>. В открывшемся
                окне нажмите на кнопку <mark className="select">«Select File»</mark>,
                выберите свой файл, а затем нажмите{" "}
                <mark className="select">«Replace»</mark>.
              </p>
              <ArticleMedia
                caption="Resource Hacker"
                src="legacy/aftereffects/resource_hacker_replace.png"
                type="image"
              />
              <p>
                После успешной замены сохраните изменения, нажав{" "}
                <mark className="key">Ctrl + S</mark>. Теперь при каждом запуске программы
                вы будете видеть свой шедевр.
              </p>
              <ArticleMedia
                caption="Пример изменённой плашки при открытии программы"
                src="legacy/aftereffects/custom_splash_opening.mp4"
                type="video"
              />
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="restore-preferences-after-crash"
        tag="21::31, preferences file is not valid, the file will be renamed with .old and a new preferences file will be created, error while accessing the preference files inside directory, please verify the file permissions and try again, сброс настроек, миграция настроек, восстановление параметров"
        title="Как восстановить настройки программы после сбоя системы?"
      >
        <div>
          <p>
            В редких случаях во время работы с{" "}
            <mark className="app">Adobe After Effects</mark> может произойти сбой системы.
            Если это случится в момент перезаписи файла настроек, он может повредиться.
            При следующем запуске <mark className="app">Adobe After Effects</mark>{" "}
            программа, скорее всего, выдаст ошибку чтения пользовательских настроек и
            сбросит их до заводских.
          </p>
          <ArticleMedia
            caption="Ошибка чтения файла настроек"
            src="legacy/aftereffects/preferences_file_is_not_valid.png"
            type="image"
          />
          <p>
            Если вы обновлялись с предыдущих версий{" "}
            <mark className="app">Adobe After Effects</mark> — попробуйте импортировать
            старые настройки. Для этого перейдите в{" "}
            <mark className="select">«Edit» → «Preferences» → «Startup & Repair»</mark> и
            нажмите кнопку{" "}
            <mark className="select">«Migrate Previous Version Preferences»</mark>. В
            открывшемся окне вы сможете выбрать, из какой версии{" "}
            <mark className="app">Adobe After Effects</mark> перенести настройки.
          </p>
          <ArticleMedia
            caption="Открываем окно переноса настроек из предыдущих версий программы"
            src="legacy/aftereffects/migrate_previous_version_preferences.png"
            type="image"
          />
          <p>
            Если предыдущих настроек нет, переименовывать файл, убирая суффикс{" "}
            <mark className="path">-old</mark>, бессмысленно, так как и он может быть
            повреждён. Советую периодически сохранять пользовательские настройки в
            отдельную папку или{" "}
            <a href="#configure-backup">
              настроить их синхронизацию с облачным хранилищем
            </a>
            . Чтобы открыть папку с настройками — нажмите на кнопку{" "}
            <mark className="select">«Reveal Preferences in Explorer»</mark> в{" "}
            <mark className="select">«Edit» → «Preferences» → «Startup & Repair»</mark>.
          </p>
        </div>
      </DetailsSummary>
    </div>
  );
};

export default AeInterface;
