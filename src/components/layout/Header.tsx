"use client";

import { Braces } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { navigation, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const sectionIds = useMemo(
    () => navigation.map((item) => item.href.replace("#", "")),
    [],
  );
  const [activeHref, setActiveHref] = useState<string>(navigation[0]?.href ?? "#inicio");

  useEffect(() => {
    const updateFromHash = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.08, 0.2, 0.45],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      window.removeEventListener("hashchange", updateFromHash);
      observer.disconnect();
    };
  }, [sectionIds]);

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
                  aria-current={activeHref === item.href ? "location" : undefined}
                  onClick={() => setActiveHref(item.href)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium text-muted soft-transition hover:bg-white/[0.06] hover:text-foreground",
                    activeHref === item.href && "bg-white/[0.07] text-foreground",
                  )}
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
        <ul className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [mask-image:linear-gradient(to_right,transparent,black_1rem,black_calc(100%_-_1rem),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navigation.map((item) => (
            <li key={item.href} className="shrink-0 snap-start">
              <a
                href={item.href}
                aria-current={activeHref === item.href ? "location" : undefined}
                onClick={() => setActiveHref(item.href)}
                className={cn(
                  "block rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-muted soft-transition hover:border-blue-soft hover:text-foreground",
                  activeHref === item.href && "border-blue-soft bg-primary/12 text-foreground",
                )}
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
