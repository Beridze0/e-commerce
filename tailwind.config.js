/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  darkMode: "class", // Enables dark mode with 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        primaryForeground: "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        secondaryForeground: "hsl(var(--secondary-foreground))",
        accent: "hsl(var(--accent))",
        accentForeground: "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        success: "hsl(var(--success))",
        destructive: "hsl(var(--destructive))",
        textPrimary: "hsl(var(--text-primary))",
        textMuted: "hsl(var(--text-muted))",
        textInverted: "hsl(var(--text-inverted))", // Added for inverted text color
    
        /* Hover Colors */
        hoverPrimary: "hsl(var(--hover-primary))",
        hoverSecondary: "hsl(var(--hover-secondary))",
        hoverAccent: "hsl(var(--hover-accent))",
        hoverBorder: "hsl(var(--hover-border))",
    }
    
    
    },
  },
  plugins: [],
};
