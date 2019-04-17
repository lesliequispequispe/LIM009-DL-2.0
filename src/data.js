/* Manejo de data */
/* const example = () => {
  return 'example';
};
window.example = example; */
const ordenadoAscendente = (data) => {
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

window.ordenadoAscendente = ordenadoAscendente;

const filtroGenero = (data, condicion) => {
  let arrFiltroGenero = [];
  arrFiltroGenero = data.filter((aa) =>
    aa.gender === condicion);
  return arrFiltroGenero;
}

window.filtroGenero = filtroGenero;

