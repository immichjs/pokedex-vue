<template>
  <div id="app">
    <header class="header">
      <img src="../public/pokedex-icon.webp" />
      <input
        class="search"
        type="text"
        placeholder="Buscar Pokemon"
        v-model="search"
      />
    </header>

    <div class="container-box">
      <div v-for="poke in searchPokemons" :key="poke.url">
        <Pokemon :name="poke.name" :url="poke.url" />
      </div>
    </div>
  </div>
</template>

<script>
import Pokemon from './components/Pokemon';
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
      Pokemon,
  },
  data() {
    return {
      search: '',
    };
  },
  created() {
    this.getPokemons
  },
  computed: {
    ...mapGetters({
      pokemons: 'pokemons'
    }),
    ...mapActions(['getPokemons']),
    searchPokemons () {
      return this.search == '' || this.search =='  '
        ? this.pokemons
        : this.pokemons.filter(pokemon => pokemon.name.match(this.search))
    }
  },
};
</script>

<style lang="postcss">
.header {
  @apply flex justify-center flex-wrap gap-10 bg-gray-700 mb-3;
  box-shadow: 0 2px 5px -5px rgba(0, 0, 0, 0.2);
}

.header img {
  @apply w-20 justify-self-center my-3;
}

.search {
  @apply p-3.5 rounded-md border w-80 my-3 flex text-center self-center;
  outline: none;
}

.search::placeholder {
  @apply font-medium;
}

.container-box {
  @apply flex flex-wrap mx-20 justify-center mb-3;
}

@media only screen and (max-width: 1024px) {
  .container-box {
    @apply mx-9;
  }
}

@media only screen and (max-width: 500px) {
  .header {
    @apply gap-3;
  }

  .header img {
    @apply w-16;
  }

  .search {
    @apply w-60;
  }

  .container-box {
    @apply mx-0;
  }
}

@media only screen and (max-width: 315px) {
  .header img,
  .search {
    @apply my-0;
  }

  .header img {
    @apply mt-3;
  }

  .search {
    @apply mb-3;
  }
}
</style>
