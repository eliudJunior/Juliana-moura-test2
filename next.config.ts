import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Se o seu repositório não for o 'username.github.io', 
  // você precisaria de um 'basePath' aqui.
  // Como o nome do seu repo é 'Juliana-moura-test2', 
  // o basePath deve ser o nome do repositório.
  basePath: '/Juliana-moura-test2',
};

export default nextConfig;
