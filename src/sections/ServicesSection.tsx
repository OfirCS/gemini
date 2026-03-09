import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, UserCheck, Eye, Map } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Eye,
    title: 'Business & Personal Surveillance',
    description: 'Advanced oversight and intelligence gathering utilizing state-of-the-art technology to protect corporate and personal interests.',
  },
  {
    icon: Shield,
    title: 'Elite Threat Assessment',
    description: 'Comprehensive vulnerability analysis drawing on 10+ years of military tactical experience to neutralize risks before they materialize.',
  },
  {
    icon: UserCheck,
    title: 'Professional Escort / Executive Protection',
    description: 'Highly trained, low-profile escort and physical security for high-net-worth individuals and corporate leadership facing credible threats.',
  },
  {
    icon: Map,
    title: 'Strategic Patrols',
    description: 'Rigorous, methodical perimeter defense and mobile patrols deployed for critical infrastructure and sensitive corporate environments.',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const listItems = listRef.current.filter(Boolean);

    if (!section || !title || listItems.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(title,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
          }
        }
      );

      listItems.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-20 light-section bg-background py-32"
    >
      <div className="section-container">
        <div className="flex flex-col mb-24">
          <div ref={titleRef} className="max-w-3xl">
            <h2 className="headline-large mb-8">
              TACTICAL <br />CAPABILITIES.
            </h2>
            <p className="body-text text-lg">
              Precision-driven physical security and threat mitigation strategies deployed by ex-military operatives for high-net-worth and corporate environments.
            </p>
          </div>
        </div>

        <div className="service-grid w-full mt-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => { listRef.current[index] = el; }}
              className="service-item group flex flex-col justify-between min-h-[300px]"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono-label opacity-40">0{index + 1}</span>
                <div className="crosshair"></div>
              </div>

              <div className="flex flex-col">
                <h3 className="service-title">
                  {service.title}
                </h3>
                <p className="body-text group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
