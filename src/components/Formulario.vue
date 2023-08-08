<script setup>
defineProps({
  categorias: {
    type: Array,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
});

defineEmits(["update:nombre", "update:categoria", "handle-submit"]);
</script>

<template>
  <form
    class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
    @submit.prevent="$emit('handle-submit')"
  >
    <div class="space-y-4">
      <label
        class="block text-white uppercase font-extrabold text-lg"
        for="ingrediente"
      >
        Nombre o Ingredientes
      </label>
      <input
        id="ingrediente"
        type="text"
        class="p-3 w-full rounded-lg focus:outline-none"
        placeholder="Nombre o Ingrediente: ej. Vodka, Tequila, Cafe, etc."
        :value="nombre"
        @input="$emit('update:nombre', $event.target.value)"
      />
    </div>
    <div class="space-y-4">
      <label
        class="block text-white uppercase font-extrabold text-lg"
        for="categoria"
      >
        Categoría
      </label>
      <select
        id="categoria"
        class="p-3 w-full rounded-lg focus:outline-none"
        :value="categoria"
        @input="$emit('update:categoria', $event.target.value)"
      >
        <option value="">-- Seleccione --</option>
        <option
          v-for="categoria in categorias"
          :key="categoria.strCategory"
          :value="categoria.strCategory"
        >
          {{ categoria.strCategory }}
        </option>
      </select>
    </div>

    <input
      type="submit"
      class="bg-orange-700 hover:bg-orange-800 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase"
      value="Bucar recetas"
    />
  </form>
</template>
