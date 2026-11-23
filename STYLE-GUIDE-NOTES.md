# Style guide implementation

Source: Figma `soELEij3AnVysPecNrJM1s`, frame `174:547` (1440px desktop).

- New variables: `--brand-400: #f17608` for guide chrome; `--heading-family: Fraunces`, `--label-family: IBM Plex Mono`, `--guide-family: Inter`, and `--primary-light: 300`. Existing light, dark, and brand swatches were updated to the Figma colors. The primary family is Switzer. Heading families and weights now use Fraunces Light. Body large has a 24px desktop maximum.
- New components: `section/StyleGuide.astro` composes Section, Heading, Paragraph, and Button into the guide's specimen rows, paired theme samples, and spacing diagrams; existing components did not provide that complete composition.
- Guesses: Inter substitutes for unavailable Articulat CF in the section titles. Responsive layouts use Lumos's 64rem and 30rem breakpoints. Existing fluid spacing minimums and theme hover/focus derivations are retained. Demo links scroll to typography. The missing H5 specimen is not invented.
- Snapped: none. Spacing of 16, 32, 40, 48, 64, 80, 112, and 160px matches existing Lumos desktop tokens exactly.
- Contrast: #fe6730 on #fbfaed is 2.78:1, below the 3:1 large-text threshold; retained from the design.
- Still open: Figma specimen labels disagree with linked type tokens; page margins are 48px while the margin diagram is 64px. Pending choice: use linked tokens and 48px page margins, or visible labels and 64px margins. Heading size changes are not applied pending that answer. Existing Lumos sizes remain in the preview. The page currently labels samples by their actual Lumos variants. Browser visual verification is blocked because the browser access host is unavailable.

Validation: Astro check reports zero errors, warnings, or hints. Production build succeeds and includes `/style-guide/index.html`. The local `/style-guide` route returns HTTP 200. Both SVGs and all five font files are nonempty and stored locally.

## Global header � Figma 191:333

The shared Nav now uses the Figma logo layers, chevrons, divider, and contact arrow, downloaded locally to public/header. It appears on all four HTML routes, including the standalone style guide. Desktop measurements use a 64px bar, 64px outer margins at 1440px, an 88px logo, 16px Fraunces Light labels, 16px IBM Plex Mono Medium contact text, and 0.5px cream rules.

- New variables: none; existing --nav-height is now 4rem.
- New components: none; Dropdown accepts an optional icon slot to preserve the Figma chevron.
- Guesses: the desktop-only header collapses below the existing 64rem breakpoint; its 50% black overlay sits over dark brown so it remains legible on light pages. Existing focus and hover conventions are retained.
- Snapped: none. Header-specific fixed measurements remain scoped to Nav rather than changing the unresolved style-guide scales.
- Contrast: cream text against the dark header is high contrast; the style-guide orange contrast issue above is unchanged.
- Still open: submenu items and the contact destination were not supplied. src/data/navigation.ts centralizes these; controls remain visibly present but disabled until destinations are supplied. The mobile menu itself supports toggle, Escape, outside click, and breakpoint reset.

## Responsive footer � Figma 191:484

The shared Footer now renders on all four HTML routes. Its main and lower rows use a 2fr / 3fr / 5fr grid; the final track holds industries and partner/resources sections. At 1440px the content is 1312px wide with 64px margins and 80px vertical padding. Rules are 0.03125rem (0.5px) dark brown at 20% opacity, including the full-height grid guides. Figma's structural line artwork is implemented as CSS borders as requested, so it follows responsive content height.

- New variables: --neutral-500: #878787, the explicit Figma Neutral N2 label color.
- New components: none. Existing Footer, Heading, and Paragraph are reused; link content is centralized in src/data/footer.ts.
- Guesses: border opacity is 20% because the request specifies opacity without a percentage. Below 64rem the footer uses two columns; below 48rem it stacks in reading order. Copyright uses the current build year. These responsive layouts are inferred from the supplied desktop design.
- Snapped: none; 8/16/24/64/80px measurements use matching existing tokens or scoped fixed asset dimensions.
- Contrast: #878787 on #fbfaed is approximately 3.4:1, below 4.5:1 for small text. Preserved from Figma.
- Still open: destination pages and social account URLs are not supplied. Unconfigured items render as noninteractive text, without broken or guessed links. Contact uses the supplied mailto and tel destinations.
Footer validation: Astro check passed across 52 files with zero errors, warnings, or hints; production build passed. All four built HTML routes contain one footer and the correct email/telephone links. Live preview verified on /, /style-guide, and /example-components; the /404 request closed unexpectedly. Browser preview timed out, so rendered geometry and responsive visual comparison remain unverified.

