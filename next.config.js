// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSvgr = require('next-plugin-svgr')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['ahooks']
}

module.exports = withSvgr(nextConfig)
