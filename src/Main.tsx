import React from "react";

import ResizeObserverPolyfill from "resize-observer-polyfill";

import {message} from "antd";

import ReactDOM from "react-dom/client";

message.config({
  duration: 7,
  maxCount: 2,
  top: 60,
});

import {HelmetProvider} from "react-helmet-async";

import {BrowserRouter} from "react-router-dom";

import {App} from "./App";

import {ThemeProvider} from "./components/modals/ThemeChanger";

import "./styles/main.scss";

if (typeof window !== "undefined" && !globalThis.ResizeObserver) {
  Object.defineProperty(globalThis, "ResizeObserver", {
    configurable: true,
    value: ResizeObserverPolyfill,
    writable: true,
  });
}

const rootElement = document.querySelector("#root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
