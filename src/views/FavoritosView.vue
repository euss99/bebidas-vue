<script setup>
import { useFavoritosStore } from "../stores/favoritos";
import Receta from "../components/Receta.vue";

const favoritos = useFavoritosStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas Favoritas</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-10 gap-10">
    <Receta
      v-for="receta in favoritos.favoritos"
      :key="receta.idDrink"
      :receta="receta"
    />
  </div>
</template>
