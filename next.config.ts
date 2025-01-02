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
        hostname: 'cdn.05-project.narumir.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
