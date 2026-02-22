# CODE.md

## 1. Tech Stack

| Key | Value |
|---|---|
| Framework | Next.js 15 (App Router, React 19) |
| Styling | Tailwind CSS v4 + `styles/index.css` |
| Icons | `lucide-react` |
| i18n | `react-i18next` / `next-i18next` |
| Shared UI | `shadcn/ui` |
| State | Local / Context first; Redux TK only if proven necessary |
| Fonts | `Space Grotesk`, `JetBrains Mono` |

---

## 2. Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                        # / → LandingPage
│   ├── services/
│   │   ├── page.tsx                    # /services → ServicesListingPage
│   │   └── [slug]/page.tsx            # /services/[slug] → ServiceDetailPage
│   ├── work/
│   │   ├── page.tsx                    # /work → WorkListingPage
│   │   └── [slug]/page.tsx            # /work/[slug] → CaseStudyPage
│   └── contact/page.tsx               # /contact → ContactPage
│
├── features/
│   ├── landing/
│   │   ├── index.ts
│   │   ├── LandingPage.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── PillarsSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── DifferentiatorsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CtaFooterSection.tsx
│   │   └── data/
│   │       ├── pillars.ts
│   │       ├── process-steps.ts
│   │       ├── projects.ts
│   │       ├── differentiators.ts
│   │       └── testimonials.ts
│   │
│   ├── services-listing/
│   │   ├── index.ts
│   │   ├── ServicesListingPage.tsx
│   │   ├── sections/
│   │   │   ├── PillarToggleSection.tsx
│   │   │   ├── SoftwareSectorSection.tsx
│   │   │   ├── DesignSectorSection.tsx
│   │   │   └── ServicesCtaSection.tsx
│   │   └── data/
│   │       ├── software-capabilities.ts
│   │       └── design-capabilities.ts
│   │
│   ├── work-listing/
│   │   ├── index.ts
│   │   ├── WorkListingPage.tsx
│   │   ├── sections/
│   │   │   ├── WorkHeroSection.tsx
│   │   │   ├── FilterBarSection.tsx
│   │   │   ├── ProjectGridSection.tsx
│   │   │   └── WorkCtaSection.tsx
│   │   ├── data/
│   │   │   ├── projects.ts
│   │   │   └── filter-categories.ts
│   │   └── hooks/
│   │       └── useProjectFilter.ts
│   │
│   ├── case-study/
│   │   ├── index.ts
│   │   ├── CaseStudyPage.tsx
│   │   ├── sections/
│   │   │   ├── CaseHeroSection.tsx
│   │   │   ├── ChallengeSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── TechStackSection.tsx
│   │   │   ├── ResultsSection.tsx
│   │   │   ├── GallerySection.tsx
│   │   │   └── NextProjectCta.tsx
│   │   └── data/
│   │       └── case-studies.ts
│   │
│   ├── service-detail/
│   │   ├── index.ts
│   │   ├── ServiceDetailPage.tsx
│   │   ├── sections/
│   │   │   ├── CodeHeroSection.tsx
│   │   │   ├── CoreServicesSection.tsx
│   │   │   ├── ToolingGridSection.tsx
│   │   │   ├── FactoryStandardSection.tsx
│   │   │   └── ServiceCtaSection.tsx
│   │   └── data/
│   │       ├── services.ts
│   │       └── tooling.ts
│   │
│   └── contact/
│       ├── index.ts
│       ├── ContactPage.tsx
│       ├── sections/
│       │   ├── ContactHeroSection.tsx
│       │   ├── ContactFormSection.tsx
│       │   ├── LocationSection.tsx
│       │   ├── DirectChannelsSection.tsx
│       │   ├── SocialLinksSection.tsx
│       │   ├── BookingSection.tsx
│       │   └── DateTimePickerSection.tsx
│       ├── data/
│       │   ├── channels.ts
│       │   ├── social-links.ts
│       │   └── project-classifications.ts
│       └── hooks/
│           └── useBookingState.ts
│
├── components/
│   ├── ui/                       # shadcn
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── radio-group.tsx
│   │   └── separator.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── BottomNav.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   ├── display/
│   │   ├── SectionHeader.tsx
│   │   ├── SectorHeader.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CapabilityCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── PortfolioCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── MetricCard.tsx
│   │   ├── ChannelCard.tsx
│   │   ├── LocationCard.tsx
│   │   ├── TechBadge.tsx
│   │   ├── TimelineStep.tsx
│   │   ├── DifferentiatorItem.tsx
│   │   ├── CodeSnippet.tsx
│   │   └── ScrollIndicator.tsx
│   └── forms/
│       ├── IconInput.tsx
│       ├── IconSelect.tsx
│       ├── ServiceToggle.tsx
│       ├── PillarToggle.tsx
│       ├── FilterChipBar.tsx
│       ├── DateScroller.tsx
│       ├── TimeSlotGrid.tsx
│       └── SocialLinkBar.tsx
│
├── shared/
│   ├── constants/
│   │   ├── routes.ts
│   │   ├── nav-items.ts
│   │   └── site-metadata.ts
│   ├── hooks/
│   │   ├── useMediaQuery.ts
│   │   └── useScrollDirection.ts
│   ├── lib/
│   │   ├── cn.ts
│   │   └── i18n.ts
│   ├── types/
│   │   ├── project.ts
│   │   ├── service.ts
│   │   ├── testimonial.ts
│   │   └── common.ts
│   └── providers/
│       ├── ThemeProvider.tsx
│       ├── I18nProvider.tsx
│       └── Providers.tsx
│
├── i18n/
│   ├── locales/
│   │   ├── en/
│   │   │   ├── common.json
│   │   │   ├── landing.json
│   │   │   ├── services-listing.json
│   │   │   ├── services.json
│   │   │   ├── work-listing.json
│   │   │   ├── contact.json
│   │   │   └── case-study.json
│   │   └── es/
│   │       └── ... (mirrors en/)
│   └── config.ts
│
├── styles/
│   └── index.css
│
└── public/
    ├── images/projects/
    ├── images/team/
    └── fonts/
