"use client";

import { m, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      className={cn("card-highlight group", className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {BgIcon && (
        <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
          <BgIcon className="w-32 h-32" />
        </div>
      )}

      <div className={cn("icon-box mb-3 sm:mb-4", variant === "compact" && "size-10 sm:size-12")}>
        <Icon className={variant === "large" ? "w-5 h-5 sm:w-7 sm:h-7" : "w-4 h-4 sm:w-5 sm:h-5"} />
      </div>

      <h3 className={cn("font-bold mb-1 sm:mb-2", variant === "large" ? "text-base sm:text-xl" : "text-sm sm:text-lg")}>
        {title}
      </h3>

      <p
        className={cn("mb-3 sm:mb-4", variant === "large" ? "text-sm sm:text-base" : "text-xs sm:text-sm")}
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
    </m.div>
  );
}
