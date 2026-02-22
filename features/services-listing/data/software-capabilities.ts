import { Globe, Smartphone, CloudCog, type LucideIcon } from "lucide-react";

export interface Capability {
  icon: LucideIcon;
  codeId: string;
  titleKey: string;
  descriptionKey: string;
  tags?: string[];
}

export const softwareCapabilities: Capability[] = [
  {
    icon: Globe,
    codeId: "SYS.WEB.084",
    titleKey: "software.web.title",
    descriptionKey: "software.web.description",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    codeId: "SYS.MOB.291",
    titleKey: "software.mobile.title",
    descriptionKey: "software.mobile.description",
    tags: ["Flutter", "Swift", "Kotlin"],
  },
  {
    icon: CloudCog,
    codeId: "SYS.CLD.552",
    titleKey: "software.cloud.title",
    descriptionKey: "software.cloud.description",
    tags: ["AWS", "Docker", "Kubernetes"],
  },
];
