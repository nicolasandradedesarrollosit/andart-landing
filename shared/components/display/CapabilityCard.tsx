import { cn } from "@/shared/lib/cn";
import type { LucideIcon } from "lucide-react";

interface CapabilityCardProps {
  icon: LucideIcon;
  codeId: string;
  title: string;
  description: string;
  tags?: string[];
  className?: string;
}

export function CapabilityCard({
  icon: Icon,
  codeId,
  title,
  description,
  tags,
  className,
}: CapabilityCardProps) {
  return (
    <div className={cn("capability-card", className)}>
      <div className="flex items-start justify-between">
        <div className="capability-card-icon">
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
        <span className="capability-code-id">{codeId}</span>
      </div>

      <div>
        <h3 className="font-bold text-sm sm:text-base mb-1">{title}</h3>
        <p className="text-xs sm:text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tech-badge">{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
