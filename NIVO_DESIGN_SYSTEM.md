# Nivo Design System v1

## 1. Purpose

Nivo is a collaboration platform for special education teachers and staff. It must serve busy professionals doing consequential, information-rich work while remaining credible to school and district decision-makers.

The design system exists so humans and AI can produce consistent Nivo product interfaces, websites, presentations, and marketing materials without reinterpreting the brand each time.

This document defines the approved visual and verbal foundations. It does not prescribe product decisions such as which features appear, what information is hidden, or how workflows are prioritized.

## 2. Brand idea

Nivo should feel like a mature, brilliant colleague: calm, capable, trustworthy, approachable, and genuinely useful.

**Core principle:** Professional first. Human always. Personality in small, intentional doses.

**Balance:**

- 80% quiet confidence
- 20% thoughtful warmth
- 80% calm expert
- 20% supportive colleague

**Design promise:** Complex work should never look visually chaotic.

## 3. Design principles

### Clarity before decoration

Establish hierarchy with typography, spacing, grouping, and restrained contrast before adding graphic elements.

### Warmth through restraint

Use greige surfaces, softened corners, humane language, and occasional pastel accents. Do not add warmth through childish illustration, forced friendliness, or visual noise.

### Product first

Real product UI, clear messaging, and useful information are the strongest expressions of Nivo. Illustration is supporting material, not the hero.

### Precision softened at the edges

Layouts should be aligned and systematic. Balanced rounding, generous space, and small color moments prevent the system from becoming cold.

### Depth without overwhelm

Make important information easy to understand while keeping deeper information accessible. Do not confuse simplicity with removing necessary capability.

## 4. Hard boundaries

Nivo must not feel like:

- Legacy education software
- Generic corporate enterprise software
- A futuristic developer tool
- An AI gimmick with neon gradients, glowing orbs, or robot imagery
- A children's application or consumer toy
- Clinical or medical software
- An overwhelming productivity cockpit
- A character- or mascot-led brand

Avoid literal puzzle pieces. The mark communicates separate parts forming a coherent whole without using jigsaw imagery.

## 5. Logo system

### Locked master

The five-path geometry in `brand/logo/nivo-mark-master.svg` is final. Do not redraw, smooth, simplify, trace, or reinterpret it. Scaling and approved fill changes are allowed; coordinate changes are not.

The master mark contains:

- Lavender top-left form: `#A285E8`
- Blue bottom-left form: `#6A9BF3`
- Mint diagonal: `#A0E1C6`
- Mint top-right form: `#8EDDBF`
- Warm yellow bottom-right form: `#F2C77F`

### Wordmark

The lowercase `nivo` wordmark is custom locked artwork derived from Avenir Next Demi Bold with tight tracking. It is part of the logo and is not the interface typeface. Always use the outlined SVG asset; never type the wordmark manually.

### Approved configurations

- Mark only
- Horizontal mark and wordmark
- Stacked mark and wordmark
- Full-color mark with navy wordmark on light backgrounds
- Full-color mark with warm-white wordmark on dark backgrounds
- One-color navy
- One-color warm white
- Light and dark app icons
- Mark-only favicon

### Clear space

Maintain clear space equal to at least one quarter of the mark's width on all sides of any logo configuration. No text, edge, illustration, or other logo may enter this area.

### Minimum sizes

- Mark: 24px recommended digital minimum
- Favicon exception: 16px using the exact mark without simplification
- Horizontal lockup: 120px recommended digital minimum
- Print mark: 8mm minimum
- Print horizontal lockup: 30mm minimum

### Backgrounds

- Preferred light backgrounds: Canvas Greige, Surface Warm White, or white
- Preferred dark background: Nivo Navy
- Keep the original five mark colors on both light and navy backgrounds
- Use the one-color versions when reproduction, contrast, or material limitations require them

### Never

- Change path coordinates or proportions
- Rotate, skew, stretch, compress, or rearrange pieces
- Change the gaps between pieces
- Apply gradients, outlines, shadows, textures, or 3D effects to the logo
- Substitute unapproved colors
- Type the wordmark with a live font
- Place the logo on a busy image without a solid protective field

## 6. Color system

### Foundation colors

