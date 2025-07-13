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
      },
      animation: {
        scroll: ' scroll 20s linear infinite',
        'scroll-pause': 'scroll 20s linear infinite paused',
      },
    },
  },
  plugins: [],
}

