import { useCallback, useEffect, useState } from "react";
import { DEMOS } from "@/lib/content";
import { DemoPreview } from "@/components/dashboard/DemoPreview";
import { DashboardTrustCallout } from "@/components/trust/DashboardTrustCallout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";

function NavChevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      {direction === "prev" ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  );
}

function DemoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const demo = DEMOS[activeIndex];
  const total = DEMOS.length;

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % total) + total) % total);
  }, [total]);

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowLeft") goTo(activeIndex - 1);
      if (e.key === "ArrowRight") goTo(activeIndex + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, goTo]);

  return (
    <div
      className="mt-10 lg:mt-12"
      role="region"
      aria-roledescription="carousel"
      aria-label="Demo work examples"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          className="-mx-1 flex gap-2 overflow-x-auto pb-1 scrollbar-thin"
          role="tablist"
          aria-label="Select demo"
        >
          {DEMOS.map((d, i) => {
            const selected = i === activeIndex;
            return (
              <button
                key={d.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`demo-panel-${d.id}`}
                id={`demo-tab-${d.id}`}
                onClick={() => goTo(i)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${
                  selected
                    ? "bg-smoked-teal text-pearl shadow-[0_8px_24px_-8px_rgba(67,105,106,0.55)]"
                    : "bg-white/70 text-espresso ring-1 ring-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] hover:bg-white hover:text-smoked-teal"
                }`}
              >
                {d.navLabel}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <p className="text-xs font-semibold uppercase tracking-wider text-smoked-teal">
            <span className="text-espresso">{activeIndex + 1}</span>
            <span className="text-[color-mix(in_srgb,var(--amara-espresso)_45%,white)]">
              {" "}
              / {total}
            </span>
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous demo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--amara-nude-stone)_45%,transparent)] bg-white/80 text-espresso transition-colors hover:border-smoked-teal hover:text-smoked-teal"
            >
              <NavChevron direction="prev" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next demo"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--amara-nude-stone)_45%,transparent)] bg-white/80 text-espresso transition-colors hover:border-smoked-teal hover:text-smoked-teal"
            >
              <NavChevron direction="next" />
            </button>
          </div>
        </div>
      </div>

      <article
        key={demo.id}
        id={`demo-panel-${demo.id}`}
        role="tabpanel"
        aria-labelledby={`demo-tab-${demo.id}`}
        data-case-study-slot={demo.id}
        className="demo-panel-enter card-lift mt-6 overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] bg-white/80 shadow-[0_24px_60px_-28px_rgba(75,52,43,0.2)]"
      >
        <div className="grid lg:grid-cols-[1.35fr_0.65fr] lg:items-stretch">
          <div className="border-b border-[color-mix(in_srgb,var(--amara-pearl)_60%,var(--amara-nude-stone))] bg-gradient-to-br from-[color-mix(in_srgb,var(--amara-pearl)_65%,white)] to-white p-5 sm:p-6 lg:border-b-0 lg:border-r lg:p-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-smoked-teal">
              Business question
            </p>
            <h3 className="mt-2 font-headline text-xl font-semibold leading-snug text-espresso sm:text-2xl lg:text-[1.65rem]">
              {demo.title}
            </h3>
            <div className="mt-5 sm:mt-6">
              <DemoPreview
                featured
                variant={demo.variant}
                dashboardTitle={demo.dashboardTitle}
                insight={demo.insight}
              />
            </div>
          </div>

          <div className="flex flex-col p-6 sm:p-7 lg:p-8">
            <DashboardTrustCallout />

            <div className="mt-6 flex flex-1 flex-col gap-5 text-sm">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                  Problem solved
                </p>
                <p className="mt-2 text-base leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_78%,white)]">
                  {demo.problemSolved}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                  Key metrics
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {demo.keyMetrics.map((m) => (
                    <li
                      key={m}
                      className="rounded-full bg-gradient-to-r from-[color-mix(in_srgb,var(--amara-nude-stone)_28%,white)] to-white px-3.5 py-1.5 text-xs font-semibold text-espresso ring-1 ring-[color-mix(in_srgb,var(--amara-nude-stone)_38%,transparent)]"
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-smoked-teal">
                  Decisions supported
                </p>
                <ul className="mt-3 space-y-2 text-[color-mix(in_srgb,var(--amara-espresso)_78%,white)]">
                  {demo.decisions.map((d) => (
                    <li key={d} className="flex gap-2.5 leading-relaxed">
                      <span className="mt-0.5 shrink-0 font-semibold text-smoked-teal">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 hidden gap-1.5 lg:grid lg:grid-cols-6">
              {DEMOS.map((_, i) => (
                <button
                  key={DEMOS[i].id}
                  type="button"
                  aria-label={`Go to ${DEMOS[i].navLabel} demo`}
                  onClick={() => goTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "bg-smoked-teal"
                      : "bg-[color-mix(in_srgb,var(--amara-nude-stone)_50%,white)] hover:bg-smoked-teal/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </article>

      <p className="mt-4 text-center text-[11px] text-[color-mix(in_srgb,var(--amara-espresso)_55%,white)] sm:text-xs">
        Use tabs, arrows, or ← → keys to explore each demo view.
      </p>
    </div>
  );
}

export function DemoWorkSection() {
  return (
    <SectionBackdropWide id="demo-work" tone="teal-rich" motif>
      <Reveal>
        <SectionHeading
          eyebrow="Demo work"
          title="See what clarity can look like."
          subtitle="Examples of the insights Amara can deliver. From retention risk and inventory waste, to profitability and executive decision support"
        />
      </Reveal>

      <Reveal delay={1}>
        <DemoShowcase />
      </Reveal>

      <Reveal>
        <div className="mt-14 flex justify-center">
          <Button href="#contact">Request Similar Analysis</Button>
        </div>
      </Reveal>
    </SectionBackdropWide>
  );
}
