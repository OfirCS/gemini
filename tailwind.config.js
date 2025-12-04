/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // STRICT MONOCHROME PALETTE MAPPED TO EXISTING NAMES
        void: '#050505',       // Deep Black
        cream: '#ffffff',      // Pure White
        
        // Grays scale mapped to existing names to maintain code structure but change visual
        obsidian: '#111111',   // Dark Gray
        graphite: '#222222',
        ash: '#333333',        // Borders/Lines
        smoke: '#666666',      // Muted Text
        stone: '#999999',      // Secondary Text
        
        // Map "Brass/Gold" accents to White to enforce monochrome high-contrast
        brass: '#ffffff',      
        'brass-muted': '#cccccc',
        gold: '#ffffff',
        ember: '#ffffff',
        
        ivory: '#fafafa',
        midnight: '#000000',
      },
      fontFamily: {
        // Architectural / Swiss Style
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'], // Unified font family for brutalist look
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'slide-in': 'slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'expand': 'expand 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'out-quart': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}