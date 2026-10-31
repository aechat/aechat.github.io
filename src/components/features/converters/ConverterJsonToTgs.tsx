import pkg from "file-saver";

import {gzip} from "pako";

import React, {useMemo, useState} from "react";

import {UploadFileRounded} from "@mui/icons-material";

import {InputNumber, message, Spin, Switch, Upload} from "antd";

import {formatBytes, formatPercentDelta} from "../../../utilities/fileUtilities";

import {
  triggerHaptic,
  withSelectionHaptic,
  withSoftHaptic,
} from "../../../utilities/haptics";

import modalStyles from "../../modals/Modal.module.scss";

import styles from "./Converter.module.scss";

const {saveAs} = pkg;

const roundNumber = (value: number, digits: number): number =>
  Number(value.toFixed(digits));

const processValue = (value: unknown, digits: number): unknown => {
  if (value === null) {
    return value;
  }

  if (typeof value === "number") {
    return roundNumber(value, digits);
  }

  if (Array.isArray(value)) {
    return value.map((item) => processValue(item, digits));
  }

  if (typeof value === "object") {
    const entries = Object.entries(value);

    const nextValue: Record<string, unknown> = {};

    for (const [key, entryValue] of entries) {
      nextValue[key] = processValue(entryValue, digits);
    }

    return nextValue;
  }

  return value;
};

const JsonToTgsConverter: React.FC = () => {
  const [jsonData, setJsonData] = useState<Record<string, unknown> | undefined>();

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const [originalFileSize, setOriginalFileSize] = useState<number | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const [isPrecisionEnabled, setIsPrecisionEnabled] = useState(false);

  const [precisionDigits, setPrecisionDigits] = useState(3);

  const canHandleFileUpload = async (file: File): Promise<boolean> => {
    try {
      const fileData = await file.text();

      setOriginalFileName(file.name);
      setOriginalFileSize(file.size);

      const json = JSON.parse(fileData);

      setJsonData(json);
      message.success("Файл успешно загружен!");
    } catch (error) {
      console.error("Ошибка при обработке файла:", error);
      message.error("Не удалось конвертировать файл!");
    }

    return false;
  };

  const preview = useMemo(() => {
    if (!jsonData) {
      return;
    }

    const optimizedData =
      isPrecisionEnabled && precisionDigits >= 0
        ? processValue(jsonData, precisionDigits)
        : jsonData;

    const jsonString = JSON.stringify(optimizedData);

    const jsonBytes = new TextEncoder().encode(jsonString).length;

    const gzipBytes = gzip(jsonString).length;

    return {
      gzipBytes,
      jsonBytes,
    };
  }, [jsonData, precisionDigits, isPrecisionEnabled]);

  const downloadTgs = (): void => {
    if (!jsonData) {
      return;
    }

    setIsLoading(true);

    const optimizedData =
      isPrecisionEnabled && precisionDigits >= 0
        ? processValue(jsonData, precisionDigits)
        : jsonData;

    const jsonString = JSON.stringify(optimizedData);

    const compressed = gzip(jsonString);

    const blob = new Blob([compressed], {type: "application/gzip"});

    if (!blob) {
      message.error("Ошибка при создании файла!");
      setIsLoading(false);

      return;
    }

    saveAs(blob, `${originalFileName.replace(/\.json$/, "")}.tgs`);
    setIsLoading(false);
  };

  const handlePrecisionDigitsChange = (nextValue: number | null) => {
    if (typeof nextValue !== "number") {
      return;
    }

    triggerHaptic("selection");
    setPrecisionDigits(nextValue);
  };

  const handlePrecisionToggle = withSelectionHaptic(setIsPrecisionEnabled);

  const handleReset = withSoftHaptic(() => {
    setJsonData(undefined);
    setOriginalFileName("");
    setOriginalFileSize(undefined);
  });

  const handleDownload = withSoftHaptic(() => {
    downloadTgs();
  });

  return (
    <div className={styles["converter"]}>
      <div onMouseDown={() => triggerHaptic("selection")}>
        <Upload.Dragger
          accept=".json"
          beforeUpload={canHandleFileUpload}
          className={styles["converter-dragger"]}
          name="file"
          showUploadList={false}
        >
          <div className={styles["converter-dragger-content"]}>
            <UploadFileRounded />
            <span className={styles["converter-dragger-text"]}>
              Перетащите файл формата JSON в это поле или нажмите для выбора файла
            </span>
          </div>
        </Upload.Dragger>
      </div>
      {jsonData && (
        <div className={styles["converter-precision"]}>
          <div className={styles["converter-precision-header"]}>
            <span className={styles["converter-precision-title"]}>
              Изменить количество знаков перед запятой в числах
            </span>
            <span className={styles["converter-precision-hint"]}>
              Меньше знаков — меньше размер файла, но больше риск искажения анимации.
              Экспериментируйте с умом.
            </span>
          </div>
          <div className={styles["converter-precision-controls"]}>
            {isPrecisionEnabled && (
              <InputNumber
                className={styles["converter-precision-input"]}
                max={8}
                min={0}
                step={1}
                value={precisionDigits}
                onChange={handlePrecisionDigitsChange}
              />
            )}
            <Switch
              checked={isPrecisionEnabled}
              onChange={handlePrecisionToggle}
            />
          </div>
        </div>
      )}
      <p className={styles["converter-info-text"]}>
        Конвертация происходит локально на вашем устройстве, качественный результат не
        гарантируется.
        <br />
        {preview && (
          <>
            Примерный размер нового файла:{" "}
            {originalFileSize
              ? `${formatBytes(originalFileSize)} → ${formatBytes(
                  preview.jsonBytes
                )} → ${formatBytes(preview.gzipBytes)}`
              : `${formatBytes(preview.jsonBytes)} → ${formatBytes(preview.gzipBytes)}`}
            {originalFileSize &&
              ` (${formatPercentDelta(originalFileSize, preview.gzipBytes)})`}
          </>
        )}
      </p>
      {jsonData && typeof jsonData === "object" && (
        <div className={modalStyles["modal-controls-group"]}>
          <button
            className={`${modalStyles["modal-controls-option"]} ${styles["converter-reset-desaturated"]}`}
            onClick={handleReset}
          >
            Сбросить
          </button>
          <button
            className={`${modalStyles["modal-controls-option"]} ${styles["converter-button-action"]}`}
            disabled={isLoading}
            onClick={handleDownload}
          >
            {isLoading ? <Spin size="small" /> : "Скачать преобразованный TGS"}
          </button>
        </div>
      )}
    </div>
  );
};

export default JsonToTgsConverter;
