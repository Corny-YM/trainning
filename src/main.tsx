import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "@shopify/polaris/build/esm/styles.css";
import { AppProvider } from "@shopify/polaris";

import App from "./App.tsx";
import AuthContextProvider from "@/context/AuthContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppProvider i18n={{}}>
        <App />
      </AppProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
