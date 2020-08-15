import 'regenerator-runtime/runtime'

import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store.js'

/**
 * TODO: Not working until Webpack 5 lands in vue-cli: https://github.com/webpack/webpack/issues/6719
 * Using https://babeljs.io/docs/en/babel-plugin-syntax-import-meta didn't work
 */
// import { applyPolyfills, defineCustomElements } from '@simonknittel/components/loader'
import { applyPolyfills, defineCustomElements } from '@simonknittel/components/loader/index.cjs.js'
import { createProvider } from './vue-apollo'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://41376f858c454bc4951e9d45d0ccdc4f@o77506.ingest.sentry.io/5196082',
    integrations: [new Integrations.Vue({ Vue })],
    environment: process.env.VUE_APP_SENTRY_ENVIRONMENT,
    release: `${process.env.VUE_APP_SENTRY_PROJECT}@${process.env.VUE_APP_SENTRY_RELEASE}`
  })
}

Vue.config.productionTip = false

// Tell Vue to ignore all components defined in the @simonknittel/components
// package. The regex assumes all components names are prefixed
// 'sk'
Vue.config.ignoredElements = [/sk-\w*/]

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window)
})

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
