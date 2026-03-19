/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      screens: {
        tablet: '1280px'
      },
      colors: {
        navy: '#092137',
        primary: '#2d95ec',
        muted: '#535353',
        background: '#ffffff'
      },
      fontFamily: {
        sans: ['"Source Sans Pro"', 'system-ui', 'sans-serif'],
        title: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

