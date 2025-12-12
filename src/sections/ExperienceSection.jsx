"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from(".exp-title", {
                opacity: 0,
                y: -30,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".exp-title",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(".exp-card", {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.15,
                scrollTrigger: {
                    trigger: ".exp-card",
                    start: "top 90%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.from(".edu-title", {
                opacity: 0,
                y: -30,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".edu-title",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });

            gsap.utils.toArray(".edu-card").forEach((card) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="flex flex-col items-center bg-(--color-navy-dark) px-6 py-28 text-white"
        >
            <h1 className="exp-title text-center text-4xl md:text-5xl font-bold mb-10">
                My <span className="text-blue-400">Experience</span>
            </h1>

            {/* EXPERIENCE LIST */}
            <div className="max-w-4xl w-full text-left">
                <div className="exp-card bg-(--color-navy-light) border border-blue-500/10 p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-white">
                        Mobile App Developer Intern
                    </h3>
                    <p className="text-blue-400 mt-1">
                        PT. Digital Angkasa (Feb – May 2025)
                    </p>
                    <p className="text-gray-300 mt-4 leading-relaxed">
                        Developed and deployed a full-featured memorization management system
                        for Pondok Pesantren Hamalatul Qur'an using{" "}
                        <span className="text-blue-400">Flutter</span>,{" "}
                        <span className="text-blue-400">Laravel</span>, &{" "}
                        <span className="text-blue-400">MySQL</span>.
                        Includes multi-role authentication & CRUD operations.
                    </p>
                </div>
            </div>

            {/* EDUCATION SECTION */}
            <div className="max-w-4xl w-full mt-20 text-left">
                <h2 className="edu-title text-3xl font-semibold mb-12 text-center text-blue-400">
                    Education
                </h2>

                <div className="space-y-6">
                    <div className="edu-card bg-(--color-navy-light) border border-blue-500/10 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-white">
                            Politeknik Negeri Padang
                        </h3>
                        <p className="text-blue-400 mt-1">
                            Diploma III Informatics Management (2022–2025)
                        </p>
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            Focused on full-stack development & mobile dev. Final project:{" "}
                            <span className="text-blue-400">
                                Sistem Informasi Manajemen Rental Mobil Harkat Yogyakarta
                                Berbasis Web (Laravel, Vue.js, Tailwind, MySQL)
                            </span>.
                        </p>
                    </div>

                    <div className="edu-card bg-(--color-navy-light) border border-blue-500/10 p-8 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-white">
                            SMA Negeri 12 Depok
                        </h3>
                        <p className="text-blue-400 mt-1 mb-4">Science (2019–2022)</p>
                        <ul className="space-y-2 list-disc list-inside text-gray-300">
                            <li>Member of OSIS (2019–2020)</li>
                            <li>Treasurer of OSIS (2020–2021)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
