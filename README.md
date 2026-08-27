# Nivo Design System

The shared source of truth for Nivo’s brand, interface foundations, component patterns, and visual examples. The repository is designed to be equally useful to designers, developers, agents, and other team members.

## Browse the system

Open `index.html` locally, or visit the GitHub Pages site after it is enabled for the repository. The visual site includes:

- Brand assets and locked logo usage
- Color, type, spacing, radius, and elevation foundations
- Interactive component demonstrations and specifications
- Accessibility and responsive-design requirements
- Downloadable packages and visual references

The interactive component catalog is in [`components/index.html`](components/index.html).

## Source-of-truth order

1. Exact values in [`tokens/design-tokens.json`](tokens/design-tokens.json)
2. Brand and interface rules in [`NIVO_DESIGN_SYSTEM.md`](NIVO_DESIGN_SYSTEM.md)
3. Official assets in [`brand/`](brand/)
4. Component specifications and styles in [`components/`](components/)
5. Visual examples in [`reference/`](reference/)

When an example and a token disagree, use the token. When a logo depiction and an official logo asset disagree, use the official asset.

## Locked logo geometry

`brand/logo/nivo-mark-master.svg` is the authoritative Nivo mark. Its verified SHA-256 digest is:

```text
8bad8637598c026a68a3ac3701c2376215882693dd22858a1745609d03e97247
```

Never redraw, trace, simplify, optimize, or regenerate the mark. Use the supplied logo files exactly as provided. See [`ASSET_MANIFEST.md`](ASSET_MANIFEST.md) for usage guidance.

## Repository map

```text
brand/        Official logo, favicon, and app-icon assets
components/   Interactive catalog, reusable styles, behavior, and specs
downloads/    Packaged downloads for handoff
reference/    Approved visual preview board
tokens/       Machine-readable JSON and CSS custom properties
index.html    Visual documentation homepage
```

## Using the tokens

Load the CSS variables before component styles:

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/nivo-components.css">
```

For non-web implementations and agent workflows, use `tokens/design-tokens.json` rather than copying values from screenshots.

## Making changes

Read [`CONTRIBUTING.md`](CONTRIBUTING.md) before changing the system. In short:

1. Explain the product or user need.
2. Update exact tokens, components, documentation, and examples together.
3. Verify accessibility, responsive behavior, links, and logo integrity.
4. Submit the change through a reviewed pull request.
5. Record user-facing changes in [`CHANGELOG.md`](CHANGELOG.md).

When GitHub Pages is available for the repository, the documentation site publishes automatically from `main` through GitHub Actions. Pages requires a public repository on the current account plan.

## Current release

Version **1.1.0** includes the approved Nivo brand and interface foundations, the locked master logo, and the first production component layer.
