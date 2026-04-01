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
        cream: "#FAF7F2",
        "cream-dark": "#F0E8DC",
        "cream-border": "#E8DDD0",
        espresso: "#2C1810",
        "espresso-light": "#5C3A2A",
        terracotta: "#B8704D",
        "terracotta-light": "#D4A08A",
        "terracotta-dark": "#8F5035",
        sand: "#C9A98E",
        gold: "#C4A35A",
        taupe: "#8B7355",
        "taupe-light": "#A89880",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        lato: ["var(--font-lato)", "Helvetica Neue", "sans-serif"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
