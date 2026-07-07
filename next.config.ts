import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/gcbrieau",
        destination: "https://gcbrieau.vercel.app/gcbrieau",
      },
      {
        source: "/gcbrieau/:path*",
        destination: "https://gcbrieau.vercel.app/gcbrieau/:path*",
      },
    ];
  },
};

export default nextConfig;
