import type { CaseStudyData } from "./case-studies";

const cs = (
  slug: string, imageSrc: string, category: string, key: string,
  year: string, techStack: string[], gallery: string[]
): CaseStudyData => ({
  slug, imageSrc, category, year, techStack, gallery,
  titleKey: `case-study:${key}.title`, subtitleKey: `case-study:${key}.subtitle`,
  challengeKey: `case-study:${key}.challenge`, solutionKey: `case-study:${key}.solution`,
  servicesKey: `case-study:${key}.services`,
});

export const caseStudies: CaseStudyData[] = [
  cs("thel", "/work/thel/2.png", "Development", "thel",
    "2025", ["Next.js", "React", "PostgreSQL", "Node.js"],
    ["/work/thel/1.png", "/work/thel/2.png"]),
  cs("blazek", "/work/blazek/1.png", "Development", "blazek",
    "2025", ["Next.js", "React", "Tailwind CSS", "Vercel"],
    ["/work/blazek/1.png", "/work/blazek/2.png"]),
  cs("rossence", "/work/rossence/1.jpg", "Design", "rossence",
    "2024", ["Figma", "Illustrator", "After Effects"],
    ["/work/rossence/1.jpg", "/work/rossence/2.jpg"]),
  cs("certified-dripper", "/work/certified-dripper/1.jpg", "Branding", "certifiedDripper",
    "2024", ["Illustrator", "Photoshop", "Blender"],
    ["/work/certified-dripper/1.jpg", "/work/certified-dripper/2.jpg"]),
  cs("kingu", "/work/kingu/1.jpg", "Branding", "kingu",
    "2024", ["Illustrator", "Photoshop"],
    ["/work/kingu/1.jpg", "/work/kingu/2.jpg"]),
  cs("todo-mates", "/work/todo-mates/1.jpg", "Branding", "todoMates",
    "2023", ["Illustrator", "Procreate"],
    ["/work/todo-mates/1.jpg", "/work/todo-mates/2.jpg"]),
  cs("juve", "/work/juve/1.jpg", "Branding", "juve",
    "2023", ["Photoshop", "After Effects"],
    ["/work/juve/1.jpg"]),
  cs("sneakers-club", "/work/sneakers-club/1.jpg", "Branding", "sneakersClub",
    "2024", ["Blender", "Photoshop", "Illustrator"],
    ["/work/sneakers-club/1.jpg"]),
];
