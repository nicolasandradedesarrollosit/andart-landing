import { FolderCheck, Building2, Heart, Users, type LucideIcon } from "lucide-react";

export interface SocialMetric {
  icon: LucideIcon;
  valueKey: string;
  labelKey: string;
}

export const socialMetrics: SocialMetric[] = [
  { icon: FolderCheck, valueKey: "landing:socialProof.metric1.value", labelKey: "landing:socialProof.metric1.label" },
  { icon: Building2, valueKey: "landing:socialProof.metric2.value", labelKey: "landing:socialProof.metric2.label" },
  { icon: Heart, valueKey: "landing:socialProof.metric3.value", labelKey: "landing:socialProof.metric3.label" },
  { icon: Users, valueKey: "landing:socialProof.metric4.value", labelKey: "landing:socialProof.metric4.label" },
];
