import type { Config } from 'tailwindcss';

export default {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xsm: '0.4rem',
      sm: '0.9rem',
      '1sm': '1rem',
      '2sm': '1.05rem',
      base: '1.10rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      'tst-primary-red': '#ff0000',
      'tst-primary-gray-darker': '#222',
      'tst-primary-gray-dark': '#444',
      'tst-primary-gray-light': '#CCC',
      'tst-primary-beige-lighter': '#F9F9F9',
      'tst-primary-beige': '#DAC0A3',
      'tst-primary-slate': '#0c80a1',
      'tst-primary-slate-dark': '#085a72',
      'tst-primary-slate-light': '#0f9bcf',
      'tst-primary-slate-lighter': '#ADC4CE',
      'tst-primary-white': '#fff',
      'tst-primary-black': '#000',
      'tst-primary-text-gray': '#626262',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
