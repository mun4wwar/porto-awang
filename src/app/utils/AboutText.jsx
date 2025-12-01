import { motion } from "framer-motion";

const textContent = [
    { 
        id: 1, 
        text: "Fresh Graduate Full-Stack Developer proficient in building scalable web and cross-platform mobile applications. I thrive on translating complex requirements into simple, high-performance digital experiences."
    },
    { 
        id: 2, 
        text: (
            <>
                Specializing in **Next.js (React)** and **Tailwind CSS** for the frontend, backed by **Laravel** for stable systems, and experience in **Flutter**. My key achievement is delivering a rental system that **reduced manual admin time by 30%**.
            </>
        )
    },
    { 
        id: 3, 
        text: "I prioritize architectural clarity and long-term maintainability, focusing my efforts on solutions that deliver tangible business impact over chasing short-lived trends."
    }
];

export default function AboutText() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-7xl w-full bg-gray-800 p-8 rounded-2xl shadow-xl border border-blue-500/10" 
        >
            {textContent.map((item) => (
                <p 
                    key={item.id}
                    className={`text-lg md:text-xl leading-relaxed text-gray-300 mb-4`} 
                >
                    {item.text}
                </p>
            ))}
        </motion.div>
    );
}