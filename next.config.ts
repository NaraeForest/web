import type {
  NextConfig,
} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "standalone",
  eslint: {
    dirs: [],
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}), // 기존 alias를 유지
      "@": "./src", // 사용자 정의 alias 추가
    };

    return config; // 수정된 설정 반환
  },
};

export default nextConfig;