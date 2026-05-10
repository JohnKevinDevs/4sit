export type MemoryType = "quote" | "moment" | "lesson" | "inside-joke" | "tribute";

export interface MemoryMock {
  id: string;
  type: MemoryType;
  title: string;
  description: string;
}

export const memories: MemoryMock[] = [
  {
    id: "memoria-primeiro-hello-world",
    type: "lesson",
    title: "O primeiro Hello, World!",
    description:
      "Placeholder: memória provisória sobre o primeiro código que apareceu funcionando na tela.",
  },
  {
    id: "memoria-bug-coletivo",
    type: "inside-joke",
    title: "O bug que uniu a turma",
    description:
      "Placeholder: lembrança de um erro misterioso que virou história interna e aprendizado coletivo.",
  },
  {
    id: "memoria-mostra-tecnica",
    type: "moment",
    title: "A primeira apresentação para visitantes",
    description:
      "Placeholder: registro de nervosismo, orgulho e evolução durante uma apresentação pública.",
  },
  {
    id: "memoria-ajuda-entre-colegas",
    type: "quote",
    title: "Ninguém compila sozinho",
    description:
      "Placeholder: frase temporária para representar a colaboração entre colegas durante o curso.",
  },
  {
    id: "memoria-professores",
    type: "tribute",
    title: "Quem caminhou junto",
    description:
      "Placeholder: espaço para uma memória de gratidão aos professores e orientadores da turma.",
  },
  {
    id: "memoria-ultimo-dia",
    type: "moment",
    title: "O último dia no laboratório",
    description:
      "Placeholder: memória reservada para o encerramento das aulas e começo da fase de formatura.",
  },
];
