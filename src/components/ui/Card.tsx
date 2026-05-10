import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardVariant = "default" | "strong" | "quiet";
type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  interactive?: boolean;
}

const variants: Record<CardVariant, string> = {
  default: "glass-card",
  strong: "glass-card-strong",
  quiet: "border border-white/10 bg-white/[0.035]",
};

const paddings: Record<CardPadding, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-6 sm:p-8",
};

export function Card({
  className,
  children,
  variant = "default",
  padding = "md",
  interactive = true,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "min-w-0 rounded-lg soft-transition",
        variants[variant],
        paddings[padding],
        interactive && "hover:-translate-y-1 hover:border-blue-soft hover:blue-glow-soft",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