```

---

## 3. `styles/index.css`

```css
@import "tailwindcss";

@layer base {
  :root {
    --color-primary: #0593ff;
    --color-primary-hover: #0570cc;
    --color-primary-muted: rgba(5, 147, 255, 0.1);
    --color-primary-border: rgba(5, 147, 255, 0.2);
    --color-primary-glow: rgba(5, 147, 255, 0.3);
    --color-bg: #f5f7f8;
    --color-surface: #ffffff;
    --color-surface-highlight: #f0f0f0;
    --color-text-primary: #0f172a;
    --color-text-secondary: #64748b;
    --color-text-muted: #94a3b8;
    --color-border: rgba(0, 0, 0, 0.08);
    --color-border-hover: rgba(5, 147, 255, 0.5);
    --radius-sm: 0.25rem;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-2xl: 1rem;
    --radius-full: 9999px;
    --section-py: 5rem;
    --section-px: 1rem;
    --container-max: 80rem;
    --font-display: "Space Grotesk", sans-serif;
    --font-mono: "JetBrains Mono", monospace;
    --shadow-glow-primary: 0 0 20px var(--color-primary-glow);
    --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.06);
  }

  .dark {
    --color-bg: #0b0b0b;
    --color-surface: #151515;
    --color-surface-highlight: #1e1e1e;
    --color-text-primary: #f1f5f9;
    --color-text-secondary: #94a3b8;
    --color-text-muted: #64748b;
    --color-border: rgba(255, 255, 255, 0.05);
    --color-border-hover: rgba(5, 147, 255, 0.5);
    --shadow-card: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  html { scroll-behavior: smooth; }
  body {
    font-family: var(--font-display);
    background: var(--color-bg);
    color: var(--color-text-primary);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::selection { background: var(--color-primary); color: white; }
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: var(--color-bg); }
  ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: var(--color-primary); }
}

