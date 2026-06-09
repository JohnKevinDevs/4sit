import { ArrowRight, Braces, GraduationCap, ImageIcon, Users } from "lucide-react";
import { Constellation } from "@/components/effects/Constellation";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <Section
      id="inicio"
      spacing="hero"
      className="relative min-h-[calc(100svh-84px)] overflow-hidden"
    >
      <Constellation className="-right-16 top-24 h-32 w-[38rem] opacity-70 sm:right-8 lg:top-32" />
      <div className="relative z-10 grid min-w-0 items-center gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
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
              <Button href="#trajetoria" className="min-h-12 w-full sm:w-auto">
                Explorar trajetória
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href="#alunos" variant="secondary" className="min-h-12 w-full sm:w-auto">
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

              <ImageFrame
                src="/images/placeholders/hero-turma.jpg"
                alt="Foto oficial da turma SIT 2026"
                title="Foto oficial da turma"
                description="Placeholder visual para a imagem principal da SIT 2026."
                icon={ImageIcon}
                priority
                showFilename={false}
                className="aspect-[4/3]"
              />

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
