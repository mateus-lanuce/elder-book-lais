/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  safelist: [
    'w-64',
    'w-1/2',
    'rounded-l-lg',
    'rounded-r-lg',
    'bg-gray-200',
    'grid-cols-4',
    'grid-cols-7',
    'h-6',
    'leading-6',
    'h-9',
    'leading-9',
    'shadow-lg'
  ],
  theme: {
    extend: {
      colors: {
        'themePurple': '#D16FFF',
        'themeGreen': '#7DC143',
        'themeGray': {
          light: '#ECECEC',
          dark: '#2F2E41'
        },
        'themeWhite': '#F5F5F5',
        'cardGray': '#F5F5F7'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

}
