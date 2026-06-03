import { DEMOS } from "@/lib/content";
import { DemoPreview } from "@/components/dashboard/DemoPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";

export function DemoWorkSection() {
  return (
    <SectionBackdropWide id="demo-work" tone="default" motif>
      <Reveal>
        <SectionHeading
          eyebrow="Demo work"
          title="See what clarity can look like."
          subtitle="Examples of the insights and reporting systems Amara can deliver. Replace these previews with real case studies when ready."
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {DEMOS.map((demo, i) => (
          <Reveal
            key={demo.id}
            delay={(i % 4) as 0 | 1 | 2 | 3}
            className={i === 0 ? "md:col-span-2 lg:col-span-1" : ""}
          >
            <article
              className={`card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] bg-white/75 shadow-[0_20px_50px_-24px_rgba(75,52,43,0.18)] ${
                i === 0 ? "lg:ring-2 lg:ring-[color-mix(in_srgb,var(--amara-smoked-teal)_20%,transparent)]" : ""
              }`}
              data-case-study-slot={demo.id}
            >
              <div className="relative border-b border-[color-mix(in_srgb,var(--amara-pearl)_60%,var(--amara-nude-stone))] bg-gradient-to-br from-[color-mix(in_srgb,var(--amara-pearl)_70%,white)] to-white">
                {i === 0 && (
                  <span className="absolute right-4 top-4 z-10 rounded-full bg-smoked-teal px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-pearl">
                    Featured
                  </span>
                )}
                <div className="flex items-center gap-2 border-b border-[color-mix(in_srgb,var(--amara-nude-stone)_25%,transparent)] px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-nude-stone" />
                  <span className="h-2.5 w-2.5 rounded-full bg-smoked-teal/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-espresso/25" />
                  <span className="ml-2 truncate text-[10px] font-semibold text-smoked-teal">
                    {demo.title}
                  </span>
                </div>
                <DemoPreview variant={demo.variant} />
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-7">
                <h3 className="font-headline text-xl font-semibold text-espresso group-hover:text-smoked-teal transition-colors">
                  {demo.title}
                </h3>
                <div className="mt-5 flex flex-1 flex-col gap-4 text-sm">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                      Problem Solved
                    </p>
                    <p className="mt-1.5 leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_75%,white)]">
                      {demo.problemSolved}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                      Key Metrics
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {demo.keyMetrics.map((m) => (
                        <li
                          key={m}
                          className="rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--amara-nude-stone)_30%,white)] to-white px-3 py-1 text-xs font-semibold text-espresso ring-1 ring-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)]"
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                      Decisions Supported
                    </p>
                    <ul className="mt-2 space-y-1 text-[color-mix(in_srgb,var(--amara-espresso)_75%,white)]">
                      {demo.decisions.map((d) => (
                        <li key={d} className="flex gap-2">
                          <span className="text-smoked-teal">→</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-14 flex justify-center">
          <Button href="#contact">Request Similar Analysis</Button>
        </div>
      </Reveal>
    </SectionBackdropWide>
  );
}
