/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'myles-ray.github.io',
      },
      // If you plan to load images from any github.io page, you can wildcard it:
      // {
      //   protocol: 'https',
      //   hostname: '*.github.io',
      // },
    ],
  },
};

export default nextConfig;