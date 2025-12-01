"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedButton({ children, href, className, target }) {
    const btnRef = useRef(null);
    const getWipe = () => btnRef.current?.querySelector(".wipe");

    const handleEnter = () => {
        const el = btnRef.current;
        const wipe = getWipe();
        if (!el || !wipe) return;

        gsap.killTweensOf(wipe);

        // FULL left → right → stay
        gsap.to(wipe, {
            x: "60%",  // full sweep ke kanan
            duration: 0.9,
            ease: "power3.out",
            overwrite: true,
        });

        gsap.to(el, {
            borderColor: "rgba(80,150,255,1)",
            boxShadow: "0 0 20px rgba(80,150,255,0.45)",
            duration: 0.4,
            ease: "power2.out",
        });
    };

    const handleLeave = () => {
        const el = btnRef.current;
        const wipe = getWipe();
        if (!el || !wipe) return;

        gsap.killTweensOf(wipe);

        // FULL right → left kembali full
        gsap.to(wipe, {
            x: "-200%",
            duration: 0.6,
            ease: "power2.inOut",
            overwrite: true,
        });

        gsap.to(el, {
            borderColor: "rgba(80,150,255,0.4)",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.35,
        });
    };

    return (
        <Link
            href={href ?? "#"}
            className="inline-block"
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
            <button
                ref={btnRef}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                onFocus={handleEnter}
                onBlur={handleLeave}
                className={`relative overflow-hidden px-6 py-3 rounded-xl border bg-white/5 backdrop-blur-sm text-white font-semibold cursor-pointer ${className ?? ""}`}
            >
                <span className="relative z-10">{children}</span>

                {/* FULL gloss streak */}
                <span
                    className="
                        wipe pointer-events-none
                        absolute top-0 left-0 
                        h-full w-[120%]
                        bg-linear-to-r from-transparent via-white/50 to-transparent
                        opacity-80
                        blur-xs
                        rotate-12
                        -translate-x-[200%]
                    "
                />
            </button>
        </Link>
    );
}
