const customLoader = ({ src, width, quality }) => `${src}?w=${width}&q=${quality || 75}`

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    loader: "custom",
    path: "/",
    customLoader,
  },
  customLoader,
}

module.exports = nextConfig
