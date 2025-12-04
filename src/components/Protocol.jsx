import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Protocol = () => {
    const steps = [
        {
            num: "01",
            title: "Assess",
            desc: "Comprehensive threat assessment. We evaluate your profile, identify vulnerabilities, and analyze potential risks to you and your family.",
            detail: "Threat Analysis"
        },
        {
            num: "02",
            title: "Plan",
            desc: "Custom security architecture. We design protection protocols tailored to your lifestyle, travel patterns, and specific requirements.",
            detail: "Security Design"
        },
        {
            num: "03",
            title: "Execute",
            desc: "Professional deployment. Our operators integrate seamlessly, providing discrete protection without disrupting your daily life.",
            detail: "Active Protection"
        },
    ];

    return (
        <section id="protocol" className="relative py-32 md:py-48 bg-void overflow-hidden">

            {/* Background Image - Tactical/Abstract */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                    alt="Security Protocol" 
                    className="w-full h-full object-cover opacity-5 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-void/80" />
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
                        Our Process
                    </span>
                    <div className="w-16 h-1 bg-brass/20 mb-12" />

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: 80 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "circOut" }}
                                className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.9] tracking-tighter uppercase"
                            >
                                The Protocol
                            </motion.h2>
                        </div>
                        <p className="text-stone/70 font-sans font-medium text-sm max-w-xs leading-relaxed">
                            A methodical approach developed through years of professional security experience.
                        </p>
                    </div>
                </motion.div>

                {/* Protocol steps */}
                <div className="grid md:grid-cols-3 gap-0 border-t border-ash/20">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8 }}
                            className="group relative p-8 md:p-12 border-b border-l border-ash/20 hover:bg-white/[0.02] transition-all duration-500 cursor-pointer"
                        >
                            {/* Step number */}
                            <span className="absolute top-6 right-6 font-display text-6xl md:text-7xl text-white/[0.03] group-hover:text-white/[0.07] transition-colors duration-500">
                                {step.num}
                            </span>

                            <div className="relative z-10">
                                {/* Detail label */}
                                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-stone group-hover:text-cream transition-colors duration-500 block mb-6">
                                    {step.detail}
                                </span>

                                {/* Title */}
                                <h3 className="font-display text-3xl md:text-4xl text-cream mb-6 tracking-tight">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-stone/60 font-sans font-medium text-sm leading-relaxed mb-8 group-hover:text-stone/80 transition-colors duration-500">
                                    {step.desc}
                                </p>

                                {/* Arrow indicator */}
                                <div className="flex items-center gap-3 text-stone group-hover:text-brass transition-colors duration-500">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Learn More</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                    {/* Close the border on the right for the last item if needed, or leave as grid style */}
                    <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-ash/20 pointer-events-none" />
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-20 pt-16 border-t border-ash/20 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
                >
                    <p className="font-display text-2xl md:text-3xl text-cream tracking-tight">
                        Ready to begin?
                    </p>

                    <button
                        onClick={() => {
                            const el = document.getElementById('contact');
                            if (el && window.lenis) window.lenis.scrollTo(el, { duration: 1.2 });
                        }}
                        className="group flex items-center gap-4 px-8 py-4 border border-ash/30 text-cream hover:bg-cream hover:text-void transition-all duration-300"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest">
                            Start Your Assessment
                        </span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Protocol;
