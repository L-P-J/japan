import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 啟用靜態導出
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
