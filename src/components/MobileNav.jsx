import React from 'react';

const MobileNav = ({ scrollTo }) => {
    return (
        <section className="md:hidden px-6 pb-12">
            <div className="grid grid-cols-2 gap-4">
                {[
                    { label: 'Services', sub: 'Our Expertise', id: 'services' },
                    { label: 'Clients', sub: 'Who We Serve', id: 'sectors' },
                    { label: 'Process', sub: 'Our Approach', id: 'protocol' },
                    { label: 'Contact', sub: 'Start Here', id: 'contact' }
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className="p-4 border border-gold/20 bg-gold/5 flex flex-col gap-1 text-left hover:border-gold/50 transition-all"
                    >
                        <span className="text-xs font-mono uppercase tracking-widest text-gold">{item.sub}</span>
                        <span className="text-lg font-semibold text-ivory">{item.label}</span>
                    </button>
                ))}
            </div>
        </section>
    );
};

export default MobileNav;
