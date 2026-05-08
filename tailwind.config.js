/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gym-red':        '#E91E63',
        'gym-red-accent': '#FF4081',
        'gym-dark-gray':  '#4A4A4A',
        'gym-mid-gray':   '#7F8C8D',
        'gym-gold':       '#D4A017',
        'gym-black':      '#1A1A1A',
        'gym-light':      '#F5F5F5',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'cursive'],
        body:    ['"Nunito Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
