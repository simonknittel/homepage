import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pristine: true,
    locale: 'en'
  },
  mutations: {
    setLocale (state, payload) {
      state.locale = payload
      state.pristine = false
      throw new Error('foo ' + process.env.VUE_APP_SENTRY_RELEASE)
    }
  },
  actions: {

  }
})
