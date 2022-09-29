let palabritas;
let fallos = 0;
let acierto = 0;
const juego = document.querySelector(".juego");
const menu = document.querySelector(".menu");
const ResultJuego = document.querySelector(".resultado");

//boton de obtener letra
const btn = id("btnObtener");
//click en obtener letra
btn.addEventListener("click", obtener);
//fin del boton
const imagen = id("imagen");
const imgResultado = id("result");
const btn_teclado = document.querySelectorAll(".key button");

const palabras = [
  "GOKU",
  "VEGUETA",
  "PICCOLO",
  "GOHAN",
  "KRILLIN",
  "GOTEN",
  "TRUNKS",
  "BULMA",
  "BILLS",
  "WISS",
  "BROLYN",
  "JIREN",
];

//funcion para ocultar menu y mostrar el juego
function iniciarJuego() {
  menu.style.display = "none";
  juego.style.display = "block";
  obtener();
  gameOver();
}
//funcion para volver al inicio
function Volver() {
  juego.style.display = "none";
  ResultJuego.style.display = "none";
  menu.style.display = "flex";
}

function obtener(event) {
  imagen.src = "src/fas1.png";
  btn.disabled = true;
  fallos = 0;
  acierto = 0;
  const parrafo = id("lineas");
  parrafo.innerHTML = "";
  const cant_palabras = palabras.length;
  const valor_azar = obtenerRandom(0, cant_palabras);
  palabritas = palabras[valor_azar];
  const cant_letras = palabritas.length;

  for (let i = 0; i < btn_teclado.length; i++) {
    btn_teclado[i].disabled = false;
  }
  for (let i = 0; i < cant_letras; i++) {
    const span = document.createElement("span");
    parrafo.appendChild(span);
  }
}

//click adivinar letra
for (let i = 0; i < btn_teclado.length; i++) {
  btn_teclado[i].addEventListener("click", click_teclado);
}

function click_teclado(event) {
  const spans = document.querySelectorAll("#lineas span");
  const boton = event.target; // cual de todas las letras, llamo a la funcion
  boton.disabled = true;
  const letra = boton.innerHTML.toUpperCase();
  const palabra = palabritas.toUpperCase();

  let acerto = false;
  for (let i = 0; i < palabra.length; i++) {
    if (letra == palabra[i]) {
      //la variable i es la posición de la letra en la palabra que coincide con el span .
      spans[i].innerHTML = letra;
      acierto++;
      acerto = true;
    }
  }
  //si los acerto siguen fallando las imagen se agregara
  if (acerto == false) {
    fallos++;
    const source = `src/fas${fallos}.png`;
    imagen.src = source;
  }

  if (fallos == 13) {
    ResultJuego.style.display = "block";
    id("TxtResultado").style.color = "#fa2f2f";
    id("TxtResultado").innerHTML = "Perdiste";
    id("TxtPalabra").innerHTML = "la palabra era " + palabritas;
    imgResultado.src = "src/loss.png";
    gameOver();
  } else if (acierto == palabritas.length) {
    ResultJuego.style.display = "block";
    id("TxtResultado").style.color = "#fdc02e";
    id("TxtResultado").innerHTML = "¡Ganaste!";
    id("TxtPalabra").innerHTML = " ";
    imgResultado.src = "src/win.png";
    gameOver();
  }
}

// fin del juego
function gameOver() {
  for (let i = 0; i < btn_teclado.length; i++) {
    btn_teclado[i].disabled = true;
  }
  btn.disabled = false;
}

gameOver();
// obtener();//funcion para cargar las letras al principio
