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
        cream: {
          50:  "#FDFAF5",
          100: "#F8F2E6",
          200: "#F2E8D5",
          300: "#E8D9BE",
        },
        olive: {
          100: "#D6D4C1",
          200: "#B8B89A",
          300: "#9A9A78",
          400: "#7A7A5A",
          500: "#5C5C42",
        },
        charcoal: {
          100: "#6B6157",
          200: "#4A4039",
          300: "#2E2520",
          400: "#1A1410",
        },
        warm: {
          white: "#FAF8F3",
          beige: "#EDE3D3",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "cursive"],
      },
      spacing: {
        "section": "clamp(5rem, 10vw, 9rem)",
      },
      borderRadius: {
        "organic": "60% 40% 55% 45% / 45% 55% 45% 55%",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "reveal": "reveal 1.2s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
      },
      backgroundImage: {
        "grain": "url('/textures/grain.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
