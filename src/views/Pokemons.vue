<script setup>
// import axios from "axios";
import { RouterLink } from "vue-router";
import { useGetData } from "@/composables/getData";

const { data, loading, getData, errorData } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <h1>Pokemons Composables</h1>
  <p v-if="loading">Cargando información ...</p>
  <div class = "alert alert-danger mt-3" v-if="errorData">{{ errorData }}</div>
  <div v-if="data">
    <ul class="list-group">
      <li
        class="list-group-item"
        v-for="poke in data.results"
        :key="poke.id"
      >
        <router-link :to="`/pokemons/${poke.name}`">
          {{ poke.name }}
        </router-link>
      </li>
    </ul>
    <div class="mt-3">
      <button
        :disabled="!data.previous"
        class="btn btn-warning mx-2"
        @click="getData(data.previous)"
      >
        Previo
      </button>
      <button
        :disabled="!data.next"
        class="btn btn-success"
        @click="getData(data.next)"
      >
        Siguiente
      </button>
    </div>
  </div>
</template>
