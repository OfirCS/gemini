import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceItem = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative py-10 md:py-14 cursor-pointer border-b border-ash/20 transition-all duration-500 hover:bg-white/[0.02]"
    >
      {/* Hover line accent */}
      <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-brass transition-all duration-500 group-hover:w-full" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">

        {/* Left side - number and title */}
        <div className="flex items-center gap-6 md:gap-10">
          <span className="text-xs font-mono font-bold text-stone group-hover:text-cream transition-colors duration-500 tabular-nums">
            0{index + 1}
          </span>

          <div className="overflow-hidden">
            <h3 className="font-display text-2xl md:text-3xl text-cream/80 group-hover:text-cream transition-all duration-500 tracking-tight uppercase">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Right side - description and arrow */}
        <div className="flex items-center gap-8 md:gap-12 pl-12 md:pl-0">
          <p className="text-stone group-hover:text-cream/80 transition-colors duration-500 text-sm leading-relaxed font-sans font-medium max-w-sm hidden md:block">
            {service.description}
          </p>

          {/* Arrow indicator */}
          <div className="w-10 h-10 rounded-full border border-ash/30 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:border-brass group-hover:bg-brass flex-shrink-0">
            <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-void transition-colors duration-500" />
          </div>
        </div>
      </div>

      {/* Mobile description */}
      <p className="text-stone text-sm leading-relaxed font-sans font-medium mt-4 pl-12 md:hidden">
        {service.description}
      </p>
    </motion.div>
  );
};

export default ServiceItem;
