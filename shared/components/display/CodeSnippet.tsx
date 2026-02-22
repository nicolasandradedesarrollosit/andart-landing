import { cn } from "@/shared/lib/cn";

interface CodeLine {
  text: string;
  className?: string;
}

interface CodeSnippetProps {
  lines: CodeLine[];
  className?: string;
}

export function CodeSnippet({ lines, className }: CodeSnippetProps) {
  return (
    <div className={cn("code-window", className)}>
      <div className="p-4 border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="code-window-dots">
          <div className="code-window-dot bg-red-500" />
          <div className="code-window-dot bg-yellow-500" />
          <div className="code-window-dot bg-green-500" />
        </div>
      </div>

      <div className="p-3 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
        {lines.map((line, index) => (
          <div key={index} className={cn("leading-relaxed", line.className)}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
