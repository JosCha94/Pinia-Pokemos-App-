import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([])

    if (localStorage.getItem("favoritos")) {
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"));
    }


    const agrega = (poke) => {
        favoritos.value.push(poke)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
    };
    
    const elimina = (id) => {
        favoritos.value = favoritos.value.filter((item) => item.id !== id);
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
    };

    const buscaPoke = (id) =>
        favoritos.value.find((item) => item.id === id);



    return {
        favoritos,
        agrega,
        elimina,
        buscaPoke
    }
})