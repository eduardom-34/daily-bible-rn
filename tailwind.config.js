/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: "class",
  content: [
    "./App.tsx",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./hooks/**/*.{js,jsx,ts,tsx}",
    "./constants/**/*.{js,jsx,ts,tsx}",
    "./scripts/**/*.{js,jsx,ts,tsx}",
    "./utils/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter_400Regular"],
        "inter-medium": ["Inter_500Medium"],
        "inter-semibold": ["Inter_600SemiBold"],
        "inter-bold": ["Inter_700Bold"],
        merriweather: ["Merriweather_400Regular"],
        "merriweather-light": ["Merriweather_300Light"],
        "merriweather-bold": ["Merriweather_700Bold"],
        "merriweather-black": ["Merriweather_900Black"],
      },
      colors: {
        base: "var(--color-base)",
        card: "var(--color-card)",
        header: "var(--color-header)",
        surface: "var(--color-surface)",
        "teal-deep": "var(--color-teal-deep)",
        teal: "var(--color-teal)",
        "teal-soft": "var(--color-teal-soft)",
        sage: "var(--color-sage)",
        gold: "var(--color-gold)",
        "gold-light": "var(--color-gold-light)",
        linen: "var(--color-linen)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        border: "var(--color-border)",
      },
    },
  },
  plugins: [],
};
