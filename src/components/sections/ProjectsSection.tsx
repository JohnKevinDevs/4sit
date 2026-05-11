import { ExternalLink, FolderKanban, ImageIcon, UsersRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
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

      <div className="mt-10 grid min-w-0 gap-4 lg:grid-cols-2">
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
          "relative min-h-56 overflow-hidden border-b border-white/10 bg-background/54",
          featured && "lg:min-h-72",
        )}
      >
        <div className="absolute inset-0 grid-background opacity-55" />
        <div className="absolute inset-0 radial-wash opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-gold/10" />

        <div className="relative flex h-full min-h-56 flex-col justify-between p-5">
          <div className="flex items-center justify-between gap-4">
            <span className="grid size-12 place-items-center rounded-lg border border-blue-soft bg-background/72 text-neon soft-transition group-hover:border-neon">
              <ImageIcon className="size-6" aria-hidden="true" />
            </span>
            <Badge variant={featured ? "gold" : "blue"}>
              {featured ? "Destaque" : "Projeto"}
            </Badge>
          </div>

          <p className="mt-12 break-words font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
            {project.image.replace("/images/placeholders/", "")}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-3 text-neon">
          <FolderKanban className="size-5" aria-hidden="true" />
          <span className="section-kicker">portfolio.item</span>
        </div>
        <h3 className="text-2xl font-semibold leading-tight text-foreground">
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
          <p className="text-sm leading-7 text-muted">{project.members.join(", ")}</p>
        </div>

        <div className="mt-auto pt-5">
          {hasLink ? (
            <Button href={project.link} target="_blank" rel="noreferrer" variant="secondary">
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
