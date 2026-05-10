import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/layout/Section";
import { AboutSection } from "@/components/sections/AboutSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const placeholderSections = [
  {
    id: "galeria",
    eyebrow: "Galeria de momentos",
    title: "Registros visuais da turma dentro e fora do laboratório.",
    description:
      "Área preparada para fotos, bastidores, eventos, apresentações e momentos que marcaram a convivência da SIT.",
  },
  {
    id: "alunos",
    eyebrow: "Alunos da SIT",
    title: "As pessoas por trás dos projetos, ideias e histórias.",
    description:
      "Esta seção receberá cards individuais dos alunos, com foto, frase, destaque, links e informações editáveis.",
  },
  {
    id: "professores",
    eyebrow: "Professores e homenagens",
    title: "Reconhecimento a quem ensinou, orientou e caminhou junto.",
    description:
      "Bloco reservado para homenagens, agradecimentos e mensagens dedicadas aos professores e apoiadores da turma.",
  },
  {
    id: "projetos",
    eyebrow: "Projetos da turma",
    title: "Soluções, experimentos e aprendizados colocados em prática.",
    description:
      "Aqui serão exibidos os projetos desenvolvidos pela turma, com tecnologias, imagens, descrições e links.",
  },
  {
    id: "memorias",
    eyebrow: "Memórias especiais",
    title: "Pequenas lembranças que explicam uma grande jornada.",
    description:
      "Espaço para frases, histórias curtas, momentos engraçados, mensagens marcantes e registros afetivos.",
  },
  {
    id: "capsula",
    eyebrow: "Cápsula do tempo",
    title: "Mensagens de hoje para a próxima versão de cada um.",
    description:
      "Área preparada para mensagens dos alunos sobre futuro, sonhos, aprendizados e expectativas pós-formatura.",
  },
  {
    id: "terminal",
    eyebrow: "Terminal da SIT",
    title: "Uma assinatura interativa inspirada no universo da informática.",
    description:
      "Este bloco receberá uma experiência de terminal com comandos, mensagens e pequenos easter eggs da turma.",
  },
  {
    id: "formatura",
    eyebrow: "Formatura / Encerramento",
    title: "O próximo capítulo começa com tudo o que foi construído até aqui.",
    description:
      "Seção final para mensagem de encerramento, contagem, agradecimentos e chamada emocional para a formatura.",
  },
];

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <TimelineSection />

        {placeholderSections.map((section, index) => (
          <Section
            key={section.id}
            id={section.id}
            className={index % 2 === 0 ? "bg-white/[0.015]" : undefined}
          >
            <Reveal>
              <Card className="grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-start">
                <div>
                  <Badge>{section.eyebrow}</Badge>
                </div>
                <div>
                  <h2 className="section-title">{section.title}</h2>
                  <p className="section-subtitle mt-4 max-w-3xl">
                    {section.description}
                  </p>
                </div>
              </Card>
            </Reveal>
          </Section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