@layer components {
  /* Layout */
  .page-section { @apply py-20 px-4; }
  .page-container { @apply max-w-7xl mx-auto w-full; }

  /* Section Headers */
  .section-label { @apply text-sm font-bold tracking-[0.2em] uppercase; color: var(--color-primary); }
  .section-title { @apply text-3xl md:text-4xl font-bold; color: var(--color-text-primary); }
  .sector-label { @apply text-xs font-bold tracking-tighter uppercase opacity-70; color: var(--color-primary); }
  .sector-title { @apply text-2xl font-bold leading-tight tracking-tight uppercase pb-2 relative; color: var(--color-text-primary); }
  .sector-title::after { content: ''; position: absolute; bottom: 0; left: 0; width: 40px; height: 2px; background-color: var(--color-primary); }
  .section-label-with-icon { @apply flex items-center gap-2 mb-4; }
  .section-label-with-icon span:first-child { color: var(--color-primary); }
  .section-label-with-icon h3 { @apply text-xs font-bold uppercase tracking-widest opacity-60; }

  /* Cards */
  .card-base { @apply rounded-xl border p-6 transition-colors duration-300; background: var(--color-surface); border-color: var(--color-border); }
  .card-base:hover { border-color: var(--color-border-hover); }
  .card-highlight { @apply rounded-xl border p-8 relative overflow-hidden transition-colors duration-300; background: var(--color-surface-highlight); border-color: var(--color-border); }
  .card-highlight:hover { border-color: var(--color-border-hover); }
  .capability-card { @apply relative flex flex-col gap-4 rounded-xl border p-5 transition-colors; background: rgba(255, 255, 255, 0.5); border-color: var(--color-border); }
  .dark .capability-card { background: rgba(30, 41, 59, 0.4); border-color: var(--color-primary-border); }
  .capability-card:hover { border-color: var(--color-border-hover); }
  .capability-card-icon { @apply p-3 rounded-lg transition-all; background: var(--color-primary-muted); color: var(--color-primary); }
  .capability-card:hover .capability-card-icon { background: var(--color-primary); color: white; }
  .capability-code-id { @apply text-[10px] font-mono; color: rgba(5, 147, 255, 0.4); }
  .channel-card { @apply p-4 rounded-xl border transition-colors; background: var(--color-surface); border-color: var(--color-border); }
  .channel-card:hover { border-color: var(--color-border-hover); }
  .contact-hero { @apply relative overflow-hidden rounded-xl p-6 border; background: var(--color-surface); border-color: var(--color-border); }
  .metric-card { @apply p-5 rounded-xl border relative overflow-hidden; background: var(--color-surface); border-color: var(--color-border); }
  .metric-value { @apply text-4xl font-bold mb-1; color: var(--color-primary); }
  .metric-label { @apply text-sm font-medium leading-tight; color: var(--color-text-secondary); }
  .cta-card { @apply rounded-2xl border p-12 text-center; background: var(--color-surface-highlight); border-color: var(--color-border); }

  /* Buttons */
  .btn-primary { @apply inline-flex items-center justify-center gap-2 px-8 h-12 sm:h-14 rounded-lg font-bold tracking-wide transition-all duration-200; background: var(--color-primary); color: white; box-shadow: var(--shadow-glow-primary); }
  .btn-primary:hover { background: var(--color-primary-hover); }
  .btn-outline { @apply inline-flex items-center justify-center gap-2 px-8 h-12 sm:h-14 rounded-lg font-medium tracking-wide border transition-all duration-200; border-color: var(--color-border); color: var(--color-text-primary); background: transparent; }
  .btn-outline:hover { background: rgba(255, 255, 255, 0.05); }
  .btn-dark { @apply inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg font-semibold transition-colors; background: var(--color-text-primary); color: var(--color-bg); }

  /* Badges */
  .tech-badge { @apply px-3 py-1 rounded-full text-xs font-medium border; background: rgba(255, 255, 255, 0.05); border-color: var(--color-border); color: var(--color-text-secondary); }
  .tech-badge-primary { @apply inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase; background: var(--color-primary-muted); color: var(--color-primary); }
  .status-badge { @apply inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider border; background: var(--color-primary-muted); border-color: var(--color-primary-border); color: var(--color-primary); }
  .portfolio-card-tag { @apply px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md; }
  .portfolio-card-tag-primary { background: rgba(5, 147, 255, 0.2); color: var(--color-primary); border-color: var(--color-primary-border); }
  .portfolio-card-tag-neutral { background: rgba(255, 255, 255, 0.1); color: white; border-color: rgba(255, 255, 255, 0.1); }

  /* Toggle & Filters */
  .pillar-toggle { @apply flex h-12 items-center justify-center rounded-xl p-1 border; background: var(--color-surface-highlight); border-color: var(--color-primary-border); }
  .pillar-toggle-item { @apply flex h-full flex-1 items-center justify-center rounded-lg px-2 text-sm font-bold uppercase tracking-wider transition-all; color: var(--color-text-muted); }
  .pillar-toggle-item-active { @apply flex h-full flex-1 items-center justify-center rounded-lg px-2 text-sm font-bold uppercase tracking-wider shadow-lg; background: var(--color-primary); color: white; }
  .filter-chip { @apply flex h-10 shrink-0 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all; background: var(--color-surface-highlight); color: var(--color-text-secondary); }
  .filter-chip:hover { background: var(--color-surface); }
  .filter-chip-active { @apply flex h-10 shrink-0 items-center justify-center rounded-xl px-6 text-sm font-semibold transition-all; background: var(--color-primary); color: white; }

  /* Portfolio Card */
  .portfolio-card-image { @apply aspect-[4/5] overflow-hidden rounded-xl relative ring-1 transition-all; ring-color: var(--color-border); }
  .portfolio-card-image:hover { ring-color: var(--color-border-hover); box-shadow: 0 0 20px rgba(5, 147, 255, 0.15); }

  /* Timeline */
  .timeline-step-active { @apply size-12 rounded-full flex items-center justify-center font-bold text-lg border-2; background: var(--color-surface); border-color: var(--color-primary); color: var(--color-primary); box-shadow: 0 0 15px var(--color-primary-glow); }
  .timeline-step-inactive { @apply size-12 rounded-full flex items-center justify-center font-bold text-lg border-2; background: var(--color-bg); border-color: var(--color-border); color: var(--color-text-primary); }
  .timeline-step-inactive:hover { border-color: var(--color-primary); color: var(--color-primary); }

  /* Icon Containers */
  .icon-box { @apply size-14 rounded-lg flex items-center justify-center border; background: var(--color-primary-muted); border-color: var(--color-primary-border); color: var(--color-primary); }
  .icon-box-sm { @apply p-2 rounded-lg; background: var(--color-primary-muted); color: var(--color-primary); }
  .icon-circle { @apply w-10 h-10 rounded-full flex items-center justify-center; }

  /* Forms */
  .form-input { @apply w-full rounded-lg py-3 px-4 text-sm border transition-all focus:outline-none focus:ring-2 focus:ring-offset-0; background: var(--color-surface-highlight); border-color: var(--color-border); color: var(--color-text-primary); --tw-ring-color: rgba(5, 147, 255, 0.5); }
  .form-input:focus { border-color: var(--color-primary); }
  .form-label { @apply text-xs font-semibold uppercase tracking-wider ml-1; color: var(--color-text-muted); }

  /* Location */
  .location-card { @apply relative h-64 w-full rounded-xl overflow-hidden border; background: var(--color-surface); border-color: var(--color-border); }
  .location-pin { @apply w-4 h-4 rounded-full border-2; background: var(--color-primary); border-color: var(--color-bg); box-shadow: 0 0 15px rgba(5, 147, 255, 0.8); }
  .location-address-bar { @apply absolute bottom-4 left-4 right-4 backdrop-blur border p-3 rounded-lg flex justify-between items-center; background: rgba(var(--color-bg), 0.9); border-color: var(--color-border); }

  /* Social */
  .social-link { @apply flex-1 flex items-center justify-center py-3 rounded-lg border transition-all; background: var(--color-surface); border-color: var(--color-border); color: var(--color-text-muted); }
  .social-link:hover { background: var(--color-primary-muted); border-color: var(--color-primary); color: var(--color-primary); }

  /* Backgrounds */
  .bg-grid { background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e"); }
  .bg-blueprint { background-image: linear-gradient(rgba(5, 147, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 147, 255, 0.05) 1px, transparent 1px); background-size: 40px 40px; }
  .bg-blueprint-sm { background-image: linear-gradient(rgba(5, 147, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(5, 147, 255, 0.05) 1px, transparent 1px); background-size: 20px 20px; }
  .bg-dot-grid { background-image: radial-gradient(circle, var(--color-primary) 1px, transparent 1px); background-size: 24px 24px; opacity: 0.05; }
  .bg-glow { @apply absolute rounded-full blur-[100px] pointer-events-none; background: var(--color-primary-glow); }
  .gradient-text { @apply text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-400; }
  .glass { @apply backdrop-blur-md; background: rgba(var(--color-bg), 0.8); border-color: var(--color-border); }
  .hide-scrollbar::-webkit-scrollbar { display: none; }
  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

  /* Code Snippet */
  .code-window { @apply w-full relative overflow-hidden rounded-xl border; background: var(--color-surface); border-color: var(--color-border); }
  .code-window-dots { @apply flex items-center gap-2 mb-2; }
  .code-window-dot { @apply w-3 h-3 rounded-full; }
  .code-syntax-keyword { color: #c084fc; }
  .code-syntax-function { color: var(--color-primary); }
  .code-syntax-string { color: #4ade80; }
  .code-syntax-comment { color: #64748b; }
  .code-syntax-class { color: #facc15; }
}

@layer utilities {
  .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 20px var(--color-primary-glow); }
    50% { box-shadow: 0 0 40px var(--color-primary-glow); }
  }
}
```

---

## 4. Component Interfaces

```tsx
// components/display/SectionHeader.tsx
interface SectionHeaderProps {
  label: string;
  title: string;
  align?: "left" | "center";
}

// components/display/SectorHeader.tsx
interface SectorHeaderProps {
  sectorLabel: string;
  title: string;
  trailingIcon?: LucideIcon;
}

// components/display/ServiceCard.tsx
interface ServiceCardProps {
  icon: LucideIcon;
  bgIcon?: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  variant?: "large" | "compact";
}

// components/display/CapabilityCard.tsx
interface CapabilityCardProps {
  icon: LucideIcon;
  codeId: string;
  title: string;
  description: string;
  tags?: string[];
}

// components/display/ProjectCard.tsx
interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  category: string;
  categoryVariant?: "primary" | "light";
  title: string;
  subtitle: string;
}

// components/display/PortfolioCard.tsx
interface PortfolioCardProps {
  imageSrc: string;
  imageAlt: string;
  tags: { label: string; variant: "primary" | "neutral" }[];
  title: string;
  subtitle: string;
  href: string;
}

// components/display/MetricCard.tsx
interface MetricCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
}

// components/display/TestimonialCard.tsx
interface TestimonialCardProps {
  quote: string;
  avatarSrc: string;
  name: string;
  role: string;
  company: string;
}

// components/display/TimelineStep.tsx
interface TimelineStepProps {
  number: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  isActive?: boolean;
}

// components/display/ChannelCard.tsx
interface ChannelCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

// components/display/LocationCard.tsx
interface LocationCardProps {
  label: string;
  address: string;
  directionsHref: string;
}

// components/display/CodeSnippet.tsx
interface CodeSnippetProps {
  lines: { text: string; className?: string }[];
}

// components/forms/IconInput.tsx
interface IconInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: LucideIcon;
  label: string;
}

// components/forms/IconSelect.tsx
interface IconSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
}

