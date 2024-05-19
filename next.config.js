/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'avatars.githubusercontent.com'
    ]
  },
  output: 'standalone'
  // trailingSlash: true
}
const dotenv = require('dotenv')
dotenv.config({ path: '.env.local' })
dotenv.config({ path: '.env.staging' })
dotenv.config({ path: '.env.production' })
module.exports = nextConfig
