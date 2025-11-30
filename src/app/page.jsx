import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import ProjectSection from "@/components/ProjectSection";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="space-y-40">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="experience">
        <ExperienceSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
