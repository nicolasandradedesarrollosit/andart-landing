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
      <Quote className="w-8 h-8 mb-4" style={{ color: "var(--color-primary)" }} />

      <p className="text-base mb-6 leading-relaxed">{quote}</p>

      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
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
