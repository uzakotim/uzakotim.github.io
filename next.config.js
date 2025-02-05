/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    basePath: "/uzakotim.github.io", // GitHub Pages serves from a subpath
    assetPrefix: "/uzakotim.github.io",
    images: {
      unoptimized: true, // Required if using Next.js images
    },
  };
  
  module.exports = nextConfig;
