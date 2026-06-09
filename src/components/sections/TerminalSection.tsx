import { CheckCircle2, Code2, Save, Terminal } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const terminalLines = [
  "> iniciar_jornada_sit",
  "Carregando memórias...",
  "Projetos encontrados: vários",
  "Amizades criadas: incontáveis",
  "Desafios superados: muitos",
  "Ciclo atual: formatura",
  "Status: legado salvo com sucesso.",
];

const commands = ["ver_turma", "ver_memorias", "abrir_capsula", "salvar_legado"];

export function TerminalSection() {
  return (
    <Section id="terminal">
      <div className="grid min-w-0 gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10">
        <Reveal>
          <div className="min-w-0">
            <Badge className="mb-5">Terminal da SIT</Badge>
            <h2 className="section-title">Um registro técnico do nosso legado</h2>
            <p className="section-subtitle mt-4 max-w-2xl">
              Uma homenagem ao nosso lado técnico: memórias, projetos e legado
              registrados como se fossem comandos de uma jornada.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <InfoPill icon={Code2} label="Modo" value="Memorial técnico" />
              <InfoPill icon={Save} label="Registro" value="Legado da turma" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card
            variant="strong"
            padding="none"
            interactive={false}
            className="min-w-0 overflow-hidden"
          >
            <div className="border-b border-white/10 bg-background/60 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-gold/80" />
                  <span className="size-3 rounded-full bg-neon/70" />
                  <span className="size-3 rounded-full bg-white/30" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
                  sit-terminal.log
                </span>
              </div>
            </div>

            <div className="relative p-5 sm:p-6">
              <div className="absolute inset-0 grid-background opacity-35" />
              <div className="absolute inset-0 radial-wash opacity-70" />

              <div className="relative max-w-full overflow-hidden rounded-lg border border-blue-soft bg-background/78 p-5 font-mono text-sm leading-7 blue-glow-soft">
                {terminalLines.map((line, index) => (
                  <p
                    key={line}
                    className={
                      index === 0
                        ? "break-words text-neon sm:whitespace-nowrap"
                        : "break-words text-muted"
                    }
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
                {commands.map((command) => (
                  <div
                    key={command}
                    className="flex min-w-0 items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-3"
                  >
                    <Terminal className="size-4 shrink-0 text-neon" aria-hidden="true" />
                    <span className="break-words font-mono text-sm text-foreground">
                      &gt; {command}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

interface InfoPillProps {
  icon: typeof Code2;
  label: string;
  value: string;
}

function InfoPill({ icon: Icon, label, value }: InfoPillProps) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-neon">
        <Icon className="size-4" aria-hidden="true" />
        {label}
      </div>
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <CheckCircle2 className="size-4 text-gold" aria-hidden="true" />
        {value}
      </div>
    </div>
  );
}
