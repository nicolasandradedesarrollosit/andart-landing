"use client";

import { m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface FeaturedProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  title: string;
  subtitle: string;
  className?: string;
}

export function FeaturedProjectCard({
  href,
  imageSrc,
  imageAlt,
  category,
  title,
  subtitle,
  className,
}: FeaturedProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Link href={href} className={cn("group block cursor-pointer", className)}>
      <m.div
        className="featured-project-card aspect-[16/7] sm:aspect-[21/9]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="featured-project-overlay" />

        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
          <span className="status-badge">{category}</span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex items-end justify-between">
          <div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-white/60">{subtitle}</p>
          </div>
          <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/60 group-hover:border-white/50 group-hover:text-white transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </m.div>
    </Link>
  );
}
