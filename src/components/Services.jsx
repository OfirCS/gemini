import React from 'react';
import { motion } from 'framer-motion';
import ServiceItem from './ServiceItem';
import { services } from '../data';

const Services = () => {
    return (
        <section id="services" className="relative bg-void border-t border-ash/20">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-ash/20">
                {/* Header Block */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1 p-8 md:p-12 border-b md:border-b-0 lg:border-r border-ash/20 bg-ash/5 flex flex-col justify-between min-h-[400px]">
                    <div>
                        <h2 className="font-display text-5xl md:text-6xl text-cream leading-[0.9] tracking-tight uppercase mb-6">
                            Elite
                            <br />
                            Services
                        </h2>
                        <p className="text-stone font-medium text-sm leading-relaxed max-w-xs">
                            Comprehensive protection tailored to the unique demands of high-profile clients.
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center">
                        <span className="text-stone">↓</span>
                    </div>
                </div>

                {/* Service Items Grid */}
                <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2">
                    {services.map((service, index) => (
                        <ServiceItem key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
