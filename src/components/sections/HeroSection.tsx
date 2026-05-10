import { ArrowRight, Braces, GraduationCap, ImageIcon, Users } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <Section id="inicio" spacing="hero" className="min-h-[calc(100vh-84px)]">
      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="min-w-0 max-w-3xl">
            <Badge className="mb-6">Turma de Informática CEAP</Badge>
            <h1 className="display-title text-gradient-subtle">{site.name}</h1>
            <p className="mt-5 max-w-2xl text-balance text-xl leading-8 text-muted sm:text-2xl">
              {site.slogan}
            </p>
            <p className="section-subtitle mt-6 max-w-2xl">
              Uma trajetória construída entre projetos, desafios, amizades e momentos que
              marcaram nossa história no CEAP.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#trajetoria" className="w-full sm:w-auto">
                Explorar trajetória
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href="#alunos" variant="secondary" className="w-full sm:w-auto">
                Ver alunos
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <Card
            variant="strong"
            padding="none"
            interactive={false}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 radial-wash" />
            <div className="relative p-5 sm:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="section-kicker">registro.turma</span>
                <Braces className="size-5 text-gold" aria-hidden="true" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-blue-soft bg-background/62">
                <div className="absolute inset-0 grid-background opacity-70" />
                <div className="absolute inset-0 radial-wash-gold opacity-70" />
                <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                  <span className="mb-5 grid size-14 place-items-center rounded-lg border border-blue-soft bg-primary/12 text-neon">
                    <ImageIcon className="size-7" aria-hidden="true" />
                  </span>
                  <p className="text-lg font-semibold text-foreground">
                    Foto oficial da turma
                  </p>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
                    Placeholder visual para a imagem principal da SIT 2026.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                  <Users className="mb-3 size-5 text-neon" aria-hidden="true" />
                  <p className="text-sm font-semibold text-foreground">Turma unida</p>
                  <p className="mt-1 text-sm text-muted">Projetos, rotina e histórias</p>
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                  <GraduationCap className="mb-3 size-5 text-gold" aria-hidden="true" />
                  <p className="text-sm font-semibold text-foreground">Rumo à formatura</p>
                  <p className="mt-1 text-sm text-muted">O próximo capítulo começa</p>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
