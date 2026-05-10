import {
  Code2,
  GraduationCap,
  ImageIcon,
  Rocket,
  Terminal,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

const timelineIcons: Record<string, LucideIcon> = {
  Code2,
  Users,
  Rocket,
  Terminal,
  GraduationCap,
};

export function TimelineSection() {
  return (
    <Section id="trajetoria" className="bg-white/[0.015]">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5">Linha do tempo</Badge>
          <h2 className="section-title">Nossa trajetória</h2>
          <p className="section-subtitle mt-4">
            Cada etapa da SIT representa uma parte da nossa evolução. Do começo cheio
            de expectativas até a reta final da formatura, cada momento ajudou a
            construir nosso legado.
          </p>
        </div>
      </Reveal>

      <div className="relative mt-14">
        <div
          aria-hidden="true"
          className="absolute bottom-6 left-5 top-2 w-px bg-gradient-to-b from-neon/0 via-neon/35 to-gold/0 md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-8 md:space-y-0">
          {timeline.map((item, index) => {
            const Icon = timelineIcons[item.icon] ?? ImageIcon;
            const isEven = index % 2 === 0;
            const isMilestone = index === timeline.length - 1 || item.icon === "GraduationCap";

            return (
              <Reveal key={item.id} delay={index * 0.04}>
                <article
                  className={cn(
                    "relative grid min-w-0 gap-5 pl-14 md:grid-cols-[1fr_4rem_1fr] md:gap-6 md:pl-0",
                    index > 0 && "md:-mt-8",
                  )}
                >
                  <div
                    className={cn(
                      "hidden md:block",
                      isEven ? "md:order-1" : "md:order-3",
                    )}
                  >
                    <TimelineCard
                      item={item}
                      Icon={Icon}
                      isMilestone={isMilestone}
                      align={isEven ? "right" : "left"}
                    />
                  </div>

                  <div className="absolute left-0 top-6 z-10 md:static md:order-2 md:flex md:justify-center">
                    <span
                      className={cn(
                        "grid size-10 place-items-center rounded-lg border bg-background text-neon blue-glow-soft",
                        isMilestone
                          ? "border-gold-soft text-gold"
                          : "border-blue-soft text-neon",
                      )}
                    >
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="md:hidden">
                    <TimelineCard item={item} Icon={Icon} isMilestone={isMilestone} />
                  </div>

                  <div
                    className={cn(
                      "hidden md:block",
                      isEven ? "md:order-3" : "md:order-1",
                    )}
                    aria-hidden="true"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

interface TimelineCardProps {
  item: (typeof timeline)[number];
  Icon: LucideIcon;
  isMilestone: boolean;
  align?: "left" | "right";
}

function TimelineCard({
  item,
  Icon,
  isMilestone,
  align = "left",
}: TimelineCardProps) {
  return (
    <Card
      padding="none"
      interactive
      className={cn("relative overflow-hidden", align === "right" && "md:text-right")}
    >
      <div className={cn("absolute inset-0 opacity-75", isMilestone ? "radial-wash-gold" : "radial-wash")} />
      <div className="relative grid min-w-0 gap-5 p-5 sm:p-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div
          className={cn(
            "relative min-h-40 overflow-hidden rounded-md border bg-background/54",
            isMilestone ? "border-gold-soft" : "border-blue-soft",
            align === "right" && "lg:order-2",
          )}
        >
          <div className="absolute inset-0 grid-background opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10" />
          <div className="relative flex h-full min-h-40 flex-col justify-between p-4">
            <span
              className={cn(
                "grid size-10 place-items-center rounded-md border bg-background/72",
                isMilestone ? "border-gold-soft text-gold" : "border-blue-soft text-neon",
              )}
            >
              <ImageIcon className="size-5" aria-hidden="true" />
            </span>
            <p className="mt-8 break-words font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
              {item.image.replace("/images/placeholders/", "")}
            </p>
          </div>
        </div>

        <div className="min-w-0 self-center">
          <div
            className={cn(
              "mb-4 flex items-center gap-3",
              align === "right" && "md:justify-end",
            )}
          >
            <Badge variant={isMilestone ? "gold" : "blue"}>{item.period}</Badge>
            <span className="hidden size-9 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-muted lg:grid">
              <Icon className="size-4" aria-hidden="true" />
            </span>
          </div>
          <h3 className="text-balance text-2xl font-semibold leading-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
        </div>
      </div>
    </Card>
  );
}
