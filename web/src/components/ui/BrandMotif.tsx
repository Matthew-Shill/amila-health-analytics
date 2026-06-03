import { LOGO } from "@/lib/brand";

interface BrandMotifProps {
  className?: string;
  opacity?: number;
}

export function BrandMotif({ className = "", opacity = 0.06 }: BrandMotifProps) {
  return (
    <img
      src={LOGO.iconStone}
      alt=""
      aria-hidden
      className={`pointer-events-none select-none object-contain ${className}`}
      style={{ opacity }}
    />
  );
}
