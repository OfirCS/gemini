import React from 'react';

// Using the existing logo file from assets as requested, assuming 'selas_logo_transparent.png' 
// or 'selas_logo.png' is the intended "simple png file".
// Make sure this file actually exists in src/assets/ and is transparent or suits the new light background.
import logoImg from '../assets/emerge_symbol.png';

const Logo = ({ className = "", theme = "light" }) => {
    const isDark = theme === "dark";

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img
                src={logoImg}
                alt="Emerge Security"
                className={`h-full w-auto object-contain transition-all duration-300 ${isDark ? 'invert' : ''}`}
            />
            <span className={`font-display font-bold tracking-[0.2em] text-2xl uppercase transition-colors duration-300 ${isDark ? 'text-void' : 'text-cream'}`}>
                Emerge
            </span>
        </div>
    );
};

export default Logo;
