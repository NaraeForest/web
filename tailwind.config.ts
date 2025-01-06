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
        naver: '#03C75A',
        kakao: '#FEE500',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
};

export default config;
