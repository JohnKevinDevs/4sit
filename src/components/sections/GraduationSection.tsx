import { ArrowUp, Camera, GalleryHorizontal, GraduationCap, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function GraduationSection() {
  return (
    <Section id="formatura" spacing="loose" className="bg-white/[0.015]">
      <div className="grid min-w-0 gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12">
        <Reveal>
          <div className="min-w-0">
            <Badge variant="gold" className="mb-5">
              Formatura / Encerramento
            </Badge>
            <h2 className="section-title">
              O fim de um ciclo. O começo de muitos caminhos.
            </h2>
            <p className="section-subtitle mt-6 max-w-3xl">
              A SIT encerra sua jornada no CEAP levando amizades, aprendizados,
              desafios superados e histórias que ficarão para sempre. A formatura
              não marca apenas uma despedida, mas o início de novos capítulos.
            </p>

            <p className="mt-8 text-balance text-3xl font-semibold leading-tight text-gradient-subtle sm:text-4xl">
              O ciclo termina. O legado continua.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#galeria" className="w-full sm:w-auto">
                <GalleryHorizontal className="size-4" aria-hidden="true" />
                Ver galeria
              </Button>
              <Button href="#inicio" variant="secondary" className="w-full sm:w-auto">
                <ArrowUp className="size-4" aria-hidden="true" />
                Voltar ao início
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card
            variant="strong"
            padding="none"
            interactive={false}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 radial-wash-gold" />
            <div className="relative p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="section-kicker text-gold">foto.formatura</span>
                <GraduationCap className="size-5 text-gold" aria-hidden="true" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-gold-soft bg-background/62">
                <div className="absolute inset-0 grid-background opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/14 via-transparent to-primary/10" />
                <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                  <span className="mb-5 grid size-14 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold">
                    <Camera className="size-7" aria-hidden="true" />
                  </span>
                  <p className="text-lg font-semibold text-foreground">
                    Foto oficial da formatura
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                    Placeholder para o registro final da SIT 2026.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-md border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon">
                  <Sparkles className="size-4" aria-hidden="true" />
                  próximo.capítulo
                </div>
                <p className="text-sm leading-6 text-muted">
                  Espaço reservado para a mensagem oficial de encerramento da turma.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
