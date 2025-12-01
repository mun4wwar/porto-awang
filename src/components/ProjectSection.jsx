"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Sistem Informasi Inventaris",
    desc: "A web-based inventory management system built as a semester 3 PBL project. Focused on managing item data, stock tracking, and campus asset monitoring.",
    tech: ["PHP", "MySQL"],
    role: "Backend Developer",
    link: "https://github.com/mun4wwar/project-inventory.git",
  },
  {
    title: "Online Shop Mobile App",
    desc: "A simple mobile e-commerce application built during semester 4. Includes features such as authentication, product browsing, cart management, and checkout using Flutter.",
    tech: ["Flutter", "MySQL"],
    role: "Full Stack Developer",
    link: "https://github.com/mun4wwar/onlineshop_flutter.git",
  },
  {
    title: "Karya Asuh Handicraft",
    desc: "A full e-commerce website developed as the main project in semester 5 for the local UMKM “Karya Asuh Handicraft.” It provides product display, order handling, and an admin dashboard for managing inventory and transactions.",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    role: "Full Stack Developer",
    link: "https://github.com/mun4wwar/karyaasuh_handicraft.git",
  },
  {
    title: "Aplikasi Manajemen Hafalan Santri (Internship Project)",
    desc: "A complete car rental management system built as a final project (TA), supporting bookings, driver usage, transaction flows, and comprehensive admin operations. Integrated with real client workflows and deployed for practical use.",
    tech: ["Flutter", "MySQL"],
    role: "Front End Mobile App Developer",
    link: "https://github.com/fadl4n/frontend-hamalatulquran.git",
  },
  {
    title: "Sistem Informasi Rental Mobil Harkat (Final Project)",
    desc: "A fully integrated car rental management system built as my final project. It includes Google OAuth for instant login, multi-role authentication (Admin, Driver, Customer), dynamic booking workflows, driver assignment, transaction handling, and verification processes. The system is deployed and used by a real client, supporting actual day-to-day rental operations end-to-end.",
    tech: ["Laravel", "Vue.js", "TailwindCSS", "MySQL"],
    role: "Full Stack Developer",
    link: "https://harkatrentcar.com",
  },
];

export default function ProjectSection() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reset"
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="w-full min-h-screen pt-24 px-6 text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-14">
        My <span className="text-blue-400">Projects</span>
      </h1>

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              project-card block
              bg-(--color-navy-light)
              border border-blue-500/10 
              rounded-2xl p-6 shadow-xl/20
              transition-all duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
              hover:-translate-y-1
              hover:border-blue-400/30
              hover:bg-blue-900/10
              hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]
            "
          >
            <h2 className="text-2xl font-bold mb-2">{p.title}</h2>
            <p className="text-gray-300 mb-3">{p.desc}</p>
            <p className="text-blue-300 italic mb-4">{p.role}</p>

            <div className="flex gap-2 flex-wrap">
              {p.tech.map((t, j) => (
                <span
                  key={j}
                  className="px-3 py-1 bg-blue-900/40 
                            border border-blue-400/20 
                            rounded-full text-blue-300 text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
