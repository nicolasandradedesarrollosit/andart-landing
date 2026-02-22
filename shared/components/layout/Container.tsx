import { cn } from "@/shared/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("page-container", className)}>
      {children}
    </div>
  );
}
