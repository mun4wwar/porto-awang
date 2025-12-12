import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import Hero from "@/sections/Hero";
import ProjectSection from "@/sections/ProjectSection";
import Contact from "./utils/Contact";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
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
