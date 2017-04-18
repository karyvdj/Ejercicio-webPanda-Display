// alert("hola")
var botonExtincion = document.getElementById('extincion');
var botonFotos = document.getElementById('fotos');
var fotos = document.getElementsByClassName('imagenBoton');

var p02 = document.getElementById('p02');
var borrar = document.getElementsByClassName('cerrar');

function quitarP(){
  p02.style.display = "none";
}

function ponerP(){
  p02.style.display = "inline-block";
}

botonExtincion.addEventListener("click", quitarP);
botonExtincion.addEventListener("dblclick", ponerP);

for (var i = 0; i < fotos.length; i++) {
  fotos[i].addEventListener("click", cerrar);
}

function cerrar() {
  this.style.display = "none";
}

borrar.addEventListener("click", cerrar);
