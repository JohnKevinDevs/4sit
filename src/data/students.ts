export interface StudentMock {
  id: string;
  name: string;
  quote: string;
  area: string;
  image?: string;
  memory: string;
  future: string;
  links: {
    github?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export const students: StudentMock[] = [
  {
    id: "francydavid-amaro-de-sousa",
    name: "Francydavid Amaro de Sousa",
    quote: "ESSE ANO EU METO O SHAPE !!",
    area: "DW",
    memory: "Fez parte da turma com presença, parceria e boas histórias.",
    future: "Onde vc tá agr cara?",
    links: {
      linkedin:
        "https://www.linkedin.com/in/francydavid-amaro?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://instagram.com/Francydavid_amaro",
    },
  },
  {
    id: "guilherme-batista-da-silva",
    name: "Guilherme Batista da Silva",
    quote: "TUDO PASSA, seja coisas boas ou ruins.",
    area: "DW",
    image: "/images/students/guilherme-batista-da-silva.png",
    memory: "Participou da turma com foco, presença e vontade de vencer.",
    future: "As pessoas não entendem o quão obcecado eu sou em vencer.",
    links: {
      linkedin: "https://www.linkedin.com/in/guilherme-batista-",
      instagram: "https://instagram.com/guiii.zwx",
    },
  },
  {
    id: "fernando-muniz",
    name: "Fernando Muniz",
    quote: "Esteja acompanhado sempre de gente melhor que você.",
    area: "Religião",
    memory: "Deixou sua marca na turma com convivência e boas lembranças.",
    future: "Você é bem mais do que sempre pensaram de você.",
    links: {
      instagram: "https://instagram.com/fernandokkz",
    },
  },
  {
    id: "john-kevin-alves",
    name: "John Kevin Alves",
    quote: "Isso é apenas o começo. Do primeiro Código ao próximo Capítulo.",
    area: "Educação Física",
    memory: "Ajudou a transformar ideias da turma em entregas reais.",
    future:
      "Olá, é bom saber que você está aqui. Obrigado e boa sorte nos próximos passos, e jamais se esqueça: j k !",
    links: {
      github: "https://github.com/JohnKevinDevs",
      instagram: "https://instagram.com/johnkevinzs",
    },
  },
  {
    id: "thiago-paes-moreira",
    name: "Thiago Paes Moreira",
    quote: "Foi uma honra aprender e crescer ao lado dos meus colegas durante esses dois anos.",
    area: "DS",
    memory: "Cresceu junto da turma em projetos, desafios e aprendizados.",
    future: "Espero que você tenha realizado seus sonhos e continue sendo uma pessoa esforçada.",
    links: {
      github: "https://github.com/ThiagoPaes-01",
      linkedin: "https://www.linkedin.com/in/thiago-paes-moreira-2a4b7538b/",
    },
  },
  {
    id: "gustavo-soares-silva",
    name: "Gustavo Soares Silva",
    quote: "Unindo o estudo contínuo da tecnologia ao desenvolvimento de soluções reais.",
    area: "DW",
    memory: "Construiu aprendizados importantes ao longo da jornada da turma.",
    future:
      "Lembre-se de onde cada aprendizado começou e não pare de aprender. Confia no processo e continua construindo!",
    links: {
      github: "https://github.com/GustavoSilva-dev",
      linkedin: "https://www.linkedin.com/in/gustavo-silva-23575638b",
    },
  },
  {
    id: "murilo-cesar",
    name: "Murilo Cesar",
    quote: "Quem não faz SIT é porque não passou na primeira opção.",
    area: "Programação",
    memory: "Esteve presente nos momentos que formaram a identidade da turma.",
    future: "Não se torne tão ocupado vivendo que esqueça de observar.",
    links: {},
  },
  {
    id: "guilherme-alves-de-oliveira-romao",
    name: "Guilherme Alves de Oliveira Romão",
    quote: "Amigos péssimos com resenha alta.",
    area: "DW",
    memory: "Compartilhou a caminhada com humor, amizade e parceria.",
    future: "Que tenha um futuro próspero.",
    links: {
      github: "https://github.com/Guigazfg",
      instagram: "https://instagram.com/guiromoa",
    },
  },
  {
    id: "renan-da-silva-oliveira",
    name: "Renan da Silva Oliveira",
    quote:
      "Desenvolvedor Back-End, movido pela curiosidade, pela lógica e pela vontade de criar soluções que fazem a diferença.",
    area: "Banco de Dados",
    memory: "Levou curiosidade e lógica para os aprendizados da turma.",
    future:
      "Nunca esqueça que tudo começou com curiosidade, esforço e a coragem de continuar aprendendo todos os dias.",
    links: {
      github: "https://github.com/Renzolv135",
      linkedin:
        "https://www.linkedin.com/in/renan-oliveira-379449383?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      instagram: "https://www.instagram.com/renzolv_?igsh=MXBkMmpwMDVldHBiNQ==",
    },
  },
  {
    id: "jefferson-dos-santos-lima-sousa",
    name: "Jefferson Dos Santos Lima Sousa",
    quote: "Tudo passou num piscar de olhos, mas valeu a pena cada segundo.",
    area: "DS",
    memory: "Contribuiu para projetos e momentos importantes da turma.",
    future:
      "Continue se desenvolvendo. Nós sempre tivemos potencial para conquistar coisas maiores.",
    links: {
      github: "https://github.com/Jefferson19620",
      linkedin: "https://www.linkedin.com/in/jefferson-dos-santos-lima-sousa/",
    },
  },
  {
    id: "matheus-tenorio",
    name: "Matheus Tenorio",
    quote: "Sempre aprendendo e seguindo em frente.",
    area: "DS",
    image: "/images/students/matheus-tenorio.jpeg",
    memory: "Fez parte da caminhada da SIT e das histórias da turma.",
    future: "Continuar evoluindo e aproveitar as oportunidades.",
    links: {},
  },
  {
    id: "lucas-alves-pires",
    name: "Lucas Alves Pires",
    quote: "Passo a passo, a gente chega lá.",
    area: "DS",
    image: "/images/students/lucas-alves-pires.png",
    memory: "Participou da turma com parceria e presença nos projetos.",
    future: "Seguir estudando e construir um bom caminho profissional.",
    links: {},
  },
  {
    id: "pablo-ferreira",
    name: "Pablo Ferreira",
    quote: "Foco no próximo passo.",
    area: "DW",
    image: "/images/students/pablo-ferreira.png",
    memory: "Fez parte dos momentos e aprendizados da turma.",
    future: "Continuar crescendo com calma, foco e atitude.",
    links: {},
  },
  {
    id: "pedro-andrade",
    name: "Pedro Andrade",
    quote: "A caminhada valeu a pena.",
    area: "DS",
    image: "/images/students/pedro-andrade.png",
    memory: "Compartilhou a trajetória da SIT com a turma.",
    future: "Seguir em frente e conquistar novos objetivos.",
    links: {},
  },
];
