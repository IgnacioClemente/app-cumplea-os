import moment from "moment";
const fechaCumple = document.querySelector('#fecha_cumple');
const buton = document.querySelector('#buton_cumple');
const resultado = document.querySelector('#resultado');

const calcularEdad = (fecha) => {
  const fechaActual = moment();
  const fecha_cumple = moment(fecha,'YYYY-MM-DD')
  const edad = fechaActual.diff(fecha_cumple,'years');
  return edad;
}
buton.addEventListener('click',()=>{
  resultado.innerText = calcularEdad(fechaCumple.value)
});