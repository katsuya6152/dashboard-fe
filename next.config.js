/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src/'],
  },
  env: {
    server: isProd ? 'https://production-server.com' : 'http://localhost:3001',
  },
}

module.exports = nextConfig
