import { ArrowRight, ArrowUp, Camera, GraduationCap, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ImageFrame } from "@/components/ui/ImageFrame";
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
            <p className="section-subtitle mt-5 max-w-3xl sm:mt-6">
              A SIT encerra sua jornada no CEAP levando amizades, aprendizados,
              desafios superados e histórias que ficarão para sempre. A formatura
              não marca apenas uma despedida, mas o início de novos capítulos.
            </p>

            <p className="mt-7 text-balance text-2xl font-semibold leading-tight text-gradient-subtle sm:mt-8 sm:text-4xl">
              O ciclo termina. O legado continua.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Button href="#alunos" className="w-full sm:w-auto">
                <ArrowRight className="size-4" aria-hidden="true" />
                Ver alunos
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
            <div className="relative p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
                <span className="section-kicker text-gold">foto.formatura</span>
                <GraduationCap className="size-5 text-gold" aria-hidden="true" />
              </div>

              <ImageFrame
                src="/images/placeholders/formatura-oficial.jpg"
                alt="Foto oficial da formatura da SIT 2026"
                title="Foto oficial da formatura"
                description="O encerramento de um ciclo e o início dos próximos caminhos."
                icon={Camera}
                tone="gold"
                showFilename={false}
                className="aspect-[4/3]"
              />

              <div className="mt-4 rounded-md border border-white/10 bg-white/[0.035] p-3 sm:p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon">
                  <Sparkles className="size-4" aria-hidden="true" />
                  próximo.capítulo
                </div>
                <p className="text-sm leading-6 text-muted">
                  Do primeiro Código ao Próximo Capítulo.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
