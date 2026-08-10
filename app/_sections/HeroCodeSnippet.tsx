"use client";

import { m, useReducedMotion } from "framer-motion";

const lines = [
  { num: 1, text: "// andart.studio", cls: "code-syntax-comment" },
  { num: 2, text: "const brand = await andart.design({", cls: "code-syntax-keyword" },
  { num: 3, text: '  type: "identity",', cls: "code-syntax-string" },
  { num: 4, text: '  deliverables: ["logo", "system"],', cls: "code-syntax-string" },
  { num: 5, text: "});", cls: "code-syntax-keyword" },
  { num: 6, text: "", cls: "" },
  { num: 7, text: "const app = await andart.build({", cls: "code-syntax-keyword" },
  { num: 8, text: '  stack: ["Next.js", "TypeScript"],', cls: "code-syntax-function" },
  { num: 9, text: '  deploy: "production",', cls: "code-syntax-string" },
  { num: 10, text: "});", cls: "code-syntax-keyword" },
  { num: 11, text: "", cls: "" },
  { num: 12, text: "// Ready to launch ✓", cls: "code-syntax-comment" },
];

export function HeroCodeSnippet() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="code-window-featured">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs font-mono text-[var(--color-text-muted)] ml-2">project.ts</span>
      </div>
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <m.div
            key={line.num}
            className="flex"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.06, duration: 0.35 }}
          >
            <span className="code-line-number">{line.num}</span>
            <span className={line.cls}>{line.text || "\u00A0"}</span>
          </m.div>
        ))}
      </div>
    </div>
  );
}
