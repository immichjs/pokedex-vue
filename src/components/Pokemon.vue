<template>
  <div class="card" @click="changeImage">
    <img class="pokemon-image" :src="currentImage" />
    <div class="container">
      <h1>{{ name | upper }}</h1>
      <span class="text-purple-700">{{ pokemon.type }}</span>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    axios.get(this.url).then((response) => {
      this.pokemon.type = response.data.types[0].type.name;
      this.pokemon.front = response.data.sprites.front_default;
      this.pokemon.back = response.data.sprites.back_default;
      this.currentImage = this.pokemon.front;
    });
  },

  data() {
    return {
      isFront: true,
      currentImage: '',
      pokemon: {
        type: '',
        front: '',
        back: '',
      },
    };
  },

  props: {
    name: String,
    url: String,
  },

  filters: {
    upper(value) {
      let newName = value[0].toUpperCase() + value.slice(1);
      return newName;
    },
  },

  methods: {
    changeImage() {
      if (this.isFront) {
        this.isFront = false;
        this.currentImage = this.pokemon.back;
      } else {
        this.isFront = true;
        this.currentImage = this.pokemon.front;
      }
    },
  },
};
</script>

<style lang="postcss">
.card {
  @apply cursor-pointer box-border duration-300 w-40 border m-1 rounded;
  box-shadow: 0 0 10px -8px rgba(0, 0, 0, 0.2);
}

.card:hover {
  @apply border-yellow-400 transform scale-105;
  box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.2);
}

.container {
  @apply bg-gray-100 text-center text-gray-700 font-medium py-1 px-4;
}

.pokemon-image {
  @apply w-full;
}

@media only screen and (max-width: 415px) {
  .card {
    @apply w-32;
  }
}
</style>
