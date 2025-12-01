"use client";

import AboutText from "@/app/utils/AboutText";
import AnimatedButton from "@/app/utils/AnimatedButton";
import SkillCard from "@/app/utils/SkillCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

import { FaHtml5, FaCss3Alt, FaJs, FaPhp, FaLaravel, FaReact, FaGitAlt, FaRegFileAlt, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiMysql, SiTailwindcss, SiPostman, SiDart, SiTypescript } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "PHP", icon: FaPhp, color: "text-indigo-400" },
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
  { name: "Dart", icon: SiDart, color: "text-cyan-500" },
  { name: "Flutter", icon: SiFlutter, color: "text-cyan-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-cyan-400" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
  { name: "REST API", icon: SiPostman, color: "text-orange-500" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - slide dari kiri + fade
      gsap.fromTo(
        headingRef.current,
        { 
          opacity: 0, 
          x: -100, 
          rotateY: -45 
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // About text container - slide dari kanan
      gsap.fromTo(
        "#about-text-container",
        { 
          opacity: 0, 
          x: 100, 
          scale: 0.9 
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#about-text-container",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // CV Button - bounce effect
      gsap.fromTo(
        ".about-button",
        { 
          opacity: 0, 
          y: 60, 
          scale: 0.5 
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".about-button",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Skills title - zoom in
      gsap.fromTo(
        ".skills-title",
        { 
          opacity: 0, 
          scale: 0.3,
          rotateZ: -10
        },
        {
          opacity: 1,
          scale: 1,
          rotateZ: 0,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Skill cards - stagger dari bawah dengan rotation
      gsap.fromTo(
        ".skill-card",
        {
          opacity: 0,
          y: 80,
          rotateX: 45,
          scale: 0.7,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.6,
          stagger: {
            each: 0.08,
            from: "start",
          },
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skill-card",
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Title hover animation
      const title = headingRef.current;
      if (title && !title.querySelector(".split-done")) {
        const oriText = title.textContent;
        title.innerHTML = oriText
          .split("")
          .map(
            (char) =>
              `<span class="split-done" style="display: inline-block; position: relative;">${
                char === " " ? "&nbsp;" : char
              }</span>`
          )
          .join("");

        const letters = title.querySelectorAll(".split-done");
        let hoverTl = null;

        const handleMouseEnter = () => {
          if (hoverTl) hoverTl.kill();
          gsap.set(letters, { y: 0 });

          hoverTl = gsap.to(letters, {
            y: -10,
            stagger: 0.04,
            yoyo: true,
            repeat: 1,
            duration: 0.3,
            ease: "power1.inOut",
            onComplete: () => (hoverTl = null),
          });
        };

        title.addEventListener("mouseenter", handleMouseEnter);

        return () => {
          title.removeEventListener("mouseenter", handleMouseEnter);
          if (hoverTl) hoverTl.kill();
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center py-20 px-4 md:px-8 scroll-mt-20 bg-linear-to-b from-[#10182e] via-[#0d1424] to-[#0b1220]"
    >
      {/* Top Glow */}
      <div className="absolute -top-72 left-0 w-full h-5/12 bg-linear-to-b from-blue-500/15 via-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      <h1 ref={headingRef} className="relative z-10 text-4xl md:text-5xl font-semibold mb-10 opacity-0">
        About <span className="text-blue-400">Me</span>
      </h1>

      <div className="relative z-10 w-full flex flex-col items-center">
        <AboutText id="about-text-container" />

        <div className="about-button flex flex-wrap justify-center gap-4 mt-8 mb-16 opacity-0">
          <AnimatedButton href="/cv-awang" target="_blank">
            <div className="flex items-center gap-2">
              <FaRegFileAlt />
              <span>Ini My CV gue</span>
            </div>
          </AnimatedButton>
        </div>

        <div className="max-w-6xl w-full text-center">
          <h2 className="skills-title text-3xl font-semibold mb-12 text-blue-400 opacity-0">Skills & Tools</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {SKILLS.map((item) => (
              <SkillCard
                key={item.name}
                skill={item.name}
                icon={item.icon}
                color={item.color}
                className="skill-card opacity-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}