import { BookOpen, Building2, GraduationCap, Layers, Rocket } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const details = [
  { label: "Curso", value: "Informática", icon: BookOpen },
  { label: "Instituição", value: "CEAP", icon: Building2 },
  { label: "Turma", value: "SIT 2026", icon: GraduationCap },
  { label: "Área", value: "Tecnologia e Desenvolvimento", icon: Layers },
  { label: "Status", value: "Rumo à formatura", icon: Rocket },
];

export function AboutSection() {
  return (
    <Section id="sobre" className="bg-white/[0.015]">
      <div className="grid min-w-0 gap-4 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-10">
        <Reveal>
          <div className="min-w-0">
            <Badge className="mb-5">Sobre a SIT</Badge>
            <h2 className="section-title">Quem somos</h2>
            <div className="section-subtitle mt-5 max-w-3xl space-y-4 sm:mt-6 sm:space-y-5">
              <p>
                Somos a turma SIT, formada por estudantes de Informática do CEAP. Ao
                longo da nossa trajetória, vivemos desafios, aprendizados, projetos,
                apresentações e momentos que ajudaram a formar não apenas profissionais,
                mas pessoas com histórias para contar.
              </p>
              <p>
                Mais do que uma turma técnica, somos um grupo que aprendeu a transformar
                ideias em soluções e experiências em legado.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <Card variant="strong" padding="lg" interactive={false} className="relative overflow-hidden">
            <div className="absolute inset-0 radial-wash-gold opacity-70" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6 sm:gap-4">
                <div>
                  <p className="section-kicker">perfil.turma</p>
                  <p className="mt-2 text-sm text-muted">Informações provisórias</p>
                </div>
                <Badge variant="gold">2026</Badge>
              </div>

              <dl className="space-y-3">
                {details.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="grid min-w-0 grid-cols-[2.25rem_1fr] gap-3 rounded-md border border-white/10 bg-background/36 p-3"
                    >
                      <span className="grid size-9 place-items-center rounded-md border border-blue-soft bg-primary/10 text-neon">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                          {item.label}
                        </dt>
                        <dd className="mt-1 break-words text-sm font-semibold text-foreground">
                          {item.value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
