// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/test-pages',
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