## Responsive navigation and footer — Figma 196:2270

Measured the 375px mobile frames (196:1943, 196:1588, 196:1802/1834) and the 1312px desktop megamenu panels (196:1281, 196:1449, 196:1535). This supersedes the earlier inferred mobile layouts and empty header menus.

- New variables: none. Shared brand, typeface, and neutral tokens are reused. Component measurements use rem conversions.
- New components: NavPromo composes the existing Heading with the three supplied promotional layouts; existing dropdowns cannot express the full-width desktop panel/mobile accordion combination, so shared Nav owns that behavior.
- Guesses: switch navigation at the existing 64rem breakpoint, footer at 48rem; use the compact mobile promo variant. Border opacity remains 20% as previously assumed. Focus rings, outside-click closing, Escape, focus containment, body scroll locking, and breakpoint reset supply interaction states absent in the drawings.
- Snapped: none. Mobile header is 48px, horizontal margins 32px, menu/footer padding 48px, and footer labels/links 14px. Desktop main tracks remain 2fr / 3fr / 5fr. Structural rules remain 0.5px.
- Contrast: muted gray labels on cream retain the previously noted 3.4:1 ratio.
- Still open: page/social/promo URLs are unspecified; those items remain noninteractive. Talk to Us uses the contact email already supplied in the footer. The six repeated "Advisory with Capital" entries are preserved from Figma.
- Verification: Astro check passed on 53 files with zero errors, warnings, or hints. Browser access host is unavailable, so screenshot comparison and live interaction verification could not be completed.
Final validation: production build passed for all four pages. Built HTML contains one shared header/footer and three megamenu panels per page; referenced header, footer, and navigation assets exist and are nonempty.

## Businesses megamenu screenshot revision

Implemented the user-supplied updated screenshot after Figma MCP reached its plan limit. Added Asset Monetisation & Sale-Leaseback Credit; replaced the previous Special Situation list with Financing & Refinancing, Restructuring & Turnaround, and Distressed Investments & Strategic Transactions. Shared business content also updates the mobile accordion.

Desktop changes: dark category headings with arrows, gray unadorned links, aligned 2fr/3fr/5fr column guides, a shorter content-driven panel, and a promo image occupying exactly the 3fr track. Company, Careers, and footer styles are unchanged. The blue Figma selection outline is editor UI and is not implemented.

- New variables/components: none.
- Guesses: measurements inferred from the supplied scaled screenshot; the final 5fr track splits approximately 2.44fr/2.56fr. Existing 0.5px rules at 20% opacity retained.
- Snapped: none.
- Contrast: gray link text retains the design's muted gray on cream.
- Still open: link destinations and live browser visual verification remain unavailable.

## Navigation interaction refinement

Desktop megamenus open on fine-pointer hover and retain click/keyboard operation. Moving into a panel cancels the 200ms close delay; leaving closes the panel unless focus remains inside. Outside clicks (including the dimmed backdrop and unused header area), Escape, and breakpoint changes dismiss the menu. Desktop panels are centered within the same maximum 82rem container and page gutters as the header; mobile menus remain full-width.

Added fades/motion for panels and backdrop, mobile opening fades, link color/arrow transitions, logo opacity, and footer focus/hover effects. Existing reduced-motion rules apply. Footer destination URLs remain pending user input; no nonexistent routes or social profiles were invented.

## Megamenu link and spacing fixes

All submenu entries, desktop business category headings, panel titles, and promotional CTAs now use real anchors with href="#" per the user's instruction. Mobile business headings remain accordion buttons. Added link-specific hover/focus underline, orange color, and arrow transitions. Panel title icons now explicitly occupy 16px with no flex shrinking, preventing the global img width:100% rule from enlarging them. Category heading icons remain 10.508px. Panel titles align to the top of their grid tracks, category links use 16px spacing, and promo headings/labels reset incidental block margins. Company/Careers promo content gains a right gutter.

