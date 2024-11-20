import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backaccentground: "#FF8F9C",
        blackish: "#1b1b1b",
        accent: "#3498db", // Added accent color
      },
      container: {
        center: true,
        padding: "15px",
      },
    },
  },
  plugins: [],
} satisfies Config;
