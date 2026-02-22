import type { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  bgIcon?: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  variant?: "large" | "compact";
}

export interface Pillar extends Service {
  bgIcon: LucideIcon;
}
