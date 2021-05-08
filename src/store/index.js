import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons: [],
    isFront: true,
    currentImage: '',
    pokemon: {
      type: '',
      front: '',
      back: '',
    },
  },
  getters: {
    pokemons: state => state.pokemons,
    isFront: state => state.isFront,
    currentImage: state => state.currentImage,
    pokemon: state => state.pokemon
  },
  mutations: {
    pokeMutation (state, payload) {
      return state.pokemons = payload
    },
    changeImage () {
      if (this.isFront) {
        this.isFront = false;
        this.currentImage = this.pokemon.back;
      } else {
        this.isFront = true;
        this.currentImage = this.pokemon.front;
      }
    },
  }
})
