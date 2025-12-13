"use client";

import { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import AnimatedButton from "@/app/utils/AnimatedButton";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const sectionRef = useRef(null);
  const avatarRef = useRef(null);
  const nameRef = useRef(null);
  const titleWaveRef = useRef(null);

  const currentNameRef = useRef("Awang");
  const tlRef = useRef(null);

  /* Floating avatar */
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

  /* Initial load animation */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(avatarRef.current, { opacity: 0, scale: 0.85, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 30, duration: 0.7 }, "-=0.3")
        .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.5 }, "-=0.3")
        .from(".hero-btn", { opacity: 0, y: 25, stagger: 0.1, duration: 0.45 }, "-=0.3");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* Name swap (no SplitType, mobile safe) */
  useEffect(() => {
    const el = nameRef.current;
    const wave = titleWaveRef.current;
    if (!el || !wave) return;

    const swap = (next) => {
      if (currentNameRef.current === next) return;
      tlRef.current?.kill();

      tlRef.current = gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to([el, wave], { y: -6, opacity: 0, duration: 0.25 })
        .add(() => {
          el.textContent = next;
          currentNameRef.current = next;
        })
        .fromTo(
          [el, wave],
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.3 }
        );
    };

    const onEnter = () => swap("Munawwar Hibatullah");
    const onLeave = () => swap("Awang");

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
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
          className="w-32 h-32 rounded-full border-4 border-[#1e3a8a] shadow-[0_0_25px_rgba(59,130,246,0.35)] mx-auto mb-6 object-cover"
        />

        {/* Title */}
        <h1 className="hero-title mb-4 text-4xl font-bold md:text-6xl flex items-center justify-center gap-2">
          <span>Hi, I&apos;m</span>
          <span
            ref={nameRef}
            className="hero-name inline-block text-blue-400/80 cursor-pointer"
          >
            Awang
          </span>
          <span ref={titleWaveRef} aria-hidden="true">
            👋
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="hero-subtitle mb-8 text-lg text-gray-300 md:text-2xl">
          <ReactTyped
            strings={["Software Engineering Fresh Graduate", "Web Developer", "Mobile App Developer"]}
            typeSpeed={55}
            backSpeed={35}
            loop
            aria-hidden="true"
          />
        </h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <AnimatedButton className="hero-btn" href="#projects">
            Projects
          </AnimatedButton>
          <AnimatedButton className="hero-btn" href="#contact">
            Call me if u need me 🤙😏
          </AnimatedButton>
          <AnimatedButton
            className="hero-btn"
            href="https://linkedin.com/in/munawwar-hibatullah"
            target="_blank"
          >
            <div className="flex items-center gap-2">
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </div>
          </AnimatedButton>
          <AnimatedButton
            className="hero-btn"
            href="https://instagram.com/mnwaarr"
            target="_blank"
          >
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
