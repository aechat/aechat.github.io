import pkg from "file-saver";

import React, {useMemo, useState} from "react";

import {UploadFileRounded} from "@mui/icons-material";

import {message, Select, Upload} from "antd";

import {useRipple} from "../../../hooks/useRipple";

import {formatBytes} from "../../../utilities/fileUtilities";

import {triggerHaptic, withSoftHaptic} from "../../../utilities/haptics";

import modalStyles from "../../modals/Modal.module.scss";

import {
  AE_VERSION_SIGNATURES,
  AeMajorVersion,
  downgradeAegraphic,
  downgradeAep,
  downgradeAepx,
  downgradeMogrt,
  getVersionLabel,
  isAegraphicFormat,
  isAepxFormat,
  isMogrtFormat,
  parseAegraphicHeader,
  parseAepHeader,
  parseAepxHeader,
  ParsedAepInfo,
  parseMogrtHeader,
  SUPPORTED_TARGET_MAJORS,
} from "./aeDowngradeConfig";

import styles from "./Converter.module.scss";

const {saveAs} = pkg;

type FileFormatType = "aep" | "aet" | "aepx" | "mogrt" | "aegraphic";

const AepDowngradeConverter: React.FC = () => {
  const [fileBuffer, setFileBuffer] = useState<ArrayBuffer | undefined>();

  const [fileFormat, setFileFormat] = useState<FileFormatType>("aep");

  const [fileText, setFileText] = useState<string | undefined>();

  const [originalFileName, setOriginalFileName] = useState<string>("");

  const [originalFileSize, setOriginalFileSize] = useState<number | undefined>();

  const [parsedInfo, setParsedInfo] = useState<ParsedAepInfo | undefined>();

  const [targetVersion, setTargetVersion] = useState<AeMajorVersion | undefined>();

  const ripple = useRipple<HTMLButtonElement>();

  const targetVersionOptions = useMemo(() => {
    if (!parsedInfo || parsedInfo.detectedMajor <= 0) {
      return [];
    }

    return SUPPORTED_TARGET_MAJORS.filter(
      (version) => version < parsedInfo.detectedMajor
    ).map((version) => ({
      label: getVersionLabel(version),
      value: version,
    }));
  }, [parsedInfo]);

  const canHandleFileUpload = async (file: File): Promise<boolean> => {
    try {
      const lowerName = file.name.toLowerCase();

      const isXmlExtension = lowerName.endsWith(".aepx");

      const isMogrtExtension = lowerName.endsWith(".mogrt");

      const isAegraphicExtension = lowerName.endsWith(".aegraphic");

      const isAetExtension = lowerName.endsWith(".aet");

      let parseResult: ParsedAepInfo;

      let buffer: ArrayBuffer | undefined;

      let textContent: string | undefined;

      let detectedFormat: FileFormatType;

      if (isXmlExtension) {
        detectedFormat = "aepx";
        textContent = await file.text();
        parseResult = parseAepxHeader(textContent);
      } else if (isMogrtExtension) {
        detectedFormat = "mogrt";
        buffer = await file.arrayBuffer();
        parseResult = parseMogrtHeader(new Uint8Array(buffer));
      } else if (isAegraphicExtension) {
        detectedFormat = "aegraphic";
        buffer = await file.arrayBuffer();
        parseResult = parseAegraphicHeader(new Uint8Array(buffer));
      } else if (isAetExtension) {
        detectedFormat = "aet";
        buffer = await file.arrayBuffer();
        parseResult = parseAepHeader(new Uint8Array(buffer));
      } else {
        buffer = await file.arrayBuffer();

        const bytes = new Uint8Array(buffer);

        if (isAepxFormat(bytes)) {
          detectedFormat = "aepx";
          textContent = new TextDecoder().decode(bytes);
          parseResult = parseAepxHeader(textContent);
        } else if (isMogrtFormat(file.name, bytes)) {
          detectedFormat = "mogrt";
          parseResult = parseMogrtHeader(bytes);
        } else if (isAegraphicFormat(file.name, bytes)) {
          detectedFormat = "aegraphic";
          parseResult = parseAegraphicHeader(bytes);
        } else {
          detectedFormat = "aep";
          parseResult = parseAepHeader(bytes);
        }
      }

      if (parseResult.errorMessage || parseResult.detectedMajor <= 0) {
        message.error(
          parseResult.errorMessage || "Не удалось определить версию проекта!"
        );

        return false;
      }

      setFileFormat(detectedFormat);
      setFileText(textContent);
      setFileBuffer(buffer);
      setOriginalFileName(file.name);
      setOriginalFileSize(file.size);
      setParsedInfo(parseResult);

      const availableTarget = SUPPORTED_TARGET_MAJORS.find(
        (version) => version < parseResult.detectedMajor
      );

      setTargetVersion(availableTarget);

      message.success(
        `Определена версия: Adobe After Effects ${parseResult.displayVersion} (${parseResult.yearLabel})`
      );
    } catch (error) {
      console.error("Ошибка при чтении файла проекта:", error);
      message.error("Не удалось прочитать файл!");
    }

    return false;
  };

  const handleVersionChange = (value: AeMajorVersion) => {
    triggerHaptic("selection");
    setTargetVersion(value);
  };

  const handleDownload = withSoftHaptic(() => {
    if (!targetVersion || (!fileBuffer && !fileText)) {
      return;
    }

    const signature = AE_VERSION_SIGNATURES[targetVersion];

    if (!signature) {
      message.error("Сигнатура для выбранной версии не найдена!");

      return;
    }

    const baseName = originalFileName
      .replaceAll(/ \([^)]*\)/g, "")
      .replace(/\.(?:aepx|aep|aet|mogrt|aegraphic)$/i, "");

    const convertedSuffix = ` (${targetVersion}.x - aefaq)`;

    const isUserMac =
      typeof navigator !== "undefined" &&
      /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (fileFormat === "aepx" && fileText) {
      const modifiedXml = downgradeAepx(fileText, targetVersion, isUserMac);

      const blob = new Blob([modifiedXml], {
        type: "application/xml;charset=utf-8",
      });

      saveAs(blob, `${baseName}${convertedSuffix}.aepx`);
      message.success("Файл успешно преобразован!");

      return;
    }

    if (!fileBuffer) {
      return;
    }

    const sourceBytes = new Uint8Array(fileBuffer);

    if (fileFormat === "mogrt") {
      const modifiedBytes = downgradeMogrt(sourceBytes, targetVersion, isUserMac);

      const blob = new Blob([new Uint8Array(modifiedBytes)], {
        type: "application/octet-stream",
      });

      saveAs(blob, `${baseName}${convertedSuffix}.mogrt`);
      message.success("Шаблон MOGRT успешно преобразован!");

      return;
    }

    if (fileFormat === "aegraphic") {
      const modifiedBytes = downgradeAegraphic(sourceBytes, targetVersion, isUserMac);

      const originalExtension = originalFileName.slice(originalFileName.lastIndexOf("."));

      const blob = new Blob([new Uint8Array(modifiedBytes)], {
        type: "application/octet-stream",
      });

      saveAs(blob, `${baseName}${convertedSuffix}${originalExtension}`);
      message.success("Файл графики успешно преобразован!");

      return;
    }

    const modifiedBytes = downgradeAep(sourceBytes, targetVersion, isUserMac);

    const blob = new Blob([new Uint8Array(modifiedBytes)], {
      type: "application/octet-stream",
    });

    const extension = fileFormat === "aet" ? ".aet" : ".aep";

    saveAs(blob, `${baseName}${convertedSuffix}${extension}`);
    message.success("Файл успешно преобразован!");
  });

  const handleReset = withSoftHaptic(() => {
    setFileBuffer(undefined);
    setFileFormat("aep");
    setFileText(undefined);
    setOriginalFileName("");
    setOriginalFileSize(undefined);
    setParsedInfo(undefined);
    setTargetVersion(undefined);
  });

  const downloadButtonLabel = useMemo(() => {
    switch (fileFormat) {
      case "mogrt": {
        return "Скачать преобразованный MOGRT";
      }

      case "aegraphic": {
        return "Скачать преобразованный AEGRAPHIC";
      }

      case "aet": {
        return "Скачать преобразованный AET";
      }

      case "aepx": {
        return "Скачать преобразованный AEPX";
      }

      default: {
        return "Скачать преобразованный AEP";
      }
    }
  }, [fileFormat]);

  return (
    <div className={styles["converter"]}>
      <div onMouseDown={() => triggerHaptic("selection")}>
        <Upload.Dragger
          accept=".aep,.aet,.aepx,.mogrt,.aegraphic"
          beforeUpload={canHandleFileUpload}
          className={styles["converter-dragger"]}
          name="file"
          showUploadList={false}
        >
          <div className={styles["converter-dragger-content"]}>
            <UploadFileRounded />
            <span className={styles["converter-dragger-text"]}>
              Перетащите файл формата AEP, AET, AEPX, AEGRAPHIC или MOGRT в это поле или
              нажмите для выбора файла
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
              Adobe After Effects {parsedInfo.displayVersion} ({parsedInfo.yearLabel})
            </b>
            {targetVersionOptions.length === 0 && (
              <>
                <br />
                Дальнейшее понижение версии недоступно: компонент поддерживает конвертацию
                проектов только до версии 23.X (2023).
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
  );
};

export default AepDowngradeConverter;
