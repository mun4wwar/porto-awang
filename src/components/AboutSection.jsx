"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center bg-[var(--color-navy-dark)] text-center px-6 pt-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white mb-8"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="max-w-3xl bg-[var(--color-navy-light)] p-8 rounded-2xl shadow-lg border border-blue-500/10"
      >
        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
          Hi there! 👋 I’m <span className="text-blue-400 font-semibold">Munawwar Hibatulllah</span> known as <span className="text-blue-400 font-semibold">Awang</span>, a{" "}
          <span className="text-blue-400 font-semibold">
            Software Engineering Fresh Graduate
          </span>{" "}
          from <span className="text-blue-400 font-semibold">Politeknik Negeri Padang</span>.
          I’m passionate about building sleek, efficient, and user-friendly web apps —
          especially ones that make daily workflows easier.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-6">
          My current focus is mastering{" "}
          <span className="text-blue-400 font-semibold">Laravel</span>,
          <span className="text-blue-400 font-semibold"> Flutter</span>, and{" "}
          <span className="text-blue-400 font-semibold">Next.js</span>, blending backend logic
          with frontend aesthetic to create seamless web experiences. I love exploring
          design systems and UI trends to bring ideas to life.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          When I’m not coding, I’m probably scrolling Dribbble for inspo or fine-tuning my
          own mini projects. Always learning, always improving 🚀
        </p>
      </motion.div>

      {/* SKILLS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-16 max-w-4xl text-center"
      >
        <h2 className="text-3xl font-semibold mb-8 text-blue-400">
          Skills & Tools
        </h2>

        <div className="flex flex-wrap justify-center gap-4 pb-10">
          {[
            "HTML", "CSS", "JavaScript", "PHP", "Laravel", "Next.js",
            "React", "Flutter", "MySQL", "Git", "Tailwind CSS",
            "REST API"
          ].map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(96,165,250,0.15)" }}
              className="px-4 py-2 border border-blue-400/20 rounded-full text-blue-300 text-sm md:text-base font-medium bg-blue-500/5 backdrop-blur-sm shadow-md transition-all duration-300 hover:border-blue-400/40"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
