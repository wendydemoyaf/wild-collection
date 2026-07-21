import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/unisex", destination: "/", permanent: false },
      { source: "/unisex/:path*", destination: "/", permanent: false },
      { source: "/masculino/9pm", destination: "/masculino", permanent: false },
      { source: "/masculino/asad", destination: "/masculino", permanent: false },
      { source: "/masculino/invictus-victory", destination: "/masculino", permanent: false },
      { source: "/masculino/le-male", destination: "/masculino", permanent: false },
      { source: "/femenino/born-in-roma", destination: "/femenino", permanent: false },
      { source: "/femenino/prada-candy", destination: "/femenino", permanent: false },
      { source: "/femenino/scandal", destination: "/femenino", permanent: false },
      { source: "/femenino/sweet-like-candy", destination: "/femenino", permanent: false },
    ];
  },
};

export default nextConfig;
