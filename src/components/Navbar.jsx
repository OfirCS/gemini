import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar = ({ scrolled, isMenuOpen, toggleMenu, scrollTo }) => {
  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Expertise', id: 'experience' },
    { name: 'Sectors', id: 'sectors' },
    { name: 'Protocol', id: 'protocol' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 border-b border-ash/20 transition-all duration-300 ${
          scrolled ? 'bg-void py-4' : 'bg-void py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="w-full px-6 md:px-12 lg:px-16 flex justify-between items-center">
            {/* Logo Area - Strictly Typographic/Icon */}
            <a
            href="#"
            className="flex items-center gap-4 group"
            >
            <Logo className="w-8 h-8" />
            <span className="font-display text-lg font-bold tracking-tight text-cream group-hover:text-stone transition-colors">EMERGE</span>
            </a>

            {/* Desktop Menu - Minimalist */}
            <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-8">
                {navItems.map((item) => (
                <button
                    key={item.name}
                    onClick={() => scrollTo(item.id)}
                    className="text-sm font-medium font-sans text-stone hover:text-cream transition-colors duration-200"
                >
                    {item.name}
                </button>
                ))}
            </div>

            <button
                onClick={() => scrollTo('contact')}
                className="text-sm font-bold text-void bg-cream px-6 py-3 hover:bg-stone hover:text-void transition-all duration-300 rounded-sm"
            >
                CONTACT HQ
            </button>
            </div>

            {/* Mobile Toggle */}
            <button
            onClick={toggleMenu}
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-cream hover:text-stone transition-colors duration-300"
            >
            <AnimatePresence mode="wait">
                {isMenuOpen ? (
                <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                >
                    <X size={24} strokeWidth={1.5} />
                </motion.div>
                ) : (
                <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                >
                    <Menu size={24} strokeWidth={1.5} />
                </motion.div>
                )}
            </AnimatePresence>
            </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Structural Grid */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-void z-40 flex flex-col pt-24 px-6"
          >
            <div className="flex-1 flex flex-col items-start gap-0 border-t border-ash/20">
              {[...navItems, { name: 'Contact', id: 'contact' }].map((item, i) => (
                <motion.button
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    onClick={() => scrollTo(item.id)}
                    className="w-full text-left py-6 border-b border-ash/20 font-display text-4xl md:text-5xl text-stone hover:text-cream hover:pl-4 transition-all duration-300"
                >
                    {item.name}
                </motion.button>
              ))}
            </div>

            <div className="py-8 text-xs font-mono text-ash uppercase tracking-widest">
                Secure Infrastructure v2.0
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
