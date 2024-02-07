import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#B91C1C',
        },
        dark: {
          100: '#111827',
          200: '#353436',
          300: '#F3F4F6',
          400: '#FFFFFF',
        },
        'message': '#2962FF',
        'success': '#0BB07B',
        'warning': '#FFCE52',
        'error': '#F03D3D',
        'information': '#E0E0E0',
      },
      screens: {
        tablet: '720px', // Add custom breakpoint
        medium: '990px',
        desktop: '1216px', // Add another custom breakpoint
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        mukta: ['var(--font-mukta)'],
      },
    },
  },
  plugins: [],
};
export default config;
