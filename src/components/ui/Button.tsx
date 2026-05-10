import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-primary text-white blue-glow hover:bg-neon hover:text-background",
  secondary:
    "border-blue-soft bg-white/[0.06] text-foreground hover:border-neon hover:bg-white/[0.1] hover:blue-glow-soft",
  ghost:
    "border-transparent bg-transparent text-muted hover:bg-white/[0.06] hover:text-foreground",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 py-2 text-xs",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-6 py-3 text-base",
};

const baseClass =
  "inline-flex items-center justify-center gap-2 rounded-md border font-semibold soft-transition disabled:pointer-events-none disabled:opacity-55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: LinkButtonProps | NativeButtonProps) {
  const classes = cn(baseClass, sizes[size], variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props as Omit<
      LinkButtonProps,
      "className" | "variant" | "size" | "children"
    >;

    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as Omit<
    NativeButtonProps,
    "className" | "variant" | "size" | "children"
  >;

  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
