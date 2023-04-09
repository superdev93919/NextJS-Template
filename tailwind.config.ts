import { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    fontFamily: {
      "sans": ["var(--font-inter)"],
      "mono": ["var-(--font-roboto-mono)"]
    },

    colors: {
      "transparent": "transparent",

      "white": "white",
      "black": "black",

      "primary": "#202C59"
    },

    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["2rem", { lineHeight: "1" }]
    },

    screens: {
      "2xl": { "max": "1535px" },
      "xl": { "max": "1279px" },
      "lg": { "max": "1023px" },
      "md": { "max": "767px" },
      "sm": { "max": "639px" }
    },

    borderRadius: {
      none: "0px",
      DEFAULT: "0.5rem",
      full: "9999px"
    },

    boxShadow: {
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
    },

    extend: {
      transitionProperty: {
        "max-height": "max-height",
        "max-width": "max-width"
      }
    }
  },

  plugins: []
} satisfies Config;