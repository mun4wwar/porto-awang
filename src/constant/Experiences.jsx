import { FaFlutter, FaLaravel } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiMysql, SiPostgresql, SiTailwindcss } from "react-icons/si";

export const EXP = [
    {
        position: "Full Stack Developer",
        company: "PT. Dwitunggal Jaya Pratama Maju (SG8 Group)",
        duration: "Dec 2025 - Present",
        desc: "Developed and deployed a full-featured memorization management system for Pondok Pesantren Hamalatul Qur'an. Utilized Flutter for cross-platform mobile development, integrated Firebase for real-time data management, and implemented RESTful APIs to ensure seamless communication between the app and backend services.",
        skill: [
            { name: "Next.JS", icon: RiNextjsFill, color: "text-white" },
            { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
            { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-500" },
        ]
    },
    {
        position: "Mobile Front End Developer",
        company: "PT. Digital Angkasa (Codelabs Indonesia)",
        duration: "Feb - May 2025",
        desc: "Developed and deployed a full-featured memorization management system for Pondok Pesantren Hamalatul Qur'an. Utilized Flutter for cross-platform mobile development, integrated Firebase for real-time data management, and implemented RESTful APIs to ensure seamless communication between the app and backend services.",
        skill: [
            { name: "Flutter", icon: FaFlutter, color: "text-blue-500" },
            { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
            { name: "My SQL", icon: SiMysql, color: "text-white" },
        ]
    },
];