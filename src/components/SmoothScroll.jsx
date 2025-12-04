import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const SmoothScroll = ({ children }) => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            infinite: false,
            autoResize: true,
        });

        lenisRef.current = lenis;

        // Expose lenis to window for scroll-to functionality
        window.lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Handle anchor links with smooth scroll
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"], button[data-scroll-to]');
            if (target) {
                const href = target.getAttribute('href') || target.dataset.scrollTo;
                if (href && href.startsWith('#')) {
                    const element = document.querySelector(href);
                    if (element) {
                        e.preventDefault();
                        lenis.scrollTo(element, { offset: 0, duration: 1.2 });
                    }
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);

        return () => {
            lenis.destroy();
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return <>{children}</>;
};

export default SmoothScroll;
