// alert("hola")
var botonOrigen = document.getElementById('origen');
var botonExtincion = document.getElementById('extincion');
var botonFotos = document.getElementById('fotos');

var p01 = document.getElementById('p01');

function quitarP(){
  p01.style.display = "none";
}

function ponerP(){
  p01.style.display = "block";
}

botonOrigen.addEventListener("click", quitarP);
botonOrigen.addEventListener("click", quitarP);
