import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY_NAME, NAV_LINKS } from "@/lib/brand";
import { useScrollHeader } from "@/hooks/useScrollHeader";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

export function Header() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "border-b border-[color-mix(in_srgb,var(--amila-nude-stone)_45%,transparent)] bg-[color-mix(in_srgb,var(--amila-pearl)_90%,white)] shadow-[0_12px_40px_-16px_rgba(75,52,43,0.12)] backdrop-blur-xl"
              : "bg-[color-mix(in_srgb,var(--amila-pearl)_40%,transparent)] backdrop-blur-sm"
          }`}
        >
          <div className="container-wide grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3.5 sm:gap-4 sm:px-8 sm:py-4 lg:px-12">
            <Link
              to="/"
              className="relative z-50 min-w-0 overflow-hidden transition-opacity hover:opacity-90"
              aria-label={`${COMPANY_NAME} home`}
              onClick={closeMenu}
            >
              <BrandMark variant="header" />
            </Link>

            <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`nav-link-underline text-sm font-medium transition-colors hover:text-smoked-teal ${
                    location.pathname === link.href
                      ? "text-smoked-teal"
                      : "text-[color-mix(in_srgb,var(--amila-espresso)_88%,white)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="/#contact">Book a Consultation</Button>
            </div>

            <button
              type="button"
              className="relative z-50 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[color-mix(in_srgb,var(--amila-nude-stone)_50%,transparent)] bg-white/60 shadow-sm backdrop-blur lg:hidden"
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
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-pearl transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!menuOpen}
        id="mobile-menu"
      >
        <nav
          className="flex min-h-0 flex-1 flex-col justify-center gap-7 overflow-y-auto overscroll-contain px-10 pb-10 pt-28"
          aria-label="Mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-headline text-3xl text-espresso transition-colors hover:text-smoked-teal"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <Button href="/#contact" className="mt-6 w-fit" onClick={closeMenu}>
            Book a Consultation
          </Button>
        </nav>
      </div>
    </>
  );
}