## Megamenu styling reference — latest supplied screenshot

Aligned the desktop header and contained panels to a 90rem maximum (1440px in the supplied 1914px screenshot). The Businesses panel retains the 2fr/3fr/5fr structure, splits its last track equally, stretches category dividers to a common height, and uses compact link rows. Updated desktop header typography, brown backdrop gradient, Special Situations wording, and Investment Banking item order. The wide promo now uses INSIGHTS, a 16:9 image, and a 24px headline capped at 432px. These measurements are inferred from the supplied screenshot; browser visual comparison remains unavailable.

## Company and Careers screenshot styling

Applied the supplied Company reference to both non-Businesses desktop panels: full-height grid guides, a middle-column divider, compact gray link rows without per-link arrows, and a right-column promo inset with a 24px image/text gap. Both promos use INSIGHTS, a 14px headline without the repeated introductory label, and a 234px image. Panel title arrows are omitted as shown. Existing mobile accordion layout, placeholder links, hover behavior, and reduced-motion support are preserved. Screenshot dimensions are inferred; live browser comparison remains unavailable.

## Footer screenshot refinement

Matched the latest desktop reference with a 90rem container, 2fr/3fr/5fr guides, a 96px-wide logo inset 16px, and a 72/28 split within the final track. Added local column rules, adjusted resources and lower-row spacing, reduced social icons, and added chevrons to the existing email/telephone links. Removed New Fund Alerts from the partner list and updated the copyright wording. Existing placeholder links, mobile layout, hover/focus treatment, and reduced-motion handling remain in place. Measurements are inferred from the supplied screenshot; browser visual comparison remains unavailable.

## Motion reference — supplied MP4

Inspected the 14.78-second, 1280x720 video locally at approximately 20 fps, then sampled the button and menu sequences at 50–100ms intervals. CTA text rolls upward on pointer entry and exit while the color changes; menu content is revealed downward from the header and retracts upward, with the previous panel closing before the next opens.

Added shared RollLabel for written Buttons, Talk to Us, and Know More. Duplicate visual text is aria-hidden; focus/blur receive the same effect, touch does not trigger hover animation, and reduced-motion preference cancels Web Animations. CTA inline SVGs keep the orange oval stationary and roll only the dark arrow within an oval clip, synchronized with the text and preserving original colors. CTA hit areas fit their content; the header border belongs to the grid rather than the contact link. Desktop panels use a 550ms clipping reveal and 280ms retract; switching waits for the retract. The backdrop fades independently. Closing panels become inert immediately, and pending openings cancel on outside click, Escape, pointer departure, or breakpoint/preference changes. Durations/easing are approximations from sampled frames, not source Webflow animation values.

Validation: focused controller checks pass for hover reveal, ordered switching, immediate inert state, cancellation of queued openings, Escape focus return, backdrop dismissal, reduced-motion switching, and mobile scroll restoration. Temporary extraction tools and generated frames live under ignored .tmp/ and are not runtime dependencies.


## Footer link motion ? second supplied MP4

Footer text links retain their original color. A thin underline grows from the left beneath the label and retracts on exit, while the chevron shifts right. Both use a 550ms eased transition estimated from the recording. Keyboard focus receives the same treatment; reduced motion disables transitions.

Footer hover refinement: use a solid dark 1px pseudo-element underline 4px below each label, including heading actions and contact links. Social links now share the underline, and the design-partner credit is a placeholder link with the same effect.

Homepage hero: supplied 2048x1152 asset replaces scaffold hero. Desktop reference is 1440x810, 56px Fraunces heading, 80px bottom spacing, 16px inset from first 2fr divider, and subtle 0.5px dark grid rules. Existing Heading and Img components reused; no global tokens or new components. Mobile wrapping, height and crop are inferred from the desktop-only reference.

Shared section alignment: header, hero, footer and desktop megamenu now use common layout gutter, 90rem maximum width and responsive grid columns. Decorative rules use one shared pattern, with three desktop columns, two tablet columns and outer mobile rules. Footer tablet bottom-column gaps no longer shift the center rule. Verified mobile and desktop previews; hero retains 100svh height.
