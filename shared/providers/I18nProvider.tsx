"use client";

import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";

import commonEN from "@/i18n/locales/en/common.json";
import landingEN from "@/i18n/locales/en/landing.json";
import commonES from "@/i18n/locales/es/common.json";
import landingES from "@/i18n/locales/es/landing.json";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { common: commonEN, landing: landingEN },
      es: { common: commonES, landing: landingES },
    },
    lng: "en",
    fallbackLng: "en",
    defaultNS: "common",
    interpolation: { escapeValue: false },
  });
}

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
