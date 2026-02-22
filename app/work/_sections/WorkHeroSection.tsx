"use client";

import { useTranslation } from "react-i18next";
import { Section } from "@/shared/components/layout/Section";
import { Container } from "@/shared/components/layout/Container";

export function WorkHeroSection() {
  const { t } = useTranslation("work-listing");

  return (
    <Section className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-10 sm:py-16">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            {t("hero.title_prefix")}{" "}
            <span className="gradient-text">{t("hero.title_accent")}</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[var(--color-text-secondary)]">
            {t("hero.subtitle")}
          </p>
        </div>
      </Container>
    </Section>
  );
}
