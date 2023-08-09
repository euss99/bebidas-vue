import { ref, reactive, onMounted } from "vue";
import { defineStore } from "pinia";
import APIServices from "../services/APIServices";
import { useModalStore } from "./modal";

export const useBebidasStore = defineStore("bebidas", () => {
  const modal = useModalStore();
  const categorias = ref([]);
  const busqueda = reactive({
    nombre: "",
    categoria: "",
  });
  const recetas = ref([]);
  const receta = ref({});

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

  async function obtenerRecetas() {
    const {
      data: { drinks },
    } = await APIServices.buscarRecetas(busqueda);
    recetas.value = drinks;
  }

  async function seleccionarBebida(id) {
    const {
      data: { drinks },
    } = await APIServices.buscarReceta(id);
    receta.value = drinks[0];

    modal.handleClickModal();
  }

  return {
    categorias,
    busqueda,
    recetas,
    receta,
    obtenerRecetas,
    seleccionarBebida,
  };
});
