import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { services } from '../data';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: '' });

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus({ loading: true, success: false, error: '' });

        setTimeout(() => {
            setFormStatus({ loading: false, success: true, error: '' });
            setFormData({ name: '', email: '', service: '', message: '' });
        }, 1500);
    };

    return (
        <footer id="contact" className="relative bg-void overflow-hidden pt-32 pb-24">

            {/* Background - Subtle Gradient instead of Image for cleaner professional look */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-void via-obsidian to-void opacity-80" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <div className="grid md:grid-cols-12 gap-16 lg:gap-24 items-start">

                    {/* Left Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:col-span-5 flex flex-col justify-between h-full"
                    >
                        <div>
                            <div className="w-12 h-1 bg-brass mb-8" />
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-cream mb-6 tracking-tight">
                                GET IN TOUCH
                            </h2>
                            <p className="text-stone text-lg font-sans leading-relaxed mb-12 max-w-md">
                                We operate with absolute discretion. Contact our secure operations center to discuss your specific requirements.
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brass/20 group-hover:border-brass/30 transition-all duration-300">
                                        <Mail className="w-5 h-5 text-stone group-hover:text-brass" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-stone mb-1 group-hover:text-cream transition-colors">Email</span>
                                        <span className="text-lg text-cream font-sans">contact@emerge-security.com</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brass/20 group-hover:border-brass/30 transition-all duration-300">
                                        <Phone className="w-5 h-5 text-stone group-hover:text-brass" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-stone mb-1 group-hover:text-cream transition-colors">Secure Line</span>
                                        <span className="text-lg text-cream font-sans">+1 (555) 123-4567</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brass/20 group-hover:border-brass/30 transition-all duration-300">
                                        <MapPin className="w-5 h-5 text-stone group-hover:text-brass" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-stone mb-1 group-hover:text-cream transition-colors">HQ</span>
                                        <span className="text-lg text-cream font-sans">Toronto, Canada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="md:col-span-7 bg-obsidian border border-white/5 p-8 md:p-12 rounded-xl"
                    >
                        <form onSubmit={handleFormSubmit} className="space-y-8">

                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-widest text-stone mb-3">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        className="w-full bg-void border border-white/10 rounded-sm py-4 px-4 text-cream focus:border-brass/50 focus:bg-void/50 transition-all duration-300 placeholder:text-stone/50 outline-none"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-widest text-stone mb-3">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        className="w-full bg-void border border-white/10 rounded-sm py-4 px-4 text-cream focus:border-brass/50 focus:bg-void/50 transition-all duration-300 placeholder:text-stone/50 outline-none"
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-widest text-stone mb-3">
                                    Service Interest
                                </label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleFormChange}
                                        className="w-full bg-void border border-white/10 rounded-sm py-4 px-4 text-cream focus:border-brass/50 focus:bg-void/50 transition-all duration-300 outline-none appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-void text-stone">Select a Service</option>
                                        {services.map(s => (
                                            <option key={s.title} value={s.title} className="bg-void text-cream">{s.title}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-widest text-stone mb-3">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    rows="4"
                                    className="w-full bg-void border border-white/10 rounded-sm py-4 px-4 text-cream focus:border-brass/50 focus:bg-void/50 transition-all duration-300 outline-none resize-none placeholder:text-stone/50"
                                    placeholder="Briefly describe your requirements..."
                                    required
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={formStatus.loading}
                                    className="w-full px-10 py-5 bg-cream text-void font-bold text-sm uppercase tracking-widest hover:bg-brass transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3 rounded-sm"
                                >
                                    {formStatus.loading ? (
                                        <>Processing <Loader2 className="w-4 h-4 animate-spin" /></>
                                    ) : (
                                        <>Submit Request <ArrowRight className="w-4 h-4" /></>
                                    )}
                                </button>
                            </div>

                            <AnimatePresence>
                                {formStatus.success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 text-green-500 mt-4"
                                    >
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="text-sm font-medium">Message sent successfully. We will contact you within 24 hours.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Footer Links */}
            <div className="border-t border-white/10 mt-24 py-8 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-xs font-bold text-stone uppercase tracking-widest">
                        © 2025 EMERGE SECURITY
                    </span>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs font-bold text-stone hover:text-cream uppercase tracking-widest transition-colors">Privacy</a>
                        <a href="#" className="text-xs font-bold text-stone hover:text-cream uppercase tracking-widest transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;