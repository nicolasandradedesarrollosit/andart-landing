"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";
import { Container } from "@/shared/components/layout/Container";
import { ROUTES } from "@/shared/constants/routes";

export function CtaFooterSection() {
  const { t } = useTranslation("landing");
  const shouldReduceMotion = useReducedMotion();
  const glowAnim = shouldReduceMotion
    ? undefined
    : { opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] };
  const glowT = shouldReduceMotion
    ? undefined
    : { duration: 8, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden border-t border-[var(--color-border)]">
      <div className="absolute inset-0 bg-grid" />
      <m.div
        className="absolute top-1/3 left-1/4 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-glow opacity-15"
        animate={glowAnim}
        transition={glowT}
      />
      <m.div
        className="absolute bottom-1/4 right-1/3 w-40 sm:w-56 md:w-64 h-40 sm:h-56 md:h-64 bg-glow opacity-10"
        animate={glowAnim}
        transition={glowT ? { ...glowT, delay: 4 } : undefined}
      />

      <Container>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-10 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ROUTES.CONTACT} className="btn-primary animate-glow-pulse">
              {t("cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href={ROUTES.WORK} className="btn-outline">
              {t("cta.cta_secondary")}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
