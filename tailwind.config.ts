import type { Config } from 'tailwindcss';

export default {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'tst-primary-red': '#ff0000',
      'tst-primary-gray-dark': '#444',
      'tst-primary-slate': '#0c80a1',
      'tst-primary-slate-dark': '#085a72',
      'tst-primary-slate-light': '#0f9bcf',
      'tst-primary-white': '#fff',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
