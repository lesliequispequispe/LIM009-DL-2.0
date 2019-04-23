/* Manejo del DOM */
const cargarJSON = () => {
  fetch("./data/potter.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      pintadoContenedor.innerHTML = pintandoDataHarryPotter(data);

      const genero = document.getElementById("genero");
      genero.addEventListener("change", () => {
        pintadoContenedor.innerHTML = pintandoDataHarryPotter(filtroGenero(data, genero.value));
      });

      const rol = document.getElementById("rol");

      rol.addEventListener("change", (ee) => {
        if (ee.target.value === "hogwartsStudent") {
          pintadoContenedor.innerHTML = pintandoDataHarryPotter(window.filtroRolStudents(data, true));
        } else if (ee.target.value === "hogwartsStaff") {
          pintadoContenedor.innerHTML = pintandoDataHarryPotter(window.filtroRolStaff(data, true));
        }
      });

      const casa = document.getElementById("casa");
      casa.addEventListener("change", () => {
        pintadoContenedor.innerHTML = pintandoDataHarryPotter(filtroCasa(data, casa.value));
      });

      const ascendente = document.getElementById("ascendente");
      ascendente.addEventListener("click", () => {
        pintadoContenedor.innerHTML = pintandoDataHarryPotter(ordenadoAscendente(data));
        const descendente = document.getElementById("descendente");
        descendente.addEventListener("click", () => {
          pintadoContenedor.innerHTML = pintandoDataHarryPotter(ordenadoAscendente(data).reverse());
        });
      });
      calcularEdad(data[0].yearOfBirth);
      
      calcularEdadActualParaTodos(data);
    });
};
cargarJSON();
const pintadoContenedor = document.getElementById("output");
const pintandoDataHarryPotter = (data) => {
  let pintado = "";
  for (let i = 0; i < data.length; i++) {
    pintado += `
      <div class="contenedor-pintado">
        <div>
          <img  class="imagenes" src="${data[i].image}" alt="${data[i].image}"/>
        </div>
        <div>
          <p>name:${data[i].name}</p>
          <p>actor:${data[i].actor}</p>
          <p>species:${data[i].species}</p>
          <p>house:${data[i].house}</p>
          <p>dateOfBirth:${data[i].dateOfBirth}</p>
          <p>yearOfBirth:${data[i].yearOfBirth}</p>
          <p>hogwartsStudent:${data[i].hogwartsStudent}</p>
          <p>hogwartsStaff:${data[i].hogwartsStaff}</p>
          <p>edadActual:${data[i].edadActual}</p>
        </div>
      </div>
    `;
  }
  return pintado;
};

const calcularEdadActualParaTodos = (data, anioNacimientoDeTodaData) => {
   let anioActual = new Date().getFullYear();
   let resultadoEdadParaTodos = 0;
  for (let i = 0; i < data.length; i++) {
    anioNacimientoDeTodaData = (data[i].yearOfBirth);
    resultadoEdadParaTodos = (anioActual - anioNacimientoDeTodaData);
    data.edadActual = resultadoEdadParaTodos;
    console.log(data.edadActual = resultadoEdadParaTodos);
  }
};