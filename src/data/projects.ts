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
    id: "portal-ceap-placeholder",
    name: "Portal CEAP Placeholder",
    description:
      "Placeholder: protótipo de portal institucional para organizar avisos, materiais e eventos acadêmicos.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    members: ["Ana Ribeiro", "Felipe Oliveira", "Emily Costa"],
    image: "/images/placeholders/project-portal-ceap.jpg",
    link: "#",
  },
  {
    id: "lab-control-placeholder",
    name: "Lab Control Placeholder",
    description:
      "Placeholder: sistema simples para registro de equipamentos, reservas e manutenção do laboratório.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    members: ["Bruno Santos", "Diego Lima", "Clara Mendes"],
    image: "/images/placeholders/project-lab-control.jpg",
    link: "#",
  },
  {
    id: "memo-sit-placeholder",
    name: "Memo SIT Placeholder",
    description:
      "Placeholder: experiência memorial para guardar fotos, depoimentos e marcos da turma em formato interativo.",
    technologies: ["Next.js", "Framer Motion", "Lucide React"],
    members: ["Giovanna Alves", "Henrique Rocha", "Ana Ribeiro"],
    image: "/images/placeholders/project-memo-sit.jpg",
    link: "#",
  },
  {
    id: "eco-track-placeholder",
    name: "Eco Track Placeholder",
    description:
      "Placeholder: dashboard educacional para acompanhar hábitos sustentáveis e ações ambientais da escola.",
    technologies: ["React", "Chart.js", "Firebase"],
    members: ["Emily Costa", "Felipe Oliveira", "Giovanna Alves"],
    image: "/images/placeholders/project-eco-track.jpg",
    link: "#",
  },
];