| Role | Token | Hex | Use |
|---|---|---:|---|
| Brand authority | `color.brand.navy` | `#17263D` | Primary actions, headings, navigation, key structure |
| Canvas | `color.background.canvas` | `#F2EEE7` | Default warm page background |
| Canvas strong | `color.background.canvasStrong` | `#EDE9E2` | Alternate section or deeper greige field |
| Surface | `color.surface.base` | `#FBF9F5` | Cards, panels, warm-white fields |
| Elevated surface | `color.surface.elevated` | `#FFFFFF` | Menus, dialogs, overlays, focused content |
| Primary text | `color.text.primary` | `#17263D` | Headings and body copy |
| Secondary text | `color.text.secondary` | `#4E5958` | Supporting body copy |
| Muted text | `color.text.muted` | `#626A68` | Metadata and captions |
| Subtle border | `color.border.subtle` | `#DDD6CC` | Dividers and low-emphasis boundaries |
| Strong border | `color.border.strong` | `#A59C92` | Inputs or boundaries requiring stronger definition |

### Brand accents

| Name | Hex | Intended role |
|---|---:|---|
| Lavender | `#A285E8` | Brand moments, categories, small highlights |
| Blue | `#6A9BF3` | Brand moments, informational graphics, categories |
| Diagonal mint | `#A0E1C6` | Brand graphics and soft positive emphasis |
| Right mint | `#8EDDBF` | Brand graphics and soft positive emphasis |
| Warm yellow | `#F2C77F` | Brand graphics and warm highlights |

Pastels are accents, not the structural foundation. A typical product or website composition should remain predominantly greige, white, and navy. Do not use the pastel colors for normal text on light backgrounds.

### Semantic colors

| Role | Foreground | Background |
|---|---:|---:|
| Success | `#226B55` | `#E7F3EF` |
| Warning | `#75500F` | `#FBF1D8` |
| Danger | `#A1373F` | `#FBEAEC` |
| Information | `#2F5DAA` | `#EAF0FA` |
| Focus ring | `#3A65BA` | Use as a visible 2px outer ring |

Semantic colors communicate meaning. Do not replace semantic error, warning, or success states with decorative logo pastels.

### Accessibility

- Target WCAG 2.2 AA contrast for product and website interfaces
- Navy on Canvas Greige has approximately 13.1:1 contrast
- Primary, secondary, and muted text tokens meet normal-text contrast on Canvas Greige
- Pastels do not meet normal-text contrast on light surfaces and should be treated as fills, decoration, data categories, or large graphical elements
- Never communicate meaning by color alone

## 7. Typography

### Interface and website family

Use **Inter** for product, website, documents, and marketing typography.

Fallback stack:

`Inter, "Avenir Next", Avenir, Helvetica, Arial, sans-serif`

Use regular weight for sustained reading and semibold for hierarchy. Avoid heavy blocks of bold text.

### Type scale

| Style | Size / line height | Weight | Tracking |
|---|---|---:|---:|
| Display XL | 64 / 72 | 600 | -0.04em |
| Display L | 52 / 60 | 600 | -0.035em |
| Display M | 44 / 52 | 600 | -0.03em |
| Heading 1 | 40 / 48 | 600 | -0.025em |
| Heading 2 | 32 / 40 | 600 | -0.02em |
| Heading 3 | 24 / 32 | 600 | -0.015em |
| Heading 4 | 20 / 28 | 600 | -0.01em |
| Body L | 18 / 28 | 400 | 0 |
| Body M | 16 / 24 | 400 | 0 |
| Body S | 14 / 20 | 400 | 0 |
| Label | 14 / 20 | 600 | 0.01em |
| Caption | 12 / 16 | 500 | 0.01em |

Use sentence case for headings, navigation, controls, and labels. Reserve uppercase with generous tracking for rare eyebrows or short metadata labels.

### Writing principles

- Lead with the useful information
- Prefer plain language
- Be calm, direct, and respectful
- Use warmth through consideration, not enthusiasm
- Avoid exclamation marks, hype, cuteness, and unnecessary emoji
- Do not personify AI or describe routine automation as magic

Preferred: `Three updates require your review.`

Avoid: `Hey! We found some exciting things for you!`

## 8. Spacing and layout

Nivo uses a 4px base unit. Choose values from the approved scale rather than inventing one-off gaps.

`0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px`

### Practical guidance

- 4–8px: tightly related inline content
- 12–16px: control internals and compact groups
- 20–24px: standard component padding and grouped content
- 32–48px: card sections and major local separation
- 64–96px: page or marketing-section separation

Use space to establish grouping before adding borders or background colors. Product density may vary by workflow, but alignment and grouping must remain clear.

### Responsive foundations

