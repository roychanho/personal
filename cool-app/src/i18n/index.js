import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const translation = {
  en: {
    translation: {
      page: require("./page/en.json"),
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: translation,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
