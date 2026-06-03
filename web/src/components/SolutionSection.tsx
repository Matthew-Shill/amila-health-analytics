import { SOLUTION_POINTS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const workflow = [
  { label: "Collect", desc: "Unify data across systems", icon: "◎" },
  { label: "Analyze", desc: "Surface patterns and gaps", icon: "◈" },
  { label: "Report", desc: "Executive-ready dashboards", icon: "▣" },
  { label: "Act", desc: "Strategic decisions with confidence", icon: "→" },
];

export function SolutionSection() {
  return (
    <SectionBackdrop id="solution" tone="default">
      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="The Amara approach"
            title="Amara transforms data into practical intelligence."
            subtitle="We help healthcare and wellness organizations move from fragmented reporting to a clear, trusted view of performance—so leaders can act with confidence."
          />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <Reveal delay={1}>
            <ul className="space-y-3">
              {SOLUTION_POINTS.map((point, i) => (
                <li
                  key={point}
                  className="card-lift flex items-start gap-4 rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] bg-white/60 px-5 py-4 shadow-[0_8px_30px_-16px_rgba(75,52,43,0.1)] transition-colors hover:border-smoked-teal/50 hover:bg-white/90"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_70%,var(--amara-espresso))] text-sm font-bold text-pearl shadow-md"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <span className="pt-1 text-sm font-medium leading-relaxed text-espresso sm:text-base">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className="glass-panel-strong relative overflow-hidden rounded-3xl p-7 lg:p-9">
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[color-mix(in_srgb,var(--amara-smoked-teal)_15%,transparent)] blur-2xl"
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-[var(--amara-tracking-wide)] text-smoked-teal">
                Intelligence workflow
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {workflow.map((step, i) => (
                  <div
                    key={step.label}
                    className="group rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_30%,transparent)] bg-white/50 p-4 transition-all hover:border-smoked-teal/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pearl text-lg text-smoked-teal ring-2 ring-[color-mix(in_srgb,var(--amara-smoked-teal)_25%,transparent)]">
                        {step.icon}
                      </span>
                      <div>
                        <p className="font-headline text-lg text-espresso">{step.label}</p>
                        <p className="text-xs text-[color-mix(in_srgb,var(--amara-espresso)_65%,white)]">
                          Step {i + 1}
                        </p>
                      </div>
                    </div>
                    <p className="mt-2 pl-[52px] text-sm text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 rounded-2xl border border-[color-mix(in_srgb,var(--amara-smoked-teal)_20%,transparent)] bg-gradient-to-r from-[color-mix(in_srgb,var(--amara-smoked-teal)_12%,white)] to-transparent px-5 py-4 text-sm leading-relaxed text-espresso">
                Amara is not simply a dashboard company—we partner at the
                intersection of analytics, operations, technology, and growth
                strategy.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionBackdrop>
  );
}
