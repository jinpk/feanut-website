/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/hello",
        destination: "https://feanut.page.link/hello",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
