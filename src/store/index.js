
import Vue from "vue"
import Vuex from "vuex"

import persons from "./persons"

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { persons }
})

export default store
