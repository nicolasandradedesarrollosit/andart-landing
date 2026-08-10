"use client";

import { useTranslation } from "react-i18next";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { ImageCarousel } from "@/shared/components/display/ImageCarousel";
import type { CaseStudyData } from "@/features/case-study/data/case-studies";

interface CaseStudyGallerySectionProps {
  caseStudy: CaseStudyData;
}

export function CaseStudyGallerySection({ caseStudy }: CaseStudyGallerySectionProps) {
  const { t } = useTranslation("case-study");

  if (caseStudy.gallery.length <= 1) return null;

  return (
    <Section className="bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <Container>
        <h2 className="section-label mb-6 sm:mb-8">{t("meta.gallery")}</h2>
        <ImageCarousel
          images={caseStudy.gallery}
          alt={t(caseStudy.titleKey)}
        />
      </Container>
    </Section>
  );
}
