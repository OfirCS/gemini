import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { sectors } from '../data';

const Sectors = () => {
    const [activeSector, setActiveSector] = useState(0);

    return (
        <section id="sectors" className="relative py-32 md:py-48 bg-void overflow-hidden">

            {/* Background Image - Global/Network */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                    alt="Global Network" 
                    className="w-full h-full object-cover opacity-10 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-void/90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone mb-6 block">
                        SECTOR FOCUS
                    </span>
                    <div className="w-16 h-1 bg-brass mb-12" />

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div>
                            <div className="overflow-hidden">
                                <motion.h2
                                    initial={{ y: 80 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "circOut" }}
                                    className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.9] tracking-tighter uppercase"
                                >
                                    MISSION SCOPE
                                </motion.h2>
                            </div>
                        </div>
                        <p className="text-stone/80 font-sans font-medium text-sm max-w-sm leading-relaxed uppercase tracking-wide">
                            From high-net-worth individuals to multinational corporations,
                            we provide tailored protection for those who demand excellence.
                        </p>
                    </div>
                </motion.div>

                {/* Content grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-16">

                    {/* Left - Interactive sectors list */}
                    <div>
                        {sectors.map((sector, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                onMouseEnter={() => setActiveSector(index)}
                                onClick={() => setActiveSector(index)}
                                className={`group relative py-8 cursor-pointer border-b transition-all duration-300 ${activeSector === index
                                        ? 'border-brass bg-white/[0.02]'
                                        : 'border-ash/20 hover:bg-white/[0.01]'
                                    }`}
                            >
                                <div className="flex items-start justify-between gap-8">
                                    <div className="flex items-start gap-6">
                                        <span className={`text-xs font-mono font-bold tabular-nums transition-colors duration-300 ${activeSector === index ? 'text-brass' : 'text-stone'
                                            }`}>
                                            0{index + 1}
                                        </span>

                                        <div>
                                            <h3 className={`font-display font-bold text-2xl md:text-3xl mb-3 tracking-tight uppercase transition-colors duration-300 ${activeSector === index ? 'text-cream' : 'text-stone'
                                                }`}>
                                                {sector.title}
                                            </h3>
                                            <p className={`text-sm font-sans font-medium leading-relaxed max-w-sm transition-colors duration-300 ${activeSector === index ? 'text-cream/80' : 'text-stone/60'
                                                }`}>
                                                {sector.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 rounded-full ${activeSector === index
                                            ? 'bg-brass text-void'
                                            : 'border border-ash/30 text-stone opacity-50 group-hover:opacity-100 group-hover:border-stone'
                                        }`}>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Active indicator line */}
                                <motion.div
                                    className="absolute bottom-0 left-0 h-[1px] bg-brass"
                                    initial={{ width: 0 }}
                                    animate={{ width: activeSector === index ? '100%' : 0 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Right - Image display */}
                    <div className="hidden md:block relative h-[600px] sticky top-32">
                        <div className="w-full h-full overflow-hidden relative border border-ash/20">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSector}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6 }}
                                    className="absolute inset-0"
                                >
                                    <img
                                        src={sectors[activeSector].image}
                                        alt={sectors[activeSector].title}
                                        className="w-full h-full object-cover"
                                        style={{ filter: 'grayscale(100%) contrast(1.1) brightness(0.8)' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-60" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Overlay info */}
                            <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
                                <motion.div
                                    key={activeSector}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-brass mb-3 block">
                                        Sector 0{activeSector + 1}
                                    </span>
                                    <h3 className="font-display font-bold text-4xl text-cream tracking-tighter uppercase">
                                        {sectors[activeSector].title}
                                    </h3>
                                </motion.div>
                            </div>

                            {/* Border frame - Clean */}
                            <div className="absolute inset-0 border border-ash/20 pointer-events-none z-30" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sectors;
