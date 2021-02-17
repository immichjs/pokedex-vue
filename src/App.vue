<template>
  <div id="app">
    <img src="./assets/pokedex-logo.webp" alt="">
    <input type="text" placeholder="Buscar pokemon" v-model="search">
    <div v-for="(poke, index) in searchResult" :key="poke.url">
      <Pokemon :name="poke.name" :url="poke.url" :id="index + 1"/>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import Pokemon from './components/Pokemon'

export default {
  name: 'App',
  data() {
    return {
      pokemons: [],
      search: ''
    }
  },

  created() {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0').then(response => {
      console.log('Lista de pokemons concluído')
      this.pokemons = response.data.results
    })
  },

  components: {
    Pokemon
  },
  computed: {
    searchResult() {
      if (this.search == '' || this.search == ' ') {
        return this.pokemons
      } else {
        return this.pokemons.filter(pokemon => pokemon.name.match(this.search))
      }
    }
  }
}
</script>

<style lang="postcss">

</style>