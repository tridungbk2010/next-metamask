module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './shared/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      bebasNeue: ['Bebas Neue', 'cursive'],
      courier: ['Courier Prime', 'monospace'],
    },
    extend: {
      listStyleType: {
        square: 'square',
        roman: 'upper-roman',
      },
      height: {
        600: '600px',
      },
      gridTemplateColumns: {
        '3faf': '1fr auto 1fr',
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#15c',
            },
            h3: {
              fontFamily: 'Bebas Neue',
            },
            h4: {
              color: '#fff',
              fontWeight: 'bold',
            },
          },
        },
      },
      colors: {
        lightGreen: {
          DEFAULT: '#92e000',
        },
        lime: {
          500: '#adff00',
          100: 'rgba(173, 255, 0, 0.1)',
        },
      },
    },
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      rotate: ['active', 'group-hover'],
      borderWidth: ['last', 'first'],
      opacity: ['disabled'],
      hover: ['disabled'],
      backgroundColor: ['disabled', 'active'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
