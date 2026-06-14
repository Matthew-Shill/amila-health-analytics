import { HeroDashboard } from "@/components/dashboard/HeroDashboard";
import { HeroTrustStrip } from "@/components/trust/HeroTrustStrip";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MISSION, TAGLINE } from "@/lib/brand";

const heroTagline = TAGLINE;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 sm:pt-32 lg:pt-36">
      <div className="hero-mesh absolute inset-0" aria-hidden />
      <div
        className="orb orb-pink left-[8%] top-[18%] h-40 w-40 sm:h-52 sm:w-52"
        style={{ animationDelay: "0s" }}
        aria-hidden
      />
      <div
        className="orb orb-blue right-[12%] top-[8%] h-44 w-44 sm:h-56 sm:w-56"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />

      <div className="section-pad container-wide relative z-10 pb-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
          <div className="max-w-xl animate-fade-up">
            <Eyebrow className="mb-6">Healthcare & wellness clarity</Eyebrow>

            <h1 className="font-headline text-[2.65rem] font-semibold leading-[1.06] text-espresso-deep sm:text-5xl lg:text-[3.5rem]">
              {heroTagline.replace("AHA Moment", "").trim()}{" "}
              <span
                className="block bg-gradient-to-r from-blue via-blue to-pink bg-clip-text text-transparent sm:inline"
                style={{ fontFamily: "var(--amila-font-slogan)", fontWeight: 400, fontSize: "1.15em" }}
              >
                AHA Moment
              </span>
            </h1>

            <p className="mt-6 text-xl font-semibold leading-snug text-blue sm:text-2xl">
              {MISSION}
            </p>

            <p className="mt-5 text-base leading-relaxed text-espresso/80 sm:text-lg">
              Amila Health Analytics helps businesses uncover opportunities lost in the platforms
              they use. We curate cohesive reports that improve operations. Fostering better
              experiences for providers and clients backed by data.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact">Book a Consultation</Button>
              <Button href="#demo-work" variant="secondary">
                Explore Demo Work
              </Button>
            </div>

            <HeroTrustStrip />
          </div>

          <div
            className="dashboard-glow animate-fade-up lg:pl-2"
            style={{ animationDelay: "0.12s" }}
          >
            <HeroDashboard />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-blue/10 bg-surface/85 backdrop-blur-md">
        <div className="container-wide flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-5 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-espresso/70 sm:justify-between sm:px-8 sm:text-left lg:px-12">
          <span>
            <span className="keyword-emphasis">Revenue</span> clarity
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-pink sm:block" />
          <span>
            <span className="keyword-emphasis">Performance</span> visibility
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-pink sm:block" />
          <span>
            <span className="keyword-emphasis">Operational</span> clarity
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-pink sm:block" />
          <span>
            <span className="keyword-emphasis">Strategic</span> insights
          </span>
        </div>
      </div>
    </section>
  );
}
