/* Manejo de data */
/* const example = () => {
  return 'example';
};
window.example = example; */

const filtroGenero = (data, condicion) => {
  let arrFiltroGenero = [];
  arrFiltroGenero = data.filter((aa) =>
    aa.gender === condicion);
  return arrFiltroGenero;
};
window.filtroGenero = filtroGenero;

const filtroRolStaff = (data, condicion) => {
  let arrFiltroRol = [];
  arrFiltroRol = data.filter((bb) =>
    bb.hogwartsStaff === condicion);
  return arrFiltroRol;
};
window.filtroRolStaff = filtroRolStaff;

const filtroRolStudents = (data, condicion) => {
  let arrRolStudents = [];
  arrRolStudents = data.filter((cc) =>
    cc.hogwartsStudent === condicion);
  return arrRolStudents;
};
window.filtroRolStudents = filtroRolStudents;

const filtroCasa = (data, condicion) => {
  let arrFiltroCasa = [];
  arrFiltroCasa = data.filter((cc) =>
    cc.house === condicion);
  return arrFiltroCasa;
};
window.filtroCasa = filtroCasa;

const ordenadoAscendente = (data) => {
  let arrOrdenadoAsc = [];
  arrOrdenadoAsc = data.sort(
    (aaa, bbb) => {
      let aa = parseInt(aaa.yearOfBirth);
      let bb = parseInt(bbb.yearOfBirth);
      if (aa < bb) {
        return -1;
      } else if (aa > bb) {
        return 1;
      } else {
        return 0;
      }
    });
  return arrOrdenadoAsc;
};

window.ordenadoAscendente = ordenadoAscendente; 

const calcularEdad = (anioNacimiento) => {
  const anioActual = new Date().getFullYear();
  let resultadoEdad = anioActual - anioNacimiento;
};
 window.calcularEdad = calcularEdad;
/* const  edadActual = (data) => {
  let arrEdadActual = [];
  for (let i = 0; i < data.length; i++) {
    arrEdadActual.push(data[i].yearOfBirth)
    console.log(data[i].yearOfBirth);
  }
};
edadActual(); */
/* const edadActual = (fecha) => {
  let hoy = new Date();
  let cumpleaños = new Date(fecha);
  let edad = hoy.getFullYear() - cumpleaños.getFullYear();
  let m = hoy.getMonth() - cumpleaños.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleaños.getDate())) {
    edad--;
  }
  console.log(edad);
}
edadActual()
window.edadActual = edadActual; */