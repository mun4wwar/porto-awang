"use client";
import { motion } from "framer-motion";

export default function SkillCard({ skill, icon: Icon, color, className = "" }) {
    return (
        <motion.div
            whileHover={{ y: -5 }} // Efek naik pas di-hover
            className={`skill-card flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 w-32 h-32 md:w-40 md:h-40 ${className}`}
        >
            {/* Render Icon */}
            <div className={`text-4xl md:text-5xl mb-3 ${color}`}>
                <Icon />
            </div>
            
            {/* Nama Skill */}
            <span className="font-semibold text-gray-700 dark:text-gray-200 text-sm md:text-base">
                {skill}
            </span>
        </motion.div>
    );
}