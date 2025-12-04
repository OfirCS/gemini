import React from 'react';

// Using the existing logo file from assets as requested, assuming 'selas_logo_transparent.png' 
// or 'selas_logo.png' is the intended "simple png file".
// Make sure this file actually exists in src/assets/ and is transparent or suits the new light background.
import logoImg from '../assets/selas_logo_transparent.png'; 

const Logo = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img 
                src={logoImg} 
                alt="Emerge Security" 
                className="h-10 w-auto object-contain brightness-0 invert"
            />
            {/* The text "EMERGE" is now assumed to be part of the logo image for simplicity,
                or will be added directly in Navbar.jsx if the image is purely an icon.
                For now, remove the separate text span here to simplify. */}
        </div>
    );
};

export default Logo;
