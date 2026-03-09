import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Mail, Instagram } from 'lucide-react';
import { EmergeLogo } from '../components/EmergeLogo';

gsap.registerPlugin(ScrollTrigger);

export default function FooterSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={sectionRef}
      className="relative z-50 bg-background py-20 md:py-24 border-t border-border"
    >
      <div ref={contentRef} className="section-container">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-16">
          {/* Left - Logo & Tagline */}
          <div className="flex flex-col gap-6 max-w-xs">
            <EmergeLogo width={32} height={32} />
            <p className="font-mono-label text-muted-foreground leading-relaxed">
              EX-MILITARY PRIVATE INVESTIGATION
              <br />
              &amp; SECURITY SERVICES IN TORONTO
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-col gap-6">
            <p className="font-mono-label text-foreground">QUICK LINKS</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <button
                onClick={() => scrollToSection('services-carousel')}
                className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
              >
                SERVICES
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
              >
                CLIENTS
              </button>
              <button
                onClick={() => scrollToSection('principles')}
                className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
              >
                APPROACH
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="font-mono-label text-muted-foreground hover:text-foreground transition-colors"
              >
                CONTACT
              </button>
            </div>
          </div>

          {/* Right - Social */}
          <div className="flex flex-col gap-6">
            <p className="font-mono-label text-foreground">CONNECT</p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-foreground"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:contact@emergegta.com"
                className="w-11 h-11 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors text-foreground"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Service Areas - SEO */}
        <div className="mb-12 border-t border-border pt-8">
          <p className="font-mono-label text-foreground mb-4">SERVICE AREAS</p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl">
            Serving Toronto, Mississauga, Brampton, Vaughan, Markham, Oakville,
            Richmond Hill, Hamilton, Ottawa, and the entire Greater Toronto Area
            (GTA). Our private investigation, surveillance, executive protection,
            and TSCM services extend across Ontario for corporate, government,
            and personal clients.
          </p>
        </div>

        <div className="hairline-h mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono-label text-muted-foreground text-center md:text-left">
            ALL INQUIRIES STRICTLY CONFIDENTIAL.
          </p>
          <p className="font-mono-label text-muted-foreground">
            &copy; {new Date().getFullYear()} EMERGE SECURITY
          </p>
        </div>
      </div>
    </footer>
  );
}
