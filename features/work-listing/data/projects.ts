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
    slug: "resilio",
    imageSrc: "/work/saas/resilio.png",
    imageAlt: "Resilio SaaS platform",
    tags: [{ label: "SaaS", variant: "primary" }, { label: "Design", variant: "neutral" }],
    titleKey: "projects.resilio.title",
    subtitleKey: "projects.resilio.subtitle",
    category: "saas",
  },
  {
    slug: "roma",
    imageSrc: "/work/development/roma.png",
    imageAlt: "Roma web development",
    tags: [{ label: "Development", variant: "primary" }],
    titleKey: "projects.roma.title",
    subtitleKey: "projects.roma.subtitle",
    category: "development",
  },
  {
    slug: "rossence",
    imageSrc: "/work/design/rossence.jpg",
    imageAlt: "Rossence brand and UI design",
    tags: [{ label: "Design", variant: "primary" }],
    titleKey: "projects.rossence.title",
    subtitleKey: "projects.rossence.subtitle",
    category: "design",
  },
  {
    slug: "certified-dripper",
    imageSrc: "/work/branding/certified-dripper.jpg",
    imageAlt: "Certified Dripper brand identity",
    tags: [{ label: "Branding", variant: "primary" }, { label: "Design", variant: "neutral" }],
    titleKey: "projects.certifiedDripper.title",
    subtitleKey: "projects.certifiedDripper.subtitle",
    category: "branding",
  },
  {
    slug: "kingu",
    imageSrc: "/work/branding/kingu.jpg",
    imageAlt: "Kingu brand identity",
    tags: [{ label: "Branding", variant: "primary" }],
    titleKey: "projects.kingu.title",
    subtitleKey: "projects.kingu.subtitle",
    category: "branding",
  },
  {
    slug: "todo-mates",
    imageSrc: "/work/branding/todo-mates.jpg",
    imageAlt: "Todo Mates app branding",
    tags: [{ label: "Branding", variant: "primary" }],
    titleKey: "projects.todoMates.title",
    subtitleKey: "projects.todoMates.subtitle",
    category: "branding",
  },
  {
    slug: "juve",
    imageSrc: "/work/branding/juve.jpg",
    imageAlt: "Juve brand identity",
    tags: [{ label: "Branding", variant: "primary" }],
    titleKey: "projects.juve.title",
    subtitleKey: "projects.juve.subtitle",
    category: "branding",
  },
  {
    slug: "sneakers-club",
    imageSrc: "/work/branding/sneakers-club.jpg",
    imageAlt: "Sneakers Club brand identity",
    tags: [{ label: "Branding", variant: "primary" }],
    titleKey: "projects.sneakersClub.title",
    subtitleKey: "projects.sneakersClub.subtitle",
    category: "branding",
  },
];
