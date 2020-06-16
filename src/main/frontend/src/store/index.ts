import Vue from 'vue'
import Vuex from 'vuex'
import {World} from "@/types";

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    world: {},
    biomes: []
  },
  mutations: {
    SET_BIOMES(state, biomes) {
      state.biomes = biomes
    },
    SET_WORLD(state, world) {
      state.world = world
    },
  },
  actions: {},
  modules: {}
})
