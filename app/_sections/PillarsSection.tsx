"use client";

import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/components/display/SectionHeader";
import { ServiceCard } from "@/shared/components/display/ServiceCard";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { pillars } from "@/features/landing/data/pillars";

export function PillarsSection() {
  const { t } = useTranslation("landing");

  return (
    <Section className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <Container>
        <SectionHeader label={t("pillars.label")} title={t("pillars.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {pillars.map((pillar) => (
            <ServiceCard
              key={pillar.slug}
              icon={pillar.icon}
              bgIcon={pillar.bgIcon}
              title={t(pillar.titleKey)}
              description={t(pillar.descriptionKey)}
              tags={pillar.tags}
              variant="large"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
