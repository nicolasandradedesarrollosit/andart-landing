import type { LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface ServiceCardProps {
  icon: LucideIcon;
  bgIcon?: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  variant?: "large" | "compact";
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  bgIcon: BgIcon,
  title,
  description,
  tags,
  variant = "large",
  className,
}: ServiceCardProps) {
  return (
    <div className={cn("card-highlight group", className)}>
      {BgIcon && (
        <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
          <BgIcon className="w-32 h-32" />
        </div>
      )}

      <div className={cn("icon-box mb-4", variant === "compact" && "size-12")}>
        <Icon className={variant === "large" ? "w-7 h-7" : "w-5 h-5"} />
      </div>

      <h3 className={cn("font-bold mb-2", variant === "large" ? "text-xl" : "text-lg")}>
        {title}
      </h3>

      <p
        className={cn("mb-4", variant === "large" ? "text-base" : "text-sm")}
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="tech-badge">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
