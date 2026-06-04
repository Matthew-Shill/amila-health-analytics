import { ABOUT_CAPABILITIES } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

export function AboutSection() {
  return (
    <SectionBackdrop id="about" tone="default">
      <Reveal>
        <SectionHeading
          eyebrow="About Amara"
          title="Expert-led clarity for modern health businesses."
          align="left"
        />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
        <Reveal delay={1} className="lg:col-span-3">
          <div className="rounded-3xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/60 p-7 shadow-[0_20px_50px_-24px_rgba(75,52,43,0.12)] lg:p-9">
            <p className="text-base leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_80%,white)] sm:text-lg">
              Amara Health Analytics combines analytics, business intelligence,
              healthcare-aware strategy, digital systems, and thoughtful design to help
              organizations operate with greater clarity. We translate complex information
              into actionable insights that support better decisions, stronger growth, and
              better experiences for both providers and patients.
            </p>
            <p className="mt-6 border-t border-[color-mix(in_srgb,var(--amara-nude-stone)_30%,transparent)] pt-6 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_70%,white)]">
              We are positioned as a trusted partner, not just a software vendor or dashboard
              builder. The experience is custom, human, and built around your business.
            </p>
          </div>
        </Reveal>

        <Reveal delay={2} className="lg:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[var(--amara-tracking-wide)] text-smoked-teal">
            Supporting capabilities
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {ABOUT_CAPABILITIES.map((cap, i) => (
              <li
                key={cap}
                className="rounded-full border border-[color-mix(in_srgb,var(--amara-smoked-teal)_20%,transparent)] bg-gradient-to-br from-white to-[color-mix(in_srgb,var(--amara-pearl)_90%,white)] px-4 py-2.5 text-sm font-semibold text-espresso shadow-sm transition-transform hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                {cap.includes("Inventory") ? (
                  <>
                    <span className="keyword-emphasis">Inventory</span> Clarity
                  </>
                ) : (
                  cap
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </SectionBackdrop>
  );
}
