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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.titleKey} className="text-center">
                <div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 border-2"
                  style={{ borderColor: "var(--color-primary)", backgroundColor: "var(--color-primary-muted)" }}
                >
                  <Icon className="w-8 h-8" style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 className="text-xl font-bold mb-2">{t(item.titleKey)}</h3>
                <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
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
