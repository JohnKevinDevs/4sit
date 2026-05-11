"use client";

import { ImageIcon, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { gallery } from "@/data/gallery";
import { cn, stripPlaceholder } from "@/lib/utils";

const allFilter = "Todos";

export function GallerySection() {
  const categories = useMemo(
    () => [allFilter, ...Array.from(new Set(gallery.map((item) => item.category)))],
    [],
  );
  const [activeCategory, setActiveCategory] = useState(allFilter);

  const visibleItems = useMemo(() => {
    if (activeCategory === allFilter) {
      return gallery;
    }

    return gallery.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <Section id="galeria">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5">Galeria de momentos</Badge>
          <h2 className="section-title">Momentos que viraram memória</h2>
          <p className="section-subtitle mt-4">
            Cada foto guarda uma parte da nossa história. Aqui ficam registrados os
            momentos que marcaram a caminhada da SIT.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mx-auto mt-9 flex max-w-5xl snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [mask-image:linear-gradient(to_right,transparent,black_1rem,black_calc(100%_-_1rem),transparent)] [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible md:pb-0 md:[mask-image:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <Button
                key={category}
                type="button"
                size="sm"
                variant={isActive ? "primary" : "secondary"}
                aria-pressed={isActive}
                onClick={() => setActiveCategory(category)}
                className="shrink-0 snap-start"
              >
                {category}
              </Button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-10 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item, index) => (
          <Reveal key={item.id} delay={(index % 6) * 0.03}>
            <Card
              padding="none"
              className={cn(
                "group h-full overflow-hidden",
                index === 0 && activeCategory === allFilter && "lg:col-span-2",
                index === 7 && activeCategory === allFilter && "lg:col-span-2",
              )}
            >
              <div
                className={cn(
                  "relative min-h-56 overflow-hidden border-b border-white/10 bg-background/54",
                  index === 0 && activeCategory === allFilter && "lg:min-h-72",
                )}
              >
                <div className="absolute inset-0 grid-background opacity-55" />
                <div className="absolute inset-0 radial-wash opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-gold/10" />

                <div className="relative flex h-full min-h-56 flex-col justify-between p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-md border border-blue-soft bg-background/72 text-neon soft-transition group-hover:border-neon">
                      <ImageIcon className="size-5" aria-hidden="true" />
                    </span>
                    <Sparkles className="size-4 text-gold opacity-75" aria-hidden="true" />
                  </div>

                  <p className="mt-12 break-words font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                    {item.image.replace("/images/placeholders/", "")}
                  </p>
                </div>
              </div>

              <div className="p-5">
                <Badge variant="neutral" className="mb-4">
                  {item.category}
                </Badge>
                <h3 className="text-xl font-semibold leading-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {stripPlaceholder(item.caption)}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
