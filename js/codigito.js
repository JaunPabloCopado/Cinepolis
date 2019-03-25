function inicio() {
	var boton = document.getElementsById("boton");
    boton.addEventListener("click", cambiar);
	// body...
}
 function cambiar() {

 	var lista = ["#f00","#cdd","#000","#abc","#cff"];
 	var div = document.getElementsById("body");

 	div.style.background = lista[Math.floor(Math.random() * lista.length)];
 	// body...
 }