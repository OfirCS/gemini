import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, Clock, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again or email us directly.');
    }
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
              <a href="mailto:contact@emergegta.com" className="text-foreground font-medium hover:opacity-70 transition-opacity">
                contact@emergegta.com
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-2">
                <Phone size={16} className="text-primary" />
                <span className="font-mono-label">PHONE</span>
              </div>
              <a href="tel:+14165550147" className="text-foreground font-medium hover:opacity-70 transition-opacity">
                +1 (416) 555-0147
              </a>
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
                All inquiries are handled with strict confidentiality.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            {status === 'success' ? (
              <div className="bg-card border border-border p-12 text-center">
                <div className="w-14 h-14 border border-border flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={24} className="text-primary" />
                </div>
                <h3 className="service-title mb-2">REQUEST RECEIVED</h3>
                <p className="body-text">
                  Our operations team will evaluate your requirements and
                  contact you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono-label text-foreground mb-2 block">
                      FULL NAME
                    </label>
                    <Input
                      name="name"
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
                      name="email"
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
                    name="organization"
                    placeholder="Company or entity"
                    className="bg-transparent border-border rounded-none h-12 text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary"
                  />
                </div>

                <div>
                  <label className="font-mono-label text-foreground mb-2 block">
                    SERVICE INTEREST
                  </label>
                  <Select name="service">
                    <SelectTrigger className="bg-transparent border-border rounded-none h-12 text-foreground focus:ring-1 focus:ring-primary">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-border">
                      <SelectItem value="surveillance" className="rounded-none focus:bg-accent focus:text-background">
                        Surveillance & Intelligence
                      </SelectItem>
                      <SelectItem value="threat" className="rounded-none focus:bg-accent focus:text-background">
                        Threat Assessment
                      </SelectItem>
                      <SelectItem value="protection" className="rounded-none focus:bg-accent focus:text-background">
                        Executive Protection
                      </SelectItem>
                      <SelectItem value="escort" className="rounded-none focus:bg-accent focus:text-background">
                        Business Escort
                      </SelectItem>
                      <SelectItem value="investigation" className="rounded-none focus:bg-accent focus:text-background">
                        Investigation Services
                      </SelectItem>
                      <SelectItem value="other" className="rounded-none focus:bg-accent focus:text-background">
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
                    name="message"
                    placeholder="Describe your security requirements..."
                    className="bg-transparent border-border rounded-none min-h-[160px] text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-1 focus-visible:ring-primary resize-none p-4"
                    required
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-600 text-sm border border-red-200 bg-red-50 p-4">
                    <AlertCircle size={16} className="shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full cta-button justify-center mt-8"
                >
                  {status === 'sending' ? (
                    <>
                      SENDING...
                      <Loader2 size={14} className="ml-2 animate-spin" />
                    </>
                  ) : (
                    <>
                      SUBMIT REQUEST
                      <Send size={14} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
