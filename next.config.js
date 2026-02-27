/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["@react-three/fiber", "@react-three/drei"],
  },
};

module.exports = nextConfig;
