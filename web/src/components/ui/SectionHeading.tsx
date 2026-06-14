import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  children,
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const titleClass = light ? "text-pearl" : "heading-accent";
  const subClass = light
    ? "text-cream/90"
    : "text-espresso/75";

  return (
    <div className={`flex max-w-3xl flex-col ${alignClass} mb-14 lg:mb-16`}>
      {eyebrow && (
        <div className={`mb-5 ${align === "center" ? "mx-auto" : ""}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2
        className={`font-headline text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.85rem] ${titleClass}`}
      >
        {title}
      </h2>
      <span
        className={`section-divider mt-5 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
      {subtitle && (
        <p className={`mt-6 text-base leading-relaxed sm:text-lg ${subClass}`}>{subtitle}</p>
      )}
      {children}
    </div>
  );
}
