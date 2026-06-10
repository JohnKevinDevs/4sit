import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ActDivider } from "@/components/layout/ActDivider";
import { AboutSection } from "@/components/sections/AboutSection";
import { GraduationSection } from "@/components/sections/GraduationSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MemoriesSection } from "@/components/sections/MemoriesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { StudentsSection } from "@/components/sections/StudentsSection";
import { TeachersSection } from "@/components/sections/TeachersSection";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { TimeCapsuleSection } from "@/components/sections/TimeCapsuleSection";
import { TimelineSection } from "@/components/sections/TimelineSection";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ActDivider act="02" name="A Trajetória" glyph="chevron" />
        <TimelineSection />
        <StudentsSection />
        <TeachersSection />
        <ProjectsSection />
        <ActDivider act="03" name="O Legado" glyph="sparkles" />
        <MemoriesSection />
        <TimeCapsuleSection />
        <TerminalSection />
        <GraduationSection />
      </main>

      <Footer />
    </div>
  );
}
