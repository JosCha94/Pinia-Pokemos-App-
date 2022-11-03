<script>
import axios from "axios";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const retro = () => {
  router.push("/pokemons");
};
</script>
<template>
  <h1>404</h1>
  <RouterLink to="/">
    <button class="btn btn-outline-success">Regresar</button>
  </RouterLink>
</template>
