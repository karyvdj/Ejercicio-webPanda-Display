// alert("hola")
var botonExtincion = document.getElementById('extincion');
var botonFotos = document.getElementById('fotos');

var p02 = document.getElementById('p02');

function quitarP(){
  p02.style.display = "none";
}

function ponerP(){
  p02.style.display = "inline-block";
}

botonExtincion.addEventListener("click", quitarP);
botonExtincion.addEventListener("dblclick", ponerP);
