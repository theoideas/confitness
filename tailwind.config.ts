import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0C0C0C',
        surface: '#1A1A1A',
        text: '#FAFAFA',
        volt: '#CCFF00',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
        heading: ['var(--font-heading)', 'Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