- Mobile gutter: 16px
- Tablet gutter: 24px
- Desktop gutter: 32px
- Marketing content maximum: 1200px
- Reading-width maximum: 720px

Breakpoints are implementation defaults, not a reason to design around specific devices: 640px, 768px, 1024px, and 1280px.

## 9. Shape, borders, and elevation

### Radius scale

| Token | Value | Typical use |
|---|---:|---|
| `radius.xs` | 4px | Small tags or dense internal elements |
| `radius.sm` | 6px | Compact controls |
| `radius.md` | 8px | Default buttons and inputs |
| `radius.lg` | 10px | Default cards and panels |
| `radius.xl` | 16px | Dialogs and feature cards |
| `radius.2xl` | 24px | Large marketing surfaces |
| `radius.pill` | 999px | Pills and circular controls only |

Rounded geometry should feel balanced and modern, not bubbly. Do not turn every container into a pill.

### Borders

- Default border: 1px Subtle Border
- Strong or focused boundary: 1px Strong Border
- Focus: 2px Focus Ring outside the component boundary
- Use dividers only when spacing cannot communicate the grouping sufficiently

### Shadows

- Small: `0 1px 2px rgba(23, 38, 61, 0.08)`
- Medium: `0 8px 24px rgba(23, 38, 61, 0.10)`
- Large: `0 18px 48px rgba(23, 38, 61, 0.12)`

Use shadows sparingly for actual elevation: menus, dialogs, overlays, and select floating cards. Avoid stacking borders and strong shadows on the same surface.

## 10. Iconography

Use rounded line icons with:

- 20px or 24px base grid
- Approximately 1.75px stroke
- Round line caps and joins
- Simple, recognizable geometry
- Consistent optical weight

Do not mix thin technical icons, heavy filled icons, and rounded line icons in the same experience. Use filled icons only when a selected state or established convention requires them.

## 11. Imagery and graphics

Product UI is the primary visual material. Use real, legible product views rather than decorative fake dashboards.

Brand graphics may use simple geometric fields, crops of the Nivo mark, and restrained pastel shapes. They should support content rather than compete with it.

Avoid:

- Cartoon teachers or students
- Mascots and stick figures
- Literal puzzle pieces
- Generic stock classroom photography as the primary identity
- Neon gradients, glow effects, and AI-orb imagery
- Decorative complexity without communicative value

## 12. Motion

Motion should clarify cause and effect, not announce itself.

- Fast feedback: 120ms
- Standard transition: 180ms
- Deliberate transition: 280ms
- Standard easing: `cubic-bezier(0.2, 0, 0, 1)`
- Entrance easing: `cubic-bezier(0.16, 1, 0.3, 1)`

Animate opacity and transform when possible. Avoid large parallax, elastic effects, perpetual decorative motion, and transitions that delay work. Respect `prefers-reduced-motion`.

## 13. Component library

The initial production component layer is implemented in `components/`. It includes actions, form fields, selection controls, feedback, cards, navigation, data tables, overlays, progress, loading, and empty states. The interactive catalog is `components/index.html`; detailed behavior and accessibility rules are in `components/COMPONENTS.md`.

Each interactive component documents and implements:

- Default
- Hover
- Focus-visible
- Active or pressed
- Disabled
- Loading where relevant
- Validation, error, or selected states where relevant
- Keyboard behavior and accessible naming

Components must consume shared tokens. Do not introduce isolated colors, radii, shadows, or spacing values inside individual components.

When moving the library into the product's actual framework, preserve native semantics, ARIA relationships, keyboard behavior, responsive rules, and token references. Framework state should replace the demonstration JavaScript without changing the interaction contract.

## 14. Governance

### Source of truth

- Logo geometry: official SVG assets
- Exact visual values: `tokens/design-tokens.json`
- Web variables: `tokens/tokens.css`
- Component styles and behavior: `components/`
- Usage rules and principles: this document
- Visual examples: `reference/`

### Change policy

Changes to brand colors, typography, logo geometry, spacing scale, or semantic meaning require an explicit design-system version update. Product teams may compose the system in new ways, but must not silently fork foundation values.

### Instruction for AI collaborators

Before producing Nivo UI or brand material:

1. Read this document.
2. Load the official tokens.
3. Reuse official logo assets.
4. Prefer existing components when available.
5. Flag any requirement that cannot be satisfied without adding or changing a foundation token.

Do not generate a new logo, palette, typeface, or visual style unless explicitly asked to revise the design system itself.
