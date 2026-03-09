import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RespondFastSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const bg = bgRef.current;

    if (!section || !content || !bg) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(content, 
        { opacity: 0, x: -30 }, 
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          }
        }
      );

      gsap.to(bg, {
        y: '-3%',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative z-50 bg-[#0B0B0D] min-h-screen flex items-center"
    >
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="/city_night_05.jpg" 
          alt="Rapid response security team — 24/7 emergency operations in the GTA"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0D] via-[#0B0B0D]/80 to-transparent" />
      </div>

      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 px-[9vw] py-[15vh] max-w-[50vw] md:max-w-[80vw]"
      >
        <h2 className="headline-display text-[#F6F6F6] mb-6">
          Respond fast.
        </h2>
        <p className="body-text max-w-[480px] mb-8">
          If something shifts, we act—clear protocols, rapid escalation, and calm execution under pressure.
        </p>
        <span className="font-mono-label text-[#F6F6F6] opacity-50">
          Rapid response · 24/7
        </span>
      </div>
    </section>
  );
}
