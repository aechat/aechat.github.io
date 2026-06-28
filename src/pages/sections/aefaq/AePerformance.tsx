import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const AePerformance: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="choose-computer"
        tag="pc, железо, выбор пк, сборка, системные требования, hardware recommendations"
        title="Какой компьютер или ноутбук нужен для работы в программе?"
      >
        <p>
          Иногда мощности текущего устройства оказывается недостаточно для комфортной
          работы в <mark className="app">Adobe After Effects</mark>. В таких случаях
          возникает вопрос: какое устройство подойдёт, чтобы работать с композициями без
          особых проблем?
        </p>
        <Addition type="danger">
          <ul>
            <li>
              <p>
                В статье приведены лишь общие советы по подбору «железа» для работы в
                творческих программах. Это не руководство к покупке конкретного
                устройства. Окончательное решение остаётся за вами.
              </p>
              <p>
                Если сомневаетесь в своём выборе: спросите совета у специалистов или в
                технических чатах, ссылки на которые есть на{" "}
                <a href="/">главной странице сайта</a>.
              </p>
            </li>
            <li>
              Тема выбора блоков питания, накопителей, мониторов и другой периферии в этой
              статье не затрагивается.
            </li>
          </ul>
        </Addition>
        <Addition type="info">
          Системные требования для <mark className="app">Adobe After Effects</mark> вы
          можете найти на{" "}
          <a href="https://helpx.adobe.com/after-effects/system-requirements.html">
            официальном сайте Adobe
          </a>
          .
        </Addition>
        <p>
          Прежде чем искать или приобретать новое устройство, определитесь с вашими
          задачами, подумайте, что вам больше подходит: ноутбук<sup>1</sup> или
          стационарный ПК, и выберите удобную для себя операционную систему. Версии{" "}
          <mark className="app">Adobe After Effects</mark> для Windows и macOS практически
          не отличаются по функциональности, поэтому проекты, созданные в версии для
          Windows, можно спокойно открыть на macOS. Однако на Windows обычно проще найти
          «народные» версии плагинов и дополнительных инструментов, чем на macOS.
        </p>
        <Addition type="info">
          <sup>1</sup> При выборе ноутбука обращайте внимание на диагональ дисплея:
          работать в <mark className="app">Adobe After Effects</mark> на 16 дюймах и
          больше значительно удобнее, чем на 14 и меньше.{" "}
          <em className="article-note-muted">
            Однако большие ноутбуки не всегда удобно носить с собой.
          </em>
        </Addition>
        <p>
          Для быстрой работы в <mark className="app">Adobe After Effects</mark> важно
          обратить внимание на три с половиной ключевых компонента устройства: мощный
          процессор, достаточный объём оперативной памяти и быстрый накопитель. Оставшаяся
          половинка — видеокарта. Она также влияет на производительность, но не всегда.{" "}
          <em className="article-note-muted">
            О ней поговорим в <a href="#about-app-performance">отдельной статье</a>.
          </em>
        </p>
        <Divider>Рекомендации по комплектующим для стационарного ПК на Windows</Divider>
        <ul>
          <li>
            <p>
              Для начала стоит определиться с вашими предпочтениями в мире процессоров:{" "}
              <mark className="hardware">Intel Core</mark> или{" "}
              <mark className="hardware">AMD Ryzen</mark>. Существенной разницы между ними
              нет: оба «лагеря» подходят для работы в творческих программах. Но важно
              помнить: процессор является ключевым комплектующим в сборке для{" "}
              <mark className="app">Adobe After Effects</mark>, поэтому выбирайте
              достаточно производительный вариант. Чем он мощнее, тем быстрее будут
              рендериться кадры в программе.
            </p>
            <ul>
              <li>
                <p>
                  Процессоры <mark className="hardware">Intel</mark> лучше подходят для
                  работы с видеоисходниками в кодеках <mark className="video">H.264</mark>{" "}
                  и <mark className="video">H.265</mark> за счёт встроенного видеоядра,
                  отвечающего за декодирование. Если вы собираете новый стационарный ПК,
                  лучше остановиться на актуальных сокетах{" "}
                  <mark className="hardware">LGA 1700</mark> или{" "}
                  <mark className="hardware">LGA 1851</mark>.
                </p>
                <p>
                  В качестве бюджетного варианта можно выбрать{" "}
                  <mark className="hardware">Intel Core i5-13600K</mark> или{" "}
                  <mark className="hardware">Intel Core i5-14600K</mark>. В качестве
                  оптимального варианта подойдёт{" "}
                  <mark className="hardware">Intel Core Ultra 7 265K</mark> или{" "}
                  <mark className="hardware">Intel Core i7-14700K</mark>.
                </p>
                <Addition type="warning">
                  <ul>
                    <li>
                      Процессоры <mark className="hardware">Intel Core</mark> 13-го и
                      14-го поколений известны проблемами со стабильностью, которые
                      возникали в ранних партиях. Это связано с повышенным рабочим
                      напряжением, которое процессор запрашивал самостоятельно, что могло
                      приводить к быстрому износу и даже деградации до неработоспособного
                      состояния. <mark className="company">Intel</mark> выпустила
                      несколько обновлений прошивок для производителей материнских плат и
                      утверждает, что проблема деградации исправлена.
                    </li>
                    <li>
                      Не рекомендуется брать процессоры{" "}
                      <mark className="hardware">Intel</mark> без встроенного видеоядра, с
                      суффиксом <mark className="term">F</mark> или{" "}
                      <mark className="term">KF</mark>, даже если кто-то убеждает в
                      обратном.{" "}
                      <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%80%D0%BA%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%BE%D0%B2_%D1%84%D0%B8%D1%80%D0%BC%D1%8B_Intel">
                        Подробнее о маркировке процессоров Intel...
                      </a>
                    </li>
                  </ul>
                </Addition>
              </li>
              <li>
                <p>
                  Процессоры <mark className="hardware">AMD</mark> также являются хорошим
                  выбором благодаря отличному соотношению цены и производительности на
                  ядро, если вы создаёте композиции с нуля без частого использования
                  видеоисходников. На сегодняшний день платформа{" "}
                  <mark className="hardware">AM4</mark> уже неактуальна, поэтому, если вы
                  собираете новый системный блок на <mark className="hardware">AMD</mark>,
                  собирайте сразу на платформе <mark className="hardware">AM5</mark>.
                </p>
                <p>
                  В качестве бюджетного варианта можно взять практически любой процессор с
                  6 ядрами или больше, например{" "}
                  <mark className="hardware">AMD Ryzen 5 7500F</mark> или{" "}
                  <mark className="hardware">AMD Ryzen 7 7700</mark>. Оптимальным выбором
                  будет <mark className="hardware">AMD Ryzen 9 7900X</mark> или мощнее.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              Теперь об оперативной памяти. Многие пользователи{" "}
              <mark className="app">Adobe After Effects</mark> знают, что программа
              известна высоким потреблением оперативной памяти, поэтому для комфортной
              работы потребуется минимум 32 ГБ оперативной памяти типа{" "}
              <mark className="hardware">DDR5</mark>, а лучше — 64 ГБ или больше.
            </p>
            <Addition type="info">
              Рекомендуется <a href="#configure-swapfile">настроить файл подкачки</a>,
              даже если у вас установлено много оперативной памяти. Это позволит реже
              сталкиваться с ошибками её нехватки, например{" "}
              <mark className="warning">«Out of Memory»</mark>.
            </Addition>
          </li>
          <li>
            <p>
              Что касается видеокарты, <mark className="app">Adobe After Effects</mark>{" "}
              может задействовать её не во всех сценариях, даже если везде включено
              аппаратное ускорение. Выбор ускорителя зависит от вашего бюджета: для старта
              подойдёт <mark className="hardware">NVIDIA RTX 4060 Ti</mark> или{" "}
              <mark className="hardware">NVIDIA RTX 5060 Ti</mark> с 16 ГБ видеопамяти
              или, при ограниченном бюджете, —{" "}
              <mark className="hardware">NVIDIA RTX 3060</mark> с 12 ГБ. На момент
              написания статьи оптимальным вариантом по соотношению
              «цена–производительность» для работы в программах, требующих видеокарту,
              считается <mark className="hardware">NVIDIA RTX 5070 Ti</mark>.
            </p>
            <Addition type="danger">
              <p>
                Видеокарты от <mark className="hardware">AMD</mark> считаются не лучшим
                выбором для серьёзной работы в программах{" "}
                <mark className="company">Adobe</mark> и другом творческом софте.
                Программная поддержка для них развита слабее, поэтому многие эффекты с
                аппаратным ускорением могут работать нестабильно.
              </p>
              <p>
                В последние годы разработчики начали адаптировать свои эффекты под{" "}
                <mark className="hardware">AMD</mark>, например{" "}
                <mark className="company">Boris FX</mark> с пакетом{" "}
                <mark className="plugin">Sapphire</mark>. Но общая ситуация всё ещё в
                пользу <mark className="hardware">NVIDIA</mark>: под её видеокарты
                оптимизировано значительно больше плагинов.
              </p>
            </Addition>
          </li>
        </ul>
        <Divider>Рекомендации по ноутбукам на Windows</Divider>
        <ul>
          <li>
            <p>
              Если у вас нет стационарного компьютера и вы не планируете его покупать,
              поскольку часто работаете с серьёзными проектами вне дома или часто
              переезжаете, то при солидном бюджете стоит обратить внимание на мощные
              портативные модели с дискретными видеокартами{" "}
              <mark className="hardware">NVIDIA</mark>, например{" "}
              <mark className="copy">Lenovo ThinkBook 16p</mark>,{" "}
              <mark className="copy">ASUS Zephyrus</mark> или{" "}
              <mark className="copy">Honor MagicBook Pro 16</mark>.
            </p>
            <Addition type="warning">
              <ul>
                <li>
                  Модели с дискретными видеокартами{" "}
                  <mark className="hardware">NVIDIA</mark>, такими как{" "}
                  <mark className="hardware">RTX 5060</mark> или{" "}
                  <mark className="hardware">RTX 4050</mark>, стоит выбирать с
                  осторожностью: в некоторых бюджетных ноутбуках процессор может быть
                  слабым, а теплопакет (TDP) комплектующих — ограничен, из-за чего
                  реальная производительность может оказаться ниже ожидаемой.
                </li>
                <li>
                  Производительные ноутбуки могут быть тяжелее и быстрее разряжаться, чем
                  среднебюджетные ультрабуки.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <p>
              Если у вас уже есть мощный стационарный компьютер, но для правок «на ходу»
              или быстрой сборки проекта нужен ноутбук, а финальный рендер вы будете
              выполнять на основной машине, то можно рассмотреть модель без дискретной
              видеокарты. Для таких задач не обязательно покупать «игровой» ноутбук.
              Подойдут, например, <mark className="copy">ASUS Vivobook Pro</mark> или{" "}
              <mark className="copy">Lenovo ThinkBook 16+</mark> в комплектации с 32 ГБ
              оперативной памяти на <mark className="hardware">AMD Ryzen</mark> или{" "}
              <mark className="hardware">Intel Core</mark>
              <sup>1</sup>.
            </p>
            <Addition type="warning">
              <ul>
                <li>
                  <sup>1</sup> Некоторые сторонние эффекты, например{" "}
                  <mark className="plugin">Element 3D</mark> или{" "}
                  <mark className="plugin">Dehancer Pro</mark>, могут некорректно работать
                  на встроенных видеочипах{" "}
                  <mark className="hardware">Intel HD Graphics</mark> и{" "}
                  <mark className="hardware">Intel Arc</mark> из-за отсутствия поддержки
                  со стороны их разработчиков. Встроенные видеочипы от{" "}
                  <mark className="hardware">AMD</mark> в этом плане выглядят выигрышнее.
                </li>
                <li>
                  Если вам важна точность цветопередачи, внимательно изучайте
                  характеристики экрана. В бюджетных моделях матрицы могут иметь
                  ограниченный цветовой охват и не покрывать 100% пространства{" "}
                  <mark className="color-space">sRGB</mark>. Также обратите внимание на
                  максимальную яркость: для комфортной работы в условиях яркого освещения
                  она должна быть не ниже 400 кд/м².
                </li>
                <li>
                  Не стоит брать ноутбуки на Windows с процессорами{" "}
                  <mark className="hardware">Snapdragon X Elite</mark>, которых пока мало
                  в продаже. Это архитектура <mark className="term">ARM</mark>, а не
                  привычная <mark className="term">X86-64</mark>, и далеко не все
                  творческие программы адаптированы под неё. Хоть и существует эмулятор{" "}
                  <mark className="app">Windows Prism</mark>, позволяющий запускать{" "}
                  <mark className="term">X86-64</mark>-приложения на{" "}
                  <mark className="term">ARM</mark>, их стабильность и скорость работы
                  заметно уступают программам, собранным специально для{" "}
                  <mark className="term">ARM</mark>.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
        <Divider>Рекомендации по устройствам на macOS</Divider>
        <ul>
          <li>
            <p>
              Если вы хотите купить первый ноутбук от{" "}
              <mark className="company">Apple</mark> или переезжаете с{" "}
              <mark className="copy">MacBook</mark> на базе{" "}
              <mark className="hardware">Intel</mark>, посмотрите в сторону{" "}
              <mark className="copy">MacBook Air</mark> на чипе{" "}
              <mark className="hardware">Apple M4</mark> или{" "}
              <mark className="copy">MacBook Pro</mark> на чипе{" "}
              <mark className="hardware">Apple M3 Pro</mark> или новее. Рекомендуется
              выбирать комплектацию с объёмом оперативной памяти от 16 ГБ и SSD от 512 ГБ.
            </p>
            <Addition type="warning">
              <ul>
                <li>
                  Работа в <mark className="app">Adobe After Effects</mark> и подобных
                  программах с 8 ГБ оперативной памяти может быть затруднительной,
                  несмотря на то что macOS эффективно управляет оперативной памятью за
                  счёт её сжатия и использования файла подкачки.
                </li>
                <li>
                  Современные <mark className="copy">MacBook Air</mark> не имеют
                  вентиляторов и оснащены только пассивной системой охлаждения, поэтому
                  при длительном рендере или работе со сложными проектами их
                  производительность будет снижаться во избежание перегрева.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <p>
              Если вы редко путешествуете и ищете стационарное решение, а ноутбуки{" "}
              <mark className="copy">MacBook</mark> кажутся слишком дорогими, обратите
              внимание либо на <mark className="copy">Mac Mini</mark> с чипом{" "}
              <mark className="hardware">Apple M4</mark> и мощнее, либо на{" "}
              <mark className="copy">Mac Studio</mark> с чипом{" "}
              <mark className="hardware">Apple M3 Max</mark> и мощнее.
            </p>
            <p>
              <mark className="copy">Mac Studio</mark>, в отличие от{" "}
              <mark className="copy">Mac Mini</mark>, предлагает более производительные
              чипы линеек <mark className="hardware">Max</mark> и{" "}
              <mark className="hardware">Ultra</mark>, улучшенную систему охлаждения и
              большее количество портов. Эти компьютеры станут хорошим выбором, если у вас
              уже есть монитор, клавиатура и мышь. В качестве минимальной конфигурации
              рекомендуется рассматривать модели с 16–24 ГБ оперативной памяти и SSD
              объёмом от 512 ГБ.
            </p>
          </li>
        </ul>
        <Divider>Дополнительные материалы</Divider>
        <div className="flexible-links">
          <a href="https://www.pugetsystems.com/solutions/video-editing-workstations/adobe-after-effects/hardware-recommendations/">
            Рекомендации по железу от Puget Systems
          </a>
          <a href="https://helpx.adobe.com/premiere-pro/kb/hardware-recommendations.html">
            Рекомендации по оборудованию от Adobe
          </a>
          <a href="https://www.pugetsystems.com/labs/articles/what-h-264-and-h-265-hardware-decoding-is-supported-in-premiere-pro-2120/">
            Какое «железо» поддерживает аппаратное ускорение H.264 и H.265?
          </a>
        </div>
        <ArticleMedia
          src="x0YNsn4TtGM"
          type="youtube"
        />
        <ArticleMedia
          src="sjxG4clyMEs"
          type="youtube"
        />
        <ArticleMedia
          src="wdXf4ngU4fM"
          type="youtube"
        />
        <ArticleMedia
          src="8_xmXM_XMS4"
          type="youtube"
        />
        <ArticleMedia
          src="bbcnEiu02uc"
          type="youtube"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="choose-version"
        tag="версия программы для старых устройств"
        title="Какая версия программы считается самой стабильной и какую лучше установить?"
      >
        <Addition type="tldr">
          <ul>
            <li>
              «Самой стабильной» версии <mark className="app">Adobe After Effects</mark>{" "}
              не существует. Если последние версии вас не устраивают, в качестве отправной
              точки можно рассмотреть <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">24.6 (2024)</mark> или{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">23.6 (2023)</mark>, но не более ранние. В то же
              время не стоит спешить с обновлением сразу после выхода крупного релиза — в
              нём могут встречаться проблемы, которые исправляют в последующих
              обновлениях.
            </li>
            <li>
              Аналогично, нет и «самой быстрой» версии. Скорость работы зависит от
              сложности проекта и «железа» устройства, однако на одном и том же проекте
              новые версии программы могут отрисовывать композицию быстрее благодаря{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>.
            </li>
          </ul>
        </Addition>
        <p>
          На этот вопрос нет однозначного ответа, и он останется предметом вечных дебатов
          в чатах и на форумах. Причина — в огромном разбросе мнений пользователей,
          которые работают в разных сценариях, на разном «железе» и с множеством сторонних
          плагинов, за которые <mark className="company">Adobe</mark> не отвечает. У
          кого-то программа «летает», а у кого-то — тормозит на ровном месте даже со всеми
          «оптимизациями».
        </p>
        <p>
          Если вы надеетесь найти здесь «чудо-версию», которая будет работать идеально на
          любом устройстве, то вынужден вас разочаровать: такой просто нет. Выбор версии
          сам по себе почти не влияет на производительность. Устанавливая старую версию,
          вы лишаете себя новых функций и исправлений ошибок ради сомнительного
          «преимущества», которое на практике ничего не даёт. Единственный реальный повод
          использовать старую версию — это необходимость открыть проект, созданный в ней.
          Во всех остальных случаях основывайтесь на собственном опыте, а не на советах с
          форумов.
        </p>
        <Divider>
          Ссылки на патчноуты от <mark className="company">Adobe</mark>
        </Divider>
        <p>
          Список обновлений, нововведений и исправлений в последних версиях{" "}
          <mark className="app">Adobe After Effects</mark> вы всегда можете посмотреть на
          официальном сайте <mark className="company">Adobe</mark>. Это поможет не
          задавать в чатах и на форумах вопрос:{" "}
          <mark className="quote">«А что нового появилось?»</mark>.
        </p>
        <div className="flexible-links">
          <a href="https://helpx.adobe.com/after-effects/using/whats-new.html">
            Что нового в последних выпусках
          </a>
          <a href="https://helpx.adobe.com/after-effects/kb/fixed-issues.html">
            Список исправленных ошибок
          </a>
          <a href="https://helpx.adobe.com/after-effects/kb/known-issues-after-effects.html">
            Выявленные неполадки
          </a>
          <a href="https://helpx.adobe.com/after-effects/system-requirements.html">
            Системные требования для программы
          </a>
        </div>
        <Divider>Рекомендации по выбору версии</Divider>
        <p>
          Несмотря на то что «идеальной» версии не существует, вот несколько рекомендаций
          для тех, кто по каким-либо причинам не может сделать выбор.
        </p>
        <ul>
          <li>
            <p>
              Если вы нечасто работаете в программе, любите новые функции или стабильность
              для вас не в приоритете, попробуйте воспользоваться{" "}
              <a href="https://helpx.adobe.com/after-effects/using/whats-new.html">
                последней
              </a>{" "}
              версией <mark className="app">Adobe After Effects</mark>, особенно если вы
              хотите перейти с предыдущих версий.
            </p>
            <Addition type="warning">
              Имейте в виду, что для установки последних версий{" "}
              <mark className="app">Adobe After Effects</mark> требуется Windows 11 24H2:
              на более ранних сборках программа может работать некорректно или вовсе не
              установиться. Узнать текущую версию вашей ОС можно с помощью команды{" "}
              <mark className="app">winver</mark>.
            </Addition>
          </li>
          <li>
            <p>
              Если вам нужна более «проверенная» пользователями и относительно современная
              версия, попробуйте <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">25.1 (2025)</mark>,{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">24.6 (2024)</mark> или{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">23.6 (2023)</mark>.
            </p>
            <Addition type="info">
              Современное оборудование требует более свежих версий{" "}
              <mark className="app">Adobe After Effects</mark>. Если вы установите на
              новое устройство старую версию программы, вы рискуете столкнуться с
              проблемами аппаратного ускорения или непредвиденными сбоями.
            </Addition>
          </li>
          <li>
            <p>
              Если процессор вашего устройства не поддерживает{" "}
              <a href="https://www.youtube.com/watch?v=1IAwkEdRZZw">инструкции AVX2</a>,
              вы можете установить <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">23.6 (2023)</mark> или{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">24.0 (2024)</mark>.
            </p>
            <Addition type="warning">
              Если вы попытаетесь обойти требования к установке версии{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">24.1 (2024)</mark> или выше на неподдерживаемом
              процессоре, то, скорее всего, столкнётесь с ошибкой{" "}
              <mark className="code">0xc0000142</mark> при запуске программы. Обойти это
              ограничение нельзя — придётся покупать новый процессор с поддержкой
              инструкций <mark className="hardware">AVX2</mark>.
            </Addition>
          </li>
          <li>
            <p>
              Если вы используете устройство на Windows 7 или Windows 8.1, установите
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">16.1 (2019)</mark> или{" "}
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">15.1 (2018)</mark>. Более свежие версии установить
              не получится из-за прекращения официальной поддержки этих операционных
              систем компаниями <mark className="company">Adobe</mark> и{" "}
              <mark className="company">Microsoft</mark>.
            </p>
            <Addition type="danger">
              <ul>
                <li>
                  Если вы попытаетесь обойти требования к установке или запустить
                  программу на старой операционной системе, вероятность успешного запуска
                  крайне мала. Скорее всего, вы столкнётесь с ошибками, которые решаются
                  только установкой более свежей версии Windows.
                </li>
                <li>
                  Если программа более свежей версии, чем{" "}
                  <mark className="app">Adobe After Effects</mark>{" "}
                  <mark className="version">16.1 (2019)</mark>, всё же запустится на
                  неподдерживаемой операционной системе, её стабильная работа не
                  гарантируется.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
        <Divider>Переходим с одной версии на другую</Divider>
        <Addition type="danger">
          Не стоит спешить с обновлением программы, если на момент чтения этой статьи вы
          работаете над большим проектом. При установке новой версии{" "}
          <mark className="app">Adobe After Effects</mark> есть риск, что что-то сломается
          или начнёт работать иначе. Обновление лучше выполнять, когда у вас нет горящих
          сроков или вы не работаете над крупным проектом.
        </Addition>
        <p>
          При переходе с одной версии <mark className="app">Adobe After Effects</mark> на
          другую в пределах одного «релизного года», например с{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">24.1 (2024)</mark> на{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">24.6 (2024)</mark>, не нужно переносить файлы или
          выполнять какие-либо дополнительные действия. В таком случае установщик
          перезапишет старые файлы программы, не затрагивая пользовательские данные,
          включая установленные плагины. При запуске обновлённой версии{" "}
          <mark className="app">Adobe After Effects</mark> вам предложат перенести
          настройки из старой версии в новую.
        </p>
        <p>
          Но если вы решили обновить программу, перейдя на следующий «релизный год»,
          например с <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">23.6 (2023)</mark> на{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.2 (2025)</mark>, потребуется вручную перенести
          пользовательские файлы в новую версию, включая сторонние эффекты и пресеты. При
          такой установке старая версия программы останется на устройстве и не будет
          удалена автоматически. <a href="#update-app">Подробнее о переносе...</a>
        </p>
        <Addition type="info">
          Не забывайте своевременно обновлять сторонние плагины и поддерживать
          операционную систему в хорошем состоянии, периодически очищая её от мусора и
          устанавливая свежие драйверы для комплектующих. Устанавливая свежие версии{" "}
          <mark className="app">Adobe After Effects</mark>, но не обновляя различные
          дополнения к нему, вы рискуете столкнуться с необъяснимыми проблемами.{" "}
          <em className="article-note-muted">
            Именно такие несостыковки часто становятся причиной путаницы в обсуждениях на
            форумах или в чатах, когда у одного пользователя всё работает, а у другого —
            всё «разваливается».
          </em>
        </Addition>
        <Divider>
          Проверяем миф о производительности, зависящей от версии программы
        </Divider>
        <p>
          Проверим популярный миф о том, что старые версии{" "}
          <mark className="app">Adobe After Effects</mark> работают быстрее и «стабильнее»
          новых. Если со стабильностью ещё можно поспорить, так как всё зависит от
          проекта, то с производительностью я категорически не согласен, даже если меня
          пытаются убедить в обратном.
        </p>
        <p>
          Чтобы это доказать, проведём эксперимент на виртуальной машине с «облегчённой»
          сборкой Windows 11 24H2. Выделим ей 16 ГБ оперативной памяти и 8 ядер процессора{" "}
          <mark className="hardware">Intel Core Ultra 7 255H</mark>
          <sup>1</sup> без аппаратного ускорения. Затем установим{" "}
          <mark className="app">Adobe After Effects</mark> следующих версий:{" "}
          <mark className="version">13.2 (2014)</mark>,{" "}
          <mark className="version">15.1.2 (2018)</mark>,{" "}
          <mark className="version">17.7 (2020)</mark>,{" "}
          <mark className="version">23.6 (2023)</mark> и{" "}
          <mark className="version">25.4 (2025)</mark>, после чего проверим скорость
          рендеринга.
        </p>
        <Addition type="info">
          <sup>1</sup> Несмотря на то что это процессор для ноутбуков, для чистоты
          эксперимента на хост-системе были сняты все лимиты энергопотребления и включён
          режим максимальной производительности. Ноутбук работал от сети, а его система
          охлаждения — на полную мощность, без препятствий для потока воздуха. На
          виртуальной машине частота процессора оставалась стабильной на уровне 3,69 ГГц
          без резких скачков и «троттлинга» во время тестов, хотя хостовая система могла
          обеспечить и большую производительность. Однако это, наоборот, поможет сделать
          результаты более сопоставимыми.
        </Addition>
        <p>
          Тестирование будем проводить на{" "}
          <a href="https://aeplug.ru/forum/viewtopic.php?t=818">старом проекте</a> от{" "}
          <mark className="user">AEPlug</mark>, который одинаково хорошо подходит как для
          старых, так и для новых версий. Его ключевая особенность в том, что он почти не
          задействует аппаратное ускорение, нагружая в основном процессор и оперативную
          память. К тому же в нём используются только стандартные эффекты. Поэтому, к
          сожалению, этот тест не поможет развеять мифы о производительности сторонних
          плагинов, а также проверить быстродействие интерфейса и общую отзывчивость
          программы.
        </p>
        <p>
          Для «честного» сравнения в первом раунде в версии{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">13.2 (2014)</mark> мы отключим{" "}
          <mark className="select">«Multiprocessing»</mark>, а в{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">23.6 (2023)</mark> и{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.4 (2025)</mark> —{" "}
          <mark className="select">«Multi-Frame Rendering»</mark>. Также во всех версиях
          отключим дисковый кэш. В настройках каждой программы мы выделим по 12 ГБ
          оперативной памяти, а остальные параметры оставим по умолчанию.
        </p>
        <ArticleMedia
          caption="Виртуальная машина"
          src="legacy/aftereffects/ae_version_test.png"
          type="image"
        />
        <p>
          Почему эксперимент идёт не на реальном «железе»? Во-первых, мне не хочется потом
          вычищать основную систему от старых версий{" "}
          <mark className="app">Adobe After Effects</mark>. А во-вторых, так мы
          минимизируем расхождения в результатах из-за разницы в «железе», драйверах и
          поддержке тех или иных функций аппаратного ускорения. Экспорт будем выполнять
          через <mark className="plugin">QuickTime</mark> в кодек{" "}
          <mark className="video">GoPro Cineform</mark>.
        </p>
        <ul>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">13.2 (2014)</mark> — 7 минут 33 секунды. Со
              включённым <mark className="select">«Multiprocessing»</mark> — 6 минут 3
              секунды.
            </p>
            <ArticleMedia
              caption="Время экспорта"
              src="legacy/aftereffects/render_time_cc2014.png"
              type="image"
            />
          </li>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">15.1.2 (2018)</mark> — 7 минут 27 секунд.
            </p>
            <ArticleMedia
              caption="Время экспорта"
              src="legacy/aftereffects/render_time_cc2018.png"
              type="image"
            />
          </li>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">17.7 (2020)</mark> — 8 минут 34 секунды.
            </p>
            <ArticleMedia
              caption="Время экспорта"
              src="legacy/aftereffects/render_time_2020.png"
              type="image"
            />
          </li>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">23.6 (2023)</mark> — 8 минут 15 секунд без{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>.
            </p>
            <ArticleMedia
              caption="Время экспорта"
              src="legacy/aftereffects/render_time_2023.png"
              type="image"
            />
          </li>
          <li>
            <p>
              <mark className="app">Adobe After Effects</mark>{" "}
              <mark className="version">25.4 (2025)</mark> — 8 минут 18 секунд без{" "}
              <mark className="select">«Multi-Frame Rendering»</mark>.
            </p>
            <ArticleMedia
              caption="Время экспорта"
              src="legacy/aftereffects/render_time_2025.png"
              type="image"
            />
          </li>
        </ul>
        <p>
          После продолжительного рендеринга результат поразил: версии{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">13.2 (2014)</mark> и{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">15.1.2 (2018)</mark> действительно превзошли более
          новые. Казалось бы, вопрос можно закрывать: старые версии и правда быстрее, а
          автора нужно закидать тапками за то, что он не разбирается в производительности{" "}
          <mark className="app">Adobe After Effects</mark>. Но, как я и говорил, есть один
          нюанс: первые тесты проводились без многокадрового рендеринга.
        </p>
        <p>
          Стоило почистить кэш, перезапустить программу, включить{" "}
          <mark className="select">«Multi-Frame Rendering»</mark> в{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">23.6 (2023)</mark> и{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.4 (2025)</mark> и запустить экспорт заново, как
          результат снова поразил, но уже не в пользу «старичков»: 4 минуты 53 секунды и 3
          минуты 49 секунд соответственно. Версия{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">13.2 (2014)</mark> даже со включённым{" "}
          <mark className="select">«Multiprocessing»</mark> и рядом не стояла со своими 6
          минутами и 3 секундами. При этом потребление оперативной памяти во всех версиях
          было примерно одинаковым и не выходило за установленный предел в 12 ГБ, так что
          настроенный «за кадром» файл подкачки в этом тесте на скорость рендеринга особой
          роли не сыграл.
        </p>
        <p>
          Какой вывод можно сделать из этого «странного» теста? По-моему, все эти
          разговоры о том, что старые версии{" "}
          <mark className="app">Adobe After Effects</mark> отрисовывают композиции быстрее
          новых, — не более чем эффект плацебо. Впрочем, такие мнения имеют право на
          существование, но лишь в одном случае: если ваше «железо» просто не
          соответствует системным требованиям свежих версий программы или морально
          устарело.
        </p>
      </DetailsSummary>
      <DetailsSummary
        anchor="about-app-performance"
        tag="тормозит, ускорить работу, оптимизация, увеличить скорость рендера, лаги, медленно работает, низкая скорость, производительность, применение эффектов, системные требования, артефакты, искажения, потребление оперативной памяти"
        title="Почему у меня, б%@#ь, лагает е&#!%й Adobe After Effects, с$%а?"
      >
        <Addition type="tldr">
          Эта статья — чек-лист для диагностики «тормозов» в{" "}
          <mark className="app">Adobe After Effects</mark>. Здесь вы не найдёте
          «чудо-кнопки», устраняющей все проблемы с производительностью, но
          последовательная проверка по пунктам поможет выявить и устранить их причину.
        </Addition>
        <p>
          Да, это тот самый риторический вопрос, который успел всем поднадоесть, но всё
          равно не даёт покоя некоторым пользователям, особенно новичкам.
          Производительность проекта в <mark className="app">Adobe After Effects</mark>{" "}
          чаще всего зависит от двух факторов: мощности устройства и действий самого
          пользователя.
        </p>
        <p>
          В этой статье мы разберём обе категории и посмотрим, как снизить риск
          всевозможных «тормозов» и лагов. Надеюсь, вы вынесете из неё что-то полезное для
          оптимизации своей работы.
        </p>
        <Divider>Раздел 1: Быстрые проверки и настройки программы</Divider>
        <p>
          Начнём с самых простых и популярных действий, которые иногда помогают быстро
          избавиться от «тормозов» и переполнения оперативной памяти, не внося серьёзных
          правок в проект.
        </p>
        <Divider>Кэшируем предпросмотр, прежде чем его проиграть</Divider>
        <p>
          Часто предпросмотр тормозит, потому что{" "}
          <mark className="app">Adobe After Effects</mark> по умолчанию пытается
          воспроизводить видео в реальном времени, но не успевает просчитывать эффекты.
          Именно эта особенность и вводит в заблуждение некоторых пользователей, особенно
          новичков.
        </p>
        <p>
          В отличие от классических программ нелинейного монтажа, таких как{" "}
          <mark className="app">Adobe Premiere</mark> или{" "}
          <mark className="app">DaVinci Resolve</mark>,{" "}
          <mark className="app">Adobe After Effects</mark> изначально не рассчитан на
          предпросмотр в реальном времени, особенно если в композиции применено много
          эффектов. Поэтому кадры следует кэшировать заранее, даже если вы просто
          проигрываете видеослой. Программа в любом случае преобразует кадры композиции во
          внутренний формат для их воспроизведения.
        </p>
        <p>
          Чтобы проиграть предпросмотр без «тормозов», включите кэширование перед
          воспроизведением. Для этого откройте окно{" "}
          <mark className="select">«Window» → «Preview»</mark> и установите в нём чекбоксы{" "}
          <mark className="select">«Cache Before Playback»</mark> и{" "}
          <mark className="select">«If caching, play cached frames»</mark>.
        </p>
        <ArticleMedia
          caption="Preview"
          src="legacy/aftereffects/preview_caching.png"
          type="image"
        />
        <p>
          После этого при первом нажатии на <mark className="key">Space</mark> программа
          сначала просчитает кадры, а затем воспроизведёт их из кэша. Повторное нажатие{" "}
          <mark className="key">Space</mark> прервёт кэширование и сразу запустит
          воспроизведение уже закэшированных кадров.
        </p>
        <Divider>Снижаем качество предпросмотра</Divider>
        <p>
          Для дополнительного ускорения работы можно временно снизить качество изображения
          в окне композиции или на панели <mark className="select">«Preview»</mark>.
          Переключение разрешения на <mark className="select">«Half»</mark>,{" "}
          <mark className="select">«Third»</mark> или{" "}
          <mark className="select">«Quarter»</mark> снизит нагрузку на систему и ускорит
          отзывчивость интерфейса.
        </p>
        <ArticleMedia
          caption="Изменение разрешения предпросмотра"
          src="legacy/aftereffects/change_preview_resolution.png"
          type="image"
        />
        <p>
          Также не стоит оставлять режим <mark className="select">«Auto»</mark>: из-за
          него постоянно «скачут» качество предпросмотра и скорость рендеринга кадров.
        </p>
        <Addition type="warning">
          Учтите, что при пониженном разрешении некоторые эффекты могут отображаться
          иначе, чем в полном качестве, — например,{" "}
          <mark className="plugin">CC Particle World</mark> или{" "}
          <mark className="plugin">S_LensFlare</mark>.
        </Addition>
        <Divider>Настраиваем адаптивное разрешение</Divider>
        <p>
          По умолчанию в <mark className="app">Adobe After Effects</mark> включена функция
          адаптивного разрешения: при перемещении «плейхеда» или слоя качество
          предпросмотра временно снижается для быстрой отрисовки кадра. Если эта функция
          вас раздражает или, по-вашему, снижает отзывчивость программы, её можно
          отключить: для этого нажмите на <mark className="select">«Fast Previews»</mark>{" "}
          под окном предпросмотра и выберите{" "}
          <mark className="select">«Off (Final Quality)»</mark>.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/disable_adaptive_resolution.png"
          type="image"
        />
        <Divider>Очищаем кэш предпросмотра</Divider>
        <p>
          Часто во время работы над проектом можно заметить, что оперативная память почти
          закончилась или дисковый кэш забит. В этот момент программе становится тяжелее
          обрабатывать кадры: ей просто не хватает ресурсов.
        </p>
        <p>
          Зелёная полоса над таймлайном показывает кэш, загруженный в оперативную память,
          а синяя — сохранённый на диске. Благодаря дисковому кэшу программа не
          пересчитывает заново кадры, которые уже были обработаны и выгружены из памяти.
          Для эффективной работы дискового кэша рекомендуется размещать его на быстром
          накопителе.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/green-blue_lines.png"
          type="image"
        />
        <p>
          Кэш стоит периодически очищать, чтобы освободить место для новых вычислений.
          Сделать это можно через{" "}
          <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark>.
          После очистки предпросмотр придётся кэшировать заново.
        </p>
        <ArticleMedia
          caption="Очистка кэша и оперативной памяти"
          src="legacy/aftereffects/edit_purge_all-memory-and-disk-cache.png"
          type="image"
        />
        <Divider>Отключаем кэширование при простое</Divider>
        <p>
          Если вам стало сложнее выполнять действия в программе из-за необъяснимых
          «тормозов», возможно, вы не заметили, что в{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">22.0 (2022)</mark> и выше по умолчанию включена
          функция <mark className="select">«Cache Frames When Idle»</mark>. Она начинает
          кэшировать композицию, заполняя оперативную память и дисковый кэш, если вы не
          взаимодействуете с программой в течение восьми секунд.
        </p>
        <p>
          На слабых устройствах эта функция часто вызывает «тормоза» в программе и
          системе, особенно при большом количестве эффектов, поэтому её рекомендуется
          отключать. Для этого достаточно нажать комбинацию клавиш{" "}
          <mark className="key">Alt + Shift + I</mark> или выключить её в меню{" "}
          <mark className="select">«Composition» → «Preview»</mark>.
        </p>
        <ArticleMedia
          caption="Отключаем кэширование в простое"
          src="legacy/aftereffects/disable_idle_cache.png"
          type="image"
        />
        <Divider>Про потребление оперативной памяти</Divider>
        <p>
          Каждый, кто хоть раз работал в <mark className="app">Adobe After Effects</mark>,
          знает не понаслышке, что программа «обожает» оперативную память. Её потребление
          зависит от множества факторов, главные из которых — разрешение композиции и
          глубина цвета. Например, кадр размером 1920×1080 при 8 битах на канал требует
          7,9 МБ памяти, а кадр 7680×4320 при 16 битах — уже 253 МБ. Поэтому при работе с
          композициями высокого разрешения даже 128 ГБ ОЗУ может быстро закончиться.
        </p>
        <p>
          Но это лишь вес готового кадра в кэше, без учёта затрат на его рендеринг. Чтобы
          этот кадр создать, требуется значительно больше ресурсов, а итоговая нагрузка
          зависит от множества деталей: используемых исходников, применённых эффектов,
          типов слоёв, масок, режимов наложения и настроек управления цветом. А если у вас
          ещё и включена функция <mark className="select">«Multi-Frame Rendering»</mark>,
          которая обрабатывает несколько кадров параллельно, то расход памяти будет ещё
          выше.
        </p>
        <p>
          Кроме того, <mark className="app">Adobe After Effects</mark> делит общий пул
          оперативной памяти с другими запущенными приложениями{" "}
          <mark className="company">Adobe</mark>. Например,{" "}
          <mark className="app">Adobe Premiere</mark> или{" "}
          <mark className="app">Adobe Media Encoder</mark> «откусит» часть ресурсов у{" "}
          <mark className="app">Adobe After Effects</mark>, а их закрытие освободит эту
          память.
        </p>
        <Addition type="info">
          <p>
            Изменить размер общего пула можно в настройках{" "}
            <mark className="select">«Edit» → «Preferences» → «Memory & CPU»</mark>
            <sup>1</sup> через параметр{" "}
            <mark className="select">«RAM reserved for other applications»</mark>. Главное
            — не путать назначение этой настройки: она определяет, сколько оперативной
            памяти будет зарезервировано для других приложений, а не для программ{" "}
            <mark className="company">Adobe</mark>.
          </p>
          <Addition type="info">
            <sup>1</sup> В предыдущих версиях{" "}
            <mark className="app">Adobe After Effects</mark> этот параметр находится в
            разделе <mark className="select">«Memory & Performance»</mark>.
          </Addition>
        </Addition>
        <p>
          Когда оперативной памяти начинает не хватать,{" "}
          <mark className="app">Adobe After Effects</mark> выгружает старые кэшированные
          кадры, а при включённом дисковом кэше — сохраняет их на диск. Причём в{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">25.2 (2025)</mark> и выше, опция{" "}
          <mark className="select">«Enable Preview from Disk Cache»</mark> позволяет
          воспроизводить предпросмотр напрямую с диска, не загружая их в ОЗУ, что особенно
          полезно при работе с длинными композициями.
        </p>
        <Addition type="warning">
          При использовании дискового кэша есть шанс появления визуальных артефактов,
          например перемешанных или чёрных кадров.
        </Addition>
        <Addition type="info">
          <ul>
            <li>
              <sup>1</sup> Для эффективной работы с дисковым кэшем необходим быстрый SSD.
            </li>
            <li>
              <p>
                Настроить параметры дискового кэша можно в{" "}
                <mark className="select">«Edit» → «Preferences» → «Disk»</mark>
                <sup>2</sup>.
              </p>
              <Addition type="info">
                <sup>2</sup> В предыдущих версиях{" "}
                <mark className="app">Adobe After Effects</mark> этот параметр находится в
                разделе <mark className="select">«Media & Disk Cache»</mark>.
              </Addition>
            </li>
          </ul>
        </Addition>
        <ContentFilter
          windowsContent={
            <>
              <p>
                Для стабильной работы в <mark className="app">Adobe After Effects</mark>{" "}
                также рекомендуется включить и настроить{" "}
                <a href="#configure-swapfile">файл подкачки</a>. Некоторые сборки Windows
                от энтузиастов и программы для «оптимизации» системы отключают эту
                функцию, из-за чего рядовые пользователи сталкиваются с ошибками нехватки
                памяти, даже когда её, казалось бы, достаточно.
              </p>
              <p>
                Дело в том, что программа для каждого кадра требует непрерывный блок ОЗУ и
                не умеет хранить данные фрагментами. Именно эта особенность работы с
                памятью и провоцирует ошибки типа{" "}
                <mark className="warning">«Out of Memory»</mark> при отключённом файле
                подкачки, а также объясняет резкий рост потребления ресурсов в сложных
                проектах.
              </p>
            </>
          }
        />
        <Divider>Настраиваем многокадровый рендеринг</Divider>
        <p>
          Функция <mark className="select">«Multi-Frame Rendering»</mark> позволяет
          использовать весь потенциал процессора за счёт одновременного рендеринга
          нескольких кадров. В новых версиях{" "}
          <mark className="app">Adobe After Effects</mark> она включена по умолчанию.
        </p>
        <p>
          Чтобы включить <mark className="select">«Multi-Frame Rendering»</mark>,
          установите флажок <mark className="select">«Enable Multi-Frame Rendering»</mark>
          . Чтобы оставить часть мощности процессора другим программам, измените значение{" "}
          <mark className="select">«CPU reserved for other applications»</mark>
          <sup>1</sup> в меню{" "}
          <mark className="select">«Edit» → «Preferences» → «Memory & CPU»</mark>
          <sup>2</sup>.
        </p>
        <Addition type="warning">
          <sup>1</sup> Внимательно прочтите описание параметра. Указанный процент — это
          ресурсы, которые останутся для других программ, а не те, что будет использовать{" "}
          <mark className="app">Adobe After Effects</mark>. Например, если вы установите
          значение <mark className="copy">70</mark> процентов, то для рендеринга будет
          использоваться только 30% нагрузки процессора.
        </Addition>
        <Addition type="info">
          <sup>2</sup> В предыдущих версиях{" "}
          <mark className="app">Adobe After Effects</mark> этот параметр находится в
          разделе <mark className="select">«Memory & Performance»</mark>.
        </Addition>
        <ArticleMedia
          caption="Настраиваем многокадровый рендеринг"
          src="legacy/aftereffects/mfr_settings.png"
          type="image"
        />
        <p>
          Однако в некоторых случаях эта функция, наоборот, может мешать стабильному
          рендерингу кадров и приводить к повышенному потреблению оперативной памяти,
          увеличивая риск ошибки <mark className="warning">«Out of Memory»</mark>. Если
          это ваш случай, отключите{" "}
          <mark className="select">«Multi-Frame Rendering»</mark> или ограничьте
          потребление оперативной памяти, увеличив значение{" "}
          <mark className="select">«RAM reserved for other applications»</mark>.
        </p>
        <Divider>Разбираемся с рабочим пространством</Divider>
        <p>
          Если у вас открыто слишком много окон со сторонними расширениями или скриптами,
          интерфейс <mark className="app">Adobe After Effects</mark> может начать заметно
          «тормозить». Попробуйте закрыть лишние панели с помощью команды{" "}
          <mark className="select">«Close Panel»</mark> в контекстном меню окна и
          проверьте, какая именно из них замедляет работу программы.
        </p>
        <ArticleMedia
          caption="Закрываем панель стороннего расширения"
          src="legacy/aftereffects/close_panel.png"
          type="image"
        />
        <p>
          Чтобы сбросить текущее рабочее пространство, откройте меню{" "}
          <mark className="select">«Window» → «Workspaces»</mark> и выберите{" "}
          <mark className="select">«Reset to Saved Layout»</mark>. Если сброс вам не
          подходит, сохраните текущую конфигурацию как новое рабочее пространство или
          просто переключитесь на любое другое.
        </p>
        <Divider>Раздел 2: Оптимизация проекта и исходников</Divider>
        <p>
          Если быстрая профилактика не помогла, пора заглянуть в сам проект. Проблемы с
          производительностью часто кроются в «кривых» исходниках или перегруженных
          эффектами композициях. И, как правило, виноват в этом сам пользователь, даже
          если у него мощное «железо».
        </p>
        <p>
          Отсюда и берутся вечные жалобы в духе{" "}
          <mark className="quote">«вчера работало хорошо, а сегодня тормозит»</mark>:
          скорее всего, предыдущий проект «летал» за счёт грамотной оптимизации (даже если
          вы над ней не работали), а текущий «ползёт» из-за неподходящих исходников и
          чрезмерного усложнения сцен.
        </p>
        <Divider>Проверяем исходники в проекте</Divider>
        <p>
          В первую очередь стоит обсудить импорт материалов. Довольно часто пользователи
          скачивают файлы из интернета, импортируют их в композиции, а через некоторое
          время замечают странности: появляются артефакты, эффекты работают некорректно
          или резко снижается производительность. Да, виновником может быть видео,
          изображение, аудио или даже «кривой» шрифт. Дело в том, что не все скачанные из
          интернета материалы стабильно работают в программах для монтажа.
        </p>
        <p>
          Именно в этом кроется причина 90% жалоб: сталкиваясь с «тормозами», пользователи
          часто приводят «железный» аргумент:{" "}
          <mark className="quote">
            «В проигрывателе моё видео нормально играет! Чё программе-то не нравится?»
          </mark>
          , — однако это сравнение не решает проблему. В отличие от всеядных плееров вроде{" "}
          <mark className="app">VLC</mark> или <mark className="app">MPC-HC</mark>,{" "}
          <mark className="app">Adobe After Effects</mark> вынужден «распаковывать»
          исходник и преобразовывать его во внутренний буфер, похожий на формат без потерь
          (<mark className="video">Lossless</mark>), для хранения в оперативной памяти и
          отображения в предпросмотре.
        </p>
        <p>
          Из-за этого программа может долго обрабатывать видео, запутаться в нестабильном{" "}
          <a href="https://aws.amazon.com/ru/blogs/rus/media-part-1-back-to-basics-gops-explained/">
            потоке кадров
          </a>{" "}
          и выдать артефакты при частом перемещении{" "}
          <mark className="select">«Current Time Indicator»</mark> по таймлайну или
          привести к ситуации{" "}
          <mark className="quote">«вчера работало — сегодня виснет»</mark>.
        </p>
        <p>
          Больше всего проблем вызывают видео, сжатые кодеками для трансляции в интернете,
          например <mark className="video">H.264</mark> и{" "}
          <mark className="video">H.265</mark>, скачанные с{" "}
          <mark className="web">YouTube</mark>, <mark className="web">VK Видео</mark> и
          похожих платформ. У них часто нет единого стандарта, гарантирующего стабильность
          в проекте, поэтому каждая платформа пережимает их по-своему. Такие видео
          кодируют для комфортного просмотра, а не для последующего монтажа, из-за чего
          агрессивное межкадровое сжатие может приводить к ошибкам и нестабильной работе.
        </p>
        <ArticleMedia
          src="cfz3jwdo1v0"
          type="youtube"
        />
        <p>
          Эта проблема решается, как ни странно,{" "}
          <a href="#import-workflow">конвертацией</a> исходников в монтажный кодек,
          например, <mark className="video">Apple ProRes</mark> или{" "}
          <mark className="video">DNxHD</mark>, через такие программы, как{" "}
          <mark className="app">Shutter Encoder</mark>,{" "}
          <mark className="app">HandBrake</mark> или{" "}
          <mark className="app">MKVToolNix</mark>.
        </p>
        <p>
          Почему в этом списке нет <mark className="app">Adobe Media Encoder</mark>? Дело
          в том, что он использует тот же движок, что и{" "}
          <mark className="app">Adobe After Effects</mark>, поэтому при конвертации вы
          рискуете получить те же артефакты, от которых пытались избавиться.
        </p>
        <p>
          А что такое <mark className="video">монтажный кодек</mark>? Это тип кодеков,
          созданных специально для видеомонтажа и композитинга. В отличие от кодеков для
          публикации в интернете вроде <mark className="video">H.264</mark>, он использует
          внутрикадровое сжатие, где каждый кадр — ключевой и независимый. Это избавляет
          процессор от необходимости вычислять межкадровые изменения и существенно снижает
          нагрузку на систему. Да, после конвертации файлы станут тяжелее, зато{" "}
          <mark className="app">Adobe After Effects</mark> будет работать с ними
          стабильнее, без «лагов»<sup>1</sup> и внезапных ошибок рендеринга.
        </p>
        <Addition type="warning">
          <sup>1</sup> Видеофайлы, закодированные в монтажный кодек, лучше хранить на
          скоростном SSD, так как у них обычно очень высокий битрейт и большой размер, что
          требует быстрого накопителя. Иначе даже конвертация не спасёт от «тормозов».
        </Addition>
        <p>
          Если же размер файла для вас критичен или нужен именно{" "}
          <mark className="video">H.264</mark>, то перекодируйте его через ранее
          упомянутые утилиты, даже если исходник уже был в этом кодеке. Это поможет
          исправить «кривую» структуру <mark className="codec-param">GOP</mark>,
          характерную для многих видео из интернета. Но учтите: без поддержки аппаратного
          ускорения для декодирования <mark className="video">H.264</mark> на вашем
          процессоре или видеокарте вы вряд ли ускорите работу с проектом.
        </p>
        <p>
          А что будет с качеством изображения после конвертации? Если грамотно подойти к{" "}
          <a href="#import-workflow">настройкам кодирования</a>, то разница между
          оригиналом и итоговым файлом будет незаметна при обычном просмотре.
        </p>
        <p>
          Если файл уже был в проекте, после конвертации исходников просто{" "}
          <a href="#replace-footage">замените</a> его через команду{" "}
          <mark className="select">«Replace Footage»</mark>.
        </p>
        <p>Помимо видео, подвох может ждать и в других файлах.</p>
        <ul>
          <li>
            Звук из <mark className="app">VK</mark>,{" "}
            <mark className="app">SoundCloud</mark> или даже аудиодорожка внутри видео
            тоже может быть «криво» пережата. Это проявляется в виде искажений, треска или
            рассинхрона в <mark className="app">Adobe After Effects</mark>, даже если
            внешний проигрыватель воспроизводит звук нормально. Проблема решается
            конвертацией аудиодорожки в формат <mark className="audio">WAV</mark> через{" "}
            <mark className="app">Shutter Encoder</mark> или{" "}
            <mark className="app">EZ CD Audio Converter</mark>.
          </li>
          <li>
            С изображениями проблемы возникают реже, но тоже случаются.{" "}
            <mark className="app">Adobe After Effects</mark> «не любит» изображения с
            огромным разрешением, цветовым профилем <mark className="term">CMYK</mark> или
            слишком агрессивным сжатием. В таком случае может помочь конвертация в{" "}
            <mark className="image">PNG</mark> через{" "}
            <mark className="app">FastStone Image Viewer</mark> или{" "}
            <mark className="app">Adobe Photoshop</mark>, а ещё лучше — в формат{" "}
            <mark className="image">TIFF</mark>, так как он проще обрабатывается
            программой.
          </li>
          <li>
            Иногда проект может тормозить из-за «кривых» шрифтов. Если работа с текстовыми
            слоями вызывает «лаги», попробуйте переустановить шрифт, скачав его из другого
            источника, или заменить на похожий по начертанию.
          </li>
        </ul>
        <Divider>Оптимизируем композицию</Divider>
        <p>
          Минздрав обычно предупреждает, что чрезмерное употребление алкоголя вредит
          вашему здоровью. Только вот он забыл упомянуть, что избыточное использование
          эффектов в <mark className="app">Adobe After Effects</mark> также часто
          негативно сказывается на скорости и стабильности рендеринга.
        </p>
        <p>
          Я не шучу: некоторые порой увлекаются эффектами до абсурда — применяют три вида
          свечения, множество «шейков», цветокоррекцию несколькими слоями, а сверху —
          мелкие самодельные частицы, зернистость и размытие из разных пакетов. В
          результате вы получаете «конфликты» эффектов, медленный рендеринг, «фризы» и
          «вылеты».{" "}
          <em className="article-note-muted">
            Зато классный и красивый «эдит» для <mark className="web">TikTok</mark>{" "}
            получился, да?
          </em>
        </p>
        <p>
          Чтобы хоть как-то облегчить «раздутый» проект, воспользуйтесь следующими
          советами.
        </p>
        <ul>
          <li>
            Удалите неиспользуемые элементы из проекта. Это можно сделать с помощью
            функций <mark className="select">«Remove Unused Footage»</mark> и{" "}
            <mark className="select">«Reduce Project»</mark> в меню{" "}
            <mark className="select">«File» → «Dependencies»</mark>.
          </li>
          <li>
            <p>
              Не используйте эффекты ради эффектов, чем часто грешат «эдиторы». Перед
              добавлением задайте себе вопрос:{" "}
              <mark className="quote">«Действительно ли он здесь нужен?»</mark>, а затем
              подумайте:{" "}
              <mark className="quote">«Не сломает ли это производительность?»</mark>.
              Иначе вам же потом будет сложнее понять, что именно вызывает «тормоза».
            </p>
            <Addition type="info">
              Эффекты в окне <mark className="select">«Effect Controls»</mark> применяются
              сверху вниз, и каждый следующий работает с результатом предыдущего. Порядок
              эффектов на слое часто влияет на финальную картинку. Например, если сначала
              наложить размытие, а потом «шейк», по краям слоя может появиться неприятная
              «плитка».{" "}
              <em className="article-note-muted">
                А если сделать наоборот, слой будет выглядеть нормально.
              </em>
            </Addition>
          </li>
          <li>
            Используйте менее ресурсоёмкие аналоги или попробуйте пересобрать цепочку
            эффектов. Например, вместо «тяжёлого»{" "}
            <mark className="plugin">Gaussian Blur</mark> попробуйте{" "}
            <mark className="plugin">Fast Box Blur</mark>: он даёт похожий результат, но
            рендерится значительно быстрее.
          </li>
          <li>
            Если один и тот же эффект с одинаковыми настройками требуется нескольким
            слоям, примените его к корректирующему слою, а не к каждому по отдельности.
            Эффект подействует на все слои ниже, что упростит управление и сэкономит
            ресурсы.
          </li>
          <li>
            Если вы не можете избавиться от «тяжёлых» эффектов, например{" "}
            <mark className="plugin">Deep Glow</mark> или размытия в движении, отключайте
            их на время работы над анимацией. Для этого нажмите на иконку{" "}
            <mark className="select">«FX»</mark> рядом с названием эффекта в окне{" "}
            <mark className="select">«Effect Controls»</mark> или на таймлайне.
          </li>
          <li>
            Следите за актуальностью установленных сторонних плагинов. Устаревшие версии
            могут быть не оптимизированы под новые сборки{" "}
            <mark className="app">Adobe After Effects</mark>, что может привести к
            ошибкам, медленному рендерингу или даже утечкам оперативной памяти.
          </li>
        </ul>
        <Divider>Анализируем время рендеринга</Divider>
        <p>
          Если вы не понимаете, какой эффект замедляет рендеринг, вам поможет функция{" "}
          <mark className="select">«Render Time»</mark>, добавленная в{" "}
          <mark className="app">Adobe After Effects</mark>{" "}
          <mark className="version">22.0 (2022)</mark> и выше. Она работает как профайлер
          композиции и анализирует, сколько времени занимает просчёт каждого слоя и
          эффекта.
        </p>
        <p>
          В поле <mark className="select">«Frame Render Time»</mark>, расположенном в
          нижней части таймлайна, отображается общее время рендеринга текущего кадра. А в
          колонке <mark className="select">«Render Time»</mark> — время просчёта каждого
          слоя и эффекта в отдельности. Этот инструмент поможет найти самые «тяжёлые»
          эффекты, которые при необходимости можно заменить на более лёгкие аналоги или
          вовсе удалить.
        </p>
        <ArticleMedia
          caption="Timeline"
          src="legacy/aftereffects/view_render_time.png"
          type="image"
        />
        <Addition type="info">
          <ul>
            <li>
              Чтобы включить отображение времени рендеринга для слоёв, кликните правой
              кнопкой мыши по заголовкам колонок на таймлайне и выберите{" "}
              <mark className="select">«Columns» → «Render Time»</mark>.
            </li>
            <li>
              Для получения точных данных рекомендуется очистить кэш через меню{" "}
              <mark className="select">«Edit» → «Purge» → «All Memory & Disk Cache»</mark>
              , иначе для уже просчитанных кадров вы увидите практически нулевые значения.
            </li>
          </ul>
        </Addition>
        <Divider>Проверяем количество слоёв</Divider>
        <p>
          Если на таймлайне в композиции слишком много слоёв, например, больше 800,
          программа может начать ощутимо тормозить, некорректно отрисовывая интерфейс и
          реагируя на действия с задержкой. Чтобы этого избежать, сгруппируйте слои в
          предварительную композицию. Для этого выделите их и нажмите{" "}
          <mark className="key">Ctrl + Shift + C</mark>, а затем подтвердите её создание.
        </p>
        <p>
          Если же прекомпозиция вам не подходит, можно скрыть ненужные слои на таймлайне с
          помощью опции <mark className="select">«Shy»</mark> — это разгрузит интерфейс.
          Также не забывайте обрезать слои, как только они исчезают из кадра: это также
          ускоряет просчёт.
        </p>
        <ArticleMedia
          caption="Работа со скрытыми слоями"
          src="legacy/aftereffects/toggle_shy.mp4"
          type="video"
        />
        <p>
          А если в композиции много текстовых слоёв, например для субтитров, их лучше
          объединить в один, а текст менять в нужный момент с помощью маркеров.
        </p>
        <ArticleMedia
          src="3CHUvo6bWfM"
          type="youtube"
        />
        <Divider>Разбираемся с выражениями</Divider>
        <p>
          Выражения для свойств слоя также могут нагружать систему, даже самые простые,
          вроде <mark className="code">wiggle(x,y)</mark> или{" "}
          <mark className="code">time</mark>. Некоторые из них бывают настолько сложными,
          что долго просчитываются и тормозят весь проект.
        </p>
        <p>
          Если результат выражения вас устраивает и вы не планируете его дальше
          редактировать, его можно «запечь» в ключевые кадры с помощью команды{" "}
          <mark className="select">
            «Keyframe Assistant» → «Convert Expression to Keyframes»
          </mark>
          .
        </p>
        <ArticleMedia
          caption="«Запекание» выражения в ключевые кадры"
          src="legacy/aftereffects/convert_expression_to_keyframes.png"
          type="image"
        />
        <Addition type="info">
          Если после «запекания» вам понадобится внести правки в анимацию, просто удалите
          созданные ключевые кадры и снова включите выражение для нужного свойства.
        </Addition>
        <Divider>Создаём прокси для сложных композиций</Divider>
        <p>
          И последнее, но не менее важное:{" "}
          <mark className="app">Adobe After Effects</mark> — это программа для
          композитинга и моушн-дизайна, а не для монтажа двухчасовых фильмов. Она попросту
          не рассчитана на длинные таймлайны, но это понимают не все.
        </p>
        <p>
          Если ваш проект длится дольше 2–5 минут, а переходить в{" "}
          <mark className="app">Adobe Premiere</mark> или{" "}
          <mark className="app">DaVinci Resolve</mark> вы не хотите, разбейте его на
          отдельные, более мелкие композиции. Когда работа над одной из таких сложных
          композиций завершена и вы не планируете её дальше редактировать, создайте для
          неё <a href="#proxy-comp">прокси</a>
          <sup>1</sup>. Так вы «зафиксируете» её состояние, и программе не придётся заново
          просчитывать композицию при каждом воспроизведении на «основном» таймлайне.
        </p>
        <Addition type="warning">
          <p>
            <sup>1</sup> Не стоит путать создание прокси с функцией пререндеринга в меню{" "}
            <mark className="select">Composition» → «Pre-Render</mark>. Функция{" "}
            <mark className="select">«Pre-Render»</mark> заменяет вашу прекомпозицию
            видеофайлом, из-за чего вы теряете возможность быстрого редактирования, пока
            вручную не вернёте исходную композицию на таймлайн.
          </p>
          <p>
            С прокси всё проще: после его создания исходная композиция остаётся на
            таймлайне, и вы в любой момент можете вернуться к её редактированию, просто
            отключив прокси в окне <mark className="select">«Project»</mark>.
          </p>
        </Addition>
        <Divider>Пара слов о сторонних шаблонах</Divider>
        <p>
          Многие шаблоны, например с <mark className="web">Envato Elements</mark> и
          похожих ресурсов, нередко перегружены лишними эффектами и слоями, которые
          замедляют работу. В такой ситуации есть три выхода.
        </p>
        <ul>
          <li>
            Найти другой, более оптимизированный и менее «тяжёлый» шаблон, который не
            будет так сильно нагружать систему.
          </li>
          <li>
            <p>
              Рендерить проект как есть. Если компьютер не справляется, экспорт
              затягивается на долгие часы или вы просто не хотите мучить своё «железо» —
              попросите помощи у коллеги с мощным ПК или воспользуйтесь услугами
              «рендер-ферм»<sup>1</sup>.
            </p>
            <Addition type="warning">
              <sup>1</sup> Учтите: классические «рендер-фермы» часто не имеют
              установленных сторонних плагинов или даже самой программы{" "}
              <mark className="app">Adobe After Effects</mark>. Поэтому лучше искать
              услугу аренды удалённого рабочего стола, куда можно установить собственное
              ПО и плагины. По цене это может выйти как дороже, так и дешевле аренды
              «рендер-фермы» — всё зависит от тарифов.
            </Addition>
          </li>
          <li>
            Собрать проект с нуля, визуально повторив нужный дизайн или анимацию. В этом
            случае вы получите чистую и «контролируемую» композицию, однако потратите на
            её реализацию значительно больше времени.
          </li>
        </ul>
        <Divider>Пара слов о финальном экспорте</Divider>
        <ul>
          <li>
            Если вы ранее создавали <a href="#proxy-comp">прокси</a> для композиций, не
            забудьте включить опцию <mark className="select">«Use Proxies»</mark> в{" "}
            <mark className="select">«Render Settings»</mark>. Иначе программа их
            проигнорирует, начнёт просчитывать всё заново, и вы не получите прироста
            скорости при экспорте.
          </li>
          <li>
            Во время экспорта композиции не стоит работать в других ресурсоёмких
            программах, таких как <mark className="app">Adobe Premiere</mark> или{" "}
            <mark className="app">Blender</mark>. Это чревато ошибками из-за нехватки
            оперативной памяти и может привести к сбою всего процесса.
          </li>
          <li>
            <p>
              Даже если вы включили аппаратное ускорение в{" "}
              <mark className="select">«Project Settings»</mark>, это не значит, что оно
              будет работать всегда. Из-за отсутствия у некоторых эффектов поддержки
              аппаратного ускорения или их неспособности полностью загружать «железо», не
              стоит ожидать 100% использования процессора и видеокарты во время
              рендеринга.
            </p>
            <Addition type="info">
              <p>
                Многие эффекты, особенно старые, до сих пор обрабатываются только
                процессором, потому что программа изначально проектировалась с упором на
                него, а видеокарта подключается лишь при возможности, и с этим ничего
                нельзя поделать.
              </p>
              <p>
                Добавим к этому ещё один нюанс: если в цепочке эффектов с поддержкой
                видеокарты окажется хоть один, который её не поддерживает, возникнет
                «бутылочное горлышко». Вся обработка будет ограничена скоростью просчёта
                этого единственного эффекта на процессоре. Из-за этого{" "}
                <mark className="app">Adobe After Effects</mark> иногда может и вовсе
                переложить весь рендеринг на процессор, проигнорировав видеокарту.
              </p>
              <p>
                Чтобы посмотреть, какие установленные эффекты действительно поддерживают
                аппаратное ускорение с помощью видеокарты, включите опцию{" "}
                <mark className="select">«Show GPU Capable Effects Only»</mark> в окне{" "}
                <mark className="select">«Effects & Presets»</mark>. Вы удивитесь,
                насколько коротким окажется список.
              </p>
            </Addition>
          </li>
          <li>
            Используйте <mark className="app">Adobe Media Encoder</mark> для экспорта
            композиций только в крайнем случае. Обычно рендеринг напрямую из{" "}
            <mark className="app">Adobe After Effects</mark> проходит стабильнее и
            быстрее.
          </li>
          <li>
            Время рендера рассчитывается динамически и не всегда бывает точным: оно может
            оказаться как меньше, так и больше фактического. Если программа сталкивается
            со сложным кадром, она пересчитывает общее время до завершения, предполагая,
            что все последующие кадры будут такими же ресурсоёмкими. Именно поэтому
            счётчик может показать два часа или больше, но, как только этот участок будет
            пройден, прогнозируемое время снова снизится.
          </li>
          <li>
            <p>
              Экспорт в <mark className="video">H.264</mark> и другие кодеки с сильным
              сжатием может пройти быстрее, если использовать аппаратное ускорение для
              кодирования видео, например <mark className="select">«NVIDIA NVENC»</mark>
              <sup>1</sup>, <mark className="select">«AMD AMF»</mark> или{" "}
              <mark className="select">«Intel Quick Sync»</mark>. На коротких композициях
              разница бывает незаметна, но при экспорте длинных проектов она становится
              ощутимой. Однако эта возможность доступна не во всех модулях экспорта. Найти
              её можно, например, в плагинах{" "}
              <mark className="plugin">Voukoder Classic</mark> и{" "}
              <mark className="plugin">Voukoder Pro</mark>.
            </p>
            <Addition type="warning">
              <p>
                <sup>1</sup> Некоторые кодировщики, такие как{" "}
                <mark className="select">«NVIDIA NVENC»</mark>, ориентированы на скорость,
                а не на максимальное качество. Они используют быстрые, но менее точные
                алгоритмы, поэтому при их использовании возможны незначительные искажения
                цвета или артефакты, такие как муар на тексте.
              </p>
              <p>
                Если для вас важны качество и точная цветопередача, предпочтительнее
                использовать программный кодировщик <mark className="select">«x264»</mark>
                , который тщательнее, но медленнее сжимает и пакует кадры. Однако стоит
                учитывать, что при сжатии кодеком <mark className="video">H.264</mark> и
                его производных в любом случае происходит потеря цветовой информации из-за
                цветовой субдискретизации.
              </p>
            </Addition>
          </li>
        </ul>
        <Divider>Раздел 3: Система, «железо» и другие нюансы</Divider>
        <p>
          Иногда проблема «тормозов» кроется не в проекте или настройках программы, а
          глубже — в конфигурации системы, «железе» или даже в ваших завышенных ожиданиях.
          Разберёмся по порядку.
        </p>
        <Divider>Соответствие «железа» задачам</Divider>
        <ContentFilter
          windowsContent={
            <>
              <p>
                Для запуска <mark className="app">Adobe After Effects</mark> хватит любого
                современного ПК, подходящего под{" "}
                <a href="https://helpx.adobe.com/after-effects/system-requirements.html">
                  минимальные системные требования
                </a>
                . Однако для комфортной работы и создания композиций, а не просто запуска
                программы, на них ориентироваться не стоит. Тогда вопрос: а на что именно?
              </p>
              <ul>
                <li>
                  <mark className="app">Adobe After Effects</mark> больше всего любит
                  потреблять ресурсы процессора для рендера кадра. Чем мощнее процессор и
                  чем больше у него ядер, тем выше скорость рендера, особенно с включённым{" "}
                  <mark className="select">«Multi-Frame Rendering»</mark>.
                </li>
                <li>
                  Оперативная память нужна для хранения уже отрендеренных кадров и их
                  отображения в предпросмотре. Так как{" "}
                  <mark className="app">Adobe After Effects</mark> хранит кадры
                  фрагментированно, то потребление памяти растёт как на дрожжах, особенно
                  при работе с высоким разрешением и большой частотой кадров. Поэтому для
                  комфортной работы рекомендуется иметь не менее 32 ГБ ОЗУ и настроить{" "}
                  <a href="#configure-swapfile">файл подкачки</a>.
                </li>
                <li>
                  <p>
                    А как же видеокарта? Она играет лишь роль помощника в рендере кадра и
                    задействуется не всегда, так как большинство эффектов разработаны под
                    использование процессора. Тем не менее, нельзя сказать, что от
                    видеокарты можно полностью отказаться: иногда она ускоряет работу, а
                    иногда — нет.
                  </p>
                  <Addition type="warning">
                    Если установить мощный процессор и слабую видеокарту, то при рендере
                    всё может упереться в видеокарту, а процессор будет простаивать.
                  </Addition>
                </li>
                <li>
                  Если операционная система, файлы проектов и дисковый кэш сидят на
                  медленном <mark className="hardware">HDD</mark>, тормозить будет всё
                  из-за низкой скорости чтения и записи. Переход на{" "}
                  <mark className="hardware">SSD</mark> или{" "}
                  <mark className="hardware">NVMe</mark> существенно улучшит ситуацию.
                </li>
              </ul>
            </>
          }
        />
        <Divider>Очищаем систему от «мусора»</Divider>
        <ContentFilter
          macContent={
            <>
              <p>
                Если вы полностью уверены, что с проектом всё хорошо, а устройство должно
                с ним справляться, но не справляется, — в первую очередь проверьте систему
                на наличие «хлама» и почистите её. Со временем она забивается «мусором»:
                временными файлами, кэшем и прочими ненужными данными. Самый простой
                способ избавиться от них — почистить папку{" "}
                <mark className="path">«Загрузки»</mark>, удалить старые резервные копии
                системы и очистить <mark className="path">«Корзину»</mark>.
              </p>
              <p>
                Для глубокой очистки можно использовать сторонние программы, такие как{" "}
                <mark className="app">OnyX</mark> или{" "}
                <mark className="app">CleanMyMac</mark>, но будьте с ними осторожны: они
                предназначены для опытных пользователей и при неосторожном использовании
                могут удалить важные файлы. Чтобы вручную найти, что именно занимает
                больше всего места на диске, воспользуйтесь анализаторами, такими как{" "}
                <mark className="app">DaisyDisk</mark>. Они просканируют все директории и
                помогут найти и удалить ненужное.
              </p>
            </>
          }
          windowsContent={
            <>
              <p>
                Если вы полностью уверены, что с проектом всё хорошо, а устройство должно
                с ним справляться, но не справляется, в первую очередь проверьте систему
                на наличие «хлама» и почистите её. Со временем она забивается «мусором»:
                временными файлами, кэшем и прочими ненужными данными. Самый простой
                способ избавиться от них — использовать стандартную утилиту{" "}
                <mark className="code">cleanmgr.exe</mark>, которую можно запустить из
                окна <mark className="app">«Выполнить»</mark>. Она проанализирует систему
                и позволит выборочно удалить накопившиеся обновления, старые точки
                восстановления и прочий мусор.
              </p>
              <p>
                Для более глубокой очистки можно использовать сторонние программы, такие
                как <mark className="app">Auslogics BoostSpeed</mark>,{" "}
                <mark className="app">Reg Organizer</mark> или{" "}
                <mark className="app">CCleaner</mark>, но будьте с ними осторожны: они
                предназначены для опытных пользователей и при неосторожном использовании
                могут удалить важные файлы. Чтобы вручную найти, что именно занимает
                больше всего места на диске, воспользуйтесь анализаторами, такими как{" "}
                <mark className="app">WizTree</mark> или{" "}
                <mark className="app">WinDirStat</mark>. Они просканируют все директории и
                помогут найти и удалить ненужное.
              </p>
            </>
          }
        />
        <ContentFilter
          windowsContent={
            <>
              <Divider>Проверяем драйверы и отключаем автообновления</Divider>
              <p>
                Иногда причина ситуации{" "}
                <mark className="quote">«вчера работало плавно, а сегодня — нет»</mark>{" "}
                кроется в автоматических обновлениях.{" "}
                <mark className="app">Центр обновлений Windows</mark> или утилиты от
                производителей комплектующих, такие как{" "}
                <mark className="app">NVIDIA App</mark>,{" "}
                <mark className="app">Intel Driver & Support Assistant</mark> или{" "}
                <mark className="app">AMD Software: Adrenalin Edition</mark>, могут
                скачивать и устанавливать драйверы в фоновом режиме, без вашего ведома.
                Проблема в том, что новые версии драйверов не всегда работают в{" "}
                <mark className="app">Adobe After Effects</mark> стабильнее предыдущих.
                Откатить их можно с помощью{" "}
                <mark className="app">Диспетчера устройств</mark>.
              </p>
              <ArticleMedia
                src="A9WYBglOKaQ"
                type="youtube"
              />
              <p>
                Если вы не хотите разбираться в причинах сбоя или нет возможности откатить
                драйверы с помощью <mark className="app">Диспетчера устройств</mark>,
                самый простой выход — откатить систему до последнего бэкапа или точки
                восстановления. Но поскольку они есть не у всех, чаще всего приходится
                переустанавливать драйверы вручную. Перед этим не забудьте скачать нужные
                установочные файлы.
              </p>
              <ul>
                <li>
                  <p>
                    Для видеокарт <mark className="hardware">NVIDIA</mark> рекомендуется
                    использовать <mark className="app">NVIDIA Studio Driver</mark>: он
                    оптимизирован для работы в творческих приложениях и обновляется реже,
                    чем <mark className="app">NVIDIA Game Ready Driver</mark>.
                  </p>
                  <Addition type="info">
                    Загрузить драйверы <mark className="app">NVIDIA Studio</mark> можно на{" "}
                    <a href="https://www.nvidia.com/en-eu/geforce/drivers/">
                      официальном сайте NVIDIA
                    </a>
                    . На странице укажите модель видеокарты, ОС и в поле{" "}
                    <mark className="select">«Download Type»</mark> выберите{" "}
                    <mark className="select">«Studio Driver»</mark>.
                  </Addition>
                </li>
                <li>
                  <p>
                    Для <mark className="hardware">Intel</mark> скачайте подходящий
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
                    <mark className="hardware">Intel</mark> может блокировать доступ к
                    сайту для пользователей из Российской Федерации.
                  </Addition>
                </li>
                <li>
                  Для <mark className="hardware">AMD</mark> воспользуйтесь автоматическим
                  установщиком на{" "}
                  <a href="https://www.amd.com/en/support/download/drivers.html">
                    официальном сайте
                  </a>
                  .
                </li>
              </ul>
              <p>
                Для полного удаления драйверов видеокарты воспользуйтесь утилитой{" "}
                <mark className="app">Display Driver Uninstaller (DDU)</mark>, которую
                можно скачать с{" "}
                <a href="https://www.wagnardsoft.com/display-driver-uninstaller-ddu">
                  официального сайта
                </a>
                . Саму процедуру очистки лучше всего выполнять в безопасном режиме.
              </p>
              <ArticleMedia
                src="98DAgw1KcmI"
                type="youtube"
              />
              <Addition type="danger">
                Выполняйте удаление драйверов на свой страх и риск. Если вы неопытный
                пользователь, пропустите этот пункт и попробуйте просто переустановить
                драйверы поверх существующих.
              </Addition>
              <p>
                Если вы не сторонник автоматических обновлений и не хотите внезапно
                столкнуться с «тормозами», их можно отключить. Правда, стандартный способ
                в <mark className="app">Центре обновлений Windows</mark> позволяет лишь
                отложить этот процесс максимум на 5 недель (35 дней), и для большинства
                пользователей этого срока вполне достаточно.{" "}
                <a href="https://remontka.pro/pause-windows-updates-adjust-max-period/">
                  А если хочу срок побольше?
                </a>
              </p>
              <p>
                Если же вы хотите отключить обновления навсегда, придётся обращаться к
                реестру или редактору локальной групповой политики<sup>1</sup>.
              </p>
              <ArticleMedia
                src="SgU4jB4ooQk"
                type="youtube"
              />
              <Addition type="warning">
                <ul>
                  <li>
                    <sup>1</sup>{" "}
                    <mark className="app">Редактор локальной групповой политики</mark> или
                    же <mark className="app">gpedit.msc</mark> отсутствует в редакции
                    Home, но есть в Pro, Enterprise и Education.
                  </li>
                  <li>
                    Имейте в виду: полное отключение обновлений может аукнуться в будущем,
                    когда новые версии программ начнут требовать более свежую операционную
                    систему или драйверы.
                  </li>
                </ul>
              </Addition>
            </>
          }
        />
        <Divider>Влияет ли версия программы на производительность?</Divider>
        <p>
          Всё зависит от того, на каком устройстве вы запускаете программу. Если поставить
          устаревшую версию <mark className="app">Adobe After Effects</mark> на новый
          компьютер, она может работать нестабильно, так как старые сборки не рассчитаны
          на современные комплектующие. А установка самой свежей версии на слишком старый
          ноутбук или ПК нередко приводит к сбоям и отсутствию аппаратного ускорения.
        </p>
        <p>
          Универсальной «идеальной» версии{" "}
          <mark className="app">Adobe After Effects</mark> не существует, поэтому выбор
          лучше основывать на собственном опыте, а не на советах с чатов и форумов.
          Производительность слишком индивидуальна: у кого-то всё «тормозит», у кого-то —
          «летает», да и проекты у всех разные. Выбор версии сам по себе почти не влияет
          на скорость работы, но, оставаясь на старой, вы отказываетесь от новых функций,
          оптимизаций и исправлений ошибок ради сомнительного преимущества, которое на
          практике ничего не даёт.
        </p>
        <Divider>Дополнительные материалы</Divider>
        <div className="flexible-links">
          <a href="https://www.pugetsystems.com/blog/2025/02/24/upcoming-boost-to-after-effects-preview-playback-with-ram-and-disk-cache/">
            О потреблении ОЗУ и дискового кэша от Puget Systems
          </a>
          <a href="https://helpx.adobe.com/after-effects/using/memory-storage1.html">
            Использование оперативной памяти в Adobe After Effects
          </a>
        </div>
      </DetailsSummary>
      <DetailsSummary
        anchor="mercury-acceleration"
        tag="mercury gpu acceleration, software rendering only, рендеринг на процессоре"
        title="Как переключить тип рендеринга и зачем это нужно делать?"
      >
        <p>
          В <mark className="app">Adobe After Effects</mark> существует два типа ускорения
          — аппаратное и программное, — и каждый из них работает с конкретным проектом
          по-разному. В некоторых случаях пользователю может понадобиться переключение с
          аппаратного ускорения на программное, чтобы избавиться от проблем, связанных с{" "}
          <mark className="select">«Mercury GPU Acceleration»</mark>: например, от
          переполнения видеопамяти, различных артефактов или остановки рендеринга без
          видимых причин. Также это может ускорить процесс рендера, если на вашем
          устройстве установлен мощный процессор и слабая видеокарта, в которую
          «упирается» обработка, из-за чего процессор простаивает. Или наоборот, когда
          стандартный эффект, например{" "}
          <mark className="plugin">VR Chromatic Aberration</mark>, требует включить
          аппаратное ускорение, если у вас выбран режим{" "}
          <mark className="select">«Mercury Software Only»</mark>.
        </p>
        <p>
          Чтобы изменить тип ускорения, откройте окно{" "}
          <mark className="select">«Project Settings»</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Alt + Shift + K</mark> или через меню{" "}
          <mark className="select">«File» → «Project Settings»</mark>. По умолчанию
          откроется вкладка <mark className="select">«Video Rendering and Effects»</mark>,
          где параметр <mark className="select">«Use»</mark> отвечает за тип ускорения
          рендеринга.
        </p>
        <Addition type="info">
          Окно <mark className="select">«Project Settings»</mark> часто называют
          «ракетой», так как иконка космической ракеты в окне{" "}
          <mark className="select">«Project»</mark> открывает именно его.
        </Addition>
        <ArticleMedia
          caption="Project Settings"
          src="legacy/aftereffects/project_manager_mercury.png"
          type="image"
        />
        <ul>
          <li>
            <p>
              <mark className="select">«Mercury Software Only»</mark>, или{" "}
              <mark className="word">программное ускорение</mark>, позволит{" "}
              <mark className="app">Adobe After Effects</mark> реже обращаться к
              видеокарте и выполнять рендеринг в большинстве случаев на процессоре.
              Рендеринг на процессоре обычно стабильнее, чем при использовании видеокарты.
            </p>
            <Addition type="info">
              <ul>
                <li>
                  Даже если выбран этот параметр, некоторые сторонние эффекты всё же могут
                  обрабатываться видеокартой, например{" "}
                  <mark className="plugin">Depth Scanner</mark>. Обычно это поведение
                  можно изменить в настройках самого эффекта.
                </li>
                <li>
                  С этим параметром время просчёта композиций может измениться как в
                  худшую, так и в лучшую сторону — это зависит от «железа», но в сложных
                  композициях время зачастую остаётся неизменным. Иногда рендеринг на
                  процессоре может пройти даже быстрее, чем с{" "}
                  <mark className="select">«Mercury GPU Acceleration»</mark>.
                </li>
              </ul>
            </Addition>
          </li>
          <li>
            <p>
              <mark className="select">«Mercury GPU Acceleration»</mark>, или{" "}
              <mark className="word">аппаратное ускорение</mark>, позволит программе
              использовать при рендеринге и процессор, и видеокарту. Видеокарта будет
              задействована в тех случаях, когда применённый эффект её поддерживает.
              Иногда это значение может быть продублировано с указанием технологии вашей
              видеокарты, например <mark className="term">CUDA (NVIDIA)</mark>,{" "}
              <mark className="term">OpenCL (AMD)</mark>,{" "}
              <mark className="term">OpenGL (Intel)</mark> или{" "}
              <mark className="term">Metal (Apple Silicon)</mark>.
            </p>
            <Addition type="warning">
              На видеокартах с малым объёмом видеопамяти часто возникает ошибка{" "}
              <mark className="warning">
                «After Effects has encountered a failure related to GPU-enabled effects
                from this frame»
              </mark>
              . Это происходит из-за переполнения видеопамяти. В таком случае{" "}
              <mark className="app">Adobe After Effects</mark> предложит переключиться на
              режим <mark className="select">«Mercury Software Only»</mark>.
            </Addition>
            <Addition type="danger">
              <ul>
                <li>
                  Если на одном слое смешать эффект, который поддерживает аппаратное
                  ускорение, и тот, который не поддерживает, то скорость рендеринга будет
                  ограничена скоростью обработки эффекта на процессоре.
                </li>
                <li>
                  Часто бытует мнение, что при включённом{" "}
                  <mark className="select">«Mercury GPU Acceleration»</mark> видеокарта
                  должна использоваться во всех случаях. Это не так — программа будет
                  задействовать её только при необходимости, а не по желанию пользователя.{" "}
                  <mark className="app">Adobe After Effects</mark> в основном использует
                  процессор, но разработчики стандартных и сторонних эффектов всё чаще
                  добавляют поддержку ускорения с помощью видеокарты.
                </li>
              </ul>
            </Addition>
          </li>
        </ul>
        <Divider>Проверяем эффекты с поддержкой аппаратного ускорения</Divider>
        <p>
          Чтобы посмотреть список эффектов, которые поддерживают ускорение с помощью
          видеокарты, откройте окно <mark className="select">«Effects & Presets»</mark> и
          в его контекстном меню включите параметр{" "}
          <mark className="select">«Show GPU Capable Effects Only»</mark>. После этого вы
          заметите, насколько сильно сократится список ваших эффектов.
        </p>
        <ArticleMedia
          caption="Включаем отображение только тех эффектов, которые поддерживают аппаратное ускорение"
          src="legacy/aftereffects/show_gpu_capable_effects_only.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="configure-swapfile"
        tag="файл подкачки, виртуальная память, swapfile, paging file, virtual memory"
        title="Для чего нужен файл подкачки и почему его не стоит отключать?"
      >
        <ContentFilter
          windowsContent={
            <>
              <p>
                <mark className="file">Файл подкачки</mark>, или{" "}
                <mark className="file">PAGEFILE.SYS</mark>, — это специальный файл,
                который служит виртуальным расширением оперативной памяти. Когда системе
                не хватает физической оперативной памяти для выполнения ресурсоёмких
                задач, она начинает использовать файл подкачки для временного хранения
                данных. По умолчанию, если в вашей системе не отключён{" "}
                <mark className="file">PAGEFILE.SYS</mark>, система автоматически
                управляет его размером, однако делает это зачастую неэффективно, поэтому
                рекомендуется настроить его параметры вручную.
              </p>
              <p>
                В интернете и от некоторых создателей самодельных образов Windows нередко
                можно встретить мнение, что файл подкачки лучше отключить — якобы он
                «вредит» вашему твёрдотельному накопителю. Отчасти в этом есть смысл,
                однако современные накопители рассчитаны на такие нагрузки, и вы, скорее
                всего, смените своё устройство на новое гораздо раньше, чем диск выйдет из
                строя.
              </p>
              <p>
                С отключённым файлом подкачки в{" "}
                <mark className="app">Adobe After Effects</mark> или других творческих
                программах вы можете столкнуться с различными ошибками, например:{" "}
                <mark className="select">
                  «After Effects has unexpectedly run out of memory and cannot complete
                  this export»
                </mark>
                , <mark className="select">«Out of Memory»</mark> или{" "}
                <mark className="select">
                  «Low memory warning. RAM use has been extended for previews»
                </mark>
                . Кроме того, при нехватке оперативной памяти и отсутствии файла подкачки
                возможны вылеты приложений, появление сообщения{" "}
                <mark className="select">«В системе недостаточно памяти»</mark>, различные
                подвисания или даже появление «чёрного экрана», устраняемого только
                перезагрузкой устройства.
              </p>
              <p>
                Чтобы настроить размер файла подкачки в Windows или включить его, следуйте
                пошаговой инструкции, приведённой ниже.
              </p>
              <Divider>Инструкция для Windows 10 и 11</Divider>
              <ul>
                <li>
                  <p>
                    Откройте окно <mark className="app">Выполнить</mark> с помощью
                    комбинации клавиш <mark className="key">Win + R</mark>, введите в поле{" "}
                    <mark className="select">«Открыть»</mark> команду{" "}
                    <mark className="code">SystemPropertiesAdvanced.exe</mark>, а затем
                    нажмите <mark className="key">Enter</mark> дважды. Таким образом вы
                    откроете окно <mark className="select">«Свойства системы»</mark> и
                    сразу же попадёте в{" "}
                    <mark className="select">«Параметры быстродействия»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Выполнить"
                    src="legacy/run_systempropertiesadvanced.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    В окне <mark className="select">«Параметры быстродействия»</mark>{" "}
                    перейдите на вкладку <mark className="select">«Дополнительно»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Параметры быстродействия"
                    src="legacy/systempropertiesadvanced_select_advanced.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    Во вкладке <mark className="select">«Дополнительно»</mark> нажмите
                    кнопку <mark className="select">«Изменить»</mark> в разделе{" "}
                    <mark className="select">«Виртуальная память»</mark>.
                  </p>
                  <ArticleMedia
                    caption="Параметры быстродействия"
                    src="legacy/systempropertiesadvanced_open_change_size.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    Если у вас установлен флажок у параметра{" "}
                    <mark className="select">
                      «Автоматически выбирать объем файла подкачки»
                    </mark>
                    , снимите его.
                  </p>
                  <ArticleMedia
                    caption="Виртуальная память"
                    src="legacy/systempropertiesadvanced_disable_auto_size.png"
                    type="image"
                  />
                </li>
                <li>
                  <p>
                    Выберите раздел, на котором установлена система. Если для выбранного
                    раздела установлено значение{" "}
                    <mark className="select">«Без файла подкачки»</mark> или{" "}
                    <mark className="select">«Размер по выбору системы»</mark>, измените
                    его на <mark className="select">«Указать размер»</mark>.
                  </p>
                  <p>
                    Далее укажите исходный и максимальный размер файла подкачки. После
                    ввода значений не забудьте нажать кнопку{" "}
                    <mark className="select">«Задать»</mark> для сохранения, а затем —{" "}
                    <mark className="select">«ОК»</mark> внизу окна.
                  </p>
                  <ArticleMedia
                    caption="Виртуальная память"
                    src="legacy/systempropertiesadvanced_set_swap_size.png"
                    type="image"
                  />
                  <Addition type="info">
                    <ul>
                      <li>
                        <p>
                          Для файла подкачки выбирайте самый производительный диск на
                          вашем устройстве. Как правило, это тот же диск, на котором
                          установлена система. Размещение файла подкачки на медленном
                          диске может ухудшить работу как с{" "}
                          <mark className="app">Adobe After Effects</mark>, так и с{" "}
                          Windows в целом.
                        </p>
                        <Addition type="warning">
                          В некоторых случаях, если указать для файла подкачки не
                          системный раздел, это может привести к ошибкам, связанным с
                          оперативной памятью, которые проявятся не только в приложениях{" "}
                          <mark className="company">Adobe</mark>, но и по всей системе.
                        </Addition>
                      </li>
                      <li>
                        <mark className="select">«Исходный размер»</mark> — это начальный
                        размер файла подкачки, который всегда будет зарезервирован в
                        системе.
                      </li>
                      <li>
                        <mark className="select">«Максимальный размер»</mark> — это
                        граница, до которой Windows будет автоматически расширять файл при
                        необходимости. Если система достигнет этой границы, файл больше
                        расширяться не будет.
                      </li>
                      <li>
                        В качестве <mark className="select">«исходного размера»</mark> вы
                        можете установить значение от <mark className="copy">1024</mark>{" "}
                        МБ до любого числа. Windows позволяет задать и более низкое
                        значение, но этого делать не рекомендуется, особенно если у вас
                        установлен медленный накопитель.
                      </li>
                      <li>
                        В качестве <mark className="select">«максимального размера»</mark>{" "}
                        для повседневных задач можно установить значение по формуле{" "}
                        <mark className="quote">
                          «текущий объём оперативной памяти, умноженный на 3 или 4»
                        </mark>{" "}
                        или сразу задать своё максимальное значение, например{" "}
                        <mark className="copy">65536</mark> (64 ГБ) или{" "}
                        <mark className="copy">131072</mark> (128 ГБ). Убедитесь, что на
                        выбранном разделе достаточно свободного места для файла подкачки.
                      </li>
                    </ul>
                  </Addition>
                </li>
                <li>
                  Задав нужный размер файла подкачки, перезагрузите устройство. Теперь{" "}
                  <mark className="file">PAGEFILE.SYS</mark> будет работать в соответствии
                  с выбранными параметрами, и проблемы с нехваткой оперативной памяти
                  будут возникать заметно реже.
                </li>
              </ul>
            </>
          }
        />
      </DetailsSummary>
    </div>
  );
};

export default AePerformance;
