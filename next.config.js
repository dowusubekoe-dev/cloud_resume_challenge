/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [
      ...config.externals, 
      { canvas: "canvas" },
      { punycode: "punycode" },
    ];
    return config;
  },
  output: 'export', // Add this line to specify the static export output
};

module.exports = nextConfig;
