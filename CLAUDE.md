# CLAUDE.md — Agent Instructions for Digital Factory

> **You are an AI coding agent.** Before writing any code, read `CODE.md` in the project root.
> It is the single source of truth for architecture, folder structure, design tokens, and component APIs.

---

## Identity & Project Context

This is **Digital Factory** — a landing site for a software development & graphic design studio.
It consists of 4 page types: Landing, Case Study, Contact/Booking, and Service Detail.
The design is dark-mode-first, industrial/factory-themed, with cobalt blue (`#0593ff`) as the primary accent.

---

## Golden Rules

1. **Read `CODE.md` first.** Every time. Before every task. It contains the folder structure, design tokens, component inventory, icon mappings, and data conventions.
2. **No file over 100 lines.** If a file approaches 100 lines, split it. Extract sub-components, data files, or hooks. This is a hard ceiling — respect it.
3. **DRY and SOLID.** Never duplicate markup, styles, or logic. If two sections share a pattern, extract a shared component (see `components/display/`). Single responsibility per file.
4. **CSS lives in `styles/index.css`.** Do NOT create CSS modules, styled-components, or inline `style={{}}` objects. Use Tailwind utility classes + the centralized CSS classes defined in `index.css`. If a pattern is used more than twice, add it to `index.css` as a `@layer components` class.
5. **No Material UI.** The design references used Material Symbols icons. We use `lucide-react` instead. See the icon mapping table in `CODE.md` §5.
6. **App Router pages are thin.** `app/*/page.tsx` files should import a feature module and render it. No business logic, no markup beyond the feature component. See `CODE.md` §6.
7. **All user-facing strings go through i18n.** Use `useTranslation()` hook with the appropriate namespace. Never hardcode text. See `CODE.md` §7.

---

## Architecture Pattern

```
app/page.tsx → features/landing/LandingPage.tsx → sections/HeroSection.tsx
                                                 → sections/PillarsSection.tsx
                                                 → ...
                                                   ↳ uses components/display/ServiceCard.tsx
                                                   ↳ uses components/display/SectionHeader.tsx
                                                   ↳ uses components/ui/button.tsx (shadcn)
```

### Layer Rules

| Layer | Location | Responsibility | Can Import From |
|---|---|---|---|
| **Pages** | `app/` | Route entry, metadata, thin orchestrator | `features/` |
| **Features** | `features/` | Page-level composition of sections | own `sections/`, own `data/`, `components/`, `shared/` |
| **Sections** | `features/*/sections/` | Single visual section of a page | `components/`, `shared/`, own feature's `data/` |
| **Components** | `components/` | Reusable UI building blocks | `shared/`, other `components/` |
| **Shared** | `shared/` | Utilities, hooks, types, constants, providers | nothing above it |

**Forbidden imports:**
- `components/` must NEVER import from `features/`
- `shared/` must NEVER import from `components/` or `features/`
- `features/X` must NEVER import sections from `features/Y` (extract to `components/` if shared)

---

## File Creation Checklist

Before creating any file, verify:

- [ ] **Under 100 lines?** If not, split.
- [ ] **Does a similar component already exist?** Check `components/display/` and `components/ui/` first.
- [ ] **Strings hardcoded?** Move to `i18n/locales/[lang]/[namespace].json`.
- [ ] **Custom CSS needed?** Add to `styles/index.css` under `@layer components`, not inline.
- [ ] **New icon needed?** Use `lucide-react`. Check `CODE.md` §5 for the mapping.
- [ ] **Types defined?** Add to `shared/types/` or colocate in the feature's `data/` if feature-specific.
- [ ] **Barrel export updated?** Every feature folder has an `index.ts` that exports its public API.

---

## Styling Rules

### DO ✓

```tsx
// ✓ Use centralized CSS class from index.css
<div className="card-highlight">

// ✓ Use Tailwind utilities for one-off spacing/layout
<div className="card-highlight mt-8 md:grid-cols-2">

// ✓ Combine with cn() for conditional classes
<div className={cn("timeline-step-inactive", isActive && "timeline-step-active")}>

// ✓ Use CSS variables from index.css
// Already wired via the classes above
```

### DON'T ✗

```tsx
// ✗ Inline styles
<div style={{ backgroundColor: '#0593ff' }}>

// ✗ CSS modules
import styles from './Card.module.css';

// ✗ Duplicated Tailwind patterns across files
// If you're writing the same 5+ class combo in 3 files, extract to index.css

// ✗ Material UI components or icons
import { Button } from '@mui/material'; // FORBIDDEN
import CodeIcon from '@mui/icons-material/Code'; // FORBIDDEN

// ✗ Hardcoded strings
<h2>Core Capabilities</h2> // Use t("pillars.title") instead
```

---

## Component Creation Pattern

