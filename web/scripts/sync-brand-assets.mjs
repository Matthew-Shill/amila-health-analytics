import { cpSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const assetsRoot = join(root, "assets");
const publicRoot = join(dirname(fileURLToPath(import.meta.url)), "../public");

if (!existsSync(assetsRoot)) {
  console.warn(
    "Brand assets not found at assets/. Add logos per README, or run from the full repo root.",
  );
  process.exit(0);
}

function syncDir(relativePath) {
  const src = join(assetsRoot, relativePath);
  const dest = join(publicRoot, relativePath);
  if (!existsSync(src)) {
    console.warn(`Skip (missing): ${relativePath}/`);
    return;
  }
  mkdirSync(dirname(dest), { recursive: true });
  cpSync(src, dest, {
    recursive: true,
    filter: (path) => !path.endsWith(".gitkeep"),
  });
  console.log(`Synced ${relativePath}/ → web/public/${relativePath}/`);
}

// Logos (SVG + PNG) and fonts used by the site
syncDir("logos");
syncDir("fonts");
