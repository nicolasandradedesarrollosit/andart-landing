import { Target, Zap, Infinity, Crosshair, Bolt, Repeat, type LucideIcon } from "lucide-react";

export interface Differentiator {
  icon: LucideIcon;
  bgIcon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

export const differentiators: Differentiator[] = [
  {
    icon: Target,
    bgIcon: Crosshair,
    titleKey: "landing:differentiators.precision.title",
    descriptionKey: "landing:differentiators.precision.description",
  },
  {
    icon: Zap,
    bgIcon: Bolt,
    titleKey: "landing:differentiators.performance.title",
    descriptionKey: "landing:differentiators.performance.description",
  },
  {
    icon: Infinity,
    bgIcon: Repeat,
    titleKey: "landing:differentiators.end_to_end.title",
    descriptionKey: "landing:differentiators.end_to_end.description",
  },
];
