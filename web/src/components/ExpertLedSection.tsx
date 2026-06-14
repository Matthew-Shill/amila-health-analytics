import { TEAM_MEMBERS } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionBackdrop } from "@/components/ui/SectionBackdrop";
import { TeamProfileCard } from "@/components/TeamProfileCard";

export function ExpertLedSection() {
  return (
    <SectionBackdrop id="team" tone="warm">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <Reveal className="lg:pr-4">
          <p className="text-xs font-semibold uppercase tracking-[var(--amila-tracking-wide)] text-smoked-teal">
            Expert-led
          </p>
          <h2 className="mt-5 font-headline text-3xl font-semibold leading-[1.12] heading-accent sm:text-4xl lg:text-[2.65rem]">
            Human Expertise Behind Every Insight
          </h2>
          <span
            className="mt-5 block h-1 w-16 rounded-full bg-gradient-to-r from-pink via-blue to-transparent"
            aria-hidden
          />
          <p className="mt-6 text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-espresso)_78%,white)] sm:text-lg">
            Amila Health Analytics combines advanced quantitative analysis, thoughtful
            reporting, and healthcare-aware strategy to help clinics see what their current
            systems are not clearly showing.
          </p>
          <div className="mt-8">
            <Button href="/about">Learn More About Amila</Button>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={member.id} delay={(i + 1) as 0 | 1 | 2 | 3}>
              <TeamProfileCard member={member} variant="compact" />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionBackdrop>
  );
}
