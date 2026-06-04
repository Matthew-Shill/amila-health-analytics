import { useEffect, useState } from "react";
import { WHO_WE_HELP } from "@/lib/content";
import { AmilaIcon, WHO_WE_HELP_ICONS } from "@/components/ui/icons/AmilaIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";
import { SeeMoreButton } from "@/components/ui/SeeMoreButton";

const DESKTOP_INITIAL_ROWS = 2;
const DESKTOP_ROWS_PER_EXPAND = 2;
const MOBILE_INITIAL_COUNT = 3;
const MOBILE_EXPAND_BY = 3;

function useGridColumns() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const xlQuery = window.matchMedia("(min-width: 1280px)");
    const smQuery = window.matchMedia("(min-width: 640px)");

    const update = () => {
      if (xlQuery.matches) setColumns(3);
      else if (smQuery.matches) setColumns(2);
      else setColumns(1);
    };

    update();
    xlQuery.addEventListener("change", update);
    smQuery.addEventListener("change", update);
    return () => {
      xlQuery.removeEventListener("change", update);
      smQuery.removeEventListener("change", update);
    };
  }, []);

  return columns;
}

function getInitialVisibleCount(columns: number) {
  if (columns === 1) return MOBILE_INITIAL_COUNT;
  return DESKTOP_INITIAL_ROWS * columns;
}

function getExpandIncrement(columns: number) {
  if (columns === 1) return MOBILE_EXPAND_BY;
  return DESKTOP_ROWS_PER_EXPAND * columns;
}

export function WhoWeHelpSection() {
  const columns = useGridColumns();
  const [visibleCount, setVisibleCount] = useState(() => getInitialVisibleCount(columns));

  useEffect(() => {
    setVisibleCount(getInitialVisibleCount(columns));
  }, [columns]);

  const visibleItems = WHO_WE_HELP.slice(0, visibleCount);
  const hasMore = visibleCount < WHO_WE_HELP.length;

  return (
    <SectionBackdropWide tone="default">
      <Reveal>
        <SectionHeading
          eyebrow="Industries & specialties"
          title="Healthcare and wellness organizations we serve."
          subtitle="From aesthetic clinics and med spas to health systems, corporate wellness programs, and everything in between—if your data supports better care and better business decisions, we can help."
        />
      </Reveal>

      <div className="relative">
        <div id="who-we-help-grid" className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) as 0 | 1 | 2 | 3}>
              <article className="card-lift card-accent group h-full rounded-2xl border border-[color-mix(in_srgb,var(--amila-nude-stone)_35%,transparent)] bg-white/75 p-6 shadow-[0_12px_40px_-18px_rgba(75,52,43,0.12)] lg:p-7">
                <div className="mb-4 flex items-center gap-3 rounded-xl bg-gradient-to-br from-[color-mix(in_srgb,var(--amila-smoked-teal)_15%,white)] to-transparent px-3 py-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/70 ring-1 ring-[color-mix(in_srgb,var(--amila-smoked-teal)_15%,transparent)]">
                    <AmilaIcon
                      name={WHO_WE_HELP_ICONS[card.title]}
                      className="h-5 w-5 text-smoked-teal"
                    />
                  </span>
                  <h3 className="font-headline text-xl font-semibold text-espresso transition-colors group-hover:text-smoked-teal">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_72%,white)]">
                  <span className="font-bold text-espresso">Challenge · </span>
                  {card.challenges}
                </p>
                <p className="mt-4 rounded-xl bg-[color-mix(in_srgb,var(--amila-smoked-teal)_8%,white)] px-4 py-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_78%,white)]">
                  <span className="font-bold text-smoked-teal">Amila · </span>
                  {card.help}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {hasMore && (
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[color-mix(in_srgb,var(--amila-pearl)_95%,white)] via-[color-mix(in_srgb,var(--amila-pearl)_70%,transparent)] to-transparent"
            aria-hidden
          />
        )}
      </div>

      {hasMore && (
        <SeeMoreButton
          ariaControls="who-we-help-grid"
          ariaExpanded={false}
          onClick={() =>
            setVisibleCount((count) =>
              Math.min(count + getExpandIncrement(columns), WHO_WE_HELP.length),
            )
          }
        />
      )}
    </SectionBackdropWide>
  );
}
