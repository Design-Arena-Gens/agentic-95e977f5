import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0b0d10",
        platinum: "#f5f5f5",
        aurora: {
          500: "#5dade2",
          600: "#2e86c1",
          700: "#1b4f72"
        },
        gilded: {
          500: "#f1c40f",
          600: "#d4ac0d",
          700: "#b7950b"
        }
      },
      fontFamily: {
        display: ["var(--font-cinzel)"],
        sans: ["var(--font-manrope)"]
      },
      boxShadow: {
        "glow-lg": "0 30px 60px -20px rgba(108, 99, 255, 0.45)"
      },
      backgroundImage: {
        "luxury-gradient":
          "linear-gradient(135deg, rgba(74, 144, 226, 0.2) 0%, rgba(241, 196, 15, 0.15) 50%, rgba(113, 89, 193, 0.25) 100%)",
        "luxury-radial":
          "radial-gradient(circle at top left, rgba(241, 196, 15, 0.25), transparent 45%), radial-gradient(circle at bottom right, rgba(113, 89, 193, 0.25), transparent 50%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.8", filter: "blur(16px)" },
          "50%": { opacity: "1", filter: "blur(24px)" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        shimmer: "shimmer 7s linear infinite",
        pulseGlow: "pulseGlow 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
