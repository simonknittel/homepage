import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { applyPolyfills, defineCustomElements } from '@simonknittel/components/loader'
import { createProvider } from './vue-apollo'

Sentry.init({
  dsn: 'https://41376f858c454bc4951e9d45d0ccdc4f@o77506.ingest.sentry.io/5196082',
  integrations: [new Integrations.Vue({ Vue })],
  environment: process.env.SENTRY_ENVIRONMENT || 'localhost'
})

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
