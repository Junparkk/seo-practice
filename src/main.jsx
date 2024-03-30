import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

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
