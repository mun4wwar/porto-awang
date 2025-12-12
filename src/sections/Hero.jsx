"use client";

import { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import SplitType from "split-type";
import gsap from "gsap";
import AnimatedButton from "@/app/utils/AnimatedButton";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const avatarRef = useRef(null);

  // Floating avatar animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(avatarRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power4.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Initial page load animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleSplit = new SplitType(".title-text", { types: "chars" });
      const waveSplit = new SplitType(".wave", { types: "chars" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(avatarRef.current, { opacity: 0, scale: 0.8, duration: 0.6 })
        .from(titleSplit.chars, { opacity: 0, y: 35, stagger: 0.04, duration: 0.8 }, "-=0.3")
        .from(waveSplit.chars, { opacity: 0, y: 35, duration: 0.6 }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.5 }, "-=0.2")
        .from(".btn-upgrade", { opacity: 0, y: 25, stagger: 0.1, duration: 0.45 }, "-=0.3");

      return () => {
        titleSplit.revert();
        waveSplit.revert();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Name swap hover effect
  useEffect(() => {
    const name = document.querySelector(".hero-name");
    const titleWave = gsap.utils.toArray([".title-text", ".wave"]);
    if (!name) return;

    let currentName = "Awang";
    let activeTl = null;

    const swapName = (newText) => {
      if (activeTl) activeTl.kill();

      const oldSplit = new SplitType(name, { types: "chars" });
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      activeTl = tl;

      tl.to(titleWave, { xPercent: -4, opacity: 0.6, duration: 0.25, ease: "power2.out" }, 0)
        .to(oldSplit.chars, { opacity: 0, y: -20, rotateX: -90, stagger: 0.025, duration: 0.3 }, 0)
        .add(() => {
          oldSplit.revert();
          name.textContent = newText;
        })
        .add(() => {
          const newSplit = new SplitType(name, { types: "chars" });
          tl.from(newSplit.chars, {
            opacity: 0,
            y: 25,
            rotateX: 90,
            stagger: 0.03,
            duration: 0.32,
            onComplete: () => newSplit.revert(),
          });
        })
        .to(titleWave, { xPercent: 0, opacity: 1, duration: 0.35, ease: "power2.out" }, "-=0.25");
    };

    const handleHover = () => {
      if (currentName === "Awang") {
        swapName("Munawwar Hibatullah");
        currentName = "Munawwar Hibatullah";
      }
    };

    const handleLeave = () => {
      if (currentName !== "Awang") {
        swapName("Awang");
        currentName = "Awang";
      }
    };

    name.addEventListener("mouseenter", handleHover);
    name.addEventListener("mouseleave", handleLeave);

    return () => {
      name.removeEventListener("mouseenter", handleHover);
      name.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center bg-linear-to-b from-[#0b1220] via-[#0d1424] to-[#10182e] text-white overflow-hidden"
    >
      <div className="relative z-10">
        {/* Avatar */}
        <img
          ref={avatarRef}
          src="/gweh.jpg"
          alt="Awang"
          className="w-35 h-35 rounded-full border-4 border-[#1e3a8a] shadow-[0_0_25px_rgba(59,130,246,0.35)] mx-auto mb-6 object-cover"
        />

        {/* Title */}
        <h1 ref={titleRef} className="mb-4 text-4xl font-bold md:text-6xl flex items-center justify-center gap-2">
          <span className="title-text">Hi, I'm </span>
          <span className="hero-name-wrapper inline-block relative">
            <span className="hero-name text-blue-400/70">Awang</span>
          </span>
          <span className="wave">👋</span>
        </h1>

        {/* Subtitle */}
        <h2 className="hero-subtitle mb-8 text-lg text-gray-300 md:text-2xl">
          <ReactTyped
            strings={["Software Engineering Fresh Graduate", "Web Developer", "Mobile App Developer"]}
            typeSpeed={55}
            backSpeed={35}
            loop
          />
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatedButton href="#projects">Projects</AnimatedButton>
          <AnimatedButton href="#contact">Call me if u need me 🤙😏</AnimatedButton>
          <AnimatedButton href="https://linkedin.com/in/munawwar-hibatullah" target="_blank">
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </div>
          </AnimatedButton>
          <AnimatedButton href="https://instagram.com/mnwaarr" target="_blank">
            <div className="flex items-center gap-2">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </div>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}