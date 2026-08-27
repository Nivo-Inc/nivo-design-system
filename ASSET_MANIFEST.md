# Nivo asset manifest

## Primary assets

| File | Use |
|---|---|
| `brand/logo/nivo-logo-horizontal-color.svg` | Default logo on light backgrounds |
| `brand/logo/nivo-logo-horizontal-reversed.svg` | Default logo on Nivo Navy |
| `brand/logo/nivo-logo-stacked-color.svg` | Centered or vertically constrained layouts |
| `brand/logo/nivo-logo-stacked-reversed.svg` | Stacked logo on Nivo Navy |
| `brand/logo/nivo-mark-color.svg` | Mark-only brand use |
| `brand/logo/nivo-wordmark-navy.svg` | Wordmark-only use when the mark is already present nearby |

## One-color assets

| File | Use |
|---|---|
| `brand/logo/nivo-logo-horizontal-navy.svg` | One-color reproduction on light fields |
| `brand/logo/nivo-logo-horizontal-white.svg` | One-color reproduction on dark fields |
| `brand/logo/nivo-mark-navy.svg` | One-color navy mark |
| `brand/logo/nivo-mark-white.svg` | One-color warm-white mark |
| `brand/logo/nivo-wordmark-white.svg` | Wordmark-only use on dark fields |

## App and browser assets

| File | Use |
|---|---|
| `brand/icons/nivo-app-icon-light.svg` | Light app icon master |
| `brand/icons/nivo-app-icon-dark.svg` | Dark app icon master |
| `brand/icons/nivo-favicon.svg` | Scalable browser favicon master |
| `brand/icons/nivo-favicon-64.png` | 64px raster favicon source |

## Raster exports

PNG files are convenience exports for software that cannot use SVG. Prefer SVG for websites, documents, and design tools whenever possible.

- `nivo-mark-color-1024.png`
- `nivo-logo-horizontal-color-1600.png`
- `nivo-logo-horizontal-reversed-1600.png`
- `nivo-logo-stacked-color-1024.png`
- `nivo-app-icon-light-1024.png`
- `nivo-app-icon-dark-1024.png`

## Locked geometry

`brand/logo/nivo-mark-master.svg` is the untouched locked master. Its SHA-256 checksum is:

`8bad8637598c026a68a3ac3701c2376215882693dd22858a1745609d03e97247`

Every generated mark and lockup reuses the same five path coordinate strings. Only approved fills, placement, and proportional scaling vary.

The outlined wordmark files contain paths rather than live text and therefore do not depend on a locally installed font.
