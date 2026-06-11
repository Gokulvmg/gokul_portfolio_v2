/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: '#080B14',
        surface: '#0D1120',
        card: '#111827',
        border: '#1E293B',
        accent: '#00D9FF',
        accent2: '#7C3AED',
        accent3: '#F59E0B',
        textPrimary: '#F1F5F9',
        textSecondary: '#94A3B8',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
