import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const stats = [
        { value: '10', suffix: '+', label: 'YEARS EXPERIENCE' },
        { value: '100', suffix: '%', label: 'CLIENT SATISFACTION' },
        { value: '24', suffix: '/7', label: 'AVAILABILITY' },
    ];

    return (
        <section id="experience" className="relative py-32 md:py-48 bg-void overflow-hidden">

            {/* Professional Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                    alt="Corporate Architecture" 
                    className="w-full h-full object-cover opacity-5 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-void via-void/95 to-void" />
            </div>

            {/* Editorial grid lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-ash/10" />
                <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-ash/10 hidden md:block" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-32"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone mb-6 block">
                        OPERATIONAL HISTORY
                    </span>
                    <div className="w-16 h-1 bg-stone mb-12" />
                </motion.div>

                {/* Main content - asymmetric grid */}
                <div className="grid md:grid-cols-12 gap-12 md:gap-8">

                    {/* Left column - Large typography */}
                    <div className="md:col-span-5">
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "circOut" }}
                                className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.9] tracking-tighter uppercase"
                            >
                                PROVEN
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: 100 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.1, ease: "circOut" }}
                                className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter uppercase text-brass-muted"
                            >
                                IN THE FIELD
                            </motion.h2>
                        </div>
                    </div>

                    {/* Right column - Content */}
                    <div className="md:col-span-6 md:col-start-7">

                        {/* Quote */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="mb-10 border-l-4 border-brass pl-6"
                        >
                            <p className="font-display text-2xl md:text-3xl text-cream leading-snug tracking-tight mb-6 uppercase">
                                "Professional security built on military discipline and precision."
                            </p>
                            <footer className="flex items-center gap-4">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone">
                                    OUR APPROACH
                                </span>
                            </footer>
                        </motion.blockquote>

                        {/* Body text */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-base font-sans font-medium text-stone leading-relaxed mb-16 max-w-md"
                        >
                            Our team brings backgrounds from military and law enforcement.
                            We provide professional security services for executives, high net-worth individuals,
                            and public figures across multiple countries. Discrete, reliable, and committed.
                        </motion.p>

                        {/* Stats - refined horizontal layout */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="pt-10 border-t border-ash/20"
                        >
                            <div className="grid grid-cols-3 gap-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                        className="text-center md:text-left"
                                    >
                                        <div className="flex items-baseline justify-center md:justify-start gap-1 mb-2">
                                            <span className="font-display font-bold text-4xl md:text-5xl text-cream tracking-tight">
                                                {stat.value}
                                            </span>
                                            <span className="font-display text-2xl md:text-3xl text-stone">
                                                {stat.suffix}
                                            </span>
                                        </div>
                                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone/70">
                                            {stat.label}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
