# Компоненты интерфейса и макета

Документ содержит описание основных компонентов разметки (layout) и элементов пользовательского интерфейса (UI) проекта, правила их импорта, использования, а также примеры кода и технические особенности реализации. Все компоненты и модули должны соответствовать общим правилам кодирования проекта.

## Элементы разметки

### Компонент Header

Файл: `src/components/layout/Header.tsx`

Компонент представляет собой верхнюю панель страниц сайта. Она содержит кнопку возврата на главную страницу, заголовок текущей страницы, индикатор незавершенного раздела (WIP), кнопку прокрутки вверх, кнопку поиска по странице и кнопку настроек темы.

Для интеграции компонента используется следующий интерфейс свойств:

```ts
interface HeaderProperties {
  title: string;
}
```

Интерфейс принимает единственное свойство `title`, которое задает короткое имя страницы, такое как `aefaq`, `prfaq`, `psfaq`, `rules` или `links`.

Пример использования компонента на странице часто задаваемых вопросов представлен ниже:

```tsx
import Header from "../components/layout/Header";

<Header title="aefaq" />;
```

Технические особенности компонента заключаются в том, что он использует хук `useLocation` для определения текущего пути и настройки поведения пользовательского интерфейса. На страницах разделов категорий статей (таких как FAQ и выражения) отображается кнопка `SearchButton` из поискового движка `SearchEngine`, а на страницах из списка незавершенных разделов `WIP_PATHS` выводится соответствующий предупреждающий бейдж.

Кнопка прокрутки страницы вверх автоматически появляется при достижении определенного порога скролла. Анимация плавного появления шапки реализована средствами библиотеки `framer-motion`, а внутри самой шапки рендерятся кнопка поддержки `SupportDonut` и переключатель цветовой схемы `ThemeToggleButton`.

Общие правила: [coding-rules.md](coding-rules.md).

### Компонент Footer

Файл: `src/components/layout/Footer.tsx`

Компонент представляет собой подвал страницы с копирайтом, ссылкой на репозиторий GitHub и дополнительным инфоблоком для страниц категорий статей FAQ и выражений. Для данных разделов компонент также отображает индикатор свежести на основе последнего коммита в соответствующей папке раздела.

Интерфейс свойств компонента описывается следующим образом:

```ts
interface FooterProperties {
  initialYear: number;
  title: string;
}
```

Интерфейс содержит свойство `initialYear`, определяющее стартовый год в копирайте, и свойство `title`, задающее название проекта в подписи подвала.

Пример использования компонента на странице часто задаваемых вопросов представлен ниже:

```tsx
import Footer from "../components/layout/Footer";

<Footer
  initialYear={2023}
  title="aechat"
/>;
```

Технические особенности компонента состоят в том, что для путей `/aefaq`, `/prfaq`, `/psfaq` он выполняет запрос к GitHub API, откуда берет последний немерж-коммит для папки соответствующего раздела и выводит относительное время обновления.

При недоступности API отображается fallback-текст о том, что индикатор свежести временно недоступен, а сам формат относительного времени вычисляется через функцию `formatRelativeTime`.

Общие правила: [coding-rules.md](coding-rules.md).

### Компонент PageTransition

Файл: `src/components/layout/PageTransition.tsx`

Компонент служит обёрткой для анимации появления и скрытия содержимого страницы при навигации пользователя по сайту.

Интерфейс свойств компонента имеет следующий вид:

```ts
interface PageTransitionProperties {
  children: React.ReactNode;
  className?: string;
}
```

Интерфейс компонента принимает обязательное свойство `children`, представляющее контент страницы, и необязательное свойство `className`, которое служит для передачи дополнительного CSS-класса элементу `motion.main`.

Пример использования компонента на странице часто задаваемых вопросов представлен ниже:

```tsx
import PageTransition from "../components/layout/PageTransition";

<PageTransition className="main">
  <div className="article-container-flex">{/* контент страницы */}</div>
</PageTransition>;
```

Технические особенности компонента заключаются в том, что он рендерит контейнер `motion.main` из библиотеки `framer-motion`. В процессе анимации используется сочетание эффекта прозрачности (fade) и смещения по вертикальной оси `y` при входе и выходе страницы. Длительность всей анимации перехода составляет 0.3 секунды с использованием функции плавности easing со значениями `[0.25, 0, 0, 1]`.

Общие правила: [coding-rules.md](coding-rules.md).

## Элементы интерфейса

### Компонент CopyButton

Файл: `src/components/ui/CopyButton.tsx`

Компонент представляет собой компактную кнопку с иконкой `ShareRounded`.

Интерфейс свойств компонента описывается следующим образом:

```ts
interface CopyButtonProperties {
  className?: string;
  disabled?: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
```

Обязательный параметр `onClick` служит для передачи обработчика события клика, отвечающего за копирование информации. Дополнительно можно использовать свойство `disabled` для временной блокировки кнопки или передать строку через `className` для применения дополнительных стилей.

