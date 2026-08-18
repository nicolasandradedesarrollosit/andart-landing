export interface CaseStudyData {
  slug: string;
  imageSrc: string;
  imageFit?: "cover" | "contain";
  category: string;
  titleKey: string;
  subtitleKey: string;
  challengeKey: string;
  solutionKey: string;
  servicesKey: string;
  year: string;
  techStack: string[];
  gallery: string[];
  galleryFit?: Array<"cover" | "contain">;
  galleryMask?: boolean[];
}

export { caseStudies } from "./case-study-entries";
