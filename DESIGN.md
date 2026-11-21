# DESIGN.md: Sofyan Eka Febriyanto portfolio

## World

Gold is the material, not the paint. Sofyan trades XAUUSD, so gold is his
instrument before it is his brand color. The page treats the gold market as
subject matter: a price-chart line under the hero, a market ticker strip, an
assay hallmark (`Au · 79 · 196.97`) in the header and footer. The work is a
ledger, not a card grid: rows divided by hairlines, ranked, each with its
own link label. No cards, no side-tab accent, no eyebrow label above a
heading, no gradient text.

## Tokens

- Ground `--bg: #0d1117`, surface `--surface: #161b22`, border `--border: #30363d`
- Text `--text: #e6edf3`, muted `--muted: #8b949e`
- Gold `--gold: #e8b84b`, gold-dim `--gold-dim: #b78a1f` (used for hairlines
  and the button hover, never as body text on gold)
- All text pairs pass WCAG AA: body 16.0:1, muted 6.2:1, gold on bg 10.3:1,
  dark text on gold 9.4:1.

## Type

- Display and body: IBM Plex Sans 400/500/600/700.
- Data and labels: JetBrains Mono 400/500/600 (slogan, meta lines, ticker,
  hallmark, code block, footer mark).
- Both faces are self-hosted as woff2 files under `fonts/` (OFL, from
  Google Fonts). No external requests anywhere on the page; if a font file
  fails, the system stacks take over.
- Display max ~5.25rem, tracking floor -0.03em, headings balanced.

## Components

- **Header:** sticky, hairline bottom, wordmark + `Au 79` hallmark chip,
  four section links. Mobile: a labeled `Menu` button, not bare spans.
- **Hero:** name at display scale, gold mono slogan, one lead line, one
  primary action (`See the work`) plus GitHub as a plain text link. Right
  column: 3:4 head-and-shoulders portrait in a 1px gold-dim frame, with a
  fallback initial if the image fails. A thin gold chart line (inline SVG,
  motif only, no numbers) crosses the hero base.
- **Ticker:** full-width strip, gold mono uppercase terms (XAUUSD, the five
  project names, the slogan), scrolling once every 36s. The page's single
  authored motion moment. Pauses on hover, stops under
  `prefers-reduced-motion`, `aria-hidden` because every term also appears
  as real content elsewhere.
- **Work ledger:** Kantor AI featured with a real screenshot of its landing
  page; Noir, Content Engine, Kenfa, Trade Journal as hairline rows.
  Links are labeled per project (`Kantor AI on GitHub`); rows without a
  repo say `No public repo` in muted mono instead of pretending to link.
  The Content Engine row carries a real pipeline excerpt from its README.
- **Stack:** three hairline lines (label + mono tags), not three cards.
- **Contact:** one bold line plus two gold links.
- **Footer:** the hallmark `Au · 79 · 196.97` and one closing line. No
  build note.

## States and resilience

- Skip link (gold, appears on focus), `:focus-visible` gold outline,
  `scroll-margin-top` under the sticky header, gold `::selection`,
  themed scrollbar.
- No JavaScript is needed for the page to read: the only script is the
  mobile menu toggle.
- If `style.css` fails, the page is plain HTML; if the portrait fails, the
  gold initial shows.

## Provenance of shipping rasters

- `images/profile.jpg` (480x640): head-and-shoulders crop of Sofyan's own
  photo, `heroImage.jpeg` from this repo's history (commit `674a519`).
- `images/kantor-ai.jpg` (1280x620): screenshot of the Kantor AI landing
  page (`SofyanEkaFebriyanto/kantor-ai-landing`, `index.html`), rendered
  locally 21 Nov 2026 with its own fonts.
- `fonts/*.woff2`: IBM Plex Sans and JetBrains Mono, latin subsets,
  downloaded from Google Fonts (SIL OFL).

## Dials

Reading this as: a personal portfolio for a developer and gold trader, in a gold-ledger visual language, dial ENERGY 2 / RHYTHM 2 / MOTION 2.

- ENERGY 2: the page says hello with a display name and a moving ticker, then gets out of the way.
- RHYTHM 2: sections vary (hero grid, featured image, ledger rows, hairline stack lines, one bold contact line) without becoming asymmetric for its own sake.
- MOTION 2: one ambient motion (the ticker) plus hover and press feedback. No scroll-reveal, no parallax, no endless pulses.

## Apple polish (21 Nov 2026)

- Translucent header: the sticky header is a material (blur 20px, saturate 180%, 0.72 opacity) so content scrolls under it instead of disappearing behind an opaque bar. Reduced-transparency users get a solid header.
- Press feedback: the primary button scales to 0.97 on pointer-down (100ms), so the press answers instantly instead of waiting for release.
- Row hover: ledger rows warm to a surface tint on hover, so the list answers the pointer the way a table cell does.
- Scroll-spy: the nav marks the section in view with gold, so the page always answers where you are.
- Portrait depth: the portrait carries a neutral offset shadow (no gold glow), so it sits above the page instead of floating in it.
- Menu animation: the mobile menu drops from its trigger (top right, 200ms exponential ease-out) and returns the same way, instead of appearing and disappearing.
- Type: optical sizing on, tabular numerals on data (hallmark, meta, footer mark).

## Judged detector findings (21 Nov 2026)

After the fix pass, `impeccable detect` reports only the ticker: two
`all-caps-body` warnings (the ticker spans are 109 chars of uppercase mono)
and one `marquee` warning. Both are deliberate: the ticker is a market-tape
label strip, not a readable passage, and it is the page's one motion
device, paused on hover, stopped for reduced motion, hidden from assistive
tech, and fully redundant with real content. Two earlier warnings were
fixed, not judged: a gold-on-gold skip-link hover state, and a gold-tinted
button shadow replaced with a neutral elevation shadow.
