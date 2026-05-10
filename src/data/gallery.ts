export interface GalleryMock {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const gallery: GalleryMock[] = [
  {
    id: "galeria-lab-01",
    title: "Laboratório em dia de projeto",
    category: "Placeholder - Laboratório",
    image: "/images/placeholders/gallery-lab-01.jpg",
    caption: "Placeholder: registro provisório de uma aula prática no laboratório.",
  },
  {
    id: "galeria-lab-02",
    title: "Revisão antes da entrega",
    category: "Placeholder - Bastidores",
    image: "/images/placeholders/gallery-lab-02.jpg",
    caption: "Placeholder: grupo revisando detalhes antes de apresentar.",
  },
  {
    id: "galeria-evento-01",
    title: "Mostra técnica",
    category: "Placeholder - Evento",
    image: "/images/placeholders/gallery-evento-01.jpg",
    caption: "Placeholder: momento reservado para foto da mostra técnica.",
  },
  {
    id: "galeria-evento-02",
    title: "Apresentação coletiva",
    category: "Placeholder - Evento",
    image: "/images/placeholders/gallery-evento-02.jpg",
    caption: "Placeholder: apresentação de projeto para convidados.",
  },
  {
    id: "galeria-turma-01",
    title: "Foto da turma",
    category: "Placeholder - Turma",
    image: "/images/placeholders/gallery-turma-01.jpg",
    caption: "Placeholder: espaço para uma foto oficial ou espontânea da SIT.",
  },
  {
    id: "galeria-turma-02",
    title: "Intervalo entre aulas",
    category: "Placeholder - Turma",
    image: "/images/placeholders/gallery-turma-02.jpg",
    caption: "Placeholder: momento de convivência entre uma aula e outra.",
  },
  {
    id: "galeria-codigo-01",
    title: "Primeiros commits",
    category: "Placeholder - Código",
    image: "/images/placeholders/gallery-codigo-01.jpg",
    caption: "Placeholder: registros de tela e código serão substituídos depois.",
  },
  {
    id: "galeria-codigo-02",
    title: "Debug em equipe",
    category: "Placeholder - Código",
    image: "/images/placeholders/gallery-codigo-02.jpg",
    caption: "Placeholder: aquela etapa em que todos tentam descobrir o erro.",
  },
  {
    id: "galeria-professores-01",
    title: "Orientação de projeto",
    category: "Placeholder - Professores",
    image: "/images/placeholders/gallery-professores-01.jpg",
    caption: "Placeholder: orientação técnica durante o desenvolvimento.",
  },
  {
    id: "galeria-professores-02",
    title: "Feedback final",
    category: "Placeholder - Professores",
    image: "/images/placeholders/gallery-professores-02.jpg",
    caption: "Placeholder: devolutiva para amadurecer uma apresentação.",
  },
  {
    id: "galeria-formatura-01",
    title: "Preparação para a formatura",
    category: "Placeholder - Formatura",
    image: "/images/placeholders/gallery-formatura-01.jpg",
    caption: "Placeholder: espaço reservado para bastidores da formatura.",
  },
  {
    id: "galeria-formatura-02",
    title: "Próximo capítulo",
    category: "Placeholder - Formatura",
    image: "/images/placeholders/gallery-formatura-02.jpg",
    caption: "Placeholder: imagem final para simbolizar o encerramento da jornada.",
  },
];
