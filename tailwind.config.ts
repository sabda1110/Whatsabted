import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      gridTemplateColumns: {
        'custom-2': '300px 1fr',
        'custom-3': '350px 1fr',
        'custom-1': '200px 1fr'
      },
      backgroundColor: {
        customBg: '#181818'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config;
