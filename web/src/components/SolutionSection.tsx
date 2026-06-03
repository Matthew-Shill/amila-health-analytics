import { SOLUTION_POINTS } from "@/lib/content";
import {
  AmaraIcon,
  SOLUTION_POINT_ICONS,
  WORKFLOW_ICONS,
} from "@/components/ui/icons/AmaraIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";

const workflow = [
  { label: "Collect", desc: "Unify data across systems" },
  { label: "Analyze", desc: "Surface patterns, gaps, and hidden opportunities" },
  { label: "Report", desc: "Build executive-ready dashboards and insight summaries" },
  { label: "Act", desc: "Prioritize the decisions most likely to improve performance" },
];

export function SolutionSection() {
  return (
    <SectionBackdrop id="solution" tone="teal-rich">
      <div className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="The Amara approach"
            title="Amara transforms scattered data into practical clarity and insight."
            subtitle="We help health and wellness organizations move from fragmented reporting to a clear view of what is driving profit, retention, and growth."
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
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_70%,var(--amara-espresso))] shadow-md"
                    aria-hidden
                  >
                    <AmaraIcon
                      name={SOLUTION_POINT_ICONS[i]}
                      className="h-[18px] w-[18px] text-pearl"
                    />
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
                Our approach
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {workflow.map((step, i) => (
                  <div
                    key={step.label}
                    className="group rounded-2xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_30%,transparent)] bg-white/50 p-4 transition-all hover:border-smoked-teal/40 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pearl ring-2 ring-[color-mix(in_srgb,var(--amara-smoked-teal)_25%,transparent)]">
                        <AmaraIcon
                          name={WORKFLOW_ICONS[i]}
                          className="h-5 w-5 text-smoked-teal"
                        />
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
                Amara is not simply a dashboard company. We partner at the intersection of
                analytics, operations, technology, and growth strategy.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionBackdrop>
  );
}
