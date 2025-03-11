import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem var(--primary-400)',
      },
    },
    colors: {
      primary: {
        400: 'var(--primary-400)',
        500: 'var(--primary-500)',
        600: 'var(--primary-600)',
      },
      secondary: 'var(--primary-400)',
      grayscale: {
        50: '#ffffff',
        100: '#efefef',
        200: '#FDFDFF',
        950: '#16161b',
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
