"use client";

import { m, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface DifferentiatorCardProps {
  icon: LucideIcon;
  bgIcon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function DifferentiatorCard({
  icon: Icon,
  bgIcon: BgIcon,
  title,
  description,
  className,
}: DifferentiatorCardProps) {
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
      <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
        <BgIcon className="w-28 h-28" />
      </div>

      <div className="icon-box mb-3 sm:mb-4">
        <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
      </div>

      <h3 className="font-bold text-base sm:text-xl mb-1 sm:mb-2">{title}</h3>

      <p className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
        {description}
      </p>
    </m.div>
  );
}
