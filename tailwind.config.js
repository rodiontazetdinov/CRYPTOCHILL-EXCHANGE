/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg-img': "url('/src/images/BG.png')",
        'trans-bg-img': "url('/src/images/puprple-circle.png')",
        'btns': 'radial-gradient(50% 50% at 50% 50%, #B36CFF 0%, #A148FF 100%)',
        'order': 'linear-gradient(102deg, rgba(56, 9, 103, 0.50) 0.55%, rgba(120, 17, 197, 0.50) 96.54%)'
      },
      backgroundColor: {
        'main-bg': '#060423',
        'drop': 'rgba(6, 4, 35, 0.70)',
      },
      maxWidth: {
        '1328': '1328px',
      },
    },
  },
  plugins: [],
}
