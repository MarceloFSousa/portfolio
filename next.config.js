/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Os produtos saíram deste site. Redireciona os links antigos para a Home
  // por enquanto (temporário: depois apontar para o domínio da loja).
  async redirects() {
    return [
      { source: "/mercado-financeiro", destination: "/", permanent: false },
      { source: "/mercado-financeiro/:path*", destination: "/", permanent: false },
    ];
  },
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
