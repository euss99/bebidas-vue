<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useBebidasStore } from "../stores/bebidas";
import { useNotificacionStore } from "../stores/notificacion";
import Logo from "../../public/img/logo.svg";
import Formulario from "./Formulario.vue";

const bebidas = useBebidasStore();
const notificacion = useNotificacionStore();

const route = useRoute();
const paginaInicio = computed(() => route.name === "inicio");

const handleSubmit = () => {
  if (Object.values(bebidas.busqueda).includes("")) {
    notificacion.$patch({
      texto: "Todos los campos son obligatorios",
      error: true,
      mostrar: true,
    });
    return;
  }

  bebidas.obtenerRecetas();
};
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
        <nav class="flex gap-4 text-white">
          <RouterLink
            class="uppercase font-bold"
            :to="{ name: 'inicio' }"
            active-class="text-orange-500"
          >
            Inicio
          </RouterLink>
          <RouterLink
            class="uppercase font-bold"
            :to="{ name: 'favoritos' }"
            active-class="text-orange-500"
          >
            Favoritos
          </RouterLink>
        </nav>
      </div>

      <Formulario
        v-if="paginaInicio"
        :categorias="bebidas.categorias"
        v-model:nombre="bebidas.busqueda.nombre"
        v-model:categoria="bebidas.busqueda.categoria"
        @handle-submit="handleSubmit"
      />
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
