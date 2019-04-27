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
      pintadoContenedor.innerHTML = pintandoDataHarryPotter(nuevaDataPotter(data));
    });
};
cargarJSON();

const pintadoContenedor = document.getElementById("output");

const pintandoDataHarryPotter = (data) => {
  let pintado = "";
  for (let i = 0; i < data.length; i++) {
    pintado += `
    <div class="contenedor-pintado">
       <div class="imagenes">
         <img  class="imagenes" src="${data[i].image}" alt="${data[i].image}"/>
       </div>
       <div>
         <p>name:${data[i].name}</p>
         <p>actor:${data[i].actor}</p>
         <P>gender:${data[i].gender}</p>
         <p>species:${data[i].species}</p>
         <p>house:${data[i].house}</p>
         <p>dateOfBirth:${data[i].dateOfBirth}</p>
         <p>hogwartsStudent:${data[i].hogwartsStudent}</p>
         <p>hogwartsStaff:${data[i].hogwartsStaff}</p>
         <p>edadActual:${data[i].edadActual}</p>
         </div>
    </div>
 `;
  }
  return pintado;
};
const nuevaDataPotter = (data) => {
  let newData = []
  let fechaNacimientoTodaData = "";
  let anioActualTodaData = new Date().getFullYear();
  let resultadoEdadActualTodaData = "";
  for (let i = 0; i < data.length; i++) {
    let newObj = {}
    newObj.image = data[i].image,
      newObj.name = data[i].name,
      newObj.species = data[i].species,
      newObj.gender = data[i].gender,
      newObj.actor = data[i].actor,
      newObj.house = data[i].house,
      newObj.hogwartsStudent = data[i].hogwartsStudent,
      newObj.hogwartsStaff = data[i].hogwartsStaff,
      newObj.dateOfBirth = data[i].dateOfBirth,
      newObj.edadActual = resultadoEdadActualTodaData,
      fechaNacimientoTodaData = data[i].dateOfBirth;
    resultadoEdadActualTodaData = anioActualTodaData - fechaNacimientoTodaData;
    newObj.edadActual = parseInt(resultadoEdadActualTodaData);
    newData.push(newObj)
    console.log(newData);
  };
  return newData;
};