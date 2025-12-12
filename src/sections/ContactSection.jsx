"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset"
        },
      });

      tl.from(".contact-title", {
        opacity: 0,
        y: -30,
        duration: 0.6,
        ease: "power2.out",
      })
        .from(
          ".contact-sub",
          {
            opacity: 0,
            y: 10,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .from(
          ".contact-form",
          {
            opacity: 0,
            y: 40,
            filter: "blur(8px)",
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.2"
        )
        .from(
          ".contact-email",
          {
            opacity: 0,
            y: 10,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center bg-(--color-navy-dark) px-6 py-28 text-white"
    >
      <h1 className="contact-title text-4xl md:text-5xl font-bold mb-6 text-center">
        Get in <span className="text-blue-400">Touch</span>
      </h1>

      <p className="contact-sub text-gray-300 mb-12 max-w-xl text-center">
        Have a project in mind or just want to say hi? 👋  
        Feel free to reach out — I’d love to connect with you.
      </p>

      <form
        className="contact-form w-full max-w-lg bg-(--color-navy-light) p-8 rounded-2xl border border-blue-500/10 shadow-[0_0_20px_#3b82f622]"
      >
        <div className="mb-5">
          <label className="block text-sm text-gray-300 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 
            text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm text-gray-300 mb-2">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 
            text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="w-full p-3 rounded-lg bg-blue-950/40 border border-blue-500/30 
            text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 
            transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-400 text-gray-900 font-semibold 
          py-3 rounded-xl transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        >
          Send Message ✉️
        </button>
      </form>

      <div className="contact-email mt-10 text-gray-400 text-sm text-center">
        or reach me at{" "}
        <a
          href="mailto:munawwarhibatullah4@gmail.com"
          className="text-blue-400 hover:underline"
        >
          munawwarhibatullah4@gmail.com
        </a>
      </div>
    </section>
  );
}
