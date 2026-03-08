"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";

interface Tag {
  label: string;
  variant: "primary" | "neutral";
}

interface PortfolioCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  tags: Tag[];
  statusLabel?: string;
  title: string;
  subtitle: string;
  animateOnView?: boolean;
  className?: string;
}

export function PortfolioCard({
  href,
  imageSrc,
  imageAlt,
  tags,
  statusLabel,
  title,
  subtitle,
  animateOnView = true,
  className,
}: PortfolioCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link href={href} className={cn("group block", className)}>
      <m.div
        className="portfolio-card-image"
        initial={
          shouldReduceMotion || !animateOnView ? false : { opacity: 0, y: 20 }
        }
        whileInView={
          shouldReduceMotion || !animateOnView ? undefined : { opacity: 1, y: 0 }
        }
        whileHover={shouldReduceMotion ? undefined : { y: -5 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-contain transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-1.5 sm:gap-2">
          {tags.map((tag) => (
            <span
              key={tag.label}
              className={cn(
                "portfolio-card-tag",
                tag.variant === "primary" ? "portfolio-card-tag-primary" : "portfolio-card-tag-neutral"
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {statusLabel ? (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
              {statusLabel}
            </span>
          </div>
        ) : null}

        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">{title}</h3>
          <p className="text-xs sm:text-sm text-white/60">{subtitle}</p>
        </div>
      </m.div>
    </Link>
  );
}
