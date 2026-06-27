import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Limit prerender worker count so DB connections (pool max 3 each) stay under
  // the Supabase session pooler's 15-client cap during static generation.
  experimental: {
    cpus: 3,
  },
  images: {
    // Payload Media is served same-origin (e.g. /api/media/file/... or /uploads/...).
    // Allow SVG (destination category icons are SVG uploads) with a safe CSP.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    localPatterns: [
      { pathname: "/api/media/**" },
      { pathname: "/uploads/**" },
      { pathname: "/images/**" },
    ],
  },
};

export default withPayload(nextConfig);
