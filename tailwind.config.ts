import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#111111",
        gold: "#C9A84C",
        text: "#F5F5F5",
        muted: "#8A8A8A",
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "Georgia", "serif"],
        body: ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      maxWidth: {
        site: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
