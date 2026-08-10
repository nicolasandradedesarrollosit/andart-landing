"use client";

import { useTranslation } from "react-i18next";
import { MetricCard } from "@/shared/components/display/MetricCard";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { socialMetrics } from "@/features/landing/data/social-proof";

export function SocialProofSection() {
  const { t } = useTranslation("landing");

  return (
    <Section className="bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {socialMetrics.map((metric) => (
            <MetricCard
              key={metric.labelKey}
              value={t(metric.valueKey)}
              label={t(metric.labelKey)}
              icon={metric.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
