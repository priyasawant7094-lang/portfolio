/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        navy: {
          50: '#f0f5ff',
          100: '#e0ebff',
          200: '#c7d9fe',
          300: '#a4c0fc',
          400: '#809ff8',
          500: '#5e7af2',
          600: '#465fe6',
          700: '#3a49c9',
          800: '#313ea0',
          900: '#2b3880',
          950: '#1a1f4d',
        },
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(30,58,138,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,0.06) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(96,165,250,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(96,165,250,0.07) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(37, 99, 235, 0.45)',
        'glow-lg': '0 0 60px -10px rgba(37, 99, 235, 0.55)',
        card: '0 10px 40px -12px rgba(15, 23, 42, 0.18)',
        'card-hover': '0 24px 60px -12px rgba(37, 99, 235, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
