import React from "react";

import {getPlatformInfo} from "../../utilities/browserDetection";

const TelegramRecommendation: React.FC = () => {
  const {isAndroid, isIOS, isMacOS} = getPlatformInfo();

  if (isIOS) {
    return (
      <>
        Чтобы без проблем скачивать файлы из каналов, описанных ниже, рекомендуется
        использовать официальное приложение <mark className="app">Telegram</mark> вместо
        веб-версии. Его можно установить из{" "}
        <a href="https://telegram.org/dl/ios">App Store</a>.
      </>
    );
  }

  if (isAndroid) {
    return (
      <>
        Чтобы без проблем скачивать файлы из каналов, описанных ниже, рекомендуется
        использовать официальное приложение <mark className="app">Telegram</mark> вместо
        веб-версии. Его можно установить по{" "}
        <a href="https://telegram.org/android">этой</a> ссылке.
      </>
    );
  }

  if (isMacOS) {
    return (
      <>
        Чтобы без проблем скачивать файлы из каналов, описанных ниже, рекомендуется
        использовать десктопную версию <mark className="app">Telegram</mark> вместо
        веб-версии. Её можно скачать по <a href="https://macos.telegram.org/">этой</a>{" "}
        ссылке.
      </>
    );
  }

  return (
    <>
      Чтобы без проблем скачивать файлы из каналов, описанных ниже, рекомендуется
      использовать десктопную версию <mark className="app">Telegram</mark> вместо
      веб-версии. Её можно скачать по <a href="https://desktop.telegram.org/">этой</a>{" "}
      ссылке.
    </>
  );
};

export default TelegramRecommendation;
