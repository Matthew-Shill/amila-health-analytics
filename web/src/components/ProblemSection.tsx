import { PROBLEMS } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdropWide } from "@/components/ui/SectionBackdrop";

export function ProblemSection() {
  return (
    <SectionBackdropWide id="problem" tone="warm" motif>
      <Reveal>
        <SectionHeading
          eyebrow="The challenge"
          title="Your business is generating data every day. Most of it is going unused."
          subtitle="Important decisions are often made with incomplete information, disconnected systems, and reporting that doesn't tell the full story."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5">
        {PROBLEMS.map((item, i) => (
          <Reveal
            key={item.title}
            delay={(i % 5) as 0 | 1 | 2 | 3 | 4}
            className={
              i < 2 ? "lg:col-span-3" : "lg:col-span-2"
            }
          >
            <article
              className={`card-lift card-accent glass-panel group flex h-full flex-col rounded-2xl p-6 lg:p-7 ${
                i < 2 ? "lg:min-h-[200px] lg:flex-row lg:items-center lg:gap-6" : ""
              }`}
            >
              <span className="card-number shrink-0" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className={i === 0 ? "lg:flex-1" : ""}>
                <h3 className="font-headline text-xl font-semibold text-espresso transition-colors group-hover:text-smoked-teal sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_72%,white)] sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionBackdropWide>
  );
}
