import { useEffect, useState } from "react";
import { COMPANY_NAME, LOGO, NAV_LINKS } from "@/lib/brand";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { Button } from "@/components/ui/Button";

function HeaderBrand() {
  return (
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <img
        src={LOGO.iconTeal}
        alt=""
        className="h-12 w-12 shrink-0 sm:h-14 sm:w-14 md:h-16 md:w-16"
        width={64}
        height={64}
        aria-hidden
      />
      <div className="flex min-w-0 flex-col justify-center leading-none">
        <span className="font-headline text-[1.35rem] font-semibold tracking-[0.06em] text-smoked-teal sm:text-[1.65rem] md:text-[1.85rem]">
          AMARA
        </span>
        <span className="mt-1 font-body text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-smoked-teal sm:mt-1.5 sm:text-xs md:text-[0.8rem]">
          Health Analytics
        </span>
      </div>
    </div>
  );
}

export function Header() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[color-mix(in_srgb,var(--amara-nude-stone)_45%,transparent)] bg-[color-mix(in_srgb,var(--amara-pearl)_90%,white)] shadow-[0_12px_40px_-16px_rgba(75,52,43,0.12)] backdrop-blur-xl"
          : "bg-[color-mix(in_srgb,var(--amara-pearl)_40%,transparent)] backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex items-center justify-between gap-4 px-5 py-3.5 sm:px-8 sm:py-4 lg:px-12">
        <a
          href="#"
          className="relative z-50 shrink-0 transition-opacity hover:opacity-90"
          aria-label={`${COMPANY_NAME} home`}
          onClick={closeMenu}
        >
          <HeaderBrand />
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link-underline text-sm font-medium text-[color-mix(in_srgb,var(--amara-espresso)_88%,white)] transition-colors hover:text-smoked-teal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact">Book a Consultation</Button>
        </div>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--amara-nude-stone)_50%,transparent)] bg-white/60 shadow-sm backdrop-blur lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-5 rounded-full bg-espresso transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-espresso transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-espresso transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-gradient-to-b from-pearl via-[color-mix(in_srgb,white_80%,var(--amara-pearl))] to-[color-mix(in_srgb,var(--amara-nude-stone)_15%,var(--amara-pearl))] backdrop-blur-xl transition-all duration-400 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-1 flex-col justify-center gap-7 px-10" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-headline text-3xl text-espresso transition-colors hover:text-smoked-teal"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="mt-6 w-fit" onClick={closeMenu}>
            Book a Consultation
          </Button>
        </nav>
      </div>
    </header>
  );
}
