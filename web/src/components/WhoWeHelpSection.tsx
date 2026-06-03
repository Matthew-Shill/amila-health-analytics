import { WHO_WE_HELP } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";

export function WhoWeHelpSection() {
  return (
    <SectionBackdropWide id="who-we-help" tone="contrast">
      <Reveal>
        <SectionHeading
          eyebrow="Who we help"
          title="Built for healthcare and wellness organizations."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {WHO_WE_HELP.map((card, i) => (
          <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <article className="card-lift card-accent group h-full rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/75 p-6 shadow-[0_12px_40px_-18px_rgba(75,52,43,0.12)] lg:p-7">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-[color-mix(in_srgb,var(--amara-smoked-teal)_15%,white)] to-transparent px-3 py-2">
                <h3 className="font-headline text-xl font-semibold text-espresso group-hover:text-smoked-teal transition-colors">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)]">
                <span className="font-bold text-espresso">Challenge · </span>
                {card.challenges}
              </p>
              <p className="mt-4 rounded-xl bg-[color-mix(in_srgb,var(--amara-smoked-teal)_8%,white)] px-4 py-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_78%,white)]">
                <span className="font-bold text-smoked-teal">Amara · </span>
                {card.help}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionBackdropWide>
  );
}
