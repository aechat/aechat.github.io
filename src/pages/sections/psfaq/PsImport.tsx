import React from "react";

import {Divider} from "antd";

import Addition from "../../../components/content/Addition";

import {ArticleMedia} from "../../../components/content/ArticleMedia";

import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const PsImport: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="fix-color-profile-mismatch"
        tag="missing profile, embedded profile mismatch, отсутствие встроенного профиля, несоответствие внедренного профиля, документ не содержит встроенных профилей rgb, the document has an embedded color profile that does not match the current rgb working space"
        title="Почему при импорте изображения появляется «The document does not have an embedded RGB profile»?"
      >
        <p>
          При открытии изображения или проекта в{" "}
          <mark className="app">Adobe Photoshop</mark> вы могли наблюдать предупреждение о
          том, что открываемый документ не имеет цветового профиля. Хорошо, если бы это
          окно один раз открывалось, но нет — оно появляется чуть ли не при открытии
          каждого файла. В этой статье рассмотрим, что такое цветовые профили и как
          отключить это надоедливое предупреждение.
        </p>
        <ArticleMedia
          caption="Missing Profile"
          src="legacy/photoshop/missing_profile.png"
          type="image"
        />
        <Divider>
          Разбираем ошибку{" "}
          <mark className="warning">
            «The document has an embedded color profile that does not match the current
            RGB working space»
          </mark>
        </Divider>
        <Divider>
          Что за{" "}
          <mark className="warning">
            «The document does not have an embedded RGB profile»
          </mark>
        </Divider>
        <Divider>Разбираемся с цветовыми профилями</Divider>
        <Divider>Отключаем вопрос при открытии</Divider>
        <p>
          Чтобы убрать данный вопрос при открытии каждого документа в{" "}
          <mark className="app">Adobe Photoshop</mark>, нужно открыть окно{" "}
          <mark className="select">«Color Settings»</mark> с помощью комбинации клавиш{" "}
          <mark className="key">Ctrl + Shift + K</mark> или найти соответствующую кнопку в{" "}
          <mark className="select">«Edit»</mark>.
        </p>
        <ArticleMedia
          caption="Photoshop"
          src="legacy/photoshop/open_color_settings.png"
          type="image"
        />
        <p>
          Далее в открывшемся окне нужно снять все чекбоксы у параметров{" "}
          <mark className="select">«Profile Mismatches»</mark> и{" "}
          <mark className="select">«Missing Profiles»</mark>, а затем нажать на{" "}
          <mark className="select">«OK»</mark> для сохранения настроек.
        </p>
        <Addition type="warning">
          Отключая данные чекбоксы, вы соглашаетесь на то, что можете столкнуться с
          искажениями цветов при редактировании того или иного изображения, если явно не
          указывать цветовой профиль.
        </Addition>
        <ArticleMedia
          caption="Color Settings"
          src="legacy/photoshop/disable_ask_color_when_opening.png"
          type="image"
        />
      </DetailsSummary>
    </div>
  );
};

export default PsImport;
