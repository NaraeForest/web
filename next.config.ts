import type {
  NextConfig,
} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "standalone",
  eslint: {
    dirs: [],
  }
};

export default nextConfig;
