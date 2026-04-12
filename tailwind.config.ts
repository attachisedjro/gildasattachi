import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FAFAF8",
          secondary: "#F4F3F0",
          dark: "#0F1117",
          "dark-secondary": "#1A1F2E",
        },
        text: {
          primary: "#0F1117",
          secondary: "#4B5563",
          muted: "#9CA3AF",
          dark: "#F9FAFB",
        },
        accent: {
          DEFAULT: "#1D4ED8", // Bleu ardoise profond
          light: "#DBEAFE",
          dark: "#1E3A8A",
        },
        secondary: {
          DEFAULT: "#C2410C", // Terracotta
          light: "#FED7AA",
        },
        border: "#E5E7EB",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        'card': '12px',
        'btn': '8px',
        'badge': '4px',
      },
      spacing: {
        'section-y-desktop': '96px',
        'section-y-mobile': '64px',
      },
    },
  },
  plugins: [],
};
export default config;
