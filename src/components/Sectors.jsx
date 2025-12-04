import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sectors } from '../data';

const Sectors = () => {
    return (
        <section id="sectors" className="bg-void border-t border-ash/20 py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-12 gap-16">
                
                {/* Left Column - Header */}
                <div className="lg:col-span-4">
                    <div className="sticky top-32">
                        <h2 className="font-display text-5xl md:text-6xl text-cream uppercase leading-none tracking-tight mb-8">
                            Mission
                            <br />
                            Scope
                        </h2>
                        <p className="text-stone text-lg font-medium leading-relaxed max-w-xs">
                            Tailored protection strategies for diverse operational environments and client profiles.
                        </p>
                    </div>
                </div>

                {/* Right Column - List */}
                <div className="lg:col-span-8">
                    <div className="border-t border-ash/20">
                        {sectors.map((sector, index) => (
                            <div 
                                key={index}
                                className="group py-12 border-b border-ash/20 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-ash/5 transition-colors duration-300 cursor-pointer"
                            >
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-4 mb-2">
                                        <span className="text-xs text-stone">0{index + 1}</span>
                                        <h3 className="font-display text-3xl md:text-4xl text-cream uppercase tracking-tight group-hover:text-stone transition-colors duration-300">
                                            {sector.title}
                                        </h3>
                                    </div>
                                    <p className="text-stone/60 text-sm uppercase tracking-wide pl-8">
                                        {sector.target}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pl-8 md:pl-0">
                                    <p className="hidden md:block text-stone text-sm font-medium max-w-xs leading-relaxed">
                                        {sector.desc}
                                    </p>
                                    <div className="w-12 h-12 border border-ash/20 rounded-full flex items-center justify-center group-hover:bg-cream group-hover:border-cream transition-all duration-300">
                                        <ArrowRight className="w-4 h-4 text-stone group-hover:text-void transition-colors duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sectors;
