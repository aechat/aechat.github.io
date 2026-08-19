import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import ContentFilter from "../../../components/content/ContentFilter";

import HostsAdobeModal from "../../../components/content/HostsAdobe";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const AeErrors: React.FC = () => {
  return (
    <div className="article-content">
      <Addition type="danger">
        <ul>
          <li>
            Пожалуйста, не ленитесь и внимательно читайте текст ошибки, который выдаёт
            программа. В большинстве случаев в её описании уже есть и причина, и возможное
            решение проблемы.
          </li>
          <li>
            Если у вас возникают трудности с чтением на английском языке,{" "}
            <a href="https://translate.yandex.ru/">воспользуйтесь переводчиком</a>.
          </li>
          <li>
            Если в этом разделе нет вашей ошибки, попробуйте найти решение в интернете,
            например, на профильных форумах.
          </li>
        </ul>
      </Addition>
      <DetailsSummary
        anchor="unlicensed-app"
        tag="bitte lies und akzeptiere die nutzungsbedingungen von adobe, door niet-gelicentieerde adobe-apps kan je apparaat worden blootgesteld aan extra beveilligingsrisico's, bu lisanssiz adobe uygulamasi orijinal olmadigindan yakinda devre disi birakilacak, deze app is gedeactiveerd, deze app wordt over dagen gedeactiveerd, deze niet-gelicentieerde adobe-app is degeactiveerd, dieses nicht lizenzierte adobe-programm wurde deaktiviert, dieses produkt wurde deaktiviert, cette application a ete desactivee, cette application adobe sans license a ete desactivee, profitez de sur les applications adobe authentiques, verhoog je productiviteit met legitieme adobe-apps, start your free trial of app, take advantage of discounts up to 40% off on genuine adobe replacement apps, this app has been disabled, this app will disable in days, this unlicensed adobe app is not genuine and will be disabled soon, unlicensed adobe apps may expose your device to increased security risks, vpn, white and red window, white screen, we can't verify your subscription status, we can't reach the adobe servers, this may be because you're not connected to the internet, error code 12014, sorry this app is not available, to continue using this app check your internet connection firewall or ad blocker settings, replace unlicensed apps with genuine adobe apps, when adobe identifies unlicensed adobe apps on your device it disables them after a brief grace period, unlicensed apps can have flaws that disrupt productivity and cause damage to your device, buy a genuine adobe app at a discount to get the latest features and functionality including security updates, please read and accept the adobe general terms of use, veuillez lire et accepter les conditions d'utilisation d'adobe, pour continuer a utiliser cette application vlus devez lire et accepter nos conditions d'utilisation, vouk pouvez quitter l'applicaton maintenant mais ce message s'affichera a nouveau jusqu'a ce que vous les ayez acceptees, to continue using application you must read and accept our terms of use, you can exit the app now but this message will re-appear until it is accepted, блокировка доступа в интернет, lutfen adobe genel kullanim kosullari'ni okuyun ve kabul edin, uygulamayi kullanmaya devam etmek icin kullanim kosullarimizi okuyup kabul etmeniz gerekir, uygulamadan simdi cikabilirsiniz ancak bu mesaj, kullanim kosullari kabul edilene kadar yeniden gorunur, bu uygulama 5 gun sonra devre disi birakilacak, bu lisanssiz adobe uygulamasi orijinal olmadigindan yakinda devre disi birakilacak, adobe indirimli olarak orijinal bir adobe uygulamasina gecmeniz ve lisanssiz adobe uygulamalarini kaldirmaniz icin size 5 gunluk bir sure sunar, youre using an unlicensed adobe app, you will lose access to this app in 5 days, виртуальная частная сеть, файл хостс, не запускается, не удается проверить статус вашей подписки, не удается подключиться к серверам adobe, возможно у вас отсутствует подключение к интернету, код ошибки 12015, начните использовать бесплатную пробную версию, окно с красной полоской при запуске, пустое окно, слетела лицензия, белое и красное окно, белый экран, the unlicensed adobe app, adobe genuine, hosts, ошибка лицензии, красное окно"
        title="Как избавиться от «The unlicensed Adobe app has been disabled»?"
      >
        <p>
          Пользователи «народных» версий программ <mark className="company">Adobe</mark>{" "}
          иногда сталкиваются с ошибкой проверки лицензии. Она проявляется в виде
          небольшого окна на белом фоне с красной полосой сверху, а в редких случаях
          сопровождается полностью пустым белым окном или внезапным завершением работы
          программы. В этой статье мы разберём несколько способов избавиться от неё. Стоит
          учитывать, что эффективность каждого метода может различаться у разных
          пользователей.
        </p>
        <ArticleMedia
          caption="Adobe"
          src="legacy/adobe_the_unlicensed_app.png"
          type="image"
        />
        <Divider>Проверяем наличие VPN-соединения</Divider>
        <p>
          Для начала проверьте, не используете ли вы виртуальную частную сеть. С ростом
          популярности подключений через <mark className="app">VPN</mark> пользователи всё
          чаще сталкиваются с ошибкой лицензии, так как{" "}
          <mark className="app">Adobe After Effects</mark> после подключения к такой сети
          может получить доступ в интернет. В результате окно с сообщением о проблеме
          может внезапно появиться на языке той страны, к которой вы подключены.
        </p>
        <p>
          Проблема в том, что многие VPN-клиенты заставляют систему игнорировать правила
          брандмауэра и изменения в файле <mark className="file">HOSTS</mark>, из-за чего
          программы, которым ранее был заблокирован доступ в интернет, снова получают его.
          Если вы подключены к частной сети, разорвите соединение и запустите{" "}
          <mark className="app">Adobe After Effects</mark> снова, тогда окно должно
          исчезнуть.
        </p>
        <p>
          Если окно с ошибкой лицензии всё равно появляется, попробуйте полностью
          отключить интернет. Если при отключённом интернете сообщение не появляется,
          стоит проверить настройки сетевых соединений на устройстве.
        </p>
        <ContentFilter
          macContent={
            <>
              <Divider>Используем альтернативный способ активации</Divider>
              <p>
                Если вы используете релизы от <mark className="user">MONTER GROUP</mark>{" "}
                или другие — попробуйте перейти на метод активации программ с помощью{" "}
                <mark className="app">Adobe Activation Tool</mark>, предварительно удалив
                предыдущие установки программы через{" "}
                <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                  Adobe Creative Cloud Cleaner
                </a>
                .
              </p>
              <Addition type="info">
                <mark className="app">Adobe Activation Tool</mark> и инструкцию по
                активации программ от <mark className="company">Adobe</mark> с помощью
                этого инструмента вы можете найти в канале{" "}
                <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a>.
              </Addition>
              <Divider>Правим файл hosts</Divider>
              <p>
                Один из способов решения проблемы — отредактировать файл{" "}
                <mark className="file">HOSTS</mark>. Для этого перейдите в директорию{" "}
                <mark className="path">/private/etc</mark>, скопируйте файл{" "}
                <mark className="file">HOSTS</mark> в любое удобное место, откройте его в
                текстовом редакторе, например <mark className="app">TextEdit</mark> или{" "}
                <mark className="app">nano</mark>, и добавьте в конец файла строки из
                блока ниже. Затем сохраните файл и верните его в исходную папку с заменой.
              </p>
              <HostsAdobeModal />
              <ArticleMedia
                src="VcDYAbH6U_c"
                type="youtube"
              />
              <Divider>
                Блокируем доступ с помощью <mark className="app">Radio Silence</mark>
              </Divider>
              <p>
                Если редактирование файла <mark className="file">HOSTS</mark> не помогло,
                попробуйте воспользоваться программой{" "}
                <a href="https://radiosilenceapp.com/">Radio Silence</a>.
              </p>
              <ul>
                <li>
                  <p>
                    После её установки перейдите во вкладку{" "}
                    <mark className="select">«Network Monitor»</mark> и запретите доступ в
                    интернет всем процессам <mark className="company">Adobe</mark>,
                    нажимая кнопку <mark className="select">«Block»</mark> рядом с их
                    названиями.
                  </p>
                  <ArticleMedia
                    caption="Radio Silence"
                    src="legacy/network_radio_silence.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    После этого заблокированные приложения появятся во вкладке{" "}
                    <mark className="select">«Firewall»</mark> и больше не смогут
                    подключаться к сети.
                  </p>
                  <ArticleMedia
                    caption="Radio Silence"
                    src="legacy/firewall_radio_silence.png"
                    type="image"
                  />
                </li>
              </ul>
            </>
          }
          windowsContent={
            <>
              <Divider>Проверяем настройки вашего VPN-клиента</Divider>
              <p>
                Если вы не хотите отключаться от VPN — проверьте настройки вашего
                VPN-клиента. Если вы используете TUN — попробуйте временно перейти на
                режим системного прокси, так как TUN может менять маршрутизацию трафика и
                влиять на работу брандмауэра. Также проверьте наличие функции раздельного
                туннелирования или возможность добавления программ{" "}
                <mark className="company">Adobe</mark> в исключения — это позволит
                направлять их трафик вне виртуальной частной сети и обрабатывать его
                правилами брандмауэра.
              </p>
              <Divider>Правим файл hosts</Divider>
              <p>
                Если вы не используете VPN-клиенты, стоит перейти к другим способам
                решения проблемы — блокировке доступа программ в интернет. Первый из них —
                редактирование файла <mark className="file">HOSTS</mark>. Для этого
                перейдите в папку{" "}
                <mark className="path">C:\Windows\System32\drivers\etc</mark>, скопируйте
                файл <mark className="file">HOSTS</mark> в удобное место, откройте его в
                текстовом редакторе, например <mark className="app">Notepad++</mark>, и
                добавьте в конец файла строки из блока ниже. Затем сохраните файл и
                верните его в исходную папку с заменой.
              </p>
              <HostsAdobeModal />
              <ArticleMedia
                src="wHhay41ocsc"
                type="youtube"
              />
              <Divider>Создаём новые правила в брандмауэре Защитника Windows</Divider>
              <Addition type="warning">
                <ul>
                  <li>
                    Прежде чем создавать правила в брандмауэре, убедитесь, что он включён.
                    При выключенном брандмауэре правила блокировки не будут применяться.{" "}
                    <a href="https://www.youtube.com/watch?v=goqsVsTMeRU">
                      Как его включить?
                    </a>
                  </li>
                  <li>
                    Расширения, плагины и скрипты, требущие доступ в интернет, могут
                    работать некорректно после внесения правил в брандмауэре.
                  </li>
                </ul>
              </Addition>
              <Addition type="info">
                Если вы устанавливали репаки от <mark className="user">KpoJIuK</mark> или{" "}
                <mark className="user">m0nkrus</mark>, то правила для блокировки доступа
                программ в интернет уже могут быть созданы в брандмауэре.
              </Addition>
              <p>
                Если правка файла <mark className="file">HOSTS</mark> не помогла,
                попробуйте настроить правила в брандмауэре.
              </p>
              <ul>
                <li>
                  <p>
                    Чтобы быстро открыть брандмауэр, воспользуйтесь окном{" "}
                    <mark className="app">«Выполнить»</mark>: нажмите{" "}
                    <mark className="key">Win + R</mark>, введите в поле{" "}
                    <mark className="select">«Открыть»</mark> значение{" "}
                    <mark className="code">wf.msc</mark> и нажмите{" "}
                    <mark className="key">Enter</mark>.
                  </p>
                  <ArticleMedia
                    caption="Выполнить"
                    src="legacy/open_wf_msc.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    Перед вами откроется{" "}
                    <mark className="app">монитор брандмауэра Защитника Windows</mark>. В
                    левой части окна перейдите в раздел{" "}
                    <mark className="select">«Правила для входящих подключений»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Монитор брандмауэра Защитника Windows"
                    src="legacy/firewall_main_page.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    В правой части интерфейса нажмите{" "}
                    <mark className="select">«Создать правило»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Монитор брандмауэра Защитника Windows"
                    src="legacy/firewall_creating_rule.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    В открывшемся мастере создания правил на первой вкладке оставьте
                    выбранным <mark className="select">«Для программы»</mark> и нажмите{" "}
                    <mark className="select">«Далее»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_rule_type.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    На второй вкладке укажите путь к исполняемому файлу программы —{" "}
                    <mark className="path">
                      C:\Program Files\Adobe\Adobe After Effects 20XX\Support
                      Files\AfterFX.exe
                    </mark>{" "}
                    и снова нажмите <mark className="select">«Далее»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_select_app.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    В качестве действия выберите{" "}
                    <mark className="select">«Блокировать подключение»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_blocking.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    Во вкладке <mark className="select">«Профиль»</mark> оставьте все три
                    флажка включёнными и нажмите <mark className="select">«Далее»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_select_profile.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    Задайте новому правилу любое имя, например название программы, и
                    нажмите <mark className="select">«Готово»</mark>. После этого
                    указанная программа больше не должна подключаться к интернету.
                  </p>
                  <ArticleMedia
                    caption="Мастер создания правила для нового входящего подключения"
                    src="legacy/firewall_naming.png"
                    type="image"
                  />
                </li>
                <li>
                  Проделайте аналогичные действия и для{" "}
                  <mark className="select">«Правил для исходящего подключения»</mark>.
                </li>
              </ul>
              <Divider>
                Используем <mark className="app">OneClickFirewall</mark> для быстрой
                блокировки
              </Divider>
              <p>
                Если вы не хотите возиться с созданием правил вручную, воспользуйтесь
                утилитой <mark className="app">OneClickFirewall</mark>. Она добавляет в
                контекстное меню ярлыков две команды:{" "}
                <mark className="select">«Block Internet Access»</mark> для блокировки
                доступа в интернет и{" "}
                <mark className="select">«Restore Internet Access»</mark> для его
                восстановления. Загрузить утилиту можно на{" "}
                <a href="https://winaero.com/download-oneclickfirewall/">
                  официальном сайте WinAero
                </a>
                .
              </p>
              <ArticleMedia
                caption="Рабочий стол"
                src="legacy/oneclickfirewall_aftereffects.png"
                type="image"
              />
              <Divider>Проверяем, не «навредил» ли антивирус</Divider>
              <p>
                В редких случаях антивирус может удалять файлы, отвечающие за активацию,
                считая их вредоносными. Если вы не хотите отключать или удалять{" "}
                <mark className="app">Защитник Windows</mark>, добавьте папки с
                программами <mark className="company">Adobe</mark> в список исключений
                антивируса, а затем переустановите программу вашей версии «поверх»
                существующей.
              </p>
              <ArticleMedia
                src="ET94_dv3f8c"
                type="youtube"
              />
              <Divider>Проверяем установленные службы</Divider>
              <p>
                Если вы переходили с лицензионных версий на «народные», то, скорее всего,
                не полностью очистили систему от предыдущих установок. Из-за этого среди
                неудалённых служб могла остаться{" "}
                <mark className="app">Adobe Genuine Software Integrity Service</mark>,
                которая проверяет легальность использования программ и может вызывать окно
                об отсутствии лицензии. Для решения проблемы достаточно{" "}
                <a href="https://youtu.be/HDVvWyBKizo&t=75">отключить</a> эту службу или
                полностью очистить систему от продуктов{" "}
                <mark className="company">Adobe</mark> с помощью{" "}
                <a href="https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-creative-cloud-cleaner-tool.html">
                  Adobe Creative Cloud Cleaner Tool
                </a>
                .
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-out-of-memory"
        tag="out of memory, adjust ram settings in preferences > memory & performance, after effects has unexpectedly run out of memory and cannot complete this export, either decrease the memory requirements for the rendering frame or install more ram, нехватка озу, выделенный объем памяти превышает внутреннее ограничение, рекомендуется снизить требования к памяти для рендеринга этого кадра, предупреждение о нехватке памяти, unable to allocate enough memory, неожиданно для программы нехватило памяти поэтому завершить этот экспорт невозможно, может потребоваться упростить композицию уменьшить разрешение рендеринга или увеличить объём оперативной доступный для программы в меню настройки память и производительность, оперативная память, ошибка памяти, 23::40, не проигрывается предпросмотр, зацикливается превью"
        title="Как избавиться от «Out of Memory», «Unable to allocate enough memory to render the current frame», «Low memory warning. RAM use has been extended for previews» и похожих ошибок?"
      >
        <p>
          Поздравляем, вы встретились с первым «боссом» в{" "}
          <mark className="app">Adobe After Effects</mark>. Эти ошибки и предупреждения
          возникают, когда программе не хватает оперативной памяти для работы над вашими
          проектами. Часто это происходит из-за «тяжёлых» эффектов, использования видео с
          немонтажными кодеками или неверных настроек программы и операционной системы.
        </p>
        <p>
          Советы в этой статье помогут минимизировать типичные проблемы с нехваткой
          оперативной памяти и «тормозами» в программе, однако не смогут полностью
          исключить их появление в будущем.
        </p>
        <ul>
          <li>
            Для начала стоит закрыть ресурсоёмкие программы при работе в{" "}
            <mark className="app">Adobe After Effects</mark>, например браузер или другую
            монтажную программу.
          </li>
          <li>
            Убедитесь, что вы не используете исходники со слишком большим разрешением,
            например 4K. Чем выше разрешение слоя и композиции, тем больше требуется
            оперативной памяти. Если вы используете исходники из интернета, особенно с
            видеохостингов, стоит попробовать их конвертировать в монтажный кодек,
            например <mark className="video">Apple ProRes 422</mark>, через{" "}
            <a href="https://www.shutterencoder.com/">Shutter Encoder</a>, а затем
            заменить в проекте. Так вы обезопасите себя от различных багов.{" "}
            <a href="#import-workflow">Как это сделать?</a>
          </li>
          <li>
            Убедитесь, что вы не перегрузили проект множеством ресурсоёмких эффектов,
            например <mark className="plugin">Deep Glow</mark> или эффектами из пакетов{" "}
            <mark className="plugin">Red Giant</mark> и{" "}
            <mark className="plugin">Boris FX</mark>. Некоторые из них могут конфликтовать
            друг с другом и потреблять слишком много оперативной памяти.
          </li>
          <li>
            <p>
              Если вы используете несколько композиций с ресурсоёмкими эффектами,
              попробуйте создать для них прокси. Это сократит время на повторный
              рендеринг, если вы не планируете вносить в них дальнейшие изменения.
            </p>
            <Addition type="info">
              Чтобы создать прокси, найдите нужную композицию в окне{" "}
              <mark className="select">«Project»</mark>, нажмите{" "}
              <mark className="key">ПКМ</mark> и выберите{" "}
              <mark className="select">«Create Proxy» → «Movie»</mark>. В очереди
              рендеринга выберите подходящий формат и запустите генерацию. После успешного
              рендеринга прокси автоматически подключится к композиции. Отключить его
              можно через то же контекстное меню:{" "}
              <mark className="select">«Set Proxy» → «None»</mark>.
            </Addition>
          </li>
          <li>
            <p>
              Попробуйте очистить кэш и оперативную память через{" "}
              <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark>
              .
            </p>
            <Addition type="info">
              Очистка кэша никак не повлияет на ваши проекты: они не сломаются и не
              удалятся. Максимум, что придётся сделать после этого — заново закэшировать
              композицию.
            </Addition>
            <ArticleMedia
              caption="Очистка кэша и оперативной памяти"
              src="legacy/aftereffects/edit_purge_all-memory-and-disk-cache.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Если у вас включена функция{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>, попробуйте временно
              её отключить. Для этого перейдите в{" "}
              <mark className="select">«Edit» → «Preferences» → «Memory & CPU»</mark>
              <sup>1</sup>, снимите флажок{" "}
              <mark className="select">«Enable Multi-Frame Rendering»</mark> и повторите
              попытку рендеринга.
            </p>
            <Addition type="info">
              <sup>1</sup> В предыдущих версиях{" "}
              <mark className="app">Adobe After Effects</mark> этот параметр находится в
              разделе <mark className="select">«Memory & Performance»</mark>.
            </Addition>
            <ArticleMedia
              caption="Выключаем многокадровый рендеринг"
              src="legacy/aftereffects/checkbox_multiframe-render.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Проверьте параметр{" "}
              <mark className="select">«RAM reserved for other applications»</mark> в{" "}
              <mark className="select">«Edit» → «Preferences» → «Memory & CPU»</mark>
              <sup>1</sup>. Многие путают его назначение: он отвечает не за то, сколько
              памяти получат программы <mark className="company">Adobe</mark>, а за то,
              сколько останется другим приложениям. Если выставить слишком большое
              значение, <mark className="company">Adobe</mark> может не хватить
              оперативной памяти. Чтобы выделить максимум для{" "}
              <mark className="company">Adobe</mark>, установите значение{" "}
              <mark className="copy">0</mark> — программа сама подставит минимально
              допустимое.
            </p>
            <Addition type="info">
              <sup>1</sup> В предыдущих версиях{" "}
              <mark className="app">Adobe After Effects</mark> этот параметр находится в
              разделе <mark className="select">«Memory & Performance»</mark>.
            </Addition>
            <ArticleMedia
              caption="Настраиваем выделение оперативной памяти программам"
              src="legacy/aftereffects/ram_reserved_for_other_applications.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Проверьте, не установлена ли в настройках проекта глубина цвета 16 или 32
              бит на канал. Для этого откройте{" "}
              <mark className="select">«Project Settings»</mark> комбинацией клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + K</mark>, перейдите во вкладку{" "}
              <mark className="select">«Color»</mark> и в параметре{" "}
              <mark className="select">«Depth»</mark> снизьте битность проекта, чтобы
              облегчить работу.
            </p>
            <ArticleMedia
              caption="Project Settings"
              src="legacy/aftereffects/change_bit_depth.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Если у вас мало оперативной памяти, по возможности докупите её. В
              сегодняшних реалиях для комфортной работы в{" "}
              <mark className="app">Adobe After Effects</mark> требуется минимум 32 ГБ
              ОЗУ.
            </p>
            <Addition type="info">
              <p>
                В <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">25.2 (2025)</mark> и выше добавили функцию
                воспроизведения предпросмотра напрямую из дискового кэша, без загрузки
                кадров в ОЗУ. Это может быть полезно, если у вас мало оперативной памяти.
                Опция включена по умолчанию, если активен дисковый кэш. Управлять ей можно
                в{" "}
                <mark className="select">
                  «Edit» → «Preferences» → «Disk» → «Enable Preview from Disk Cache»
                </mark>
                <sup>1</sup>. Для этой функции желательно использовать быстрый SSD.
              </p>
              <Addition type="info">
                <sup>1</sup> В предыдущих версиях{" "}
                <mark className="app">Adobe After Effects</mark> этот параметр находится в
                разделе <mark className="select">«Media & Disk Cache»</mark>.
              </Addition>
            </Addition>
          </li>
        </ul>
        <ContentFilter
          windowsContent={
            <ul>
              <li>
                <a href="#configure-swapfile">Попробуйте настроить файл подкачки</a>. В
                качестве <mark className="select">исходного размера</mark> установите
                значение от <mark className="copy">1024</mark> МБ, а в качестве{" "}
                <mark className="select">максимального</mark> —{" "}
                <mark className="copy">65536</mark> (64 ГБ),{" "}
                <mark className="copy">131072</mark> (128 ГБ) или больше. После настройки
                система создаст файл подкачки, который сможет динамически расширяться в
                зависимости от заданных вами параметров.
              </li>
              <li>
                Установите программу{" "}
                <a href="https://github.com/henrypp/memreduct/releases">Mem Reduct</a> и
                настройте автоматическую очистку оперативной памяти при заполнении на 90%.
                Эта утилита работает эффективнее, если у вас включён файл подкачки.
              </li>
              <li>
                Если файл подкачки включён и вы уверены, что проблема не в программе,
                проверьте планки оперативной памяти с помощью{" "}
                <a href="https://www.memtest86.com/">MemTest86</a> или поменяйте их
                местами в слотах материнской платы.
              </li>
            </ul>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-out-of-vram"
        tag="gpu, vram, видеокарта, нехватка видеопамяти, gpu acceleration, ошибка графического процессора, this is likely because your gpu is out of memory, обнаружена ошибка которая связана с эффектами на этом кадре использующими графический процессор, вероятно это вызвано нехваткой памяти графического процессора"
        title="Что делать с ошибкой «After Effects has encountered a failure related to GPU-enabled effects»?"
      >
        <p>
          Эта ошибка указывает, что видеопамять вашей видеокарты заполнена и эффект,
          использующий аппаратное ускорение, не может обработать кадр. Такое часто
          происходит, если у вас видеокарта с объёмом видеопамяти менее 4 ГБ.
        </p>
        <ul>
          <li>
            Для начала проанализируйте проект и попробуйте поочерёдно отключать эффекты,
            которые могут вызывать сбой.
          </li>
          <li>
            Попробуйте освободить видеопамять, перезагрузив компьютер или перезапустив
            драйвер видеокарты комбинацией клавиш{" "}
            <mark className="key">Ctrl + Win + Shift + B</mark>.
          </li>
          <li>
            <p>
              Попробуйте настроить проект на программный рендеринг без аппаратного
              ускорения, то есть с использованием только процессора. Для этого откройте
              настройки проекта комбинацией клавиш{" "}
              <mark className="key">Ctrl + Alt + Shift + K</mark>, во вкладке{" "}
              <mark className="select">«Video Rendering and Effects»</mark> выберите{" "}
              <mark className="select">«Mercury Software Only»</mark>. После изменения
              настроек рекомендуется перезапустить программу.
            </p>
            <ArticleMedia
              caption="Project Settings"
              src="legacy/aftereffects/set_render_on_cpu.png"
              type="image"
            />
            <Addition type="info">
              Параметры рендеринга показаны на примере связки «процессор{" "}
              <mark className="hardware">AMD</mark> + видеокарта{" "}
              <mark className="hardware">NVIDIA</mark>».
              <ul>
                <li>
                  <mark className="select">«Mercury GPU Acceleration (CUDA)»</mark> —
                  программа по возможности будет использовать видеокарту{" "}
                  <mark className="hardware">NVIDIA</mark> для обработки композиций. Это
                  происходит не всегда, так как не все эффекты оптимизированы для работы с
                  GPU.
                </li>
                <li>
                  <mark className="select">«Mercury GPU Acceleration (OpenCL)»</mark> —
                  аналогично предыдущему параметру, но для видеокарт AMD и встроенной
                  графики Intel.
                </li>
                <li>
                  <mark className="select">«Mercury Software Only»</mark> — программа
                  будет обрабатывать композиции преимущественно с помощью процессора, но
                  может принудительно задействовать видеокарту, если этого потребует
                  конкретный эффект.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-effect-cannot-allocate-a-buffer"
        tag="25::56, 37::102, attempted to render a frame with an unsupported frame size, the frame size must be between 1 and 30000 pixels for both width and height, please check layer dimensions and the output from any effects that may be modifying layer content, cannot allocate buffer, motion tile, cc repetile, buffer size, pixel limit, мозаика движения, невозможно выделить для эффекта буфер величиной более 30000 пикселей в любом направлении"
        title="Что означает «Effect cannot allocate a buffer larger than 30000 pixels in either dimension»?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> размер слоя не может
          превышать 30000 пикселей по ширине или высоте — это ограничение нельзя обойти.
          Ошибка часто появляется из-за эффектов, которые увеличивают фактическое
          разрешение слоя, например <mark className="plugin">Motion Tile</mark> или{" "}
          <mark className="plugin">CC Repetile</mark>. Если исходное разрешение и так
          большое, например 16384×16384, то любое дополнительное расширение может
          превысить лимит.
        </p>
        <p>
          Чтобы исправить эту ошибку, найдите эффект, который увеличивает изображение, и
          либо временно отключите его, либо измените его параметры.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-this-project-contains-references-to-missing-effects"
        tag="please install the following effects to restore these references, данный избранный раздел содержит ссылки на отсуствующие эффекты, установите следующие эффекты чтобы восстановить эти ссылки, данный проект содержит ссылку на отсутствующий эффект, установите следующий эффект чтобы восстановить эту ссылку, отсутствуют эффекты, ошибка эффектов, установка плагинов, менеджер эффектов, effect may have caused to quit, if you want you can disable this effect now, to re-enable it later select manager effects from effects menu options, приложение неожиданно завершило работу, эффект мог привести к неожиданному завершению работы приложения, если вы хотите этот эффект можно отключить сейчас, чтобы включить его позже выберите управление эффектами в пункте меню эффекты, effect manager, сбой эффекта, отключение эффекта, crash, plugin error"
        title="Что делать с «This project contains references to missing effects»?"
      >
        <p>
          Это предупреждение означает, что в проекте используются эффекты, которые не
          установлены или были отключены на вашем устройстве. Вы можете продолжить работу,
          но не сможете видеть, рендерить и настраивать эти эффекты.
        </p>
        <ArticleMedia
          caption="Предупреждение о том, что указанные эффекты не найдены"
          src="legacy/aftereffects/missing_effects_warning.png"
          type="image"
        />
        <p>
          Проблема возникает по двум основным причинам: либо эффект действительно не
          установлен, либо он был случайно отключён после сбоя программы.
        </p>
        <Divider>Устанавливаем недостающие эффекты</Divider>
        <p>
          Для решения проблемы установите недостающие эффекты из списка в предупреждении и
          перезапустите <mark className="app">Adobe After Effects</mark>. Иногда название
          эффекта может отличаться в зависимости от версии плагина или программы, поэтому
          его придётся заменить вручную.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Большинство популярных плагинов для{" "}
              <mark className="app">Adobe After Effects</mark> вы можете найти в каналах{" "}
              <a href="https://t.me/s/aetemp">AETemp</a>,{" "}
              <a href="https://t.me/+Qd9xu7A4TeIwNzY6">склад стройматериалов (Windows)</a>{" "}
              или <a href="https://t.me/+ZqiaMfQRFgM4YmEy">Яблоневый сад (macOS)</a>.
            </li>
            <li>
              Перед установкой сторонних плагинов через установщики убедитесь, что{" "}
              <mark className="app">Adobe After Effects</mark> установлена по стандартному
              пути, иначе плагины могут не появиться в программе.
            </li>
          </ul>
        </Addition>
        <Divider>Включаем случайно отключённые эффекты</Divider>
        <p>
          В <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">23.4 (2023)</mark> и выше появилась возможность
          отключать эффекты с помощью <mark className="select">«Effect Manager»</mark>.
          Когда какой-то эффект вызывает сбой, программа предлагает его выключить. Если вы
          согласились, плагин останется неактивным, пока вы не включите его вручную.
        </p>
        <p>
          Для повторного включения эффекта откройте{" "}
          <mark className="select">«Effect Manager»</mark>. Попасть в него можно через
          меню <mark className="select">«Effect»</mark>, панель{" "}
          <mark className="select">«Effect Controls»</mark> или{" "}
          <mark className="select">«Effects & Presets»</mark>, выбрав в выпадающем списке{" "}
          <mark className="select">«Manage Effects»</mark>.
        </p>
        <ArticleMedia
          caption="Открываем менеджер эффектов"
          src="legacy/aftereffects/effects_presets_manage_effects.png"
          type="image"
        />
        <p>
          В открывшемся окне по умолчанию отображаются только сторонние эффекты, а
          отключённые — первыми в списке. Если нужно отобразить стандартные эффекты,
          уберите флажок <mark className="select">«Only Show Third-Party Effects»</mark>.
          Чтобы снова включить эффект, установите флажок рядом с ним, нажмите{" "}
          <mark className="select">«OK»</mark> и перезапустите{" "}
          <mark className="app">Adobe After Effects</mark>.
        </p>
        <ArticleMedia
          caption="Окно менеджера эффектов"
          src="legacy/aftereffects/effect_manager.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="this-effect-may-slow-down-preview"
        tag="этот эффект может замедлить предпросмотр и экспорт так как он не оптимизирован для мультикадрового рендера, mfr warning"
        title="Что означает «This effect may slow down Preview and Export as it is optimized Multi-Frame Render» при применении эффекта?"
      >
        <p>
          Это предупреждение сообщает, что используемый эффект не поддерживает технологию{" "}
          <mark className="select">«Multi-Frame Rendering»</mark>, так как его версия ещё
          не адаптирована для неё. Рекомендуется проверить наличие обновлений у
          разработчика. Вы можете продолжить работать с этим эффектом, однако при
          рендеринге могут возникать ошибки.
        </p>
        <p>
          Если это предупреждение или жёлтый треугольник рядом с названием эффекта вас
          раздражает, а обновлять плагин нет возможности или желания, вы можете избавиться
          от них, отключив многокадровый рендеринг. Для этого перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Memory & CPU»</mark>
          <sup>1</sup> и снимите флажок с{" "}
          <mark className="select">«Enable Multi-Frame Rendering»</mark>.
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«Memory & Performance»</mark>.
        </Addition>
        <Addition type="warning">
          Отключение многокадрового рендеринга может снизить скорость обработки
          предпросмотра и экспорта, так как программа будет рендерить кадры
          последовательно, а не параллельно.
        </Addition>
        <ArticleMedia
          caption="Выключаем многокадровый рендеринг"
          src="legacy/aftereffects/checkbox_multiframe-render.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-this-project-contains-an-expression-error"
        tag="этот проект содержит ошибки выражений, движок выражений, expression engine"
        title="Что делать с ошибкой «This project contains an expression error»?"
      >
        <p>
          Чаще всего это предупреждение появляется по трём причинам. Первая — вы открыли
          проект или применили пресет, созданный в английской локализации, в программе на
          русском. Большинство выражений пишутся именно под английскую версию. Вторая —
          выражение написано под старый или новый движок выражений, и проблему легко
          решить, переключив движок в настройках проекта. Третья — само выражение содержит
          ошибки из-за невнимательности автора. В этой статье мы разберём, как решить
          проблемы в первых двух случаях.
        </p>
        <Divider>Меняем язык программы</Divider>
        <p>
          Если у вас <mark className="app">Adobe After Effects</mark> на языке, отличном
          от английского, попробуйте сменить его на английский.
        </p>
        <Addition type="danger">
          <ul>
            <li>
              При смене языка пользовательские настройки сбросятся, так как они привязаны
              к языку интерфейса. Вам придётся заново настраивать рабочие области и
              некоторые параметры. Сторонние плагины при этом сохранятся.
            </li>
            <li>
              После смены языка названия стандартных пресетов и рабочих областей могут
              остаться на русском. Их можно переименовать вручную или переустановить
              программу, выбрав английский язык при установке.
            </li>
          </ul>
        </Addition>
        <ContentFilter
          macContent={
            <>
              <Divider>Меняем язык с помощью консоли</Divider>
              <Addition type="warning">
                Этот способ работает только в{" "}
                <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">24.X (2024)</mark> и выше.
              </Addition>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро менять язык через{" "}
                <mark className="select">«Console»</mark>. Чтобы это сделать — сначала
                нажмите <mark className="key">Command + F12</mark>. В открывшемся окне
                нажмите на иконку открытия контекстного меню и переключитесь в режим{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <Addition type="info">
                Если вместо функциональных клавиш у вас срабатывает изменение громкости,
                дополнительно зажмите <mark className="key">Fn</mark> вместе с указанной
                выше комбинацией или измените поведение функциональных клавиш в настройках
                macOS.
              </Addition>
              <ArticleMedia
                caption="Включение Debug Database View"
                src="legacy/aftereffects/console_debug-database-view.png"
                type="image"
              />
              <p>
                Затем в строке поиска введите{" "}
                <mark className="copy">ApplicationLanguage</mark> и в строке с этим
                параметром напишите <mark className="copy">en_US</mark>. После этого
                перезапустите <mark className="app">Adobe After Effects</mark>. Чтобы
                вернуть язык по умолчанию, просто удалите значение из этого параметра и
                снова перезапустите программу.
              </p>
              <ArticleMedia
                caption="Установка английского языка в консоли"
                src="legacy/aftereffects/set_language_console.png"
                type="image"
              />
            </>
          }
          windowsContent={
            <>
              <Divider>Меняем язык с помощью текстового файла</Divider>
              <p>
                Для быстрой смены языка на английский достаточно создать пустой текстовый
                файл с названием <mark className="file">ae_force_english.txt</mark> и
                поместить его в папку <mark className="path">«Документы»</mark>,
                находящийся в директории{" "}
                <mark className="path">%USERPROFILE%\Documents</mark>. В сам файл ничего
                писать не нужно. После этого перезапустите{" "}
                <mark className="app">Adobe After Effects</mark>, если он был открыт.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    Чтобы быстро открыть папку <mark className="path">«Документы»</mark>,
                    нажмите <mark className="key">Win + R</mark>, введите{" "}
                    <mark className="path">%USERPROFILE%\Documents</mark> и нажмите{" "}
                    <mark className="key">Enter</mark>.
                  </li>
                  <li>
                    Если лень создавать файл вручную, можно сделать это командой{" "}
                    <mark className="code">
                      echo.&gt;&quot;%USERPROFILE%\Documents\ae_force_english.txt&quot;
                    </mark>{" "}
                    в <mark className="app">cmd</mark>. Учтите, что при использовании{" "}
                    <mark className="app">PowerShell</mark> эта команда не сработает.
                  </li>
                </ul>
              </Addition>
              <Divider>Меняем язык с помощью консоли</Divider>
              <Addition type="warning">
                Этот способ работает только в{" "}
                <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">24.X (2024)</mark> и выше.
              </Addition>
              <p>
                В новых версиях <mark className="app">Adobe After Effects</mark>{" "}
                разработчики добавили возможность быстро менять язык через{" "}
                <mark className="select">«Console»</mark>. Для этого нажмите{" "}
                <mark className="key">Ctrl + F12</mark>. В открывшемся окне нажмите на
                иконку открытия контекстного меню и переключитесь в режим{" "}
                <mark className="select">«Debug Database View»</mark>.
              </p>
              <ArticleMedia
                caption="Включение Debug Database View"
                src="legacy/aftereffects/console_debug-database-view.png"
                type="image"
              />
              <p>
                Затем в строке поиска введите{" "}
                <mark className="copy">ApplicationLanguage</mark> и в строке с этим
                параметром напишите <mark className="copy">en_US</mark>. После этого
                перезапустите <mark className="app">Adobe After Effects</mark>. Чтобы
                вернуть язык по умолчанию, просто удалите значение из этого параметра и
                снова перезапустите программу.
              </p>
              <ArticleMedia
                caption="Установка английского языка в консоли"
                src="legacy/aftereffects/set_language_console.png"
                type="image"
              />
            </>
          }
        />
        <Divider>Меняем движок выражений</Divider>
        <p>
          Если смена языка не помогла, попробуйте сменить движок выражений. Откройте{" "}
          <mark className="select">«Project Settings»</mark> комбинацией клавиш
          <mark className="key">Ctrl + Alt + Shift + K</mark> и перейдите во вкладку{" "}
          <mark className="select">«Expressions»</mark>. В параметре{" "}
          <mark className="select">«Expressions Engine»</mark> выберите другой движок. Это
          может помочь, если выражение в проекте было создано для другого синтаксиса.
        </p>
        <ArticleMedia
          caption="Project Settings"
          src="legacy/aftereffects/change_expression_language.png"
          type="image"
        />
        <Divider>Ищем проблемное выражение</Divider>
        <p>
          Если ошибки с выражениями всё ещё остаются, посмотрите, на что именно «ругается»
          программа. Чаще всего это связано со ссылками на несуществующие слои или
          параметры. В предупреждении, которое отображается в окне предпросмотра
          композиции, есть несколько кнопок: они позволяют переключаться между проблемными
          выражениями, выделять параметр с ошибкой, открывать поле для редактирования, а
          также показывать текст ошибки.
        </p>
        <Addition type="info">
          <ul>
            <li>
              Чтобы раскрыть только параметры со встроенными выражениями, выделите слой и
              дважды нажмите <mark className="key">E</mark>. Если слой не будет выделен,
              раскроются все параметры с выражениями у всех слоёв в композиции.
            </li>
            <li>
              Чтобы посмотреть полную ошибку, нажмите на иконку треугольника в раскрытом
              параметре с проблемным выражением.
            </li>
          </ul>
        </Addition>
        <ArticleMedia
          caption="Ищем проблемные выражения"
          src="legacy/aftereffects/find_expressions_with_errors.mp4"
          type="video"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-advanced-3d-plugin-generated-an-unexpected-exception"
        tag="advanced 3d, classic 3d, расширенный 3d, вылетает при попытке использовать адвансед 3д, 3d рендеринг, драйверы видеокарты"
        title="Что делать с ошибкой «Advanced 3D plug-in generated an unexpected exception»?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                В <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">24.1 (2024)</mark> и выше появился новый движок
                для трёхмерного рендеринга. Иногда он может работать некорректно и
                выдавать ошибку при использовании. Причины такого поведения могут быть
                разными: от простого бага, который решается запуском{" "}
                <mark className="app">Adobe After Effects</mark> от имени администратора,
                до отсутствия поддержки движка вашим устройством.
              </p>
              <ul>
                <li>
                  <p>
                    Если ваш графический процессор есть в{" "}
                    <a href="https://helpx.adobe.com/after-effects/using/advanced-3d-renderer.html">
                      списке поддерживаемых
                    </a>
                    , но при попытке использовать{" "}
                    <mark className="plugin">Advanced 3D</mark> программа вылетает,
                    попробуйте запустить её от имени администратора<sup>1</sup> через
                    контекстное меню ярлыка. Чтобы не делать это каждый раз вручную,
                    установите флажок{" "}
                    <mark className="select">
                      «Запускать эту программу от имени администратора»
                    </mark>{" "}
                    в свойствах ярлыка.
                  </p>
                  <Addition type="warning">
                    <sup>1</sup> Если у вас включён контроль учётных записей (UAC) и{" "}
                    <mark className="app">Adobe After Effects</mark> запущен от имени
                    администратора, то импорт файлов с помощью{" "}
                    <mark className="term">drag-and-drop</mark>, например из{" "}
                    <mark className="app">Проводника</mark>, работать не будет. Это не
                    баг, а особенность безопасности Windows. Система просто не позволяет
                    передавать файлы из приложений, запущенных с правами обычного
                    пользователя, в те, которые работают от имени администратора.
                  </Addition>
                  <ArticleMedia
                    caption="Настройка запуска от имени администратора"
                    src="legacy/aftereffects/open_ae_as_admin.mp4"
                    type="video"
                  />
                </li>
                <li>
                  <p>
                    Если запуск от имени администратора не помог, обновите драйверы
                    видеокарты — желательно до версии{" "}
                    <mark className="app">NVIDIA Studio Driver</mark> для более стабильной
                    работы в творческих приложениях.
                  </p>
                  <Addition type="info">
                    Загрузить драйверы <mark className="app">NVIDIA Studio</mark> можно на{" "}
                    <a href="https://www.nvidia.com/en-eu/geforce/drivers/">
                      официальном сайте NVIDIA
                    </a>
                    . На странице укажите модель видеокарты, операционную систему и в поле{" "}
                    <mark className="select">«Download Type»</mark> выберите{" "}
                    <mark className="select">«Studio Driver»</mark>.
                  </Addition>
                </li>
                <li>
                  <p>
                    Если и обновление драйверов не помогло, обновите программу до более
                    свежей версии.
                  </p>
                  <Addition type="info">
                    У меня, автора статьи, на ранних сборках{" "}
                    <mark className="app">Adobe After Effects</mark>{" "}
                    <mark className="version">24.X (2024)</mark> движок{" "}
                    <mark className="plugin">Advanced 3D</mark> не запускался, выдавая
                    указанную в статье ошибку, однако после нескольких обновлений
                    программы он начал работать корректно.
                  </Addition>
                </li>
                <li>
                  <p>
                    Если ни запуск от имени администратора, ни обновление драйверов и
                    программы не дали результата, вероятно, ваша видеокарта не
                    соответствует{" "}
                    <a href="https://helpx.adobe.com/after-effects/using/advanced-3d-renderer.html">
                      системным требованиям
                    </a>{" "}
                    для <mark className="plugin">Advanced 3D</mark>. Если вам всё же нужно
                    работать с трёхмерными слоями, переключите движок на{" "}
                    <mark className="plugin">Classic 3D</mark> в окне предпросмотра или в
                    настройках композиции во вкладке{" "}
                    <mark className="select">«3D Renderer»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Composition Settings"
                    src="legacy/aftereffects/change_3d_renderer.png"
                    type="image"
                  />
                </li>
              </ul>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-cinema-4d-must-be-installed"
        tag="c4d, синема 4д, cineware, 3d рендеринг, ошибка рендера, render failed, cineware server suite failed to acquire renderer port and path, server commands not available, сервер cineware, чтобы использовать средство рендеринга необходимо установить cinema 4d, 5027::12"
        title="Что делать с «Cinema 4D must be installed in order to use the Cinema 4D renderer»?"
      >
        <p>
          Если вы используете репак <mark className="app">Adobe After Effects</mark> от{" "}
          <mark className="user">KpoJIuK</mark>, эта ошибка может возникать из-за того,
          что в его дистрибутивах <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">17.X (2020)</mark> и выше отсутствует{" "}
          <mark className="plugin">Cinema 4D Lite</mark>. Это сделано для уменьшения
          размера инсталлятора, но из-за этого теряется возможность импорта{" "}
          <mark className="file">C4D</mark> файлов, некорректно работает плагин{" "}
          <mark className="plugin">Cineware</mark> и нельзя включить соответствующий
          движок рендеринга.
        </p>
        <p>
          Чтобы это исправить, нужно установить полноценную{" "}
          <mark className="app">Maxon Cinema 4D</mark> той версии, которую требует ваша
          версия <mark className="app">Adobe After Effects</mark>. Обычно в тексте ошибки
          указывается, какую версию <mark className="app">Cinema 4D</mark> нужно
          установить.
        </p>
        <Addition type="warning">
          <ul>
            <li>
              Например, если в ошибке указано, что нужна{" "}
              <mark className="app">Cinema 4D</mark> <mark className="version">2023</mark>
              , то устанавливайте любую версию, относящуюся к данному релизному циклу.
              Версии <mark className="app">Cinema 4D</mark>{" "}
              <mark className="version">2024.X.X</mark> или другие в таком случае не
              подойдут.
            </li>
            <li>
              Если вы установили нужную версию <mark className="app">Cinema 4D</mark>, но
              программы всё равно «не видят» друг друга, убедитесь, что они установлены в
              стандартном расположении на диске <mark className="path">C:\</mark>.
            </li>
          </ul>
        </Addition>
        <Addition type="info">
          <ul>
            <li>
              Если у вас установлен <mark className="app">Adobe After Effects</mark> через{" "}
              <mark className="app">Adobe Creative Cloud</mark>, вам достаточно установить{" "}
              <mark className="plugin">Cinema 4D</mark> оттуда:{" "}
              <mark className="select">
                «Приложения» → «After Effects» → «Подключаемые модули» → «Cinema 4D» →
                «Установить»
              </mark>
              .
            </li>
            <li>
              В репаках от <mark className="user">m0nkrus</mark> и некоторых других
              релизеров <mark className="app">Cinema 4D Lite</mark> обычно не вырезан.
              Уточняйте этот момент в описании сборки.
            </li>
          </ul>
        </Addition>
        <Divider>
          Список совместимости версий <mark className="app">Maxon Cinema 4D</mark> и{" "}
          <mark className="app">Adobe After Effects</mark>
        </Divider>
        <Addition type="info">
          Чтобы посмотреть текущую версию <mark className="app">Adobe After Effects</mark>
          , откройте <mark className="select">«Help» → «About After Effects»</mark>.
        </Addition>
        <ul>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">26.2</mark> и выше требует{" "}
              <mark className="app">Cinema 4D</mark>{" "}
              <mark className="version">2026.X.X</mark>.
            </p>
            <Addition type="info">
              В <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">26.2</mark> имеется опечатка в описании ошибки,
              связанной с требуемой версией <mark className="app">Maxon Cinema 4D</mark> —
              там указана <mark className="version">2025</mark>, хотя она уже не подходит.
              Также в списке изменений <mark className="app">Adobe After Effects</mark> об
              этом изменении нет ни намёка.
            </Addition>
          </li>
          <li>
            <mark className="app">Adobe After Effects</mark> от{" "}
            <mark className="version">25.1</mark> до <mark className="version">26.0</mark>{" "}
            требует <mark className="app">Cinema 4D</mark>{" "}
            <mark className="version">2025.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects</mark> от{" "}
            <mark className="version">24.1 (2024)</mark> до{" "}
            <mark className="version">25.0 (2025)</mark> требует{" "}
            <mark className="app">Cinema 4D</mark>{" "}
            <mark className="version">2024.X.X</mark>.
          </li>
          <li>
            <mark className="app">Adobe After Effects</mark> от{" "}
            <mark className="version">23.1 (2023)</mark> до{" "}
            <mark className="version">23.6 (2023)</mark> требует{" "}
            <mark className="app">Cinema 4D</mark>{" "}
            <mark className="version">2023.X.X</mark>.
          </li>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark> от{" "}
              <mark className="version">22.X (2022)</mark> до{" "}
              <mark className="version">23.0 (2023)</mark> требует{" "}
              <mark className="app">Cinema 4D</mark>{" "}
              <mark className="version">R25.X.X</mark>.
            </p>
            <Addition type="warning">
              <mark className="app">Cinema 4D</mark>{" "}
              <mark className="version">R26.X.X</mark> и выше несовместимы с{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">23.1 (2023)</mark> и ниже.
            </Addition>
          </li>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark> от{" "}
              <mark className="version">17.X (2020)</mark> до{" "}
              <mark className="version">18.X (2021)</mark> требует{" "}
              <mark className="app">Cinema 4D</mark>{" "}
              <mark className="version">R21.X.X</mark>. Путь к установленной программе
              можно указать в настройках движка <mark className="plugin">Cineware</mark>.
            </p>
            <div className="article-media-gallery-grid">
              <ArticleMedia
                caption="Composition Settings"
                src="legacy/aftereffects/composition_settings_3drenderer_cinema4d.png"
                type="image"
              />
              <ArticleMedia
                caption="Choose CINEMA 4D Installation"
                src="legacy/aftereffects/cinema4d_renderer_options.png"
                type="image"
              />
              <ArticleMedia
                caption="Choose CINEMA 4D Installation"
                src="legacy/aftereffects/choose_cinema4d_installation.png"
                type="image"
              />
            </div>
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-display-acceleration-disabled"
        tag="advanced 3d is not supported by the current hardware, расширенный 3d не поддерживается текущим оборудованием, аппаратное ускорение, display acceleration disabled, драйверы видеокарты"
        title="Что означает «Display acceleration disabled» в правом верхнем углу предпросмотра?"
      >
        <p>
          Это предупреждение указывает, что программа по какой-то причине не может
          использовать аппаратное ускорение видеокарты. Если вы недавно переустанавливали{" "}
          Windows и устанавливали <mark className="app">Adobe After Effects</mark> с нуля,
          скорее всего, вы просто забыли установить драйверы для видеокарты.
        </p>
        <Divider>Устанавливаем или обновляем драйверы</Divider>
        <ul>
          <li>
            <mark className="hardware">NVIDIA</mark> — попробуйте установить драйверы
            редакции <mark className="app">NVIDIA Studio</mark>. Загрузить их можно с{" "}
            <a href="https://www.nvidia.com/en-eu/geforce/drivers/">официального сайта</a>
            . На странице укажите модель видеокарты, ОС и в поле{" "}
            <mark className="select">«Тип загрузки»</mark> выберите{" "}
            <mark className="select">«Studio Driver»</mark>.
          </li>
          <li>
            <p>
              <mark className="hardware">Intel</mark> — найдите и скачайте подходящий
              драйвер{" "}
              <a href="https://www.intel.com/content/www/us/en/search.html#sort=relevancy&f:@tabfilter=[Downloads]&f:@stm_10385_en=[Graphics]&f:downloadtype=[Drivers]">
                на официальном сайте
              </a>{" "}
              или воспользуйтесь{" "}
              <a href="https://www.intel.com/content/www/us/en/support/detect.html">
                автоматическим установщиком
              </a>
              .
            </p>
            <Addition type="warning">
              <mark className="hardware">Intel</mark> может блокировать доступ к сайту для
              пользователей из Российской Федерации.
            </Addition>
          </li>
          <li>
            <mark className="hardware">AMD</mark> — воспользуйтесь автоматическим
            установщиком, который можно скачать на{" "}
            <a href="https://www.amd.com/en/support/download/drivers.html">
              официальном сайте
            </a>
            .
          </li>
        </ul>
        <p>
          После установки драйверов перезагрузите компьютер и снова откройте{" "}
          <mark className="app">Adobe After Effects</mark>. Если драйверы установились
          корректно, надпись должна исчезнуть.
        </p>
        <Divider>Проверяем совместимость оборудования с программой</Divider>
        <p>
          В редких случаях новая версия <mark className="app">Adobe After Effects</mark>{" "}
          может не поддерживать вашу видеокарту. Или наоборот — слишком свежие драйверы
          могут вызывать проблемы. Обычно о проблемах с совместимостью сообщается в окне{" "}
          <mark className="select">«System Compatibility Report»</mark> при запуске
          программы, если оно не было выключено в настройках.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-gpu-driver-crash"
        tag="отключение планирования gpu, аппаратное ускорение, сбой драйвера, hardware decoding"
        title="При работе в программе пропадает изображение на мониторе, как будто перезагружается драйвер видеокарты. Как это исправить?"
      >
        <ContentFilter
          windowsContent={
            <>
              <Divider>Отключаем аппаратное ускорение</Divider>
              <p>
                Попробуйте отключить аппаратное ускорение в параметрах Windows 11. Для
                этого откройте <mark className="app">Параметры</mark> комбинацией клавиш{" "}
                <mark className="key">Win + I</mark>, перейдите в раздел{" "}
                <mark className="select">«Система» → «Дисплей» → «Графика»</mark>.
                Откройте{" "}
                <mark className="select">«Дополнительные графические параметры»</mark> и
                отключите опцию{" "}
                <mark className="select">«Планирование GPU с аппаратным ускорением»</mark>
                . После этого перезагрузите устройство и продолжите работу.
              </p>
              <ArticleMedia
                caption="Параметры"
                src="legacy/disable_gpu_planning.png"
                type="image"
              />
              <Divider>Отключаем аппаратное декодирование исходников</Divider>
              <p>
                Если зависания встречаются только при работе с видеоисходниками,
                попробуйте отключить аппаратное декодирование в настройках программы. Для
                этого перейдите в{" "}
                <mark className="select">«Edit» → «Preferences» → «Import»</mark>, снимите
                флажок{" "}
                <mark className="select">«Enable hardware accelerated decoding»</mark> и
                перезапустите программу.
              </p>
              <ArticleMedia
                caption="Отключаем аппаратное декодирование исходников"
                src="legacy/aftereffects/disable_hardware_accelerated_decoding.png"
                type="image"
              />
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-sapphire-red-screen"
        tag="сапфир, красный экран, ошибка плагина, red screen, plugin error"
        title="Почему появляется красный экран и пропадают параметры у эффектов из пакета Boris FX Sapphire?"
      >
        <p>
          Скорее всего, вы столкнулись с багом «народной» версии плагина{" "}
          <mark className="plugin">Boris FX Sapphire</mark>{" "}
          <mark className="version">2024.5</mark> и{" "}
          <mark className="version">2024.51</mark> в виде репака от{" "}
          <mark className="user">KpoJIuK</mark>. Из-за него вы не можете настраивать
          эффекты, так как их параметры не отображаются.
        </p>
        <p>
          Эту проблему можно попробовать решить откатом на версию{" "}
          <mark className="plugin">Boris FX Sapphire</mark>{" "}
          <mark className="version">2024.4</mark> от того же{" "}
          <mark className="user">KpoJIuK</mark> или установкой более свежих версий
          плагинов в виде репаков от <mark className="user">Team V.R.</mark>.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-crash-by-sapphire"
        tag="сапфир, вылет при запуске, совместимость, crash fix"
        title="Как избавиться от вылетов Adobe Media Encoder после установки Boris FX Sapphire?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                Это известный баг, который мешает запуску{" "}
                <mark className="app">Adobe Media Encoder</mark> при наличии плагинов{" "}
                <mark className="plugin">Boris FX Sapphire</mark>. В новых версиях его
                исправили, но если вы столкнулись с этой проблемой, просто включите режим
                совместимости с Windows 8 в свойствах ярлыка{" "}
                <mark className="app">Adobe Media Encoder</mark>.
              </p>
              <p>
                Для этого откройте свойства ярлыка, перейдите во вкладку{" "}
                <mark className="select">«Совместимость»</mark> и поставьте флажок{" "}
                <mark className="select">
                  «Запускать программу в режиме совместимости с: Windows 8»
                </mark>
                . После этого программа не должна вылетать при запуске.
              </p>
              <ArticleMedia
                caption="Настройка режима совместимости"
                src="legacy/compatibility_media_encoder.mp4"
                type="video"
              />
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-color-twixtor"
        tag="красный экран, синий экран, ошибка плагина, red screen, blue screen, plugin error"
        title="Как избавиться от красного или синего экрана при использовании Twixtor?"
      >
        <p>
          Заливка слоя красным или синим цветом обычно связана с ошибками при работе с{" "}
          <mark className="plugin">Twixtor</mark>.
        </p>
        <ul>
          <li>
            Синяя заливка означает, что вы вышли за пределы длительности исходного видео и
            плагин не понимает, что отображать. Чтобы это исправить, увеличьте скорость
            клипа или расширьте диапазон исходника на таймлайне.
          </li>
          <li>
            Красная заливка может указывать на то, что эффект{" "}
            <mark className="plugin">Twixtor</mark> применён не первым в списке эффектов.
            Переместите его на самый верх или используйте на отдельном корректирующем
            слое.
          </li>
          <li>
            Если вы всё ещё сталкиваетесь с проблемой красной заливки и у вас установлен{" "}
            <mark className="plugin">Twixtor</mark> <mark className="version">8.X.X</mark>
            , попробуйте установить <mark className="plugin">Twixtor</mark>{" "}
            <mark className="version">7.X.X</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-cc-2019-roto-brush-selection"
        tag="roto brush, ротобраш, баг версии cc 2019"
        title="Почему я не могу выделить объект при использовании Roto Brush?"
      >
        <p>
          Скорее всего, вы столкнулись со старым багом{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">16.X (2019)</mark>, если используете репак от{" "}
          <mark className="user">KpoJIuK</mark>. Эту проблему можно решить откатом до
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">15.X (2018)</mark>, установкой{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">16.X (2019)</mark> в виде сборки от{" "}
          <mark className="user">m0nkrus</mark> или установкой более свежей версии
          программы от любого репакера.
        </p>
        <p>
          В более редких случаях невозможность выделить объект может быть вызвана
          использованием исходного материала с переменной частотой кадров. Такие исходники
          рекомендуется преобразовать в видео со стабильной частотой кадров, например 30
          или 60.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-file-is-damaged"
        tag="file is damaged, unable to import, файл поврежден, ошибка импорта, автосохранение, project corruption, bad format or not readable, недопустимый формат или чтение невозможно, ошибка с файлом"
        title="Что делать с «File is damaged» или «Unable to import file as project»?"
      >
        <p>
          Если вчера проект открывался, а сегодня нет, возможно, программа была закрыта
          некорректно или в системе произошёл сбой, например{" "}
          <mark className="term">BSOD</mark>. В таком случае восстановить проект будет
          крайне сложно, но шансы есть.
        </p>
        <ul>
          <li>
            <p>
              Попробуйте найти автосохранения проекта и открыть их. Обычно они находятся в
              папке рядом с файлом проекта или в директории, указанной в настройках.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  <p>
                    Параметры автосохранения настраиваются в{" "}
                    <mark className="select">«Edit» → «Preferences» → «Project»</mark>
                    <sup>1</sup>. Там можно задать расположение файлов и время, после
                    которого будет выполнено автосохранение.
                  </p>
                  <Addition type="info">
                    <sup>1</sup> В предыдущих версиях{" "}
                    <mark className="app">Adobe After Effects</mark> этот параметр
                    находится в разделе <mark className="select">«Auto-Save»</mark>.
                  </Addition>
                </li>
                <li>
                  Учтите, что при нажатии <mark className="key">Ctrl + S</mark> таймер
                  автосохранения сбрасывается. Рекомендуется установить в параметре{" "}
                  <mark className="select">«Save Every»</mark> значение от одной до трёх
                  минут.
                </li>
                <li>
                  Автосохранение не сработает, если проект ни разу не был сохранён. Всегда
                  сохраняйте файл проекта сразу после его создания.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            Если файлов автосохранений нет или они слишком старые — примите мои
            соболезнования. В следующий раз позаботьтесь о своих нервах и{" "}
            <a href="#configure-backup">настройте резервное копирование</a> для будущих
            проектов.
          </li>
        </ul>
        <ContentFilter
          windowsContent={
            <>
              <ul>
                <li>
                  <p>
                    Если вы недавно отправляли проект в очередь рендеринга{" "}
                    <mark className="app">Adobe Media Encoder</mark>, то есть шанс найти
                    его временную копию. Проверьте системную папку{" "}
                    <mark className="path">%TEMP%</mark>: там может лежать директория с
                    названием <mark className="path">НАЗВАНИЕ_ПРОЕКТА.aep_AME</mark>,
                    внутри которой и будет файл проекта. Если вы нашли его и он успешно
                    открывается, сразу же сохраните копию в надёжное место и продолжайте
                    работу.
                  </p>
                  <Addition type="info">
                    Чтобы быстро добраться до папки с временными файлами, воспользуйтесь
                    окном <mark className="app">«Выполнить»</mark>: нажмите{" "}
                    <mark className="key">Win + R</mark>, введите в поле{" "}
                    <mark className="select">«Открыть»</mark> значение{" "}
                    <mark className="code">%TEMP%</mark> и нажмите{" "}
                    <mark className="key">Enter</mark>.
                  </Addition>
                </li>
                <li>
                  В редких случаях файл может быть не повреждён, но не открываться, если
                  на диске осталось крайне мало свободного места. Поскольку Windows не
                  всегда предупреждает о нехватке места на разделах, вы могли упустить эту
                  мелочь и столкнуться с невозможностью открыть проект в{" "}
                  <mark className="app">Adobe After Effects</mark>. Для решения проблемы
                  достаточно очистить систему от мусора, хотя бы кэш, и повторить попытку.
                </li>
              </ul>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-your-disk-cache-folder-is-on-a-drive-that-does-not-have-enough-avaiable-space"
        tag="дисковый кэш, нехватка места, please make more space available or go to media & disk cache preferences to change the folder or maximum disk cache size"
        title="Что означает «Your disk cache folder is on a drive that does not have enough available space to safely store the full amount specified in your preferences»?"
      >
        <p>
          В этом предупреждении прямо говорится, что на диске, где хранится кэш,
          недостаточно места. Чтобы решить эту проблему, достаточно освободить место на
          диске, где у вас расположен кэш.
        </p>
        <ArticleMedia
          caption="Warning"
          src="legacy/aftereffects/low_diskcache_space_warning.png"
          type="image"
        />
        <p>
          Если нет возможности освободить место, откройте{" "}
          <mark className="select">«Edit» → «Preferences» → «Disk»</mark>
          <sup>1</sup>. В этом разделе можно уменьшить максимальный размер кэша в{" "}
          <mark className="select">«Maximum Disk Cache Size»</mark>, изменить его
          расположение через <mark className="select">«Choose Folder»</mark> или полностью
          отключить, сняв флажок с <mark className="select">«Enable Disk Cache»</mark>.
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«Media & Disk Cache»</mark>.
        </Addition>
        <ArticleMedia
          caption="Настраиваем дисковый кэш"
          src="legacy/aftereffects/preferences-media_and_disk_cache.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-disk-cache-folder-doesnt-exist"
        tag="дисковый кэш, папка кэша, disk cache, cache folder, cache error, please check your settings in media and disk cache preferences"
        title="Что делать с «Error: Disk Cache folder doesn't exist (or isn't a directory), so it will be reset to the system temporary directory»?"
      >
        <p>
          Эта ошибка указывает, что путь к папке кэша, заданный в настройках, не найден.
          Это предупреждение не является критической ошибкой: вы можете его
          проигнорировать и продолжить работу. Обычно это происходит при переносе настроек
          с другого компьютера или при отключении диска, на котором хранился кэш. В таком
          случае программа сбрасывает путь к системной папке временных файлов.
        </p>
        <p>
          Чтобы настроить расположение дискового кэша, перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Disk»</mark>
          <sup>1</sup> и укажите нужную директорию.{" "}
          <em className="article-note-muted">
            Или просто отключите дисковый кэш, сняв флажок с{" "}
            <mark className="select">«Enable Disk Cache»</mark>.
          </em>
        </p>
        <Addition type="info">
          <sup>1</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«Media & Disk Cache»</mark>.
        </Addition>
        <ArticleMedia
          caption="Настраиваем дисковый кэш"
          src="legacy/aftereffects/preferences-media_and_disk_cache.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-unicode-error"
        tag="unicode, ошибка кодировки, локализация, кириллица в путях, сброс настроек, unicode error, баг версии"
        title="Что делать с ошибками «Не удалось выполнить преобразование символов Unicode» или «Не удалось загрузить псевдоэффекты»?"
      >
        <p>
          Если вы используете <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">24.4 (2024)</mark> с русской локализацией, вы можете
          столкнуться с этой проблемой, которую позже исправили в новых версиях. Обычно
          она решается переустановкой программы с выбором английского языка интерфейса.
          Если не хотите менять язык, обновитесь до более свежей версии или откатитесь на
          более старую.
        </p>
        <p>
          Если вы используете другую версию{" "}
          <mark className="app">Adobe After Effects</mark> или английскую локализацию,
          причин может быть много. Иногда может помочь{" "}
          <a href="https://community.adobe.com/t5/after-effects-discussions/faq-how-to-reset-trash-preferences-in-after-effects/td-p/10634342">
            сброс настроек
          </a>
          . Также стоит избегать кириллицы в путях к файлам, их названиях и названиях
          слоёв.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-overflow-converting-ratio-denominators"
        tag="vfr, переменная частота кадров, интерпретация видео, frame rate, переполнение преобразование знаменателей пропорций, 17::19, 17::18"
        title="Что делать с ошибкой «Error: overflow converting ratio denominators»?"
      >
        <p>
          Эта ошибка может появляться по разным причинам, чаще всего на старых версиях{" "}
          <mark className="app">Adobe After Effects</mark>. К сожалению, универсального
          решения нет, но можно попробовать минимизировать появление проблемы.
        </p>
        <ul>
          <li>
            <p>
              Ошибка может быть связана с исходниками, особенно с переменной частотой
              кадров. Если в окне <mark className="select">«Project»</mark> частота кадров
              отображается как 29.841, стоит интерпретировать или перекодировать футаж в
              «ровную» частоту, например 30 FPS, через{" "}
              <mark className="app">Shutter Encoder</mark>.{" "}
              <mark className="app">Adobe After Effects</mark> не любит плавающие значения
              частоты кадров.
            </p>
            <Addition type="info">
              Для интерпретации футажа выделите его в окне{" "}
              <mark className="select">«Project»</mark> и нажмите{" "}
              <mark className="key">Ctrl + Alt + G</mark>.
            </Addition>
          </li>
          <li>
            Если замена исходников не помогла, проверьте, нет ли на слоях масок. Иногда
            помогает их пересоздание.
          </li>
          <li>
            Попробуйте создать новый проект, импортировать в него композиции из
            проблемного файла и продолжить работу.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-rotobrush-frame-rate-mismatch-or-footage-with-fields-found"
        tag='ротобраш, несоответствие частоты кадров либо не найден видеоряд с полями, для достижения оптимального результата операций "кисть для ротоскопии" и "уточнить края" необходимо задать частоту кадров композиции в соответствии с источником слоя, for best roto brush & refine edge results set the composition to fps to match the layer source, will not render correctly because the source frame rate changed from to fps roto brush, frame rate mismatch, частота кадров, интерлейсинг, поля, interlace'
        title="Из-за чего появляется «Frame rate mismatch, or footage with fields found» при использовании Roto Brush?"
      >
        <p>
          Это предупреждение возникает по двум причинам: несоответствие частоты кадров
          исходника и композиции или наличие у исходника чересстрочной развёртки. Работать
          с такими файлами можно, но для корректной работы{" "}
          <mark className="plugin">Roto Brush</mark> проблему лучше устранить.
        </p>
        <Addition type="info">
          Из-за ошибки в русской локализации{" "}
          <mark className="app">Adobe After Effects</mark> предупреждение неверно
          переведено как «не найден видеоряд с полями», хотя в оригинале говорится, что
          поля как раз найдены.
        </Addition>
        <Divider>Решаем проблемы с частотой кадров</Divider>
        <ul>
          <li>
            <p>
              Обычно предупреждение о несоответствии частоты кадров подсказывает, какую
              частоту нужно выставить для композиции. Например, если исходное видео имеет
              частоту 50 FPS, а композиция — 30, программа предложит настроить её на 50
              FPS.
            </p>
            <p>
              Чтобы изменить частоту кадров, откройте настройки композиции{" "}
              <mark className="key">Ctrl + K</mark> или через меню{" "}
              <mark className="select">«Composition» → «Composition Settings»</mark>. В
              поле <mark className="select">«Frame Rate»</mark> укажите ту же частоту, что
              и у исходника, и нажмите <mark className="select">«OK»</mark>. После этого
              предупреждение должно исчезнуть.
            </p>
            <ArticleMedia
              caption="Composition Settings"
              src="legacy/aftereffects/composition_settings_basic.png"
              type="image"
            />
          </li>
          <li>
            Если вы не хотите менять частоту кадров композиции, в которой используется
            исходник, создайте на его основе прекомпозицию с той же частотой кадров.
          </li>
          <li>
            <p>
              Если вы не хотите менять частоту кадров композиции, перекодируйте исходник в
              нужное значение через <mark className="app">Shutter Encoder</mark> и
              замените его в проекте через{" "}
              <mark className="select">«Replace Footage» → «File»</mark>. Для изменения
              частоты кадров используйте вкладку{" "}
              <mark className="select">«Advanced features»</mark>.
            </p>
            <ArticleMedia
              caption="Shutter Encoder"
              src="legacy/shutter_encoder_convert_to_constant_fps.mp4"
              type="video"
            />
          </li>
          <li>
            <p>
              Если вы не хотите конвертировать исходник, интерпретируйте его частоту
              кадров. Для этого выделите файл в окне{" "}
              <mark className="select">«Project»</mark>, нажмите{" "}
              <mark className="key">Ctrl + Alt + G</mark>, чтобы открыть окно{" "}
              <mark className="select">«Interpret Footage»</mark>, и в разделе{" "}
              <mark className="select">«Frame Rate»</mark> выберите{" "}
              <mark className="select">«Conform to frame rate»</mark>, задав значение,
              совпадающее с частотой кадров нужной композиции.
            </p>
            <ArticleMedia
              caption="Interpret Footage"
              src="legacy/aftereffects/interpret_footage_main.png"
              type="image"
            />
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-content-aware-fill-initialization-failed"
        tag="ошибка инициализации заливки с учётом содержимого"
        title="Из-за чего может появляться «Content-Aware Fill Error: Initialization Failed»?"
      >
        <p>
          Эта ошибка при использовании <mark className="plugin">Content-Aware Fill</mark>{" "}
          может возникать по разным причинам. Проблему можно минимизировать,
          воспользовавшись способами, описанными в этой статье.
        </p>
        <ul>
          <li>
            Убедитесь, что путь к вашему проекту формата <mark className="file">AEP</mark>{" "}
            или исходнику не содержит кириллицы и нестандартных символов. Используйте
            только латиницу.
          </li>
          <li>
            Если вы используете исходники, хранящиеся на внешнем жёстком диске, попробуйте
            переместить их на внутренний диск, указать новый путь через{" "}
            <mark className="select">«Replace Footage»</mark> и повторить попытку заливки.
          </li>
          <li>
            <p>
              Попробуйте открыть настройки{" "}
              <mark className="plugin">Content-Aware Fill</mark>, поочерёдно включить и
              выключить различные параметры, а затем снова попробовать обработку. Для
              этого откройте окно <mark className="select">«Content-Aware Fill»</mark>{" "}
              через <mark className="select">«Window»</mark> и в контекстном меню выберите{" "}
              <mark className="select">«Content-Aware Fill Settings»</mark>.
            </p>
            <ArticleMedia
              caption="Открываем настройки «Content-Aware Fill»"
              src="legacy/aftereffects/open_content-aware_fill_settings.png"
              type="image"
            />
            <p>
              В окне настроек включите и отключите различные параметры, затем верните их
              предыдущие значения. Этот приём иногда помогает модулю заработать корректно.
            </p>
            <ArticleMedia
              caption="Настройки модуля «Content-Aware Fill»"
              src="legacy/aftereffects/content-aware_fill_settings.png"
              type="image"
            />
          </li>
          <li>
            <p>
              Иногда проблема может быть в неверно установленном цветовом профиле проекта.
              Проверьте настройки цветового пространства во вкладке{" "}
              <mark className="select">«Color»</mark> в{" "}
              <mark className="select">«Project Settings»</mark>, который можно открыть
              комбинацией клавиш <mark className="key">Ctrl + Alt + Shift + K</mark>.
              Попробуйте установить для{" "}
              <mark className="select">«Working Color Space»</mark> значение{" "}
              <mark className="select">«None»</mark>.
            </p>
            <ArticleMedia
              caption="Project Settings"
              src="legacy/aftereffects/change_working_color_space.png"
              type="image"
            />
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-layer-must-match-composition-and-use-default-transform-values"
        tag="3d camera tracker, размер слоя должен соответствовать композиции и использовать значения трансформирования по умолчанию, сброс трансформации, pre-compose, precompose"
        title="Из-за чего появляется «Layer must match Composition and use default transform values»?"
      >
        <p>
          При работе с <mark className="plugin">3D Camera Tracker</mark> слой, который вы
          хотите проанализировать, не должен иметь изменений в позиции, масштабе, повороте
          и других свойствах. Чтобы сбросить все изменения трансформации, нажмите{" "}
          <mark className="key">ПКМ</mark> по слою, раскройте контекстное меню{" "}
          <mark className="select">«Transform»</mark> и выберите{" "}
          <mark className="key">«Reset»</mark>.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/reset_layer_transform.png"
          type="image"
        />
        <p>
          Если вы по какой-то причине не хотите сбрасывать трансформацию слоя, выделите
          его и создайте прекомпозицию комбинацией клавиш{" "}
          <mark className="key">Ctrl + Shift + C</mark>. При создании предварительной
          композиции выберите опцию{" "}
          <mark className="select">«Move all attributes into the new composition»</mark>.
          После этого применяйте <mark className="plugin">3D Camera Tracker</mark> уже к
          новой композиции и начните анализ.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-analysis-solve-failed"
        tag="3d camera tracker, analysis solve failed, ошибка анализа, трекинг камеры, camera tracking error"
        title="Что делать с ошибками «Analysis Solve Failed» или «Unable to solve camera for this frame»?"
      >
        <p>
          Если при использовании <mark className="plugin">3D Camera Tracker</mark> вы
          сталкиваетесь с этими ошибками, причины могут быть разными.
        </p>
        <ul>
          <li>
            Если у исходника слабый контраст, повысьте его с помощью{" "}
            <mark className="plugin">Curves</mark> или{" "}
            <mark className="plugin">Brightness & Contrast</mark> и повторите анализ.
          </li>
          <li>
            Если исходник снят статичной камерой, этот способ трекинга не подойдёт.{" "}
            <mark className="plugin">3D Camera Tracker</mark> отслеживает движение камеры
            в пространстве по изображению и не сможет построить трек, если камера не
            движется.
          </li>
          <li>
            Если оператор сильно тряс руками во время записи видео, сначала выполните
            стабилизацию исходника с помощью эффекта{" "}
            <mark className="plugin">Warp Stabilizer</mark>, а уже потом запускайте анализ
            камеры. Трекер может и проанализирует точки, но результат может вас не
            удовлетворить из-за низкого качества самого исходника после стабилизации.
          </li>
          <li>
            Если вы пытаетесь проанализировать длинное видео, попробуйте разбить его на
            части. Возможно, на каком-то отрезке камера движется слишком резко, что
            вызывает ошибку.
          </li>
          <li>
            <p>
              Попробуйте изменить <mark className="select">«Solve Method»</mark> на другой
              или включить опцию <mark className="select">«Detailed Analysis»</mark> во
              вкладке <mark className="select">«Advanced»</mark> в настройках эффекта.
            </p>
            <ArticleMedia
              caption="Effect Controls"
              src="legacy/aftereffects/detailed_analysis-3d_camera_tracker.png"
              type="image"
            />
          </li>
          <li>
            Если вы уверены, что с исходником всё в порядке, попробуйте перекодировать его
            в монтажный кодек и заменить в проекте с помощью{" "}
            <mark className="select">«Replace Footage»</mark>.
          </li>
        </ul>
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-system-compatibility-report"
        tag="совместимость системы, драйверы, плагины, startup & repair"
        title="Из-за чего появляется окно «System Compatibility Report» при запуске программы?"
      >
        <p>
          В этом окне обычно отображаются возможные проблемы совместимости оборудования с
          программой из-за устаревших или слишком новых версий драйверов, а также
          критические баги плагинов. Не паникуйте — это не ошибка, а предупреждение. Чтобы
          продолжить запуск программы, нажмите{" "}
          <mark className="select">«Continue with known issues»</mark>.
        </p>
        <ArticleMedia
          caption="System Compatibility Report"
          src="legacy/aftereffects/system_compatibility_report.png"
          type="image"
        />
        <p>
          Если вы знаете о причинах несовместимости и готовы работать с некоторыми
          ограничениями, например отсутствием возможности включить{" "}
          <mark className="select">«Draft 3D»</mark>, это окно можно отключить. Для этого
          перейдите в{" "}
          <mark className="select">«Edit» → «Preferences» → «Startup & Repair»</mark> и
          снимите флажок{" "}
          <mark className="select">«Show System Compatibility Issues»</mark>.
        </p>
        <Addition type="info">
          В предыдущих версиях <mark className="app">Adobe After Effects</mark> этот
          параметр находится в разделе <mark className="select">«General»</mark>.
        </Addition>
        <ArticleMedia
          caption="Выключаем проверку совместимости системы"
          src="legacy/aftereffects/show_system_compatibility_issues.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-0xc0000142"
        tag="неподдерживаемое устройство, avx2, ошибка при запуске приложения, требования к процессору"
        title="Что делать с ошибкой «0xc0000142» при запуске приложения?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                Эту ошибку вы можете встретить при попытке запустить{" "}
                <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">24.1 (2024)</mark> или выше. Обычно у неё две
                причины: либо ваш процессор не поддерживает инструкции{" "}
                <mark className="hardware">AVX2</mark>, либо система каким-то образом
                повредилась.
              </p>
              <Divider>Проверяем системные требования</Divider>
              <p>
                Сначала разберёмся с процессором. Хотя{" "}
                <a href="https://helpx.adobe.com/after-effects/system-requirements.html">
                  официально для работы требуется
                </a>{" "}
                минимум <mark className="hardware">Intel Core</mark> 6-го поколения или{" "}
                <mark className="hardware">AMD Ryzen</mark> 1000 и новее, на практике
                программа окажется менее требовательной, если ваше «железо» поддерживает
                инструкции <mark className="hardware">AVX2</mark>. Однако это же значит,
                что она точно не запустится на <mark className="hardware">Intel</mark>{" "}
                3-го поколения и ниже, а также на процессорах{" "}
                <mark className="hardware">AMD</mark> того же поколения и ниже, где этих
                инструкций нет. Так что если ваш процессор не подходит, решение простое:
                либо установите <mark className="app">Adobe After Effects</mark>{" "}
                <mark className="version">23.6 (2023)</mark> или ниже, либо, если
                возможно, обновите «железо».
              </p>
              <Divider>Проверяем целостность системы</Divider>
              <p>
                Если же ваше устройство подходит по всем системным требованиям, а
                программа всё так же отказывается запускаться, скорее всего, вы имеете
                дело с повреждёнными системными файлами Windows. Чтобы проверить их
                целостность, выполните в командной строке от имени администратора команды{" "}
                <mark className="code">sfc /scannow</mark> и{" "}
                <mark className="code">dism /online /cleanup-image /restorehealth</mark>.
              </p>
              <ArticleMedia
                src="5iuDr9WJnOg"
                type="youtube"
              />
              <p>
                Также для уверенности можно попробовать «переустановить» систему без
                потери данных и приложений. На Windows 11 22H2 и выше эта функция доступна
                в центре обновлений, в стандартном приложении{" "}
                <mark className="app">Параметры</mark>. Для этого нужно перейти в{" "}
                <mark className="select">
                  «Центр обновлений Windows» → «Дополнительные параметры» →
                  «Восстановление»
                </mark>{" "}
                и нажать <mark className="select">«Переустановить сейчас»</mark> в{" "}
                <mark className="select">
                  «Устранение неполадок с помощью Центра обновлений Windows»
                </mark>
                . После этого начнётся загрузка и установка образа для восстановления
                целостности системы.
              </p>
              <ArticleMedia
                caption="Устранение неполадок с помощью Центра обновлений Windows"
                src="legacy/fix_problems_with_windows_update.mp4"
                type="video"
              />
              <p>
                В чём суть такого действия? Вы просто устанавливаете систему «поверх»
                существующей. Этот процесс заменяет повреждённые файлы и восстанавливает
                удалённые, которые могли исчезнуть либо из-за ваших неосторожных действий
                с «оптимизаторами», либо повредиться сами по себе. Ваши данные, настройки
                и программы никуда не денутся, однако после такой «переустановки»,
                возможно, придётся заново удалять ненужные компоненты Windows, такие как{" "}
                <mark className="app">Windows Defender</mark> или{" "}
                <mark className="app">Microsoft OneDrive</mark>, если вы удаляли их ранее.
              </p>
              <p>
                Если вы хотите переустановить систему «поверх» на Windows 10 и старых
                сборках Windows 11, вам понадобится оригинальный{" "}
                <mark className="file">ISO</mark>-образ. После скачивания смонтируйте его
                в виртуальный привод через контекстное меню{" "}
                <mark className="app">Проводника</mark> и запустите{" "}
                <mark className="app">setup.exe</mark>. В процессе установки вам предложат
                несколько вариантов — выберите тот, что сохраняет все данные и приложения.
              </p>
              <div className="flexible-links">
                <a href="https://files.rg-adguard.net/category">
                  Скачать оригинальные файлы Microsoft на rg-adguard.net
                </a>
                <a href="https://www.comss.ru/download/page.php?id=2572">
                  Скачать оригинальные образы Windows 10 на Comss
                </a>
                <a href="https://www.comss.ru/download/page.php?id=9234">
                  Скачать оригинальные образы Windows 11 на Comss
                </a>
              </div>
              <Divider>Проверяем конфигурацию системы и BIOS</Divider>
              <p>
                В редких случаях процессор может поддерживать инструкции{" "}
                <mark className="hardware">AVX2</mark>, но они бывают отключены в системе.
                Посмотрите настройки вашего <mark className="term">BIOS</mark> или
                попробуйте ввести команду{" "}
                <mark className="code">bcdedit /set xsavedisable 0</mark> в командной
                строке от имени администратора и перезагрузить компьютер.
              </p>
              <Addition type="info">
                Чтобы снова отключить <mark className="hardware">AVX2</mark>, введите
                команду <mark className="code">bcdedit /set xsavedisable 1</mark> и
                перезагрузите устройство.
              </Addition>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-missing-dll-errors"
        tag="отсутствует visual c++, не удается продолжить выполнение кода, поскольку система не обнаружила dll, для устранения этой проблемы попробуйте переустановить программу"
        title="Что делать с ошибками отсутствия «MSVCP140.dll», «api-ms-win-crt-runtime-l1-1-0.dll» и похожих при запуске программы?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                Скорее всего, вы забыли установить или обновить пакеты{" "}
                <a href="https://gitlab.com/stdout12/vcredist/-/releases/">
                  Microsoft Visual C++ Redistributable
                </a>
                . Они необходимы для корректной работы{" "}
                <mark className="app">Adobe After Effects</mark> и многих других программ{" "}
                <mark className="company">Adobe</mark>.
              </p>
              <p>
                Если установка пакетов не помогла, проверьте текущую версию операционной
                системы<sup>1</sup> и при необходимости обновите её до последней версии,
                либо проверьте её целостность. Для восстановления системы выполните
                <sup>2</sup> в командной строке несколько команд:{" "}
                <mark className="code">sfc /scannow</mark>,{" "}
                <mark className="code">dism /online /cleanup-image /restorehealth</mark> и{" "}
                <mark className="code">chkdsk /f /r</mark>.
              </p>
              <Addition type="info">
                <ul>
                  <li>
                    <sup>1</sup> Узнать текущую версию Windows можно через утилиту{" "}
                    <mark className="app">winver</mark>.
                  </li>
                  <li>
                    {" "}
                    <sup>2</sup> Если такое восстановление не сработало, скачайте образ{" "}
                    <mark className="file">ISO</mark> текущей версии Windows и выполните
                    обновление системы поверх установленной.
                  </li>
                </ul>
              </Addition>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-missing-d3dcompiler"
        tag="d3dcompiler_47.dll, библиотека, отсутствует dll"
        title="Что делать с ошибкой «Не найден файл D3DCompiler_47.dll»?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                Распакуйте архив{" "}
                <a
                  download
                  href="files/D3DCompiler_47.zip"
                >
                  D3DCompiler_47.zip
                </a>
                , откройте папку, соответствующую архитектуре вашей системы, и скопируйте
                оттуда файл <mark className="file">DLL</mark> в директорию с установленной
                программой — по умолчанию это{" "}
                <mark className="path">
                  C:\Program Files\Adobe\Adobe After Effects 20XX
                </mark>
                .
              </p>
            </>
          }
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="fix-ray-traced-3d-not-found"
        tag="ray-traced 3d, 3d рендеринг, устаревший проект"
        title="Из-за чего появляется «Warning: A rendering plug-in was not found. The default rendering plug-in will be substituted»?"
      >
        <p>
          Это предупреждение появляется при открытии старого проекта, использующего
          трёхмерный движок <mark className="plugin">Ray-Traced 3D</mark>, в новых версиях{" "}
          <mark className="app">Adobe After Effects</mark>. Этот движок был удалён начиная
          с <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">17.X (2020)</mark>, поэтому открыть такой проект без
          дополнительных действий не получится.
        </p>
        <p>
          <mark className="plugin">Ray-Traced 3D</mark> впервые появился в{" "}
          <mark className="app">Adobe After Effects CS6</mark>. Чтобы корректно открыть
          проект с этим устаревшим движком, используйте версии{" "}
          <mark className="app">Adobe After Effects</mark> от{" "}
          <mark className="version">CS6</mark> до{" "}
          <mark className="version">16.X (2019)</mark>.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default AeErrors;
