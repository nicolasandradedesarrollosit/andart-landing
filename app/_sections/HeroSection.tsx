"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ROUTES } from "@/shared/constants/routes";

export function HeroSection() {
  const { t } = useTranslation("landing");

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-20 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-glow opacity-20" />

      <div className="page-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="status-badge">
              <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              {t("hero.badge")}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            {t("hero.title_line1")}
            <br />
            <span className="gradient-text">{t("hero.title_line2")}</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto text-[var(--color-text-secondary)]">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.CONTACT} className="btn-primary animate-glow-pulse">
              {t("hero.cta_primary")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={ROUTES.WORK} className="btn-outline">
              {t("hero.cta_secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
