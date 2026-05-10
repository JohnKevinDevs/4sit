import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Section } from "@/components/layout/Section";
import { AboutSection } from "@/components/sections/AboutSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { StudentsSection } from "@/components/sections/StudentsSection";
import { TeachersSection } from "@/components/sections/TeachersSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

const placeholderSections = [
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
        <GallerySection />
        <StudentsSection />
        <TeachersSection />
        <ProjectsSection />

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
