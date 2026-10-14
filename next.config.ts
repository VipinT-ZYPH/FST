import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a minimal self-contained server (.next/standalone) for Docker
  output: "standalone",
  // Pin tracing to this folder so server.js lands at .next/standalone/server.js
  outputFileTracingRoot: process.cwd(),
  allowedDevOrigins: ["*.app.github.dev"],
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "*.app.github.dev"],
    },
  },
};

export default nextConfig;
