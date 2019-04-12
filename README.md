# Proyecto Data Lover 2.0 - Potter

Bienvenida a tu tercer proyecto del common core.

En este proyecto **construirás una _página web_ para visualizar un _conjunto (set) de datos_ de los personajes del mundo de Harry Potter**.

## Consideraciones generales del proyecto

* Aplicar y profundizar todo lo que aprendiste tanto en la planificación como en la parte técnica en los proyectos **cipher y data-lovers**.

* Este proyecto se debe resolver de manera individual bajo la **planificación Agile** utilizando **Scrum** (sprint, historias de usuario, definición de terminado, criterios de aceptación, daily, retrospectivas).

* El tiempo para presentar este proyecto es de 3 sprint:
  * **1er Sprint : 12/04 al 17/04** - Definiciones de Terminado y Criterios de Aceptación definidos con feedback incorporado, inicio de la implementación de la primera historia de usuario.
  * **2do Sprint : 22/04 al 26/04** - Demo, peer feedback y retro planning.
  * **3er Sprint : 29/04 al 03/05** - Demo, peer feedback, final de proyecto.

* Te daremos las historias de usuario con el fin de presentarte los requerimientos y funcionalidades que desea el usuario final.

* Debes planificarte usando las definiciones de terminado y los criterios de aceptación por cada historia de usuario. Esto te ayudará a determinar **qué hacer** en el sprint y **cómo se realizará**.

## Objetivos de aprendizaje

El objetivo principal de este proyecto es que afiances tu aprendizaje practicando la planificación *Agile* utilizando *Scrum* con el fin de que logres, en el tiempo indicado, implementar una interfaz web donde se pueda visualizar y manipular data de los personajes del mundo de Harry Potter utilizando arreglos y objetos con JavaScript.

Dicho en palabras sencillas, aprenderás:

### A nivel de planificación

* Escribir y trabajar las Definiciones de terminado (_definition of done_) y Criterios de Aceptación por cada historia de usuario como herramienta central de la organización y planificación de tu trabajo.

* Planificar, ejecutar y presentar tu proyecto dentro del tiempo indicado por sprint.

### A nivel de HTML

* Utilizar etiquetas semánticas de HTML5.
* Validar que tu marcado HTML esté correctamente implementado a través del [validador de html](https://validator.w3.org/).

### A nivel de CSS3

* Apliques y refuerces los conceptos base de CSS3 tales como: modelo de cajas, posicionamiento (float, absolute, relative, fixed), etc.
* Implementar selectores de clase evitando la redundancia de reglas de estilo en CSS3.
* Utilizar `media-queries` para lograr un diseño responsivo `mobile first`.
* Que puedas implementar un sistema de grillas básico que te permita crear un diseño adaptativo para **mobile, tablet y desktop**

### A nivel de JavaScript

* Cargar la data de un archivo **.json** con **fetch**.
* Manipular **_arreglos_ (_arrays_) y _objetos_ (_objects_)**.
* **Manipular el DOM** (agregar elementos dinámicamente basados en la data).
* **Manejar eventos del DOM** para permitir interacción con el usuario (mostrar, filtrar, ordenar, ...).
* **Implementar y comprender la importancia de escribir tests en tu proyecto utilizando jest**.

## Consideraciones técnicas a tomar en cuenta

### Planificación (Agile - Scrum)

* Deberás plasmar en un archivo de **Google Docs** las definiciones de terminado y criterios de aceptación por cada historia de usuario.

* Utiliza esta guía para que puedas avanzar, pide feedback a tus coaches, de manera que puedas contemplar en cada definición de terminado todos los puntos que son objetivos de aprendizaje en este proyecto (por ejemplo, no dejar los test al final).

* En la medida de lo posible, termina una historia de usuario antes de pasar a la siguiente (cumple con Definición de Terminado  y Criterios de Aceptación) contemplando todos los puntos que son objetivos de aprendizaje en este proyecto.

### Visualmente (HTML5 y CSS3)

Para este proyecto te daremos un layout (diseño) el cual deberás replicar de manera exacta utilizando **HTML5** y **CSS3**. A continuación describimos los archivos que utilizarás.

#### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`, en este archivo va la página que se mostrará al usuario y donde utilizando etiquetas semánticas de HTML5 replicarás el diseño propuesto para este proyecto.

#### `src/style.css`

Aquí escribirás todas las reglas de estilo, tus selectores de clases, definirás tus media-queries de manera que puedas lograr que tu proyecto se vea hermoso como el diseño propuesto.
**No está permitido el uso de frameworks de CSS3 (Bootstrap), realmente queremos que refuerces las bases en CSS3 con este proyecto**

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

* El usuario requiere poder visualizar a todos los personajes de la pelicula de Harry Potter indicando por cada uno de ellos:

  * La imagen del personaje.
  * nombre del actor que representa al personaje.
  * nombre del personaje.
  * la especie del personaje.
  * casa a la que pertenece el personaje.
  * la imagen de la insignia de la casa a la que pertenece ese personaje, si fuese el caso.
  * año de nacimiento del personaje.
  * si es estudiante de hogwarts.
  * Si es parte del staff (director, maestro, etc) de hogwarts.

* El usuario requiere poder filtrar a los personajes de la pelicula de Harry Potter **Por Casas**, **Por género** **Por status estudiante de hogwart o staff**

* El usuario requiere poder ordenar la visualización de los personajes de la pelicula de Harry Potter, de manera ascendente o descendente considerando la edad actual del personaje.