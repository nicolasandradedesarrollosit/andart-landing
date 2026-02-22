import Image from "next/image";
import { Quote } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface TestimonialCardProps {
  quote: string;
  avatarSrc: string;
  name: string;
  role: string;
  company: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  avatarSrc,
  name,
  role,
  company,
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("card-base", className)}>
      <Quote className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4" style={{ color: "var(--color-primary)" }} />

      <p className="text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{quote}</p>

      <div className="flex items-center gap-2.5 sm:gap-3">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
          <Image src={avatarSrc} alt={name} fill className="object-cover" />
        </div>

        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
            {role} • {company}
          </p>
        </div>
      </div>
    </div>
  );
}
