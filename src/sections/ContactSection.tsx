import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: content,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative z-40 bg-background py-24 md:py-32"
    >
      <div ref={contentRef} className="section-container">
        {/* Headline */}
        <div className="mb-16">
          <h2 className="headline-large mb-4">
            GET IN TOUCH
          </h2>
          <p className="body-text max-w-[500px]">
            Detail your security requirements. Our operations team responds
            within one business day.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-[38%_58%] gap-12 md:gap-16 border-t border-border pt-12">
          {/* Left - Contact Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Mail size={16} className="text-primary" />
                <span className="font-mono-label">EMAIL</span>
              </div>
              <p className="text-foreground font-medium">
                contact@emergegta.com
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone size={16} className="text-primary" />
                <span className="font-mono-label">PHONE</span>
              </div>
              <p className="text-foreground font-medium">+1 (416) 555-0147</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Clock size={16} className="text-primary" />
                <span className="font-mono-label">OPERATIONS</span>
              </div>
              <p className="text-foreground font-medium">24/7 Active</p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={16} className="text-primary" />
                <span className="font-mono-label">SERVICE AREA</span>
              </div>
              <p className="text-foreground font-medium">
                Toronto &middot; GTA &middot; Ottawa &middot; Montreal
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                All inquiries are handled with strict confidentiality. We are
                fully licensed and insured.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {submitted ? (
              <div className="bg-card border border-border p-12 text-center">
                <div className="w-14 h-14 border border-border flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={24} className="text-primary" />
                </div>
                <h3 className="service-title mb-2">REQUEST RECEIVED</h3>
                <p className="body-text">
                  Our operations team will evaluate your requirements and
                  contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-label text-foreground mb-2 block">
                      FULL NAME
                    </label>
                    <Input
                      placeholder="Your name"
                      className="bg-transparent border-border rounded-none h-12 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-mono-label text-foreground mb-2 block">
                      EMAIL ADDRESS
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-transparent border-border rounded-none h-12 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-mono-label text-foreground mb-2 block">
                    ORGANIZATION (OPTIONAL)
                  </label>
                  <Input
                    placeholder="Company or entity"
                    className="bg-transparent border-border rounded-none h-12 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <label className="font-mono-label text-foreground mb-2 block">
                    SERVICE INTEREST
                  </label>
                  <Select>
                    <SelectTrigger className="bg-transparent border-border rounded-none h-12 text-foreground focus:ring-1 focus:ring-primary">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border">
                      <SelectItem
                        value="surveillance"
                        className="rounded-none focus:bg-accent focus:text-background"
                      >
                        Surveillance & Intelligence
                      </SelectItem>
                      <SelectItem
                        value="threat"
                        className="rounded-none focus:bg-accent focus:text-background"
                      >
                        Threat Assessment
                      </SelectItem>
                      <SelectItem
                        value="protection"
                        className="rounded-none focus:bg-accent focus:text-background"
                      >
                        Executive Protection
                      </SelectItem>
                      <SelectItem
                        value="patrols"
                        className="rounded-none focus:bg-accent focus:text-background"
                      >
                        Strategic Patrols
                      </SelectItem>
                      <SelectItem
                        value="other"
                        className="rounded-none focus:bg-accent focus:text-background"
                      >
                        Other
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="font-mono-label text-foreground mb-2 block">
                    PROJECT DETAILS
                  </label>
                  <Textarea
                    placeholder="Describe your security requirements..."
                    className="bg-transparent border-border rounded-none min-h-[160px] text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary resize-none p-4"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cta-button justify-center mt-8"
                >
                  SUBMIT REQUEST
                  <Send size={14} className="ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
