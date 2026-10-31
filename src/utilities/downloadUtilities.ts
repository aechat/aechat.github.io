import {formatBytes} from "./fileUtilities";

interface DownloadFileOptions {
  fileName: string;
  href: string;
  signal?: AbortSignal;
}

export const clickHiddenDownloadLink = (href: string, fileName: string) => {
  const downloadLink = document.createElement("a");

  downloadLink.href = href;
  downloadLink.download = fileName;
  downloadLink.rel = "noopener noreferrer";
  downloadLink.style.display = "none";
  document.body.append(downloadLink);
  downloadLink.click();
  downloadLink.remove();
};

export const resolveDownloadLinkFileSize = async (
  href: string
): Promise<string | undefined> => {
  const url = new URL(href, location.href);

  if (url.origin !== location.origin) {
    return;
  }

  try {
    const response = await fetch(url.href, {method: "HEAD"});

    const contentLengthHeader = response.headers.get("content-length");

    const contentLength = Number(contentLengthHeader ?? "");

    if (!Number.isNaN(contentLength) && contentLength > 0) {
      return formatBytes(contentLength);
    }
  } catch {
    return;
  }
};

export const downloadFileWithFallback = async ({
  fileName,
  href,
  signal,
}: DownloadFileOptions) => {
  try {
    const downloadUrl = new URL(href, location.href);

    const response = await fetch(downloadUrl.href, {signal});

    if (!response.ok) {
      throw new Error("Failed to fetch downloadable file");
    }

    const blob = await response.blob();

    const objectUrl = URL.createObjectURL(blob);

    clickHiddenDownloadLink(objectUrl, fileName);
    setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }

    clickHiddenDownloadLink(href, fileName);
  }
};
