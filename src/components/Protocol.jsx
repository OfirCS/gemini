import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Protocol = () => {
    const steps = [
        {
            num: "01",
            title: "We Listen",
            desc: "First, we talk. We learn about your daily routine, your concerns, and what matters most to you. No two clients are the same.",
            detail: "Understand"
        },
        {
            num: "02",
            title: "We Plan",
            desc: "Based on what we learn, we create a security plan that works for your life. Simple, practical, effective.",
            detail: "Design"
        },
        {
            num: "03",
            title: "We Protect",
            desc: "Our team steps in quietly. You go about your life normally while we handle your safety in the background.",
            detail: "Deliver"
        },
    ];

    return (
        <section id="protocol" className="bg-void border-t border-ash/20">
            
            <div className="grid grid-cols-1 md:grid-cols-3">
                {steps.map((step, i) => (
                    <div 
                        key={i}
                        className={`group relative p-8 md:p-12 lg:p-16 border-b md:border-b-0 border-ash/20 ${i !== 2 ? 'md:border-r' : ''} hover:bg-ash/5 transition-colors duration-500 min-h-[400px] md:min-h-[500px] flex flex-col justify-between`}
                    >
                        <div className="flex justify-between items-start">
                            <span className="font-display text-5xl text-ash/20 font-bold group-hover:text-ash/40 transition-colors duration-500">
                                {step.num}
                            </span>
                            <div className="w-8 h-8 rounded-full border border-ash/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowRight className="w-4 h-4 text-cream" />
                            </div>
                        </div>

                        <div>
                            <span className="text-xs text-stone uppercase tracking-widest mb-4 block">
                                {step.detail}
                            </span>
                            <h3 className="font-display text-3xl md:text-4xl text-cream uppercase tracking-tight mb-6 group-hover:translate-x-2 transition-transform duration-300">
                                {step.title}
                            </h3>
                            <p className="text-stone font-medium text-sm leading-relaxed max-w-xs">
                                {step.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA Bar */}
            <div className="bg-cream text-void p-12 md:p-16 text-center">
                <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-8">
                    Ready To Talk?
                </h2>
                <button
                    onClick={() => {
                        const el = document.getElementById('contact');
                        if (el && window.lenis) window.lenis.scrollTo(el, { duration: 1.2 });
                    }}
                    className="inline-flex items-center gap-4 px-8 py-4 border border-void/20 hover:bg-void hover:text-cream transition-all duration-300 rounded-sm uppercase font-bold text-sm tracking-widest"
                >
                    Free Consultation <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
};

export default Protocol;