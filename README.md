# Proyecto Data Lover 2.0 - Potter

Bienvenida a tu tercer proyecto del common core.
En este proyecto **construirás una _página web_ para visualizar un
_conjunto (set) de datos_ de los personajes de la película de Harry Potter** manipulando dichos datos a través de arreglos y objetos en JavaScript.

## Consideraciones generales del proyecto

* Aplicar y profundizar todo lo que aprendiste tanto en la planificación como en la parte técnica en los proyectos **cipher y data-lovers** .

* Este proyecto se debe resolver de manera individual bajo la planificación agile utilizando scrum (sprint, historias de usuario, definición de terminado, criterios de aceptación, daily, retrospectivas).

* Tiempo para completarlo: Toma como referencia 3 sprints.

* Te daremos las historias de usuario con el fin de presentarte los requerimientos y funcionalidades que desea el usuario final.

* Debes planificarte usando las definiciones de terminado y los criterios de aceptación por cada historia de usuario, te ayudarán a determinar **qué hacer** en el sprint y **cómo se realizará**.

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que afiances tu aprendizaje practicando la planificación agile utilizando scrum con el fin de que logres, en el tiempo indicado, implementar una interfaz web donde se pueda visualizar y manipular data de los personajes de la pelicula de Harry Potter utilizando arreglos y objetos en JavaScript.

Dicho en palabras sencillas, aprenderás:

### A nivel de planificación

* Escribir y trabajar las definiciones de terminado (_definition of done_) y Criterios de Aceptación por cada historia de usuario como herramienta central de la organización y planificación de tu trabajo.

* Planificar, ejecutar y presentar tu proyecto dentro del tiempo indicado por sprint.

### A nivel de HTML

* Utilizar etiquetas semánticas de HTML5.
* Validar que tu marcado HTML esté correctamente implementado a través del [validador de html](https://validator.w3.org/)

### A nivel de CSS

* Implementar selectores de clase.
* Utilizar medias queries para lograr diseño responsive - **mobile first**.

### A nivel de JavaScript

* Cargar la data de un archivo **.json** con **fetch**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario (mostrar, filtrar, ordenar, ...).
* **Implementar y comprender la importancia de escribir test en tu proyecto utilizando jest**.

## Consideraciones técnicas

### Planificación (Agile - Scrum)

### Visualmente (HTML5 y CCS3)

#### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

#### `src/style.css`

### Funcionalmente (JavaScript - ES6)

La lógica del proyecto debe estar implementada completamente en JavaScript (ES6). En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
No se debe utilizar la _pseudo-variable_ `this`.
A continuación indicamos que harás en cada archivo JavaScript.

#### `src/main.js`

En este archivo escibirás todo el código que tenga que ver con mostrar los datos en la pantalla. Con esto nos referimos básicamente a la interacción con el DOM. Operaciones como seleccionar, crear y manipular elementos del DOM y registro de manejadores de eventos (_event listeners_ o _event handlers_).

#### `src/data.js`

En este archivo escribirás todo el código que contenga las funcionalidades que desea el usuario final descritas en **las historias de usuario**.
Estas funciones, que representan lo que el usuario quiere, deben ser [_funciones puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d) e independientes del DOM.

#### `src/data`

En esta carpeta encontrarás un archivo con la extensión `.json` que utilizarás para cargar la data de los personajes de la película de Harry Potter utilizando [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

#### `test/data.spec.js`

En este archivo tendrás que completar las pruebas unitarias de las funciones implementadas en el archivo `data.js` utilizando **Jest**.
Tus Pruebas Unitarias deben dar una cobertura (coverage) del 70% de _statements_ (_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_ (_ramas_).
Ayudará mucho que realmente hayas implementando en el archivo `data.js` **funciones puras**

## Historias de Usuario

* El usuario requiere poder visualizar a todos los personajes de la pelicula de Harry Potter indicando por cada uno de ellos :
  * La imagen del personaje,
  * nombre del actor que representa al pesonaje,
  * nombre del personaje,
  * casa a la que pertenece, si el personaje pertenece a una casa.
  * la imagen de la insignia de la casa a la que pertenece ese personaje, si fuese el caso.
  * año de nacimiento del personaje.
  * si es estudiante de hogwarts.
  * Si es parte del staff (director, maestro, etc) de hogwarts.

* El usuario requiere poder filtrar a los personajes de la pelicula de Harry Potter **Por Casas**, **Por género** **Por status estudiante de hogwart**, y **Por status staff de hogwart**

* El usuario requiere poder ordenar la visualización de los personajes, de manera ascendente o descendente considerando la edad actual del personaje.