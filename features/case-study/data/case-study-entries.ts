import type { CaseStudyData } from "./case-studies";

interface CsOptions {
  imageFit?: "cover" | "contain";
  galleryFit?: Array<"cover" | "contain">;
  galleryMask?: boolean[];
}

const cs = (
  slug: string, imageSrc: string, category: string, key: string,
  year: string, techStack: string[], gallery: string[], opts?: CsOptions
): CaseStudyData => ({
  slug, imageSrc, category, year, techStack, gallery,
  imageFit: opts?.imageFit, galleryFit: opts?.galleryFit, galleryMask: opts?.galleryMask,
  titleKey: `case-study:${key}.title`, subtitleKey: `case-study:${key}.subtitle`,
  challengeKey: `case-study:${key}.challenge`, solutionKey: `case-study:${key}.solution`,
  servicesKey: `case-study:${key}.services`,
});

export const caseStudies: CaseStudyData[] = [
  cs("thel", "/work/thel/thel.onrender.com_.png", "Development", "thel",
    "2025", ["Next.js", "React", "Mongoose", "Node.js"],
    ["/work/thel/thel.onrender.com_.png"]),
  cs("blazek", "/work/blazek/www.blazekclub.com_.png", "Development", "blazek",
    "2025", ["Next.js", "React", "Tailwind CSS", "Vercel"],
    ["/work/blazek/www.blazekclub.com_.png", "/work/blazek/www.blazekclub.com_2.png", "/work/blazek/www.blazekclub.com_3.png"],
    { galleryMask: [true, true, true] }),
  cs("rossence", "/work/rossence/1.jpg", "Design", "rossence",
    "2024", ["Figma", "Illustrator", "After Effects"],
    ["/work/rossence/1.jpg", "/work/rossence/2.jpg"],
    { galleryMask: [true, true] }),
  cs("certified-dripper", "/work/certified-dripper/1.jpg", "Branding", "certifiedDripper",
    "2024", ["Illustrator", "Photoshop", "Blender"],
    ["/work/certified-dripper/1.jpg", "/work/certified-dripper/2.jpg"],
    { galleryFit: ["cover", "contain"], galleryMask: [true, false] }),
  cs("kingu", "/work/kingu/1.jpg", "Branding", "kingu",
    "2024", ["Illustrator", "Photoshop"],
    ["/work/kingu/1.jpg", "/work/kingu/2.jpg"],
    { imageFit: "contain", galleryFit: ["contain", "contain"] }),
  cs("todo-mates", "/work/todo-mates/1.jpg", "Branding", "todoMates",
    "2023", ["Illustrator", "Procreate"],
    ["/work/todo-mates/1.jpg", "/work/todo-mates/2.jpg"],
    { imageFit: "contain", galleryFit: ["contain", "contain"] }),
  cs("juve", "/work/juve/1.jpg", "Branding", "juve",
    "2023", ["Photoshop", "After Effects"],
    ["/work/juve/1.jpg"]),
  cs("sneakers-club", "/work/sneakers-club/1.jpg", "Branding", "sneakersClub",
    "2024", ["Blender", "Photoshop", "Illustrator"],
    ["/work/sneakers-club/1.jpg"]),
];
