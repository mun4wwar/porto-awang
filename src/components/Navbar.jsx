"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // buat icon hamburger

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[rgba(11,18,32,0.6)] border-b border-blue-500/10 shadow-md"
          : "bg-[rgba(11,18,32,0.3)]"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative">
        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
          <Link href="/">
            <h1 className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition text-center">
              Awang<span className="text-blue-400">.</span>
            </h1>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 ml-auto">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-blue-400 transition ${
                  pathname === link.href ? "text-blue-400" : "text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-blue-400 transition ml-auto"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown (smooth transition) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-[rgba(11,18,32,0.95)] backdrop-blur-lg border-t border-blue-500/10`}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block text-lg hover:text-blue-400 transition ${
                  pathname === link.href ? "text-blue-400" : "text-gray-300"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
