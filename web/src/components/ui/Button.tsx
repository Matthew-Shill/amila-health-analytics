import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "btn-primary bg-gradient-to-br from-blue to-espresso-deep text-white shadow-[0_14px_40px_-10px_color-mix(in_srgb,var(--amila-blue)_45%,transparent)] hover:shadow-[0_18px_48px_-8px_color-mix(in_srgb,var(--amila-blue)_40%,transparent)] hover:scale-[1.03] active:scale-[0.98]",
  secondary:
    "bg-surface text-espresso border border-blue/15 shadow-[0_4px_16px_-8px_color-mix(in_srgb,var(--amila-blue)_10%,transparent)] hover:border-blue/35 hover:text-blue hover:scale-[1.02]",
  ghost:
    "bg-transparent text-espresso hover:text-blue underline-offset-4 hover:underline",
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

function isClientRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (isClientRoute(href)) {
      const anchorProps = props as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;
      return (
        <Link to={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }

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
