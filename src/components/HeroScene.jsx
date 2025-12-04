import React, { useEffect, useRef } from 'react';

const HeroScene = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        
        canvas.width = width;
        canvas.height = height;

        // Grid parameters
        const gridSize = 40; // Size of grid cells
        let offset = 0; // For animation movement
        const speed = 0.5; // Speed of grid movement

        // Star/Particle parameters
        const particles = [];
        const particleCount = 60;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                size: Math.random() * 1.5,
                speedY: Math.random() * 0.5 + 0.1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }

        const drawGrid = () => {
            ctx.strokeStyle = 'rgba(181, 161, 124, 0.05)'; /* Brass grid lines */
            ctx.lineWidth = 1;

            // Vertical lines
            for (let x = 0; x <= width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Horizontal lines (moving)
            for (let y = offset % gridSize; y <= height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }
        };

        const drawParticles = () => {
            particles.forEach(p => {
                ctx.fillStyle = `rgba(244, 241, 235, ${p.opacity * 1.5})`; /* Cream particles */
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Move particles up
                p.y -= p.speedY;
                if (p.y < 0) {
                    p.y = height;
                    p.x = Math.random() * width;
                }
            });
        };

        const drawScanline = () => {
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'transparent');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.03)'); /* Brighter scanline */
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        };

        const render = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Draw background - Keep it dark
            ctx.fillStyle = '#0a0908'; // Theme: void
            ctx.fillRect(0, 0, width, height);

            drawGrid();
            drawParticles();
            drawScanline();

            // Update offset
            offset += speed;

            requestAnimationFrame(render);
        };

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        render();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 z-0 w-full h-full pointer-events-none"
        />
    );
};

export default HeroScene;