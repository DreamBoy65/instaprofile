/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/insta/:path',
        destination: '/instas',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
