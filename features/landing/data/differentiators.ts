import { Target, Zap, Infinity, type LucideIcon } from "lucide-react";

export interface Differentiator {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

export const differentiators: Differentiator[] = [
  {
    icon: Target,
    titleKey: "landing:differentiators.precision.title",
    descriptionKey: "landing:differentiators.precision.description",
  },
  {
    icon: Zap,
    titleKey: "landing:differentiators.performance.title",
    descriptionKey: "landing:differentiators.performance.description",
  },
  {
    icon: Infinity,
    titleKey: "landing:differentiators.end_to_end.title",
    descriptionKey: "landing:differentiators.end_to_end.description",
  },
];
