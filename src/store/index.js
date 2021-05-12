import Vue from 'vue'
import Vuex from 'vuex'

import { api } from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
  },
  getters: {
    pokemons: state => state.pokemons,
  },
  actions: {
    async getPokemons ({ commit }) {
      const response = await api.get('/pokemon', {
        params: {
          limit: 151,
          offset: 0
        }
      }).then(response => response.data)

      commit('SET_POKEMONS', response.results)
    }
  },
  mutations: {
    SET_POKEMONS: (state, payload) => state.pokemons = payload,
  }
})
