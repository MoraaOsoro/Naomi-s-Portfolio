import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "hsl(var(--paper) / <alpha-value>)",
        ink: "hsl(var(--ink) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        line: "hsl(var(--line) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-ink": "hsl(var(--accent-ink) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      boxShadow: {
        card: "0 1px 2px hsl(var(--ink) / 0.04), 0 8px 24px -12px hsl(var(--ink) / 0.12)",
        "card-hover": "0 1px 2px hsl(var(--ink) / 0.06), 0 16px 40px -16px hsl(var(--ink) / 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
