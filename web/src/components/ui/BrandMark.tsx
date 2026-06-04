import { COMPANY_NAME, LOGO } from "@/lib/brand";

type BrandMarkProps = {
  /** Tighter layout for the fixed header — locks icon size on mobile Safari. */
  variant?: "default" | "header";
};

const ICON_STYLE = {
  width: 40,
  height: 40,
  minWidth: 40,
  maxWidth: 40,
  flexShrink: 0,
  objectFit: "contain" as const,
};

export function BrandMark({ variant = "default" }: BrandMarkProps) {
  const isHeader = variant === "header";

  return (
    <div
      className={
        isHeader
          ? "flex min-w-0 max-w-full items-center gap-2 sm:gap-3"
          : "flex min-w-0 items-center gap-2.5 sm:gap-4"
      }
    >
      <img
        src={isHeader ? LOGO.iconTealPng : LOGO.iconTeal}
        alt=""
        className={
          isHeader
            ? "block shrink-0"
            : "size-11 shrink-0 max-w-none object-contain sm:size-14 md:size-16"
        }
        style={isHeader ? ICON_STYLE : undefined}
        width={40}
        height={40}
        aria-hidden
      />
      <div
        className={`min-w-0 flex-col justify-center overflow-hidden leading-none ${
          isHeader ? "hidden min-[380px]:flex sm:flex" : "flex"
        }`}
      >
        <span
          className={`truncate font-headline font-semibold text-smoked-teal ${
            isHeader
              ? "text-[1.05rem] tracking-[0.03em] sm:text-[1.65rem] sm:tracking-[0.06em]"
              : "text-[1.15rem] tracking-[0.04em] sm:text-[1.65rem] sm:tracking-[0.06em] md:text-[1.85rem]"
          }`}
        >
          AMILA
        </span>
        <span
          className={`truncate font-body font-semibold uppercase text-smoked-teal ${
            isHeader
              ? "mt-0.5 text-[0.55rem] tracking-[0.08em] sm:mt-1.5 sm:text-xs sm:tracking-[0.14em]"
              : "mt-0.5 text-[0.58rem] tracking-[0.1em] sm:mt-1.5 sm:text-xs sm:tracking-[0.14em] md:text-[0.8rem]"
          }`}
        >
          Health Analytics
        </span>
      </div>
      {isHeader ? (
        <span className="sr-only min-[380px]:hidden sm:hidden">{COMPANY_NAME}</span>
      ) : null}
    </div>
  );
}
