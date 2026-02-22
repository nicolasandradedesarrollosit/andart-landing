import Image from "next/image";
import Link from "next/link";
import { cn } from "@/shared/lib/cn";

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryVariant?: "primary" | "light";
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
  title,
  subtitle,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className={cn("group block card-base overflow-hidden p-0", className)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="absolute top-4 left-4">
          <span
            className={cn(
              "status-badge",
              categoryVariant === "light" && "bg-white/10"
            )}
          >
            {category}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-white/70">{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}
