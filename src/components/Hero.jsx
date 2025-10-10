"use client";

import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Link from "next/link";

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-64px)] text-center bg-gradient-to-b from-[#0b1220] via-[#0d1424] to-[#10182e] text-white overflow-hidden">
      {/* subtle particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            color: { value: "#3b82f6" }, // deep blue
            links: {
              color: "#3b82f6",
              distance: 130,
              enable: true,
              opacity: 0.12,
              width: 0.7,
            },
            move: { enable: true, speed: 0.4 },
            number: { value: 28 },
            opacity: { value: 0.25 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.3 } },
          },
          detectRetina: true,
        }}
      />

      {/* hero content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        <motion.img
          src="/gweh.jpg"
          alt="Awang"
          className="w-32 h-32 rounded-full border-4 border-[#1e3a8a] shadow-[0_0_25px_rgba(59,130,246,0.35)] mx-auto mb-6 object-cover"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-400/70">Awang</span> 👋
        </h1>

        <h2 className="text-lg md:text-2xl text-gray-300 mb-8">
          <ReactTyped
            strings={[
              "Software Engineering Fresh Graduate",
              "Web Developer",
              "Mobile App Developer",
            ]}
            typeSpeed={55}
            backSpeed={35}
            loop
          />
        </h2>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/projects"
            className="relative px-6 py-3 rounded-xl text-white font-semibold bg-[#10182e] border border-blue-500/50 hover:border-blue-400 hover:shadow-[0_0_25px_4px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-500 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/20 hover:text-white transition-all duration-300"
          >
            Contact Me
          </Link>
          <a
            href="/cv/awang-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-blue-500 text-white font-semibold rounded-xl bg-blue-500/10 hover:bg-blue-500/20 hover:shadow-[0_0_25px_4px_rgba(59,130,246,0.4)] transition-all duration-300"
          >
            My Resume
          </a>
        </div>
      </motion.div>

      {/* soft bottom glow */}
      <div className="absolute bottom-0 w-full h-128 bg-gradient-to-t from-blue-500/15 to-transparent blur-3xl" />
    </section>
  );
}
