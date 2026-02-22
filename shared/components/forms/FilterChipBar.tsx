import { cn } from "@/shared/lib/cn";

interface Category {
  key: string;
  label: string;
}

interface FilterChipBarProps {
  categories: Category[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
}

export function FilterChipBar({ categories, activeKey, onChange, className }: FilterChipBarProps) {
  return (
    <div className={cn("flex gap-2 overflow-x-auto hide-scrollbar", className)}>
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={activeKey === cat.key ? "filter-chip-active" : "filter-chip"}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
