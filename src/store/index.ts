import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import pokemon from "./pokemon";
import trainer from "./trainer";
import type from "./type";

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pokemon,
    trainer,
    type
  }
})
