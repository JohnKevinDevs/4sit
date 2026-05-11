import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-foreground">SIT 2026 - CEAP</p>
          <p>{site.slogan}</p>
        </div>
        {/* TODO: revisar esta frase final com a turma antes da publicação oficial. */}
        <p>Desenvolvido por John Kevin / Equipe SIT.</p>
      </div>
    </footer>
  );
}
