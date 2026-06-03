import { COMPANY_NAME, LOGO, NAV_LINKS, TAGLINE } from "@/lib/brand";
import { Button } from "@/components/ui/Button";

const footerLinks = NAV_LINKS.filter((l) =>
  ["Services", "Demo Work", "Contact"].includes(l.label),
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[color-mix(in_srgb,var(--amara-nude-stone)_45%,transparent)] bg-gradient-to-b from-[color-mix(in_srgb,white_40%,var(--amara-pearl))] to-pearl px-5 py-16 sm:px-8 lg:px-12">
      <div className="container-wide grid gap-12 lg:grid-cols-[1.3fr_1fr_auto] lg:items-center">
        <div>
          <img
            src={LOGO.fullStone}
            alt={COMPANY_NAME}
            className="h-10 w-auto md:h-11"
            width={200}
            height={44}
          />
          <p
            className="mt-5 text-3xl text-smoked-teal"
            style={{ fontFamily: "var(--amara-font-slogan)" }}
          >
            {TAGLINE}
          </p>
          <p className="mt-8 text-xs font-medium text-[color-mix(in_srgb,var(--amara-espresso)_55%,white)]">
            © {year} {COMPANY_NAME}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-8 lg:flex-col lg:gap-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link-underline text-sm font-semibold text-espresso transition-colors hover:text-smoked-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="#contact">Book a Consultation</Button>
      </div>
    </footer>
  );
}
