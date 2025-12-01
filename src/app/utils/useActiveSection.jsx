"use client";

import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds = []) {
    const [active, setActive] = useState(sectionIds[0] || null);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            clearTimeout(timeoutId);
            
            timeoutId = setTimeout(() => {
                const scrollPos = window.scrollY + 150;
                
                for (let i = sectionIds.length - 1; i >= 0; i--) {
                    const section = document.getElementById(sectionIds[i]);
                    if (section) {
                        const { offsetTop, offsetHeight } = section;
                        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                            setActive(sectionIds[i]);
                            return;
                        }
                    }
                }
            }, 100); 
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        }
    }, [sectionIds]);

    return active;
}
