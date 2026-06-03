import { PROCESS_STEPS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

export function ProcessSection() {
  return (
    <SectionBackdrop id="process" tone="warm">
      <Reveal>
        <SectionHeading
          eyebrow="Our process"
          title="From scattered data to strategic clarity."
        />
      </Reveal>

      <div className="relative mt-4">
        <div
          className="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-[color-mix(in_srgb,var(--amara-smoked-teal)_40%,transparent)] to-transparent lg:block"
          aria-hidden
        />
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {PROCESS_STEPS.map((item, i) => (
            <Reveal key={item.step} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <li className="card-lift relative flex flex-col items-center text-center lg:items-stretch lg:text-left">
                <span className="relative z-10 mx-auto flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_70%,var(--amara-espresso))] font-headline text-2xl font-semibold text-pearl shadow-[0_12px_32px_-8px_color-mix(in_srgb,var(--amara-smoked-teal)_45%,transparent)] lg:mx-0">
                  {item.step}
                </span>
                <div className="mt-5 rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/70 p-5 lg:flex-1">
                  <h3 className="font-headline text-lg font-semibold text-espresso">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)]">
                    {item.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </SectionBackdrop>
  );
}
