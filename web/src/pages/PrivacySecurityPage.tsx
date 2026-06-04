import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop, SectionBackdropWide } from "@/components/ui/SectionBackdrop";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandMotif } from "@/components/ui/BrandMotif";
import { ComplianceRoadmapSection } from "@/components/trust/ComplianceRoadmapSection";
import {
  NADINE_TRAINING_NOTE,
  PRIVACY_SECURITY_CARDS,
  TRAINING_BADGES,
} from "@/lib/trust-content";
import { AmilaIcon } from "@/components/ui/icons/AmilaIcon";

const PAGE_TITLE = "Privacy & Security | Amila Health Analytics";
const PAGE_DESCRIPTION =
  "Learn how Amila Health Analytics approaches HIPAA-conscious PHI handling, secure data workflows, and a long-term compliance roadmap for healthcare analytics.";

const OVERVIEW =
  "Amila Health Analytics is built for healthcare, wellness, and aesthetic organizations that need actionable insights from sensitive operational and patient data. We design our analytics practice around privacy-conscious workflows, secure handling principles, and HIPAA-aligned practices — without overpromising certification or compliance status we have not yet achieved.";

const PHI_PHILOSOPHY = [
  "Protected health information is treated as confidential by default.",
  "We apply minimum-necessary access principles when designing dashboards and reports.",
  "Data workflows are structured to support Business Associate responsibilities where applicable.",
  "We prioritize clarity for clients about what data is used, how it is handled, and who can access it.",
] as const;

const TECHNICAL_SAFEGUARDS = [
  "Encrypted transmission for sensitive data exchanges",
  "Encryption in transit and at rest wherever PHI may be stored or processed",
  "Secure cloud architecture principles and controlled access pathways",
  "Role-based access designed into dashboard and reporting views",
  "Export controls and de-identification options where appropriate",
] as const;

const ADMINISTRATIVE_SAFEGUARDS = [
  "PHI handling policies and confidentiality procedures",
  "Business Associate Agreement readiness for covered entity partnerships",
  "Documented privacy and security procedures (in development)",
  "Building toward access logs and traceable data workflows",
  "Incident response planning as part of our security roadmap",
] as const;

export function PrivacySecurityPage() {
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
                  Privacy & security
                </p>
                <h1 className="mt-5 font-headline text-4xl font-semibold leading-[1.1] heading-accent sm:text-5xl lg:text-[3.25rem]">
                  Privacy & Security Approach
                </h1>
                <span
                  className="mx-auto mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-nude-stone via-smoked-teal to-transparent"
                  aria-hidden
                />
                <p className="mt-6 text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_78%,white)] sm:text-lg">
                  Privacy and security safeguards for healthcare data — designed to support
                  HIPAA-aligned workflows and Business Associate responsibilities.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <SectionBackdrop tone="warm">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="Our Commitment to Trust" align="left" />
          </Reveal>
          <Reveal delay={1}>
            <div className="rounded-3xl border border-[color-mix(in_srgb,var(--amila-nude-stone)_35%,transparent)] bg-white/60 p-7 shadow-[0_20px_50px_-24px_rgba(75,52,43,0.12)] lg:p-9">
              <p className="text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_80%,white)] sm:text-lg">
                {OVERVIEW}
              </p>
            </div>
          </Reveal>
        </SectionBackdrop>

        <SectionBackdropWide tone="default">
          <Reveal>
            <SectionHeading
              eyebrow="PHI handling"
              title="PHI Handling Philosophy"
              subtitle="We design workflows around protected health information with care, clarity, and minimum-necessary access."
            />
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {PHI_PHILOSOPHY.map((item, i) => (
              <Reveal key={item} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <li className="trust-badge flex gap-3 p-5 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_78%,white)]">
                  <AmilaIcon name="shield-check" className="mt-0.5 h-5 w-5 shrink-0 text-smoked-teal" />
                  {item}
                </li>
              </Reveal>
            ))}
          </ul>
        </SectionBackdropWide>

        <SectionBackdrop tone="teal">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <SectionHeading
                  eyebrow="Technical safeguards"
                  title="Technical Safeguards"
                  align="left"
                />
                <ul className="mt-6 space-y-3">
                  {TECHNICAL_SAFEGUARDS.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_75%,white)]"
                    >
                      <AmilaIcon name="lock-secure" className="mt-0.5 h-4 w-4 shrink-0 text-smoked-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div>
                <SectionHeading
                  eyebrow="Administrative safeguards"
                  title="Administrative Safeguards"
                  align="left"
                />
                <ul className="mt-6 space-y-3">
                  {ADMINISTRATIVE_SAFEGUARDS.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_75%,white)]"
                    >
                      <AmilaIcon name="file-confidential" className="mt-0.5 h-4 w-4 shrink-0 text-smoked-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </SectionBackdrop>

        <SectionBackdropWide tone="warm">
          <Reveal>
            <SectionHeading
              eyebrow="Safeguards in practice"
              title="Built for Trust From Day One"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PRIVACY_SECURITY_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <article className="trust-badge h-full p-6">
                  <AmilaIcon name={card.icon} className="h-5 w-5 text-smoked-teal" />
                  <h3 className="mt-4 font-headline text-lg font-semibold text-espresso">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_72%,white)]">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </SectionBackdropWide>

        <SectionBackdrop tone="default">
          <Reveal>
            <SectionHeading
              eyebrow="Training & confidentiality"
              title="Healthcare-Trained. Data-Driven. Privacy-Aware."
              subtitle={NADINE_TRAINING_NOTE}
            />
          </Reveal>
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {TRAINING_BADGES.map((badge, i) => (
              <Reveal key={badge.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <span className="trust-pill inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-espresso sm:text-sm">
                  <AmilaIcon name={badge.icon} className="h-4 w-4 shrink-0 text-smoked-teal" />
                  {badge.label}
                </span>
              </Reveal>
            ))}
          </div>
        </SectionBackdrop>

        <ComplianceRoadmapSection />

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
                  Questions About Privacy & Security?
                </h2>
                <p className="relative mx-auto mt-6 max-w-lg text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-pearl)_88%,white)]">
                  We are committed to transparent conversations about data handling, Business
                  Associate responsibilities, and how Amila can support your organization&apos;s
                  privacy requirements.
                </p>
                <div className="relative mt-10 flex flex-wrap justify-center gap-4">
                  <Button
                    href="/#contact"
                    className="!from-pearl !to-[color-mix(in_srgb,var(--amila-pearl)_92%,white)] !text-espresso !shadow-[0_16px_40px_-12px_rgba(0,0,0,0.25)] hover:!scale-[1.04]"
                  >
                    Contact Amila
                  </Button>
                  <Button href="/" variant="secondary">
                    Back to Home
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
