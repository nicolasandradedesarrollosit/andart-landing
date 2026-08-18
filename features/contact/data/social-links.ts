import { Instagram, MessageCircle, type LucideIcon } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  { icon: Instagram, href: "https://www.instagram.com/andart.arg/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/5493416923901", label: "WhatsApp" },
];
