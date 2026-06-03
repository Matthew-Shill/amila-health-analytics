# Amara Health Analytics

Brand assets and marketing website for **Amara Health Analytics**.

## Repository structure

| Path | Purpose |
|------|---------|
| `assets/` | Logos, fonts, icons, brand tokens (source of truth) |
| `web/` | React + Vite + Tailwind marketing site |
| `docs/` | Brand guidelines (when present) |

## Website (local dev)

```bash
cd web
npm install
npm run sync-assets   # copies logos & fonts from assets/ to web/public/
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

```bash
npm run build    # production build → web/dist/
npm run preview  # preview production build
```

See [web/README.md](web/README.md) for more detail.

## Brand assets

- **Logos:** `assets/logos/full/`, `assets/logos/icon/`
- **Tokens:** `assets/brand/tokens.css`, `assets/brand/tokens.json`
- **Guide:** [assets/README.md](assets/README.md)

After adding or updating logos, run `npm run sync-assets` from `web/`.

## Remote

GitHub: https://github.com/Matthew-Shill/amara-health-analytics
