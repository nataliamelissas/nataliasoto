# nataliasoto.com

Personal portfolio for Natalia Soto. Public repo, deployed to GitHub Pages at nataliasoto.com.

## Stack
React 18 + TypeScript + Vite + Tailwind. No backend. No secrets — repo is public.

## Run
- `npm run dev` — local dev server
- `npm run build` — typecheck + Vite build
- `npm run lint` — ESLint (zero warnings policy)
- `npm run deploy` — `gh-pages -d dist` (publishes to nataliasoto.com)

Vite `base` is `./nataliasoto` for GitHub Pages routing — don't change without re-checking the deploy.

## Structure
- `src/pages/HomePage.tsx` — single-page site; all sections live here (Hero → Projects → Writing → Stack → Experience → Education → Contact).
- `src/constants/content.ts` — single source of truth for profile copy, projects, writing, skills, jobs, education, social URLs. Edit content here, not inline in components.
- `src/components/` — `Navbar`, `SectionHeader`, `SectionDivider`, `ProjectCard`, `WritingCard`, `SkillTag`, `Reveal`, `ExperienceTimeline`, `InlineLinkedText`, `ContactBanner`, `ProfileImage`.
- `src/hooks/useReveal.ts`, `src/hooks/useScrollSpy.ts` — zero-dep IntersectionObserver helpers powering scroll-triggered animations and the nav active-link state.
- `public/resume.pdf` — current ATS resume, served by the Stack-section download button.

## Conventions
- Palette: Butter & Ink — `ivory-100` background, `white` surfaces, `butter-400` primary, `rose-400` secondary, `ink-900` text. Tokens defined in `tailwind.config.js`. Don't introduce new accent colors.
- Fonts: `Inter` for body, `Fraunces` (display serif) for headlines and the italic "Soto"/section-title accents. Loaded via Google Fonts in `index.html`.
- No hardcoded strings used in more than one place — put them in `content.ts` or a constant module.
- No secrets, no API keys, no `.env` files committed. Contact is `mailto:` / `tel:` only.
- Section IDs come from `SECTION_IDS` in `content.ts`; navbar scroll-spy uses the same source.
