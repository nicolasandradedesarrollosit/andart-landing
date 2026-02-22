import { Wrench, Newspaper, type LucideIcon } from "lucide-react";

export interface Channel {
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  href: string;
}

export const directChannels: Channel[] = [
  {
    icon: Wrench,
    titleKey: "channels.tech_support.title",
    descriptionKey: "channels.tech_support.description",
    href: "#",
  },
  {
    icon: Newspaper,
    titleKey: "channels.press.title",
    descriptionKey: "channels.press.description",
    href: "#",
  },
];
