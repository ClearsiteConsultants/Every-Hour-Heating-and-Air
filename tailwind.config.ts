import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#edf4ff",
          100: "#dbe9ff",
          200: "#b8d5ff",
          300: "#95c1ff",
          400: "#5c9cff",
          500: "#2d76ff",
          600: "#0a4aa7",
          700: "#0a3a85",
          800: "#082a61",
          900: "#061b3d"
        }
      },
      boxShadow: {
        soft: "0 12px 32px rgba(15, 23, 42, 0.12)",
        glow: "0 16px 40px rgba(10, 74, 167, 0.25)"
      }
    }
  },
  plugins: []
} satisfies Config;
