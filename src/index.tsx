import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/i18next/i18n";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "app/redux/store";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./app/constants";
import { App } from "./app";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n} defaultNS={"translation"}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