// components/forms/PillarToggle.tsx
interface PillarToggleProps {
  options: { key: string; label: string }[];
  activeKey: string;
  onChange: (key: string) => void;
}

// components/forms/FilterChipBar.tsx
interface FilterChipBarProps {
  categories: { key: string; label: string }[];
  activeKey: string;
  onChange: (key: string) => void;
}

// components/forms/SocialLinkBar.tsx
interface SocialLinkBarProps {
  links: { icon: LucideIcon; href: string; label: string }[];
}
```

---

## 5. Icon Mapping (Material Symbols → lucide-react)

| Material Symbol | Lucide |
|---|---|
| `hexagon` | `Hexagon` |
| `menu` | `Menu` |
| `arrow_forward` | `ArrowRight` |
| `arrow_back` | `ArrowLeft` |
| `arrow_outward` | `ArrowUpRight` |
| `chevron_left` | `ChevronLeft` |
| `chevron_right` | `ChevronRight` |
| `code` | `Code` |
| `terminal` | `Terminal` |
| `palette` | `Palette` |
| `brush` | `Paintbrush` |
| `search` | `Search` |
| `design_services` | `PenTool` |
| `construction` | `Hammer` |
| `rocket_launch` | `Rocket` |
| `precision_manufacturing` | `Target` |
| `speed` / `bolt` | `Zap` |
| `all_inclusive` | `Infinity` |
| `format_quote` | `Quote` |
| `language` / `public` | `Globe` |
| `smartphone` / `phone_iphone` | `Smartphone` |
| `dns` | `Server` |
| `cloud` | `Cloud` |
| `cloud_sync` | `CloudCog` |
| `deployed_code` | `Container` |
| `database` | `Database` |
| `api` | `Workflow` |
| `verified` | `ShieldCheck` |
| `architecture` | `Compass` |
| `engineering` | `Wrench` |
| `person` | `User` |
| `mail` | `Mail` |
| `send` | `Send` |
| `calendar_month` | `Calendar` |
| `home` | `Home` |
| `work` | `Briefcase` |
| `domain` | `Building2` |
| `more_vert` | `MoreVertical` |
| `share` | `Share2` |
| `error_outline` | `AlertCircle` |
| `lightbulb` | `Lightbulb` |
| `trending_up` | `TrendingUp` |
| `css` | `FileCode` |
| `notifications` | `Bell` |
| `auto_awesome` | `Sparkles` |
| `grid_view` | `LayoutGrid` |
| `animation` | `Clapperboard` |
| `polyline` | `Spline` |
| `hub` | `Network` |
| `layers` | `Layers` |
| `settings_suggest` | `SlidersHorizontal` |
| `factory` | `Factory` |
| `memory` | `Cpu` |
| `account_circle` | `CircleUser` |
| `forum` | `MessageSquare` |
| `chat` / `chat_bubble` | `MessageCircle` |
| `location_on` | `MapPin` |
| `directions` | `Navigation` |
| `news` | `Newspaper` |
| `groups` | `Users` |
| `dashboard` | `LayoutDashboard` |
| `settings` | `Settings` |

---

## 6. Route Map

| Route | Feature | Container |
|---|---|---|
| `/` | `features/landing/LandingPage` | `max-w-7xl` |
| `/services` | `features/services-listing/ServicesListingPage` | `max-w-2xl` |
| `/services/[slug]` | `features/service-detail/ServiceDetailPage` | `max-w-md` |
| `/work` | `features/work-listing/WorkListingPage` | `max-w-5xl` |
| `/work/[slug]` | `features/case-study/CaseStudyPage` | `max-w-md` |
| `/contact` | `features/contact/ContactPage` | `max-w-xl` |

---

## 7. Data Files

```tsx
// features/landing/data/process-steps.ts
import { Search, PenTool, Hammer, Rocket, type LucideIcon } from "lucide-react";

