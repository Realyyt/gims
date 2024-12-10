/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Adds trailing slashes to URLs for better SEO
  generateEtags: true, // Helps with caching
  poweredByHeader: false, // Removes X-Powered-By header for security
  reactStrictMode: true,
}

module.exports = nextConfig 
