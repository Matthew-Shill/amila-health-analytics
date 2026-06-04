import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhoWeHelpSection } from "@/components/WhoWeHelpSection";
import { OrganizationSizeSpectrum } from "@/components/OrganizationSizeSpectrum";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrandMotif } from "@/components/ui/BrandMotif";

const PAGE_TITLE = "Who We Help | Amila Health Analytics";
const PAGE_DESCRIPTION =
  "Amila serves healthcare and wellness organizations of every size—from sole practitioners and startups to multi-location groups and major corporations.";

export function WhoWeHelpPage() {
  useEffect(() => {
    document.title = PAGE_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", PAGE_DESCRIPTION);
    }

    return () => {
      document.title = "Amila Health Analytics | Have Your AHA Moment";
      if (meta) {
        meta.setAttribute(
          "content",
          "Amila Health Analytics helps healthcare and wellness organizations uncover profit, retention, inventory, and growth opportunities hidden in their data.",
        );
      }
    };
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-pearl focus:px-4 focus:py-2 focus:text-espresso"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="section-pad relative overflow-hidden section-tone-default pt-32 sm:pt-36">
          <div className="ambient-mesh pointer-events-none absolute inset-0" aria-hidden />
          <BrandMotif
            className="absolute -right-12 top-1/3 h-72 w-72 opacity-[0.06]"
            opacity={0.06}
          />
          <div className="container-narrow relative z-10">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[var(--amila-tracking-wide)] text-smoked-teal">
                  Who we help
                </p>
                <h1 className="mt-5 font-headline text-4xl font-semibold leading-[1.1] heading-accent sm:text-5xl lg:text-[3.25rem]">
                  Built for healthcare and wellness organizations of every size.
                </h1>
                <span
                  className="mx-auto mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-nude-stone via-smoked-teal to-transparent"
                  aria-hidden
                />
                <p className="mt-6 text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_78%,white)] sm:text-lg">
                  Whether you are a solo provider, a fast-growing startup, a multi-location group,
                  or a major corporation, Amila helps turn scattered operational and patient data
                  into clear reporting, practical insight, and better decisions.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <OrganizationSizeSpectrum />

        <WhoWeHelpSection />

        <section className="section-pad section-tone-warm">
          <div className="container-narrow">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-espresso via-[color-mix(in_srgb,var(--amila-espresso)_90%,var(--amila-smoked-teal))] to-smoked-teal px-8 py-16 text-center sm:px-14 lg:py-24">
                <BrandMotif
                  className="absolute -left-4 top-1/2 h-48 w-48 -translate-y-1/2 opacity-[0.12]"
                  opacity={0.12}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 20%, #D8C0A8 0%, transparent 40%), radial-gradient(circle at 70% 80%, #43696A 0%, transparent 50%)",
                  }}
                  aria-hidden
                />
                <h2 className="relative font-headline text-3xl font-semibold leading-tight text-pearl sm:text-4xl">
                  Not sure where to start?
                </h2>
                <p className="relative mx-auto mt-6 max-w-lg text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-pearl)_88%,white)]">
                  Tell us about your organization, your systems, and the decisions you need to make.
                  We will help identify the analytics approach that fits your size and goals.
                </p>
                <div className="relative mt-10 flex flex-wrap justify-center gap-4">
                  <Button
                    href="/#contact"
                    className="!from-pearl !to-[color-mix(in_srgb,var(--amila-pearl)_92%,white)] !text-espresso !shadow-[0_16px_40px_-12px_rgba(0,0,0,0.25)] hover:!scale-[1.04]"
                  >
                    Start a Conversation
                  </Button>
                  <Button href="/#services" variant="secondary">
                    Explore Services
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
