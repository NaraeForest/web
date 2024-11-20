import type {
  Config,
} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        naverColor: '#03C75A',
        kakaoColor: '#FEE500',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"), // 플러그인 추가
  ],
};
export default config;
