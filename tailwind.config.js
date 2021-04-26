module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Questrial', 'sans-serif'],
      
    },
    extend: {
      backgroundImage: (theme) => ({
        "heroimage": "url('./assets/1.png')",
        "heroimage2": "url('./assets/4.png')",
        "aboutimg": "url('./assets/3.png')",
        "slider1": "url('./assets/products/daycream.png')",
        "slider2": "url('./assets/products/mineralconcealer.png')",
        "slider3": "url('./assets/products/mineralpowder.png')",
        "slider4": "url('./assets/products/mineralprimer.png')",
        "slider5": "url('./assets/products/nightcream.png')",
        "slider6": "url('./assets/products/nailpolish.png')",
      }),
      fontFamily: {
        logo: ['Herr Von Muellerhoff', 'cursive'],
        
    },
    colors: {
      brown: "#5C3C35",
      sand: "#C9C2BD",
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
