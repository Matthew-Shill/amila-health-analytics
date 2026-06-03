import { SERVICES } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";

const SERVICE_ACCENTS = [
  "from-smoked-teal/20 to-nude-stone/30",
  "from-nude-stone/40 to-smoked-teal/15",
  "from-smoked-teal/15 to-espresso/10",
  "from-nude-stone/35 to-pearl",
];

const SERVICE_ICONS = ["◉", "◇", "△", "⬡"];

export function ServicesSection() {
  return (
    <SectionBackdropWide id="services" tone="teal">
      <Reveal>
        <SectionHeading eyebrow="Capabilities" title="What We Do" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map((service, i) => (
          <Reveal key={service.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
            <article className="card-lift card-accent group relative h-full overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] bg-white/70 p-7 shadow-[0_16px_48px_-20px_rgba(75,52,43,0.15)] lg:p-8">
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${SERVICE_ACCENTS[i]} opacity-80 blur-2xl transition-transform duration-500 group-hover:scale-125`}
                aria-hidden
              />
              <div className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_65%,var(--amara-espresso))] text-xl text-pearl shadow-lg">
                  {SERVICE_ICONS[i]}
                </span>
                <h3 className="font-headline text-2xl font-semibold leading-tight text-espresso">
                  {service.title}
                </h3>
              </div>
              <ul className="relative mt-6 grid gap-2.5 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 rounded-lg bg-[color-mix(in_srgb,var(--amara-pearl)_80%,white)] px-3 py-2 text-sm text-[color-mix(in_srgb,var(--amara-espresso)_80%,white)]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-smoked-teal" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionBackdropWide>
  );
}
