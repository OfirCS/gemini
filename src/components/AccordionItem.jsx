import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const AccordionItem = ({ index, sector, isOpen, toggle, setCursorVariant }) => {
    const { icon: Icon, title, target, desc } = sector;
    return (
        <div
            className="border-t border-gold/10"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
        >
            <button
                className="w-full flex justify-between items-center py-8 md:py-10 group"
                onClick={() => toggle(index)}
            >
                <div className="flex items-center gap-6 md:gap-8 text-left">
                    <Icon className="w-8 h-8 text-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                        <h3 className="text-xl md:text-3xl font-display font-bold uppercase text-neutral-300 group-hover:text-ivory transition-colors">{title}</h3>
                        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mt-1">{target}</p>
                    </div>
                </div>
                <div className={`p-2 rounded-full border border-gold/20 group-hover:border-gold transition-colors duration-300 ${isOpen ? 'bg-gold text-midnight' : 'text-neutral-500'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, paddingBottom: 0 }}
                        animate={{ height: "auto", opacity: 1, paddingBottom: "2.5rem" }}
                        exit={{ height: 0, opacity: 0, paddingBottom: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="md:hidden mb-6 overflow-hidden border border-gold/10">
                            <img
                                src={sector.image}
                                alt={title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <p className="text-neutral-400 leading-relaxed max-w-3xl text-base md:text-lg pl-4 md:pl-20 font-sans font-light border-l-2 border-gold/40 ml-2 md:ml-4">
                            {desc}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;
