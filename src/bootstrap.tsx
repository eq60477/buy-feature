import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import './i18n.ts';

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Theme>
        <App />
      </Theme>
    </React.StrictMode>
  );
}
