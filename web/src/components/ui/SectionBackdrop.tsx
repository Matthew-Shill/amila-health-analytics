import type { ReactNode } from "react";
import { BrandMotif } from "@/components/ui/BrandMotif";

type Tone = "default" | "warm" | "teal" | "contrast";

const tones: Record<Tone, string> = {
  default: "section-tone-default",
  warm: "section-tone-warm",
  teal: "section-tone-teal",
  contrast: "section-tone-contrast",
};

interface SectionBackdropProps {
  tone?: Tone;
  children: ReactNode;
  className?: string;
  id?: string;
  motif?: boolean;
}

export function SectionBackdrop({
  tone = "default",
  children,
  className = "",
  id,
  motif = false,
}: SectionBackdropProps) {
  return (
    <section id={id} className={`section-pad relative overflow-hidden ${tones[tone]} ${className}`}>
      <div className="ambient-mesh pointer-events-none absolute inset-0" aria-hidden />
      {motif && (
        <BrandMotif
          className="absolute -right-8 top-1/2 h-64 w-64 -translate-y-1/2 opacity-[0.07] sm:h-80 sm:w-80"
          opacity={0.07}
        />
      )}
      <div className="container-narrow relative z-10">{children}</div>
    </section>
  );
}

export function SectionBackdropWide({
  tone = "default",
  children,
  className = "",
  id,
  motif = false,
}: SectionBackdropProps) {
  return (
    <section id={id} className={`section-pad relative overflow-hidden ${tones[tone]} ${className}`}>
      <div className="ambient-mesh pointer-events-none absolute inset-0" aria-hidden />
      {motif && (
        <BrandMotif
          className="absolute left-[-5%] bottom-0 h-56 w-56 opacity-[0.06]"
          opacity={0.06}
        />
      )}
      <div className="container-wide relative z-10">{children}</div>
    </section>
  );
}
