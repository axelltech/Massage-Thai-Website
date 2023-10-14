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
      "md-media": { raw: "(min-width: 768px)" },
      "xl-media": { raw: "(min-width: 1440px)" },
    },
    colors: {
      "black-main": "#000000",
      "red": "#b70000",
      "white-main": "#FAFAF9",
      "custom": "#d4af37",
      redy: {
        400: "#6c001a",
      },
      "modal": "rgba(0, 0, 0, 0.9);",
      "green": "#38af48",
      gray: {
        200: "#b9b9ba",
        500: "#171619"
      }
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
				transform: "translateX(calc(-504px * 5))",
			}
		},
    text_reveal_box: {
      "50%": {
        width: "100%",
        left: "0"
      },
      "100%": {
        width: "0",
        left: "100%"
      }
    },
    text_reveal: {
      "100%": {
        color: "#b70000"
      }
    },
    text_reveal_main: {
      "100%": {
        color: "#FAFAF9"
      }
    }
      },
      animation: {
        pulse: "pulse 1s ease infinite",
		    scroll: "scroll 40s linear infinite",
        textrevealbox: "text_reveal_box 1s ease",
        textreveal: "text_reveal 0.5s ease forwards",
        textrevealmain: "text_reveal_main 0.5s ease  forwards"
      },
	  backgroundImage: {
        'price-bg': "url('../src/img/photoFive.jpeg')",
      },
    },
  },
  plugins: [],
};
