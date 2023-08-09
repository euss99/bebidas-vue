import { ref, watch, onMounted, computed } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";
import { useModalStore } from "./modal";
import { useNotificacionStore } from "./notificacion";

export const useFavoritosStore = defineStore("favoritos", () => {
  const bebidas = useBebidasStore();
  const modal = useModalStore();
  const notificacion = useNotificacionStore();
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

  const noFavoritos = computed(() => {
    return favoritos.value.length === 0;
  });

  function sincronizarLocalStorage() {
    localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
  }

  function existeFavorito() {
    const favoritosLS = JSON.parse(localStorage.getItem("favoritos")) ?? [];
    return favoritosLS.some(
      (favorito) => favorito.idDrink === bebidas.receta.idDrink
    );
  }

  function agregarFavorito() {
    favoritos.value.push(bebidas.receta);

    notificacion.handleClickNotificacion();
    notificacion.texto = "Se agregó a favoritos";
  }

  function eliminarFavorito() {
    favoritos.value = favoritos.value.filter(
      (favorito) => favorito.idDrink !== bebidas.receta.idDrink
    );

    notificacion.handleClickNotificacion();
    notificacion.texto = "Se eliminó de favoritos";
  }

  function handleClickFavorito() {
    if (existeFavorito()) {
      eliminarFavorito();
    } else {
      agregarFavorito();
    }
    modal.handleClickModal();
  }

  return {
    favoritos,
    noFavoritos,
    existeFavorito,
    handleClickFavorito,
  };
});
