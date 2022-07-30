/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      // 태블릿
      t: { max: '992px' },
      // 모바일
      m: { max: '576px' },
    },
    extend: {
      fontFamily: {
        'nanum-light': ['nanum-light'],
        'nanum-regular': ['nanum-regular'],
        'nanum-bold': ['nanum-bold'],
        'nanum-eb': ['nanum-eb'],
        'nanum-acl': ['nanum-acl'],
        'nanum-acb': ['nanum-acb'],
      },
    },
  },
  plugins: [],
};
