"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function AnimatedLink({ href, children, className = "", isActive = false }) {
    const wrapperRef = useRef(null);
    const charsRef = useRef([]);
    const tlRef = useRef(null);

    useEffect(() => {
        const chars = charsRef.current;

        gsap.set(chars, {
            rotationX: 0,
            color: isActive ? "#3b82f6" : "#ffffff",
            transformPerspective: 800,
            transformOrigin: "bottom",
        });

        const tl = gsap.timeline({ paused: true });
        tlRef.current = tl;

        tl.to(chars, {
            rotationX: -90,
            color: "#3b82f6",
            duration: 0.32,
            ease: "power3.out",
            stagger: 0.04,
        }).to(chars, {
            rotationX: 0,
            duration: 0.32,
            ease: "power3.out",
            stagger: 0.04,
        });

        const el = wrapperRef.current;

        const onEnter = () => {
            if (!isActive) tl.play(0);
        };

        const onLeave = () => {
            if (!isActive) tl.reverse();
        };

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        return () => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, [isActive]);

    // Force isActive styling if isActive
    useEffect(() => {
        if (isActive && charsRef.current.length > 0) {
            gsap.to(charsRef.current, {
                color: "#3b82f6",
                rotationX: 0,
                duration: 0.3,
                stagger: 0.04,
                ease: "power3.out",
            });
        }
    }, [isActive]);

    const split = String(children).split("");

    return (
        <Link
            href={href}
            ref={wrapperRef}
            className={`inline-block ${className}`}
            style={{ perspective: "800px" }}
        >
            {split.map((char, i) => (
                <span
                    key={i}
                    ref={(el) => (charsRef.current[i] = el)}
                    className="inline-block select-none"
                    style={{ willChange: "transform" }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </Link>
    );
}
