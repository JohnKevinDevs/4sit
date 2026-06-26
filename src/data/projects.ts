export interface ProjectMock {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  members: string[];
  image: string;
  link: string;
}

export const projects: ProjectMock[] = [
  {
    id: "taskcoin",
    name: "TaskCoin",
    description:
      "Plataforma de gamificação de tarefas familiares que incentiva hábitos, disciplina e organização por meio de desafios, recompensas e sistema de progressão.",
    technologies: [],
    members: [
      "Jefferson Dos Santos Lima Sousa",
      "Gustavo Soares Silva",
      "Marcos Roberto Leonardo Rodrigues",
      "Pedro Henrique de Freitas Belo",
    ],
    image: "/images/projects/taskcoin.png",
    link: "#",
  },
  {
    id: "moneytrack",
    name: "MoneyTrack",
    description:
      "O MoneyTrack é um site de controle financeiro pessoal criado para ajudar os usuários a organizarem melhor suas finanças de maneira simples, intuitiva e acessível, permitindo a conexão automática com seus bancos para acompanhar receitas, despesas e movimentações financeiras em tempo real.",
    technologies: [],
    members: [
      "Thiago Paes Moreira",
      "Akon Nogueira Da Silva",
      "Eduardo Santos Lucio",
      "Gabriel Gonçalves Ribeiro",
    ],
    image: "/images/projects/moneytrack.png",
    link: "#",
  },
  {
    id: "fluxon",
    name: "FluxON",
    description: "Plataforma de Agendamento e Controle de Atendimentos.",
    technologies: [],
    members: [
      "Guilherme Batista",
      "Lucas Alves Pires",
      "John Kevin Alves",
      "Pablo Ferreira",
      "Pedro Andrade",
    ],
    image: "/images/projects/fluxon.png",
    link: "#",
  },
  {
    id: "road-help",
    name: "Road Help",
    description:
      "Sistema inteligente de roteirização para veículos de carga que calcula rotas seguras e eficientes com base em restrições de altura, largura e peso, contribuindo para a segurança viária e otimização logística.",
    technologies: [],
    members: [
      "Akon Nogueira Da Silva",
      "Eduardo Santos Lucio",
      "Gustavo Soares Silva",
      "Jefferson Dos Santos Lima Sousa",
      "Marcos Roberto Leonardo Rodrigues",
      "Thiago Paes Moreira",
    ],
    image: "/images/projects/road-help.png",
    link: "#",
  },
];
