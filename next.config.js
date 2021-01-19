const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps({
  reactStrictMode: true,
  ignoreBuildErrors: false,
  devIndicators: {
    autoPrerender: true,
  },
  env: {
    MOCK_API_BASE_URL: 'http://localhost:3030/wiseupcorp-api',
    WISEUPCORP_API_BASE_URL:
      process.env.WISEUPCORP_API_BASE_URL ||
      'https://test-app.wiseupcorp.com/wiseupcorp-api',
    // WISEUPCORP_API_BASE_URL: 'https://4957ed2bc809.ngrok.io',
    SENTRY_DSN:
      process.env.SENTRY_DSN ||
      'https://7f5f481724ca47b5bd255835d6502253@o61672.ingest.sentry.io/5428902',
    SENTRY_ENV: process.env.SENTRY_ENV || 'development',
  },
  // assetPrefix: process.env.ASSET_PREFIX || './',
  // 'https://storage.googleapis.com/wiseupcorp/storage/test',
  // target: 'serverless',
  webpack: (config, options) => {
    config.module.rules.push({
      rules: [
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
      ],
    });
    return config;
  },
});
