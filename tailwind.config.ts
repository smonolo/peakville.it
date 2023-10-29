import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const extendedThemeBackgroundImage = {
  "home-background": "url('~/assets/img/home-background.jpg')",
}

export const extendedThemeColors = {
  "p-beige": {
    100: "#FFFDF0",
    500: "#F9F4D8",
    900: "#F7EFC1",
  },
  "p-yellow": {
    100: "#F2BC49",
    500: "#F0AE23",
    900: "#DE9C12",
  },
  "p-orange": {
    100: "#E38042",
    500: "#E5732C",
    900: "#D95E11",
  },
  "p-red": {
    100: "#E05851",
    500: "#E13A31",
    900: "#D61B11",
  },
  "p-cyan": {
    100: "#49AEB3",
    500: "#28A0A5",
    900: "#128F94",
  },
  "p-blue": {
    100: "#388296",
    500: "#186D85",
    900: "#0A5C73",
  },
  "p-black": {
    100: "#212020",
    500: "#1B1A1A",
    900: "#171616",
  },
} as const

const extendedThemeFontFamily = {
  sans: ['"Roboto Slab"', ...defaultTheme.fontFamily.sans],
  heading: ['"Bookman"'],
}

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: extendedThemeBackgroundImage,
      colors: extendedThemeColors,
      fontFamily: extendedThemeFontFamily,
    },
  },
  plugins: [],
} satisfies Config
