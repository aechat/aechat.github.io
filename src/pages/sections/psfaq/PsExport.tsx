import React from "react";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PsExport: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="export-layers"
        tag="export layers"
        title="Как экспортировать слои отдельными файлами?"
      >
        <p>
          Для сохранения всех слоёв вашего проекта в отдельные файлы, будь то{" "}
          <mark className="image">PSD</mark>, <mark className="image">PNG</mark> или{" "}
          <mark className="image">TIFF</mark>, перейдите в{" "}
          <mark className="select">«File» → «Export» → «Layers to Files»</mark>.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/layers_to_files.png"
          type="image"
        />
        <p>
          В открывшемся окне вы можете указать формат файла и путь к папке, куда вы хотите
          сохранить слои. Для начала процесса сохранения нажмите на{" "}
          <mark className="select">«Run»</mark> и ожидайте окончания операции.
        </p>
        <ArticleMedia
          caption="Adobe Photoshop"
          src="legacy/photoshop/export_layers.png"
          type="image"
        />
      </DetailsSummary>
      <DetailsSummary
        anchor="restore-legacy-save"
        tag="legacy export"
        title="Как вернуть старый механизм сохранения файлов?"
      >
        <p>
          В <mark className="app">Adobe Photoshop</mark>{" "}
          <mark className="version">22.4.2 (2022)</mark> решили немного изменить логику
          сохранения файлов в окнах <mark className="select">«Save As»</mark> и{" "}
          <mark className="select">«Export As»</mark>. Не всем это нововведение может
          понравиться, так как в новом варианте не хватало многих форматов для сохранения
          и приходилось пользоваться <mark className="select">«Save As Copy»</mark>.
        </p>
        <Addition type="info">
          Подробнее о командах для сохранения файлов вы можете прочитать на{" "}
          <a href="https://helpx.adobe.com/photoshop/using/saving-images.html">
            сайте Adobe
          </a>
          .
        </Addition>
        <p>
          К счастью, данное поведение можно вернуть так, как это было в предыдущих версиях
          программы. Для этого перейдите в настройки программы с помощью{" "}
          <mark className="select">«Edit» → «Preferences» → «File Handling»</mark>. После
          открытия настроек установите чекбоксы напротив двух параметров:{" "}
          <mark className="select">«Enable Legacy „Save As”»</mark> и{" "}
          <mark className="select">
            «Do not append „copy” to filename when saving a copy»
          </mark>
          .
        </p>
        <p>
          Также при желании вы можете включить параметр{" "}
          <mark className="select">«Use Legacy „Export As”»</mark> во вкладке{" "}
          <mark className="select">«Export»</mark>.
        </p>
      </DetailsSummary>
    </div>
  );
};

export default PsExport;
