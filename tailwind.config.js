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
            "custom-bg": "radial-gradient(circle, white 100%, #0A0C11 10%, #07373F 100%)"
          },
      },
    },
    plugins: [],
}