export interface ProcessStep {
  number: string;
  icon: LucideIcon;
  titleKey: string;
  descriptionKey: string;
}

export const processSteps: ProcessStep[] = [
  { number: "01", icon: Search, titleKey: "process.step1.title", descriptionKey: "process.step1.desc" },
  { number: "02", icon: PenTool, titleKey: "process.step2.title", descriptionKey: "process.step2.desc" },
  { number: "03", icon: Hammer, titleKey: "process.step3.title", descriptionKey: "process.step3.desc" },
  { number: "04", icon: Rocket, titleKey: "process.step4.title", descriptionKey: "process.step4.desc" },
];
```

```tsx
// features/services-listing/data/software-capabilities.ts
import { Globe, Smartphone, CloudCog, type LucideIcon } from "lucide-react";

export interface Capability {
  icon: LucideIcon;
  codeId: string;
  titleKey: string;
  descriptionKey: string;
  tags?: string[];
}

export const softwareCapabilities: Capability[] = [
  { icon: Globe, codeId: "SYS.WEB.084", titleKey: "software.web.title", descriptionKey: "software.web.description", tags: ["React", "Next.js"] },
  { icon: Smartphone, codeId: "SYS.MOB.291", titleKey: "software.mobile.title", descriptionKey: "software.mobile.description", tags: ["Flutter", "Swift"] },
  { icon: CloudCog, codeId: "SYS.CLD.552", titleKey: "software.cloud.title", descriptionKey: "software.cloud.description", tags: ["AWS", "Docker"] },
];
```

```tsx
// features/services-listing/data/design-capabilities.ts
import { Sparkles, LayoutGrid, Clapperboard } from "lucide-react";

