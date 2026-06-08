import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/diagnostico-gratuito",
        destination: "/diagnostico-gratuito/index.html",
      },
    ];
  },
};

export default nextConfig;
