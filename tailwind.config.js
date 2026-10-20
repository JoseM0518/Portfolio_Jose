/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        navy: { 950: '#0a0f1e', 900: '#0f172a', 800: '#17223b' },
      },
      keyframes: {
        fadeUp: { from: { opacity: 0, transform: 'translateY(18px)' }, to: { opacity: 1, transform: 'none' } },
      },
      animation: { 'fade-up': 'fadeUp .8s cubic-bezier(.2,.7,.2,1) both' },
    },
  },
  plugins: [],
}
