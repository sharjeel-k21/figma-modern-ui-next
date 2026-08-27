import type { Config } from "tailwindcss";

/**
 * Cyber-Luxe palette from the Figma export (deep slate base, cyan + acid lime accents).
 * Use these tokens in components instead of raw hex for consistency.
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        "deep-slate": "#0F172A",
        "surface-card": "#1E293B",
        charcoal: "#121212",
        "cyber-cyan": "#00F0FF",
        "cyber-cyan-dark": "#00B8C9",
        "acid-lime": "#CCFF00",
        "acid-lime-dark": "#A3CC00",
      },
      backgroundImage: {
        "gradient-radial-contact":
          "radial-gradient(ellipse at center, rgba(0, 240, 255, 0.1) 0%, rgba(204, 255, 0, 0.05) 45%, transparent 70%)",
      },
    },
  },
};

export default config;
