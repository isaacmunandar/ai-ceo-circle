# Design

> Source of truth for AI CEO Circle visual decisions. Read before touching UI.

## Aesthetic direction

Executive editorial: cinematic Jakarta imagery, refined serif display type, and restrained lava-orange accents on a deep navy base.

## Dials

- Design variance: 8 / 10
- Motion intensity: 6 / 10
- Visual density: 4 / 10

## Type stack

- Display: Instrument Serif, including italic
- Body: Inter
- Mono: JetBrains Mono
- Loaded with `next/font/google` in `app/layout.jsx`

## Color tokens

- Background: `#070e1c`
- Foreground: `#efe7d6`
- Soft foreground: `#d8cdb5`
- Accent: `#ff5d2a` / `#ff7a3d`
- Secondary accent: `#c9920a`
- Borders: warm cream at 10-20% opacity

Avoid pure black or white and purple-blue gradients.

## Motion

- Library: Framer Motion 11
- Default easing: `cubic-bezier(0.16, 1, 0.3, 1)`
- Hero reveal: opacity and vertical translate only
- Hero background: 24-second scale and pan loop; disable it with `prefers-reduced-motion`

## Layout

- Container: `max-w-7xl` with `px-6 md:px-10`
- Hero: editorial left-aligned headline spanning approximately 75% of the grid; skyline remains visible to the right
- Sections: `py-16 md:py-24` unless a denser section calls for less
- Mobile: single-column flow with no horizontal overflow
- Full viewport sections: `min-h-[100dvh]`

## Project-specific rules

- No standalone hero card or secondary hero portrait over the skyline
- Use the existing lava-orange accent sparingly
- Use familiar icons from Lucide for icon-only controls
- Maintain 44px minimum touch targets

## Last updated

2026-07-13: Reworked the hero into an editorial skyline composition, added a reduced-motion-aware background loop, and documented project tokens.
