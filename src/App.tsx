import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import ServicesCarousel from './sections/ServicesCarousel';

import ClientsSection from './sections/ClientsSection';
import AlwaysOnSection from './sections/AlwaysOnSection';
import PrinciplesSection from './sections/PrinciplesSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative">
      <Navigation />

      <main className="relative">
        <HeroSection />
        <ServicesCarousel />
        <ClientsSection />
        <AlwaysOnSection />
        <PrinciplesSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}

export default App;