Пример импорта и использования кнопки представлен ниже:

```tsx
import {CopyButton} from "../components/ui/CopyButton";

<CopyButton onClick={() => handleCopyAnchor("about")} />;
```

Технические особенности компонента заключаются в том, что сам по себе он непосредственно не взаимодействует с буфером обмена, а лишь передает управление внешней функции через свойство `onClick`. Обработчик клика обернут во вспомогательную функцию `withSoftHaptic` для тактильного отклика на устройствах.

Результирующий список CSS-классов формируется динамически на основе базового стиля, текущего состояния блокировки и переданного внешнего класса. Для обеспечения доступности кнопка снабжена атрибутом `aria-label` со значением `Copy`. Стили компонента описаны в модуле `src/components/ui/CopyButton.module.scss`.

Общие правила: [coding-rules.md](coding-rules.md).

### Компонент LoadingAnimation

Файл: `src/components/ui/LoadingAnimation.tsx`

Компонент представляет собой экран загрузки приложения с анимированным логотипом и индикатором выполнения (progress-bar). Он управляет показом интро при переходах по страницам и может быть временно подавлен внешним флагом.

Интерфейс свойств компонента имеет следующий вид:

```ts
interface LoadingAnimationProperties {
  isLoading: boolean;
  isSuppressed?: boolean;
}
```

Интерфейс компонента принимает обязательное свойство `isLoading` для индикации признака активной загрузки и необязательное свойство `isSuppressed`, предназначенное для принудительного скрытия анимации со значением по умолчанию `false`.

Пример использования компонента в основном файле приложения представлен ниже:

```tsx
import LoadingAnimation from "./components/ui/LoadingAnimation";

<LoadingAnimation
  isLoading={isLoading}
  isSuppressed={isSafariWarningOpen}
/>;
```

Технические особенности компонента заключаются в том, что он работает совместно с контекстом `LoadingContext` и обновляет состояние загрузки при смене значения пути в `location.pathname`. Заставка интро для страниц категорий статей `/aefaq`, `/prfaq`, `/psfaq` и `/rules` показывается не чаще одного раза в 10 минут с сохранением метки времени в локальное хранилище `localStorage` под ключом `introLastShown`.

На первом этапе компонент загружает необходимые шрифты, после чего запускает текстовую анимацию. При показе интро оверлей закрывается только после завершения стартовой фазы текста и окончания загрузки страницы. Если загрузка страницы продолжается по истечении стартовой фазы, на экране отображается progress-bar, не дожидаясь завершения полного цикла текстовой анимации.

В компоненте реализована поддержка эффектов плавного появления и исчезновения (fade-in и fade-out), а также отдельная задержка отображения индикатора прогресса. Стилистическое оформление и ключевые кадры анимаций находятся в файле `src/components/ui/LoadingAnimation.module.scss`.

Общие правила: [coding-rules.md](coding-rules.md).

### Компонент LinkCard

Файл: `src/components/ui/LinkCards.tsx`

Компонент представляет собой карточку-ссылку для страницы `links`, которая показывает иконку, название и опциональное описание. Карточка поддерживает внутреннюю и внешнюю навигацию, а также копирование ссылки по длительному нажатию или через контекстное меню.

Интерфейс свойств карточки описывается следующим образом:

```ts
interface LinkCardProperties {
  description?: string;
  href: string;
  icon: React.ReactNode;
  name: string;
  variant?: "external" | "internal";
}
```

Интерфейс содержит несколько параметров конфигурации. Свойство `name` определяет заголовок карточки, а `icon` задает иконку, которая выводится слева от названия. Путь перехода указывается в свойстве `href` как в виде внешнего URL, так и в виде внутреннего пути.

Опциональное свойство `description` позволяет добавить дополнительное текстовое описание под заголовком. Параметр `variant` отвечает за тип ссылки и принимает значение `external` по умолчанию, при котором элемент рендерится как ссылка во вкладке `<a target="_blank">`, либо значение `internal`, преобразующее элемент в роутинговый компонент `<Link to="...">` из библиотеки `react-router-dom`.

Примеры использования карточки для внутренних и внешних переходов представлены ниже:

```tsx
import {PermMediaRounded} from "@mui/icons-material";

import {LinkCard} from "../components/ui/LinkCards";
import {AeIcon} from "./FaqIcon";

<LinkCard
  description="Преодолеваем трудности при работе с Adobe After Effects"
  href="/aefaq"
  icon={<AeIcon />}
  name="aefaq"
  variant="internal"
/>;

<LinkCard
  description="Шаблоны и плагины для Adobe After Effects со всего интернета"
  href="https://t.me/s/aetemp"
  icon={<PermMediaRounded />}
  name="AETemp"
/>;
```

