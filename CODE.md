# CODE.md — Digital Factory: Architecture & Code Reference

> **Source of truth** for folder structure, design tokens, component inventory, and implementation patterns.
> Read **CLAUDE.md** first for workflow rules and AI-agent instructions.

---

## 1. Project Overview

| Key | Value |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Styling | Tailwind CSS v4 + centralized `index.css` |
| Icons | `lucide-react` (replaces Material Symbols) |
| i18n | `react-i18next` |
| Shared UI | `shadcn/ui` (Radix primitives) — components in `shared/components/ui/` |
| State | Local state / React Context first; Redux TK only if cross-page global state is proven necessary |
| Fonts | `Space Grotesk` (display/body), `JetBrains Mono` (code blocks) |

---

## 2. Folder Structure

```
├── app/                          # Next.js App Router — routes + page-specific sections
│   ├── layout.tsx                # Root layout (providers, fonts, metadata)
│   ├── page.tsx                  # Landing page (/) — imports from ./_sections/
│   ├── _sections/                # ★ Private (excluded from routing) — landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── PillarsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── DifferentiatorsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CtaFooterSection.tsx
│   ├── services/[slug]/
│   │   ├── page.tsx
│   │   └── _sections/            # Service detail page sections
│   ├── work/
│   │   ├── page.tsx
│   │   ├── _sections/
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       └── _sections/        # Case study page sections
│   └── contact/
│       ├── page.tsx
│       └── _sections/            # Contact page sections
│
├── shared/                       # Cross-cutting utilities + ALL shared components
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components (auto-generated via `npx shadcn@latest add`)
│   │   │   ├── button.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── card.tsx
│   │   │   └── separator.tsx
│   │   ├── layout/               # Global layout shells (used on every page)
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── BottomNav.tsx
│   │   │   ├── Section.tsx
│   │   │   └── Container.tsx
│   │   ├── display/              # Generic visual components (reused across 2+ pages)
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── TechBadge.tsx
│   │   │   ├── TimelineStep.tsx
│   │   │   └── CodeSnippet.tsx
│   │   └── forms/                # Shared form components
│   ├── constants/
│   │   ├── routes.ts
│   │   ├── nav-items.ts
│   │   └── site-metadata.ts
│   ├── hooks/
│   ├── lib/
│   │   └── cn.ts
│   ├── types/
│   └── providers/
│       ├── I18nProvider.tsx
│       └── Providers.tsx
│
├── features/                     # ★ Logic only — data, hooks, slices (no JSX)
│   ├── landing/
│   │   └── data/
│   │       ├── pillars.ts
│   │       ├── process-steps.ts
│   │       ├── projects.ts
│   │       ├── differentiators.ts
│   │       └── testimonials.ts
│   ├── case-study/
│   │   └── data/
│   │       └── case-studies.ts
│   ├── service-detail/
│   │   └── data/
│   │       ├── services.ts
│   │       └── tooling.ts
│   └── contact/
│       └── hooks/
│           └── useBookingState.ts
│
│
├── i18n/
│   └── locales/
│       ├── en/   (common.json, landing.json, services.json, contact.json, case-study.json)
│       └── es/   (same structure)
│
└── styles/
    └── index.css                 # ★ ALL custom classes and CSS variables live here
```

### Layer Rules

| Layer | Location | Responsibility | Can Import From |
|---|---|---|---|
| **Pages** | `app/*/page.tsx` | Route entry, thin orchestrator | `./_sections/` |
| **Sections** | `app/*/_sections/` | Single visual section of a page | `shared/components/`, `features/*/data/`, `shared/` |
| **Logic** | `features/*/` | Data, hooks, state (no JSX) | `shared/`, own data files |
| **Shared Components** | `shared/components/` | Reusable UI (used on 2+ pages) | `shared/lib/`, `shared/types/` |
| **Shared** | `shared/` | Utilities, hooks, types, constants, providers | nothing above it |

**Component placement rule:**
- Used on **2+ pages** → `shared/components/display/` or `shared/components/layout/`
- Used on **1 page only** → `app/[route]/` (colocated with the page, outside `_sections/`)

