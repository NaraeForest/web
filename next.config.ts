import type {
  NextConfig,
} from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "standalone",
};

module.exports = {
  eslint: {
    dirs: [],
  }
}

export default nextConfig;
