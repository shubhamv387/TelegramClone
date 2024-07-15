/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        'theme-bg': 'hsl(var(--theme-bg) / <alpha-value>)',
        'input-bg': 'hsl(var(--input-bg) / <alpha-value>)',
        text: 'hsl(var(--text) / <alpha-value>)',
        'text-secondary': 'hsl(var(--text-secondary) / <alpha-value>)',
        'text-meta': 'hsl(var(--text-meta) / <alpha-value>)',
        'chat-active': 'hsl(var(--chat-active) / <alpha-value>)',
        'chat-hover': 'hsl(var(--chat-hover) / <alpha-value>)',
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'light-shadow': 'hsl(var(--light-shadow) / <alpha-value>)',
      },
      boxShadow: {
        'light-shadow': '0 2px 2px light-shadow',
      },
      borderColor: ['focus'],
      backgroundColor: ['focus'],
    },
  },
  plugins: [],
};
