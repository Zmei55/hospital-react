import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/i18next/i18n";
import { Provider } from "react-redux";
import { store } from "app/redux/store";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "app/constants";

export const allTheProviders = (element: ReactNode, route: string) => {
  return (
    <MemoryRouter initialEntries={[route]}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n} defaultNS={"translation"}>
          <ThemeProvider theme={theme}>{element}</ThemeProvider>
        </I18nextProvider>
      </Provider>
    </MemoryRouter>
  );
};
