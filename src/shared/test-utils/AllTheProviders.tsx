import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/i18next/i18n";
import { Provider } from "react-redux";
import { store } from "app/redux/store";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "app/constants";

interface IProviders {
  children: ReactNode;
  route: string;
}

export const AllTheProviders: React.FC<IProviders> = ({ children, route }) => {
  return (
    <MemoryRouter initialEntries={[`${route}`]}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n} defaultNS={"translation"}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </I18nextProvider>
      </Provider>
    </MemoryRouter>
  );
};
