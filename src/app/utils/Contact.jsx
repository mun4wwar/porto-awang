"use client";

import dynamic from "next/dynamic";

const ContactSection = dynamic(() => import("@/sections/ContactSection"), {
    ssr: false,
});

export default function Contact() {
    return (
        <>
            <ContactSection />
        </>
    );
}