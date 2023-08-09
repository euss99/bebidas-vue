import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { useFavoritosStore } from "./favoritos";

export const useModalStore = defineStore("modal", () => {
  const favoritos = useFavoritosStore();
  const bebidas = useBebidasStore();
  const modal = ref(false);

  function handleClickModal() {
    modal.value = !modal.value;
  }

  const textoBoton = computed(() => {
    return favoritos.existeFavorito(bebidas.receta.idDrink)
      ? "Eliminar de favoritos"
      : "Agregar a favoritos";
  });

  return {
    modal,
    textoBoton,
    handleClickModal,
  };
});
