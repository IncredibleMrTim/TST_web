import type { Config } from 'tailwindcss';

export default {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      'tst-primary-red': '#ff0000',
      'tst-primary-gray-dark': '#444',
      'tst-primary-slate': '#0c80a1',
      'tst-primary-slate-dark': '#085a72',
      'tst-primary-slate-light': '#0f9bcf',
      'tst-primary-white': '#fff',
      'tst-primary-text-gray': '#626262',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
