/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0A0E27',
        'dark-secondary': '#1A1F3A',
        'light-bg': '#FFFFFF',
        'light-secondary': '#F8FAFC',
        'light-tertiary': '#E8F1F8',
        'neon-blue': '#00D9FF',
        'neon-green': '#39FF14',
        'neon-purple': '#B429FF',
        'neon-yellow': '#FFD700',
        'text-primary': '#FFFFFF',
        'text-secondary': '#94A3B8',
        'text-primary-light': '#1E293B',
        'text-secondary-light': '#475569',
        'text-tertiary-light': '#64748B',
      },
      fontFamily: {
        'heading': ['Inter', 'Poppins', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'code': ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px currentColor, 0 0 10px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

