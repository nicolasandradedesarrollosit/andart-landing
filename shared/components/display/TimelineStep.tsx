import type { LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface TimelineStepProps {
  number: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  isActive?: boolean;
  className?: string;
}

export function TimelineStep({
  number,
  icon: Icon,
  title,
  description,
  isActive = false,
  className,
}: TimelineStepProps) {
  return (
    <div className={cn("flex gap-4", className)}>
      <div className="flex-shrink-0">
        <div className={isActive ? "timeline-step-active" : "timeline-step-inactive"}>
          {Icon ? <Icon className="w-6 h-6" /> : number}
        </div>
      </div>

      <div className="flex-1 pb-8">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
