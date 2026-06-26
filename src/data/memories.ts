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
      "O começo de tudo: a primeira vez em que a tela respondeu e a turma entendeu que dali sairia muita história.",
  },
  {
    id: "memoria-hobbit-lucca-borro",
    type: "inside-joke",
    title: "O livro Hobbit",
    description:
      "O livro Hobbit, que talvez o Lucca Borro nunca saiba quem leu ou não.",
  },
  {
    id: "memoria-confissao-homem-branco",
    type: "moment",
    title: "A confissão do Homem Branco",
    description: "Uma daquelas histórias que a turma entende antes mesmo de alguém terminar de explicar.",
  },
  {
    id: "memoria-nosso-astro-paulo",
    type: "tribute",
    title: "O nosso Astro, Paulo",
    description: "Paulo virou referência própria da turma: presença, resenha e lembrança garantida.",
  },
  {
    id: "memoria-advertencia-alef-corredor-polones",
    type: "inside-joke",
    title: "Advertência do Alef",
    description:
      "Advertência do Alef no NOSSO corredor polonês, até quem apanhou levou.",
  },
  {
    id: "memoria-ultimo-dia-feira-start",
    type: "moment",
    title: "O último dia, a Feira Start",
    description: "O encerramento com cara de entrega final: turma reunida, projetos na mesa e ciclo fechando.",
  },
];
