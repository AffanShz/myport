/** @type {import(''tailwindcss'').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "on-secondary": "#2f3033",
        "on-tertiary-fixed-variant": "#474649",
        "secondary-fixed": "#e3e2e6",
        "surface-dim": "#131314",
        "on-surface-variant": "#c4c7c8",
        "surface-bright": "#39393a",
        "surface-tint": "#c6c6c7",
        "error": "#ffb4ab",
        "error-container": "#93000a",
        "on-primary-container": "#636565",
        "inverse-surface": "#e5e2e3",
        "primary-fixed-dim": "#c6c6c7",
        "on-tertiary-fixed": "#1b1b1d",
        "on-secondary-fixed": "#1a1c1e",
        "on-primary": "#2f3131",
        "on-secondary-fixed-variant": "#46474a",
        "surface-variant": "#353436",
        "surface": "#131314",
        "tertiary-container": "#e4e2e4",
        "tertiary-fixed-dim": "#c8c6c8",
        "on-tertiary": "#303032",
        "on-primary-fixed": "#1a1c1c",
        "on-background": "#e5e2e3",
        "on-surface": "#e5e2e3",
        "background": "#131314",
        "outline-variant": "#444748",
        "surface-container-highest": "#353436",
        "surface-container-low": "#1c1b1c",
        "tertiary": "#ffffff",
        "primary": "#ffffff",
        "surface-container-high": "#2a2a2b",
        "outline": "#8e9192",
        "secondary": "#c7c6ca",
        "secondary-container": "#48494c",
        "on-tertiary-container": "#656466",
        "surface-container": "#201f20",
        "on-error": "#690005",
        "inverse-on-surface": "#313031",
        "on-error-container": "#ffdad6",
        "on-secondary-container": "#b8b8bb",
        "inverse-primary": "#5d5f5f",
        "surface-container-lowest": "#0e0e0f",
        "primary-container": "#e2e2e2",
        "primary-fixed": "#e2e2e2",
        "on-primary-fixed-variant": "#454747",
        "secondary-fixed-dim": "#c7c6ca",
        "tertiary-fixed": "#e4e2e4"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        "grid-margin": "4rem",
        "stack-sm": "0.5rem",
        "stack-lg": "4rem",
        "grid-gutter": "1.5rem",
        "stack-xl": "8rem",
        "stack-md": "1.5rem"
      },
      fontFamily: {
        "label-caps": ["Space Mono", "monospace"],
        "display-xl": ["Sora", "sans-serif"],
        "body-md": ["Geist", "sans-serif"],
        "display-lg": ["Sora", "sans-serif"],
        "body-lg": ["Geist", "sans-serif"],
        "headline-hero": ["Sora", "sans-serif"],
        "display-xl-mobile": ["Sora", "sans-serif"]
      },
      fontSize: {
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.2em", fontWeight: "500" }],
        "display-xl": ["120px", { lineHeight: "110px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "24px", letterSpacing: "0.01em", fontWeight: "400" }],
        "display-lg": ["80px", { lineHeight: "88px", letterSpacing: "-0.03em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", letterSpacing: "0.01em", fontWeight: "400" }],
        "headline-hero": ["48px", { lineHeight: "56px", letterSpacing: "0.1em", fontWeight: "600" }],
        "display-xl-mobile": ["56px", { lineHeight: "60px", letterSpacing: "-0.02em", fontWeight: "800" }]
      }
    }
  },
  plugins: []
};