export const designCapabilities: Capability[] = [
  { icon: Sparkles, codeId: "DSN.BRN.102", titleKey: "design.branding.title", descriptionKey: "design.branding.description" },
  { icon: LayoutGrid, codeId: "DSN.UUX.408", titleKey: "design.uiux.title", descriptionKey: "design.uiux.description" },
  { icon: Clapperboard, codeId: "DSN.MOT.773", titleKey: "design.motion.title", descriptionKey: "design.motion.description" },
];
```

```tsx
// features/work-listing/data/projects.ts
export interface PortfolioProject {
  slug: string;
  imageSrc: string;
  imageAlt: string;
  tags: { labelKey: string; variant: "primary" | "neutral" }[];
  titleKey: string;
  subtitleKey: string;
  category: string;
}

export const portfolioProjects: PortfolioProject[] = [
  { slug: "lumina-crm", imageSrc: "/images/projects/lumina-crm.jpg", imageAlt: "Modern CRM dashboard", tags: [{ labelKey: "SaaS", variant: "primary" }, { labelKey: "UI/UX", variant: "neutral" }], titleKey: "projects.lumina.title", subtitleKey: "projects.lumina.subtitle", category: "saas" },
  { slug: "nexus-fintech", imageSrc: "/images/projects/nexus-fintech.jpg", imageAlt: "Mobile fintech app screens", tags: [{ labelKey: "Fintech", variant: "primary" }, { labelKey: "Development", variant: "neutral" }], titleKey: "projects.nexus.title", subtitleKey: "projects.nexus.subtitle", category: "development" },
  { slug: "aether-identity", imageSrc: "/images/projects/aether-identity.jpg", imageAlt: "Minimalist brand identity", tags: [{ labelKey: "Branding", variant: "primary" }, { labelKey: "Design", variant: "neutral" }], titleKey: "projects.aether.title", subtitleKey: "projects.aether.subtitle", category: "branding" },
  { slug: "oryx-dashboard", imageSrc: "/images/projects/oryx-dashboard.jpg", imageAlt: "Data visualization dashboard", tags: [{ labelKey: "Big Data", variant: "primary" }, { labelKey: "SaaS", variant: "neutral" }], titleKey: "projects.oryx.title", subtitleKey: "projects.oryx.subtitle", category: "saas" },
];
```

```tsx
// features/work-listing/data/filter-categories.ts
export interface FilterCategory { key: string; labelKey: string; }

