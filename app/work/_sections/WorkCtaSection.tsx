"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "@/shared/components/layout/Section";
import { Container } from "@/shared/components/layout/Container";
import { ROUTES } from "@/shared/constants/routes";

export function WorkCtaSection() {
  const { t } = useTranslation("work-listing");

  return (
    <Section className="border-t border-[var(--color-border)]">
      <Container>
        <div className="cta-card relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-glow opacity-20" />
          <div className="relative z-10">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{t("cta.title")}</h2>
            <p className="mb-4 sm:mb-6 text-xs sm:text-sm" style={{ color: "var(--color-text-secondary)" }}>
              {t("cta.subtitle")}
            </p>
            <Link href={ROUTES.CONTACT} className="btn-primary animate-glow-pulse">
              {t("cta.button")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
