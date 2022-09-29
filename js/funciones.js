//funcion para seleccionar id
function id(str) {
  return document.getElementById(str);
}

//funcion para obtener una palabra random
function obtenerRandom(num_min, num_max) {
  const amplitud_valores = num_max - num_min; //valor mas alto - valor mas bajo del random
  const valor_azar = Math.floor(Math.random() * amplitud_valores) + num_min;
  return valor_azar;
}
