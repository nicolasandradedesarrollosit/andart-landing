import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/shared/lib/cn";
import type { LucideIcon } from "lucide-react";
import { FormError } from "./FormError";

interface IconInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  label: string;
  error?: string;
}

export const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
  ({ icon: Icon, label, error, className, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1">
        <label htmlFor={inputId} className="form-label">{label}</label>
        <div className="relative">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <Icon className="w-4 h-4 text-[var(--color-text-muted)]" />
          </div>
          <input
            ref={ref}
            id={inputId}
            className={cn("form-input pl-10", error && "form-input-error", className)}
            {...props}
          />
        </div>
        <FormError message={error} />
      </div>
    );
  }
);

IconInput.displayName = "IconInput";
