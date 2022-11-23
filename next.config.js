/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: process.env.ENV === "local" ? "" : 'experimental-edge',
  },
  reactStrictMode: true,
}

module.exports = nextConfig
