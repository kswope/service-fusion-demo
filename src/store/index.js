
import Vue from "vue"
import Vuex from "vuex"

import persons from "./persons"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    persons: { namespaced: true, ...persons }
  }
})

export default store
