/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg-img': "url('/src/images/BG2.png')",
        'trans-bg-img': "url('/src/images/puprple-circle.png')",
        'btns': 'radial-gradient(50% 50% at 50% 50%, #B36CFF 0%, #A148FF 100%)',
        'order': 'linear-gradient(102deg, rgba(56, 9, 103, 0.50) 0.55%, rgba(120, 17, 197, 0.50) 96.54%)',
        'text': 'linear-gradient(94deg, #FBE3F1 46.44%, #CAAEFF 95.59%)'
      },
      backgroundColor: {
        'main-bg': '#060423',
        'drop': 'rgba(6, 4, 35, 0.70)',
        'account': 'rgba(6, 4, 35, 0.70)'
      },
      maxWidth: {
        '1328': '1328px',
        '1280': '1280px',
        'main-container': 'calc(100% - 112px)',
        'tablet-container': 'calc(100% - 48px)',
        'mobile-container': 'calc(100% - 32px)',
        'first-news-card': 'calc(50% - 12px)',
        'other-news-cagd': 'calc(33.33% - 16px)'
      }
    },
  },
  plugins: [],
}
