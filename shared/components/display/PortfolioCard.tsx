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
  title: string;
  subtitle: string;
  className?: string;
}

export function PortfolioCard({
  href,
  imageSrc,
  imageAlt,
  tags,
  title,
  subtitle,
  className,
}: PortfolioCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <div className="portfolio-card-image">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
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

        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
          <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">{title}</h3>
          <p className="text-xs sm:text-sm text-white/60">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
