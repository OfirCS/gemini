import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Services from './components/Services';
import Sectors from './components/Sectors';
import Protocol from './components/Protocol';
import Contact from './components/Contact';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      if (window.lenis) {
        window.lenis.scrollTo(element, { duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="bg-void text-cream min-h-screen font-sans selection:bg-brass/30 selection:text-cream">

      <AnimatePresence mode='wait'>
        {loading && <Preloader key="preloader" setLoading={setLoading} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: !loading ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
      >
        <SmoothScroll>

          <Navbar
            scrolled={scrolled}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            scrollTo={scrollTo}
          />

          <main>
            <Hero scrollTo={scrollTo} />
            <Experience />
            <Services />
            <Sectors />
            <Protocol />
          </main>

          <Contact />

        </SmoothScroll>
      </motion.div>
    </div>
  );
};

export default App;
