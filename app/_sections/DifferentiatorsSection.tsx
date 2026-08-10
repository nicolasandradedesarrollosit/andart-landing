"use client";

import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/components/display/SectionHeader";
import { DifferentiatorCard } from "@/shared/components/display/DifferentiatorCard";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { differentiators } from "@/features/landing/data/differentiators";

export function DifferentiatorsSection() {
  const { t } = useTranslation("landing");

  return (
    <Section className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader
          label={t("differentiators.label")}
          title={t("differentiators.title")}
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12">
          {differentiators.map((item) => (
            <DifferentiatorCard
              key={item.titleKey}
              icon={item.icon}
              bgIcon={item.bgIcon}
              title={t(item.titleKey)}
              description={t(item.descriptionKey)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
