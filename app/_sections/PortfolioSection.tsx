"use client";

import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/shared/components/display/SectionHeader";
import { FeaturedProjectCard } from "@/shared/components/display/FeaturedProjectCard";
import { ProjectCard } from "@/shared/components/display/ProjectCard";
import { Container } from "@/shared/components/layout/Container";
import { Section } from "@/shared/components/layout/Section";
import { ROUTES } from "@/shared/constants/routes";
import { featuredProjects } from "@/features/landing/data/projects";

export function PortfolioSection() {
  const { t } = useTranslation("landing");
  const [featured, ...rest] = featuredProjects;

  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between mb-6 sm:mb-8 md:mb-12">
          <SectionHeader label={t("portfolio.label")} title={t("portfolio.title")} />
          <Link
            href={ROUTES.WORK}
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[var(--color-primary)] transition-colors cursor-pointer"
          >
            {t("portfolio.view_all")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <FeaturedProjectCard
          href={`${ROUTES.WORK}/${featured.slug}`}
          imageSrc={featured.imageSrc}
          imageAlt={featured.imageAlt}
          category={featured.category}
          title={featured.title}
          subtitle={featured.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {rest.map((project) => (
            <ProjectCard
              key={project.slug}
              href={`${ROUTES.WORK}/${project.slug}`}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              category={project.category}
              categoryVariant={project.categoryVariant}
              title={project.title}
              subtitle={project.subtitle}
            />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href={ROUTES.WORK} className="btn-outline">
            {t("portfolio.view_all")}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
