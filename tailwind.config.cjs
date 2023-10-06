const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
// content: [
//     "./dist/**/*.html",
//     "./dist/**/*.js",
//   ],
  theme: {
    screens: {
	  sm: "480px",
      md: "768px",
      lg: "1025px",
      xl: "1440px",
      "lg-media": { raw: "(min-width: 1025px)" },
    },
    colors: {
      "black-main": "#000000",
      "red": "#b70000",
      "white-main": "#FAFAF9",
      green: {
        400: "#9b0026",
      },
    },
    fontFamily: {
      montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
    extend: {
      keyframes: {
        pulse: {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
          },
          "100%": {
            opacity: "0",
            transform: "scale(1.4)",
          },
        },
		scroll: {
			"0%": {
				transform: "translateX(0)",
			},
			"100%": {
				transform: "translateX(calc(-250px * 9))",
			}
		}
      },
      animation: {
        pulse: "pulse 1s ease infinite",
		    scroll: "scroll 40s linear infinite",
      },
	  backgroundImage: {
        'price-bg': "url('../src/img/photoFive.jpeg')",
      }
    },
  },
  plugins: [],
};
