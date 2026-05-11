"use client";

import { ChevronDown, Clock3, MailOpen, Sparkles, Target } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { timeCapsule, type TimeCapsuleMock } from "@/data/timeCapsule";
import { cn, stripPlaceholder } from "@/lib/utils";

export function TimeCapsuleSection() {
  const [openId, setOpenId] = useState(timeCapsule[0]?.id ?? "");

  return (
    <Section id="capsula" className="bg-white/[0.015]">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="gold" className="mb-5">
            Cápsula do tempo
          </Badge>
          <h2 className="section-title">Mensagens para o futuro</h2>
          <p className="section-subtitle mt-4">
            Antes de encerrar esse ciclo, cada aluno deixou uma mensagem para o
            futuro. Um registro de quem somos hoje, do que vivemos e do que esperamos
            construir nos próximos anos.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid min-w-0 gap-4 lg:grid-cols-2">
        {timeCapsule.map((item, index) => (
          <Reveal key={item.id} delay={(index % 2) * 0.04}>
            <CapsuleCard
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId((current) => (current === item.id ? "" : item.id))}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

interface CapsuleCardProps {
  item: TimeCapsuleMock;
  isOpen: boolean;
  onToggle: () => void;
}

function CapsuleCard({ item, isOpen, onToggle }: CapsuleCardProps) {
  return (
    <Card padding="none" interactive={false} className="overflow-hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="group flex w-full items-center gap-4 p-5 text-left soft-transition hover:bg-white/[0.035] sm:p-6"
      >
        <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold gold-glow">
          <Clock3 className="size-6" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="section-kicker text-gold">mensagem.futuro</span>
          <span className="mt-1 block text-xl font-semibold leading-tight text-foreground">
            {item.name}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-muted soft-transition group-hover:text-gold",
            isOpen && "rotate-180 text-gold",
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-white/10 p-5 sm:p-6">
            <CapsuleDetail icon={MailOpen} label="Mensagem para o futuro" value={item.message} />
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <CapsuleDetail icon={Sparkles} label="Daqui 5 anos" value={item.fiveYears} />
              <CapsuleDetail icon={Target} label="Conselho" value={item.advice} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface CapsuleDetailProps {
  icon: typeof MailOpen;
  label: string;
  value: string;
}

function CapsuleDetail({ icon: Icon, label, value }: CapsuleDetailProps) {
  return (
    <div className="rounded-md border border-white/10 bg-background/36 p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon">
        <Icon className="size-4" aria-hidden="true" />
        {label}
      </div>
      <p className="text-sm leading-7 text-muted">{stripPlaceholder(value)}</p>
    </div>
  );
}