```tsx
// components/display/MetricCard.tsx
import { cn } from "@/shared/lib/cn";
import type { LucideIcon } from "lucide-react";

interface MetricCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  className?: string;
}

export function MetricCard({ value, label, icon: Icon, className }: MetricCardProps) {
  return (
    <div className={cn("metric-card", className)}>
      {Icon && (
        <div className="absolute top-0 right-0 p-2 opacity-10">
          <Icon className="size-16" />
        </div>
      )}
      <p className="metric-value">{value}</p>
      <p className="metric-label">{label}</p>
    </div>
  );
}
```

Key patterns:
- Named export (not default)
- Accept `className` prop for composition
- Use `cn()` for class merging
- Use CSS classes from `index.css` (e.g., `metric-card`, `metric-value`)
- Interface defined above the component
- Lucide icons passed as `LucideIcon` type

---

## Section Creation Pattern

```tsx
// features/landing/sections/PillarsSection.tsx
"use client";

import { useTranslation } from "react-i18next";
import { SectionHeader } from "@/components/display/SectionHeader";
import { ServiceCard } from "@/components/display/ServiceCard";
import { pillars } from "../data/pillars";

export function PillarsSection() {
  const { t } = useTranslation("landing");

  return (
    <section className="page-section bg-[var(--color-surface)] border-t border-[var(--color-border)]">
      <div className="page-container">
        <SectionHeader label={t("pillars.label")} title={t("pillars.title")} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {pillars.map((pillar) => (
            <ServiceCard
              key={pillar.titleKey}
              icon={pillar.icon}
              bgIcon={pillar.bgIcon}
              title={t(pillar.titleKey)}
              description={t(pillar.descriptionKey)}
              tags={pillar.tags}
              variant="large"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

Key patterns:
- `"use client"` only when hooks are used
- Data is imported from sibling `data/` folder
- All text via `useTranslation`
- Uses shared components, not raw HTML
- Section wrapper uses `page-section` + `page-container` CSS classes

---

## Data File Pattern

```tsx
// features/landing/data/pillars.ts
import { Code, Terminal, Palette, Paintbrush, type LucideIcon } from "lucide-react";

export interface Pillar {
  icon: LucideIcon;
  bgIcon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
}

export const pillars: Pillar[] = [
  {
    icon: Code,
    bgIcon: Terminal,
    titleKey: "pillars.software.title",
    descriptionKey: "pillars.software.description",
    tags: ["React Native", "Python", "Cloud Architecture"],
  },
  {
    icon: Palette,
    bgIcon: Paintbrush,
    titleKey: "pillars.design.title",
    descriptionKey: "pillars.design.description",
    tags: ["UI/UX", "Branding", "Motion"],
  },
];
```

---

## shadcn/ui Usage

shadcn components live in `components/ui/`. Use them for atomic form elements and primitives:

| Use shadcn for | Don't use shadcn for |
|---|---|
| `Button`, `Input`, `Textarea` | Domain components like `ServiceCard` |
| `RadioGroup`, `Select` | Page sections |
| `Badge`, `Separator` | Layout shells |
| `Dialog`, `Sheet` | Anything that needs heavy custom styling |

When a shadcn component needs project-specific styling, override via `className` and `cn()`. Never fork the shadcn source — extend via composition.

---

## Redux Toolkit Policy

**Default: Do NOT use Redux.**

Use React `useState` / `useReducer` for component state. Use React Context for theme/i18n/auth.

Only introduce Redux TK if:
- State is needed across 3+ unrelated pages
- The state has complex update logic (e.g., shopping cart, multi-step wizard)
- Server cache isn't the right model (use React Query/SWR for that instead)

If Redux is introduced, it goes in `shared/store/`:
```
shared/store/
├── store.ts
├── hooks.ts        # typed useAppDispatch, useAppSelector
└── slices/
    └── [slice-name].ts
```

---

## Task Execution Protocol

When given a task:

1. **Read `CODE.md`** — refresh your understanding of the architecture.
2. **Identify the layer** — is this a page, feature, section, component, or shared utility?
3. **Check for existing components** — search `components/` and `features/` before creating new files.
4. **Plan the file(s)** — list what you'll create/modify. Ensure no file exceeds 100 lines.
5. **Implement** — follow the patterns above. Use `cn()`, CSS classes, i18n, and lucide-react.
6. **Verify imports** — respect the dependency direction (shared → components → features → app).
7. **Update barrel exports** — add to `index.ts` if you created a new public component.
8. **Add i18n keys** — for both `en` and `es` locales.

---

## Quick Reference: Key Paths

| What | Where |
|---|---|
| Design tokens & CSS classes | `styles/index.css` |
| Architecture reference | `CODE.md` |
| shadcn components | `components/ui/` |
| Shared display components | `components/display/` |
| Layout shells | `components/layout/` |
| Form components | `components/forms/` |
| Feature modules | `features/[name]/` |
| i18n strings | `i18n/locales/[lang]/[namespace].json` |
| Types | `shared/types/` |
| Utility functions | `shared/lib/` |
| Hooks | `shared/hooks/` |
| Route constants | `shared/constants/routes.ts` |