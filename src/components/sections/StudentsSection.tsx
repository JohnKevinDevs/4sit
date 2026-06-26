import { Camera, Code2, Link, Quote, Sparkles, Target, UserRound } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn, stripPlaceholder } from "@/lib/utils";
import type { Student } from "@/types/content";

export function StudentsSection({ students }: { students: Student[] }) {
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

function StudentCard({ student }: { student: Student }) {
  const { github, linkedin, instagram } = student.links;

  return (
    <Card padding="none" className="group flex h-full min-w-0 flex-col overflow-hidden">
      <div className="border-b border-white/10 bg-background/54 px-4 py-6 text-center sm:px-5">
        <div className="mx-auto mb-4 size-40 rounded-full border border-blue-soft bg-background/70 p-1 blue-glow-soft sm:size-44">
          <ImageFrame
            src={student.image}
            alt={`Foto de ${student.name}`}
            icon={UserRound}
            placeholderLayout="center"
            showFilename={false}
            showImageOverlay={false}
            className="size-full rounded-full border-0 bg-white/[0.035]"
            contentClassName="items-center justify-center p-4"
            imageClassName={cn("object-cover object-center", getPortraitClassName(student.id))}
          />
        </div>

        <Badge variant="gold">{student.area}</Badge>
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

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          {github ? (
            <Button
              href={github}
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
          ) : null}
          {linkedin ? (
            <Button
              href={linkedin}
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
          ) : null}
          {instagram ? (
            <Button
              href={instagram}
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
          ) : null}
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

function getPortraitClassName(studentId: string) {
  if (studentId === "fernando-muniz") return "object-[center_30%]";
  if (studentId === "john-kevin-alves") return "object-[center_30%]";
  if (studentId === "thiago-paes-moreira") return "object-[center_30%]";
  if (studentId === "jefferson-dos-santos-lima-sousa")
    return "object-[center_30%]";
  if (studentId === "murilo-cesar") return "object-[center_30%]";
  if (studentId === "renan-da-silva-oliveira") return "object-[center_30%]";
  if (studentId === "matheus-tenorio") return "object-[center_34%]";
  if (studentId === "pablo-ferreira") return "object-[center_22%]";
  if (studentId === "pedro-andrade") return "object-[center_26%]";
  if (studentId === "lucas-alves-pires") return "object-[center_24%]";
  if (studentId === "guilherme-batista-da-silva") return "object-[center_24%]";
  return "";
}
