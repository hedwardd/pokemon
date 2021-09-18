module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        '40': '40px 40px',
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, #B3B3B3 1px, transparent 1px), linear-gradient(to bottom, #B3B3B3 1px, transparent 1px)',
      },
      colors: {
        'off-white': '#F8F8F8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
