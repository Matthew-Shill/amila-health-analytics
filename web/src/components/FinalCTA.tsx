import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrandMotif } from "@/components/ui/BrandMotif";

export function FinalCTA() {
  return (
    <section className="section-pad section-tone-default">
      <div className="container-narrow">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-espresso via-[color-mix(in_srgb,var(--amila-espresso)_90%,var(--amila-smoked-teal))] to-smoked-teal px-8 py-16 text-center sm:px-14 lg:py-24">
            <BrandMotif
              className="absolute -left-4 top-1/2 h-48 w-48 -translate-y-1/2 opacity-[0.12]"
              opacity={0.12}
            />
            <BrandMotif
              className="absolute -right-4 bottom-0 h-40 w-40 opacity-[0.08]"
              opacity={0.08}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, #D8C0A8 0%, transparent 40%), radial-gradient(circle at 70% 80%, #43696A 0%, transparent 50%)",
              }}
              aria-hidden
            />
            <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-[color-mix(in_srgb,var(--amila-pearl)_70%,white)]">
              Start today
            </p>
            <h2 className="relative mt-4 font-headline text-3xl font-semibold leading-tight text-pearl sm:text-4xl lg:text-5xl">
              Better data. Better decisions. Better care.
            </h2>
            <p className="relative mx-auto mt-6 max-w-lg text-base leading-relaxed text-[color-mix(in_srgb,var(--amila-pearl)_88%,white)]">
              Start building a clearer picture of your organization and discover
              opportunities hidden in your data.
            </p>
            <div className="relative mt-10 flex flex-wrap justify-center gap-4">
              <Button
                href="#contact"
                className="!from-pearl !to-[color-mix(in_srgb,var(--amila-pearl)_92%,white)] !text-espresso !shadow-[0_16px_40px_-12px_rgba(0,0,0,0.25)] hover:!scale-[1.04]"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
