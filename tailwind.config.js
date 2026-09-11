export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // CSS variable-based colors — support opacity modifiers like bg-primary/10
        background: 'rgb(var(--color-background) / <alpha-value>)',
        foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
        primary:    'rgb(var(--color-primary) / <alpha-value>)',
        secondary:  'rgb(var(--color-secondary) / <alpha-value>)',
        accent:     'rgb(var(--color-accent) / <alpha-value>)',
        muted:      'rgb(var(--color-muted) / <alpha-value>)',
        border:     'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
