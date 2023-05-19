import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

import "@shopify/polaris/build/esm/styles.css";
import "./index.css";

import App from "@/App.tsx";
import AuthContextProvider from "@/context/AuthContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <AppProvider i18n={enTranslations}>
          <App />
        </AppProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
