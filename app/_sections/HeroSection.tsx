"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { ROUTES } from "@/shared/constants/routes";
import { fadeUp, staggerContainer } from "@/shared/lib/motion-variants";
import { HeroCodeSnippet } from "./HeroCodeSnippet";

export function HeroSection() {
  const { t } = useTranslation("landing");
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? undefined : fadeUp;
  const glowAnim = shouldReduceMotion
    ? undefined
    : { opacity: [0.15, 0.3, 0.15], scale: [1, 1.07, 1] };
  const glowT = shouldReduceMotion
    ? undefined
    : { duration: 8, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <m.div
        className="absolute top-20 left-1/6 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-glow opacity-20"
        animate={glowAnim}
        transition={glowT}
      />
      <m.div
        className="absolute bottom-32 right-1/4 w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 bg-glow opacity-10"
        animate={glowAnim}
        transition={glowT ? { ...glowT, delay: 4 } : undefined}
      />

      <div className="page-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <m.div
            initial={shouldReduceMotion ? false : "hidden"}
            animate={shouldReduceMotion ? undefined : "visible"}
            variants={shouldReduceMotion ? undefined : staggerContainer}
          >
            <m.div className="mb-6" variants={variants}>
              <span className="status-badge">
                <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
                {t("hero.badge")}
              </span>
            </m.div>

            <m.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-[1.1]"
              variants={variants}
            >
              <span className="text-[var(--color-text-secondary)]">{t("hero.title_line1")}</span>
              <br />
              <span className="gradient-text">{t("hero.title_line2")}</span>
            </m.h1>

            <m.p
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl text-[var(--color-text-secondary)]"
              variants={variants}
            >
              {t("hero.subtitle")}
            </m.p>

            <m.div className="flex flex-col sm:flex-row gap-4" variants={variants}>
              <Link href={ROUTES.CONTACT} className="btn-primary animate-glow-pulse">
                {t("hero.cta_primary")}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href={ROUTES.WORK} className="btn-outline">
                {t("hero.cta_secondary")}
              </Link>
            </m.div>
          </m.div>

          <m.div
            className="hidden lg:block"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.96 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroCodeSnippet />
          </m.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 hero-gradient-border" />
    </section>
  );
}
