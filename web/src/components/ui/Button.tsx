import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "btn-primary bg-gradient-to-br from-smoked-teal to-[color-mix(in_srgb,var(--amara-smoked-teal)_75%,var(--amara-espresso))] text-pearl shadow-[0_14px_40px_-10px_color-mix(in_srgb,var(--amara-smoked-teal)_55%,transparent)] hover:shadow-[0_18px_48px_-8px_color-mix(in_srgb,var(--amara-smoked-teal)_50%,transparent)] hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "bg-white/80 text-espresso border border-[color-mix(in_srgb,var(--amara-nude-stone)_60%,transparent)] shadow-[0_8px_24px_-12px_color-mix(in_srgb,var(--amara-espresso)_12%,transparent)] hover:border-smoked-teal hover:text-smoked-teal hover:scale-[1.02]",
  ghost:
    "bg-transparent text-espresso hover:text-smoked-teal underline-offset-4 hover:underline",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-smoked-teal disabled:opacity-50";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
