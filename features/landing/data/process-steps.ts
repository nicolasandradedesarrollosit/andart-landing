import { Search, PenTool, Hammer, Rocket, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    titleKey: "landing:process.step1.title",
    descriptionKey: "landing:process.step1.description",
  },
  {
    number: "02",
    icon: PenTool,
    titleKey: "landing:process.step2.title",
    descriptionKey: "landing:process.step2.description",
  },
  {
    number: "03",
    icon: Hammer,
    titleKey: "landing:process.step3.title",
    descriptionKey: "landing:process.step3.description",
  },
  {
    number: "04",
    icon: Rocket,
    titleKey: "landing:process.step4.title",
    descriptionKey: "landing:process.step4.description",
  },
];
