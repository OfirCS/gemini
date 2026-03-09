import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { EmergeLogo } from './EmergeLogo';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Nav Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[150] transition-transform duration-500 bg-background/90 backdrop-blur-md border-b border-border ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="section-container flex items-center justify-between py-4">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="hover:opacity-60 transition-opacity"
            aria-label="Emerge Security - Home"
          >
            <EmergeLogo width={32} height={32} />
          </a>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="font-mono-label text-foreground flex items-center gap-3 hover:opacity-60 transition-opacity"
          >
            <span>MENU</span>
            <Menu size={16} />
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[200] transition-all duration-500 ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background"
          onClick={() => setIsMenuOpen(false)}
        />

        <div className="relative z-10 w-full h-full flex flex-col justify-between px-8 py-12 md:p-24 max-w-7xl mx-auto">
          {/* Top Bar */}
          <div className="flex justify-between items-center w-full">
            <EmergeLogo width={28} height={28} />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:opacity-60 transition-opacity flex items-center gap-2 font-mono-label"
            >
              <span>CLOSE</span>
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col items-start gap-4">
            {[
              { label: 'SERVICES', id: 'services' },
              { label: 'APPROACH', id: 'principles' },
              { label: 'CONTACT', id: 'contact' },
            ].map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex flex-col items-start"
              >
                <span className="font-mono-label opacity-40 mb-2">
                  0{i + 1}
                </span>
                <span
                  className="text-foreground text-5xl md:text-8xl font-bold transition-all duration-300 tracking-tighter group-hover:opacity-60"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8">
            <div>
              <p className="font-mono-label text-muted-foreground mb-4">
                GET IN TOUCH
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="cta-button"
              >
                CONTACT US
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-2 items-start md:items-end mt-8 md:mt-0">
              <p className="font-mono-label text-muted-foreground">
                DIRECT LINE
              </p>
              <p className="font-mono-label text-foreground">
                contact@emergegta.com
              </p>
              <p className="font-mono-label text-foreground">
                +1 (416) 555-0147
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
