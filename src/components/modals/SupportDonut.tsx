import React, {useEffect, useState} from "react";

import {CloseRounded, CoffeeRounded} from "@mui/icons-material";

import {message, Modal} from "antd";

import {useRipple} from "../../hooks/useRipple";

import {copyText} from "../../utilities/copyUtilities";

import {withSoftHaptic} from "../../utilities/haptics";

import modalStyles from "./Modal.module.scss";

interface SupportDonutProperties {
  className?: string;
  wide?: boolean;
}

const SBER_CARD_NUMBER = "2202202357342488";

const YOOMONEY_WALLET_NUMBER = "410016763684808";

const formatGroupedNumber = (numberValue: string) => {
  return numberValue
    .replaceAll(/\D/g, "")
    .replaceAll(/(\d{4})(?=\d)/g, "$1 ")
    .trim();
};

const SupportDonut: React.FC<SupportDonutProperties> = ({className, wide}) => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  const [isSberModalOpen, setIsSberModalOpen] = useState(false);

  const [isYoomoneyModalOpen, setIsYoomoneyModalOpen] = useState(false);

  const openDonateModal = () => setIsDonateModalOpen(true);

  const closeDonateModal = () => setIsDonateModalOpen(false);

  const closeSberModal = () => setIsSberModalOpen(false);

  const closeYoomoneyModal = () => setIsYoomoneyModalOpen(false);

  useEffect(() => {
    const handleCloseAll = () => {
      setIsDonateModalOpen(false);
      setIsSberModalOpen(false);
      setIsYoomoneyModalOpen(false);
    };

    globalThis.window?.addEventListener("close-all-modals", handleCloseAll);

    return () => {
      globalThis.window?.removeEventListener("close-all-modals", handleCloseAll);
    };
  }, []);

  const ripple = useRipple<HTMLButtonElement>();

  const handleCopyAccount = withSoftHaptic(async (account: string) => {
    const success = await copyText(account);

    if (success) {
      message.success("Реквизиты скопированы в буфер обмена");
    } else {
      message.error("Не удалось скопировать реквизиты");
    }
  });

  return (
    <>
      <button
        className={`${modalStyles["modal-support-header-button"]} ${className || ""}`}
        onClick={openDonateModal}
        onMouseDown={ripple.onMouseDown}
      >
        <CoffeeRounded />
        {wide ? <span>Поддержать проект</span> : undefined}
      </button>
      <Modal
        centered
        closeIcon={false}
        footer={<></>}
        open={isDonateModalOpen}
        onCancel={closeDonateModal}
      >
        <div className={modalStyles["modal"]}>
          <div className={modalStyles["modal-header"]}>
            <div className={modalStyles["modal-header-title"]}>Поддержать проект</div>
            <button
              className={modalStyles["modal-header-button"]}
              onClick={closeDonateModal}
              onMouseDown={ripple.onMouseDown}
            >
              <CloseRounded />
            </button>
          </div>
          <div className={modalStyles["modal-content"]}>
            <p>
              Если вам понравился этот сайт и вы хотели бы, чтобы я продолжил развивать
              его, то вы можете поддержать меня любой суммой и любым удобным вам способом.
            </p>
            <div className="flexible-links">
              <button
                className={modalStyles["modal-support-button"]}
                onClick={() => setIsSberModalOpen(true)}
                onMouseDown={ripple.onMouseDown}
              >
                Сбербанк
              </button>
              <Modal
                centered
                className={modalStyles["modal--support"]}
                closeIcon={false}
                footer={<></>}
                open={isSberModalOpen}
                onCancel={closeSberModal}
              >
                <div className={modalStyles["modal"]}>
                  <div className={modalStyles["modal-header"]}>
                    <div className={modalStyles["modal-header-title"]}>
                      Поддержать на Сбербанк
                    </div>
                    <button
                      className={modalStyles["modal-header-button"]}
                      onClick={closeSberModal}
                      onMouseDown={ripple.onMouseDown}
                    >
                      <CloseRounded />
                    </button>
                  </div>
                  <div className={modalStyles["modal-content"]}>
                    <p>
                      Вы можете перевести из любого банка по номеру банковской карты любую
                      сумму.
                    </p>
                    <div className="flexible-links">
                      <button
                        type="button"
                        onClick={() => handleCopyAccount(SBER_CARD_NUMBER)}
                      >
                        {formatGroupedNumber(SBER_CARD_NUMBER)}
                      </button>
                    </div>
                    <p className={modalStyles["modal-support-recipient-info"]}>
                      Нажмите на номер карты, чтобы скопировать его в буфер обмена
                      <br />
                      Получатель: <mark>Михаил Денисович Ф.</mark>
                    </p>
                  </div>
                </div>
              </Modal>
              <button
                className={modalStyles["modal-support-button"]}
                onClick={() => setIsYoomoneyModalOpen(true)}
                onMouseDown={ripple.onMouseDown}
              >
                ЮMoney
              </button>
              <Modal
                centered
                className={modalStyles["modal--support"]}
                closeIcon={false}
                footer={<></>}
                open={isYoomoneyModalOpen}
                onCancel={closeYoomoneyModal}
              >
                <div className={modalStyles["modal"]}>
                  <div className={modalStyles["modal-header"]}>
                    <div className={modalStyles["modal-header-title"]}>
                      Поддержать на ЮMoney
                    </div>
                    <button
                      className={modalStyles["modal-header-button"]}
                      onClick={closeYoomoneyModal}
                      onMouseDown={ripple.onMouseDown}
                    >
                      <CloseRounded />
                    </button>
                  </div>
                  <div className={modalStyles["modal-content"]}>
                    <p>Для пополнения кошелька вам нужно проделать несколько действий:</p>
                    <ul>
                      <li>Зайдите в приложение своего банка.</li>
                      <li>
                        Откройте раздел <mark className="select">«Платежи»</mark> и
                        найдите в нём категорию{" "}
                        <mark className="select">«Электронные кошельки»</mark> или{" "}
                        <mark className="select">«Финансы»</mark>. Обычно в этих разделах
                        можно найти <mark>ЮMoney</mark>. Также вы можете воспользоваться
                        поиском вашего банка.
                      </li>
                      <li>
                        Нажмите на номер кошелька снизу, он скопируется в буфер обмена.
                        Вставьте этот номер в поле{" "}
                        <mark className="select">«Номер кошелька»</mark> приложения вашего
                        банка и введите любую сумму. После этого - подтвердите перевод.
                        <div className="flexible-links">
                          <button
                            type="button"
                            onClick={() => handleCopyAccount(YOOMONEY_WALLET_NUMBER)}
                          >
                            {formatGroupedNumber(YOOMONEY_WALLET_NUMBER)}
                          </button>
                        </div>
                        <p className={modalStyles["modal-support-recipient-info"]}>
                          Нажмите, чтобы скопировать или пополните баланс автору с помощью{" "}
                          <a
                            className={modalStyles["modal-support-yoomoney-link"]}
                            href="https://yoomoney.ru/to/410016763684808"
                          >
                            этой ссылки
                          </a>
                          .
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SupportDonut;
