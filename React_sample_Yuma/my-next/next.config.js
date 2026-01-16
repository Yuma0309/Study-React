/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
  },
  images: {
    remotePatterns: [
      {
        hostname: 'books.google.com'
      },
    ]
  },
}

module.exports = nextConfig
