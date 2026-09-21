/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: 'var(--ink-primary)',
          secondary: 'var(--ink-secondary)',
          tertiary: 'var(--ink-tertiary)',
          quaternary: 'var(--ink-quaternary)',
        },
        canvas: {
          base: 'var(--bg-base)',
          elevated: 'var(--bg-elevated)',
          subtle: 'var(--bg-subtle)',
          inset: 'var(--bg-inset)',
        },
        line: {
          subtle: 'var(--border-subtle)',
          DEFAULT: 'var(--border-default)',
          strong: 'var(--border-strong)',
        },
        accent: {
          DEFAULT: 'var(--accent-primary)',
          hover: 'var(--accent-hover)',
          subtle: 'var(--accent-subtle)',
        },
      },
      boxShadow: {
        'soft-sm': 'var(--shadow-sm)',
        'soft': 'var(--shadow-md)',
        'soft-lg': 'var(--shadow-lg)',
        'soft-xl': 'var(--shadow-xl)',
      },
    },
  },
  plugins: [],
};