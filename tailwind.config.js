/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d', // Deep blue
          light: '#2a4a7f',
          dark: '#0f2a4a',
        },
        secondary: {
          DEFAULT: '#718096', // Gray
          light: '#a0aec0',
          dark: '#4a5568',
        },
        accent: {
          DEFAULT: '#4299e1', // Accent blue
          light: '#63b3ed',
          dark: '#2b6cb0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}