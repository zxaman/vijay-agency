import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true, // <-- Add this line
  
  reactStrictMode: true,

  typescript: {
    ignoreBuildErrors: false,
  },

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizePackageImports: ["react-icons"],
  },
};

export default nextConfig;