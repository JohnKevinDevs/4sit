import Image from "next/image";
import { BookOpen, HeartHandshake, Sparkles } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { stripPlaceholder } from "@/lib/utils";
import type { Teacher } from "@/types/content";

export function TeachersSection({ teachers }: { teachers: Teacher[] }) {
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
            conselhos, cobranças e aprendizados, todos contribuíram para que a
            SIT chegasse até aqui.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid min-w-0 gap-4 sm:mt-10 md:grid-cols-2">
        {teachers.map((teacher, index) => (
          <Reveal key={teacher.id} delay={(index % 2) * 0.05}>
            <TeacherCard teacher={teacher} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <Card padding="none" className="group h-full min-w-0 overflow-hidden">
      <div className="relative border-b border-white/10 bg-background/54">
        <div className="absolute inset-0 radial-wash-gold opacity-80" />
        <div className="relative flex aspect-[16/10] items-center justify-center p-6 sm:p-8">
          <Sparkles
            className="absolute right-4 top-4 size-4 text-gold opacity-70"
            aria-hidden="true"
          />

          {teacher.image ? (
            <div className="relative aspect-square w-full max-w-[12.5rem] overflow-hidden rounded-full border border-gold-soft bg-[#140d23] gold-glow sm:max-w-[14rem]">
              <Image
                src={teacher.image}
                alt={`Foto de ${teacher.name}`}
                fill
                unoptimized
                sizes="(min-width: 768px) 16rem, 12rem"
                className={getPortraitClassName(teacher.id)}
              />
            </div>
          ) : (
            <div className="grid aspect-square w-full max-w-[12.5rem] place-items-center rounded-full border border-gold-soft bg-gold/10 text-4xl font-semibold text-foreground gold-glow sm:max-w-[14rem]">
              {getInitials(teacher.name)}
            </div>
          )}
        </div>
      </div>

      <div className="flex min-w-0 flex-col p-4 sm:p-6">
        <Badge variant="gold" className="mb-5 w-fit">
          {teacher.subject}
        </Badge>
        <h3 className="break-words text-xl font-semibold leading-tight text-foreground sm:text-2xl">
          {teacher.name}
        </h3>
        <div className="mt-5 rounded-md border border-white/10 bg-white/[0.035] p-4">
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon">
            <HeartHandshake className="size-4" aria-hidden="true" />
            Homenagem
          </div>
          <p className="break-words text-sm leading-7 text-muted">
            {stripPlaceholder(teacher.message)}
          </p>
        </div>
        <div className="mt-auto pt-5">
          <div className="flex min-w-0 items-start gap-2 text-sm text-muted">
            <BookOpen className="size-4 text-neon" aria-hidden="true" />
            <span className="min-w-0 break-words">{teacher.phrase}</span>
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

function getPortraitClassName(teacherId: string) {
  if (teacherId === "augusto-n-de-paula") {
    return "object-cover object-[center_30%]";
  }

  if (teacherId === "thiago-da-silva-gomes") {
    return "object-cover object-[center_24%]";
  }

  return "object-cover object-top";
}
