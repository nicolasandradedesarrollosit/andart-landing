"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/shared/constants/routes";
import type { CaseStudyData } from "@/features/case-study/data/case-studies";

interface CaseStudyHeroSectionProps {
  caseStudy: CaseStudyData;
}

export function CaseStudyHeroSection({ caseStudy }: CaseStudyHeroSectionProps) {
  const { t } = useTranslation("case-study");

  return (
    <section className="case-study-hero">
      <Image
        src={caseStudy.imageSrc}
        alt={t(caseStudy.titleKey)}
        fill
        sizes="100vw"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

      <div className="absolute inset-0 z-10 flex flex-col justify-end">
        <div className="page-container pb-8 sm:pb-12 md:pb-16">
          <Link
            href={ROUTES.WORK}
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("meta.backToWork")}
          </Link>

          <div className="mb-4">
            <span className="status-badge">{caseStudy.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
            {t(caseStudy.titleKey)}
          </h1>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl">
            {t(caseStudy.subtitleKey)}
          </p>

          <dl className="flex flex-wrap gap-6 sm:gap-8 mt-6 sm:mt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider font-bold text-white/40 mb-1">{t("meta.year")}</dt>
              <dd className="text-sm font-medium text-white">{caseStudy.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider font-bold text-white/40 mb-1">{t("meta.services")}</dt>
              <dd className="text-sm font-medium text-white">{t(caseStudy.servicesKey)}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
