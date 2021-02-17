<template>
  <div id="app">
    <header class="header">
      <img src="./assets/pokedex-logo.webp" alt="">
      <input class="search" type="text" placeholder="Buscar pokemon" v-model="search">
    </header>
    <hr>
    <div class="container-box">
      <div v-for="(poke) in searchResult" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url"/>
      </div>
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

<style lang="postcss" scoped>
  .header {
    @apply grid justify-center flex-wrap;
  }

  .header img {
    @apply w-40 justify-self-center mt-3;
  }

  .search {
    @apply p-3.5 rounded-md border w-80 my-3 flex text-center;
    outline: none;
  }

  .search::placeholder {
    @apply font-medium;
  }

  hr {
    @apply my-2;
  }

  .container-box {
    @apply flex flex-wrap mx-40 justify-center;
  }
</style>