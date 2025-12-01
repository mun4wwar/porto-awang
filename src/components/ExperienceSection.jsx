"use client";

import { motion } from "framer-motion";

export default function ExperienceSection() {
    return (
        <section className="flex flex-col items-center bg-(--color-navy-dark) text-center px-6 py-20 text-white">
            {/* TITLE */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-10"
            >
                My <span className="text-blue-400">Experience</span>
            </motion.h1>

            {/* EXPERIENCE SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full space-y-8 text-left"
            >
                <div className="bg-(--color-navy-light) border border-blue-500/10 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition">
                    <h3 className="text-xl font-semibold text-white">
                        Mobile App Developer Intern
                    </h3>
                    <p className="text-blue-400">PT. Digital Angkasa (Codelabs Indonesia) — Bintaro, South Tangerang (February - May 2025)</p>
                    <p className="text-gray-300 mt-2">
                        Developed and deployed a full-featured memorization management system developed for Pondok Pesantren Hamalatul Qur'an using{" "}
                        <span className="text-blue-400">Flutter, </span>{" "}
                        <span className="text-blue-400">Laravel, </span> &{" "}
                        <span className="text-blue-400">MySQL</span>.
                        Features include multi-role authentication & CRUD operations.
                    </p>
                </div>

                <div className="bg-(--color-navy-light) border border-blue-500/10 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition">
                    <h3 className="text-xl font-semibold text-white">
                        Freelance Web Developer
                    </h3>
                    <p className="text-blue-400">Remote (Present)</p>
                    <p className="text-gray-300 mt-2">
                        Designed and built responsive websites and web apps for small businesses and
                        student organizations using{" "}
                        <span className="text-blue-400">Laravel, </span>{" "}
                        <span className="text-blue-400">Vue.Js</span> &{" "}
                        <span className="text-blue-400">Laravel</span>.
                        Focused on clean UI/UX, performance, and SEO optimization. Features include multi-role authentication, CRUD operations, booking verification,
                        and invoice generation. Deployed the system for real client usage.
                    </p>
                </div>
            </motion.div>

            {/* EDUCATION SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-20 max-w-4xl w-full text-left"
            >
                <h2 className="text-3xl font-semibold mb-8 text-center text-blue-400">
                    Education
                </h2>

                <div className="bg-(--color-navy-light) border border-blue-500/10 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/10 transition">
                    <h3 className="text-xl font-semibold text-white">
                        Politeknik Negeri Padang
                    </h3>
                    <p className="text-blue-400">Diploma III - Informatics Managements (2022 - 2025)</p>
                    <p className="text-gray-300 mt-2">
                        Focused on full-stack web development, database management, and software project
                        implementation.
                        Final Project:{" "}
                        <span className="text-blue-400">
                            "Sistem Informasi Manajemen Rental Mobil Harkat Yogyakarta Berbasis Web Menggunakan Framework Laravel” (Laravel, Vue.js, dan Tailwind CSS)
                        </span>.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
