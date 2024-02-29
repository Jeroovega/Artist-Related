export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2rpx',
      },
      backgroundImage: {
        'hero-pattern': "url('.src/assets/aaa.png')"
      }
    },
    fontFamily: {
      'Titulo': ['Averta', 'sans-serif'],
      'Subtitulo': ['AvertaSubtitulo', 'sans-serif'],
      'Nuevo': ['Nuevo', 'sans-serif'],
    }
  },
  plugins: [require('daisyui')],
}