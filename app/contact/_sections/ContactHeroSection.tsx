"use client";

import { m, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function ContactHeroSection() {
  const { t } = useTranslation("contact");
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-[var(--color-surface)] border-b border-[var(--color-border)] py-10 md:py-14 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint pointer-events-none" />
      <div className="page-container relative z-10">
        <m.div
          className="max-w-xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-label mb-2">{t("header")}</p>
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {t("hero.title")}
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
            {t("hero.subtitle")}
          </p>
        </m.div>
      </div>
    </section>
  );
}
