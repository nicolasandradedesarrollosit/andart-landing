# Digital Factory - Landing Site

A modern landing site for a software development & graphic design studio, built with industrial precision.

## Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Styling:** Tailwind CSS v4 + centralized design system
- **Icons:** lucide-react
- **i18n:** react-i18next / next-i18next
- **UI Components:** shadcn/ui (Radix primitives)
- **Fonts:** Space Grotesk (display/body), JetBrains Mono (code)
- **Language:** TypeScript

## Project Structure

```
.
├── app/                      # Next.js App Router pages
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Landing page
├── features/                 # Feature modules (page compositions)
├── components/               # Shared reusable components
│   ├── ui/                   # shadcn/ui components
│   ├── layout/               # Header, Footer, etc.
│   ├── display/              # ServiceCard, ProjectCard, etc.
│   └── forms/                # Form-specific components
├── shared/                   # Cross-cutting utilities
│   ├── constants/            # Routes, nav items, metadata
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── types/                # TypeScript types
│   └── providers/            # React providers
├── i18n/                     # Internationalization
│   └── locales/              # Translation files (en, es)
├── styles/
│   └── index.css             # ★ Centralized design system
└── public/                   # Static assets
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

### Build for Production

```bash
npm run build
npm start
```

## Design System

All design tokens and CSS classes are centralized in `styles/index.css`:

- **Color Tokens:** Primary (#0593ff), backgrounds, text colors
- **Component Classes:** `.card-base`, `.btn-primary`, `.section-header`, etc.
- **Utility Classes:** `.bg-grid`, `.gradient-text`, `.animate-glow-pulse`
- **Dark Mode:** Full dark mode support via `.dark` class

## Architecture Guidelines

📖 **Read `CLAUDE.md` for AI agent instructions**
📖 **Read `CODE.md` for complete architecture reference**

### Key Rules

1. **No file over 100 lines** - Split files when approaching this limit
2. **CSS lives in `styles/index.css`** - No CSS modules or inline styles
3. **Use lucide-react for icons** - No Material UI
4. **All text through i18n** - No hardcoded strings
5. **Thin app pages** - Logic lives in features/

## Development Workflow

1. Pages (`app/`) import feature modules
2. Features (`features/`) compose sections
3. Sections use shared components (`components/`)
4. Components use design system classes (`styles/index.css`)
5. All text strings via `useTranslation()`

## Current Status

✅ Project initialized
✅ Folder structure created
✅ Design system configured
✅ Core utilities set up
✅ Development server running

### Next Steps

- Implement landing page sections
- Create shared components (ServiceCard, ProjectCard, etc.)
- Add i18n translations
- Build remaining pages (Services, Work, Contact)
- Install and configure shadcn/ui components

## Color Palette

- **Primary:** #0593ff (Cobalt Blue)
- **Background (Dark):** #0b0b0b
- **Surface (Dark):** #151515
- **Text Primary:** #f1f5f9
- **Text Secondary:** #94a3b8

## License

Private - All rights reserved
