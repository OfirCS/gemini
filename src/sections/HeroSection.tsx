import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowDownRight,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out' }
      );

      if (image) {
        gsap.fromTo(
          image,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-background overflow-hidden"
    >
      <div className="section-container relative z-10 min-h-[100dvh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-28 lg:py-16">
          {/* Left - Content */}
          <div ref={contentRef}>
            <h1
              className="text-[clamp(40px,5.5vw,80px)] font-extrabold leading-[0.95] tracking-tight text-foreground mb-8"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              SECURITY &amp;
              <br />
              INVESTIGATION
              <br />
              <span className="text-muted-foreground">SERVICES</span>
            </h1>

            <p className="body-text max-w-lg mb-10">
              Ex-military professionals providing threat assessment, executive
              protection, business escort, surveillance, and investigation
              services to{' '}
              <strong className="text-foreground font-semibold">
                corporations, high-net-worth individuals,
              </strong>{' '}
              and families across Toronto and the Greater Toronto Area.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="cta-button"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                REQUEST FREE CONSULTATION
                <ArrowDownRight size={16} />
              </button>
              <button
                className="cta-button-outline"
                onClick={() =>
                  document
                    .getElementById('services-carousel')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                OUR SERVICES
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div ref={imageRef} className="relative hidden lg:block">
            <img
              src="/city_real_01.jpg"
              alt="Toronto skyline - Emerge Security private investigation services"
              className="w-full h-[600px] object-cover grayscale"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator flex flex-col items-center gap-2">
        <ChevronDown size={18} className="text-muted-foreground" />
      </div>
    </section>
  );
}
