import { Sparkles, LayoutGrid, Clapperboard } from "lucide-react";
import type { Capability } from "./software-capabilities";

export const designCapabilities: Capability[] = [
  {
    icon: Sparkles,
    codeId: "DSN.BRN.102",
    titleKey: "design.branding.title",
    descriptionKey: "design.branding.description",
    tags: ["Logo", "Brand System", "Guidelines"],
  },
  {
    icon: LayoutGrid,
    codeId: "DSN.UUX.408",
    titleKey: "design.uiux.title",
    descriptionKey: "design.uiux.description",
    tags: ["Figma", "Prototyping", "Research"],
  },
  {
    icon: Clapperboard,
    codeId: "DSN.MOT.773",
    titleKey: "design.motion.title",
    descriptionKey: "design.motion.description",
    tags: ["After Effects", "Lottie", "GSAP"],
  },
];
