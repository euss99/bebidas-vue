<script setup>
import { computed } from "vue";
import Logo from "../../public/img/logo.svg";
import { useRoute, RouterLink } from "vue-router";
import Formulario from "./Formulario.vue";

const route = useRoute();
const paginaInicio = computed(() => route.name === "inicio");
</script>

<template>
  <header class="bg-slate-800" :class="{ header: paginaInicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink :to="{ name: 'inicio' }">
            <img class="w-32" :src="Logo" alt="Logotipo" />
          </RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
            :to="{ name: 'inicio' }"
          >
            Inicio
          </RouterLink>
          <RouterLink
            class="text-white uppercase font-bold"
            active-class="text-orange-500"
            :to="{ name: 'favoritos' }"
          >
            Favoritos
          </RouterLink>
        </nav>
      </div>

      <Formulario v-if="paginaInicio" />
    </div>
  </header>
</template>

<style>
.header {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
}
</style>
