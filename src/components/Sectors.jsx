import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { sectors } from '../data';

const Sectors = () => {
    const [activeSector, setActiveSector] = useState(0);

    return (
        <section id="sectors" className="bg-void border-t border-ash/20 py-0">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 min-h-screen">
                
                {/* Left Column - Sticky Image Display */}
                <div className="lg:col-span-5 relative hidden lg:block border-r border-ash/20">
                    <div className="sticky top-0 h-screen w-full overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSector}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={sectors[activeSector].image}
                                    alt={sectors[activeSector].title}
                                    className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                                />
                                <div className="absolute inset-0 bg-void/20 mix-blend-multiply" />
                            </motion.div>
                        </AnimatePresence>
                        
                        <div className="absolute bottom-0 left-0 p-12 z-10">
                            <span className="block text-xs font-sans text-cream/60 uppercase tracking-widest mb-4">
                                Sector Focus [0{activeSector + 1}]
                            </span>
                            <h2 className="font-display text-5xl text-cream uppercase leading-none">
                                {sectors[activeSector].title}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Right Column - List */}
                <div className="lg:col-span-7 bg-void">
                    <div className="px-6 md:px-12 py-16 md:py-32">
                        <div className="mb-16 md:mb-24">
                            <h2 className="font-display text-5xl md:text-6xl text-cream uppercase leading-none tracking-tight mb-8">
                                Who We
                                <br />
                                Protect
                            </h2>
                            <p className="text-stone text-lg font-medium leading-relaxed max-w-md">
                                Every client is different. We build security plans that fit your life, not the other way around.
                            </p>
                        </div>

                        <div className="border-t border-ash/20">
                            {sectors.map((sector, index) => (
                                <div 
                                    key={index}
                                    onMouseEnter={() => setActiveSector(index)}
                                    className={`group py-12 border-b border-ash/20 flex flex-col gap-6 hover:bg-ash/5 transition-colors duration-300 cursor-pointer ${activeSector === index ? 'bg-ash/5' : ''}`}
                                >
                                    <div className="flex items-baseline justify-between">
                                        <div className="flex items-baseline gap-4">
                                            <span className="text-xs text-stone">0{index + 1}</span>
                                            <h3 className="font-display text-3xl md:text-4xl text-cream uppercase tracking-tight group-hover:text-stone transition-colors duration-300">
                                                {sector.title}
                                            </h3>
                                        </div>
                                        <ArrowRight className={`w-5 h-5 text-stone transition-transform duration-300 ${activeSector === index ? 'rotate-0 text-cream' : '-rotate-45'}`} />
                                    </div>
                                    <p className="text-stone/80 text-sm font-medium leading-relaxed max-w-md pl-8">
                                        {sector.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sectors;
