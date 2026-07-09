import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import ContentFilter from "../../../components/content/ContentFilter";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PrPerformance: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="choose-version"
        tag="версия программы для старых устройств"
        title="Какая версия программы считается самой стабильной и какую лучше установить?"
      >
        <Addition type="tldr">
          <ul>
            <li>
              «Самой стабильной» версии <mark className="app">Adobe Premiere</mark> не
              существует. Если последние версии вас не устраивают, в качестве отправной
              точки можно рассмотреть <mark className="app">Adobe Premiere Pro</mark>{" "}
              <mark className="version">24.6 (2024)</mark> или{" "}
              <mark className="app">Adobe Premiere Pro</mark>{" "}
              <mark className="version">23.6 (2023)</mark>, но не более ранние. В то же
              время не стоит спешить с обновлением сразу после выхода крупного релиза — в
              нём могут встречаться проблемы, которые исправляют в последующих
              обновлениях.
            </li>
            <li>
              Аналогично, нет и «самой быстрой» версии. Скорость работы зависит от
              сложности проекта и «железа» устройства, однако на одном и том же проекте
              новые версии программы могут отрисовывать секвенцию быстрее.
            </li>
          </ul>
        </Addition>
      </DetailsSummary>
      <DetailsSummary
        anchor="disable-media-intelligence-analysis"
        tag="анализ медиа"
        title="Что у меня постоянно обрабатывается в фоне после импорта исходников или как отключить «Media Intelligence Analysis»?"
      >
        <p>
          Начиная с <mark className="app">Adobe Premiere Pro</mark>{" "}
          <mark className="version">25.6</mark> в программу был добавлен функционал поиска
          футажей и аудио на основе машинного обучения. Всё бы хорошо, но при открытии
          большого проекта <mark className="plugin">Media Intelligence</mark> начинает
          анализировать все исходники, и это может занять довольно продолжительное время.
          Кроме того, во время анализа и после импорта материалов функция заметно
          нагружает систему.
        </p>
        <p>
          Чтобы отключить этот анализ, перейдите в{" "}
          <mark className="select">
            «Edit» → «Preferences» → «Media Analysis & Transcription»
          </mark>{" "}
          и снимите чекбокс напротив параметра{" "}
          <mark className="select">
            «Analyze all imported media to search for visuals or audio»
          </mark>
          . При необходимости можно отключить и кэширование результатов, установив для{" "}
          <mark className="select">«Cache analysis results for re-use»</mark> значение{" "}
          <mark className="select">«Do not use»</mark>.
        </p>
        <ArticleMedia
          caption="Отключаем анализ медиа"
          src="legacy/premierepro/disable_media_intelligence.png"
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
                <mark className="app">Adobe Premiere</mark> или других творческих
                программах вы можете столкнуться с различными ошибками, например{" "}
                <mark className="warning">«Out of Memory»</mark>. Кроме того, при нехватке
                оперативной памяти и отсутствии файла подкачки возможны вылеты приложений,
                появление сообщения{" "}
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
                          <mark className="app">Adobe Premiere</mark>, так и с Windows в
                          целом.
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

export default PrPerformance;
