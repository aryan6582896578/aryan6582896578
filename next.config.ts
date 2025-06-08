import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  distDir: 'build',
  output: "export",
};

export default nextConfig;
