"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function AnimatedLink({ href, children, className = "" }) {
    const linkRef = useRef(null);

    useEffect(() => {
        const el = linkRef.current;

        // default state
        gsap.set(el, {
            rotationX: 0,
            transformPerspective: 600,
            transformOrigin: "center bottom",
        });

        const tl = gsap.timeline({ paused: true });

        tl.to(el, {
            rotationX: -90,       // flip ke belakang
            color: "#3b82f6",     // blue-400
            duration: 0.28,
            ease: "power2.out",
        });

        tl.to(el, {
            rotationX: 0,
            duration: 0.28,
            ease: "power2.out",
        });

        tl.pause(0);

        const onEnter = () => tl.play();
        const onLeave = () => tl.reverse();

        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);

        return () => {
            el.removeEventListener("mouseenter", onEnter);
            el.removeEventListener("mouseleave", onLeave);
        };
    }, []);

    return (
        <Link
            href={href}
            ref={linkRef}
            className={`inline-block text-white transition-colors duration-200 ${className}`}
            style={{ willChange: "transform" }}
        >
            {children}
        </Link>
    );
}
