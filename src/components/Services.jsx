import React from 'react';
import { motion } from 'framer-motion';
import ServiceItem from './ServiceItem';
import { services } from '../data';

const Services = () => {
    return (
        <section id="services" className="relative bg-void border-t border-ash/20">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-ash/20">
                {/* Header Block */}
                <div className="col-span-1 md:col-span-2 lg:col-span-1 p-8 md:p-12 border-b md:border-b-0 lg:border-r border-ash/20 bg-ash/5 flex flex-col justify-between min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
                    {/* Subtle Background Image */}
                    <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700">
                         <img 
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                            alt="Service Detail"
                            className="w-full h-full object-cover grayscale contrast-125"
                        />
                    </div>
                    
                    <div className="relative z-10">
                        <h2 className="font-display text-5xl md:text-6xl text-cream leading-[0.9] tracking-tight uppercase mb-6">
                            What
                            <br />
                            We Do
                        </h2>
                        <p className="text-stone font-medium text-sm leading-relaxed max-w-xs">
                            From personal bodyguards to full security plans, we've got you covered.
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-stone/30 flex items-center justify-center relative z-10">
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