export const filterCategories: FilterCategory[] = [
  { key: "all", labelKey: "filters.all" },
  { key: "development", labelKey: "filters.development" },
  { key: "design", labelKey: "filters.design" },
  { key: "saas", labelKey: "filters.saas" },
  { key: "branding", labelKey: "filters.branding" },
];
```

```tsx
// features/contact/data/channels.ts
import { Wrench, Newspaper, type LucideIcon } from "lucide-react";

export interface Channel { icon: LucideIcon; titleKey: string; descriptionKey: string; href: string; }

export const directChannels: Channel[] = [
  { icon: Wrench, titleKey: "channels.tech_support.title", descriptionKey: "channels.tech_support.description", href: "#" },
  { icon: Newspaper, titleKey: "channels.press.title", descriptionKey: "channels.press.description", href: "#" },
];
```

```tsx
// features/contact/data/project-classifications.ts
export const projectClassifications = [
  { value: "prototyping", labelKey: "classifications.prototyping" },
  { value: "architecture", labelKey: "classifications.architecture" },
  { value: "uiux", labelKey: "classifications.uiux" },
  { value: "hardware", labelKey: "classifications.hardware" },
] as const;
```

```tsx
// features/contact/data/social-links.ts
import { Globe, Users, Terminal } from "lucide-react";

export const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: Users, href: "#", label: "Community" },
  { icon: Terminal, href: "#", label: "GitHub" },
];
```

```tsx
// shared/constants/nav-items.ts
import {
  Home, Network, Layers, SlidersHorizontal,
  Briefcase, Cpu, CircleUser, MessageSquare,
  LayoutDashboard, MessageCircle, Settings,
  type LucideIcon,
} from "lucide-react";

export interface NavItem { icon: LucideIcon; labelKey: string; href: string; }

export const servicesNav: NavItem[] = [
  { icon: Home, labelKey: "nav.home", href: "/" },
  { icon: Network, labelKey: "nav.services", href: "/services" },
  { icon: Layers, labelKey: "nav.work", href: "/work" },
  { icon: SlidersHorizontal, labelKey: "nav.config", href: "#" },
];

export const workNav: NavItem[] = [
  { icon: Briefcase, labelKey: "nav.work", href: "/work" },
  { icon: Cpu, labelKey: "nav.services", href: "/services" },
  { icon: CircleUser, labelKey: "nav.about", href: "#" },
  { icon: MessageSquare, labelKey: "nav.contact", href: "/contact" },
];

