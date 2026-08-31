import { cn } from "@/lib/utils";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90",
  secondary: "border border-border text-foreground hover:bg-surface-hover",
  ghost: "text-foreground hover:bg-surface-hover",
  outline:
    "border border-border text-foreground hover:border-primary/50 hover:text-primary",
};

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-12 px-8 text-base",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as ButtonAsLink;
    if (external || href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...rest}
        />
      );
    }
    return <Link href={href} className={classes} {...rest} />;
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton & {
    href?: undefined;
  };
  return <button className={classes} {...buttonProps} />;
}
