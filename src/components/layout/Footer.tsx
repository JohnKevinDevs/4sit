import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="font-semibold text-foreground">SIT 2026.1 - CEAP</p>
          <p className="break-words">{site.slogan}</p>
        </div>
        {/* TODO: revisar esta frase final com a turma antes da publicação oficial. */}
        <p className="break-words">Desenvolvido por 4SIT 2026.1</p>
      </div>
    </footer>
  );
}
