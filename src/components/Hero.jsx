import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = ({ scrollTo }) => {
    const [mounted, setMounted] = useState(false);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="relative min-h-screen flex flex-col pt-32 bg-void overflow-hidden border-b border-ash/20">

            {/* Main Content Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 h-full">

                {/* Left Column - Typography */}
                <div className="lg:col-span-8 px-6 md:px-12 lg:px-16 flex flex-col justify-center border-r border-ash/20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="font-display text-5xl md:text-9xl lg:text-[10rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter text-cream -ml-1">
                            YOUR SAFETY
                            <br />
                            <span className="text-stone">OUR MISSION</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-12 max-w-xl"
                    >
                        <p className="text-lg md:text-xl text-stone font-medium leading-relaxed">
                            Professional security for business leaders, families, and anyone who needs real protection. We keep you safe so you can focus on what matters.
                        </p>
                    </motion.div>
                </div>

                {/* Right Column - Action & Stats */}
                <div className="lg:col-span-4 flex flex-col border-t lg:border-t-0 border-ash/20">
                    <div className="flex-1 bg-ash/5 p-12 flex flex-col justify-center">
                        <button
                            onClick={() => scrollTo('contact')}
                            className="w-full py-6 bg-cream text-void font-display text-xl font-bold hover:bg-stone hover:text-cream transition-colors duration-300"
                        >
                            INITIATE CONTACT
                        </button>
                    </div>

                    {/* Image/Visual Placeholder - Monochrome */}
                    <div className="h-[40vh] lg:h-1/2 relative overflow-hidden border-t border-ash/20 group rounded-3xl m-4 md:m-8">
                        <motion.img
                            style={{ y }}
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                            alt="Luxury Office"
                            className="absolute inset-0 w-full h-[120%] object-cover grayscale opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 bg-void/10 mix-blend-multiply" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;

