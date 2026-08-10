import type { Project } from "@/shared/types/project";

export const featuredProjects: Project[] = [
  {
    slug: "blazek",
    imageSrc: "/work/blazek/1.png",
    imageAlt: "Blazek Landing Page",
    category: "DEVELOPMENT",
    categoryVariant: "primary",
    title: "Blazek",
    subtitle: "Landing Page • Marketing Campaign",
    featured: true,
  },
  {
    slug: "thel",
    imageSrc: "/work/thel/2.png",
    imageAlt: "Thel ERP Platform",
    category: "DEVELOPMENT",
    categoryVariant: "primary",
    title: "Thel",
    subtitle: "ERP System • Full-Stack Development",
    featured: true,
  },
  {
    slug: "certified-dripper",
    imageSrc: "/work/certified-dripper/1.jpg",
    imageAlt: "Certified Dripper Brand Design",
    category: "BRANDING",
    categoryVariant: "primary",
    title: "Certified Dripper",
    subtitle: "Brand Identity • Visual Design",
    featured: true,
  },
];
