import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface SeoMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
}
