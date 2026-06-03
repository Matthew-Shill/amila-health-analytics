import { useState } from "react";
import { WHO_WE_SERVE_SIZES } from "@/lib/content";
import { AmaraIcon, WHO_WE_SERVE_SIZE_ICONS } from "@/components/ui/icons/AmaraIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";

const SPECTRUM_NODES = [
  { x: 6, y: 82, size: 44 },
  { x: 26, y: 66, size: 52 },
  { x: 50, y: 48, size: 60 },
  { x: 74, y: 30, size: 68 },
  { x: 94, y: 14, size: 76 },
] as const;

export function OrganizationSizeSpectrum() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTier = WHO_WE_SERVE_SIZES[activeIndex];

  return (
    <SectionBackdropWide tone="warm" motif>
      <Reveal>
        <SectionHeading
          eyebrow="Every stage of growth"
          title="From sole practitioners to major corporations."
          subtitle="We meet organizations where they are—designing analytics that fit your team size, systems, and decision-making needs without unnecessary complexity."
        />
      </Reveal>

      <Reveal delay={1}>
        <div className="growth-spectrum mt-14 lg:mt-16">
          <div
            className="relative mx-auto aspect-[16/9] max-h-[22rem] w-full max-w-5xl sm:aspect-[2/1] lg:max-h-[26rem]"
            role="tablist"
            aria-label="Organization size spectrum"
          >
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="growth-arc-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--amara-nude-stone)" stopOpacity="0.55" />
                  <stop offset="45%" stopColor="var(--amara-smoked-teal)" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="var(--amara-espresso)" stopOpacity="0.85" />
                </linearGradient>
                <linearGradient id="growth-fill-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--amara-nude-stone)" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="var(--amara-smoked-teal)" stopOpacity="0.18" />
                </linearGradient>
              </defs>

              <path
                d="M 4 88 Q 50 92 96 10"
                fill="none"
                stroke="url(#growth-arc-gradient)"
                strokeWidth="0.65"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                className="growth-spectrum-track"
              />
              <path
                d="M 4 88 Q 50 92 96 10 L 96 100 L 4 100 Z"
                fill="url(#growth-fill-gradient)"
                className="growth-spectrum-fill"
              />

              {SPECTRUM_NODES.map((node, i) =>
                i <= activeIndex ? (
                  <circle
                    key={node.x}
                    cx={node.x}
                    cy={node.y}
                    r={node.size / 28}
                    fill="none"
                    stroke="var(--amara-smoked-teal)"
                    strokeWidth="0.35"
                    strokeOpacity={0.15 + i * 0.08}
                    className="growth-spectrum-pulse"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ) : null,
              )}
            </svg>

            {WHO_WE_SERVE_SIZES.map((tier, i) => {
              const node = SPECTRUM_NODES[i];
              const isActive = i === activeIndex;
              const nodeSize = node.size;

              return (
                <button
                  key={tier.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="growth-spectrum-panel"
                  id={`growth-spectrum-tab-${i}`}
                  onClick={() => setActiveIndex(i)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-smoked-teal focus-visible:ring-offset-2 focus-visible:ring-offset-pearl"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                  }}
                >
                  <span
                    className={`relative flex items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      isActive
                        ? "border-smoked-teal bg-gradient-to-br from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_75%,var(--amara-espresso))] text-pearl shadow-[0_16px_40px_-8px_rgba(67,105,106,0.55)]"
                        : "border-[color-mix(in_srgb,var(--amara-nude-stone)_55%,transparent)] bg-white/90 text-smoked-teal shadow-[0_8px_24px_-10px_rgba(75,52,43,0.18)] group-hover:border-smoked-teal/50 group-hover:shadow-[0_12px_32px_-8px_rgba(67,105,106,0.35)]"
                    }`}
                    style={{ width: nodeSize, height: nodeSize }}
                  >
                    <AmaraIcon
                      name={WHO_WE_SERVE_SIZE_ICONS[tier.title]}
                      className={`transition-transform duration-500 ${
                        isActive ? "h-6 w-6 scale-110" : "h-5 w-5 group-hover:scale-105"
                      }`}
                    />
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-full ring-4 ring-[color-mix(in_srgb,var(--amara-smoked-teal)_25%,transparent)]"
                        aria-hidden
                      />
                    )}
                  </span>
                  <span
                    className={`absolute left-1/2 top-[calc(100%+0.65rem)] w-max max-w-[7.5rem] -translate-x-1/2 text-center font-headline text-xs font-semibold leading-tight transition-colors sm:max-w-none sm:text-sm ${
                      isActive ? "text-espresso" : "text-[color-mix(in_srgb,var(--amara-espresso)_62%,white)]"
                    }`}
                  >
                    {tier.shortLabel}
                  </span>
                </button>
              );
            })}

            <div
              className="pointer-events-none absolute bottom-0 left-0 right-0 flex justify-between px-1 text-[0.65rem] font-semibold uppercase tracking-[var(--amara-tracking-wide)] text-[color-mix(in_srgb,var(--amara-espresso)_48%,white)] sm:text-xs"
              aria-hidden
            >
              <span>Starting out</span>
              <span>Scaling up</span>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2 sm:hidden">
            {WHO_WE_SERVE_SIZES.map((tier, i) => (
              <button
                key={tier.title}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  i === activeIndex
                    ? "bg-smoked-teal text-pearl"
                    : "border border-[color-mix(in_srgb,var(--amara-nude-stone)_45%,transparent)] bg-white/70 text-espresso"
                }`}
              >
                {tier.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={2}>
        <div
          id="growth-spectrum-panel"
          role="tabpanel"
          aria-labelledby={`growth-spectrum-tab-${activeIndex}`}
          className="glass-panel-strong relative mt-16 overflow-hidden rounded-[2rem] border border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] lg:mt-20"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--amara-smoked-teal)_18%,transparent)] blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-8 p-7 sm:p-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-12 lg:p-11">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow-pill">{activeTier.shortLabel}</span>
                <span className="text-xs font-medium text-[color-mix(in_srgb,var(--amara-espresso)_55%,white)]">
                  Stage {activeIndex + 1} of {WHO_WE_SERVE_SIZES.length}
                </span>
              </div>
              <h3 className="mt-5 font-headline text-2xl font-semibold leading-tight text-espresso sm:text-3xl">
                {activeTier.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_76%,white)]">
                {activeTier.description}
              </p>
            </div>

            <div className="relative rounded-2xl border border-[color-mix(in_srgb,var(--amara-smoked-teal)_22%,transparent)] bg-gradient-to-br from-[color-mix(in_srgb,var(--amara-smoked-teal)_10%,white)] via-white/80 to-[color-mix(in_srgb,var(--amara-nude-stone)_12%,white)] p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_70%,var(--amara-espresso))] shadow-md">
                  <AmaraIcon
                    name={WHO_WE_SERVE_SIZE_ICONS[activeTier.title]}
                    className="h-6 w-6 text-pearl"
                  />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[var(--amara-tracking-wide)] text-smoked-teal">
                    How Amara helps
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_78%,white)] sm:text-base">
                    {activeTier.help}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-t border-[color-mix(in_srgb,var(--amara-nude-stone)_35%,transparent)] px-7 py-4 sm:px-9 lg:px-11">
            <div className="flex items-center gap-2">
              {WHO_WE_SERVE_SIZES.map((tier, i) => (
                <button
                  key={tier.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`View ${tier.title}`}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                    i === activeIndex
                      ? "bg-gradient-to-r from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_70%,var(--amara-espresso))]"
                      : i < activeIndex
                        ? "bg-[color-mix(in_srgb,var(--amara-smoked-teal)_45%,var(--amara-nude-stone))]"
                        : "bg-[color-mix(in_srgb,var(--amara-nude-stone)_55%,transparent)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionBackdropWide>
  );
}
