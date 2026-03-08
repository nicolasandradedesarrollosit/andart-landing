import type { Project } from "@/shared/types/project";

export const featuredProjects: Project[] = [
  {
    slug: "resilio",
    imageSrc: "/work/saas/resilio.png",
    imageAlt: "Resilio SaaS Platform",
    category: "SAAS",
    categoryVariant: "primary",
    title: "Resilio",
    subtitle: "Product Design • SaaS Development",
    featured: true,
  },
  {
    slug: "rossence",
    imageSrc: "/work/design/rossence.jpg",
    imageAlt: "Rossence Brand Design",
    category: "DESIGN",
    categoryVariant: "light",
    title: "Rossence",
    subtitle: "UI/UX Design • Brand Identity",
    featured: true,
  },
  {
    slug: "roma",
    imageSrc: "/work/development/roma.png",
    imageAlt: "Roma Development Project",
    category: "DEVELOPMENT",
    categoryVariant: "primary",
    title: "Roma",
    subtitle: "Full-Stack Development",
    featured: true,
  },
];
