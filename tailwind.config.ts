// tailwind.config.ts
import type { Config } from 'tailwindcss';

export default <Config>{
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        cream: 'var(--cream)',
        blue: 'var(--blue)',
        lavender: 'var(--lavender)',
        'dot-bg': 'var(--dot-bg)',
        'text-muted': 'var(--text-muted)',
        'grid-line': 'var(--grid-line)',
      },
      fontFamily: {
        sans: ['Nunito', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
