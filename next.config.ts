import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Juliana-moura-test2',
  trailingSlash: true,
};

export default nextConfig;
