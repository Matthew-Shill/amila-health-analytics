import { useState, type ReactNode } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type CollapsibleOnMobileProps = {
  label: string;
  expandedLabel?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  /** When true, children render without a wrapper on sm+ viewports (for grid layouts). */
  preserveDesktopLayout?: boolean;
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function CollapsibleOnMobile({
  label,
  expandedLabel = "Show less",
  children,
  className = "",
  contentClassName = "",
  preserveDesktopLayout = false,
}: CollapsibleOnMobileProps) {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const [open, setOpen] = useState(false);

  if (!isMobile) {
    if (preserveDesktopLayout) {
      return <>{children}</>;
    }
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 rounded-xl border border-[color-mix(in_srgb,var(--amila-nude-stone)_50%,transparent)] bg-[color-mix(in_srgb,var(--amila-pearl)_80%,white)] px-4 py-3 text-sm font-semibold text-espresso transition-colors hover:border-smoked-teal hover:text-smoked-teal"
      >
        <span>{open ? expandedLabel : label}</span>
        <ChevronIcon open={open} />
      </button>
      {open && <div className={contentClassName}>{children}</div>}
    </div>
  );
}
