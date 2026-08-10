"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { ROUTES } from "@/shared/constants/routes";
import { getAdjacentProjects } from "@/features/case-study/data/get-case-study";

interface CaseStudyNavSectionProps {
  currentSlug: string;
}

export function CaseStudyNavSection({ currentSlug }: CaseStudyNavSectionProps) {
  const { t } = useTranslation("case-study");
  const { prev, next } = getAdjacentProjects(currentSlug);

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href={`${ROUTES.WORK}/${prev.slug}`} className="case-study-nav-card group">
            <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-2">
              <ArrowLeft className="w-3 h-3" />
              {t("meta.prev")}
            </div>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={prev.imageSrc} alt={t(prev.titleKey)} fill sizes="48px" className="object-cover" />
              </div>
              <span className="font-bold text-sm sm:text-base group-hover:text-[var(--color-primary)] transition-colors">
                {t(prev.titleKey)}
              </span>
            </div>
          </Link>

          <Link href={`${ROUTES.WORK}/${next.slug}`} className="case-study-nav-card group text-right">
            <div className="flex items-center justify-end gap-2 text-xs text-[var(--color-text-muted)] mb-2">
              {t("meta.next")}
              <ArrowRight className="w-3 h-3" />
            </div>
            <div className="flex items-center justify-end gap-3">
              <span className="font-bold text-sm sm:text-base group-hover:text-[var(--color-primary)] transition-colors">
                {t(next.titleKey)}
              </span>
              <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                <Image src={next.imageSrc} alt={t(next.titleKey)} fill sizes="48px" className="object-cover" />
              </div>
            </div>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
