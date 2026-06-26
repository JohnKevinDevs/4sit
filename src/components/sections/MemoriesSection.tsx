import { BookOpen, HeartHandshake, Lightbulb, MessageSquareQuote, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { stripPlaceholder } from "@/lib/utils";
import type { MemoryItem, MemoryType } from "@/types/content";

const memoryMeta: Record<
  MemoryType,
  {
    label: string;
    icon: typeof Sparkles;
    badge: "blue" | "gold" | "neutral";
  }
> = {
  quote: { label: "Frase", icon: MessageSquareQuote, badge: "blue" },
  moment: { label: "Momento", icon: Sparkles, badge: "gold" },
  lesson: { label: "Aprendizado", icon: Lightbulb, badge: "blue" },
  "inside-joke": { label: "Memória interna", icon: BookOpen, badge: "neutral" },
  tribute: { label: "Homenagem", icon: HeartHandshake, badge: "gold" },
};

export function MemoriesSection({ memories }: { memories: MemoryItem[] }) {
  return (
    <Section id="memorias">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5">Memórias especiais</Badge>
          <h2 className="section-title">Coisas que só a SIT entende</h2>
          <p className="section-subtitle mt-4">
            Toda turma tem frases, momentos e histórias que só quem viveu entende.
            Essa seção guarda um pouco da personalidade da SIT.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
        {memories.map((memory, index) => (
          <Reveal key={memory.id} delay={(index % 3) * 0.04}>
            <MemoryCard memory={memory} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function MemoryCard({ memory }: { memory: MemoryItem }) {
  const meta = memoryMeta[memory.type];
  const Icon = meta.icon;

  return (
    <Card className="h-full overflow-hidden" padding="lg">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-md border border-blue-soft bg-primary/10 text-neon">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <Badge variant={meta.badge}>{meta.label}</Badge>
      </div>

      <h3 className="break-words text-xl font-semibold leading-tight text-foreground sm:text-2xl">
        {memory.title}
      </h3>
      <p className="mt-4 break-words text-sm leading-7 text-muted">
        {stripPlaceholder(memory.description)}
      </p>
    </Card>
  );
}
