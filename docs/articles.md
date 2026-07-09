# Статьи и разделы

Все статьи проекта располагаются в каталоге [sections](file:///C:/Users/m1sh3r/YandexDisk/Projects/aechat-links/src/pages/sections). Каждая директория внутри этого каталога представляет собой отдельный тематический блок. В папке `aefaq` собраны материалы по After Effects, в папке `prfaq` находятся разделы по Premiere, а папка `psfaq` содержит ответы по Photoshop. Один файл с расширением `.tsx` в этих директориях содержит подборку вопросов и ответов по одной теме.

## Каркас файла статьи

Каждая статья оформляется как React-компонент, который возвращает корневой контейнер с классом `article-content`. Внутри этого контейнера располагаются раскрывающиеся спойлеры с вопросами и ответами.

Пример структуры файла:

```tsx
import React from "react";

import Addition from "../../../components/content/Addition";
import DetailsSummary from "../../../components/detailsSummary/DetailsSummary";

const AeInterface: React.FC = () => {
  return (
    <div className="article-content">
      <DetailsSummary
        anchor="change-language"
        tag="интерфейс, язык, сменить язык"
        title="Как изменить язык интерфейса на английский?"
      >
        <p>
          Для смены языка создайте текстовый файл с именем{" "}
          <mark className="file">ae_force_english.txt</mark>в папке документов
          пользователя.
        </p>
        <Addition type="info">
          После создания файла перезапустите программу, чтобы изменения вступили в силу.
        </Addition>
      </DetailsSummary>
    </div>
  );
};

export default AeInterface;
```

## Добавление нового раздела статей

Чтобы создать новую категорию статей, необходимо добавить файл с расширением `.tsx` в соответствующий подкаталог [sections](file:///C:/Users/m1sh3r/YandexDisk/Projects/aechat-links/src/pages/sections). В этом файле описывается компонент, экспортируемый по умолчанию, с корневым блоком `div`, имеющим класс `article-content`. После создания файла его необходимо зарегистрировать на странице раздела в каталоге [pages](file:///C:/Users/m1sh3r/YandexDisk/Projects/aechat-links/src/pages), импортировав компонент в [AeFaqPage.tsx](file:///C:/Users/m1sh3r/YandexDisk/Projects/aechat-links/src/pages/AeFaqPage.tsx), [PrFaqPage.tsx](file:///C:/Users/m1sh3r/YandexDisk/Projects/aechat-links/src/pages/PrFaqPage.tsx) или [PsFaqPage.tsx](file:///C:/Users/m1sh3r/YandexDisk/Projects/aechat-links/src/pages/PsFaqPage.tsx) и добавив новый объект в массив `sections` этой страницы.

```ts
{
  component: AeInterface,
  id: "interface",
  key: "1",
  title: "Интерфейс",
}
```

## Структура внутри статьи

Каждый компонент `DetailsSummary` описывает одну проблему. Для работы ссылок обязательно указывайте стабильный текстовый идентификатор в свойстве `anchor` в формате `kebab-case`. Содержимое ответа верстается обычными текстовыми тегами и компонентами проекта, такими как `Addition`, `ArticleMedia`, `CodeSnippet` или `HostsAdobeModal`.

## Связи между разделами

Идентификатор `anchor` используется для создания прямых переходов с помощью ссылок вида `<a href="#anchor">...</a>`. Если объяснение проблемы дублируется в разных местах, рекомендуется использовать ссылку на уже существующий спойлер вместо копирования текста.
