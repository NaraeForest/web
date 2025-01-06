import type {
  NextConfig,
} from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.narumir.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
