<script setup>
import { useFavoritosStore } from "@/store/favoritos";
import { storeToRefs } from "pinia";

const useFavoritos = useFavoritosStore();

const { favoritos } = storeToRefs(useFavoritos);
const { elimina } = useFavoritos;
</script>

<template>
  <main>
    <h2 class="text-center my-2">Favoritos</h2>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul class="list-group" v-else>
      <li class="list-group-item" v-for="poke in favoritos" :key="poke.id">
        <div>
          {{ poke.name }}
        </div>
        <div>
          <router-link
            class="btn btn-sm btn-outline-primary m-2"
            :to="`/pokemons/${poke.name}`"
          >
            Más info
          </router-link>
          <button
            class="btn btn-sm btn-outline-danger"
            @click="elimina(poke.id)"
          >
            Eliminar
          </button>
        </div>
      </li>
    </ul>
  </main>
</template>
