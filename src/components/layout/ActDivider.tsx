import { ChevronsDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActDividerProps {
  act: "02" | "03";
  name: string;
  glyph: "chevron" | "sparkles";
  className?: string;
}

const icons = {
  chevron: ChevronsDown,
  sparkles: Sparkles,
};

export function ActDivider({ act, name, glyph, className }: ActDividerProps) {
  const Icon = icons[glyph];

  return (
    <div className={cn("py-8 sm:py-12", className)} aria-label={`Ato ${act}: ${name}`}>
      <div className="site-container">
        <div className="flex items-center gap-3 text-center sm:gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/12 to-white/12" />
          <div className="flex min-w-0 max-w-[72%] items-center justify-center gap-2 text-muted sm:max-w-none sm:gap-3">
            <Icon className="size-4 shrink-0 text-neon/80" aria-hidden="true" />
            <p className="text-balance text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.12em] sm:text-xs sm:tracking-[0.18em]">
              Ato {act} <span className="text-gold">—</span>{" "}
              <span className="text-foreground">{name}</span>
            </p>
          </div>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/12 to-white/12" />
        </div>
      </div>
    </div>
  );
}
