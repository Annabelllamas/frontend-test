/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'

export default {
  darkMode: 'selector',
  content: [
    './index.html',
    './src/**/*.{js,ts,vue}'
  ],
  theme: {
    extend: {
      backgroundSize: {
        'size-200': '200% 200%'
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%'
      },
      colors: {
        primary: '#e5007e',
        secondary: '#f06b18',
        alternative: '#ffc621'
      }
    }
  },
  plugins: [
    forms({
      strategy: 'class'
    })
  ]
}
