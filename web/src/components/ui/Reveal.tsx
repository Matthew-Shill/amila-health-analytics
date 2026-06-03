import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
}

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>();
  const delayClass =
    delay > 0 ? `reveal-delay-${delay}` : "";

  return (
    <div
      ref={ref}
      className={`${visible ? "is-visible" : ""} ${className}`}
    >
      <div className={`reveal ${delayClass}`}>{children}</div>
    </div>
  );
}