export const contactNav: NavItem[] = [
  { icon: LayoutDashboard, labelKey: "nav.home", href: "/" },
  { icon: Briefcase, labelKey: "nav.work", href: "/work" },
  { icon: MessageCircle, labelKey: "nav.contact", href: "/contact" },
  { icon: Settings, labelKey: "nav.config", href: "#" },
];
```

---

## 8. i18n Files

```json
// i18n/locales/en/common.json
{
  "nav": { "home": "Home", "work": "Work", "services": "Services", "contact": "Contact", "about": "About", "config": "Config" },
  "footer": { "copyright": "© {{year}} Digital Factory Inc. All rights reserved." },
  "cta": { "start_project": "Start a Project", "lets_talk": "Let's Talk", "initialize_project": "Initialize New Project" }
}
```

```json
// i18n/locales/en/landing.json
{
  "hero": { "badge": "Accepting New Projects", "title_line1": "Engineering", "title_line2": "Digital Excellence", "subtitle": "We forge software and design identities with industrial precision.", "cta_primary": "Start a Project", "cta_secondary": "View Portfolio" },
  "pillars": { "label": "Our Pillars", "title": "Core Capabilities", "software": { "title": "Software Development", "description": "Custom SaaS platforms, native mobile apps, and robust backend systems built for scale and performance." }, "design": { "title": "Graphic Design", "description": "Strategic brand identity, UI/UX design, and marketing materials that captivate and convert." } },
  "process": { "label": "The Blueprint", "title": "Factory Process", "step1": { "title": "Discovery & Strategy", "desc": "We analyze your goals, dissect the market, and blueprint the technical requirements." }, "step2": { "title": "Design & Prototyping", "desc": "Visualizing the solution with high-fidelity wireframes and interactive prototypes." }, "step3": { "title": "Build & Develop", "desc": "Our engineers write clean, scalable code to bring the designs to life." }, "step4": { "title": "Launch & Scale", "desc": "Deployment, testing, and ongoing support to ensure growth." } },
  "portfolio": { "label": "Output", "title": "Selected Works", "view_all": "View All Work" },
  "differentiators": { "label": "Why Us" },
  "cta_footer": { "title_prefix": "Ready to build something", "title_accent": "extraordinary?" }
}
```

```json
// i18n/locales/en/services-listing.json
{
  "header": "Factory Capabilities",
  "toggle": { "software": "Software", "design": "Design" },
  "software": { "sector_label": "Sector 01", "title": "Software Development", "web": { "code_id": "SYS.WEB.084", "title": "Web Architecture", "description": "Scalable modern browsers. Enterprise-grade frontend systems optimized for performance." }, "mobile": { "code_id": "SYS.MOB.291", "title": "Mobile Systems", "description": "Native performance, cross-platform reach. iOS and Android solutions with unified codebases." }, "cloud": { "code_id": "SYS.CLD.552", "title": "Cloud Infrastructure", "description": "Resilient DevOps pipelines. High-availability server management and automated deployments." } },
  "design": { "sector_label": "Sector 02", "title": "Graphic Design", "branding": { "code_id": "DSN.BRN.102", "title": "Branding", "description": "Visual identities that command attention. Cohesive brand systems and high-fidelity assets." }, "uiux": { "code_id": "DSN.UUX.408", "title": "UI/UX Design", "description": "User-centric interfaces with precision flow. Wireframing, prototyping, and user testing." }, "motion": { "code_id": "DSN.MOT.773", "title": "Motion Graphics", "description": "Dynamic storytelling through animation. Micro-interactions and product demo motion paths." } }
}
```

```json
// i18n/locales/en/work-listing.json
{
  "hero": { "title_prefix": "Our", "title_accent": "Work", "subtitle": "Precision-engineered digital products and brand identities for high-growth companies." },
  "filters": { "all": "All", "development": "Development", "design": "Design", "saas": "SaaS", "branding": "Branding" },
  "projects": { "lumina": { "title": "Lumina CRM", "subtitle": "Next-gen enterprise resource planning" }, "nexus": { "title": "Nexus Fintech App", "subtitle": "Secure cross-border digital payments" }, "aether": { "title": "Aether Identity", "subtitle": "Visual system for tech ventures" }, "oryx": { "title": "Oryx Dashboard", "subtitle": "Real-time analytical engine" } },
  "cta": { "title": "Have a project in mind?", "subtitle": "Let's build something extraordinary together." }
}
```

```json
// i18n/locales/en/contact.json
{
  "header": "Communication Node",
  "hero": { "title": "Let's build the future.", "subtitle": "Reach out to our engineering and design teams for technical collaboration." },
  "form": { "section_label": "System Inputs", "name_label": "Operator Name", "name_placeholder": "Enter full name", "email_label": "Communication Channel", "email_placeholder": "email@factory.digital", "classification_label": "Project Classification", "message_label": "Transmission Data", "message_placeholder": "Describe your objective...", "submit": "Initiate Contact" },
  "classifications": { "prototyping": "Rapid Prototyping", "architecture": "System Architecture", "uiux": "UI/UX Engineering", "hardware": "Hardware Integration" },
  "location": { "section_label": "Physical Node", "hq_label": "Headquarters", "address": "101 Innovation Way, Tech District" },
  "channels": { "section_label": "Direct Channels", "tech_support": { "title": "Tech Support", "description": "Direct line to our technical engineering squad." }, "press": { "title": "Press Relations", "description": "Media kits and official factory statements." } },
  "social": { "section_label": "Social Frequency" }
}
```

---

## 9. Bottom Nav Config

| Route | Items | Active |
|---|---|---|
| `/services` | Home, Services, Work, Config | Services |
| `/work` | Work, Services, About, Contact | Work |
| `/contact` | Nodes, Projects, Contact, Settings | Contact |
| `/services/[slug]` | Home, Services, Projects, Contact | Services |
| `/work/[slug]` | *(none)* | — |