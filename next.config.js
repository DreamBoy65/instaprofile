/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/insta/:id",
        destination: "/insta?profile=:id",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
