/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      keyframes: {
        music1: {
          '0%, 100%': { height: '12px' },
          '50%': { height: '4px' },
        },
        music2: {
          '0%, 100%': { height: '8px' },
          '50%': { height: '16px' },
        },
        music3: {
          '0%, 100%': { height: '16px' },
          '50%': { height: '6px' },
        },
      },
      animation: {
        music1: 'music1 1s infinite',
        music2: 'music2 1s infinite 0.2s',
        music3: 'music3 1s infinite 0.4s',
      },
    },
  },
  plugins: [],
};
