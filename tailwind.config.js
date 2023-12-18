import DaisyUi from 'daisyui'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,ts,vue}',
    './layouts/**/*.{js,ts,vue}',
    './pages/**/*.{js,ts,vue}',
    './plugins/**/*.{js,ts,vue}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    DaisyUi
  ],
  daisyui: {
    themes: ['dark', 'light'],
  }
}

