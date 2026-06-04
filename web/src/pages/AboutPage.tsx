import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop, SectionBackdropWide } from "@/components/ui/SectionBackdrop";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamProfileCard } from "@/components/TeamProfileCard";
import {
  ABOUT_APPROACH_CARDS,
  ABOUT_VALUES,
  TEAM_MEMBERS,
} from "@/lib/content";
import { BrandMotif } from "@/components/ui/BrandMotif";

const PAGE_TITLE = "About Amila Health Analytics | Healthcare & Aesthetic Analytics";
const PAGE_DESCRIPTION =
  "Learn about Amila Health Analytics, an expert-led analytics partner helping healthcare, wellness, and aesthetic businesses turn scattered data into clear reporting, operational insight, and better decisions.";

export function AboutPage() {
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
                  About
                </p>
                <h1 className="mt-5 font-headline text-4xl font-semibold leading-[1.1] heading-accent sm:text-5xl lg:text-[3.25rem]">
                  About Amila Health Analytics
                </h1>
                <span
                  className="mx-auto mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-nude-stone via-smoked-teal to-transparent"
                  aria-hidden
                />
                <p className="mt-6 text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_78%,white)] sm:text-lg">
                  Amila helps healthcare, wellness, and aesthetic businesses turn scattered
                  data into clear reporting, practical insight, and better decisions.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionBackdrop tone="warm">
          <Reveal>
            <SectionHeading
              eyebrow="Our mission"
              title="Why Amila Exists"
              align="left"
            />
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-3xl border border-[color-mix(in_srgb,var(--amila-nude-stone)_35%,transparent)] bg-white/60 p-7 shadow-[0_20px_50px_-24px_rgba(75,52,43,0.12)] lg:p-9">
              <p className="text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_80%,white)] sm:text-lg">
                Most clinics already have the data they need. It is often hidden inside booking
                platforms, treatment records, spreadsheets, payment systems, and disconnected
                reports. Amila Health Analytics exists to bring that information together in a
                clearer, more useful way—so business owners and providers can understand what is
                working, what is being missed, and where growth opportunities exist.
              </p>
            </div>
          </Reveal>
        </SectionBackdrop>

        <SectionBackdropWide tone="default">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              title="A More Human Approach to Analytics"
              subtitle="We believe data should support better care, not replace human judgment. Our work focuses on clarity, context, and action: helping teams understand their numbers without overwhelming them with dashboards that are difficult to interpret. Every report, recommendation, and workflow is designed to make decision-making easier."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {ABOUT_APPROACH_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className="card-lift h-full rounded-2xl border border-[color-mix(in_srgb,var(--amila-nude-stone)_35%,transparent)] bg-white/70 p-6 shadow-[0_12px_40px_-18px_rgba(75,52,43,0.1)] lg:p-7">
                  <h3 className="font-headline text-xl font-semibold text-espresso">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_72%,white)]">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionBackdropWide>

        <SectionBackdropWide tone="teal">
          <Reveal>
            <SectionHeading
              eyebrow="The team"
              title="Led by Data, Systems, and Care Experience"
            />
          </Reveal>
          <div className="grid gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <Reveal key={member.id} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <TeamProfileCard member={member} variant="full" wide />
              </Reveal>
            ))}
          </div>
        </SectionBackdropWide>

        <SectionBackdropWide tone="warm">
          <Reveal>
            <SectionHeading
              eyebrow="Philosophy"
              title="What Guides Our Work"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {ABOUT_VALUES.map((value, i) => (
              <Reveal key={value.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className="card-lift h-full rounded-2xl border border-[color-mix(in_srgb,var(--amila-nude-stone)_35%,transparent)] bg-white/70 p-6 lg:p-7">
                  <h3 className="font-headline text-xl font-semibold text-espresso">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_72%,white)]">
                    {value.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionBackdropWide>

        <section className="section-pad section-tone-default">
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
                  Ready to See What Your Data Is Trying to Tell You?
                </h2>
                <p className="relative mx-auto mt-6 max-w-lg text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-pearl)_88%,white)]">
                  Amila can help uncover the patterns, gaps, and opportunities hidden inside
                  your current systems.
                </p>
                <div className="relative mt-10 flex flex-wrap justify-center gap-4">
                  <Button
                    href="/#contact"
                    className="!from-pearl !to-[color-mix(in_srgb,var(--amila-pearl)_92%,white)] !text-espresso !shadow-[0_16px_40px_-12px_rgba(0,0,0,0.25)] hover:!scale-[1.04]"
                  >
                    Start a Conversation
                  </Button>
                  <Button href="/#demo-work" variant="secondary">
                    View Demo Work
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
