import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import HeroScene from './HeroScene';

const Hero = ({ scrollTo }) => {
    const [mounted, setMounted] = useState(false);
    
    // Mouse position for spotlight
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the spotlight
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <header className="relative h-screen min-h-[800px] flex flex-col items-center justify-center bg-void overflow-hidden">
            
            {/* Interactive Canvas Background */}
            <HeroScene />

            {/* Spotlight Overlay */}
            <motion.div 
                className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay"
                style={{
                    background: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(circle 400px at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 80%)`
                    )
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center text-center px-6 w-full max-w-7xl mx-auto">
                
                {/* Top Label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-8 flex items-center gap-3"
                >
                    <div className="w-1 h-1 bg-brass rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-brass-muted uppercase">
                        Secure Operations Active
                    </span>
                    <div className="w-1 h-1 bg-brass rounded-full animate-pulse" />
                </motion.div>

                {/* Massive Typography */}
                <div className="relative mb-12">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-7xl md:text-9xl lg:text-[11rem] font-bold uppercase leading-[0.8] tracking-tighter text-cream mix-blend-difference"
                    >
                        <span className="block">EXPERIENCE</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-cream to-stone">PRECISION</span>
                        <span className="block">SECURITY</span>
                    </motion.h1>
                </div>

                {/* Description & CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-col items-center gap-10"
                >
                    <p className="text-stone text-lg md:text-xl font-sans max-w-xl leading-relaxed">
                        Professional security services for executives and high net-worth individuals.
                        <br />
                        <span className="text-cream">Based in Toronto. Operating globally.</span>
                    </p>

                    <button
                        onClick={() => scrollTo('contact')}
                        className="group relative px-12 py-5 bg-cream text-void overflow-hidden transition-all duration-300 hover:bg-brass"
                    >
                        <span className="relative z-10 font-bold text-sm tracking-[0.25em] uppercase flex items-center gap-3">
                            Get Started
                            <ArrowDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:rotate-0" />
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.button
                onClick={() => scrollTo('experience')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 text-stone hover:text-cream transition-colors duration-300"
            >
                <span className="text-[9px] font-mono uppercase tracking-[0.3em] rotate-90 origin-left translate-y-[-20px] translate-x-[50%]">
                    Scroll
                </span>
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-stone to-transparent group-hover:via-cream transition-colors duration-300">
                    <motion.div 
                        animate={{ y: [0, 64, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-full h-1/3 bg-cream"
                    />
                </div>
            </motion.button>
        </header>
    );
};

export default Hero;

