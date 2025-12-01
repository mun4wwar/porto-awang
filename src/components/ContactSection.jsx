"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="min-h-[calc(100vh-64px)] bg-(--color-navy-dark) text-white px-6 pt-24 pb-16 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        Get in <span className="text-blue-400">Touch</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 mb-12 max-w-xl text-center"
      >
        Have a project in mind or just want to say hi? 👋  
        Feel free to reach out — I’d love to connect with you.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-lg bg-(--color-navy-light) p-8 rounded-2xl border border-blue-500/10 shadow-[0_0_20px_#3b82f622]"
      >
        <div className="mb-5">
          <label className="block text-sm text-gray-300 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm text-gray-300 mb-2">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-400 text-gray-900 font-semibold py-3 rounded-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        >
          Send Message ✉️
        </button>
      </motion.form>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 text-gray-400 text-sm text-center"
      >
        or reach me at{" "}
        <a
          href="mailto:munawwarhibatullah4@gmail.com"
          className="text-blue-400 hover:underline"
        >
          munawwarhibatullah4@gmail.com
        </a>
      </motion.div>
    </section>
  );
}
