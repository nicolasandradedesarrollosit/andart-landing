import { Code, Terminal, Palette, Paintbrush } from "lucide-react";
import type { Pillar } from "@/shared/types/service";

export const pillars: Pillar[] = [
  {
    slug: "software-development",
    icon: Code,
    bgIcon: Terminal,
    titleKey: "landing:pillars.software.title",
    descriptionKey: "landing:pillars.software.description",
    tags: ["React Native", "Python", "Cloud Architecture"],
  },
  {
    slug: "graphic-design",
    icon: Palette,
    bgIcon: Paintbrush,
    titleKey: "landing:pillars.design.title",
    descriptionKey: "landing:pillars.design.description",
    tags: ["UI/UX", "Branding", "Motion"],
  },
];
