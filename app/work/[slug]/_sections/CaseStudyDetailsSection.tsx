"use client";

import { useTranslation } from "react-i18next";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import type { CaseStudyData } from "@/features/case-study/data/case-studies";

interface CaseStudyDetailsSectionProps {
  caseStudy: CaseStudyData;
}

export function CaseStudyDetailsSection({ caseStudy }: CaseStudyDetailsSectionProps) {
  const { t } = useTranslation("case-study");

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="section-label mb-3">{t("meta.challenge")}</h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              {t(caseStudy.challengeKey)}
            </p>
          </div>
          <div>
            <h2 className="section-label mb-3">{t("meta.solution")}</h2>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              {t(caseStudy.solutionKey)}
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <h3 className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
            {t("meta.techStack")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {caseStudy.techStack.map((tech) => (
              <span key={tech} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
