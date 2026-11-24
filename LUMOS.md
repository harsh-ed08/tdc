# Lumos for Astro — project conventions

This project uses Astro components and plain CSS, not Lumos for Webflow.
The implementation source of truth is `src/styles/base.css` (tokens and themes),
`src/styles/patterns.css` (shared patterns), `src/styles/utilities.css`, and
the rendered `/style-guide` page.

## Styling

- Keep the cascade order `base, patterns, components, utilities`. Component CSS
  belongs in `@layer components`; scope selectors under the component class.
- Use existing color, font-family, font-weight, spacing, border, focus, and motion
  variables. Add a named token to `base.css` when a new reusable design value is
  needed, and show it in the style guide where useful.
- Use `Heading`, `Paragraph`, `Eyebrow`, `Img`, and `Button` where their APIs fit.
  Use `Section`/`Container` for standard stacked layouts. The custom editorial
  homepage uses `layout_frame` instead: it preserves the supplied grid without
  inheriting the standard container's flex layout and child-margin resets.
- Use `layout_rules` for decorative grid lines. It does not intercept input.
  Its parent establishes a stacking context so lines stay within their section.
- Use `theme-light`, `theme-dark`, and semantic `--background`/`--text` variables
  for theme-aware surfaces. Explicit palette variables are appropriate for
  fixed artwork treatments and brand accents.
- Keep existing component names (`story_wrap`, `story_year`, etc.) for custom
  layouts; do not invent Webflow utility conventions or add Tailwind.

## Intentional custom geometry

Image aspect ratios, artwork sizes, grid proportions, viewport-based section
heights, breakpoints, and animation offsets remain component-specific. Do not
replace these with unrelated spacing or heading tokens just to remove numbers.
`Heading variant="inherit"` supports reference-specific display typography.
General spacing follows `--space-*`; `--timeline-year-gap` intentionally keeps
the requested 40px gap at every breakpoint. FinLender's blue is a partner color,
not an additional site brand color.

## Motion and validation

Use `--hover-*` and `--motion-*` for shared CSS transitions. GSAP's timing values
are in seconds; keep them coordinated with corresponding CSS motion tokens.
Preserve reduced-motion fallbacks, keyboard access, and animation cleanup.
The timeline uses native CSS sticky positioning with scroll-driven GSAP motion
on touch and hybrid devices. Do not add document scroll locking or competing
touch handlers to that mode. Use stable viewport units; short landscape layouts
and reduced motion use the accessible native horizontal scroller. Mouse-only
desktop layouts retain gesture capture. Keep both paths functional when editing.
After changes run `npm run check` and `npm run build`, then inspect the homepage
and style guide at desktop and mobile widths. Keep the demo's noindex controls.
