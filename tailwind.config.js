/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#f4f9f7",
          100: "#e5f1ed",
          200: "#bdded7",
          300: "#98c8bf",
          400: "#77aca1",
          500: "#5e9487",
          600: "#4a7a6f",
          700: "#3d635b",
          800: "#33504a",
          900: "#2b423d",
          950: "#152521",
        },
        accent: {
          DEFAULT: "#068164",
          dark: "#05674f",
          tint: "#e6f2ef",
        },
      },
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": [
          "clamp(2.5rem,5vw,3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.02em" },
        ],
        display: [
          "clamp(2rem,4vw,2.75rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em" },
        ],
        title: [
          "clamp(1.375rem,2.5vw,1.75rem)",
          { lineHeight: "1.25", letterSpacing: "-0.01em" },
        ],
        eyebrow: [
          "0.8125rem",
          { lineHeight: "1.2", letterSpacing: "0.12em" },
        ],
      },
      borderRadius: {
        card: "20px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(21,37,33,.05), 0 8px 24px -12px rgba(21,37,33,.10)",
        card: "0 1px 0 rgba(21,37,33,.04), 0 16px 40px -20px rgba(21,37,33,.18)",
        pill: "0 8px 20px -8px rgba(6,129,100,.45)",
      },
      keyframes: {
        reveal: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        reveal: "reveal .6s cubic-bezier(.22,1,.36,1) both",
      },
    },
  },
  plugins: [],
};
