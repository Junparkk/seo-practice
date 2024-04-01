import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import chromium from "chrome-aws-lambda";
const rootElement = document.getElementById("root");
// import * as puppeteer from 'puppeteer';

// const browser = await puppeteer.launch( { args: ['--no-sandbox'] } );

const browser = await chromium.puppeteer.launch({
  args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
  defaultViewport: chromium.defaultViewport,
  executablePath: await chromium.executablePath,
  headless: true,
  ignoreHTTPSErrors: true,
});
browser();
// 서버 사이드 렌더링을 위한 조건부 로직
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // 클라이언트 사이드 렌더링 (CSR)
  const root = ReactDOM.createRoot(rootElement); // React 18에서의 새로운 방식
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
