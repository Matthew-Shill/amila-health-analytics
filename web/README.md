# Amara Health Analytics — Website

Premium marketing site for Amara Health Analytics (V1).

## Setup

From the repository root (with `assets/` logos and fonts present):

```bash
cd web
npm install
npm run sync-assets   # copies logos & fonts into public/
npm run dev
```

**If the page looks unstyled (plain HTML):** stop the dev server (`Ctrl+C`), then run `npm run dev` again. The site requires the Tailwind Vite plugin in `vite.config.ts` — a restart picks that up after pulls.

**Broken logo images:** copy files into `assets/logos/full/` and `assets/logos/icon/` (see `assets/README.md` for exact names), then run `npm run sync-assets`.

Open [http://localhost:5173](http://localhost:5173).

## Brand assets

Logos are copied from `../assets/logos/` — do not recreate or modify logo files.

- Header / footer: `AHA Full Logo Stone.svg`
- Favicon / motifs: `AHA Icon Stone.svg`

## Contact form integration

`ContactSection.tsx` exports `ContactFormPayload` and uses `submitContactForm()` as a stub. Replace that function to post to HubSpot, Formspree, Supabase, or your API route.

## Build

```bash
npm run build
npm run preview
```

## Vercel

Prefer connecting the GitHub repo and using the **root** `vercel.json` in the repository (builds `web/` automatically). Alternatively set **Root Directory** to `web` in the Vercel dashboard.
