/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a0908',
        obsidian: '#141311',
        graphite: '#1c1b18',
        ash: '#2a2824',
        smoke: '#4a463d',
        stone: '#7a7468',
        cream: '#f4f1eb',
        ivory: '#faf8f5',
        brass: '#b5a17c',
        'brass-muted': '#9c8e6e',
        ember: '#c45a3b',
        midnight: '#0a0908',
        gold: '#b5a17c',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Instrument Serif', 'Georgia', 'serif'],
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
