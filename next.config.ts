import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <-- autorise le build même avec erreurs ESLint
  },
};

export default nextConfig;
