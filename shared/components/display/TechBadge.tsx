import { cn } from "@/shared/lib/cn";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return <span className={cn("tech-badge", className)}>{label}</span>;
}
