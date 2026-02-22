"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { ROUTES } from "@/shared/constants/routes";

export function CtaFooterSection() {
  const { t } = useTranslation("landing");

  return (
    <Section>
      <Container>
        <div
          className="relative overflow-hidden rounded-2xl border p-12 md:p-20 text-center"
          style={{ background: "var(--color-surface-highlight)", borderColor: "var(--color-border)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow opacity-30" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("cta.title")}</h2>
            <p className="text-lg mb-8" style={{ color: "var(--color-text-secondary)" }}>
              {t("cta.subtitle")}
            </p>
            <Link href={ROUTES.CONTACT} className="btn-primary animate-glow-pulse">
              {t("cta.button")}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
