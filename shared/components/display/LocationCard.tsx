import { Navigation } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface LocationCardProps {
  label: string;
  address: string;
  directionsHref: string;
  className?: string;
}

export function LocationCard({ label, address, directionsHref, className }: LocationCardProps) {
  return (
    <div className={cn("location-card bg-blueprint-sm", className)}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="location-pin" />
      </div>

      <div className="location-address-bar">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider mb-0.5 text-[var(--color-primary)]">
            {label}
          </p>
          <p className="text-xs font-medium">{address}</p>
        </div>
        <a
          href={directionsHref}
          className="icon-box-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Navigation className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
