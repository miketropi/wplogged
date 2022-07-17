/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphassets.com', 'images.unsplash.com'],
  },
  env: {
    NEXT_SITE_DOMAIN: process.env.NEXT_SITE_DOMAIN
  }
}

module.exports = nextConfig
