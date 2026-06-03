# Brand assets

Single source of truth for logos, icons, fonts, and brand reference files. The website copies from here into `web/public/` via `npm run sync-assets` (in the `web/` folder).

## Folder map

```
assets/
├── brand/              # Brand board, tokens (tokens.css, tokens.json)
├── logos/
│   ├── full/           # Full wordmark (AMARA + tagline)
│   ├── icon/           # AHA lotus mark only
│   └── reverse/        # White/light logos for dark backgrounds (optional)
├── icons/              # UI line icons (analytics, growth, etc.) — PNG or SVG
├── fonts/              # Self-hosted Playfair, Montserrat, Allura
└── photos/             # Optional photography (team, product, lifestyle, office)
```

## Logos (`logos/`)

### `logos/full/`
Full **Amara Health Analytics** wordmark files.

**Naming (match exactly for the website):**

| File | Use |
|------|-----|
| `AHA Full Logo Stone.svg` | Header & footer on light backgrounds (primary on web) |
| `AHA Full Logo Stone.png` | Same — raster fallback / non-SVG contexts |
| `AHA Full Logo Teal.png` | Alternate on light backgrounds |
| `AHA Full Logo Espresso.png` | Darker variant |
| `AHA Full Logo Sage.png` | Alternate accent |

Keep **both** SVG and PNG in these folders. The website uses **SVG** (sharp at any size). PNGs are for favicon fallbacks, social previews, email, and print.

### `logos/icon/`
Standalone **AHA lotus** mark only.

| File | Use |
|------|-----|
| `AHA Icon Stone.svg` | Favicon, mobile fallback, decorative motifs (primary on web) |
| `AHA Icon Stone.png` | Same — raster fallback |
| `AHA Icon Teal.png` | Accent backgrounds |
| `AHA Icon Espresso.png` | Dark text contexts |
| `AHA Icon Sage.png` | Alternate |

### `logos/reverse/`
White or light logos for Smoked Teal or Espresso backgrounds.

Suggested: `AHA Full Logo Reverse.png`, `AHA Icon Reverse.png` (any consistent naming you prefer).

## Icons (`icons/`)

General **UI / marketing icons** (not the AHA lotus logo). Put PNG or SVG here, grouped however you like, for example:

```
icons/
├── analytics/
├── growth/
└── security/
```

These are not wired into the site automatically yet; they are for future sections or design handoff.

## After adding files

From the `web/` directory:

```bash
npm run sync-assets
npm run dev
```

That copies required logos (and fonts) into `web/public/` for local dev and production builds.

## Brand reference

- Colors & type: `brand/tokens.css`, `brand/tokens.json`
- Guidelines: `docs/brand-guidelines.md` (if present)
- Brand board: `brand/Amara Brand Board.png` (if present)
