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
            color: { value: "#60a5fa" }, // soft blue
            links: {
              color: "#60a5fa",
              distance: 140,
              enable: true,
              opacity: 0.15,
              width: 0.8,
            },
            move: { enable: true, speed: 0.5 },
            number: { value: 35 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2.5 } },
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
          className="w-32 h-32 rounded-full border-4 border-[#134686] shadow-[0_0_20px_rgba(96,165,250,0.3)] mx-auto mb-6 object-cover"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-blue-500/60">Awang</span> 👋
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

        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-blue-500/90 text-white font-semibold rounded-xl hover:shadow-[0_0_18px_rgba(96,165,250,0.4)] transition-all duration-300"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-blue-400 text-blue-300 font-semibold rounded-xl hover:bg-blue-500/20 hover:text-white transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      {/* soft bottom glow */}
      <div className="absolute bottom-0 w-full h-128 bg-gradient-to-t from-blue-400/10 to-transparent blur-2xl" />
    </section>
  );
}