**Forbidden imports:**
- `shared/components/` must NEVER import from `features/` or `app/`
- `features/X/data/` contains only static data — no JSX, no hooks

---

## 3. Design Tokens & Centralized CSS (`styles/index.css`)

All custom utility classes and CSS variables live in `index.css`. **No inline `style={{}}` objects. No CSS modules.**

Key CSS variables:
```css
--color-primary: #0593ff
--color-bg: #0b0b0b (dark)
--color-surface: #151515 (dark)
--color-surface-highlight: #1e1e1e (dark)
--color-text-primary / secondary / muted
--color-border / border-hover
```

Key component classes: `page-section`, `page-container`, `section-label`, `section-title`,
`card-base`, `card-highlight`, `btn-primary`, `btn-outline`, `tech-badge`, `status-badge`,
`icon-box`, `metric-card`, `form-input`, `code-window`, `bg-grid`, `bg-glow`, `gradient-text`

---

## 4. Component Reference

### `SectionHeader` — Label + Title pattern (used on every page)
```tsx
<SectionHeader label={t("pillars.label")} title={t("pillars.title")} align="left" | "center" />
```

### `ServiceCard` — Icon card with tech tags
```tsx
<ServiceCard icon={Code} bgIcon={Terminal} title={...} description={...} tags={[...]} variant="large" | "compact" />
```

### `TimelineStep` — Vertical process step
```tsx
<TimelineStep number="01" icon={Search} title={...} description={...} isActive={true} />
```

### `ProjectCard` — Portfolio thumbnail with overlay
```tsx
<ProjectCard href="/work/slug" imageSrc={...} category="FINTECH" categoryVariant="primary" title={...} subtitle={...} />
```

### `MetricCard` — Big number + label
```tsx
<MetricCard value="45%" label="Faster Load Times" icon={TrendingUp} />
```

### `TestimonialCard` — Quote + avatar
```tsx
<TestimonialCard quote={...} avatarSrc={...} name={...} role={...} company={...} />
```

### shadcn components (`components/ui/`)
Use `Button`, `Badge`, `Card`, `Separator` for atomic primitives. Override via `className` + `cn()`. Never fork the source.

---

## 5. Lucide Icon Mapping

| Material Symbol | Lucide Equivalent |
|---|---|
| `code` | `Code` |
| `terminal` | `Terminal` |
| `palette` | `Palette` |
| `brush` | `Paintbrush` |
| `search` | `Search` |
| `design_services` | `PenTool` |
| `construction` | `Hammer` |
| `rocket_launch` | `Rocket` |
| `precision_manufacturing` | `Target` |
| `speed` | `Zap` |
| `all_inclusive` | `Infinity` |
| `format_quote` | `Quote` |
| `hexagon` | `Hexagon` |
| `menu` | `Menu` |
| `arrow_forward` | `ArrowRight` |
| `language` | `Globe` |
| `home` | `Home` |
| `work` | `Briefcase` |

---

## 6. i18n Key Structure

Namespace per route, `common` for shared strings. Use `useTranslation("landing")`, `useTranslation("common")`, etc.

```json
// i18n/locales/en/landing.json
{
  "hero": { "badge": "...", "title_line1": "...", "title_line2": "...", "subtitle": "...", "cta_primary": "...", "cta_secondary": "..." },
  "pillars": { "label": "...", "title": "...", "software": { "title": "...", "description": "..." }, "design": { "title": "...", "description": "..." } }
}
```

---

## 7. Data Layer Conventions

Static content lives in `features/*/data/*.ts` as typed arrays. i18n keys are stored, not translated strings.

```ts
// features/landing/data/process-steps.ts
export const processSteps: ProcessStep[] = [
  { number: "01", icon: Search, titleKey: "landing:process.step1.title", descriptionKey: "landing:process.step1.description" },
  ...
];
```

---

## 8. Responsive Breakpoints

Mobile-first. Key breakpoints: `md` (768px) for 2-col grids, `lg` (1024px) for full desktop nav.

---

## 9. shadcn Setup

- Config: `components.json` (utils → `@/shared/lib/cn`, ui → `@/components/ui`)
- To add a new component: `npx shadcn@latest add [component]`
- Never edit generated files directly — extend via `className` composition
