import { MISSION, TAGLINE } from "@/lib/brand";
import { HeroDashboard } from "@/components/dashboard/HeroDashboard";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const heroTagline = TAGLINE;

const stats = [
  { label: "Retention clarity", value: "87%" },
  { label: "Marketing ROI", value: "4.2×" },
  { label: "Revenue growth", value: "+18%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="hero-mesh absolute inset-0" aria-hidden />
      <div
        className="orb orb-stone left-[5%] top-[20%] h-48 w-48 sm:h-64 sm:w-64"
        style={{ animationDelay: "0s" }}
        aria-hidden
      />
      <div
        className="orb orb-teal right-[10%] top-[10%] h-56 w-56 sm:h-72 sm:w-72"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />

      <div className="section-pad container-wide relative z-10 pb-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <div className="max-w-xl animate-fade-up">
            <Eyebrow className="mb-6">Healthcare & wellness intelligence</Eyebrow>

            <h1 className="font-headline text-[2.65rem] font-semibold leading-[1.06] text-espresso sm:text-5xl lg:text-[3.5rem]">
              {heroTagline.replace("AHA Moment", "").trim()}{" "}
              <span
                className="block sm:inline bg-gradient-to-r from-smoked-teal to-[color-mix(in_srgb,var(--amara-nude-stone)_90%,var(--amara-smoked-teal))] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--amara-font-slogan)", fontWeight: 400, fontSize: "1.15em" }}
              >
                AHA Moment
              </span>
            </h1>

            <p className="mt-6 text-xl font-medium leading-snug text-smoked-teal sm:text-2xl">
              {MISSION}
            </p>

            <p className="mt-5 text-base leading-relaxed text-[color-mix(in_srgb,var(--amara-espresso)_78%,white)] sm:text-lg">
              Amara Health Analytics helps healthcare, wellness, and aesthetic
              businesses uncover opportunities hidden within their data—creating
              smarter operations, stronger growth, and better experiences for both
              providers and patients.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {stats.map((s) => (
                <div key={s.label} className="stat-chip">
                  <strong>{s.value}</strong>{" "}
                  <span className="text-[color-mix(in_srgb,var(--amara-espresso)_65%,white)]">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contact">Book a Consultation</Button>
              <Button href="#demo-work" variant="secondary">
                Explore Demo Work
              </Button>
            </div>
          </div>

          <div
            className="dashboard-glow animate-fade-up lg:pl-2"
            style={{ animationDelay: "0.12s" }}
          >
            <HeroDashboard />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[color-mix(in_srgb,var(--amara-nude-stone)_40%,transparent)] bg-[color-mix(in_srgb,white_50%,var(--amara-pearl))]">
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-[color-mix(in_srgb,var(--amara-espresso)_55%,white)] sm:justify-between sm:px-8 sm:text-left lg:px-12">
          <span>Analytics</span>
          <span className="hidden h-1 w-1 rounded-full bg-nude-stone sm:block" />
          <span>Business intelligence</span>
          <span className="hidden h-1 w-1 rounded-full bg-nude-stone sm:block" />
          <span>Operations strategy</span>
          <span className="hidden h-1 w-1 rounded-full bg-nude-stone sm:block" />
          <span>Growth optimization</span>
        </div>
      </div>
    </section>
  );
}
