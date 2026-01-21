/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.credly.com'],
  },
}

module.exports = nextConfig
