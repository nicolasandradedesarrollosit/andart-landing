"use client";

import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/shared/lib/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.section
      id={id}
      className={cn("page-section", className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.section>
  );
}
