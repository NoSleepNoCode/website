/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#050505",
          secondary: "#0f0f12",
        },
        accent: {
          primary: "#6366f1",
          secondary: "#a855f7",
          teams: "#6264A7",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
      },
    },
  },
  plugins: [],
}
