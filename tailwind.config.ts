import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      ssx: "440px",
      // => @media (min-width: 440px) { ... }

      sx: "480px",
      // => @media (min-width: 480px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mdl: "990px",
      // => @media (min-width: 990px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1920px",
      // => @media (min-width: 1920px) { ... }

      "4xl": "3000px",
      // => @media (min-width: 3000px) { ... }
    },
    container: {
      padding: "15px",
    },
    keyframes: {
      kenburnsBottom: {
        "0%": { transform: "scale(1) translateY(0)" },
        "100%": { transform: "scale(1.25) translateY(15px)" },
      },
    },
    animation: {
      kenburnsBottom: "kenburnsBottom 5s ease-out both",
    },
  },
  plugins: [],
};
export default config;
