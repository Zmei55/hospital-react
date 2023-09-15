import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import deutsch from "./locales/de/translation.json";
import english from "./locales/en/translation.json";
import russisch from "./locales/ru/translation.json";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      de: {
        translation: deutsch,
      },
      en: {
        translation: english,
      },
      ru: {
        translation: russisch,
      },
    },
  });

export default i18n;
