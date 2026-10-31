import React from "react";

import {Divider, Tooltip} from "antd";

import {Helmet} from "react-helmet-async";

import {Link, useLocation} from "react-router-dom";

import Addition from "../components/content/Addition";

import ContentFilter from "../components/content/ContentFilter";

import Footer from "../components/layout/Footer";

import Header from "../components/layout/Header";

import PageTransition from "../components/layout/PageTransition";

import {CopyButton} from "../components/ui/CopyButton";

import {useCopyToClipboard} from "../hooks/useCopyToClipboard";

import {useHashAnchorNavigation} from "../hooks/useHashAnchorNavigation";

import {useIsPageLoaded} from "../hooks/usePageLoad";

export default function ChatRules() {
  const {hash} = useLocation();

  useIsPageLoaded();
  useCopyToClipboard();

  const {handleCopyAnchor} = useHashAnchorNavigation(hash);

  return (
    <div>
      <Helmet>
        <title>rules@aechat</title>
        <link
          href="/icons/favicon.svg"
          rel="icon"
          type="image/svg+xml"
        />
        <meta
          content="Рассказываем об уставе наших чатов"
          name="description"
        />
        <meta
          content="rules@aechat"
          itemProp="name"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          itemProp="image"
        />
        <meta
          content="aechat, dwchat, rules, правила, чат, телеграм, aechat, dwchat, after effects, photoshop"
          name="keywords"
        />
        <meta
          content="website"
          property="og:type"
        />
        <meta
          content="https://aechat.ru/rules"
          property="og:url"
        />
        <meta
          content="rules@aechat"
          property="og:title"
        />
        <meta
          content="Рассказываем об уставе наших чатов"
          property="og:description"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          property="og:image"
        />
        <meta
          content="summary_large_image"
          name="twitter:card"
        />
        <meta
          content="rules@aechat"
          name="twitter:title"
        />
        <meta
          content="Рассказываем об уставе наших чатов"
          name="twitter:description"
        />
        <meta
          content="https://aechat.ru/icons/aechat.png"
          name="twitter:image"
        />
      </Helmet>
      <Header title="rules" />
      <PageTransition className="main">
        <div className="article-container-flex">
          <div className="article-container article-static-container">
            <div className="article-title">
              <h1>Правила AEChat и DWChat</h1>
            </div>
            <h2
              className="article-static-title"
              id="about"
            >
              Описание AEChat и DWChat
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <CopyButton onClick={() => handleCopyAnchor("about")} />
              </Tooltip>
            </h2>
            <div className="article-static-content">
              <section className="article-static-section article-content">
                <p>
                  В чатах{" "}
                  <a
                    href="https://t.me/joinchat/F1DdXtG9LephYWUy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    AEChat
                  </a>{" "}
                  и{" "}
                  <a
                    href="https://t.me/+3LF_B_VK-Nw4YzYy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DWChat
                  </a>{" "}
                  обсуждаются вопросы по соответствующим тематикам.{" "}
                  <a
                    href="https://t.me/joinchat/F1DdXtG9LephYWUy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    AEChat
                  </a>{" "}
                  посвящён <mark className="app">Adobe After Effects</mark>,{" "}
                  <mark className="app">Adobe Premiere</mark> и плагинам для этих
                  программ, а{" "}
                  <a
                    href="https://t.me/+3LF_B_VK-Nw4YzYy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    DWChat
                  </a>{" "}
                  — программам для дизайна, таким как{" "}
                  <mark className="app">Adobe Photoshop</mark>,{" "}
                  <mark className="app">Adobe Illustrator</mark> и{" "}
                  <mark className="app">Figma</mark>. Основной язык общения — русский.
                </p>
                <Addition type="info">
                  Пожалуйста, старайтесь не выходить за рамки тематик чатов, обсуждая,
                  например, другое ПО или компьютерное железо — для этого есть{" "}
                  <Link to="/">другие чаты</Link>.{" "}
                  <i className="chat-rules-muted">
                    Возможны исключения по усмотрению администрации.
                  </i>
                </Addition>
                <Addition type="danger">
                  <ul>
                    <li>
                      Предупреждение для иноязычных пользователей: In{" "}
                      <a
                        href="https://t.me/joinchat/F1DdXtG9LephYWUy"
                        rel="noreferrer"
                        target="_blank"
                      >
                        AEChat
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://t.me/+3LF_B_VK-Nw4YzYy"
                        rel="noreferrer"
                        target="_blank"
                      >
                        DWChat
                      </a>{" "}
                      we communicate exclusively in Russian. If you don&apos;t know
                      Russian, we recommend using an{" "}
                      <a
                        href="https://translate.google.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        online translator
                      </a>{" "}
                      or looking for a chat in a language that you understand.
                    </li>
                    <li>
                      Незнание правил{" "}
                      <b>
                        <u>не освобождает</u>
                      </b>{" "}
                      от ответственности.{" "}
                      <i className="chat-rules-muted">
                        Правила могут не распространяться на действующих членов
                        администрации чата.
                      </i>
                    </li>
                  </ul>
                </Addition>
              </section>
            </div>
            <h2
              className="article-static-title"
              id="tone"
            >
              Правила хорошего тона
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <CopyButton onClick={() => handleCopyAnchor("tone")} />
              </Tooltip>
            </h2>
            <div className="article-static-content">
              <section className="article-static-section article-content">
                <p>
                  Для комфортного и эффективного общения в чате рекомендуется соблюдать
                  несколько простых рекомендаций.
                </p>
                <Addition type="info">
                  Прежде чем задать вопрос, воспользуйтесь поиском по чату, а также
                  загляните в разделы FAQ по <Link to="/aefaq">Adobe After Effects</Link>,{" "}
                  <Link to="/prfaq">Adobe Premiere</Link> или{" "}
                  <Link to="/psfaq">Adobe Photoshop</Link>. Возможно, необходимое решение
                  уже описано в этих источниках.
                </Addition>
                <ul>
                  <li>
                    <p>
                      Если вы только что вошли в чат, изложите свою проблему сразу в своём
                      сообщении, а не начинайте с фраз вроде{" "}
                      <mark className="quote">«Кто шарит в After Effects?»</mark> или{" "}
                      <mark className="quote">«У меня есть вопрос, помогите!»</mark>.
                      Такие «метавопросы» замедляют получение ответа, так как другим
                      участникам приходится тратить время на уточняющие вопросы, чтобы
                      понять, в чём дело.
                    </p>
                    <Addition type="danger">
                      <ul>
                        <li>
                          Если на ваш вопрос откликнулся участник чата — не надо сразу
                          предлагать перейти в личные сообщения. Ему может быть неудобно,
                          да и другим участникам будет полезно, если обсуждение
                          продолжится в чате.
                        </li>
                        <li>
                          Бот в чате может удалять сообщения с упоминанием пользователей,
                          поэтому при формулировке вопроса старайтесь не использовать
                          упоминания через <mark>@</mark>.
                        </li>
                      </ul>
                    </Addition>
                    <p>
                      В примере диалога на зелёном фоне показан чёткий и понятный вопрос,
                      который позволяет участникам чата быстро дать ответ. А в примере
                      диалога на красном фоне демонстрируется неясный вопрос, из-за
                      которого участникам приходится догадываться о сути проблемы или
                      просьбы.
                    </p>
                    <div className="message-flex">
                      <div className="message-incorrect">
                        <div className="message-left">всем плотнейший салам</div>
                        <div className="message-time">Прошло 3 минуты</div>
                        <div className="message-left">бля але, кто живой есть?</div>
                        <div className="message-right">
                          Привет, это не техподдержка{" "}
                          <mark className="company">Adobe</mark>. Если у вас есть вопрос —
                          задайте его сразу. Для нетематических разговоров у нас есть
                          флудилка.
                        </div>
                        <div className="message-left">
                          есть кто шарит в интерфейсе афтера?
                        </div>
                        <div className="message-right">
                          Допустим, есть. Что конкретно вас интересует?
                        </div>
                        <div className="message-left">
                          не могу объяснить норм, можете в лс плиз??
                        </div>
                        <div className="message-right">
                          Опишите свой вопрос здесь, в чате. Иначе зачем вы здесь
                          оказались? Просто привлечь внимание и отнимать чужое время?
                        </div>
                        <div className="message-left">чел ебать ты токсик</div>
                        <div className="message-time">Прошло N минут</div>
                        <div className="message-left">
                          ладно, исправляюсь... поставил скрипт, а как его закрепить в
                          рабочей области, чтобы как панель был?
                        </div>
                        <div className="message-right">
                          Вот, другое дело. Нужно поместить jsx-файл скрипта в подпапку{" "}
                          <mark className="path">ScriptUI Panels</mark> в папке с
                          программой, а не просто в папку{" "}
                          <mark className="path">Scripts</mark>. После этого он появится в
                          меню <mark className="select">«Window»</mark>, и его можно будет
                          открыть и закрепить как панель.
                        </div>
                        <div className="message-time">
                          Время переписки: ~5–30 минут с учётом времени ожидания ответа
                        </div>
                      </div>
                      <div className="message-correct">
                        <div className="message-left">
                          Всем привет! Как закрепить окно скрипта в рабочей области, если
                          он установлен в папку <mark className="path">Scripts</mark>?
                        </div>
                        <div className="message-right">
                          Переместите jsx-файл в папку{" "}
                          <mark className="path">ScriptUI Panels</mark>, расположенную
                          внутри папки <mark className="path">Scripts</mark>. После этого
                          скрипт появится в меню <mark className="select">Window</mark>,
                          где его можно будет открыть и закрепить.
                        </div>
                        <div className="message-left">Спасибо, всё получилось!</div>
                        <div className="message-time">Время переписки: ~30 секунд</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    Если у вас возникла проблема, для её эффективного решения предоставьте
                    как можно больше информации. Опишите последовательность ваших действий
                    и покажите сообщение об ошибке, если оно есть. Также укажите версию
                    программы и важные детали проекта, такие как используемые эффекты,
                    формат исходников и настройки композиции. При необходимости можно
                    добавить и характеристики вашего устройства. Чем подробнее будет
                    описание, тем быстрее получится найти причину неполадки.
                  </li>
                  <li>
                    <p>
                      Чтобы показать проблему, не снимайте экран на телефон: на таких
                      записях часто неразборчивы важные детали, а в кадр не попадает вся
                      нужная область. Вопрос к скриншоту или видео пишите в том же
                      сообщении, а не в следующем. Это же касается и текста ошибок: не
                      публикуйте их машинный перевод, например из{" "}
                      <mark className="app">Google Lens</mark>, поскольку неточные
                      формулировки только замедляют поиск решения.
                    </p>
                    <Addition type="warning">
                      Администрация первое время может закрыть глаза на фото экрана,
                      сделанное с телефона. Но если это повторится, сообщение могут
                      удалить, а отправителя перевести в режим чтения, чтобы он научился
                      делать скриншоты.
                    </Addition>
                    <ContentFilter
                      macContent={
                        <>
                          <p>
                            Для создания скриншота и записи экрана предусмотрены полезные
                            комбинации клавиш, которые не раз пригодятся в жизни.
                          </p>
                          <ul className="chat-rules-list-compact">
                            <li>
                              <mark className="key">Ctrl + Command + Shift + 3</mark>{" "}
                              позволяет сделать скриншот всего экрана. Изображение
                              автоматически сохранится в буфер обмена, откуда его можно
                              вставить в <mark className="app">Telegram</mark>.
                            </li>
                            <li>
                              <mark className="key">Ctrl + Command + Shift + 4</mark>{" "}
                              позволяет выделить и сделать скриншот только определённой
                              области экрана. Как и в предыдущем случае, изображение
                              попадёт в буфер обмена для дальнейшего использования.
                            </li>
                            <li>
                              <mark className="key">Command + Shift + 5</mark> откроет
                              утилиту<sup>1</sup> для записи всего экрана или только
                              выбранной его части.
                              <Addition type="warning">
                                <sup>1</sup> Стандартные средства <mark>macOS</mark> могут
                                записывать видео так, что не у всех участников чата оно
                                открывается корректно. Чтобы полученный скринкаст
                                открывался у всех — перекодируйте видео в{" "}
                                <mark className="video">H.264</mark> и немного понизьте
                                его разрешение через{" "}
                                <mark className="app">Shutter Encoder</mark> или
                                используйте сторонние утилиты для записи экрана, например{" "}
                                <mark className="app">OBS</mark>
                                <sup>2</sup>.
                                <ul>
                                  <li>
                                    <sup>2</sup> В <mark className="app">OBS</mark>{" "}
                                    рекомендуется изменить формат записи с{" "}
                                    <mark className="video">MKV</mark>, который
                                    используется по умолчанию, на{" "}
                                    <mark className="video">MP4</mark>. Это можно сделать
                                    в настройках программы:{" "}
                                    <mark className="select">
                                      «Файл» → «Настройки» → «Вывод» → «Формат записи»
                                    </mark>{" "}
                                    или{" "}
                                    <mark className="select">
                                      «File» → «Settings» → «Output» → «Recording Format»
                                    </mark>
                                    .
                                  </li>
                                </ul>
                              </Addition>
                            </li>
                          </ul>
                          <Addition type="info">
                            Подробнее о стандартных средствах создания{" "}
                            <a href="https://support.apple.com/ru-ru/102646">
                              скриншотов
                            </a>{" "}
                            и{" "}
                            <a href="https://support.apple.com/ru-ru/102618">
                              скринкастов
                            </a>{" "}
                            на <mark>macOS</mark> вы можете прочитать на официальном сайте{" "}
                            <mark className="company">Apple</mark>.
                          </Addition>
                        </>
                      }
                      windowsContent={
                        <>
                          <p>
                            Чтобы сделать скриншот в <mark>Windows</mark>, используйте
                            клавишу <mark className="key">Print Screen</mark> или
                            стандартный инструмент <mark className="app">«Ножницы»</mark>
                            <sup>1</sup>, который вызывается комбинацией клавиш{" "}
                            <mark className="key">Win + Shift + S</mark>. Также{" "}
                            <mark className="app">«Ножницы»</mark> позволяют записывать
                            скринкасты<sup>2</sup>.
                          </p>
                          <Addition type="info">
                            <ul>
                              <li>
                                <sup>1</sup> Если <mark className="app">«Ножницы»</mark>{" "}
                                были вырезаны из вашей сборки <mark>Windows</mark> —
                                скачать их обратно можно в{" "}
                                <mark className="app">Microsoft Store</mark> по{" "}
                                <a href="https://apps.microsoft.com/detail/9MZ95KL8MR0L">
                                  этой
                                </a>{" "}
                                ссылке.
                              </li>
                              <li>
                                <sup>2</sup> <mark className="word">Скринкаст</mark> — это
                                видеозапись экрана, которая наглядно демонстрирует
                                действия пользователя или работу программы, например, для
                                показа проблемы.
                              </li>
                            </ul>
                          </Addition>
                          <p>
                            Если по каким-то причинам вы не можете или не хотите
                            использовать <mark className="app">«Ножницы»</mark> — есть ряд
                            сторонних утилит для съёмки экрана и создания скриншотов.
                          </p>
                          <div className="flexible-links chat-rules-links-inline">
                            <a
                              href="https://github.com/ShareX/ShareX/releases"
                              rel="noreferrer"
                              target="_blank"
                            >
                              ShareX
                            </a>
                            <a
                              href="https://www.ntwind.com/software/wincam.html"
                              rel="noreferrer"
                              target="_blank"
                            >
                              WinCam
                            </a>
                            <a
                              href="https://www.nvidia.com/en-eu/software/nvidia-app/"
                              rel="noreferrer"
                              target="_blank"
                            >
                              NVIDIA App
                            </a>
                            <a
                              href="https://www.amd.com/en/products/software/adrenalin.html"
                              rel="noreferrer"
                              target="_blank"
                            >
                              AMD Software: Adrenalin Edition
                            </a>
                          </div>
                        </>
                      }
                    />
                  </li>
                  <li>
                    Если вы только начинаете свой путь в сфере монтажа или графического
                    дизайна и хотите задать вопрос — пожалуйста, не нужно давить на
                    жалость и не делать акцент на том, что вы новичок. Это не ускорит
                    получение ответа. Большинство ответов на{" "}
                    <mark className="word">«ламерские» вопросы</mark>, возникающие в
                    начале изучения программ, находятся в закреплённом сообщении чата, в
                    разделах <mark>FAQ</mark> на этом сайте и в первых строках поисковой
                    выдачи условного <mark className="app">Яндекса</mark>.
                  </li>
                  <li>
                    <p>
                      Если ваш вопрос остался незамеченным, не нужно жаловаться и ныть об
                      этом. В нашем сообществе принято помогать друг другу, но никто не
                      обязан решать чужие проблемы. Помните, что у участников и
                      администрации может просто не быть нужных знаний или готового
                      решения для вашей конкретной ситуации. Поэтому будьте готовы к тому,
                      что некоторые вопросы могут остаться без ответа.
                    </p>
                    <Addition type="warning">
                      Пожалуйста, не повторяйте свой вопрос слишком часто, поскольку это
                      может привести к запрету на отправку сообщений по усмотрению
                      администрации чата.
                    </Addition>
                  </li>
                  <li>
                    Если ваш вопрос не касается работы чата, каналов{" "}
                    <a
                      href="https://t.me/s/aetemp"
                      title="AETemp в Telegram"
                    >
                      AETemp
                    </a>
                    ,{" "}
                    <a
                      href="https://t.me/s/designworld"
                      title="Design World в Telegram"
                    >
                      Design World
                    </a>{" "}
                    и сервиса <a href="https://histock.ru/?ref=509060394">HiStock</a>, не
                    нужно писать администраторам в личные сообщения. Если не получается
                    войти в чат или писать сообщения — убедитесь, что вы нажали на кнопку{" "}
                    <mark className="select">«Перейти в чат»</mark> и не нарушали правила.
                  </li>
                  <li>
                    В чате можно делиться ссылками<sup>1</sup> на обучающие материалы,
                    включая <mark className="app">YouTube</mark>, в качестве ответа на
                    вопросы других пользователей. Приветствуется публикация собственных
                    решений<sup>2</sup> различных проблем, в том числе нестандартных.
                    <Addition type="info">
                      <ul>
                        <li>
                          <sup>1</sup> Учтите, что бот может удалять ссылки на посты из
                          каналов, не входящие в белый список. Если хотите поделиться
                          таким каналом, отправьте ссылку собеседнику в личные сообщения.
                        </li>
                        <li>
                          <sup>2</sup> Если ваш ответ содержит полезную информацию по
                          часто задаваемому вопросу — он может быть добавлен в{" "}
                          <mark>FAQ</mark> на этом сайте.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    <p>
                      Не стоит публиковать и не доверять слепо ответам, сгенерированным
                      нейросетями вроде <mark className="app">ChatGPT</mark>,{" "}
                      <mark className="app">DeepSeek</mark> или{" "}
                      <mark className="app">Qwen</mark>. Они часто ошибаются в специфике
                      различных программ, особенно если при генерации ответа был отключён
                      поиск в интернете. Если вы не уверены в ответе, лучше воздержитесь
                      от него, чтобы не вводить автора вопроса в заблуждение и не
                      затягивать обсуждение.
                    </p>
                    <Addition type="warning">
                      Администрация чата оставляет за собой право удалять такие ответы без
                      предупреждения, если они не несут практической ценности.
                    </Addition>
                    <p>
                      Другое дело — выражения для{" "}
                      <mark className="app">Adobe After Effects</mark>. Если вы хотите
                      сгенерировать для этого код, сначала проверьте его
                      работоспособность, при необходимости доработайте и объясните, как им
                      пользоваться. После этого можно смело делиться готовым выражением
                      или скриптом.
                    </p>
                  </li>
                </ul>
              </section>
            </div>
            <h2
              className="article-static-title"
              id="ban"
            >
              Что нельзя делать в чатах?
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <CopyButton onClick={() => handleCopyAnchor("ban")} />
              </Tooltip>
            </h2>
            <div className="article-static-content">
              <section className="article-static-section article-content">
                <ul>
                  <li>
                    В чатах запрещены спам, флуд<sup>1</sup>, чрезмерное употребление
                    нецензурной лексики, оскорбления, упоминания родственников в
                    негативном ключе, токсичное поведение.
                    <Addition type="info">
                      <sup>1</sup> Под флудом подразумевается уход от тематики чата, а
                      также повторяющиеся или бессмысленные сообщения, в том числе фото,
                      видео и стикеры.
                    </Addition>
                  </li>
                  <li>
                    В чатах не приветствуются политические дискуссии, а также коверканье
                    названий наций и стран. Также не стоит использовать в своём профиле
                    провокационные ники и сомнительные аватарки, например с нацистской
                    символикой или расистскими высказываниями.
                  </li>
                  <li>
                    В чатах не место порнографии или любому другому NSFW-контенту
                    независимо от контекста.
                  </li>
                  <li>
                    Запрещены купля, продажа и перепродажа товаров, шаблонов, «доступов»,
                    публикация реферальных ссылок, а также реклама любых ресурсов без
                    согласования с администрацией.
                  </li>
                  <li>
                    Запрещено обсуждение способов обхода блокировок различных сервисов во
                    избежание привлечения внимания третьих лиц, лоббирующих данные
                    блокировки.
                  </li>
                  <li>
                    Не рекомендуется отправлять в чат ссылки на опросы, созданные в{" "}
                    <mark className="app">Google Forms</mark> или аналогах, особенно если
                    вы только вошли в чат или мало участвуете в дискуссиях. Опросы часто
                    воспринимаются участниками как спам и мало кому интересны.
                  </li>
                </ul>
                <Addition type="warning">
                  Если после блокировки или запрета на отправку сообщений вы решите зайти
                  с другого аккаунта, перманентно будут заблокированы оба аккаунта,
                  независимо от первоначального наказания.
                </Addition>
              </section>
            </div>
            <h2
              className="article-static-title"
              id="work"
            >
              О вакансиях и резюме
              <Tooltip title="Скопировать ссылку в буфер обмена">
                <CopyButton onClick={() => handleCopyAnchor("work")} />
              </Tooltip>
            </h2>
            <div className="article-static-content">
              <section className="article-static-section article-content">
                <p>
                  Для публикации вакансий, заказов или резюме соблюдайте простые
                  требования к размещению. Это поможет сэкономить время всем участникам.
                </p>
                <Addition type="warning">
                  Администрация оставляет за собой право удалить ваше объявление, если в
                  нём ничего не указано, кроме{" "}
                  <mark className="quote">«есть заказ, пишите в лс»</mark>. Большинству
                  потенциальных исполнителей неинтересно переходить в личные сообщения
                  только для того, чтобы узнать детали задачи.
                </Addition>
                <Divider>Правила для публикации вакансии</Divider>
                <ul>
                  <li>
                    Укажите хештег <mark className="tag">#работа</mark> в начале вашего
                    объявления. Это позволит быстро найти ваше объявление среди множества
                    других сообщений в чате.
                  </li>
                  <li>
                    <p>
                      Подробно опишите техническое задание или суть задачи, по возможности
                      с примерами. Не отправляйте потенциальных исполнителей за более
                      подробными разъяснениями в личные сообщения — так вы сузите круг
                      любопытствующих и быстрее найдёте подходящего специалиста.
                    </p>
                    <Addition type="info">
                      Если вы по каким-то причинам не хотите разглашать техническое
                      задание, хотя бы кратко опишите его тему и суть.
                    </Addition>
                  </li>
                  <li>
                    <p>
                      Укажите бюджет, цену или ставку. Не удивляйтесь негативной реакции,
                      если вы не указали сумму или предложили слишком низкую оплату.
                    </p>
                    <Addition type="info">
                      Если вы не знаете рыночную стоимость работы, укажите, сколько готовы
                      потратить, и добавьте, что готовы рассмотреть предложения
                      исполнителей. Так вы с большей вероятностью сойдётесь на оптимальной
                      для обеих сторон сумме.
                    </Addition>
                  </li>
                  <li>
                    Также укажите, где вам будет удобнее общаться с потенциальным
                    исполнителем. Если у вас в настройках конфиденциальности{" "}
                    <mark className="select">«Кто может отправлять мне сообщения»</mark>{" "}
                    установлено значение{" "}
                    <mark className="select">«Контакты и Premium-подписчики»</mark>,
                    временно измените его на <mark className="select">«Все»</mark> или
                    напишите потенциальному исполнителю первым, если он сам попросит.
                  </li>
                </ul>
                <Divider>Правила для самопиара или резюме</Divider>
                <ul>
                  <li>
                    <p>
                      Укажите хештег <mark className="tag">#резюме</mark> в начале вашей
                      записи и приложите<sup>1</sup> несколько работ, чтобы
                      продемонстрировать свои навыки.
                    </p>
                    <Addition type="warning">
                      Публикация резюме разрешена раз в 30 дней. Если вы редко пишете в
                      чат — раз в 60 дней. При нарушении этого срока сообщение будет
                      удалено.
                    </Addition>
                    <Addition type="info">
                      <p>
                        <sup>1</sup> Если вы по каким-то причинам не хотите перезаливать
                        ваши видео, прикрепите ссылку на портфолио<sup>2</sup>, например
                        на <a href="https://www.behance.net/">Behance</a>,{" "}
                        <a href="https://disk.yandex.ru/">Яндекс.Диск</a>,{" "}
                        <a href="https://kwork.ru/">Kwork</a> или другие площадки.
                      </p>
                      <ul>
                        <li>
                          <sup>2</sup> Ссылка на канал в{" "}
                          <mark className="app">Telegram</mark> с вашим портфолио может
                          удаляться ботом. Если портфолио находится только там —
                          прикрепите его к своему профилю и укажите это в резюме. Чтобы
                          прикрепить канал к профилю — он должен быть публичным.
                        </li>
                      </ul>
                    </Addition>
                  </li>
                  <li>
                    Укажите ваше направление, навыки и программы, которыми вы свободно
                    владеете. Минимальный востребованный набор — уверенное владение{" "}
                    <mark className="app">Adobe After Effects</mark>,{" "}
                    <mark className="app">Adobe Premiere</mark> и{" "}
                    <mark className="app">Adobe Photoshop</mark>, а также базовые знания в
                    трёхмерных редакторах, например <mark className="app">Blender</mark>{" "}
                    или <mark className="app">Cinema 4D</mark>.
                  </li>
                  <li>
                    <p>
                      Укажите минимальную ставку или стоимость определённых видов работ.
                      Учтите, что при завышенной цене, не соответствующей качеству, вряд
                      ли быстро найдёте заказчика.
                    </p>
                    <Addition type="info">
                      Если вы не можете определиться со стоимостью, предложите заказчику
                      самому назвать цену. Не занижайте, но и не переоценивайте свои
                      услуги. Если предложенная цена покажется вам слишком низкой, всегда
                      можно договориться, и, возможно, вам удастся получить сумму выше
                      рыночной.
                    </Addition>
                  </li>
                </ul>
                <Addition type="danger">
                  Бывают случаи, когда заказчик или исполнитель обманывает одну из сторон.
                  Например, заказчик не оплачивает выполненную работу, а исполнитель — не
                  выполняет оплаченный заказ. В таком случае, если проблема не решается
                  лично, — вы можете пожаловаться и придать ситуацию огласке в наших чатах
                  или в соответствующих каналах из раздела{" "}
                  <mark className="select">«Чёрный список»</mark> на{" "}
                  <Link to="/">главной странице</Link>.
                </Addition>
              </section>
            </div>
            <Footer
              initialYear={2021}
              title="aechat + dwchat"
            />
          </div>
        </div>
      </PageTransition>
    </div>
  );
}
