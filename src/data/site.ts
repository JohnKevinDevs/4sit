import type { NavigationItem } from "@/types/content";

export const site = {
  name: "SIT 2026",
  slogan: "Do primeiro código ao próximo capítulo.",
  description:
    "Landing page memorial da turma de Informática do CEAP, criada para registrar trajetória, projetos, pessoas e memórias até a formatura.",
};

export const navigation: NavigationItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Alunos", href: "#alunos" },
  { label: "Professores", href: "#professores" },
  { label: "Projetos", href: "#projetos" },
  { label: "Formatura", href: "#formatura" },
];
