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
    slug: "thel",
    imageSrc: "/work/thel/2.png",
    imageAlt: "Thel ERP Platform",
    tags: [{ label: "Development", variant: "primary" }, { label: "SaaS", variant: "neutral" }],
    titleKey: "projects.thel.title",
    subtitleKey: "projects.thel.subtitle",
    category: "development",
  },
  {
    slug: "blazek",
    imageSrc: "/work/blazek/1.png",
    imageAlt: "Blazek Landing Page",
    tags: [{ label: "Development", variant: "primary" }, { label: "Marketing", variant: "neutral" }],
    titleKey: "projects.blazek.title",
    subtitleKey: "projects.blazek.subtitle",
    category: "development",
  },
  {
    slug: "rossence",
    imageSrc: "/work/rossence/1.jpg",
    imageAlt: "Rossence brand and UI design",
    tags: [{ label: "Design", variant: "primary" }],
    titleKey: "projects.rossence.title",
    subtitleKey: "projects.rossence.subtitle",
    category: "design",
  },
  {
    slug: "certified-dripper",
    imageSrc: "/work/certified-dripper/1.jpg",
    imageAlt: "Certified Dripper brand identity",
    tags: [{ label: "Branding", variant: "primary" }, { label: "Design", variant: "neutral" }],
    titleKey: "projects.certifiedDripper.title",
    subtitleKey: "projects.certifiedDripper.subtitle",
    category: "branding",
  },
  {
    slug: "kingu",
    imageSrc: "/work/kingu/1.jpg",
    imageAlt: "Kingu brand identity",
    tags: [{ label: "Branding", variant: "primary" }],
    titleKey: "projects.kingu.title",
    subtitleKey: "projects.kingu.subtitle",
    category: "branding",
  },
  {
    slug: "todo-mates",
    imageSrc: "/work/todo-mates/1.jpg",
    imageAlt: "Todo Mates app branding",
    tags: [{ label: "Branding", variant: "primary" }],
    titleKey: "projects.todoMates.title",
    subtitleKey: "projects.todoMates.subtitle",
    category: "branding",
  },
  {
    slug: "juve",
    imageSrc: "/work/juve/1.jpg",
    imageAlt: "Juve brand identity",
    tags: [{ label: "Branding", variant: "primary" }],
    titleKey: "projects.juve.title",
    subtitleKey: "projects.juve.subtitle",
    category: "branding",
  },
  {
    slug: "sneakers-club",
    imageSrc: "/work/sneakers-club/1.jpg",
    imageAlt: "Sneakers Club brand identity",
    tags: [{ label: "Branding", variant: "primary" }],
    titleKey: "projects.sneakersClub.title",
    subtitleKey: "projects.sneakersClub.subtitle",
    category: "branding",
  },
];
