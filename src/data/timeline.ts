export interface TimelineMock {
  id: string;
  title: string;
  period: string;
  description: string;
  image: string;
  icon: string;
}

export const timeline: TimelineMock[] = [
  {
    id: "primeiro-contato",
    title: "Primeiro contato com a programação",
    period: "Placeholder - 1o ano",
    description:
      "Placeholder: a turma começou a entender lógica, algoritmos e a sensação de fazer o primeiro código rodar.",
    image: "/images/placeholders/timeline-primeiro-contato.jpg",
    icon: "Code2",
  },
  {
    id: "laboratorio-e-equipe",
    title: "Laboratório, prática e trabalho em equipe",
    period: "Placeholder - 2o ano",
    description:
      "Placeholder: as aulas práticas ganharam ritmo com desafios, organização de grupos e projetos guiados.",
    image: "/images/placeholders/timeline-laboratorio.jpg",
    icon: "Users",
  },
  {
    id: "primeiros-projetos",
    title: "Primeiros projetos apresentados",
    period: "Placeholder - Mostra técnica",
    description:
      "Placeholder: os protótipos começaram a tomar forma e a turma apresentou soluções para problemas simulados.",
    image: "/images/placeholders/timeline-primeiros-projetos.jpg",
    icon: "Rocket",
  },
  {
    id: "desafio-final",
    title: "Desafio final de desenvolvimento",
    period: "Placeholder - 3o ano",
    description:
      "Placeholder: integração de front-end, back-end, dados e apresentação em uma entrega mais completa.",
    image: "/images/placeholders/timeline-desafio-final.jpg",
    icon: "Terminal",
  },
  {
    id: "formatura",
    title: "Formatura e próximo capítulo",
    period: "Placeholder - 2026",
    description:
      "Placeholder: encerramento da trajetória no CEAP e início de novas possibilidades na tecnologia.",
    image: "/images/placeholders/timeline-formatura.jpg",
    icon: "GraduationCap",
  },
];
