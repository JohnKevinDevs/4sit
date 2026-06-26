import { ArrowRight, Braces, ImageIcon } from "lucide-react";
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
      className="relative min-h-[calc(100svh-116px)] overflow-hidden sm:min-h-[calc(100svh-84px)]"
    >
      <Constellation className="-right-28 top-16 h-28 w-[30rem] opacity-45 sm:-right-16 sm:top-24 sm:h-32 sm:w-[38rem] sm:opacity-70 lg:right-8 lg:top-32" />
      <div className="relative z-10 grid min-w-0 items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <Reveal>
          <div className="min-w-0 max-w-3xl">
            <Badge className="mb-4 sm:mb-6">Turma de Informática CEAP</Badge>
            <h1 className="display-title text-gradient-subtle">{site.name}</h1>
            <p className="mt-4 max-w-2xl text-balance text-lg leading-7 text-muted sm:mt-5 sm:text-2xl sm:leading-8">
              {site.slogan}
            </p>
            <p className="section-subtitle mt-5 max-w-2xl sm:mt-6">
              Uma trajetória construída entre projetos, desafios, amizades e momentos que
              marcaram nossa história no CEAP.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Button href="#alunos" className="min-h-12 w-full sm:w-auto">
                Ver alunos
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
              <Button href="#projetos" variant="secondary" className="min-h-12 w-full sm:w-auto">
                Ver projetos
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
            <div className="relative p-4 sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
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

              <div className="mt-4 rounded-md border border-white/10 bg-white/[0.035] p-3 sm:p-4">
                <p className="text-sm font-semibold leading-6 text-foreground">
                  Será atualizado, aguarde os próximos capítulos!
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
