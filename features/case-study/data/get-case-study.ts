import { caseStudies, type CaseStudyData } from "./case-studies";

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getAllSlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

export function getAdjacentProjects(slug: string) {
  const index = caseStudies.findIndex((cs) => cs.slug === slug);
  const prev = caseStudies[(index - 1 + caseStudies.length) % caseStudies.length];
  const next = caseStudies[(index + 1) % caseStudies.length];
  return { prev, next };
}
