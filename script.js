const horas = document.querySelector('#horas');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

const relogio = setInterval(function time() {
  let datahoje = new Date();
  let hora = datahoje.getHours();
  let minuto = datahoje.getMinutes();
  let segundo = datahoje.getSeconds();

  if (hora < 10) hr = '0' + hora;
  if (minuto < 10) min = '0' + minuto;
  if (segundo < 10) sec = '0' + segundo;

  horas.textContent = hora;
  minutos.textContent = minuto;
  segundos.textContent = segundo;
})
