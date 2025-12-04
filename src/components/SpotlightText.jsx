import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpotlightText = ({ children, className = "" }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            {/* Base Text */}
            <div className="relative z-10 text-stone mix-blend-overlay">
                {children}
            </div>

            {/* Spotlight Overlay */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none text-cream"
                style={{
                    maskImage: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
                    WebkitMaskImage: `radial-gradient(circle 150px at ${position.x}px ${position.y}px, black 0%, transparent 100%)`,
                }}
                animate={{ opacity }}
                transition={{ duration: 0.2 }}
            >
                {children}
            </motion.div>

            {/* Always visible subtle highlight */}
            <div className="absolute inset-0 z-0 text-ash select-none" aria-hidden="true">
                {children}
            </div>
        </div>
    );
};

export default SpotlightText;
