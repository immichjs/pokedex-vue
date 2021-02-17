<template>
    <div class="card" @click="changeImage">
        <img class="pokemon-image" :src="currentImage">
        <div class="container">
        <h1>{{ id }} - {{ name | upper }}</h1>
        <p>{{ pokemon.type }}</p> 
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    created() {
        axios.get(this.url).then(response => {
            this.pokemon.type = response.data.types[0].type.name
            this.pokemon.front = response.data.sprites.front_default
            this.pokemon.back = response.data.sprites.back_default
            this.currentImage = this.pokemon.front
        })
    },
    data() {
        return {
            isFront: true,
            currentImage: '',
            pokemon: {
                type: '',
                front: '',
                back: ''
            }
        }
    },
    props: {
        id: Number,
        name: String,
        url: String
    },
    filters: {
        upper(value) {
            let newName = value[0].toUpperCase() + value.slice(1)
            return newName
        }
    },
    methods: {
        changeImage() {
            if (this.isFront) {
                this.isFront = false
                this.currentImage = this.pokemon.back
            } else {
                this.isFront = true
                this.currentImage = this.pokemon.front
            }
        }
    },
}
</script>

<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width: 10%;
        cursor: pointer;
        box-sizing: border-box;
    }

    .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    .container {
    padding: 2px 16px;
    }
    
    .pokemon-image {
        width: 100%;
    }
</style>