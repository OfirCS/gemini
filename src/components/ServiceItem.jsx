import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServiceItem = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group relative p-8 md:p-10 border-b border-r border-ash/20 hover:bg-cream transition-colors duration-300 flex flex-col justify-between min-h-[300px] cursor-pointer"
    >
      <div className="flex justify-between items-start w-full">
        <span className="text-xs text-stone group-hover:text-void transition-colors duration-300">
          0{index + 1}
        </span>
        <ArrowUpRight className="w-5 h-5 text-stone group-hover:text-void transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0" />
      </div>

      <div className="mt-auto">
        <h3 className="font-display text-2xl text-cream group-hover:text-void transition-colors duration-300 uppercase tracking-tight mb-4">
          {service.title}
        </h3>
        <p className="text-stone group-hover:text-void/70 text-sm font-medium leading-relaxed transition-colors duration-300 max-w-[90%]">
            {service.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceItem;
