"use client";

import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/shared/components/display/SectionHeader";
import { TimelineStep } from "@/shared/components/display/TimelineStep";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { processSteps } from "@/features/landing/data/process-steps";

export function ProcessSection() {
  const { t } = useTranslation("landing");

  return (
    <Section>
      <Container>
        <SectionHeader label={t("process.label")} title={t("process.title")} />
        <div className="mt-12 max-w-3xl">
          {processSteps.map((step, index) => (
            <TimelineStep
              key={step.number}
              number={step.number}
              icon={step.icon}
              title={t(step.titleKey)}
              description={t(step.descriptionKey)}
              isActive={index === 0}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
