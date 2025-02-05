/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Enables static export
    basePath: "", // GitHub Pages serves from a subpath
    images: {
      unoptimized: true, // Required if using Next.js images
    },
  };
  
  module.exports = nextConfig;
