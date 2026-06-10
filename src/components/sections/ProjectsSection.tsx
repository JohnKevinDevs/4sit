import { ExternalLink, FolderKanban, ImageIcon, UsersRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { projects, type ProjectMock } from "@/data/projects";
import { cn, stripPlaceholder } from "@/lib/utils";

export function ProjectsSection() {
  return (
    <Section id="projetos" className="bg-white/[0.015]">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5">Projetos da turma</Badge>
          <h2 className="section-title">Projetos que marcaram nossa formação</h2>
          <p className="section-subtitle mt-4">
            Durante nossa jornada, transformamos aprendizados em projetos. Cada
            entrega representou uma etapa do nosso desenvolvimento técnico, criativo
            e profissional.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={(index % 2) * 0.05}>
            <ProjectCard project={project} featured={index === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: ProjectMock;
  featured?: boolean;
}) {
  const hasLink = project.link && project.link !== "#";

  return (
    <Card
      padding="none"
      className={cn("group h-full min-w-0 overflow-hidden", featured && "lg:row-span-2")}
    >
      <div
        className={cn(
          "relative min-h-48 overflow-hidden border-b border-white/10 bg-background/54 sm:min-h-56",
          featured && "lg:min-h-72",
        )}
      >
        <ImageFrame
          src={project.image}
          alt={`Imagem do projeto ${project.name}`}
          icon={ImageIcon}
          tone={featured ? "gold" : "blue"}
          placeholderLayout="split"
          className="absolute inset-0 rounded-none border-0"
          contentClassName="p-4 sm:p-5"
        />

        <div className="relative flex h-full min-h-48 flex-col justify-between p-4 sm:min-h-56 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <span aria-hidden="true" />
            <Badge variant={featured ? "gold" : "blue"}>
              {featured ? "Destaque" : "Projeto"}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-6">
        <div className="mb-4 flex items-center gap-3 text-neon">
          <FolderKanban className="size-5" aria-hidden="true" />
          <span className="section-kicker">portfolio.item</span>
        </div>
        <h3 className="break-words text-xl font-semibold leading-tight text-foreground sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-4 text-sm leading-7 text-muted">
          {stripPlaceholder(project.description)}
        </p>

        <div className="mt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            Tecnologias
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <Badge key={technology} variant="neutral">
                {technology}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-md border border-white/10 bg-white/[0.035] p-4">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon">
            <UsersRound className="size-4" aria-hidden="true" />
            Integrantes
          </div>
          <p className="break-words text-sm leading-7 text-muted">{project.members.join(", ")}</p>
        </div>

        <div className="mt-auto pt-5">
          {hasLink ? (
            <Button href={project.link} target="_blank" rel="noreferrer" variant="secondary" className="w-full sm:w-auto">
              Ver projeto
              <ExternalLink className="size-4" aria-hidden="true" />
            </Button>
          ) : (
            <Badge variant="gold">Link em breve</Badge>
          )}
        </div>
      </div>
    </Card>
  );
}
