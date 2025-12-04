import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import { services } from '../data';
import contactVisual from '../assets/contact_visual.png';

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

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    ...formData
                }).toString()
            });

            if (response.ok) {
                setFormStatus({ loading: false, success: true, error: '' });
                setFormData({ name: '', email: '', service: '', message: '' });
            } else {
                setFormStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setFormStatus({ loading: false, success: false, error: 'Something went wrong. Please try again.' });
        }
    };

    return (
        <footer id="contact" className="bg-void border-t border-ash/20 pt-16 md:pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 border-b border-ash/20 pb-16 md:pb-24">

                    {/* Left - Contact Info */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                            <h2 className="font-display text-5xl md:text-6xl text-cream uppercase leading-none tracking-tight mb-8">
                                Let's
                                <br />
                                Talk
                            </h2>
                            <p className="text-stone text-lg font-medium leading-relaxed max-w-md mb-12">
                                Have questions? Need a quote? Just want to chat about your security needs? We're here to help. All conversations are confidential.
                            </p>

                            {/* Location Visual */}
                            <div className="mb-12 h-48 w-full relative overflow-hidden border border-ash/20">
                                <img
                                    src={contactVisual}
                                    alt="HQ Location"
                                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-50"
                                />
                                <div className="absolute inset-0 bg-void/40" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs text-cream uppercase tracking-widest bg-void/80 px-2 py-1">
                                        Global HQ - Toronto
                                    </span>
                                </div>
                            </div>

                                                    </div>
                    </div>

                    {/* Right - Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-cream p-6 md:p-12 shadow-2xl">
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleFormSubmit}
                                className="space-y-0"
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                <div className="grid md:grid-cols-2 border-t border-l border-r border-ash/10">
                                    <div className="border-b border-ash/10 p-0">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            className="w-full bg-transparent py-6 px-6 text-void placeholder:text-ash/40 focus:bg-ash/5 focus:outline-none transition-colors font-medium"
                                            placeholder="FULL NAME"
                                            required
                                        />
                                    </div>
                                    <div className="border-b border-ash/10 md:border-l border-ash/10 p-0">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            className="w-full bg-transparent py-6 px-6 text-void placeholder:text-ash/40 focus:bg-ash/5 focus:outline-none transition-colors font-medium"
                                            placeholder="EMAIL ADDRESS"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="border-l border-r border-b border-ash/10">
                                    <div className="relative">
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleFormChange}
                                            className="w-full bg-transparent py-6 px-6 text-void appearance-none focus:bg-ash/5 focus:outline-none transition-colors cursor-pointer font-medium"
                                        >
                                            <option value="" className="bg-cream text-ash/40">WHAT DO YOU NEED HELP WITH?</option>
                                            {services.map(s => (
                                                <option key={s.title} value={s.title} className="bg-cream text-void">{s.title}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-void">
                                            ↓
                                        </div>
                                    </div>
                                </div>

                                <div className="border-l border-r border-b border-ash/10">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        rows="4"
                                        className="w-full bg-transparent py-6 px-6 text-void placeholder:text-ash/40 focus:bg-ash/5 focus:outline-none resize-none transition-colors font-medium"
                                        placeholder="TELL US MORE..."
                                        required
                                    />
                                </div>

                                <div className="pt-8">
                                    <button
                                        type="submit"
                                        disabled={formStatus.loading}
                                        className="w-full py-6 bg-void text-cream font-display text-lg font-bold hover:bg-ash transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                                    >
                                        {formStatus.loading ? (
                                            <>SENDING... <Loader2 className="w-4 h-4 animate-spin" /></>
                                        ) : (
                                            <>SEND MESSAGE <ArrowRight className="w-4 h-4" /></>
                                        )}
                                    </button>
                                </div>

                                <AnimatePresence>
                                    {formStatus.success && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-void mt-6 p-4 border border-ash/10 bg-ash/5"
                                        >
                                            <CheckCircle2 className="w-5 h-5" />
                                            <span className="text-sm font-mono uppercase tracking-wide">Message sent! We'll get back to you soon.</span>
                                        </motion.div>
                                    )}
                                    {formStatus.error && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="flex items-center gap-2 text-red-600 mt-6 p-4 border border-red-200 bg-red-50"
                                        >
                                            <span className="text-sm font-mono uppercase tracking-wide">{formStatus.error}</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <span className="text-xs font-mono text-stone uppercase tracking-widest">
                        © 2025 Emerge Security Systems
                    </span>
                    <div className="flex gap-8">
                        <a href="#" className="text-xs font-mono text-stone hover:text-cream uppercase tracking-widest transition-colors">Privacy Policy</a>
                        <a href="#" className="text-xs font-mono text-stone hover:text-cream uppercase tracking-widest transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
