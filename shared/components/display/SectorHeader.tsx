import { cn } from "@/shared/lib/cn";
import type { LucideIcon } from "lucide-react";

interface SectorHeaderProps {
  sectorLabel: string;
  title: string;
  trailingIcon?: LucideIcon;
  className?: string;
}

export function SectorHeader({
  sectorLabel,
  title,
  trailingIcon: Icon,
  className,
}: SectorHeaderProps) {
  return (
    <div className={cn("flex items-start justify-between", className)}>
      <div>
        <p className="sector-label">{sectorLabel}</p>
        <h2 className="sector-title mt-1">{title}</h2>
      </div>
      {Icon && (
        <Icon className="w-6 h-6 sm:w-8 sm:h-8 opacity-20 mt-1 text-[var(--color-primary)] hidden sm:block" />
      )}
    </div>
  );
}
