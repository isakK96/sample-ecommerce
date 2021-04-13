module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Questrial', 'sans-serif'],
      
    },
    extend: {
      backgroundImage: (theme) => ({
        "heroimage": "url('./assets/5.png')",
        "slider1": "url('./assets/products/daycream.png')",
        "slider2": "url('./assets/products/mineralconcealer.png')",
        "slider3": "url('./assets/products/mineralpowder.png')",
        "slider4": "url('./assets/products/mineralprimer.png')",
        "slider5": "url('./assets/products/nightcream.png')",
        "slider6": "url('./assets/products/slider.png')",
      }),
      fontFamily: {
        logo: ['Herr Von Muellerhoff', 'cursive'],
        
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
