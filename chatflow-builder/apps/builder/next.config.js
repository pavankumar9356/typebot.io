/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    transpilePackages: ['@chatflow/shared', '@chatflow/database'],
  },
}

module.exports = nextConfig
