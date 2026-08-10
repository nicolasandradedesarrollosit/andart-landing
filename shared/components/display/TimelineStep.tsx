"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface TimelineStepProps {
  number: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  isLast?: boolean;
  className?: string;
}

export function TimelineStep({
  number,
  icon: Icon,
  title,
  description,
  badge,
  isLast = false,
  className,
}: TimelineStepProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className={cn("flex gap-3 sm:gap-4", className)}>
      <div className="flex flex-col items-center flex-shrink-0">
        <div className={isInView ? "timeline-step-active" : "timeline-step-inactive"}>
          {Icon ? <Icon className="w-5 h-5 sm:w-6 sm:h-6" /> : number}
        </div>
        {!isLast && (
          <div
            className={cn(
              "w-px flex-1 mt-2 transition-colors duration-500",
              isInView ? "bg-[var(--color-primary-border)]" : "bg-[var(--color-border)]"
            )}
          />
        )}
      </div>

      <div className="flex-1 pb-6 sm:pb-8">
        <div className="flex items-center gap-2 mb-1 sm:mb-2">
          <h3 className="font-bold text-base sm:text-lg">{title}</h3>
          {badge && <span className="tech-badge">{badge}</span>}
        </div>
        <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
    </div>
  );
}
