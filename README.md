# Catálogo de Bebidas y Favoritos

Esta aplicación te permite explorar y buscar diferentes recetas de bebidas. Puedes buscar bebidas por nombre o ingrediente y categoría. Además, tienes la opción de guardar tus bebidas favoritas y verlas posteriormente en la página de favoritos. Durante el desarrollo de esta aplicación, se reforzaron conceptos como el uso de Pinia para gestionar estados globales, la conexión a una API utilizando Axios y siguiendo la arquitectura API REST, la implementación de Tailwind CSS y Headless para la creación de modales, y el uso de Heroicons y Vue Router para una experiencia de usuario completa.

## Funcionalidades Clave

- **Búsqueda de Bebidas**: Puedes buscar bebidas por nombre o ingrediente y categoría. Esto te permite encontrar recetas de tragos que se adapten a tus preferencias.

- **Exploración de Recetas**: Las recetas de las bebidas se presentan en tarjetas (cards) fáciles de visualizar. Puedes seleccionar cualquier trago para obtener más detalles.

- **Detalles del Trago**: Al seleccionar un trago, se muestra un modal con detalles como nombre, imagen, ingredientes y medidas. Además, puedes añadir el trago a tus favoritos desde aquí.

- **Favoritos**: Los tragos que marques como favoritos se guardan en una sección especial. Puedes visitar la página de favoritos para ver y administrar tus selecciones.

## Componentes Utilizados

- **Formulario**: El componente `Formulario` permite ingresar el nombre o ingrediente de una bebida y seleccionar una categoría para buscar recetas.

- **Header**: El componente `Header` contiene el navbar y el formulario de búsqueda. Facilita la navegación y la interacción del usuario con la aplicación.

- **Modal**: El componente `Modal`, creado utilizando Headless, muestra los detalles de una bebida seleccionada. Muestra el nombre, la imagen, los ingredientes y las medidas, y permite añadir la bebida a tus favoritos.

- **Notificacion**: El componente `Notificacion` se encarga de mostrar notificaciones al usuario, ya sea para informar que una acción se realizó con éxito o para alertar sobre errores o campos incompletos en el formulario.

- **Receta**: El componente `Receta` representa una tarjeta que se renderiza cuando se obtiene una respuesta de la API. Muestra la imagen y el nombre de la bebida, lo que permite al usuario explorar las diferentes opciones.

## Vistas (Views)

En la carpeta `views`, se encuentran las siguientes vistas:

- **InicioView**: La vista `InicioView` contiene el formulario de búsqueda y muestra las tarjetas de recetas utilizando el componente `Receta`. Aquí es donde los usuarios pueden explorar y buscar diferentes bebidas.

- **FavoritosView**: La vista `FavoritosView` muestra las tarjetas de recetas de las bebidas favoritas que el usuario ha seleccionado. Proporciona una forma de acceder rápidamente a las recetas preferidas.

## Estados Globales con Pinia

Se ha utilizado Pinia para gestionar estados globales en la aplicación. Esto facilita la comunicación y el intercambio de datos entre diferentes componentes, mejorando la eficiencia y la organización del código.

## Conexión a API y Arquitectura REST

La aplicación se conecta a la API de TheCocktailDB para obtener las recetas de bebidas. Se ha seguido la arquitectura REST para realizar peticiones a la API utilizando Axios. Esto permite obtener y mostrar información de manera eficiente y estructurada.

## Almacenamiento Local para Favoritos

Para garantizar que tus selecciones de bebidas favoritas no se pierdan, la aplicación utiliza `localStorage` para guardar esta información en el navegador del usuario. De esta manera, tus bebidas favoritas estarán disponibles incluso después de cerrar y volver a abrir la aplicación.

## Tailwind CSS y Headless para Modales

Se ha utilizado Tailwind CSS para estilizar la aplicación y crear una experiencia visual agradable. Además, se ha implementado Headless para la creación de modales, lo que permite un control más flexible sobre la apariencia y el comportamiento de los modales.

## Heroicons y Vue Router

Se han utilizado Heroicons para agregar iconos a la interfaz de usuario, mejorando la usabilidad y la estética. Además, Vue Router se ha implementado para permitir una navegación fluida entre diferentes páginas de la aplicación.

## Instalación y Uso

Para utilizar Bebidas-Vue en tu entorno local, sigue estos pasos:

1. Clona este repositorio: `git clone https://github.com/euss99/bebidas-vue.git`
2. Navega a la carpeta del proyecto: `cd bebidas-vue`
3. Instala las dependencias: `npm install`
4. Inicia el servidor de desarrollo: `npm run dev`
5. Abre tu navegador y visita: `http://localhost:5173`

¡Disfruta explorando y buscando deliciosas recetas de bebidas!
