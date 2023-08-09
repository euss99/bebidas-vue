import { ref, watchEffect } from "vue";
import { defineStore } from "pinia";

export const useNotificacionStore = defineStore("notificacion", () => {
  const texto = ref("");
  const error = ref(false);
  const mostrar = ref(false);

  watchEffect(() => {
    if (mostrar.value) {
      setTimeout(() => {
        texto.value = "";
        error.value = false;
        mostrar.value = false;
      }, 2000);
    }
  });

  function handleClickNotificacion() {
    mostrar.value = !mostrar.value;
  }

  return { texto, error, mostrar, handleClickNotificacion };
});
