/* Manejo del DOM */
const cargarJSON = () => {
    fetch("./data/potter.json")
      .then((res) =>  {
        return res.json();
      })
      .then((data) => {
        pintadoContenedor.innerHTML = pintandoDataHarryPotter(data);
        /* const ascendente = document.getElementById("ascendente");
          ascendente.addEventListener("click", () => { 
            pintadoContenedor.innerHTML = pintandoDataHarryPotter(ordenadoAscendente(data));
            const descendente = document.getElementById("descendente");
          descendente.addEventListener("click", () => { 
            pintadoContenedor.innerHTML = pintandoDataHarryPotter(ordenadoAscendente(data).reverse());
          })
        }) */
      })
    }
  cargarJSON();
  const pintadoContenedor = document.getElementById("output");
  const pintandoDataHarryPotter = (data) => {
  let pintado = "";
  for (let i = 0; i < data.length; i++) {
     pintado += `<div class="contenedor-pintado">
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
                  </div>
                  </div>`
  }
 return pintado;
}
window.pintandoDataHarryPotter = pintandoDataHarryPotter; 