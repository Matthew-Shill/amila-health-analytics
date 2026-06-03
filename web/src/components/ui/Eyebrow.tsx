interface EyebrowProps {
  children: string;
  className?: string;
}

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <span
      className={`eyebrow-pill inline-flex items-center gap-2 ${className}`}
      style={{ letterSpacing: "var(--amara-tracking-wide)" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-smoked-teal animate-pulse-soft" aria-hidden />
      {children}
    </span>
  );
}
