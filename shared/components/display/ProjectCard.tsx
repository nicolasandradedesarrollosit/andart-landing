"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryVariant?: "primary" | "light";
  statusLabel?: string;
  title: string;
  subtitle: string;
  className?: string;
}

export function ProjectCard({
  href,
  imageSrc,
  imageAlt,
  category,
  categoryVariant = "primary",
  statusLabel,
  title,
  subtitle,
  className,
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link
      href={href}
      className={cn("group block card-base overflow-hidden p-0", className)}
    >
      <m.div
        className="relative aspect-video overflow-hidden"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        whileHover={shouldReduceMotion ? undefined : { y: -5 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span
            className={cn(
              "status-badge",
              categoryVariant === "light" && "bg-white/10"
            )}
          >
            {category}
          </span>
        </div>

        {statusLabel ? (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
              {statusLabel}
            </span>
          </div>
        ) : null}

        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <h3 className="text-base sm:text-xl font-bold text-white mb-0.5 sm:mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-white/70">{subtitle}</p>
        </div>
      </m.div>
    </Link>
  );
}
