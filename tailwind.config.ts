import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    borderRadius: {
      'none': '0px',
      'sm': '0px',
      'DEFAULT': '0px',
      'md': '0px',
      'lg': '0px',
      'xl': '0px',
      '2xl': '0px',
      '3xl': '0px',
      'full': '0px',
      'archival': '0px',
      'subtle': '0px',
      'card': '0px',
    },
    extend: {
      colors: {
        // Updated Master Editorial Color System
        canvas: {
          DEFAULT: "#FFFFFF", // Main background (Pure White)
          paper: "#FFFFFF",   // Pure white background
          white: "#FFFFFF",   // Pure white
        },
        ink: {
          DEFAULT: "#1F2937", // Main body text
          muted: "#6B7280",   // Secondary muted text
          subtle: "#9CA3AF",  // Caption / footnote text
        },
        border: {
          DEFAULT: "#E5E7EB", // Clean neutral border
          subtle: "#F3F4F6",  // Extra soft inner dividers
          dark: "#D1D5DB",    // Subdued border
        },
        forest: {
          DEFAULT: "#153B32", // Rare, intentional deep green
          dark: "#0F2B25",
          light: "#1E5044",
          surface: "#113028",
        },
        antiqueGold: {
          DEFAULT: "#B89A61", // Restrained accent gold
          light: "#CEB684",
          dark: "#9E8148",
          subtle: "#F9FAFB",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cormorant Garamond", "Georgia", "serif"],
        display: ["var(--font-display)", "Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["var(--font-sans)", "Montserrat", "Inter", "system-ui", "-apple-system", "sans-serif"],
        arabicHeading: ["var(--font-arabic-heading)", "Noto Kufi Arabic", "sans-serif"],
        arabicBody: ["var(--font-arabic-body)", "Noto Sans Arabic", "sans-serif"],
      },
      maxWidth: {
        archival: "1440px",
        editorial: "1280px",
        reading: "760px",
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/5': '4 / 5',
        '4/3': '4 / 3',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
      boxShadow: {
        editorial: "0 1px 3px rgba(32, 32, 30, 0.04), 0 6px 16px rgba(32, 32, 30, 0.02)",
        museum: "0 10px 30px -10px rgba(21, 59, 50, 0.08)",
      },
    },
  },
  plugins: [],
} satisfies Config;
