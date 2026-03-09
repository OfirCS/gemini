import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDownRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const content = contentRef.current;

    if (!section || !header || !content) return;

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
          scrollTrigger: { trigger: header, start: 'top 85%' },
        }
      );

      const blocks = content.querySelectorAll('.reveal-block');
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
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
      id="services-carousel"
      className="relative bg-background py-24 md:py-32 border-t border-border"
    >
      <div className="section-container">
        {/* Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="headline-large">
              OUR SERVICES
            </h2>
            <p className="body-text max-w-sm lg:text-right">
              Led by ex-military professionals with real
              field experience across Toronto &amp; the GTA.
            </p>
          </div>
        </div>

        <div ref={contentRef}>
          {/* Featured Service 1 - Full width hero */}
          <div className="reveal-block mb-4">
            <div className="relative overflow-hidden group">
              <img
                src="/city_night_02.jpg"
                alt="Private surveillance operations in Toronto"
                className="w-full h-[340px] md:h-[480px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="font-mono-label text-white/50 text-xs">01</span>
                <h3
                  className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 mb-3"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Private Surveillance
                </h3>
                <p className="text-white/70 max-w-lg text-[15px] leading-relaxed">
                  Covert and overt surveillance for corporate, legal, and
                  personal matters. Court-admissible evidence using HD video,
                  GPS tracking, and night vision equipment.
                </p>
              </div>
            </div>
          </div>

          {/* Services 2 & 3 - Side by side images */}
          <div className="reveal-block flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative overflow-hidden group flex-1">
              <img
                src="/city_real_02.jpg"
                alt="Threat assessment and risk analysis Toronto"
                className="w-full h-[280px] md:h-[360px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-mono-label text-white/50 text-xs">02</span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-2 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Threat & Risk Assessment
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                  Vulnerability analysis, executive threat profiling, and
                  actionable risk mitigation for organizations and individuals.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden group flex-1">
              <img
                src="/city_real_04.jpg"
                alt="Executive protection services Toronto"
                className="w-full h-[280px] md:h-[360px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-mono-label text-white/50 text-xs">03</span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-2 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Executive & VIP Protection
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                  Close protection for high-net-worth individuals, executives,
                  and officials. Secure transport and 24/7 coverage.
                </p>
              </div>
            </div>
          </div>

          {/* Service 4 - Image left, text right */}
          <div className="reveal-block flex flex-col md:flex-row gap-4 mb-16 md:mb-24">
            <div className="relative overflow-hidden group md:w-[55%]">
              <img
                src="/city_real_05.jpg"
                alt="TSCM bug sweep services Toronto"
                className="w-full h-[280px] md:h-[360px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="font-mono-label text-white/50 text-xs">04</span>
                <h3
                  className="text-2xl md:text-3xl font-bold text-white tracking-tight mt-2 mb-2"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  TSCM & Bug Sweeps
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                  Detect hidden cameras, audio bugs, and GPS trackers using
                  spectrum analysis and thermal imaging.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-card/50 border border-border p-8 md:p-10 flex flex-col justify-center">
              <p className="font-mono-label text-muted-foreground mb-6">
                ALSO AVAILABLE
              </p>
              <div className="space-y-6">
                {[
                  {
                    num: '05',
                    title: 'Corporate Investigation',
                    desc: 'Employee theft, fraud, misconduct, and WSIB claims investigation across Ontario.',
                    keyword: 'Corporate Investigation Ontario',
                  },
                  {
                    num: '06',
                    title: 'Background Checks',
                    desc: 'Employment verification, tenant screening, and business partner due diligence.',
                    keyword: 'Background Check Toronto & GTA',
                  },
                  {
                    num: '07',
                    title: 'Insurance Fraud',
                    desc: "Court-ready documentation of fraudulent disability and workers' compensation claims.",
                    keyword: 'Insurance Fraud Surveillance Toronto',
                  },
                  {
                    num: '08',
                    title: 'Personal & Family',
                    desc: 'Infidelity, custody, missing persons, and stalking response with discretion.',
                    keyword: 'Private Investigator Toronto',
                  },
                ].map((s) => (
                  <div key={s.num} className="group">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono-label text-muted-foreground/40 text-xs">
                        {s.num}
                      </span>
                      <div>
                        <h3
                          className="text-lg font-bold text-foreground tracking-tight"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                        >
                          {s.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {s.desc}
                        </p>
                        <p className="font-mono-label text-[9px] opacity-30 mt-1">
                          {s.keyword}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="reveal-block flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-border pt-10">
            <div>
              <p
                className="text-2xl md:text-3xl font-bold text-foreground tracking-tight leading-tight"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Need something specific?
              </p>
              <p className="text-muted-foreground mt-2">
                Every situation is different. Tell us yours.
              </p>
            </div>
            <button
              className="cta-button shrink-0"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              FREE CONSULTATION
              <ArrowDownRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