Технические особенности компонента заключаются в том, что копирование ссылки базируется на утилите `copyText` с отображением результата через `antd/message`. При этом для вариантов со значением `internal` в буфер обмена заносится абсолютный URL, сочетающий `origin` и `href`, тогда как для внешнего варианта копируется исходный `href`.

Обработка длительного нажатия реализована с помощью хука `useLongPress`, а визуальный эффект клика добавляется через хук `useRipple`. Масштабирование карточки при наведении и нажатии отключается глобальной настройкой `isHoverScaleAnimationEnabled`.

Если описание не передано, заголовок растягивается на всю доступную высоту карточки благодаря классу `name-container_full-height`. Все стили компонента описаны в файле `src/components/ui/LinkCards.module.scss`.

Общие правила кодстиля: [coding-rules.md](coding-rules.md).

### Модуль spoilerContexts

Файл: `src/components/detailsSummary/spoilerContexts.ts`

Модуль содержит набор React-контекстов для связи компонентов `DetailsSummary` и `NestedDetailsSummary`, передавая информацию о вложенности и состоянии открытия спойлера.

Экспортируемые сущности модуля имеют следующий вид:

```ts
export const DetailsSummaryContext = createContext(false);
export const NestedDetailsSummaryContext = createContext(false);
export const SpoilerContext = createContext(false);
export const useSpoiler = () => useContext(SpoilerContext);
```

Пример использования контекстов для провайдинга состояния открытия и вложенности спойлера представлен ниже:

```tsx
import {DetailsSummaryContext, SpoilerContext} from "./spoilerContexts";

<SpoilerContext.Provider value={isOpen}>
  <DetailsSummaryContext.Provider value={true}>
    <section>{children}</section>
  </DetailsSummaryContext.Provider>
</SpoilerContext.Provider>;
```

Пример потребления контекста во вложенном спойлере для определения состояния родителя описывается следующим образом:

```tsx
import {
  DetailsSummaryContext,
  NestedDetailsSummaryContext,
  SpoilerContext,
} from "./spoilerContexts";

const isInDetailsSummary = useContext(DetailsSummaryContext);
const isParentOpen = useContext(SpoilerContext);
```

Технические особенности контекстов заключаются в том, что `DetailsSummaryContext` помогает проверить, что вложенный спойлер действительно используется внутри родительского `DetailsSummary`. Контекст `SpoilerContext` передает значение `isOpen` вниз по дереву компонентов для синхронизации их состояния, в то время как `NestedDetailsSummaryContext` служит для маркировки вложенных уровней спойлеров.

Связанные компоненты: [components-content.md](components-content.md).

### Компонент ThemeChanger

Файл: `src/components/modals/ThemeChanger.tsx`

Модуль управления оформлением приложения содержит провайдер `ThemeProvider`, реализующий контекст темы и визуальных настроек, хук `useTheme`, предоставляющий удобный доступ к настройкам, а также кнопку `ThemeToggleButton` для открытия модального окна с параметрами конфигурации.

Публичный интерфейс модуля представлен ниже:

```ts
type Theme = "light" | "dark" | "system";

export const ThemeProvider: React.FC<{children: React.ReactNode}>;

export const useTheme: () => ThemeContextProperties;

interface ThemeToggleButtonProperties {
  className?: string;
}

export const ThemeToggleButton: React.FC<ThemeToggleButtonProperties>;
```

Контекст свойств `ThemeContextProperties` включает в себя текущую тему, акцентный оттенок, насыщенность, флаги анимаций, переключатель вибрации и методы их изменения.

Пример использования провайдера на уровне приложения представлен ниже:

```tsx
import {ThemeProvider, useTheme} from "./components/modals/ThemeChanger";

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};
```

Пример использования кнопки переключения темы в шапке сайта описывается следующим образом:

```tsx
import {ThemeToggleButton} from "../modals/ThemeChanger";

<ThemeToggleButton className={styles.icon} />;
```

Технические особенности модуля включают в себя сохранение пользовательских настроек в локальное хранилище `localStorage` по ключам `theme`, `accentHue`, `saturateRatio`, флагам анимаций и `isVibrationEnabled`. Компонент `ThemeProvider` записывает CSS-переменные непосредственно в `document.documentElement` и переключает классы темы `dark` и `light`.

Общий флаг `isHoverScaleAnimationEnabled` управляет отключением масштабирования элементов при наведении и нажатии с помощью класса `html.no-hover-scale-animation`. Для улучшения пользовательского опыта переключатель вибрации отображается исключительно на мобильных устройствах.

Переключатель анимации снегопада становится доступен только в зимний период, охватывающий декабрь, январь и февраль. При этом определенная часть опций отображается только при переходе пользователя на определенные страницы категорий статей, к которым относятся `/aefaq`, `/prfaq`, `/psfaq` и `/rules`.

Общие правила: [coding-rules.md](coding-rules.md).
