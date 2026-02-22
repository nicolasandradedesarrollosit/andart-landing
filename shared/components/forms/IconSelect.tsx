"use client";

import { cn } from "@/shared/lib/cn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { FormError } from "./FormError";

interface SelectOption {
  value: string;
  label: string;
}

interface IconSelectProps {
  label: string;
  options: SelectOption[];
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export function IconSelect({
  label,
  options,
  error,
  value,
  onChange,
  className,
  placeholder,
}: IconSelectProps) {
  return (
    <div className="space-y-1">
      <label className="form-label">{label}</label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={cn("form-input", error && "form-input-error", className)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormError message={error} />
    </div>
  );
}
