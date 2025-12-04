import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const stats = [
        { value: '10+', label: 'Years Active' },
        { value: '100%', label: 'Client Retention' },
        { value: '24/7', label: 'Global Ops' },
    ];

    return (
        <section id="experience" className="bg-cream text-void border-t border-void">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Left Block - Manifesto */}
                <div className="p-8 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-void flex flex-col justify-center">
                    <span className="text-xs uppercase tracking-widest mb-12 block">
                        Operational History
                    </span>
                    <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight mb-12">
                        Proven
                        <br />
                        In The Field
                    </h2>
                    <p className="font-sans text-lg md:text-xl font-medium leading-relaxed max-w-md">
                        Our operators are drawn from the world's most elite military and law enforcement units. 
                        Discipline, discretion, and decisive action are the cornerstones of our philosophy.
                    </p>
                </div>

                {/* Right Block - Data Grid */}
                <div className="grid grid-rows-3">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className={`p-8 md:p-12 flex items-center justify-between border-b border-void/10 ${index === 2 ? 'border-b-0' : ''} hover:bg-void hover:text-cream transition-colors duration-500 cursor-default group`}
                        >
                            <span className="font-display text-6xl md:text-8xl font-bold tracking-tighter group-hover:text-cream transition-colors duration-300">
                                {stat.value}
                            </span>
                            <span className="text-xs uppercase tracking-widest text-void/50 group-hover:text-cream/70 transition-colors duration-300">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;