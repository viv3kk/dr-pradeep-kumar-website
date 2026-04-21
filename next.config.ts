import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.apollohospitals.com" },
      { protocol: "https", hostname: "**.apollo247.com" },
    ],
  },
};

export default nextConfig;
