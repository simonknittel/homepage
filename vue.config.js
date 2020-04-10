const path = require('path')

process.env.VUE_APP_TRAVIS_COMMIT = process.env.TRAVIS_COMMIT

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

  pluginOptions: {
    apollo: {
      lintGQL: true
    }
  }
}
