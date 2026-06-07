import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          "black-2": "#111111",
          "black-3": "#1A1A1A",
          gold: "#C9A84C",
          "gold-light": "#E8C87A",
          "gold-dark": "#9A7A30",
          white: "#F5F0E8",
          "white-pure": "#FFFFFF",
          gray: "#888888",
        },
      },
    },
  },
  plugins: [],
};
export default config;
