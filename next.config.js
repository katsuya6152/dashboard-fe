/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    dirs: ['src/'],
  },
  env: {
    server: isProd ? 'https://dashboard-be.fly.dev' : 'http://localhost:8080',
  },
}

module.exports = nextConfig
