export interface PortfolioProject {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  tags: { label: string; variant: "primary" | "neutral" }[];
  statusLabel?: string;
  titleKey: string;
  subtitleKey: string;
  category: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "lumina-crm",
    imageSrc: "/images/projects/lumina-crm.jpg",
    imageAlt: "Modern CRM dashboard",
    tags: [{ label: "SaaS", variant: "primary" }, { label: "UI/UX", variant: "neutral" }],
    titleKey: "projects.lumina.title",
    subtitleKey: "projects.lumina.subtitle",
    category: "saas",
  },
  {
    slug: "nexus-fintech",
    imageSrc: "/images/projects/nexus-fintech.jpg",
    imageAlt: "Mobile fintech app screens",
    tags: [{ label: "Fintech", variant: "primary" }, { label: "Development", variant: "neutral" }],
    statusLabel: "DESARROLLANDO",
    titleKey: "projects.nexus.title",
    subtitleKey: "projects.nexus.subtitle",
    category: "development",
  },
  {
    slug: "aether-identity",
    imageSrc: "/images/projects/aether-identity.jpg",
    imageAlt: "Minimalist brand identity",
    tags: [{ label: "Branding", variant: "primary" }, { label: "Design", variant: "neutral" }],
    titleKey: "projects.aether.title",
    subtitleKey: "projects.aether.subtitle",
    category: "branding",
  },
  {
    slug: "oryx-dashboard",
    imageSrc: "/images/projects/oryx-dashboard.jpg",
    imageAlt: "Data visualization dashboard",
    tags: [{ label: "Big Data", variant: "primary" }, { label: "SaaS", variant: "neutral" }],
    statusLabel: "DESARROLLANDO",
    titleKey: "projects.oryx.title",
    subtitleKey: "projects.oryx.subtitle",
    category: "saas",
  },
];
