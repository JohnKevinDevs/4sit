import { Braces } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/78 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="group inline-flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-md border border-blue-soft bg-primary/12 text-neon soft-transition group-hover:border-neon group-hover:bg-primary/18">
            <Braces size={20} strokeWidth={2.2} />
          </span>
          <span className="font-mono text-sm font-semibold tracking-[0.2em] text-foreground">
            {"{ SIT }"} <span className="text-gold">2026</span>
          </span>
        </a>

        <nav aria-label={`Navegação principal ${site.name}`} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted soft-transition hover:bg-white/[0.06] hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <nav
        aria-label="Navegação principal mobile"
        className="border-t border-white/10 px-5 py-2 md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl gap-2 overflow-x-auto pb-1">
          {navigation.map((item) => (
            <li key={item.href} className="shrink-0">
              <a
                href={item.href}
                className="block rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-muted soft-transition hover:border-blue-soft hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
