"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Sistem Informasi Inventaris",
    desc: "Website sistem informasi inventaris berbasis web sebagai project PBL semester 3. Fokus pada pengelolaan data barang dan stok inventaris kampus.",
    tech: ["PHP", "MySQL"],
    role: "Backend Developer",
    link: "https://github.com/mun4wwar/project-inventory.git",
  },
  {
    title: "Online Shop Mobile App",
    desc: "Aplikasi mobile e-commerce sederhana untuk jual-beli produk. Dibangun menggunakan Flutter dengan fitur auth, cart, dan checkout.",
    tech: ["Flutter", "MySQL"],
    role: "Full Stack Developer",
    link: "https://github.com/mun4wwar/onlineshop_flutter.git",
  },
  {
    title: "Karya Asuh Handicraft",
    desc: "Website e-commerce untuk UMKM Karya Asuh Handicraft berbasis Laravel. Mengelola produk, transaksi, dan dashboard admin.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    role: "Full Stack Developer",
    link: "https://github.com/mun4wwar/karyaasuh_handicraft.git",
  },
  {
    title: "Aplikasi Manajemen Hafalan Santri",
    desc: "Aplikasi mobile untuk manajemen hafalan santri di Pondok Pesantren Hamalatul Qur’an. Dikembangkan saat magang di PT. Digital Angkasa (Codelabs Indonesia).",
    tech: ["Flutter", "MySQL"],
    role: "App Developer",
    link: "https://github.com/fadl4n/frontend-hamalatulquran.git",
  },
  {
    title: "Sistem Informasi Rental Mobil Harkat",
    desc: "Website sistem informasi manajemen rental mobil berbasis Laravel dan Vue.js, digunakan oleh CV. Harkat Yogyakarta sebagai sistem operasional harian.",
    tech: ["Laravel", "Vue.js", "TailwindCSS", "MySQL"],
    role: "Full Stack Developer",
    link: "https://harkatrentcar.com",
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
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="group bg-[var(--color-navy-light)] border border-blue-500/10 hover:border-blue-500/40 hover:shadow-[0_0_20px_#3b82f6aa] transition-all duration-300 rounded-2xl p-6 flex flex-col hover:-translate-y-1"
          >
            <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition">
              {project.title}
            </h2>
            <p className="text-gray-300 mb-3 flex-1">{project.desc}</p>

            <p className="text-sm text-blue-300 mb-4 italic">{project.role}</p>

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
              {project.link === "#" ? "View Details →" : "Visit Project →"}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}