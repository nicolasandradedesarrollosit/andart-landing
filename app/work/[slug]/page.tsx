import { notFound } from "next/navigation";
import { getAllSlugs, getCaseStudy } from "@/features/case-study/data/get-case-study";
import { CaseStudyHeroSection } from "./_sections/CaseStudyHeroSection";
import { CaseStudyDetailsSection } from "./_sections/CaseStudyDetailsSection";
import { CaseStudyGallerySection } from "./_sections/CaseStudyGallerySection";
import { CaseStudyNavSection } from "./_sections/CaseStudyNavSection";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) return notFound();

  return (
    <>
      <CaseStudyHeroSection caseStudy={caseStudy} />
      <CaseStudyDetailsSection caseStudy={caseStudy} />
      <CaseStudyGallerySection caseStudy={caseStudy} />
      <CaseStudyNavSection currentSlug={slug} />
    </>
  );
}
