import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [daisyui],
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
