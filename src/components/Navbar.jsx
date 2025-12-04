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
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-24 transition-all duration-500 flex justify-between items-center ${scrolled
          ? 'py-4 bg-void/90 backdrop-blur-sm border-b border-ash/20'
          : 'py-8 bg-transparent'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Logo Area */}
        <a
          href="#"
          className="flex items-center gap-3 text-cream hover:opacity-80 transition-opacity"
        >
          <Logo />
          <span className="font-display text-2xl font-bold tracking-[0.2em] text-cream uppercase">EMERGE</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-10">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.id)}
                className="text-[12px] font-bold font-sans uppercase tracking-[0.15em] text-stone hover:text-cream transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo('contact')}
            className="text-[12px] font-bold uppercase tracking-[0.2em] text-void bg-cream px-6 py-3 hover:bg-brass transition-all duration-300"
          >
            CONTACT HQ
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-cream hover:text-brass transition-colors duration-300"
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
      </motion.nav>





      {/* Mobile Menu Overlay - editorial full-screen treatment */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-void z-40 flex flex-col"
          >
            {/* Decorative lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-ash/30" />
              <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-ash/30" />
            </div>

            <div className="flex-1 flex flex-col items-start justify-center px-8 gap-6">
              {[...navItems, { name: 'Contact', id: 'contact' }].map((item, i) => (
                <div key={item.name} className="overflow-hidden">
                  <motion.button
                    initial={{ y: 80 }}
                    animate={{ y: 0 }}
                    exit={{ y: 80 }}
                    transition={{
                      delay: i * 0.08,
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    onClick={() => scrollTo(item.id)}
                    className="font-display text-5xl md:text-6xl text-cream hover:text-brass transition-colors duration-500 tracking-tight"
                    style={{ fontWeight: 400 }}
                  >
                    {item.name}
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Bottom info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="px-8 py-8 flex justify-between items-end border-t border-ash/30"
            >
              <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-smoke">
                contact@emerge-security.com
              </span>
              <span className="text-[9px] font-sans uppercase tracking-[0.2em] text-smoke">
                24/7 Worldwide
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
