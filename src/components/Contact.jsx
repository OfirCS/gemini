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
        <footer id="contact" className="bg-void border-t border-ash/20 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
                
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 border-b border-ash/20 pb-24">
                    
                    {/* Left - Contact Info */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <h2 className="font-display text-5xl md:text-6xl text-cream uppercase leading-none tracking-tight mb-8">
                                Initiate
                                <br />
                                Dialogue
                            </h2>
                            <p className="text-stone text-lg font-medium leading-relaxed max-w-md mb-16">
                                Secure communication channels are active. We operate with absolute discretion for all inquiries.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="w-10 h-10 border border-ash/20 flex items-center justify-center group-hover:bg-cream transition-colors duration-300">
                                        <Mail className="w-4 h-4 text-stone group-hover:text-void" />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-stone mb-1">Email</span>
                                        <span className="text-lg text-cream font-display tracking-wide">contact@emerge-security.com</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-6 group">
                                    <div className="w-10 h-10 border border-ash/20 flex items-center justify-center group-hover:bg-cream transition-colors duration-300">
                                        <Phone className="w-4 h-4 text-stone group-hover:text-void" />
                                    </div>
                                    <div>
                                        <span className="block text-xs uppercase tracking-widest text-stone mb-1">Secure Line</span>
                                        <span className="text-lg text-cream font-display tracking-wide">+1 (555) 123-4567</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleFormSubmit} className="space-y-0">
                            <div className="grid md:grid-cols-2 border-t border-l border-r border-ash/20">
                                <div className="border-b border-ash/20 p-0">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        className="w-full bg-transparent py-6 px-6 text-cream placeholder:text-stone/30 focus:bg-ash/5 focus:outline-none transition-colors"
                                        placeholder="FULL NAME"
                                        required
                                    />
                                </div>
                                <div className="border-b border-ash/20 md:border-l border-ash/20 p-0">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        className="w-full bg-transparent py-6 px-6 text-cream placeholder:text-stone/30 focus:bg-ash/5 focus:outline-none transition-colors"
                                        placeholder="EMAIL ADDRESS"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="border-l border-r border-b border-ash/20">
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleFormChange}
                                        className="w-full bg-transparent py-6 px-6 text-cream appearance-none focus:bg-ash/5 focus:outline-none transition-colors cursor-pointer"
                                    >
                                        <option value="" className="bg-void text-stone">SELECT SERVICE REQUIREMENT</option>
                                        {services.map(s => (
                                            <option key={s.title} value={s.title} className="bg-void text-cream">{s.title}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone">
                                        ↓
                                    </div>
                                </div>
                            </div>

                            <div className="border-l border-r border-b border-ash/20">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    rows="4"
                                    className="w-full bg-transparent py-6 px-6 text-cream placeholder:text-stone/30 focus:bg-ash/5 focus:outline-none resize-none transition-colors"
                                    placeholder="OPERATIONAL DETAILS..."
                                    required
                                />
                            </div>

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    disabled={formStatus.loading}
                                    className="w-full py-6 bg-cream text-void font-display text-lg font-bold hover:bg-stone hover:text-cream transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                                >
                                    {formStatus.loading ? (
                                        <>PROCESSING <Loader2 className="w-4 h-4 animate-spin" /></>
                                    ) : (
                                        <>TRANSMIT REQUEST <ArrowRight className="w-4 h-4" /></>
                                    )}
                                </button>
                            </div>

                            <AnimatePresence>
                                {formStatus.success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 text-cream mt-6 p-4 border border-ash/20 bg-ash/5"
                                    >
                                        <CheckCircle2 className="w-5 h-5" />
                                        <span className="text-sm font-mono uppercase tracking-wide">Transmission Successful. Awaiting Response.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-xs font-mono text-stone uppercase tracking-widest">
                        © 2025 Emerge Security Systems
                    </span>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs font-mono text-stone hover:text-cream uppercase tracking-widest transition-colors">Privacy Protocol</a>
                        <a href="#" className="text-xs font-mono text-stone hover:text-cream uppercase tracking-widest transition-colors">Terms of Engagement</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};