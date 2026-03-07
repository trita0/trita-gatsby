/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`, 
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/sections/**/*.{js,jsx,ts,tsx}`,
    `./src/layouts/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
    `./src/content/**/*.{md,mdx}`,
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: `#07060a`,
          900: `#0b0b0f`,
          800: `#141420`,
          100: `#f3f2f7`,
        },
        sand: {
          50: `#fbf7ef`,
          100: `#f3e7d4`,
          200: `#e9d2ab`,
        },
        terracotta: {
          50: `#fff1ec`,
          500: `#cf4a2c`,
          600: `#b83f25`,
        },
        marigold: {
          50: `#fff7e6`,
          500: `#f4b000`,
          600: `#d99300`,
        },
        indigo: {
          500: `#3b4acb`,
          600: `#2f3db2`,
        },
      },
      fontFamily: {
        display: [`var(--font-display)`, `serif`],
        ui: [`var(--font-ui)`, `cursive`],
        body: [`var(--font-body)`, `serif`],
        heading: [`var(--font-heading)`, `serif`],
        caption: [`var(--font-caption)`, `serif`],
        sans: [`var(--font-ui)`, `ui-sans-serif`, `system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `Inter`, `Helvetica`, `Arial`, `sans-serif`],
        serif: [`var(--font-body)`, `ui-serif`, `Georgia`, `Cambria`, `Times New Roman`, `Times`, `serif`],
      },
      boxShadow: {
        soft: `0 12px 28px rgba(7, 6, 10, 0.10)`,
        lift: `0 18px 50px rgba(7, 6, 10, 0.14)`,
      },
      borderRadius: {
        xl: `1rem`,
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        floaty: `floaty 6s ease-in-out infinite`,
      },
    },
  },
  plugins: [],
}
