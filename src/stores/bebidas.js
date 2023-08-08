import { ref, reactive, onMounted } from "vue";
import { defineStore } from "pinia";
import APIServices from "../services/APIServices";

export const useBebidasStore = defineStore("bebidas", () => {
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: "",
    categoria: "",
  });

  onMounted(async function () {
    try {
      const {
        data: { drinks },
      } = await APIServices.obtenerCategorias();

      categorias.value = drinks;
    } catch (error) {
      console.log(error);
    }
  });

  function obtenerRecetas() {
    console.log("Consultando API...");
  }

  return {
    categorias,
    busqueda,
    obtenerRecetas,
  };
});
