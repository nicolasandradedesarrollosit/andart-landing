import type { LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface MetricCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function MetricCard({ value, label, icon: Icon, className }: MetricCardProps) {
  return (
    <div className={cn("metric-card", className)}>
      {Icon && (
        <div className="absolute top-0 right-0 p-2 opacity-10">
          <Icon className="size-16" />
        </div>
      )}
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
    </div>
  );
}
