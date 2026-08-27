# ApexDev landing — design system and developer notes

This document describes the visual language of the Figma-generated “cyber-luxe” portfolio and how it is implemented in the Next.js app. Use it when extending sections or handing off to another developer.

## Design philosophy

- **Dark-first canvas**: Deep slate (`#0F172A`) reads as premium and lets neon accents carry hierarchy without clutter.
- **Glass + grain**: Frosted panels (`bg-white/5`, `backdrop-blur-xl`, `border-white/10`) sit on a subtle film-grain overlay (global fixed layer + section-level variants) to avoid a flat “template” look.
- **Dual accent system**: Cyan (`#00F0FF`) and acid lime (`#CCFF00`) alternate for emphasis—cyan for tech/trust signals, lime for energy and secondary highlights. Gradients between the two signal primary CTAs.
- **Motion as polish, not novelty**: Entry uses `motion` (Motion for React) for nav drop-in, hero carousel transitions, scroll-reveal on sections, hover lift on cards, and pulsing timeline nodes—matching the original Vite SPA behavior.

## Typography and spacing

The bundled `guidelines/Guidelines.md` in the Figma export is a placeholder template without project-specific rules. Typography is taken from the implemented UI:

| Role | Treatment |
|------|-----------|
| Display / hero | `text-7xl`–`text-8xl`, `font-black`, `tracking-tight`, `leading-none` |
| Section titles | `text-5xl`, `font-black`, split white + accent word |
| Subtitles / supporting | `text-xl`, `text-gray-400`, `max-w-2xl` where a measure is set |
| Body in cards | `text-lg` with `leading-relaxed` for comfortable reading |
| UI chrome (nav, labels) | `text-sm` / `text-base`, `font-medium` or `font-bold` |

**Font**: [Inter](https://fonts.google.com/specimen/Inter) via `next/font/google` (weights 400–900). This matches the original `theme.css` stack intent.

**Character spacing**: Headlines use `tracking-tight` where specified in the source; do not loosen tracking on large display type without a design reason.

**Text wrap**: Prefer natural wrapping with `max-w-*` on paragraphs rather than forcing single lines (`whitespace-nowrap` is not used on body copy). Long labels in stats cards should wrap; keep `leading-relaxed` on multi-line blocks.

## Color tokens

Semantic names live in `tailwind.config.ts` (and CSS variables in `globals.css` for base theming):

| Token | Hex | Usage |
|-------|-----|--------|
| `deep-slate` | `#0F172A` | Page background |
| `surface-card` | `#1E293B` | Nav glass base |
| `cyber-cyan` | `#00F0FF` | Primary accent, links, icons |
| `acid-lime` | `#CCFF00` | Secondary accent, alternate headings |
| `cyber-cyan-dark` | `#00B8C9` | Gradient stops (hero button) |
| `acid-lime-dark` | `#A3CC00` | Scrollbar hover gradient |

Use Tailwind classes (`bg-deep-slate`, `text-cyber-cyan`, etc.) instead of raw hex in new code. Inline `style={{ color }}` is retained where the original data arrays drive dynamic accent colors (stats, services, timeline).

## Layout and structure

- Single-page anchors: `#work`, `#services`, `#process`, `#contact` (same as the Vite app).
- Max content width: `max-w-7xl` (most sections), `max-w-5xl` (timeline), `max-w-4xl` (contact), `max-w-6xl` (hero).
- **Featured projects**: MacBook-style frame is pure CSS (gradients + notch); images use `next/image` with remote patterns for `images.unsplash.com`. The “next project” peek is `hidden` below `lg` to avoid cramped layout when the side card would clip.

## Technical stack and constraints

- **Framework**: Next.js 16 (App Router), deployed cleanly on Vercel.
- **Styling**: Tailwind CSS v4 with `@config` pointing at `tailwind.config.ts` for extended palette and the contact-section radial utility `bg-gradient-radial-contact`.
- **Animation**: `motion` package (`motion/react`)—same API as in the Figma export.
- **Icons**: `lucide-react` only in this landing (the original sections did not use MUI; the full `figma-modern-ui` repo includes MUI for unused boilerplate).
- **Client components**: Any file using `useState`, `useEffect`, or `motion` is marked `"use client"`. The home `page.tsx` stays a server component that composes sections.

## Extending the site

- Prefer new sections as `src/components/sections/*.tsx` with `"use client"` if they animate or use form state.
- Wire new remote image hosts in `next.config.ts` under `images.remotePatterns`.
- Keep the global grain overlay in `page.tsx` unless a route should opt out (then move the overlay into a shared layout).

## Figma source mapping

| Next.js | Original Vite |
|---------|----------------|
| `src/app/page.tsx` | `src/app/App.tsx` |
| `src/components/sections/*` | `src/app/components/*.tsx` |

The large `src/app/components/ui/*` tree from the Figma export is **not** copied; it was unused by the landing page.
