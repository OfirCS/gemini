import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    number: '01',
    title: 'NEVER OBVIOUS.',
    description:
      'Plain-clothes details, unmarked coordination, and communication protocols that keep your operations private.',
    tag: 'DISCRETION-FIRST PROTOCOLS',
    image: '/city_night_03.jpg',
  },
  {
    number: '02',
    title: 'SEE FIRST.',
    description:
      'Threat assessment, route analysis, and real-time intelligence\u2014so risks never become surprises.',
    tag: 'INTELLIGENCE-LED PROTECTION',
    image: '/city_night_04.jpg',
  },
  {
    number: '03',
    title: 'RESPOND FAST.',
    description:
      'If something shifts, we act\u2014clear protocols, rapid escalation, and calm execution under pressure.',
    tag: 'RAPID RESPONSE \u00b7 24/7',
    image: '/city_night_05.jpg',
  },
  {
    number: '04',
    title: 'STAY CALM.',
    description:
      "Clear reporting, quiet presence, and a team that handles complexity so you don't have to.",
    tag: 'CLIENT EXPERIENCE',
    image: '/city_night_06.jpg',
  },
];

export default function PrinciplesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header || !cards) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        cards.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cards,
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
      id="principles"
      className="relative bg-background py-24 md:py-32"
    >
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <h2 className="headline-large">
            OUR APPROACH
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border border border-border"
        >
          {principles.map((p) => (
            <div
              key={p.number}
              className="relative group overflow-hidden bg-background min-h-[360px] md:min-h-[440px] flex flex-col justify-between p-8 md:p-12 transition-colors duration-500 hover:bg-card"
            >
              {/* Background Image - reveals on hover */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                  src={p.image}
                  alt=""
                  className="w-full h-full object-cover opacity-0 group-hover:opacity-[0.12] transition-opacity duration-700 grayscale"
                  loading="lazy"
                />
              </div>

              {/* Top Row */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="font-mono-label text-muted-foreground">
                  {p.number}
                </span>
                <span className="font-mono-label text-muted-foreground opacity-50 text-right max-w-[200px]">
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-3xl md:text-[44px] font-extrabold tracking-tighter text-foreground mb-4 leading-[0.95]"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {p.title}
                </h3>
                <p className="body-text max-w-md">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
