require('./src/styles/global.scss')

// https://stenciljs.com/docs/react
const { applyPolyfills, defineCustomElements } = require('@simonknittel/components/loader')
exports.onClientEntry = function() {
  applyPolyfills().then(() => {
    defineCustomElements()
  })
}
