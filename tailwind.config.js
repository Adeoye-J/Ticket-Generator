/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
            'radial-white-dark': 'radial-gradient(circle, white 0%, #02191D 100%)',
          },
      },
    },
    plugins: [],
}