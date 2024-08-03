import type { Config } from "tailwindcss";
import daisyui from "daisyui";

import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#0B5DB0",
          50: "#F0F5FF",
          100: "#D9E5FF",
          200: "#A8C1FF",
          300: "#779CFF",
          400: "#4873FF",
          500: "#0B5DB0",
          600: "#0353A1",
          700: "#02408A",
          800: "#01316C",
          900: "#002451",
        },
        secondary: {
          DEFAULT: "#F8C62A",
          50: "#FFFDF6",
          100: "#FFF9D9",
          200: "#FFF0A6",
          300: "#FFE673",
          400: "#FFDA40",
          500: "#F8C62A",
          600: "#D9A423",
          700: "#B37A1B",
          800: "#8C5113",
          900: "#6C3A0D",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), daisyui],
  daisyui: {
    themes: [
      {
        safewave: {
          primary: "#0B5DB0",
          "primary-focus": "#0353A1",
          "primary-content": "#FFFFFF",
          secondary: "#F8C62A",
          "secondary-focus": "#D9A423",
          "secondary-content": "#FFFFFF",
          accent: "#37CDFF",
          "accent-focus": "#2AA5C8",
          "accent-content": "#FFFFFF",
          neutral: "#3D4451",
          "neutral-focus": "#2A2E37",
          "neutral-content": "#FFFFFF",
        },
      },
    ],
  },
};

export default config;
