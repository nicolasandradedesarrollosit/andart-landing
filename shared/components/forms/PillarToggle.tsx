import { cn } from "@/shared/lib/cn";

interface Option {
  key: string;
  label: string;
}

interface PillarToggleProps {
  options: Option[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
}

export function PillarToggle({ options, activeKey, onChange, className }: PillarToggleProps) {
  return (
    <div className={cn("pillar-toggle", className)}>
      {options.map((option) => (
        <button
          key={option.key}
          onClick={() => onChange(option.key)}
          className={activeKey === option.key ? "pillar-toggle-item-active" : "pillar-toggle-item"}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
