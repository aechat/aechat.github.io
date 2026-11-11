import pkg from "file-saver";

import React, {useMemo, useState} from "react";

import {UploadFileRounded} from "@mui/icons-material";

import {message, Select, Upload} from "antd";

import {useRipple} from "../../../hooks/useRipple";

import {formatBytes} from "../../../utilities/fileUtilities";

import {triggerHaptic, withSoftHaptic} from "../../../utilities/haptics";

import modalStyles from "../../modals/Modal.module.scss";

import styles from "./Converter.module.scss";

import {
  downgradePrproj,
  getPrVersionLabel,
  ParsedPrprojInfo,
  parsePrprojHeader,
  PR_VERSION_SIGNATURES,
  PrInternalVersion,
  SUPPORTED_TARGET_PR_VERSIONS,
} from "./prprojDowngradeConfig";

const {saveAs} = pkg;

const PrprojDowngradeConverter: React.FC = () => {
  const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | undefined>();

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const [originalFileSize, setOriginalFileSize] = useState<number | undefined>();

  const [parsedInfo, setParsedInfo] = useState<ParsedPrprojInfo | undefined>();

  const [targetVersion, setTargetVersion] = useState<PrInternalVersion | undefined>();

  const ripple = useRipple<HTMLButtonElement>();

  const targetVersionOptions = useMemo(() => {
    if (!parsedInfo || parsedInfo.detectedVersion <= 0) {
      return [];
    }

    return SUPPORTED_TARGET_PR_VERSIONS.filter((version) =>
      parsedInfo.isHeaderModified
        ? version <= parsedInfo.detectedVersion
        : version < parsedInfo.detectedVersion
    ).map((version) => ({
      label: getPrVersionLabel(version),
      value: version,
    }));
  }, [parsedInfo]);

  const canHandleFileUpload = async (file: File): Promise<boolean> => {
    try {
      const buffer = await file.arrayBuffer();

      const bytes = new Uint8Array(buffer);

      const parseResult = parsePrprojHeader(bytes);

      if (parseResult.errorMessage || parseResult.detectedVersion <= 0) {
        message.error(
          parseResult.errorMessage || "Не удалось определить версию проекта!"
        );

        return false;
      }

      setFileBuffer(buffer);
      setOriginalFileName(file.name);
      setOriginalFileSize(file.size);
      setParsedInfo(parseResult);

      const availableTarget = SUPPORTED_TARGET_PR_VERSIONS.find(
        (version) => version < parseResult.detectedVersion
      );

      setTargetVersion(availableTarget);

      message.success(
        `Определена версия: Adobe Premiere Pro ${parseResult.displayVersion} (${parseResult.yearLabel})`
      );
    } catch (error) {
      console.error("Ошибка при чтении файла проекта Premiere Pro:", error);
      message.error("Не удалось прочитать файл проекта!");
    }

    return false;
  };

  const handleVersionChange = (value: PrInternalVersion) => {
    triggerHaptic("selection");
    setTargetVersion(value);
  };

  const handleDownload = withSoftHaptic(() => {
    if (!targetVersion || !fileBuffer) {
      return;
    }

    const signature = PR_VERSION_SIGNATURES[targetVersion];

    if (!signature) {
      message.error("Сигнатура для выбранной версии не найдена!");

      return;
    }

    const baseName = originalFileName
      .replaceAll(/ \([^)]*\)/g, "")
      .replace(/\.prproj$/i, "");

    const convertedSuffix = ` (${signature.major}.x)`;

    const sourceBytes = new Uint8Array(fileBuffer);

    const modifiedBytes = downgradePrproj(sourceBytes, targetVersion);

    const blob = new Blob([new Uint8Array(modifiedBytes)], {
      type: "application/octet-stream",
    });

    saveAs(blob, `${baseName}${convertedSuffix}.prproj`);
    message.success("Файл проекта успешно преобразован!");
  });

  const handleReset = withSoftHaptic(() => {
    setFileBuffer(undefined);
    setOriginalFileName("");
    setOriginalFileSize(undefined);
    setParsedInfo(undefined);
    setTargetVersion(undefined);
  });

  const downloadButtonLabel = "Скачать преобразованный PRPROJ";

  return (
    <>
      <div className={styles["converter"]}>
        <div onMouseDown={() => triggerHaptic("selection")}>
          <Upload.Dragger
            accept=".prproj"
            beforeUpload={canHandleFileUpload}
            className={styles["converter-dragger"]}
            name="file"
            showUploadList={false}
          >
            <div className={styles["converter-dragger-content"]}>
              <UploadFileRounded />
              <span className={styles["converter-dragger-text"]}>
                Перетащите файл проекта формата PRPROJ в это поле или нажмите для выбора
                файла
              </span>
            </div>
          </Upload.Dragger>
        </div>
        <p className={styles["converter-info-text"]}>
          Конвертация происходит локально на вашем устройстве, качественный результат не
          гарантируется.
          {parsedInfo && (
            <>
              <br />
              Файл: <b>{originalFileName}</b>
              {originalFileSize ? ` (${formatBytes(originalFileSize)})` : ""} — версия{" "}
              <b>
                Adobe Premiere Pro {parsedInfo.displayVersion} ({parsedInfo.yearLabel})
              </b>
              {parsedInfo.buildVersion ? ` [${parsedInfo.buildVersion}]` : ""}
              {parsedInfo.isHeaderModified
                ? ` (заголовок был изменен до v${parsedInfo.headerVersion})`
                : ""}
              {targetVersionOptions.length === 0 && (
                <>
                  <br />
                  Дальнейшее понижение версии недоступно: компонент поддерживает
                  конвертацию проектов только до версии 11.X (CC 2017).
                </>
              )}
            </>
          )}
        </p>
        {parsedInfo && targetVersionOptions.length > 0 && (
          <div className={styles["converter-target-select"]}>
            <div className={styles["converter-target-select-header"]}>
              <span className={styles["converter-target-select-title"]}>
                Целевая версия проекта
              </span>
            </div>
            <Select
              className={styles["converter-target-select-control"]}
              options={targetVersionOptions}
              value={targetVersion}
              onChange={handleVersionChange}
            />
          </div>
        )}
        {parsedInfo && (
          <div className={modalStyles["modal-controls-group"]}>
            <button
              className={`${modalStyles["modal-controls-option"]} ${styles["converter-reset-desaturated"]}`}
              onClick={handleReset}
              onMouseDown={ripple.onMouseDown}
            >
              Сбросить
            </button>
            {targetVersion && (
              <button
                className={`${modalStyles["modal-controls-option"]} ${styles["converter-button-action"]}`}
                onClick={handleDownload}
                onMouseDown={ripple.onMouseDown}
              >
                {downloadButtonLabel}
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PrprojDowngradeConverter;
