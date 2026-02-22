import { cn } from "@/shared/lib/cn";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

interface SocialLinkBarProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinkBar({ links, className }: SocialLinkBarProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="social-link"
          >
            <Icon className="w-5 h-5" />
          </a>
        );
      })}
    </div>
  );
}
