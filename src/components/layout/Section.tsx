import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id: string;
  containerClassName?: string;
  spacing?: "compact" | "default" | "loose" | "hero";
}

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  compact: "py-14 sm:py-16",
  default: "py-20 sm:py-24",
  loose: "py-24 sm:py-32",
  hero: "py-24 sm:py-28 lg:py-32",
};

export function Section({
  id,
  className,
  containerClassName,
  spacing = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28", spacingClasses[spacing], className)}
      {...props}
    >
      <div className={cn("site-container", containerClassName)}>{children}</div>
    </section>
  );
}
