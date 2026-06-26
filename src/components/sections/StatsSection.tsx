import { Clock3, FolderKanban, HeartHandshake, UsersRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  {
    value: "2 anos",
    label: "De História",
    description: "Tempo de estudo, prática e evolução técnica.",
    icon: Clock3,
    tone: "blue",
  },
  {
    value: "1 turma",
    label: "Cheia de Histórias",
    description: "Uma jornada coletiva com identidades diferentes.",
    icon: UsersRound,
    tone: "gold",
  },
  {
    value: "Vários projetos",
    label: "Desenvolvidos",
    description: "Ideias transformadas em protótipos e entregas.",
    icon: FolderKanban,
    tone: "blue",
  },
  {
    value: "Inúmeras memórias",
    label: "Construídas",
    description: "Momentos que ficam para além do laboratório.",
    icon: HeartHandshake,
    tone: "gold",
  },
];

export function StatsSection() {
  return (
    <Section id="numeros">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5">Números da turma</Badge>
          <h2 className="section-title">O tamanho da nossa caminhada</h2>
          <p className="section-subtitle mt-4">
            Alguns números não contam tudo, mas ajudam a lembrar o tamanho da nossa
            caminhada.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isGold = stat.tone === "gold";

          return (
            <Reveal key={stat.value} delay={index * 0.04}>
              <Card padding="lg" className="h-full">
                <div
                  className={[
                    "mb-6 grid size-11 place-items-center rounded-md border",
                    isGold
                      ? "border-gold-soft bg-gold/10 text-gold"
                      : "border-blue-soft bg-primary/10 text-neon",
                  ].join(" ")}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <p className="break-words text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                <p className={isGold ? "mt-2 font-semibold text-gold" : "mt-2 font-semibold text-neon"}>
                  {stat.label}
                </p>
                <p className="mt-4 text-sm leading-6 text-muted">{stat.description}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
