import { cn } from "@/shared/lib/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("page-section", className)}>
      {children}
    </section>
  );
}
