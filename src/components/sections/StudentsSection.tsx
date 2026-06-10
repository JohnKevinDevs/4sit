import { Camera, Code2, Link, Quote, Sparkles, Target, UserRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { students, type StudentMock } from "@/data/students";
import { stripPlaceholder } from "@/lib/utils";

export function StudentsSection() {
  return (
    <Section id="alunos" className="bg-white/[0.015]">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5">Alunos da SIT</Badge>
          <h2 className="section-title">Quem fez parte da turma</h2>
          <p className="section-subtitle mt-4">
            Cada aluno fez parte dessa história de um jeito único. Cada nome
            representa uma trajetória, uma personalidade e uma contribuição para a
            turma.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
        {students.map((student, index) => (
          <Reveal key={student.id} delay={(index % 4) * 0.04}>
            <StudentCard student={student} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function StudentCard({ student }: { student: StudentMock }) {
  return (
    <Card padding="none" className="group flex h-full min-w-0 flex-col overflow-hidden">
      <div className="relative min-h-48 overflow-hidden border-b border-white/10 bg-background/54 sm:min-h-56">
        <ImageFrame
          src={student.image}
          alt={`Foto de ${student.name}`}
          icon={UserRound}
          placeholderLayout="split"
          showFilename={false}
          className="absolute inset-0 rounded-none border-0"
          contentClassName="p-4 sm:p-5"
        />

        <div className="relative flex h-full min-h-48 flex-col justify-between p-4 sm:min-h-56 sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <span aria-hidden="true" />
            <Badge variant="gold">{student.area}</Badge>
          </div>

          <div>
            <div className="mb-4 grid size-20 place-items-center rounded-xl border border-blue-soft bg-primary/10 text-2xl font-semibold text-foreground blue-glow-soft">
              {getInitials(student.name)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="break-words text-xl font-semibold leading-tight text-foreground sm:text-2xl">
          {student.name}
        </h3>
        <p className="mt-4 border-l border-blue-soft pl-4 text-sm leading-6 text-muted">
          “{stripPlaceholder(student.quote)}”
        </p>

        <div className="mt-5 space-y-3">
          <StudentDetail
            icon={Quote}
            label="Memória"
            value={stripPlaceholder(student.memory) ?? ""}
          />
          <StudentDetail
            icon={Target}
            label="Futuro"
            value={stripPlaceholder(student.future) ?? ""}
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
          <Button
            href={student.links.github}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            aria-label={`GitHub de ${student.name}`}
            title={`GitHub de ${student.name}`}
            className="size-10 p-0"
          >
            <Code2 className="size-4" aria-hidden="true" />
          </Button>
          <Button
            href={student.links.linkedin}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            aria-label={`LinkedIn de ${student.name}`}
            title={`LinkedIn de ${student.name}`}
            className="size-10 p-0"
          >
            <Link className="size-4" aria-hidden="true" />
          </Button>
          <Button
            href={student.links.instagram}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="sm"
            aria-label={`Instagram de ${student.name}`}
            title={`Instagram de ${student.name}`}
            className="size-10 p-0"
          >
            <Camera className="size-4" aria-hidden="true" />
          </Button>
          <Sparkles className="ml-auto size-4 text-gold opacity-70" aria-hidden="true" />
        </div>
      </div>
    </Card>
  );
}

interface StudentDetailProps {
  icon: typeof Quote;
  label: string;
  value: string;
}

function StudentDetail({ icon: Icon, label, value }: StudentDetailProps) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon">
        <Icon className="size-3.5" aria-hidden="true" />
        {label}
      </div>
      <p className="break-words text-sm leading-6 text-muted">{value}</p>
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
