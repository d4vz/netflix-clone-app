/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'black',
      },
      backgroundColor: {
        primary: 'black',
      },
      fontFamily: {
        'Netflix-Sans': ['Netflix Sans', 'sans-serif'],
      },
      width: {
        infinity: '999999999999999999px',
      },
      backgroundImage: {
        linear: 'linear-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'scale-up-hor-right': {
          '0%': {
            '-webkit-transform': 'scaleX(0.4)',
            transform: 'scaleX(0.4)',
            '-webkit-transform-origin': '100% 100%',
            'transform-origin': '100% 100%',
          },
          '100%': {
            '-webkit-transform': 'scaleX(1)',
            transform: 'scaleX(1)',
            '-webkit-transform-origin': '100% 100%',
            'transform-origin': '100% 100%',
          },
        },
      },
      animation: {
        'scale-up-hor-right':
          'scale-up-hor-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
    },
  },
  plugins: [],
};
