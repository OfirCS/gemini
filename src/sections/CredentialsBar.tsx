import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Active Operations' },
  { value: '150+', label: 'Clients Secured' },
  { value: '<3min', label: 'Response Time' },
];

export default function CredentialsBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const grid = gridRef.current;

    if (!section || !grid) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        grid.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 90%',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-20 bg-background border-y border-border">
      <div className="section-container">
        <div
          ref={gridRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border -mx-[1px]"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-background py-10 md:py-14 px-6 md:px-8"
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label mt-3">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
