import { ref, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { useModalStore } from "./modal";

export const useFavoritosStore = defineStore("favoritos", () => {
  const bebidas = useBebidasStore();
  const modal = useModalStore();
  const favoritos = ref([]);

  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem("favoritos")) ?? [];
  });

  watch(
    favoritos,
    () => {
      sincronizarLocalStorage();
    },
    { deep: true }
  );

  function sincronizarLocalStorage() {
    localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
  }

  function existeFavorito(id) {
    const favoritosLS = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    return favoritosLS.some((favorito) => favorito.idDrink === id);
  }

  function handleClickFavorito() {
    if (existeFavorito(bebidas.receta.idDrink)) {
      console.log("Ya existe...");
    } else {
      favoritos.value.push(bebidas.receta);
      modal.handleClickModal();
    }
  }

  return {
    favoritos,
    existeFavorito,
    handleClickFavorito,
  };
});
