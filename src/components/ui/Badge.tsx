import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "blue" | "gold" | "neutral";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  blue: "border-blue-soft bg-primary/10 text-neon",
  gold: "border-gold-soft bg-gold/10 text-gold",
  neutral: "border-white/10 bg-white/[0.045] text-muted",
};

export function Badge({
  className,
  children,
  variant = "blue",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
