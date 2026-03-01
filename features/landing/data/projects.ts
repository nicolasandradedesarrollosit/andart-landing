import type { Project } from "@/shared/types/project";

export const featuredProjects: Project[] = [
  {
    slug: "fintech-dashboard",
    imageSrc: "/images/projects/fintech.jpg",
    imageAlt: "Fintech Dashboard Project",
    category: "FINTECH",
    categoryVariant: "primary",
    statusLabel: "DESARROLLANDO",
    title: "Banking Dashboard",
    subtitle: "Product Design • Frontend Development",
    featured: true,
  },
  {
    slug: "lifestyle-app",
    imageSrc: "/images/projects/lifestyle.jpg",
    imageAlt: "Lifestyle Mobile App",
    category: "LIFESTYLE",
    categoryVariant: "light",
    title: "Wellness Companion",
    subtitle: "Mobile App • UI/UX Design",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    imageSrc: "/images/projects/ecommerce.jpg",
    imageAlt: "E-commerce Platform",
    category: "E-COMMERCE",
    categoryVariant: "primary",
    statusLabel: "DESARROLLANDO",
    title: "Fashion Marketplace",
    subtitle: "Full-Stack Development • Branding",
    featured: true,
  },
];
