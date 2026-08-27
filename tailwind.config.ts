import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        "deep-slate": "#0D515C",
        "surface-card": "#0D515C",
        charcoal: "#0D515C",
        "cyber-cyan": "#F5F2E4",
        "cyber-cyan-dark": "#F5F2E4",
        "acid-lime": "#DE3737",
        "acid-lime-dark": "#DE3737",
      },
      backgroundImage: {
        "gradient-radial-contact":
          "radial-gradient(ellipse at center, rgba(245, 242, 228, 0.1) 0%, rgba(222, 55, 55, 0.05) 45%, transparent 70%)",
      },
    },
  },
};

export default config;
