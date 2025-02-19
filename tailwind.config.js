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
        textPrimary: "hsl(var(--text-primary))",  /* Text primary color */
        textMuted: "hsl(var(--text-muted))",      /* Text muted color */
      }
    },
  },
  plugins: [],
};
