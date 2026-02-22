export interface Project {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryVariant?: "primary" | "light";
  title: string;
  subtitle: string;
  featured?: boolean;
}

export interface CaseStudy extends Project {
  challenge: string;
  solution: string;
  techStack: string[];
  results: MetricResult[];
  gallery: string[];
}

export interface MetricResult {
  value: string;
  label: string;
  icon?: string;
}
