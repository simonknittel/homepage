const path = require('path')

process.env.VUE_APP_SENTRY_COMMIT = process.env.TRAVIS_COMMIT
process.env.VUE_APP_SENTRY_RELEASE = process.env.TRAVIS_BUILD_NUMBER

module.exports = {
  productionSourceMap: false,

  css: {
    sourceMap: true
  },

  chainWebpack: config => {
    config
      .plugin('copy')
      .tap(args => {
        args[0].push({
          from: path.join(__dirname, './node_modules/@simonknittel/components/dist/components/assets'),
          to: path.join(__dirname, './dist/assets'),
          toType: 'dir'
        })

        return args
      })
  },

  configureWebpack: {
    resolve: { symlinks: false } // https://github.com/webpack/webpack/issues/1866#issuecomment-284571531
  },

  pluginOptions: {
    apollo: {
      lintGQL: true
    }
  }
}
