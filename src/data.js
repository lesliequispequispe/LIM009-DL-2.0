/* Manejo de data */
/* const example = () => {
  return 'example';
};
window.example = example; */
/* const ordenadoAscendente = (data) => {
  let arrOrdenadoAsc = [];
  arrOrdenadoAsc = data.sort(
    (a, b) => {
      let aa = parseInt(a.yearOfBirth);
      let bb = parseInt(b.yearOfBirth);
      if (aa < bb) {
        return -1;
      } else if (aa > bb) {
        return 1;
      } else {
        return 0;
      }
    })
  return arrOrdenadoAsc;
}

window.ordenadoAscendente = ordenadoAscendente; */

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
