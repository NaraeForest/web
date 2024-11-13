/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        naverColor: '#03C75A',
        kakaoColor: '#FEE500'
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // 플러그인 추가
  ],
};

