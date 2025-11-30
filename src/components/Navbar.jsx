"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import AnimatedLink from "@/app/AnimatedLink";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  /** LINK REFS */
  const linksRef = useRef([]);

  const addToRefs = useCallback((el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  }, []);

  /** SCROLL */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** GSAP LINK HOVER */
  useEffect(() => {
    linksRef.current.forEach((link) => {
      const tl = gsap.timeline({ paused: true });

      tl.to(link, {
        rotateX: 90,
        duration: 0.22,
        transformOrigin: "bottom",
        ease: "power2.out",
      });

      tl.to(link, {
        rotateX: 0,
        duration: 0.22,
        ease: "power2.out",
      });

      const handle = () => tl.restart();
      link.addEventListener("mouseenter", handle);

      // cleanup biar ga leak
      return () => link.removeEventListener("mouseenter", handle);
    });
  }, []);

  /** Reusable Links Component */
  const NavLinks = ({ className = "" }) => (
    <ul className={`flex space-x-6 ${className}`}>
      {links.map((link) => (
        <li key={link.href}>
          <AnimatedLink href={link.href}>
            {link.label}
          </AnimatedLink>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* TOP NAV */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "opacity-0 pointer-events-none"
            : "opacity-100 bg-[rgba(11,18,32,0.3)] backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white transition hover:text-blue-400">
              Awang<span className="text-blue-400">.</span>
            </h1>
          </Link>

          <div className="hidden md:flex">
            <NavLinks />
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto text-gray-300 md:hidden hover:text-blue-400"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* FLOATING PILL */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.85 }}
            transition={{ duration: 0.35 }}
            className="fixed z-50 -translate-x-1/2 top-4 left-1/2"
          >
            <div className="flex items-center gap-6 px-6 py-3 rounded-full shadow-lg backdrop-blur-xl bg-[rgba(11,18,32,0.85)] border border-blue-500/20">
              <Link href="/">
                <h1 className="text-xl font-bold text-white transition hover:text-blue-400">
                  A<span className="text-blue-400">.</span>
                </h1>
              </Link>

              <div className="hidden md:flex">
                <NavLinks />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-[rgba(11,18,32,0.95)] backdrop-blur-lg border-t border-blue-500/10 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-gray-300 transition hover:text-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
