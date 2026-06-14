import { Link } from "react-router-dom";
import { COMPANY_NAME, NAV_LINKS, TAGLINE } from "@/lib/brand";
import { FOOTER_TRUST_TEXT } from "@/lib/trust-content";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

const footerLinks = [
  ...NAV_LINKS.filter((l) =>
    ["Services", "Demo Work", "Who We Help", "About", "Privacy"].includes(l.label),
  ),
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-blue/10 bg-gradient-to-b from-surface to-cream px-5 py-16 sm:px-8 lg:px-12">
      <div className="container-wide grid gap-12 lg:grid-cols-[1.3fr_1fr_auto] lg:items-center">
        <div>
          <Link
            to="/"
            className="inline-block min-w-0 max-w-full transition-opacity hover:opacity-90"
            aria-label={`${COMPANY_NAME} home`}
          >
            <BrandMark layout="comfortable" />
          </Link>
          <p
            className="mt-5 bg-gradient-to-r from-blue to-pink bg-clip-text text-3xl text-transparent"
            style={{ fontFamily: "var(--amila-font-slogan)" }}
          >
            {TAGLINE}
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-espresso/70">
            {FOOTER_TRUST_TEXT}
          </p>
          <p className="mt-6 text-xs font-medium text-[color-mix(in_srgb,var(--amila-espresso)_55%,white)]">
            © {year} {COMPANY_NAME}
          </p>
          <Link
            to="/privacy-security"
            className="mt-3 inline-block text-xs font-semibold text-smoked-teal transition-colors hover:text-espresso"
          >
            View Privacy & Security Approach →
          </Link>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-8 lg:flex-col lg:gap-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="nav-link-underline text-sm font-semibold text-espresso transition-colors hover:text-smoked-teal"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="/#contact">Book a Consultation</Button>
      </div>
    </footer>
  );
}
