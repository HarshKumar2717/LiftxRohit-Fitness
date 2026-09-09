/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050505',
          900: '#0D0D0D',
          800: '#151515',
          700: '#1C1C1C',
          600: '#242424',
        },
        crimson: {
          50: '#FFF1F1',
          100: '#FFDDDD',
          200: '#FFB8B8',
          300: '#FF8585',
          400: '#FF4D4D',
          500: '#E11D2A',
          600: '#C5111D',
          700: '#A30C16',
          800: '#7E0A11',
          900: '#5C0A0E',
        },
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.35em',
        mega: '0.5em',
      },
      animation: {
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
        'line-sweep': 'lineSweep 3s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' },
        },
        lineSweep: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
    },
  },
  plugins: [],
};
