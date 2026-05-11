import { BookOpen, HeartHandshake, ImageIcon, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { teachers, type TeacherMock } from "@/data/teachers";
import { stripPlaceholder } from "@/lib/utils";

export function TeachersSection() {
  return (
    <Section id="professores">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="mb-5">Professores e homenagens</Badge>
          <h2 className="section-title">
            Professores que fizeram parte da nossa história
          </h2>
          <p className="section-subtitle mt-4">
            Cada professor deixou uma marca na nossa caminhada. Entre aulas,
            conselhos, cobranças e aprendizados, todos contribuíram para que a SIT
            chegasse até aqui.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid min-w-0 gap-4 md:grid-cols-2">
        {teachers.map((teacher, index) => (
          <Reveal key={teacher.id} delay={(index % 2) * 0.05}>
            <TeacherCard teacher={teacher} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function TeacherCard({ teacher }: { teacher: TeacherMock }) {
  return (
    <Card padding="none" className="group h-full min-w-0 overflow-hidden">
      <div className="grid min-w-0 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative min-h-64 overflow-hidden border-b border-white/10 bg-background/54 lg:border-b-0 lg:border-r">
          <div className="absolute inset-0 grid-background opacity-55" />
          <div className="absolute inset-0 radial-wash-gold opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gold/10" />

          <div className="relative flex h-full min-h-64 flex-col justify-between p-5">
            <div className="flex items-center justify-between gap-4">
              <span className="grid size-12 place-items-center rounded-lg border border-gold-soft bg-background/72 text-gold soft-transition group-hover:border-gold">
                <ImageIcon className="size-6" aria-hidden="true" />
              </span>
              <Sparkles className="size-4 text-gold opacity-70" aria-hidden="true" />
            </div>

            <div>
              <div className="mb-4 grid size-20 place-items-center rounded-xl border border-gold-soft bg-gold/10 text-2xl font-semibold text-foreground gold-glow">
                {getInitials(teacher.name)}
              </div>
              <p className="break-words font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                {teacher.image.replace("/images/placeholders/", "")}
              </p>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-col p-5 sm:p-6">
          <Badge variant="gold" className="mb-5 w-fit">
            {teacher.subject}
          </Badge>
          <h3 className="text-2xl font-semibold leading-tight text-foreground">
            {teacher.name}
          </h3>
          <div className="mt-5 rounded-md border border-white/10 bg-white/[0.035] p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon">
              <HeartHandshake className="size-4" aria-hidden="true" />
              Homenagem
            </div>
            <p className="text-sm leading-7 text-muted">
              {stripPlaceholder(teacher.message)}
            </p>
          </div>
          <div className="mt-auto pt-5">
            <div className="flex items-center gap-2 text-sm text-muted">
              <BookOpen className="size-4 text-neon" aria-hidden="true" />
              <span>Espaço preparado para mensagem real da turma.</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function getInitials(name: string) {
  return name
    .replace(/^Prof(a)?\.\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
