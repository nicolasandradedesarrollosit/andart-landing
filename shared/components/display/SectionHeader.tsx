import { cn } from "@/shared/lib/cn";

interface SectionHeaderProps {
  label: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-2",
        align === "center" && "text-center",
        className
      )}
    >
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
