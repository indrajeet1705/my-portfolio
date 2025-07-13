/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./public/index.html",        // if you're using HTML files
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
      },
      animation: {
        scroll: ' scroll 20s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'scroll-pause': 'scroll 20s linear infinite paused',
      },
    },
  },
  plugins: [],
}

