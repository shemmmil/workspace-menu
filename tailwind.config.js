/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--wm-border))",
        input: "hsl(var(--wm-input))",
        ring: "hsl(var(--wm-ring))",
        background: "hsl(var(--wm-background))",
        foreground: "hsl(var(--wm-foreground))",
        primary: {
          DEFAULT: "hsl(var(--wm-primary))",
          foreground: "hsl(var(--wm-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--wm-secondary))",
          foreground: "hsl(var(--wm-secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--wm-destructive))",
          foreground: "hsl(var(--wm-destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--wm-muted))",
          foreground: "hsl(var(--wm-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--wm-accent))",
          foreground: "hsl(var(--wm-accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--wm-popover))",
          foreground: "hsl(var(--wm-popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--wm-card))",
          foreground: "hsl(var(--wm-card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--wm-radius)",
        md: "calc(var(--wm-radius) - 2px)",
        sm: "calc(var(--wm-radius) - 4px)",
      },
    },
  },
  plugins: [],
};
