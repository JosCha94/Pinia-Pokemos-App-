<script setup>
// import axios from "axios";
// import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";
import { useFavoritosStore } from "@/store/favoritos";

const { data, loading, getData, errorData } = useGetData();

const router = useRouter();
const route = useRoute();
const useFavoritos = useFavoritosStore();

const {agrega, buscaPoke} = useFavoritos

const retro = () => {
  router.push("/pokemons");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Cargando información ...</p>
  <div class="alert alert-danger mt-3" v-if="errorData">No existe ese pokemon</div>
  <div v-if="data">
    <img :src="data.sprites?.front_default" alt="data.name" />
    <h2>pokemon: {{ $route.params.name }}</h2>
  </div>
  <button class="btn btn-outline-success my-2"
  :disabled="buscaPoke(data.id)"
  @click="agrega(data)">Agregar Favoritos</button>
  <br/>
  <button class="btn btn-outline-success" @click="retro">Regresar</button>
    
</template>
