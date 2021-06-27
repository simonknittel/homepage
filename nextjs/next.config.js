module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.inline\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },

  poweredByHeader: false,

  reactStrictMode: true,
}
