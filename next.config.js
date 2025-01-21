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
};

module.exports = {
  output: 'export',
}