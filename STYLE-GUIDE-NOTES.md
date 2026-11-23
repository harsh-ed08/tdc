# Style guide implementation

Source: Figma `soELEij3AnVysPecNrJM1s`, frame `174:547` (1440px desktop).

- New variables: `--brand-400: #f17608` for guide chrome; `--heading-family: Fraunces`, `--label-family: IBM Plex Mono`, `--guide-family: Inter`, and `--primary-light: 300`. Existing light, dark, and brand swatches were updated to the Figma colors. The primary family is Switzer. Heading families and weights now use Fraunces Light. Body large has a 24px desktop maximum.
- New components: `section/StyleGuide.astro` composes Section, Heading, Paragraph, and Button into the guide's specimen rows, paired theme samples, and spacing diagrams; existing components did not provide that complete composition.
- Guesses: Inter substitutes for unavailable Articulat CF in the section titles. Responsive layouts use Lumos's 64rem and 30rem breakpoints. Existing fluid spacing minimums and theme hover/focus derivations are retained. Demo links scroll to typography. The missing H5 specimen is not invented.
- Snapped: none. Spacing of 16, 32, 40, 48, 64, 80, 112, and 160px matches existing Lumos desktop tokens exactly.
- Contrast: #fe6730 on #fbfaed is 2.78:1, below the 3:1 large-text threshold; retained from the design.
- Still open: Figma specimen labels disagree with linked type tokens; page margins are 48px while the margin diagram is 64px. Pending choice: use linked tokens and 48px page margins, or visible labels and 64px margins. Heading size changes are not applied pending that answer. Existing Lumos sizes remain in the preview. The page currently labels samples by their actual Lumos variants. Browser visual verification is blocked because the browser access host is unavailable.

Validation: Astro check reports zero errors, warnings, or hints. Production build succeeds and includes `/style-guide/index.html`. The local `/style-guide` route returns HTTP 200. Both SVGs and all five font files are nonempty and stored locally.
