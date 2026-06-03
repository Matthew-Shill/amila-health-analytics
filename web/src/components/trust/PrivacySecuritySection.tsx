import {
  NADINE_TRAINING_NOTE,
  PRIVACY_SECURITY_CARDS,
  TRAINING_BADGES,
} from "@/lib/trust-content";
import { AmaraIcon } from "@/components/ui/icons/AmaraIcon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function PrivacySecuritySection() {
  return (
    <SectionBackdropWide id="privacy-security" tone="warm">
      <Reveal>
        <SectionHeading
          eyebrow="Privacy & security"
          title="Built for Trust From Day One"
          subtitle="Amara Health Analytics is designed for healthcare, wellness, and aesthetic businesses that need data insights without compromising patient privacy."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {PRIVACY_SECURITY_CARDS.map((card, i) => (
          <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <article className="card-lift trust-badge h-full p-6 lg:p-7">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_70%,var(--amara-espresso))] shadow-md"
                aria-hidden
              >
                <AmaraIcon name={card.icon} className="h-5 w-5 text-pearl" />
              </span>
              <h3 className="mt-5 font-headline text-lg font-semibold text-espresso sm:text-xl">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)]">
                {card.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-16 rounded-3xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] bg-white/60 p-7 shadow-[0_20px_50px_-24px_rgba(75,52,43,0.12)] sm:p-9 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[var(--amara-tracking-wide)] text-smoked-teal">
            Training & experience
          </p>
          <h3 className="mt-4 font-headline text-2xl font-semibold heading-accent sm:text-3xl">
            Healthcare-Trained. Data-Driven. Privacy-Aware.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_75%,white)] sm:text-base">
            {NADINE_TRAINING_NOTE}
          </p>

          <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
            {TRAINING_BADGES.map((badge) => (
              <span
                key={badge.label}
                className="trust-pill inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-espresso sm:text-sm"
              >
                <AmaraIcon name={badge.icon} className="h-4 w-4 shrink-0 text-smoked-teal" />
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="mt-10 flex justify-center">
          <Button href="/privacy-security" variant="secondary">
            View Privacy & Security Approach
          </Button>
        </div>
      </Reveal>
    </SectionBackdropWide>
  );
}
