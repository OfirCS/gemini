import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  {
    title: 'High-Net-Worth Individuals',
    description:
      "Residential security, family office protection, and privacy consulting across Toronto's Rosedale, Forest Hill, Bridle Path, and the GTA.",
  },
  {
    title: 'Corporate & Business',
    description:
      'Threat assessment, workplace investigation, employee screening, fraud detection, and executive protection for organizations across Ontario.',
  },
  {
    title: 'Government & Diplomatic',
    description:
      'Protective intelligence and investigation services for government agencies, diplomatic missions, and public officials.',
  },
  {
    title: 'Law Firms & Legal',
    description:
      'Court-admissible evidence gathering, witness location, litigation support, and digital forensics for legal professionals.',
  },
  {
    title: 'Personal & Family',
    description:
      'Discreet investigation for infidelity concerns, custody disputes, background checks, and missing persons.',
  },
  {
    title: 'Events & Entertainment',
    description:
      'VIP protection, venue security, and event security planning for corporate galas, TIFF events, and product launches.',
  },
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      const blocks = content.querySelectorAll('.reveal');
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: { trigger: block, start: 'top 88%' },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="clients"
      className="relative bg-background py-24 md:py-32 border-t border-border"
    >
      <div ref={contentRef} className="section-container">
        {/* Top: Image + Header side by side */}
        <div className="reveal flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16 md:mb-20 items-end">
          <div className="lg:w-1/2">
            <img
              src="/city_real_03.jpg"
              alt="Toronto financial district - corporate security services"
              className="w-full h-[300px] md:h-[380px] object-cover grayscale"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="headline-large mb-4">
              OUR CLIENTS
            </h2>
            <p className="body-text max-w-md">
              From high-net-worth families and corporate executives to government
              officials and individuals in need &mdash; we deliver the same standard of
              excellence to every client across Toronto and the GTA.
            </p>
          </div>
        </div>

        {/* Client list - two columns, simple */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {clients.map((client, i) => (
            <div key={i} className="border-t border-border pt-6">
              <div className="flex items-baseline gap-3 mb-2">
                <ArrowRight size={14} className="text-muted-foreground shrink-0 mt-0.5" />
                <h3
                  className="text-lg font-bold tracking-tight text-foreground"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {client.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed ml-7">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
