import React from 'react';
import { motion } from 'framer-motion';
import ServiceItem from './ServiceItem';
import { services } from '../data';

const Services = () => {
    return (
        <section id="services" className="relative py-32 md:py-48 bg-void overflow-hidden">

            {/* Decorative corner accent - Minimal */}
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none border-r border-t border-ash/20 opacity-50" />

            <div className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="grid md:grid-cols-12 gap-12 md:gap-16">

                    {/* Left column - sticky header */}
                    <div className="md:col-span-4">
                        <div className="md:sticky md:top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone mb-6 block">
                                    OPERATIONAL CAPABILITY
                                </span>
                                <div className="w-16 h-1 bg-stone mb-12" />
                            </motion.div>

                            <div className="overflow-hidden mb-4">
                                <motion.h2
                                    initial={{ y: 80 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: "circOut" }}
                                    className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-[0.9] tracking-tighter uppercase"
                                >
                                    ELITE
                                </motion.h2>
                            </div>
                            <div className="overflow-hidden mb-10">
                                <motion.h2
                                    initial={{ y: 80 }}
                                    whileInView={{ y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.08, ease: "circOut" }}
                                    className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tighter uppercase text-brass-muted"
                                >
                                    SERVICES
                                </motion.h2>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-stone font-sans font-medium leading-relaxed text-sm max-w-xs border-l-2 border-ash/20 pl-4"
                            >
                                Professional security services tailored to your needs.
                                Close protection, secure escort, threat assessment, and security consulting.
                            </motion.p>
                        </div>
                    </div>

                    {/* Right column - services list */}
                    <div className="md:col-span-7 md:col-start-6">
                        <div className="border-t border-gray-300">
                            {services.map((service, index) => (
                                <ServiceItem key={index} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
