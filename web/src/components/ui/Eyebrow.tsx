interface EyebrowProps {
  children: string;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`eyebrow-pill inline-flex items-center gap-2 ${className}`}
      style={{ letterSpacing: "var(--amila-tracking-wide)" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-pink animate-pulse-soft" aria-hidden />
      {children}
    </span>
  );
}
