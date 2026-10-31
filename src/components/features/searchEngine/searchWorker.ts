import {searchDetails, type SearchWorkerDetail} from "./searchQueryCore";

type InitMessage = {
  details: SearchWorkerDetail[];
  type: "init";
};

type SearchMessage = {
  query: string;
  requestId: number;
  type: "search";
};

type WorkerMessage = InitMessage | SearchMessage;

type WorkerResultMessage = {
  query: string;
  requestId: number;
  results: ReturnType<typeof searchDetails>;
  type: "results";
};

const workerState: {cachedDetailsData: SearchWorkerDetail[]} = {
  cachedDetailsData: [],
};

const getWorkerHostOrigin = (): string => {
  const href = location.href;

  if (href.startsWith("blob:")) {
    try {
      return new URL(href.slice(5)).origin;
    } catch {}
  }

  return location.origin;
};

addEventListener("message", (event: MessageEvent<WorkerMessage>) => {
  const hostOrigin = getWorkerHostOrigin();

  if (
    hostOrigin !== "null" &&
    event.origin &&
    event.origin !== "null" &&
    event.origin !== hostOrigin
  ) {
    return;
  }

  const message = event.data;

  if (message.type === "init") {
    workerState.cachedDetailsData = message.details;

    return;
  }

  if (message.type !== "search") {
    return;
  }

  const {query, requestId} = message;

  const response: WorkerResultMessage = {
    query,
    requestId,
    results: searchDetails(workerState.cachedDetailsData, query),
    type: "results",
  };

  postMessage(response);
});
