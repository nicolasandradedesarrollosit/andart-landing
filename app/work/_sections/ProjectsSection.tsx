"use client";

import { useTranslation } from "react-i18next";
import { Section } from "@/shared/components/layout/Section";
import { Container } from "@/shared/components/layout/Container";
import { PortfolioCard } from "@/shared/components/display/PortfolioCard";
import { FilterChipBar } from "@/shared/components/forms/FilterChipBar";
import { portfolioProjects } from "@/features/work-listing/data/projects";
import { filterCategories } from "@/features/work-listing/data/filter-categories";
import { useProjectFilter } from "@/features/work-listing/hooks/useProjectFilter";
import { ROUTES } from "@/shared/constants/routes";

export function ProjectsSection() {
  const { t } = useTranslation("work-listing");
  const { activeCategory, setActiveCategory, filtered } = useProjectFilter(portfolioProjects);

  return (
    <Section>
      <Container>
        <FilterChipBar
          categories={filterCategories.map((c) => ({ key: c.key, label: t(`filters.${c.key}`) }))}
          activeKey={activeCategory}
          onChange={setActiveCategory}
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((project) => (
            <PortfolioCard
              key={project.slug}
              href={`${ROUTES.WORK}/${project.slug}`}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              tags={project.tags}
              title={t(project.titleKey)}
              subtitle={t(project.subtitleKey)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
