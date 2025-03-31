import type { NextConfig } from "next";
import { tree } from "next/dist/build/templates/app-page";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
