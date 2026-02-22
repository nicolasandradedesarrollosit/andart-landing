import { Instagram, Linkedin, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "https://instagram.com/andart.dev", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/andart", label: "LinkedIn" },
];
