import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // basePath 제거(2026-06-08): 독립 도메인 루트 서빙 — corporate-egh.pages.dev/
  images: {
    unoptimized: true
  }
};

export default nextConfig;
