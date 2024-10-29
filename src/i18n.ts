import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from "./types/resources";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        resources
    });

export default i18next;