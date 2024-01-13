/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    domains: ['randomuser.me'], // Agrega aquí el dominio de tu imagen
    unoptimized: true,
  },
}

module.exports = nextConfig;
