export interface TeacherMock {
  id: string;
  name: string;
  subject: string;
  message: string;
  image: string;
}

export const teachers: TeacherMock[] = [
  {
    id: "prof-marcos-placeholder",
    name: "Prof. Marcos Placeholder",
    subject: "Programação e lógica",
    message:
      "Placeholder: homenagem ao professor que ajudou a turma a transformar lógica em pensamento estruturado.",
    image: "/images/placeholders/teacher-marcos.jpg",
  },
  {
    id: "prof-carolina-placeholder",
    name: "Profa. Carolina Placeholder",
    subject: "Banco de dados",
    message:
      "Placeholder: agradecimento pelas aulas, revisões e orientação nos projetos com dados.",
    image: "/images/placeholders/teacher-carolina.jpg",
  },
  {
    id: "prof-renato-placeholder",
    name: "Prof. Renato Placeholder",
    subject: "Redes e infraestrutura",
    message:
      "Placeholder: reconhecimento pela paciência nas práticas de laboratório, redes e manutenção.",
    image: "/images/placeholders/teacher-renato.jpg",
  },
  {
    id: "prof-larissa-placeholder",
    name: "Profa. Larissa Placeholder",
    subject: "Projeto e carreira",
    message:
      "Placeholder: mensagem para quem incentivou apresentação, postura profissional e visão de futuro.",
    image: "/images/placeholders/teacher-larissa.jpg",
  },
];
