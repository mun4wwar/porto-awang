"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Rental Mobil Harkat",
    desc: "Website sistem informasi manajemen rental mobil berbasis Laravel.",
    tech: ["Laravel", "MySQL", "TailwindCSS"],
    link: "https://harkatrentcar.com",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio dibuat dengan Next.js dan TailwindCSS, menampilkan project dan kontak.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    link: "#",
  },
  {
    title: "Family Tracker App",
    desc: "Aplikasi Flutter sederhana untuk melacak lokasi keluarga secara real-time.",
    tech: ["Flutter", "Firebase"],
    link: "#",
  },
];

export default function ProjectSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-[var(--color-navy-dark)] text-white px-6 pt-24 pb-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12"
      >
        My <span className="text-blue-400">Projects</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="group bg-[var(--color-navy-light)] border border-blue-500/10 hover:border-blue-500/40 hover:shadow-[0_0_20px_#3b82f6aa] transition-all duration-300 rounded-2xl p-6 flex flex-col"
          >
            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-4 flex-1">{project.desc}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="text-sm bg-blue-900/40 border border-blue-500/30 text-blue-300 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <span className="text-blue-400 font-semibold group-hover:underline">
              Visit Project →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
