"use client";

import { useTranslation } from "react-i18next";

export function ContactHeroSection() {
  const { t } = useTranslation("contact");

  return (
    <section className="relative bg-[var(--color-surface)] border-b border-[var(--color-border)] py-10 md:py-14 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint pointer-events-none" />
      <div className="page-container relative z-10">
        <div className="max-w-xl">
          <p className="section-label mb-2">{t("header")}</p>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
