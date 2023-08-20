/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
    serverActionsBodySizeLimit: "6mb",
  },
};

module.exports = nextConfig;
