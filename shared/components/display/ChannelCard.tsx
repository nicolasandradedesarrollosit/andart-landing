import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/shared/lib/cn";
import type { LucideIcon } from "lucide-react";

interface ChannelCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ChannelCard({ icon: Icon, title, description, href, className }: ChannelCardProps) {
  return (
    <Link href={href} className={cn("channel-card group flex items-start gap-3 sm:gap-4", className)}>
      <div className="icon-box-sm shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-sm mb-1">{title}</h3>
        <p className="text-xs leading-relaxed text-[var(--color-text-secondary)]">
          {description}
        </p>
      </div>
      <ArrowUpRight
        className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary)]"
      />
    </Link>
  );
}
