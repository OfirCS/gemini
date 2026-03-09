import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AlwaysOnSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const image = imageRef.current;

    if (!section || !content || !image) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        image,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-20 bg-background min-h-screen flex items-center overflow-hidden py-24 md:py-0"
    >
      <div className="section-container w-full h-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Content */}
        <div ref={contentRef} className="flex flex-col z-20">
          <h2 className="headline-display mb-8">
            ALWAYS <br />
            WATCHING.
          </h2>

          <p className="body-text max-w-lg mb-12">
            24/7 live monitoring, real-time tactical coordination, and secure
            incident logging. Our ex-military control operators maintain absolute
            oversight of your assets.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="flex flex-col gap-2">
              <span className="font-mono-label">COVERAGE</span>
              <span className="font-mono-label text-foreground">
                TORONTO &middot; GTA &middot; OTTAWA &middot; MONTREAL
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono-label">STATUS</span>
              <span className="font-mono-label text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                ACTIVE 24/7
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className="relative w-full aspect-square lg:aspect-[4/3] z-10 border border-border overflow-hidden"
        >
          <img
            src="/city_night_02.jpg"
            alt="Night operations monitoring"
            className="w-full h-full object-cover grayscale opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
