# Brand fonts

Self-hosted files for the Amara type system (see `assets/brand/Amara Brand Board.png`).

| Role | Family | Weights | Use |
|------|--------|---------|-----|
| Headlines | Playfair Display | 400, 500, 600, 700 | Page titles, **AMARA** wordmark style |
| Body | Montserrat | 400, 500, 600, 700 | UI, labels, **HEALTH ANALYTICS** subheads |
| Slogan | Allura | 400 | “Have Your *AHA* Moment” accent line |

## Usage

```css
@import "../brand/tokens.css";
@import "./fonts.css";

h1 {
  font-family: var(--amara-font-headline);
  font-weight: 600;
}

body {
  font-family: var(--amara-font-body);
  font-weight: 400;
}

.tagline {
  font-family: var(--amara-font-slogan);
  font-size: 1.5rem;
}
```

For Montserrat subheads (e.g. **HEALTH ANALYTICS**), use wide letter-spacing:

```css
.subhead {
  font-family: var(--amara-font-body);
  font-weight: 500;
  letter-spacing: var(--amara-tracking-wide);
  text-transform: uppercase;
}
```

## Script face note

The brand board shows a handwritten script for the slogan but does not name the typeface. **Allura** is included here as an OFL-licensed stand-in with a similar elegant script feel. Replace the files in `allura/` if design provides the exact licensed font.

## License

Playfair Display, Montserrat, and Allura are distributed under the [SIL Open Font License 1.1](https://openfontlicense.org/). See [LICENSE.txt](./LICENSE.txt).
