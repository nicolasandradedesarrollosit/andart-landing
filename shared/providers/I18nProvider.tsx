"use client";

import { useState, useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonEN from "@/i18n/locales/en/common.json";
import landingEN from "@/i18n/locales/en/landing.json";
import servicesListingEN from "@/i18n/locales/en/services-listing.json";
import workListingEN from "@/i18n/locales/en/work-listing.json";
import contactEN from "@/i18n/locales/en/contact.json";

import commonES from "@/i18n/locales/es/common.json";
import landingES from "@/i18n/locales/es/landing.json";
import servicesListingES from "@/i18n/locales/es/services-listing.json";
import workListingES from "@/i18n/locales/es/work-listing.json";
import contactES from "@/i18n/locales/es/contact.json";

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          common: commonEN,
          landing: landingEN,
          "services-listing": servicesListingEN,
          "work-listing": workListingEN,
          contact: contactEN,
        },
        es: {
          common: commonES,
          landing: landingES,
          "services-listing": servicesListingES,
          "work-listing": workListingES,
          contact: contactES,
        },
      },
      supportedLngs: ["en", "es"],
      fallbackLng: "en",
      defaultNS: "common",
      detection: {
        order: ["localStorage", "navigator"],
        caches: ["localStorage"],
        lookupLocalStorage: "i18nextLng",
      },
      interpolation: { escapeValue: false },
    });
}

interface I18nProviderProps {
  children: React.ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    i18n.changeLanguage().then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
