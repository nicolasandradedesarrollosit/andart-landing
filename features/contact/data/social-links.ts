import { Instagram, Linkedin, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "https://www.instagram.com/andart.arg/", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/andart", label: "LinkedIn" },
];
