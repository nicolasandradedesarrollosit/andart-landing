"use client";

import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/components/display/SectionHeader";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { differentiators } from "@/features/landing/data/differentiators";

export function DifferentiatorsSection() {
  const { t } = useTranslation("landing");

  return (
    <Section>
      <Container>
        <SectionHeader
          label={t("differentiators.label")}
          title={t("differentiators.title")}
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.titleKey} className="text-center">
                <div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-3 sm:mb-4 border-2"
                  style={{ borderColor: "var(--color-primary)", backgroundColor: "var(--color-primary-muted)" }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 className="text-base sm:text-xl font-bold mb-1 sm:mb-2">{t(item.titleKey)}</h3>
                <p className="text-xs sm:text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  {t(item.descriptionKey)}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
