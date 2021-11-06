module.exports = {
  enabled: process.env.NODE_ENV === "production",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        shake: {
                "0%, 100%":{
                  transform: "translateX(0rem)",
                  transform: "rotate(0deg)"
                },
                "33%": {
                  transform:"translateX(-5rem) rotate(-2deg)"
                },
                "66%":{
                  transform:"translateX(5rem) rotate(2deg)"
                }
                  
        },
      },

      animation: {
        shake: "shake 2s ease-in infinite",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
